import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars, internal_enterModulePrepareContext, internal_leaveModulePrepareContext } from '../logging'
import { IGlobalVars } from '../global-vars';
import { GlobalFunc } from '../global-func';
import { dc_mc_FrontPanel01, adc_mc_FrontPanel01, cbp_mc_FrontPanel01 } from '../modules/mc_FrontPanel01'
import { dc_mc_Drawer01, adc_mc_Drawer01, cbp_mc_Drawer01 } from '../modules/mc_Drawer01'
import { dc_mc_Handle01, adc_mc_Handle01, cbp_mc_Handle01 } from '../modules/mc_Handle01'
import { dc_mc_DrawerBox01, adc_mc_DrawerBox01, cbp_mc_DrawerBox01 } from '../modules/mc_DrawerBox01'
import { dc_mc_Hinge01, adc_mc_Hinge01, cbp_mc_Hinge01 } from '../modules/mc_Hinge01'
import { dc_mc_Leg01, adc_mc_Leg01, cbp_mc_Leg01 } from '../modules/mc_Leg01'
import { dc_mr_Paneltop, adc_mr_Paneltop, cbp_mr_Paneltop } from '../modules/mr_Paneltop'
import { dc_mc_Panel01, adc_mc_Panel01, cbp_mc_Panel01 } from '../modules/mc_Panel01'
import { dc_mf_Drawer, adc_mf_Drawer, cbp_mf_Drawer } from '../modules/mf_Drawer'
import { dc_mc_PlinthArea01, adc_mc_PlinthArea01, cbp_mc_PlinthArea01 } from '../modules/mc_PlinthArea01'
import { dc_mr_StorageunitSingle, adc_mr_StorageunitSingle, cbp_mr_StorageunitSingle } from '../modules/mr_StorageunitSingle'
import { dc_mc_FrontPanelGlass01, adc_mc_FrontPanelGlass01, cbp_mc_FrontPanelGlass01 } from '../modules/mc_FrontPanelGlass01'
import { dc_mc_LightSystem01, adc_mc_LightSystem01, cbp_mc_LightSystem01 } from '../modules/mc_LightSystem01'
import { dc_mc_HangerSystem01, adc_mc_HangerSystem01, cbp_mc_HangerSystem01 } from '../modules/mc_HangerSystem01'
import { dc_mf_Fliplift, adc_mf_Fliplift, cbp_mf_Fliplift } from '../modules/mf_Fliplift'
import { dc_mc_Fliplift01, adc_mc_Fliplift01, cbp_mc_Fliplift01 } from '../modules/mc_Fliplift01'
import { dc_mf_Door, adc_mf_Door, cbp_mf_Door } from '../modules/mf_Door'
import { dc_mc_Door01, adc_mc_Door01, cbp_mc_Door01 } from '../modules/mc_Door01'
import { dc_mr_CornerunitStraight, adc_mr_CornerunitStraight, cbp_mr_CornerunitStraight } from '../modules/mr_CornerunitStraight'
import { dc_mc_ShelfadjGroup01, adc_mc_ShelfadjGroup01, cbp_mc_ShelfadjGroup01 } from '../modules/mc_ShelfadjGroup01'
import { dc_mc_ShelfadjWood01, adc_mc_ShelfadjWood01, cbp_mc_ShelfadjWood01 } from '../modules/mc_ShelfadjWood01'
import { dc_mc_ShelfadjGlass01, adc_mc_ShelfadjGlass01, cbp_mc_ShelfadjGlass01 } from '../modules/mc_ShelfadjGlass01'
import { dc_mc_ShelfadjDrill01, adc_mc_ShelfadjDrill01, cbp_mc_ShelfadjDrill01 } from '../modules/mc_ShelfadjDrill01'
import { dc_mc_ThermoformedPanel01, adc_mc_ThermoformedPanel01, cbp_mc_ThermoformedPanel01 } from '../modules/mc_ThermoformedPanel01'
import { dc_mc_MetalFrame01, adc_mc_MetalFrame01, cbp_mc_MetalFrame01 } from '../modules/mc_MetalFrame01'
import { dc_mc_Storageunit01, adc_mc_Storageunit01, cbp_mc_Storageunit01 } from '../modules/mc_Storageunit01'
import { dc_mc_Handlestrip01, adc_mc_Handlestrip01, cbp_mc_Handlestrip01 } from '../modules/mc_Handlestrip01'
import { dc_mc_StorageunitSidepanel01, adc_mc_StorageunitSidepanel01, cbp_mc_StorageunitSidepanel01 } from '../modules/mc_StorageunitSidepanel01'
import { dc_mc_StorageunitShelfbtm01, adc_mc_StorageunitShelfbtm01, cbp_mc_StorageunitShelfbtm01 } from '../modules/mc_StorageunitShelfbtm01'
import { dc_mc_StorageunitShelftop01, adc_mc_StorageunitShelftop01, cbp_mc_StorageunitShelftop01 } from '../modules/mc_StorageunitShelftop01'
import { dc_mc_StorageunitBackwall01, adc_mc_StorageunitBackwall01, cbp_mc_StorageunitBackwall01 } from '../modules/mc_StorageunitBackwall01'
import { dc_mc_StorageunitShelffixed01, adc_mc_StorageunitShelffixed01, cbp_mc_StorageunitShelffixed01 } from '../modules/mc_StorageunitShelffixed01'
import { dc_mc_CleatVert01, adc_mc_CleatVert01, cbp_mc_CleatVert01 } from '../modules/mc_CleatVert01'
import { dc_mc_Panelblind01, adc_mc_Panelblind01, cbp_mc_Panelblind01 } from '../modules/mc_Panelblind01'
import { dc_mc_CornerunitStraight01, adc_mc_CornerunitStraight01, cbp_mc_CornerunitStraight01 } from '../modules/mc_CornerunitStraight01'
import { dc_mc_ShelfadjFitting01, adc_mc_ShelfadjFitting01, cbp_mc_ShelfadjFitting01 } from '../modules/mc_ShelfadjFitting01'
import { dc_mf_Oven, adc_mf_Oven, cbp_mf_Oven } from '../modules/mf_Oven'
import { dc_mc_Oven01, adc_mc_Oven01, cbp_mc_Oven01 } from '../modules/mc_Oven01'
import { dc_mf_Fridge, adc_mf_Fridge, cbp_mf_Fridge } from '../modules/mf_Fridge'
import { dc_mf_RackArea, adc_mf_RackArea, cbp_mf_RackArea } from '../modules/mf_RackArea'
import { dc_mc_RackArea01, adc_mc_RackArea01, cbp_mc_RackArea01 } from '../modules/mc_RackArea01'
import { dc_mc_ShelffixedGroup01, adc_mc_ShelffixedGroup01, cbp_mc_ShelffixedGroup01 } from '../modules/mc_ShelffixedGroup01'
import { dc_mc_VertDivider01, adc_mc_VertDivider01, cbp_mc_VertDivider01 } from '../modules/mc_VertDivider01'
import { dc_mc_Duststrip01, adc_mc_Duststrip01, cbp_mc_Duststrip01 } from '../modules/mc_Duststrip01'
import { dc_mr_Upright, adc_mr_Upright, cbp_mr_Upright } from '../modules/mr_Upright'
import { dc_mc_Upright01, adc_mc_Upright01, cbp_mc_Upright01 } from '../modules/mc_Upright01'
import { dc_mr_Countertop, adc_mr_Countertop, cbp_mr_Countertop } from '../modules/mr_Countertop'
import { dc_mc_Countertop01, adc_mc_Countertop01, cbp_mc_Countertop01 } from '../modules/mc_Countertop01'
import { dc_mr_Backsplash, adc_mr_Backsplash, cbp_mr_Backsplash } from '../modules/mr_Backsplash'
import { dc_mc_Backsplash, adc_mc_Backsplash, cbp_mc_Backsplash } from '../modules/mc_Backsplash'
import { dc_mr_Toekick, adc_mr_Toekick, cbp_mr_Toekick } from '../modules/mr_Toekick'
import { dc_mc_Toekick, adc_mc_Toekick, cbp_mc_Toekick } from '../modules/mc_Toekick'
import { dc_mc_Pushtoopen01, adc_mc_Pushtoopen01, cbp_mc_Pushtoopen01 } from '../modules/mc_Pushtoopen01'
import { dc_mc_PanelWoodFrame01, adc_mc_PanelWoodFrame01, cbp_mc_PanelWoodFrame01 } from '../modules/mc_PanelWoodFrame01'
import { dc_mc_HingeGroup01, adc_mc_HingeGroup01, cbp_mc_HingeGroup01 } from '../modules/mc_HingeGroup01'
import { dc_mc_FlipliftHardware01, adc_mc_FlipliftHardware01, cbp_mc_FlipliftHardware01 } from '../modules/mc_FlipliftHardware01'
import { dc_mr_Fingergrip, adc_mr_Fingergrip, cbp_mr_Fingergrip } from '../modules/mr_Fingergrip'
import { dc_mf_Fixedfront, adc_mf_Fixedfront, cbp_mf_Fixedfront } from '../modules/mf_Fixedfront'
import { dc_mc_Fixedfront01, adc_mc_Fixedfront01, cbp_mc_Fixedfront01 } from '../modules/mc_Fixedfront01'
import { dc_mc_StorageunitShelftop02, adc_mc_StorageunitShelftop02, cbp_mc_StorageunitShelftop02 } from '../modules/mc_StorageunitShelftop02'
import { dc_mc_StorageunitShelftop03, adc_mc_StorageunitShelftop03, cbp_mc_StorageunitShelftop03 } from '../modules/mc_StorageunitShelftop03'
import { dc_mc_StorageunitShelftop04, adc_mc_StorageunitShelftop04, cbp_mc_StorageunitShelftop04 } from '../modules/mc_StorageunitShelftop04'
import { dc_mc_Fingergrip01, adc_mc_Fingergrip01, cbp_mc_Fingergrip01 } from '../modules/mc_Fingergrip01'
import { dc_mc_Fridge01, adc_mc_Fridge01, cbp_mc_Fridge01 } from '../modules/mc_Fridge01'
import { dc_mc_ApplianceGraphic, adc_mc_ApplianceGraphic, cbp_mc_ApplianceGraphic } from '../modules/mc_ApplianceGraphic'
import { dc_mr_Hood, adc_mr_Hood, cbp_mr_Hood } from '../modules/mr_Hood'
import { dc_mc_Paneltop01, adc_mc_Paneltop01, cbp_mc_Paneltop01 } from '../modules/mc_Paneltop01'
import { dc_mf_Hob, adc_mf_Hob, cbp_mf_Hob } from '../modules/mf_Hob'
import { dc_mc_Hob01, adc_mc_Hob01, cbp_mc_Hob01 } from '../modules/mc_Hob01'
import { dc_mc_Sink01, adc_mc_Sink01, cbp_mc_Sink01 } from '../modules/mc_Sink01'
import { dc_mf_Sink, adc_mf_Sink, cbp_mf_Sink } from '../modules/mf_Sink'
import { dc_mr_Filler01, adc_mr_Filler01, cbp_mr_Filler01 } from '../modules/mr_Filler01'
import { dc_mf_FillerFront, adc_mf_FillerFront, cbp_mf_FillerFront } from '../modules/mf_FillerFront'
import { dc_mc_FillerFront01, adc_mc_FillerFront01, cbp_mc_FillerFront01 } from '../modules/mc_FillerFront01'
import { dc_mr_Appliance, adc_mr_Appliance, cbp_mr_Appliance } from '../modules/mr_Appliance'
import { dc_mf_Dishwasher, adc_mf_Dishwasher, cbp_mf_Dishwasher } from '../modules/mf_Dishwasher'
import { dc_mr_CornerFiller, adc_mr_CornerFiller, cbp_mr_CornerFiller } from '../modules/mr_CornerFiller'
import { dc_mc_Cornerunit01, adc_mc_Cornerunit01, cbp_mc_Cornerunit01 } from '../modules/mc_Cornerunit01'
import { dc_mr_IslandBackwall, adc_mr_IslandBackwall, cbp_mr_IslandBackwall } from '../modules/mr_IslandBackwall'
import { dc_mr_Shelves, adc_mr_Shelves, cbp_mr_Shelves } from '../modules/mr_Shelves'
import { dc_mc_Shelves01, adc_mc_Shelves01, cbp_mc_Shelves01 } from '../modules/mc_Shelves01'
import { dc_mc_Bracket01, adc_mc_Bracket01, cbp_mc_Bracket01 } from '../modules/mc_Bracket01'
import { dc_mf_CornerFillerFront, adc_mf_CornerFillerFront, cbp_mf_CornerFillerFront } from '../modules/mf_CornerFillerFront'
import { dc_mc_CornerFillerFront01, adc_mc_CornerFillerFront01, cbp_mc_CornerFillerFront01 } from '../modules/mc_CornerFillerFront01'
import { dc_mf_Pullout, adc_mf_Pullout, cbp_mf_Pullout } from '../modules/mf_Pullout'
import { dc_mc_Pullout01, adc_mc_Pullout01, cbp_mc_Pullout01 } from '../modules/mc_Pullout01'
import { dc_mc_PulloutHardware01, adc_mc_PulloutHardware01, cbp_mc_PulloutHardware01 } from '../modules/mc_PulloutHardware01'
import { dc_mc_Dishwasher01, adc_mc_Dishwasher01, cbp_mc_Dishwasher01 } from '../modules/mc_Dishwasher01'
import { dc_me_ShelfadjMultiple01, adc_me_ShelfadjMultiple01, cbp_me_ShelfadjMultiple01 } from '../modules/me_ShelfadjMultiple01'
import { dc_mr_PlinthAreaBaseboard, adc_mr_PlinthAreaBaseboard, cbp_mr_PlinthAreaBaseboard } from '../modules/mr_PlinthAreaBaseboard'
import { dc_mc_Baseboard01, adc_mc_Baseboard01, cbp_mc_Baseboard01 } from '../modules/mc_Baseboard01'
import { dc_mc_BaseunitFridge01, adc_mc_BaseunitFridge01, cbp_mc_BaseunitFridge01 } from '../modules/mc_BaseunitFridge01'
import { dc_mf_BaseunitFridge, adc_mf_BaseunitFridge, cbp_mf_BaseunitFridge } from '../modules/mf_BaseunitFridge'
import { dc_me_LaundryMachine, adc_me_LaundryMachine, cbp_me_LaundryMachine } from '../modules/me_LaundryMachine'
import { dc_mf_PantryPullout, adc_mf_PantryPullout, cbp_mf_PantryPullout } from '../modules/mf_PantryPullout'
import { dc_mc_PantryPullout01, adc_mc_PantryPullout01, cbp_mc_PantryPullout01 } from '../modules/mc_PantryPullout01'
import { dc_mr_MirrorBoard, adc_mr_MirrorBoard, cbp_mr_MirrorBoard } from '../modules/mr_MirrorBoard'
import { dc_mr_CoatBoard, adc_mr_CoatBoard, cbp_mr_CoatBoard } from '../modules/mr_CoatBoard'
import { dc_mf_BoardShelf, adc_mf_BoardShelf, cbp_mf_BoardShelf } from '../modules/mf_BoardShelf'
import { dc_me_BoardHanger, adc_me_BoardHanger, cbp_me_BoardHanger } from '../modules/me_BoardHanger'
import { dc_mc_PantryPulloutHardware01, adc_mc_PantryPulloutHardware01, cbp_mc_PantryPulloutHardware01 } from '../modules/mc_PantryPulloutHardware01'
import { dc_mc_MirrorBoard, adc_mc_MirrorBoard, cbp_mc_MirrorBoard } from '../modules/mc_MirrorBoard'
import { dc_mc_Mirror, adc_mc_Mirror, cbp_mc_Mirror } from '../modules/mc_Mirror'
import { dc_mc_BoardShelf, adc_mc_BoardShelf, cbp_mc_BoardShelf } from '../modules/mc_BoardShelf'
import { dc_mc_CoatBoard, adc_mc_CoatBoard, cbp_mc_CoatBoard } from '../modules/mc_CoatBoard'
import { dc_mc_BoardHanger, adc_mc_BoardHanger, cbp_mc_BoardHanger } from '../modules/mc_BoardHanger'
import { dc_me_ClothingOrganizer01, adc_me_ClothingOrganizer01, cbp_me_ClothingOrganizer01 } from '../modules/me_ClothingOrganizer01'
import { dc_mc_ClothingOrganizerHardware01, adc_mc_ClothingOrganizerHardware01, cbp_mc_ClothingOrganizerHardware01 } from '../modules/mc_ClothingOrganizerHardware01'
import { dc_mc_ClothingOrganizerBoard01, adc_mc_ClothingOrganizerBoard01, cbp_mc_ClothingOrganizerBoard01 } from '../modules/mc_ClothingOrganizerBoard01'
import { dc_mc_SegmentFront01, adc_mc_SegmentFront01, cbp_mc_SegmentFront01 } from '../modules/mc_SegmentFront01'
import { dc_me_HoodInsert, adc_me_HoodInsert, cbp_me_HoodInsert } from '../modules/me_HoodInsert'
import { dc_mc_HoodInsert01, adc_mc_HoodInsert01, cbp_mc_HoodInsert01 } from '../modules/mc_HoodInsert01'
import { dc_md_EquipmentArticleBuilder, adc_md_EquipmentArticleBuilder, cbp_md_EquipmentArticleBuilder } from '../modules/md_EquipmentArticleBuilder'
import { dc_md_EquipmentPlaceholder, adc_md_EquipmentPlaceholder, cbp_md_EquipmentPlaceholder } from '../modules/md_EquipmentPlaceholder'
import { dc_mr_CeilingFiller, adc_mr_CeilingFiller, cbp_mr_CeilingFiller } from '../modules/mr_CeilingFiller'
import { dc_mc_CeilingFiller01, adc_mc_CeilingFiller01, cbp_mc_CeilingFiller01 } from '../modules/mc_CeilingFiller01'
import { dc_md_FrontPlaceholder, adc_md_FrontPlaceholder, cbp_md_FrontPlaceholder } from '../modules/md_FrontPlaceholder'
import { dc_md_FrontArticleBuilder, adc_md_FrontArticleBuilder, cbp_md_FrontArticleBuilder } from '../modules/md_FrontArticleBuilder'
import { dc_mr_Filler, adc_mr_Filler, cbp_mr_Filler } from '../modules/mr_Filler'
import { dc_mc_Filler01, adc_mc_Filler01, cbp_mc_Filler01 } from '../modules/mc_Filler01'
import { ITableParents_mc_Handle01_mc_Handlestrip01 } from '../var-interfaces';

export interface cti_tab_HandleConstruction {
  readonly in_FrontType?: string;
  readonly in_PosHorizontal?: string;
  readonly in_PosVertical?: string;
  readonly in_PosType?: string;
  readonly in_HandlePosHorizontal?: string;
  readonly in_HandlePosVertical?: string;
}

export interface ctm_tab_HandleConstruction {
}

export interface cto_tab_HandleConstruction extends ctm_tab_HandleConstruction {
  readonly _id: number;
  readonly Rotation: number;
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number;
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number;
}

export interface ICT_tab_HandleConstruction
  extends cti_tab_HandleConstruction, cto_tab_HandleConstruction { }

export class ct2_tab_HandleConstruction {

  public findExactly(
    in_FrontType: string | undefined,
    in_PosHorizontal: string | undefined,
    in_PosVertical: string | undefined,
    in_PosType: string | undefined,
    in_HandlePosHorizontal: string | undefined,
    in_HandlePosVertical: string | undefined,
  ): cto_tab_HandleConstruction | undefined {
    const res = ct_tab_HandleConstruction.find((p) =>
      p.in_FrontType === in_FrontType
      && p.in_PosHorizontal === in_PosHorizontal
      && p.in_PosVertical === in_PosVertical
      && p.in_PosType === in_PosType
      && p.in_HandlePosHorizontal === in_HandlePosHorizontal
      && p.in_HandlePosVertical === in_HandlePosVertical
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_HandleConstruction) => boolean
  ): cto_tab_HandleConstruction | undefined {
    for (let index = 0; index < ct_tab_HandleConstruction.length; index++) {
      const element = ct_tab_HandleConstruction[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_HandleConstruction: ICT_tab_HandleConstruction[] = [
  {
    _id: 2497,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2498,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2499,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2500,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2501,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2502,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2503,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2504,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2505,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2506,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2507,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2508,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2509,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2510,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2511,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2512,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2513,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2514,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2515,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2516,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2517,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2518,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2519,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2520,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2521,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2522,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2523,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2524,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2525,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2526,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2527,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2528,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2529,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2530,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2531,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2532,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2533,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2534,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2535,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2536,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2537,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2538,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2539,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2540,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2541,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2542,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2543,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2544,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2545,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2546,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2547,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2548,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2549,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2550,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2551,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2552,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2553,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2554,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2555,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2556,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2557,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2558,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2559,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2560,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2561,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2562,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2563,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2564,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2565,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2566,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2567,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2568,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2569,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2570,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2571,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2572,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2573,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2574,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2575,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2576,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2577,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2578,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2579,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2580,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2581,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2582,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2583,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2584,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2585,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2586,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2587,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2588,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2589,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2590,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2591,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2592,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2593,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2594,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2595,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2596,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2597,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2598,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2599,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2600,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2601,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2602,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2603,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2604,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2605,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2606,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2607,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2608,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2609,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2610,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2611,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2612,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2613,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2614,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2615,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2616,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2617,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2618,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2619,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2620,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2621,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2622,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2623,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2624,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2625,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2626,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2627,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2628,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2629,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2630,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2631,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2632,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2633,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2634,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2635,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2636,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2637,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2638,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2639,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2640,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2641,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2642,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2643,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2644,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2645,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2646,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2647,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2648,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2649,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2650,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2651,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2652,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2653,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2654,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2655,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2656,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2657,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2658,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2659,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2660,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2661,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2662,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2663,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2664,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2665,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2666,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2667,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2668,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2669,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2670,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2671,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2672,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2673,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2674,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2675,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2676,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2677,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2678,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2679,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2680,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2681,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2682,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2683,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2684,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2685,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2686,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2687,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2688,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2689,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2690,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2691,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2692,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2693,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2694,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2695,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2696,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2697,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2698,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2699,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2700,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2701,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2702,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2703,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2704,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2705,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2706,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2707,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2708,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2709,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2710,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2711,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2712,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2713,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2714,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2715,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2716,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2717,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2718,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2719,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2720,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2721,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2722,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2723,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2724,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2725,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2726,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2727,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2728,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2729,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2730,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2731,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2732,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2733,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2734,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2735,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2736,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2737,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2738,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2739,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2740,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2741,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2742,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2743,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2744,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2745,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2746,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2747,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2748,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2749,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2750,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2751,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2752,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2753,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2754,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2755,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2756,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2757,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2758,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2759,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2760,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2761,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2762,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2763,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2764,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2765,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2766,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2767,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2768,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2769,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2770,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2771,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2772,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2773,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2774,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2775,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2776,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2777,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2778,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2779,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2780,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2781,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2782,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2783,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2784,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2785,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2786,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2787,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2788,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2789,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2790,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2791,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2792,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2793,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2794,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2795,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2796,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2797,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2798,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2799,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2800,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2801,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2802,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2803,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2804,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2805,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2806,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2807,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2808,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2809,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2810,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2811,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2812,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2813,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2814,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2815,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2816,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2817,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2818,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2819,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2820,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2821,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2822,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2823,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2824,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2825,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2826,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2827,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2828,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2829,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2830,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2831,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2832,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2833,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2834,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2835,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2836,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2837,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2838,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2839,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2840,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2841,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2842,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2843,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2844,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2845,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2846,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2847,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2848,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2849,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2850,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2851,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2852,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2853,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2854,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2855,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2856,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2857,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2858,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2859,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2860,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2861,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2862,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2863,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2864,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2865,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2866,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2867,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2868,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2869,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2870,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2871,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2872,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2873,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2874,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2875,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2876,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2877,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2878,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2879,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2880,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2881,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2882,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2883,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2884,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2885,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2886,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2887,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2888,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2889,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2890,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2891,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2892,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2893,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2894,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2895,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2896,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2897,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2898,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2899,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2900,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2901,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2902,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2903,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2904,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2905,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2906,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2907,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2908,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2909,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2910,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2911,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2912,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2913,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2914,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2915,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2916,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2917,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2918,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2919,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2920,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2921,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2922,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2923,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2924,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2925,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2926,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2927,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2928,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2929,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2930,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2931,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2932,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2933,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2934,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2935,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2936,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2937,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2938,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2939,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2940,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2941,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2942,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2943,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2944,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2945,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2946,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2947,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2948,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2949,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2950,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2951,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2952,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2953,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2954,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2955,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2956,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2957,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2958,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2959,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2960,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2961,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2962,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2963,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2964,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2965,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2966,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2967,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2968,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2969,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2970,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2971,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2972,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2973,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2974,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2975,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2976,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2977,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2978,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2979,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2980,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2981,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2982,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2983,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2984,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2985,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2986,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2987,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2988,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2989,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2990,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2991,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2992,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2993,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2994,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2995,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2996,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2997,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2998,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 2999,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3000,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSide",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3001,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3002,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3003,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3004,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 0,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3005,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3006,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3007,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3008,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddle",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3009,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3010,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3011,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3012,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3013,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3014,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3015,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3016,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3017,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3018,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3019,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleHeight / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3020,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleHorMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 180,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3021,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3022,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3023,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) - m.mod_HandleOffsetY;
    }

  }
  , {
    _id: 3024,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverse",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Height - HandleYDistance - (HandleLength / 2) + ((HandleLength - DrillDistance) / 2) - m.mod_HandleOffsetY;
    }

  }
];
