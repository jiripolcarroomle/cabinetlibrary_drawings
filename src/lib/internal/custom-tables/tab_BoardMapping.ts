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

export interface cti_tab_BoardMapping {
  readonly in_NeutralColor?: string;
  readonly in_BoardThkMin: number;
  readonly in_BoardThkMax: number;
}

export interface ctm_tab_BoardMapping {
}

export interface cto_tab_BoardMapping extends ctm_tab_BoardMapping {
  readonly _id: number;
  readonly BoardId?: string;
}

export interface ICT_tab_BoardMapping
  extends cti_tab_BoardMapping, cto_tab_BoardMapping { }

export class ct2_tab_BoardMapping {

  public findExactly(
    in_NeutralColor: string | undefined,
    in_BoardThkMin: number,
    in_BoardThkMax: number,
  ): cto_tab_BoardMapping | undefined {
    const res = ct_tab_BoardMapping.find((p) =>
      p.in_NeutralColor === in_NeutralColor
      && p.in_BoardThkMin === in_BoardThkMin
      && p.in_BoardThkMax === in_BoardThkMax
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_BoardMapping) => boolean
  ): cto_tab_BoardMapping | undefined {
    for (let index = 0; index < ct_tab_BoardMapping.length; index++) {
      const element = ct_tab_BoardMapping[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_BoardMapping: ICT_tab_BoardMapping[] = [
  {
    _id: 1,
    in_NeutralColor: "152",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "U502ST9_38"
  }
  , {
    _id: 2,
    in_NeutralColor: "152",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "U502ST9_8"
  }
  , {
    _id: 3,
    in_NeutralColor: "152",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "U502ST9_16"
  }
  , {
    _id: 4,
    in_NeutralColor: "152",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "U502ST9_19"
  }
  , {
    _id: 5,
    in_NeutralColor: "152",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "U502ST9_25"
  }
  , {
    _id: 6,
    in_NeutralColor: "155",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "U575ST9_25"
  }
  , {
    _id: 7,
    in_NeutralColor: "155",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "U575ST9_16"
  }
  , {
    _id: 8,
    in_NeutralColor: "155",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "U575ST9_8"
  }
  , {
    _id: 9,
    in_NeutralColor: "155",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "U575ST9_38"
  }
  , {
    _id: 10,
    in_NeutralColor: "155",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "U575ST9_19"
  }
  , {
    _id: 11,
    in_NeutralColor: "160",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "U640ST9_38"
  }
  , {
    _id: 12,
    in_NeutralColor: "160",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "U640ST9_8"
  }
  , {
    _id: 13,
    in_NeutralColor: "160",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "U640ST9_16"
  }
  , {
    _id: 14,
    in_NeutralColor: "160",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "U640ST9_25"
  }
  , {
    _id: 15,
    in_NeutralColor: "160",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "U640ST9_19"
  }
  , {
    _id: 16,
    in_NeutralColor: "165",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "U645ST9_19"
  }
  , {
    _id: 17,
    in_NeutralColor: "165",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "U645ST9_16"
  }
  , {
    _id: 18,
    in_NeutralColor: "165",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "U645ST9_8"
  }
  , {
    _id: 19,
    in_NeutralColor: "165",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "U645ST9_38"
  }
  , {
    _id: 20,
    in_NeutralColor: "165",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "U645ST9_25"
  }
  , {
    _id: 21,
    in_NeutralColor: "190",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "W980ST7_25"
  }
  , {
    _id: 22,
    in_NeutralColor: "190",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "W980ST7_38"
  }
  , {
    _id: 23,
    in_NeutralColor: "190",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "W980ST7_19"
  }
  , {
    _id: 24,
    in_NeutralColor: "190",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "W980ST7_16"
  }
  , {
    _id: 25,
    in_NeutralColor: "190",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "W980ST7_8"
  }
  , {
    _id: 26,
    in_NeutralColor: "199",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "U999ST7_38"
  }
  , {
    _id: 27,
    in_NeutralColor: "199",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "U999ST7_8"
  }
  , {
    _id: 28,
    in_NeutralColor: "199",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "U999ST7_16"
  }
  , {
    _id: 29,
    in_NeutralColor: "199",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "U999ST7_19"
  }
  , {
    _id: 30,
    in_NeutralColor: "199",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "U999ST7_19"
  }
  , {
    _id: 31,
    in_NeutralColor: "230",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "H3860ST9_38"
  }
  , {
    _id: 32,
    in_NeutralColor: "230",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "H3860ST9_16"
  }
  , {
    _id: 33,
    in_NeutralColor: "230",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "H3860ST9_19"
  }
  , {
    _id: 34,
    in_NeutralColor: "230",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "H3860ST9_25"
  }
  , {
    _id: 35,
    in_NeutralColor: "230",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "H3860ST9_8"
  }
  , {
    _id: 36,
    in_NeutralColor: "215",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "H1715ST12_19"
  }
  , {
    _id: 37,
    in_NeutralColor: "215",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "H1715ST12_8"
  }
  , {
    _id: 38,
    in_NeutralColor: "215",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "H1715ST12_38"
  }
  , {
    _id: 39,
    in_NeutralColor: "215",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "H1715ST12_25"
  }
  , {
    _id: 40,
    in_NeutralColor: "215",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "H1715ST12_16"
  }
  , {
    _id: 41,
    in_NeutralColor: "214",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "H3734ST9_19"
  }
  , {
    _id: 42,
    in_NeutralColor: "214",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "H3734ST9_8"
  }
  , {
    _id: 43,
    in_NeutralColor: "214",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "H3734ST9_38"
  }
  , {
    _id: 44,
    in_NeutralColor: "214",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "H3734ST9_25"
  }
  , {
    _id: 45,
    in_NeutralColor: "214",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "H3734ST9_16"
  }
  , {
    _id: 46,
    in_NeutralColor: "240",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "H3190ST19_25"
  }
  , {
    _id: 47,
    in_NeutralColor: "240",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "H3190ST19_38"
  }
  , {
    _id: 48,
    in_NeutralColor: "240",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "H3190ST19_19"
  }
  , {
    _id: 49,
    in_NeutralColor: "240",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "H3190ST19_8"
  }
  , {
    _id: 50,
    in_NeutralColor: "240",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "H3190ST19_16"
  }
  , {
    _id: 51,
    in_NeutralColor: "326",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "F235ST76_25"
  }
  , {
    _id: 52,
    in_NeutralColor: "326",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "F235ST76_19"
  }
  , {
    _id: 53,
    in_NeutralColor: "326",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "F235ST76_16"
  }
  , {
    _id: 54,
    in_NeutralColor: "326",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "F235ST76_8"
  }
  , {
    _id: 55,
    in_NeutralColor: "326",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "F235ST76_38"
  }
  , {
    _id: 56,
    in_NeutralColor: "316",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "F186ST9_25"
  }
  , {
    _id: 57,
    in_NeutralColor: "316",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "F186ST9_19"
  }
  , {
    _id: 58,
    in_NeutralColor: "316",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "F186ST9_16"
  }
  , {
    _id: 59,
    in_NeutralColor: "316",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "F186ST9_38"
  }
  , {
    _id: 60,
    in_NeutralColor: "316",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "F186ST9_8"
  }
  , {
    _id: 61,
    in_NeutralColor: "324",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "F244ST76_25"
  }
  , {
    _id: 62,
    in_NeutralColor: "324",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "F244ST76_19"
  }
  , {
    _id: 63,
    in_NeutralColor: "324",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "F244ST76_16"
  }
  , {
    _id: 64,
    in_NeutralColor: "324",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "F244ST76_8"
  }
  , {
    _id: 65,
    in_NeutralColor: "324",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "F244ST76_38"
  }
  , {
    _id: 66,
    in_NeutralColor: "380",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "F800ST9_25"
  }
  , {
    _id: 67,
    in_NeutralColor: "380",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "F800ST9_19"
  }
  , {
    _id: 68,
    in_NeutralColor: "380",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "F800ST9_16"
  }
  , {
    _id: 69,
    in_NeutralColor: "380",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "F800ST9_8"
  }
  , {
    _id: 70,
    in_NeutralColor: "380",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "F800ST9_38"
  }
  , {
    _id: 71,
    in_NeutralColor: "222",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "H2033ST10_38"
  }
  , {
    _id: 72,
    in_NeutralColor: "222",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "H2033ST10_8"
  }
  , {
    _id: 73,
    in_NeutralColor: "222",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "H2033ST10_25"
  }
  , {
    _id: 74,
    in_NeutralColor: "222",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "H2033ST10_19"
  }
  , {
    _id: 75,
    in_NeutralColor: "222",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "H2033ST10_16"
  }
  , {
    _id: 76,
    in_NeutralColor: "229",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "H1199ST12_38"
  }
  , {
    _id: 77,
    in_NeutralColor: "229",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "H1199ST12_8"
  }
  , {
    _id: 78,
    in_NeutralColor: "229",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "H1199ST12_25"
  }
  , {
    _id: 79,
    in_NeutralColor: "229",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "H1199ST12_19"
  }
  , {
    _id: 80,
    in_NeutralColor: "229",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "H1199ST12_16"
  }
  , {
    _id: 81,
    in_NeutralColor: "178",
    in_BoardThkMin: 15,
    in_BoardThkMax: 17,
    BoardId: "U708ST9_16"
  }
  , {
    _id: 82,
    in_NeutralColor: "178",
    in_BoardThkMin: 18,
    in_BoardThkMax: 20,
    BoardId: "U708ST9_19"
  }
  , {
    _id: 83,
    in_NeutralColor: "178",
    in_BoardThkMin: 20,
    in_BoardThkMax: 30,
    BoardId: "U708ST9_25"
  }
  , {
    _id: 84,
    in_NeutralColor: "178",
    in_BoardThkMin: 30,
    in_BoardThkMax: 99,
    BoardId: "U708ST9_38"
  }
  , {
    _id: 85,
    in_NeutralColor: "178",
    in_BoardThkMin: 7,
    in_BoardThkMax: 9,
    BoardId: "U708ST9_8"
  }
];
