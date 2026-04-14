import type {
  Article3D,
  Box3Like,
  I3DElement,
  IOrderInputData,
  IOutputFileEntry,
  Matrix4Like,
  Part3D,
  PlanViewDefinition,
  PlanViewDirection2d,
  RoomDrawing2D,
  RoomDrawing2DOptions,
  RoomScene3DOptions,
  SvgPartView2D,
  SvgPlanViewOutput,
  Vector3Like,
  Volume3D,
  WallFilter,
  WallSegment,
} from '../drawing-api';
import { PlanViewType } from '../drawing-api';
import type { PosContour } from './room-scene-3d';
import {
  findWallSegmentsAroundGroup,
  newBox3Like,
  newMatrix4Like,
  newThreeMatrix4,
  newThreeVector3,
  newVector3Like,
  RoomScene3D,
  setOrderLineVisibility,
  setPartVisibility,
  setWallVisibility,
} from './room-scene-3d';
import type { IThreeServices } from '../drawing-api-implementation';
import { calculatesDimensionPoints } from '../drawing-api-implementation';
import {
  Box3,
  MathUtils,
  Matrix4,
  OrthographicCamera,
  Vector3,
  type Scene,
} from 'three';

export const defaultRoomDrawing2DOptions: RoomDrawing2DOptions = {
  sceneMargin: 300,
  svgOriginalSceneSize: false,
  svgSize: 1024,
  room3d: {
    part: {
      showOpen: false,
      showDocking: false,
      transparentParts: false,
      wireFrame: true,
      surface: true,
      keepMeshMaterials: true,
      surfaceColor: 0xd0d0d0,
      meshColorScale: 0.5,
    },
    wall: {
      wireFrame: true,
      surface: true,
      wallColor: 0xa0a0a0,
    },
  },
};

export const newRoomDrawing2D = async (
  threeServices: IThreeServices,
  orderInputData: IOrderInputData,
  options?: RoomDrawing2DOptions
): Promise<RoomDrawing2D> => {
  const roomDrawing = new RoomDrawing2DGenerator(
    threeServices,
    orderInputData,
    options,
    undefined
  );
  await roomDrawing.generateScene3D();
  return roomDrawing;
};

class RoomDrawing2DGenerator implements RoomDrawing2D {
  private _threeServices: IThreeServices;
  private _sceneMargin = 100;
  private _svgOriginalSceneSize = false;
  private _svgSize = 1024;
  private _discardPartByNamePattern = new RegExp('^Drilling');
  private _roomOptions: RoomScene3DOptions | undefined;
  private _orderInputData: IOrderInputData;
  private _roomScene3D: RoomScene3D | null = null;
  private _planViews: PlanViewDefinition[] | undefined;
  private _defaultRooms: PosContour[] | undefined;
  private _exportGlb = true;
  private _svgDebugPolygons = true;
  private _svgDebugDimension = true;

  static async fromOrderData(
    threeServices: IThreeServices,
    orderInputData: IOrderInputData,
    options?: RoomDrawing2DOptions
  ): Promise<RoomDrawing2DGenerator> {
    const roomDrawing = new RoomDrawing2DGenerator(
      threeServices,
      orderInputData,
      options
    );
    await roomDrawing.generateScene3D();
    return roomDrawing;
  }

  get scene(): Scene | null {
    return this._roomScene3D?.scene ?? null;
  }

  get scene3D(): RoomScene3D | null {
    return this._roomScene3D;
  }

  get sceneBox(): Box3Like {
    return newBox3Like(this._roomScene3D?.box ?? new Box3());
  }

  get walls(): WallSegment[] {
    return this._roomScene3D?.walls ?? [];
  }

  public get articles(): Article3D[] {
    return this._roomScene3D?.getArticles() ?? [];
  }

  constructor(
    threeServices: IThreeServices,
    orderInputData: IOrderInputData,
    options?: RoomDrawing2DOptions,
    planViews?: PlanViewDefinition[]
  ) {
    this._threeServices = threeServices;
    this._sceneMargin = options?.sceneMargin ?? this._sceneMargin;
    this._svgOriginalSceneSize =
      options?.svgOriginalSceneSize ?? this._svgOriginalSceneSize;
    this._svgSize = options?.svgSize ?? this._svgSize;
    this._roomOptions = options?.room3d;
    this._orderInputData = orderInputData;
    this._planViews = planViews;
  }

  public async generate(): Promise<Map<string, IOutputFileEntry>> {
    if (!this._roomScene3D) {
      await this.generateScene3D();
    }
    const result = new Map<string, IOutputFileEntry>();
    const svgViewOutputs = this._generateSvgViewsWithDebugOutput();
    for (const svgOutput of svgViewOutputs) {
      const svgPlanView = await this._threeServices.generateOptimizedSvgOutput(
        svgOutput.planView.name,
        svgOutput.svgElement.outerHTML
      );
      result.set(svgPlanView.fileName, svgPlanView);
    }
    if (this._exportGlb) {
      const glbExport = await this._exportGlbFromScene3D();
      if (glbExport) {
        result.set(glbExport.fileName, glbExport);
      }
    }
    return result;
  }

  public async generateScene3D() {
    await this._parseOrderAndCreateScene3D();
  }

  public generateSvgViews(
    planViews?: PlanViewDefinition[]
  ): SvgPlanViewOutput[] {
    const viewsToGenerate = planViews ?? this._planViews;
    if (!viewsToGenerate) {
      return [];
    }
    const svgOutputs: SvgPlanViewOutput[] = [];
    for (const planView of viewsToGenerate) {
      const svgOutput = this._drawPlanViewSvg(planView);
      if (svgOutput) {
        svgOutputs.push(svgOutput);
      }
    }
    return svgOutputs;
  }

  private _generateSvgViewsWithDebugOutput(
    planViews?: PlanViewDefinition[]
  ): SvgPlanViewOutput[] {
    const viewsToGenerate =
      planViews ?? this._planViews ?? this.findThePlanViewsAutomatically();
    const svgOutputs: SvgPlanViewOutput[] =
      this.generateSvgViews(viewsToGenerate);
    for (const svgOutput of svgOutputs) {
      if (svgOutput) {
        if (this._svgDebugPolygons) {
          this._addDebugPolygonToDrawing(svgOutput);
        }
        if (this._svgDebugDimension) {
          this._addDebugDimensionToDrawing(svgOutput.planView, svgOutput);
        }
      }
    }
    return svgOutputs;
  }

  private async _parseOrderAndCreateScene3D(): Promise<void> {
    this._roomScene3D = new RoomScene3D(
      this._threeServices,
      undefined,
      this._roomOptions
    );
    await this._roomScene3D.fromFullOrderLines(
      this._orderInputData.fullOrderLineGroups,
      this._orderInputData.orderData?.rooms ?? this._defaultRooms ?? []
    );
  }

  private async _exportGlbFromScene3D(): Promise<IOutputFileEntry | null> {
    if (this._roomScene3D?.scene) {
      return await glbFromScene(this._threeServices, 'room-scene', this);
    }
    return null;
  }

  public findThePlanViewsAutomatically(): PlanViewDefinition[] {
    if (!this._roomScene3D) {
      return [];
    }
    const planViewDefinitions: PlanViewDefinition[] = [];
    const partFilter = (part: I3DElement) =>
      !this._discardPartByNamePattern.test(part._id);
    const floorPlanOrientation = planToViewOrientation(PlanViewType.FloorPlan);
    const floorPlanView: PlanViewDefinition = {
      name: 'floor-plan',
      type: PlanViewType.FloorPlan,
      partFilter,
      ...planViewVolumeForSceneBox(
        floorPlanOrientation,
        newBox3Like(this._roomScene3D.box),
        this._sceneMargin
      ),
    };
    planViewDefinitions.push(floorPlanView);

    const wallsSegmentsAroundGroup = findWallSegmentsAroundGroup(
      this._roomScene3D.scene
    );
    if (!wallsSegmentsAroundGroup?.length) {
      return planViewDefinitions;
    }
    const wallIds = wallsSegmentsAroundGroup.map(
      (segment) => segment.wallSegmentId
    );
    const wallFilter: WallFilter = (wall: WallSegment) =>
      wallIds.find((wallId) => wallId === wall.wallSegmentId) !== undefined;
    setWallVisibility(this._roomScene3D.scene, wallFilter, true, false);
    const sceneBox = new Box3().setFromObject(this._roomScene3D.scene);
    setWallVisibility(this._roomScene3D.scene, null, true, true);

    for (
      let segmentIndex = 0;
      segmentIndex < wallsSegmentsAroundGroup.length;
      segmentIndex++
    ) {
      const wallSegment = wallsSegmentsAroundGroup[segmentIndex];
      const elevationDirection = wallSegment.directionToWall;
      const elevationOrientation = planToViewOrientation(
        PlanViewType.Elevation,
        elevationDirection
      );
      const elevationView: PlanViewDefinition = {
        name: `elevation-${segmentIndex}`,
        type: PlanViewType.Elevation,
        elevationDirection,
        wallFilter,
        partFilter,
        ...planViewVolumeForSceneBox(
          elevationOrientation,
          newBox3Like(sceneBox),
          this._sceneMargin
        ),
      };
      planViewDefinitions.push(elevationView);
    }

    return planViewDefinitions;
  }

  private _drawPlanViewSvg(
    planView: PlanViewDefinition
  ): SvgPlanViewOutput | null {
    if (!this._roomScene3D) {
      return null;
    }
    const cameraForView = newPlanCameraFromView(planView);

    setWallVisibility(
      this._roomScene3D.scene,
      planView.wallFilter,
      true,
      false
    );
    setOrderLineVisibility(
      this._roomScene3D.scene,
      planView.orderLineFilter,
      true,
      false
    );
    setPartVisibility(
      this._roomScene3D.scene,
      planView.partFilter,
      true,
      false
    );

    let projectedWidth = Math.abs(planView.right - planView.left);
    let projectedHeight = Math.abs(planView.top - planView.bottom);
    let svgWidth = this._svgOriginalSceneSize ? projectedWidth : this._svgSize;
    let svgHeight = this._svgOriginalSceneSize
      ? projectedHeight
      : this._svgSize;
    if (!this._svgOriginalSceneSize && projectedWidth && projectedHeight) {
      const aspectRatio = projectedWidth / projectedHeight;
      if (aspectRatio >= 1) {
        svgHeight = Math.round(svgWidth / aspectRatio);
      } else {
        svgWidth = Math.round(svgHeight * aspectRatio);
      }
    }
    const svgElement = this._threeServices.renderSvg(
      this._roomScene3D.scene,
      cameraForView,
      svgWidth,
      svgHeight
    );

    setWallVisibility(this._roomScene3D.scene, null, true, true);
    setOrderLineVisibility(this._roomScene3D.scene, null, true, true);
    setPartVisibility(this._roomScene3D.scene, null, true, true);

    const svgPlanView: SvgPlanViewOutput = {
      planView,
      svgElement,
      svgWidth,
      svgHeight,
      planToSvgScale: svgWidth / projectedWidth,
      sceneToSvgTransform: newMatrix4Like(new Matrix4()),
      articleViews: [],
    };
    this._createArticleInformation(planView, svgPlanView);

    return svgPlanView;
  }

  private _createArticleInformation(
    planView: PlanViewDefinition,
    svgPlanView: SvgPlanViewOutput
  ) {
    svgPlanView.sceneToSvgTransform = newMatrix4Like(
      svgPlanViewTransformation(planView, svgPlanView)
    );

    for (const articleObject of this.articles) {
      const bomOrderLine = articleObject.orderLine;
      const volume = articleObject.volumeAbsolute;
      if (!bomOrderLine || !volume) {
        continue;
      }
      if (planView.orderLineFilter && !planView.orderLineFilter(bomOrderLine)) {
        continue;
      }
      if (articleObject.isGenerated) {
        continue;
      }

      const polygonPoints = this._createViewPolygon(
        planView,
        svgPlanView.sceneToSvgTransform,
        volume
      );
      const parts: SvgPartView2D[] = this._createPartInformation(
        planView,
        svgPlanView,
        svgPlanView.sceneToSvgTransform,
        articleObject,
        articleObject.parts
      );
      svgPlanView.articleViews.push({
        bomOrderLineData: bomOrderLine,
        isGenerated: articleObject.isGenerated,
        polygonPoints: polygonPoints.map((p) => newVector3Like(p)),
        parts,
      });
    }
  }

  private _createPartInformation(
    planView: PlanViewDefinition,
    svgPlanView: SvgPlanViewOutput,
    svgTransform: Matrix4Like,
    articleObject: Article3D,
    partObjects: Part3D[]
  ): SvgPartView2D[] {
    const parts: SvgPartView2D[] = [];
    for (const partObject of partObjects) {
      const visualPart = partObject.part;
      const volume = partObject.volumeAbsolute;
      if (!visualPart || !volume) {
        continue;
      }
      if (
        planView.partFilter &&
        !planView.partFilter(visualPart, articleObject.orderLine)
      ) {
        continue;
      }
      const polygonPoints = this._createViewPolygon(
        planView,
        svgTransform,
        volume
      );
      const subParts: SvgPartView2D[] = this._createPartInformation(
        planView,
        svgPlanView,
        svgTransform,
        articleObject,
        partObject.parts
      );
      parts.push({
        visualPart,
        polygonPoints: polygonPoints.map((p) => newVector3Like(p)),
        parts: subParts,
      });
    }
    return parts;
  }

  private _createViewPolygon(
    planView: PlanViewDefinition,
    svgTransform: Matrix4Like,
    objectVolume: Volume3D
  ): Vector3[] {
    if (objectVolume.floorPlanPolygon.length === 0) {
      return [];
    }
    const transform = newThreeMatrix4(svgTransform);
    const projectedBottomPoints = objectVolume.floorPlanPolygon.map(
      (p: Vector3Like) => {
        return newThreeVector3(p).applyMatrix4(transform);
      }
    );

    if (planView.type === PlanViewType.FloorPlan) {
      return projectedBottomPoints;
    }

    const p0 = objectVolume.floorPlanPolygon[0];
    const topPoint = newThreeVector3(p0).addScaledVector(
      newThreeVector3(objectVolume.directionY),
      objectVolume.size._y
    );
    const projectedTopPoint = topPoint.clone().applyMatrix4(transform);

    const bottomY = projectedBottomPoints[0].y;
    const topY = projectedTopPoint.y;
    const bottomZ = projectedBottomPoints[0].z;
    const bottomXmin = Math.min(...projectedBottomPoints.map((p) => p.x));
    const bottomXmax = Math.max(...projectedBottomPoints.map((p) => p.x));
    const projectedElevationPoints: Vector3[] = [
      new Vector3(bottomXmin, bottomY, bottomZ),
      new Vector3(bottomXmax, bottomY, bottomZ),
      new Vector3(bottomXmax, topY, bottomZ),
      new Vector3(bottomXmin, topY, bottomZ),
    ];
    return projectedElevationPoints;
  }

  private _addDebugPolygonToDrawing(svgPlanView: SvgPlanViewOutput) {
    for (const articleView of svgPlanView.articleViews) {
      if (articleView.polygonPoints.length === 0) {
        return;
      }
      drawPolygonFromPoints(
        svgPlanView.svgElement,
        articleView.polygonPoints,
        true,
        'red',
        3
      );
    }
  }

  private _addDebugDimensionToDrawing(
    planView: PlanViewDefinition,
    svgPlanView: SvgPlanViewOutput
  ) {
    for (const articleView of svgPlanView.articleViews) {
      if (articleView.polygonPoints.length <= 2) {
        continue;
      }
      const { fromPoint, toPoint, labelDistance } = calculatesDimensionPoints(
        planView,
        articleView,
        200 * svgPlanView.planToSvgScale
      );
      drawDimension(
        svgPlanView.svgElement,
        fromPoint,
        toPoint,
        labelDistance,
        100 * svgPlanView.planToSvgScale,
        'mm',
        svgPlanView.planToSvgScale,
        'blue'
      );
    }
  }
}

export const glbFromScene = (
  threeServices: IThreeServices,
  name: string,
  drawinge2D: RoomDrawing2D
): Promise<IOutputFileEntry | null> => {
  if (!(drawinge2D instanceof RoomDrawing2DGenerator)) {
    return Promise.resolve(null);
  }
  const scene = drawinge2D.scene;
  if (!scene) {
    return Promise.resolve(null);
  }
  return threeServices.exportGlb(scene).then(
    // called when the gltf or glb has been generated
    function (result: ArrayBuffer | object) {
      if (result instanceof ArrayBuffer) {
        // Convert ArrayBuffer to base64 string
        const uint8Array = new Uint8Array(result);
        const binaryString = Array.from(uint8Array, (byte) =>
          String.fromCharCode(byte)
        ).join('');
        const base64String = btoa(binaryString);
        return {
          fileName: `${name}.glb`,
          content: base64String,
          contentType: 'binary',
        };
      } else {
        const output = JSON.stringify(result, undefined, 2);
        return {
          fileName: `${name}.gltf`,
          content: output,
          contentType: 'application/json',
        };
      }
    },
    // called when there is an error in the generation
    function (error: Error) {
      threeServices.logError?.(`An error happened during parsing: ${error}`);
      return null;
    }
  );
};

export interface PlanViewVolume {
  left: number;
  right: number;
  top: number;
  bottom: number;
  near: number;
  far: number;
}

export const planViewVolumeForSceneBox = (
  orientation: Matrix4,
  sceneBox: Box3Like,
  margin: number
): PlanViewVolume => {
  const projectedMin = newThreeVector3(sceneBox.min).applyMatrix4(orientation);
  const projectedMax = newThreeVector3(sceneBox.max).applyMatrix4(orientation);
  return {
    left: Math.min(projectedMin.x, projectedMax.x) - margin,
    right: Math.max(projectedMin.x, projectedMax.x) + margin,
    top: Math.max(projectedMin.y, projectedMax.y) + margin,
    bottom: Math.min(projectedMin.y, projectedMax.y) - margin,
    near: Math.min(-projectedMin.z, -projectedMax.z) - margin,
    far: Math.max(-projectedMin.z, -projectedMax.z) + margin,
  };
};

export const getCenterAndSizeForPlanView = (
  view: PlanViewDefinition
): { projectedSize: Vector3; sceneCenter: Vector3 } => {
  const transformation = viewToPlanOrientation(
    view.type,
    view.elevationDirection
  );
  const minPoint = new Vector3(view.left, view.bottom, -view.far).applyMatrix4(
    transformation
  );
  const maxPoint = new Vector3(view.right, view.top, -view.near).applyMatrix4(
    transformation
  );
  const sceneCenter = new Vector3()
    .addVectors(minPoint, maxPoint)
    .multiplyScalar(0.5);
  const projectedSize = new Vector3(
    view.right - view.left,
    view.top - view.bottom,
    view.far - view.near
  );
  return { projectedSize, sceneCenter };
};

export const planToViewTransformation = (view: PlanViewDefinition): Matrix4 => {
  const { sceneCenter } = getCenterAndSizeForPlanView(view);
  const transformation = viewToPlanOrientation(
    view.type,
    view.elevationDirection
  );
  transformation.setPosition(sceneCenter.x, sceneCenter.y, sceneCenter.z);
  return transformation.invert();
};

export const svgPlanViewTransformation = (
  view: PlanViewDefinition,
  svgPlanView: SvgPlanViewOutput
): Matrix4 => {
  const planViewTransform = planToViewTransformation(view);
  const { projectedSize } = getCenterAndSizeForPlanView(view);
  const planViewScale = new Vector3(
    Math.abs(svgPlanView.svgWidth / projectedSize.x),
    -Math.abs(svgPlanView.svgHeight / projectedSize.y),
    1
  );
  const svgTransform = new Matrix4().multiplyMatrices(
    new Matrix4().makeScale(planViewScale.x, planViewScale.y, planViewScale.z),
    planViewTransform
  );
  return svgTransform;
};

export const newPlanCameraFromView = (
  view: PlanViewDefinition
): OrthographicCamera => {
  const { sceneCenter, projectedSize } = getCenterAndSizeForPlanView(view);
  const halfProjectedSize = projectedSize.clone().multiplyScalar(0.5);
  const orientation = viewToPlanOrientation(view.type, view.elevationDirection);
  const topCamera = new OrthographicCamera(
    -halfProjectedSize.x,
    halfProjectedSize.x,
    halfProjectedSize.y,
    -halfProjectedSize.y,
    -halfProjectedSize.z,
    halfProjectedSize.z
  );
  topCamera.rotation.setFromRotationMatrix(orientation);
  topCamera.position.copy(sceneCenter);
  return topCamera;
};

export const floorPlanOrientation = (): Matrix4 => {
  return new Matrix4().lookAt(
    new Vector3(0, 0, 0),
    new Vector3(0, -1, 0),
    new Vector3(0, 0, -1)
  );
};

const elevationViewOrientation = (direction: PlanViewDirection2d): Matrix4 => {
  return new Matrix4().lookAt(
    new Vector3(0, 0, 0),
    new Vector3(direction.x, 0, -direction.y),
    new Vector3(0, 1, 0)
  );
};

export const viewToPlanOrientation = (
  type: PlanViewType,
  direction?: PlanViewDirection2d
): Matrix4 => {
  if (type === PlanViewType.FloorPlan) {
    return floorPlanOrientation();
  } else if (type === PlanViewType.Elevation && direction) {
    return elevationViewOrientation(direction);
  }
  return new Matrix4();
};

export const planToViewOrientation = (
  type: PlanViewType,
  direction?: PlanViewDirection2d
): Matrix4 => {
  return viewToPlanOrientation(type, direction).invert();
};

export const drawPolygonFromPoints = (
  svgElement: SVGElement,
  svgPoints: Vector3Like[],
  closed: boolean = true,
  color: string = 'black',
  strokeWidth: number = 1
) => {
  const pointsAttribute = svgPoints.map((p) => `${p._x},${p._y}`).join(' ');
  const polygon = document.createElementNS(
    'http://www.w3.org/2000/svg',
    closed ? 'polygon' : 'polyline'
  );
  polygon.setAttribute('points', pointsAttribute);
  polygon.setAttribute('fill', 'none');
  polygon.setAttribute('stroke', color);
  polygon.setAttribute('stroke-width', strokeWidth.toString());
  svgElement.appendChild(polygon);
};

export const drawLabel = (
  svgElement: SVGElement,
  x: number,
  y: number,
  angleDegree: number,
  text: string,
  fontSize: number,
  color: string = 'black'
): void => {
  const svgNS = 'http://www.w3.org/2000/svg';
  const textElem = document.createElementNS(svgNS, 'text');
  textElem.setAttribute('x', x.toString());
  textElem.setAttribute('y', y.toString());
  textElem.setAttribute('transform', `rotate(${angleDegree} ${x} ${y})`);
  textElem.setAttribute('fill', color);
  textElem.setAttribute('font-size', fontSize.toString());
  textElem.setAttribute('font-family', 'Arial, Helvetica, sans-serif');
  textElem.setAttribute('text-anchor', 'middle');
  textElem.setAttribute('dominant-baseline', 'text-after-edge');
  textElem.textContent = text;
  svgElement.appendChild(textElem);
};

export const drawDimension = (
  svgElement: SVGElement,
  fromPoint: Vector3Like,
  toPoint: Vector3Like,
  labelDistance: number,
  fontSize: number,
  dimUnitText: string | null = null,
  planToSvgScale: number = 1,
  color: string = 'black'
) => {
  const dimVector = new Vector3().subVectors(
    newThreeVector3(toPoint),
    newThreeVector3(fromPoint)
  );
  dimVector.multiplyScalar(1 / dimVector.length());
  const labelVector = new Vector3(
    dimVector.y * labelDistance,
    -dimVector.x * labelDistance,
    0
  );
  const angleDegree = MathUtils.radToDeg(Math.atan2(dimVector.y, dimVector.x));
  const from = newThreeVector3(fromPoint);
  const to = newThreeVector3(toPoint);
  const dimensionPoints: Vector3[] = [
    from,
    from.clone().addScaledVector(labelVector, 1),
    to.clone().addScaledVector(labelVector, 1),
    to,
  ];
  drawPolygonFromPoints(
    svgElement,
    dimensionPoints.map((p) => newVector3Like(p)),
    false,
    color,
    1
  );
  const labelPosition = new Vector3()
    .addVectors(from, to)
    .multiplyScalar(0.5)
    .addScaledVector(labelVector, 1);
  const dim = from.distanceTo(to);
  const dimText =
    Math.round(dim / planToSvgScale).toString() +
    (dimUnitText ? ` ${dimUnitText}` : '');
  drawLabel(
    svgElement,
    labelPosition.x,
    labelPosition.y,
    angleDegree,
    dimText,
    fontSize,
    color
  );
};
