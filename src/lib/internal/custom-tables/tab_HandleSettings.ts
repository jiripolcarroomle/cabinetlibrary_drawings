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
import { ITableParents_mc_Handle01_mc_Handlestrip01 } from '../var-interfaces';

export interface cti_tab_HandleSettings {
  readonly in_PartGroup?: string;
  readonly in_HandlePosType?: string;
}

export interface ctm_tab_HandleSettings {
}

export interface cto_tab_HandleSettings extends ctm_tab_HandleSettings {
  readonly _id: number;
  readonly ReferencePointX?: string;
  readonly ReferencePointY?: string;
  readonly DistanceX: number;
  readonly DistanceY: number;
  readonly HandleOrientation?: string;
}

export interface ICT_tab_HandleSettings
  extends cti_tab_HandleSettings, cto_tab_HandleSettings { }

export class ct2_tab_HandleSettings {

  public findExactly(
    in_PartGroup: string | undefined,
    in_HandlePosType: string | undefined,
  ): cto_tab_HandleSettings | undefined {
    const res = ct_tab_HandleSettings.find((p) =>
      p.in_PartGroup === in_PartGroup
      && p.in_HandlePosType === in_HandlePosType
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_HandleSettings) => boolean
  ): cto_tab_HandleSettings | undefined {
    for (let index = 0; index < ct_tab_HandleSettings.length; index++) {
      const element = ct_tab_HandleSettings[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_HandleSettings: ICT_tab_HandleSettings[] = [
  {
    _id: 2384,
    in_PartGroup: "Door",
    in_HandlePosType: "01",
    ReferencePointX: "Border",
    ReferencePointY: "Border",
    DistanceX: 30,
    DistanceY: 30,
    HandleOrientation: "HandleHorSide"
  }
  , {
    _id: 2385,
    in_PartGroup: "Door",
    in_HandlePosType: "02",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2386,
    in_PartGroup: "Door",
    in_HandlePosType: "03",
    ReferencePointX: "Border",
    ReferencePointY: "Border",
    DistanceX: 30,
    DistanceY: 30,
    HandleOrientation: "HandleVertSide"
  }
  , {
    _id: 2387,
    in_PartGroup: "Door",
    in_HandlePosType: "04",
    ReferencePointX: "Border",
    ReferencePointY: "Border",
    DistanceX: 30,
    DistanceY: 30,
    HandleOrientation: "HandleVertSideInverse"
  }
  , {
    _id: 2388,
    in_PartGroup: "Door",
    in_HandlePosType: "05",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleVertMiddle"
  }
  , {
    _id: 2389,
    in_PartGroup: "Door",
    in_HandlePosType: "06",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleVertMiddleInverse"
  }
  , {
    _id: 2390,
    in_PartGroup: "Door",
    in_HandlePosType: "07",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2391,
    in_PartGroup: "Door",
    in_HandlePosType: "08",
    ReferencePointX: "Border",
    ReferencePointY: "Border",
    DistanceX: 30,
    DistanceY: 30,
    HandleOrientation: "HandleHorSideInverse"
  }
  , {
    _id: 2392,
    in_PartGroup: "Door",
    in_HandlePosType: "11",
    ReferencePointX: "Border",
    ReferencePointY: "Border",
    DistanceX: 30,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorSide"
  }
  , {
    _id: 2393,
    in_PartGroup: "Door",
    in_HandlePosType: "12",
    ReferencePointX: "Border",
    ReferencePointY: "Border",
    DistanceX: 30,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2394,
    in_PartGroup: "Door",
    in_HandlePosType: "13",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 37.5,
    DistanceY: 100,
    HandleOrientation: "HandleVertSide"
  }
  , {
    _id: 2395,
    in_PartGroup: "Door",
    in_HandlePosType: "14",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 37.5,
    DistanceY: 100,
    HandleOrientation: "HandleVertSideInverse"
  }
  , {
    _id: 2396,
    in_PartGroup: "Door",
    in_HandlePosType: "50",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeTop"
  }
  , {
    _id: 2397,
    in_PartGroup: "Door",
    in_HandlePosType: "51",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeBtm"
  }
  , {
    _id: 2398,
    in_PartGroup: "Door",
    in_HandlePosType: "52",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeBtmTop"
  }
  , {
    _id: 2399,
    in_PartGroup: "Door",
    in_HandlePosType: "53",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeLeft"
  }
  , {
    _id: 2400,
    in_PartGroup: "Door",
    in_HandlePosType: "54",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeRight"
  }
  , {
    _id: 2401,
    in_PartGroup: "Door",
    in_HandlePosType: "55",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeLeftRight"
  }
  , {
    _id: 2402,
    in_PartGroup: "Drawer",
    in_HandlePosType: "01",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2403,
    in_PartGroup: "Drawer",
    in_HandlePosType: "02",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2404,
    in_PartGroup: "Drawer",
    in_HandlePosType: "03",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2405,
    in_PartGroup: "Drawer",
    in_HandlePosType: "04",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2406,
    in_PartGroup: "Drawer",
    in_HandlePosType: "05",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2407,
    in_PartGroup: "Drawer",
    in_HandlePosType: "06",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2408,
    in_PartGroup: "Drawer",
    in_HandlePosType: "07",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2409,
    in_PartGroup: "Drawer",
    in_HandlePosType: "08",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2410,
    in_PartGroup: "Drawer",
    in_HandlePosType: "11",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2411,
    in_PartGroup: "Drawer",
    in_HandlePosType: "12",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2412,
    in_PartGroup: "Drawer",
    in_HandlePosType: "13",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2413,
    in_PartGroup: "Drawer",
    in_HandlePosType: "14",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2414,
    in_PartGroup: "Drawer",
    in_HandlePosType: "50",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeTop"
  }
  , {
    _id: 2415,
    in_PartGroup: "Drawer",
    in_HandlePosType: "51",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeBtm"
  }
  , {
    _id: 2416,
    in_PartGroup: "Drawer",
    in_HandlePosType: "52",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeBtmTop"
  }
  , {
    _id: 2417,
    in_PartGroup: "Drawer",
    in_HandlePosType: "53",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeLeft"
  }
  , {
    _id: 2418,
    in_PartGroup: "Drawer",
    in_HandlePosType: "54",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeRight"
  }
  , {
    _id: 2419,
    in_PartGroup: "Drawer",
    in_HandlePosType: "55",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeLeftRight"
  }
  , {
    _id: 2420,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "01",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2421,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "02",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2422,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "03",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2423,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "04",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2424,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "05",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2425,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "06",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2426,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "07",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2427,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "11",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2428,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "12",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2429,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "13",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2430,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "14",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2431,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "50",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeTop"
  }
  , {
    _id: 2432,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "51",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeBtm"
  }
  , {
    _id: 2433,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "52",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeBtmTop"
  }
  , {
    _id: 2434,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "53",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeLeft"
  }
  , {
    _id: 2435,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "54",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeRight"
  }
  , {
    _id: 2436,
    in_PartGroup: "Fliplift",
    in_HandlePosType: "55",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeLeftRight"
  }
  , {
    _id: 2437,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "01",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2438,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "02",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2439,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "03",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2440,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "04",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2441,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "05",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2442,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "06",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2443,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "07",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2444,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "08",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2445,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "11",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2446,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "12",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2447,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "13",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2448,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "14",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2449,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "50",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeTop"
  }
  , {
    _id: 2450,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "51",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeBtm"
  }
  , {
    _id: 2451,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "52",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeBtmTop"
  }
  , {
    _id: 2452,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "53",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeLeft"
  }
  , {
    _id: 2453,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "54",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeRight"
  }
  , {
    _id: 2454,
    in_PartGroup: "Dishwasher",
    in_HandlePosType: "55",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeLeftRight"
  }
  , {
    _id: 2455,
    in_PartGroup: "Pullout",
    in_HandlePosType: "02",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2456,
    in_PartGroup: "Pullout",
    in_HandlePosType: "03",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2457,
    in_PartGroup: "Pullout",
    in_HandlePosType: "04",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2458,
    in_PartGroup: "Pullout",
    in_HandlePosType: "05",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2459,
    in_PartGroup: "Pullout",
    in_HandlePosType: "06",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2460,
    in_PartGroup: "Pullout",
    in_HandlePosType: "07",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2461,
    in_PartGroup: "Pullout",
    in_HandlePosType: "08",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2462,
    in_PartGroup: "Pullout",
    in_HandlePosType: "50",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 30,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2463,
    in_PartGroup: "Pullout",
    in_HandlePosType: "11",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2464,
    in_PartGroup: "Pullout",
    in_HandlePosType: "12",
    ReferencePointX: "Center",
    ReferencePointY: "Border",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2465,
    in_PartGroup: "Pullout",
    in_HandlePosType: "13",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddle"
  }
  , {
    _id: 2466,
    in_PartGroup: "Pullout",
    in_HandlePosType: "14",
    ReferencePointX: "Center",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 37.5,
    HandleOrientation: "HandleHorMiddleInverse"
  }
  , {
    _id: 2467,
    in_PartGroup: "Pullout",
    in_HandlePosType: "50",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeTop"
  }
  , {
    _id: 2468,
    in_PartGroup: "Pullout",
    in_HandlePosType: "51",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeBtm"
  }
  , {
    _id: 2469,
    in_PartGroup: "Pullout",
    in_HandlePosType: "52",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeBtmTop"
  }
  , {
    _id: 2470,
    in_PartGroup: "Pullout",
    in_HandlePosType: "53",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeLeft"
  }
  , {
    _id: 2471,
    in_PartGroup: "Pullout",
    in_HandlePosType: "54",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeRight"
  }
  , {
    _id: 2472,
    in_PartGroup: "Pullout",
    in_HandlePosType: "55",
    ReferencePointX: "Border",
    ReferencePointY: "Center",
    DistanceX: 0,
    DistanceY: 0,
    HandleOrientation: "StripeLeftRight"
  }
];
