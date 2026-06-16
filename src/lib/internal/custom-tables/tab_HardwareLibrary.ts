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

export interface cti_tab_HardwareLibrary {
  readonly in_Supplier?: string;
  readonly in_SupplierArticleNumber?: string;
}

export interface ctm_tab_HardwareLibrary {
}

export interface cto_tab_HardwareLibrary extends ctm_tab_HardwareLibrary {
  readonly _id: number;
  readonly Description?: string;
  readonly Description2?: string;
  readonly Length: number;
  readonly Width: number;
  readonly Thickness: number;
  readonly Weight?: number;
  readonly UnitOfWeight?: string;
  readonly Color?: string;
  readonly Category?: string;
}

export interface ICT_tab_HardwareLibrary
  extends cti_tab_HardwareLibrary, cto_tab_HardwareLibrary { }

export class ct2_tab_HardwareLibrary {

  public findExactly(
    in_Supplier: string | undefined,
    in_SupplierArticleNumber: string | undefined,
  ): cto_tab_HardwareLibrary | undefined {
    const res = ct_tab_HardwareLibrary.find((p) =>
      p.in_Supplier === in_Supplier
      && p.in_SupplierArticleNumber === in_SupplierArticleNumber
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_HardwareLibrary) => boolean
  ): cto_tab_HardwareLibrary | undefined {
    for (let index = 0; index < ct_tab_HardwareLibrary.length; index++) {
      const element = ct_tab_HardwareLibrary[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_HardwareLibrary: ICT_tab_HardwareLibrary[] = [
  {
    _id: 7616,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N4002S-TS",
    Description: "Zargenset Legrabox N 400",
    Description2: "Terraschwarz",
    Length: 400,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7617,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N4002S-OG",
    Description: "Zargenset Legrabox N 400",
    Description2: "Oriongrau",
    Length: 400,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7618,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N4002S-PS",
    Description: "Zargenset Legrabox N 400",
    Description2: "Polarsilber",
    Length: 400,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7619,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N4002S-SW",
    Description: "Zargenset Legrabox N 400",
    Description2: "Seidenweiss",
    Length: 400,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7620,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N4502S-TS",
    Description: "Zargenset Legrabox N 450",
    Description2: "Terraschwarz",
    Length: 450,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7621,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N4502S-OG",
    Description: "Zargenset Legrabox N 450",
    Description2: "Oriongrau",
    Length: 450,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7622,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N4502S-PS",
    Description: "Zargenset Legrabox N 450",
    Description2: "Polarsilber",
    Length: 450,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7623,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N4502S-SW",
    Description: "Zargenset Legrabox N 450",
    Description2: "Seidenweiss",
    Length: 450,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7624,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N5002S-TS",
    Description: "Zargenset Legrabox N 500",
    Description2: "Terraschwarz",
    Length: 500,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7625,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N5002S-OG",
    Description: "Zargenset Legrabox N 500",
    Description2: "Oriongrau",
    Length: 500,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7626,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N5002S-PS",
    Description: "Zargenset Legrabox N 500",
    Description2: "Polarsilber",
    Length: 500,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7627,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N5002S-SW",
    Description: "Zargenset Legrabox N 500",
    Description2: "Seidenweiss",
    Length: 500,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7628,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N5502S-TS",
    Description: "Zargenset Legrabox N 550",
    Description2: "Terraschwarz",
    Length: 550,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7629,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N5502S-OG",
    Description: "Zargenset Legrabox N 550",
    Description2: "Oriongrau",
    Length: 550,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7630,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N5502S-PS",
    Description: "Zargenset Legrabox N 550",
    Description2: "Polarsilber",
    Length: 550,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7631,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770N5502S-SW",
    Description: "Zargenset Legrabox N 550",
    Description2: "Seidenweiss",
    Length: 550,
    Width: 0,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7632,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M3002S-TS",
    Description: "Zargenset Legrabox M 300",
    Description2: "Terraschwarz",
    Length: 300,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7633,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M3002S-OG",
    Description: "Zargenset Legrabox M 300",
    Description2: "Oriongrau",
    Length: 300,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7634,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M3002S-PS",
    Description: "Zargenset Legrabox M 300",
    Description2: "Polarsilber",
    Length: 300,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7635,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M3002S-SW",
    Description: "Zargenset Legrabox M 300",
    Description2: "Seidenweiss",
    Length: 300,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7636,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M4002S-TS",
    Description: "Zargenset Legrabox M 400",
    Description2: "Terraschwarz",
    Length: 400,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7637,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M4002S-OG",
    Description: "Zargenset Legrabox M 400",
    Description2: "Oriongrau",
    Length: 400,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7638,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M4002S-PS",
    Description: "Zargenset Legrabox M 400",
    Description2: "Polarsilber",
    Length: 400,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7639,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M4002S-SW",
    Description: "Zargenset Legrabox M 400",
    Description2: "Seidenweiss",
    Length: 400,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7640,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M4502S-TS",
    Description: "Zargenset Legrabox M 450",
    Description2: "Terraschwarz",
    Length: 450,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7641,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M4502S-OG",
    Description: "Zargenset Legrabox M 450",
    Description2: "Oriongrau",
    Length: 450,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7642,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M4502S-PS",
    Description: "Zargenset Legrabox M 450",
    Description2: "Polarsilber",
    Length: 450,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7643,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M4502S-SW",
    Description: "Zargenset Legrabox M 450",
    Description2: "Seidenweiss",
    Length: 450,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7644,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M5002S-TS",
    Description: "Zargenset Legrabox M 500",
    Description2: "Terraschwarz",
    Length: 500,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7645,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M5002S-OG",
    Description: "Zargenset Legrabox M 500",
    Description2: "Oriongrau",
    Length: 500,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7646,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M5002S-PS",
    Description: "Zargenset Legrabox M 500",
    Description2: "Polarsilber",
    Length: 500,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7647,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M5002S-SW",
    Description: "Zargenset Legrabox M 500",
    Description2: "Seidenweiss",
    Length: 500,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7648,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M5502S-TS",
    Description: "Zargenset Legrabox M 550",
    Description2: "Terraschwarz",
    Length: 550,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7649,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M5502S-OG",
    Description: "Zargenset Legrabox M 550",
    Description2: "Oriongrau",
    Length: 550,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7650,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M5502S-PS",
    Description: "Zargenset Legrabox M 550",
    Description2: "Polarsilber",
    Length: 550,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7651,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770M5502S-SW",
    Description: "Zargenset Legrabox M 550",
    Description2: "Seidenweiss",
    Length: 550,
    Width: 0,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7652,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C3002S-TS",
    Description: "Zargenset Legrabox C 300",
    Description2: "Terraschwarz",
    Length: 300,
    Width: 0,
    Thickness: 193,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7653,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C3002S-OG",
    Description: "Zargenset Legrabox C 300",
    Description2: "Oriongrau",
    Length: 300,
    Width: 0,
    Thickness: 193,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7654,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C3002S-PS",
    Description: "Zargenset Legrabox C 300",
    Description2: "Polarsilber",
    Length: 300,
    Width: 0,
    Thickness: 193,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7655,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C3002S-SW",
    Description: "Zargenset Legrabox C 300",
    Description2: "Seidenweiss",
    Length: 300,
    Width: 0,
    Thickness: 193,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7656,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C4002S-TS",
    Description: "Zargenset Legrabox C 400",
    Description2: "Terraschwarz",
    Length: 400,
    Width: 0,
    Thickness: 193,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7657,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C4002S-OG",
    Description: "Zargenset Legrabox C 400",
    Description2: "Oriongrau",
    Length: 400,
    Width: 0,
    Thickness: 193,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7658,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C4002S-PS",
    Description: "Zargenset Legrabox C 400",
    Description2: "Polarsilber",
    Length: 400,
    Width: 0,
    Thickness: 193,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7659,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C4002S-SW",
    Description: "Zargenset Legrabox C 400",
    Description2: "Seidenweiss",
    Length: 400,
    Width: 0,
    Thickness: 193,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7660,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770F4002S-TS",
    Description: "Zargenset Legrabox F 400",
    Description2: "Terraschwarz",
    Length: 400,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7661,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770F4002S-OG",
    Description: "Zargenset Legrabox F 400",
    Description2: "Oriongrau",
    Length: 400,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7662,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770F4002S-PS",
    Description: "Zargenset Legrabox F 400",
    Description2: "Polarsilber",
    Length: 400,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7663,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770F4002S-SW",
    Description: "Zargenset Legrabox F 400",
    Description2: "Seidenweiss",
    Length: 400,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7664,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C4502S-TS",
    Description: "Zargenset Legrabox F 450",
    Description2: "Terraschwarz",
    Length: 450,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7665,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C4502S-OG",
    Description: "Zargenset Legrabox F 450",
    Description2: "Oriongrau",
    Length: 450,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7666,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C4502S-PS",
    Description: "Zargenset Legrabox F 450",
    Description2: "Polarsilber",
    Length: 450,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7667,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C4502S-SW",
    Description: "Zargenset Legrabox F 450",
    Description2: "Seidenweiss",
    Length: 450,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7668,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C5002S-TS",
    Description: "Zargenset Legrabox F 500",
    Description2: "Terraschwarz",
    Length: 500,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7669,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C5002S-OG",
    Description: "Zargenset Legrabox F 500",
    Description2: "Oriongrau",
    Length: 500,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7670,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C5002S-PS",
    Description: "Zargenset Legrabox F 500",
    Description2: "Polarsilber",
    Length: 500,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7671,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C5002S-SW",
    Description: "Zargenset Legrabox F 500",
    Description2: "Seidenweiss",
    Length: 500,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7672,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C5502S-TS",
    Description: "Zargenset Legrabox F 550",
    Description2: "Terraschwarz",
    Length: 550,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7673,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C5502S-OG",
    Description: "Zargenset Legrabox F 550",
    Description2: "Oriongrau",
    Length: 550,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7674,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C5502S-PS",
    Description: "Zargenset Legrabox F 550",
    Description2: "Polarsilber",
    Length: 550,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7675,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "770C5502S-SW",
    Description: "Zargenset Legrabox F 550",
    Description2: "Seidenweiss",
    Length: 550,
    Width: 0,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7676,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "750.3001S",
    Description: "Fuehrung 300 40kg",
    Description2: "",
    Length: 300,
    Width: 72,
    Thickness: 50,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7677,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "750.4001S",
    Description: "Fuehrung 400 40kg",
    Description2: "",
    Length: 400,
    Width: 72,
    Thickness: 50,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7678,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "750.4501S",
    Description: "Fuehrung 450 40kg",
    Description2: "",
    Length: 450,
    Width: 72,
    Thickness: 50,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7679,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "750.5001S",
    Description: "Fuehrung 500 40kg",
    Description2: "",
    Length: 500,
    Width: 72,
    Thickness: 50,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7680,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "750.5501S",
    Description: "Fuehrung 550 40kg",
    Description2: "",
    Length: 550,
    Width: 72,
    Thickness: 50,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7681,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "753.4501S",
    Description: "Fuehrung 450 70kg",
    Description2: "",
    Length: 450,
    Width: 72,
    Thickness: 50,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7682,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "753.5001S",
    Description: "Fuehrung 500 70kg",
    Description2: "",
    Length: 500,
    Width: 72,
    Thickness: 50,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7683,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "753.5501S",
    Description: "Fuehrung 550 70kg",
    Description2: "",
    Length: 550,
    Width: 72,
    Thickness: 50,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7684,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "ZF7N000S",
    Description: "Rueckwandhalter N",
    Description2: "",
    Length: 10,
    Width: 20,
    Thickness: 80,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7685,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "ZF7M000S",
    Description: "Rueckwandhalter M",
    Description2: "",
    Length: 10,
    Width: 20,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7686,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "ZF7C000S",
    Description: "Rueckwandhalter C",
    Description2: "",
    Length: 10,
    Width: 20,
    Thickness: 193,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7687,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "ZF7F000S",
    Description: "Rueckwandhalter F",
    Description2: "",
    Length: 10,
    Width: 20,
    Thickness: 257,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7688,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "ZF7N7002",
    Description: "Frontbefestigung N",
    Description2: "",
    Length: 10,
    Width: 6,
    Thickness: 45,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7689,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "ZF7M70E2",
    Description: "Frontbefestigung M",
    Description2: "",
    Length: 10,
    Width: 6,
    Thickness: 55,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7690,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "ZF7C70E2",
    Description: "Frontbefestigung C",
    Description2: "",
    Length: 10,
    Width: 6,
    Thickness: 110,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7691,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "ZF7F70E2",
    Description: "Frontbefestigung F",
    Description2: "",
    Length: 10,
    Width: 6,
    Thickness: 170,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7692,
    in_Supplier: "Blum",
    in_SupplierArticleNumber: "4711",
    Description: "",
    Description2: "",
    Length: 35,
    Width: 35,
    Thickness: 10,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7693,
    in_Supplier: "Camar",
    in_SupplierArticleNumber: "80702E1RV",
    Description: "Hanger system",
    Description2: "",
    Length: 92,
    Width: 25,
    Thickness: 55,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "",
    Category: ""
  }
  , {
    _id: 7694,
    in_Supplier: "Homag",
    in_SupplierArticleNumber: "DemoHandle50Upper",
    Description: "Upper Handlestrip 50",
    Description2: "Color Green",
    Length: 300,
    Width: 46,
    Thickness: 19,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7695,
    in_Supplier: "Homag",
    in_SupplierArticleNumber: "DemoHandle50Bottom",
    Description: "BottomHandlestrip 50",
    Description2: "Color Green",
    Length: 300,
    Width: 17,
    Thickness: 19,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7696,
    in_Supplier: "Homag",
    in_SupplierArticleNumber: "DemoHandle60Bottom",
    Description: "Bottom Handlestrip 60",
    Description2: "Color Blue",
    Length: 0,
    Width: 17,
    Thickness: 19,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7697,
    in_Supplier: "Homag",
    in_SupplierArticleNumber: "DemoHandle60Upper",
    Description: "Right Handlestrip 60",
    Description2: "Color Blue",
    Length: 0,
    Width: 46,
    Thickness: 19,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7698,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.380",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 136,
    Width: 35,
    Thickness: 10,
    Weight: 0.135,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7699,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.381",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 168,
    Width: 35,
    Thickness: 10,
    Weight: 2,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7700,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.382",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 200,
    Width: 35,
    Thickness: 10,
    Weight: 0.155,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7701,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.383",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 232,
    Width: 35,
    Thickness: 10,
    Weight: 0.165,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7702,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.384",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 264,
    Width: 35,
    Thickness: 10,
    Weight: 0.175,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7703,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.385",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 328,
    Width: 35,
    Thickness: 10,
    Weight: 0.135,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7704,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.386",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 360,
    Width: 35,
    Thickness: 10,
    Weight: 0.25,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7705,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.387",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 392,
    Width: 35,
    Thickness: 10,
    Weight: 0.275,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7706,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.388",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 488,
    Width: 35,
    Thickness: 10,
    Weight: 0.35,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7707,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.389",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 600,
    Width: 35,
    Thickness: 10,
    Weight: 0.45,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7708,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.390",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 700,
    Width: 35,
    Thickness: 10,
    Weight: 0.5,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7709,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.391",
    Description: "Relining handle",
    Description2: "Stainless steel, matt brushed",
    Length: 800,
    Width: 35,
    Thickness: 10,
    Weight: 0.6,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7710,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.250",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 108,
    Width: 35,
    Thickness: 12,
    Weight: 0.135,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7711,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.251",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 140,
    Width: 35,
    Thickness: 12,
    Weight: 0.165,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7712,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.252",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 172,
    Width: 35,
    Thickness: 12,
    Weight: 0.2,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7713,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.253",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 204,
    Width: 35,
    Thickness: 12,
    Weight: 0.225,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7714,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.254",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 236,
    Width: 35,
    Thickness: 12,
    Weight: 0.25,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7715,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.255",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 300,
    Width: 35,
    Thickness: 12,
    Weight: 0.3,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7716,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.256",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 332,
    Width: 35,
    Thickness: 12,
    Weight: 0.325,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7717,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.257",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 364,
    Width: 35,
    Thickness: 12,
    Weight: 0.35,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7718,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.258",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 460,
    Width: 35,
    Thickness: 12,
    Weight: 0.4,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7719,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.259",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 492,
    Width: 35,
    Thickness: 12,
    Weight: 0.425,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7720,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.260",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 572,
    Width: 35,
    Thickness: 12,
    Weight: 0.135,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7721,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.261",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 652,
    Width: 35,
    Thickness: 12,
    Weight: 0.135,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7722,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.262",
    Description: "Bracket handle",
    Description2: "Stainless steel, matt brushed",
    Length: 972,
    Width: 35,
    Thickness: 12,
    Weight: 0.135,
    UnitOfWeight: "kg",
    Color: "StainlessSteelMattBrushed",
    Category: "Handle"
  }
  , {
    _id: 7723,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.001",
    Description: "Stripe1",
    Description2: "stainless steel color, anodized",
    Length: 295,
    Width: 37,
    Thickness: 19,
    Weight: 0.15,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7724,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.002",
    Description: "Stripe1",
    Description2: "stainless steel color, anodized",
    Length: 395,
    Width: 37,
    Thickness: 19,
    Weight: 0.16,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7725,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.003",
    Description: "Stripe1",
    Description2: "stainless steel color, anodized",
    Length: 445,
    Width: 37,
    Thickness: 19,
    Weight: 0.17,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7726,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.004",
    Description: "Stripe1",
    Description2: "stainless steel color, anodized",
    Length: 495,
    Width: 37,
    Thickness: 19,
    Weight: 0.18,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7727,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.005",
    Description: "Stripe1",
    Description2: "stainless steel color, anodized",
    Length: 595,
    Width: 37,
    Thickness: 19,
    Weight: 0.19,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7728,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.006",
    Description: "Stripe1",
    Description2: "stainless steel color, anodized",
    Length: 795,
    Width: 37,
    Thickness: 19,
    Weight: 0.2,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7729,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.007",
    Description: "Stripe1",
    Description2: "stainless steel color, anodized",
    Length: 895,
    Width: 37,
    Thickness: 19,
    Weight: 0.21,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7730,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.008",
    Description: "Stripe1",
    Description2: "stainless steel color, anodized",
    Length: 998,
    Width: 37,
    Thickness: 19,
    Weight: 0.22,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7731,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.009",
    Description: "Stripe1",
    Description2: "stainless steel color, anodized",
    Length: 1195,
    Width: 37,
    Thickness: 19,
    Weight: 0.23,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7732,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.012",
    Description: "Stripe1",
    Description2: "stainless steel color, anodized",
    Length: 2500,
    Width: 37,
    Thickness: 19,
    Weight: 0.25,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7733,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.38.925_B",
    Description: "Stripe 2",
    Description2: "Silver",
    Length: 2500,
    Width: 21.5,
    Thickness: 18,
    Weight: 0.25,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 7734,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.38.925",
    Description: "Stripe with 30° angle",
    Description2: "Aluminium,  silver anodised",
    Length: 2500,
    Width: 18,
    Thickness: 21.5,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Edelstahl",
    Category: ""
  }
  , {
    _id: 7735,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "155.01.632",
    Description: "Stripe with c -profil",
    Description2: "Stainless steel coloured, anodised",
    Length: 2500,
    Width: 35,
    Thickness: 20.5,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: ""
  }
  , {
    _id: 7736,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.001_Ang",
    Description: "Stripe amgular",
    Description2: "Stainless steel coloured, anodised",
    Length: 295,
    Width: 3,
    Thickness: 37,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: ""
  }
  , {
    _id: 7737,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.002_Ang",
    Description: "Stripe amgular",
    Description2: "Stainless steel coloured, anodised",
    Length: 395,
    Width: 3,
    Thickness: 37,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: ""
  }
  , {
    _id: 7738,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.003_Ang",
    Description: "Stripe amgular",
    Description2: "Stainless steel coloured, anodised",
    Length: 445,
    Width: 3,
    Thickness: 37,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: ""
  }
  , {
    _id: 7739,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.004_Ang",
    Description: "Stripe amgular",
    Description2: "Stainless steel coloured, anodised",
    Length: 495,
    Width: 3,
    Thickness: 37,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: ""
  }
  , {
    _id: 7740,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.005_Ang",
    Description: "Stripe amgular",
    Description2: "Stainless steel coloured, anodised",
    Length: 595,
    Width: 3,
    Thickness: 37,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: ""
  }
  , {
    _id: 7741,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.006_Ang",
    Description: "Stripe amgular",
    Description2: "Stainless steel coloured, anodised",
    Length: 795,
    Width: 3,
    Thickness: 37,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: ""
  }
  , {
    _id: 7742,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.007_Ang",
    Description: "Stripe amgular",
    Description2: "Stainless steel coloured, anodised",
    Length: 895,
    Width: 3,
    Thickness: 37,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: ""
  }
  , {
    _id: 7743,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.008_Ang",
    Description: "Stripe amgular",
    Description2: "Stainless steel coloured, anodised",
    Length: 995,
    Width: 3,
    Thickness: 37,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: ""
  }
  , {
    _id: 7744,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.009_Ang",
    Description: "Stripe amgular",
    Description2: "Stainless steel coloured, anodised",
    Length: 1195,
    Width: 3,
    Thickness: 37,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: ""
  }
  , {
    _id: 7745,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "126.26.012_Ang",
    Description: "Stripe amgular",
    Description2: "Stainless steel coloured, anodised",
    Length: 2500,
    Width: 3,
    Thickness: 37,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: ""
  }
  , {
    _id: 7746,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.81.302",
    Description: "PlinthLegMountingPlate",
    Description2: "Plastic, Press",
    Length: 95,
    Width: 78,
    Thickness: 36,
    Weight: 0.5,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7747,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.81.311",
    Description: "PlinthLegLengthAdapter",
    Description2: "Plastic, High 80",
    Length: 45,
    Width: 45,
    Thickness: 78,
    Weight: 0.4,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7748,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.81.321",
    Description: "PlinthLegADjustableLeg",
    Description2: "Plastic",
    Length: 78,
    Width: 78,
    Thickness: 59,
    Weight: 0.4,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7749,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.76.333",
    Description: "Bef.Platte Axilo 78 schw.viereck.schrb.",
    Description2: "Befestigungsplatte, für Sockelsystem Häfele AXILO® 78",
    Length: 97,
    Width: 79,
    Thickness: 25,
    Weight: 300,
    UnitOfWeight: "gram",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7750,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.76.352",
    Description: "Rohr Axilo 78 Kst.schw.m.Verstellt. 80mm",
    Description2: "Rohr mit Einschraubgleiter, für Sockelsystem Häfele AXILO® 78",
    Length: 79,
    Width: 79,
    Thickness: 77,
    Weight: 0.225,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7751,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.76.424",
    Description: "Schallentkopplung Axilo 78 hellgrau",
    Description2: "Schallentkopplung, für Sockelsystem Häfele AXILO® 78",
    Length: 55,
    Width: 55,
    Thickness: 18,
    Weight: 0.05,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7752,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.38.340",
    Description: "Dreieckgleit.Kst.schw.95x95x25 EP",
    Description2: "Befestigungsplatte, für Sockelsystem Häfele AXILO® 78",
    Length: 100,
    Width: 100,
    Thickness: 47,
    Weight: 0.28,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7753,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.76.422",
    Description: "Distanzring Axilo 78 schwarz",
    Description2: "Distanzring, für Sockelsystem Häfele AXILO® 78",
    Length: 52,
    Width: 52,
    Thickness: 18,
    Weight: 0.4,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7754,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.76.423",
    Description: "Kappe D 38 Axilo 78 hellgrau",
    Description2: "ABS-Einsatz, für Sockelsystem Häfele AXILO® 78",
    Length: 38.2,
    Width: 38.2,
    Thickness: 10.5,
    Weight: 0.25,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7755,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.76.351",
    Description: "Rohr Axilo 78 Kst.schw.m.Verstellt. 60mm",
    Description2: "Rohr mit Einschraubgleiter, für Sockelsystem Häfele AXILO® 78",
    Length: 79,
    Width: 79,
    Thickness: 58,
    Weight: 0.2,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7756,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.76.353",
    Description: "Rohr Axilo 78 Kst.schw.m.Verstellt.100mm",
    Description2: "Rohr mit Einschraubgleiter, für Sockelsystem Häfele AXILO® 78",
    Length: 79,
    Width: 79,
    Thickness: 97,
    Weight: 0.25,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7757,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.76.354",
    Description: "Rohr Axilo 78 Kst.schw.m.Verstellt.125mm",
    Description2: "Rohr mit Einschraubgleiter, für Sockelsystem Häfele AXILO® 78",
    Length: 79,
    Width: 79,
    Thickness: 122,
    Weight: 0.275,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7758,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "634.74.400",
    Description: "Furniture leg, without height adjustment",
    Description2: "Load capacity 50 kg",
    Length: 60,
    Width: 60,
    Thickness: 50,
    Weight: 0.25,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7759,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "634.74.401",
    Description: "Furniture leg, without height adjustment",
    Description2: "Load capacity 50 kg",
    Length: 60,
    Width: 60,
    Thickness: 80,
    Weight: 0.35,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7760,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "634.74.402",
    Description: "Furniture leg, without height adjustment",
    Description2: "Load capacity 50 kg",
    Length: 60,
    Width: 60,
    Thickness: 100,
    Weight: 0.45,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7761,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "634.74.403",
    Description: "Furniture leg, without height adjustment",
    Description2: "Load capacity 50 kg",
    Length: 60,
    Width: 60,
    Thickness: 150,
    Weight: 0.55,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7762,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "634.74.404",
    Description: "Furniture leg, without height adjustment",
    Description2: "Load capacity 50 kg",
    Length: 60,
    Width: 60,
    Thickness: 200,
    Weight: 0.65,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7763,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "634.48.055",
    Description: "Möbelfuß, ohne Höheneinstellung, mit Platte",
    Description2: "",
    Length: 139,
    Width: 139,
    Thickness: 250,
    Weight: 0.825,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 7764,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "281.41.907",
    Description: "Bodenträger zum Einstecken für Holz- und Glasböden",
    Description2: "Stahl mit Kunststoffkappe",
    Length: 8,
    Width: 7,
    Thickness: 7,
    Weight: 50,
    UnitOfWeight: "gram",
    Color: "Grey",
    Category: "Shelf support"
  }
  , {
    _id: 7765,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "282.43.905",
    Description: "Bodenträger zum Einstecken für Holzböden",
    Description2: "for drill diameter 5 mm",
    Length: 8,
    Width: 7,
    Thickness: 7,
    Weight: 40,
    UnitOfWeight: "gram",
    Color: "Bright galvanised",
    Category: "Shelf support"
  }
  , {
    _id: 7766,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "282.24.720",
    Description: "Bodenträger zum Einstecken für Holzböden",
    Description2: "for drill diameter 5 mm with plug-in spigot",
    Length: 14,
    Width: 9,
    Thickness: 10.5,
    Weight: 55,
    UnitOfWeight: "gram",
    Color: "NickelPlated",
    Category: "Shelf support"
  }
  , {
    _id: 7767,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "282.24.710",
    Description: "Bodenträger zum Einstecken für Holzböden",
    Description2: "for drill diameter 5 mm",
    Length: 14,
    Width: 9,
    Thickness: 10.5,
    Weight: 50,
    UnitOfWeight: "gram",
    Color: "NickelPlated",
    Category: "Shelf support"
  }
  , {
    _id: 7768,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "262.27.920",
    Description: "Bolz.Minifix S100 verz.B24/5/8",
    Description2: "Verbindungsbolzen, Häfele Minifix® S100, für Bohrloch-Ø 5 mm, mit Spezialgewinde",
    Length: 32,
    Width: 7,
    Thickness: 7,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "CN",
    Category: "MiniFix"
  }
  , {
    _id: 7769,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "262.26.533",
    Description: "Geh.Minifix 15/16 Zi.nick.",
    Description2: "Verbindergehäuse, Minifix® 15, Zinkdruckguss, ohne Abdeckrand",
    Length: 12,
    Width: 12,
    Thickness: 15,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "CN",
    Category: "MiniFix"
  }
  , {
    _id: 7770,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "262.24.751",
    Description: "Abdeckkappe Minifix 15 weiss",
    Description2: "Abdeckkappe, für Häfele Minifix® 15 ohne Abdeckrand, ab Holzdicke 15 mm",
    Length: 17,
    Width: 17,
    Thickness: 4,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "White",
    Category: "MiniFix"
  }
  , {
    _id: 7771,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "262.24.359",
    Description: "Abdeckkappe Minifix 15 schwarz",
    Description2: "Abdeckkappe, für Häfele Minifix® 15 ohne Abdeckrand, ab Holzdicke 15 mm",
    Length: 17,
    Width: 17,
    Thickness: 4,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Black",
    Category: "MiniFix"
  }
  , {
    _id: 7772,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "262.24.555",
    Description: "Abdeckkappe Minifix 15 hgrau",
    Description2: "Abdeckkappe, für Häfele Minifix® 15 ohne Abdeckrand, ab Holzdicke 15 mm",
    Length: 17,
    Width: 17,
    Thickness: 4,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "LightGrey",
    Category: "MiniFix"
  }
  , {
    _id: 7773,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "262.24.550",
    Description: "Abdeckkappe Minifix 15 dgrau",
    Description2: "Abdeckkappe, für Häfele Minifix® 15 ohne Abdeckrand, ab Holzdicke 15 mm",
    Length: 17,
    Width: 17,
    Thickness: 4,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "DarkGrey",
    Category: "MiniFix"
  }
  , {
    _id: 7774,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "267.82.227",
    Description: "Holzduebel Buche        8x27mm",
    Description2: "Holzdübel, Buche",
    Length: 27,
    Width: 8,
    Thickness: 8,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Beech",
    Category: "Dowel"
  }
  , {
    _id: 7775,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "267.82.240",
    Description: "Holzduebel Buche        8x40mm",
    Description2: "Holzdübel, Buche",
    Length: 40,
    Width: 8,
    Thickness: 8,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Beech",
    Category: "Dowel"
  }
  , {
    _id: 7776,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.69.320",
    Description: "Griff Zi.vern.schw.geb. 74x32mm",
    Description2: "Häfele Design Model H2190, schwarz, vernickelt, gebürstet, Maß A: 74 mm, Maß C: 64 mm",
    Length: 74,
    Width: 32,
    Thickness: 34,
    Weight: 0.13,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Handle"
  }
  , {
    _id: 7777,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.69.100",
    Description: "Griff Zi.vern.geb. 74x32mm",
    Description2: "Häfele Design Model H2190, vernickelt, gebürstet, Maß A: 74 mm, Maß C: 64 mm",
    Length: 74,
    Width: 32,
    Thickness: 34,
    Weight: 0.13,
    UnitOfWeight: "kg",
    Color: "zinc-plated",
    Category: "Handle"
  }
  , {
    _id: 7778,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.69.310",
    Description: "Griff verz.antik 74x32mm",
    Description2: "Häfele Design Model H2190, verzinnt, antik, Maß A: 74 mm, Maß C: 64 mm",
    Length: 74,
    Width: 32,
    Thickness: 34,
    Weight: 0.13,
    UnitOfWeight: "kg",
    Color: "zinc-plated",
    Category: "Handle"
  }
  , {
    _id: 7779,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.69.321",
    Description: "Griff Zi.vern.schw.geb. 170x32mm",
    Description2: "Häfele Design Model H2190, schwarz, vernickelt, gebürstet, Maß A: 170 mm, Maß C: 160 mm",
    Length: 170,
    Width: 32,
    Thickness: 34,
    Weight: 0.2,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Handle"
  }
  , {
    _id: 7780,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.69.101",
    Description: "Griff Zi.vern.geb. 170x32mm",
    Description2: "Häfele Design Model H2190, vernickelt, gebürstet, Maß A: 170 mm, Maß C: 160 mm",
    Length: 170,
    Width: 32,
    Thickness: 34,
    Weight: 0.2,
    UnitOfWeight: "kg",
    Color: "zinc-plated",
    Category: "Handle"
  }
  , {
    _id: 7781,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.69.311",
    Description: "Griff verz.antik 170x32mm",
    Description2: "Häfele Design Model H2190, verzinnt, antik, Maß A: 170 mm, Maß C: 160 mm",
    Length: 170,
    Width: 32,
    Thickness: 34,
    Weight: 0.2,
    UnitOfWeight: "kg",
    Color: "zinc-plated",
    Category: "Handle"
  }
  , {
    _id: 7782,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.69.322",
    Description: "Griff Zi.vern.schw.geb. 329x32mm",
    Description2: "Häfele Design Model H2190, schwarz, vernickelt, gebürstet, Maß A: 329 mm, Maß C: 320 mm",
    Length: 320,
    Width: 32,
    Thickness: 34,
    Weight: 0.22,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Handle"
  }
  , {
    _id: 7783,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.69.102",
    Description: "Griff Zi.vern.geb. 329x32mm",
    Description2: "Häfele Design Model H2190, vernickelt, gebürstet, Maß A: 329 mm, Maß C: 320 mm",
    Length: 320,
    Width: 32,
    Thickness: 34,
    Weight: 0.22,
    UnitOfWeight: "kg",
    Color: "zinc-plated",
    Category: "Handle"
  }
  , {
    _id: 7784,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.69.312",
    Description: "Griff verz.antik 329x32mm",
    Description2: "Häfele Design Model H2190, verzinnt, antik, Maß A: 329 mm, Maß C: 320 mm",
    Length: 320,
    Width: 32,
    Thickness: 34,
    Weight: 0.22,
    UnitOfWeight: "kg",
    Color: "zinc-plated",
    Category: "Handle"
  }
  , {
    _id: 7785,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "155.01.486",
    Description: "Knopf Edelst.matt      20x30mm",
    Description2: "Möbelknopf, aus Edelstahl, zylindrisch, mit Griffmulde",
    Length: 20,
    Width: 30,
    Thickness: 20,
    Weight: 0.12,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7786,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.017",
    Description: "Griff Edelst.matt  12/136x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 136,
    Width: 35,
    Thickness: 12,
    Weight: 0.17,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7787,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.026",
    Description: "Griff Edelst.matt  12/168x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 168,
    Width: 35,
    Thickness: 12,
    Weight: 0.18,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7788,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.035",
    Description: "Griff Edelst.matt  12/200x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 200,
    Width: 35,
    Thickness: 12,
    Weight: 0.18,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7789,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.044",
    Description: "Griff Edelst.matt  12/232x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 232,
    Width: 35,
    Thickness: 12,
    Weight: 0.19,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7790,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.045",
    Description: "Griff Edelst.matt  12/250x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 250,
    Width: 35,
    Thickness: 12,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7791,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.050",
    Description: "Griff Edelst.matt  12/300x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 300,
    Width: 35,
    Thickness: 12,
    Weight: 0.22,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7792,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.053",
    Description: "Griff Edelst.matt  12/328x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 328,
    Width: 35,
    Thickness: 12,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7793,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.055",
    Description: "Griff Edelst.matt  12/350x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 350,
    Width: 35,
    Thickness: 12,
    Weight: 0.23,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7794,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.062",
    Description: "Griff Edelst.matt  12/392x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 392,
    Width: 35,
    Thickness: 12,
    Weight: 0.24,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7795,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.064",
    Description: "Griff Edelst.matt  12/400x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 400,
    Width: 35,
    Thickness: 12,
    Weight: 0.28,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7796,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.065",
    Description: "Griff Edelst.matt  12/450x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 450,
    Width: 35,
    Thickness: 12,
    Weight: 0.29,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7797,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.071",
    Description: "Griff Edelst.matt  12/488x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 488,
    Width: 35,
    Thickness: 12,
    Weight: 0.3,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7798,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.075",
    Description: "Griff Edelst.matt  12/500x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 500,
    Width: 35,
    Thickness: 12,
    Weight: 0.33,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7799,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.080",
    Description: "Griff Edelst.matt  12/600x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 600,
    Width: 35,
    Thickness: 12,
    Weight: 0.39,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7800,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.085",
    Description: "Griff Edelst.matt  12/700x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 700,
    Width: 35,
    Thickness: 12,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7801,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.090",
    Description: "Griff Edelst.matt  12/800x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 800,
    Width: 35,
    Thickness: 12,
    Weight: 0.5,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7802,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.095",
    Description: "Griff Edelst.matt  12/900x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 900,
    Width: 35,
    Thickness: 12,
    Weight: 0.55,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 7803,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "282.24.728",
    Description: "Bodentraeger Zi.vern. 5/5/6mm",
    Description2: "Bodenträger, zum Einstecken in Bohrloch-Ø 5 mm, Zinkdruckguss",
    Length: 20.5,
    Width: 8,
    Thickness: 21,
    Weight: 40,
    UnitOfWeight: "gram",
    Color: "vernickelt",
    Category: "Shelf support"
  }
  , {
    _id: 7804,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "282.24.717",
    Description: "Bodentraeger Zi.vern. 5/1mm",
    Description2: "Bodenträger, zum Einstecken in Bohrloch-Ø 5 mm, Zinkdruckguss",
    Length: 20,
    Width: 9,
    Thickness: 13,
    Weight: 55,
    UnitOfWeight: "gram",
    Color: "vernickelt",
    Category: "Shelf support"
  }
  , {
    _id: 7805,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "282.25.717",
    Description: "Bodentraeger Zi.vern. 3/1,5mm",
    Description2: "Bodenträger, zum Einstecken in Bohrloch-Ø 3 mm, Zinkdruckguss",
    Length: 21,
    Width: 9,
    Thickness: 16,
    Weight: 50,
    UnitOfWeight: "gram",
    Color: "vernickelt",
    Category: "Shelf support"
  }
  , {
    _id: 7806,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.17.602",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, half overlay mounting/twin mounting",
    Description2: "from interior width 70 mm, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7807,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "017.91.043",
    Description: "Chipboard screw, Hospa Jet, countersunk head, TS T-star drive, fully threaded",
    Description2: "For universal use, TS20, length: 15 mm, thread Ø 3.5 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "zinc-plated",
    Category: "Screws"
  }
  , {
    _id: 7808,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.17.603",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, inset mounting",
    Description2: "from interior width 70 mm, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7809,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.17.600",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, full overlay mounting",
    Description2: "from interior width 70 mm, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7810,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.15.403",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, half overlay/twin mounting",
    Description2: "for wooden doors, for standard applications, Cup fixing: For screw fixing, drilling pattern: 45/9.5 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7811,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.15.405",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, inset mounting",
    Description2: "for wooden doors, for standard applications, Cup fixing: For screw fixing, drilling pattern: 45/9.5 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7812,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.15.401",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, full overlay mounting",
    Description2: "for wooden doors, for standard applications, Cup fixing: For screw fixing, drilling pattern: 45/9.5 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7813,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.29.221",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 155°, half overlay mounting/twin mounting",
    Description2: "For wooden doors, for cabinets with internal drawer boxes or pull-out shelves, Cup fixing: For screw fixing, drilling pattern: 45/9.5 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7814,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.29.217",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 155°, full overlay mounting",
    Description2: "For wooden doors, for cabinets with internal drawer boxes or pull-out shelves, Cup fixing: For screw fixing, drilling pattern: 45/9.5 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7815,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.07.702",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 165°, half overlay mounting/twin mounting",
    Description2: "For cabinets with internal drawer boxes or pull-out shelves, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7816,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.07.703",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 165°, inset mounting",
    Description2: "For cabinets with internal drawer boxes or pull-out shelves, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7817,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.07.700",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 165°, full overlay mounting",
    Description2: "For cabinets with internal drawer boxes or pull-out shelves, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7818,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.80.528",
    Description: "Cruciform mounting plate, Häfele Metalla 510 A, steel, with chipboard screws, edge distance 37 mm",
    Description2: "slide-on system, pre-mounted Euro screws, distance D: 0 mm, steel, distance from edge 37 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "MountingPlate"
  }
  , {
    _id: 7819,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.80.555",
    Description: "Cruciform mounting plate, Häfele Metalla 510 A, steel, with chipboard screws, edge distance 37 mm",
    Description2: "slide-on system, pre-mounted Euro screws, distance D: 3 mm, steel, distance from edge 37 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "MountingPlate"
  }
  , {
    _id: 7820,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.80.582",
    Description: "Cruciform mounting plate, Häfele Metalla 510 A, steel, with chipboard screws, edge distance 37 mm",
    Description2: "slide-on system, pre-mounted Euro screws, distance D: 6 mm, steel, distance from edge 37 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "MountingPlate"
  }
  , {
    _id: 7821,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.71.500",
    Description: "Cruciform mounting plate, Häfele Metalla 510 SM, zinc alloy, with chipboard screws",
    Description2: "quick fixing system, fixing with chipboard screws, depth adjustable via eccentric, Distance D: 0 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "MountingPlate"
  }
  , {
    _id: 7822,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.71.503",
    Description: "Cruciform mounting plate, Häfele Metalla 510 SM, zinc alloy, with chipboard screws",
    Description2: "quick fixing system, fixing with chipboard screws, depth adjustable via eccentric, Distance D: 3 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "MountingPlate"
  }
  , {
    _id: 7823,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.71.506",
    Description: "Cruciform mounting plate, Häfele Metalla 510 SM, zinc alloy, with chipboard screws",
    Description2: "quick fixing system, fixing with chipboard screws, depth adjustable via eccentric, Distance D: 6 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "MountingPlate"
  }
  , {
    _id: 7824,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.67.000",
    Description: "Mounting plate, Häfele Metalla 510 SM, zinc alloy, height adjustable via eccentric",
    Description2: "quick fixing system, pre-mounted Euro screws, depth adjustable via eccentric, distance D: 0 mm, drilling depth: 11.5 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "MountingPlate"
  }
  , {
    _id: 7825,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.67.003",
    Description: "Mounting plate, Häfele Metalla 510 SM, zinc alloy, height adjustable via eccentric",
    Description2: "quick fixing system, pre-mounted Euro screws, depth adjustable via eccentric, distance D: 3 mm, drilling depth: 11.5 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "MountingPlate"
  }
  , {
    _id: 7826,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.67.006",
    Description: "Mounting plate, Häfele Metalla 510 SM, zinc alloy, height adjustable via eccentric",
    Description2: "quick fixing system, pre-mounted Euro screws, depth adjustable via eccentric, distance D: 6 mm, drilling depth: 11.5 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "MountingPlate"
  }
  , {
    _id: 7827,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "329.11.705",
    Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, for blind corner applications",
    Description2: "cup fixing: For screw fixing, drilling pattern: 48/6 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 7828,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.40.701",
    Description: "Cover cap, For cabinet hanger for base unit",
    Description2: "white, mounting: Right hand",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "White",
    Category: "CoverCap"
  }
  , {
    _id: 7829,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.40.702",
    Description: "Cover cap, For cabinet hanger for base unit",
    Description2: "white, mounting: Left hand",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "White",
    Category: "CoverCap"
  }
  , {
    _id: 7830,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.40.770",
    Description: "Cover cap, For cabinet hanger, for wall unit",
    Description2: "Visible inside the cabinet, Mounting: Right, white",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "White",
    Category: "CoverCap"
  }
  , {
    _id: 7831,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.40.771",
    Description: "Cover cap, For cabinet hanger, for wall unit",
    Description2: "Visible inside the cabinet, Mounting: Left, white",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "White",
    Category: "CoverCap"
  }
  , {
    _id: 7832,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.02.702",
    Description: "Cabinet hanger, Wall unit, for screw fixing",
    Description2: "Visible inside the cabinet, Left hand mounting",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hanger"
  }
  , {
    _id: 7833,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.02.703",
    Description: "Cabinet hanger, Wall unit, for screw fixing",
    Description2: "Visible inside the cabinet, Right hand mounting",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hanger"
  }
  , {
    _id: 7834,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.03.937",
    Description: "Cabinet hanger for wall unit, For screw fixing and press fitting",
    Description2: "Not visible inside the cabinet, Mounting: Right, base plate: Long",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "zinc-plated",
    Category: "Hanger"
  }
  , {
    _id: 7835,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.03.938",
    Description: "Cabinet hanger for wall unit, For screw fixing and press fitting",
    Description2: "Not visible inside the cabinet, Mounting: Left, base plate: Long",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "zinc-plated",
    Category: "Hanger"
  }
  , {
    _id: 7836,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.40.901",
    Description: "Cabinet hanger for base unit, For press fitting",
    Description2: "Steel, galvanized, mounting: Right hand, base unit hanger",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Grey",
    Category: "Hanger"
  }
  , {
    _id: 7837,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.40.902",
    Description: "Cabinet hanger for base unit, For press fitting",
    Description2: "Steel, galvanized, mounting: Left hand, base unit hanger",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Grey",
    Category: "Hanger"
  }
  , {
    _id: 7838,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.40.980",
    Description: "Cabinet hanger, Wall unit, for press fitting",
    Description2: "With hook-off protection, visible inside the cabinet, Right hand mounting",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "zinc-plated",
    Category: "Hanger"
  }
  , {
    _id: 7839,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.40.981",
    Description: "Cabinet hanger, Wall unit, for press fitting",
    Description2: "With hook-off protection, visible inside the cabinet, Left hand mounting",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "zinc-plated",
    Category: "Hanger"
  }
  , {
    _id: 7840,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.09.910",
    Description: "Wall rail, Steel, length 1,250 mm",
    Description2: "For screw fixing, for cabinet hanger, Zinc plated",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "zinc-plated",
    Category: "WallPlate"
  }
  , {
    _id: 7841,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "051.48.001",
    Description: "Wall plug, fischer Duopower, plastic",
    Description2: "6 x 30 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Black",
    Category: "WallPlug"
  }
  , {
    _id: 7842,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "017.91.143",
    Description: "Chipboard screw, Hospa Jet, countersunk head, TS T-star drive, fully threaded",
    Description2: "For universal use, TS20, length: 35 mm, thread ⌀ 5 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "zinc-plated",
    Category: "Screws"
  }
  , {
    _id: 7843,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.40.989",
    Description: "Wall plate, For cabinet hanger with hook-off protection, for wall unit",
    Description2: "Visible inside the cabinet, Length: 60 mm",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "zinc-plated",
    Category: "WallPlate"
  }
  , {
    _id: 7844,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.40.991",
    Description: "Wall plate, With hook-off protection, for cabinet hanger for base unit",
    Description2: "galvanized",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "zinc-plated",
    Category: "WallPlate"
  }
  , {
    _id: 7845,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.703",
    Description: "Zargenset Legrabox pure N 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7846,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.704",
    Description: "Zargenset Legrabox pure N 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7847,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.705",
    Description: "Zargenset Legrabox pure N 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7848,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.706",
    Description: "Zargenset Legrabox pure N 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7849,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.803",
    Description: "Zargenset Legrabox pure N 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7850,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.804",
    Description: "Zargenset Legrabox pure N 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7851,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.805",
    Description: "Zargenset Legrabox pure N 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7852,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.806",
    Description: "Zargenset Legrabox pure N 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7853,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.503",
    Description: "Zargenset Legrabox pure N 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7854,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.504",
    Description: "Zargenset Legrabox pure N 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7855,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.505",
    Description: "Zargenset Legrabox pure N 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7856,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.506",
    Description: "Zargenset Legrabox pure N 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7857,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.004",
    Description: "Zargenset Legrabox pure N 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7858,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.005",
    Description: "Zargenset Legrabox pure N 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7859,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.713",
    Description: "Zargenset Legrabox pure N 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7860,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.714",
    Description: "Zargenset Legrabox pure N 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7861,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.715",
    Description: "Zargenset Legrabox pure N 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7862,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.716",
    Description: "Zargenset Legrabox pure N 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7863,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.813",
    Description: "Zargenset Legrabox pure N 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7864,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.814",
    Description: "Zargenset Legrabox pure N 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7865,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.815",
    Description: "Zargenset Legrabox pure N 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7866,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.816",
    Description: "Zargenset Legrabox pure N 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7867,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.513",
    Description: "Zargenset Legrabox pure N 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7868,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.514",
    Description: "Zargenset Legrabox pure N 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7869,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.515",
    Description: "Zargenset Legrabox pure N 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7870,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.516",
    Description: "Zargenset Legrabox pure N 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7871,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.014",
    Description: "Zargenset Legrabox pure N 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7872,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.015",
    Description: "Zargenset Legrabox pure N 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 66,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7873,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.720",
    Description: "Zargenset Legrabox pure M 270 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 270,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7874,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.721",
    Description: "Zargenset Legrabox pure M 300 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 300,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7875,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.722",
    Description: "Zargenset Legrabox pure M 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7876,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.723",
    Description: "Zargenset Legrabox pure M 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7877,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.724",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7878,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.725",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7879,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.726",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7880,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.727",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7881,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.734",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7882,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.735",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7883,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.736",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7884,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.737",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7885,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.738",
    Description: "Zargenset Legrabox pure M 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7886,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.820",
    Description: "Zargenset Legrabox pure M 270 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 270,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7887,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.821",
    Description: "Zargenset Legrabox pure M 300 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 300,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7888,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.822",
    Description: "Zargenset Legrabox pure M 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7889,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.823",
    Description: "Zargenset Legrabox pure M 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7890,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.824",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7891,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.825",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7892,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.826",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7893,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.827",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7894,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.834",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7895,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.835",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7896,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.836",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7897,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.837",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7898,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.838",
    Description: "Zargenset Legrabox pure M 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7899,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.520",
    Description: "Zargenset Legrabox pure M 270 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 270,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7900,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.521",
    Description: "Zargenset Legrabox pure M 300 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 300,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7901,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.522",
    Description: "Zargenset Legrabox pure M 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7902,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.523",
    Description: "Zargenset Legrabox pure M 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7903,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.524",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7904,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.525",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7905,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.526",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7906,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.527",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7907,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.534",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7908,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.535",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7909,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.536",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7910,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.537",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7911,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.538",
    Description: "Zargenset Legrabox pure M 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7912,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.020",
    Description: "Zargenset Legrabox pure M 270 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 270,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7913,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.021",
    Description: "Zargenset Legrabox pure M 300 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 300,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7914,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.022",
    Description: "Zargenset Legrabox pure M 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7915,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.023",
    Description: "Zargenset Legrabox pure M 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7916,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.024",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7917,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.025",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7918,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.026",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7919,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.027",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7920,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.034",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7921,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.035",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7922,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.036",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7923,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.037",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7924,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.038",
    Description: "Zargenset Legrabox pure M 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7925,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.720",
    Description: "Zargenset Legrabox pure M 270 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 270,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7926,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.721",
    Description: "Zargenset Legrabox pure M 300 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 300,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7927,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.722",
    Description: "Zargenset Legrabox pure M 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7928,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.723",
    Description: "Zargenset Legrabox pure M 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7929,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.724",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7930,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.725",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7931,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.726",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7932,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.727",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7933,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.734",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7934,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.735",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7935,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.736",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7936,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.737",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7937,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.738",
    Description: "Zargenset Legrabox pure M 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7938,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.820",
    Description: "Zargenset Legrabox pure M 270 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 270,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7939,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.821",
    Description: "Zargenset Legrabox pure M 300 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 300,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7940,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.822",
    Description: "Zargenset Legrabox pure M 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7941,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.823",
    Description: "Zargenset Legrabox pure M 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7942,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.824",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7943,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.825",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7944,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.826",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7945,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.827",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7946,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.834",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7947,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.835",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7948,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.836",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7949,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.837",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7950,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.838",
    Description: "Zargenset Legrabox pure M 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7951,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.520",
    Description: "Zargenset Legrabox pure M 270 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 270,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7952,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.521",
    Description: "Zargenset Legrabox pure M 300 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 300,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7953,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.522",
    Description: "Zargenset Legrabox pure M 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7954,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.523",
    Description: "Zargenset Legrabox pure M 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7955,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.524",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7956,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.525",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7957,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.526",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7958,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.527",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7959,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.534",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7960,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.535",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7961,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.536",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7962,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.537",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7963,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.538",
    Description: "Zargenset Legrabox pure M 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 7964,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.020",
    Description: "Zargenset Legrabox pure M 270 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 270,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7965,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.021",
    Description: "Zargenset Legrabox pure M 300 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 300,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7966,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.022",
    Description: "Zargenset Legrabox pure M 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7967,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.023",
    Description: "Zargenset Legrabox pure M 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7968,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.024",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7969,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.025",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7970,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.026",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7971,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.027",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7972,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.034",
    Description: "Zargenset Legrabox pure M 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7973,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.035",
    Description: "Zargenset Legrabox pure M 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7974,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.036",
    Description: "Zargenset Legrabox pure M 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7975,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.037",
    Description: "Zargenset Legrabox pure M 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7976,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.038",
    Description: "Zargenset Legrabox pure M 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 90,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 7977,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.741",
    Description: "Zargenset Legrabox pure K 300 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 300,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7978,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.742",
    Description: "Zargenset Legrabox pure K 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7979,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.743",
    Description: "Zargenset Legrabox pure K 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7980,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.744",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7981,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.745",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7982,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.746",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7983,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.747",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7984,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.754",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7985,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.755",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7986,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.756",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7987,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.757",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 7988,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.841",
    Description: "Zargenset Legrabox pure K 300 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 300,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7989,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.842",
    Description: "Zargenset Legrabox pure K 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7990,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.843",
    Description: "Zargenset Legrabox pure K 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7991,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.844",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7992,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.845",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7993,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.846",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7994,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.847",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7995,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.854",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7996,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.855",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7997,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.856",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7998,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.857",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 7999,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.541",
    Description: "Zargenset Legrabox pure K 300 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 300,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8000,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.542",
    Description: "Zargenset Legrabox pure K 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8001,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.543",
    Description: "Zargenset Legrabox pure K 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8002,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.544",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8003,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.545",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8004,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.546",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8005,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.547",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8006,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.554",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8007,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.555",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8008,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.556",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8009,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.557",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8010,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.042",
    Description: "Zargenset Legrabox pure K 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8011,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.043",
    Description: "Zargenset Legrabox pure K 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8012,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.044",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8013,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.045",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8014,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.046",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8015,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.054",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8016,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.055",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8017,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.26.056",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8018,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.741",
    Description: "Zargenset Legrabox pure K 300 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 300,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8019,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.742",
    Description: "Zargenset Legrabox pure K 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8020,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.743",
    Description: "Zargenset Legrabox pure K 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8021,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.744",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8022,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.745",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8023,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.746",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8024,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.747",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8025,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.754",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8026,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.755",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8027,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.756",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8028,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.757",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8029,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.841",
    Description: "Zargenset Legrabox pure K 300 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 300,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8030,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.842",
    Description: "Zargenset Legrabox pure K 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8031,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.843",
    Description: "Zargenset Legrabox pure K 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8032,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.844",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8033,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.845",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8034,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.846",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8035,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.847",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8036,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.854",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8037,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.855",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8038,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.856",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8039,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.857",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8040,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.541",
    Description: "Zargenset Legrabox pure K 300 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 300,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8041,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.542",
    Description: "Zargenset Legrabox pure K 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8042,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.543",
    Description: "Zargenset Legrabox pure K 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8043,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.544",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8044,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.545",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8045,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.546",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8046,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.547",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8047,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.554",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8048,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.555",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8049,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.556",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8050,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.557",
    Description: "Zargenset Legrabox pure K 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8051,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.042",
    Description: "Zargenset Legrabox pure K 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8052,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.043",
    Description: "Zargenset Legrabox pure K 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8053,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.044",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8054,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.045",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8055,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.046",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8056,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.054",
    Description: "Zargenset Legrabox pure K 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8057,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.055",
    Description: "Zargenset Legrabox pure K 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8058,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.72.056",
    Description: "Zargenset Legrabox pure K 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 128,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8059,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.700",
    Description: "Zargenset Legrabox pure C 270 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 270,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8060,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.701",
    Description: "Zargenset Legrabox pure C 300 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 300,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8061,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.702",
    Description: "Zargenset Legrabox pure C 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8062,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.703",
    Description: "Zargenset Legrabox pure C 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8063,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.704",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8064,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.705",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8065,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.706",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8066,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.707",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8067,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.714",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8068,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.715",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8069,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.716",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8070,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.717",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8071,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.718",
    Description: "Zargenset Legrabox pure C 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8072,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.800",
    Description: "Zargenset Legrabox pure C 270 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 270,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8073,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.801",
    Description: "Zargenset Legrabox pure C 300 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 300,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8074,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.802",
    Description: "Zargenset Legrabox pure C 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8075,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.803",
    Description: "Zargenset Legrabox pure C 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8076,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.804",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8077,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.805",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8078,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.806",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8079,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.807",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8080,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.814",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8081,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.815",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8082,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.816",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8083,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.817",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8084,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.818",
    Description: "Zargenset Legrabox pure C 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8085,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.500",
    Description: "Zargenset Legrabox pure C 270 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 270,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8086,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.501",
    Description: "Zargenset Legrabox pure C 300 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 300,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8087,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.502",
    Description: "Zargenset Legrabox pure C 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8088,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.503",
    Description: "Zargenset Legrabox pure C 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8089,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.504",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8090,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.505",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8091,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.506",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8092,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.507",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8093,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.514",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8094,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.515",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8095,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.516",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8096,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.517",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8097,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.518",
    Description: "Zargenset Legrabox pure C 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8098,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.000",
    Description: "Zargenset Legrabox pure C 270 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 270,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8099,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.001",
    Description: "Zargenset Legrabox pure C 300 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 300,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8100,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.002",
    Description: "Zargenset Legrabox pure C 350 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 350,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8101,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.003",
    Description: "Zargenset Legrabox pure C 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8102,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.004",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8103,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.005",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8104,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.006",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8105,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.007",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8106,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.014",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8107,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.015",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8108,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.016",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8109,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.017",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8110,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.018",
    Description: "Zargenset Legrabox pure C 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8111,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.700",
    Description: "Zargenset Legrabox pure C 270 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 270,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8112,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.701",
    Description: "Zargenset Legrabox pure C 300 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 300,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8113,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.702",
    Description: "Zargenset Legrabox pure C 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8114,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.703",
    Description: "Zargenset Legrabox pure C 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8115,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.704",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8116,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.705",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8117,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.706",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8118,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.707",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8119,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.714",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8120,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.715",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8121,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.716",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8122,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.717",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8123,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.718",
    Description: "Zargenset Legrabox pure C 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8124,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.800",
    Description: "Zargenset Legrabox pure C 270 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 270,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8125,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.801",
    Description: "Zargenset Legrabox pure C 300 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 300,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8126,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.802",
    Description: "Zargenset Legrabox pure C 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8127,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.803",
    Description: "Zargenset Legrabox pure C 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8128,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.804",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8129,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.805",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8130,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.806",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8131,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.807",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8132,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.814",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8133,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.815",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8134,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.816",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8135,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.817",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8136,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.818",
    Description: "Zargenset Legrabox pure C 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8137,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.500",
    Description: "Zargenset Legrabox pure C 270 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 270,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8138,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.501",
    Description: "Zargenset Legrabox pure C 300 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 300,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8139,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.502",
    Description: "Zargenset Legrabox pure C 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8140,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.503",
    Description: "Zargenset Legrabox pure C 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8141,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.504",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8142,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.505",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8143,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.506",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8144,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.507",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8145,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.514",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8146,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.515",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8147,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.516",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8148,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.517",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8149,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.518",
    Description: "Zargenset Legrabox pure C 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8150,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.000",
    Description: "Zargenset Legrabox pure C 270 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 270,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8151,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.001",
    Description: "Zargenset Legrabox pure C 300 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 300,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8152,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.002",
    Description: "Zargenset Legrabox pure C 350 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 350,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8153,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.003",
    Description: "Zargenset Legrabox pure C 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8154,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.004",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8155,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.005",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8156,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.006",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8157,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.007",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8158,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.014",
    Description: "Zargenset Legrabox pure C 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8159,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.015",
    Description: "Zargenset Legrabox pure C 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8160,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.016",
    Description: "Zargenset Legrabox pure C 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8161,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.017",
    Description: "Zargenset Legrabox pure C 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8162,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.018",
    Description: "Zargenset Legrabox pure C 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 186,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8163,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.723",
    Description: "Zargenset Legrabox pure F 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8164,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.724",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8165,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.725",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8166,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.726",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8167,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.727",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8168,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.734",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8169,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.735",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8170,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.736",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8171,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.737",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8172,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.738",
    Description: "Zargenset Legrabox pure F 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8173,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.823",
    Description: "Zargenset Legrabox pure F 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8174,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.824",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8175,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.825",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8176,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.826",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8177,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.827",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8178,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.834",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8179,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.835",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8180,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.836",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8181,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.837",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8182,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.838",
    Description: "Zargenset Legrabox pure F 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8183,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.523",
    Description: "Zargenset Legrabox pure F 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8184,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.524",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8185,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.525",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8186,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.526",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8187,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.527",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8188,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.534",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8189,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.535",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8190,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.536",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8191,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.537",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8192,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.538",
    Description: "Zargenset Legrabox pure F 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8193,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.023",
    Description: "Zargenset Legrabox pure F 400 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 400,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8194,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.024",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8195,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.025",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8196,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.026",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8197,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.027",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 40 kg BLOMOTION S",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8198,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.034",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8199,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.035",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8200,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.036",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8201,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.037",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8202,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "551.27.038",
    Description: "Zargenset Legrabox pure F 650 mm",
    Description2: "Tragkraft 70 kg BLOMOTION S",
    Length: 650,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8203,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.723",
    Description: "Zargenset Legrabox pure F 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8204,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.724",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8205,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.725",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8206,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.726",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8207,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.727",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8208,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.734",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8209,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.735",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8210,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.736",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8211,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.737",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8212,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.738",
    Description: "Zargenset Legrabox pure F 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "seidenweiß",
    Category: "Drawerbox"
  }
  , {
    _id: 8213,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.823",
    Description: "Zargenset Legrabox pure F 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8214,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.824",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8215,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.825",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8216,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.826",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8217,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.827",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8218,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.834",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8219,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.835",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8220,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.836",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8221,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.837",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8222,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.838",
    Description: "Zargenset Legrabox pure F 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "carbonschwarz",
    Category: "Drawerbox"
  }
  , {
    _id: 8223,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.523",
    Description: "Zargenset Legrabox pure F 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8224,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.524",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8225,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.525",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8226,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.526",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8227,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.527",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8228,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.534",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8229,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.535",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8230,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.536",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8231,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.537",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8232,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.538",
    Description: "Zargenset Legrabox pure F 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Drawerbox"
  }
  , {
    _id: 8233,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.023",
    Description: "Zargenset Legrabox pure F 400 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 400,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8234,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.024",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8235,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.025",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8236,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.026",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8237,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.027",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 40 kg TIP-ON",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 40,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8238,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.034",
    Description: "Zargenset Legrabox pure F 450 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 450,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8239,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.035",
    Description: "Zargenset Legrabox pure F 500 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 500,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8240,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.036",
    Description: "Zargenset Legrabox pure F 550 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 550,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8241,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.037",
    Description: "Zargenset Legrabox pure F 600 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 600,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8242,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.73.038",
    Description: "Zargenset Legrabox pure F 650 mm",
    Description2: "Tragkraft 70 kg TIP-ON",
    Length: 650,
    Width: 240,
    Thickness: 65,
    Weight: 70,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8243,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.75.054",
    Description: "Frontbefestigung Legrabox",
    Description2: "Höhe N Expando",
    Length: 8,
    Width: 30,
    Thickness: 25,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8244,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.75.051",
    Description: "Frontbefestigung Legrabox",
    Description2: "Höhe N Schrauben",
    Length: 8,
    Width: 30,
    Thickness: 25,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8245,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.75.064",
    Description: "Frontbefestigung Legrabox",
    Description2: "Höhe M Expando",
    Length: 8,
    Width: 40,
    Thickness: 25,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8246,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.75.061",
    Description: "Frontbefestigung Legrabox",
    Description2: "Höhe M Schrauben",
    Length: 8,
    Width: 40,
    Thickness: 25,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8247,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.75.074",
    Description: "Frontbefestigung Legrabox",
    Description2: "Höhe K Expando",
    Length: 8,
    Width: 65,
    Thickness: 25,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8248,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.75.071",
    Description: "Frontbefestigung Legrabox",
    Description2: "Höhe K Schrauben",
    Length: 8,
    Width: 65,
    Thickness: 25,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8249,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.75.084",
    Description: "Frontbefestigung Legrabox",
    Description2: "Höhe C Expando",
    Length: 8,
    Width: 110,
    Thickness: 25,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8250,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.75.081",
    Description: "Frontbefestigung Legrabox",
    Description2: "Höhe C Schrauben",
    Length: 8,
    Width: 110,
    Thickness: 25,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Drawerbox"
  }
  , {
    _id: 8251,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.75.590",
    Description: "Front- und Bodenbefestigung",
    Description2: "für Schubkasten blum Legrabox",
    Length: 48,
    Width: 42,
    Thickness: 13,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Drawerbox"
  }
  , {
    _id: 8252,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.02.710",
    Description: "Cabinet hanger, Wall unit, for screw fixing",
    Description2: "Visible inside the cabinet, galvanized, mounting: Right hand",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "zinc-plated",
    Category: "Hanger"
  }
  , {
    _id: 8253,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.02.711",
    Description: "Cabinet hanger, Wall unit, for screw fixing",
    Description2: "Visible inside the cabinet, galvanized, mounting: Left hand",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "zinc-plated",
    Category: "Hanger"
  }
  , {
    _id: 8254,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.02.781",
    Description: "Cover cap, Clip on, For cabinet hanger for wall unit",
    Description2: "Visible inside the cabinet, cover cap, white, RAL 9010, mounting: Left hand",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "White",
    Category: "CoverCap"
  }
  , {
    _id: 8255,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.02.780",
    Description: "Cover cap, Clip on, For cabinet hanger for wall unit",
    Description2: "Visible inside the cabinet, cover cap, white, RAL 9010, mounting: Right hand",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "White",
    Category: "CoverCap"
  }
  , {
    _id: 8256,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.02.521",
    Description: "Cover cap, Clip on, For cabinet hanger for wall unit",
    Description2: "Visible inside the cabinet, Grey, RAL 7040, mounting: Left",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Grey",
    Category: "CoverCap"
  }
  , {
    _id: 8257,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "290.02.520",
    Description: "Cover cap, Clip on, For cabinet hanger for wall unit",
    Description2: "Visible inside the cabinet, Grey, RAL 7040, mounting: Right",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Grey",
    Category: "CoverCap"
  }
  , {
    _id: 8258,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.80.183",
    Description: "Seitenstabilisierung Legrabox",
    Description2: "für breite Auszüge kurz",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Drawerbox"
  }
  , {
    _id: 8259,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.80.187",
    Description: "Seitenstabilisierung Legrabox",
    Description2: "für breite Auszüge lang",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Drawerbox"
  }
  , {
    _id: 8260,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "550.60.119",
    Description: "Synchronisierungsstange",
    Description2: "Tip-On",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Drawerbox"
  }
  , {
    _id: 8261,
    in_Supplier: "DemoSupplier",
    in_SupplierArticleNumber: "267.82.020",
    Description: "Holzduebel Buche        5x20mm",
    Description2: "Holzdübel, Buche",
    Length: 20,
    Width: 5,
    Thickness: 5,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Beech",
    Category: "Dowel"
  }
  , {
    _id: 8262,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "239.91.105",
    Description: "Strike moulding, sealing profile, for gluing",
    Description2: "Color Grey Brown",
    Length: 2500,
    Width: 21,
    Thickness: 1.5,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "grey brown",
    Category: "Duststrip"
  }
  , {
    _id: 8263,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.353",
    Description: "Push Catch",
    Description2: "Short version with magnet, black",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Black",
    Category: "PushToOpen"
  }
  , {
    _id: 8264,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.553",
    Description: "Push Catch",
    Description2: "Short version with magnet, grey",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Grey",
    Category: "PushToOpen"
  }
  , {
    _id: 8265,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.753",
    Description: "Push Catch",
    Description2: "Short version with magnet, white",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "White",
    Category: "PushToOpen"
  }
  , {
    _id: 8266,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.354",
    Description: "Push Catch",
    Description2: "Long version with magnet, black",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Black",
    Category: "PushToOpen"
  }
  , {
    _id: 8267,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.554",
    Description: "Push Catch",
    Description2: "Long version with magnet, grey",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Grey",
    Category: "PushToOpen"
  }
  , {
    _id: 8268,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.754",
    Description: "Push Catch",
    Description2: "Long version with magnet, white",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "White",
    Category: "PushToOpen"
  }
  , {
    _id: 8269,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.363",
    Description: "Adapter Plate",
    Description2: "Short version, straight, black",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Black",
    Category: "PushToOpen"
  }
  , {
    _id: 8270,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.563",
    Description: "Adapter Plate",
    Description2: "Short version, straight, grey",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Grey",
    Category: "PushToOpen"
  }
  , {
    _id: 8271,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.763",
    Description: "Adapter Plate",
    Description2: "Short version, straight, white",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "White",
    Category: "PushToOpen"
  }
  , {
    _id: 8272,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.362",
    Description: "Adapter Plate",
    Description2: "Long version, straight, black",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Black",
    Category: "PushToOpen"
  }
  , {
    _id: 8273,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.562",
    Description: "Adapter Plate",
    Description2: "Long version, straight, grey",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Grey",
    Category: "PushToOpen"
  }
  , {
    _id: 8274,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "356.04.762",
    Description: "Adapter Plate",
    Description2: "Long version, straight, white",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "White",
    Category: "PushToOpen"
  }
  , {
    _id: 8275,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "263.15.705",
    Description: "Rafix20Housing19mmNickelPlated",
    Description2: "Nickel Plated",
    Length: 22,
    Width: 24,
    Thickness: 14.2,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Rafix"
  }
  , {
    _id: 8276,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "263.20.847",
    Description: "RafixConnectionBolt11x5mm",
    Description2: "Nickel Plated",
    Length: 20,
    Width: 6.5,
    Thickness: 6.5,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Rafix"
  }
  , {
    _id: 8277,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.74.517",
    Description: "Aventos HF Set Euroschrauben 2700",
    Description2: "2 Kraftspeicher mit Abdeckkappen grau",
    Length: 260,
    Width: 105,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8278,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.74.518",
    Description: "Aventos HF Set Euroschrauben 10000",
    Description2: "2 Kraftspeicher mit Abdeckkappen grau",
    Length: 260,
    Width: 105,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8279,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.74.717",
    Description: "Aventos HF Set Euroschrauben 2700",
    Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
    Length: 260,
    Width: 105,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "weiß",
    Category: "Fliplift"
  }
  , {
    _id: 8280,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.74.718",
    Description: "Aventos HF Set Euroschrauben 10000",
    Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
    Length: 260,
    Width: 105,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "weiß",
    Category: "Fliplift"
  }
  , {
    _id: 8281,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.74.537",
    Description: "Aventos HF Set Euroschrauben 2700",
    Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
    Length: 260,
    Width: 105,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Fliplift"
  }
  , {
    _id: 8282,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.74.538",
    Description: "Aventos HF Set Euroschrauben 10000",
    Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
    Length: 260,
    Width: 105,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Fliplift"
  }
  , {
    _id: 8283,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "342.22.070",
    Description: "Montageplatte Aventos",
    Description2: "zum Einpressen",
    Length: 18.6,
    Width: 43.7,
    Thickness: 26.6,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Fliplift"
  }
  , {
    _id: 8284,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.74.655",
    Description: "Aventos HF Hebelarm",
    Description2: "480 - 610mm Korpushöhe",
    Length: 19,
    Width: 463,
    Thickness: 43,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8285,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.74.657",
    Description: "Aventos HF Hebelarm",
    Description2: "600 - 910mm Korpushöhe",
    Length: 19,
    Width: 573,
    Thickness: 43,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8286,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.74.658",
    Description: "Aventos HF Hebelarm",
    Description2: "840 - 1200mm Korpushöhe",
    Length: 19,
    Width: 843,
    Thickness: 43,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8287,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.553",
    Description: "Aventos HK Set Euroschrauben 3200",
    Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "weiß",
    Category: "Fliplift"
  }
  , {
    _id: 8288,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.552",
    Description: "Aventos HK Set Euroschrauben 1730",
    Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "weiß",
    Category: "Fliplift"
  }
  , {
    _id: 8289,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.551",
    Description: "Aventos HK Set Euroschrauben 980",
    Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "weiß",
    Category: "Fliplift"
  }
  , {
    _id: 8290,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.550",
    Description: "Aventos HK Set Euroschrauben 420",
    Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "weiß",
    Category: "Fliplift"
  }
  , {
    _id: 8291,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.548",
    Description: "Aventos HK Set Euroschrauben 3200",
    Description2: "2 Kraftspeicher mit Abdeckkappen grau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8292,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.547",
    Description: "Aventos HK Set Euroschrauben 1730",
    Description2: "2 Kraftspeicher mit Abdeckkappen grau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8293,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.546",
    Description: "Aventos HK Set Euroschrauben 980",
    Description2: "2 Kraftspeicher mit Abdeckkappen grau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8294,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.545",
    Description: "Aventos HK Set Euroschrauben 420",
    Description2: "2 Kraftspeicher mit Abdeckkappen grau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8295,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.578",
    Description: "Aventos HK Set Euroschrauben 3200",
    Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Fliplift"
  }
  , {
    _id: 8296,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.577",
    Description: "Aventos HK Set Euroschrauben 1730",
    Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Fliplift"
  }
  , {
    _id: 8297,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.576",
    Description: "Aventos HK Set Euroschrauben 980",
    Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Fliplift"
  }
  , {
    _id: 8298,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.85.575",
    Description: "Aventos HK Set Euroschrauben 420",
    Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Fliplift"
  }
  , {
    _id: 8299,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.84.790",
    Description: "Montageplatte Aventos HK / HS / HL",
    Description2: "zum Einpressen",
    Length: 16.5,
    Width: 108,
    Thickness: 13.4,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: ""
  }
  , {
    _id: 8300,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "342.81.400",
    Description: "Concealed hinge, Blum Clip Top 120°, full overlay mounting, without automatic closing spring",
    Description2: "for wooden doors, Cup mounting: for screwing, hole pattern: 45/9.5 mm, model no. 70T5550TL",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 8301,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.84.727",
    Description: "Aventos HS Set Euroschrauben 350",
    Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "weiß",
    Category: "Fliplift"
  }
  , {
    _id: 8302,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.84.728",
    Description: "Aventos HS Set Euroschrauben 480",
    Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "weiß",
    Category: "Fliplift"
  }
  , {
    _id: 8303,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.84.729",
    Description: "Aventos HS Set Euroschrauben 800",
    Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "weiß",
    Category: "Fliplift"
  }
  , {
    _id: 8304,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.84.527",
    Description: "Aventos HS Set Euroschrauben 350",
    Description2: "2 Kraftspeicher mit Abdeckkappen grau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8305,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.84.528",
    Description: "Aventos HS Set Euroschrauben 480",
    Description2: "2 Kraftspeicher mit Abdeckkappen grau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8306,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.84.529",
    Description: "Aventos HS Set Euroschrauben 800",
    Description2: "2 Kraftspeicher mit Abdeckkappen grau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8307,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.84.587",
    Description: "Aventos HS Set Euroschrauben 350",
    Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Fliplift"
  }
  , {
    _id: 8308,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.84.588",
    Description: "Aventos HS Set Euroschrauben 480",
    Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Fliplift"
  }
  , {
    _id: 8309,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.84.589",
    Description: "Aventos HS Set Euroschrauben 800",
    Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Fliplift"
  }
  , {
    _id: 8310,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.86.757",
    Description: "Aventos HL Set Euroschrauben 300",
    Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "weiß",
    Category: "Fliplift"
  }
  , {
    _id: 8311,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.86.758",
    Description: "Aventos HL Set Euroschrauben 390",
    Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "weiß",
    Category: "Fliplift"
  }
  , {
    _id: 8312,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.86.557",
    Description: "Aventos HL Set Euroschrauben 300",
    Description2: "2 Kraftspeicher mit Abdeckkappen grau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8313,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.86.558",
    Description: "Aventos HL Set Euroschrauben 390",
    Description2: "2 Kraftspeicher mit Abdeckkappen grau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8314,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.86.567",
    Description: "Aventos HL Set Euroschrauben 300",
    Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Grey",
    Category: "Fliplift"
  }
  , {
    _id: 8315,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.86.568",
    Description: "Aventos HL Set Euroschrauben 390",
    Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
    Length: 185,
    Width: 162,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "oriongrau",
    Category: "Fliplift"
  }
  , {
    _id: 8316,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.86.681",
    Description: "Hebelarm Set for Aventos HL",
    Description2: "300 - 340mm Korpushöhe",
    Length: 18,
    Width: 300,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8317,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.86.682",
    Description: "Hebelarm Set for Aventos HL",
    Description2: "340 - 390mm Korpushöhe",
    Length: 18,
    Width: 340,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8318,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.86.683",
    Description: "Hebelarm Set for Aventos HL",
    Description2: "390 - 540mm Korpushöhe",
    Length: 18,
    Width: 390,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8319,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.86.684",
    Description: "Hebelarm Set for Aventos HL",
    Description2: "480 - 580mm Korpushöhe",
    Length: 18,
    Width: 480,
    Thickness: 35,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8320,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "365.46.061",
    Description: "Seilzugklappenhalter für Barklappen",
    Description2: "Anschlag links",
    Length: 313,
    Width: 46,
    Thickness: 25,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Aluminium",
    Category: "Fliplift"
  }
  , {
    _id: 8321,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "365.46.060",
    Description: "Seilzugklappenhalter für Barklappen",
    Description2: "Anschlag rechts",
    Length: 313,
    Width: 46,
    Thickness: 25,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "Aluminium",
    Category: "Fliplift"
  }
  , {
    _id: 8322,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.95.703",
    Description: "Aventos HK XS für kleinere einteilige Klappen",
    Description2: "800 - 1800",
    Length: 177,
    Width: 94,
    Thickness: 20,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8323,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.95.702",
    Description: "Aventos HK XS für kleinere einteilige Klappen",
    Description2: "500 - 1500",
    Length: 177,
    Width: 94,
    Thickness: 20,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8324,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.95.701",
    Description: "Aventos HK XS für kleinere einteilige Klappen",
    Description2: "200 - 1000",
    Length: 177,
    Width: 94,
    Thickness: 20,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8325,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.95.780",
    Description: "Frontbefestigung Aventos HK XS",
    Description2: "vormontierte Spreizdübel",
    Length: 43,
    Width: 29,
    Thickness: 17,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8326,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.95.790",
    Description: "Korpusbefestigung Aventos HK XS",
    Description2: "vormontierte Spreizdübel",
    Length: 68,
    Width: 37,
    Thickness: 20,
    Weight: 0,
    UnitOfWeight: "kg",
    Color: "vernickelt",
    Category: "Fliplift"
  }
  , {
    _id: 8327,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "342.22.060",
    Description: "Mounting plate, steel, for screw fixing with chipboard screws",
    Description2: "For Blum Clip top Blumotion, Clip top, Clip concealed hinges, for Blum Aventos HF, HF Servo-Drive, HK-S, HK-S Tip-On front fixing brackets, Distance D: 0 mm, model no. 175H3100",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "MountingPlate"
  }
  , {
    _id: 8328,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "342.22.063",
    Description: "Mounting plate, steel, for screw fixing with chipboard screws",
    Description2: "For Blum Clip top Blumotion, Clip top, Clip concealed hinges, for Blum Aventos HF, HF Servo-Drive, HK-S, HK-S Tip-On front fixing brackets, Distance D: 3 mm, model no. 175H3130",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "MountingPlate"
  }
  , {
    _id: 8329,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "372.74.990",
    Description: "Concealed hinge, Clip Top, for Blum Aventos HF top and HF top Servo-Drive",
    Description2: "With finger protection, for screw fixing",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 8330,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.62.425",
    Description: "Furniture handle, mitre handle made of die-cast zinc",
    Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
    Length: 139,
    Width: 28,
    Thickness: 11.5,
    Weight: 0.23,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Handle"
  }
  , {
    _id: 8331,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.62.426",
    Description: "Furniture handle, mitre handle made of die-cast zinc",
    Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
    Length: 171,
    Width: 28,
    Thickness: 11.5,
    Weight: 0.25,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Handle"
  }
  , {
    _id: 8332,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.62.225",
    Description: "Furniture handle, mitre handle made of die-cast zinc",
    Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
    Length: 139,
    Width: 28,
    Thickness: 11.5,
    Weight: 0.23,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Handle"
  }
  , {
    _id: 8333,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.62.226",
    Description: "Furniture handle, mitre handle made of die-cast zinc",
    Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
    Length: 171,
    Width: 28,
    Thickness: 11.5,
    Weight: 0.25,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Handle"
  }
  , {
    _id: 8334,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.62.525",
    Description: "Furniture handle, mitre handle made of die-cast zinc",
    Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
    Length: 139,
    Width: 28,
    Thickness: 11.5,
    Weight: 0.23,
    UnitOfWeight: "kg",
    Color: "BrassPlatedAntique",
    Category: "Handle"
  }
  , {
    _id: 8335,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.62.526",
    Description: "Furniture handle, mitre handle made of die-cast zinc",
    Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
    Length: 171,
    Width: 28,
    Thickness: 11.5,
    Weight: 0.25,
    UnitOfWeight: "kg",
    Color: "BrassPlatedAntique",
    Category: "Handle"
  }
  , {
    _id: 8336,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.62.625",
    Description: "Furniture handle, mitre handle made of die-cast zinc",
    Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
    Length: 139,
    Width: 28,
    Thickness: 11.5,
    Weight: 0.23,
    UnitOfWeight: "kg",
    Color: "NickelPlated",
    Category: "Handle"
  }
  , {
    _id: 8337,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.62.626",
    Description: "Furniture handle, mitre handle made of die-cast zinc",
    Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
    Length: 171,
    Width: 28,
    Thickness: 11.5,
    Weight: 0.25,
    UnitOfWeight: "kg",
    Color: "NickelPlated",
    Category: "Handle"
  }
  , {
    _id: 8338,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.61.214",
    Description: "Furniture handle, bow handle made of die-cast zinc",
    Description2: "Häfele Design model H1510, dimension A: 340 mm, dimension B: 30 mm, dimension C: 288 mm, dimension C1: 320 mm, nickel-plated brushed",
    Length: 212,
    Width: 30,
    Thickness: 12,
    Weight: 0.18,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Handle"
  }
  , {
    _id: 8339,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.61.217",
    Description: "Furniture handle, bow handle made of die-cast zinc",
    Description2: "Häfele Design model H1510, dimension A: 340 mm, dimension B: 30 mm, dimension C: 288 mm, dimension C1: 320 mm, nickel-plated brushed",
    Length: 340,
    Width: 30,
    Thickness: 12,
    Weight: 0.22,
    UnitOfWeight: "kg",
    Color: "Stahl",
    Category: "Handle"
  }
  , {
    _id: 8340,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.61.014",
    Description: "Furniture handle, bow handle made of die-cast zinc",
    Description2: "Häfele Design model H1510, dimension A: 212 mm, dimension B: 30 mm, dimension C: 160 mm, dimension C1: 192 mm, nickel-plated brushed",
    Length: 212,
    Width: 30,
    Thickness: 12,
    Weight: 0.18,
    UnitOfWeight: "kg",
    Color: "NickelPlated",
    Category: "Handle"
  }
  , {
    _id: 8341,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "106.61.017",
    Description: "Furniture handle, bow handle made of die-cast zinc",
    Description2: "Häfele Design model H1510, dimension A: 340 mm, dimension B: 30 mm, dimension C: 288 mm, dimension C1: 320 mm, nickel-plated brushed",
    Length: 340,
    Width: 30,
    Thickness: 12,
    Weight: 0.22,
    UnitOfWeight: "kg",
    Color: "NickelPlated",
    Category: "Handle"
  }
  , {
    _id: 8342,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.100",
    Description: "Griff Edelst.matt  12/1000x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 1000,
    Width: 35,
    Thickness: 12,
    Weight: 0.5,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 8343,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.101",
    Description: "Griff Edelst.matt  12/1100x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 1100,
    Width: 35,
    Thickness: 12,
    Weight: 0.6,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 8344,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.102",
    Description: "Griff Edelst.matt  12/1200x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 1200,
    Width: 35,
    Thickness: 12,
    Weight: 0.7,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 8345,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.103",
    Description: "Griff Edelst.matt  12/1300x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 1300,
    Width: 35,
    Thickness: 12,
    Weight: 0.8,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 8346,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.104",
    Description: "Griff Edelst.matt  12/1400x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 1400,
    Width: 35,
    Thickness: 12,
    Weight: 0.9,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 8347,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.106",
    Description: "Griff Edelst.matt  12/1500x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 1500,
    Width: 35,
    Thickness: 12,
    Weight: 1,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 8348,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.107",
    Description: "Griff Edelst.matt  12/1600x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 1600,
    Width: 35,
    Thickness: 12,
    Weight: 1.1,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 8349,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.108",
    Description: "Griff Edelst.matt  12/1800x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 1800,
    Width: 35,
    Thickness: 12,
    Weight: 1.3,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 8350,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "117.66.109",
    Description: "Griff Edelst.matt  12/2000x35mm",
    Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
    Length: 2000,
    Width: 35,
    Thickness: 12,
    Weight: 1.5,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 8351,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "112.02.105",
    Description: "Knopf Schwarz.matt      20x30mm",
    Description2: "Möbelknopf schwarz, zylindrisch, mit Griffmulde",
    Length: 20,
    Width: 30,
    Thickness: 20,
    Weight: 0.12,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Handle"
  }
  , {
    _id: 8352,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "110.35.393",
    Description: "Möbelknopf, traditionell",
    Description2: "Edelstahl, Länge: 30 mm, Höhe: 28 mm, Knopfdurchmesser: 30 mm",
    Length: 29,
    Width: 30,
    Thickness: 29,
    Weight: 0.18,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Handle"
  }
  , {
    _id: 8353,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "110.35.392",
    Description: "Möbelknopf, traditionell",
    Description2: "Vekehrsschwarz, Länge: 30 mm, Höhe: 28 mm, Knopfdurchmesser: 30 mm",
    Length: 29,
    Width: 30,
    Thickness: 29,
    Weight: 0.18,
    UnitOfWeight: "kg",
    Color: "BrassPlatedAntique",
    Category: "Handle"
  }
  , {
    _id: 8354,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "110.35.394",
    Description: "Möbelknopf, traditionell",
    Description2: "Verkupfert antik, Länge: 30 mm, Höhe: 28 mm, Knopfdurchmesser: 30 mm",
    Length: 29,
    Width: 30,
    Thickness: 29,
    Weight: 0.18,
    UnitOfWeight: "kg",
    Color: "Edelstahl",
    Category: "Handle"
  }
  , {
    _id: 8355,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "342.78.700",
    Description: "Flap hinge, 90°, 3D adjustable, for wooden flaps",
    Description2: "for screw fixing, for panel thickness from 18 mm, Zinc alloy, nickel plated",
    Length: 0,
    Width: 0,
    Thickness: 0,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "NickelPlated",
    Category: "Hinge"
  }
  , {
    _id: 8356,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "260.28.004",
    Description: "Chair bracket, With 4 screw holes",
    Description2: "Stainless steel, Dim. (A x B x C): 40 x 40 x 15 mm",
    Length: 40,
    Width: 15,
    Thickness: 40,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "StainlessSteelMattBrushed",
    Category: "Bracket"
  }
  , {
    _id: 8357,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "637.76.355",
    Description: "Rohr Axilo 78 Kst.schw.m.Verstellt.150mm",
    Description2: "Rohr mit Einschraubgleiter, für Sockelsystem Häfele AXILO® 78",
    Length: 79,
    Width: 79,
    Thickness: 147,
    Weight: 0.325,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "PlinthAndLeg"
  }
  , {
    _id: 8358,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "262.50.368",
    Description: "Frame part, Häfele Pacofix PF-L, with mounting lug",
    Description2: "Installation with chipboard screws with countersunk head",
    Length: 10.2,
    Width: 38,
    Thickness: 46,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Black",
    Category: ""
  }
  , {
    _id: 8359,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "262.50.359",
    Description: "Panel component, Häfele Pacofix PF",
    Description2: "Installation with chipboard screws with countersunk head",
    Length: 23,
    Width: 48,
    Thickness: 29,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Black",
    Category: ""
  }
  , {
    _id: 8360,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "595.18.260",
    Description: "No.15 Classic Silver",
    Description2: "Unterschran-Frontauszug  2-etagig",
    Length: 533,
    Width: 37,
    Thickness: 288,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "Edelstahl",
    Category: ""
  }
  , {
    _id: 8361,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.911",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1200-1600mm hoch, 300 mm breit, weißaluminium",
    Length: 1600,
    Width: 300,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "weißaluminium",
    Category: "PantryPullout"
  }
  , {
    _id: 8362,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.921",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1600-2000mm hoch, 300 mm breit, weißaluminium",
    Length: 1900,
    Width: 300,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "weißaluminium",
    Category: "PantryPullout"
  }
  , {
    _id: 8363,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.931",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1900-2300mm hoch, 300 mm breit, weißaluminium",
    Length: 2300,
    Width: 300,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "weißaluminium",
    Category: "PantryPullout"
  }
  , {
    _id: 8364,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.913",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1200-1600mm hoch, 400 mm breit, weißaluminium",
    Length: 1600,
    Width: 400,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "weißaluminium",
    Category: "PantryPullout"
  }
  , {
    _id: 8365,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.923",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1600-2000mm hoch, 400 mm breit, weißaluminium",
    Length: 1900,
    Width: 400,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "weißaluminium",
    Category: "PantryPullout"
  }
  , {
    _id: 8366,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.933",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1900-2300mm hoch, 400 mm breit, weißaluminium",
    Length: 2300,
    Width: 400,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "weißaluminium",
    Category: "PantryPullout"
  }
  , {
    _id: 8367,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.711",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1200-1600mm hoch, 300 mm breit, anthrazit",
    Length: 1600,
    Width: 300,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "anthrazit",
    Category: "PantryPullout"
  }
  , {
    _id: 8368,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.721",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1600-2000mm hoch, 300 mm breit, anthrazit",
    Length: 1900,
    Width: 300,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "anthrazit",
    Category: "PantryPullout"
  }
  , {
    _id: 8369,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.731",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1900-2300mm hoch, 300 mm breit, anthrazit",
    Length: 2300,
    Width: 300,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "anthrazit",
    Category: "PantryPullout"
  }
  , {
    _id: 8370,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.713",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1200-1600mm hoch, 400 mm breit, anthrazit",
    Length: 1600,
    Width: 400,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "anthrazit",
    Category: "PantryPullout"
  }
  , {
    _id: 8371,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.723",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1600-2000mm hoch, 400 mm breit, anthrazit",
    Length: 1900,
    Width: 400,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "anthrazit",
    Category: "PantryPullout"
  }
  , {
    _id: 8372,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.59.733",
    Description: "Hochschrank Frontauszug Dispensa",
    Description2: "1900-2300mm hoch, 400 mm breit, anthrazit",
    Length: 2300,
    Width: 400,
    Thickness: 500,
    Weight: 100,
    UnitOfWeight: "kg",
    Color: "anthrazit",
    Category: "PantryPullout"
  }
  , {
    _id: 8373,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.75.243",
    Description: "Einhängetablar mit Anti-Rutsch-Effekt",
    Description2: "Classic 250 mm",
    Length: 462,
    Width: 250,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "verchromt",
    Category: "PantryPullout"
  }
  , {
    _id: 8374,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.75.244",
    Description: "Einhängetablar mit Anti-Rutsch-Effekt",
    Description2: "Classic 350 mm",
    Length: 462,
    Width: 350,
    Thickness: 106,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "verchromt",
    Category: "PantryPullout"
  }
  , {
    _id: 8375,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.75.253",
    Description: "Einhängetablar mit Anti-Rutsch-Effekt",
    Description2: "Style verchromt 250 mm",
    Length: 464,
    Width: 250,
    Thickness: 93,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "verchromt",
    Category: "PantryPullout"
  }
  , {
    _id: 8376,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.75.254",
    Description: "Einhängetablar mit Anti-Rutsch-Effekt",
    Description2: "Style verchromt 350 mm",
    Length: 464,
    Width: 350,
    Thickness: 93,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "verchromt",
    Category: "PantryPullout"
  }
  , {
    _id: 8377,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.75.453",
    Description: "Einhängetablar mit Anti-Rutsch-Effekt",
    Description2: "Style anthrazit 250 mm",
    Length: 464,
    Width: 250,
    Thickness: 93,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "anthrazit",
    Category: "PantryPullout"
  }
  , {
    _id: 8378,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "546.75.459",
    Description: "Einhängetablar mit Anti-Rutsch-Effekt",
    Description2: "Style anthrazit 350 mm",
    Length: 464,
    Width: 350,
    Thickness: 93,
    Weight: undefined,
    UnitOfWeight: "",
    Color: "anthrazit",
    Category: "PantryPullout"
  }
  , {
    _id: 8379,
    in_Supplier: "Kesseboehmer",
    in_SupplierArticleNumber: "Conero625",
    Description: "Kessseböhmer Conero 625",
    Description2: "Kleiderlift schwarz",
    Length: 705,
    Width: 625,
    Thickness: 212,
    Weight: 1,
    UnitOfWeight: "kg",
    Color: "schwarz",
    Category: "ClothingOrganizer"
  }
  , {
    _id: 8380,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "811.67.303",
    Description: "Hosenauszug, Kesseböhmer Conero, 72 H",
    Description2: "Hosenauszug, Kesseböhmer Conero, 72 H lichte Schrankbreite 534–594 mm, 7 Hosenbügel",
    Length: 482,
    Width: 594,
    Thickness: 72,
    Weight: 1,
    UnitOfWeight: "kg",
    Color: "schwarz",
    Category: "ClothingOrganizer"
  }
  , {
    _id: 8381,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "151.38.111",
    Description: "Inset handle, Häfele Déco, stainless steel",
    Description2: "Oval, for wooden sliding doors, Matt black, PVD coated",
    Length: 130,
    Width: 30,
    Thickness: 13,
    Weight: 2,
    UnitOfWeight: "kg",
    Color: "Black",
    Category: "Handle"
  }
  , {
    _id: 8382,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "151.01.505",
    Description: "Inset handle, Häfele Déco, stainless steel",
    Description2: "Oval, for wooden sliding doors, satin brushed",
    Length: 130,
    Width: 30,
    Thickness: 13,
    Weight: 2,
    UnitOfWeight: "kg",
    Color: "StainlessSteel",
    Category: "Handle"
  }
  , {
    _id: 8383,
    in_Supplier: "Haefele",
    in_SupplierArticleNumber: "811.61.381",
    Description: "Gürtel- und Krawattenauszug, Kesseböhmer Conero",
    Description2: "Gürtel- und Krawattenauszug, mit Gleitführung, Kesseböhmer Conero, ohne Schale, für lichte Korpustiefe ≥475 mm",
    Length: 450,
    Width: 79.5,
    Thickness: 73,
    Weight: 1,
    UnitOfWeight: "kg",
    Color: "schwarz",
    Category: "ClothingOrganizer"
  }
];
