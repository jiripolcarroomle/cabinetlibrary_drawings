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
import { dc_md_EquipmentArticleBuilder, adc_md_EquipmentArticleBuilder, cbp_md_EquipmentArticleBuilder } from '../modules/md_EquipmentArticleBuilder'
import { dc_md_EquipmentPlaceholder, adc_md_EquipmentPlaceholder, cbp_md_EquipmentPlaceholder } from '../modules/md_EquipmentPlaceholder'
import { dc_mr_CeilingFiller, adc_mr_CeilingFiller, cbp_mr_CeilingFiller } from '../modules/mr_CeilingFiller'
import { dc_mc_CeilingFiller01, adc_mc_CeilingFiller01, cbp_mc_CeilingFiller01 } from '../modules/mc_CeilingFiller01'
import { dc_md_FrontPlaceholder, adc_md_FrontPlaceholder, cbp_md_FrontPlaceholder } from '../modules/md_FrontPlaceholder'
import { dc_md_FrontArticleBuilder, adc_md_FrontArticleBuilder, cbp_md_FrontArticleBuilder } from '../modules/md_FrontArticleBuilder'
import { dc_mr_FillerStraight, adc_mr_FillerStraight, cbp_mr_FillerStraight } from '../modules/mr_FillerStraight'
import { dc_mc_FillerStraight01, adc_mc_FillerStraight01, cbp_mc_FillerStraight01 } from '../modules/mc_FillerStraight01'
import { dc_mc_FillerHardware01, adc_mc_FillerHardware01, cbp_mc_FillerHardware01 } from '../modules/mc_FillerHardware01'
import { dc_mc_FillerSupportPanels01, adc_mc_FillerSupportPanels01, cbp_mc_FillerSupportPanels01 } from '../modules/mc_FillerSupportPanels01'
import { dc_mc_HoodCarcaseParts01, adc_mc_HoodCarcaseParts01, cbp_mc_HoodCarcaseParts01 } from '../modules/mc_HoodCarcaseParts01'
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
    _id: 5989,
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
    _id: 5990,
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
    _id: 5991,
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
    _id: 5992,
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
    _id: 5993,
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
    _id: 5994,
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
    _id: 5995,
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
    _id: 5996,
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
    _id: 5997,
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
    _id: 5998,
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
    _id: 5999,
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
    _id: 6000,
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
    _id: 6001,
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
    _id: 6002,
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
    _id: 6003,
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
    _id: 6004,
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
    _id: 6005,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6006,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6007,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6008,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6009,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6010,
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
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6011,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6012,
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
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6013,
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
    _id: 6014,
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
    _id: 6015,
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
    _id: 6016,
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
    _id: 6017,
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
    _id: 6018,
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
    _id: 6019,
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
    _id: 6020,
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
    _id: 6021,
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
    _id: 6022,
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
    _id: 6023,
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
    _id: 6024,
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
    _id: 6025,
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
    _id: 6026,
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
    _id: 6027,
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
    _id: 6028,
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
    _id: 6029,
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
    _id: 6030,
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
    _id: 6031,
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
    _id: 6032,
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
    _id: 6033,
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
    _id: 6034,
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
    _id: 6035,
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
    _id: 6036,
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
    _id: 6037,
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
    _id: 6038,
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
    _id: 6039,
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
    _id: 6040,
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
    _id: 6041,
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
    _id: 6042,
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
    _id: 6043,
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
    _id: 6044,
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
    _id: 6045,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6046,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6047,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6048,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6049,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6050,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6051,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6052,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6053,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6054,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6055,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6056,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6057,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6058,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6059,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6060,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6061,
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
    _id: 6062,
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
    _id: 6063,
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
    _id: 6064,
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
    _id: 6065,
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
    _id: 6066,
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
    _id: 6067,
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
    _id: 6068,
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
    _id: 6069,
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
    _id: 6070,
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
    _id: 6071,
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
    _id: 6072,
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
    _id: 6073,
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
    _id: 6074,
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
    _id: 6075,
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
    _id: 6076,
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
    _id: 6077,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6078,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6079,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6080,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6081,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6082,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6083,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6084,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6085,
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
    _id: 6086,
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
    _id: 6087,
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
    _id: 6088,
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
    _id: 6089,
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
    _id: 6090,
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
    _id: 6091,
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
    _id: 6092,
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
    _id: 6093,
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
    _id: 6094,
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
    _id: 6095,
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
    _id: 6096,
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
    _id: 6097,
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
    _id: 6098,
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
    _id: 6099,
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
    _id: 6100,
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
    _id: 6101,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6102,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6103,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6104,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6105,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6106,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6107,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6108,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6109,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6110,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6111,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6112,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6113,
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
    _id: 6114,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6115,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6116,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6117,
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
    _id: 6118,
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
    _id: 6119,
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
    _id: 6120,
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
    _id: 6121,
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
    _id: 6122,
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
    _id: 6123,
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
    _id: 6124,
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
    _id: 6125,
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
    _id: 6126,
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
    _id: 6127,
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
    _id: 6128,
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
    _id: 6129,
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
    _id: 6130,
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
    _id: 6131,
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
    _id: 6132,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6133,
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
    _id: 6134,
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
    _id: 6135,
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
    _id: 6136,
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
    _id: 6137,
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
    _id: 6138,
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
    _id: 6139,
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
    _id: 6140,
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
    _id: 6141,
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
    _id: 6142,
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
    _id: 6143,
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
    _id: 6144,
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
    _id: 6145,
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
    _id: 6146,
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
    _id: 6147,
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
    _id: 6148,
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
    _id: 6149,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6150,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6151,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6152,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6153,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6154,
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
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6155,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6156,
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
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6157,
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
    _id: 6158,
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
    _id: 6159,
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
    _id: 6160,
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
    _id: 6161,
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
    _id: 6162,
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
    _id: 6163,
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
    _id: 6164,
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
    _id: 6165,
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
    _id: 6166,
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
    _id: 6167,
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
    _id: 6168,
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
    _id: 6169,
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
    _id: 6170,
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
    _id: 6171,
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
    _id: 6172,
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
    _id: 6173,
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
    _id: 6174,
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
    _id: 6175,
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
    _id: 6176,
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
    _id: 6177,
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
    _id: 6178,
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
    _id: 6179,
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
    _id: 6180,
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
    _id: 6181,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6182,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6183,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6184,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6185,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6186,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6187,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6188,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6189,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6190,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6191,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6192,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6193,
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
    _id: 6194,
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
    _id: 6195,
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
    _id: 6196,
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
    _id: 6197,
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
    _id: 6198,
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
    _id: 6199,
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
    _id: 6200,
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
    _id: 6201,
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
    _id: 6202,
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
    _id: 6203,
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
    _id: 6204,
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
    _id: 6205,
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
    _id: 6206,
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
    _id: 6207,
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
    _id: 6208,
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
    _id: 6209,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6210,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6211,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6212,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6213,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6214,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6215,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6216,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6217,
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
    _id: 6218,
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
    _id: 6219,
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
    _id: 6220,
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
    _id: 6221,
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
    _id: 6222,
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
    _id: 6223,
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
    _id: 6224,
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
    _id: 6225,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6226,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6227,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6228,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6229,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6230,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6231,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6232,
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
    _id: 6233,
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
    _id: 6234,
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
    _id: 6235,
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
    _id: 6236,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6237,
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
    _id: 6238,
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
    _id: 6239,
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
    _id: 6240,
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
    _id: 6241,
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
    _id: 6242,
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
    _id: 6243,
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
    _id: 6244,
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
    _id: 6245,
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
    _id: 6246,
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
    _id: 6247,
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
    _id: 6248,
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
    _id: 6249,
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
    _id: 6250,
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
    _id: 6251,
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
    _id: 6252,
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
    _id: 6253,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6254,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6255,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6256,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6257,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6258,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6259,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6260,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6261,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6262,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6263,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6264,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6265,
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
    _id: 6266,
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
    _id: 6267,
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
    _id: 6268,
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
    _id: 6269,
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
    _id: 6270,
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
    _id: 6271,
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
    _id: 6272,
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
    _id: 6273,
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
    _id: 6274,
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
    _id: 6275,
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
    _id: 6276,
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
    _id: 6277,
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
    _id: 6278,
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
    _id: 6279,
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
    _id: 6280,
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
    _id: 6281,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6282,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6283,
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
    _id: 6284,
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
    _id: 6285,
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
    _id: 6286,
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
    _id: 6287,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6288,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6289,
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
    _id: 6290,
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
    _id: 6291,
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
    _id: 6292,
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
    _id: 6293,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6294,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6295,
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
    _id: 6296,
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
    _id: 6297,
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
    _id: 6298,
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
    _id: 6299,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6300,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6301,
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
    _id: 6302,
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
    _id: 6303,
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
    _id: 6304,
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
    _id: 6305,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6306,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6307,
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
    _id: 6308,
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
    _id: 6309,
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
    _id: 6310,
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
    _id: 6311,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6312,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6313,
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
    _id: 6314,
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
    _id: 6315,
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
    _id: 6316,
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
    _id: 6317,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6318,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6319,
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
    _id: 6320,
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
    _id: 6321,
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
    _id: 6322,
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
    _id: 6323,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6324,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6325,
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
    _id: 6326,
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
    _id: 6327,
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
    _id: 6328,
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
    _id: 6329,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6330,
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
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6331,
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
    _id: 6332,
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
    _id: 6333,
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
    _id: 6334,
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
    _id: 6335,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6336,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6337,
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
    _id: 6338,
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
    _id: 6339,
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
    _id: 6340,
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
    _id: 6341,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6342,
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
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6343,
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
    _id: 6344,
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
    _id: 6345,
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
    _id: 6346,
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
    _id: 6347,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6348,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6349,
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
    _id: 6350,
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
    _id: 6351,
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
    _id: 6352,
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
    _id: 6353,
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
    _id: 6354,
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
    _id: 6355,
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
    _id: 6356,
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
    _id: 6357,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6358,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6359,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6360,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6361,
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
    _id: 6362,
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
    _id: 6363,
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
    _id: 6364,
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
    _id: 6365,
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
    _id: 6366,
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
    _id: 6367,
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
    _id: 6368,
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
    _id: 6369,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6370,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6371,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6372,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6373,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6374,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6375,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6376,
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
    _id: 6377,
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
    _id: 6378,
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
    _id: 6379,
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
    _id: 6380,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6381,
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
    _id: 6382,
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
    _id: 6383,
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
    _id: 6384,
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
    _id: 6385,
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
    _id: 6386,
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
    _id: 6387,
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
    _id: 6388,
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
    _id: 6389,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6390,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6391,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6392,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6393,
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
    _id: 6394,
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
    _id: 6395,
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
    _id: 6396,
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
    _id: 6397,
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
    _id: 6398,
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
    _id: 6399,
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
    _id: 6400,
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
    _id: 6401,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6402,
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
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6403,
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
    _id: 6404,
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
    _id: 6405,
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
    _id: 6406,
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
    _id: 6407,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6408,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6409,
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
    _id: 6410,
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
    _id: 6411,
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
    _id: 6412,
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
    _id: 6413,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6414,
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
      return HandleYDistance + (HandleHeight / 2) - ((HandleHeight - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6415,
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
    _id: 6416,
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
    _id: 6417,
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
    _id: 6418,
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
    _id: 6419,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6420,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6421,
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
    _id: 6422,
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
    _id: 6423,
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
    _id: 6424,
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
    _id: 6425,
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
    _id: 6426,
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
    _id: 6427,
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
    _id: 6428,
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
    _id: 6429,
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
    _id: 6430,
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
    _id: 6431,
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
    _id: 6432,
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
    _id: 6433,
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
    _id: 6434,
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
    _id: 6435,
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
    _id: 6436,
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
    _id: 6437,
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
    _id: 6438,
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
    _id: 6439,
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
    _id: 6440,
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
    _id: 6441,
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
    _id: 6442,
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
    _id: 6443,
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
    _id: 6444,
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
    _id: 6445,
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
    _id: 6446,
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
    _id: 6447,
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
    _id: 6448,
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
    _id: 6449,
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
    _id: 6450,
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
    _id: 6451,
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
    _id: 6452,
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
    _id: 6453,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6454,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6455,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6456,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6457,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6458,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6459,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6460,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6461,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6462,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6463,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6464,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6465,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6466,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6467,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6468,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6469,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6470,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6471,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6472,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6473,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6474,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6475,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6476,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6477,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6478,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6479,
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
      return HandleYDistance + (HandleHeight / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6480,
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
      return HandleYDistance + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6481,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6482,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6483,
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
      return HandleYDistance + (HandleLength / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6484,
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
      return HandleYDistance + (HandleLength / 2) - ((HandleLength - DrillDistance) / 2) + m.mod_HandleOffsetY - (m.mod_HandlePosFrontOversize == "IncludeFrontOversizeBottom" ? m.mod_FrontOversizeBtm : 0);
    }

  }
  , {
    _id: 6485,
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
    _id: 6486,
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
    _id: 6487,
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
    _id: 6488,
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
    _id: 6489,
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
    _id: 6490,
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
    _id: 6491,
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
    _id: 6492,
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
    _id: 6493,
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
    _id: 6494,
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
    _id: 6495,
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
    _id: 6496,
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
    _id: 6497,
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
    _id: 6498,
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
    _id: 6499,
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
    _id: 6500,
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
    _id: 6501,
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
    _id: 6502,
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
    _id: 6503,
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
    _id: 6504,
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
    _id: 6505,
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
    _id: 6506,
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
    _id: 6507,
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
    _id: 6508,
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
    _id: 6509,
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
    _id: 6510,
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
    _id: 6511,
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
    _id: 6512,
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
    _id: 6513,
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
    _id: 6514,
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
    _id: 6515,
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
    _id: 6516,
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
  , {
    _id: 6517,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6518,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6519,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6520,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6521,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6522,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6523,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6524,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6525,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6526,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6527,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6528,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6529,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6530,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6531,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6532,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6533,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6534,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6535,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6536,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6537,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6538,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6539,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6540,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6541,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6542,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6543,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6544,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6545,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6546,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6547,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6548,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6549,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6550,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6551,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6552,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6553,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6554,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6555,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6556,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6557,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6558,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6559,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6560,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6561,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6562,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6563,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6564,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideTopAligned",
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
    _id: 6565,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6566,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6567,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6568,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6569,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6570,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6571,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6572,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6573,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6574,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6575,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6576,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6577,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6578,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6579,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6580,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6581,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6582,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6583,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6584,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6585,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6586,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6587,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6588,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6589,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6590,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6591,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6592,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6593,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6594,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6595,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6596,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6597,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6598,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6599,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6600,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6601,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6602,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6603,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6604,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertSideInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6605,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6606,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6607,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6608,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6609,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6610,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6611,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6612,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertSideInverseTopAligned",
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
    _id: 6613,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6614,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6615,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6616,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6617,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6618,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6619,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6620,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6621,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6622,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6623,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6624,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6625,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6626,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6627,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6628,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6629,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6630,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6631,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6632,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6633,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6634,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6635,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6636,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6637,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6638,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6639,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6640,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6641,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6642,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6643,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6644,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6645,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6646,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6647,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6648,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6649,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6650,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6651,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6652,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6653,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6654,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6655,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6656,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6657,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6658,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6659,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6660,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6661,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6662,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6663,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6664,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6665,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6666,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6667,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6668,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6669,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6670,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6671,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6672,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6673,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6674,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6675,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6676,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6677,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6678,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6679,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6680,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6681,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6682,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6683,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6684,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6685,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6686,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6687,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6688,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6689,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6690,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6691,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6692,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6693,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6694,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6695,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6696,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleTopAligned",
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
    _id: 6697,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6698,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6699,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6700,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6701,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6702,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6703,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6704,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6705,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6706,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6707,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6708,
    in_FrontType: "Door",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6709,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6710,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6711,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6712,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6713,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6714,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6715,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6716,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6717,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6718,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6719,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6720,
    in_FrontType: "Drawer",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6721,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6722,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6723,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6724,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6725,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6726,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6727,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6728,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6729,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6730,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6731,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6732,
    in_FrontType: "Fliplift",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6733,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6734,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6735,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6736,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6737,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6738,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6739,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6740,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6741,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6742,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6743,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6744,
    in_FrontType: "Dishwasher",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6745,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6746,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6747,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6748,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + (HandleHeight / 2) + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6749,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6750,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6751,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6752,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6753,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6754,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - (HandleHeight / 2) - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6755,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6756,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6757,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6758,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6759,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6760,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 270,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleXDistance + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6761,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6762,
    in_FrontType: "Door",
    in_PosHorizontal: "Left",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6763,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6764,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6765,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6766,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width - HandleXDistance - m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6767,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6768,
    in_FrontType: "Door",
    in_PosHorizontal: "Right",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6769,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6770,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Border",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6771,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Border",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6772,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Center",
    in_PosType: "HandleVertMiddleInverseTopAligned",
    in_HandlePosHorizontal: "Center",
    in_HandlePosVertical: "Center",
    Rotation: 90,
    PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return m.mod_Width / 2 + m.mod_HandleOffsetX;
    }
    ,
    PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance: number, HandleLength: number, HandleHeight: number, DrillDistance: number, HandleLine: number): number {
      return HandleLine + m.mod_HandleOffsetY - (HandleLength / 2);
    }

  }
  , {
    _id: 6773,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6774,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6775,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6776,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Down",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6777,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6778,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6779,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
    _id: 6780,
    in_FrontType: "Pullout",
    in_PosHorizontal: "Center",
    in_PosVertical: "Up",
    in_PosType: "HandleVertMiddleInverseTopAligned",
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
