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

export interface cti_tab_FillerHardwareSettings {
  readonly in_TypeElement?: string;
  readonly in_FillerType?: string;
  readonly in_FillerHardwareType?: string;
  readonly in_FrontHeightMin?: number;
  readonly in_FrontHeightMax?: number;
  readonly in_FrontWidthMin?: number;
  readonly in_FrontWidthMax?: number;
  readonly in_FingergripTypeTop?: string;
  readonly in_FingergripTypeBtm?: string;
}

export interface ctm_tab_FillerHardwareSettings {
}

export interface cto_tab_FillerHardwareSettings extends ctm_tab_FillerHardwareSettings {
  readonly _id: number;
  readonly Object?: string;
  readonly ObjectFrontPosition?: string;
  readonly Descriptor?: string;
  readonly ObjectInsertionReference?: string;
}

export interface ICT_tab_FillerHardwareSettings
  extends cti_tab_FillerHardwareSettings, cto_tab_FillerHardwareSettings { }

export class ct2_tab_FillerHardwareSettings {

  public findExactly(
    in_TypeElement: string | undefined,
    in_FillerType: string | undefined,
    in_FillerHardwareType: string | undefined,
    in_FrontHeightMin: number | undefined,
    in_FrontHeightMax: number | undefined,
    in_FrontWidthMin: number | undefined,
    in_FrontWidthMax: number | undefined,
    in_FingergripTypeTop: string | undefined,
    in_FingergripTypeBtm: string | undefined,
  ): cto_tab_FillerHardwareSettings | undefined {
    const res = ct_tab_FillerHardwareSettings.find((p) =>
      p.in_TypeElement === in_TypeElement
      && p.in_FillerType === in_FillerType
      && p.in_FillerHardwareType === in_FillerHardwareType
      && p.in_FrontHeightMin === in_FrontHeightMin
      && p.in_FrontHeightMax === in_FrontHeightMax
      && p.in_FrontWidthMin === in_FrontWidthMin
      && p.in_FrontWidthMax === in_FrontWidthMax
      && p.in_FingergripTypeTop === in_FingergripTypeTop
      && p.in_FingergripTypeBtm === in_FingergripTypeBtm
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_FillerHardwareSettings) => boolean
  ): cto_tab_FillerHardwareSettings | undefined {
    for (let index = 0; index < ct_tab_FillerHardwareSettings.length; index++) {
      const element = ct_tab_FillerHardwareSettings[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_FillerHardwareSettings: ICT_tab_FillerHardwareSettings[] = [
  {
    _id: 443,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Top",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 444,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Btm",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 445,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 446,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Top",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 447,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Btm",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 448,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 449,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Btm",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 450,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 451,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Btm",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 452,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 453,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Bracket01",
    ObjectFrontPosition: "Top",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 454,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 455,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Bracket01",
    ObjectFrontPosition: "Top",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 456,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 457,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "20mm_1_20mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 458,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "20mm_1_20mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 459,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "20mm_1_20mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 460,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "20mm_1_1_20mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 461,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "20mm_1_1_20mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 462,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "20mm_1_1_20mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 463,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 1000,
    in_FrontHeightMax: 9999,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "20mm_1_1_1_20mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 464,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Top",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 465,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Btm",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 466,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 467,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Top",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 468,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Btm",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 469,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 470,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Btm",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 471,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 472,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Btm",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 473,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 474,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Keku01",
    ObjectFrontPosition: "Top",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 475,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 476,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Keku01",
    ObjectFrontPosition: "Top",
    Descriptor: "1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 477,
    in_TypeElement: "Filler",
    in_FillerType: "CoverCarcase",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "1_1_1_1",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 478,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "64mm_1_64mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 479,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "64mm_1_64mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 480,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "64mm_1_64mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 481,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "64mm_1_1_64mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 482,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "Metal",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "64mm_1_1_64mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 483,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "Metal",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "64mm_1_1_64mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 484,
    in_TypeElement: "Filler",
    in_FillerType: "LShape",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 1000,
    in_FrontHeightMax: 9999,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "64mm_1_1_1_64mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 485,
    in_TypeElement: "CornerFiller",
    in_FillerType: "LShape",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "20mm_1_20mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 486,
    in_TypeElement: "CornerFiller",
    in_FillerType: "LShape",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "20mm_1_1_20mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 487,
    in_TypeElement: "CornerFiller",
    in_FillerType: "LShape",
    in_FillerHardwareType: "Bracket01",
    in_FrontHeightMin: 1000,
    in_FrontHeightMax: 9999,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Bracket01",
    ObjectFrontPosition: "Side",
    Descriptor: "20mm_1_1_1_20mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 488,
    in_TypeElement: "CornerFiller",
    in_FillerType: "LShape",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 0,
    in_FrontHeightMax: 350,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "64mm_1_64mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 489,
    in_TypeElement: "CornerFiller",
    in_FillerType: "LShape",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 350,
    in_FrontHeightMax: 1000,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "64mm_1_1_64mm",
    ObjectInsertionReference: "PartShortInside"
  }
  , {
    _id: 490,
    in_TypeElement: "CornerFiller",
    in_FillerType: "LShape",
    in_FillerHardwareType: "PacofixPF",
    in_FrontHeightMin: 1000,
    in_FrontHeightMax: 9999,
    in_FrontWidthMin: 0,
    in_FrontWidthMax: 9999,
    in_FingergripTypeTop: "NoFingergrip",
    in_FingergripTypeBtm: "NoFingergrip",
    Object: "Keku01",
    ObjectFrontPosition: "Side",
    Descriptor: "64mm_1_1_1_64mm",
    ObjectInsertionReference: "PartShortInside"
  }
];
