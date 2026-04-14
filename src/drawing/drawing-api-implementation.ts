import type {
  Article3D,
  DimensionPoints,
  DrawingApi,
  IOrderInputData,
  IOutputFileEntry,
  PlanViewDefinition,
  RoomDrawing2D,
  RoomDrawing2DOptions,
  SvgArticleView2D,
  SvgPlanViewOutput,
  Vector3Like,
  WallSegment,
} from './drawing-api';
import { PlanViewType } from './drawing-api';
import {
  drawDimension,
  drawPolygonFromPoints,
  glbFromScene,
  newRoomDrawing2D,
} from './three-drawing/room-drawing-2d';
import {
  newThreeMatrix4,
  newThreeVector3,
  newVector3Like,
} from './three-drawing/room-scene-3d';
import type { Camera, Object3D, Scene } from 'three';
import { Vector3 } from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import type { SVGResult } from 'three/examples/jsm/loaders/SVGLoader.js';
import { SVGRenderer } from 'three/examples/jsm/renderers/SVGRenderer.js';
import { optimize } from 'svgo';

export interface IThreeServices {
  parseObj(objData: string): Object3D;
  parseSvg(svgData: string): SVGResult;
  exportGlb(scene: Object3D): Promise<ArrayBuffer | object>;
  renderSvg(
    scene: Object3D,
    camera: Camera,
    width: number,
    height: number
  ): SVGElement;
  generateOptimizedSvgOutput(
    name: string,
    svgXml: string
  ): Promise<IOutputFileEntry>;
  logError(message: string, ...optionalParams: any[]): void;
}

const isArticleCloseToWall = (
  article: Article3D,
  wallSegment: WallSegment,
  distance: number
): boolean => {
  for (const point of article.volumeAbsolute?.floorPlanPolygon ?? []) {
    const vectorToPoint = new Vector3().subVectors(
      newThreeVector3(point),
      newThreeVector3(wallSegment.segmentStart)
    );
    const distanceToWallAxis = -vectorToPoint.dot(
      newThreeVector3(wallSegment.normalToWall)
    );
    const positionAlongWall = vectorToPoint.dot(
      newThreeVector3(wallSegment.direction)
    );
    if (positionAlongWall < 0 || positionAlongWall > wallSegment.wallLength) {
      continue;
    }
    if (
      distanceToWallAxis <= distance &&
      distanceToWallAxis > -wallSegment.wallThickness
    ) {
      return true;
    }
  }
  return false;
};

export const transform3dToView = (
  point: Vector3Like,
  svgViewOutput: SvgPlanViewOutput
): Vector3Like => {
  const transform = newThreeMatrix4(svgViewOutput.sceneToSvgTransform);
  return newVector3Like(newThreeVector3(point).applyMatrix4(transform));
};

export const calculatesDimensionPoints = (
  planView: PlanViewDefinition,
  articleView: SvgArticleView2D,
  labelDistance: number
): DimensionPoints => {
  let fromPoint: Vector3Like;
  let toPoint: Vector3Like;
  if (planView.type === PlanViewType.FloorPlan) {
    fromPoint = articleView.polygonPoints[0];
    toPoint = articleView.polygonPoints[articleView.polygonPoints.length - 1];
  } else {
    fromPoint = articleView.polygonPoints[0];
    toPoint = articleView.polygonPoints[1];
    labelDistance *= -1;
  }
  return {
    fromPoint,
    toPoint,
    labelDistance,
  };
};

export const newDrawingApi = (
  logError: (message: string) => void = console.error
): DrawingApi => {
  const objLoader = new OBJLoader();
  const threeServices: IThreeServices = {
    parseObj: (objData: string): Object3D => {
      return objLoader.parse(objData);
    },
    parseSvg: (svgData: string): SVGResult => {
      const svgLoader = new SVGLoader();
      return svgLoader.parse(svgData);
    },
    exportGlb: (scene: Object3D): Promise<ArrayBuffer | object> => {
      const exporter = new GLTFExporter();
      return exporter.parseAsync(scene, { binary: true });
    },
    renderSvg: (
      scene: Scene,
      camera: Camera,
      width: number,
      height: number
    ): SVGElement =>
      new SVGPlanRenderer().renderSvgFrame(scene, camera, width, height),
    generateOptimizedSvgOutput,
    logError,
  };
  return {
    newRoomDrawing2D: (
      orderInputData: IOrderInputData,
      options?: RoomDrawing2DOptions
    ) => newRoomDrawing2D(threeServices, orderInputData, options),
    transform3dToView,
    calculatesDimensionPoints,
    isArticleCloseToWall,
    drawDimension,
    drawPolygonFromPoints,
    generateOptimizedSvgOutput,
    glbFromScene: (name: string, drawinge2D: RoomDrawing2D) =>
      glbFromScene(threeServices, name, drawinge2D),
  };
};

export class SVGPlanRenderer {
  private _svgRenderer = new SVGRenderer();

  public async renderSvg(
    name: string,
    scene: Scene,
    camera: Camera,
    width: number,
    height: number
  ): Promise<IOutputFileEntry> {
    this.renderSvgFrame(scene, camera, width, height);
    return this._exportSvg(name);
  }

  public renderSvgFrame(
    scene: Scene,
    camera: Camera,
    width: number,
    height: number
  ): SVGElement {
    this._svgRenderer.setSize(width, height);
    this._svgRenderer.setQuality('hight');
    this._svgRenderer.setPrecision(0);
    this._svgRenderer.domElement.style.display = 'block';
    this._svgRenderer.domElement.setAttribute(
      'xmlns',
      'http://www.w3.org/2000/svg'
    );
    this._svgRenderer.domElement.innerHTML = '';
    this._svgRenderer.render(scene, camera);
    return this._svgRenderer.domElement;
  }

  private async _exportSvg(name: string): Promise<IOutputFileEntry> {
    let svgXml = this._svgRenderer.domElement.outerHTML;
    return await generateOptimizedSvgOutput(name, svgXml);
  }
}

export const generateOptimizedSvgOutput = async (
  name: string,
  svgXml: string
): Promise<IOutputFileEntry> => {
  const svgOptimizeResult = await optimize(svgXml, {
    multipass: true,
    floatPrecision: 0,
  });
  if (svgOptimizeResult.data) {
    svgXml = svgOptimizeResult.data;
  }
  return {
    fileName: `${name}.svg`,
    content: svgXml,
    contentType: 'image/svg+xml',
  };
};
