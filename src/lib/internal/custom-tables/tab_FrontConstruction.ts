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
import { ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01 } from '../var-interfaces';

export interface cti_tab_FrontConstruction {
  readonly in_PartGroup?: string;
  readonly in_FrontProgram?: string;
  readonly in_FrontColor?: string;
  readonly in_FrontDesign?: string;
  readonly in_MinWidth: number;
  readonly in_MaxWidth: number;
  readonly in_MinHeight: number;
  readonly in_MaxHeight: number;
  readonly in_HandleStrip?: string;
  readonly in_HandlePosType?: string;
}

export interface ctm_tab_FrontConstruction {
}

export interface cto_tab_FrontConstruction extends ctm_tab_FrontConstruction {
  readonly _id: number;
  readonly FrontModuleId?: string;
  readonly FrontConstructionId?: string;
  Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number;
  Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number;
  readonly Thickness: number;
  WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number;
  HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number;
  DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number;
  readonly EdgeTypeTop?: string;
  readonly EdgeTypeLeft?: string;
  readonly EdgeTypeBtm?: string;
  readonly EdgeTypeRight?: string;
  readonly EdgeJointType?: string;
}

export interface ICT_tab_FrontConstruction
  extends cti_tab_FrontConstruction, cto_tab_FrontConstruction { }

export class ct2_tab_FrontConstruction {

  public findExactly(
    in_PartGroup: string | undefined,
    in_FrontProgram: string | undefined,
    in_FrontColor: string | undefined,
    in_FrontDesign: string | undefined,
    in_MinWidth: number,
    in_MaxWidth: number,
    in_MinHeight: number,
    in_MaxHeight: number,
    in_HandleStrip: string | undefined,
    in_HandlePosType: string | undefined,
  ): cto_tab_FrontConstruction | undefined {
    const res = ct_tab_FrontConstruction.find((p) =>
      p.in_PartGroup === in_PartGroup
      && p.in_FrontProgram === in_FrontProgram
      && p.in_FrontColor === in_FrontColor
      && p.in_FrontDesign === in_FrontDesign
      && p.in_MinWidth === in_MinWidth
      && p.in_MaxWidth === in_MaxWidth
      && p.in_MinHeight === in_MinHeight
      && p.in_MaxHeight === in_MaxHeight
      && p.in_HandleStrip === in_HandleStrip
      && p.in_HandlePosType === in_HandlePosType
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_FrontConstruction) => boolean
  ): cto_tab_FrontConstruction | undefined {
    for (let index = 0; index < ct_tab_FrontConstruction.length; index++) {
      const element = ct_tab_FrontConstruction[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_FrontConstruction: ICT_tab_FrontConstruction[] = [
  {
    _id: 339,
    in_PartGroup: "Door",
    in_FrontProgram: "Classic",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 340,
    in_PartGroup: "Drawer",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 341,
    in_PartGroup: "Door",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripTop",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripTop01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 342,
    in_PartGroup: "Drawer",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripTop",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripTop01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 343,
    in_PartGroup: "Door",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripBtm",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripBtm01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 344,
    in_PartGroup: "Drawer",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripBtm",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripBtm01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 345,
    in_PartGroup: "Door",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripLeft",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripLeft01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 346,
    in_PartGroup: "Drawer",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripLeft",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripLeft01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 347,
    in_PartGroup: "Door",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripRight",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripRight01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 348,
    in_PartGroup: "Drawer",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripRight",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripRight01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 349,
    in_PartGroup: "Filler",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 350,
    in_PartGroup: "Fliplift",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 351,
    in_PartGroup: "Door",
    in_FrontProgram: "Nature",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 352,
    in_PartGroup: "Drawer",
    in_FrontProgram: "Tradition",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 220,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 353,
    in_PartGroup: "Door",
    in_FrontProgram: "Tradition",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "WoodFrame01",
    FrontConstructionId: "TraditionFrame01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 354,
    in_PartGroup: "Drawer",
    in_FrontProgram: "Modern",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 220,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 355,
    in_PartGroup: "Door",
    in_FrontProgram: "Modern",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "WoodFrame01",
    FrontConstructionId: "ModernFrame01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 356,
    in_PartGroup: "Drawer",
    in_FrontProgram: "Tradition",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 220,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "WoodFrame01",
    FrontConstructionId: "TraditionFrame01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 357,
    in_PartGroup: "Drawer",
    in_FrontProgram: "Modern",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 220,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "WoodFrame01",
    FrontConstructionId: "ModernFrame01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 358,
    in_PartGroup: "Fliplift",
    in_FrontProgram: "Tradition",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 299,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 359,
    in_PartGroup: "Fliplift",
    in_FrontProgram: "Tradition",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 300,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "WoodFrame01",
    FrontConstructionId: "TraditionFrame01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 360,
    in_PartGroup: "Fliplift",
    in_FrontProgram: "Modern",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 300,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "WoodFrame01",
    FrontConstructionId: "ModernFrame01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 361,
    in_PartGroup: "Fliplift",
    in_FrontProgram: "Modern",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 299,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 362,
    in_PartGroup: "Dishwasher",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 363,
    in_PartGroup: "Dishwasher",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripBtm",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripBtm01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 364,
    in_PartGroup: "Dishwasher",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripLeft",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripLeft01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 365,
    in_PartGroup: "Dishwasher",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripRight",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripRight01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 366,
    in_PartGroup: "Dishwasher",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "StripGroup1",
    in_HandlePosType: "StripTop",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StripTop01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 367,
    in_PartGroup: "Dishwasher",
    in_FrontProgram: "Modern",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 220,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 368,
    in_PartGroup: "Dishwasher",
    in_FrontProgram: "Modern",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 220,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "WoodFrame01",
    FrontConstructionId: "ModernFrame01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 369,
    in_PartGroup: "Dishwasher",
    in_FrontProgram: "Tradition",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 220,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 370,
    in_PartGroup: "Dishwasher",
    in_FrontProgram: "Tradition",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 220,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "WoodFrame01",
    FrontConstructionId: "TraditionFrame01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 371,
    in_PartGroup: "CornerFiller",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 372,
    in_PartGroup: "CornerStraightFiller",
    in_FrontProgram: "All",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "StandardPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 373,
    in_PartGroup: "Door",
    in_FrontProgram: "Tuscan",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "TuscanPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 374,
    in_PartGroup: "Fliplift",
    in_FrontProgram: "Tuscan",
    in_FrontColor: "All",
    in_FrontDesign: "All",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "FrontPanel01",
    FrontConstructionId: "TuscanPanel01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 375,
    in_PartGroup: "Door",
    in_FrontProgram: "Classic",
    in_FrontColor: "All",
    in_FrontDesign: "SegmentGlassClassic",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "SegmentFront01",
    FrontConstructionId: "SegmentFront01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
  , {
    _id: 376,
    in_PartGroup: "Door",
    in_FrontProgram: "Nature",
    in_FrontColor: "All",
    in_FrontDesign: "SegmentGlassClassic",
    in_MinWidth: 0,
    in_MaxWidth: 9999,
    in_MinHeight: 0,
    in_MaxHeight: 9999,
    in_HandleStrip: "All",
    in_HandlePosType: "All",
    FrontModuleId: "SegmentFront01",
    FrontConstructionId: "SegmentFront01",
    Width(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontWidth - m.mod_FrontGapVert;
    }
    ,
    Height(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontHeight;
    }
    ,
    Thickness: 19,
    WidthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return m.mod_FrontGapVert / 2;
    }
    ,
    HeightPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    DepthPos(m: ITableParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_Pullout01): number {
      return 0;
    }
    ,
    EdgeTypeTop: "FRE",
    EdgeTypeLeft: "FRE",
    EdgeTypeBtm: "FRE",
    EdgeTypeRight: "FRE",
    EdgeJointType: "VVVV"
  }
];
