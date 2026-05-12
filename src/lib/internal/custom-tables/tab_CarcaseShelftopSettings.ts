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

export interface cti_tab_CarcaseShelftopSettings {
  readonly in_ModuleName?: string;
  readonly in_ShelfTopConstruction?: string;
  readonly in_AdditionalInfo1?: string;
}

export interface ctm_tab_CarcaseShelftopSettings {
}

export interface cto_tab_CarcaseShelftopSettings extends ctm_tab_CarcaseShelftopSettings {
  readonly _id: number;
  readonly LibrarySolution?: boolean;
  readonly UsedModule?: string;
  readonly ConstructionTablePartName?: string;
  readonly InsertModule?: boolean;
  readonly Construction?: string;
  readonly FrontsideRelevant?: boolean;
  readonly BacksideRelevant?: boolean;
  readonly HobMoveRelevant?: boolean;
}

export interface ICT_tab_CarcaseShelftopSettings
  extends cti_tab_CarcaseShelftopSettings, cto_tab_CarcaseShelftopSettings { }

export class ct2_tab_CarcaseShelftopSettings {

  public findExactly(
    in_ModuleName: string | undefined,
    in_ShelfTopConstruction: string | undefined,
    in_AdditionalInfo1: string | undefined,
  ): cto_tab_CarcaseShelftopSettings | undefined {
    const res = ct_tab_CarcaseShelftopSettings.find((p) =>
      p.in_ModuleName === in_ModuleName
      && p.in_ShelfTopConstruction === in_ShelfTopConstruction
      && p.in_AdditionalInfo1 === in_AdditionalInfo1
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_CarcaseShelftopSettings) => boolean
  ): cto_tab_CarcaseShelftopSettings | undefined {
    for (let index = 0; index < ct_tab_CarcaseShelftopSettings.length; index++) {
      const element = ct_tab_CarcaseShelftopSettings[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_CarcaseShelftopSettings: ICT_tab_CarcaseShelftopSettings[] = [
  {
    _id: 84,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "ShelfTop",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Shelftop",
    InsertModule: true,
    Construction: "ShelfTop",
    FrontsideRelevant: true,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 85,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontBackHorizontal",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railhortopfront",
    InsertModule: true,
    Construction: "RailFrontHorizontal",
    FrontsideRelevant: true,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 86,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontBackHorizontal",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railhortopback",
    InsertModule: true,
    Construction: "RailBackHorizontal",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 87,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontHorizontal",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railhortopfront",
    InsertModule: true,
    Construction: "RailFrontHorizontal",
    FrontsideRelevant: true,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 88,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopBackHorizontal",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railhortopback",
    InsertModule: true,
    Construction: "RailBackHorizontal",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 89,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontBackVertical",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopfront",
    InsertModule: true,
    Construction: "RailFrontVertical",
    FrontsideRelevant: true,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 90,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontBackVertical",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopback",
    InsertModule: true,
    Construction: "RailBackVertical",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 91,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontVertical",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopfront",
    InsertModule: true,
    Construction: "RailFrontVertical",
    FrontsideRelevant: true,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 92,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopBackVertical",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopback",
    InsertModule: true,
    Construction: "RailBackVertical",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 93,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontHorBackVer",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railhortopfront",
    InsertModule: true,
    Construction: "RailFrontHorizontal",
    FrontsideRelevant: true,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 94,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontHorBackVer",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopback",
    InsertModule: true,
    Construction: "RailBackVertical",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 95,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontVerBackHor",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopfront",
    InsertModule: true,
    Construction: "RailFrontVertical",
    FrontsideRelevant: true,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 96,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontVerBackHor",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railhortopback",
    InsertModule: true,
    Construction: "RailBackHorizontal",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 97,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFixedFrontBracket",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopback",
    InsertModule: true,
    Construction: "RailBackVertical",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 98,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFixedFrontBracket",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop03",
    ConstructionTablePartName: "part_Bracket",
    InsertModule: true,
    Construction: "Bracket",
    FrontsideRelevant: false,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 99,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedBracket",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopback",
    InsertModule: true,
    Construction: "RailBackVertical",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: true
  }
  , {
    _id: 100,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedBracket",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop02",
    ConstructionTablePartName: "part_Heatshelf",
    InsertModule: true,
    Construction: "Heatshelf",
    FrontsideRelevant: false,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 101,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedBracket",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop03",
    ConstructionTablePartName: "part_Bracket",
    InsertModule: true,
    Construction: "Bracket",
    FrontsideRelevant: false,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 102,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedRail",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopfront",
    InsertModule: true,
    Construction: "RailFrontVertical",
    FrontsideRelevant: true,
    BacksideRelevant: false,
    HobMoveRelevant: true
  }
  , {
    _id: 103,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedRail",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopback",
    InsertModule: true,
    Construction: "RailBackVertical",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: true
  }
  , {
    _id: 104,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedRail",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop02",
    ConstructionTablePartName: "part_Heatshelf",
    InsertModule: true,
    Construction: "Heatshelf",
    FrontsideRelevant: false,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 105,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitRemovable",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopback",
    InsertModule: true,
    Construction: "RailBackVertical",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: true
  }
  , {
    _id: 106,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitRemovable",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop02",
    ConstructionTablePartName: "part_Heatshelf",
    InsertModule: true,
    Construction: "Heatshelf",
    FrontsideRelevant: false,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 107,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitRemovable",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop02",
    ConstructionTablePartName: "part_HeatshelfFront",
    InsertModule: true,
    Construction: "HeatshelfFront",
    FrontsideRelevant: false,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 108,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitRemovable",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop02",
    ConstructionTablePartName: "part_Heatshelf",
    InsertModule: true,
    Construction: "Heatshelf",
    FrontsideRelevant: false,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 109,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitRemovable",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopback",
    InsertModule: true,
    Construction: "RailBackVertical",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: true
  }
  , {
    _id: 110,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedBracket",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop03",
    ConstructionTablePartName: "part_Bracket",
    InsertModule: true,
    Construction: "Bracket",
    FrontsideRelevant: false,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 111,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedBracket",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop02",
    ConstructionTablePartName: "part_Heatshelf",
    InsertModule: true,
    Construction: "Heatshelf",
    FrontsideRelevant: false,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 112,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedBracket",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopback",
    InsertModule: true,
    Construction: "RailBackVertical",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: true
  }
  , {
    _id: 113,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedRail",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopback",
    InsertModule: true,
    Construction: "RailBackVertical",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: true
  }
  , {
    _id: 114,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedRail",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopfront",
    InsertModule: true,
    Construction: "RailFrontVertical",
    FrontsideRelevant: true,
    BacksideRelevant: false,
    HobMoveRelevant: true
  }
  , {
    _id: 115,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "HobUnitFixedRail",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop02",
    ConstructionTablePartName: "part_Heatshelf",
    InsertModule: true,
    Construction: "Heatshelf",
    FrontsideRelevant: false,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 116,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "SlopedCeilingShelfTop",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop04",
    ConstructionTablePartName: "part_SlopedCeilingShelftopHor",
    InsertModule: true,
    Construction: "SlopedCeilingShelfTop",
    FrontsideRelevant: true,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 117,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "SlopedCeilingShelfTop",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop04",
    ConstructionTablePartName: "part_SlopedCeilingShelftopAngle",
    InsertModule: true,
    Construction: "SlopedCeilingShelfTop",
    FrontsideRelevant: true,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 118,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontBackHorizontal",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railhortopfront",
    InsertModule: true,
    Construction: "RailFrontHorizontal",
    FrontsideRelevant: true,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 119,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontBackHorizontal",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railhortopback",
    InsertModule: true,
    Construction: "RailBackHorizontal",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 120,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "ShelfTop",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Shelftop",
    InsertModule: true,
    Construction: "ShelfTop",
    FrontsideRelevant: true,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 121,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "SlopedCeilingShelfTop",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop04",
    ConstructionTablePartName: "part_SlopedCeilingShelftopHor",
    InsertModule: true,
    Construction: "SlopedCeilingShelfTop",
    FrontsideRelevant: true,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 122,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "SlopedCeilingShelfTop",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop04",
    ConstructionTablePartName: "part_SlopedCeilingShelftopAngle",
    InsertModule: true,
    Construction: "SlopedCeilingShelfTop",
    FrontsideRelevant: true,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 123,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "NoShelfTop",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Shelftop",
    InsertModule: false,
    Construction: "NoShelfTop",
    FrontsideRelevant: true,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 124,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "NoShelfTop",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Shelftop",
    InsertModule: false,
    Construction: "NoShelfTop",
    FrontsideRelevant: true,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 125,
    in_ModuleName: "mc_Cornerunit01",
    in_ShelfTopConstruction: "ShelfTop",
    in_AdditionalInfo1: "All",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Shelftop",
    InsertModule: true,
    Construction: "ShelfTop",
    FrontsideRelevant: true,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
  , {
    _id: 126,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontBackVertical",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopfront",
    InsertModule: true,
    Construction: "RailFrontVertical",
    FrontsideRelevant: true,
    BacksideRelevant: false,
    HobMoveRelevant: false
  }
  , {
    _id: 127,
    in_ModuleName: "mc_Storageunit01",
    in_ShelfTopConstruction: "RailTopFrontBackVertical",
    in_AdditionalInfo1: "Fingergrip",
    LibrarySolution: true,
    UsedModule: "mc_CarcaseShelftop01",
    ConstructionTablePartName: "part_Railverttopback",
    InsertModule: true,
    Construction: "RailBackVertical",
    FrontsideRelevant: false,
    BacksideRelevant: true,
    HobMoveRelevant: false
  }
];
