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

export interface cti_tab_ObjectMapping {
  readonly in_Object?: string;
}

export interface ctm_tab_ObjectMapping {
}

export interface cto_tab_ObjectMapping extends ctm_tab_ObjectMapping {
  readonly _id: number;
  readonly HardwareItem?: string;
  readonly ProcessingItem?: string;
  readonly GraphicItem?: string;
}

export interface ICT_tab_ObjectMapping
  extends cti_tab_ObjectMapping, cto_tab_ObjectMapping { }

export class ct2_tab_ObjectMapping {

  public findExactly(
    in_Object: string | undefined,
  ): cto_tab_ObjectMapping | undefined {
    const res = ct_tab_ObjectMapping.find((p) =>
      p.in_Object === in_Object
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_ObjectMapping) => boolean
  ): cto_tab_ObjectMapping | undefined {
    for (let index = 0; index < ct_tab_ObjectMapping.length; index++) {
      const element = ct_tab_ObjectMapping[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_ObjectMapping: ICT_tab_ObjectMapping[] = [
  {
    _id: 34384,
    in_Object: "DesignLegRectangular001H50",
    HardwareItem: "HardDesignLegRectangular001H50",
    ProcessingItem: "DrillDesignLegRectangular001",
    GraphicItem: "DesignLegRectangular001H50"
  }
  , {
    _id: 34385,
    in_Object: "DesignLegRectangular001H80",
    HardwareItem: "HardDesignLegRectangular001H80",
    ProcessingItem: "DrillDesignLegRectangular001",
    GraphicItem: "DesignLegRectangular001H80"
  }
  , {
    _id: 34386,
    in_Object: "DesignLegRectangular001H100",
    HardwareItem: "HardDesignLegRectangular001H100",
    ProcessingItem: "DrillDesignLegRectangular001",
    GraphicItem: "DesignLegRectangular001H100"
  }
  , {
    _id: 34387,
    in_Object: "DesignLegRectangular001H150",
    HardwareItem: "HardDesignLegRectangular001H150",
    ProcessingItem: "DrillDesignLegRectangular001",
    GraphicItem: "DesignLegRectangular001H150"
  }
  , {
    _id: 34388,
    in_Object: "DesignLegRectangular001H200",
    HardwareItem: "HardDesignLegRectangular001H200",
    ProcessingItem: "DrillDesignLegRectangular001",
    GraphicItem: "DesignLegRectangular001H200"
  }
  , {
    _id: 34389,
    in_Object: "DesignLegSlanted001H250",
    HardwareItem: "HardDesignLegSlanted001H250",
    ProcessingItem: "DrillDesignLegSlanted001H250",
    GraphicItem: "DesignLegSlanted001H250"
  }
  , {
    _id: 34390,
    in_Object: "ShelfadjFittingWoodDesign01",
    HardwareItem: "HardwareShelfadjFittingWoodDesign01",
    ProcessingItem: "ProcessingShelfadjFittingWoodDesign01",
    GraphicItem: "GraphicShelfadjFittingWoodDesign01"
  }
  , {
    _id: 34391,
    in_Object: "ShelfadjFittingWoodDesign02",
    HardwareItem: "HardwareShelfadjFittingWoodDesign02",
    ProcessingItem: "ProcessingShelfadjFittingWoodDesign02",
    GraphicItem: "GraphicShelfadjFittingWoodDesign02"
  }
  , {
    _id: 34392,
    in_Object: "ShelfadjFittingWoodDesign03",
    HardwareItem: "HardwareShelfadjFittingWoodDesign03",
    ProcessingItem: "ProcessingShelfadjFittingWoodDesign03",
    GraphicItem: "GraphicShelfadjFittingWoodDesign03"
  }
  , {
    _id: 34393,
    in_Object: "ShelfadjFittingGlassDesign01",
    HardwareItem: "HardwareShelfadjFittingGlassDesign01",
    ProcessingItem: "ProcessingShelfadjFittingGlassDesign01",
    GraphicItem: "GraphicShelfadjFittingGlassDesign01"
  }
  , {
    _id: 34394,
    in_Object: "Minifix01White",
    HardwareItem: "HardwareItemMinifix01White",
    ProcessingItem: "ProcessItemMinifix01",
    GraphicItem: "GraphicItemMinifix01White"
  }
  , {
    _id: 34395,
    in_Object: "Minifix01Black",
    HardwareItem: "HardwareItemMinifix01Black",
    ProcessingItem: "ProcessItemMinifix01",
    GraphicItem: "GraphicItemMinifix01Black"
  }
  , {
    _id: 34396,
    in_Object: "Minifix01Light",
    HardwareItem: "HardwareItemMinifix01Light",
    ProcessingItem: "ProcessItemMinifix01",
    GraphicItem: "GraphicItemMinifix01Light"
  }
  , {
    _id: 34397,
    in_Object: "Minifix01Dark",
    HardwareItem: "HardwareItemMinifix01Dark",
    ProcessingItem: "ProcessItemMinifix01",
    GraphicItem: "GraphicItemMinifix01Dark"
  }
  , {
    _id: 34398,
    in_Object: "Dowel01",
    HardwareItem: "HardwareItemDowel01",
    ProcessingItem: "ProcessingItemDowel01",
    GraphicItem: "GraphicItemDowel01"
  }
  , {
    _id: 34399,
    in_Object: "Dowel02",
    HardwareItem: "HardwareItemDowel02",
    ProcessingItem: "ProcessingItemDowel02",
    GraphicItem: "GraphicItemDowel02"
  }
  , {
    _id: 34400,
    in_Object: "Hinge110HalfSpringSS",
    HardwareItem: "HardwareHinge110HalfSpringSS",
    ProcessingItem: "ProcessingHinge35/11Screw48/6",
    GraphicItem: "GraphicHinge110HalfSpringSS"
  }
  , {
    _id: 34401,
    in_Object: "Hinge110InsetSpringSS",
    HardwareItem: "HardwareHinge110InsetSpringSS",
    ProcessingItem: "ProcessingHinge35/11Screw48/6",
    GraphicItem: "GraphicHinge110InsetSpringSS"
  }
  , {
    _id: 34402,
    in_Object: "Hinge110OverlaySpringSS",
    HardwareItem: "HardwareHinge110OverlaySpringSS",
    ProcessingItem: "ProcessingHinge35/11Screw48/6",
    GraphicItem: "GraphicHinge110OverlaySpringSS"
  }
  , {
    _id: 34403,
    in_Object: "Hinge110SoftClHalfSpringSS",
    HardwareItem: "HardwareHinge110SoftClHalfSpringSS",
    ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
    GraphicItem: "GraphicHinge110SoftClHalfSpringSS"
  }
  , {
    _id: 34404,
    in_Object: "Hinge110SoftClInsetSpringSS",
    HardwareItem: "HardwareHinge110SoftClInsetSpringSS",
    ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
    GraphicItem: "GraphicHinge110SoftClInsetSpringSS"
  }
  , {
    _id: 34405,
    in_Object: "Hinge110SoftClOverlaySpringSS",
    HardwareItem: "HardwareHinge110SoftClOverlaySpringSS",
    ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
    GraphicItem: "GraphicHinge110SoftClOverlaySpringSS"
  }
  , {
    _id: 34406,
    in_Object: "Hinge155SoftClHalfSpringSS",
    HardwareItem: "HardwareHinge155SoftClHalfSpringSS",
    ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
    GraphicItem: "GraphicHinge155SoftClHalfSpringSS"
  }
  , {
    _id: 34407,
    in_Object: "Hinge155SoftClOverlaySpringSS",
    HardwareItem: "HardwareHinge155SoftClOverlaySpringSS",
    ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
    GraphicItem: "GraphicHinge155SoftClOverlaySpringSS"
  }
  , {
    _id: 34408,
    in_Object: "Hinge165HalfSpringSS",
    HardwareItem: "HardwareHinge165HalfSpringSS",
    ProcessingItem: "ProcessingHinge35/11Screw48/6",
    GraphicItem: "GraphicHinge165HalfSpringSS"
  }
  , {
    _id: 34409,
    in_Object: "Hinge165InsetSpringSS",
    HardwareItem: "HardwareHinge165InsetSpringSS",
    ProcessingItem: "ProcessingHinge35/11Screw48/6",
    GraphicItem: "GraphicHinge165InsetSpringSS"
  }
  , {
    _id: 34410,
    in_Object: "Hinge165OverlaySpringSS",
    HardwareItem: "HardwareHinge165OverlaySpringSS",
    ProcessingItem: "ProcessingHinge35/11Screw48/6",
    GraphicItem: "GraphicHinge165OverlaySpringSS"
  }
  , {
    _id: 34411,
    in_Object: "MpCruciformA0SS",
    HardwareItem: "HardwareMpCruciformA0SS",
    ProcessingItem: "ProcessingMountingPlateScrew37/32",
    GraphicItem: "GraphicMpCruciformA0SS"
  }
  , {
    _id: 34412,
    in_Object: "MpCruciformA3SS",
    HardwareItem: "HardwareMpCruciformA3SS",
    ProcessingItem: "ProcessingMountingPlateScrew37/32",
    GraphicItem: "GraphicMpCruciformA3SS"
  }
  , {
    _id: 34413,
    in_Object: "MpCruciformA6SS",
    HardwareItem: "HardwareMpCruciformA6SS",
    ProcessingItem: "ProcessingMountingPlateScrew37/32",
    GraphicItem: "GraphicMpCruciformA6SS"
  }
  , {
    _id: 34414,
    in_Object: "MpCruciformSM0SS",
    HardwareItem: "HardwareMpCruciformSM0SS",
    ProcessingItem: "ProcessingMountingPlateScrew37/32",
    GraphicItem: "GraphicMpCruciformSM0SS"
  }
  , {
    _id: 34415,
    in_Object: "MpCruciformSM3SS",
    HardwareItem: "HardwareMpCruciformSM3SS",
    ProcessingItem: "ProcessingMountingPlateScrew37/32",
    GraphicItem: "GraphicMpCruciformSM3SS"
  }
  , {
    _id: 34416,
    in_Object: "MpCruciformSM6SS",
    HardwareItem: "HardwareMpCruciformSM6SS",
    ProcessingItem: "ProcessingMountingPlateScrew37/32",
    GraphicItem: "GraphicMpCruciformSM6SS"
  }
  , {
    _id: 34417,
    in_Object: "MpHorizontalSM0SS",
    HardwareItem: "HardwareMpHorizontalSM0SS",
    ProcessingItem: "ProcessingMountingPlateEuroScrew21_32/0",
    GraphicItem: "GraphicMpHorizontalSM0SS"
  }
  , {
    _id: 34418,
    in_Object: "MpHorizontalSM3SS",
    HardwareItem: "HardwareMpHorizontalSM3SS",
    ProcessingItem: "ProcessingMountingPlateEuroScrew21_32/0",
    GraphicItem: "GraphicMpHorizontalSM3SS"
  }
  , {
    _id: 34419,
    in_Object: "MpHorizontalSM6SS",
    HardwareItem: "HardwareMpHorizontalSM6SS",
    ProcessingItem: "ProcessingMountingPlateEuroScrew21_32/0",
    GraphicItem: "GraphicMpHorizontalSM6SS"
  }
  , {
    _id: 34420,
    in_Object: "HingeBlindCornerInset110SoftClNP",
    HardwareItem: "HardwareHingeBlindCornerInset110SoftClNP",
    ProcessingItem: "ProcessingHinge35/11Screw48/6",
    GraphicItem: "GraphicHingeBlindCornerInset110SoftClNP"
  }
  , {
    _id: 34421,
    in_Object: "SIEMENSIQ700",
    HardwareItem: undefined,
    ProcessingItem: undefined,
    GraphicItem: "NoGraphic"
  }
  , {
    _id: 34422,
    in_Object: "BaseUnitVisibleHanger120kgWhite",
    HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
    ProcessingItem: "ProcessingBaseUnitVisibleHanger120kgWhite",
    GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite"
  }
  , {
    _id: 34423,
    in_Object: "WallUnitVisibleHanger52kgNickelPlated",
    HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
    ProcessingItem: "ProcessingWallUnitVisibleHanger52kgNickelPlated",
    GraphicItem: "GraphicWallUnitVisibleHanger52kgNickelPlated"
  }
  , {
    _id: 34424,
    in_Object: "WallUnitVisibleHanger75kgWhite",
    HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
    ProcessingItem: "ProcessingWallUnitVisibleHanger75kgWhite",
    GraphicItem: "GraphicWallUnitVisibleHanger75kgWhite"
  }
  , {
    _id: 34425,
    in_Object: "WallUnitHiddenHanger92kgWhite",
    HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
    ProcessingItem: "ProcessingWallUnitHiddenHanger92kgWhite",
    GraphicItem: "GraphicWallUnitHiddenHanger92kgWhite"
  }
  , {
    _id: 34426,
    in_Object: "WallUnitVisibleHanger45kgWhite",
    HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
    ProcessingItem: "ProcessingWallUnitVisibleHanger45kgWhite",
    GraphicItem: "GraphicWallUnitVisibleHanger45kgWhite"
  }
  , {
    _id: 34427,
    in_Object: "WallUnitVisibleHanger45kgGrey",
    HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
    ProcessingItem: "ProcessingWallUnitVisibleHanger45kgGrey",
    GraphicItem: "GraphicWallUnitVisibleHanger45kgGrey"
  }
  , {
    _id: 34428,
    in_Object: "Legra_White_400_N",
    HardwareItem: "Hardware_Legra_White_400_N",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_White_400_N"
  }
  , {
    _id: 34429,
    in_Object: "Legra_White_450_N",
    HardwareItem: "Hardware_Legra_White_450_N",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_White_450_N"
  }
  , {
    _id: 34430,
    in_Object: "Legra_White_500_N",
    HardwareItem: "Hardware_Legra_White_500_N",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_White_500_N"
  }
  , {
    _id: 34431,
    in_Object: "Legra_White_550_N",
    HardwareItem: "Hardware_Legra_White_550_N",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_White_550_N"
  }
  , {
    _id: 34432,
    in_Object: "Legra_Terra_400_N",
    HardwareItem: "Hardware_Legra_Terra_400_N",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Terra_400_N"
  }
  , {
    _id: 34433,
    in_Object: "Legra_Terra_450_N",
    HardwareItem: "Hardware_Legra_Terra_450_N",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Terra_450_N"
  }
  , {
    _id: 34434,
    in_Object: "Legra_Terra_500_N",
    HardwareItem: "Hardware_Legra_Terra_500_N",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Terra_500_N"
  }
  , {
    _id: 34435,
    in_Object: "Legra_Terra_550_N",
    HardwareItem: "Hardware_Legra_Terra_550_N",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Terra_550_N"
  }
  , {
    _id: 34436,
    in_Object: "Legra_Orion_400_N",
    HardwareItem: "Hardware_Legra_Orion_400_N",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Orion_400_N"
  }
  , {
    _id: 34437,
    in_Object: "Legra_Orion_450_N",
    HardwareItem: "Hardware_Legra_Orion_450_N",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Orion_450_N"
  }
  , {
    _id: 34438,
    in_Object: "Legra_Orion_500_N",
    HardwareItem: "Hardware_Legra_Orion_500_N",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Orion_500_N"
  }
  , {
    _id: 34439,
    in_Object: "Legra_Orion_550_N",
    HardwareItem: "Hardware_Legra_Orion_550_N",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Orion_550_N"
  }
  , {
    _id: 34440,
    in_Object: "Legra_Inox_450_N",
    HardwareItem: "Hardware_Legra_Inox_450_N",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Inox_450_N"
  }
  , {
    _id: 34441,
    in_Object: "Legra_Inox_500_N",
    HardwareItem: "Hardware_Legra_Inox_500_N",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Inox_500_N"
  }
  , {
    _id: 34442,
    in_Object: "Legra_White_400_N_PTO",
    HardwareItem: "Hardware_Legra_White_400_N_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_White_400_N"
  }
  , {
    _id: 34443,
    in_Object: "Legra_White_450_N_PTO",
    HardwareItem: "Hardware_Legra_White_450_N_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_White_450_N"
  }
  , {
    _id: 34444,
    in_Object: "Legra_White_500_N_PTO",
    HardwareItem: "Hardware_Legra_White_500_N_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_White_500_N"
  }
  , {
    _id: 34445,
    in_Object: "Legra_White_550_N_PTO",
    HardwareItem: "Hardware_Legra_White_550_N_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_White_550_N"
  }
  , {
    _id: 34446,
    in_Object: "Legra_Terra_400_N_PTO",
    HardwareItem: "Hardware_Legra_Terra_400_N_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Terra_400_N"
  }
  , {
    _id: 34447,
    in_Object: "Legra_Terra_450_N_PTO",
    HardwareItem: "Hardware_Legra_Terra_450_N_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Terra_450_N"
  }
  , {
    _id: 34448,
    in_Object: "Legra_Terra_500_N_PTO",
    HardwareItem: "Hardware_Legra_Terra_500_N_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Terra_500_N"
  }
  , {
    _id: 34449,
    in_Object: "Legra_Terra_550_N_PTO",
    HardwareItem: "Hardware_Legra_Terra_550_N_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Terra_550_N"
  }
  , {
    _id: 34450,
    in_Object: "Legra_Orion_400_N_PTO",
    HardwareItem: "Hardware_Legra_Orion_400_N_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Orion_400_N"
  }
  , {
    _id: 34451,
    in_Object: "Legra_Orion_450_N_PTO",
    HardwareItem: "Hardware_Legra_Orion_450_N_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Orion_450_N"
  }
  , {
    _id: 34452,
    in_Object: "Legra_Orion_500_N_PTO",
    HardwareItem: "Hardware_Legra_Orion_500_N_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Orion_500_N"
  }
  , {
    _id: 34453,
    in_Object: "Legra_Orion_550_N_PTO",
    HardwareItem: "Hardware_Legra_Orion_550_N_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Orion_550_N"
  }
  , {
    _id: 34454,
    in_Object: "Legra_Inox_450_N_PTO",
    HardwareItem: "Hardware_Legra_Inox_450_N_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Inox_450_N"
  }
  , {
    _id: 34455,
    in_Object: "Legra_Inox_500_N_PTO",
    HardwareItem: "Hardware_Legra_Inox_500_N_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Inox_500_N"
  }
  , {
    _id: 34456,
    in_Object: "Legra_White_270_M",
    HardwareItem: "Hardware_Legra_White_270_M",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_White_270_M"
  }
  , {
    _id: 34457,
    in_Object: "Legra_White_300_M",
    HardwareItem: "Hardware_Legra_White_300_M",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_White_300_M"
  }
  , {
    _id: 34458,
    in_Object: "Legra_White_350_M",
    HardwareItem: "Hardware_Legra_White_350_M",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_White_350_M"
  }
  , {
    _id: 34459,
    in_Object: "Legra_White_400_M",
    HardwareItem: "Hardware_Legra_White_400_M",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_White_400_M"
  }
  , {
    _id: 34460,
    in_Object: "Legra_White_450_M",
    HardwareItem: "Hardware_Legra_White_450_M",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_White_450_M"
  }
  , {
    _id: 34461,
    in_Object: "Legra_White_500_M",
    HardwareItem: "Hardware_Legra_White_500_M",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_White_500_M"
  }
  , {
    _id: 34462,
    in_Object: "Legra_White_550_M",
    HardwareItem: "Hardware_Legra_White_550_M",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_White_550_M"
  }
  , {
    _id: 34463,
    in_Object: "Legra_White_600_M",
    HardwareItem: "Hardware_Legra_White_600_M",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_White_600_M"
  }
  , {
    _id: 34464,
    in_Object: "Legra_White_450_M_Heavy",
    HardwareItem: "Hardware_Legra_White_450_M_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_White_450_M_Heavy"
  }
  , {
    _id: 34465,
    in_Object: "Legra_White_500_M_Heavy",
    HardwareItem: "Hardware_Legra_White_500_M_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_White_500_M_Heavy"
  }
  , {
    _id: 34466,
    in_Object: "Legra_White_550_M_Heavy",
    HardwareItem: "Hardware_Legra_White_550_M_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_White_550_M_Heavy"
  }
  , {
    _id: 34467,
    in_Object: "Legra_White_600_M_Heavy",
    HardwareItem: "Hardware_Legra_White_600_M_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_White_600_M_Heavy"
  }
  , {
    _id: 34468,
    in_Object: "Legra_White_650_M_Heavy",
    HardwareItem: "Hardware_Legra_White_650_M_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_White_650_M_Heavy"
  }
  , {
    _id: 34469,
    in_Object: "Legra_Terra_270_M",
    HardwareItem: "Hardware_Legra_Terra_270_M",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Terra_270_M"
  }
  , {
    _id: 34470,
    in_Object: "Legra_Terra_300_M",
    HardwareItem: "Hardware_Legra_Terra_300_M",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Terra_300_M"
  }
  , {
    _id: 34471,
    in_Object: "Legra_Terra_350_M",
    HardwareItem: "Hardware_Legra_Terra_350_M",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Terra_350_M"
  }
  , {
    _id: 34472,
    in_Object: "Legra_Terra_400_M",
    HardwareItem: "Hardware_Legra_Terra_400_M",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Terra_400_M"
  }
  , {
    _id: 34473,
    in_Object: "Legra_Terra_450_M",
    HardwareItem: "Hardware_Legra_Terra_450_M",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Terra_450_M"
  }
  , {
    _id: 34474,
    in_Object: "Legra_Terra_500_M",
    HardwareItem: "Hardware_Legra_Terra_500_M",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Terra_500_M"
  }
  , {
    _id: 34475,
    in_Object: "Legra_Terra_550_M",
    HardwareItem: "Hardware_Legra_Terra_550_M",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Terra_550_M"
  }
  , {
    _id: 34476,
    in_Object: "Legra_Terra_600_M",
    HardwareItem: "Hardware_Legra_Terra_600_M",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Terra_600_M"
  }
  , {
    _id: 34477,
    in_Object: "Legra_Terra_450_M_Heavy",
    HardwareItem: "Hardware_Legra_Terra_450_M_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Terra_450_M_Heavy"
  }
  , {
    _id: 34478,
    in_Object: "Legra_Terra_500_M_Heavy",
    HardwareItem: "Hardware_Legra_Terra_500_M_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Terra_500_M_Heavy"
  }
  , {
    _id: 34479,
    in_Object: "Legra_Terra_550_M_Heavy",
    HardwareItem: "Hardware_Legra_Terra_550_M_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Terra_550_M_Heavy"
  }
  , {
    _id: 34480,
    in_Object: "Legra_Terra_600_M_Heavy",
    HardwareItem: "Hardware_Legra_Terra_600_M_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Terra_600_M_Heavy"
  }
  , {
    _id: 34481,
    in_Object: "Legra_Terra_650_M_Heavy",
    HardwareItem: "Hardware_Legra_Terra_650_M_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Terra_650_M_Heavy"
  }
  , {
    _id: 34482,
    in_Object: "Legra_Orion_270_M",
    HardwareItem: "Hardware_Legra_Orion_270_M",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Orion_270_M"
  }
  , {
    _id: 34483,
    in_Object: "Legra_Orion_300_M",
    HardwareItem: "Hardware_Legra_Orion_300_M",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Orion_300_M"
  }
  , {
    _id: 34484,
    in_Object: "Legra_Orion_350_M",
    HardwareItem: "Hardware_Legra_Orion_350_M",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Orion_350_M"
  }
  , {
    _id: 34485,
    in_Object: "Legra_Orion_400_M",
    HardwareItem: "Hardware_Legra_Orion_400_M",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Orion_400_M"
  }
  , {
    _id: 34486,
    in_Object: "Legra_Orion_450_M",
    HardwareItem: "Hardware_Legra_Orion_450_M",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Orion_450_M"
  }
  , {
    _id: 34487,
    in_Object: "Legra_Orion_500_M",
    HardwareItem: "Hardware_Legra_Orion_500_M",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Orion_500_M"
  }
  , {
    _id: 34488,
    in_Object: "Legra_Orion_550_M",
    HardwareItem: "Hardware_Legra_Orion_550_M",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Orion_550_M"
  }
  , {
    _id: 34489,
    in_Object: "Legra_Orion_600_M",
    HardwareItem: "Hardware_Legra_Orion_600_M",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Orion_600_M"
  }
  , {
    _id: 34490,
    in_Object: "Legra_Orion_450_M_Heavy",
    HardwareItem: "Hardware_Legra_Orion_450_M_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Orion_450_M_Heavy"
  }
  , {
    _id: 34491,
    in_Object: "Legra_Orion_500_M_Heavy",
    HardwareItem: "Hardware_Legra_Orion_500_M_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Orion_500_M_Heavy"
  }
  , {
    _id: 34492,
    in_Object: "Legra_Orion_550_M_Heavy",
    HardwareItem: "Hardware_Legra_Orion_550_M_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Orion_550_M_Heavy"
  }
  , {
    _id: 34493,
    in_Object: "Legra_Orion_600_M_Heavy",
    HardwareItem: "Hardware_Legra_Orion_600_M_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Orion_600_M_Heavy"
  }
  , {
    _id: 34494,
    in_Object: "Legra_Orion_650_M_Heavy",
    HardwareItem: "Hardware_Legra_Orion_650_M_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Orion_650_M_Heavy"
  }
  , {
    _id: 34495,
    in_Object: "Legra_Inox_270_M",
    HardwareItem: "Hardware_Legra_Inox_270_M",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Inox_270_M"
  }
  , {
    _id: 34496,
    in_Object: "Legra_Inox_300_M",
    HardwareItem: "Hardware_Legra_Inox_300_M",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Inox_300_M"
  }
  , {
    _id: 34497,
    in_Object: "Legra_Inox_350_M",
    HardwareItem: "Hardware_Legra_Inox_350_M",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Inox_350_M"
  }
  , {
    _id: 34498,
    in_Object: "Legra_Inox_400_M",
    HardwareItem: "Hardware_Legra_Inox_400_M",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Inox_400_M"
  }
  , {
    _id: 34499,
    in_Object: "Legra_Inox_450_M",
    HardwareItem: "Hardware_Legra_Inox_450_M",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Inox_450_M"
  }
  , {
    _id: 34500,
    in_Object: "Legra_Inox_500_M",
    HardwareItem: "Hardware_Legra_Inox_500_M",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Inox_500_M"
  }
  , {
    _id: 34501,
    in_Object: "Legra_Inox_550_M",
    HardwareItem: "Hardware_Legra_Inox_550_M",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Inox_550_M"
  }
  , {
    _id: 34502,
    in_Object: "Legra_Inox_600_M",
    HardwareItem: "Hardware_Legra_Inox_600_M",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Inox_600_M"
  }
  , {
    _id: 34503,
    in_Object: "Legra_Inox_450_M_Heavy",
    HardwareItem: "Hardware_Legra_Inox_450_M_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Inox_450_M_Heavy"
  }
  , {
    _id: 34504,
    in_Object: "Legra_Inox_500_M_Heavy",
    HardwareItem: "Hardware_Legra_Inox_500_M_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Inox_500_M_Heavy"
  }
  , {
    _id: 34505,
    in_Object: "Legra_Inox_550_M_Heavy",
    HardwareItem: "Hardware_Legra_Inox_550_M_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Inox_550_M_Heavy"
  }
  , {
    _id: 34506,
    in_Object: "Legra_Inox_600_M_Heavy",
    HardwareItem: "Hardware_Legra_Inox_600_M_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Inox_600_M_Heavy"
  }
  , {
    _id: 34507,
    in_Object: "Legra_Inox_650_M_Heavy",
    HardwareItem: "Hardware_Legra_Inox_650_M_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Inox_650_M_Heavy"
  }
  , {
    _id: 34508,
    in_Object: "Legra_White_270_M_PTO",
    HardwareItem: "Hardware_Legra_White_270_M_PTO",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_White_270_M"
  }
  , {
    _id: 34509,
    in_Object: "Legra_White_300_M_PTO",
    HardwareItem: "Hardware_Legra_White_300_M_PTO",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_White_300_M"
  }
  , {
    _id: 34510,
    in_Object: "Legra_White_350_M_PTO",
    HardwareItem: "Hardware_Legra_White_350_M_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_White_350_M"
  }
  , {
    _id: 34511,
    in_Object: "Legra_White_400_M_PTO",
    HardwareItem: "Hardware_Legra_White_400_M_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_White_400_M"
  }
  , {
    _id: 34512,
    in_Object: "Legra_White_450_M_PTO",
    HardwareItem: "Hardware_Legra_White_450_M_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_White_450_M"
  }
  , {
    _id: 34513,
    in_Object: "Legra_White_500_M_PTO",
    HardwareItem: "Hardware_Legra_White_500_M_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_White_500_M"
  }
  , {
    _id: 34514,
    in_Object: "Legra_White_550_M_PTO",
    HardwareItem: "Hardware_Legra_White_550_M_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_White_550_M"
  }
  , {
    _id: 34515,
    in_Object: "Legra_White_600_M_PTO",
    HardwareItem: "Hardware_Legra_White_600_M_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_White_600_M"
  }
  , {
    _id: 34516,
    in_Object: "Legra_White_450_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_450_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_White_450_M_Heavy"
  }
  , {
    _id: 34517,
    in_Object: "Legra_White_500_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_500_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_White_500_M_Heavy"
  }
  , {
    _id: 34518,
    in_Object: "Legra_White_550_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_550_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_White_550_M_Heavy"
  }
  , {
    _id: 34519,
    in_Object: "Legra_White_600_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_600_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_White_600_M_Heavy"
  }
  , {
    _id: 34520,
    in_Object: "Legra_White_650_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_650_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_White_650_M_Heavy"
  }
  , {
    _id: 34521,
    in_Object: "Legra_Terra_270_M_PTO",
    HardwareItem: "Hardware_Legra_Terra_270_M_PTO",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Terra_270_M"
  }
  , {
    _id: 34522,
    in_Object: "Legra_Terra_300_M_PTO",
    HardwareItem: "Hardware_Legra_Terra_300_M_PTO",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Terra_300_M"
  }
  , {
    _id: 34523,
    in_Object: "Legra_Terra_350_M_PTO",
    HardwareItem: "Hardware_Legra_Terra_350_M_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Terra_350_M"
  }
  , {
    _id: 34524,
    in_Object: "Legra_Terra_400_M_PTO",
    HardwareItem: "Hardware_Legra_Terra_400_M_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Terra_400_M"
  }
  , {
    _id: 34525,
    in_Object: "Legra_Terra_450_M_PTO",
    HardwareItem: "Hardware_Legra_Terra_450_M_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Terra_450_M"
  }
  , {
    _id: 34526,
    in_Object: "Legra_Terra_500_M_PTO",
    HardwareItem: "Hardware_Legra_Terra_500_M_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Terra_500_M"
  }
  , {
    _id: 34527,
    in_Object: "Legra_Terra_550_M_PTO",
    HardwareItem: "Hardware_Legra_Terra_550_M_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Terra_550_M"
  }
  , {
    _id: 34528,
    in_Object: "Legra_Terra_600_M_PTO",
    HardwareItem: "Hardware_Legra_Terra_600_M_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Terra_600_M"
  }
  , {
    _id: 34529,
    in_Object: "Legra_Terra_450_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_450_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Terra_450_M_Heavy"
  }
  , {
    _id: 34530,
    in_Object: "Legra_Terra_500_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_500_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Terra_500_M_Heavy"
  }
  , {
    _id: 34531,
    in_Object: "Legra_Terra_550_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_550_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Terra_550_M_Heavy"
  }
  , {
    _id: 34532,
    in_Object: "Legra_Terra_600_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_600_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Terra_600_M_Heavy"
  }
  , {
    _id: 34533,
    in_Object: "Legra_Terra_650_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_650_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Terra_650_M_Heavy"
  }
  , {
    _id: 34534,
    in_Object: "Legra_Orion_270_M_PTO",
    HardwareItem: "Hardware_Legra_Orion_270_M_PTO",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Orion_270_M"
  }
  , {
    _id: 34535,
    in_Object: "Legra_Orion_300_M_PTO",
    HardwareItem: "Hardware_Legra_Orion_300_M_PTO",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Orion_300_M"
  }
  , {
    _id: 34536,
    in_Object: "Legra_Orion_350_M_PTO",
    HardwareItem: "Hardware_Legra_Orion_350_M_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Orion_350_M"
  }
  , {
    _id: 34537,
    in_Object: "Legra_Orion_400_M_PTO",
    HardwareItem: "Hardware_Legra_Orion_400_M_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Orion_400_M"
  }
  , {
    _id: 34538,
    in_Object: "Legra_Orion_450_M_PTO",
    HardwareItem: "Hardware_Legra_Orion_450_M_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Orion_450_M"
  }
  , {
    _id: 34539,
    in_Object: "Legra_Orion_500_M_PTO",
    HardwareItem: "Hardware_Legra_Orion_500_M_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Orion_500_M"
  }
  , {
    _id: 34540,
    in_Object: "Legra_Orion_550_M_PTO",
    HardwareItem: "Hardware_Legra_Orion_550_M_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Orion_550_M"
  }
  , {
    _id: 34541,
    in_Object: "Legra_Orion_600_M_PTO",
    HardwareItem: "Hardware_Legra_Orion_600_M_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Orion_600_M"
  }
  , {
    _id: 34542,
    in_Object: "Legra_Orion_450_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_450_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Orion_450_M_Heavy"
  }
  , {
    _id: 34543,
    in_Object: "Legra_Orion_500_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_500_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Orion_500_M_Heavy"
  }
  , {
    _id: 34544,
    in_Object: "Legra_Orion_550_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_550_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Orion_550_M_Heavy"
  }
  , {
    _id: 34545,
    in_Object: "Legra_Orion_600_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_600_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Orion_600_M_Heavy"
  }
  , {
    _id: 34546,
    in_Object: "Legra_Orion_650_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_650_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Orion_650_M_Heavy"
  }
  , {
    _id: 34547,
    in_Object: "Legra_Inox_270_M_PTO",
    HardwareItem: "Hardware_Legra_Inox_270_M_PTO",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Inox_270_M"
  }
  , {
    _id: 34548,
    in_Object: "Legra_Inox_300_M_PTO",
    HardwareItem: "Hardware_Legra_Inox_300_M_PTO",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Inox_300_M"
  }
  , {
    _id: 34549,
    in_Object: "Legra_Inox_350_M_PTO",
    HardwareItem: "Hardware_Legra_Inox_350_M_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Inox_350_M"
  }
  , {
    _id: 34550,
    in_Object: "Legra_Inox_400_M_PTO",
    HardwareItem: "Hardware_Legra_Inox_400_M_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Inox_400_M"
  }
  , {
    _id: 34551,
    in_Object: "Legra_Inox_450_M_PTO",
    HardwareItem: "Hardware_Legra_Inox_450_M_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Inox_450_M"
  }
  , {
    _id: 34552,
    in_Object: "Legra_Inox_500_M_PTO",
    HardwareItem: "Hardware_Legra_Inox_500_M_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Inox_500_M"
  }
  , {
    _id: 34553,
    in_Object: "Legra_Inox_550_M_PTO",
    HardwareItem: "Hardware_Legra_Inox_550_M_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Inox_550_M"
  }
  , {
    _id: 34554,
    in_Object: "Legra_Inox_600_M_PTO",
    HardwareItem: "Hardware_Legra_Inox_600_M_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Inox_600_M"
  }
  , {
    _id: 34555,
    in_Object: "Legra_Inox_450_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_450_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Inox_450_M_Heavy"
  }
  , {
    _id: 34556,
    in_Object: "Legra_Inox_500_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_500_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Inox_500_M_Heavy"
  }
  , {
    _id: 34557,
    in_Object: "Legra_Inox_550_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_550_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Inox_550_M_Heavy"
  }
  , {
    _id: 34558,
    in_Object: "Legra_Inox_600_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_600_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Inox_600_M_Heavy"
  }
  , {
    _id: 34559,
    in_Object: "Legra_Inox_650_M_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_650_M_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Inox_650_M_Heavy"
  }
  , {
    _id: 34560,
    in_Object: "Legra_White_300_K",
    HardwareItem: "Hardware_Legra_White_300_K",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_White_300_K"
  }
  , {
    _id: 34561,
    in_Object: "Legra_White_350_K",
    HardwareItem: "Hardware_Legra_White_350_K",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_White_350_K"
  }
  , {
    _id: 34562,
    in_Object: "Legra_White_400_K",
    HardwareItem: "Hardware_Legra_White_400_K",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_White_400_K"
  }
  , {
    _id: 34563,
    in_Object: "Legra_White_450_K",
    HardwareItem: "Hardware_Legra_White_450_K",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_White_450_K"
  }
  , {
    _id: 34564,
    in_Object: "Legra_White_500_K",
    HardwareItem: "Hardware_Legra_White_500_K",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_White_500_K"
  }
  , {
    _id: 34565,
    in_Object: "Legra_White_550_K",
    HardwareItem: "Hardware_Legra_White_550_K",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_White_550_K"
  }
  , {
    _id: 34566,
    in_Object: "Legra_White_600_K",
    HardwareItem: "Hardware_Legra_White_600_K",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_White_600_K"
  }
  , {
    _id: 34567,
    in_Object: "Legra_White_450_K_Heavy",
    HardwareItem: "Hardware_Legra_White_450_K_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_White_450_K_Heavy"
  }
  , {
    _id: 34568,
    in_Object: "Legra_White_500_K_Heavy",
    HardwareItem: "Hardware_Legra_White_500_K_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_White_500_K_Heavy"
  }
  , {
    _id: 34569,
    in_Object: "Legra_White_550_K_Heavy",
    HardwareItem: "Hardware_Legra_White_550_K_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_White_550_K_Heavy"
  }
  , {
    _id: 34570,
    in_Object: "Legra_White_600_K_Heavy",
    HardwareItem: "Hardware_Legra_White_600_K_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_White_600_K_Heavy"
  }
  , {
    _id: 34571,
    in_Object: "Legra_Terra_300_K",
    HardwareItem: "Hardware_Legra_Terra_300_K",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Terra_300_K"
  }
  , {
    _id: 34572,
    in_Object: "Legra_Terra_350_K",
    HardwareItem: "Hardware_Legra_Terra_350_K",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Terra_350_K"
  }
  , {
    _id: 34573,
    in_Object: "Legra_Terra_400_K",
    HardwareItem: "Hardware_Legra_Terra_400_K",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Terra_400_K"
  }
  , {
    _id: 34574,
    in_Object: "Legra_Terra_450_K",
    HardwareItem: "Hardware_Legra_Terra_450_K",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Terra_450_K"
  }
  , {
    _id: 34575,
    in_Object: "Legra_Terra_500_K",
    HardwareItem: "Hardware_Legra_Terra_500_K",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Terra_500_K"
  }
  , {
    _id: 34576,
    in_Object: "Legra_Terra_550_K",
    HardwareItem: "Hardware_Legra_Terra_550_K",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Terra_550_K"
  }
  , {
    _id: 34577,
    in_Object: "Legra_Terra_600_K",
    HardwareItem: "Hardware_Legra_Terra_600_K",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Terra_600_K"
  }
  , {
    _id: 34578,
    in_Object: "Legra_Terra_450_K_Heavy",
    HardwareItem: "Hardware_Legra_Terra_450_K_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Terra_450_K_Heavy"
  }
  , {
    _id: 34579,
    in_Object: "Legra_Terra_500_K_Heavy",
    HardwareItem: "Hardware_Legra_Terra_500_K_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Terra_500_K_Heavy"
  }
  , {
    _id: 34580,
    in_Object: "Legra_Terra_550_K_Heavy",
    HardwareItem: "Hardware_Legra_Terra_550_K_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Terra_550_K_Heavy"
  }
  , {
    _id: 34581,
    in_Object: "Legra_Terra_600_K_Heavy",
    HardwareItem: "Hardware_Legra_Terra_600_K_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Terra_600_K_Heavy"
  }
  , {
    _id: 34582,
    in_Object: "Legra_Orion_300_K",
    HardwareItem: "Hardware_Legra_Orion_300_K",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Orion_300_K"
  }
  , {
    _id: 34583,
    in_Object: "Legra_Orion_350_K",
    HardwareItem: "Hardware_Legra_Orion_350_K",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Orion_350_K"
  }
  , {
    _id: 34584,
    in_Object: "Legra_Orion_400_K",
    HardwareItem: "Hardware_Legra_Orion_400_K",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Orion_400_K"
  }
  , {
    _id: 34585,
    in_Object: "Legra_Orion_450_K",
    HardwareItem: "Hardware_Legra_Orion_450_K",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Orion_450_K"
  }
  , {
    _id: 34586,
    in_Object: "Legra_Orion_500_K",
    HardwareItem: "Hardware_Legra_Orion_500_K",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Orion_500_K"
  }
  , {
    _id: 34587,
    in_Object: "Legra_Orion_550_K",
    HardwareItem: "Hardware_Legra_Orion_550_K",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Orion_550_K"
  }
  , {
    _id: 34588,
    in_Object: "Legra_Orion_600_K",
    HardwareItem: "Hardware_Legra_Orion_600_K",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Orion_600_K"
  }
  , {
    _id: 34589,
    in_Object: "Legra_Orion_450_K_Heavy",
    HardwareItem: "Hardware_Legra_Orion_450_K_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Orion_450_K_Heavy"
  }
  , {
    _id: 34590,
    in_Object: "Legra_Orion_500_K_Heavy",
    HardwareItem: "Hardware_Legra_Orion_500_K_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Orion_500_K_Heavy"
  }
  , {
    _id: 34591,
    in_Object: "Legra_Orion_550_K_Heavy",
    HardwareItem: "Hardware_Legra_Orion_550_K_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Orion_550_K_Heavy"
  }
  , {
    _id: 34592,
    in_Object: "Legra_Orion_600_K_Heavy",
    HardwareItem: "Hardware_Legra_Orion_600_K_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Orion_600_K_Heavy"
  }
  , {
    _id: 34593,
    in_Object: "Legra_Inox_350_K",
    HardwareItem: "Hardware_Legra_Inox_350_K",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Inox_350_K"
  }
  , {
    _id: 34594,
    in_Object: "Legra_Inox_400_K",
    HardwareItem: "Hardware_Legra_Inox_400_K",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Inox_400_K"
  }
  , {
    _id: 34595,
    in_Object: "Legra_Inox_450_K",
    HardwareItem: "Hardware_Legra_Inox_450_K",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Inox_450_K"
  }
  , {
    _id: 34596,
    in_Object: "Legra_Inox_500_K",
    HardwareItem: "Hardware_Legra_Inox_500_K",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Inox_500_K"
  }
  , {
    _id: 34597,
    in_Object: "Legra_Inox_550_K",
    HardwareItem: "Hardware_Legra_Inox_550_K",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Inox_550_K"
  }
  , {
    _id: 34598,
    in_Object: "Legra_Inox_450_K_Heavy",
    HardwareItem: "Hardware_Legra_Inox_450_K_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Inox_450_K_Heavy"
  }
  , {
    _id: 34599,
    in_Object: "Legra_Inox_500_K_Heavy",
    HardwareItem: "Hardware_Legra_Inox_500_K_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Inox_500_K_Heavy"
  }
  , {
    _id: 34600,
    in_Object: "Legra_Inox_550_K_Heavy",
    HardwareItem: "Hardware_Legra_Inox_550_K_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Inox_550_K_Heavy"
  }
  , {
    _id: 34601,
    in_Object: "Legra_White_300_K_PTO",
    HardwareItem: "Hardware_Legra_White_300_K_PTO",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_White_300_K"
  }
  , {
    _id: 34602,
    in_Object: "Legra_White_350_K_PTO",
    HardwareItem: "Hardware_Legra_White_350_K_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_White_350_K"
  }
  , {
    _id: 34603,
    in_Object: "Legra_White_400_K_PTO",
    HardwareItem: "Hardware_Legra_White_400_K_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_White_400_K"
  }
  , {
    _id: 34604,
    in_Object: "Legra_White_450_K_PTO",
    HardwareItem: "Hardware_Legra_White_450_K_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_White_450_K"
  }
  , {
    _id: 34605,
    in_Object: "Legra_White_500_K_PTO",
    HardwareItem: "Hardware_Legra_White_500_K_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_White_500_K"
  }
  , {
    _id: 34606,
    in_Object: "Legra_White_550_K_PTO",
    HardwareItem: "Hardware_Legra_White_550_K_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_White_550_K"
  }
  , {
    _id: 34607,
    in_Object: "Legra_White_600_K_PTO",
    HardwareItem: "Hardware_Legra_White_600_K_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_White_600_K"
  }
  , {
    _id: 34608,
    in_Object: "Legra_White_450_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_450_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_White_450_K_Heavy"
  }
  , {
    _id: 34609,
    in_Object: "Legra_White_500_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_500_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_White_500_K_Heavy"
  }
  , {
    _id: 34610,
    in_Object: "Legra_White_550_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_550_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_White_550_K_Heavy"
  }
  , {
    _id: 34611,
    in_Object: "Legra_White_600_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_600_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_White_600_K_Heavy"
  }
  , {
    _id: 34612,
    in_Object: "Legra_Terra_300_K_PTO",
    HardwareItem: "Hardware_Legra_Terra_300_K_PTO",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Terra_300_K"
  }
  , {
    _id: 34613,
    in_Object: "Legra_Terra_350_K_PTO",
    HardwareItem: "Hardware_Legra_Terra_350_K_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Terra_350_K"
  }
  , {
    _id: 34614,
    in_Object: "Legra_Terra_400_K_PTO",
    HardwareItem: "Hardware_Legra_Terra_400_K_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Terra_400_K"
  }
  , {
    _id: 34615,
    in_Object: "Legra_Terra_450_K_PTO",
    HardwareItem: "Hardware_Legra_Terra_450_K_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Terra_450_K"
  }
  , {
    _id: 34616,
    in_Object: "Legra_Terra_500_K_PTO",
    HardwareItem: "Hardware_Legra_Terra_500_K_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Terra_500_K"
  }
  , {
    _id: 34617,
    in_Object: "Legra_Terra_550_K_PTO",
    HardwareItem: "Hardware_Legra_Terra_550_K_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Terra_550_K"
  }
  , {
    _id: 34618,
    in_Object: "Legra_Terra_600_K_PTO",
    HardwareItem: "Hardware_Legra_Terra_600_K_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Terra_600_K"
  }
  , {
    _id: 34619,
    in_Object: "Legra_Terra_450_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_450_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Terra_450_K_Heavy"
  }
  , {
    _id: 34620,
    in_Object: "Legra_Terra_500_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_500_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Terra_500_K_Heavy"
  }
  , {
    _id: 34621,
    in_Object: "Legra_Terra_550_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_550_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Terra_550_K_Heavy"
  }
  , {
    _id: 34622,
    in_Object: "Legra_Terra_600_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_600_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Terra_600_K_Heavy"
  }
  , {
    _id: 34623,
    in_Object: "Legra_Orion_300_K_PTO",
    HardwareItem: "Hardware_Legra_Orion_300_K_PTO",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Orion_300_K"
  }
  , {
    _id: 34624,
    in_Object: "Legra_Orion_350_K_PTO",
    HardwareItem: "Hardware_Legra_Orion_350_K_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Orion_350_K"
  }
  , {
    _id: 34625,
    in_Object: "Legra_Orion_400_K_PTO",
    HardwareItem: "Hardware_Legra_Orion_400_K_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Orion_400_K"
  }
  , {
    _id: 34626,
    in_Object: "Legra_Orion_450_K_PTO",
    HardwareItem: "Hardware_Legra_Orion_450_K_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Orion_450_K"
  }
  , {
    _id: 34627,
    in_Object: "Legra_Orion_500_K_PTO",
    HardwareItem: "Hardware_Legra_Orion_500_K_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Orion_500_K"
  }
  , {
    _id: 34628,
    in_Object: "Legra_Orion_550_K_PTO",
    HardwareItem: "Hardware_Legra_Orion_550_K_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Orion_550_K"
  }
  , {
    _id: 34629,
    in_Object: "Legra_Orion_600_K_PTO",
    HardwareItem: "Hardware_Legra_Orion_600_K_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Orion_600_K"
  }
  , {
    _id: 34630,
    in_Object: "Legra_Orion_450_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_450_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Orion_450_K_Heavy"
  }
  , {
    _id: 34631,
    in_Object: "Legra_Orion_500_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_500_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Orion_500_K_Heavy"
  }
  , {
    _id: 34632,
    in_Object: "Legra_Orion_550_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_550_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Orion_550_K_Heavy"
  }
  , {
    _id: 34633,
    in_Object: "Legra_Orion_600_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_600_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Orion_600_K_Heavy"
  }
  , {
    _id: 34634,
    in_Object: "Legra_Inox_350_K_PTO",
    HardwareItem: "Hardware_Legra_Inox_350_K_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Inox_350_K"
  }
  , {
    _id: 34635,
    in_Object: "Legra_Inox_400_K_PTO",
    HardwareItem: "Hardware_Legra_Inox_400_K_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Inox_400_K"
  }
  , {
    _id: 34636,
    in_Object: "Legra_Inox_450_K_PTO",
    HardwareItem: "Hardware_Legra_Inox_450_K_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Inox_450_K"
  }
  , {
    _id: 34637,
    in_Object: "Legra_Inox_500_K_PTO",
    HardwareItem: "Hardware_Legra_Inox_500_K_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Inox_500_K"
  }
  , {
    _id: 34638,
    in_Object: "Legra_Inox_550_K_PTO",
    HardwareItem: "Hardware_Legra_Inox_550_K_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Inox_550_K"
  }
  , {
    _id: 34639,
    in_Object: "Legra_Inox_450_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_450_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Inox_450_K_Heavy"
  }
  , {
    _id: 34640,
    in_Object: "Legra_Inox_500_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_500_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Inox_500_K_Heavy"
  }
  , {
    _id: 34641,
    in_Object: "Legra_Inox_550_K_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_550_K_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Inox_550_K_Heavy"
  }
  , {
    _id: 34642,
    in_Object: "Legra_White_270_C",
    HardwareItem: "Hardware_Legra_White_270_C",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_White_270_C"
  }
  , {
    _id: 34643,
    in_Object: "Legra_White_300_C",
    HardwareItem: "Hardware_Legra_White_300_C",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_White_300_C"
  }
  , {
    _id: 34644,
    in_Object: "Legra_White_350_C",
    HardwareItem: "Hardware_Legra_White_350_C",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_White_350_C"
  }
  , {
    _id: 34645,
    in_Object: "Legra_White_400_C",
    HardwareItem: "Hardware_Legra_White_400_C",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_White_400_C"
  }
  , {
    _id: 34646,
    in_Object: "Legra_White_450_C",
    HardwareItem: "Hardware_Legra_White_450_C",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_White_450_C"
  }
  , {
    _id: 34647,
    in_Object: "Legra_White_500_C",
    HardwareItem: "Hardware_Legra_White_500_C",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_White_500_C"
  }
  , {
    _id: 34648,
    in_Object: "Legra_White_550_C",
    HardwareItem: "Hardware_Legra_White_550_C",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_White_550_C"
  }
  , {
    _id: 34649,
    in_Object: "Legra_White_600_C",
    HardwareItem: "Hardware_Legra_White_600_C",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_White_600_C"
  }
  , {
    _id: 34650,
    in_Object: "Legra_White_450_C_Heavy",
    HardwareItem: "Hardware_Legra_White_450_C_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_White_450_C_Heavy"
  }
  , {
    _id: 34651,
    in_Object: "Legra_White_500_C_Heavy",
    HardwareItem: "Hardware_Legra_White_500_C_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_White_500_C_Heavy"
  }
  , {
    _id: 34652,
    in_Object: "Legra_White_550_C_Heavy",
    HardwareItem: "Hardware_Legra_White_550_C_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_White_550_C_Heavy"
  }
  , {
    _id: 34653,
    in_Object: "Legra_White_600_C_Heavy",
    HardwareItem: "Hardware_Legra_White_600_C_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_White_600_C_Heavy"
  }
  , {
    _id: 34654,
    in_Object: "Legra_White_650_C_Heavy",
    HardwareItem: "Hardware_Legra_White_650_C_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_White_650_C_Heavy"
  }
  , {
    _id: 34655,
    in_Object: "Legra_Terra_270_C",
    HardwareItem: "Hardware_Legra_Terra_270_C",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Terra_270_C"
  }
  , {
    _id: 34656,
    in_Object: "Legra_Terra_300_C",
    HardwareItem: "Hardware_Legra_Terra_300_C",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Terra_300_C"
  }
  , {
    _id: 34657,
    in_Object: "Legra_Terra_350_C",
    HardwareItem: "Hardware_Legra_Terra_350_C",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Terra_350_C"
  }
  , {
    _id: 34658,
    in_Object: "Legra_Terra_400_C",
    HardwareItem: "Hardware_Legra_Terra_400_C",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Terra_400_C"
  }
  , {
    _id: 34659,
    in_Object: "Legra_Terra_450_C",
    HardwareItem: "Hardware_Legra_Terra_450_C",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Terra_450_C"
  }
  , {
    _id: 34660,
    in_Object: "Legra_Terra_500_C",
    HardwareItem: "Hardware_Legra_Terra_500_C",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Terra_500_C"
  }
  , {
    _id: 34661,
    in_Object: "Legra_Terra_550_C",
    HardwareItem: "Hardware_Legra_Terra_550_C",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Terra_550_C"
  }
  , {
    _id: 34662,
    in_Object: "Legra_Terra_600_C",
    HardwareItem: "Hardware_Legra_Terra_600_C",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Terra_600_C"
  }
  , {
    _id: 34663,
    in_Object: "Legra_Terra_450_C_Heavy",
    HardwareItem: "Hardware_Legra_Terra_450_C_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Terra_450_C_Heavy"
  }
  , {
    _id: 34664,
    in_Object: "Legra_Terra_500_C_Heavy",
    HardwareItem: "Hardware_Legra_Terra_500_C_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Terra_500_C_Heavy"
  }
  , {
    _id: 34665,
    in_Object: "Legra_Terra_550_C_Heavy",
    HardwareItem: "Hardware_Legra_Terra_550_C_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Terra_550_C_Heavy"
  }
  , {
    _id: 34666,
    in_Object: "Legra_Terra_600_C_Heavy",
    HardwareItem: "Hardware_Legra_Terra_600_C_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Terra_600_C_Heavy"
  }
  , {
    _id: 34667,
    in_Object: "Legra_Terra_650_C_Heavy",
    HardwareItem: "Hardware_Legra_Terra_650_C_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Terra_650_C_Heavy"
  }
  , {
    _id: 34668,
    in_Object: "Legra_Orion_270_C",
    HardwareItem: "Hardware_Legra_Orion_270_C",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Orion_270_C"
  }
  , {
    _id: 34669,
    in_Object: "Legra_Orion_300_C",
    HardwareItem: "Hardware_Legra_Orion_300_C",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Orion_300_C"
  }
  , {
    _id: 34670,
    in_Object: "Legra_Orion_350_C",
    HardwareItem: "Hardware_Legra_Orion_350_C",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Orion_350_C"
  }
  , {
    _id: 34671,
    in_Object: "Legra_Orion_400_C",
    HardwareItem: "Hardware_Legra_Orion_400_C",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Orion_400_C"
  }
  , {
    _id: 34672,
    in_Object: "Legra_Orion_450_C",
    HardwareItem: "Hardware_Legra_Orion_450_C",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Orion_450_C"
  }
  , {
    _id: 34673,
    in_Object: "Legra_Orion_500_C",
    HardwareItem: "Hardware_Legra_Orion_500_C",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Orion_500_C"
  }
  , {
    _id: 34674,
    in_Object: "Legra_Orion_550_C",
    HardwareItem: "Hardware_Legra_Orion_550_C",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Orion_550_C"
  }
  , {
    _id: 34675,
    in_Object: "Legra_Orion_600_C",
    HardwareItem: "Hardware_Legra_Orion_600_C",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Orion_600_C"
  }
  , {
    _id: 34676,
    in_Object: "Legra_Orion_450_C_Heavy",
    HardwareItem: "Hardware_Legra_Orion_450_C_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Orion_450_C_Heavy"
  }
  , {
    _id: 34677,
    in_Object: "Legra_Orion_500_C_Heavy",
    HardwareItem: "Hardware_Legra_Orion_500_C_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Orion_500_C_Heavy"
  }
  , {
    _id: 34678,
    in_Object: "Legra_Orion_550_C_Heavy",
    HardwareItem: "Hardware_Legra_Orion_550_C_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Orion_550_C_Heavy"
  }
  , {
    _id: 34679,
    in_Object: "Legra_Orion_600_C_Heavy",
    HardwareItem: "Hardware_Legra_Orion_600_C_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Orion_600_C_Heavy"
  }
  , {
    _id: 34680,
    in_Object: "Legra_Orion_650_C_Heavy",
    HardwareItem: "Hardware_Legra_Orion_650_C_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Orion_650_C_Heavy"
  }
  , {
    _id: 34681,
    in_Object: "Legra_Inox_270_C",
    HardwareItem: "Hardware_Legra_Inox_270_C",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Inox_270_C"
  }
  , {
    _id: 34682,
    in_Object: "Legra_Inox_300_C",
    HardwareItem: "Hardware_Legra_Inox_300_C",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Inox_300_C"
  }
  , {
    _id: 34683,
    in_Object: "Legra_Inox_350_C",
    HardwareItem: "Hardware_Legra_Inox_350_C",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Inox_350_C"
  }
  , {
    _id: 34684,
    in_Object: "Legra_Inox_400_C",
    HardwareItem: "Hardware_Legra_Inox_400_C",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Inox_400_C"
  }
  , {
    _id: 34685,
    in_Object: "Legra_Inox_450_C",
    HardwareItem: "Hardware_Legra_Inox_450_C",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Inox_450_C"
  }
  , {
    _id: 34686,
    in_Object: "Legra_Inox_500_C",
    HardwareItem: "Hardware_Legra_Inox_500_C",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Inox_500_C"
  }
  , {
    _id: 34687,
    in_Object: "Legra_Inox_550_C",
    HardwareItem: "Hardware_Legra_Inox_550_C",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Inox_550_C"
  }
  , {
    _id: 34688,
    in_Object: "Legra_Inox_600_C",
    HardwareItem: "Hardware_Legra_Inox_600_C",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Inox_600_C"
  }
  , {
    _id: 34689,
    in_Object: "Legra_Inox_450_C_Heavy",
    HardwareItem: "Hardware_Legra_Inox_450_C_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Inox_450_C_Heavy"
  }
  , {
    _id: 34690,
    in_Object: "Legra_Inox_500_C_Heavy",
    HardwareItem: "Hardware_Legra_Inox_500_C_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Inox_500_C_Heavy"
  }
  , {
    _id: 34691,
    in_Object: "Legra_Inox_550_C_Heavy",
    HardwareItem: "Hardware_Legra_Inox_550_C_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Inox_550_C_Heavy"
  }
  , {
    _id: 34692,
    in_Object: "Legra_Inox_600_C_Heavy",
    HardwareItem: "Hardware_Legra_Inox_600_C_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Inox_600_C_Heavy"
  }
  , {
    _id: 34693,
    in_Object: "Legra_Inox_650_C_Heavy",
    HardwareItem: "Hardware_Legra_Inox_650_C_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Inox_650_C_Heavy"
  }
  , {
    _id: 34694,
    in_Object: "Legra_White_270_C_PTO",
    HardwareItem: "Hardware_Legra_White_270_C_PTO",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_White_270_C"
  }
  , {
    _id: 34695,
    in_Object: "Legra_White_300_C_PTO",
    HardwareItem: "Hardware_Legra_White_300_C_PTO",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_White_300_C"
  }
  , {
    _id: 34696,
    in_Object: "Legra_White_350_C_PTO",
    HardwareItem: "Hardware_Legra_White_350_C_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_White_350_C"
  }
  , {
    _id: 34697,
    in_Object: "Legra_White_400_C_PTO",
    HardwareItem: "Hardware_Legra_White_400_C_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_White_400_C"
  }
  , {
    _id: 34698,
    in_Object: "Legra_White_450_C_PTO",
    HardwareItem: "Hardware_Legra_White_450_C_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_White_450_C"
  }
  , {
    _id: 34699,
    in_Object: "Legra_White_500_C_PTO",
    HardwareItem: "Hardware_Legra_White_500_C_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_White_500_C"
  }
  , {
    _id: 34700,
    in_Object: "Legra_White_550_C_PTO",
    HardwareItem: "Hardware_Legra_White_550_C_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_White_550_C"
  }
  , {
    _id: 34701,
    in_Object: "Legra_White_600_C_PTO",
    HardwareItem: "Hardware_Legra_White_600_C_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_White_600_C"
  }
  , {
    _id: 34702,
    in_Object: "Legra_White_450_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_450_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_White_450_C_Heavy"
  }
  , {
    _id: 34703,
    in_Object: "Legra_White_500_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_500_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_White_500_C_Heavy"
  }
  , {
    _id: 34704,
    in_Object: "Legra_White_550_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_550_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_White_550_C_Heavy"
  }
  , {
    _id: 34705,
    in_Object: "Legra_White_600_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_600_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_White_600_C_Heavy"
  }
  , {
    _id: 34706,
    in_Object: "Legra_White_650_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_650_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_White_650_C_Heavy"
  }
  , {
    _id: 34707,
    in_Object: "Legra_Terra_270_C_PTO",
    HardwareItem: "Hardware_Legra_Terra_270_C_PTO",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Terra_270_C"
  }
  , {
    _id: 34708,
    in_Object: "Legra_Terra_300_C_PTO",
    HardwareItem: "Hardware_Legra_Terra_300_C_PTO",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Terra_300_C"
  }
  , {
    _id: 34709,
    in_Object: "Legra_Terra_350_C_PTO",
    HardwareItem: "Hardware_Legra_Terra_350_C_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Terra_350_C"
  }
  , {
    _id: 34710,
    in_Object: "Legra_Terra_400_C_PTO",
    HardwareItem: "Hardware_Legra_Terra_400_C_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Terra_400_C"
  }
  , {
    _id: 34711,
    in_Object: "Legra_Terra_450_C_PTO",
    HardwareItem: "Hardware_Legra_Terra_450_C_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Terra_450_C"
  }
  , {
    _id: 34712,
    in_Object: "Legra_Terra_500_C_PTO",
    HardwareItem: "Hardware_Legra_Terra_500_C_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Terra_500_C"
  }
  , {
    _id: 34713,
    in_Object: "Legra_Terra_550_C_PTO",
    HardwareItem: "Hardware_Legra_Terra_550_C_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Terra_550_C"
  }
  , {
    _id: 34714,
    in_Object: "Legra_Terra_600_C_PTO",
    HardwareItem: "Hardware_Legra_Terra_600_C_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Terra_600_C"
  }
  , {
    _id: 34715,
    in_Object: "Legra_Terra_450_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_450_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Terra_450_C_Heavy"
  }
  , {
    _id: 34716,
    in_Object: "Legra_Terra_500_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_500_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Terra_500_C_Heavy"
  }
  , {
    _id: 34717,
    in_Object: "Legra_Terra_550_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_550_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Terra_550_C_Heavy"
  }
  , {
    _id: 34718,
    in_Object: "Legra_Terra_600_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_600_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Terra_600_C_Heavy"
  }
  , {
    _id: 34719,
    in_Object: "Legra_Terra_650_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_650_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Terra_650_C_Heavy"
  }
  , {
    _id: 34720,
    in_Object: "Legra_Orion_270_C_PTO",
    HardwareItem: "Hardware_Legra_Orion_270_C_PTO",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Orion_270_C"
  }
  , {
    _id: 34721,
    in_Object: "Legra_Orion_300_C_PTO",
    HardwareItem: "Hardware_Legra_Orion_300_C_PTO",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Orion_300_C"
  }
  , {
    _id: 34722,
    in_Object: "Legra_Orion_350_C_PTO",
    HardwareItem: "Hardware_Legra_Orion_350_C_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Orion_350_C"
  }
  , {
    _id: 34723,
    in_Object: "Legra_Orion_400_C_PTO",
    HardwareItem: "Hardware_Legra_Orion_400_C_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Orion_400_C"
  }
  , {
    _id: 34724,
    in_Object: "Legra_Orion_450_C_PTO",
    HardwareItem: "Hardware_Legra_Orion_450_C_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Orion_450_C"
  }
  , {
    _id: 34725,
    in_Object: "Legra_Orion_500_C_PTO",
    HardwareItem: "Hardware_Legra_Orion_500_C_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Orion_500_C"
  }
  , {
    _id: 34726,
    in_Object: "Legra_Orion_550_C_PTO",
    HardwareItem: "Hardware_Legra_Orion_550_C_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Orion_550_C"
  }
  , {
    _id: 34727,
    in_Object: "Legra_Orion_600_C_PTO",
    HardwareItem: "Hardware_Legra_Orion_600_C_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Orion_600_C"
  }
  , {
    _id: 34728,
    in_Object: "Legra_Orion_450_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_450_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Orion_450_C_Heavy"
  }
  , {
    _id: 34729,
    in_Object: "Legra_Orion_500_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_500_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Orion_500_C_Heavy"
  }
  , {
    _id: 34730,
    in_Object: "Legra_Orion_550_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_550_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Orion_550_C_Heavy"
  }
  , {
    _id: 34731,
    in_Object: "Legra_Orion_600_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_600_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Orion_600_C_Heavy"
  }
  , {
    _id: 34732,
    in_Object: "Legra_Orion_650_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_650_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Orion_650_C_Heavy"
  }
  , {
    _id: 34733,
    in_Object: "Legra_Inox_270_C_PTO",
    HardwareItem: "Hardware_Legra_Inox_270_C",
    ProcessingItem: "Processing_Legrabox_270",
    GraphicItem: "GraphicLegra_Inox_270_C"
  }
  , {
    _id: 34734,
    in_Object: "Legra_Inox_300_C_PTO",
    HardwareItem: "Hardware_Legra_Inox_300_C",
    ProcessingItem: "Processing_Legrabox_300",
    GraphicItem: "GraphicLegra_Inox_300_C"
  }
  , {
    _id: 34735,
    in_Object: "Legra_Inox_350_C_PTO",
    HardwareItem: "Hardware_Legra_Inox_350_C_PTO",
    ProcessingItem: "Processing_Legrabox_350",
    GraphicItem: "GraphicLegra_Inox_350_C"
  }
  , {
    _id: 34736,
    in_Object: "Legra_Inox_400_C_PTO",
    HardwareItem: "Hardware_Legra_Inox_400_C_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Inox_400_C"
  }
  , {
    _id: 34737,
    in_Object: "Legra_Inox_450_C_PTO",
    HardwareItem: "Hardware_Legra_Inox_450_C_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Inox_450_C"
  }
  , {
    _id: 34738,
    in_Object: "Legra_Inox_500_C_PTO",
    HardwareItem: "Hardware_Legra_Inox_500_C_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Inox_500_C"
  }
  , {
    _id: 34739,
    in_Object: "Legra_Inox_550_C_PTO",
    HardwareItem: "Hardware_Legra_Inox_550_C_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Inox_550_C"
  }
  , {
    _id: 34740,
    in_Object: "Legra_Inox_600_C_PTO",
    HardwareItem: "Hardware_Legra_Inox_600_C_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Inox_600_C"
  }
  , {
    _id: 34741,
    in_Object: "Legra_Inox_450_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_450_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Inox_450_C_Heavy"
  }
  , {
    _id: 34742,
    in_Object: "Legra_Inox_500_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_500_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Inox_500_C_Heavy"
  }
  , {
    _id: 34743,
    in_Object: "Legra_Inox_550_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_550_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Inox_550_C_Heavy"
  }
  , {
    _id: 34744,
    in_Object: "Legra_Inox_600_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_600_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Inox_600_C_Heavy"
  }
  , {
    _id: 34745,
    in_Object: "Legra_Inox_650_C_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_650_C_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Inox_650_C_Heavy"
  }
  , {
    _id: 34746,
    in_Object: "Legra_White_400_F",
    HardwareItem: "Hardware_Legra_White_400_F",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_White_400_F"
  }
  , {
    _id: 34747,
    in_Object: "Legra_White_450_F",
    HardwareItem: "Hardware_Legra_White_450_F",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_White_450_F"
  }
  , {
    _id: 34748,
    in_Object: "Legra_White_500_F",
    HardwareItem: "Hardware_Legra_White_500_F",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_White_500_F"
  }
  , {
    _id: 34749,
    in_Object: "Legra_White_550_F",
    HardwareItem: "Hardware_Legra_White_550_F",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_White_550_F"
  }
  , {
    _id: 34750,
    in_Object: "Legra_White_600_F",
    HardwareItem: "Hardware_Legra_White_600_F",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_White_600_F"
  }
  , {
    _id: 34751,
    in_Object: "Legra_White_450_F_Heavy",
    HardwareItem: "Hardware_Legra_White_450_F_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_White_450_F_Heavy"
  }
  , {
    _id: 34752,
    in_Object: "Legra_White_500_F_Heavy",
    HardwareItem: "Hardware_Legra_White_500_F_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_White_500_F_Heavy"
  }
  , {
    _id: 34753,
    in_Object: "Legra_White_550_F_Heavy",
    HardwareItem: "Hardware_Legra_White_550_F_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_White_550_F_Heavy"
  }
  , {
    _id: 34754,
    in_Object: "Legra_White_600_F_Heavy",
    HardwareItem: "Hardware_Legra_White_600_F_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_White_600_F_Heavy"
  }
  , {
    _id: 34755,
    in_Object: "Legra_White_650_F_Heavy",
    HardwareItem: "Hardware_Legra_White_650_F_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_White_650_F_Heavy"
  }
  , {
    _id: 34756,
    in_Object: "Legra_Terra_400_F",
    HardwareItem: "Hardware_Legra_Terra_400_F",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Terra_400_F"
  }
  , {
    _id: 34757,
    in_Object: "Legra_Terra_450_F",
    HardwareItem: "Hardware_Legra_Terra_450_F",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Terra_450_F"
  }
  , {
    _id: 34758,
    in_Object: "Legra_Terra_500_F",
    HardwareItem: "Hardware_Legra_Terra_500_F",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Terra_500_F"
  }
  , {
    _id: 34759,
    in_Object: "Legra_Terra_550_F",
    HardwareItem: "Hardware_Legra_Terra_550_F",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Terra_550_F"
  }
  , {
    _id: 34760,
    in_Object: "Legra_Terra_600_F",
    HardwareItem: "Hardware_Legra_Terra_600_F",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Terra_600_F"
  }
  , {
    _id: 34761,
    in_Object: "Legra_Terra_450_F_Heavy",
    HardwareItem: "Hardware_Legra_Terra_450_F_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Terra_450_F_Heavy"
  }
  , {
    _id: 34762,
    in_Object: "Legra_Terra_500_F_Heavy",
    HardwareItem: "Hardware_Legra_Terra_500_F_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Terra_500_F_Heavy"
  }
  , {
    _id: 34763,
    in_Object: "Legra_Terra_550_F_Heavy",
    HardwareItem: "Hardware_Legra_Terra_550_F_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Terra_550_F_Heavy"
  }
  , {
    _id: 34764,
    in_Object: "Legra_Terra_600_F_Heavy",
    HardwareItem: "Hardware_Legra_Terra_600_F_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Terra_600_F_Heavy"
  }
  , {
    _id: 34765,
    in_Object: "Legra_Terra_650_F_Heavy",
    HardwareItem: "Hardware_Legra_Terra_650_F_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Terra_650_F_Heavy"
  }
  , {
    _id: 34766,
    in_Object: "Legra_Orion_400_F",
    HardwareItem: "Hardware_Legra_Orion_400_F",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Orion_400_F"
  }
  , {
    _id: 34767,
    in_Object: "Legra_Orion_450_F",
    HardwareItem: "Hardware_Legra_Orion_450_F",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Orion_450_F"
  }
  , {
    _id: 34768,
    in_Object: "Legra_Orion_500_F",
    HardwareItem: "Hardware_Legra_Orion_500_F",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Orion_500_F"
  }
  , {
    _id: 34769,
    in_Object: "Legra_Orion_550_F",
    HardwareItem: "Hardware_Legra_Orion_550_F",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Orion_550_F"
  }
  , {
    _id: 34770,
    in_Object: "Legra_Orion_600_F",
    HardwareItem: "Hardware_Legra_Orion_600_F",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Orion_600_F"
  }
  , {
    _id: 34771,
    in_Object: "Legra_Orion_450_F_Heavy",
    HardwareItem: "Hardware_Legra_Orion_450_F_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Orion_450_F_Heavy"
  }
  , {
    _id: 34772,
    in_Object: "Legra_Orion_500_F_Heavy",
    HardwareItem: "Hardware_Legra_Orion_500_F_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Orion_500_F_Heavy"
  }
  , {
    _id: 34773,
    in_Object: "Legra_Orion_550_F_Heavy",
    HardwareItem: "Hardware_Legra_Orion_550_F_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Orion_550_F_Heavy"
  }
  , {
    _id: 34774,
    in_Object: "Legra_Orion_600_F_Heavy",
    HardwareItem: "Hardware_Legra_Orion_600_F_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Orion_600_F_Heavy"
  }
  , {
    _id: 34775,
    in_Object: "Legra_Orion_650_F_Heavy",
    HardwareItem: "Hardware_Legra_Orion_650_F_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Orion_650_F_Heavy"
  }
  , {
    _id: 34776,
    in_Object: "Legra_Inox_400_F",
    HardwareItem: "Hardware_Legra_Inox_400_F",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Inox_400_F"
  }
  , {
    _id: 34777,
    in_Object: "Legra_Inox_450_F",
    HardwareItem: "Hardware_Legra_Inox_450_F",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Inox_450_F"
  }
  , {
    _id: 34778,
    in_Object: "Legra_Inox_500_F",
    HardwareItem: "Hardware_Legra_Inox_500_F",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Inox_500_F"
  }
  , {
    _id: 34779,
    in_Object: "Legra_Inox_550_F",
    HardwareItem: "Hardware_Legra_Inox_550_F",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Inox_550_F"
  }
  , {
    _id: 34780,
    in_Object: "Legra_Inox_600_F",
    HardwareItem: "Hardware_Legra_Inox_600_F",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Inox_600_F"
  }
  , {
    _id: 34781,
    in_Object: "Legra_Inox_450_F_Heavy",
    HardwareItem: "Hardware_Legra_Inox_450_F_Heavy",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Inox_450_F_Heavy"
  }
  , {
    _id: 34782,
    in_Object: "Legra_Inox_500_F_Heavy",
    HardwareItem: "Hardware_Legra_Inox_500_F_Heavy",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Inox_500_F_Heavy"
  }
  , {
    _id: 34783,
    in_Object: "Legra_Inox_550_F_Heavy",
    HardwareItem: "Hardware_Legra_Inox_550_F_Heavy",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Inox_550_F_Heavy"
  }
  , {
    _id: 34784,
    in_Object: "Legra_Inox_600_F_Heavy",
    HardwareItem: "Hardware_Legra_Inox_600_F_Heavy",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Inox_600_F_Heavy"
  }
  , {
    _id: 34785,
    in_Object: "Legra_Inox_650_F_Heavy",
    HardwareItem: "Hardware_Legra_Inox_650_F_Heavy",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Inox_650_F_Heavy"
  }
  , {
    _id: 34786,
    in_Object: "Legra_White_400_F_PTO",
    HardwareItem: "Hardware_Legra_White_400_F_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_White_400_F"
  }
  , {
    _id: 34787,
    in_Object: "Legra_White_450_F_PTO",
    HardwareItem: "Hardware_Legra_White_450_F_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_White_450_F"
  }
  , {
    _id: 34788,
    in_Object: "Legra_White_500_F_PTO",
    HardwareItem: "Hardware_Legra_White_500_F_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_White_500_F"
  }
  , {
    _id: 34789,
    in_Object: "Legra_White_550_F_PTO",
    HardwareItem: "Hardware_Legra_White_550_F_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_White_550_F"
  }
  , {
    _id: 34790,
    in_Object: "Legra_White_600_F_PTO",
    HardwareItem: "Hardware_Legra_White_600_F_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_White_600_F"
  }
  , {
    _id: 34791,
    in_Object: "Legra_White_450_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_450_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_White_450_F_Heavy"
  }
  , {
    _id: 34792,
    in_Object: "Legra_White_500_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_500_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_White_500_F_Heavy"
  }
  , {
    _id: 34793,
    in_Object: "Legra_White_550_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_550_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_White_550_F_Heavy"
  }
  , {
    _id: 34794,
    in_Object: "Legra_White_600_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_600_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_White_600_F_Heavy"
  }
  , {
    _id: 34795,
    in_Object: "Legra_White_650_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_White_650_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_White_650_F_Heavy"
  }
  , {
    _id: 34796,
    in_Object: "Legra_Terra_400_F_PTO",
    HardwareItem: "Hardware_Legra_Terra_400_F_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Terra_400_F"
  }
  , {
    _id: 34797,
    in_Object: "Legra_Terra_450_F_PTO",
    HardwareItem: "Hardware_Legra_Terra_450_F_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Terra_450_F"
  }
  , {
    _id: 34798,
    in_Object: "Legra_Terra_500_F_PTO",
    HardwareItem: "Hardware_Legra_Terra_500_F_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Terra_500_F"
  }
  , {
    _id: 34799,
    in_Object: "Legra_Terra_550_F_PTO",
    HardwareItem: "Hardware_Legra_Terra_550_F_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Terra_550_F"
  }
  , {
    _id: 34800,
    in_Object: "Legra_Terra_600_F_PTO",
    HardwareItem: "Hardware_Legra_Terra_600_F_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Terra_600_F"
  }
  , {
    _id: 34801,
    in_Object: "Legra_Terra_450_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_450_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Terra_450_F_Heavy"
  }
  , {
    _id: 34802,
    in_Object: "Legra_Terra_500_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_500_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Terra_500_F_Heavy"
  }
  , {
    _id: 34803,
    in_Object: "Legra_Terra_550_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_550_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Terra_550_F_Heavy"
  }
  , {
    _id: 34804,
    in_Object: "Legra_Terra_600_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_600_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Terra_600_F_Heavy"
  }
  , {
    _id: 34805,
    in_Object: "Legra_Terra_650_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Terra_650_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Terra_650_F_Heavy"
  }
  , {
    _id: 34806,
    in_Object: "Legra_Orion_400_F_PTO",
    HardwareItem: "Hardware_Legra_Orion_400_F_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Orion_400_F"
  }
  , {
    _id: 34807,
    in_Object: "Legra_Orion_450_F_PTO",
    HardwareItem: "Hardware_Legra_Orion_450_F_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Orion_450_F"
  }
  , {
    _id: 34808,
    in_Object: "Legra_Orion_500_F_PTO",
    HardwareItem: "Hardware_Legra_Orion_500_F_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Orion_500_F"
  }
  , {
    _id: 34809,
    in_Object: "Legra_Orion_550_F_PTO",
    HardwareItem: "Hardware_Legra_Orion_550_F_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Orion_550_F"
  }
  , {
    _id: 34810,
    in_Object: "Legra_Orion_600_F_PTO",
    HardwareItem: "Hardware_Legra_Orion_600_F_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Orion_600_F"
  }
  , {
    _id: 34811,
    in_Object: "Legra_Orion_450_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_450_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Orion_450_F_Heavy"
  }
  , {
    _id: 34812,
    in_Object: "Legra_Orion_500_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_500_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Orion_500_F_Heavy"
  }
  , {
    _id: 34813,
    in_Object: "Legra_Orion_550_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_550_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Orion_550_F_Heavy"
  }
  , {
    _id: 34814,
    in_Object: "Legra_Orion_600_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_600_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Orion_600_F_Heavy"
  }
  , {
    _id: 34815,
    in_Object: "Legra_Orion_650_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Orion_650_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Orion_650_F_Heavy"
  }
  , {
    _id: 34816,
    in_Object: "Legra_Inox_400_F_PTO",
    HardwareItem: "Hardware_Legra_Inox_400_F_PTO",
    ProcessingItem: "Processing_Legrabox_400",
    GraphicItem: "GraphicLegra_Inox_400_F"
  }
  , {
    _id: 34817,
    in_Object: "Legra_Inox_450_F_PTO",
    HardwareItem: "Hardware_Legra_Inox_450_F_PTO",
    ProcessingItem: "Processing_Legrabox_450",
    GraphicItem: "GraphicLegra_Inox_450_F"
  }
  , {
    _id: 34818,
    in_Object: "Legra_Inox_500_F_PTO",
    HardwareItem: "Hardware_Legra_Inox_500_F_PTO",
    ProcessingItem: "Processing_Legrabox_500",
    GraphicItem: "GraphicLegra_Inox_500_F"
  }
  , {
    _id: 34819,
    in_Object: "Legra_Inox_550_F_PTO",
    HardwareItem: "Hardware_Legra_Inox_550_F_PTO",
    ProcessingItem: "Processing_Legrabox_550",
    GraphicItem: "GraphicLegra_Inox_550_F"
  }
  , {
    _id: 34820,
    in_Object: "Legra_Inox_600_F_PTO",
    HardwareItem: "Hardware_Legra_Inox_600_F_PTO",
    ProcessingItem: "Processing_Legrabox_600",
    GraphicItem: "GraphicLegra_Inox_600_F"
  }
  , {
    _id: 34821,
    in_Object: "Legra_Inox_450_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_450_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_450_H",
    GraphicItem: "GraphicLegra_Inox_450_F_Heavy"
  }
  , {
    _id: 34822,
    in_Object: "Legra_Inox_500_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_500_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_500_H",
    GraphicItem: "GraphicLegra_Inox_500_F_Heavy"
  }
  , {
    _id: 34823,
    in_Object: "Legra_Inox_550_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_550_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_550_H",
    GraphicItem: "GraphicLegra_Inox_550_F_Heavy"
  }
  , {
    _id: 34824,
    in_Object: "Legra_Inox_600_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_600_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_600_H",
    GraphicItem: "GraphicLegra_Inox_600_F_Heavy"
  }
  , {
    _id: 34825,
    in_Object: "Legra_Inox_650_F_Heavy_PTO",
    HardwareItem: "Hardware_Legra_Inox_650_F_Heavy_PTO",
    ProcessingItem: "Processing_Legrabox_650_H",
    GraphicItem: "GraphicLegra_Inox_650_F_Heavy"
  }
  , {
    _id: 34826,
    in_Object: "Legra_Connector_C",
    HardwareItem: "Hardware_Legra_Connector_C",
    ProcessingItem: "Processing_Legrabox_Con_C",
    GraphicItem: "NoGraphic"
  }
  , {
    _id: 34827,
    in_Object: "Legra_Connector_CM",
    HardwareItem: "Hardware_Legra_Connector_CM",
    ProcessingItem: "Processing_Legrabox_Con_CM",
    GraphicItem: "NoGraphic"
  }
  , {
    _id: 34828,
    in_Object: "Legra_Connector_F",
    HardwareItem: "Hardware_Legra_Connector_F",
    ProcessingItem: "Processing_Legrabox_Con_F",
    GraphicItem: "NoGraphic"
  }
  , {
    _id: 34829,
    in_Object: "Legra_Connector_FM",
    HardwareItem: "Hardware_Legra_Connector_FM",
    ProcessingItem: "Processing_Legrabox_Con_FM",
    GraphicItem: "NoGraphic"
  }
  , {
    _id: 34830,
    in_Object: "Legra_Connector_K",
    HardwareItem: "Hardware_Legra_Connector_K",
    ProcessingItem: "Processing_Legrabox_Con_K",
    GraphicItem: "NoGraphic"
  }
  , {
    _id: 34831,
    in_Object: "Legra_Connector_KM",
    HardwareItem: "Hardware_Legra_Connector_KM",
    ProcessingItem: "Processing_Legrabox_Con_KM",
    GraphicItem: "NoGraphic"
  }
  , {
    _id: 34832,
    in_Object: "Legra_Connector_M",
    HardwareItem: "Hardware_Legra_Connector_M",
    ProcessingItem: "Processing_Legrabox_Con_M",
    GraphicItem: "NoGraphic"
  }
  , {
    _id: 34833,
    in_Object: "Legra_Connector_N",
    HardwareItem: "Hardware_Legra_Connector_N",
    ProcessingItem: "Processing_Legrabox_Con_N",
    GraphicItem: "NoGraphic"
  }
  , {
    _id: 34834,
    in_Object: "Legra_FrontBotCon",
    HardwareItem: "Hardware_Legra_FrontBotCon",
    ProcessingItem: "Processing_Legra_FrontBotCon",
    GraphicItem: "Graphic_Legra_FrontBotCon"
  }
  , {
    _id: 34835,
    in_Object: "Legra_Syncro_Small",
    HardwareItem: "Hardware_Legra_Syncro_Small",
    ProcessingItem: undefined,
    GraphicItem: "Graphic_Legra_Syncro"
  }
  , {
    _id: 34836,
    in_Object: "Legra_Syncro_Large",
    HardwareItem: "Hardware_Legra_Syncro_Large",
    ProcessingItem: undefined,
    GraphicItem: "Graphic_Legra_Syncro"
  }
  , {
    _id: 34837,
    in_Object: "Legra_Syncro_TipOn_Large",
    HardwareItem: "Hardware_Legra_Syncro_TipOn_Large",
    ProcessingItem: "",
    GraphicItem: ""
  }
  , {
    _id: 34838,
    in_Object: "Dowel03",
    HardwareItem: "HardwareItemDowel03",
    ProcessingItem: "ProcessingItemDowel03",
    GraphicItem: "GraphicItemDowel03"
  }
  , {
    _id: 34839,
    in_Object: "GlueDuststripGreyBrown",
    HardwareItem: "HardwareGlueDuststripGreyBrown",
    ProcessingItem: "NoProcessing",
    GraphicItem: "GraphicGlueDuststrip"
  }
  , {
    _id: 34840,
    in_Object: "PushToOpenShortBlack",
    HardwareItem: "HardwarePushToOpenShortBlack",
    ProcessingItem: "ProcessingPushToOpenShort",
    GraphicItem: "GraphicPushToOpenShort"
  }
  , {
    _id: 34841,
    in_Object: "PushToOpenShortGrey",
    HardwareItem: "HardwarePushToOpenShortGrey",
    ProcessingItem: "ProcessingPushToOpenShort",
    GraphicItem: "GraphicPushToOpenShort"
  }
  , {
    _id: 34842,
    in_Object: "PushToOpenShortWhite",
    HardwareItem: "HardwarePushToOpenShortWhite",
    ProcessingItem: "ProcessingPushToOpenShort",
    GraphicItem: "GraphicPushToOpenShort"
  }
  , {
    _id: 34843,
    in_Object: "PushToOpenLongBlack",
    HardwareItem: "HardwarePushToOpenLongBlack",
    ProcessingItem: "ProcessingPushToOpenLong",
    GraphicItem: "GraphicPushToOpenLong"
  }
  , {
    _id: 34844,
    in_Object: "PushToOpenLongGrey",
    HardwareItem: "HardwarePushToOpenLongGrey",
    ProcessingItem: "ProcessingPushToOpenLong",
    GraphicItem: "GraphicPushToOpenLong"
  }
  , {
    _id: 34845,
    in_Object: "PushToOpenLongWhite",
    HardwareItem: "HardwarePushToOpenLongWhite",
    ProcessingItem: "ProcessingPushToOpenLong",
    GraphicItem: "GraphicPushToOpenLong"
  }
  , {
    _id: 34846,
    in_Object: "AdapterHousingShortBlack",
    HardwareItem: "HardwareAdapterHousingShortBlack",
    ProcessingItem: "ProcessingAdapterHousingShort",
    GraphicItem: "GraphicAdapterHousingShort"
  }
  , {
    _id: 34847,
    in_Object: "AdapterHousingShortGrey",
    HardwareItem: "HardwareAdapterHousingShortGrey",
    ProcessingItem: "ProcessingAdapterHousingShort",
    GraphicItem: "GraphicAdapterHousingShort"
  }
  , {
    _id: 34848,
    in_Object: "AdapterHousingShortWhite",
    HardwareItem: "HardwareAdapterHousingShortWhite",
    ProcessingItem: "ProcessingAdapterHousingShort",
    GraphicItem: "GraphicAdapterHousingShort"
  }
  , {
    _id: 34849,
    in_Object: "AdapterHousingLongBlack",
    HardwareItem: "HardwareAdapterHousingLongBlack",
    ProcessingItem: "ProcessingAdapterHousingLong",
    GraphicItem: "GraphicAdapterHousingLong"
  }
  , {
    _id: 34850,
    in_Object: "AdapterHousingLongGrey",
    HardwareItem: "HardwareAdapterHousingLongGrey",
    ProcessingItem: "ProcessingAdapterHousingLong",
    GraphicItem: "GraphicAdapterHousingLong"
  }
  , {
    _id: 34851,
    in_Object: "AdapterHousingLongWhite",
    HardwareItem: "HardwareAdapterHousingLongWhite",
    ProcessingItem: "ProcessingAdapterHousingLong",
    GraphicItem: "GraphicAdapterHousingLong"
  }
  , {
    _id: 34852,
    in_Object: "Rafix01Nickel",
    HardwareItem: "HardwareRafix01Nickel",
    ProcessingItem: "ProcessingRafix01",
    GraphicItem: "GraphicRafix01Nickel"
  }
  , {
    _id: 34853,
    in_Object: "HingeFlipLiftDF",
    HardwareItem: "HardwareHingeForDF",
    ProcessingItem: "ProcessingHingeFlap26",
    GraphicItem: "GraphicHingeFlipLiftDF"
  }
  , {
    _id: 34854,
    in_Object: "Aventos_HF_Front_L",
    HardwareItem: "Hardware_Aventos_HF_Connector",
    ProcessingItem: "Processing_Aventos_HF_Connector",
    GraphicItem: "Aventos_HF_Connector"
  }
  , {
    _id: 34855,
    in_Object: "Aventos_HF_Front_R",
    HardwareItem: "Hardware_Aventos_HF_Connector",
    ProcessingItem: "Processing_Aventos_HF_Connector",
    GraphicItem: "Aventos_HF_Connector"
  }
  , {
    _id: 34856,
    in_Object: "Aventos_HF_Mech_480",
    HardwareItem: "Hardware_Aventos_HF_Mech480",
    ProcessingItem: "Processing_Aventos_HF_Mech480",
    GraphicItem: "Aventos_HF_Mech480"
  }
  , {
    _id: 34857,
    in_Object: "Aventos_HF_Mech_600",
    HardwareItem: "Hardware_Aventos_HF_Mech600",
    ProcessingItem: "Processing_Aventos_HF_Mech600",
    GraphicItem: "Aventos_HF_Mech600"
  }
  , {
    _id: 34858,
    in_Object: "Aventos_HF_Mech_840",
    HardwareItem: "Hardware_Aventos_HF_Mech840",
    ProcessingItem: "Processing_Aventos_HF_Mech840",
    GraphicItem: "Aventos_HF_Mech840"
  }
  , {
    _id: 34859,
    in_Object: "Aventos_HF_top_1_L_Grey",
    HardwareItem: "Hardware_Aventos_HF_2700_Grey",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSL"
  }
  , {
    _id: 34860,
    in_Object: "Aventos_HF_top_1_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSR"
  }
  , {
    _id: 34861,
    in_Object: "Aventos_HF_top_2_L_Grey",
    HardwareItem: "Hardware_Aventos_HF_11000_Grey",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSL"
  }
  , {
    _id: 34862,
    in_Object: "Aventos_HF_top_2_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSR"
  }
  , {
    _id: 34863,
    in_Object: "Aventos_HF_top_1_L_White",
    HardwareItem: "Hardware_Aventos_HF_2700_White",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSL"
  }
  , {
    _id: 34864,
    in_Object: "Aventos_HF_top_1_R_White",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSR"
  }
  , {
    _id: 34865,
    in_Object: "Aventos_HF_top_2_L_White",
    HardwareItem: "Hardware_Aventos_HF_11000_White",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSL"
  }
  , {
    _id: 34866,
    in_Object: "Aventos_HF_top_2_R_White",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSR"
  }
  , {
    _id: 34867,
    in_Object: "Aventos_HF_top_1_L_Black",
    HardwareItem: "Hardware_Aventos_HF_2700_Black",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSL"
  }
  , {
    _id: 34868,
    in_Object: "Aventos_HF_top_1_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSR"
  }
  , {
    _id: 34869,
    in_Object: "Aventos_HF_top_2_L_Black",
    HardwareItem: "Hardware_Aventos_HF_11000_Black",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSL"
  }
  , {
    _id: 34870,
    in_Object: "Aventos_HF_top_2_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HF_PSR"
  }
  , {
    _id: 34871,
    in_Object: "Aventos_HK_top_4_R_White",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34872,
    in_Object: "Aventos_HK_top_4_L_White",
    HardwareItem: "Hardware_Aventos_HK_3500_White",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34873,
    in_Object: "Aventos_HK_top_3_R_White",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34874,
    in_Object: "Aventos_HK_top_3_L_White",
    HardwareItem: "Hardware_Aventos_HK_1950_White",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34875,
    in_Object: "Aventos_HK_top_2_R_White",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34876,
    in_Object: "Aventos_HK_top_2_L_White",
    HardwareItem: "Hardware_Aventos_HK_1200_White",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34877,
    in_Object: "Aventos_HK_top_1_L_White",
    HardwareItem: "Hardware_Aventos_HK_420_White",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34878,
    in_Object: "Aventos_HK_top_1_R_White",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34879,
    in_Object: "Aventos_HK_top_4_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34880,
    in_Object: "Aventos_HK_top_4_L_Grey",
    HardwareItem: "Hardware_Aventos_HK_3500_Grey",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34881,
    in_Object: "Aventos_HK_top_3_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34882,
    in_Object: "Aventos_HK_top_3_L_Grey",
    HardwareItem: "Hardware_Aventos_HK_1950_Grey",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34883,
    in_Object: "Aventos_HK_top_2_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34884,
    in_Object: "Aventos_HK_top_2_L_Grey",
    HardwareItem: "Hardware_Aventos_HK_1200_Grey",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34885,
    in_Object: "Aventos_HK_top_1_L_Grey",
    HardwareItem: "Hardware_Aventos_HK_420_Grey",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34886,
    in_Object: "Aventos_HK_top_1_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34887,
    in_Object: "Aventos_HK_top_4_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34888,
    in_Object: "Aventos_HK_top_4_L_Black",
    HardwareItem: "Hardware_Aventos_HK_3500_Black",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34889,
    in_Object: "Aventos_HK_top_3_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34890,
    in_Object: "Aventos_HK_top_3_L_Black",
    HardwareItem: "Hardware_Aventos_HK_1950_Black",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34891,
    in_Object: "Aventos_HK_top_2_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34892,
    in_Object: "Aventos_HK_top_2_L_Black",
    HardwareItem: "Hardware_Aventos_HK_1200_Black",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34893,
    in_Object: "Aventos_HK_top_1_L_Black",
    HardwareItem: "Hardware_Aventos_HK_420_Black",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSL"
  }
  , {
    _id: 34894,
    in_Object: "Aventos_HK_top_1_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Process_Aventos_HK_PS",
    GraphicItem: "Aventos_HK_PSR"
  }
  , {
    _id: 34895,
    in_Object: "Aventos_HK_Front_R",
    HardwareItem: "Hardware_Aventos_HK_Connector",
    ProcessingItem: "Processing_Aventos_HK_Connector",
    GraphicItem: "Aventos_HK_Connector"
  }
  , {
    _id: 34896,
    in_Object: "Aventos_HK_Front_L",
    HardwareItem: "Hardware_Aventos_HK_Connector",
    ProcessingItem: "Processing_Aventos_HK_Connector",
    GraphicItem: "Aventos_HK_Connector"
  }
  , {
    _id: 34897,
    in_Object: "Hinge120OverlayNoSpringSSForFHF",
    HardwareItem: "HardwareHinge120OverlayNoSpringSSForFHF",
    ProcessingItem: "ProcessingHinge35/12.6Screw45/9.5",
    GraphicItem: "GraphicHinge120OverlayNoSpringSSForFHF"
  }
  , {
    _id: 34898,
    in_Object: "Aventos_HS_top_1_L_White",
    HardwareItem: "Hardware_Aventos_HS_350_White",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSL"
  }
  , {
    _id: 34899,
    in_Object: "Aventos_HS_top_1_R_White",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSR"
  }
  , {
    _id: 34900,
    in_Object: "Aventos_HS_top_2_L_White",
    HardwareItem: "Hardware_Aventos_HS_480_White",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSL"
  }
  , {
    _id: 34901,
    in_Object: "Aventos_HS_top_2_R_White",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSR"
  }
  , {
    _id: 34902,
    in_Object: "Aventos_HS_top_3_L_White",
    HardwareItem: "Hardware_Aventos_HS_800_White",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSL"
  }
  , {
    _id: 34903,
    in_Object: "Aventos_HS_top_3_R_White",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSR"
  }
  , {
    _id: 34904,
    in_Object: "Aventos_HS_top_1_L_Grey",
    HardwareItem: "Hardware_Aventos_HS_350_Grey",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSL"
  }
  , {
    _id: 34905,
    in_Object: "Aventos_HS_top_1_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSR"
  }
  , {
    _id: 34906,
    in_Object: "Aventos_HS_top_2_L_Grey",
    HardwareItem: "Hardware_Aventos_HS_480_Grey",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSL"
  }
  , {
    _id: 34907,
    in_Object: "Aventos_HS_top_2_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSR"
  }
  , {
    _id: 34908,
    in_Object: "Aventos_HS_top_3_L_Grey",
    HardwareItem: "Hardware_Aventos_HS_800_Grey",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSL"
  }
  , {
    _id: 34909,
    in_Object: "Aventos_HS_top_3_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSR"
  }
  , {
    _id: 34910,
    in_Object: "Aventos_HS_top_1_L_Black",
    HardwareItem: "Hardware_Aventos_HS_350_Black",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSL"
  }
  , {
    _id: 34911,
    in_Object: "Aventos_HS_top_1_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSR"
  }
  , {
    _id: 34912,
    in_Object: "Aventos_HS_top_2_L_Black",
    HardwareItem: "Hardware_Aventos_HS_480_Black",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSL"
  }
  , {
    _id: 34913,
    in_Object: "Aventos_HS_top_2_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSR"
  }
  , {
    _id: 34914,
    in_Object: "Aventos_HS_top_3_L_Black",
    HardwareItem: "Hardware_Aventos_HS_800_Black",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSL"
  }
  , {
    _id: 34915,
    in_Object: "Aventos_HS_top_3_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HS_PSR"
  }
  , {
    _id: 34916,
    in_Object: "Aventos_HS_Front_L",
    HardwareItem: "Hardware_Aventos_HK_Connector",
    ProcessingItem: "Processing_Aventos_HK_Connector",
    GraphicItem: "Aventos_HK_Connector"
  }
  , {
    _id: 34917,
    in_Object: "Aventos_HS_Front_R",
    HardwareItem: "Hardware_Aventos_HK_Connector",
    ProcessingItem: "Processing_Aventos_HK_Connector",
    GraphicItem: "Aventos_HK_Connector"
  }
  , {
    _id: 34918,
    in_Object: "Aventos_HL_top_1_L_White",
    HardwareItem: "Hardware_Aventos_HL_300_White",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34919,
    in_Object: "Aventos_HL_top_1_R_White",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34920,
    in_Object: "Aventos_HL_top_2_L_White",
    HardwareItem: "Hardware_Aventos_HL_300_White",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34921,
    in_Object: "Aventos_HL_top_2_R_White",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34922,
    in_Object: "Aventos_HL_top_3_L_White",
    HardwareItem: "Hardware_Aventos_HL_390_White",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34923,
    in_Object: "Aventos_HL_top_3_R_White",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34924,
    in_Object: "Aventos_HL_top_4_L_White",
    HardwareItem: "Hardware_Aventos_HL_390_White",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34925,
    in_Object: "Aventos_HL_top_4_R_White",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34926,
    in_Object: "Aventos_HL_top_1_L_Grey",
    HardwareItem: "Hardware_Aventos_HL_300_Grey",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34927,
    in_Object: "Aventos_HL_top_1_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34928,
    in_Object: "Aventos_HL_top_2_L_Grey",
    HardwareItem: "Hardware_Aventos_HL_300_Grey",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34929,
    in_Object: "Aventos_HL_top_2_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34930,
    in_Object: "Aventos_HL_top_3_L_Grey",
    HardwareItem: "Hardware_Aventos_HL_390_Grey",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34931,
    in_Object: "Aventos_HL_top_3_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34932,
    in_Object: "Aventos_HL_top_4_L_Grey",
    HardwareItem: "Hardware_Aventos_HL_390_Grey",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34933,
    in_Object: "Aventos_HL_top_4_R_Grey",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34934,
    in_Object: "Aventos_HL_top_1_L_Black",
    HardwareItem: "Hardware_Aventos_HL_300_Black",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34935,
    in_Object: "Aventos_HL_top_1_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34936,
    in_Object: "Aventos_HL_top_2_L_Black",
    HardwareItem: "Hardware_Aventos_HL_300_Black",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34937,
    in_Object: "Aventos_HL_top_2_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34938,
    in_Object: "Aventos_HL_top_3_L_Black",
    HardwareItem: "Hardware_Aventos_HL_390_Black",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34939,
    in_Object: "Aventos_HL_top_3_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34940,
    in_Object: "Aventos_HL_top_4_L_Black",
    HardwareItem: "Hardware_Aventos_HL_390_Black",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSL"
  }
  , {
    _id: 34941,
    in_Object: "Aventos_HL_top_4_R_Black",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HF_PS",
    GraphicItem: "Aventos_HL_PSR"
  }
  , {
    _id: 34942,
    in_Object: "Aventos_HL_Mech_1_L",
    HardwareItem: "Hardware_Aventos_HL_Mech1",
    ProcessingItem: "Processing_Aventos_HL_Mech1",
    GraphicItem: "Aventos_HL_Mech1"
  }
  , {
    _id: 34943,
    in_Object: "Aventos_HL_Mech_2_L",
    HardwareItem: "Hardware_Aventos_HL_Mech2",
    ProcessingItem: "Processing_Aventos_HL_Mech2",
    GraphicItem: "Aventos_HL_Mech2"
  }
  , {
    _id: 34944,
    in_Object: "Aventos_HL_Mech_3_L",
    HardwareItem: "Hardware_Aventos_HL_Mech3",
    ProcessingItem: "Processing_Aventos_HL_Mech3",
    GraphicItem: "Aventos_HL_Mech3"
  }
  , {
    _id: 34945,
    in_Object: "Aventos_HL_Mech_4_L",
    HardwareItem: "Hardware_Aventos_HL_Mech4",
    ProcessingItem: "Processing_Aventos_HL_Mech4",
    GraphicItem: "Aventos_HL_Mech4"
  }
  , {
    _id: 34946,
    in_Object: "Aventos_HL_Mech_1_R",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HL_Mech1",
    GraphicItem: "Aventos_HL_Mech1"
  }
  , {
    _id: 34947,
    in_Object: "Aventos_HL_Mech_2_R",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HL_Mech2",
    GraphicItem: "Aventos_HL_Mech2"
  }
  , {
    _id: 34948,
    in_Object: "Aventos_HL_Mech_3_R",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HL_Mech3",
    GraphicItem: "Aventos_HL_Mech3"
  }
  , {
    _id: 34949,
    in_Object: "Aventos_HL_Mech_4_R",
    HardwareItem: "None",
    ProcessingItem: "Processing_Aventos_HL_Mech4",
    GraphicItem: "Aventos_HL_Mech4"
  }
  , {
    _id: 34950,
    in_Object: "Aventos_HL_Front_L",
    HardwareItem: "Hardware_Aventos_HK_Connector",
    ProcessingItem: "Processing_Aventos_HK_Connector",
    GraphicItem: "Aventos_HK_Connector"
  }
  , {
    _id: 34951,
    in_Object: "Aventos_HL_Front_R",
    HardwareItem: "Hardware_Aventos_HK_Connector",
    ProcessingItem: "Processing_Aventos_HK_Connector",
    GraphicItem: "Aventos_HK_Connector"
  }
  , {
    _id: 34952,
    in_Object: "DropDownHinge_L",
    HardwareItem: "Hardware_DropDown_L",
    ProcessingItem: "Processing_DropDown_Carcase",
    GraphicItem: "DropDown_L"
  }
  , {
    _id: 34953,
    in_Object: "DropDownHinge_R",
    HardwareItem: "Hardware_DropDown_R",
    ProcessingItem: "Processing_DropDown_Carcase",
    GraphicItem: "DropDown_R"
  }
  , {
    _id: 34954,
    in_Object: "DropDownFront_L",
    HardwareItem: "None",
    ProcessingItem: "Processing_DropDown_Front",
    GraphicItem: "DropDown_Front"
  }
  , {
    _id: 34955,
    in_Object: "DropDownFront_R",
    HardwareItem: "None",
    ProcessingItem: "Processing_DropDown_Front",
    GraphicItem: "DropDown_Front"
  }
  , {
    _id: 34956,
    in_Object: "Aventos_HK_XS_3_R",
    HardwareItem: "Hardware_Aventos_HKXS_3",
    ProcessingItem: "None",
    GraphicItem: "Aventos_HKXS_Mech_R"
  }
  , {
    _id: 34957,
    in_Object: "Aventos_HK_XS_3_L",
    HardwareItem: "Hardware_Aventos_HKXS_3",
    ProcessingItem: "None",
    GraphicItem: "Aventos_HKXS_Mech_L"
  }
  , {
    _id: 34958,
    in_Object: "Aventos_HK_XS_2_R",
    HardwareItem: "Hardware_Aventos_HKXS_2",
    ProcessingItem: "None",
    GraphicItem: "Aventos_HKXS_Mech_R"
  }
  , {
    _id: 34959,
    in_Object: "Aventos_HK_XS_2_L",
    HardwareItem: "Hardware_Aventos_HKXS_2",
    ProcessingItem: "None",
    GraphicItem: "Aventos_HKXS_Mech_L"
  }
  , {
    _id: 34960,
    in_Object: "Aventos_HK_XS_1_R",
    HardwareItem: "Hardware_Aventos_HKXS_1",
    ProcessingItem: "None",
    GraphicItem: "Aventos_HKXS_Mech_R"
  }
  , {
    _id: 34961,
    in_Object: "Aventos_HK_XS_1_L",
    HardwareItem: "Hardware_Aventos_HKXS_1",
    ProcessingItem: "None",
    GraphicItem: "Aventos_HKXS_Mech_L"
  }
  , {
    _id: 34962,
    in_Object: "Aventos_HKXS_Front_R",
    HardwareItem: "Hardware_Aventos_HKXS_Front",
    ProcessingItem: "Processing_Aventos_HKXS_Connector",
    GraphicItem: "Aventos_HKXS_Front"
  }
  , {
    _id: 34963,
    in_Object: "Aventos_HKXS_Front_L",
    HardwareItem: "Hardware_Aventos_HKXS_Front",
    ProcessingItem: "Processing_Aventos_HKXS_Connector",
    GraphicItem: "Aventos_HKXS_Front"
  }
  , {
    _id: 34964,
    in_Object: "Aventos_HKXS_R",
    HardwareItem: "Hardware_Aventos_HKXS_Carcase",
    ProcessingItem: "Processing_Aventos_HKXS_Carcase",
    GraphicItem: "Aventos_HKXS_Carcase_R"
  }
  , {
    _id: 34965,
    in_Object: "Aventos_HKXS_L",
    HardwareItem: "Hardware_Aventos_HKXS_Carcase",
    ProcessingItem: "Processing_Aventos_HKXS_Carcase",
    GraphicItem: "Aventos_HKXS_Carcase_L"
  }
  , {
    _id: 34966,
    in_Object: "HingeCenterForFHF",
    HardwareItem: "HardwareHingeCenterForFHF",
    ProcessingItem: "ProcessingHinge35/12.6Screw45/9.5",
    GraphicItem: "GraphicHingeCenterForFHF"
  }
  , {
    _id: 34967,
    in_Object: "MPHorizontalBL0SS",
    HardwareItem: "HardwareMPHorizontalBL0SS",
    ProcessingItem: "ProcessingMountingPlateScrew20_32/0",
    GraphicItem: "GraphicMPHorizontalBL0SS"
  }
  , {
    _id: 34968,
    in_Object: "MPHorizontalBL3SS",
    HardwareItem: "HardwareMPHorizontalBL3SS",
    ProcessingItem: "ProcessingMountingPlateScrew20_32/0",
    GraphicItem: "GraphicMPHorizontalBL3SS"
  }
  , {
    _id: 34969,
    in_Object: "SquareBracket",
    HardwareItem: "Hardware_Square_Bracket",
    ProcessingItem: "Processing_Square_Bracket",
    GraphicItem: "Graphic_Square_Bracket"
  }
  , {
    _id: 34970,
    in_Object: "Bracket01",
    HardwareItem: "HardwareBracket01",
    ProcessingItem: "ProcessingBracket01",
    GraphicItem: "GraphicBracket01"
  }
  , {
    _id: 34971,
    in_Object: "PlinthLegTriangularPressH100",
    HardwareItem: "HardwarePlinthLegTriangularPressH100",
    ProcessingItem: "ProcessingPlinthLegTriangularPressH100",
    GraphicItem: "GraphicPlinthLegTriangularPressH100"
  }
  , {
    _id: 34972,
    in_Object: "PlinthLegTriangularPressH120",
    HardwareItem: "HardwarePlinthLegTriangularPressH120",
    ProcessingItem: "ProcessingPlinthLegTriangularPressH120",
    GraphicItem: "GraphicPlinthLegTriangularPressH120"
  }
  , {
    _id: 34973,
    in_Object: "PlinthLegTriangularPressH150",
    HardwareItem: "HardwarePlinthLegTriangularPressH150",
    ProcessingItem: "ProcessingPlinthLegTriangularPressH150",
    GraphicItem: "GraphicPlinthLegTriangularPressH150"
  }
  , {
    _id: 34974,
    in_Object: "PlinthLegRectangularScrewH100",
    HardwareItem: "HardwarePlinthLegRectangularScrewH100",
    ProcessingItem: "ProcessingPlinthLegRectangularScrewH100",
    GraphicItem: "GraphicPlinthLegRectangularScrewH100"
  }
  , {
    _id: 34975,
    in_Object: "PlinthLegRectangularScrewH120",
    HardwareItem: "HardwarePlinthLegRectangularScrewH120",
    ProcessingItem: "ProcessingPlinthLegRectangularScrewH120",
    GraphicItem: "GraphicPlinthLegRectangularScrewH120"
  }
  , {
    _id: 34976,
    in_Object: "PlinthLegRectangularScrewH150",
    HardwareItem: "HardwarePlinthLegRectangularScrewH150",
    ProcessingItem: "ProcessingPlinthLegRectangularScrewH150",
    GraphicItem: "GraphicPlinthLegRectangularScrewH150"
  }
  , {
    _id: 34977,
    in_Object: "Keku01",
    HardwareItem: "HardwareKeku01",
    ProcessingItem: "ProcessingKeku01",
    GraphicItem: "GraphicKeku01"
  }
  , {
    _id: 34978,
    in_Object: "Handle_100_Black_160",
    HardwareItem: "Hard_DH100_Black_160",
    ProcessingItem: "Proc_Handle_160",
    GraphicItem: "Graphic_DH100_Black_160"
  }
  , {
    _id: 34979,
    in_Object: "Handle_100_Black_320",
    HardwareItem: "Hard_DH100_Black_320",
    ProcessingItem: "Proc_Handle_320",
    GraphicItem: "Graphic_DH100_Black_320"
  }
  , {
    _id: 34980,
    in_Object: "Handle_100_Black_64",
    HardwareItem: "Hard_DH100_Black_64",
    ProcessingItem: "Proc_Handle_64",
    GraphicItem: "Graphic_DH100_Black_64"
  }
  , {
    _id: 34981,
    in_Object: "Handle_100_NickelPlated_160",
    HardwareItem: "Hard_DH100_NickelPlated_160",
    ProcessingItem: "Proc_Handle_160",
    GraphicItem: "Graphic_DH100_NickelPlated_160"
  }
  , {
    _id: 34982,
    in_Object: "Handle_100_NickelPlated_320",
    HardwareItem: "Hard_DH100_NickelPlated_320",
    ProcessingItem: "Proc_Handle_320",
    GraphicItem: "Graphic_DH100_NickelPlated_320"
  }
  , {
    _id: 34983,
    in_Object: "Handle_100_NickelPlated_64",
    HardwareItem: "Hard_DH100_NickelPlated_64",
    ProcessingItem: "Proc_Handle_64",
    GraphicItem: "Graphic_DH100_NickelPlated_64"
  }
  , {
    _id: 34984,
    in_Object: "Handle_100_NickelPlated_160",
    HardwareItem: "Hard_DH100_Tin_160",
    ProcessingItem: "Proc_Handle_160",
    GraphicItem: "Graphic_DH100_Tin_160"
  }
  , {
    _id: 34985,
    in_Object: "Handle_100_NickelPlated_320",
    HardwareItem: "Hard_DH100_Tin_320",
    ProcessingItem: "Proc_Handle_320",
    GraphicItem: "Graphic_DH100_Tin_320"
  }
  , {
    _id: 34986,
    in_Object: "Handle_100_NickelPlated_64",
    HardwareItem: "Hard_DH100_Tin_64",
    ProcessingItem: "Proc_Handle_64",
    GraphicItem: "Graphic_DH100_Tin_64"
  }
  , {
    _id: 34987,
    in_Object: "Handle_110_StainlessSteel_1060",
    HardwareItem: "Hard_DH110_StainlessSteel_1060",
    ProcessingItem: "Proc_Handle_1060",
    GraphicItem: "Graphic_DH110_StainlessSteel_1060"
  }
  , {
    _id: 34988,
    in_Object: "Handle_110_StainlessSteel_1160",
    HardwareItem: "Hard_DH110_StainlessSteel_1160",
    ProcessingItem: "Proc_Handle_1160",
    GraphicItem: "Graphic_DH110_StainlessSteel_1160"
  }
  , {
    _id: 34989,
    in_Object: "Handle_110_StainlessSteel_1260",
    HardwareItem: "Hard_DH110_StainlessSteel_1260",
    ProcessingItem: "Proc_Handle_1260",
    GraphicItem: "Graphic_DH110_StainlessSteel_1260"
  }
  , {
    _id: 34990,
    in_Object: "Handle_110_StainlessSteel_128",
    HardwareItem: "Hard_DH110_StainlessSteel_128",
    ProcessingItem: "Proc_Handle_128",
    GraphicItem: "Graphic_DH110_StainlessSteel_128"
  }
  , {
    _id: 34991,
    in_Object: "Handle_110_StainlessSteel_1360",
    HardwareItem: "Hard_DH110_StainlessSteel_1360",
    ProcessingItem: "Proc_Handle_1360",
    GraphicItem: "Graphic_DH110_StainlessSteel_1360"
  }
  , {
    _id: 34992,
    in_Object: "Handle_110_StainlessSteel_1460",
    HardwareItem: "Hard_DH110_StainlessSteel_1460",
    ProcessingItem: "Proc_Handle_1460",
    GraphicItem: "Graphic_DH110_StainlessSteel_1460"
  }
  , {
    _id: 34993,
    in_Object: "Handle_110_StainlessSteel_1560",
    HardwareItem: "Hard_DH110_StainlessSteel_1560",
    ProcessingItem: "Proc_Handle_1560",
    GraphicItem: "Graphic_DH110_StainlessSteel_1560"
  }
  , {
    _id: 34994,
    in_Object: "Handle_110_StainlessSteel_160",
    HardwareItem: "Hard_DH110_StainlessSteel_160",
    ProcessingItem: "Proc_Handle_160",
    GraphicItem: "Graphic_DH110_StainlessSteel_160"
  }
  , {
    _id: 34995,
    in_Object: "Handle_110_StainlessSteel_1760",
    HardwareItem: "Hard_DH110_StainlessSteel_1760",
    ProcessingItem: "Proc_Handle_1760",
    GraphicItem: "Graphic_DH110_StainlessSteel_1760"
  }
  , {
    _id: 34996,
    in_Object: "Handle_110_StainlessSteel_1960",
    HardwareItem: "Hard_DH110_StainlessSteel_1960",
    ProcessingItem: "Proc_Handle_1960",
    GraphicItem: "Graphic_DH110_StainlessSteel_1960"
  }
  , {
    _id: 34997,
    in_Object: "Handle_110_StainlessSteel_210",
    HardwareItem: "Hard_DH110_StainlessSteel_210",
    ProcessingItem: "Proc_Handle_210",
    GraphicItem: "Graphic_DH110_StainlessSteel_210"
  }
  , {
    _id: 34998,
    in_Object: "Handle_110_StainlessSteel_260",
    HardwareItem: "Hard_DH110_StainlessSteel_260",
    ProcessingItem: "Proc_Handle_260",
    GraphicItem: "Graphic_DH110_StainlessSteel_260"
  }
  , {
    _id: 34999,
    in_Object: "Handle_110_StainlessSteel_310",
    HardwareItem: "Hard_DH110_StainlessSteel_310",
    ProcessingItem: "Proc_Handle_310",
    GraphicItem: "Graphic_DH110_StainlessSteel_310"
  }
  , {
    _id: 35000,
    in_Object: "Handle_110_StainlessSteel_360",
    HardwareItem: "Hard_DH110_StainlessSteel_360",
    ProcessingItem: "Proc_Handle_360",
    GraphicItem: "Graphic_DH110_StainlessSteel_360"
  }
  , {
    _id: 35001,
    in_Object: "Handle_110_StainlessSteel_410",
    HardwareItem: "Hard_DH110_StainlessSteel_410",
    ProcessingItem: "Proc_Handle_410",
    GraphicItem: "Graphic_DH110_StainlessSteel_410"
  }
  , {
    _id: 35002,
    in_Object: "Handle_110_StainlessSteel_460",
    HardwareItem: "Hard_DH110_StainlessSteel_460",
    ProcessingItem: "Proc_Handle_460",
    GraphicItem: "Graphic_DH110_StainlessSteel_460"
  }
  , {
    _id: 35003,
    in_Object: "Handle_110_StainlessSteel_560",
    HardwareItem: "Hard_DH110_StainlessSteel_560",
    ProcessingItem: "Proc_Handle_560",
    GraphicItem: "Graphic_DH110_StainlessSteel_560"
  }
  , {
    _id: 35004,
    in_Object: "Handle_110_StainlessSteel_660",
    HardwareItem: "Hard_DH110_StainlessSteel_660",
    ProcessingItem: "Proc_Handle_660",
    GraphicItem: "Graphic_DH110_StainlessSteel_660"
  }
  , {
    _id: 35005,
    in_Object: "Handle_110_StainlessSteel_760",
    HardwareItem: "Hard_DH110_StainlessSteel_760",
    ProcessingItem: "Proc_Handle_760",
    GraphicItem: "Graphic_DH110_StainlessSteel_760"
  }
  , {
    _id: 35006,
    in_Object: "Handle_110_StainlessSteel_860",
    HardwareItem: "Hard_DH110_StainlessSteel_860",
    ProcessingItem: "Proc_Handle_860",
    GraphicItem: "Graphic_DH110_StainlessSteel_860"
  }
  , {
    _id: 35007,
    in_Object: "Handle_110_StainlessSteel_96",
    HardwareItem: "Hard_DH110_StainlessSteel_96",
    ProcessingItem: "Proc_Handle_96",
    GraphicItem: "Graphic_DH110_StainlessSteel_96"
  }
  , {
    _id: 35008,
    in_Object: "Handle_110_StainlessSteel_960",
    HardwareItem: "Hard_DH110_StainlessSteel_960",
    ProcessingItem: "Proc_Handle_960",
    GraphicItem: "Graphic_DH110_StainlessSteel_960"
  }
  , {
    _id: 35009,
    in_Object: "Handle_120_Black",
    HardwareItem: "Hard_DH120_Black",
    ProcessingItem: "Proc_Handle_Single",
    GraphicItem: "Graphic_DH120_Black"
  }
  , {
    _id: 35010,
    in_Object: "Handle_120_StainlessSteel",
    HardwareItem: "Hard_DH120_StainlessSteel",
    ProcessingItem: "Proc_Handle_Single",
    GraphicItem: "Graphic_DH120_StainlessSteel"
  }
  , {
    _id: 35011,
    in_Object: "Handle_130_Black",
    HardwareItem: "Hard_DH130_Black",
    ProcessingItem: "Proc_Handle_Single",
    GraphicItem: "Graphic_DH130_Black"
  }
  , {
    _id: 35012,
    in_Object: "Handle_130_BrassPlatedAntique",
    HardwareItem: "Hard_DH130_BrassPlatedAntique",
    ProcessingItem: "Proc_Handle_Single",
    GraphicItem: "Graphic_DH130_BrassPlatedAntique"
  }
  , {
    _id: 35013,
    in_Object: "Handle_130_StainlessSteel",
    HardwareItem: "Hard_DH130_StainlessSteel",
    ProcessingItem: "Proc_Handle_Single",
    GraphicItem: "Graphic_DH130_StainlessSteel"
  }
  , {
    _id: 35014,
    in_Object: "Handle_Bracket_128",
    HardwareItem: "Hard_BH_128",
    ProcessingItem: "Proc_Handle_128",
    GraphicItem: "Graphic_BH_128"
  }
  , {
    _id: 35015,
    in_Object: "Handle_Bracket_160",
    HardwareItem: "Hard_BH_160",
    ProcessingItem: "Proc_Handle_160",
    GraphicItem: "Graphic_BH_160"
  }
  , {
    _id: 35016,
    in_Object: "Handle_Bracket_192",
    HardwareItem: "Hard_BH_192",
    ProcessingItem: "Proc_Handle_192",
    GraphicItem: "Graphic_BH_192"
  }
  , {
    _id: 35017,
    in_Object: "Handle_Bracket_224",
    HardwareItem: "Hard_BH_224",
    ProcessingItem: "Proc_Handle_224",
    GraphicItem: "Graphic_BH_224"
  }
  , {
    _id: 35018,
    in_Object: "Handle_Bracket_288",
    HardwareItem: "Hard_BH_288",
    ProcessingItem: "Proc_Handle_288",
    GraphicItem: "Graphic_BH_288"
  }
  , {
    _id: 35019,
    in_Object: "Handle_Bracket_320",
    HardwareItem: "Hard_BH_320",
    ProcessingItem: "Proc_Handle_320",
    GraphicItem: "Graphic_BH_320"
  }
  , {
    _id: 35020,
    in_Object: "Handle_Bracket_352",
    HardwareItem: "Hard_BH_352",
    ProcessingItem: "Proc_Handle_352",
    GraphicItem: "Graphic_BH_352"
  }
  , {
    _id: 35021,
    in_Object: "Handle_Bracket_448",
    HardwareItem: "Hard_BH_448",
    ProcessingItem: "Proc_Handle_448",
    GraphicItem: "Graphic_BH_448"
  }
  , {
    _id: 35022,
    in_Object: "Handle_Bracket_480",
    HardwareItem: "Hard_BH_480",
    ProcessingItem: "Proc_Handle_480",
    GraphicItem: "Graphic_BH_480"
  }
  , {
    _id: 35023,
    in_Object: "Handle_Bracket_560",
    HardwareItem: "Hard_BH_560",
    ProcessingItem: "Proc_Handle_560",
    GraphicItem: "Graphic_BH_560"
  }
  , {
    _id: 35024,
    in_Object: "Handle_Bracket_640",
    HardwareItem: "Hard_BH_640",
    ProcessingItem: "Proc_Handle_640",
    GraphicItem: "Graphic_BH_640"
  }
  , {
    _id: 35025,
    in_Object: "Handle_Bracket_96",
    HardwareItem: "Hard_BH_96",
    ProcessingItem: "Proc_Handle_96",
    GraphicItem: "Graphic_BH_96"
  }
  , {
    _id: 35026,
    in_Object: "Handle_Bracket_960",
    HardwareItem: "Hard_BH_960",
    ProcessingItem: "Proc_Handle_960",
    GraphicItem: "Graphic_BH_960"
  }
  , {
    _id: 35027,
    in_Object: "Handle_60_Black_128",
    HardwareItem: "Hard_DH60_Black_128",
    ProcessingItem: "Proc_Handle_128",
    GraphicItem: "Graphic_DH60_Black_128"
  }
  , {
    _id: 35028,
    in_Object: "Handle_60_Black_160",
    HardwareItem: "Hard_DH60_Black_160",
    ProcessingItem: "Proc_Handle_160",
    GraphicItem: "Graphic_DH60_Black_160"
  }
  , {
    _id: 35029,
    in_Object: "Handle_60_BrassPlatedAntique_128",
    HardwareItem: "Hard_DH60_BrassPlatedAntique_128",
    ProcessingItem: "Proc_Handle_128",
    GraphicItem: "Graphic_DH60_BrassPlatedAntique_128"
  }
  , {
    _id: 35030,
    in_Object: "Handle_60_BrassPlatedAntique_160",
    HardwareItem: "Hard_DH60_BrassPlatedAntique_160",
    ProcessingItem: "Proc_Handle_160",
    GraphicItem: "Graphic_DH60_BrassPlatedAntique_160"
  }
  , {
    _id: 35031,
    in_Object: "Handle_60_ChromedPolished_128",
    HardwareItem: "Hard_DH60_ChromedPolished_128",
    ProcessingItem: "Proc_Handle_128",
    GraphicItem: "Graphic_DH60_ChromedPolished_128"
  }
  , {
    _id: 35032,
    in_Object: "Handle_60_ChromedPolished_160",
    HardwareItem: "Hard_DH60_ChromedPolished_160",
    ProcessingItem: "Proc_Handle_160",
    GraphicItem: "Graphic_DH60_ChromedPolished_160"
  }
  , {
    _id: 35033,
    in_Object: "Handle_60_NickelPlated_128",
    HardwareItem: "Hard_DH60_NickelPlated_128",
    ProcessingItem: "Proc_Handle_128",
    GraphicItem: "Graphic_DH60_NickelPlated_128"
  }
  , {
    _id: 35034,
    in_Object: "Handle_60_NickelPlated_160",
    HardwareItem: "Hard_DH60_NickelPlated_160",
    ProcessingItem: "Proc_Handle_160",
    GraphicItem: "Graphic_DH60_NickelPlated_160"
  }
  , {
    _id: 35035,
    in_Object: "Handle_Rail_128",
    HardwareItem: "Hard_RH_128",
    ProcessingItem: "Proc_Handle_128",
    GraphicItem: "Graphic_RH_128"
  }
  , {
    _id: 35036,
    in_Object: "Handle_Rail_160",
    HardwareItem: "Hard_RH_160",
    ProcessingItem: "Proc_Handle_160",
    GraphicItem: "Graphic_RH_160"
  }
  , {
    _id: 35037,
    in_Object: "Handle_Rail_192",
    HardwareItem: "Hard_RH_192",
    ProcessingItem: "Proc_Handle_192",
    GraphicItem: "Graphic_RH_192"
  }
  , {
    _id: 35038,
    in_Object: "Handle_Rail_224",
    HardwareItem: "Hard_RH_224",
    ProcessingItem: "Proc_Handle_224",
    GraphicItem: "Graphic_RH_224"
  }
  , {
    _id: 35039,
    in_Object: "Handle_Rail_288",
    HardwareItem: "Hard_RH_288",
    ProcessingItem: "Proc_Handle_288",
    GraphicItem: "Graphic_RH_288"
  }
  , {
    _id: 35040,
    in_Object: "Handle_Rail_320",
    HardwareItem: "Hard_RH_320",
    ProcessingItem: "Proc_Handle_320",
    GraphicItem: "Graphic_RH_320"
  }
  , {
    _id: 35041,
    in_Object: "Handle_Rail_352",
    HardwareItem: "Hard_RH_352",
    ProcessingItem: "Proc_Handle_352",
    GraphicItem: "Graphic_RH_352"
  }
  , {
    _id: 35042,
    in_Object: "Handle_Rail_448",
    HardwareItem: "Hard_RH_448",
    ProcessingItem: "Proc_Handle_448",
    GraphicItem: "Graphic_RH_448"
  }
  , {
    _id: 35043,
    in_Object: "Handle_Rail_560",
    HardwareItem: "Hard_RH_560",
    ProcessingItem: "Proc_Handle_560",
    GraphicItem: "Graphic_RH_560"
  }
  , {
    _id: 35044,
    in_Object: "Handle_Rail_660",
    HardwareItem: "Hard_RH_660",
    ProcessingItem: "Proc_Handle_660",
    GraphicItem: "Graphic_RH_660"
  }
  , {
    _id: 35045,
    in_Object: "Handle_Rail_760",
    HardwareItem: "Hard_RH_760",
    ProcessingItem: "Proc_Handle_760",
    GraphicItem: "Graphic_RH_760"
  }
  , {
    _id: 35046,
    in_Object: "Handle_Rail_96",
    HardwareItem: "Hard_RH_96",
    ProcessingItem: "Proc_Handle_96",
    GraphicItem: "Graphic_RH_96"
  }
  , {
    _id: 35047,
    in_Object: "PlinthLegTriangularPressH100DrillBack",
    HardwareItem: "HardwarePlinthLegTriangularPressH100",
    ProcessingItem: "ProcessingPlinthLegTriangularPressH100DrillBack",
    GraphicItem: "GraphicPlinthLegTriangularPressH100"
  }
  , {
    _id: 35048,
    in_Object: "Pullout_No15_Classic_Silver_Right",
    HardwareItem: "Hard_No15_Classic_Silver_Right",
    ProcessingItem: "Proc_No15_Classic_Right",
    GraphicItem: "Graphic_No15_Classic_Silver_Right"
  }
  , {
    _id: 35049,
    in_Object: "Pullout_No15_Classic_Anthrazit_Right",
    HardwareItem: "Hard_No15_Classic_Anthrazit_Right",
    ProcessingItem: "Proc_No15_Classic_Right",
    GraphicItem: "Graphic_No15_Classic_Anthrazit_Right"
  }
  , {
    _id: 35050,
    in_Object: "Pullout_No15_Classic_Silver_Left",
    HardwareItem: "Hard_No15_Classic_Silver_Left",
    ProcessingItem: "Proc_No15_Classic_Left",
    GraphicItem: "Graphic_No15_Classic_Silver_Left"
  }
  , {
    _id: 35051,
    in_Object: "Pullout_No15_Classic_Anthrazit_Left",
    HardwareItem: "Hard_No15_Classic_Anthrazit_Left",
    ProcessingItem: "Proc_No15_Classic_Left",
    GraphicItem: "Graphic_No15_Classic_Anthrazit_Left"
  }
  , {
    _id: 35052,
    in_Object: "Pullout_No15_Style_Silver_Right",
    HardwareItem: "Hard_No15_Style_Silver_Right",
    ProcessingItem: "Proc_No15_Style_Right",
    GraphicItem: "Graphic_No15_Style_Silver_Right"
  }
  , {
    _id: 35053,
    in_Object: "Pullout_No15_Style_Anthrazit_Right",
    HardwareItem: "Hard_No15_Style_Anthrazit_Right",
    ProcessingItem: "Proc_No15_Style_Right",
    GraphicItem: "Graphic_No15_Style_Anthrazit_Right"
  }
  , {
    _id: 35054,
    in_Object: "Pullout_No15_Style_Silver_Left",
    HardwareItem: "Hard_No15_Style_Silver_Left",
    ProcessingItem: "Proc_No15_Style_Left",
    GraphicItem: "Graphic_No15_Style_Silver_Left"
  }
  , {
    _id: 35055,
    in_Object: "Pullout_No15_Style_Anthrazit_Left",
    HardwareItem: "Hard_No15_Style_Anthrazit_Left",
    ProcessingItem: "Proc_No15_Style_Left",
    GraphicItem: "Graphic_No15_Style_Anthrazit_Left"
  }
  , {
    _id: 35056,
    in_Object: "DispensaClassic16030",
    HardwareItem: "HardwareDispensaClassic16030",
    ProcessingItem: "ProcessingDispensa30",
    GraphicItem: "DispensaClassic16030"
  }
  , {
    _id: 35057,
    in_Object: "DispensaClassic19030",
    HardwareItem: "HardwareDispensaClassic19030",
    ProcessingItem: "ProcessingDispensa30",
    GraphicItem: "DispensaClassic19030"
  }
  , {
    _id: 35058,
    in_Object: "DispensaClassic23030",
    HardwareItem: "HardwareDispensaClassic23030",
    ProcessingItem: "ProcessingDispensa30",
    GraphicItem: "DispensaClassic23030"
  }
  , {
    _id: 35059,
    in_Object: "DispensaClassic16040",
    HardwareItem: "HardwareDispensaClassic16040",
    ProcessingItem: "ProcessingDispensa40",
    GraphicItem: "DispensaClassic16040"
  }
  , {
    _id: 35060,
    in_Object: "DispensaClassic19040",
    HardwareItem: "HardwareDispensaClassic19040",
    ProcessingItem: "ProcessingDispensa40",
    GraphicItem: "DispensaClassic19040"
  }
  , {
    _id: 35061,
    in_Object: "DispensaClassic23040",
    HardwareItem: "HardwareDispensaClassic23040",
    ProcessingItem: "ProcessingDispensa40",
    GraphicItem: "DispensaClassic23040"
  }
  , {
    _id: 35062,
    in_Object: "DispensaStyle16030_Grey",
    HardwareItem: "HardwareDispensaStyle16030_Grey",
    ProcessingItem: "ProcessingDispensa30",
    GraphicItem: "DispensaStyle16030_Grey"
  }
  , {
    _id: 35063,
    in_Object: "DispensaStyle19030_Grey",
    HardwareItem: "HardwareDispensaStyle19030_Grey",
    ProcessingItem: "ProcessingDispensa30",
    GraphicItem: "DispensaStyle19030_Grey"
  }
  , {
    _id: 35064,
    in_Object: "DispensaStyle23030_Grey",
    HardwareItem: "HardwareDispensaStyle23030_Grey",
    ProcessingItem: "ProcessingDispensa30",
    GraphicItem: "DispensaStyle23030_Grey"
  }
  , {
    _id: 35065,
    in_Object: "DispensaStyle16040_Grey",
    HardwareItem: "HardwareDispensaStyle16040_Grey",
    ProcessingItem: "ProcessingDispensa40",
    GraphicItem: "DispensaStyle16040_Grey"
  }
  , {
    _id: 35066,
    in_Object: "DispensaStyle19040_Grey",
    HardwareItem: "HardwareDispensaStyle19040_Grey",
    ProcessingItem: "ProcessingDispensa40",
    GraphicItem: "DispensaStyle19040_Grey"
  }
  , {
    _id: 35067,
    in_Object: "DispensaStyle23040_Grey",
    HardwareItem: "HardwareDispensaStyle23040_Grey",
    ProcessingItem: "ProcessingDispensa40",
    GraphicItem: "DispensaStyle23040_Grey"
  }
  , {
    _id: 35068,
    in_Object: "DispensaStyle16030_Anthrazit",
    HardwareItem: "HardwareDispensaStyle16030_Anthrazit",
    ProcessingItem: "ProcessingDispensa30",
    GraphicItem: "DispensaStyle16030_Anthrazit"
  }
  , {
    _id: 35069,
    in_Object: "DispensaStyle19030_Anthrazit",
    HardwareItem: "HardwareDispensaStyle19030_Anthrazit",
    ProcessingItem: "ProcessingDispensa30",
    GraphicItem: "DispensaStyle19030_Anthrazit"
  }
  , {
    _id: 35070,
    in_Object: "DispensaStyle23030_Anthrazit",
    HardwareItem: "HardwareDispensaStyle23030_Anthrazit",
    ProcessingItem: "ProcessingDispensa30",
    GraphicItem: "DispensaStyle23030_Anthrazit"
  }
  , {
    _id: 35071,
    in_Object: "DispensaStyle16040_Anthrazit",
    HardwareItem: "HardwareDispensaStyle16040_Anthrazit",
    ProcessingItem: "ProcessingDispensa40",
    GraphicItem: "DispensaStyle16040_Anthrazit"
  }
  , {
    _id: 35072,
    in_Object: "DispensaStyle19040_Anthrazit",
    HardwareItem: "HardwareDispensaStyle19040_Anthrazit",
    ProcessingItem: "ProcessingDispensa40",
    GraphicItem: "DispensaStyle19040_Anthrazit"
  }
  , {
    _id: 35073,
    in_Object: "DispensaStyle23040_Anthrazit",
    HardwareItem: "HardwareDispensaStyle23040_Anthrazit",
    ProcessingItem: "ProcessingDispensa40",
    GraphicItem: "DispensaStyle23040_Anthrazit"
  }
  , {
    _id: 35074,
    in_Object: "DispensaClassic30",
    HardwareItem: "HardwareDispensaClassic30",
    ProcessingItem: "None",
    GraphicItem: "DispensaClassic30"
  }
  , {
    _id: 35075,
    in_Object: "DispensaClassic40",
    HardwareItem: "HardwareDispensaClassic40",
    ProcessingItem: "None",
    GraphicItem: "DispensaClassic40"
  }
  , {
    _id: 35076,
    in_Object: "DispensaStyle30_Grey",
    HardwareItem: "HardwareDispensaStyle30_Grey",
    ProcessingItem: "None",
    GraphicItem: "DispensaStyle30_Grey"
  }
  , {
    _id: 35077,
    in_Object: "DispensaStyle40_Grey",
    HardwareItem: "HardwareDispensaStyle40_Grey",
    ProcessingItem: "None",
    GraphicItem: "DispensaStyle40_Grey"
  }
  , {
    _id: 35078,
    in_Object: "DispensaStyle30_Anthrazit",
    HardwareItem: "HardwareDispensaStyle30_Anthrazit",
    ProcessingItem: "None",
    GraphicItem: "DispensaStyle30_Anthrazit"
  }
  , {
    _id: 35079,
    in_Object: "DispensaStyle40_Anthrazit",
    HardwareItem: "HardwareDispensaStyle40_Anthrazit",
    ProcessingItem: "None",
    GraphicItem: "DispensaStyle40_Anthrazit"
  }
  , {
    _id: 35080,
    in_Object: "Conero445",
    HardwareItem: "HardwConero445",
    ProcessingItem: "ProcConero",
    GraphicItem: "GraphicConero445"
  }
  , {
    _id: 35081,
    in_Object: "Conero625",
    HardwareItem: "HardwConero625",
    ProcessingItem: "ProcConero",
    GraphicItem: "GraphicConero625"
  }
  , {
    _id: 35082,
    in_Object: "Conero805",
    HardwareItem: "HardwConero805",
    ProcessingItem: "ProcConero",
    GraphicItem: "GraphicConero805"
  }
  , {
    _id: 35083,
    in_Object: "Conero985",
    HardwareItem: "HardwConero985",
    ProcessingItem: "ProcConero",
    GraphicItem: "GraphicConero985"
  }
  , {
    _id: 35084,
    in_Object: "Conero72H",
    HardwareItem: "HardwConero72H",
    ProcessingItem: "ProcConeroTrouser",
    GraphicItem: "GraphicConero72H"
  }
  , {
    _id: 35085,
    in_Object: "ConeroRigid_Right",
    HardwareItem: "HardwConeroRigid_Right",
    ProcessingItem: "ProcConeroTie",
    GraphicItem: "GraphicConeroRigid_Right"
  }
  , {
    _id: 35086,
    in_Object: "ConeroRigid_Left",
    HardwareItem: "HardwConeroRigid_Left",
    ProcessingItem: "ProcConeroTie",
    GraphicItem: "GraphicConeroRigid_Left"
  }
  , {
    _id: 35087,
    in_Object: "Handle_140_StainlessSteel",
    HardwareItem: "Handle_140_StainlessSteel",
    ProcessingItem: "Handle_140",
    GraphicItem: "Handle_140_StainlessSteel"
  }
  , {
    _id: 35088,
    in_Object: "Handle_140_Black",
    HardwareItem: "Handle_140_Black",
    ProcessingItem: "Handle_140",
    GraphicItem: "Handle_140_Black"
  }
];
