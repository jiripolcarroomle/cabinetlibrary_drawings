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

export interface cti_tab_PartSettings {
  readonly in_Part?: string;
  readonly in_AdditionalInfo1?: string;
}

export interface ctm_tab_PartSettings {
}

export interface cto_tab_PartSettings extends ctm_tab_PartSettings {
  readonly _id: number;
  readonly BomPartDescription?: string;
  readonly PartGroup?: string;
  readonly OpeningDirection?: string;
  readonly EdgeTypeNecessary?: boolean;
  readonly BomArticleGroup?: string;
  readonly ColorIdParent?: string;
}

export interface ICT_tab_PartSettings
  extends cti_tab_PartSettings, cto_tab_PartSettings { }

export class ct2_tab_PartSettings {

  public findExactly(
    in_Part: string | undefined,
    in_AdditionalInfo1: string | undefined,
  ): cto_tab_PartSettings | undefined {
    const res = ct_tab_PartSettings.find((p) =>
      p.in_Part === in_Part
      && p.in_AdditionalInfo1 === in_AdditionalInfo1
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_PartSettings) => boolean
  ): cto_tab_PartSettings | undefined {
    for (let index = 0; index < ct_tab_PartSettings.length; index++) {
      const element = ct_tab_PartSettings[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_PartSettings: ICT_tab_PartSettings[] = [
  {
    _id: 928,
    in_Part: "part_Backwall",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Back Panel",
    PartGroup: "Backwall",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 929,
    in_Part: "part_Railhortopback",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Rail Horizontal in Top/Back",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 930,
    in_Part: "part_Railverttopback",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Rail Vertical in Top/Back",
    PartGroup: "RailVertical",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 931,
    in_Part: "part_Railhortopfront",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Rail Horizontal in Top/Front",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 932,
    in_Part: "part_Railverttopfront",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Rail Vertical in Top/Front",
    PartGroup: "RailVertical",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 933,
    in_Part: "part_ShelfadjGlass",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Adjustable Shelf",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 934,
    in_Part: "part_Shelftop",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Top Shelf",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 935,
    in_Part: "part_Shelfbtm",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Bottom Shelf",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 936,
    in_Part: "part_Shelffixed",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Fixed Shelf",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 937,
    in_Part: "part_Sidepanelleft",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Left Side Panel",
    PartGroup: "Sides",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 938,
    in_Part: "part_Sidepanelright",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Right Side Panel",
    PartGroup: "Sides",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 939,
    in_Part: "part_Sidepanelmiddle",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Middle Side Panel",
    PartGroup: "Sides",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 940,
    in_Part: "part_Drawer",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Drawer",
    PartGroup: "Drawer",
    OpeningDirection: "Front",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 941,
    in_Part: "part_Leg",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Leg",
    PartGroup: "Legs",
    OpeningDirection: "None",
    EdgeTypeNecessary: undefined,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 942,
    in_Part: "part_Handle",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Handle",
    PartGroup: "Handle",
    OpeningDirection: "None",
    EdgeTypeNecessary: undefined,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 943,
    in_Part: "part_Handlestrip",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Handlestrip",
    PartGroup: "Handle",
    OpeningDirection: "None",
    EdgeTypeNecessary: undefined,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 944,
    in_Part: "part_ShelfadjFitting",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Fittings adjustable shelf",
    PartGroup: "Adjustable shelf fittings",
    OpeningDirection: "None",
    EdgeTypeNecessary: undefined,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 945,
    in_Part: "part_HingeDoor",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Hinge",
    PartGroup: "Hinge",
    OpeningDirection: "None",
    EdgeTypeNecessary: undefined,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 946,
    in_Part: "part_HingeCarcase",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Mounting Plate",
    PartGroup: "Hinge",
    OpeningDirection: "None",
    EdgeTypeNecessary: undefined,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 947,
    in_Part: "part_ShelfadjWood",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Adjustable shelf",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 948,
    in_Part: "part_HangerSystem",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Hanger System",
    PartGroup: "Hangers",
    OpeningDirection: "None",
    EdgeTypeNecessary: undefined,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 949,
    in_Part: "part_RackAreaUnit",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Rack Area Unit",
    PartGroup: "RackArea",
    OpeningDirection: "None",
    EdgeTypeNecessary: undefined,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 950,
    in_Part: "part_DrawerShelfbtm",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Bottom shelf of drawer box",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 951,
    in_Part: "part_DrawerBackwallWood",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Wooden backwall of drawer box",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 952,
    in_Part: "part_Duststrip",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Dust strip",
    PartGroup: "Dust strip",
    OpeningDirection: "None",
    EdgeTypeNecessary: undefined,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 953,
    in_Part: "part_Backsplash",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Backsplash",
    PartGroup: "Backsplash",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "AdditionalParts",
    ColorIdParent: "All"
  }
  , {
    _id: 954,
    in_Part: "part_Countertop",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Countertop",
    PartGroup: "Countertop",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Countertop",
    ColorIdParent: "All"
  }
  , {
    _id: 955,
    in_Part: "part_FinishPanel",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Finishpanel",
    PartGroup: "Finishpanel",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "AdditionalParts",
    ColorIdParent: "All"
  }
  , {
    _id: 956,
    in_Part: "part_Toekick",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Toekick",
    PartGroup: "Toekick",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Toekick",
    ColorIdParent: "All"
  }
  , {
    _id: 957,
    in_Part: "part_CleatVert",
    in_AdditionalInfo1: "All",
    BomPartDescription: "CleatVert",
    PartGroup: "Vertical Divider",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 958,
    in_Part: "part_PushtoopenBom",
    in_AdditionalInfo1: "All",
    BomPartDescription: "PushToOpen",
    PartGroup: "PushToOpen",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 959,
    in_Part: "part_DrawerPanelWoodFrame",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Drawer",
    PartGroup: "Drawer",
    OpeningDirection: "Front",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 960,
    in_Part: "part_PanelWoodFrameBtm",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Horizontal panels for wood frame",
    PartGroup: "PanelWoodFrameHor",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 961,
    in_Part: "part_PanelWoodFrameTop",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Horizontal panels for wood frame",
    PartGroup: "PanelWoodFrameHor",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 962,
    in_Part: "part_PanelWoodFrameLeft",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Vertical panels for wood frame",
    PartGroup: "PanelWoodFrameVert",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 963,
    in_Part: "part_PanelWoodFrameRight",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Vertical panels for wood frame",
    PartGroup: "PanelWoodFrameVert",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 964,
    in_Part: "part_PanelWoodFrameFilling",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Filling for panel wood frames",
    PartGroup: "PanelWoodFrameFilling",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 965,
    in_Part: "part_Door",
    in_AdditionalInfo1: "Left",
    BomPartDescription: "Left Door",
    PartGroup: "Door",
    OpeningDirection: "Left",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 966,
    in_Part: "part_Door",
    in_AdditionalInfo1: "Right",
    BomPartDescription: "Right Door",
    PartGroup: "Door",
    OpeningDirection: "Right",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 967,
    in_Part: "part_DoorPanelWoodFrame",
    in_AdditionalInfo1: "Left",
    BomPartDescription: "Left Door Panel Wood Frame",
    PartGroup: "Door",
    OpeningDirection: "Left",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 968,
    in_Part: "part_DoorPanelWoodFrame",
    in_AdditionalInfo1: "Right",
    BomPartDescription: "Right Door Panel Wood Frame",
    PartGroup: "Door",
    OpeningDirection: "Right",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 969,
    in_Part: "part_Fliplift",
    in_AdditionalInfo1: "SHF",
    BomPartDescription: "Swing high flip lift",
    PartGroup: "Fliplift",
    OpeningDirection: "Up",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 970,
    in_Part: "part_Fliplift",
    in_AdditionalInfo1: "FHF",
    BomPartDescription: "Folding high flip lift",
    PartGroup: "Fliplift",
    OpeningDirection: "Up",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 971,
    in_Part: "part_Fliplift",
    in_AdditionalInfo1: "LHF",
    BomPartDescription: "High flip lift",
    PartGroup: "Fliplift",
    OpeningDirection: "Up",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 972,
    in_Part: "part_Fliplift",
    in_AdditionalInfo1: "UF",
    BomPartDescription: "Upwards opening flap",
    PartGroup: "Fliplift",
    OpeningDirection: "Up",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 973,
    in_Part: "part_Fliplift",
    in_AdditionalInfo1: "DF",
    BomPartDescription: "Downwards opening flap",
    PartGroup: "Fliplift",
    OpeningDirection: "Down",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 974,
    in_Part: "part_FlipliftPanelWoodFrame",
    in_AdditionalInfo1: "SHF",
    BomPartDescription: "Swing high flip lift wood frame",
    PartGroup: "Fliplift",
    OpeningDirection: "Up",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 975,
    in_Part: "part_FlipliftPanelWoodFrame",
    in_AdditionalInfo1: "FHF",
    BomPartDescription: "Folding high flip lift wood frame",
    PartGroup: "Fliplift",
    OpeningDirection: "Up",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 976,
    in_Part: "part_FlipliftPanelWoodFrame",
    in_AdditionalInfo1: "LHF",
    BomPartDescription: "High flip lift wood frame",
    PartGroup: "Fliplift",
    OpeningDirection: "Up",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 977,
    in_Part: "part_FlipliftPanelWoodFrame",
    in_AdditionalInfo1: "UF",
    BomPartDescription: "Upwards opening flap wood frame",
    PartGroup: "Fliplift",
    OpeningDirection: "Up",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 978,
    in_Part: "part_FlipliftPanelWoodFrame",
    in_AdditionalInfo1: "DF",
    BomPartDescription: "Downwards opening flap wood frame",
    PartGroup: "Fliplift",
    OpeningDirection: "Down",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 979,
    in_Part: "part_Fixedfront",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Fixedfront",
    PartGroup: "Fixedfront",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 980,
    in_Part: "part_FixedfrontPanelWoodFrame",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Fixedfront",
    PartGroup: "Fixedfront",
    OpeningDirection: "Front",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 981,
    in_Part: "part_Heatshelf",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Heatshelf",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 982,
    in_Part: "part_HeatshelfFront",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Heatshelf front",
    PartGroup: "RailVertical",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 983,
    in_Part: "part_Panelblind",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Blind panel",
    PartGroup: "RailVertical",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 984,
    in_Part: "part_SlopedCeilingShelftopHor",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Sloped Ceiling Top Shelf Horizontal",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 985,
    in_Part: "part_SlopedCeilingShelftopAngle",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Sloped Ceiling Top Shelf Angled",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: true,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 986,
    in_Part: "part_Filler",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Filler front",
    PartGroup: "Filler",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 987,
    in_Part: "part_DishwasherPanel",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Dish washer panel",
    PartGroup: "Dishwasher",
    OpeningDirection: "Down",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 988,
    in_Part: "part_DishwasherPanelWoodFrame",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Dish washer panel wood frame",
    PartGroup: "Dishwasher",
    OpeningDirection: "Down",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 989,
    in_Part: "part_Paneltop",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Paneltop",
    PartGroup: "Paneltop",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Countertop",
    ColorIdParent: "All"
  }
  , {
    _id: 990,
    in_Part: "part_Pullout",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Pullout",
    PartGroup: "Pullout",
    OpeningDirection: "Front",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 991,
    in_Part: "part_BaseunitFridgePanel",
    in_AdditionalInfo1: "Left",
    BomPartDescription: "Left door baseunit fridge panel",
    PartGroup: "Door",
    OpeningDirection: "Left",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 992,
    in_Part: "part_BaseunitFridgePanel",
    in_AdditionalInfo1: "Right",
    BomPartDescription: "Right door baseunit fridge panel",
    PartGroup: "Door",
    OpeningDirection: "Right",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 993,
    in_Part: "part_BaseunitFridgePanelWoodFrame",
    in_AdditionalInfo1: "Left",
    BomPartDescription: "Left door baseunit fridge wood panel",
    PartGroup: "Door",
    OpeningDirection: "Left",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 994,
    in_Part: "part_BaseunitFridgePanelWoodFrame",
    in_AdditionalInfo1: "Right",
    BomPartDescription: "Right door baseunit fridge wood panel",
    PartGroup: "Door",
    OpeningDirection: "Right",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 995,
    in_Part: "part_Baseboard",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Baseboard",
    PartGroup: "Shelves",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Toekick",
    ColorIdParent: "All"
  }
  , {
    _id: 996,
    in_Part: "part_PantryPullout",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Pantry pullout",
    PartGroup: "Pullout",
    OpeningDirection: "Front",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Front",
    ColorIdParent: "All"
  }
  , {
    _id: 997,
    in_Part: "part_ClothingOrganizerBoard",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Clothing storage board",
    PartGroup: "ClothingShelf",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Carcase",
    ColorIdParent: "All"
  }
  , {
    _id: 998,
    in_Part: "part_FillerHardware",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Filler Hardware",
    PartGroup: "Filler",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 999,
    in_Part: "part_DrawerBoxBom",
    in_AdditionalInfo1: "All",
    BomPartDescription: "DrawerBox",
    PartGroup: "Drawer",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 1000,
    in_Part: "part_FlipliftHardwareBom",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Fliplift",
    PartGroup: "Fliplift",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 1001,
    in_Part: "part_PantryPulloutBom",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Pantry pullout",
    PartGroup: "Pullout",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 1002,
    in_Part: "part_PulloutHardware",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Pullout",
    PartGroup: "Pullout",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
  , {
    _id: 1003,
    in_Part: "part_ClothingOrganizerBOM",
    in_AdditionalInfo1: "All",
    BomPartDescription: "Clothing organizer",
    PartGroup: "Clothing organizer",
    OpeningDirection: "None",
    EdgeTypeNecessary: false,
    BomArticleGroup: "Fitting",
    ColorIdParent: "All"
  }
];
