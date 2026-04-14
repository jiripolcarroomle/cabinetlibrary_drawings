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

export interface cti_tab_BoardLibrary {
  readonly in_BoardId?: string;
}

export interface ctm_tab_BoardLibrary {
}

export interface cto_tab_BoardLibrary extends ctm_tab_BoardLibrary {
  readonly _id: number;
  readonly DecorCode?: string;
  readonly MaterialCode?: string;
  readonly Description?: string;
  readonly BoardLength: number;
  readonly BoardWidth: number;
  readonly BoardThk: number;
  readonly BoardDensity: number;
  readonly BoardType?: string;
  readonly Grain?: string;
  readonly Supplier?: string;
  readonly SupplierDescription?: string;
  readonly SupplierArticleNumber?: string;
  readonly GTIN?: string;
}

export interface ICT_tab_BoardLibrary
  extends cti_tab_BoardLibrary, cto_tab_BoardLibrary { }

export class ct2_tab_BoardLibrary {

  public findExactly(
    in_BoardId: string | undefined,
  ): cto_tab_BoardLibrary | undefined {
    const res = ct_tab_BoardLibrary.find((p) =>
      p.in_BoardId === in_BoardId
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_BoardLibrary) => boolean
  ): cto_tab_BoardLibrary | undefined {
    for (let index = 0; index < ct_tab_BoardLibrary.length; index++) {
      const element = ct_tab_BoardLibrary[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_BoardLibrary: ICT_tab_BoardLibrary[] = [
  {
    _id: 2499,
    in_BoardId: "U708ST9_8",
    DecorCode: "U708ST9",
    MaterialCode: "P2_Light_grey_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2500,
    in_BoardId: "U708ST9_16",
    DecorCode: "U708ST9",
    MaterialCode: "P2_Light_grey_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2501,
    in_BoardId: "U727PM_19",
    DecorCode: "U727PM",
    MaterialCode: "U727PM_19",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2502,
    in_BoardId: "U645ST9_25",
    DecorCode: "U645ST9",
    MaterialCode: "P2_Seaweed_green_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Agavengrün_25.0",
    SupplierArticleNumber: "1765408",
    GTIN: "9010771832695"
  }
  , {
    _id: 2503,
    in_BoardId: "U645ST9_38",
    DecorCode: "U645ST9",
    MaterialCode: "P2_Seaweed_green_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Agavengrün_38.0",
    SupplierArticleNumber: "1765410",
    GTIN: "9010771832718"
  }
  , {
    _id: 2504,
    in_BoardId: "U708ST9_19",
    DecorCode: "U708ST9",
    MaterialCode: "P2_Light_grey_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2505,
    in_BoardId: "U999ST7_19",
    DecorCode: "U999ST7",
    MaterialCode: "P2_Jet_black_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Schwarz_19.0",
    SupplierArticleNumber: "1764867",
    GTIN: "9010771827264"
  }
  , {
    _id: 2506,
    in_BoardId: "U999ST7_16",
    DecorCode: "U999ST7",
    MaterialCode: "P2_Jet_black_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Schwarz_16.0",
    SupplierArticleNumber: "1764866",
    GTIN: "9010771827257"
  }
  , {
    _id: 2507,
    in_BoardId: "W1000PM_40",
    DecorCode: "W1000PM",
    MaterialCode: "W1000PM_40",
    Description: "",
    BoardLength: 5000,
    BoardWidth: 1300,
    BoardThk: 40,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2508,
    in_BoardId: "U502ST9_16",
    DecorCode: "U502ST9",
    MaterialCode: "P2_Cloudy_blue_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Nebelblau_16.0",
    SupplierArticleNumber: "1766428",
    GTIN: "9010771842977"
  }
  , {
    _id: 2509,
    in_BoardId: "U502ST9_8",
    DecorCode: "U502ST9",
    MaterialCode: "P2_Cloudy_blue_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Nebelblau_8.0",
    SupplierArticleNumber: "1680885",
    GTIN: "9010771201408"
  }
  , {
    _id: 2510,
    in_BoardId: "U560ST9_40",
    DecorCode: "U560ST9",
    MaterialCode: "U560ST9_40",
    Description: "",
    BoardLength: 5000,
    BoardWidth: 1300,
    BoardThk: 40,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2511,
    in_BoardId: "U575ST9_19",
    DecorCode: "U575ST9",
    MaterialCode: "P2_Denim_blue_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Kosmosblau_19.0",
    SupplierArticleNumber: "1765312",
    GTIN: "9010771831704"
  }
  , {
    _id: 2512,
    in_BoardId: "U575ST9_8",
    DecorCode: "U575ST9",
    MaterialCode: "P2_Denim_blue_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Kosmosblau_8.0",
    SupplierArticleNumber: "1765317",
    GTIN: "9010771831773"
  }
  , {
    _id: 2513,
    in_BoardId: "U626ST9_8",
    DecorCode: "U626ST9",
    MaterialCode: "U626ST9_8",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2514,
    in_BoardId: "U323ST9_25",
    DecorCode: "U323ST9",
    MaterialCode: "U323ST9_25",
    Description: "",
    BoardLength: 3000,
    BoardWidth: 1300,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2515,
    in_BoardId: "H1181ST37_16",
    DecorCode: "H1181ST37",
    MaterialCode: "H1181ST37_16",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2516,
    in_BoardId: "H1181ST37_19",
    DecorCode: "H1181ST37",
    MaterialCode: "H1181ST37_19",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2517,
    in_BoardId: "H1181ST37_25",
    DecorCode: "H1181ST37",
    MaterialCode: "H1181ST37_25",
    Description: "",
    BoardLength: 3000,
    BoardWidth: 1300,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2518,
    in_BoardId: "H1511ST15_25",
    DecorCode: "H1511ST15",
    MaterialCode: "H1511ST15_25",
    Description: "",
    BoardLength: 3000,
    BoardWidth: 1300,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2519,
    in_BoardId: "H1511ST15_8",
    DecorCode: "H1511ST15",
    MaterialCode: "H1511ST15_8",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2520,
    in_BoardId: "H1511ST15_19",
    DecorCode: "H1511ST15",
    MaterialCode: "H1511ST15_19",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2521,
    in_BoardId: "CTBlue40Thk",
    DecorCode: "CTBlue40Thk",
    MaterialCode: "ExBoardID",
    Description: "Test Board for 40 mm thk",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 40,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2522,
    in_BoardId: "H1181ST37_8",
    DecorCode: "H1181ST37",
    MaterialCode: "H1181ST37_8",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2523,
    in_BoardId: "H1181ST37_40",
    DecorCode: "H1181ST37",
    MaterialCode: "H1181ST37_40",
    Description: "",
    BoardLength: 5000,
    BoardWidth: 1300,
    BoardThk: 40,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2524,
    in_BoardId: "H1511ST15_40",
    DecorCode: "H1511ST15",
    MaterialCode: "H1511ST15_40",
    Description: "",
    BoardLength: 5000,
    BoardWidth: 1300,
    BoardThk: 40,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2525,
    in_BoardId: "H1511ST15_16",
    DecorCode: "H1511ST15",
    MaterialCode: "H1511ST15_16",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2526,
    in_BoardId: "H3860ST9_8",
    DecorCode: "H3860ST9",
    MaterialCode: "P2_Maple_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Hard_Maple_champagne_8.0",
    SupplierArticleNumber: "1765004",
    GTIN: "9010771828636"
  }
  , {
    _id: 2527,
    in_BoardId: "U502ST9_19",
    DecorCode: "U502ST9",
    MaterialCode: "P2_Cloudy_blue_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Nebelblau_19.0",
    SupplierArticleNumber: "1766429",
    GTIN: "9010771842984"
  }
  , {
    _id: 2528,
    in_BoardId: "U502ST9_25",
    DecorCode: "U502ST9",
    MaterialCode: "P2_Cloudy_blue_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Nebelblau_25.0",
    SupplierArticleNumber: "1765229",
    GTIN: "9010771830844"
  }
  , {
    _id: 2529,
    in_BoardId: "U575ST9_16",
    DecorCode: "U575ST9",
    MaterialCode: "P2_Denim_blue_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Kosmosblau_16.0",
    SupplierArticleNumber: "1765311",
    GTIN: "9010771831698"
  }
  , {
    _id: 2530,
    in_BoardId: "U575ST9_25",
    DecorCode: "U575ST9",
    MaterialCode: "P2_Denim_blue_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Kosmosblau_25.0",
    SupplierArticleNumber: "1765314",
    GTIN: "9010771831735"
  }
  , {
    _id: 2531,
    in_BoardId: "U645ST9_19",
    DecorCode: "U645ST9",
    MaterialCode: "P2_Seaweed_green_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Agavengrün_19.0",
    SupplierArticleNumber: "1765406",
    GTIN: "9010771832671"
  }
  , {
    _id: 2532,
    in_BoardId: "U645ST9_16",
    DecorCode: "U645ST9",
    MaterialCode: "P2_Seaweed_green_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Agavengrün_16.0",
    SupplierArticleNumber: "1765405",
    GTIN: "9010771832664"
  }
  , {
    _id: 2533,
    in_BoardId: "U708ST9_25",
    DecorCode: "U708ST9",
    MaterialCode: "P2_Light_grey_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2534,
    in_BoardId: "U708ST9_38",
    DecorCode: "U708ST9",
    MaterialCode: "P2_Light_grey_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2535,
    in_BoardId: "U999ST7_25",
    DecorCode: "U999ST7",
    MaterialCode: "P2_Jet_black_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Schwarz_25.0",
    SupplierArticleNumber: "1764869",
    GTIN: "9010771827288"
  }
  , {
    _id: 2536,
    in_BoardId: "U999ST7_8",
    DecorCode: "U999ST7",
    MaterialCode: "P2_Jet_black_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Schwarz_8.0",
    SupplierArticleNumber: "1764872",
    GTIN: "9010771827318"
  }
  , {
    _id: 2537,
    in_BoardId: "U502ST9_38",
    DecorCode: "U502ST9",
    MaterialCode: "P2_Cloudy_blue_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Nebelblau_38.0",
    SupplierArticleNumber: "1765231",
    GTIN: "9010771830868"
  }
  , {
    _id: 2538,
    in_BoardId: "U323ST9_8",
    DecorCode: "U323ST9",
    MaterialCode: "U323ST9_8",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2539,
    in_BoardId: "U323ST9_16",
    DecorCode: "U323ST9",
    MaterialCode: "U323ST9_16",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2540,
    in_BoardId: "U323ST9_19",
    DecorCode: "U323ST9",
    MaterialCode: "U323ST9_19",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2541,
    in_BoardId: "U323ST9_40",
    DecorCode: "U323ST9",
    MaterialCode: "U323ST9_40",
    Description: "",
    BoardLength: 5000,
    BoardWidth: 1300,
    BoardThk: 40,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2542,
    in_BoardId: "U560ST9_19",
    DecorCode: "U560ST9",
    MaterialCode: "U560ST9_19",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2543,
    in_BoardId: "U560ST9_16",
    DecorCode: "U560ST9",
    MaterialCode: "U560ST9_16",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2544,
    in_BoardId: "U560ST9_8",
    DecorCode: "U560ST9",
    MaterialCode: "U560ST9_8",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2545,
    in_BoardId: "U560ST9_25",
    DecorCode: "U560ST9",
    MaterialCode: "U560ST9_25",
    Description: "",
    BoardLength: 3000,
    BoardWidth: 1300,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2546,
    in_BoardId: "U575ST9_38",
    DecorCode: "U575ST9",
    MaterialCode: "P2_Denim_blue_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Kosmosblau_38.0",
    SupplierArticleNumber: "1765316",
    GTIN: "9010771831759"
  }
  , {
    _id: 2547,
    in_BoardId: "U626ST9_16",
    DecorCode: "U626ST9",
    MaterialCode: "U626ST9_16",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2548,
    in_BoardId: "U626ST9_19",
    DecorCode: "U626ST9",
    MaterialCode: "U626ST9_19",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2549,
    in_BoardId: "U626ST9_40",
    DecorCode: "U626ST9",
    MaterialCode: "U626ST9_40",
    Description: "",
    BoardLength: 5000,
    BoardWidth: 1300,
    BoardThk: 40,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2550,
    in_BoardId: "U626ST9_25",
    DecorCode: "U626ST9",
    MaterialCode: "U626ST9_25",
    Description: "",
    BoardLength: 3000,
    BoardWidth: 1300,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2551,
    in_BoardId: "U640ST9_38",
    DecorCode: "U640ST9",
    MaterialCode: "P2_Olive_green_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Olivgrün_38.0",
    SupplierArticleNumber: "1765402",
    GTIN: "9010771832633"
  }
  , {
    _id: 2552,
    in_BoardId: "U640ST9_25",
    DecorCode: "U640ST9",
    MaterialCode: "P2_Olive_green_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Olivgrün_25.0",
    SupplierArticleNumber: "1765400",
    GTIN: "9010771832619"
  }
  , {
    _id: 2553,
    in_BoardId: "U640ST9_19",
    DecorCode: "U640ST9",
    MaterialCode: "P2_Olive_green_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Olivgrün_19.0",
    SupplierArticleNumber: "1765398",
    GTIN: "9010771832596"
  }
  , {
    _id: 2554,
    in_BoardId: "U640ST9_16",
    DecorCode: "U640ST9",
    MaterialCode: "P2_Olive_green_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Olivgrün_16.0",
    SupplierArticleNumber: "1765397",
    GTIN: "9010771832589"
  }
  , {
    _id: 2555,
    in_BoardId: "U640ST9_8",
    DecorCode: "U640ST9",
    MaterialCode: "P2_Olive_green_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Olivgrün_8.0",
    SupplierArticleNumber: "1681030",
    GTIN: "9010771201453"
  }
  , {
    _id: 2556,
    in_BoardId: "U645ST9_8",
    DecorCode: "U645ST9",
    MaterialCode: "P2_Seaweed_green_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Agavengrün_8.0",
    SupplierArticleNumber: "1680992",
    GTIN: "9010771201460"
  }
  , {
    _id: 2557,
    in_BoardId: "W1000PM_8",
    DecorCode: "W1000PM",
    MaterialCode: "W1000PM_8",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2558,
    in_BoardId: "W1000PM_16",
    DecorCode: "W1000PM",
    MaterialCode: "W1000PM_16",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2559,
    in_BoardId: "W1000PM_19",
    DecorCode: "W1000PM",
    MaterialCode: "W1000PM_19",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2560,
    in_BoardId: "W1000PM_25",
    DecorCode: "W1000PM",
    MaterialCode: "W1000PM_25",
    Description: "",
    BoardLength: 3000,
    BoardWidth: 1300,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2561,
    in_BoardId: "W980ST7_16",
    DecorCode: "W980ST7",
    MaterialCode: "P2_Sunny_white_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Platinweiss_16.0",
    SupplierArticleNumber: "1764894",
    GTIN: "9010771827530"
  }
  , {
    _id: 2562,
    in_BoardId: "U727PM_16",
    DecorCode: "U727PM",
    MaterialCode: "U727PM_16",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2563,
    in_BoardId: "U727PM_8",
    DecorCode: "U727PM",
    MaterialCode: "U727PM_8",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2564,
    in_BoardId: "U727PM_25",
    DecorCode: "U727PM",
    MaterialCode: "U727PM_25",
    Description: "",
    BoardLength: 3000,
    BoardWidth: 1300,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2565,
    in_BoardId: "U727PM_40",
    DecorCode: "U727PM",
    MaterialCode: "U727PM_40",
    Description: "",
    BoardLength: 5000,
    BoardWidth: 1300,
    BoardThk: 40,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2566,
    in_BoardId: "U999ST7_38",
    DecorCode: "U999ST7",
    MaterialCode: "P2_Jet_black_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Schwarz_38.0",
    SupplierArticleNumber: "1764871",
    GTIN: "9010771827301"
  }
  , {
    _id: 2567,
    in_BoardId: "H3860ST9_19",
    DecorCode: "H3860ST9",
    MaterialCode: "P2_Maple_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Hard_Maple_champagne_19.0",
    SupplierArticleNumber: "1765000",
    GTIN: "9010771828599"
  }
  , {
    _id: 2568,
    in_BoardId: "H3860ST9_16",
    DecorCode: "H3860ST9",
    MaterialCode: "P2_Maple_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Hard_Maple_champagne_16.0",
    SupplierArticleNumber: "1764999",
    GTIN: "9010771828582"
  }
  , {
    _id: 2569,
    in_BoardId: "H3860ST9_25",
    DecorCode: "H3860ST9",
    MaterialCode: "P2_Maple_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Hard_Maple_champagne_25.0",
    SupplierArticleNumber: "1627701",
    GTIN: "9010588835568"
  }
  , {
    _id: 2570,
    in_BoardId: "H3860ST9_38",
    DecorCode: "H3860ST9",
    MaterialCode: "P2_Maple_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Hard_Maple_champagne_38.0",
    SupplierArticleNumber: "1765003",
    GTIN: "9010771828629"
  }
  , {
    _id: 2571,
    in_BoardId: "H1715ST12_38",
    DecorCode: "H1715ST12",
    MaterialCode: "P2_Walnut_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Parona_Nussbaum_38.0",
    SupplierArticleNumber: "1764221",
    GTIN: "9010771820906"
  }
  , {
    _id: 2572,
    in_BoardId: "H1715ST12_25",
    DecorCode: "H1715ST12",
    MaterialCode: "P2_Walnut_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Parona_Nussbaum_25.0",
    SupplierArticleNumber: "1764215",
    GTIN: "9010771820845"
  }
  , {
    _id: 2573,
    in_BoardId: "H1715ST12_19",
    DecorCode: "H1715ST12",
    MaterialCode: "P2_Walnut_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Parona_Nussbaum_19.0",
    SupplierArticleNumber: "1764209",
    GTIN: "9010771820784"
  }
  , {
    _id: 2574,
    in_BoardId: "H1715ST12_8",
    DecorCode: "H1715ST12",
    MaterialCode: "P2_Walnut_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Parona_Nussbaum_8.0",
    SupplierArticleNumber: "1680983",
    GTIN: "9010771201361"
  }
  , {
    _id: 2575,
    in_BoardId: "H1715ST12_16",
    DecorCode: "H1715ST12",
    MaterialCode: "P2_Walnut_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Parona_Nussbaum_16.0",
    SupplierArticleNumber: "1764207",
    GTIN: "9010771820760"
  }
  , {
    _id: 2576,
    in_BoardId: "H3734ST9_8",
    DecorCode: "H3734ST9",
    MaterialCode: "P2_Dark_walnut_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Dijon_Nussbaum_natur_8.0",
    SupplierArticleNumber: "1764988",
    GTIN: "9010771828476"
  }
  , {
    _id: 2577,
    in_BoardId: "H3734ST9_38",
    DecorCode: "H3734ST9",
    MaterialCode: "P2_Dark_walnut_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Dijon_Nussbaum_natur_38.0",
    SupplierArticleNumber: "1764987",
    GTIN: "9010771828469"
  }
  , {
    _id: 2578,
    in_BoardId: "H3734ST9_25",
    DecorCode: "H3734ST9",
    MaterialCode: "P2_Dark_walnut_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Dijon_Nussbaum_natur_25.0",
    SupplierArticleNumber: "1764985",
    GTIN: "9010771828445"
  }
  , {
    _id: 2579,
    in_BoardId: "H3734ST9_19",
    DecorCode: "H3734ST9",
    MaterialCode: "P2_Dark_walnut_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Dijon_Nussbaum_natur_19.0",
    SupplierArticleNumber: "1365538",
    GTIN: "9010389109097"
  }
  , {
    _id: 2580,
    in_BoardId: "H3734ST9_16",
    DecorCode: "H3734ST9",
    MaterialCode: "P2_Dark_walnut_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Dijon_Nussbaum_natur_16.0",
    SupplierArticleNumber: "1770650",
    GTIN: "9010771884885"
  }
  , {
    _id: 2581,
    in_BoardId: "H2032ST10_38",
    DecorCode: "H2032ST10",
    MaterialCode: "H2032ST10_38",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2582,
    in_BoardId: "H2032ST10_19",
    DecorCode: "H2032ST10",
    MaterialCode: "H2032ST10_19",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2583,
    in_BoardId: "H2032ST10_16",
    DecorCode: "H2032ST10",
    MaterialCode: "H2032ST10_16",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2584,
    in_BoardId: "H2032ST10_25",
    DecorCode: "H2032ST10",
    MaterialCode: "H2032ST10_25",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2585,
    in_BoardId: "H2032ST10_8",
    DecorCode: "H2032ST10",
    MaterialCode: "H2032ST10_8",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "",
    SupplierArticleNumber: "",
    GTIN: ""
  }
  , {
    _id: 2586,
    in_BoardId: "H3190ST19_16",
    DecorCode: "H3190ST19",
    MaterialCode: "P2_Ash_grey_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Fineline_Metallic_anthrazit_16.0",
    SupplierArticleNumber: "1764622",
    GTIN: "9010771824812"
  }
  , {
    _id: 2587,
    in_BoardId: "H3190ST19_19",
    DecorCode: "H3190ST19",
    MaterialCode: "P2_Ash_grey_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Fineline_Metallic_anthrazit_19.0",
    SupplierArticleNumber: "1764624",
    GTIN: "9010771824836"
  }
  , {
    _id: 2588,
    in_BoardId: "H3190ST19_25",
    DecorCode: "H3190ST19",
    MaterialCode: "P2_Ash_grey_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Fineline_Metallic_anthrazit_25.0",
    SupplierArticleNumber: "1764627",
    GTIN: "9010771824867"
  }
  , {
    _id: 2589,
    in_BoardId: "H3190ST19_8",
    DecorCode: "H3190ST19",
    MaterialCode: "P2_Ash_grey_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Fineline_Metallic_anthrazit_8.0",
    SupplierArticleNumber: "1764633",
    GTIN: "9010771824928"
  }
  , {
    _id: 2590,
    in_BoardId: "H3190ST19_38",
    DecorCode: "H3190ST19",
    MaterialCode: "P2_Ash_grey_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Fineline_Metallic_anthrazit_38.0",
    SupplierArticleNumber: "1764631",
    GTIN: "9010771824904"
  }
  , {
    _id: 2591,
    in_BoardId: "F235ST76_16",
    DecorCode: "F235ST76",
    MaterialCode: "P2_Slate_16.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Scivaro_Schiefer_16.0",
    SupplierArticleNumber: "1764810",
    GTIN: "9010771826694"
  }
  , {
    _id: 2592,
    in_BoardId: "F235ST76_19",
    DecorCode: "F235ST76",
    MaterialCode: "P2_Slate_19.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Scivaro_Schiefer_19.0",
    SupplierArticleNumber: "1764811",
    GTIN: "9010771826700"
  }
  , {
    _id: 2593,
    in_BoardId: "F235ST76_25",
    DecorCode: "F235ST76",
    MaterialCode: "P2_Slate_25.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Scivaro_Schiefer_25.0",
    SupplierArticleNumber: "1764813",
    GTIN: "9010771826724"
  }
  , {
    _id: 2594,
    in_BoardId: "F235ST76_38",
    DecorCode: "F235ST76",
    MaterialCode: "P2_Slate_38.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Scivaro_Schiefer_38.0",
    SupplierArticleNumber: "1764815",
    GTIN: "9010771826748"
  }
  , {
    _id: 2595,
    in_BoardId: "F235ST76_8",
    DecorCode: "F235ST76",
    MaterialCode: "P2_Slate_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Scivaro_Schiefer_8.0",
    SupplierArticleNumber: "1680696",
    GTIN: "9010771200371"
  }
  , {
    _id: 2596,
    in_BoardId: "F186ST9_19",
    DecorCode: "F186ST9",
    MaterialCode: "P2_Concrete_19.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Chicago_Concrete_hellgrau_19.0",
    SupplierArticleNumber: "1764913",
    GTIN: "9010771827721"
  }
  , {
    _id: 2597,
    in_BoardId: "F186ST9_8",
    DecorCode: "F186ST9",
    MaterialCode: "P2_Concrete_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Chicago_Concrete_hellgrau_8.0",
    SupplierArticleNumber: "1764916",
    GTIN: "9010771827752"
  }
  , {
    _id: 2598,
    in_BoardId: "F186ST9_38",
    DecorCode: "F186ST9",
    MaterialCode: "P2_Concrete_38.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Chicago_Concrete_hellgrau_38.0",
    SupplierArticleNumber: "1764915",
    GTIN: "9010771827745"
  }
  , {
    _id: 2599,
    in_BoardId: "F186ST9_25",
    DecorCode: "F186ST9",
    MaterialCode: "P2_Concrete_25.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Chicago_Concrete_hellgrau_25.0",
    SupplierArticleNumber: "1764914",
    GTIN: "9010771827738"
  }
  , {
    _id: 2600,
    in_BoardId: "F186ST9_16",
    DecorCode: "F186ST9",
    MaterialCode: "P2_Concrete_16.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Chicago_Concrete_hellgrau_16.0",
    SupplierArticleNumber: "1764912",
    GTIN: "9010771827714"
  }
  , {
    _id: 2601,
    in_BoardId: "F244ST76_38",
    DecorCode: "F244ST76",
    MaterialCode: "P2_Dark_marble_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Candela_Marmor_anthrazit_38.0",
    SupplierArticleNumber: "1764839",
    GTIN: "9010771826984"
  }
  , {
    _id: 2602,
    in_BoardId: "F244ST76_8",
    DecorCode: "F244ST76",
    MaterialCode: "P2_Dark_marble_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Candela_Marmor_anthrazit_8.0",
    SupplierArticleNumber: "1680882",
    GTIN: "9010771201033"
  }
  , {
    _id: 2603,
    in_BoardId: "F244ST76_16",
    DecorCode: "F244ST76",
    MaterialCode: "P2_Dark_marble_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Candela_Marmor_anthrazit_16.0",
    SupplierArticleNumber: "1764834",
    GTIN: "9010771826939"
  }
  , {
    _id: 2604,
    in_BoardId: "F244ST76_19",
    DecorCode: "F244ST76",
    MaterialCode: "P2_Dark_marble_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Candela_Marmor_anthrazit_19.0",
    SupplierArticleNumber: "1764835",
    GTIN: "9010771826946"
  }
  , {
    _id: 2605,
    in_BoardId: "F244ST76_25",
    DecorCode: "F244ST76",
    MaterialCode: "P2_Dark_marble_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Candela_Marmor_anthrazit_25.0",
    SupplierArticleNumber: "1764837",
    GTIN: "9010771826960"
  }
  , {
    _id: 2606,
    in_BoardId: "F800ST9_8",
    DecorCode: "F800ST9",
    MaterialCode: "P2_Marble_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Kristallmarmor_8.0",
    SupplierArticleNumber: "1764943",
    GTIN: "9010771828025"
  }
  , {
    _id: 2607,
    in_BoardId: "F800ST9_25",
    DecorCode: "F800ST9",
    MaterialCode: "P2_Marble_25.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Kristallmarmor_25.0",
    SupplierArticleNumber: "1764940",
    GTIN: "9010771827998"
  }
  , {
    _id: 2608,
    in_BoardId: "F800ST9_19",
    DecorCode: "F800ST9",
    MaterialCode: "P2_Marble_19.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Kristallmarmor_19.0",
    SupplierArticleNumber: "1764938",
    GTIN: "9010771827974"
  }
  , {
    _id: 2609,
    in_BoardId: "F800ST9_16",
    DecorCode: "F800ST9",
    MaterialCode: "P2_Marble_16.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Kristallmarmor_16.0",
    SupplierArticleNumber: "1764937",
    GTIN: "9010771827967"
  }
  , {
    _id: 2610,
    in_BoardId: "F800ST9_38",
    DecorCode: "F800ST9",
    MaterialCode: "P2_Marble_38.0",
    Description: "",
    BoardLength: 5610,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Kristallmarmor_38.0",
    SupplierArticleNumber: "1764942",
    GTIN: "9010771828018"
  }
  , {
    _id: 2611,
    in_BoardId: "H2033ST10_16",
    DecorCode: "H2033ST10",
    MaterialCode: "P2_Dark_oak_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Hunton_Eiche_dunkel_16.0",
    SupplierArticleNumber: "1770638",
    GTIN: "9010771884762"
  }
  , {
    _id: 2612,
    in_BoardId: "H2033ST10_19",
    DecorCode: "H2033ST10",
    MaterialCode: "P2_Dark_oak_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Hunton_Eiche_dunkel_19.0",
    SupplierArticleNumber: "1763838",
    GTIN: "9010771817050"
  }
  , {
    _id: 2613,
    in_BoardId: "H2033ST10_25",
    DecorCode: "H2033ST10",
    MaterialCode: "P2_Dark_oak_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Hunton_Eiche_dunkel_25.0",
    SupplierArticleNumber: "1763846",
    GTIN: "9010771817135"
  }
  , {
    _id: 2614,
    in_BoardId: "H2033ST10_38",
    DecorCode: "H2033ST10",
    MaterialCode: "P2_Dark_oak_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Hunton_Eiche_dunkel_38.0",
    SupplierArticleNumber: "1763853",
    GTIN: "9010771817203"
  }
  , {
    _id: 2615,
    in_BoardId: "H2033ST10_8",
    DecorCode: "H2033ST10",
    MaterialCode: "P2_Dark_oak_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Hunton_Eiche_dunkel_8.0",
    SupplierArticleNumber: "1763857",
    GTIN: "9010771817241"
  }
  , {
    _id: 2616,
    in_BoardId: "H1199ST12_38",
    DecorCode: "H1199ST12",
    MaterialCode: "P2_Black_oak_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Thermo_Eiche_schwarzbraun_38.0",
    SupplierArticleNumber: "1764063",
    GTIN: "9010771819337"
  }
  , {
    _id: 2617,
    in_BoardId: "H1199ST12_8",
    DecorCode: "H1199ST12",
    MaterialCode: "P2_Black_oak_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Thermo_Eiche_schwarzbraun_8.0",
    SupplierArticleNumber: "1764067",
    GTIN: "9010771819368"
  }
  , {
    _id: 2618,
    in_BoardId: "H1199ST12_25",
    DecorCode: "H1199ST12",
    MaterialCode: "P2_Black_oak_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Thermo_Eiche_schwarzbraun_25.0",
    SupplierArticleNumber: "1764057",
    GTIN: "9010771819276"
  }
  , {
    _id: 2619,
    in_BoardId: "H1199ST12_19",
    DecorCode: "H1199ST12",
    MaterialCode: "P2_Black_oak_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Thermo_Eiche_schwarzbraun_19.0",
    SupplierArticleNumber: "1770642",
    GTIN: "9010771884809"
  }
  , {
    _id: 2620,
    in_BoardId: "H1199ST12_16",
    DecorCode: "H1199ST12",
    MaterialCode: "P2_Black_oak_16.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 16,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "L",
    Supplier: "Egger",
    SupplierDescription: "P2_Thermo_Eiche_schwarzbraun_16.0",
    SupplierArticleNumber: "1764047",
    GTIN: "9010771819177"
  }
  , {
    _id: 2621,
    in_BoardId: "W980ST7_19",
    DecorCode: "W980ST7",
    MaterialCode: "P2_Sunny_white_19.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 19,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Platinweiss_19.0",
    SupplierArticleNumber: "1764895",
    GTIN: "9010771827547"
  }
  , {
    _id: 2622,
    in_BoardId: "W980ST7_25",
    DecorCode: "W980ST7",
    MaterialCode: "P2_Sunny_white_25.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 25,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Platinweiss_25.0",
    SupplierArticleNumber: "1764897",
    GTIN: "9010771827561"
  }
  , {
    _id: 2623,
    in_BoardId: "W980ST7_38",
    DecorCode: "W980ST7",
    MaterialCode: "P2_Sunny_white_38.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 38,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Platinweiss_38.0",
    SupplierArticleNumber: "1764899",
    GTIN: "9010771827585"
  }
  , {
    _id: 2624,
    in_BoardId: "W980ST7_8",
    DecorCode: "W980ST7",
    MaterialCode: "P2_Sunny_white_8.0",
    Description: "",
    BoardLength: 2800,
    BoardWidth: 2070,
    BoardThk: 8,
    BoardDensity: 700,
    BoardType: "Chipboard",
    Grain: "N",
    Supplier: "Egger",
    SupplierDescription: "P2_Platinweiss_8.0",
    SupplierArticleNumber: "1764900",
    GTIN: "9010771827592"
  }
];
