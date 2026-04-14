import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars } from '../logging'
import { IGlobalVars } from '../global-vars';
import { GlobalFunc } from '../global-func';
import { dc_mc_FrontPanel01, adc_mc_FrontPanel01 } from '../modules/mc_FrontPanel01'
import { dc_mc_Drawer01, adc_mc_Drawer01 } from '../modules/mc_Drawer01'
import { dc_mc_Handle01, adc_mc_Handle01 } from '../modules/mc_Handle01'
import { dc_mc_DrawerBox01, adc_mc_DrawerBox01 } from '../modules/mc_DrawerBox01'
import { dc_mc_Hinge01, adc_mc_Hinge01 } from '../modules/mc_Hinge01'
import { dc_mc_Leg01, adc_mc_Leg01 } from '../modules/mc_Leg01'
import { dc_mr_Paneltop, adc_mr_Paneltop } from '../modules/mr_Paneltop'
import { dc_mc_Panel01, adc_mc_Panel01 } from '../modules/mc_Panel01'
import { dc_mf_Drawer, adc_mf_Drawer } from '../modules/mf_Drawer'
import { dc_mc_PlinthArea01, adc_mc_PlinthArea01 } from '../modules/mc_PlinthArea01'
import { dc_mr_StorageunitSingle, adc_mr_StorageunitSingle } from '../modules/mr_StorageunitSingle'
import { dc_mc_FrontPanelGlass01, adc_mc_FrontPanelGlass01 } from '../modules/mc_FrontPanelGlass01'
import { dc_mc_LightSystem01, adc_mc_LightSystem01 } from '../modules/mc_LightSystem01'
import { dc_mc_HangerSystem01, adc_mc_HangerSystem01 } from '../modules/mc_HangerSystem01'
import { dc_mf_Fliplift, adc_mf_Fliplift } from '../modules/mf_Fliplift'
import { dc_mc_Fliplift01, adc_mc_Fliplift01 } from '../modules/mc_Fliplift01'
import { dc_mf_Door, adc_mf_Door } from '../modules/mf_Door'
import { dc_mc_Door01, adc_mc_Door01 } from '../modules/mc_Door01'
import { dc_mr_CornerunitStraight, adc_mr_CornerunitStraight } from '../modules/mr_CornerunitStraight'
import { dc_mc_ShelfadjGroup01, adc_mc_ShelfadjGroup01 } from '../modules/mc_ShelfadjGroup01'
import { dc_mc_ShelfadjWood01, adc_mc_ShelfadjWood01 } from '../modules/mc_ShelfadjWood01'
import { dc_mc_ShelfadjGlass01, adc_mc_ShelfadjGlass01 } from '../modules/mc_ShelfadjGlass01'
import { dc_mc_ShelfadjDrill01, adc_mc_ShelfadjDrill01 } from '../modules/mc_ShelfadjDrill01'
import { dc_mc_ThermoformedPanel01, adc_mc_ThermoformedPanel01 } from '../modules/mc_ThermoformedPanel01'
import { dc_mc_MetalFrame01, adc_mc_MetalFrame01 } from '../modules/mc_MetalFrame01'
import { dc_mc_Storageunit01, adc_mc_Storageunit01 } from '../modules/mc_Storageunit01'
import { dc_mc_Handlestrip01, adc_mc_Handlestrip01 } from '../modules/mc_Handlestrip01'
import { dc_mc_StorageunitSidepanel01, adc_mc_StorageunitSidepanel01 } from '../modules/mc_StorageunitSidepanel01'
import { dc_mc_StorageunitShelfbtm01, adc_mc_StorageunitShelfbtm01 } from '../modules/mc_StorageunitShelfbtm01'
import { dc_mc_StorageunitShelftop01, adc_mc_StorageunitShelftop01 } from '../modules/mc_StorageunitShelftop01'
import { dc_mc_StorageunitBackwall01, adc_mc_StorageunitBackwall01 } from '../modules/mc_StorageunitBackwall01'
import { dc_mc_StorageunitShelffixed01, adc_mc_StorageunitShelffixed01 } from '../modules/mc_StorageunitShelffixed01'
import { dc_mc_CleatVert01, adc_mc_CleatVert01 } from '../modules/mc_CleatVert01'
import { dc_mc_Panelblind01, adc_mc_Panelblind01 } from '../modules/mc_Panelblind01'
import { dc_mc_CornerunitStraight01, adc_mc_CornerunitStraight01 } from '../modules/mc_CornerunitStraight01'
import { dc_mc_ShelfadjFitting01, adc_mc_ShelfadjFitting01 } from '../modules/mc_ShelfadjFitting01'
import { dc_mf_Oven, adc_mf_Oven } from '../modules/mf_Oven'
import { dc_mc_Oven01, adc_mc_Oven01 } from '../modules/mc_Oven01'
import { dc_mf_Fridge, adc_mf_Fridge } from '../modules/mf_Fridge'
import { dc_mf_RackArea, adc_mf_RackArea } from '../modules/mf_RackArea'
import { dc_mc_RackArea01, adc_mc_RackArea01 } from '../modules/mc_RackArea01'
import { dc_mc_ShelffixedGroup01, adc_mc_ShelffixedGroup01 } from '../modules/mc_ShelffixedGroup01'
import { dc_mc_VertDivider01, adc_mc_VertDivider01 } from '../modules/mc_VertDivider01'
import { dc_mc_Duststrip01, adc_mc_Duststrip01 } from '../modules/mc_Duststrip01'
import { dc_mr_Upright, adc_mr_Upright } from '../modules/mr_Upright'
import { dc_mc_Upright01, adc_mc_Upright01 } from '../modules/mc_Upright01'
import { dc_mr_Countertop, adc_mr_Countertop } from '../modules/mr_Countertop'
import { dc_mc_Countertop01, adc_mc_Countertop01 } from '../modules/mc_Countertop01'
import { dc_mr_Backsplash, adc_mr_Backsplash } from '../modules/mr_Backsplash'
import { dc_mc_Backsplash, adc_mc_Backsplash } from '../modules/mc_Backsplash'
import { dc_mr_Toekick, adc_mr_Toekick } from '../modules/mr_Toekick'
import { dc_mc_Toekick, adc_mc_Toekick } from '../modules/mc_Toekick'
import { dc_mc_Pushtoopen01, adc_mc_Pushtoopen01 } from '../modules/mc_Pushtoopen01'
import { dc_mc_PanelWoodFrame01, adc_mc_PanelWoodFrame01 } from '../modules/mc_PanelWoodFrame01'
import { dc_mc_HingeGroup01, adc_mc_HingeGroup01 } from '../modules/mc_HingeGroup01'
import { dc_mc_FlipliftHardware01, adc_mc_FlipliftHardware01 } from '../modules/mc_FlipliftHardware01'
import { dc_mr_Fingergrip, adc_mr_Fingergrip } from '../modules/mr_Fingergrip'
import { dc_mf_Fixedfront, adc_mf_Fixedfront } from '../modules/mf_Fixedfront'
import { dc_mc_Fixedfront01, adc_mc_Fixedfront01 } from '../modules/mc_Fixedfront01'
import { dc_mc_StorageunitShelftop02, adc_mc_StorageunitShelftop02 } from '../modules/mc_StorageunitShelftop02'
import { dc_mc_StorageunitShelftop03, adc_mc_StorageunitShelftop03 } from '../modules/mc_StorageunitShelftop03'
import { dc_mc_StorageunitShelftop04, adc_mc_StorageunitShelftop04 } from '../modules/mc_StorageunitShelftop04'
import { dc_mc_Fingergrip01, adc_mc_Fingergrip01 } from '../modules/mc_Fingergrip01'
import { dc_mc_Fridge01, adc_mc_Fridge01 } from '../modules/mc_Fridge01'
import { dc_mc_ApplianceGraphic, adc_mc_ApplianceGraphic } from '../modules/mc_ApplianceGraphic'
import { dc_mr_Hood, adc_mr_Hood } from '../modules/mr_Hood'
import { dc_mc_Paneltop01, adc_mc_Paneltop01 } from '../modules/mc_Paneltop01'
import { dc_mf_Hob, adc_mf_Hob } from '../modules/mf_Hob'
import { dc_mc_Hob01, adc_mc_Hob01 } from '../modules/mc_Hob01'
import { dc_mc_Sink01, adc_mc_Sink01 } from '../modules/mc_Sink01'
import { dc_mf_Sink, adc_mf_Sink } from '../modules/mf_Sink'
import { dc_mr_Filler01, adc_mr_Filler01 } from '../modules/mr_Filler01'
import { dc_mf_FillerFront, adc_mf_FillerFront } from '../modules/mf_FillerFront'
import { dc_mc_FillerFront01, adc_mc_FillerFront01 } from '../modules/mc_FillerFront01'
import { dc_mr_Appliance, adc_mr_Appliance } from '../modules/mr_Appliance'
import { dc_mf_Dishwasher, adc_mf_Dishwasher } from '../modules/mf_Dishwasher'
import { dc_mr_CornerFiller, adc_mr_CornerFiller } from '../modules/mr_CornerFiller'
import { dc_mc_Cornerunit01, adc_mc_Cornerunit01 } from '../modules/mc_Cornerunit01'
import { dc_mr_IslandBackwall, adc_mr_IslandBackwall } from '../modules/mr_IslandBackwall'
import { dc_mr_Shelves, adc_mr_Shelves } from '../modules/mr_Shelves'
import { dc_mc_Shelves01, adc_mc_Shelves01 } from '../modules/mc_Shelves01'
import { dc_mc_Bracket01, adc_mc_Bracket01 } from '../modules/mc_Bracket01'
import { dc_mf_CornerFillerFront, adc_mf_CornerFillerFront } from '../modules/mf_CornerFillerFront'
import { dc_mc_CornerFillerFront01, adc_mc_CornerFillerFront01 } from '../modules/mc_CornerFillerFront01'
import { dc_mf_Pullout, adc_mf_Pullout } from '../modules/mf_Pullout'
import { dc_mc_Pullout01, adc_mc_Pullout01 } from '../modules/mc_Pullout01'
import { dc_mc_PulloutHardware01, adc_mc_PulloutHardware01 } from '../modules/mc_PulloutHardware01'
import { dc_mc_Dishwasher01, adc_mc_Dishwasher01 } from '../modules/mc_Dishwasher01'
import { dc_me_ShelfadjMultiple01, adc_me_ShelfadjMultiple01 } from '../modules/me_ShelfadjMultiple01'
import { dc_mr_PlinthAreaBaseboard, adc_mr_PlinthAreaBaseboard } from '../modules/mr_PlinthAreaBaseboard'
import { dc_mc_Baseboard01, adc_mc_Baseboard01 } from '../modules/mc_Baseboard01'
import { dc_mc_BaseunitFridge01, adc_mc_BaseunitFridge01 } from '../modules/mc_BaseunitFridge01'
import { dc_mf_BaseunitFridge, adc_mf_BaseunitFridge } from '../modules/mf_BaseunitFridge'
import { dc_me_LaundryMachine, adc_me_LaundryMachine } from '../modules/me_LaundryMachine'
import { dc_mf_PantryPullout, adc_mf_PantryPullout } from '../modules/mf_PantryPullout'
import { dc_mc_PantryPullout01, adc_mc_PantryPullout01 } from '../modules/mc_PantryPullout01'
import { dc_mr_MirrorBoard, adc_mr_MirrorBoard } from '../modules/mr_MirrorBoard'
import { dc_mr_CoatBoard, adc_mr_CoatBoard } from '../modules/mr_CoatBoard'
import { dc_mf_BoardShelf, adc_mf_BoardShelf } from '../modules/mf_BoardShelf'
import { dc_me_BoardHanger, adc_me_BoardHanger } from '../modules/me_BoardHanger'
import { dc_mc_PantryPulloutHardware01, adc_mc_PantryPulloutHardware01 } from '../modules/mc_PantryPulloutHardware01'
import { dc_mc_MirrorBoard, adc_mc_MirrorBoard } from '../modules/mc_MirrorBoard'
import { dc_mc_Mirror, adc_mc_Mirror } from '../modules/mc_Mirror'
import { dc_mc_BoardShelf, adc_mc_BoardShelf } from '../modules/mc_BoardShelf'
import { dc_mc_CoatBoard, adc_mc_CoatBoard } from '../modules/mc_CoatBoard'
import { dc_mc_BoardHanger, adc_mc_BoardHanger } from '../modules/mc_BoardHanger'
import { dc_me_ClothingOrganizer01, adc_me_ClothingOrganizer01 } from '../modules/me_ClothingOrganizer01'
import { dc_mc_ClothingOrganizerHardware01, adc_mc_ClothingOrganizerHardware01 } from '../modules/mc_ClothingOrganizerHardware01'
import { dc_mc_ClothingOrganizerBoard01, adc_mc_ClothingOrganizerBoard01 } from '../modules/mc_ClothingOrganizerBoard01'
import { dc_mc_SegmentFront01, adc_mc_SegmentFront01 } from '../modules/mc_SegmentFront01'
import { dc_me_HoodInsert, adc_me_HoodInsert } from '../modules/me_HoodInsert'
import { dc_mc_HoodInsert01, adc_mc_HoodInsert01 } from '../modules/mc_HoodInsert01'
import { dc_md_EquipmentArticleBuilder, adc_md_EquipmentArticleBuilder } from '../modules/md_EquipmentArticleBuilder'
import { dc_md_EquipmentPlaceholder, adc_md_EquipmentPlaceholder } from '../modules/md_EquipmentPlaceholder'
import { dc_mr_CeilingFiller, adc_mr_CeilingFiller } from '../modules/mr_CeilingFiller'
import { dc_mc_CeilingFiller01, adc_mc_CeilingFiller01 } from '../modules/mc_CeilingFiller01'
import { dc_md_FrontPlaceholder, adc_md_FrontPlaceholder } from '../modules/md_FrontPlaceholder'
import { dc_md_FrontArticleBuilder, adc_md_FrontArticleBuilder } from '../modules/md_FrontArticleBuilder'
import { ITableParents_mc_Storageunit01 } from '../var-interfaces';

export interface cti_tab_CarcaseStorageunitConstruction {
  readonly in_Part?: string;
  readonly in_LeftTop?: string;
  readonly in_LeftBtm?: string;
  readonly in_RightBtm?: string;
  readonly in_RightTop?: string;
  readonly in_PartBack?: string;
  readonly in_PartFront?: string;
  readonly in_Visible?: boolean;
  readonly in_AdditionalInfo01?: string;
}

export interface ctm_tab_CarcaseStorageunitConstruction {
}

export interface cto_tab_CarcaseStorageunitConstruction extends ctm_tab_CarcaseStorageunitConstruction {
  readonly _id: number;
  Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number;
  Height(m: ITableParents_mc_Storageunit01, Height: number): number;
  Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number;
  WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number;
  HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number;
  DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number;
  readonly EdgeTypeFront?: string;
  readonly EdgeTypeLeft?: string;
  readonly EdgeTypeBack?: string;
  readonly EdgeTypeRight?: string;
  readonly EdgeJointType?: string;
}

export interface ICT_tab_CarcaseStorageunitConstruction
  extends cti_tab_CarcaseStorageunitConstruction, cto_tab_CarcaseStorageunitConstruction { }

export class ct2_tab_CarcaseStorageunitConstruction {

  public findExactly(
    in_Part: string | undefined,
    in_LeftTop: string | undefined,
    in_LeftBtm: string | undefined,
    in_RightBtm: string | undefined,
    in_RightTop: string | undefined,
    in_PartBack: string | undefined,
    in_PartFront: string | undefined,
    in_Visible: boolean | undefined,
    in_AdditionalInfo01: string | undefined,
  ): cto_tab_CarcaseStorageunitConstruction | undefined {
    const res = ct_tab_CarcaseStorageunitConstruction.find((p) =>
      p.in_Part === in_Part
      && p.in_LeftTop === in_LeftTop
      && p.in_LeftBtm === in_LeftBtm
      && p.in_RightBtm === in_RightBtm
      && p.in_RightTop === in_RightTop
      && p.in_PartBack === in_PartBack
      && p.in_PartFront === in_PartFront
      && p.in_Visible === in_Visible
      && p.in_AdditionalInfo01 === in_AdditionalInfo01
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_CarcaseStorageunitConstruction) => boolean
  ): cto_tab_CarcaseStorageunitConstruction | undefined {
    for (let index = 0; index < ct_tab_CarcaseStorageunitConstruction.length; index++) {
      const element = ct_tab_CarcaseStorageunitConstruction[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_CarcaseStorageunitConstruction: ICT_tab_CarcaseStorageunitConstruction[] = [
  {
    _id: 754,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 755,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VV"
  }
  , {
    _id: 756,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 757,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack + m.mod_FingergripType_matrix.LShapeDepth!);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 758,
    in_Part: "part_Railhortopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_RailhortopfrontThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopfrontDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_RailhortopfrontThk - m.g.basic_RailhortopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailhortopfrontOffsetFront - m.g.basic_RailhortopfrontDepth;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 759,
    in_Part: "part_Railhortopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_RailhortopfrontThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopfrontDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_RailhortopfrontThk - m.g.basic_RailhortopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailhortopfrontOffsetFront - m.g.basic_RailhortopfrontDepth - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 760,
    in_Part: "part_Railhortopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "n.a.",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_RailhortopbackThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopbackDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_RailhortopbackThk - m.g.basic_RailhortopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopbackOffsetBack;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 761,
    in_Part: "part_Railhortopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "n.a.",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_RailhortopbackThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopbackDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_RailhortopbackThk - m.g.basic_RailhortopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopbackOffsetBack;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 762,
    in_Part: "part_Railverttopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopfrontHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopfrontThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopfrontHeight - m.g.basic_RailverttopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 763,
    in_Part: "part_Railverttopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return Height;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopfrontThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 764,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 765,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 766,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VV"
  }
  , {
    _id: 767,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 768,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - m.mod_FingergripType_matrix.LShapeDepth! - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 769,
    in_Part: "part_Railhortopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "n.a.",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_RailhortopbackThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopbackDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_RailhortopbackThk - m.g.basic_RailhortopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 770,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 771,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 772,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm - m.g.basic_ShelftopOffsetTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "IV"
  }
  , {
    _id: 773,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 774,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 775,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 776,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm - m.g.basic_ShelftopOffsetTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - m.g.basic_SidepanelOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "IV"
  }
  , {
    _id: 777,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "IV"
  }
  , {
    _id: 778,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - m.g.basic_SidepanelOffsetFront - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 779,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 780,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelrightOversizeTop - m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk + m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VI"
  }
  , {
    _id: 781,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 782,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 783,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 784,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 785,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk - m.g.basic_ShelftopOffsetTop - m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 786,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 787,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 788,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 789,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_ShelftopOffsetTop - m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "MIT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "MM"
  }
  , {
    _id: 790,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "IM"
  }
  , {
    _id: 791,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "IM"
  }
  , {
    _id: 792,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelfbtmThk - m.g.basic_ShelfbtmOffsetBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk + m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 793,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VV"
  }
  , {
    _id: 794,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 795,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 796,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk + m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 797,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelfbtmThk - m.g.basic_ShelfbtmOffsetBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 798,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop + m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "IV"
  }
  , {
    _id: 799,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 800,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return - m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 801,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 802,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelrightOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VI"
  }
  , {
    _id: 803,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 804,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 805,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 806,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 807,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelfbtmThk - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 808,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 809,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 810,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 811,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_ShelftopOffsetTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "MIT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "MM"
  }
  , {
    _id: 812,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "IM"
  }
  , {
    _id: 813,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "VM"
  }
  , {
    _id: 814,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "VM"
  }
  , {
    _id: 815,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "MIT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VM"
  }
  , {
    _id: 816,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 817,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 818,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "MIT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "MM"
  }
  , {
    _id: 819,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "VM"
  }
  , {
    _id: 820,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "MIT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "IM"
  }
  , {
    _id: 821,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 822,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "MIT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "MM"
  }
  , {
    _id: 823,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop + m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "IV"
  }
  , {
    _id: 824,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeTop + m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VV"
  }
  , {
    _id: 825,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk + m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return - m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 826,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 827,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "IV"
  }
  , {
    _id: 828,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "IV"
  }
  , {
    _id: 829,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return - m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 830,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 831,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop + m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "IV"
  }
  , {
    _id: 832,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelfbtmThk - m.g.basic_ShelfbtmOffsetBtm + m.mod_CarcaseSidepanelrightOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk + m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VI"
  }
  , {
    _id: 833,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return - m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 834,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 835,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "IV"
  }
  , {
    _id: 836,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk - m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk + m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 837,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 838,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 839,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 840,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 841,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 842,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 843,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 844,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VV"
  }
  , {
    _id: 845,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "n.a.",
    in_RightTop: "n.a.",
    in_PartBack: "n.a.",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 846,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "n.a.",
    in_RightTop: "n.a.",
    in_PartBack: "n.a.",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 847,
    in_Part: "part_Heatshelf",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - (m.g.basic_HeatshelfOffsetSide * 2);
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_HeatshelfThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_HeatshelfOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_HeatshelfOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - Height - m.g.basic_HeatshelfThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CBE",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CBE",
    EdgeJointType: "II"
  }
  , {
    _id: 848,
    in_Part: "part_HeatshelfFront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - (m.g.basic_HeatshelfOffsetSide * 2);
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return Height - m.g.basic_RailverttopOffsetTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_HeatshelfFrontThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_HeatshelfOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_HeatshelfFrontThk - m.g.basic_HeatshelfFrontOffsetFront;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CBE",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CBE",
    EdgeJointType: "II"
  }
  , {
    _id: 849,
    in_Part: "part_Railverttopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Fixedfront",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return Height + m.g.basic_RailverttopfrontOverdimension - m.g.basic_RailverttopOffsetTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopfrontThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - Height - m.g.basic_RailverttopfrontOverdimension;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 850,
    in_Part: "part_Railverttopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "FixedfrontHs",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return Height + m.g.basic_RailverttopfrontOverdimensionHeatshelf - m.g.basic_RailverttopOffsetTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopfrontThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 851,
    in_Part: "part_Heatshelf",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Fixedfront",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - (m.g.basic_HeatshelfOffsetSide * 2);
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_HeatshelfThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_HeatshelfOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_HeatshelfOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf - m.g.basic_HeatshelfThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CBE",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CBE",
    EdgeJointType: "II"
  }
  , {
    _id: 852,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 853,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Backside",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - m.mod_BackwallThk - m.mod_RailverttopbackThk;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 854,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Backside",
    in_PartFront: "n.a.",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - m.mod_BackwallThk - m.mod_RailverttopbackThk;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 855,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "FixedfrontHs",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailverttopbackOffsetBack;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 856,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "FixedfrontHs",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - (m.mod_BackwallThk / 2) - (m.mod_RailverttopbackThk / 2);
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 857,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "n.a.",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 858,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "n.a.",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailverttopbackOffsetBack;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 859,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "n.a.",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - (m.mod_BackwallThk / 2) - (m.mod_RailverttopbackThk / 2);
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 860,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "FixedfrontHs",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 861,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailverttopbackOffsetBack;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 862,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - (m.mod_BackwallThk / 2) - (m.mod_RailverttopbackThk / 2);
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 863,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Backside",
    in_PartFront: "FixedfrontHs",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - m.mod_BackwallThk - m.mod_RailverttopbackThk;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 864,
    in_Part: "part_Heatshelf",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - (m.g.basic_HeatshelfOffsetSide * 2);
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_HeatshelfThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_HeatshelfOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_HeatshelfOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - Height - m.g.basic_HeatshelfThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CBE",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CBE",
    EdgeJointType: "II"
  }
  , {
    _id: 865,
    in_Part: "part_HeatshelfFront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - (m.g.basic_HeatshelfOffsetSide * 2);
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return Height - m.g.basic_RailverttopOffsetTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_HeatshelfFrontThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_HeatshelfOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_HeatshelfFrontThk - m.g.basic_HeatshelfFrontOffsetFront;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CBE",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CBE",
    EdgeJointType: "II"
  }
  , {
    _id: 866,
    in_Part: "part_Shelffixed",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "ContactBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 867,
    in_Part: "part_Shelffixed",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "ThroughBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 868,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 869,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SidepanelOffsetFront - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 870,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 871,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 872,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + BackWallPosition);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 873,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SidepanelOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "SPB",
    EdgeJointType: "IV"
  }
  , {
    _id: 874,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + BackWallPosition);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 875,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SidepanelOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "IV"
  }
  , {
    _id: 876,
    in_Part: "part_Shelffixed",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "ThroughBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 877,
    in_Part: "part_Shelffixed",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "ContactBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SidepanelOffsetFront - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 878,
    in_Part: "part_SlopedCeilingShelftopAngle",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Mitre",
    in_PartFront: "Mitre",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle - 90, 0, m.mod_CarcaseHeight - m.mod_BackHeight, 0)[3];
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_BackHeight;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "DOW",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 879,
    in_Part: "part_SlopedCeilingShelftopAngle",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Mitre",
    in_PartFront: "Mitre",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle - 90, 0, m.mod_CarcaseHeight - m.mod_BackHeight, 0)[3];
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_BackHeight;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "DOW",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 880,
    in_Part: "part_SlopedCeilingShelftopAngle",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Mitre",
    in_PartFront: "Mitre",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle - 90, (m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - m.g.basic_SlopedCeilingShelvesOffsetBack - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]))), 0, 0)[3];
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_BackHeight - GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle / 2, 0, m.g.basic_SlopedCeilingSidepanelOffsetBack + m.g.basic_SlopedCeilingShelvesOffsetBack, 0)[1];
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetBack + m.g.basic_SlopedCeilingShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "DOW",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 881,
    in_Part: "part_SlopedCeilingShelftopAngle",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Mitre",
    in_PartFront: "Mitre",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle - 90, (m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - m.g.basic_SlopedCeilingShelvesOffsetBack - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]))), 0, 0)[3];
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_BackHeight - GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle / 2, 0, m.g.basic_SlopedCeilingShelvesOffsetBack, 0)[1];
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "DOW",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 882,
    in_Part: "part_SlopedCeilingShelftopHor",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "SlopedCeilingShelftopAngleMitre",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_TopDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.mod_TopDepth;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "II"
  }
  , {
    _id: 883,
    in_Part: "part_SlopedCeilingShelftopHor",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "SlopedCeilingShelftopAngleMitre",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_TopDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.mod_TopDepth;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "II"
  }
  , {
    _id: 884,
    in_Part: "part_SlopedCeilingShelftopHor",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "SlopedCeilingShelftopAngleMitre",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_SlopedCeilingShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]));
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 885,
    in_Part: "part_SlopedCeilingShelftopHor",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "SlopedCeilingShelftopAngleMitre",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_SlopedCeilingShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]));
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 886,
    in_Part: "part_SlopedCeilingShelftopHor",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "SlopedCeilingShelftopAngleMitre",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.mod_FingergripType_matrix.LShapeDepth! + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_SlopedCeilingShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]));
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 887,
    in_Part: "part_SlopedCeilingShelftopHor",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "SlopedCeilingShelftopAngleMitre",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_TopDepth - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.mod_TopDepth;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "II"
  }
  , {
    _id: 888,
    in_Part: "part_SlopedCeilingShelftopHor",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "SlopedCeilingShelftopAngleMitre",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_TopDepth - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.mod_TopDepth;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "II"
  }
  , {
    _id: 889,
    in_Part: "part_SlopedCeilingShelftopHor",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "SlopedCeilingShelftopAngleMitre",
    in_PartFront: "Fingergrip",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.mod_FingergripType_matrix.LShapeDepth! + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_SlopedCeilingShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]));
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 890,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 891,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 892,
    in_Part: "part_Shelffixed",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "ContactBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 893,
    in_Part: "part_Shelffixed",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "ThroughBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 894,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 895,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + BackWallPosition);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 896,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 897,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + BackWallPosition);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 898,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack) - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetBack + m.g.basic_SlopedCeilingShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 899,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingSidepanelOffsetFront - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 900,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "IV"
  }
  , {
    _id: 901,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingSidepanelOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "SPB",
    EdgeJointType: "IV"
  }
  , {
    _id: 902,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "IV"
  }
  , {
    _id: 903,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingSidepanelOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "IV"
  }
  , {
    _id: 904,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 905,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 906,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelrightOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VI"
  }
  , {
    _id: 907,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 908,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 909,
    in_Part: "part_Shelffixed",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "ThroughBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack) - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetBack + m.g.basic_SlopedCeilingShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 910,
    in_Part: "part_Shelffixed",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "ContactBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingSidepanelOffsetFront - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 911,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 912,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 913,
    in_Part: "part_Sidepanelleft",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelleftOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPB",
    EdgeJointType: "VV"
  }
  , {
    _id: 914,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VV"
  }
  , {
    _id: 915,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VV"
  }
  , {
    _id: 916,
    in_Part: "part_Sidepanelright",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return - m.mod_CarcaseSidepanelrightOversizeBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "SPB",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "SPT",
    EdgeJointType: "VV"
  }
  , {
    _id: 917,
    in_Part: "part_Shelffixed",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "ContactBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SidepanelOffsetFront - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 918,
    in_Part: "part_Shelffixed",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "ThroughBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 919,
    in_Part: "part_Shelffixed",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "ContactBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingSidepanelOffsetFront - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 920,
    in_Part: "part_Shelffixed",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "ThroughBw",
    in_PartFront: "Overlayed",
    in_Visible: false,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelffixedThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack) - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetBack + m.g.basic_SlopedCeilingShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 921,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 922,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 923,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 924,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - m.g.basic_SidepanelOffsetFront - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 925,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 926,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 927,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "IM"
  }
  , {
    _id: 928,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk + m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 929,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return - m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 930,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 931,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 932,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "VM"
  }
  , {
    _id: 933,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "MIT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "MM"
  }
  , {
    _id: 934,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "MIT",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "MM"
  }
  , {
    _id: 935,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 936,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 937,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 938,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 939,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 940,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "n.a.",
    in_RightTop: "n.a.",
    in_PartBack: "n.a.",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 941,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 942,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SidepanelOffsetFront - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_ShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 943,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 944,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 945,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack) - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetBack + m.g.basic_SlopedCeilingShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 946,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingSidepanelOffsetFront - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 947,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseShelfbtmOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 948,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SlopedCeilingShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 949,
    in_Part: "part_Shelfbtm",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "SlopedCeiling",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelfbtmThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 950,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 951,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Fingergrip",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack + m.mod_FingergripType_matrix.LShapeDepth!);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 952,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 953,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Fingergrip",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - m.mod_FingergripType_matrix.LShapeDepth! - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 954,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 955,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "IV"
  }
  , {
    _id: 956,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 957,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Fingergrip",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 958,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 959,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "IM"
  }
  , {
    _id: 960,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 961,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Fingergrip",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 962,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 963,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 964,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Fingergrip",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 965,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 966,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "MitreCut",
    in_RightTop: "MitreCut",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "MIT",
    EdgeJointType: "IM"
  }
  , {
    _id: 967,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 968,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Fingergrip",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 969,
    in_Part: "part_Shelftop",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "MitreCut",
    in_RightBtm: "MitreCut",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "IV"
  }
  , {
    _id: 970,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk + m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return - m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_ShelvesOffsetBack;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 971,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return - m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 972,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return - m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "VI"
  }
  , {
    _id: 973,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 974,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return 0;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 975,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "ShelfCSide",
    in_RightBtm: "ShelfCSide",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 976,
    in_Part: "part_Shelftop",
    in_LeftTop: "ShelfCSide",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "ShelfCSide",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_ShelftopThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - BackWallPosition;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return -m.mod_CarcaseShelftopOversizeLeft;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_ShelftopThk;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "CLR",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "CLR",
    EdgeJointType: "VV"
  }
  , {
    _id: 977,
    in_Part: "part_Railhortopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "n.a.",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_RailhortopbackThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopbackDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_RailhortopbackThk - m.g.basic_RailhortopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopbackOffsetBack;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 978,
    in_Part: "part_Railhortopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "n.a.",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_RailhortopbackThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopbackDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_RailhortopbackThk - m.g.basic_RailhortopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopbackOffsetBack;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 979,
    in_Part: "part_Railhortopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "n.a.",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_RailhortopbackThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopbackDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_RailhortopbackThk - m.g.basic_RailhortopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "DOW",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 980,
    in_Part: "part_Railhortopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_RailhortopfrontThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopfrontDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_RailhortopfrontThk - m.g.basic_RailhortopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailhortopfrontOffsetFront - m.g.basic_RailhortopfrontDepth;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 981,
    in_Part: "part_Railhortopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Fingergrip",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_RailhortopfrontThk;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailhortopfrontDepth;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.mod_RailhortopfrontThk - m.g.basic_RailhortopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailhortopfrontOffsetFront - m.g.basic_RailhortopfrontDepth - m.mod_FingergripType_matrix.LShapeDepth!;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 982,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 983,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Backside",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - m.mod_BackwallThk - m.mod_RailverttopbackThk;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 984,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Backside",
    in_PartFront: "n.a.",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - m.mod_BackwallThk - m.mod_RailverttopbackThk;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 985,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "FixedfrontHs",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailverttopbackOffsetBack;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 986,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "FixedfrontHs",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - (m.mod_BackwallThk / 2) - (m.mod_RailverttopbackThk / 2);
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 987,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "n.a.",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 988,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "n.a.",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailverttopbackOffsetBack;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 989,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "n.a.",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - (m.mod_BackwallThk / 2) - (m.mod_RailverttopbackThk / 2);
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 990,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Overlayed",
    in_PartFront: "FixedfrontHs",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 991,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.g.basic_RailverttopbackOffsetBack;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 992,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Inlayed",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - (m.mod_BackwallThk / 2) - (m.mod_RailverttopbackThk / 2);
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 993,
    in_Part: "part_Railverttopback",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "Backside",
    in_PartFront: "FixedfrontHs",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopbackHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopbackThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return BackWallPosition - m.mod_BackwallThk - m.mod_RailverttopbackThk;
    }
    ,
    EdgeTypeFront: "CBE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 994,
    in_Part: "part_Railverttopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Overlayed",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.g.basic_RailverttopfrontHeight;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopfrontThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - m.g.basic_RailverttopfrontHeight - m.g.basic_RailverttopOffsetTop;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 995,
    in_Part: "part_Railverttopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Fingergrip",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return Height;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopfrontThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - Height;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 996,
    in_Part: "part_Railverttopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "Fixedfront",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return Height + m.g.basic_RailverttopfrontOverdimension - m.g.basic_RailverttopOffsetTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopfrontThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - Height - m.g.basic_RailverttopfrontOverdimension;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
  , {
    _id: 997,
    in_Part: "part_Railverttopfront",
    in_LeftTop: "SideCShelf",
    in_LeftBtm: "SideCShelf",
    in_RightBtm: "SideCShelf",
    in_RightTop: "SideCShelf",
    in_PartBack: "n.a.",
    in_PartFront: "FixedfrontHs",
    in_Visible: true,
    in_AdditionalInfo01: "All",
    Width(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
    }
    ,
    Height(m: ITableParents_mc_Storageunit01, Height: number): number {
      return Height + m.g.basic_RailverttopfrontOverdimensionHeatshelf - m.g.basic_RailverttopOffsetTop;
    }
    ,
    Depth(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_RailverttopfrontThk;
    }
    ,
    WidthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_SidepanelleftThk;
    }
    ,
    HeightPos(m: ITableParents_mc_Storageunit01, Height: number): number {
      return m.mod_CarcaseHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
    }
    ,
    DepthPos(m: ITableParents_mc_Storageunit01, BackWallPosition: number): number {
      return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
    }
    ,
    EdgeTypeFront: "CFE",
    EdgeTypeLeft: "DOW",
    EdgeTypeBack: "CBE",
    EdgeTypeRight: "DOW",
    EdgeJointType: "II"
  }
];
