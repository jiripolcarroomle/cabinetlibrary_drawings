import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterModuleGroupOrchestrator, internal_leaveModuleGroupOrchestrator, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars, internal_enterModulePrepareContext, internal_leaveModulePrepareContext } from '../logging'
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

export interface cti_tab_HardwareLibraryMapping {
  readonly in_HardwareItem?: string;
}

export interface ctm_tab_HardwareLibraryMapping {
}

export interface cto_tab_HardwareLibraryMapping extends ctm_tab_HardwareLibraryMapping {
  readonly _id: number;
  readonly Supplier?: string;
  readonly SupplierArticleNumber?: string;
  readonly BomQty: number;
}

export interface ICT_tab_HardwareLibraryMapping
  extends cti_tab_HardwareLibraryMapping, cto_tab_HardwareLibraryMapping { }

export class ct2_tab_HardwareLibraryMapping {

  public findExactly(
    in_HardwareItem: string | undefined,
  ): cto_tab_HardwareLibraryMapping | undefined {
    const res = ct_tab_HardwareLibraryMapping.find((p) =>
      p.in_HardwareItem === in_HardwareItem
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_HardwareLibraryMapping) => boolean
  ): cto_tab_HardwareLibraryMapping | undefined {
    for (let index = 0; index < ct_tab_HardwareLibraryMapping.length; index++) {
      const element = ct_tab_HardwareLibraryMapping[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_HardwareLibraryMapping: ICT_tab_HardwareLibraryMapping[] = [
  {
    _id: 24244,
    in_HardwareItem: "HardDesignLegRectangular001H50",
    Supplier: "Haefele",
    SupplierArticleNumber: "634.74.400",
    BomQty: 1
  }
  , {
    _id: 24245,
    in_HardwareItem: "HardDesignLegRectangular001H80",
    Supplier: "Haefele",
    SupplierArticleNumber: "634.74.401",
    BomQty: 1
  }
  , {
    _id: 24246,
    in_HardwareItem: "HardDesignLegRectangular001H100",
    Supplier: "Haefele",
    SupplierArticleNumber: "634.74.402",
    BomQty: 1
  }
  , {
    _id: 24247,
    in_HardwareItem: "HardDesignLegRectangular001H150",
    Supplier: "Haefele",
    SupplierArticleNumber: "634.74.403",
    BomQty: 1
  }
  , {
    _id: 24248,
    in_HardwareItem: "HardDesignLegRectangular001H200",
    Supplier: "Haefele",
    SupplierArticleNumber: "634.74.404",
    BomQty: 1
  }
  , {
    _id: 24249,
    in_HardwareItem: "HardDesignLegSlanted001H250",
    Supplier: "Haefele",
    SupplierArticleNumber: "634.48.055",
    BomQty: 1
  }
  , {
    _id: 24250,
    in_HardwareItem: "HardwareShelfadjFittingWoodDesign01",
    Supplier: "Haefele",
    SupplierArticleNumber: "282.24.728",
    BomQty: 1
  }
  , {
    _id: 24251,
    in_HardwareItem: "HardwareShelfadjFittingWoodDesign02",
    Supplier: "Haefele",
    SupplierArticleNumber: "282.24.717",
    BomQty: 1
  }
  , {
    _id: 24252,
    in_HardwareItem: "HardwareShelfadjFittingWoodDesign03",
    Supplier: "Haefele",
    SupplierArticleNumber: "282.25.717",
    BomQty: 1
  }
  , {
    _id: 24253,
    in_HardwareItem: "HardwareShelfadjFittingGlassDesign01",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "281.41.907",
    BomQty: 1
  }
  , {
    _id: 24254,
    in_HardwareItem: "HardwareItemMinifix01White",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.27.920",
    BomQty: 1
  }
  , {
    _id: 24255,
    in_HardwareItem: "HardwareItemMinifix01White",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.26.533",
    BomQty: 1
  }
  , {
    _id: 24256,
    in_HardwareItem: "HardwareItemMinifix01White",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.24.751",
    BomQty: 1
  }
  , {
    _id: 24257,
    in_HardwareItem: "HardwareItemMinifix01Black",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.27.920",
    BomQty: 1
  }
  , {
    _id: 24258,
    in_HardwareItem: "HardwareItemMinifix01Black",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.26.533",
    BomQty: 1
  }
  , {
    _id: 24259,
    in_HardwareItem: "HardwareItemMinifix01Black",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.24.359",
    BomQty: 1
  }
  , {
    _id: 24260,
    in_HardwareItem: "HardwareItemMinifix01Light",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.27.920",
    BomQty: 1
  }
  , {
    _id: 24261,
    in_HardwareItem: "HardwareItemMinifix01Light",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.26.533",
    BomQty: 1
  }
  , {
    _id: 24262,
    in_HardwareItem: "HardwareItemMinifix01Light",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.24.555",
    BomQty: 1
  }
  , {
    _id: 24263,
    in_HardwareItem: "HardwareItemMinifix01Dark",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.27.920",
    BomQty: 1
  }
  , {
    _id: 24264,
    in_HardwareItem: "HardwareItemMinifix01Dark",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.26.533",
    BomQty: 1
  }
  , {
    _id: 24265,
    in_HardwareItem: "HardwareItemMinifix01Dark",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "262.24.550",
    BomQty: 1
  }
  , {
    _id: 24266,
    in_HardwareItem: "HardwareItemDowel01",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "267.82.227",
    BomQty: 1
  }
  , {
    _id: 24267,
    in_HardwareItem: "HardwareItemDowel02",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "267.82.240",
    BomQty: 1
  }
  , {
    _id: 24268,
    in_HardwareItem: "HardwareHinge110HalfSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.17.602",
    BomQty: 1
  }
  , {
    _id: 24269,
    in_HardwareItem: "HardwareHinge110HalfSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24270,
    in_HardwareItem: "HardwareHinge110InsetSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.17.603",
    BomQty: 1
  }
  , {
    _id: 24271,
    in_HardwareItem: "HardwareHinge110InsetSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24272,
    in_HardwareItem: "HardwareHinge110OverlaySpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.17.600",
    BomQty: 1
  }
  , {
    _id: 24273,
    in_HardwareItem: "HardwareHinge110OverlaySpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24274,
    in_HardwareItem: "HardwareHinge110SoftClHalfSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.15.403",
    BomQty: 1
  }
  , {
    _id: 24275,
    in_HardwareItem: "HardwareHinge110SoftClHalfSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24276,
    in_HardwareItem: "HardwareHinge110SoftClInsetSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.15.405",
    BomQty: 1
  }
  , {
    _id: 24277,
    in_HardwareItem: "HardwareHinge110SoftClInsetSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24278,
    in_HardwareItem: "HardwareHinge110SoftClOverlaySpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.15.401",
    BomQty: 1
  }
  , {
    _id: 24279,
    in_HardwareItem: "HardwareHinge110SoftClOverlaySpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24280,
    in_HardwareItem: "HardwareHinge155SoftClHalfSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.29.221",
    BomQty: 1
  }
  , {
    _id: 24281,
    in_HardwareItem: "HardwareHinge155SoftClHalfSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24282,
    in_HardwareItem: "HardwareHinge155SoftClOverlaySpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.29.217",
    BomQty: 1
  }
  , {
    _id: 24283,
    in_HardwareItem: "HardwareHinge155SoftClOverlaySpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24284,
    in_HardwareItem: "HardwareHinge165HalfSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.07.702",
    BomQty: 1
  }
  , {
    _id: 24285,
    in_HardwareItem: "HardwareHinge165HalfSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24286,
    in_HardwareItem: "HardwareHinge165InsetSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.07.703",
    BomQty: 1
  }
  , {
    _id: 24287,
    in_HardwareItem: "HardwareHinge165InsetSpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24288,
    in_HardwareItem: "HardwareHinge165OverlaySpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.07.700",
    BomQty: 1
  }
  , {
    _id: 24289,
    in_HardwareItem: "HardwareHinge165OverlaySpringSS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24290,
    in_HardwareItem: "HardwareMpCruciformA0SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.80.528",
    BomQty: 1
  }
  , {
    _id: 24291,
    in_HardwareItem: "HardwareMpCruciformA0SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24292,
    in_HardwareItem: "HardwareMpCruciformA3SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.80.555",
    BomQty: 1
  }
  , {
    _id: 24293,
    in_HardwareItem: "HardwareMpCruciformA3SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24294,
    in_HardwareItem: "HardwareMpCruciformA6SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.80.582",
    BomQty: 1
  }
  , {
    _id: 24295,
    in_HardwareItem: "HardwareMpCruciformA6SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24296,
    in_HardwareItem: "HardwareMpCruciformSM0SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.71.500",
    BomQty: 1
  }
  , {
    _id: 24297,
    in_HardwareItem: "HardwareMpCruciformSM0SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24298,
    in_HardwareItem: "HardwareMpCruciformSM3SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.71.503",
    BomQty: 1
  }
  , {
    _id: 24299,
    in_HardwareItem: "HardwareMpCruciformSM3SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24300,
    in_HardwareItem: "HardwareMpCruciformSM6SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.71.506",
    BomQty: 1
  }
  , {
    _id: 24301,
    in_HardwareItem: "HardwareMpCruciformSM6SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24302,
    in_HardwareItem: "HardwareMpHorizontalSM0SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.67.000",
    BomQty: 1
  }
  , {
    _id: 24303,
    in_HardwareItem: "HardwareMpHorizontalSM3SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.67.003",
    BomQty: 1
  }
  , {
    _id: 24304,
    in_HardwareItem: "HardwareMpHorizontalSM6SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.67.006",
    BomQty: 1
  }
  , {
    _id: 24305,
    in_HardwareItem: "HardwareHingeBlindCornerInset110SoftClNP",
    Supplier: "Haefele",
    SupplierArticleNumber: "329.11.705",
    BomQty: 1
  }
  , {
    _id: 24306,
    in_HardwareItem: "HardwareHingeBlindCornerInset110SoftClNP",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24307,
    in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.40.701",
    BomQty: 1
  }
  , {
    _id: 24308,
    in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.40.702",
    BomQty: 1
  }
  , {
    _id: 24309,
    in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.40.770",
    BomQty: 1
  }
  , {
    _id: 24310,
    in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.40.771",
    BomQty: 1
  }
  , {
    _id: 24311,
    in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.02.702",
    BomQty: 1
  }
  , {
    _id: 24312,
    in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24313,
    in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.02.703",
    BomQty: 1
  }
  , {
    _id: 24314,
    in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24315,
    in_HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.03.937",
    BomQty: 1
  }
  , {
    _id: 24316,
    in_HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 3
  }
  , {
    _id: 24317,
    in_HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.03.938",
    BomQty: 1
  }
  , {
    _id: 24318,
    in_HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 3
  }
  , {
    _id: 24319,
    in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.40.901",
    BomQty: 1
  }
  , {
    _id: 24320,
    in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.40.902",
    BomQty: 1
  }
  , {
    _id: 24321,
    in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.40.980",
    BomQty: 1
  }
  , {
    _id: 24322,
    in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24323,
    in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.40.981",
    BomQty: 1
  }
  , {
    _id: 24324,
    in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24325,
    in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.09.910",
    BomQty: 1
  }
  , {
    _id: 24326,
    in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
    Supplier: "Haefele",
    SupplierArticleNumber: "051.48.001",
    BomQty: 2
  }
  , {
    _id: 24327,
    in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.143",
    BomQty: 2
  }
  , {
    _id: 24328,
    in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.40.989",
    BomQty: 1
  }
  , {
    _id: 24329,
    in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "051.48.001",
    BomQty: 2
  }
  , {
    _id: 24330,
    in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.143",
    BomQty: 2
  }
  , {
    _id: 24331,
    in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.40.991",
    BomQty: 1
  }
  , {
    _id: 24332,
    in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "051.48.001",
    BomQty: 4
  }
  , {
    _id: 24333,
    in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.143",
    BomQty: 4
  }
  , {
    _id: 24334,
    in_HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.09.910",
    BomQty: 1
  }
  , {
    _id: 24335,
    in_HardwareItem: "Hardware_Legra_Connector_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.75.054",
    BomQty: 2
  }
  , {
    _id: 24336,
    in_HardwareItem: "Hardware_Legra_Connector_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.75.064",
    BomQty: 2
  }
  , {
    _id: 24337,
    in_HardwareItem: "Hardware_Legra_Connector_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.75.074",
    BomQty: 2
  }
  , {
    _id: 24338,
    in_HardwareItem: "Hardware_Legra_Connector_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.75.084",
    BomQty: 2
  }
  , {
    _id: 24339,
    in_HardwareItem: "Hardware_Legra_Connector_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.75.084",
    BomQty: 2
  }
  , {
    _id: 24340,
    in_HardwareItem: "Hardware_Legra_Connector_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.75.064",
    BomQty: 2
  }
  , {
    _id: 24341,
    in_HardwareItem: "Hardware_Legra_Connector_KM",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.75.064",
    BomQty: 2
  }
  , {
    _id: 24342,
    in_HardwareItem: "Hardware_Legra_Connector_CM",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.75.064",
    BomQty: 4
  }
  , {
    _id: 24343,
    in_HardwareItem: "Hardware_Legra_Connector_FM",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.75.064",
    BomQty: 6
  }
  , {
    _id: 24344,
    in_HardwareItem: "Hardware_Legra_FrontBotCon",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.75.590",
    BomQty: 1
  }
  , {
    _id: 24345,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.02.710",
    BomQty: 1
  }
  , {
    _id: 24346,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24347,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.02.711",
    BomQty: 1
  }
  , {
    _id: 24348,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24349,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.02.781",
    BomQty: 1
  }
  , {
    _id: 24350,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.02.780",
    BomQty: 1
  }
  , {
    _id: 24351,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.09.910",
    BomQty: 1
  }
  , {
    _id: 24352,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "051.48.001",
    BomQty: 2
  }
  , {
    _id: 24353,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.143",
    BomQty: 2
  }
  , {
    _id: 24354,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.02.711",
    BomQty: 1
  }
  , {
    _id: 24355,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24356,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.02.521",
    BomQty: 1
  }
  , {
    _id: 24357,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.02.520",
    BomQty: 1
  }
  , {
    _id: 24358,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.09.910",
    BomQty: 1
  }
  , {
    _id: 24359,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "051.48.001",
    BomQty: 2
  }
  , {
    _id: 24360,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.143",
    BomQty: 2
  }
  , {
    _id: 24361,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "290.02.710",
    BomQty: 1
  }
  , {
    _id: 24362,
    in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24363,
    in_HardwareItem: "Hardware_Legra_White_400_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.703",
    BomQty: 1
  }
  , {
    _id: 24364,
    in_HardwareItem: "Hardware_Legra_White_450_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.704",
    BomQty: 1
  }
  , {
    _id: 24365,
    in_HardwareItem: "Hardware_Legra_White_500_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.705",
    BomQty: 1
  }
  , {
    _id: 24366,
    in_HardwareItem: "Hardware_Legra_White_550_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.706",
    BomQty: 1
  }
  , {
    _id: 24367,
    in_HardwareItem: "Hardware_Legra_Terra_400_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.803",
    BomQty: 1
  }
  , {
    _id: 24368,
    in_HardwareItem: "Hardware_Legra_Terra_450_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.804",
    BomQty: 1
  }
  , {
    _id: 24369,
    in_HardwareItem: "Hardware_Legra_Terra_500_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.805",
    BomQty: 1
  }
  , {
    _id: 24370,
    in_HardwareItem: "Hardware_Legra_Terra_550_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.806",
    BomQty: 1
  }
  , {
    _id: 24371,
    in_HardwareItem: "Hardware_Legra_Orion_400_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.503",
    BomQty: 1
  }
  , {
    _id: 24372,
    in_HardwareItem: "Hardware_Legra_Orion_450_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.504",
    BomQty: 1
  }
  , {
    _id: 24373,
    in_HardwareItem: "Hardware_Legra_Orion_500_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.505",
    BomQty: 1
  }
  , {
    _id: 24374,
    in_HardwareItem: "Hardware_Legra_Orion_550_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.506",
    BomQty: 1
  }
  , {
    _id: 24375,
    in_HardwareItem: "Hardware_Legra_Inox_450_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.004",
    BomQty: 1
  }
  , {
    _id: 24376,
    in_HardwareItem: "Hardware_Legra_Inox_500_N",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.005",
    BomQty: 1
  }
  , {
    _id: 24377,
    in_HardwareItem: "Hardware_Legra_White_400_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.713",
    BomQty: 1
  }
  , {
    _id: 24378,
    in_HardwareItem: "Hardware_Legra_White_450_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.714",
    BomQty: 1
  }
  , {
    _id: 24379,
    in_HardwareItem: "Hardware_Legra_White_500_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.715",
    BomQty: 1
  }
  , {
    _id: 24380,
    in_HardwareItem: "Hardware_Legra_White_550_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.716",
    BomQty: 1
  }
  , {
    _id: 24381,
    in_HardwareItem: "Hardware_Legra_Terra_400_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.813",
    BomQty: 1
  }
  , {
    _id: 24382,
    in_HardwareItem: "Hardware_Legra_Terra_450_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.814",
    BomQty: 1
  }
  , {
    _id: 24383,
    in_HardwareItem: "Hardware_Legra_Terra_500_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.815",
    BomQty: 1
  }
  , {
    _id: 24384,
    in_HardwareItem: "Hardware_Legra_Terra_550_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.816",
    BomQty: 1
  }
  , {
    _id: 24385,
    in_HardwareItem: "Hardware_Legra_Orion_400_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.513",
    BomQty: 1
  }
  , {
    _id: 24386,
    in_HardwareItem: "Hardware_Legra_Orion_450_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.514",
    BomQty: 1
  }
  , {
    _id: 24387,
    in_HardwareItem: "Hardware_Legra_Orion_500_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.515",
    BomQty: 1
  }
  , {
    _id: 24388,
    in_HardwareItem: "Hardware_Legra_Orion_550_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.516",
    BomQty: 1
  }
  , {
    _id: 24389,
    in_HardwareItem: "Hardware_Legra_Inox_450_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.014",
    BomQty: 1
  }
  , {
    _id: 24390,
    in_HardwareItem: "Hardware_Legra_Inox_500_N_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.015",
    BomQty: 1
  }
  , {
    _id: 24391,
    in_HardwareItem: "Hardware_Legra_White_270_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.720",
    BomQty: 1
  }
  , {
    _id: 24392,
    in_HardwareItem: "Hardware_Legra_White_300_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.721",
    BomQty: 1
  }
  , {
    _id: 24393,
    in_HardwareItem: "Hardware_Legra_White_350_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.722",
    BomQty: 1
  }
  , {
    _id: 24394,
    in_HardwareItem: "Hardware_Legra_White_400_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.723",
    BomQty: 1
  }
  , {
    _id: 24395,
    in_HardwareItem: "Hardware_Legra_White_450_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.724",
    BomQty: 1
  }
  , {
    _id: 24396,
    in_HardwareItem: "Hardware_Legra_White_500_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.725",
    BomQty: 1
  }
  , {
    _id: 24397,
    in_HardwareItem: "Hardware_Legra_White_550_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.726",
    BomQty: 1
  }
  , {
    _id: 24398,
    in_HardwareItem: "Hardware_Legra_White_600_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.727",
    BomQty: 1
  }
  , {
    _id: 24399,
    in_HardwareItem: "Hardware_Legra_White_450_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.734",
    BomQty: 1
  }
  , {
    _id: 24400,
    in_HardwareItem: "Hardware_Legra_White_500_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.735",
    BomQty: 1
  }
  , {
    _id: 24401,
    in_HardwareItem: "Hardware_Legra_White_550_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.736",
    BomQty: 1
  }
  , {
    _id: 24402,
    in_HardwareItem: "Hardware_Legra_White_600_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.737",
    BomQty: 1
  }
  , {
    _id: 24403,
    in_HardwareItem: "Hardware_Legra_White_650_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.738",
    BomQty: 1
  }
  , {
    _id: 24404,
    in_HardwareItem: "Hardware_Legra_Terra_270_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.820",
    BomQty: 1
  }
  , {
    _id: 24405,
    in_HardwareItem: "Hardware_Legra_Terra_300_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.821",
    BomQty: 1
  }
  , {
    _id: 24406,
    in_HardwareItem: "Hardware_Legra_Terra_350_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.822",
    BomQty: 1
  }
  , {
    _id: 24407,
    in_HardwareItem: "Hardware_Legra_Terra_400_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.823",
    BomQty: 1
  }
  , {
    _id: 24408,
    in_HardwareItem: "Hardware_Legra_Terra_450_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.824",
    BomQty: 1
  }
  , {
    _id: 24409,
    in_HardwareItem: "Hardware_Legra_Terra_500_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.825",
    BomQty: 1
  }
  , {
    _id: 24410,
    in_HardwareItem: "Hardware_Legra_Terra_550_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.826",
    BomQty: 1
  }
  , {
    _id: 24411,
    in_HardwareItem: "Hardware_Legra_Terra_600_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.827",
    BomQty: 1
  }
  , {
    _id: 24412,
    in_HardwareItem: "Hardware_Legra_Terra_450_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.834",
    BomQty: 1
  }
  , {
    _id: 24413,
    in_HardwareItem: "Hardware_Legra_Terra_500_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.835",
    BomQty: 1
  }
  , {
    _id: 24414,
    in_HardwareItem: "Hardware_Legra_Terra_550_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.836",
    BomQty: 1
  }
  , {
    _id: 24415,
    in_HardwareItem: "Hardware_Legra_Terra_600_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.837",
    BomQty: 1
  }
  , {
    _id: 24416,
    in_HardwareItem: "Hardware_Legra_Terra_650_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.838",
    BomQty: 1
  }
  , {
    _id: 24417,
    in_HardwareItem: "Hardware_Legra_Orion_270_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.520",
    BomQty: 1
  }
  , {
    _id: 24418,
    in_HardwareItem: "Hardware_Legra_Orion_300_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.521",
    BomQty: 1
  }
  , {
    _id: 24419,
    in_HardwareItem: "Hardware_Legra_Orion_350_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.522",
    BomQty: 1
  }
  , {
    _id: 24420,
    in_HardwareItem: "Hardware_Legra_Orion_400_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.523",
    BomQty: 1
  }
  , {
    _id: 24421,
    in_HardwareItem: "Hardware_Legra_Orion_450_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.524",
    BomQty: 1
  }
  , {
    _id: 24422,
    in_HardwareItem: "Hardware_Legra_Orion_500_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.525",
    BomQty: 1
  }
  , {
    _id: 24423,
    in_HardwareItem: "Hardware_Legra_Orion_550_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.526",
    BomQty: 1
  }
  , {
    _id: 24424,
    in_HardwareItem: "Hardware_Legra_Orion_600_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.527",
    BomQty: 1
  }
  , {
    _id: 24425,
    in_HardwareItem: "Hardware_Legra_Orion_450_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.534",
    BomQty: 1
  }
  , {
    _id: 24426,
    in_HardwareItem: "Hardware_Legra_Orion_500_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.535",
    BomQty: 1
  }
  , {
    _id: 24427,
    in_HardwareItem: "Hardware_Legra_Orion_550_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.536",
    BomQty: 1
  }
  , {
    _id: 24428,
    in_HardwareItem: "Hardware_Legra_Orion_600_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.537",
    BomQty: 1
  }
  , {
    _id: 24429,
    in_HardwareItem: "Hardware_Legra_Orion_650_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.538",
    BomQty: 1
  }
  , {
    _id: 24430,
    in_HardwareItem: "Hardware_Legra_Inox_270_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.020",
    BomQty: 1
  }
  , {
    _id: 24431,
    in_HardwareItem: "Hardware_Legra_Inox_300_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.021",
    BomQty: 1
  }
  , {
    _id: 24432,
    in_HardwareItem: "Hardware_Legra_Inox_350_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.022",
    BomQty: 1
  }
  , {
    _id: 24433,
    in_HardwareItem: "Hardware_Legra_Inox_400_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.023",
    BomQty: 1
  }
  , {
    _id: 24434,
    in_HardwareItem: "Hardware_Legra_Inox_450_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.024",
    BomQty: 1
  }
  , {
    _id: 24435,
    in_HardwareItem: "Hardware_Legra_Inox_500_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.025",
    BomQty: 1
  }
  , {
    _id: 24436,
    in_HardwareItem: "Hardware_Legra_Inox_550_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.026",
    BomQty: 1
  }
  , {
    _id: 24437,
    in_HardwareItem: "Hardware_Legra_Inox_600_M",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.027",
    BomQty: 1
  }
  , {
    _id: 24438,
    in_HardwareItem: "Hardware_Legra_Inox_450_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.034",
    BomQty: 1
  }
  , {
    _id: 24439,
    in_HardwareItem: "Hardware_Legra_Inox_500_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.035",
    BomQty: 1
  }
  , {
    _id: 24440,
    in_HardwareItem: "Hardware_Legra_Inox_550_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.036",
    BomQty: 1
  }
  , {
    _id: 24441,
    in_HardwareItem: "Hardware_Legra_Inox_600_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.037",
    BomQty: 1
  }
  , {
    _id: 24442,
    in_HardwareItem: "Hardware_Legra_Inox_650_M_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.038",
    BomQty: 1
  }
  , {
    _id: 24443,
    in_HardwareItem: "Hardware_Legra_White_270_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.720",
    BomQty: 1
  }
  , {
    _id: 24444,
    in_HardwareItem: "Hardware_Legra_White_300_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.721",
    BomQty: 1
  }
  , {
    _id: 24445,
    in_HardwareItem: "Hardware_Legra_White_350_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.722",
    BomQty: 1
  }
  , {
    _id: 24446,
    in_HardwareItem: "Hardware_Legra_White_400_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.723",
    BomQty: 1
  }
  , {
    _id: 24447,
    in_HardwareItem: "Hardware_Legra_White_450_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.724",
    BomQty: 1
  }
  , {
    _id: 24448,
    in_HardwareItem: "Hardware_Legra_White_500_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.725",
    BomQty: 1
  }
  , {
    _id: 24449,
    in_HardwareItem: "Hardware_Legra_White_550_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.726",
    BomQty: 1
  }
  , {
    _id: 24450,
    in_HardwareItem: "Hardware_Legra_White_600_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.727",
    BomQty: 1
  }
  , {
    _id: 24451,
    in_HardwareItem: "Hardware_Legra_White_450_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.734",
    BomQty: 1
  }
  , {
    _id: 24452,
    in_HardwareItem: "Hardware_Legra_White_500_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.735",
    BomQty: 1
  }
  , {
    _id: 24453,
    in_HardwareItem: "Hardware_Legra_White_550_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.736",
    BomQty: 1
  }
  , {
    _id: 24454,
    in_HardwareItem: "Hardware_Legra_White_600_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.737",
    BomQty: 1
  }
  , {
    _id: 24455,
    in_HardwareItem: "Hardware_Legra_White_650_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.738",
    BomQty: 1
  }
  , {
    _id: 24456,
    in_HardwareItem: "Hardware_Legra_Terra_270_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.820",
    BomQty: 1
  }
  , {
    _id: 24457,
    in_HardwareItem: "Hardware_Legra_Terra_300_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.821",
    BomQty: 1
  }
  , {
    _id: 24458,
    in_HardwareItem: "Hardware_Legra_Terra_350_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.822",
    BomQty: 1
  }
  , {
    _id: 24459,
    in_HardwareItem: "Hardware_Legra_Terra_400_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.823",
    BomQty: 1
  }
  , {
    _id: 24460,
    in_HardwareItem: "Hardware_Legra_Terra_450_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.824",
    BomQty: 1
  }
  , {
    _id: 24461,
    in_HardwareItem: "Hardware_Legra_Terra_500_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.825",
    BomQty: 1
  }
  , {
    _id: 24462,
    in_HardwareItem: "Hardware_Legra_Terra_550_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.826",
    BomQty: 1
  }
  , {
    _id: 24463,
    in_HardwareItem: "Hardware_Legra_Terra_600_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.827",
    BomQty: 1
  }
  , {
    _id: 24464,
    in_HardwareItem: "Hardware_Legra_Terra_450_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.834",
    BomQty: 1
  }
  , {
    _id: 24465,
    in_HardwareItem: "Hardware_Legra_Terra_500_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.835",
    BomQty: 1
  }
  , {
    _id: 24466,
    in_HardwareItem: "Hardware_Legra_Terra_550_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.836",
    BomQty: 1
  }
  , {
    _id: 24467,
    in_HardwareItem: "Hardware_Legra_Terra_600_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.837",
    BomQty: 1
  }
  , {
    _id: 24468,
    in_HardwareItem: "Hardware_Legra_Terra_650_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.838",
    BomQty: 1
  }
  , {
    _id: 24469,
    in_HardwareItem: "Hardware_Legra_Orion_270_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.520",
    BomQty: 1
  }
  , {
    _id: 24470,
    in_HardwareItem: "Hardware_Legra_Orion_300_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.521",
    BomQty: 1
  }
  , {
    _id: 24471,
    in_HardwareItem: "Hardware_Legra_Orion_350_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.522",
    BomQty: 1
  }
  , {
    _id: 24472,
    in_HardwareItem: "Hardware_Legra_Orion_400_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.523",
    BomQty: 1
  }
  , {
    _id: 24473,
    in_HardwareItem: "Hardware_Legra_Orion_450_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.524",
    BomQty: 1
  }
  , {
    _id: 24474,
    in_HardwareItem: "Hardware_Legra_Orion_500_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.525",
    BomQty: 1
  }
  , {
    _id: 24475,
    in_HardwareItem: "Hardware_Legra_Orion_550_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.526",
    BomQty: 1
  }
  , {
    _id: 24476,
    in_HardwareItem: "Hardware_Legra_Orion_600_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.527",
    BomQty: 1
  }
  , {
    _id: 24477,
    in_HardwareItem: "Hardware_Legra_Orion_450_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.534",
    BomQty: 1
  }
  , {
    _id: 24478,
    in_HardwareItem: "Hardware_Legra_Orion_500_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.535",
    BomQty: 1
  }
  , {
    _id: 24479,
    in_HardwareItem: "Hardware_Legra_Orion_550_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.536",
    BomQty: 1
  }
  , {
    _id: 24480,
    in_HardwareItem: "Hardware_Legra_Orion_600_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.537",
    BomQty: 1
  }
  , {
    _id: 24481,
    in_HardwareItem: "Hardware_Legra_Orion_650_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.538",
    BomQty: 1
  }
  , {
    _id: 24482,
    in_HardwareItem: "Hardware_Legra_Inox_270_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.020",
    BomQty: 1
  }
  , {
    _id: 24483,
    in_HardwareItem: "Hardware_Legra_Inox_300_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.021",
    BomQty: 1
  }
  , {
    _id: 24484,
    in_HardwareItem: "Hardware_Legra_Inox_350_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.022",
    BomQty: 1
  }
  , {
    _id: 24485,
    in_HardwareItem: "Hardware_Legra_Inox_400_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.023",
    BomQty: 1
  }
  , {
    _id: 24486,
    in_HardwareItem: "Hardware_Legra_Inox_450_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.024",
    BomQty: 1
  }
  , {
    _id: 24487,
    in_HardwareItem: "Hardware_Legra_Inox_500_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.025",
    BomQty: 1
  }
  , {
    _id: 24488,
    in_HardwareItem: "Hardware_Legra_Inox_550_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.026",
    BomQty: 1
  }
  , {
    _id: 24489,
    in_HardwareItem: "Hardware_Legra_Inox_600_M_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.027",
    BomQty: 1
  }
  , {
    _id: 24490,
    in_HardwareItem: "Hardware_Legra_Inox_450_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.034",
    BomQty: 1
  }
  , {
    _id: 24491,
    in_HardwareItem: "Hardware_Legra_Inox_500_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.035",
    BomQty: 1
  }
  , {
    _id: 24492,
    in_HardwareItem: "Hardware_Legra_Inox_550_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.036",
    BomQty: 1
  }
  , {
    _id: 24493,
    in_HardwareItem: "Hardware_Legra_Inox_600_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.037",
    BomQty: 1
  }
  , {
    _id: 24494,
    in_HardwareItem: "Hardware_Legra_Inox_650_M_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.038",
    BomQty: 1
  }
  , {
    _id: 24495,
    in_HardwareItem: "Hardware_Legra_White_300_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.741",
    BomQty: 1
  }
  , {
    _id: 24496,
    in_HardwareItem: "Hardware_Legra_White_350_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.742",
    BomQty: 1
  }
  , {
    _id: 24497,
    in_HardwareItem: "Hardware_Legra_White_400_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.743",
    BomQty: 1
  }
  , {
    _id: 24498,
    in_HardwareItem: "Hardware_Legra_White_450_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.744",
    BomQty: 1
  }
  , {
    _id: 24499,
    in_HardwareItem: "Hardware_Legra_White_500_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.745",
    BomQty: 1
  }
  , {
    _id: 24500,
    in_HardwareItem: "Hardware_Legra_White_550_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.746",
    BomQty: 1
  }
  , {
    _id: 24501,
    in_HardwareItem: "Hardware_Legra_White_600_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.747",
    BomQty: 1
  }
  , {
    _id: 24502,
    in_HardwareItem: "Hardware_Legra_White_450_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.754",
    BomQty: 1
  }
  , {
    _id: 24503,
    in_HardwareItem: "Hardware_Legra_White_500_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.755",
    BomQty: 1
  }
  , {
    _id: 24504,
    in_HardwareItem: "Hardware_Legra_White_550_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.756",
    BomQty: 1
  }
  , {
    _id: 24505,
    in_HardwareItem: "Hardware_Legra_White_600_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.757",
    BomQty: 1
  }
  , {
    _id: 24506,
    in_HardwareItem: "Hardware_Legra_Terra_300_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.841",
    BomQty: 1
  }
  , {
    _id: 24507,
    in_HardwareItem: "Hardware_Legra_Terra_350_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.842",
    BomQty: 1
  }
  , {
    _id: 24508,
    in_HardwareItem: "Hardware_Legra_Terra_400_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.843",
    BomQty: 1
  }
  , {
    _id: 24509,
    in_HardwareItem: "Hardware_Legra_Terra_450_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.844",
    BomQty: 1
  }
  , {
    _id: 24510,
    in_HardwareItem: "Hardware_Legra_Terra_500_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.845",
    BomQty: 1
  }
  , {
    _id: 24511,
    in_HardwareItem: "Hardware_Legra_Terra_550_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.846",
    BomQty: 1
  }
  , {
    _id: 24512,
    in_HardwareItem: "Hardware_Legra_Terra_600_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.847",
    BomQty: 1
  }
  , {
    _id: 24513,
    in_HardwareItem: "Hardware_Legra_Terra_450_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.854",
    BomQty: 1
  }
  , {
    _id: 24514,
    in_HardwareItem: "Hardware_Legra_Terra_500_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.855",
    BomQty: 1
  }
  , {
    _id: 24515,
    in_HardwareItem: "Hardware_Legra_Terra_550_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.856",
    BomQty: 1
  }
  , {
    _id: 24516,
    in_HardwareItem: "Hardware_Legra_Terra_600_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.857",
    BomQty: 1
  }
  , {
    _id: 24517,
    in_HardwareItem: "Hardware_Legra_Orion_300_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.541",
    BomQty: 1
  }
  , {
    _id: 24518,
    in_HardwareItem: "Hardware_Legra_Orion_350_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.542",
    BomQty: 1
  }
  , {
    _id: 24519,
    in_HardwareItem: "Hardware_Legra_Orion_400_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.543",
    BomQty: 1
  }
  , {
    _id: 24520,
    in_HardwareItem: "Hardware_Legra_Orion_450_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.544",
    BomQty: 1
  }
  , {
    _id: 24521,
    in_HardwareItem: "Hardware_Legra_Orion_500_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.545",
    BomQty: 1
  }
  , {
    _id: 24522,
    in_HardwareItem: "Hardware_Legra_Orion_550_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.546",
    BomQty: 1
  }
  , {
    _id: 24523,
    in_HardwareItem: "Hardware_Legra_Orion_600_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.547",
    BomQty: 1
  }
  , {
    _id: 24524,
    in_HardwareItem: "Hardware_Legra_Orion_450_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.554",
    BomQty: 1
  }
  , {
    _id: 24525,
    in_HardwareItem: "Hardware_Legra_Orion_500_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.555",
    BomQty: 1
  }
  , {
    _id: 24526,
    in_HardwareItem: "Hardware_Legra_Orion_550_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.556",
    BomQty: 1
  }
  , {
    _id: 24527,
    in_HardwareItem: "Hardware_Legra_Orion_600_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.557",
    BomQty: 1
  }
  , {
    _id: 24528,
    in_HardwareItem: "Hardware_Legra_Inox_350_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.042",
    BomQty: 1
  }
  , {
    _id: 24529,
    in_HardwareItem: "Hardware_Legra_Inox_400_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.043",
    BomQty: 1
  }
  , {
    _id: 24530,
    in_HardwareItem: "Hardware_Legra_Inox_450_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.044",
    BomQty: 1
  }
  , {
    _id: 24531,
    in_HardwareItem: "Hardware_Legra_Inox_500_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.045",
    BomQty: 1
  }
  , {
    _id: 24532,
    in_HardwareItem: "Hardware_Legra_Inox_550_K",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.046",
    BomQty: 1
  }
  , {
    _id: 24533,
    in_HardwareItem: "Hardware_Legra_Inox_450_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.054",
    BomQty: 1
  }
  , {
    _id: 24534,
    in_HardwareItem: "Hardware_Legra_Inox_500_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.055",
    BomQty: 1
  }
  , {
    _id: 24535,
    in_HardwareItem: "Hardware_Legra_Inox_550_K_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.26.056",
    BomQty: 1
  }
  , {
    _id: 24536,
    in_HardwareItem: "Hardware_Legra_White_300_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.741",
    BomQty: 1
  }
  , {
    _id: 24537,
    in_HardwareItem: "Hardware_Legra_White_350_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.742",
    BomQty: 1
  }
  , {
    _id: 24538,
    in_HardwareItem: "Hardware_Legra_White_400_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.743",
    BomQty: 1
  }
  , {
    _id: 24539,
    in_HardwareItem: "Hardware_Legra_White_450_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.744",
    BomQty: 1
  }
  , {
    _id: 24540,
    in_HardwareItem: "Hardware_Legra_White_500_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.745",
    BomQty: 1
  }
  , {
    _id: 24541,
    in_HardwareItem: "Hardware_Legra_White_550_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.746",
    BomQty: 1
  }
  , {
    _id: 24542,
    in_HardwareItem: "Hardware_Legra_White_600_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.747",
    BomQty: 1
  }
  , {
    _id: 24543,
    in_HardwareItem: "Hardware_Legra_White_450_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.754",
    BomQty: 1
  }
  , {
    _id: 24544,
    in_HardwareItem: "Hardware_Legra_White_500_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.755",
    BomQty: 1
  }
  , {
    _id: 24545,
    in_HardwareItem: "Hardware_Legra_White_550_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.756",
    BomQty: 1
  }
  , {
    _id: 24546,
    in_HardwareItem: "Hardware_Legra_White_600_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.757",
    BomQty: 1
  }
  , {
    _id: 24547,
    in_HardwareItem: "Hardware_Legra_Terra_300_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.841",
    BomQty: 1
  }
  , {
    _id: 24548,
    in_HardwareItem: "Hardware_Legra_Terra_350_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.842",
    BomQty: 1
  }
  , {
    _id: 24549,
    in_HardwareItem: "Hardware_Legra_Terra_400_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.843",
    BomQty: 1
  }
  , {
    _id: 24550,
    in_HardwareItem: "Hardware_Legra_Terra_450_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.844",
    BomQty: 1
  }
  , {
    _id: 24551,
    in_HardwareItem: "Hardware_Legra_Terra_500_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.845",
    BomQty: 1
  }
  , {
    _id: 24552,
    in_HardwareItem: "Hardware_Legra_Terra_550_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.846",
    BomQty: 1
  }
  , {
    _id: 24553,
    in_HardwareItem: "Hardware_Legra_Terra_600_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.847",
    BomQty: 1
  }
  , {
    _id: 24554,
    in_HardwareItem: "Hardware_Legra_Terra_450_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.854",
    BomQty: 1
  }
  , {
    _id: 24555,
    in_HardwareItem: "Hardware_Legra_Terra_500_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.855",
    BomQty: 1
  }
  , {
    _id: 24556,
    in_HardwareItem: "Hardware_Legra_Terra_550_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.856",
    BomQty: 1
  }
  , {
    _id: 24557,
    in_HardwareItem: "Hardware_Legra_Terra_600_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.857",
    BomQty: 1
  }
  , {
    _id: 24558,
    in_HardwareItem: "Hardware_Legra_Orion_300_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.541",
    BomQty: 1
  }
  , {
    _id: 24559,
    in_HardwareItem: "Hardware_Legra_Orion_350_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.542",
    BomQty: 1
  }
  , {
    _id: 24560,
    in_HardwareItem: "Hardware_Legra_Orion_400_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.543",
    BomQty: 1
  }
  , {
    _id: 24561,
    in_HardwareItem: "Hardware_Legra_Orion_450_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.544",
    BomQty: 1
  }
  , {
    _id: 24562,
    in_HardwareItem: "Hardware_Legra_Orion_500_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.545",
    BomQty: 1
  }
  , {
    _id: 24563,
    in_HardwareItem: "Hardware_Legra_Orion_550_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.546",
    BomQty: 1
  }
  , {
    _id: 24564,
    in_HardwareItem: "Hardware_Legra_Orion_600_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.547",
    BomQty: 1
  }
  , {
    _id: 24565,
    in_HardwareItem: "Hardware_Legra_Orion_450_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.554",
    BomQty: 1
  }
  , {
    _id: 24566,
    in_HardwareItem: "Hardware_Legra_Orion_500_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.555",
    BomQty: 1
  }
  , {
    _id: 24567,
    in_HardwareItem: "Hardware_Legra_Orion_550_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.556",
    BomQty: 1
  }
  , {
    _id: 24568,
    in_HardwareItem: "Hardware_Legra_Orion_600_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.557",
    BomQty: 1
  }
  , {
    _id: 24569,
    in_HardwareItem: "Hardware_Legra_Inox_350_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.042",
    BomQty: 1
  }
  , {
    _id: 24570,
    in_HardwareItem: "Hardware_Legra_Inox_400_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.043",
    BomQty: 1
  }
  , {
    _id: 24571,
    in_HardwareItem: "Hardware_Legra_Inox_450_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.044",
    BomQty: 1
  }
  , {
    _id: 24572,
    in_HardwareItem: "Hardware_Legra_Inox_500_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.045",
    BomQty: 1
  }
  , {
    _id: 24573,
    in_HardwareItem: "Hardware_Legra_Inox_550_K_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.046",
    BomQty: 1
  }
  , {
    _id: 24574,
    in_HardwareItem: "Hardware_Legra_Inox_450_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.054",
    BomQty: 1
  }
  , {
    _id: 24575,
    in_HardwareItem: "Hardware_Legra_Inox_500_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.055",
    BomQty: 1
  }
  , {
    _id: 24576,
    in_HardwareItem: "Hardware_Legra_Inox_550_K_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.72.056",
    BomQty: 1
  }
  , {
    _id: 24577,
    in_HardwareItem: "Hardware_Legra_White_270_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.700",
    BomQty: 1
  }
  , {
    _id: 24578,
    in_HardwareItem: "Hardware_Legra_White_300_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.701",
    BomQty: 1
  }
  , {
    _id: 24579,
    in_HardwareItem: "Hardware_Legra_White_350_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.702",
    BomQty: 1
  }
  , {
    _id: 24580,
    in_HardwareItem: "Hardware_Legra_White_400_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.703",
    BomQty: 1
  }
  , {
    _id: 24581,
    in_HardwareItem: "Hardware_Legra_White_450_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.704",
    BomQty: 1
  }
  , {
    _id: 24582,
    in_HardwareItem: "Hardware_Legra_White_500_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.705",
    BomQty: 1
  }
  , {
    _id: 24583,
    in_HardwareItem: "Hardware_Legra_White_550_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.706",
    BomQty: 1
  }
  , {
    _id: 24584,
    in_HardwareItem: "Hardware_Legra_White_600_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.707",
    BomQty: 1
  }
  , {
    _id: 24585,
    in_HardwareItem: "Hardware_Legra_White_450_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.714",
    BomQty: 1
  }
  , {
    _id: 24586,
    in_HardwareItem: "Hardware_Legra_White_500_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.715",
    BomQty: 1
  }
  , {
    _id: 24587,
    in_HardwareItem: "Hardware_Legra_White_550_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.716",
    BomQty: 1
  }
  , {
    _id: 24588,
    in_HardwareItem: "Hardware_Legra_White_600_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.717",
    BomQty: 1
  }
  , {
    _id: 24589,
    in_HardwareItem: "Hardware_Legra_White_650_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.718",
    BomQty: 1
  }
  , {
    _id: 24590,
    in_HardwareItem: "Hardware_Legra_Terra_270_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.800",
    BomQty: 1
  }
  , {
    _id: 24591,
    in_HardwareItem: "Hardware_Legra_Terra_300_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.801",
    BomQty: 1
  }
  , {
    _id: 24592,
    in_HardwareItem: "Hardware_Legra_Terra_350_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.802",
    BomQty: 1
  }
  , {
    _id: 24593,
    in_HardwareItem: "Hardware_Legra_Terra_400_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.803",
    BomQty: 1
  }
  , {
    _id: 24594,
    in_HardwareItem: "Hardware_Legra_Terra_450_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.804",
    BomQty: 1
  }
  , {
    _id: 24595,
    in_HardwareItem: "Hardware_Legra_Terra_500_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.805",
    BomQty: 1
  }
  , {
    _id: 24596,
    in_HardwareItem: "Hardware_Legra_Terra_550_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.806",
    BomQty: 1
  }
  , {
    _id: 24597,
    in_HardwareItem: "Hardware_Legra_Terra_600_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.807",
    BomQty: 1
  }
  , {
    _id: 24598,
    in_HardwareItem: "Hardware_Legra_Terra_450_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.814",
    BomQty: 1
  }
  , {
    _id: 24599,
    in_HardwareItem: "Hardware_Legra_Terra_500_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.815",
    BomQty: 1
  }
  , {
    _id: 24600,
    in_HardwareItem: "Hardware_Legra_Terra_550_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.816",
    BomQty: 1
  }
  , {
    _id: 24601,
    in_HardwareItem: "Hardware_Legra_Terra_600_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.817",
    BomQty: 1
  }
  , {
    _id: 24602,
    in_HardwareItem: "Hardware_Legra_Terra_650_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.818",
    BomQty: 1
  }
  , {
    _id: 24603,
    in_HardwareItem: "Hardware_Legra_Orion_270_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.500",
    BomQty: 1
  }
  , {
    _id: 24604,
    in_HardwareItem: "Hardware_Legra_Orion_300_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.501",
    BomQty: 1
  }
  , {
    _id: 24605,
    in_HardwareItem: "Hardware_Legra_Orion_350_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.502",
    BomQty: 1
  }
  , {
    _id: 24606,
    in_HardwareItem: "Hardware_Legra_Orion_400_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.503",
    BomQty: 1
  }
  , {
    _id: 24607,
    in_HardwareItem: "Hardware_Legra_Orion_450_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.504",
    BomQty: 1
  }
  , {
    _id: 24608,
    in_HardwareItem: "Hardware_Legra_Orion_500_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.505",
    BomQty: 1
  }
  , {
    _id: 24609,
    in_HardwareItem: "Hardware_Legra_Orion_550_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.506",
    BomQty: 1
  }
  , {
    _id: 24610,
    in_HardwareItem: "Hardware_Legra_Orion_600_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.507",
    BomQty: 1
  }
  , {
    _id: 24611,
    in_HardwareItem: "Hardware_Legra_Orion_450_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.514",
    BomQty: 1
  }
  , {
    _id: 24612,
    in_HardwareItem: "Hardware_Legra_Orion_500_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.515",
    BomQty: 1
  }
  , {
    _id: 24613,
    in_HardwareItem: "Hardware_Legra_Orion_550_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.516",
    BomQty: 1
  }
  , {
    _id: 24614,
    in_HardwareItem: "Hardware_Legra_Orion_600_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.517",
    BomQty: 1
  }
  , {
    _id: 24615,
    in_HardwareItem: "Hardware_Legra_Orion_650_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.518",
    BomQty: 1
  }
  , {
    _id: 24616,
    in_HardwareItem: "Hardware_Legra_Inox_270_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.000",
    BomQty: 1
  }
  , {
    _id: 24617,
    in_HardwareItem: "Hardware_Legra_Inox_300_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.001",
    BomQty: 1
  }
  , {
    _id: 24618,
    in_HardwareItem: "Hardware_Legra_Inox_350_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.002",
    BomQty: 1
  }
  , {
    _id: 24619,
    in_HardwareItem: "Hardware_Legra_Inox_400_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.003",
    BomQty: 1
  }
  , {
    _id: 24620,
    in_HardwareItem: "Hardware_Legra_Inox_450_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.004",
    BomQty: 1
  }
  , {
    _id: 24621,
    in_HardwareItem: "Hardware_Legra_Inox_500_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.005",
    BomQty: 1
  }
  , {
    _id: 24622,
    in_HardwareItem: "Hardware_Legra_Inox_550_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.006",
    BomQty: 1
  }
  , {
    _id: 24623,
    in_HardwareItem: "Hardware_Legra_Inox_600_C",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.007",
    BomQty: 1
  }
  , {
    _id: 24624,
    in_HardwareItem: "Hardware_Legra_Inox_450_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.014",
    BomQty: 1
  }
  , {
    _id: 24625,
    in_HardwareItem: "Hardware_Legra_Inox_500_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.015",
    BomQty: 1
  }
  , {
    _id: 24626,
    in_HardwareItem: "Hardware_Legra_Inox_550_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.016",
    BomQty: 1
  }
  , {
    _id: 24627,
    in_HardwareItem: "Hardware_Legra_Inox_600_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.017",
    BomQty: 1
  }
  , {
    _id: 24628,
    in_HardwareItem: "Hardware_Legra_Inox_650_C_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.018",
    BomQty: 1
  }
  , {
    _id: 24629,
    in_HardwareItem: "Hardware_Legra_White_270_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.700",
    BomQty: 1
  }
  , {
    _id: 24630,
    in_HardwareItem: "Hardware_Legra_White_300_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.701",
    BomQty: 1
  }
  , {
    _id: 24631,
    in_HardwareItem: "Hardware_Legra_White_350_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.702",
    BomQty: 1
  }
  , {
    _id: 24632,
    in_HardwareItem: "Hardware_Legra_White_400_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.703",
    BomQty: 1
  }
  , {
    _id: 24633,
    in_HardwareItem: "Hardware_Legra_White_450_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.704",
    BomQty: 1
  }
  , {
    _id: 24634,
    in_HardwareItem: "Hardware_Legra_White_500_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.705",
    BomQty: 1
  }
  , {
    _id: 24635,
    in_HardwareItem: "Hardware_Legra_White_550_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.706",
    BomQty: 1
  }
  , {
    _id: 24636,
    in_HardwareItem: "Hardware_Legra_White_600_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.707",
    BomQty: 1
  }
  , {
    _id: 24637,
    in_HardwareItem: "Hardware_Legra_White_450_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.714",
    BomQty: 1
  }
  , {
    _id: 24638,
    in_HardwareItem: "Hardware_Legra_White_500_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.715",
    BomQty: 1
  }
  , {
    _id: 24639,
    in_HardwareItem: "Hardware_Legra_White_550_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.716",
    BomQty: 1
  }
  , {
    _id: 24640,
    in_HardwareItem: "Hardware_Legra_White_600_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.717",
    BomQty: 1
  }
  , {
    _id: 24641,
    in_HardwareItem: "Hardware_Legra_White_650_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.718",
    BomQty: 1
  }
  , {
    _id: 24642,
    in_HardwareItem: "Hardware_Legra_Terra_270_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.800",
    BomQty: 1
  }
  , {
    _id: 24643,
    in_HardwareItem: "Hardware_Legra_Terra_300_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.801",
    BomQty: 1
  }
  , {
    _id: 24644,
    in_HardwareItem: "Hardware_Legra_Terra_350_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.802",
    BomQty: 1
  }
  , {
    _id: 24645,
    in_HardwareItem: "Hardware_Legra_Terra_400_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.803",
    BomQty: 1
  }
  , {
    _id: 24646,
    in_HardwareItem: "Hardware_Legra_Terra_450_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.804",
    BomQty: 1
  }
  , {
    _id: 24647,
    in_HardwareItem: "Hardware_Legra_Terra_500_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.805",
    BomQty: 1
  }
  , {
    _id: 24648,
    in_HardwareItem: "Hardware_Legra_Terra_550_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.806",
    BomQty: 1
  }
  , {
    _id: 24649,
    in_HardwareItem: "Hardware_Legra_Terra_600_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.807",
    BomQty: 1
  }
  , {
    _id: 24650,
    in_HardwareItem: "Hardware_Legra_Terra_450_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.814",
    BomQty: 1
  }
  , {
    _id: 24651,
    in_HardwareItem: "Hardware_Legra_Terra_500_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.815",
    BomQty: 1
  }
  , {
    _id: 24652,
    in_HardwareItem: "Hardware_Legra_Terra_550_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.816",
    BomQty: 1
  }
  , {
    _id: 24653,
    in_HardwareItem: "Hardware_Legra_Terra_600_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.817",
    BomQty: 1
  }
  , {
    _id: 24654,
    in_HardwareItem: "Hardware_Legra_Terra_650_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.818",
    BomQty: 1
  }
  , {
    _id: 24655,
    in_HardwareItem: "Hardware_Legra_Orion_270_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.500",
    BomQty: 1
  }
  , {
    _id: 24656,
    in_HardwareItem: "Hardware_Legra_Orion_300_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.501",
    BomQty: 1
  }
  , {
    _id: 24657,
    in_HardwareItem: "Hardware_Legra_Orion_350_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.502",
    BomQty: 1
  }
  , {
    _id: 24658,
    in_HardwareItem: "Hardware_Legra_Orion_400_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.503",
    BomQty: 1
  }
  , {
    _id: 24659,
    in_HardwareItem: "Hardware_Legra_Orion_450_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.504",
    BomQty: 1
  }
  , {
    _id: 24660,
    in_HardwareItem: "Hardware_Legra_Orion_500_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.505",
    BomQty: 1
  }
  , {
    _id: 24661,
    in_HardwareItem: "Hardware_Legra_Orion_550_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.506",
    BomQty: 1
  }
  , {
    _id: 24662,
    in_HardwareItem: "Hardware_Legra_Orion_600_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.507",
    BomQty: 1
  }
  , {
    _id: 24663,
    in_HardwareItem: "Hardware_Legra_Orion_450_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.514",
    BomQty: 1
  }
  , {
    _id: 24664,
    in_HardwareItem: "Hardware_Legra_Orion_500_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.515",
    BomQty: 1
  }
  , {
    _id: 24665,
    in_HardwareItem: "Hardware_Legra_Orion_550_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.516",
    BomQty: 1
  }
  , {
    _id: 24666,
    in_HardwareItem: "Hardware_Legra_Orion_600_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.517",
    BomQty: 1
  }
  , {
    _id: 24667,
    in_HardwareItem: "Hardware_Legra_Orion_650_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.518",
    BomQty: 1
  }
  , {
    _id: 24668,
    in_HardwareItem: "Hardware_Legra_Inox_270_C_PTO_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.000",
    BomQty: 1
  }
  , {
    _id: 24669,
    in_HardwareItem: "Hardware_Legra_Inox_300_C_PTO_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.001",
    BomQty: 1
  }
  , {
    _id: 24670,
    in_HardwareItem: "Hardware_Legra_Inox_350_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.002",
    BomQty: 1
  }
  , {
    _id: 24671,
    in_HardwareItem: "Hardware_Legra_Inox_400_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.003",
    BomQty: 1
  }
  , {
    _id: 24672,
    in_HardwareItem: "Hardware_Legra_Inox_450_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.004",
    BomQty: 1
  }
  , {
    _id: 24673,
    in_HardwareItem: "Hardware_Legra_Inox_500_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.005",
    BomQty: 1
  }
  , {
    _id: 24674,
    in_HardwareItem: "Hardware_Legra_Inox_550_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.006",
    BomQty: 1
  }
  , {
    _id: 24675,
    in_HardwareItem: "Hardware_Legra_Inox_600_C_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.007",
    BomQty: 1
  }
  , {
    _id: 24676,
    in_HardwareItem: "Hardware_Legra_Inox_450_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.014",
    BomQty: 1
  }
  , {
    _id: 24677,
    in_HardwareItem: "Hardware_Legra_Inox_500_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.015",
    BomQty: 1
  }
  , {
    _id: 24678,
    in_HardwareItem: "Hardware_Legra_Inox_550_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.016",
    BomQty: 1
  }
  , {
    _id: 24679,
    in_HardwareItem: "Hardware_Legra_Inox_600_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.017",
    BomQty: 1
  }
  , {
    _id: 24680,
    in_HardwareItem: "Hardware_Legra_Inox_650_C_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.018",
    BomQty: 1
  }
  , {
    _id: 24681,
    in_HardwareItem: "Hardware_Legra_White_400_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.723",
    BomQty: 1
  }
  , {
    _id: 24682,
    in_HardwareItem: "Hardware_Legra_White_450_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.724",
    BomQty: 1
  }
  , {
    _id: 24683,
    in_HardwareItem: "Hardware_Legra_White_500_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.725",
    BomQty: 1
  }
  , {
    _id: 24684,
    in_HardwareItem: "Hardware_Legra_White_550_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.726",
    BomQty: 1
  }
  , {
    _id: 24685,
    in_HardwareItem: "Hardware_Legra_White_600_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.727",
    BomQty: 1
  }
  , {
    _id: 24686,
    in_HardwareItem: "Hardware_Legra_White_450_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.734",
    BomQty: 1
  }
  , {
    _id: 24687,
    in_HardwareItem: "Hardware_Legra_White_500_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.735",
    BomQty: 1
  }
  , {
    _id: 24688,
    in_HardwareItem: "Hardware_Legra_White_550_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.736",
    BomQty: 1
  }
  , {
    _id: 24689,
    in_HardwareItem: "Hardware_Legra_White_600_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.737",
    BomQty: 1
  }
  , {
    _id: 24690,
    in_HardwareItem: "Hardware_Legra_White_650_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.738",
    BomQty: 1
  }
  , {
    _id: 24691,
    in_HardwareItem: "Hardware_Legra_Terra_400_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.823",
    BomQty: 1
  }
  , {
    _id: 24692,
    in_HardwareItem: "Hardware_Legra_Terra_450_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.824",
    BomQty: 1
  }
  , {
    _id: 24693,
    in_HardwareItem: "Hardware_Legra_Terra_500_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.825",
    BomQty: 1
  }
  , {
    _id: 24694,
    in_HardwareItem: "Hardware_Legra_Terra_550_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.826",
    BomQty: 1
  }
  , {
    _id: 24695,
    in_HardwareItem: "Hardware_Legra_Terra_600_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.827",
    BomQty: 1
  }
  , {
    _id: 24696,
    in_HardwareItem: "Hardware_Legra_Terra_450_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.834",
    BomQty: 1
  }
  , {
    _id: 24697,
    in_HardwareItem: "Hardware_Legra_Terra_500_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.835",
    BomQty: 1
  }
  , {
    _id: 24698,
    in_HardwareItem: "Hardware_Legra_Terra_550_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.836",
    BomQty: 1
  }
  , {
    _id: 24699,
    in_HardwareItem: "Hardware_Legra_Terra_600_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.837",
    BomQty: 1
  }
  , {
    _id: 24700,
    in_HardwareItem: "Hardware_Legra_Terra_650_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.838",
    BomQty: 1
  }
  , {
    _id: 24701,
    in_HardwareItem: "Hardware_Legra_Orion_400_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.523",
    BomQty: 1
  }
  , {
    _id: 24702,
    in_HardwareItem: "Hardware_Legra_Orion_450_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.524",
    BomQty: 1
  }
  , {
    _id: 24703,
    in_HardwareItem: "Hardware_Legra_Orion_500_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.525",
    BomQty: 1
  }
  , {
    _id: 24704,
    in_HardwareItem: "Hardware_Legra_Orion_550_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.526",
    BomQty: 1
  }
  , {
    _id: 24705,
    in_HardwareItem: "Hardware_Legra_Orion_600_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.527",
    BomQty: 1
  }
  , {
    _id: 24706,
    in_HardwareItem: "Hardware_Legra_Orion_450_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.534",
    BomQty: 1
  }
  , {
    _id: 24707,
    in_HardwareItem: "Hardware_Legra_Orion_500_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.535",
    BomQty: 1
  }
  , {
    _id: 24708,
    in_HardwareItem: "Hardware_Legra_Orion_550_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.536",
    BomQty: 1
  }
  , {
    _id: 24709,
    in_HardwareItem: "Hardware_Legra_Orion_600_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.537",
    BomQty: 1
  }
  , {
    _id: 24710,
    in_HardwareItem: "Hardware_Legra_Orion_650_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.538",
    BomQty: 1
  }
  , {
    _id: 24711,
    in_HardwareItem: "Hardware_Legra_Inox_400_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.023",
    BomQty: 1
  }
  , {
    _id: 24712,
    in_HardwareItem: "Hardware_Legra_Inox_450_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.024",
    BomQty: 1
  }
  , {
    _id: 24713,
    in_HardwareItem: "Hardware_Legra_Inox_500_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.025",
    BomQty: 1
  }
  , {
    _id: 24714,
    in_HardwareItem: "Hardware_Legra_Inox_550_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.026",
    BomQty: 1
  }
  , {
    _id: 24715,
    in_HardwareItem: "Hardware_Legra_Inox_600_F",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.027",
    BomQty: 1
  }
  , {
    _id: 24716,
    in_HardwareItem: "Hardware_Legra_Inox_450_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.034",
    BomQty: 1
  }
  , {
    _id: 24717,
    in_HardwareItem: "Hardware_Legra_Inox_500_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.035",
    BomQty: 1
  }
  , {
    _id: 24718,
    in_HardwareItem: "Hardware_Legra_Inox_550_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.036",
    BomQty: 1
  }
  , {
    _id: 24719,
    in_HardwareItem: "Hardware_Legra_Inox_600_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.037",
    BomQty: 1
  }
  , {
    _id: 24720,
    in_HardwareItem: "Hardware_Legra_Inox_650_F_Heavy",
    Supplier: "Haefele",
    SupplierArticleNumber: "551.27.038",
    BomQty: 1
  }
  , {
    _id: 24721,
    in_HardwareItem: "Hardware_Legra_White_400_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.723",
    BomQty: 1
  }
  , {
    _id: 24722,
    in_HardwareItem: "Hardware_Legra_White_450_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.724",
    BomQty: 1
  }
  , {
    _id: 24723,
    in_HardwareItem: "Hardware_Legra_White_500_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.725",
    BomQty: 1
  }
  , {
    _id: 24724,
    in_HardwareItem: "Hardware_Legra_White_550_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.726",
    BomQty: 1
  }
  , {
    _id: 24725,
    in_HardwareItem: "Hardware_Legra_White_600_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.727",
    BomQty: 1
  }
  , {
    _id: 24726,
    in_HardwareItem: "Hardware_Legra_White_450_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.734",
    BomQty: 1
  }
  , {
    _id: 24727,
    in_HardwareItem: "Hardware_Legra_White_500_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.735",
    BomQty: 1
  }
  , {
    _id: 24728,
    in_HardwareItem: "Hardware_Legra_White_550_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.736",
    BomQty: 1
  }
  , {
    _id: 24729,
    in_HardwareItem: "Hardware_Legra_White_600_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.737",
    BomQty: 1
  }
  , {
    _id: 24730,
    in_HardwareItem: "Hardware_Legra_White_650_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.738",
    BomQty: 1
  }
  , {
    _id: 24731,
    in_HardwareItem: "Hardware_Legra_Terra_400_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.823",
    BomQty: 1
  }
  , {
    _id: 24732,
    in_HardwareItem: "Hardware_Legra_Terra_450_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.824",
    BomQty: 1
  }
  , {
    _id: 24733,
    in_HardwareItem: "Hardware_Legra_Terra_500_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.825",
    BomQty: 1
  }
  , {
    _id: 24734,
    in_HardwareItem: "Hardware_Legra_Terra_550_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.826",
    BomQty: 1
  }
  , {
    _id: 24735,
    in_HardwareItem: "Hardware_Legra_Terra_600_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.827",
    BomQty: 1
  }
  , {
    _id: 24736,
    in_HardwareItem: "Hardware_Legra_Terra_450_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.834",
    BomQty: 1
  }
  , {
    _id: 24737,
    in_HardwareItem: "Hardware_Legra_Terra_500_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.835",
    BomQty: 1
  }
  , {
    _id: 24738,
    in_HardwareItem: "Hardware_Legra_Terra_550_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.836",
    BomQty: 1
  }
  , {
    _id: 24739,
    in_HardwareItem: "Hardware_Legra_Terra_600_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.837",
    BomQty: 1
  }
  , {
    _id: 24740,
    in_HardwareItem: "Hardware_Legra_Terra_650_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.838",
    BomQty: 1
  }
  , {
    _id: 24741,
    in_HardwareItem: "Hardware_Legra_Orion_400_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.523",
    BomQty: 1
  }
  , {
    _id: 24742,
    in_HardwareItem: "Hardware_Legra_Orion_450_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.524",
    BomQty: 1
  }
  , {
    _id: 24743,
    in_HardwareItem: "Hardware_Legra_Orion_500_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.525",
    BomQty: 1
  }
  , {
    _id: 24744,
    in_HardwareItem: "Hardware_Legra_Orion_550_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.526",
    BomQty: 1
  }
  , {
    _id: 24745,
    in_HardwareItem: "Hardware_Legra_Orion_600_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.527",
    BomQty: 1
  }
  , {
    _id: 24746,
    in_HardwareItem: "Hardware_Legra_Orion_450_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.534",
    BomQty: 1
  }
  , {
    _id: 24747,
    in_HardwareItem: "Hardware_Legra_Orion_500_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.535",
    BomQty: 1
  }
  , {
    _id: 24748,
    in_HardwareItem: "Hardware_Legra_Orion_550_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.536",
    BomQty: 1
  }
  , {
    _id: 24749,
    in_HardwareItem: "Hardware_Legra_Orion_600_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.537",
    BomQty: 1
  }
  , {
    _id: 24750,
    in_HardwareItem: "Hardware_Legra_Orion_650_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.538",
    BomQty: 1
  }
  , {
    _id: 24751,
    in_HardwareItem: "Hardware_Legra_Inox_400_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.023",
    BomQty: 1
  }
  , {
    _id: 24752,
    in_HardwareItem: "Hardware_Legra_Inox_450_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.024",
    BomQty: 1
  }
  , {
    _id: 24753,
    in_HardwareItem: "Hardware_Legra_Inox_500_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.025",
    BomQty: 1
  }
  , {
    _id: 24754,
    in_HardwareItem: "Hardware_Legra_Inox_550_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.026",
    BomQty: 1
  }
  , {
    _id: 24755,
    in_HardwareItem: "Hardware_Legra_Inox_600_F_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.027",
    BomQty: 1
  }
  , {
    _id: 24756,
    in_HardwareItem: "Hardware_Legra_Inox_450_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.034",
    BomQty: 1
  }
  , {
    _id: 24757,
    in_HardwareItem: "Hardware_Legra_Inox_500_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.035",
    BomQty: 1
  }
  , {
    _id: 24758,
    in_HardwareItem: "Hardware_Legra_Inox_550_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.036",
    BomQty: 1
  }
  , {
    _id: 24759,
    in_HardwareItem: "Hardware_Legra_Inox_600_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.037",
    BomQty: 1
  }
  , {
    _id: 24760,
    in_HardwareItem: "Hardware_Legra_Inox_650_F_Heavy_PTO",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.73.038",
    BomQty: 1
  }
  , {
    _id: 24761,
    in_HardwareItem: "Hardware_Legra_Syncro_Small",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.80.183",
    BomQty: 1
  }
  , {
    _id: 24762,
    in_HardwareItem: "Hardware_Legra_Syncro_Large",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.80.187",
    BomQty: 1
  }
  , {
    _id: 24763,
    in_HardwareItem: "Hardware_Legra_Syncro_TipOn_Large",
    Supplier: "Haefele",
    SupplierArticleNumber: "550.60.119",
    BomQty: 1
  }
  , {
    _id: 24764,
    in_HardwareItem: "HardwareItemDowel03",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "267.82.020",
    BomQty: 1
  }
  , {
    _id: 24765,
    in_HardwareItem: "HardwareGlueDuststripGreyBrown",
    Supplier: "Haefele",
    SupplierArticleNumber: "239.91.105",
    BomQty: 1
  }
  , {
    _id: 24766,
    in_HardwareItem: "HardwarePushToOpenShortBlack",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.353",
    BomQty: 1
  }
  , {
    _id: 24767,
    in_HardwareItem: "HardwarePushToOpenShortGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.553",
    BomQty: 1
  }
  , {
    _id: 24768,
    in_HardwareItem: "HardwarePushToOpenShortWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.753",
    BomQty: 1
  }
  , {
    _id: 24769,
    in_HardwareItem: "HardwarePushToOpenLongBlack",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.354",
    BomQty: 1
  }
  , {
    _id: 24770,
    in_HardwareItem: "HardwarePushToOpenLongGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.554",
    BomQty: 1
  }
  , {
    _id: 24771,
    in_HardwareItem: "HardwarePushToOpenLongWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.754",
    BomQty: 1
  }
  , {
    _id: 24772,
    in_HardwareItem: "HardwareAdapterHousingShortBlack",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.363",
    BomQty: 1
  }
  , {
    _id: 24773,
    in_HardwareItem: "HardwareAdapterHousingShortBlack",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.353",
    BomQty: 1
  }
  , {
    _id: 24774,
    in_HardwareItem: "HardwareAdapterHousingShortGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.563",
    BomQty: 1
  }
  , {
    _id: 24775,
    in_HardwareItem: "HardwareAdapterHousingShortGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.553",
    BomQty: 1
  }
  , {
    _id: 24776,
    in_HardwareItem: "HardwareAdapterHousingShortWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.763",
    BomQty: 1
  }
  , {
    _id: 24777,
    in_HardwareItem: "HardwareAdapterHousingShortWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.753",
    BomQty: 1
  }
  , {
    _id: 24778,
    in_HardwareItem: "HardwareAdapterHousingLongBlack",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.362",
    BomQty: 1
  }
  , {
    _id: 24779,
    in_HardwareItem: "HardwareAdapterHousingLongBlack",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.354",
    BomQty: 1
  }
  , {
    _id: 24780,
    in_HardwareItem: "HardwareAdapterHousingLongGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.562",
    BomQty: 1
  }
  , {
    _id: 24781,
    in_HardwareItem: "HardwareAdapterHousingLongGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.554",
    BomQty: 1
  }
  , {
    _id: 24782,
    in_HardwareItem: "HardwareAdapterHousingLongWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.762",
    BomQty: 1
  }
  , {
    _id: 24783,
    in_HardwareItem: "HardwareAdapterHousingLongWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "356.04.754",
    BomQty: 1
  }
  , {
    _id: 24784,
    in_HardwareItem: "HardwareRafix01Nickel",
    Supplier: "Haefele",
    SupplierArticleNumber: "263.15.705",
    BomQty: 1
  }
  , {
    _id: 24785,
    in_HardwareItem: "HardwareRafix01Nickel",
    Supplier: "Haefele",
    SupplierArticleNumber: "263.20.847",
    BomQty: 1
  }
  , {
    _id: 24786,
    in_HardwareItem: "HardwareAdapterHousingLongBlack",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24787,
    in_HardwareItem: "HardwareAdapterHousingLongGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24788,
    in_HardwareItem: "HardwareAdapterHousingLongWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24789,
    in_HardwareItem: "HardwareAdapterHousingShortBlack",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24790,
    in_HardwareItem: "HardwareAdapterHousingShortGrey",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24791,
    in_HardwareItem: "HardwareAdapterHousingShortWhite",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24792,
    in_HardwareItem: "Hardware_Aventos_HF_2700_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.74.517",
    BomQty: 1
  }
  , {
    _id: 24793,
    in_HardwareItem: "Hardware_Aventos_HF_11000_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.74.518",
    BomQty: 1
  }
  , {
    _id: 24794,
    in_HardwareItem: "Hardware_Aventos_HF_2700_White",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.74.717",
    BomQty: 1
  }
  , {
    _id: 24795,
    in_HardwareItem: "Hardware_Aventos_HF_11000_White",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.74.718",
    BomQty: 1
  }
  , {
    _id: 24796,
    in_HardwareItem: "Hardware_Aventos_HF_2700_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.74.537",
    BomQty: 1
  }
  , {
    _id: 24797,
    in_HardwareItem: "Hardware_Aventos_HF_11000_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.74.538",
    BomQty: 1
  }
  , {
    _id: 24798,
    in_HardwareItem: "Hardware_Aventos_HF_Connector",
    Supplier: "Haefele",
    SupplierArticleNumber: "342.22.070",
    BomQty: 1
  }
  , {
    _id: 24799,
    in_HardwareItem: "Hardware_Aventos_HF_Mech480",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.74.655",
    BomQty: 1
  }
  , {
    _id: 24800,
    in_HardwareItem: "Hardware_Aventos_HF_Mech600",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.74.657",
    BomQty: 1
  }
  , {
    _id: 24801,
    in_HardwareItem: "Hardware_Aventos_HF_Mech840",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.74.658",
    BomQty: 1
  }
  , {
    _id: 24802,
    in_HardwareItem: "Hardware_Aventos_HK_3500_White",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.553",
    BomQty: 1
  }
  , {
    _id: 24803,
    in_HardwareItem: "Hardware_Aventos_HK_1950_White",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.552",
    BomQty: 1
  }
  , {
    _id: 24804,
    in_HardwareItem: "Hardware_Aventos_HK_1200_White",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.551",
    BomQty: 1
  }
  , {
    _id: 24805,
    in_HardwareItem: "Hardware_Aventos_HK_420_White",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.550",
    BomQty: 1
  }
  , {
    _id: 24806,
    in_HardwareItem: "Hardware_Aventos_HK_3500_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.548",
    BomQty: 1
  }
  , {
    _id: 24807,
    in_HardwareItem: "Hardware_Aventos_HK_1950_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.547",
    BomQty: 1
  }
  , {
    _id: 24808,
    in_HardwareItem: "Hardware_Aventos_HK_1200_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.546",
    BomQty: 1
  }
  , {
    _id: 24809,
    in_HardwareItem: "Hardware_Aventos_HK_420_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.545",
    BomQty: 1
  }
  , {
    _id: 24810,
    in_HardwareItem: "Hardware_Aventos_HK_3500_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.578",
    BomQty: 1
  }
  , {
    _id: 24811,
    in_HardwareItem: "Hardware_Aventos_HK_1950_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.577",
    BomQty: 1
  }
  , {
    _id: 24812,
    in_HardwareItem: "Hardware_Aventos_HK_1200_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.576",
    BomQty: 1
  }
  , {
    _id: 24813,
    in_HardwareItem: "Hardware_Aventos_HK_420_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.85.575",
    BomQty: 1
  }
  , {
    _id: 24814,
    in_HardwareItem: "Hardware_Aventos_HK_Connector",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.84.790",
    BomQty: 1
  }
  , {
    _id: 24815,
    in_HardwareItem: "HardwareHinge120OverlayNoSpringSSForFHF",
    Supplier: "Haefele",
    SupplierArticleNumber: "342.81.400",
    BomQty: 1
  }
  , {
    _id: 24816,
    in_HardwareItem: "HardwareHinge120OverlayNoSpringSSForFHF",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24817,
    in_HardwareItem: "Hardware_Aventos_HS_350_White",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.84.727",
    BomQty: 1
  }
  , {
    _id: 24818,
    in_HardwareItem: "Hardware_Aventos_HS_480_White",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.84.728",
    BomQty: 1
  }
  , {
    _id: 24819,
    in_HardwareItem: "Hardware_Aventos_HS_800_White",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.84.729",
    BomQty: 1
  }
  , {
    _id: 24820,
    in_HardwareItem: "Hardware_Aventos_HS_350_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.84.527",
    BomQty: 1
  }
  , {
    _id: 24821,
    in_HardwareItem: "Hardware_Aventos_HS_480_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.84.528",
    BomQty: 1
  }
  , {
    _id: 24822,
    in_HardwareItem: "Hardware_Aventos_HS_800_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.84.529",
    BomQty: 1
  }
  , {
    _id: 24823,
    in_HardwareItem: "Hardware_Aventos_HS_350_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.84.587",
    BomQty: 1
  }
  , {
    _id: 24824,
    in_HardwareItem: "Hardware_Aventos_HS_480_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.84.588",
    BomQty: 1
  }
  , {
    _id: 24825,
    in_HardwareItem: "Hardware_Aventos_HS_800_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.84.589",
    BomQty: 1
  }
  , {
    _id: 24826,
    in_HardwareItem: "Hardware_Aventos_HL_300_White",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.86.757",
    BomQty: 1
  }
  , {
    _id: 24827,
    in_HardwareItem: "Hardware_Aventos_HL_390_White",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.86.758",
    BomQty: 1
  }
  , {
    _id: 24828,
    in_HardwareItem: "Hardware_Aventos_HL_300_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.86.557",
    BomQty: 1
  }
  , {
    _id: 24829,
    in_HardwareItem: "Hardware_Aventos_HL_390_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.86.558",
    BomQty: 1
  }
  , {
    _id: 24830,
    in_HardwareItem: "Hardware_Aventos_HL_300_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.86.567",
    BomQty: 1
  }
  , {
    _id: 24831,
    in_HardwareItem: "Hardware_Aventos_HL_390_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.86.568",
    BomQty: 1
  }
  , {
    _id: 24832,
    in_HardwareItem: "Hardware_Aventos_HL_Mech1",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.86.681",
    BomQty: 1
  }
  , {
    _id: 24833,
    in_HardwareItem: "Hardware_Aventos_HL_Mech2",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.86.682",
    BomQty: 1
  }
  , {
    _id: 24834,
    in_HardwareItem: "Hardware_Aventos_HL_Mech3",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.86.683",
    BomQty: 1
  }
  , {
    _id: 24835,
    in_HardwareItem: "Hardware_Aventos_HL_Mech4",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.86.684",
    BomQty: 1
  }
  , {
    _id: 24836,
    in_HardwareItem: "Hardware_DropDown_L",
    Supplier: "Haefele",
    SupplierArticleNumber: "365.46.061",
    BomQty: 1
  }
  , {
    _id: 24837,
    in_HardwareItem: "Hardware_DropDown_R",
    Supplier: "Haefele",
    SupplierArticleNumber: "365.46.060",
    BomQty: 1
  }
  , {
    _id: 24838,
    in_HardwareItem: "Hardware_Aventos_HKXS_3",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.95.703",
    BomQty: 1
  }
  , {
    _id: 24839,
    in_HardwareItem: "Hardware_Aventos_HKXS_2",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.95.702",
    BomQty: 1
  }
  , {
    _id: 24840,
    in_HardwareItem: "Hardware_Aventos_HKXS_1",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.95.701",
    BomQty: 1
  }
  , {
    _id: 24841,
    in_HardwareItem: "Hardware_Aventos_HKXS_Front",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.95.780",
    BomQty: 1
  }
  , {
    _id: 24842,
    in_HardwareItem: "Hardware_Aventos_HKXS_Carcase",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.95.790",
    BomQty: 1
  }
  , {
    _id: 24843,
    in_HardwareItem: "HardwareHingeCenterForFHF",
    Supplier: "Haefele",
    SupplierArticleNumber: "372.74.990",
    BomQty: 1
  }
  , {
    _id: 24844,
    in_HardwareItem: "HardwareMPHorizontalBL0SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "342.22.060",
    BomQty: 1
  }
  , {
    _id: 24845,
    in_HardwareItem: "HardwareMPHorizontalBL3SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "342.22.063",
    BomQty: 1
  }
  , {
    _id: 24846,
    in_HardwareItem: "HardwareHingeCenterForFHF",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24847,
    in_HardwareItem: "HardwareMPHorizontalBL0SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24848,
    in_HardwareItem: "HardwareMPHorizontalBL3SS",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24849,
    in_HardwareItem: "HardwareHingeForDF",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 2
  }
  , {
    _id: 24850,
    in_HardwareItem: "HardwareHingeForDF",
    Supplier: "Haefele",
    SupplierArticleNumber: "342.78.700",
    BomQty: 1
  }
  , {
    _id: 24851,
    in_HardwareItem: "HardwareBracket01",
    Supplier: "Haefele",
    SupplierArticleNumber: "260.28.004",
    BomQty: 1
  }
  , {
    _id: 24852,
    in_HardwareItem: "HardwareBracket01",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 4
  }
  , {
    _id: 24853,
    in_HardwareItem: "HardwarePlinthLegTriangularPressH100",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.38.340",
    BomQty: 1
  }
  , {
    _id: 24854,
    in_HardwareItem: "HardwarePlinthLegTriangularPressH100",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.76.353",
    BomQty: 1
  }
  , {
    _id: 24855,
    in_HardwareItem: "HardwarePlinthLegTriangularPressH120",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.38.340",
    BomQty: 1
  }
  , {
    _id: 24856,
    in_HardwareItem: "HardwarePlinthLegTriangularPressH120",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.76.354",
    BomQty: 1
  }
  , {
    _id: 24857,
    in_HardwareItem: "HardwarePlinthLegTriangularPressH150",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.38.340",
    BomQty: 1
  }
  , {
    _id: 24858,
    in_HardwareItem: "HardwarePlinthLegTriangularPressH150",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.76.355",
    BomQty: 1
  }
  , {
    _id: 24859,
    in_HardwareItem: "HardwarePlinthLegRectangularScrewH100",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.76.333",
    BomQty: 1
  }
  , {
    _id: 24860,
    in_HardwareItem: "HardwarePlinthLegRectangularScrewH100",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.76.353",
    BomQty: 1
  }
  , {
    _id: 24861,
    in_HardwareItem: "HardwarePlinthLegRectangularScrewH120",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.76.333",
    BomQty: 1
  }
  , {
    _id: 24862,
    in_HardwareItem: "HardwarePlinthLegRectangularScrewH120",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.76.354",
    BomQty: 1
  }
  , {
    _id: 24863,
    in_HardwareItem: "HardwarePlinthLegRectangularScrewH150",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.76.333",
    BomQty: 1
  }
  , {
    _id: 24864,
    in_HardwareItem: "HardwarePlinthLegRectangularScrewH150",
    Supplier: "Haefele",
    SupplierArticleNumber: "637.76.355",
    BomQty: 1
  }
  , {
    _id: 24865,
    in_HardwareItem: "HardwareKeku01",
    Supplier: "Haefele",
    SupplierArticleNumber: "262.50.359",
    BomQty: 1
  }
  , {
    _id: 24866,
    in_HardwareItem: "HardwareKeku01",
    Supplier: "Haefele",
    SupplierArticleNumber: "262.50.368",
    BomQty: 1
  }
  , {
    _id: 24867,
    in_HardwareItem: "HardwareKeku01",
    Supplier: "Haefele",
    SupplierArticleNumber: "017.91.043",
    BomQty: 4
  }
  , {
    _id: 24868,
    in_HardwareItem: "Hard_DH100_Black_160",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.69.321",
    BomQty: 1
  }
  , {
    _id: 24869,
    in_HardwareItem: "Hard_DH100_Black_320",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.69.322",
    BomQty: 1
  }
  , {
    _id: 24870,
    in_HardwareItem: "Hard_DH100_Black_64",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.69.320",
    BomQty: 1
  }
  , {
    _id: 24871,
    in_HardwareItem: "Hard_DH100_NickelPlated_160",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.69.101",
    BomQty: 1
  }
  , {
    _id: 24872,
    in_HardwareItem: "Hard_DH100_NickelPlated_320",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.69.102",
    BomQty: 1
  }
  , {
    _id: 24873,
    in_HardwareItem: "Hard_DH100_NickelPlated_64",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.69.100",
    BomQty: 1
  }
  , {
    _id: 24874,
    in_HardwareItem: "Hard_DH100_Tin_160",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.69.311",
    BomQty: 1
  }
  , {
    _id: 24875,
    in_HardwareItem: "Hard_DH100_Tin_320",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.69.312",
    BomQty: 1
  }
  , {
    _id: 24876,
    in_HardwareItem: "Hard_DH100_Tin_64",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.69.310",
    BomQty: 1
  }
  , {
    _id: 24877,
    in_HardwareItem: "Hard_DH110_StainlessSteel_1060",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.101",
    BomQty: 1
  }
  , {
    _id: 24878,
    in_HardwareItem: "Hard_DH110_StainlessSteel_1160",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.102",
    BomQty: 1
  }
  , {
    _id: 24879,
    in_HardwareItem: "Hard_DH110_StainlessSteel_1260",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.103",
    BomQty: 1
  }
  , {
    _id: 24880,
    in_HardwareItem: "Hard_DH110_StainlessSteel_128",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.026",
    BomQty: 1
  }
  , {
    _id: 24881,
    in_HardwareItem: "Hard_DH110_StainlessSteel_1360",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.104",
    BomQty: 1
  }
  , {
    _id: 24882,
    in_HardwareItem: "Hard_DH110_StainlessSteel_1460",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.106",
    BomQty: 1
  }
  , {
    _id: 24883,
    in_HardwareItem: "Hard_DH110_StainlessSteel_1560",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.107",
    BomQty: 1
  }
  , {
    _id: 24884,
    in_HardwareItem: "Hard_DH110_StainlessSteel_160",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.035",
    BomQty: 1
  }
  , {
    _id: 24885,
    in_HardwareItem: "Hard_DH110_StainlessSteel_1760",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.108",
    BomQty: 1
  }
  , {
    _id: 24886,
    in_HardwareItem: "Hard_DH110_StainlessSteel_1960",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.109",
    BomQty: 1
  }
  , {
    _id: 24887,
    in_HardwareItem: "Hard_DH110_StainlessSteel_210",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.044",
    BomQty: 1
  }
  , {
    _id: 24888,
    in_HardwareItem: "Hard_DH110_StainlessSteel_260",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.045",
    BomQty: 1
  }
  , {
    _id: 24889,
    in_HardwareItem: "Hard_DH110_StainlessSteel_310",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.050",
    BomQty: 1
  }
  , {
    _id: 24890,
    in_HardwareItem: "Hard_DH110_StainlessSteel_360",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.064",
    BomQty: 1
  }
  , {
    _id: 24891,
    in_HardwareItem: "Hard_DH110_StainlessSteel_410",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.065",
    BomQty: 1
  }
  , {
    _id: 24892,
    in_HardwareItem: "Hard_DH110_StainlessSteel_460",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.075",
    BomQty: 1
  }
  , {
    _id: 24893,
    in_HardwareItem: "Hard_DH110_StainlessSteel_560",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.080",
    BomQty: 1
  }
  , {
    _id: 24894,
    in_HardwareItem: "Hard_DH110_StainlessSteel_660",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.085",
    BomQty: 1
  }
  , {
    _id: 24895,
    in_HardwareItem: "Hard_DH110_StainlessSteel_760",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.090",
    BomQty: 1
  }
  , {
    _id: 24896,
    in_HardwareItem: "Hard_DH110_StainlessSteel_860",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.095",
    BomQty: 1
  }
  , {
    _id: 24897,
    in_HardwareItem: "Hard_DH110_StainlessSteel_96",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.017",
    BomQty: 1
  }
  , {
    _id: 24898,
    in_HardwareItem: "Hard_DH110_StainlessSteel_960",
    Supplier: "Haefele",
    SupplierArticleNumber: "117.66.100",
    BomQty: 1
  }
  , {
    _id: 24899,
    in_HardwareItem: "Hard_DH120_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "112.02.105",
    BomQty: 1
  }
  , {
    _id: 24900,
    in_HardwareItem: "Hard_DH120_StainlessSteel",
    Supplier: "Haefele",
    SupplierArticleNumber: "155.01.486",
    BomQty: 1
  }
  , {
    _id: 24901,
    in_HardwareItem: "Hard_DH130_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "110.35.393",
    BomQty: 1
  }
  , {
    _id: 24902,
    in_HardwareItem: "Hard_DH130_BrassPlatedAntique",
    Supplier: "Haefele",
    SupplierArticleNumber: "110.35.392",
    BomQty: 1
  }
  , {
    _id: 24903,
    in_HardwareItem: "Hard_DH130_StainlessSteel",
    Supplier: "Haefele",
    SupplierArticleNumber: "110.35.394",
    BomQty: 1
  }
  , {
    _id: 24904,
    in_HardwareItem: "Hard_BH_128",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.251",
    BomQty: 1
  }
  , {
    _id: 24905,
    in_HardwareItem: "Hard_BH_160",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.252",
    BomQty: 1
  }
  , {
    _id: 24906,
    in_HardwareItem: "Hard_BH_192",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.253",
    BomQty: 1
  }
  , {
    _id: 24907,
    in_HardwareItem: "Hard_BH_224",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.254",
    BomQty: 1
  }
  , {
    _id: 24908,
    in_HardwareItem: "Hard_BH_288",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.255",
    BomQty: 1
  }
  , {
    _id: 24909,
    in_HardwareItem: "Hard_BH_320",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.256",
    BomQty: 1
  }
  , {
    _id: 24910,
    in_HardwareItem: "Hard_BH_352",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.257",
    BomQty: 1
  }
  , {
    _id: 24911,
    in_HardwareItem: "Hard_BH_448",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.258",
    BomQty: 1
  }
  , {
    _id: 24912,
    in_HardwareItem: "Hard_BH_480",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.259",
    BomQty: 1
  }
  , {
    _id: 24913,
    in_HardwareItem: "Hard_BH_560",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.260",
    BomQty: 1
  }
  , {
    _id: 24914,
    in_HardwareItem: "Hard_BH_640",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.261",
    BomQty: 1
  }
  , {
    _id: 24915,
    in_HardwareItem: "Hard_BH_96",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.250",
    BomQty: 1
  }
  , {
    _id: 24916,
    in_HardwareItem: "Hard_BH_960",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.262",
    BomQty: 1
  }
  , {
    _id: 24917,
    in_HardwareItem: "Hard_RH_128",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.381",
    BomQty: 1
  }
  , {
    _id: 24918,
    in_HardwareItem: "Hard_RH_160",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.382",
    BomQty: 1
  }
  , {
    _id: 24919,
    in_HardwareItem: "Hard_RH_192",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.383",
    BomQty: 1
  }
  , {
    _id: 24920,
    in_HardwareItem: "Hard_RH_224",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.384",
    BomQty: 1
  }
  , {
    _id: 24921,
    in_HardwareItem: "Hard_RH_288",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.385",
    BomQty: 1
  }
  , {
    _id: 24922,
    in_HardwareItem: "Hard_RH_320",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.386",
    BomQty: 1
  }
  , {
    _id: 24923,
    in_HardwareItem: "Hard_RH_352",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.387",
    BomQty: 1
  }
  , {
    _id: 24924,
    in_HardwareItem: "Hard_RH_448",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.388",
    BomQty: 1
  }
  , {
    _id: 24925,
    in_HardwareItem: "Hard_RH_560",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.389",
    BomQty: 1
  }
  , {
    _id: 24926,
    in_HardwareItem: "Hard_RH_660",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.390",
    BomQty: 1
  }
  , {
    _id: 24927,
    in_HardwareItem: "Hard_RH_760",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.391",
    BomQty: 1
  }
  , {
    _id: 24928,
    in_HardwareItem: "Hard_RH_96",
    Supplier: "DemoSupplier",
    SupplierArticleNumber: "155.01.380",
    BomQty: 1
  }
  , {
    _id: 24929,
    in_HardwareItem: "Hard_DH60_Black_128",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.62.425",
    BomQty: 1
  }
  , {
    _id: 24930,
    in_HardwareItem: "Hard_DH60_Black_160",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.62.426",
    BomQty: 1
  }
  , {
    _id: 24931,
    in_HardwareItem: "Hard_DH60_BrassPlatedAntique_128",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.62.525",
    BomQty: 1
  }
  , {
    _id: 24932,
    in_HardwareItem: "Hard_DH60_BrassPlatedAntique_160",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.62.526",
    BomQty: 1
  }
  , {
    _id: 24933,
    in_HardwareItem: "Hard_DH60_ChromedPolished_128",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.62.225",
    BomQty: 1
  }
  , {
    _id: 24934,
    in_HardwareItem: "Hard_DH60_ChromedPolished_160",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.62.226",
    BomQty: 1
  }
  , {
    _id: 24935,
    in_HardwareItem: "Hard_DH60_NickelPlated_128",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.62.625",
    BomQty: 1
  }
  , {
    _id: 24936,
    in_HardwareItem: "Hard_DH60_NickelPlated_160",
    Supplier: "Haefele",
    SupplierArticleNumber: "106.62.626",
    BomQty: 1
  }
  , {
    _id: 24937,
    in_HardwareItem: "Hard_No15_Classic_Silver_Right",
    Supplier: "Haefele",
    SupplierArticleNumber: "595.18.260",
    BomQty: 1
  }
  , {
    _id: 24938,
    in_HardwareItem: "Hard_No15_Classic_Anthrazit_Right",
    Supplier: "Haefele",
    SupplierArticleNumber: "595.18.260",
    BomQty: 1
  }
  , {
    _id: 24939,
    in_HardwareItem: "Hard_No15_Classic_Silver_Left",
    Supplier: "Haefele",
    SupplierArticleNumber: "595.18.260",
    BomQty: 1
  }
  , {
    _id: 24940,
    in_HardwareItem: "Hard_No15_Classic_Anthrazit_Left",
    Supplier: "Haefele",
    SupplierArticleNumber: "595.18.260",
    BomQty: 1
  }
  , {
    _id: 24941,
    in_HardwareItem: "Hard_No15_Style_Silver_Right",
    Supplier: "Haefele",
    SupplierArticleNumber: "595.18.260",
    BomQty: 1
  }
  , {
    _id: 24942,
    in_HardwareItem: "Hard_No15_Style_Anthrazit_Right",
    Supplier: "Haefele",
    SupplierArticleNumber: "595.18.260",
    BomQty: 1
  }
  , {
    _id: 24943,
    in_HardwareItem: "Hard_No15_Style_Silver_Left",
    Supplier: "Haefele",
    SupplierArticleNumber: "595.18.260",
    BomQty: 1
  }
  , {
    _id: 24944,
    in_HardwareItem: "Hard_No15_Style_Anthrazit_Left",
    Supplier: "Haefele",
    SupplierArticleNumber: "595.18.260",
    BomQty: 1
  }
  , {
    _id: 24945,
    in_HardwareItem: "HardwareDispensaClassic16030",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.911",
    BomQty: 1
  }
  , {
    _id: 24946,
    in_HardwareItem: "HardwareDispensaClassic19030",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.921",
    BomQty: 1
  }
  , {
    _id: 24947,
    in_HardwareItem: "HardwareDispensaClassic23030",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.931",
    BomQty: 1
  }
  , {
    _id: 24948,
    in_HardwareItem: "HardwareDispensaClassic16040",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.913",
    BomQty: 1
  }
  , {
    _id: 24949,
    in_HardwareItem: "HardwareDispensaClassic19040",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.923",
    BomQty: 1
  }
  , {
    _id: 24950,
    in_HardwareItem: "HardwareDispensaClassic23040",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.933",
    BomQty: 1
  }
  , {
    _id: 24951,
    in_HardwareItem: "HardwareDispensaStyle16030_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.911",
    BomQty: 1
  }
  , {
    _id: 24952,
    in_HardwareItem: "HardwareDispensaStyle19030_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.921",
    BomQty: 1
  }
  , {
    _id: 24953,
    in_HardwareItem: "HardwareDispensaStyle23030_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.931",
    BomQty: 1
  }
  , {
    _id: 24954,
    in_HardwareItem: "HardwareDispensaStyle16040_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.913",
    BomQty: 1
  }
  , {
    _id: 24955,
    in_HardwareItem: "HardwareDispensaStyle19040_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.923",
    BomQty: 1
  }
  , {
    _id: 24956,
    in_HardwareItem: "HardwareDispensaStyle23040_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.933",
    BomQty: 1
  }
  , {
    _id: 24957,
    in_HardwareItem: "HardwareDispensaStyle16030_Anthrazit",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.711",
    BomQty: 1
  }
  , {
    _id: 24958,
    in_HardwareItem: "HardwareDispensaStyle19030_Anthrazit",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.721",
    BomQty: 1
  }
  , {
    _id: 24959,
    in_HardwareItem: "HardwareDispensaStyle23030_Anthrazit",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.731",
    BomQty: 1
  }
  , {
    _id: 24960,
    in_HardwareItem: "HardwareDispensaStyle16040_Anthrazit",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.713",
    BomQty: 1
  }
  , {
    _id: 24961,
    in_HardwareItem: "HardwareDispensaStyle19040_Anthrazit",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.723",
    BomQty: 1
  }
  , {
    _id: 24962,
    in_HardwareItem: "HardwareDispensaStyle23040_Anthrazit",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.59.733",
    BomQty: 1
  }
  , {
    _id: 24963,
    in_HardwareItem: "HardwareDispensaClassic30",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.75.243",
    BomQty: 1
  }
  , {
    _id: 24964,
    in_HardwareItem: "HardwareDispensaClassic40",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.75.244",
    BomQty: 1
  }
  , {
    _id: 24965,
    in_HardwareItem: "HardwareDispensaStyle30_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.75.253",
    BomQty: 1
  }
  , {
    _id: 24966,
    in_HardwareItem: "HardwareDispensaStyle40_Grey",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.75.254",
    BomQty: 1
  }
  , {
    _id: 24967,
    in_HardwareItem: "HardwareDispensaStyle30_Anthrazit",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.75.453",
    BomQty: 1
  }
  , {
    _id: 24968,
    in_HardwareItem: "HardwareDispensaStyle40_Anthrazit",
    Supplier: "Haefele",
    SupplierArticleNumber: "546.75.459",
    BomQty: 1
  }
  , {
    _id: 24969,
    in_HardwareItem: "HardwConero625",
    Supplier: "Kesseboehmer",
    SupplierArticleNumber: "Conero625",
    BomQty: 1
  }
  , {
    _id: 24970,
    in_HardwareItem: "HardwConeroH72",
    Supplier: "Haefele",
    SupplierArticleNumber: "811.67.303",
    BomQty: 1
  }
  , {
    _id: 24971,
    in_HardwareItem: "Handle_140_StainlessSteel",
    Supplier: "Haefele",
    SupplierArticleNumber: "151.01.505",
    BomQty: 1
  }
  , {
    _id: 24972,
    in_HardwareItem: "Handle_140_Black",
    Supplier: "Haefele",
    SupplierArticleNumber: "151.38.111",
    BomQty: 1
  }
  , {
    _id: 24973,
    in_HardwareItem: "HardwConeroRigid_Right",
    Supplier: "Haefele",
    SupplierArticleNumber: "811.61.381",
    BomQty: 1
  }
  , {
    _id: 24974,
    in_HardwareItem: "HardwConeroRigid_Left",
    Supplier: "Haefele",
    SupplierArticleNumber: "811.61.381",
    BomQty: 1
  }
];
