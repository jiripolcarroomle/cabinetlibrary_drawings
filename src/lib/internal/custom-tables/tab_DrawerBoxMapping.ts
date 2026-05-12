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

export interface cti_tab_DrawerBoxMapping {
  readonly in_BoxDesign?: string;
  readonly in_BoxProgram?: string;
  readonly in_BoxColor?: string;
  readonly in_BoxDepth?: string;
  readonly in_BoxHeight?: string;
  readonly in_BoxWeight?: string;
  readonly in_OpeningType?: string;
}

export interface ctm_tab_DrawerBoxMapping {
}

export interface cto_tab_DrawerBoxMapping extends ctm_tab_DrawerBoxMapping {
  readonly _id: number;
  readonly ConstructionId?: string;
  readonly ObjectBox?: string;
  readonly ObjectFrontConnector?: string;
}

export interface ICT_tab_DrawerBoxMapping
  extends cti_tab_DrawerBoxMapping, cto_tab_DrawerBoxMapping { }

export class ct2_tab_DrawerBoxMapping {

  public findExactly(
    in_BoxDesign: string | undefined,
    in_BoxProgram: string | undefined,
    in_BoxColor: string | undefined,
    in_BoxDepth: string | undefined,
    in_BoxHeight: string | undefined,
    in_BoxWeight: string | undefined,
    in_OpeningType: string | undefined,
  ): cto_tab_DrawerBoxMapping | undefined {
    const res = ct_tab_DrawerBoxMapping.find((p) =>
      p.in_BoxDesign === in_BoxDesign
      && p.in_BoxProgram === in_BoxProgram
      && p.in_BoxColor === in_BoxColor
      && p.in_BoxDepth === in_BoxDepth
      && p.in_BoxHeight === in_BoxHeight
      && p.in_BoxWeight === in_BoxWeight
      && p.in_OpeningType === in_OpeningType
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_DrawerBoxMapping) => boolean
  ): cto_tab_DrawerBoxMapping | undefined {
    for (let index = 0; index < ct_tab_DrawerBoxMapping.length; index++) {
      const element = ct_tab_DrawerBoxMapping[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_DrawerBoxMapping: ICT_tab_DrawerBoxMapping[] = [
  {
    _id: 1,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Inox_450_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 2,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Inox_450_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 3,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Inox_500_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 4,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Inox_550_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 5,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Inox_600_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 6,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Inox_650_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 7,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Inox_450_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 8,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Inox_550_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 9,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "270",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_270_M",
    ObjectBox: "Legra_Terra_270_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 10,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Inox_600_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 11,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Inox_650_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 12,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_Terra_400_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 13,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Terra_450_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 14,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Terra_500_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 15,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_Terra_550_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 16,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Inox_550_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 17,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Inox_500_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 18,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Inox_450_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 19,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Inox_650_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 20,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Inox_600_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 21,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Inox_550_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 22,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Inox_500_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 23,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Inox_450_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 24,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Inox_650_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 25,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Inox_600_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 26,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Inox_550_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 27,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Inox_500_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 28,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Inox_450_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 29,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Inox_650_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 30,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Inox_600_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 31,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Inox_550_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 32,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Inox_500_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 33,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Inox_500_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 34,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "300",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_300_M",
    ObjectBox: "Legra_Terra_300_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 35,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "350",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_M",
    ObjectBox: "Legra_Terra_350_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 36,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_M",
    ObjectBox: "Legra_Terra_400_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 37,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Terra_550_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 38,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Terra_600_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 39,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Terra_650_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 40,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_F",
    ObjectBox: "Legra_Terra_400_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 41,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Terra_450_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 42,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Terra_500_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 43,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Terra_600_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 44,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "300",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_300_M",
    ObjectBox: "Legra_Terra_300_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 45,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Terra_650_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 46,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_Terra_400_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 47,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Terra_450_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 48,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Terra_500_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 49,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_Terra_550_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 50,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "270",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_270_M",
    ObjectBox: "Legra_Terra_270_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 51,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Terra_500_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 52,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Terra_550_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 53,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Terra_450_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 54,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "350",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_K",
    ObjectBox: "Legra_Terra_350_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 55,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Terra_450_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 56,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Terra_500_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 57,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Terra_550_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 58,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Terra_600_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 59,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Terra_650_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 60,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "300",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_300_K",
    ObjectBox: "Legra_Terra_300_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 61,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_K",
    ObjectBox: "Legra_Terra_400_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 62,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "350",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_C",
    ObjectBox: "Legra_Terra_350_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 63,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Terra_450_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 64,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Terra_500_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 65,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Terra_550_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 66,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_Terra_600_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 67,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "270",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_270_C",
    ObjectBox: "Legra_Terra_270_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 68,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "300",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_300_C",
    ObjectBox: "Legra_Terra_300_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 69,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Inox_450_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 70,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Inox_550_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 71,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Inox_500_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 72,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "270",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_270_M",
    ObjectBox: "Legra_Inox_270_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 73,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "350",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_C",
    ObjectBox: "Legra_Inox_350_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 74,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "400",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_C",
    ObjectBox: "Legra_Inox_400_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 75,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Inox_450_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 76,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Inox_500_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 77,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Inox_550_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 78,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Inox_600_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 79,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "400",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_F",
    ObjectBox: "Legra_Inox_400_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 80,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Inox_500_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 81,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Inox_450_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 82,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Inox_500_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 83,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Inox_550_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 84,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Inox_600_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 85,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Inox_650_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 86,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Inox_450_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 87,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "300",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_300_C",
    ObjectBox: "Legra_Inox_300_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 88,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "270",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_270_C",
    ObjectBox: "Legra_Inox_270_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 89,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Inox_550_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 90,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Inox_500_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 91,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Inox_450_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 92,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "400",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_K",
    ObjectBox: "Legra_Inox_400_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 93,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "350",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_K",
    ObjectBox: "Legra_Inox_350_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 94,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Inox_650_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 95,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Inox_600_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 96,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Inox_550_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 97,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Inox_500_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 98,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Inox_450_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 99,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "400",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_M",
    ObjectBox: "Legra_Inox_400_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 100,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "350",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_M",
    ObjectBox: "Legra_Inox_350_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 101,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "300",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_300_M",
    ObjectBox: "Legra_Inox_300_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 102,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "270",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_270_M",
    ObjectBox: "Legra_Inox_270_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 103,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Inox_500_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 104,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Inox_650_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 105,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "300",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_300_M",
    ObjectBox: "Legra_Inox_300_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 106,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Inox_550_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 107,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "350",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_M",
    ObjectBox: "Legra_Inox_350_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 108,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Inox_550_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 109,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Inox_600_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 110,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Inox_650_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 111,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "400",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_F",
    ObjectBox: "Legra_Inox_400_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 112,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Inox_450_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 113,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Inox_500_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 114,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Inox_600_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 115,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Inox_450_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 116,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Inox_650_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 117,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Inox_450_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 118,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Inox_500_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 119,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Inox_550_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 120,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Inox_600_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 121,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Inox_650_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 122,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Inox_500_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 123,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Inox_450_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 124,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "400",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_C",
    ObjectBox: "Legra_Inox_400_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 125,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "350",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_C",
    ObjectBox: "Legra_Inox_350_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 126,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "300",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_300_C",
    ObjectBox: "Legra_Inox_300_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 127,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "270",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_270_C",
    ObjectBox: "Legra_Inox_270_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 128,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Inox_550_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 129,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Inox_500_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 130,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Inox_450_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 131,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "400",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_K",
    ObjectBox: "Legra_Inox_400_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 132,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "350",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_K",
    ObjectBox: "Legra_Inox_350_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 133,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Inox_650_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 134,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Inox_600_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 135,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Inox_550_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 136,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Inox_500_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 137,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Inox_450_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 138,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "400",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_M",
    ObjectBox: "Legra_Inox_400_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 139,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_C",
    ObjectBox: "Legra_Terra_400_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 140,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "350",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_M",
    ObjectBox: "Legra_Terra_350_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 141,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_M",
    ObjectBox: "Legra_Terra_400_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 142,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Terra_450_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 143,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Terra_500_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 144,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Terra_550_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 145,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Terra_600_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 146,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Terra_650_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 147,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "300",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_300_K",
    ObjectBox: "Legra_Terra_300_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 148,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "350",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_K",
    ObjectBox: "Legra_Terra_350_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 149,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_K",
    ObjectBox: "Legra_Terra_400_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 150,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Terra_450_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 151,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Terra_500_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 152,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Terra_550_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 153,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_Terra_600_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 154,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "270",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_270_C",
    ObjectBox: "Legra_Terra_270_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 155,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "300",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_300_C",
    ObjectBox: "Legra_Terra_300_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 156,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "350",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_C",
    ObjectBox: "Legra_Terra_350_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 157,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_C",
    ObjectBox: "Legra_Terra_400_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 158,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Terra_450_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 159,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Terra_500_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 160,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Terra_550_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 161,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Terra_600_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 162,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Terra_650_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 163,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_F",
    ObjectBox: "Legra_Terra_400_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 164,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Terra_450_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 165,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Terra_500_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 166,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Terra_550_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 167,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Terra_600_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 168,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Terra_650_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 169,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Terra_450_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 170,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Terra_500_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 171,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Terra_550_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 172,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Terra_600_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 173,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Terra_650_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 174,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Terra_450_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 175,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Terra_500_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 176,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Terra_550_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 177,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_Terra_600_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 178,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Terra_450_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 179,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Terra_500_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 180,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Terra_550_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 181,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Terra_600_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 182,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Terra_650_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 183,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Terra_450_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 184,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Terra_500_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 185,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Terra_550_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 186,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Terra_600_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 187,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Terra_650_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 188,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Terra_450_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 189,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Terra_500_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 190,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Terra_550_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 191,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Terra_600_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 192,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Terra_650_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 193,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Terra_450_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 194,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Terra_500_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 195,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Terra_550_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 196,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_Terra_600_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 197,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Terra_450_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 198,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Terra_500_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 199,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Terra_550_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 200,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Terra_600_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 201,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Terra_650_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 202,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Terra_450_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 203,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Terra_500_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 204,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Terra_550_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 205,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Terra_600_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 206,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Terra_650_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 207,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_Orion_400_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 208,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Orion_450_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 209,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Orion_500_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 210,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_Orion_550_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 211,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "270",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_270_M",
    ObjectBox: "Legra_Orion_270_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 212,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "300",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_300_M",
    ObjectBox: "Legra_Orion_300_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 213,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "350",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_M",
    ObjectBox: "Legra_Orion_350_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 214,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_M",
    ObjectBox: "Legra_Orion_400_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 215,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Orion_450_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 216,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Orion_500_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 217,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Orion_550_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 218,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Orion_600_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 219,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Orion_650_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 220,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "300",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_300_K",
    ObjectBox: "Legra_Orion_300_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 221,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "350",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_K",
    ObjectBox: "Legra_Orion_350_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 222,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_K",
    ObjectBox: "Legra_Orion_400_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 223,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Orion_450_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 224,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Orion_500_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 225,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Orion_550_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 226,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_Orion_600_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 227,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "270",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_270_C",
    ObjectBox: "Legra_Orion_270_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 228,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "300",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_300_C",
    ObjectBox: "Legra_Orion_300_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 229,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "350",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_C",
    ObjectBox: "Legra_Orion_350_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 230,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_C",
    ObjectBox: "Legra_Orion_400_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 231,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Orion_450_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 232,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Orion_500_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 233,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Orion_550_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 234,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Orion_600_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 235,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Orion_650_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 236,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_F",
    ObjectBox: "Legra_Orion_400_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 237,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Orion_450_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 238,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Orion_500_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 239,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Orion_550_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 240,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Orion_600_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 241,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Orion_650_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 242,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_Orion_400_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 243,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Orion_450_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 244,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Orion_500_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 245,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_Orion_550_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 246,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "270",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_270_M",
    ObjectBox: "Legra_Orion_270_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 247,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "300",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_300_M",
    ObjectBox: "Legra_Orion_300_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 248,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "350",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_M",
    ObjectBox: "Legra_Orion_350_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 249,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_M",
    ObjectBox: "Legra_Orion_400_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 250,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Orion_450_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 251,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Orion_500_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 252,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Orion_550_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 253,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Orion_600_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 254,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Orion_650_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 255,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "300",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_300_K",
    ObjectBox: "Legra_Orion_300_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 256,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "350",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_K",
    ObjectBox: "Legra_Orion_350_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 257,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_K",
    ObjectBox: "Legra_Orion_400_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 258,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Orion_450_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 259,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Orion_500_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 260,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Orion_550_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 261,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_Orion_600_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 262,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "270",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_270_C",
    ObjectBox: "Legra_Orion_270_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 263,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "300",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_300_C",
    ObjectBox: "Legra_Orion_300_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 264,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "350",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_C",
    ObjectBox: "Legra_Orion_350_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 265,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_C",
    ObjectBox: "Legra_Orion_400_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 266,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Orion_450_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 267,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Orion_500_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 268,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Orion_550_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 269,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Orion_600_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 270,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Orion_650_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 271,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_F",
    ObjectBox: "Legra_Orion_400_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 272,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Orion_450_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 273,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Orion_500_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 274,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Orion_550_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 275,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Orion_600_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 276,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Orion_650_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 277,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Orion_450_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 278,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Orion_500_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 279,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Orion_550_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 280,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Orion_600_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 281,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Orion_650_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 282,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Orion_450_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 283,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Orion_500_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 284,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Orion_550_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 285,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_Orion_600_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 286,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Orion_450_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 287,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Orion_500_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 288,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Orion_550_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 289,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Orion_600_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 290,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Orion_650_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 291,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Orion_450_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 292,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Orion_500_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 293,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Orion_550_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 294,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Orion_600_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 295,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Orion_650_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 296,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_Orion_450_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 297,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_Orion_500_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 298,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_Orion_550_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 299,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_Orion_600_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 300,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_Orion_650_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 301,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_Orion_450_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 302,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_Orion_500_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 303,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_Orion_550_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 304,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_Orion_600_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 305,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_Orion_450_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 306,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_Orion_500_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 307,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_Orion_550_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 308,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_Orion_600_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 309,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_Orion_650_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 310,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_Orion_450_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 311,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_Orion_500_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 312,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_Orion_550_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 313,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_Orion_600_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 314,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_Orion_650_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 315,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_White_400_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 316,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_White_450_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 317,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_White_500_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 318,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_White_550_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 319,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "270",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_270_M",
    ObjectBox: "Legra_White_270_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 320,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "300",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_300_M",
    ObjectBox: "Legra_White_300_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 321,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "350",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_M",
    ObjectBox: "Legra_White_350_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 322,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_M",
    ObjectBox: "Legra_White_400_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 323,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_White_450_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 324,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_White_500_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 325,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_White_550_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 326,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_White_600_M",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 327,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_White_650_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 328,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "300",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_300_K",
    ObjectBox: "Legra_White_300_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 329,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "350",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_K",
    ObjectBox: "Legra_White_350_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 330,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_K",
    ObjectBox: "Legra_White_400_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 331,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_White_450_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 332,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_White_500_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 333,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_White_550_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 334,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_White_600_K",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 335,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "270",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_270_C",
    ObjectBox: "Legra_White_270_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 336,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "300",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_300_C",
    ObjectBox: "Legra_White_300_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 337,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "350",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_350_C",
    ObjectBox: "Legra_White_350_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 338,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_C",
    ObjectBox: "Legra_White_400_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 339,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_White_450_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 340,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_White_500_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 341,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_White_550_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 342,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_White_600_C",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 343,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_White_650_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 344,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_F",
    ObjectBox: "Legra_White_400_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 345,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_White_450_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 346,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_White_500_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 347,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_White_550_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 348,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_White_600_F",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 349,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_White_650_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 350,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_White_400_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 351,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_White_450_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 352,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_White_500_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 353,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_White_550_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 354,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "270",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_270_M",
    ObjectBox: "Legra_White_270_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 355,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "300",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_300_M",
    ObjectBox: "Legra_White_300_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 356,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "350",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_M",
    ObjectBox: "Legra_White_350_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 357,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_M",
    ObjectBox: "Legra_White_400_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 358,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_White_450_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 359,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_White_500_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 360,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_White_550_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 361,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_White_600_M_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 362,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_White_650_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 363,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "300",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_300_K",
    ObjectBox: "Legra_White_300_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 364,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "350",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_K",
    ObjectBox: "Legra_White_350_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 365,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_K",
    ObjectBox: "Legra_White_400_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 366,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_White_450_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 367,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_White_500_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 368,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_White_550_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 369,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_White_600_K_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 370,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "270",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_270_C",
    ObjectBox: "Legra_White_270_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 371,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "300",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_300_C",
    ObjectBox: "Legra_White_300_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 372,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "350",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_350_C",
    ObjectBox: "Legra_White_350_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 373,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_C",
    ObjectBox: "Legra_White_400_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 374,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_White_450_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 375,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_White_500_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 376,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_White_550_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 377,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_White_600_C_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 378,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_White_650_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 379,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_F",
    ObjectBox: "Legra_White_400_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 380,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_White_450_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 381,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_White_500_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 382,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_White_550_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 383,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_White_600_F_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 384,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Standard",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_White_650_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 385,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_White_450_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 386,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_White_500_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 387,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_White_550_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 388,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_White_600_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 389,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_White_650_M_Heavy",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 390,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_White_450_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 391,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_White_500_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 392,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_White_550_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 393,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_White_600_K_Heavy",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 394,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_White_450_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 395,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_White_500_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 396,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_White_550_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 397,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_White_600_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 398,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_White_650_C_Heavy",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 399,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_White_450_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 400,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_White_500_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 401,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_White_550_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 402,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_White_600_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 403,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_White_650_F_Heavy",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 404,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_M",
    ObjectBox: "Legra_White_450_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 405,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_M",
    ObjectBox: "Legra_White_500_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 406,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_M",
    ObjectBox: "Legra_White_550_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 407,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_M",
    ObjectBox: "Legra_White_600_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 408,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "M",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_M",
    ObjectBox: "Legra_White_650_M_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_M"
  }
  , {
    _id: 409,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_K",
    ObjectBox: "Legra_White_450_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 410,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_K",
    ObjectBox: "Legra_White_500_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 411,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_K",
    ObjectBox: "Legra_White_550_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 412,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "K",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_K",
    ObjectBox: "Legra_White_600_K_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_K"
  }
  , {
    _id: 413,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_C",
    ObjectBox: "Legra_White_450_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 414,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_C",
    ObjectBox: "Legra_White_500_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 415,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_C",
    ObjectBox: "Legra_White_550_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 416,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_C",
    ObjectBox: "Legra_White_600_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 417,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "C",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_C",
    ObjectBox: "Legra_White_650_C_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_C"
  }
  , {
    _id: 418,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_F",
    ObjectBox: "Legra_White_450_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 419,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_F",
    ObjectBox: "Legra_White_500_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 420,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_F",
    ObjectBox: "Legra_White_550_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 421,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "600",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_600_F",
    ObjectBox: "Legra_White_600_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 422,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "650",
    in_BoxHeight: "F",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_650_F",
    ObjectBox: "Legra_White_650_F_Heavy_PTO",
    ObjectFrontConnector: "Legra_Connector_F"
  }
  , {
    _id: 423,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Inox_450_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 424,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_Terra_400_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 425,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Terra_450_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 426,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Terra_500_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 427,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_Terra_550_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 428,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_Terra_400_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 429,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Terra_450_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 430,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Terra_500_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 431,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Terra",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_Terra_550_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 432,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Inox_500_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 433,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Inox_450_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 434,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Inox",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Inox_500_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 435,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_Orion_400_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 436,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Orion_450_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 437,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Orion_500_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 438,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_Orion_550_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 439,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_Orion_400_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 440,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_Orion_450_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 441,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_Orion_500_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 442,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "Orion",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_Orion_550_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 443,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_White_400_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 444,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_White_450_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 445,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_White_500_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 446,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "Handle",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_White_550_N",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 447,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "400",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_400_N",
    ObjectBox: "Legra_White_400_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 448,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "450",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_450_N",
    ObjectBox: "Legra_White_450_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 449,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "500",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_500_N",
    ObjectBox: "Legra_White_500_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
  , {
    _id: 450,
    in_BoxDesign: "Legrabox",
    in_BoxProgram: "Pure",
    in_BoxColor: "White",
    in_BoxDepth: "550",
    in_BoxHeight: "N",
    in_BoxWeight: "Heavy",
    in_OpeningType: "PushToOpenManual",
    ConstructionId: "Legra_550_N",
    ObjectBox: "Legra_White_550_N_PTO",
    ObjectFrontConnector: "Legra_Connector_N"
  }
];
