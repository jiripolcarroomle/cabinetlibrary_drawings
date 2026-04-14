import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars } from './logging'

import { BomOutputFileEntry, createBomOutputById } from './bom_outputs';
import { I3DElement, PartBase, } from './mod-base';
import { BOM_ElementTypeBase } from './bom/base';
import { create as xmlbuilder2Create } from 'xmlbuilder2';
import { GlobalFunc } from './global-func'
import { GlobalVars } from './global-vars';
import { Matrix4, OD_Base, RoomContour, Vector3 } from './base';

export interface IOrderAdditionalData {
  key: string;
  value?: string;
  originalFileName?: string;
  fileType?: string;
  description?: string;
}

export interface IOrderData {
  orderId: string;
  orderNo: number;
  posOrderNo: string;
  posOrderDesc1?: string;
  posOrderDesc2?: string;
  posDeliveryDate?: Date;
  shippingCountry?: string;
  shippingState?: string;
  shippingZipCode?: string;
  shippingStreetNo?: string;
  shippingCity?: string;
  shopDescription?: string;
  shopContact?: string;
  shopContactEmail?: string;
  shopContactPhone?: string;
  targetProductionSite?: string;
  additionalData?: IOrderAdditionalData[];
  rooms?: RoomContour[];
}

export interface IGroupPosition {
  calcGroup?: string;
  calcGroupPos?: number[];
  calcGroupRotationY?: number;
}

export interface IBomOrderLineDataBase extends IGroupPosition { // deriving from of IGroupPosition is deprecated here / should be replaced through the new Drawing Order-Output
  orderLineId: string;
  orderLineNo: number;
  posOrderLineNo?: string;
  posArticleNo?: string;
  posArticleName?: string;
  posArticleDesc?: string;
  quantity: number;
  additionalData?: IOrderAdditionalData[];
}

export interface IBomOrderLineData extends IBomOrderLineDataBase {
  bomEntries: PartBase[];
  orderItem?: OD_Base;
}

export interface IBomOrderLineDataJson extends IBomOrderLineDataBase {
  bom: any[];
}

export interface IFullOrderLineData {
  orderInput: any;
  orderData: IBomOrderLineData;
}

export interface IFullOrderLineGroupData {
  groupPos: IGroupPosition,
  items: IFullOrderLineData[];
};

export interface IOrderInputData {
  orderData: IOrderData;
  fullOrderLineGroups: IFullOrderLineGroupData[];
}

export interface IOutputFileEntry {
  fileName: string;
  content: string;
  contentType: string;
}

export type ColorRepresentation = string | number;

export interface Box3Like {
  readonly min: Vector3;
  readonly max: Vector3;
}

export interface RoomDrawing2D {
  readonly sceneBox: Box3Like;
  readonly articles: Article3D[];
  readonly walls: WallSegment[];
  generateSvgViews(planViews?: PlanViewDefinition[]): SvgPlanViewOutput[];
}

export interface Part3DFactoryOptions {
  showOpen?: boolean;
  showDocking?: boolean;
  transparentParts?: boolean;
  surface?: boolean;
  wireFrame?: boolean;
  keepMeshMaterials?: boolean;
  surfaceColor?: ColorRepresentation;
  meshColorScale?: number;
}

export interface WallSegmentProps {
  surface?: boolean;
  wireFrame?: boolean;
  wallColor?: ColorRepresentation;
}

export interface RoomScene3DOptions {
  part?: Part3DFactoryOptions;
  wall?: WallSegmentProps;
}

export interface RoomDrawing2DOptions {
  sceneMargin?: number;
  svgOriginalSceneSize?: boolean;
  svgSize?: number;
  room3d?: RoomScene3DOptions;
}

export enum PlanViewType {
  FloorPlan = 'floor-plan',
  Elevation = 'elevation',
}

export interface PlanViewDirection2d {
  x: number;
  y: number;
}

export interface PlanViewDefinition {
  name: string;
  type: PlanViewType;
  elevationDirection?: PlanViewDirection2d;
  left: number;
  right: number;
  top: number;
  bottom: number;
  near: number;
  far: number;
  wallFilter?: WallFilter;
  orderLineFilter?: ArticleFilter;
  partFilter?: PartFilter;
}

export type WallFilter = (wall: WallSegment) => boolean;
export type ArticleFilter = (bomOrderLine: IBomOrderLineData) => boolean;
export type PartFilter = (
  part: I3DElement,
  bomOrderLine?: IBomOrderLineData
) => boolean;

export interface Article3D {
  readonly orderLine?: IBomOrderLineData;
  readonly isGenerated: boolean;
  readonly volumeAbsolute?: Volume3D;
  readonly parts: Part3D[];
}

export interface Part3D {
  readonly part?: I3DElement;
  readonly volumeInArticle?: Volume3D;
  readonly volumeAbsolute?: Volume3D;
  readonly parts: Part3D[];
}

export interface Volume3D {
  readonly position: Vector3;
  readonly rotationY: number;
  readonly directionX: Vector3;
  readonly directionY: Vector3;
  readonly directionZ: Vector3;
  readonly size: Vector3;
  readonly floorPlanPolygon: Vector3[];
}

export interface WallSegment {
  readonly wallSegmentId: number;
  readonly segmentStart: Vector3;
  readonly segmentEnd: Vector3;
  readonly segmentBackStart: Vector3;
  readonly segmentBackEnd: Vector3;
  readonly direction: Vector3;
  readonly wallLength: number;
  readonly wallThickness: number;
  readonly wallHeight: number;
  readonly rotationY: number;
  readonly normalToWall: Vector3;
  readonly directionToWall: PlanViewDirection2d;
  readonly distanceToWall: number;
  readonly left: number;
  readonly right: number;
}

export interface SvgPartView2D {
  visualPart: I3DElement;
  polygonPoints: Vector3[];
  parts: SvgPartView2D[];
}

export interface SvgArticleView2D {
  bomOrderLineData: IBomOrderLineData;
  isGenerated: boolean;
  polygonPoints: Vector3[];
  parts: SvgPartView2D[];
}

export interface SvgPlanViewOutput {
  planView: PlanViewDefinition;
  svgElement: SVGElement;
  svgWidth: number;
  svgHeight: number;
  planToSvgScale: number;
  sceneToSvgTransform: Matrix4;
  articleViews: SvgArticleView2D[];
}

export interface DimensionPoints {
  fromPoint: Vector3;
  toPoint: Vector3;
  labelDistance: number;
}

export interface DrawingApi {
  newRoomDrawing2D: (
    orderInputData: IOrderInputData,
    options?: RoomDrawing2DOptions
  ) => Promise<RoomDrawing2D>;
  transform3dToView(
    point: Vector3,
    svgViewOutput: SvgPlanViewOutput
  ): Vector3;
  calculatesDimensionPoints: (
    planView: PlanViewDefinition,
    articleView: SvgArticleView2D,
    labelDistance: number
  ) => DimensionPoints;
  isArticleCloseToWall: (
    article: Article3D,
    wallSegment: WallSegment,
    distance: number
  ) => boolean;
  drawDimension: (
    svgElement: SVGElement,
    fromPoint: Vector3,
    toPoint: Vector3,
    labelDistance: number,
    fontSize: number,
    dimUnitText?: string,
    planToSvgScale?: number,
    color?: string
  ) => void;
  drawPolygonFromPoints: (
    svgElement: SVGElement,
    svgPoints: Vector3[],
    closed?: boolean,
    color?: string,
    strokeWidth?: number
  ) => void;
  generateOptimizedSvgOutput: (
    name: string,
    svgXml: string
  ) => Promise<IOutputFileEntry>;
  glbFromScene: (
    name: string,
    drawinge2D: RoomDrawing2D
  ) => Promise<IOutputFileEntry | null>;
}

declare global {
  var drawingApi: DrawingApi;
}

class BomEntry extends BOM_ElementTypeBase {
  constructor() {
    super("", "", "", "", "");
  }
  _a: Map<string, any> = new Map<string, any>();
  override getAttributes(): Map<string, any> {
    return this._a;
  }

  loadJson(json: any): void {
    this._bomElementTypeId = json._bomElementTypeId;
    this._bomType = json._bomType;
    this._description = json._description;
    this._touchOrigin = json._touchOrigin;
    this._touchPart2Id = json._touchPart2Id;
    this._touchPart2Name = json._touchPart2Name;
    if (json.a) {
      for (var key in json.a) {
        if (json.a.hasOwnProperty(key)) {
          this._a.set(key, json.a[key]);
        }
      }
    }
  }
}

class BomPart extends PartBase {
  constructor() {
    super(undefined, "", 0, 0, 0, 0, 0, 0);
  }
  _a: Map<string, any> = new Map<string, any>();
  getAttributes(): Map<string, any> {
    return this._a;
  }
  setAttributes(): void { }
  checkAttributes(): void { }
  createBomElements(): void { }
  loadJson(json: any): void {
    // INFO: This must be in sync with the "PartBase.toJson"!
    this._id = json._id;
    this._partId = json._partId;
    this._wdt = json._wdt;
    this._x = json._x;
    this._y = json._y;
    this._z = json._z;
    this._dimx = json._dimx;
    this._dimy = json._dimy;
    this._dimz = json._dimz;
    this.parentId = json.parentId;
    this._xAbs = json._absx;
    this._yAbs = json._absy;
    this._zAbs = json._absz;
    this._groupRootId = json._groupRootId;
    this._groupParentId = json._groupParentId;
    if (Array.isArray(json._childParts)) {
      json._childParts.forEach((cp: any) => {
        var bp = new BomPart();
        bp.loadJson(cp);
        this._childParts.push(bp);
      });
    }
    if (Array.isArray(json._bom)) {
      json._bom.forEach((b: any) => {
        var be = new BomEntry();
        be.loadJson(b);
        this._bom.push(be);
      });
    }
    if (json.a) {
      for (var key in json.a) {
        if (json.a.hasOwnProperty(key)) {
          this._a.set(key, json.a[key]);
        }
      }
    }
  }
}

export function createOrderOutputByIdFromJson(o: IOrderData, ol: IBomOrderLineDataJson[], orderOutputId: string): Map<string, BomOutputFileEntry> {
  var old: IBomOrderLineData[] = [];
  // Convert json to PartBase[]
  ol.forEach(p => {
    var bomEntriesJson = p.bom;
    var bomEntries: PartBase[] = [];
    bomEntriesJson.forEach(q => {
      var bp = new BomPart();
      bp.loadJson(q);
      bomEntries.push(bp);
    });
    var oli: IBomOrderLineData =
    {
      orderLineId: p.orderLineId,
      orderLineNo: p.orderLineNo,
      posOrderLineNo: p.posOrderLineNo,
      posArticleNo: p.posArticleNo,
      calcGroup: p.calcGroup,
      calcGroupPos: p.calcGroupPos,
      calcGroupRotationY: p.calcGroupRotationY,
      quantity: p.quantity,
      bomEntries: bomEntries,
      additionalData: p.additionalData,
    }
    old.push(oli);
  });
  return createOrderOutputById(o, old, orderOutputId);
}

class OrderOutputBase {
  #g: GlobalVars = new GlobalVars(true);
  get g(): GlobalVars { return this.#g; }
}
export class OrderOutputBaseOutput_ProductionManager extends OrderOutputBase {
  createFileEntry(result: Map<string, BomOutputFileEntry>, fileName: string, content: any, contentType: string = "text/plain;charset=utf-8") {
    var bom = new BomOutputFileEntry(fileName, content, contentType);
    if (result.has(fileName)) {
      logError("File '" + fileName + "' is already placed in the output(duplicate)! Ignoring!");
    }
    result.set(fileName, bom);
  }
  createBomOutputCreate_Bom(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Bom');
  }
  createBomOutputCreate_Drawing(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Drawing');
  }
  createBomOutputCreate_Mpr(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Mpr');
  }
  createBomOutputcreate_DrawingOld(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_DrawingOld');
  }
  createBomOutputcreate_CamManagerProcessings(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_CamManagerProcessings');
  }
  createOrderOutput(o: IOrderData, ol: IBomOrderLineData[]): Map<string, BomOutputFileEntry> {
    internal_enterBomOrderOutput();
    let result = new Map<string, BomOutputFileEntry>();
    try {
      // ###############################################################
      // ####################### CUSTOM SCRIPTS ########################
      // ###############################################################

      // Schuler Consulting 
      // Create: August 2023
      // By Ludwig Weber
      // Purpose: Create OrderOutput for productionManager
      //
      // Description:
      // Create OrderOutput for productionManager
      // XML-Export
      //
      // Revisions:
      // 
      //===================================================

      // Create variables
      let outStr: string = '';
      let countOL: number = 0;
      let openEntity = false;
      let openEntities = false;
      let target = o.targetProductionSite;

      // Function to validate strings
      function escapeXml(unsafe: string | undefined): string {
        if (unsafe === undefined || unsafe === '') {
          return '';
        }
        return unsafe.replace(/[<>&'"]/g, function (c): string {
          switch (c) {
            case '<':
              return '&lt;';
            case '>':
              return '&gt;';
            case '&':
              return '&amp;';
            case '\'':
              return '&apos;';
            case '"':
              return '&quot;';
          }
          return c;
        });
      }

      // Function to format the date
      function formatDateToXml(dateInput: any): string {

        // Dynamic Fallback: actual date + 30 days
        const fallbackDate = new Date();
        fallbackDate.setDate(fallbackDate.getDate() + 30);

        if (!dateInput) {
          return fallbackDate.toISOString();
        }

        // Delete bracket with time zone
        const cleaned = typeof dateInput === 'string' ? dateInput.replace(/\s*\(.*\)/, '') : dateInput;
        const date = new Date(cleaned);

        if (isNaN(date.getTime())) {
          return fallbackDate.toISOString();
        }

        return date.toISOString();
      }

      //===================================================
      // Insert the MPR-Files and drawings
      //===================================================

      // Order Row Data
      ol.forEach(p => {
        // NC-Data
        let bo = this.createBomOutputCreate_Mpr(p.bomEntries);
        bo.forEach((value, key) => {
          result.set("Images/" + o.orderNo + "_" + p.orderLineNo + "_" + key, value);
        })

        // Drawings
        let elem = this.createBomOutputCreate_Drawing(p.bomEntries);
        elem.forEach((value, key) => {
          result.set("Images/" + o.orderNo + "_" + p.orderLineNo + "_" + key, value);
        })
      });

      //===================================================
      // XML Header
      //===================================================

      outStr += '<?xml version="1.0" encoding="utf-8"?>' + '\n';
      outStr += '<project' + '\n';

      outStr += 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' + '\n';
      outStr += 'xsi:schemaLocation="http://schemas.datacontract.org/2004/07/HomagGroup.ProductionManager.Core.Logic.Import ImportExport.xsd"' + '\n';
      outStr += 'xsi:noNamespaceSchemaLocation="ImportExport.xsd"' + '\n';
      outStr += 'xmlns="http://schemas.datacontract.org/2004/07/HomagGroup.ProductionManager.Core.Logic.Import" >' + '\n';

      //===================================================
      // Order Header
      //===================================================

      outStr += '<orders>' + '\n';
      outStr += '<order>' + '\n';
      outStr += '<properties>' + '\n';

      // Order Header Data
      outStr += '<param name="OrderName" value="' + o.orderNo + '" />' + '\n';
      outStr += '<param name="CustomerName" value="' + escapeXml(o.shopContact!) + '" />' + '\n';
      outStr += '<param name="CustomerNumber" value="' + escapeXml(o.posOrderDesc1!) + '" />' + '\n';
      //outStr += '<param name="Source" value="salesConfigurator" />' + '\n';
      outStr += `<param name="OrderDate" value="${formatDateToXml(new Date())}" />\n`;
      outStr += `<param name="DeliveryDate" value="${formatDateToXml(o.posDeliveryDate)}" />\n`;
      outStr += '<param name="AddressField1" value="Herr / Frau" />' + '\n';
      outStr += '<param name="AddressField2" value="' + escapeXml(o.shopContact!) + '" />' + '\n';
      outStr += '<param name="AddressField3" value="' + escapeXml(o.shippingStreetNo!) + '" />' + '\n';
      outStr += '<param name="AddressField4" value="' + escapeXml(o.shippingZipCode!) + ' ' + escapeXml(o.shippingCity!) + '" />' + '\n';
      outStr += '</properties>' + '\n';

      outStr += '<images>' + '\n';
      let fileIdx = 0;
      if (o.additionalData) {
        o.additionalData.forEach(ad => {
          if (ad.fileType) {
            outStr += '<image>' + '\n';
            outStr += '<properties>' + '\n';
            if (ad.fileType === "RoomImage") {
              outStr += '<param name="Category" value="OverviewImage" />' + '\n';
            }
            else if (ad.fileType === "Room3DImage") {
              outStr += '<param name="Category" value="Autodesk3DsModel" />' + '\n';
            }
            if (ad.description) {
              outStr += '<param name="Description" value="' + escapeXml(ad.description) + '" />' + '\n';
            }
            outStr += '<param name="OriginalFileName" value="' + escapeXml(ad.originalFileName ?? "") + '" />' + '\n';
            outStr += '<param name="ImageLinkBinary" value="Images\\' + fileIdx + "_" + escapeXml(ad.originalFileName ?? "") + '" />' + '\n';
            outStr += '</properties>' + '\n';
            outStr += '</image>' + '\n';
            this.createFileEntry(result, 'Images/' + fileIdx + "_" + ad.originalFileName!, ad.value, "additionalData");
            fileIdx++;
          }
        });
      }
      outStr += '</images>' + '\n';
      outStr += '<entities>' + '\n';

      //===================================================
      // Order Line Header
      //===================================================

      // Cycle for the order rows
      ol.forEach(p => {
        countOL++;

        outStr += '<entity>' + '\n';
        outStr += '<properties>' + '\n';

        outStr += '<param name="Typ" value="OrderItem" />' + '\n';
        outStr += `<param name="OrderItemNumber" value="${p.posOrderLineNo ?? countOL}" />\n`;
        outStr += '<param name="ArticleNumber" value="' + p.posArticleNo + '" />' + '\n';
        outStr += '<param name="ArticleDescription" value="' + p.posArticleNo + '" />' + '\n';
        outStr += '<param name="Quantity" value="1" />' + '\n';
        outStr += '<param name="QuantityUnit" value="pcs" />' + '\n';
        outStr += '<param name="ExternalSystemId" value="' + p.orderLineId + '" />' + '\n';

        outStr += '</properties>' + '\n';
        outStr += '<images>' + '\n';
        if (p.additionalData) {
          p.additionalData.forEach(ad => {
            if (ad.fileType) {
              outStr += '<image>' + '\n';
              outStr += '<properties>' + '\n';
              if (ad.fileType === "ArticleImage") {
                outStr += '<param name="Category" value="OverviewImage" />' + '\n';
              }
              else if (ad.fileType === "Article3dModel") {
                outStr += '<param name="Category" value="Autodesk3DsModel" />' + '\n';
              }
              if (ad.description) {
                outStr += '<param name="Description" value="' + escapeXml(ad.description) + '" />' + '\n';
              }
              outStr += '<param name="OriginalFileName" value="' + escapeXml(ad.originalFileName ?? "") + '" />' + '\n';
              outStr += '<param name="ImageLinkBinary" value="Images\\' + fileIdx + "_" + escapeXml(ad.originalFileName ?? "") + '" />' + '\n';
              outStr += '</properties>' + '\n';
              outStr += '</image>' + '\n';
              this.createFileEntry(result, 'Images/' + fileIdx + "_" + ad.originalFileName!, ad.value, "additionalData");
              fileIdx++;
            }
          });
        }
        outStr += '</images>' + '\n';
        outStr += '<entities>' + '\n';

        // Order Line Parts
        //===================================================

        // Create output data for all elements in the order line
        let bom = ZipConverter(this, p.bomEntries);
        let myParent = 'Root';

        // Find function for the output data
        const findBomParent = (parent: string): Map<string, BomOutputFileEntry> => {
          let r = new Map<string, BomOutputFileEntry>();

          bom.forEach((value, key) => {
            let k = JSON.parse(key);
            if (k.parent === parent) {
              r.set(key, value);
            }
          })
          return r;
        }

        // Insertion function for the XML-File
        function insertStringXML(k: any, extras: Record<string, unknown> = {}) {
          if (k.Type === "Partgroup" && (k.category === target || target == 'TARGET-PRODUCTION-SITE' || target == undefined)) {
            if (openEntities == true) { outStr += '</entities>' + '\n'; openEntities = false; }
            if (openEntity == true) { outStr += '</entity>' + '\n'; openEntity = false; }
            outStr += '<entity>' + '\n';
            openEntity = true;
            outStr += '<properties>' + '\n';
            outStr += '<param name="Typ" value="Component" />' + '\n';
            outStr += '<param name="ArticleNumber" value="' + k.id + '" />' + '\n';
            outStr += '<param name="ArticleDescription" value="' + k.Name + '" />' + '\n';
            outStr += '<param name="Quantity" value="1" />' + '\n';
            outStr += '<param name="QuantityUnit" value="pcs" />' + '\n';
            outStr += '<param name="Length" value="' + k.width + '" />' + '\n';
            outStr += '<param name="Width" value="' + k.depth + '" />' + '\n';
            outStr += '<param name="Thickness" value="' + k.thickness + '" />' + '\n';
            outStr += '</properties>' + '\n';
            outStr += '<images>' + '\n';
            outStr += '</images>' + '\n';
            outStr += '<entities>' + '\n';
            openEntities = true;
          }

          if (k.Type === "Hardware" && (k.category === target || target == 'TARGET-PRODUCTION-SITE' || target == undefined)) {
            outStr += '<entity>' + '\n';
            outStr += '<properties>' + '\n';
            //outStr += '<param name="Elementtype" value="Hardware" />' + '\n'; 
            outStr += '<param name="Elementtype" value="' + k.Type + '" />' + '\n';
            outStr += '<param name="Typ" value="Resource" />' + '\n';
            //outStr += '<param name="ArticleNumber" value="Hardware" />' + '\n';
            outStr += '<param name="ArticleNumber" value="' + k.Name + '" />' + '\n';
            //outStr += '<param name="ArticleDescription" value="' + k.Name + '" />' + '\n';
            outStr += '<param name="ArticleDescription" value="' + escapeXml(String(extras["bom_Description1"])) + '" />' + '\n';
            //outStr += '<param name="Quantity" value="1" />' + '\n';
            outStr += '<param name="Quantity" value="' + escapeXml(String(extras["bom_Qty"])) + '" />' + '\n';
            outStr += '<param name="QuantityUnit" value="pcs" />' + '\n';
            outStr += '<param name="Length" value="' + k.width + '" />' + '\n';
            outStr += '<param name="Width" value="' + k.depth + '" />' + '\n';
            outStr += '<param name="Thickness" value="' + k.thickness + '" />' + '\n';

            /*
            if (extras["bom_Supplier"]) {
              outStr += '<param name="Supplier" value="' + escapeXml(String(extras["bom_Supplier"])) + '" />' + '\n';
            }
            if (extras["bom_SupplierArticle"]) {
              outStr += '<param name="SupplierArticle" value="' + escapeXml(String(extras["bom_SupplierArticle"])) + '" />' + '\n';
            }
            if (extras["bom_Description1"]) {
              outStr += '<param name="Description1" value="' + escapeXml(String(extras["bom_Description1"])) + '" />' + '\n';
            }
            if (extras["bom_Description2"]) {
              outStr += '<param name="Description2" value="' + escapeXml(String(extras["bom_Description2"])) + '" />' + '\n';
            }
            */

            for (const [extraName, extraValue] of Object.entries(extras)) {
              if (extraValue !== undefined && extraValue !== null && extraValue !== "") {
                outStr += '<param name="' + escapeXml(extraName) + '" value="' + escapeXml(String(extraValue)) + '" />' + '\n';
              }
            }

            outStr += '</properties>' + '\n';
            outStr += '<images>' + '\n';
            outStr += '</images>' + '\n';
            outStr += '</entity>' + '\n';
          }

          if (k.Type === "Board" && (k.category === target || target == 'TARGET-PRODUCTION-SITE' || target == undefined)) {
            outStr += '<entity>' + '\n';
            outStr += '<properties>' + '\n';
            outStr += '<param name="Elementtype" value="' + k.Type + '" />' + '\n';
            outStr += '<param name="Typ" value="ProductionOrder" />' + '\n';
            outStr += '<param name="ArticleNumber" value="' + k.Name + '" />' + '\n';
            outStr += '<param name="ArticleDescription" value="' + k.Name + ' of ' + k.parent + '" />' + '\n';
            outStr += '<param name="ArticleGroup" value="' + k.ArticleGroup + '" />' + '\n';
            outStr += '<param name="Quantity" value="1" />' + '\n';
            outStr += '<param name="QuantityUnit" value="pcs" />' + '\n';
            if (result.has("Images/" + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.mpr')) {
              outStr += '<param name="CncProgramName" value="Images\\' + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.mpr" />' + '\n';
            }

            outStr += '<param name="Material" value="' + k.material + '" />' + '\n';
            outStr += '<param name="Grain" value="' + k.grain + '" />' + '\n';
            outStr += '<param name="FinishLength" value="' + k.width + '" />' + '\n';
            outStr += '<param name="FinishWidth" value="' + k.depth + '" />' + '\n';
            outStr += '<param name="Length" value="' + k.cutLength + '" />' + '\n';
            outStr += '<param name="Width" value="' + k.cutWidth + '" />' + '\n';
            outStr += '<param name="Thickness" value="' + k.thickness + '" />' + '\n';
            outStr += '<param name="EdgeDiagram" value="' + k.EdgeTransition + '" />' + '\n';
            outStr += '<param name="EdgeFront" value="' + k.EdgeFront + '" />' + '\n';
            outStr += '<param name="EdgeBack" value="' + k.EdgeBack + '" />' + '\n';
            outStr += '<param name="EdgeLeft" value="' + k.EdgeLeft + '" />' + '\n';
            outStr += '<param name="EdgeRight" value="' + k.EdgeRight + '" />' + '\n';
            outStr += '<param name="PartId" value="' + k.PartCode + '" />' + '\n';

            for (const [extraName, extraValue] of Object.entries(extras)) {
              if (extraValue !== undefined && extraValue !== null && extraValue !== "") {
                outStr += '<param name="' + escapeXml(extraName) + '" value="' + escapeXml(String(extraValue)) + '" />' + '\n';
              }
            }

            outStr += '</properties>' + '\n';

            // Reference to the MPR
            outStr += '<images>' + '\n';
            if (result.has("Images/" + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.mpr')) {
              outStr += '<image>' + '\n';
              outStr += '<properties>' + '\n';
              outStr += '<param name="Category" value="MPR" />' + '\n';
              outStr += '<param name="Description" value="Bohrbild" />' + '\n';
              outStr += '<param name="OriginalFileName" value="' + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.mpr" />' + '\n';
              outStr += '<param name="ImageLinkBinary" value="Images\\' + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.mpr" />' + '\n';
              outStr += '</properties>' + '\n';
              outStr += '</image>' + '\n';
            }
            outStr += '</images>' + '\n';

            // Reference to the SVG
            outStr += '<images>' + '\n';
            if (result.has("Images/" + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.svg')) {
              outStr += '<image>' + '\n';
              outStr += '<properties>' + '\n';
              outStr += '<param name="Category" value="SVG" />' + '\n';
              outStr += '<param name="Description" value="Bauteilzeichnung" />' + '\n';
              outStr += '<param name="OriginalFileName" value="' + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.svg" />' + '\n';
              outStr += '<param name="ImageLinkBinary" value="Images\\' + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.svg" />' + '\n';
              outStr += '</properties>' + '\n';
              outStr += '</image>' + '\n';
            }
            outStr += '</images>' + '\n';

            outStr += '</entity>' + '\n';
          }
        }

        // Logic for data insertion to the string Level1
        let res = findBomParent(myParent);
        res.forEach((value, key) => {
          let k = JSON.parse(key);
          let extras: Record<string, unknown> = {};
          try {
            const parsed = JSON.parse((value as any).content);
            extras = (parsed?.extras ?? {}) as Record<string, unknown>;
          }
          catch (e) {
          }

          insertStringXML(k, extras);

          // Logic for data insertion to the string Level2
          let res1 = findBomParent(k.id);
          res1.forEach((value, key) => {
            let k = JSON.parse(key);
            let extras: Record<string, unknown> = {};
            try {
              const parsed = JSON.parse((value as any).content);
              extras = (parsed?.extras ?? {}) as Record<string, unknown>;
            }
            catch (e) {
            }
            insertStringXML(k, extras);

            // Logic for data insertion to the string Level3
            let res2 = findBomParent(k.id);
            res2.forEach((value, key) => {
              let k = JSON.parse(key);
              let extras: Record<string, unknown> = {};
              try {
                const parsed = JSON.parse((value as any).content);
                extras = (parsed?.extras ?? {}) as Record<string, unknown>;
              }
              catch (e) {
              }
              insertStringXML(k, extras);

            })
          })
        })

        //===================================================
        // Closing the order line
        //===================================================

        // Close the part group if it is opended
        if (openEntities == true) { outStr += '</entities>' + '\n'; openEntities = false; }
        if (openEntity == true) { outStr += '</entity>' + '\n'; openEntity = false; }

        // Close the order line
        outStr += '</entities>' + '\n';
        outStr += '</entity>' + '\n';
      });

      //===================================================
      // Closing the order and project
      //===================================================

      // Close all open brackets
      outStr += '</entities>' + '\n';
      outStr += '</order>' + '\n';
      outStr += '</orders>' + '\n';
      outStr += '</project>' + '\n';

      // Create File
      this.createFileEntry(result, "project.xml", outStr);

      //===================================================
      // Helper to create the bom map
      //===================================================

      function ZipConverter(a: any, bomEntries: any): Map<string, BomOutputFileEntry> {
        const zip = a.createBomOutputCreate_Bom(bomEntries);
        const bom = new Map<string, BomOutputFileEntry>();

        zip.forEach((value: BomOutputFileEntry, key: string) => {
          if (!key.toLowerCase().endsWith('.json')) {
            return;
          }

          try {
            const parsed = JSON.parse(value.content);

            if (parsed && parsed.entry) {
              const legacyKey = JSON.stringify(parsed.entry);
              bom.set(legacyKey, value);
            }
          }
          catch (err) {
            // we are not returning error-messages
          }
        });

        return bom;
      }
      // ###############################################################
      // ################### END CUSTOM SCRIPTS ########################
      // ###############################################################
    }
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
    finally {
      internal_leaveBomOrderOutput();
    }
    return result;
  }
}
export class OrderOutputBaseOutput_Drawings extends OrderOutputBase {
  createFileEntry(result: Map<string, BomOutputFileEntry>, fileName: string, content: any, contentType: string = "text/plain;charset=utf-8") {
    var bom = new BomOutputFileEntry(fileName, content, contentType);
    if (result.has(fileName)) {
      logError("File '" + fileName + "' is already placed in the output(duplicate)! Ignoring!");
    }
    result.set(fileName, bom);
  }
  createBomOutputCreate_Bom(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Bom');
  }
  createBomOutputCreate_Drawing(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Drawing');
  }
  createBomOutputCreate_Mpr(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Mpr');
  }
  createBomOutputcreate_DrawingOld(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_DrawingOld');
  }
  createBomOutputcreate_CamManagerProcessings(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_CamManagerProcessings');
  }
  createOrderOutput(o: IOrderData, ol: IBomOrderLineData[]): Map<string, BomOutputFileEntry> {
    internal_enterBomOrderOutput();
    let result = new Map<string, BomOutputFileEntry>();
    try {
      // ###############################################################
      // ####################### CUSTOM SCRIPTS ########################
      // ###############################################################
      // Schuler Consulting
      // Create: Nov 2022
      // By Ludwig Weber
      // Purpose: Create Zip-file for all part drawings
      //
      // Description:
      // Create Zip-file
      //
      // Revisions:
      // 
      //===================================================

      // Order Row Data
      ol.forEach(p => {

        // Zip all the drawings
        var bo = this.createBomOutputCreate_Drawing(p.bomEntries);
        bo.forEach((value, key) => {
          result.set(p.orderLineNo + "_" + key, value);
        })
      });
      // ###############################################################
      // ################### END CUSTOM SCRIPTS ########################
      // ###############################################################
    }
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
    finally {
      internal_leaveBomOrderOutput();
    }
    return result;
  }
}
export class OrderOutputBaseOutput_Mpr extends OrderOutputBase {
  createFileEntry(result: Map<string, BomOutputFileEntry>, fileName: string, content: any, contentType: string = "text/plain;charset=utf-8") {
    var bom = new BomOutputFileEntry(fileName, content, contentType);
    if (result.has(fileName)) {
      logError("File '" + fileName + "' is already placed in the output(duplicate)! Ignoring!");
    }
    result.set(fileName, bom);
  }
  createBomOutputCreate_Bom(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Bom');
  }
  createBomOutputCreate_Drawing(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Drawing');
  }
  createBomOutputCreate_Mpr(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Mpr');
  }
  createBomOutputcreate_DrawingOld(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_DrawingOld');
  }
  createBomOutputcreate_CamManagerProcessings(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_CamManagerProcessings');
  }
  createOrderOutput(o: IOrderData, ol: IBomOrderLineData[]): Map<string, BomOutputFileEntry> {
    internal_enterBomOrderOutput();
    let result = new Map<string, BomOutputFileEntry>();
    try {
      // ###############################################################
      // ####################### CUSTOM SCRIPTS ########################
      // ###############################################################
      // Schuler Consulting
      // Create: Nov 2022
      // By Ludwig Weber
      // Purpose: Create Zip-file for all pMPR-files
      //
      // Description:
      // Create Zip-file
      //
      // Revisions:
      // 
      //===================================================

      // Order Row Data
      ol.forEach(p => {
        // Zip all the Mpr-files
        var bo = this.createBomOutputCreate_Mpr(p.bomEntries);
        bo.forEach((value, key) => {
          result.set(p.orderLineNo + "_" + key, value);
        })
      });
      // ###############################################################
      // ################### END CUSTOM SCRIPTS ########################
      // ###############################################################
    }
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
    finally {
      internal_leaveBomOrderOutput();
    }
    return result;
  }
}
export class OrderOutputBaseoutput_DrawingsPlanDEV extends OrderOutputBase {
  createFileEntry(result: Map<string, BomOutputFileEntry>, fileName: string, content: any, contentType: string = "text/plain;charset=utf-8") {
    var bom = new BomOutputFileEntry(fileName, content, contentType);
    if (result.has(fileName)) {
      logError("File '" + fileName + "' is already placed in the output(duplicate)! Ignoring!");
    }
    result.set(fileName, bom);
  }
  createBomOutputCreate_Bom(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Bom');
  }
  createBomOutputCreate_Drawing(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Drawing');
  }
  createBomOutputCreate_Mpr(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Mpr');
  }
  createBomOutputcreate_DrawingOld(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_DrawingOld');
  }
  createBomOutputcreate_CamManagerProcessings(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_CamManagerProcessings');
  }
  async createFullOrderOutput(o: IOrderData, ol: IFullOrderLineGroupData[]): Promise<Map<string, BomOutputFileEntry>> {
    internal_enterBomOrderOutput();
    let result = new Map<string, BomOutputFileEntry>();
    try {
      // ###############################################################
      // ####################### CUSTOM SCRIPTS ########################
      // ###############################################################

      // ###############################################################
      // ################### END CUSTOM SCRIPTS ########################
      // ###############################################################
    }
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
    finally {
      internal_leaveBomOrderOutput();
    }
    return result;
  }
}
export class OrderOutputBaseoutput_CamManager extends OrderOutputBase {
  createFileEntry(result: Map<string, BomOutputFileEntry>, fileName: string, content: any, contentType: string = "text/plain;charset=utf-8") {
    var bom = new BomOutputFileEntry(fileName, content, contentType);
    if (result.has(fileName)) {
      logError("File '" + fileName + "' is already placed in the output(duplicate)! Ignoring!");
    }
    result.set(fileName, bom);
  }
  createBomOutputCreate_Bom(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Bom');
  }
  createBomOutputCreate_Drawing(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Drawing');
  }
  createBomOutputCreate_Mpr(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Mpr');
  }
  createBomOutputcreate_DrawingOld(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_DrawingOld');
  }
  createBomOutputcreate_CamManagerProcessings(bom: PartBase[]): Map<string, BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_CamManagerProcessings');
  }
  createOrderOutput(o: IOrderData, ol: IBomOrderLineData[]): Map<string, BomOutputFileEntry> {
    internal_enterBomOrderOutput();
    let result = new Map<string, BomOutputFileEntry>();
    try {
      // ###############################################################
      // ####################### CUSTOM SCRIPTS ########################
      // ###############################################################

      // Schuler Consulting
      // Create: March 2026
      // By: Ludwig Weber
      //
      // Purpose: Create JSON export (Order/Article/AssemblyPart/Part/...)
      // ===================================================

      // ===================================================
      // Types (matching the document structure) :contentReference[oaicite:2]{index=2}
      // ===================================================

      type AttributeTyp = "String" | "Int" | "Decimal" | "Date" | "DateTime";
      type SegmentTyp = "Line" | "Arc";
      type ArcTyp = "undefined" | "Clockwise" | "CounterClockwise";
      type ContourType = "OutSide" | "InSide";
      type EdgeTransition = "Short" | "Long";
      type InsertPoint = "Left" | "Middle" | "Right";

      // Minimal PartTyp mapping (extend as needed)
      type PartTyp =
        | "LeftSide"
        | "RightSide"
        | "BackPanel"
        | "TopShelf"
        | "BottomShelf"
        | "Front"
        | "Shelf";

      interface Attribute {
        Name: string;
        Typ: AttributeTyp;
        Value: string;
      }

      interface Segment {
        StartX: number;
        StartY: number;
        StartZ: number;
        EndX: number;
        EndY: number;
        EndZ: number;
        Radius: number;
        SegmentTyp: SegmentTyp;
        ArcTyp: ArcTyp;
      }

      interface Contour {
        PosX: number;
        PosY: number;
        PosZ: number;
        Segments: Segment[];
      }

      interface Edge {
        Number: number;
        Thickness: number;
        Oversize: number;
        Name: string;
        EdgeTransition: EdgeTransition;
        Contour: Contour;
      }

      interface Exclude {
        StartPosX: number;
        StartPosY: number;
        StartPosZ: number;
        EndPosX: number;
        EndPosY: number;
        EndPosZ: number;
      }

      // Operations (minimal placeholders; extend when you map real CAM data)
      interface Mill {
        OperationType: string;
        ZPosition: number;
        Angle: number;
        ContoureType: ContourType;
        ProcessingDirection: string;
        Attributes: Attribute[];
        Conture: Contour;
      }
      interface Drill {
        OperationType: string;
        Diameter: number;
        Depth: number;
        OrX: number;
        OrY: number;
        OrZ: number;
        ProcessingDirection: string;
        PosX: number;
        PosY: number;
        PosZ: number;
        Attributes: Attribute[];
      }
      interface Groove {
        OperationType: string;
        Width: number;
        Depth: number;
        OrX: number;
        OrY: number;
        OrZ: number;
        StartPosX: number;
        StartPosY: number;
        EndPosX: number;
        EndPosY: number;
        ProcessingDirection: string;
        ZPos: number;
        InsertPoint: InsertPoint;
        Attributes: Attribute[];
      }
      interface Pocket {
        OperationType: string;
        Length: number;
        Width: number;
        Depth: number;
        CornerRadius: number;
        OrX: number;
        OrY: number;
        OrZ: number;
        ProcessingDirection: string;
        PosX: number;
        PosY: number;
        PosZ: number;
        Attributes: Attribute[];
      }
      interface Saw {
        OperationType: string;
        OrX: number;
        OrY: number;
        OrZ: number;
        StartPosX: number;
        StartPosY: number;
        EndPosX: number;
        EndPosY: number;
        PosZ: number;
        InsertPoint: InsertPoint;
        Attributes: Attribute[];
      }
      interface ComponentOp {
        OperationType: string;
        OrX: number;
        OrY: number;
        OrZ: number;
        PosX: number;
        PosY: number;
        PosZ: number;
        ProcessingDirection: string;
        Attributes: Attribute[];
        Exclude?: Exclude;
      }

      type Operation = Mill | Drill | Groove | Pocket | Saw | ComponentOp;

      interface Workgroup {
        Typ: number;
        Name: string;
        Operations: Operation[];
        Attributes: Attribute[];
      }

      interface Part {
        ID: number;
        Typ: PartTyp;
        Description: string;

        XDim: number;
        YDim: number;
        ZDim: number;

        XDimbase?: number;
        YDimbase?: number;
        ZDimbase?: number;

        OrX: number;
        OrY: number;
        OrZ: number;

        PosX: number;
        PosY: number;
        PosZ: number;

        Attributes: Attribute[];
        Edges: Edge[];

        Partcontour: Contour;
        PartBasicContour: Contour;

        Workgroups: Workgroup[];
        Excludes: Exclude[];
      }

      interface AssemblyPart {
        ID: number;

        XDim: number;
        YDim: number;
        ZDim: number;

        OrX: number;
        OrY: number;
        OrZ: number;

        PosX: number;
        PosY: number;
        PosZ: number;

        Attributes: Attribute[];
        Parts: Part[];
      }

      interface Article {
        ID: number;

        XDim: number;
        YDim: number;
        ZDim: number;

        OrX: number;
        OrY: number;
        OrZ: number;

        PosX: number;
        PosY: number;
        PosZ: number;

        Attributes: Attribute[];
        AssemblyParts: AssemblyPart[];
        Workgroups: Workgroup[];
      }

      interface Order {
        Attributes: Attribute[];
        Articles: Article[];
      }

      interface OrderRoot {
        Order: Order;
      }

      // ===================================================
      // Helpers
      // ===================================================

      function safeStr(v: any): string {
        if (v === undefined || v === null) return "";
        return String(v);
      }

      function attr(name: string, value: any, typ: AttributeTyp = "String"): Attribute {
        return { Name: name, Typ: typ, Value: safeStr(value) };
      }

      function toNumber(v: any, fallback = 0): number {
        const n = Number(v);
        return Number.isFinite(n) ? n : fallback;
      }

      function formatDate(value?: string | Date | null, fallbackDays = 30): string {

        // fallback date
        const fallback = new Date();
        fallback.setDate(fallback.getDate() + fallbackDays);

        if (!value) return fallback.toISOString();

        let d: Date;

        if (value instanceof Date) {
          d = value;
        } else if (typeof value === "string") {
          // remove timezone text like "(UTC+1)" or "(Central Europe Standard Time)"
          const cleaned = value.replace(/\s*\(.*?\)/g, "");
          d = new Date(cleaned);
        } else {
          return fallback.toISOString();
        }

        if (isNaN(d.getTime())) {
          return fallback.toISOString();
        }

        return d.toISOString();
      }

      /**
       * Draft rectangle contour in "Bearbeitungslage":
       * Origin bottom-left, rectangle of (xDim, yDim), Z=0.
       */
      function makeRectContour(xDim: number, yDim: number): Contour {
        const x = Math.max(0, xDim);
        const y = Math.max(0, yDim);
        return {
          PosX: 0,
          PosY: 0,
          PosZ: 0,
          Segments: [
            { StartX: 0, StartY: 0, StartZ: 0, EndX: x, EndY: 0, EndZ: 0, Radius: 0, SegmentTyp: "Line", ArcTyp: "undefined" },
            { StartX: x, StartY: 0, StartZ: 0, EndX: x, EndY: y, EndZ: 0, Radius: 0, SegmentTyp: "Line", ArcTyp: "undefined" },
            { StartX: x, StartY: y, StartZ: 0, EndX: 0, EndY: y, EndZ: 0, Radius: 0, SegmentTyp: "Line", ArcTyp: "undefined" },
            { StartX: 0, StartY: y, StartZ: 0, EndX: 0, EndY: 0, EndZ: 0, Radius: 0, SegmentTyp: "Line", ArcTyp: "undefined" },
          ],
        };
      }

      /**
       * Draft edge contours (each edge as a single line segment).
       * Numbering is a draft: 1..4.
       * IMPORTANT: If your "front/back/left/right" meaning differs, adjust mapping.
       */
      function makeEdgesForRect(xDim: number, yDim: number, k: any): Edge[] {
        const x = Math.max(0, xDim);
        const y = Math.max(0, yDim);

        const edgeThickness = 1; // unknown -> default
        const oversize = 0;

        const mkEdgeContour = (sx: number, sy: number, ex: number, ey: number): Contour => ({
          PosX: sx,
          PosY: sy,
          PosZ: 0,
          Segments: [{
            StartX: sx, StartY: sy, StartZ: 0,
            EndX: ex, EndY: ey, EndZ: 0,
            Radius: 0,
            SegmentTyp: "Line",
            ArcTyp: "undefined",
          }]
        });

        // If no edge info present, return empty
        const hasAny = !!(k?.EdgeFront || k?.EdgeBack || k?.EdgeLeft || k?.EdgeRight);
        if (!hasAny) return [];

        // Draft mapping:
        // 1 = bottom (Front), 2 = right, 3 = top (Back), 4 = left
        const edges: Edge[] = [];

        if (k.EdgeFront) {
          edges.push({
            Number: 1,
            Thickness: edgeThickness,
            Oversize: oversize,
            Name: safeStr(k.EdgeFront),
            EdgeTransition: edgeTransitionForEdge(k, 1),
            Contour: mkEdgeContour(0, 0, x, 0),
          });
        }
        if (k.EdgeRight) {
          edges.push({
            Number: 2,
            Thickness: edgeThickness,
            Oversize: oversize,
            Name: safeStr(k.EdgeRight),
            EdgeTransition: edgeTransitionForEdge(k, 4),
            Contour: mkEdgeContour(x, 0, x, y),
          });
        }
        if (k.EdgeBack) {
          edges.push({
            Number: 3,
            Thickness: edgeThickness,
            Oversize: oversize,
            Name: safeStr(k.EdgeBack),
            EdgeTransition: edgeTransitionForEdge(k, 2),
            Contour: mkEdgeContour(x, y, 0, y),
          });
        }
        if (k.EdgeLeft) {
          edges.push({
            Number: 4,
            Thickness: edgeThickness,
            Oversize: oversize,
            Name: safeStr(k.EdgeLeft),
            EdgeTransition: edgeTransitionForEdge(k, 3),
            Contour: mkEdgeContour(0, y, 0, 0),
          });
        }

        return edges;
      }

      function edgeTransitionForEdge(k: any, edgeNumber: number): EdgeTransition {
        const raw = safeStr(k?.EdgeTransition);
        const parts = raw.split(":");

        const seg = parts[edgeNumber - 1];
        if (!seg || seg.length === 0) return "Short";

        const lastChar = seg[seg.length - 1];
        return lastChar === "0" ? "Short" : "Long";
      }

      /**
       * Draft PartTyp guessing.
       * If you have a reliable field in k (e.g. k.partType), map it here.
       */
      const PART_TYPE_MAP: Record<string, PartTyp> = {
        // sides
        part_sidepanelleft: "LeftSide",
        part_panelwoodframeleft: "LeftSide",

        part_sidepanelright: "RightSide",
        part_panelwoodframeright: "RightSide",

        // back
        part_backwall: "BackPanel",
        part_drawerbackwallwood: "BackPanel",

        // top
        part_shelftop: "TopShelf",
        part_paneltop: "TopShelf",
        part_slopedceilingshelftopangle: "TopShelf",
        part_slopedceilingshelftophor: "TopShelf",

        // bottom
        part_shelfbtm: "BottomShelf",
        part_drawershelfbtm: "BottomShelf",
        part_panelwoodframebtm: "BottomShelf",
        part_toekick: "BottomShelf",

        // front
        part_door: "Front",
        part_fixedfront: "Front",
        part_dishwasherpanel: "Front",
        part_baseunitfridgepanel: "Front",
        part_doorpanelwoodframe: "Front",
        part_fixedfrontpanelwoodframe: "Front",

        // shelves default
        part_shelfadjwood: "Shelf",
        part_shelfadjglass: "Shelf",
        part_shelffixed: "Shelf",
      };

      function guessPartTyp(k: any): PartTyp {
        const key = getPartIdFromBarcode(k).toLowerCase();

        if (PART_TYPE_MAP[key]) {
          return PART_TYPE_MAP[key];
        }

        // fallback heuristic if the part is unknown
        if (key.includes("left")) return "LeftSide";
        if (key.includes("right")) return "RightSide";
        if (key.includes("back")) return "BackPanel";
        if (key.includes("top")) return "TopShelf";
        if (key.includes("bottom")) return "BottomShelf";
        if (key.includes("front")) return "Front";

        return "Shelf";
      }

      function getPartIdFromBarcode(boardK: any): string {
        const bc = safeStr(boardK?.barcode);
        const idx = bc.lastIndexOf("_");
        if (idx <= 0) return bc;
        return bc.substring(0, idx);
      }

      /**
       * Draft read processings.
       * Prepare the workgroup
       */
      function fileEntryToString(fe: any): string {
        const c =
          (fe?.content ?? fe?._content ?? fe?.data ?? fe?.value ?? fe?.text);

        if (typeof c === "string") return c;
        try { return JSON.stringify(c); } catch { return String(c ?? ""); }
      }

      // ===================================================
      // Main builder
      // ===================================================

      function buildNewExchangeFormatOrder(oOutput: any, o: any, ol: any[], result: Map<string, any>): OrderRoot {

        // Create the order object
        const root: OrderRoot = {
          Order: {
            Attributes: [],
            Articles: []
          }
        };

        //--------------------------------------------------
        // Order level
        //--------------------------------------------------

        function addOrderAttr(name: string, value: any, typ: "String" | "Int" | "Decimal" | "Date" | "DateTime" = "String") {
          if (value === null || value === undefined || value === "") return;

          root.Order.Attributes.push({
            Name: name,
            Typ: typ,
            Value: String(value)
          });
        }

        // Core order data
        addOrderAttr("OrderName", o.orderNo);
        addOrderAttr("CustomerName", o.shopContact);
        addOrderAttr("CustomerNumber", o.posOrderDesc1);

        // Dates
        addOrderAttr("OrderDate", formatDate(new Date()), "DateTime");
        addOrderAttr("DeliveryDate", formatDate(o.posDeliveryDate), "DateTime");

        // Address
        addOrderAttr("AddressField1", "Herr / Frau");
        addOrderAttr("AddressField2", o.shopContact);
        addOrderAttr("AddressField3", o.shippingStreetNo);
        addOrderAttr("AddressField4", `${o.shippingZipCode ?? ""} ${o.shippingCity ?? ""}`.trim());

        // Optional technical data
        addOrderAttr("TargetProductionSite", o.targetProductionSite);
        addOrderAttr("ExternalOrderId", o.orderId ?? o.externalId);

        //--------------------------------------------------
        // Order lines
        //--------------------------------------------------

        // Here: we keep your traversal approach and map:
        // - Type "Partgroup" => AssemblyPart
        // - Type "Board" => Part (under current AssemblyPart)

        ol.forEach((p: any) => {
          // One Article per order line (first draft)

          const article: Article = {
            ID: p.orderLineId,
            XDim: toNumber(p?.XDim, 0),
            YDim: toNumber(p?.YDim, 0),
            ZDim: toNumber(p?.ZDim, 0),
            OrX: 0, OrY: 0, OrZ: 0,
            PosX: 0, PosY: 0, PosZ: 0,

            Attributes: [
              attr("Typ", "OrderItem"),
              attr("OrderItemNumber", p.posOrderLineNo, "Int"),
              attr("ArticleNumber", p.posArticleNo),
              attr("ArticleDescription", p.posArticleDesc),
              attr("Quantity", 1, "Int"),
              attr("QuantityUnit", "pcs"),
              attr("ExternalSystemId", p.orderLineId),
            ],
            AssemblyParts: [],
            Workgroups: [],
          };

          //--------------------------------------------------
          // Assemblyparts and parts
          //--------------------------------------------------

          // Create BOM output
          const bom: Map<string, any> = oOutput.createBomOutputCreate_Bom(p.bomEntries);

          // Create Processings (Workgroups/Operations JSON pro Part)
          const procOut: Map<string, BomOutputFileEntry> = oOutput.createBomOutputcreate_CamManagerProcessings(p.bomEntries);


          const findBomParent = (parent: string): any[] => {
            const r: any[] = [];
            bom.forEach((value: any, key: string) => {
              const k = JSON.parse(key);
              if (k.parent === parent) r.push(k);
            });
            return r;
          };

          // Track current AssemblyPart while traversing
          const assemblyById = new Map<string, AssemblyPart>();

          // Traverse up to 3 levels
          const rootNodes = findBomParent("Root");
          rootNodes.forEach((k0: any) => {
            insertK(k0);

            const ap0 = k0.Type === "Partgroup" ? ensureAssembly(k0) : undefined;

            const lvl1 = findBomParent(k0.id);
            lvl1.forEach((k1: any) => {
              insertK(k1, ap0);

              const ap1 = k1.Type === "Partgroup" ? ensureAssembly(k1) : ap0;

              const lvl2 = findBomParent(k1.id);
              lvl2.forEach((k2: any) => {
                insertK(k2, ap1);
              });
            });
          });

          // Push article to order
          root.Order.Articles.push(article);

          //--------------------------------------------------
          // Internal helpers for the order-lines
          //--------------------------------------------------

          // Main insertion helper
          function insertK(k: any, currentAssembly?: AssemblyPart) {

            // Assemblyparts (Partgroups)
            if (k.Type === "Partgroup") {
              ensureAssembly(k);
              return;
            }

            // Parts (Boards)
            // If Board without an explicit Partgroup in the tree, create a fallback assembly
            if (k.Type === "Board") {

              const ap =
                currentAssembly ??
                ensureAssembly({
                  Type: "Partgroup",
                  id: `AUTO_${safeStr(k.parent) || "ROOT"}`,
                  Name: safeStr(k.parent) || "AutoAssembly",
                  category: k.category,
                  width: k.width,
                  depth: k.depth,
                  thickness: k.thickness,
                });

              addBoardToAssembly(k, ap);
            }
          }

          // Create an assemblypart
          function ensureAssembly(partgroupK: any): AssemblyPart {
            const idKey = safeStr(partgroupK.id);
            let ap = assemblyById.get(idKey);
            if (!ap) {
              ap = {
                ID: partgroupK.id,
                XDim: toNumber(partgroupK.width, 0),
                YDim: toNumber(partgroupK.depth, 0),
                ZDim: toNumber(partgroupK.thickness, 0),
                OrX: 0, OrY: 0, OrZ: 0,
                PosX: 0, PosY: 0, PosZ: 0,
                Attributes: [
                  attr("Category", "Partgroup"),
                  attr("Name", partgroupK.id),
                  attr("Description", partgroupK.Name)
                ],
                Parts: [],
              };
              assemblyById.set(idKey, ap);
              article.AssemblyParts.push(ap);
            }
            return ap;
          }

          // Create a part
          function addBoardToAssembly(boardK: any, ap: AssemblyPart) {
            const finishLen = toNumber(boardK.width, 0);
            const finishWid = toNumber(boardK.depth, 0);
            const thick = toNumber(boardK.thickness, 0);

            const contour = makeRectContour(finishLen, finishWid);
            const edges = makeEdgesForRect(finishLen, finishWid, boardK);

            const procFileName = `${boardK.barcode}.processings.json`;
            let workgroups: Workgroup[] = [];

            if (procOut.has(procFileName)) {
              const fe = procOut.get(procFileName)!;
              const raw = String((fe as any).content ?? (fe as any)._content ?? "");
              const parsed = JSON.parse(raw);
              workgroups = parsed?.Workgroups ?? [];
            }

            const part: Part = {

              ID: boardK.barcode,
              Typ: guessPartTyp(boardK),
              Description: safeStr(boardK.Name),
              XDim: finishLen,
              YDim: finishWid,
              ZDim: thick,
              XDimbase: toNumber(boardK.cutLength, finishLen),
              YDimbase: toNumber(boardK.cutWidth, finishWid),
              ZDimbase: thick,
              OrX: 0, OrY: 0, OrZ: 0,
              PosX: 0, PosY: 0, PosZ: 0,

              Attributes: [
                attr("Type", boardK.Type),
                attr("Name", getPartIdFromBarcode(boardK)),
                attr("Description", boardK.Name),
                attr("Parent", boardK.parent),
                attr("Material", boardK.material),
                attr("Grain", boardK.grain),
                attr("ArticleGroup", boardK.ArticleGroup),
              ],
              Edges: edges,

              Partcontour: contour,
              PartBasicContour: contour,

              Workgroups: workgroups,
              Excludes: [],
            };

            ap.Parts.push(part);
          }
        });

        //--------------------------------------------------
        // Return the order-object
        //--------------------------------------------------

        return root;
      }

      // ===================================================
      // Export JSON file
      // ===================================================

      const exportObj = buildNewExchangeFormatOrder(this, o, ol, result);

      // Pretty JSON
      const jsonStr = JSON.stringify(exportObj, null, 2);

      // Create File
      this.createFileEntry(result, "camManager.json", jsonStr);
      // ###############################################################
      // ################### END CUSTOM SCRIPTS ########################
      // ###############################################################
    }
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
    finally {
      internal_leaveBomOrderOutput();
    }
    return result;
  }
}
export function createOrderOutputById(o: IOrderData, ol: IBomOrderLineData[], orderOutputId: string): Map<string, BomOutputFileEntry> {
  if (orderOutputId.toLowerCase() == 'output_productionmanager') {
    let inst = new OrderOutputBaseOutput_ProductionManager();
    return inst.createOrderOutput(o, ol);
  }
  if (orderOutputId.toLowerCase() == 'output_drawings') {
    let inst = new OrderOutputBaseOutput_Drawings();
    return inst.createOrderOutput(o, ol);
  }
  if (orderOutputId.toLowerCase() == 'output_mpr') {
    let inst = new OrderOutputBaseOutput_Mpr();
    return inst.createOrderOutput(o, ol);
  }
  if (orderOutputId.toLowerCase() == 'output_cammanager') {
    let inst = new OrderOutputBaseoutput_CamManager();
    return inst.createOrderOutput(o, ol);
  }
  throw new Error("Could not find given order output type (" + orderOutputId + ")");
}

export async function createFullOrderOutputById(o: IOrderData, ol: IFullOrderLineGroupData[], orderOutputId: string): Promise<Map<string, BomOutputFileEntry>> {
  if (orderOutputId.toLowerCase() == 'output_drawingsplandev') {
    let inst = new OrderOutputBaseoutput_DrawingsPlanDEV();
    return await inst.createFullOrderOutput(o, ol);
  }
  throw new Error("Could not find given order output type (" + orderOutputId + ")");
}

export var bomOrderOutputs: string[] = [
  "Output_ProductionManager",
  "Output_Drawings",
  "Output_Mpr",
  "output_CamManager",
];

export var fullOrderOutputs: string[] = [
  "output_DrawingsPlanDEV",
];
