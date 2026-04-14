import type {
  Article3D,
  ArticleFilter,
  IBomOrderLineData,
  IThreeDModelData,
  Part3D,
  Part3DFactoryOptions,
  PartFilter,
  PlanViewDirection2d,
  RoomScene3DOptions,
  Volume3D,
  WallFilter,
  WallSegment,
  WallSegmentProps,
  Box3Like,
  IFullOrderLineGroupData,
  IFullOrderLineData,
  IGroupPosition,
} from '../drawing-api';
import { Matrix4Like, Vector3Like } from '../drawing-api';
import { PlanViewType } from '../drawing-api';
import type { IThreeServices } from '../drawing-api-implementation';
import type { ColorRepresentation, Material, Object3D } from 'three';
import {
  Box3,
  BoxGeometry,
  Color,
  EdgesGeometry,
  Euler,
  ExtrudeGeometry,
  Group,
  LineBasicMaterial,
  LineSegments,
  MathUtils,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  Quaternion,
  Raycaster,
  Scene,
  Shape,
  ShapeUtils,
  Vector3,
} from 'three';
import { planToViewOrientation } from './room-drawing-2d';
import type { SVGResultPaths } from 'three/examples/jsm/loaders/SVGLoader.js';
import type { I3DElement } from '../../lib/internal/mod-base';

export const newThreeVector3 = (v: Vector3Like): Vector3 => {
  return new Vector3(v._x, v._y, v._z);
};

export const newVector3Like = (v: Vector3): Vector3Like => {
  return new Vector3Like(v.x, v.y, v.z);
};

export const newBox3Like = (b: Box3): Box3Like => {
  return {
    min: newVector3Like(b.min),
    max: newVector3Like(b.max),
  };
};

export const cloneVector3Like = (v: Vector3Like): Vector3Like => {
  return new Vector3Like(v._x, v._y, v._z);
};

export const newThreeMatrix4 = (m: Matrix4Like): Matrix4 => {
  return new Matrix4().fromArray(m.elements);
};

export const newMatrix4Like = (m: Matrix4): Matrix4Like => {
  return new Matrix4Like().fromArray(m.elements);
};

export interface PosContourSegment {
  angle?: number | null;
  cmd: string;
  height?: number | null;
  thickness?: number | null;
  type?: string | null;
  x: number;
  y: number;
}

export interface PosContour {
  level: number;
  segments: PosContourSegment[];
}

const newExtrudeGeometry = (
  contour: Shape,
  height: number,
  transform?: Matrix4
): ExtrudeGeometry => {
  const extrudeSettings = {
    steps: 2,
    depth: height,
    bevelEnabled: true,
    bevelThickness: 0,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 1,
  };
  const extrudeGeometry = new ExtrudeGeometry(contour, extrudeSettings);
  if (transform) {
    extrudeGeometry.applyMatrix4(transform);
  }
  return extrudeGeometry;
};

export type PartFilter3D = (part: I3DElement) => boolean;

export class RoomScene3D {
  private _scene: Scene = new Scene();
  private _box: Box3 = new Box3();
  private _partFactory: Part3DFactory;
  private _wallOptions: WallSegmentProps | undefined;
  private _partFilter?: PartFilter3D;

  constructor(
    threeServices: IThreeServices,
    partFilter?: PartFilter3D,
    options?: RoomScene3DOptions,
    constructSpecialPart?: (part: I3DElement) => Object3D
  ) {
    this._partFilter = partFilter;
    this._partFactory = new Part3DFactory(
      threeServices,
      partFilter,
      options?.part,
      constructSpecialPart
    );
    this._wallOptions = options?.wall;
  }

  public get scene(): Scene {
    return this._scene;
  }

  public get box(): Box3 {
    return this._box;
  }

  public get walls(): WallSegment[] {
    const wallGroup = this._scene.getObjectByName('walls');
    const walls: WallSegment[] = [];
    wallGroup?.traverse((node) => {
      if (node instanceof WallSegmentObject3D) {
        walls.push(node);
      }
    });
    return walls;
  }

  public getArticles(): Article3D[] {
    const articles: Article3D[] = [];
    this._scene.traverse((node) => {
      if (node instanceof ArticleObject3D) {
        articles.push(node);
      }
    });
    return articles;
  }

  public async fromFullOrderLines(
    fullOrderLineGroups: IFullOrderLineGroupData[],
    rooms: PosContour[]
  ): Promise<void> {
    const mainGroup = new Group();
    mainGroup.name = 'main-group';
    this._scene.add(mainGroup);
    const groupsGroup = new Group();
    groupsGroup.name = 'pos-groups';
    mainGroup.add(groupsGroup);
    for (const fullOrderLineGroup of fullOrderLineGroups) {
      await this._createGroupOfModulesAndAddToScene(
        groupsGroup,
        fullOrderLineGroup
      );
    }
    this._addWallGeometryToScene(rooms, mainGroup);
    this._box = new Box3().setFromObject(this._scene);
  }

  private async _createGroupOfModulesAndAddToScene(
    parent: Object3D,
    fullGroupData: IFullOrderLineGroupData
  ): Promise<void> {
    const groupOfModules = new Group();
    groupOfModules.name =
      'pos-group-' + (fullGroupData.groupPos.calcGroup ?? '');
    parent.add(groupOfModules);
    this._setPositionOfGroupOfModules(groupOfModules, fullGroupData);
    groupOfModules.updateMatrixWorld(true);
    await this._generateRootModules(
      groupOfModules,
      fullGroupData.groupPos,
      fullGroupData.items
    );
  }

  private _setPositionOfGroupOfModules(
    groupOfModules: Object3D,
    fullGroupData: IFullOrderLineGroupData
  ): void {
    const groupPos = fullGroupData.groupPos.calcGroupPos;
    if (!groupPos) {
      return;
    }
    groupOfModules.position.set(groupPos[0], groupPos[1], groupPos[2]);
    if (fullGroupData.groupPos.calcGroupRotationY) {
      groupOfModules.rotation.y = MathUtils.degToRad(
        fullGroupData.groupPos.calcGroupRotationY
      );
    }
  }

  private async _generateRootModules(
    parent: Object3D,
    groupPosition: IGroupPosition,
    fullOrderLines: IFullOrderLineData[]
  ): Promise<void> {
    for (const orderLine of fullOrderLines) {
      await this._createRootModuleObject(
        parent,
        groupPosition,
        orderLine.orderData
      );
    }
  }

  private async _createRootModuleObject(
    parent: Object3D,
    groupPosition: IGroupPosition,
    bomOrderLine: IBomOrderLineData
  ): Promise<Object3D | null> {
    if (!bomOrderLine.bomEntries?.length) {
      return null;
    }
    const hideParent = (key: string, value: any): any => {
      if (key == 'parent') {
        return undefined;
      }
      if (key == 'parentBase') {
        return undefined;
      }
      return value;
    };
    const drawParts = JSON.parse(
      JSON.stringify(bomOrderLine.bomEntries, hideParent)
    ) as I3DElement[];
    const rootObject = ArticleObject3D.fromBomOrderLine(
      parent,
      groupPosition,
      bomOrderLine
    );
    await this._createPartsRecursive(rootObject, drawParts);
    return rootObject;
  }

  private async _createPartsRecursive(
    parentObject: Object3D,
    parts: I3DElement[]
  ): Promise<void> {
    for (const part of parts) {
      if (this._partFilter && !this._partFilter(part)) {
        continue;
      }
      await this._partFactory.newPart(parentObject, part);
      const children = (part as any)._childParts as I3DElement[];
      if (children && children?.length > 0) {
        await this._createPartsRecursive(parentObject, children);
      }
    }
  }

  private _addWallGeometryToScene(room: PosContour[], parent: Object3D) {
    if (!room?.length) {
      return;
    }
    const wallGroup = new Group();
    wallGroup.name = 'walls';
    parent.add(wallGroup);

    const wallSegments: WallSegmentObject3D[] = [];
    for (const contour of room) {
      for (let segmentI = 1; segmentI < contour.segments.length; segmentI++) {
        const segment = contour.segments[segmentI];
        const prevSegment = contour.segments[segmentI - 1];
        if (
          segment.cmd !== 'L' ||
          segment.type !== 'wall' ||
          !segment.height ||
          !segment.thickness
        ) {
          continue;
        }
        const segmentGroup = new WallSegmentObject3D().fromSegmentStartAndEnd(
          prevSegment,
          segment
        );
        segmentGroup.wallSegmentId = segmentI;
        wallSegments.push(segmentGroup);
      }
    }
    for (let i = 0; i < wallSegments.length; i++) {
      const currentSegment = wallSegments[i];
      const nextSegment = wallSegments[(i + 1) % wallSegments.length];
      WallSegmentObject3D.createJoint(currentSegment, nextSegment);
    }
    for (const wallSegment of wallSegments) {
      wallSegment.createGeometry(this._wallOptions);
      wallGroup.add(wallSegment);
    }
  }
}

class ObjectVolume3D implements Volume3D {
  public position: Vector3Like = new Vector3Like();
  public rotationY: number;
  public directionX: Vector3Like = new Vector3Like();
  public directionY: Vector3Like = new Vector3Like();
  public directionZ: Vector3Like = new Vector3Like();
  public size: Vector3Like = new Vector3Like();
  public floorPlanPolygon: Vector3Like[];

  constructor(
    matrix: Matrix4,
    width?: number,
    height?: number,
    depth?: number
  ) {
    const position = new Vector3();
    const quaternion = new Quaternion();
    const scale = new Vector3();
    matrix.decompose(position, quaternion, scale);
    this.position = newVector3Like(position);
    const finalEuler = new Euler().setFromQuaternion(quaternion);
    this.rotationY = finalEuler.y;
    const directionX = new Vector3();
    const directionY = new Vector3();
    const directionZ = new Vector3();
    matrix.extractBasis(directionX, directionY, directionZ);
    this.directionX = newVector3Like(directionX);
    this.directionY = newVector3Like(directionY);
    this.directionZ = newVector3Like(directionZ);
    this.size = new Vector3Like(width ?? 0, height ?? 0, depth ?? 0);

    const p0 = position.clone();
    const p1 = p0.clone().addScaledVector(directionZ, this.size._z);
    const p2 = p1.clone().addScaledVector(directionX, this.size._x);
    const p3 = p0.clone().addScaledVector(directionX, this.size._x);
    this.floorPlanPolygon = [p0, p1, p2, p3].map((v) => newVector3Like(v));
  }
}

class ArticleObject3D extends Group implements Article3D {
  private _orderLine: IBomOrderLineData | undefined = undefined;
  private _isGenerated: boolean = false;
  private _volumeAbsolute: Volume3D | undefined = undefined;
  floorPlanPolygon: any;

  static fromBomOrderLine(
    parent: Object3D,
    groupPosition: IGroupPosition,
    bomOrderLine: IBomOrderLineData
  ): ArticleObject3D {
    const orderLineContainer = new ArticleObject3D();
    parent.add(orderLineContainer);
    orderLineContainer.updateMatrixWorld(true);
    orderLineContainer.name = bomOrderLine.orderLineId;
    orderLineContainer._orderLine = bomOrderLine;
    orderLineContainer._create3dVolume(groupPosition);
    return orderLineContainer;
  }

  public get orderLine(): IBomOrderLineData | undefined {
    return this._orderLine!;
  }

  public get isGenerated(): boolean {
    return this._isGenerated;
  }

  public get volumeAbsolute(): Volume3D | undefined {
    return this._volumeAbsolute;
  }

  public get parts(): Part3D[] {
    return this.children.filter(
      (child) => child instanceof PartObject3D
    ) as Part3D[];
  }

  private _create3dVolume(groupPos: IGroupPosition) {
    if (!this._orderLine) {
      return;
    }
    const itemData = this._orderLine.orderItem as any;
    this._isGenerated = (itemData as any)?._isGenerated ?? false;
    const posData = (itemData as any)?._posData;
    const width = posData?.get('width') ?? itemData?.mod_Width ?? 0;
    const height = posData?.get('height') ?? itemData?.mod_Height ?? 0;
    const depth = posData?.get('depth') ?? itemData?.mod_Depth ?? 0;
    const articlePosition = (itemData as any)?._articlePos;
    const articleRotationY =
      articlePosition?.rotationY ?? (itemData as any)?._rotationY ?? 0;
    if (!width || !height || !depth || !articlePosition) {
      return;
    }
    const groupPosition = groupPos.calcGroupPos ?? this._orderLine.calcGroupPos;
    const groupRotation =
      groupPos.calcGroupRotationY ?? this._orderLine.calcGroupRotationY ?? 0;
    const articleMatrix = createMatrix4FromRotationYAndPosition(
      MathUtils.degToRad(articleRotationY),
      new Vector3(articlePosition.x, articlePosition.y, articlePosition.z)
    );
    const groupMatrix = createMatrix4FromRotationYAndPosition(
      MathUtils.degToRad(groupRotation),
      new Vector3(
        groupPosition?.[0] ?? 0,
        groupPosition?.[1] ?? 0,
        groupPosition?.[2] ?? 0
      )
    );
    const finalMatrix = new Matrix4().multiplyMatrices(
      groupMatrix,
      articleMatrix
    );

    this._volumeAbsolute = new ObjectVolume3D(
      finalMatrix,
      width,
      height,
      depth
    );
  }
}

class PartObject3D extends Group implements Part3D {
  private _part?: I3DElement = undefined;
  private _volumeInArticle: Volume3D | undefined = undefined;
  private _volumeAbsolute: Volume3D | undefined = undefined;

  static fromPart(
    parent: Object3D,
    part: I3DElement,
    showOpen: boolean,
    parentPartId?: string
  ): PartObject3D {
    const partContainer = new PartObject3D();
    parent.add(partContainer);

    partContainer._part = part;
    partContainer.name = (part as any)._partId ?? 'part-' + part._id;
    if (part.parentId) {
      partContainer.name += '-' + part.parentId;
    }
    if (parentPartId) {
      partContainer.name += '-' + parentPartId;
    }
    if (showOpen && part._openFullMatrix) {
      partContainer.applyMatrix4(newThreeMatrix4(part._openFullMatrix));
    } else if (part._fullMatrix) {
      partContainer.applyMatrix4(newThreeMatrix4(part._fullMatrix));
    }
    partContainer._create3dVolume();
    return partContainer;
  }

  public get part(): I3DElement | undefined {
    return this._part;
  }

  public get volumeInArticle(): Volume3D | undefined {
    return this._volumeInArticle;
  }

  public get volumeAbsolute(): Volume3D | undefined {
    return this._volumeAbsolute;
  }

  public get parts(): Part3D[] {
    return this.children.filter(
      (child) => child instanceof PartObject3D
    ) as Part3D[];
  }

  private _create3dVolume() {
    if (!this._part) {
      return;
    }
    const width = this._part._dimx;
    const height = this._part._dimy;
    const depth = this._part._dimz;
    this.updateMatrixWorld(true);
    this._volumeInArticle = new ObjectVolume3D(
      this.matrix,
      width,
      height,
      depth
    );
    this._volumeAbsolute = new ObjectVolume3D(
      this.matrixWorld,
      width,
      height,
      depth
    );
  }
}

class Part3DFactory {
  private _threeServices: IThreeServices;
  private _partFilter?: PartFilter3D;
  private _constructSpecialPart?: (part: I3DElement) => Object3D;
  private _showOpen: boolean = false;
  private _showDocking: boolean = false;
  private _transparentParts: boolean = false;
  private _surface: boolean = true;
  private _wireFrame: boolean = true;
  private _keepMeshMaterials: boolean = false;
  private _surfaceColor: ColorRepresentation = 0xd0d0d0;
  private _meshColorScale: number = 0.5;
  private _object3dCache = new Map<string, Object3D>();
  private _svgShapeCache = new Map<string, Shape[]>();

  constructor(
    threeServices: IThreeServices,
    partFilter?: PartFilter3D,
    options?: Part3DFactoryOptions,
    constructSpecialPart?: (part: I3DElement) => Object3D
  ) {
    this._threeServices = threeServices;
    this._partFilter = partFilter;
    this._constructSpecialPart = constructSpecialPart;
    this._showOpen = options?.showOpen ?? this._showOpen;
    this._showDocking = options?.showDocking ?? this._showDocking;
    this._transparentParts =
      options?.transparentParts ?? this._transparentParts;
    this._surface = options?.surface ?? this._surface;
    this._wireFrame = options?.wireFrame ?? this._wireFrame;
    this._keepMeshMaterials =
      options?.keepMeshMaterials ?? this._keepMeshMaterials;
    this._surfaceColor = options?.surfaceColor ?? this._surfaceColor;
    this._meshColorScale = options?.meshColorScale ?? this._meshColorScale;
  }

  public newPart(parent: Object3D, part: I3DElement): Promise<void> {
    return this._createPart(parent, part);
  }

  private _newPartMaterial(originalMaterial?: Material): MeshBasicMaterial {
    let color = this._surfaceColor;
    const meshOriginalColor = (originalMaterial as MeshBasicMaterial)?.color;
    if (meshOriginalColor instanceof Color) {
      color = meshOriginalColor.getHex();
      const grayScale =
        0.299 * meshOriginalColor.r +
        0.587 * meshOriginalColor.g +
        0.114 * meshOriginalColor.b;
      color = new Color(grayScale, grayScale, grayScale)
        .multiplyScalar(this._meshColorScale)
        .getHex();
    }
    const partMaterial = new MeshBasicMaterial({ color });
    if (this._transparentParts) {
      partMaterial.color.setHex(0x333333);
      partMaterial.transparent = true;
      partMaterial.opacity = 0.2;
    }
    return partMaterial;
  }

  private _loadSvgShapesFromCacheOrParse(
    part: I3DElement,
    svg: string
  ): Shape[] {
    if (this._svgShapeCache.has(svg)) {
      return this._svgShapeCache.get(svg)!;
    }

    let shapes: Shape[] = [];
    try {
      const svgData = this._threeServices.parseSvg(svg);
      if (svgData.paths.length <= 0) {
        const parentName = (part as any)._partId;
        const partName = parentName ? parentName + ':' + part._id : part._id;
        this._threeServices.logError?.(
          `SVG data does not contain any paths! Part '${partName}' will not be drawn! Is the SVG valid? (SVG: ${svg})`
        );
      }
      svgData.paths.forEach((path: SVGResultPaths) => {
        const pathIsCCW =
          path.subPaths.length > 0 &&
          !ShapeUtils.isClockWise(path.subPaths[0].getPoints());
        shapes = shapes.concat(path.toShapes(pathIsCCW));
      });
    } catch (e) {
      console.error(
        'Failed to parse SVG for extrude part: ' + svg + ' exception: ' + e
      );
    }

    this._svgShapeCache.set(svg, shapes);
    return shapes;
  }

  private async _loadObject3DFromCacheOrFetch(
    part: I3DElement,
    url: string
  ): Promise<Object3D> {
    if (this._object3dCache.has(url)) {
      return this._object3dCache.get(url)!.clone();
    }

    let obj: Object3D;
    try {
      const result = await fetch(url);
      const md = await result!.text();
      obj = this._threeServices.parseObj(md);
      if (!this._keepMeshMaterials) {
        obj.traverse((child) => {
          if ((child as Mesh).isMesh) {
            (child as Mesh).material = this._newPartMaterial(
              (child as Mesh).material as Material
            );
          }
        });
      }
    } catch (e) {
      const parentName = (part as any)._partId;
      const partName = parentName ? parentName + ':' + part._id : part._id;
      console.error(
        'Failed to fetch 3d model for part: ' + partName + ' exception: ' + e
      );
      obj = new Group();
      this._addMissingPart(part, this._newPartMaterial(), obj);
    }

    this._object3dCache.set(url, obj);
    return obj.clone();
  }

  private _getPartPosition(part: I3DElement): Vector3 {
    return new Vector3(
      part._x + part._dimx / 2,
      part._y + part._dimy / 2,
      part._z + part._dimz / 2
    );
  }

  private async _createPart(
    parent: Object3D,
    part: I3DElement,
    parentPartId?: string
  ) {
    if ((part as any)._hidden) {
      return;
    }
    const partGroup = PartObject3D.fromPart(
      parent,
      part,
      this._showOpen,
      parentPartId
    );

    if ((part as any)._specialType) {
      const specialPart = this._showDocking
        ? this._constructSpecialPart?.(part)
        : null;
      if (specialPart) {
        partGroup.add(specialPart);
      }
    } else if (part._extrude) {
      this._addNewExtrudePart(part, partGroup);
    } else if (
      this._showOpen &&
      part._threedModelOpen &&
      part._threedModelOpen._3dUrl
    ) {
      await this._addNewMeshPart(part, part._threedModelOpen, partGroup);
    } else if (part._threedModel && part._threedModel._3dUrl) {
      if (!this._showOpen || part._hideThreedModelWhenOpen != true) {
        await this._addNewMeshPart(part, part._threedModel, partGroup);
      }
    } else {
      this._addNewBoxPart(part, partGroup);
    }

    if ((part as any)._3DElements) {
      for (const element of (part as any)._3DElements as I3DElement[]) {
        if (this._partFilter && !this._partFilter(element)) {
          continue;
        }
        await this._createPart(parent, element, (part as any)._partId);
      }
    }
  }

  private _addNewBoxPart(part: I3DElement, grp: Object3D) {
    const material = this._newPartMaterial();
    this._addNewBoxPartWithMaterial(part, grp, material);
  }

  private _addNewBoxPartWithMaterial(
    part: I3DElement,
    grp: Object3D,
    material: Material
  ) {
    const geometry2 = new BoxGeometry(part._dimx, part._dimy, part._dimz);
    const position = this._getPartPosition(part);

    if (this._wireFrame) {
      const geo = new EdgesGeometry(geometry2);
      const mat = new LineBasicMaterial({ color: 0x000000, linewidth: 1 });
      const wireframe = new LineSegments(geo, mat);
      wireframe.position.copy(position);
      grp.add(wireframe);
    }

    if (this._surface) {
      const mesh = new Mesh(geometry2, material);
      mesh.position.copy(position);
      grp.add(mesh);
    }
  }

  private _addNewExtrudePart(part: I3DElement, grp: Object3D) {
    if (!part._extrude) {
      return;
    }
    const shapes = this._loadSvgShapesFromCacheOrParse(part, part._extrude.svg);
    const rot = new Matrix4();
    let extrusionDepth = part._dimz;
    if (part._extrude.direction == 'x') {
      extrusionDepth = part._dimx;
      rot.makeRotationAxis(new Vector3(0, 1, 0), MathUtils.degToRad(270));
      extrusionDepth *= -1;
    } else if (part._extrude.direction == 'y') {
      extrusionDepth = part._dimy;
      rot.makeRotationAxis(new Vector3(1, 0, 0), MathUtils.degToRad(90));
      extrusionDepth *= -1;
    }

    const material = this._newPartMaterial();
    shapes.forEach((shape) => {
      let geometry2 = newExtrudeGeometry(shape, extrusionDepth, rot);
      const position = new Vector3(part._x, part._y, part._z);

      if (this._wireFrame) {
        let geo = new EdgesGeometry(geometry2);
        let mat = new LineBasicMaterial({ color: 0x000000, linewidth: 1 });
        const wireframe = new LineSegments(geo, mat);
        wireframe.position.copy(position);
        grp.add(wireframe);
      }

      if (this._surface) {
        const mesh = new Mesh(geometry2, material);
        mesh.position.copy(position);
        grp.add(mesh);
      }
    });
  }

  private async _addNewMeshPart(
    part: I3DElement,
    model: IThreeDModelData,
    grp: Object3D
  ) {
    if (!this._surface) {
      return;
    }
    const objGrp = await this._loadObject3DFromCacheOrFetch(part, model._3dUrl);

    let bbox = new Box3().setFromObject(objGrp);
    let bsize = new Vector3(0, 0, 0);
    bbox.getSize(bsize);
    let m4 = new Matrix4();
    m4.scale(
      new Vector3(
        part._dimx / bsize.x,
        part._dimy / bsize.y,
        part._dimz / bsize.z
      )
    );
    objGrp.applyMatrix4(m4);

    bbox = new Box3().setFromObject(objGrp);
    m4 = new Matrix4();
    m4.setPosition(
      part._x - bbox.min.x,
      part._y - bbox.min.y,
      part._z - bbox.min.z
    );
    objGrp.applyMatrix4(m4);

    grp.add(objGrp);
  }

  private _addMissingPart(
    part: I3DElement,
    material: MeshBasicMaterial,
    grp: Object3D
  ) {
    material.color = new Color(0xff0000);
    this._addNewBoxPartWithMaterial(part, grp, material);
  }
}

class WallSegmentObject3D extends Group implements WallSegment {
  public wallSegmentId: number = 0;
  public segmentStart: Vector3Like = new Vector3Like();
  public segmentEnd: Vector3Like = new Vector3Like();
  public segmentBackStart: Vector3Like = new Vector3Like();
  public segmentBackEnd: Vector3Like = new Vector3Like();
  public direction: Vector3Like = new Vector3Like();
  public wallLength: number = 0;
  public wallThickness: number = 120;
  public wallHeight: number = 2800;
  public rotationY: number = 0;
  public normalToWall: Vector3Like = new Vector3Like();
  public directionToWall: PlanViewDirection2d = { x: 0, y: -1 };
  public distanceToWall: number = 0;
  public left: number = 0;
  public right: number = 0;

  public fromSegmentStartAndEnd(
    from: PosContourSegment,
    to: PosContourSegment
  ) {
    this.wallThickness = to.thickness ?? 120;
    this.wallHeight = to.height ?? 2800;
    const segmentStart = new Vector3(from.x, 0, -from.y);
    this.segmentStart = newVector3Like(segmentStart);
    const segmentEnd = new Vector3(to.x, 0, -to.y);
    this.segmentEnd = newVector3Like(segmentEnd);
    const direction = new Vector3().subVectors(segmentEnd, segmentStart);
    this.wallLength = direction.length();
    direction.multiplyScalar(1 / this.wallLength);
    this.direction = newVector3Like(direction);
    const normalToWall = new Vector3(-this.direction._z, 0, this.direction._x);
    this.normalToWall = newVector3Like(normalToWall);
    this.rotationY =
      -Math.atan2(this.normalToWall._z, this.normalToWall._x) - Math.PI / 2;
    this.segmentBackStart = newVector3Like(
      segmentStart.clone().addScaledVector(normalToWall, this.wallThickness)
    );
    this.segmentBackEnd = newVector3Like(
      segmentEnd.clone().addScaledVector(normalToWall, this.wallThickness)
    );
    this.directionToWall = {
      x: this.normalToWall._x,
      y: -this.normalToWall._z,
    };
    const wallToViewOrientation = planToViewOrientation(
      PlanViewType.Elevation,
      this.directionToWall
    );
    const p0 = segmentStart.clone().applyMatrix4(wallToViewOrientation);
    const p1 = segmentEnd.clone().applyMatrix4(wallToViewOrientation);
    this.left = Math.min(p0.x, p1.x);
    this.right = Math.max(p0.x, p1.x);
    this.distanceToWall = -p0.z;
    return this;
  }

  public createGeometry(props?: WallSegmentProps): void {
    const segmentCenter = new Vector3()
      .addVectors(
        newThreeVector3(this.segmentStart),
        newThreeVector3(this.segmentBackEnd)
      )
      .multiplyScalar(0.5);
    this.position.copy(segmentCenter);

    const wallContour = new Shape();
    wallContour.moveTo(
      this.segmentStart._x - this.position.x,
      this.segmentStart._z - this.position.z
    );
    wallContour.lineTo(
      this.segmentBackStart._x - this.position.x,
      this.segmentBackStart._z - this.position.z
    );
    wallContour.lineTo(
      this.segmentBackEnd._x - this.position.x,
      this.segmentBackEnd._z - this.position.z
    );
    wallContour.lineTo(
      this.segmentEnd._x - this.position.x,
      this.segmentEnd._z - this.position.z
    );
    wallContour.lineTo(
      this.segmentStart._x - this.position.x,
      this.segmentStart._z - this.position.z
    );
    const wallGeometry = newExtrudeGeometry(
      wallContour,
      -this.wallHeight,
      new Matrix4().makeRotationX(Math.PI / 2)
    );
    if (props?.surface !== false) {
      const wallMesh = new Mesh(
        wallGeometry,
        new MeshBasicMaterial({ color: props?.wallColor ?? 0xa0a0a0 })
      );
      this.add(wallMesh);
    }
    if (props?.wireFrame !== false) {
      const edgeGeometry = new EdgesGeometry(wallGeometry);
      const wireframe = new LineSegments(
        edgeGeometry,
        new LineBasicMaterial({ color: 0x000000, linewidth: 1 })
      );
      this.add(wireframe);
    }
  }

  public isCloseTo(node: Object3D, distance: number): boolean {
    const rayStart = newThreeVector3(this.segmentStart).addScaledVector(
      newThreeVector3(this.normalToWall),
      -distance
    );
    rayStart.y = 500;
    const rayCaster = new Raycaster(
      rayStart,
      newThreeVector3(this.direction),
      0,
      this.wallLength
    );
    return rayCaster.intersectObject(node, true).length > 0;
  }

  public override copy(source: WallSegmentObject3D, recursive?: boolean): this {
    super.copy(source, recursive);
    this.wallSegmentId = source.wallSegmentId;
    this.segmentStart = cloneVector3Like(source.segmentStart);
    this.segmentEnd = cloneVector3Like(source.segmentEnd);
    this.segmentBackStart = cloneVector3Like(source.segmentBackStart);
    this.segmentBackEnd = cloneVector3Like(source.segmentBackEnd);
    this.direction = cloneVector3Like(source.direction);
    this.wallLength = source.wallLength;
    this.wallThickness = source.wallThickness;
    this.wallHeight = source.wallHeight;
    this.rotationY = source.rotationY;
    this.normalToWall = cloneVector3Like(source.normalToWall);
    return this;
  }

  public static createJoint(
    fromSegment: WallSegment,
    toSegment: WallSegment
  ): void {
    if (
      !(fromSegment instanceof WallSegmentObject3D) ||
      !(toSegment instanceof WallSegmentObject3D)
    ) {
      return;
    }
    const from = fromSegment as WallSegmentObject3D;
    const to = toSegment as WallSegmentObject3D;
    const fromSegmentEnd = newThreeVector3(from.segmentEnd);
    const toSegmentStart = newThreeVector3(to.segmentStart);
    if (fromSegmentEnd.distanceTo(toSegmentStart) > 1) {
      return;
    }
    const toDirection = newThreeVector3(to.direction);
    const toNormalToWall = newThreeVector3(to.normalToWall);
    const fromDirection = newThreeVector3(from.direction);
    const fromNormalToWall = newThreeVector3(from.normalToWall);
    const jointPoint = fromSegmentEnd
      .clone()
      .addScaledVector(
        toDirection,
        from.wallThickness / fromNormalToWall.dot(toDirection)
      )
      .addScaledVector(
        fromDirection,
        to.wallThickness / toNormalToWall.dot(fromDirection)
      );
    from.segmentBackEnd = newVector3Like(jointPoint);
    to.segmentBackStart = newVector3Like(jointPoint);
  }
}

export const findWallSegmentsAroundGroup = (
  scene: Scene
): WallSegment[] | null => {
  const wallGroup = scene.getObjectByName('walls');
  if (!wallGroup) {
    return null;
  }

  const posGroups = scene.getObjectByName('pos-groups');
  if (!posGroups) {
    return null;
  }

  const wallSegments: WallSegment[] = [];
  for (const posGroup of posGroups.children) {
    wallGroup.traverse((child) => {
      if (child instanceof WallSegmentObject3D) {
        if (child.isCloseTo(posGroup, 300)) {
          wallSegments.push(child);
        }
      }
    });
  }
  return wallSegments;
};

export const setWallVisibility = (
  scene: Scene,
  wallFilter: WallFilter | undefined | null,
  visibilityWalls: boolean,
  visibilityOfAllOtherWalls: boolean
): void => {
  const wallGroup = scene.getObjectByName('walls');
  if (!wallGroup) {
    return;
  }
  wallGroup.traverse((node) => {
    if (node instanceof WallSegmentObject3D) {
      const isInFilter = !wallFilter || wallFilter(node);
      node.visible = isInFilter ? visibilityWalls : visibilityOfAllOtherWalls;
    }
  });
};

export const setOrderLineVisibility = (
  scene: Scene,
  orderLineFilter: ArticleFilter | undefined | null,
  visibilityArticles: boolean,
  visibilityOfAllOtherArticles: boolean
): void => {
  const posGroups = scene.getObjectByName('pos-groups');
  if (!posGroups) {
    return;
  }
  for (const posGroup of posGroups.children) {
    for (const child of posGroup.children) {
      if (child instanceof ArticleObject3D && child.orderLine) {
        const isInFilter = !orderLineFilter || orderLineFilter(child.orderLine);
        child.visible = isInFilter
          ? visibilityArticles
          : visibilityOfAllOtherArticles;
      }
    }
  }
};

export const setPartVisibility = (
  scene: Scene,
  partFilter: PartFilter | undefined | null,
  visibilityParts: boolean,
  visibilityOfAllOtherParts: boolean
): void => {
  const posGroup = scene.getObjectByName('pos-group');
  if (!posGroup) {
    return;
  }
  for (const child of posGroup.children) {
    if (child instanceof ArticleObject3D == false || !child.orderLine) {
      continue;
    }
    child.traverse((node) => {
      if (node instanceof PartObject3D && node.part) {
        const isInFilter =
          !partFilter || partFilter(node.part, child.orderLine);
        node.visible = isInFilter ? visibilityParts : visibilityOfAllOtherParts;
      }
    });
  }
};

const createMatrix4FromRotationYAndPosition = (
  rotationY: number,
  position: Vector3
): Matrix4 => {
  const matrix = new Matrix4();
  matrix.makeRotationY(rotationY);
  matrix.setPosition(position);
  return matrix;
};
