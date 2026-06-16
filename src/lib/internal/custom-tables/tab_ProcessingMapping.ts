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

export interface cti_tab_ProcessingMapping {
  readonly in_ProcessingItem?: string;
}

export interface ctm_tab_ProcessingMapping {
}

export interface cto_tab_ProcessingMapping extends ctm_tab_ProcessingMapping {
  readonly _id: number;
  readonly ProcessingId?: string;
  readonly ProcessingLibrary?: string;
}

export interface ICT_tab_ProcessingMapping
  extends cti_tab_ProcessingMapping, cto_tab_ProcessingMapping { }

export class ct2_tab_ProcessingMapping {

  public findExactly(
    in_ProcessingItem: string | undefined,
  ): cto_tab_ProcessingMapping | undefined {
    const res = ct_tab_ProcessingMapping.find((p) =>
      p.in_ProcessingItem === in_ProcessingItem
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_ProcessingMapping) => boolean
  ): cto_tab_ProcessingMapping | undefined {
    for (let index = 0; index < ct_tab_ProcessingMapping.length; index++) {
      const element = ct_tab_ProcessingMapping[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_ProcessingMapping: ICT_tab_ProcessingMapping[] = [
  {
    _id: 851,
    in_ProcessingItem: "DrillDesignLegRectangular001",
    ProcessingId: "DesignLegRectangular001",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 852,
    in_ProcessingItem: "DrillDesignLegSlanted001H250",
    ProcessingId: "DesignLegSlanted001H250",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 853,
    in_ProcessingItem: "ProcessingShelfadjFittingWoodDesign01",
    ProcessingId: "DrillVertShelfadjWoodDesign01",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 854,
    in_ProcessingItem: "ProcessingShelfadjFittingWoodDesign02",
    ProcessingId: "DrillVertShelfadjWoodDesign02",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 855,
    in_ProcessingItem: "ProcessingShelfadjFittingWoodDesign03",
    ProcessingId: "DrillVertShelfadjWoodDesign03",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 856,
    in_ProcessingItem: "ProcessingShelfadjFittingGlassDesign01",
    ProcessingId: "DrillVertShelfadjGlassDesign01",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 857,
    in_ProcessingItem: "ProcessingItemDowel01",
    ProcessingId: "ProcessingIdDowel01",
    ProcessingLibrary: "DrillHorizontal"
  }
  , {
    _id: 858,
    in_ProcessingItem: "ProcessingItemDowel01",
    ProcessingId: "ProcessingIdDowel01",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 859,
    in_ProcessingItem: "ProcessItemMinifix01",
    ProcessingId: "ProcessingIdMinifix01",
    ProcessingLibrary: "DrillHorizontal"
  }
  , {
    _id: 860,
    in_ProcessingItem: "ProcessItemMinifix01",
    ProcessingId: "ProcessingIdMinifix01",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 861,
    in_ProcessingItem: "ProcessingItemDowel02",
    ProcessingId: "ProcessingIdDowel02",
    ProcessingLibrary: "DrillHorizontal"
  }
  , {
    _id: 862,
    in_ProcessingItem: "ProcessingItemDowel02",
    ProcessingId: "ProcessingIdDowel01",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 863,
    in_ProcessingItem: "ProcessingHinge35/11Screw48/6",
    ProcessingId: "ProcessingDrillHinge35/11Screw48/6",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 864,
    in_ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
    ProcessingId: "ProcessingDrillHinge35/13.5Screw45/9.5",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 865,
    in_ProcessingItem: "ProcessingMountingPlateScrew37/32",
    ProcessingId: "ProcessingDrillMountingPlateScrew37/32",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 866,
    in_ProcessingItem: "ProcessingMountingPlateEuroScrew21_32/0",
    ProcessingId: "ProcessingDrillMountingPlateEuroScrew21_32/0",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 867,
    in_ProcessingItem: "ProcessingWallUnitHiddenHanger92kgWhite",
    ProcessingId: "ProcessingHanger290.03.937_8",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 868,
    in_ProcessingItem: "ProcessingWallUnitVisibleHanger75kgWhite",
    ProcessingId: "ProcessingHanger290.40.980_1",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 869,
    in_ProcessingItem: "ProcessingWallUnitVisibleHanger75kgWhite",
    ProcessingId: "ProcessingHanger290.40.980_1",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 870,
    in_ProcessingItem: "ProcessingWallUnitVisibleHanger52kgNickelPlated",
    ProcessingId: "ProcessingHanger290.02.702_3",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 871,
    in_ProcessingItem: "ProcessingWallUnitVisibleHanger52kgNickelPlated",
    ProcessingId: "ProcessingHanger290.02.702_3",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 872,
    in_ProcessingItem: "ProcessingBaseUnitVisibleHanger120kgWhite",
    ProcessingId: "ProcessingHanger290.40.901_2",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 873,
    in_ProcessingItem: "ProcessingBaseUnitVisibleHanger120kgWhite",
    ProcessingId: "ProcessingHanger290.40.901_2",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 874,
    in_ProcessingItem: "ProcessingWallUnitVisibleHanger45kgWhite",
    ProcessingId: "ProcessingHanger290.02.710_1",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 875,
    in_ProcessingItem: "ProcessingWallUnitVisibleHanger45kgGrey",
    ProcessingId: "ProcessingHanger290.02.710_1",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 876,
    in_ProcessingItem: "ProcessingWallUnitVisibleHanger45kgWhite",
    ProcessingId: "ProcessingHanger290.02.710_1",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 877,
    in_ProcessingItem: "ProcessingWallUnitVisibleHanger45kgGrey",
    ProcessingId: "ProcessingHanger290.02.710_1",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 878,
    in_ProcessingItem: "ProcessingWallUnitVisibleHanger45kgGrey",
    ProcessingId: "ProcessingHanger290.02.710_1",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 879,
    in_ProcessingItem: "Processing_Legrabox_270",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 880,
    in_ProcessingItem: "Processing_Legrabox_300",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 881,
    in_ProcessingItem: "Processing_Legrabox_350",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 882,
    in_ProcessingItem: "Processing_Legrabox_400",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 883,
    in_ProcessingItem: "Processing_Legrabox_450",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 884,
    in_ProcessingItem: "Processing_Legrabox_500",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 885,
    in_ProcessingItem: "Processing_Legrabox_550",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 886,
    in_ProcessingItem: "Processing_Legrabox_600",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 887,
    in_ProcessingItem: "Processing_Legrabox_450_H",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 888,
    in_ProcessingItem: "Processing_Legrabox_500_H",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 889,
    in_ProcessingItem: "Processing_Legrabox_550_H",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 890,
    in_ProcessingItem: "Processing_Legrabox_600_H",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 891,
    in_ProcessingItem: "Processing_Legrabox_650_H",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 892,
    in_ProcessingItem: "Processing_Legrabox_270",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 893,
    in_ProcessingItem: "Processing_Legrabox_300",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 894,
    in_ProcessingItem: "Processing_Legrabox_350",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 895,
    in_ProcessingItem: "Processing_Legrabox_400",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 896,
    in_ProcessingItem: "Processing_Legrabox_450",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 897,
    in_ProcessingItem: "Processing_Legrabox_500",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 898,
    in_ProcessingItem: "Processing_Legrabox_550",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 899,
    in_ProcessingItem: "Processing_Legrabox_600",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 900,
    in_ProcessingItem: "Processing_Legrabox_450_H",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 901,
    in_ProcessingItem: "Processing_Legrabox_500_H",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 902,
    in_ProcessingItem: "Processing_Legrabox_550_H",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 903,
    in_ProcessingItem: "Processing_Legrabox_600_H",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 904,
    in_ProcessingItem: "Processing_Legrabox_650_H",
    ProcessingId: "Processing_LegraboxBtm",
    ProcessingLibrary: "Milling"
  }
  , {
    _id: 905,
    in_ProcessingItem: "Processing_Legrabox_270",
    ProcessingId: "Processing_LegraboxSlide_270",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 906,
    in_ProcessingItem: "Processing_Legrabox_300",
    ProcessingId: "Processing_LegraboxSlide_300_350",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 907,
    in_ProcessingItem: "Processing_Legrabox_350",
    ProcessingId: "Processing_LegraboxSlide_300_350",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 908,
    in_ProcessingItem: "Processing_Legrabox_400",
    ProcessingId: "Processing_LegraboxSlide_400_450_500",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 909,
    in_ProcessingItem: "Processing_Legrabox_450",
    ProcessingId: "Processing_LegraboxSlide_400_450_500",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 910,
    in_ProcessingItem: "Processing_Legrabox_500",
    ProcessingId: "Processing_LegraboxSlide_400_450_500",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 911,
    in_ProcessingItem: "Processing_Legrabox_550",
    ProcessingId: "Processing_LegraboxSlide_550_600",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 912,
    in_ProcessingItem: "Processing_Legrabox_600",
    ProcessingId: "Processing_LegraboxSlide_550_600",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 913,
    in_ProcessingItem: "Processing_Legrabox_450_H",
    ProcessingId: "Processing_LegraboxSlide_450_H",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 914,
    in_ProcessingItem: "Processing_Legrabox_500_H",
    ProcessingId: "Processing_LegraboxSlide_500_550_600_H",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 915,
    in_ProcessingItem: "Processing_Legrabox_550_H",
    ProcessingId: "Processing_LegraboxSlide_500_550_600_H",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 916,
    in_ProcessingItem: "Processing_Legrabox_600_H",
    ProcessingId: "Processing_LegraboxSlide_500_550_600_H",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 917,
    in_ProcessingItem: "Processing_Legrabox_650_H",
    ProcessingId: "Processing_LegraboxSlide_650_H",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 918,
    in_ProcessingItem: "Processing_Legra_FrontBotCon",
    ProcessingId: "Processing_Legra_FrontBotCon",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 919,
    in_ProcessingItem: "Processing_Legrabox_Con_C",
    ProcessingId: "Processing_Legrabox_Con_C",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 920,
    in_ProcessingItem: "Processing_Legrabox_Con_CM",
    ProcessingId: "Processing_Legrabox_Con_CM",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 921,
    in_ProcessingItem: "Processing_Legrabox_Con_F",
    ProcessingId: "Processing_Legrabox_Con_F",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 922,
    in_ProcessingItem: "Processing_Legrabox_Con_FM",
    ProcessingId: "Processing_Legrabox_Con_FM",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 923,
    in_ProcessingItem: "Processing_Legrabox_Con_K",
    ProcessingId: "Processing_Legrabox_Con_K",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 924,
    in_ProcessingItem: "Processing_Legrabox_Con_KM",
    ProcessingId: "Processing_Legrabox_Con_KM",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 925,
    in_ProcessingItem: "Processing_Legrabox_Con_M",
    ProcessingId: "Processing_Legrabox_Con_M",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 926,
    in_ProcessingItem: "Processing_Legrabox_Con_N",
    ProcessingId: "Processing_Legrabox_Con_N",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 927,
    in_ProcessingItem: "Processing_Legrabox_Backwall_N",
    ProcessingId: "Processing_Legrabox_Backwall_N",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 928,
    in_ProcessingItem: "Processing_Legrabox_Backwall_M",
    ProcessingId: "Processing_Legrabox_Backwall_M",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 929,
    in_ProcessingItem: "Processing_Legrabox_Backwall_C",
    ProcessingId: "Processing_Legrabox_Backwall_C",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 930,
    in_ProcessingItem: "Processing_Legrabox_Backwall_K",
    ProcessingId: "Processing_Legrabox_Backwall_K",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 931,
    in_ProcessingItem: "Processing_Legrabox_Backwall_F",
    ProcessingId: "Processing_Legrabox_Backwall_F",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 932,
    in_ProcessingItem: "ProcessingItemDowel03",
    ProcessingId: "ProcessingIdDowel03",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 933,
    in_ProcessingItem: "ProcessingItemDowel03",
    ProcessingId: "ProcessingIdDowel03",
    ProcessingLibrary: "DrillHorizontal"
  }
  , {
    _id: 934,
    in_ProcessingItem: "ProcessingPushToOpenShort",
    ProcessingId: "ProcessingPushToOpenShort",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 935,
    in_ProcessingItem: "ProcessingAdapterHousingShort",
    ProcessingId: "ProcessingAdapterHousingShort",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 936,
    in_ProcessingItem: "ProcessingAdapterHousingLong",
    ProcessingId: "ProcessingAdapterHousingLong",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 937,
    in_ProcessingItem: "NoProcessing",
    ProcessingId: "",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 938,
    in_ProcessingItem: "ProcessingPushToOpenLong",
    ProcessingId: "ProcessingPushToOpenLong",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 939,
    in_ProcessingItem: "ProcessingPushToOpenLong",
    ProcessingId: "ProcessingPushToOpenLong",
    ProcessingLibrary: "DrillHorizontal"
  }
  , {
    _id: 940,
    in_ProcessingItem: "ProcessingPushToOpenShort",
    ProcessingId: "ProcessingPushToOpenShort",
    ProcessingLibrary: "DrillHorizontal"
  }
  , {
    _id: 941,
    in_ProcessingItem: "ProcessingRafix01",
    ProcessingId: "ProcessingRafix01",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 942,
    in_ProcessingItem: "Processing_Aventos_HF_PS",
    ProcessingId: "Processing_Aventos_HF_PS",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 943,
    in_ProcessingItem: "Processing_Aventos_HF_Connector",
    ProcessingId: "Processing_Aventos_HF_Connector",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 944,
    in_ProcessingItem: "Process_Aventos_HK_PS",
    ProcessingId: "Process_Aventos_HK_PS",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 945,
    in_ProcessingItem: "Processing_Aventos_HK_Connector",
    ProcessingId: "Processing_Aventos_HK_Connector",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 946,
    in_ProcessingItem: "ProcessingHinge35/12.6Screw45/9.5",
    ProcessingId: "ProcessingDrillHinge35/12.6Screw45/9.5",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 947,
    in_ProcessingItem: "Processing_DropDown_Carcase",
    ProcessingId: "Processing_DropDown_Carcase",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 948,
    in_ProcessingItem: "Processing_DropDown_Front",
    ProcessingId: "Processing_DropDown_Front",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 949,
    in_ProcessingItem: "Processing_Aventos_HKXS_Connector",
    ProcessingId: "Processing_Aventos_HKXS_Connector",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 950,
    in_ProcessingItem: "Processing_Aventos_HKXS_Carcase",
    ProcessingId: "Processing_Aventos_HKXS_Carcase",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 951,
    in_ProcessingItem: "ProcessingMountingPlateScrew20_32/0",
    ProcessingId: "ProcessingDrillMountingPlateScrew20_32/0",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 952,
    in_ProcessingItem: "ProcessingHingeFlap26",
    ProcessingId: "ProcessingHingeFlap26",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 953,
    in_ProcessingItem: "ProcessingBracket01",
    ProcessingId: "ProcessingBracket01",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 954,
    in_ProcessingItem: "ProcessingPlinthLegTriangularPressH100",
    ProcessingId: "ProcessingDrillPlinthLegTriangularPress",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 955,
    in_ProcessingItem: "ProcessingPlinthLegTriangularPressH120",
    ProcessingId: "ProcessingDrillPlinthLegTriangularPress",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 956,
    in_ProcessingItem: "ProcessingPlinthLegTriangularPressH150",
    ProcessingId: "ProcessingDrillPlinthLegTriangularPress",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 957,
    in_ProcessingItem: "ProcessingPlinthLegRectangularScrewH100",
    ProcessingId: "ProcessingDrillPlinthLegRectangularScrew",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 958,
    in_ProcessingItem: "ProcessingPlinthLegRectangularScrewH120",
    ProcessingId: "ProcessingDrillPlinthLegRectangularScrew",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 959,
    in_ProcessingItem: "ProcessingPlinthLegRectangularScrewH150",
    ProcessingId: "ProcessingDrillPlinthLegRectangularScrew",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 960,
    in_ProcessingItem: "ProcessingKeku01",
    ProcessingId: "ProcessingKeku_Side_262_50_368",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 961,
    in_ProcessingItem: "ProcessingKeku01",
    ProcessingId: "ProcessingKeku_Front_262_50_359",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 962,
    in_ProcessingItem: "DrillBracketHandle128",
    ProcessingId: "BracketHandle128",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 963,
    in_ProcessingItem: "DrillBracketHandle160",
    ProcessingId: "BracketHandle160",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 964,
    in_ProcessingItem: "DrillBracketHandle192",
    ProcessingId: "BracketHandle192",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 965,
    in_ProcessingItem: "DrillBracketHandle224",
    ProcessingId: "BracketHandle224",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 966,
    in_ProcessingItem: "DrillBracketHandle288",
    ProcessingId: "BracketHandle288",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 967,
    in_ProcessingItem: "DrillBracketHandle320",
    ProcessingId: "BracketHandle320",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 968,
    in_ProcessingItem: "DrillBracketHandle352",
    ProcessingId: "BracketHandle352",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 969,
    in_ProcessingItem: "DrillBracketHandle448",
    ProcessingId: "BracketHandle448",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 970,
    in_ProcessingItem: "DrillBracketHandle480",
    ProcessingId: "BracketHandle480",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 971,
    in_ProcessingItem: "DrillBracketHandle560",
    ProcessingId: "BracketHandle560",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 972,
    in_ProcessingItem: "DrillBracketHandle640",
    ProcessingId: "BracketHandle640",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 973,
    in_ProcessingItem: "DrillBracketHandle96",
    ProcessingId: "BracketHandle96",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 974,
    in_ProcessingItem: "DrillBracketHandle960",
    ProcessingId: "BracketHandle960",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 975,
    in_ProcessingItem: "DrillRailHandle128",
    ProcessingId: "RailHandle128",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 976,
    in_ProcessingItem: "DrillRailHandle160",
    ProcessingId: "RailHandle160",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 977,
    in_ProcessingItem: "DrillRailHandle192",
    ProcessingId: "RailHandle192",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 978,
    in_ProcessingItem: "DrillRailHandle224",
    ProcessingId: "RailHandle224",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 979,
    in_ProcessingItem: "DrillRailHandle288",
    ProcessingId: "RailHandle288",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 980,
    in_ProcessingItem: "Proc_Handle_64",
    ProcessingId: "Proc_Handle_64",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 981,
    in_ProcessingItem: "Proc_Handle_96",
    ProcessingId: "Proc_Handle_96",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 982,
    in_ProcessingItem: "Proc_Handle_128",
    ProcessingId: "Proc_Handle_128",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 983,
    in_ProcessingItem: "Proc_Handle_160",
    ProcessingId: "Proc_Handle_160",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 984,
    in_ProcessingItem: "Proc_Handle_192",
    ProcessingId: "Proc_Handle_192",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 985,
    in_ProcessingItem: "Proc_Handle_210",
    ProcessingId: "Proc_Handle_210",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 986,
    in_ProcessingItem: "Proc_Handle_224",
    ProcessingId: "Proc_Handle_224",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 987,
    in_ProcessingItem: "Proc_Handle_228",
    ProcessingId: "Proc_Handle_228",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 988,
    in_ProcessingItem: "Proc_Handle_260",
    ProcessingId: "Proc_Handle_260",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 989,
    in_ProcessingItem: "Proc_Handle_288",
    ProcessingId: "Proc_Handle_288",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 990,
    in_ProcessingItem: "Proc_Handle_310",
    ProcessingId: "Proc_Handle_310",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 991,
    in_ProcessingItem: "Proc_Handle_320",
    ProcessingId: "Proc_Handle_320",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 992,
    in_ProcessingItem: "Proc_Handle_360",
    ProcessingId: "Proc_Handle_360",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 993,
    in_ProcessingItem: "Proc_Handle_352",
    ProcessingId: "Proc_Handle_352",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 994,
    in_ProcessingItem: "Proc_Handle_410",
    ProcessingId: "Proc_Handle_410",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 995,
    in_ProcessingItem: "Proc_Handle_448",
    ProcessingId: "Proc_Handle_448",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 996,
    in_ProcessingItem: "Proc_Handle_460",
    ProcessingId: "Proc_Handle_460",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 997,
    in_ProcessingItem: "Proc_Handle_480",
    ProcessingId: "Proc_Handle_480",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 998,
    in_ProcessingItem: "Proc_Handle_560",
    ProcessingId: "Proc_Handle_560",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 999,
    in_ProcessingItem: "Proc_Handle_640",
    ProcessingId: "Proc_Handle_640",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1000,
    in_ProcessingItem: "Proc_Handle_660",
    ProcessingId: "Proc_Handle_660",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1001,
    in_ProcessingItem: "Proc_Handle_760",
    ProcessingId: "Proc_Handle_760",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1002,
    in_ProcessingItem: "Proc_Handle_860",
    ProcessingId: "Proc_Handle_860",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1003,
    in_ProcessingItem: "Proc_Handle_960",
    ProcessingId: "Proc_Handle_960",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1004,
    in_ProcessingItem: "Proc_Handle_1060",
    ProcessingId: "Proc_Handle_1060",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1005,
    in_ProcessingItem: "Proc_Handle_1160",
    ProcessingId: "Proc_Handle_1160",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1006,
    in_ProcessingItem: "Proc_Handle_1260",
    ProcessingId: "Proc_Handle_1260",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1007,
    in_ProcessingItem: "Proc_Handle_1360",
    ProcessingId: "Proc_Handle_1360",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1008,
    in_ProcessingItem: "Proc_Handle_1460",
    ProcessingId: "Proc_Handle_1460",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1009,
    in_ProcessingItem: "Proc_Handle_1560",
    ProcessingId: "Proc_Handle_1560",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1010,
    in_ProcessingItem: "Proc_Handle_1760",
    ProcessingId: "Proc_Handle_1760",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1011,
    in_ProcessingItem: "Proc_Handle_1960",
    ProcessingId: "Proc_Handle_1960",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1012,
    in_ProcessingItem: "ProcessingPlinthLegTriangularPressH100DrillBack",
    ProcessingId: "ProcessingDrillPlinthLegTriangularPressDrillBack",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1013,
    in_ProcessingItem: "Proc_No15_Classic_Right",
    ProcessingId: "No15_Classic_Right",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1014,
    in_ProcessingItem: "Proc_No15_Classic_Left",
    ProcessingId: "No15_Classic_Left",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1015,
    in_ProcessingItem: "Proc_No15_Style_Right",
    ProcessingId: "No15_Style_Right",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1016,
    in_ProcessingItem: "Proc_No15_Style_Left",
    ProcessingId: "No15_Style_Left",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1017,
    in_ProcessingItem: "ProcessingDispensa30",
    ProcessingId: "ProcessingDispensa30",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1018,
    in_ProcessingItem: "ProcessingDispensa40",
    ProcessingId: "ProcessingDispensa40",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1019,
    in_ProcessingItem: "FrontTuscanMilling",
    ProcessingId: "FrontTuscanMilling",
    ProcessingLibrary: "Component"
  }
  , {
    _id: 1020,
    in_ProcessingItem: "ProcConero",
    ProcessingId: "ProcConero",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1021,
    in_ProcessingItem: "ProcConeroTrouser",
    ProcessingId: "ProcConeroTrouser",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1022,
    in_ProcessingItem: "ProcConeroTie",
    ProcessingId: "ProcConeroTie",
    ProcessingLibrary: "DrillVertical"
  }
  , {
    _id: 1023,
    in_ProcessingItem: "Handle_140",
    ProcessingId: "Proc_Handle_140",
    ProcessingLibrary: "Milling"
  }
];
