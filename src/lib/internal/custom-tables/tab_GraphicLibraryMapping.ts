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

export interface cti_tab_GraphicLibraryMapping {
  readonly in_GraphicItem?: string;
}

export interface ctm_tab_GraphicLibraryMapping {
}

export interface cto_tab_GraphicLibraryMapping extends ctm_tab_GraphicLibraryMapping {
  readonly _id: number;
  readonly Model3DGroupName?: string;
}

export interface ICT_tab_GraphicLibraryMapping
  extends cti_tab_GraphicLibraryMapping, cto_tab_GraphicLibraryMapping { }

export class ct2_tab_GraphicLibraryMapping {

  public findExactly(
    in_GraphicItem: string | undefined,
  ): cto_tab_GraphicLibraryMapping | undefined {
    const res = ct_tab_GraphicLibraryMapping.find((p) =>
      p.in_GraphicItem === in_GraphicItem
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_GraphicLibraryMapping) => boolean
  ): cto_tab_GraphicLibraryMapping | undefined {
    for (let index = 0; index < ct_tab_GraphicLibraryMapping.length; index++) {
      const element = ct_tab_GraphicLibraryMapping[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_GraphicLibraryMapping: ICT_tab_GraphicLibraryMapping[] = [
  {
    _id: 19550,
    in_GraphicItem: "DesignLegSlanted001H250",
    Model3DGroupName: "Model3DDesignLegSlanted001H250"
  }
  , {
    _id: 19551,
    in_GraphicItem: "GraphicShelfadjFittingWoodDesign01",
    Model3DGroupName: "Model3DShelfadjWoodDesign01"
  }
  , {
    _id: 19552,
    in_GraphicItem: "GraphicShelfadjFittingWoodDesign02",
    Model3DGroupName: "Model3DShelfadjWoodDesign02"
  }
  , {
    _id: 19553,
    in_GraphicItem: "GraphicShelfadjFittingWoodDesign03",
    Model3DGroupName: "Model3DShelfadjWoodDesign03"
  }
  , {
    _id: 19554,
    in_GraphicItem: "GraphicShelfadjFittingGlassDesign01",
    Model3DGroupName: "Model3DShelfadjGlassDesign01"
  }
  , {
    _id: 19555,
    in_GraphicItem: "GraphicItemMinifix01White",
    Model3DGroupName: "MinifixConnectionBolt01"
  }
  , {
    _id: 19556,
    in_GraphicItem: "GraphicItemMinifix01White",
    Model3DGroupName: "MinifixConnectionHousing01"
  }
  , {
    _id: 19557,
    in_GraphicItem: "GraphicItemMinifix01White",
    Model3DGroupName: "MinifixConnectionCover"
  }
  , {
    _id: 19558,
    in_GraphicItem: "GraphicItemMinifix01Black",
    Model3DGroupName: "MinifixConnectionBolt01"
  }
  , {
    _id: 19559,
    in_GraphicItem: "GraphicItemMinifix01Black",
    Model3DGroupName: "MinifixConnectionHousing01"
  }
  , {
    _id: 19560,
    in_GraphicItem: "GraphicItemMinifix01Black",
    Model3DGroupName: "MinifixConnectionCover"
  }
  , {
    _id: 19561,
    in_GraphicItem: "GraphicItemMinifix01Light",
    Model3DGroupName: "MinifixConnectionBolt01"
  }
  , {
    _id: 19562,
    in_GraphicItem: "GraphicItemMinifix01Light",
    Model3DGroupName: "MinifixConnectionHousing01"
  }
  , {
    _id: 19563,
    in_GraphicItem: "GraphicItemMinifix01Light",
    Model3DGroupName: "MinifixConnectionCover"
  }
  , {
    _id: 19564,
    in_GraphicItem: "GraphicItemMinifix01Dark",
    Model3DGroupName: "MinifixConnectionBolt01"
  }
  , {
    _id: 19565,
    in_GraphicItem: "GraphicItemMinifix01Dark",
    Model3DGroupName: "MinifixConnectionHousing01"
  }
  , {
    _id: 19566,
    in_GraphicItem: "GraphicItemMinifix01Dark",
    Model3DGroupName: "MinifixConnectionCover"
  }
  , {
    _id: 19567,
    in_GraphicItem: "GraphicItemDowel01",
    Model3DGroupName: "Dowel"
  }
  , {
    _id: 19568,
    in_GraphicItem: "GraphicItemDowel02",
    Model3DGroupName: "Dowel"
  }
  , {
    _id: 19569,
    in_GraphicItem: "GraphicHinge110HalfSpringSS",
    Model3DGroupName: "Model3DHinge110HalfSpringSS"
  }
  , {
    _id: 19570,
    in_GraphicItem: "GraphicHinge110InsetSpringSS",
    Model3DGroupName: "Model3DHinge110InsetSpringSS"
  }
  , {
    _id: 19571,
    in_GraphicItem: "GraphicHinge110OverlaySpringSS",
    Model3DGroupName: "Model3DHinge110OverlaySpringSS"
  }
  , {
    _id: 19572,
    in_GraphicItem: "GraphicHinge110SoftClHalfSpringSS",
    Model3DGroupName: "Model3DHinge110SoftClHalfSpringSS"
  }
  , {
    _id: 19573,
    in_GraphicItem: "GraphicHinge110SoftClInsetSpringSS",
    Model3DGroupName: "Model3DHinge110SoftClInsetSpringSS"
  }
  , {
    _id: 19574,
    in_GraphicItem: "GraphicHinge110SoftClOverlaySpringSS",
    Model3DGroupName: "Model3DHinge110SoftClOverlaySpringSS"
  }
  , {
    _id: 19575,
    in_GraphicItem: "GraphicHinge155SoftClHalfSpringSS",
    Model3DGroupName: "Model3DHinge155SoftClHalfSpringSS"
  }
  , {
    _id: 19576,
    in_GraphicItem: "GraphicHinge155SoftClOverlaySpringSS",
    Model3DGroupName: "Model3DHinge155SoftClOverlaySpringSS"
  }
  , {
    _id: 19577,
    in_GraphicItem: "GraphicHinge165HalfSpringSS",
    Model3DGroupName: "Model3DHinge165HalfSpringSS"
  }
  , {
    _id: 19578,
    in_GraphicItem: "GraphicHinge165InsetSpringSS",
    Model3DGroupName: "Model3DHinge165InsetSpringSS"
  }
  , {
    _id: 19579,
    in_GraphicItem: "GraphicHinge165OverlaySpringSS",
    Model3DGroupName: "Model3DHinge165OverlaySpringSS"
  }
  , {
    _id: 19580,
    in_GraphicItem: "GraphicMpCruciformA0SS",
    Model3DGroupName: "Model3DMpCruciformA0SS"
  }
  , {
    _id: 19581,
    in_GraphicItem: "GraphicMpCruciformA3SS",
    Model3DGroupName: "Model3DMpCruciformA3SS"
  }
  , {
    _id: 19582,
    in_GraphicItem: "GraphicMpCruciformA6SS",
    Model3DGroupName: "Model3DMpCruciformA6SS"
  }
  , {
    _id: 19583,
    in_GraphicItem: "GraphicMpCruciformSM0SS",
    Model3DGroupName: "Model3DMpCruciformSM0SS"
  }
  , {
    _id: 19584,
    in_GraphicItem: "GraphicMpCruciformSM3SS",
    Model3DGroupName: "Model3DMpCruciformSM3SS"
  }
  , {
    _id: 19585,
    in_GraphicItem: "GraphicMpCruciformSM6SS",
    Model3DGroupName: "Model3DMpCruciformSM6SS"
  }
  , {
    _id: 19586,
    in_GraphicItem: "GraphicMpHorizontalSM0SS",
    Model3DGroupName: "Model3DMpHorizontalSM0SS"
  }
  , {
    _id: 19587,
    in_GraphicItem: "GraphicMpHorizontalSM3SS",
    Model3DGroupName: "Model3DMpHorizontalSM3SS"
  }
  , {
    _id: 19588,
    in_GraphicItem: "GraphicMpHorizontalSM6SS",
    Model3DGroupName: "Model3DMpHorizontalSM6SS"
  }
  , {
    _id: 19589,
    in_GraphicItem: "GraphicHingeBlindCornerInset110SoftClNP",
    Model3DGroupName: "Model3DHingeBlindCornerInset110SoftClNP"
  }
  , {
    _id: 19590,
    in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
    Model3DGroupName: "Model3DCoverCap290.40.701"
  }
  , {
    _id: 19591,
    in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
    Model3DGroupName: "Model3DCoverCap290.40.702"
  }
  , {
    _id: 19592,
    in_GraphicItem: "GraphicWallUnitVisibleHanger52kgNickelPlated",
    Model3DGroupName: "Model3DHanger290.02.702"
  }
  , {
    _id: 19593,
    in_GraphicItem: "GraphicWallUnitVisibleHanger52kgNickelPlated",
    Model3DGroupName: "Model3DHanger290.02.703"
  }
  , {
    _id: 19594,
    in_GraphicItem: "GraphicWallUnitHiddenHanger92kgWhite",
    Model3DGroupName: "Model3DHanger290.03.937"
  }
  , {
    _id: 19595,
    in_GraphicItem: "GraphicWallUnitHiddenHanger92kgWhite",
    Model3DGroupName: "Model3DHanger290.03.938"
  }
  , {
    _id: 19596,
    in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
    Model3DGroupName: "Model3DHanger290.40.901"
  }
  , {
    _id: 19597,
    in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
    Model3DGroupName: "Model3DHanger290.40.902"
  }
  , {
    _id: 19598,
    in_GraphicItem: "GraphicWallUnitVisibleHanger75kgWhite",
    Model3DGroupName: "Model3DHanger290.40.980"
  }
  , {
    _id: 19599,
    in_GraphicItem: "GraphicWallUnitVisibleHanger75kgWhite",
    Model3DGroupName: "Model3DHanger290.40.981"
  }
  , {
    _id: 19600,
    in_GraphicItem: "GraphicWallUnitVisibleHanger52kgNickelPlated",
    Model3DGroupName: "Model3DWallPlate290.09.910"
  }
  , {
    _id: 19601,
    in_GraphicItem: "GraphicWallUnitVisibleHanger75kgWhite",
    Model3DGroupName: "Model3DWallPlate290.40.989"
  }
  , {
    _id: 19602,
    in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
    Model3DGroupName: "Model3DWallPlate290.40.991"
  }
  , {
    _id: 19603,
    in_GraphicItem: "GraphicWallUnitHiddenHanger92kgWhite",
    Model3DGroupName: "Model3DWallPlate290.09.910"
  }
  , {
    _id: 19604,
    in_GraphicItem: "Graphic_Legra_FrontBotCon",
    Model3DGroupName: "Model3D_Legra_FrontBotCon"
  }
  , {
    _id: 19605,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgWhite",
    Model3DGroupName: "Model3DHanger290.02.710"
  }
  , {
    _id: 19606,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgWhite",
    Model3DGroupName: "Model3DHanger290.02.711"
  }
  , {
    _id: 19607,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgGrey",
    Model3DGroupName: "Model3DHanger290.02.710"
  }
  , {
    _id: 19608,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgGrey",
    Model3DGroupName: "Model3DHanger290.02.711"
  }
  , {
    _id: 19609,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgWhite",
    Model3DGroupName: "Model3DWallPlate290.09.910"
  }
  , {
    _id: 19610,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgGrey",
    Model3DGroupName: "Model3DWallPlate290.09.910"
  }
  , {
    _id: 19611,
    in_GraphicItem: "GraphicItemDowel03",
    Model3DGroupName: "Dowel"
  }
  , {
    _id: 19612,
    in_GraphicItem: "GraphicGlueDuststrip",
    Model3DGroupName: "Model3DGlueDuststrip"
  }
  , {
    _id: 19613,
    in_GraphicItem: "GraphicPushToOpenShort",
    Model3DGroupName: "Model3DPushToOpenShort"
  }
  , {
    _id: 19614,
    in_GraphicItem: "GraphicPushToOpenLong",
    Model3DGroupName: "Model3DPushToOpenLong"
  }
  , {
    _id: 19615,
    in_GraphicItem: "GraphicAdapterHousingShort",
    Model3DGroupName: "Model3DAdapterHousingShort"
  }
  , {
    _id: 19616,
    in_GraphicItem: "GraphicAdapterHousingLong",
    Model3DGroupName: "Model3DAdapterHousingLong"
  }
  , {
    _id: 19617,
    in_GraphicItem: "NoGraphic",
    Model3DGroupName: "NoGraphic"
  }
  , {
    _id: 19618,
    in_GraphicItem: "GraphicRafix01Nickel",
    Model3DGroupName: "Rafix20Housing19mmNickelPlated"
  }
  , {
    _id: 19619,
    in_GraphicItem: "GraphicRafix01Nickel",
    Model3DGroupName: "RafixConnectionBolt11x5mm"
  }
  , {
    _id: 19620,
    in_GraphicItem: "GraphicHingeFlipLiftDF",
    Model3DGroupName: "Model3DHingeFlipLiftDF"
  }
  , {
    _id: 19621,
    in_GraphicItem: "Aventos_HF_PSL",
    Model3DGroupName: "Model3D_Aventos_HF_PSL"
  }
  , {
    _id: 19622,
    in_GraphicItem: "Aventos_HF_PSR",
    Model3DGroupName: "Model3D_Aventos_HF_PSR"
  }
  , {
    _id: 19623,
    in_GraphicItem: "Aventos_HF_Connector",
    Model3DGroupName: "Model3D_Aventos_HF_Connector"
  }
  , {
    _id: 19624,
    in_GraphicItem: "Aventos_HF_Mech480",
    Model3DGroupName: "Model3D_Aventos_HF_Mech_480"
  }
  , {
    _id: 19625,
    in_GraphicItem: "Aventos_HF_Mech600",
    Model3DGroupName: "Model3D_Aventos_HF_Mech_600"
  }
  , {
    _id: 19626,
    in_GraphicItem: "Aventos_HF_Mech840",
    Model3DGroupName: "Model3D_Aventos_HF_Mech_840"
  }
  , {
    _id: 19627,
    in_GraphicItem: "Aventos_HK_PSL",
    Model3DGroupName: "Model3D_Aventos_HK_PSL"
  }
  , {
    _id: 19628,
    in_GraphicItem: "Aventos_HK_PSR",
    Model3DGroupName: "Model3D_Aventos_HK_PSR"
  }
  , {
    _id: 19629,
    in_GraphicItem: "Aventos_HK_Connector",
    Model3DGroupName: "Model3D_Aventos_HK_Connector"
  }
  , {
    _id: 19630,
    in_GraphicItem: "GraphicHinge120OverlayNoSpringSSForFHF",
    Model3DGroupName: "Model3DHinge120OverlayNoSpringSSForFHF"
  }
  , {
    _id: 19631,
    in_GraphicItem: "Aventos_HS_PSL",
    Model3DGroupName: "Model3D_Aventos_HS_PSL"
  }
  , {
    _id: 19632,
    in_GraphicItem: "Aventos_HS_PSR",
    Model3DGroupName: "Model3D_Aventos_HS_PSR"
  }
  , {
    _id: 19633,
    in_GraphicItem: "Aventos_HL_PSL",
    Model3DGroupName: "Model3D_Aventos_HL_PSL"
  }
  , {
    _id: 19634,
    in_GraphicItem: "Aventos_HL_PSR",
    Model3DGroupName: "Model3D_Aventos_HL_PSR"
  }
  , {
    _id: 19635,
    in_GraphicItem: "Aventos_HL_Mech1",
    Model3DGroupName: "Model3D_Aventos_HL_Mech1"
  }
  , {
    _id: 19636,
    in_GraphicItem: "Aventos_HL_Mech2",
    Model3DGroupName: "Model3D_Aventos_HL_Mech2"
  }
  , {
    _id: 19637,
    in_GraphicItem: "Aventos_HL_Mech3",
    Model3DGroupName: "Model3D_Aventos_HL_Mech3"
  }
  , {
    _id: 19638,
    in_GraphicItem: "Aventos_HL_Mech4",
    Model3DGroupName: "Model3D_Aventos_HL_Mech4"
  }
  , {
    _id: 19639,
    in_GraphicItem: "Aventos_HKXS_Mech_R",
    Model3DGroupName: "Model3D_Aventos_HKXS_Mech_R"
  }
  , {
    _id: 19640,
    in_GraphicItem: "Aventos_HKXS_Mech_L",
    Model3DGroupName: "Model3D_Aventos_HKXS_Mech_L"
  }
  , {
    _id: 19641,
    in_GraphicItem: "Aventos_HKXS_Front",
    Model3DGroupName: "Model3D_Aventos_HKXS_Front"
  }
  , {
    _id: 19642,
    in_GraphicItem: "Aventos_HKXS_Carcase_R",
    Model3DGroupName: "Model3D_Aventos_HKXS_Carcase_R"
  }
  , {
    _id: 19643,
    in_GraphicItem: "Aventos_HKXS_Carcase_L",
    Model3DGroupName: "Model3D_Aventos_HKXS_Carcase_L"
  }
  , {
    _id: 19644,
    in_GraphicItem: "DropDown_L",
    Model3DGroupName: "DropDown_L"
  }
  , {
    _id: 19645,
    in_GraphicItem: "DropDown_R",
    Model3DGroupName: "DropDown_R"
  }
  , {
    _id: 19646,
    in_GraphicItem: "DropDown_Front",
    Model3DGroupName: "DropDown_Front"
  }
  , {
    _id: 19647,
    in_GraphicItem: "GraphicHingeCenterForFHF",
    Model3DGroupName: "Model3DHingeCenterForFHF"
  }
  , {
    _id: 19648,
    in_GraphicItem: "GraphicMPHorizontalBL0SS",
    Model3DGroupName: "Model3DMPHorizontalBL0SS"
  }
  , {
    _id: 19649,
    in_GraphicItem: "GraphicMPHorizontalBL3SS",
    Model3DGroupName: "Model3DMPHorizontalBL3SS"
  }
  , {
    _id: 19650,
    in_GraphicItem: "SquareBracket",
    Model3DGroupName: "SquareBracket"
  }
  , {
    _id: 19651,
    in_GraphicItem: "GraphicBracket01",
    Model3DGroupName: "Model3DBracket01"
  }
  , {
    _id: 19652,
    in_GraphicItem: "GraphicPlinthLegTriangularPressH100",
    Model3DGroupName: "Model3DPlinthLegTriangularPressH100"
  }
  , {
    _id: 19653,
    in_GraphicItem: "GraphicPlinthLegTriangularPressH120",
    Model3DGroupName: "Model3DPlinthLegTriangularPressH120"
  }
  , {
    _id: 19654,
    in_GraphicItem: "GraphicPlinthLegTriangularPressH150",
    Model3DGroupName: "Model3DPlinthLegTriangularPressH150"
  }
  , {
    _id: 19655,
    in_GraphicItem: "GraphicPlinthLegRectangularScrewH100",
    Model3DGroupName: "Model3DPlinthLegRectangularScrewH100"
  }
  , {
    _id: 19656,
    in_GraphicItem: "GraphicPlinthLegRectangularScrewH120",
    Model3DGroupName: "Model3DPlinthLegRectangularScrewH120"
  }
  , {
    _id: 19657,
    in_GraphicItem: "GraphicPlinthLegRectangularScrewH150",
    Model3DGroupName: "Model3DPlinthLegRectangularScrewH150"
  }
  , {
    _id: 19658,
    in_GraphicItem: "DesignLegRectangular001H100",
    Model3DGroupName: "Model3DDesignLegRectangular001H100"
  }
  , {
    _id: 19659,
    in_GraphicItem: "DesignLegRectangular001H150",
    Model3DGroupName: "Model3DDesignLegRectangular001H150"
  }
  , {
    _id: 19660,
    in_GraphicItem: "DesignLegRectangular001H200",
    Model3DGroupName: "Model3DDesignLegRectangular001H200"
  }
  , {
    _id: 19661,
    in_GraphicItem: "DesignLegRectangular001H50",
    Model3DGroupName: "Model3DDesignLegRectangular001H50"
  }
  , {
    _id: 19662,
    in_GraphicItem: "DesignLegRectangular001H80",
    Model3DGroupName: "Model3DDesignLegRectangular001H80"
  }
  , {
    _id: 19663,
    in_GraphicItem: "GraphicKeku01",
    Model3DGroupName: "Model3DKeku_Side_262_50_368"
  }
  , {
    _id: 19664,
    in_GraphicItem: "GraphicKeku01",
    Model3DGroupName: "Model3DKeku_Front_262_50_359"
  }
  , {
    _id: 19665,
    in_GraphicItem: "GraphicLegra_Inox_270_C",
    Model3DGroupName: "Legra_Box_Inox_C_270_Left"
  }
  , {
    _id: 19666,
    in_GraphicItem: "GraphicLegra_Inox_270_C",
    Model3DGroupName: "Legra_Box_Inox_C_270_Right"
  }
  , {
    _id: 19667,
    in_GraphicItem: "GraphicLegra_Inox_270_C",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 19668,
    in_GraphicItem: "GraphicLegra_Inox_270_C",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 19669,
    in_GraphicItem: "GraphicLegra_Inox_270_M",
    Model3DGroupName: "Legra_Box_Inox_M_270_Left"
  }
  , {
    _id: 19670,
    in_GraphicItem: "GraphicLegra_Inox_270_M",
    Model3DGroupName: "Legra_Box_Inox_M_270_Right"
  }
  , {
    _id: 19671,
    in_GraphicItem: "GraphicLegra_Inox_270_M",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 19672,
    in_GraphicItem: "GraphicLegra_Inox_270_M",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 19673,
    in_GraphicItem: "GraphicLegra_Inox_300_C",
    Model3DGroupName: "Legra_Box_Inox_C_300_Left"
  }
  , {
    _id: 19674,
    in_GraphicItem: "GraphicLegra_Inox_300_C",
    Model3DGroupName: "Legra_Box_Inox_C_300_Right"
  }
  , {
    _id: 19675,
    in_GraphicItem: "GraphicLegra_Inox_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19676,
    in_GraphicItem: "GraphicLegra_Inox_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19677,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Box_Inox_K_300_Left"
  }
  , {
    _id: 19678,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Box_Inox_K_300_Right"
  }
  , {
    _id: 19679,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19680,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19681,
    in_GraphicItem: "GraphicLegra_Inox_300_M",
    Model3DGroupName: "Legra_Box_Inox_M_300_Left"
  }
  , {
    _id: 19682,
    in_GraphicItem: "GraphicLegra_Inox_300_M",
    Model3DGroupName: "Legra_Box_Inox_M_300_Right"
  }
  , {
    _id: 19683,
    in_GraphicItem: "GraphicLegra_Inox_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19684,
    in_GraphicItem: "GraphicLegra_Inox_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19685,
    in_GraphicItem: "GraphicLegra_Inox_350_C",
    Model3DGroupName: "Legra_Box_Inox_C_350_Left"
  }
  , {
    _id: 19686,
    in_GraphicItem: "GraphicLegra_Inox_350_C",
    Model3DGroupName: "Legra_Box_Inox_C_350_Right"
  }
  , {
    _id: 19687,
    in_GraphicItem: "GraphicLegra_Inox_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19688,
    in_GraphicItem: "GraphicLegra_Inox_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19689,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Box_Inox_K_350_Left"
  }
  , {
    _id: 19690,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Box_Inox_K_350_Right"
  }
  , {
    _id: 19691,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19692,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19693,
    in_GraphicItem: "GraphicLegra_Inox_350_M",
    Model3DGroupName: "Legra_Box_Inox_M_350_Left"
  }
  , {
    _id: 19694,
    in_GraphicItem: "GraphicLegra_Inox_350_M",
    Model3DGroupName: "Legra_Box_Inox_M_350_Right"
  }
  , {
    _id: 19695,
    in_GraphicItem: "GraphicLegra_Inox_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19696,
    in_GraphicItem: "GraphicLegra_Inox_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19697,
    in_GraphicItem: "GraphicLegra_Inox_400_C",
    Model3DGroupName: "Legra_Box_Inox_C_400_Left"
  }
  , {
    _id: 19698,
    in_GraphicItem: "GraphicLegra_Inox_400_C",
    Model3DGroupName: "Legra_Box_Inox_C_400_Right"
  }
  , {
    _id: 19699,
    in_GraphicItem: "GraphicLegra_Inox_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19700,
    in_GraphicItem: "GraphicLegra_Inox_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19701,
    in_GraphicItem: "GraphicLegra_Inox_400_F",
    Model3DGroupName: "Legra_Box_Inox_F_400_Left"
  }
  , {
    _id: 19702,
    in_GraphicItem: "GraphicLegra_Inox_400_F",
    Model3DGroupName: "Legra_Box_Inox_F_400_Right"
  }
  , {
    _id: 19703,
    in_GraphicItem: "GraphicLegra_Inox_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19704,
    in_GraphicItem: "GraphicLegra_Inox_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19705,
    in_GraphicItem: "GraphicLegra_Inox_400_K",
    Model3DGroupName: "Legra_Box_Inox_K_400_Left"
  }
  , {
    _id: 19706,
    in_GraphicItem: "GraphicLegra_Inox_400_K",
    Model3DGroupName: "Legra_Box_Inox_K_400_Right"
  }
  , {
    _id: 19707,
    in_GraphicItem: "GraphicLegra_Inox_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19708,
    in_GraphicItem: "GraphicLegra_Inox_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19709,
    in_GraphicItem: "GraphicLegra_Inox_400_M",
    Model3DGroupName: "Legra_Box_Inox_M_400_Left"
  }
  , {
    _id: 19710,
    in_GraphicItem: "GraphicLegra_Inox_400_M",
    Model3DGroupName: "Legra_Box_Inox_M_400_Right"
  }
  , {
    _id: 19711,
    in_GraphicItem: "GraphicLegra_Inox_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19712,
    in_GraphicItem: "GraphicLegra_Inox_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19713,
    in_GraphicItem: "GraphicLegra_Inox_400_N",
    Model3DGroupName: "Legra_Box_Inox_N_400_Left"
  }
  , {
    _id: 19714,
    in_GraphicItem: "GraphicLegra_Inox_400_N",
    Model3DGroupName: "Legra_Box_Inox_N_400_Right"
  }
  , {
    _id: 19715,
    in_GraphicItem: "GraphicLegra_Inox_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19716,
    in_GraphicItem: "GraphicLegra_Inox_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19717,
    in_GraphicItem: "GraphicLegra_Inox_450_C",
    Model3DGroupName: "Legra_Box_Inox_C_450_Left"
  }
  , {
    _id: 19718,
    in_GraphicItem: "GraphicLegra_Inox_450_C",
    Model3DGroupName: "Legra_Box_Inox_C_450_Right"
  }
  , {
    _id: 19719,
    in_GraphicItem: "GraphicLegra_Inox_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19720,
    in_GraphicItem: "GraphicLegra_Inox_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19721,
    in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_450_Left"
  }
  , {
    _id: 19722,
    in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_450_Right"
  }
  , {
    _id: 19723,
    in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 19724,
    in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 19725,
    in_GraphicItem: "GraphicLegra_Inox_450_F",
    Model3DGroupName: "Legra_Box_Inox_F_450_Left"
  }
  , {
    _id: 19726,
    in_GraphicItem: "GraphicLegra_Inox_450_F",
    Model3DGroupName: "Legra_Box_Inox_F_450_Right"
  }
  , {
    _id: 19727,
    in_GraphicItem: "GraphicLegra_Inox_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19728,
    in_GraphicItem: "GraphicLegra_Inox_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19729,
    in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_450_Left"
  }
  , {
    _id: 19730,
    in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_450_Right"
  }
  , {
    _id: 19731,
    in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 19732,
    in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 19733,
    in_GraphicItem: "GraphicLegra_Inox_450_K",
    Model3DGroupName: "Legra_Box_Inox_K_450_Left"
  }
  , {
    _id: 19734,
    in_GraphicItem: "GraphicLegra_Inox_450_K",
    Model3DGroupName: "Legra_Box_Inox_K_450_Right"
  }
  , {
    _id: 19735,
    in_GraphicItem: "GraphicLegra_Inox_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19736,
    in_GraphicItem: "GraphicLegra_Inox_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19737,
    in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_450_Left"
  }
  , {
    _id: 19738,
    in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_450_Right"
  }
  , {
    _id: 19739,
    in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 19740,
    in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 19741,
    in_GraphicItem: "GraphicLegra_Inox_450_M",
    Model3DGroupName: "Legra_Box_Inox_M_450_Left"
  }
  , {
    _id: 19742,
    in_GraphicItem: "GraphicLegra_Inox_450_M",
    Model3DGroupName: "Legra_Box_Inox_M_450_Right"
  }
  , {
    _id: 19743,
    in_GraphicItem: "GraphicLegra_Inox_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19744,
    in_GraphicItem: "GraphicLegra_Inox_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19745,
    in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_450_Left"
  }
  , {
    _id: 19746,
    in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_450_Right"
  }
  , {
    _id: 19747,
    in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 19748,
    in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 19749,
    in_GraphicItem: "GraphicLegra_Inox_450_N",
    Model3DGroupName: "Legra_Box_Inox_N_450_Left"
  }
  , {
    _id: 19750,
    in_GraphicItem: "GraphicLegra_Inox_450_N",
    Model3DGroupName: "Legra_Box_Inox_N_450_Right"
  }
  , {
    _id: 19751,
    in_GraphicItem: "GraphicLegra_Inox_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19752,
    in_GraphicItem: "GraphicLegra_Inox_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19753,
    in_GraphicItem: "GraphicLegra_Inox_500_C",
    Model3DGroupName: "Legra_Box_Inox_C_500_Left"
  }
  , {
    _id: 19754,
    in_GraphicItem: "GraphicLegra_Inox_500_C",
    Model3DGroupName: "Legra_Box_Inox_C_500_Right"
  }
  , {
    _id: 19755,
    in_GraphicItem: "GraphicLegra_Inox_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19756,
    in_GraphicItem: "GraphicLegra_Inox_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19757,
    in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_500_Left"
  }
  , {
    _id: 19758,
    in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_500_Right"
  }
  , {
    _id: 19759,
    in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19760,
    in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19761,
    in_GraphicItem: "GraphicLegra_Inox_500_F",
    Model3DGroupName: "Legra_Box_Inox_F_500_Left"
  }
  , {
    _id: 19762,
    in_GraphicItem: "GraphicLegra_Inox_500_F",
    Model3DGroupName: "Legra_Box_Inox_F_500_Right"
  }
  , {
    _id: 19763,
    in_GraphicItem: "GraphicLegra_Inox_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19764,
    in_GraphicItem: "GraphicLegra_Inox_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19765,
    in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_500_Left"
  }
  , {
    _id: 19766,
    in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_500_Right"
  }
  , {
    _id: 19767,
    in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19768,
    in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19769,
    in_GraphicItem: "GraphicLegra_Inox_500_K",
    Model3DGroupName: "Legra_Box_Inox_K_500_Left"
  }
  , {
    _id: 19770,
    in_GraphicItem: "GraphicLegra_Inox_500_K",
    Model3DGroupName: "Legra_Box_Inox_K_500_Right"
  }
  , {
    _id: 19771,
    in_GraphicItem: "GraphicLegra_Inox_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19772,
    in_GraphicItem: "GraphicLegra_Inox_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19773,
    in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_500_Left"
  }
  , {
    _id: 19774,
    in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_500_Right"
  }
  , {
    _id: 19775,
    in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19776,
    in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19777,
    in_GraphicItem: "GraphicLegra_Inox_500_M",
    Model3DGroupName: "Legra_Box_Inox_M_500_Left"
  }
  , {
    _id: 19778,
    in_GraphicItem: "GraphicLegra_Inox_500_M",
    Model3DGroupName: "Legra_Box_Inox_M_500_Right"
  }
  , {
    _id: 19779,
    in_GraphicItem: "GraphicLegra_Inox_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19780,
    in_GraphicItem: "GraphicLegra_Inox_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19781,
    in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_500_Left"
  }
  , {
    _id: 19782,
    in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_500_Right"
  }
  , {
    _id: 19783,
    in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19784,
    in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19785,
    in_GraphicItem: "GraphicLegra_Inox_500_N",
    Model3DGroupName: "Legra_Box_Inox_N_500_Left"
  }
  , {
    _id: 19786,
    in_GraphicItem: "GraphicLegra_Inox_500_N",
    Model3DGroupName: "Legra_Box_Inox_N_500_Right"
  }
  , {
    _id: 19787,
    in_GraphicItem: "GraphicLegra_Inox_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19788,
    in_GraphicItem: "GraphicLegra_Inox_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19789,
    in_GraphicItem: "GraphicLegra_Inox_550_C",
    Model3DGroupName: "Legra_Box_Inox_C_550_Left"
  }
  , {
    _id: 19790,
    in_GraphicItem: "GraphicLegra_Inox_550_C",
    Model3DGroupName: "Legra_Box_Inox_C_550_Right"
  }
  , {
    _id: 19791,
    in_GraphicItem: "GraphicLegra_Inox_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 19792,
    in_GraphicItem: "GraphicLegra_Inox_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 19793,
    in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_550_Left"
  }
  , {
    _id: 19794,
    in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_550_Right"
  }
  , {
    _id: 19795,
    in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19796,
    in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19797,
    in_GraphicItem: "GraphicLegra_Inox_550_F",
    Model3DGroupName: "Legra_Box_Inox_F_550_Left"
  }
  , {
    _id: 19798,
    in_GraphicItem: "GraphicLegra_Inox_550_F",
    Model3DGroupName: "Legra_Box_Inox_F_550_Right"
  }
  , {
    _id: 19799,
    in_GraphicItem: "GraphicLegra_Inox_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 19800,
    in_GraphicItem: "GraphicLegra_Inox_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 19801,
    in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_550_Left"
  }
  , {
    _id: 19802,
    in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_550_Right"
  }
  , {
    _id: 19803,
    in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19804,
    in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19805,
    in_GraphicItem: "GraphicLegra_Inox_550_K",
    Model3DGroupName: "Legra_Box_Inox_K_550_Left"
  }
  , {
    _id: 19806,
    in_GraphicItem: "GraphicLegra_Inox_550_K",
    Model3DGroupName: "Legra_Box_Inox_K_550_Right"
  }
  , {
    _id: 19807,
    in_GraphicItem: "GraphicLegra_Inox_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 19808,
    in_GraphicItem: "GraphicLegra_Inox_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 19809,
    in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_550_Left"
  }
  , {
    _id: 19810,
    in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_550_Right"
  }
  , {
    _id: 19811,
    in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19812,
    in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19813,
    in_GraphicItem: "GraphicLegra_Inox_550_M",
    Model3DGroupName: "Legra_Box_Inox_M_550_Left"
  }
  , {
    _id: 19814,
    in_GraphicItem: "GraphicLegra_Inox_550_M",
    Model3DGroupName: "Legra_Box_Inox_M_550_Right"
  }
  , {
    _id: 19815,
    in_GraphicItem: "GraphicLegra_Inox_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 19816,
    in_GraphicItem: "GraphicLegra_Inox_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 19817,
    in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_550_Left"
  }
  , {
    _id: 19818,
    in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_550_Right"
  }
  , {
    _id: 19819,
    in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19820,
    in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19821,
    in_GraphicItem: "GraphicLegra_Inox_550_N",
    Model3DGroupName: "Legra_Box_Inox_N_550_Left"
  }
  , {
    _id: 19822,
    in_GraphicItem: "GraphicLegra_Inox_550_N",
    Model3DGroupName: "Legra_Box_Inox_N_550_Right"
  }
  , {
    _id: 19823,
    in_GraphicItem: "GraphicLegra_Inox_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 19824,
    in_GraphicItem: "GraphicLegra_Inox_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 19825,
    in_GraphicItem: "GraphicLegra_Inox_600_C",
    Model3DGroupName: "Legra_Box_Inox_C_600_Left"
  }
  , {
    _id: 19826,
    in_GraphicItem: "GraphicLegra_Inox_600_C",
    Model3DGroupName: "Legra_Box_Inox_C_600_Right"
  }
  , {
    _id: 19827,
    in_GraphicItem: "GraphicLegra_Inox_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 19828,
    in_GraphicItem: "GraphicLegra_Inox_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 19829,
    in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_600_Left"
  }
  , {
    _id: 19830,
    in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_600_Right"
  }
  , {
    _id: 19831,
    in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19832,
    in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19833,
    in_GraphicItem: "GraphicLegra_Inox_600_F",
    Model3DGroupName: "Legra_Box_Inox_F_600_Left"
  }
  , {
    _id: 19834,
    in_GraphicItem: "GraphicLegra_Inox_600_F",
    Model3DGroupName: "Legra_Box_Inox_F_600_Right"
  }
  , {
    _id: 19835,
    in_GraphicItem: "GraphicLegra_Inox_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 19836,
    in_GraphicItem: "GraphicLegra_Inox_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 19837,
    in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_600_Left"
  }
  , {
    _id: 19838,
    in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_600_Right"
  }
  , {
    _id: 19839,
    in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19840,
    in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19841,
    in_GraphicItem: "GraphicLegra_Inox_600_K",
    Model3DGroupName: "Legra_Box_Inox_K_600_Left"
  }
  , {
    _id: 19842,
    in_GraphicItem: "GraphicLegra_Inox_600_K",
    Model3DGroupName: "Legra_Box_Inox_K_600_Right"
  }
  , {
    _id: 19843,
    in_GraphicItem: "GraphicLegra_Inox_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 19844,
    in_GraphicItem: "GraphicLegra_Inox_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 19845,
    in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_600_Left"
  }
  , {
    _id: 19846,
    in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_600_Right"
  }
  , {
    _id: 19847,
    in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19848,
    in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19849,
    in_GraphicItem: "GraphicLegra_Inox_600_M",
    Model3DGroupName: "Legra_Box_Inox_M_600_Left"
  }
  , {
    _id: 19850,
    in_GraphicItem: "GraphicLegra_Inox_600_M",
    Model3DGroupName: "Legra_Box_Inox_M_600_Right"
  }
  , {
    _id: 19851,
    in_GraphicItem: "GraphicLegra_Inox_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 19852,
    in_GraphicItem: "GraphicLegra_Inox_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 19853,
    in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_600_Left"
  }
  , {
    _id: 19854,
    in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_600_Right"
  }
  , {
    _id: 19855,
    in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19856,
    in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19857,
    in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_650_Left"
  }
  , {
    _id: 19858,
    in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_650_Right"
  }
  , {
    _id: 19859,
    in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 19860,
    in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 19861,
    in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_650_Left"
  }
  , {
    _id: 19862,
    in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_650_Right"
  }
  , {
    _id: 19863,
    in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 19864,
    in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 19865,
    in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_650_Left"
  }
  , {
    _id: 19866,
    in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_650_Right"
  }
  , {
    _id: 19867,
    in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 19868,
    in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 19869,
    in_GraphicItem: "Graphic_Legra_Syncro",
    Model3DGroupName: "Graphic_Legra_Syncro"
  }
  , {
    _id: 19870,
    in_GraphicItem: "GraphicLegra_Orion_270_C",
    Model3DGroupName: "Legra_Box_Orion_C_270_Left"
  }
  , {
    _id: 19871,
    in_GraphicItem: "GraphicLegra_Orion_270_C",
    Model3DGroupName: "Legra_Box_Orion_C_270_Right"
  }
  , {
    _id: 19872,
    in_GraphicItem: "GraphicLegra_Orion_270_C",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 19873,
    in_GraphicItem: "GraphicLegra_Orion_270_C",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 19874,
    in_GraphicItem: "GraphicLegra_Orion_270_M",
    Model3DGroupName: "Legra_Box_Orion_M_270_Left"
  }
  , {
    _id: 19875,
    in_GraphicItem: "GraphicLegra_Orion_270_M",
    Model3DGroupName: "Legra_Box_Orion_M_270_Right"
  }
  , {
    _id: 19876,
    in_GraphicItem: "GraphicLegra_Orion_270_M",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 19877,
    in_GraphicItem: "GraphicLegra_Orion_270_M",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 19878,
    in_GraphicItem: "GraphicLegra_Orion_300_C",
    Model3DGroupName: "Legra_Box_Orion_C_300_Left"
  }
  , {
    _id: 19879,
    in_GraphicItem: "GraphicLegra_Orion_300_C",
    Model3DGroupName: "Legra_Box_Orion_C_300_Right"
  }
  , {
    _id: 19880,
    in_GraphicItem: "GraphicLegra_Orion_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19881,
    in_GraphicItem: "GraphicLegra_Orion_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19882,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Box_Orion_K_300_Left"
  }
  , {
    _id: 19883,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Box_Orion_K_300_Right"
  }
  , {
    _id: 19884,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19885,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19886,
    in_GraphicItem: "GraphicLegra_Orion_300_M",
    Model3DGroupName: "Legra_Box_Orion_M_300_Left"
  }
  , {
    _id: 19887,
    in_GraphicItem: "GraphicLegra_Orion_300_M",
    Model3DGroupName: "Legra_Box_Orion_M_300_Right"
  }
  , {
    _id: 19888,
    in_GraphicItem: "GraphicLegra_Orion_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19889,
    in_GraphicItem: "GraphicLegra_Orion_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19890,
    in_GraphicItem: "GraphicLegra_Orion_350_C",
    Model3DGroupName: "Legra_Box_Orion_C_350_Left"
  }
  , {
    _id: 19891,
    in_GraphicItem: "GraphicLegra_Orion_350_C",
    Model3DGroupName: "Legra_Box_Orion_C_350_Right"
  }
  , {
    _id: 19892,
    in_GraphicItem: "GraphicLegra_Orion_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19893,
    in_GraphicItem: "GraphicLegra_Orion_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19894,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Box_Orion_K_350_Left"
  }
  , {
    _id: 19895,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Box_Orion_K_350_Right"
  }
  , {
    _id: 19896,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19897,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19898,
    in_GraphicItem: "GraphicLegra_Orion_350_M",
    Model3DGroupName: "Legra_Box_Orion_M_350_Left"
  }
  , {
    _id: 19899,
    in_GraphicItem: "GraphicLegra_Orion_350_M",
    Model3DGroupName: "Legra_Box_Orion_M_350_Right"
  }
  , {
    _id: 19900,
    in_GraphicItem: "GraphicLegra_Orion_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 19901,
    in_GraphicItem: "GraphicLegra_Orion_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 19902,
    in_GraphicItem: "GraphicLegra_Orion_400_C",
    Model3DGroupName: "Legra_Box_Orion_C_400_Left"
  }
  , {
    _id: 19903,
    in_GraphicItem: "GraphicLegra_Orion_400_C",
    Model3DGroupName: "Legra_Box_Orion_C_400_Right"
  }
  , {
    _id: 19904,
    in_GraphicItem: "GraphicLegra_Orion_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19905,
    in_GraphicItem: "GraphicLegra_Orion_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19906,
    in_GraphicItem: "GraphicLegra_Orion_400_F",
    Model3DGroupName: "Legra_Box_Orion_F_400_Left"
  }
  , {
    _id: 19907,
    in_GraphicItem: "GraphicLegra_Orion_400_F",
    Model3DGroupName: "Legra_Box_Orion_F_400_Right"
  }
  , {
    _id: 19908,
    in_GraphicItem: "GraphicLegra_Orion_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19909,
    in_GraphicItem: "GraphicLegra_Orion_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19910,
    in_GraphicItem: "GraphicLegra_Orion_400_K",
    Model3DGroupName: "Legra_Box_Orion_K_400_Left"
  }
  , {
    _id: 19911,
    in_GraphicItem: "GraphicLegra_Orion_400_K",
    Model3DGroupName: "Legra_Box_Orion_K_400_Right"
  }
  , {
    _id: 19912,
    in_GraphicItem: "GraphicLegra_Orion_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19913,
    in_GraphicItem: "GraphicLegra_Orion_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19914,
    in_GraphicItem: "GraphicLegra_Orion_400_M",
    Model3DGroupName: "Legra_Box_Orion_M_400_Left"
  }
  , {
    _id: 19915,
    in_GraphicItem: "GraphicLegra_Orion_400_M",
    Model3DGroupName: "Legra_Box_Orion_M_400_Right"
  }
  , {
    _id: 19916,
    in_GraphicItem: "GraphicLegra_Orion_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19917,
    in_GraphicItem: "GraphicLegra_Orion_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19918,
    in_GraphicItem: "GraphicLegra_Orion_400_N",
    Model3DGroupName: "Legra_Box_Orion_N_400_Left"
  }
  , {
    _id: 19919,
    in_GraphicItem: "GraphicLegra_Orion_400_N",
    Model3DGroupName: "Legra_Box_Orion_N_400_Right"
  }
  , {
    _id: 19920,
    in_GraphicItem: "GraphicLegra_Orion_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19921,
    in_GraphicItem: "GraphicLegra_Orion_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19922,
    in_GraphicItem: "GraphicLegra_Orion_450_C",
    Model3DGroupName: "Legra_Box_Orion_C_450_Left"
  }
  , {
    _id: 19923,
    in_GraphicItem: "GraphicLegra_Orion_450_C",
    Model3DGroupName: "Legra_Box_Orion_C_450_Right"
  }
  , {
    _id: 19924,
    in_GraphicItem: "GraphicLegra_Orion_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19925,
    in_GraphicItem: "GraphicLegra_Orion_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19926,
    in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_450_Left"
  }
  , {
    _id: 19927,
    in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_450_Right"
  }
  , {
    _id: 19928,
    in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 19929,
    in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 19930,
    in_GraphicItem: "GraphicLegra_Orion_450_F",
    Model3DGroupName: "Legra_Box_Orion_F_450_Left"
  }
  , {
    _id: 19931,
    in_GraphicItem: "GraphicLegra_Orion_450_F",
    Model3DGroupName: "Legra_Box_Orion_F_450_Right"
  }
  , {
    _id: 19932,
    in_GraphicItem: "GraphicLegra_Orion_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19933,
    in_GraphicItem: "GraphicLegra_Orion_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19934,
    in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_450_Left"
  }
  , {
    _id: 19935,
    in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_450_Right"
  }
  , {
    _id: 19936,
    in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 19937,
    in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 19938,
    in_GraphicItem: "GraphicLegra_Orion_450_K",
    Model3DGroupName: "Legra_Box_Orion_K_450_Left"
  }
  , {
    _id: 19939,
    in_GraphicItem: "GraphicLegra_Orion_450_K",
    Model3DGroupName: "Legra_Box_Orion_K_450_Right"
  }
  , {
    _id: 19940,
    in_GraphicItem: "GraphicLegra_Orion_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19941,
    in_GraphicItem: "GraphicLegra_Orion_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19942,
    in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_450_Left"
  }
  , {
    _id: 19943,
    in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_450_Right"
  }
  , {
    _id: 19944,
    in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 19945,
    in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 19946,
    in_GraphicItem: "GraphicLegra_Orion_450_M",
    Model3DGroupName: "Legra_Box_Orion_M_450_Left"
  }
  , {
    _id: 19947,
    in_GraphicItem: "GraphicLegra_Orion_450_M",
    Model3DGroupName: "Legra_Box_Orion_M_450_Right"
  }
  , {
    _id: 19948,
    in_GraphicItem: "GraphicLegra_Orion_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19949,
    in_GraphicItem: "GraphicLegra_Orion_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19950,
    in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_450_Left"
  }
  , {
    _id: 19951,
    in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_450_Right"
  }
  , {
    _id: 19952,
    in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 19953,
    in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 19954,
    in_GraphicItem: "GraphicLegra_Orion_450_N",
    Model3DGroupName: "Legra_Box_Orion_N_450_Left"
  }
  , {
    _id: 19955,
    in_GraphicItem: "GraphicLegra_Orion_450_N",
    Model3DGroupName: "Legra_Box_Orion_N_450_Right"
  }
  , {
    _id: 19956,
    in_GraphicItem: "GraphicLegra_Orion_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19957,
    in_GraphicItem: "GraphicLegra_Orion_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19958,
    in_GraphicItem: "GraphicLegra_Orion_500_C",
    Model3DGroupName: "Legra_Box_Orion_C_500_Left"
  }
  , {
    _id: 19959,
    in_GraphicItem: "GraphicLegra_Orion_500_C",
    Model3DGroupName: "Legra_Box_Orion_C_500_Right"
  }
  , {
    _id: 19960,
    in_GraphicItem: "GraphicLegra_Orion_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19961,
    in_GraphicItem: "GraphicLegra_Orion_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19962,
    in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_500_Left"
  }
  , {
    _id: 19963,
    in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_500_Right"
  }
  , {
    _id: 19964,
    in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19965,
    in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19966,
    in_GraphicItem: "GraphicLegra_Orion_500_F",
    Model3DGroupName: "Legra_Box_Orion_F_500_Left"
  }
  , {
    _id: 19967,
    in_GraphicItem: "GraphicLegra_Orion_500_F",
    Model3DGroupName: "Legra_Box_Orion_F_500_Right"
  }
  , {
    _id: 19968,
    in_GraphicItem: "GraphicLegra_Orion_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19969,
    in_GraphicItem: "GraphicLegra_Orion_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19970,
    in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_500_Left"
  }
  , {
    _id: 19971,
    in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_500_Right"
  }
  , {
    _id: 19972,
    in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19973,
    in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19974,
    in_GraphicItem: "GraphicLegra_Orion_500_K",
    Model3DGroupName: "Legra_Box_Orion_K_500_Left"
  }
  , {
    _id: 19975,
    in_GraphicItem: "GraphicLegra_Orion_500_K",
    Model3DGroupName: "Legra_Box_Orion_K_500_Right"
  }
  , {
    _id: 19976,
    in_GraphicItem: "GraphicLegra_Orion_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19977,
    in_GraphicItem: "GraphicLegra_Orion_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19978,
    in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_500_Left"
  }
  , {
    _id: 19979,
    in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_500_Right"
  }
  , {
    _id: 19980,
    in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19981,
    in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19982,
    in_GraphicItem: "GraphicLegra_Orion_500_M",
    Model3DGroupName: "Legra_Box_Orion_M_500_Left"
  }
  , {
    _id: 19983,
    in_GraphicItem: "GraphicLegra_Orion_500_M",
    Model3DGroupName: "Legra_Box_Orion_M_500_Right"
  }
  , {
    _id: 19984,
    in_GraphicItem: "GraphicLegra_Orion_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19985,
    in_GraphicItem: "GraphicLegra_Orion_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19986,
    in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_500_Left"
  }
  , {
    _id: 19987,
    in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_500_Right"
  }
  , {
    _id: 19988,
    in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 19989,
    in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 19990,
    in_GraphicItem: "GraphicLegra_Orion_500_N",
    Model3DGroupName: "Legra_Box_Orion_N_500_Left"
  }
  , {
    _id: 19991,
    in_GraphicItem: "GraphicLegra_Orion_500_N",
    Model3DGroupName: "Legra_Box_Orion_N_500_Right"
  }
  , {
    _id: 19992,
    in_GraphicItem: "GraphicLegra_Orion_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 19993,
    in_GraphicItem: "GraphicLegra_Orion_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 19994,
    in_GraphicItem: "GraphicLegra_Orion_550_C",
    Model3DGroupName: "Legra_Box_Orion_C_550_Left"
  }
  , {
    _id: 19995,
    in_GraphicItem: "GraphicLegra_Orion_550_C",
    Model3DGroupName: "Legra_Box_Orion_C_550_Right"
  }
  , {
    _id: 19996,
    in_GraphicItem: "GraphicLegra_Orion_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 19997,
    in_GraphicItem: "GraphicLegra_Orion_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 19998,
    in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_550_Left"
  }
  , {
    _id: 19999,
    in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_550_Right"
  }
  , {
    _id: 20000,
    in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20001,
    in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20002,
    in_GraphicItem: "GraphicLegra_Orion_550_F",
    Model3DGroupName: "Legra_Box_Orion_F_550_Left"
  }
  , {
    _id: 20003,
    in_GraphicItem: "GraphicLegra_Orion_550_F",
    Model3DGroupName: "Legra_Box_Orion_F_550_Right"
  }
  , {
    _id: 20004,
    in_GraphicItem: "GraphicLegra_Orion_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20005,
    in_GraphicItem: "GraphicLegra_Orion_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20006,
    in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_550_Left"
  }
  , {
    _id: 20007,
    in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_550_Right"
  }
  , {
    _id: 20008,
    in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20009,
    in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20010,
    in_GraphicItem: "GraphicLegra_Orion_550_K",
    Model3DGroupName: "Legra_Box_Orion_K_550_Left"
  }
  , {
    _id: 20011,
    in_GraphicItem: "GraphicLegra_Orion_550_K",
    Model3DGroupName: "Legra_Box_Orion_K_550_Right"
  }
  , {
    _id: 20012,
    in_GraphicItem: "GraphicLegra_Orion_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20013,
    in_GraphicItem: "GraphicLegra_Orion_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20014,
    in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_550_Left"
  }
  , {
    _id: 20015,
    in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_550_Right"
  }
  , {
    _id: 20016,
    in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20017,
    in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20018,
    in_GraphicItem: "GraphicLegra_Orion_550_M",
    Model3DGroupName: "Legra_Box_Orion_M_550_Left"
  }
  , {
    _id: 20019,
    in_GraphicItem: "GraphicLegra_Orion_550_M",
    Model3DGroupName: "Legra_Box_Orion_M_550_Right"
  }
  , {
    _id: 20020,
    in_GraphicItem: "GraphicLegra_Orion_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20021,
    in_GraphicItem: "GraphicLegra_Orion_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20022,
    in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_550_Left"
  }
  , {
    _id: 20023,
    in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_550_Right"
  }
  , {
    _id: 20024,
    in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20025,
    in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20026,
    in_GraphicItem: "GraphicLegra_Orion_550_N",
    Model3DGroupName: "Legra_Box_Orion_N_550_Left"
  }
  , {
    _id: 20027,
    in_GraphicItem: "GraphicLegra_Orion_550_N",
    Model3DGroupName: "Legra_Box_Orion_N_550_Right"
  }
  , {
    _id: 20028,
    in_GraphicItem: "GraphicLegra_Orion_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20029,
    in_GraphicItem: "GraphicLegra_Orion_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20030,
    in_GraphicItem: "GraphicLegra_Orion_600_C",
    Model3DGroupName: "Legra_Box_Orion_C_600_Left"
  }
  , {
    _id: 20031,
    in_GraphicItem: "GraphicLegra_Orion_600_C",
    Model3DGroupName: "Legra_Box_Orion_C_600_Right"
  }
  , {
    _id: 20032,
    in_GraphicItem: "GraphicLegra_Orion_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20033,
    in_GraphicItem: "GraphicLegra_Orion_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20034,
    in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_600_Left"
  }
  , {
    _id: 20035,
    in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_600_Right"
  }
  , {
    _id: 20036,
    in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20037,
    in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20038,
    in_GraphicItem: "GraphicLegra_Orion_600_F",
    Model3DGroupName: "Legra_Box_Orion_F_600_Left"
  }
  , {
    _id: 20039,
    in_GraphicItem: "GraphicLegra_Orion_600_F",
    Model3DGroupName: "Legra_Box_Orion_F_600_Right"
  }
  , {
    _id: 20040,
    in_GraphicItem: "GraphicLegra_Orion_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20041,
    in_GraphicItem: "GraphicLegra_Orion_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20042,
    in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_600_Left"
  }
  , {
    _id: 20043,
    in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_600_Right"
  }
  , {
    _id: 20044,
    in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20045,
    in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20046,
    in_GraphicItem: "GraphicLegra_Orion_600_K",
    Model3DGroupName: "Legra_Box_Orion_K_600_Left"
  }
  , {
    _id: 20047,
    in_GraphicItem: "GraphicLegra_Orion_600_K",
    Model3DGroupName: "Legra_Box_Orion_K_600_Right"
  }
  , {
    _id: 20048,
    in_GraphicItem: "GraphicLegra_Orion_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20049,
    in_GraphicItem: "GraphicLegra_Orion_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20050,
    in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_600_Left"
  }
  , {
    _id: 20051,
    in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_600_Right"
  }
  , {
    _id: 20052,
    in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20053,
    in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20054,
    in_GraphicItem: "GraphicLegra_Orion_600_M",
    Model3DGroupName: "Legra_Box_Orion_M_600_Left"
  }
  , {
    _id: 20055,
    in_GraphicItem: "GraphicLegra_Orion_600_M",
    Model3DGroupName: "Legra_Box_Orion_M_600_Right"
  }
  , {
    _id: 20056,
    in_GraphicItem: "GraphicLegra_Orion_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20057,
    in_GraphicItem: "GraphicLegra_Orion_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20058,
    in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_600_Left"
  }
  , {
    _id: 20059,
    in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_600_Right"
  }
  , {
    _id: 20060,
    in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20061,
    in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20062,
    in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_650_Left"
  }
  , {
    _id: 20063,
    in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_650_Right"
  }
  , {
    _id: 20064,
    in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 20065,
    in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 20066,
    in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_650_Left"
  }
  , {
    _id: 20067,
    in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_650_Right"
  }
  , {
    _id: 20068,
    in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 20069,
    in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 20070,
    in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_650_Left"
  }
  , {
    _id: 20071,
    in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_650_Right"
  }
  , {
    _id: 20072,
    in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 20073,
    in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 20074,
    in_GraphicItem: "GraphicLegra_Terra_270_C",
    Model3DGroupName: "Legra_Box_Terra_C_270_Left"
  }
  , {
    _id: 20075,
    in_GraphicItem: "GraphicLegra_Terra_270_C",
    Model3DGroupName: "Legra_Box_Terra_C_270_Right"
  }
  , {
    _id: 20076,
    in_GraphicItem: "GraphicLegra_Terra_270_C",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 20077,
    in_GraphicItem: "GraphicLegra_Terra_270_C",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 20078,
    in_GraphicItem: "GraphicLegra_Terra_270_M",
    Model3DGroupName: "Legra_Box_Terra_M_270_Left"
  }
  , {
    _id: 20079,
    in_GraphicItem: "GraphicLegra_Terra_270_M",
    Model3DGroupName: "Legra_Box_Terra_M_270_Right"
  }
  , {
    _id: 20080,
    in_GraphicItem: "GraphicLegra_Terra_270_M",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 20081,
    in_GraphicItem: "GraphicLegra_Terra_270_M",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 20082,
    in_GraphicItem: "GraphicLegra_Terra_300_C",
    Model3DGroupName: "Legra_Box_Terra_C_300_Left"
  }
  , {
    _id: 20083,
    in_GraphicItem: "GraphicLegra_Terra_300_C",
    Model3DGroupName: "Legra_Box_Terra_C_300_Right"
  }
  , {
    _id: 20084,
    in_GraphicItem: "GraphicLegra_Terra_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20085,
    in_GraphicItem: "GraphicLegra_Terra_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20086,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Box_Terra_K_300_Left"
  }
  , {
    _id: 20087,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Box_Terra_K_300_Right"
  }
  , {
    _id: 20088,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20089,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20090,
    in_GraphicItem: "GraphicLegra_Terra_300_M",
    Model3DGroupName: "Legra_Box_Terra_M_300_Left"
  }
  , {
    _id: 20091,
    in_GraphicItem: "GraphicLegra_Terra_300_M",
    Model3DGroupName: "Legra_Box_Terra_M_300_Right"
  }
  , {
    _id: 20092,
    in_GraphicItem: "GraphicLegra_Terra_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20093,
    in_GraphicItem: "GraphicLegra_Terra_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20094,
    in_GraphicItem: "GraphicLegra_Terra_350_C",
    Model3DGroupName: "Legra_Box_Terra_C_350_Left"
  }
  , {
    _id: 20095,
    in_GraphicItem: "GraphicLegra_Terra_350_C",
    Model3DGroupName: "Legra_Box_Terra_C_350_Right"
  }
  , {
    _id: 20096,
    in_GraphicItem: "GraphicLegra_Terra_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20097,
    in_GraphicItem: "GraphicLegra_Terra_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20098,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Box_Terra_K_350_Left"
  }
  , {
    _id: 20099,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Box_Terra_K_350_Right"
  }
  , {
    _id: 20100,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20101,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20102,
    in_GraphicItem: "GraphicLegra_Terra_350_M",
    Model3DGroupName: "Legra_Box_Terra_M_350_Left"
  }
  , {
    _id: 20103,
    in_GraphicItem: "GraphicLegra_Terra_350_M",
    Model3DGroupName: "Legra_Box_Terra_M_350_Right"
  }
  , {
    _id: 20104,
    in_GraphicItem: "GraphicLegra_Terra_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20105,
    in_GraphicItem: "GraphicLegra_Terra_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20106,
    in_GraphicItem: "GraphicLegra_Terra_400_C",
    Model3DGroupName: "Legra_Box_Terra_C_400_Left"
  }
  , {
    _id: 20107,
    in_GraphicItem: "GraphicLegra_Terra_400_C",
    Model3DGroupName: "Legra_Box_Terra_C_400_Right"
  }
  , {
    _id: 20108,
    in_GraphicItem: "GraphicLegra_Terra_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20109,
    in_GraphicItem: "GraphicLegra_Terra_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20110,
    in_GraphicItem: "GraphicLegra_Terra_400_F",
    Model3DGroupName: "Legra_Box_Terra_F_400_Left"
  }
  , {
    _id: 20111,
    in_GraphicItem: "GraphicLegra_Terra_400_F",
    Model3DGroupName: "Legra_Box_Terra_F_400_Right"
  }
  , {
    _id: 20112,
    in_GraphicItem: "GraphicLegra_Terra_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20113,
    in_GraphicItem: "GraphicLegra_Terra_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20114,
    in_GraphicItem: "GraphicLegra_Terra_400_K",
    Model3DGroupName: "Legra_Box_Terra_K_400_Left"
  }
  , {
    _id: 20115,
    in_GraphicItem: "GraphicLegra_Terra_400_K",
    Model3DGroupName: "Legra_Box_Terra_K_400_Right"
  }
  , {
    _id: 20116,
    in_GraphicItem: "GraphicLegra_Terra_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20117,
    in_GraphicItem: "GraphicLegra_Terra_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20118,
    in_GraphicItem: "GraphicLegra_Terra_400_M",
    Model3DGroupName: "Legra_Box_Terra_M_400_Left"
  }
  , {
    _id: 20119,
    in_GraphicItem: "GraphicLegra_Terra_400_M",
    Model3DGroupName: "Legra_Box_Terra_M_400_Right"
  }
  , {
    _id: 20120,
    in_GraphicItem: "GraphicLegra_Terra_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20121,
    in_GraphicItem: "GraphicLegra_Terra_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20122,
    in_GraphicItem: "GraphicLegra_Terra_400_N",
    Model3DGroupName: "Legra_Box_Terra_N_400_Left"
  }
  , {
    _id: 20123,
    in_GraphicItem: "GraphicLegra_Terra_400_N",
    Model3DGroupName: "Legra_Box_Terra_N_400_Right"
  }
  , {
    _id: 20124,
    in_GraphicItem: "GraphicLegra_Terra_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20125,
    in_GraphicItem: "GraphicLegra_Terra_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20126,
    in_GraphicItem: "GraphicLegra_Terra_450_C",
    Model3DGroupName: "Legra_Box_Terra_C_450_Left"
  }
  , {
    _id: 20127,
    in_GraphicItem: "GraphicLegra_Terra_450_C",
    Model3DGroupName: "Legra_Box_Terra_C_450_Right"
  }
  , {
    _id: 20128,
    in_GraphicItem: "GraphicLegra_Terra_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20129,
    in_GraphicItem: "GraphicLegra_Terra_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20130,
    in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_450_Left"
  }
  , {
    _id: 20131,
    in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_450_Right"
  }
  , {
    _id: 20132,
    in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 20133,
    in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 20134,
    in_GraphicItem: "GraphicLegra_Terra_450_F",
    Model3DGroupName: "Legra_Box_Terra_F_450_Left"
  }
  , {
    _id: 20135,
    in_GraphicItem: "GraphicLegra_Terra_450_F",
    Model3DGroupName: "Legra_Box_Terra_F_450_Right"
  }
  , {
    _id: 20136,
    in_GraphicItem: "GraphicLegra_Terra_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20137,
    in_GraphicItem: "GraphicLegra_Terra_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20138,
    in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_450_Left"
  }
  , {
    _id: 20139,
    in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_450_Right"
  }
  , {
    _id: 20140,
    in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 20141,
    in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 20142,
    in_GraphicItem: "GraphicLegra_Terra_450_K",
    Model3DGroupName: "Legra_Box_Terra_K_450_Left"
  }
  , {
    _id: 20143,
    in_GraphicItem: "GraphicLegra_Terra_450_K",
    Model3DGroupName: "Legra_Box_Terra_K_450_Right"
  }
  , {
    _id: 20144,
    in_GraphicItem: "GraphicLegra_Terra_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20145,
    in_GraphicItem: "GraphicLegra_Terra_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20146,
    in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_450_Left"
  }
  , {
    _id: 20147,
    in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_450_Right"
  }
  , {
    _id: 20148,
    in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 20149,
    in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 20150,
    in_GraphicItem: "GraphicLegra_Terra_450_M",
    Model3DGroupName: "Legra_Box_Terra_M_450_Left"
  }
  , {
    _id: 20151,
    in_GraphicItem: "GraphicLegra_Terra_450_M",
    Model3DGroupName: "Legra_Box_Terra_M_450_Right"
  }
  , {
    _id: 20152,
    in_GraphicItem: "GraphicLegra_Terra_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20153,
    in_GraphicItem: "GraphicLegra_Terra_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20154,
    in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_450_Left"
  }
  , {
    _id: 20155,
    in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_450_Right"
  }
  , {
    _id: 20156,
    in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 20157,
    in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 20158,
    in_GraphicItem: "GraphicLegra_Terra_450_N",
    Model3DGroupName: "Legra_Box_Terra_N_450_Left"
  }
  , {
    _id: 20159,
    in_GraphicItem: "GraphicLegra_Terra_450_N",
    Model3DGroupName: "Legra_Box_Terra_N_450_Right"
  }
  , {
    _id: 20160,
    in_GraphicItem: "GraphicLegra_Terra_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20161,
    in_GraphicItem: "GraphicLegra_Terra_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20162,
    in_GraphicItem: "GraphicLegra_Terra_500_C",
    Model3DGroupName: "Legra_Box_Terra_C_500_Left"
  }
  , {
    _id: 20163,
    in_GraphicItem: "GraphicLegra_Terra_500_C",
    Model3DGroupName: "Legra_Box_Terra_C_500_Right"
  }
  , {
    _id: 20164,
    in_GraphicItem: "GraphicLegra_Terra_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20165,
    in_GraphicItem: "GraphicLegra_Terra_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20166,
    in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_500_Left"
  }
  , {
    _id: 20167,
    in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_500_Right"
  }
  , {
    _id: 20168,
    in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20169,
    in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20170,
    in_GraphicItem: "GraphicLegra_Terra_500_F",
    Model3DGroupName: "Legra_Box_Terra_F_500_Left"
  }
  , {
    _id: 20171,
    in_GraphicItem: "GraphicLegra_Terra_500_F",
    Model3DGroupName: "Legra_Box_Terra_F_500_Right"
  }
  , {
    _id: 20172,
    in_GraphicItem: "GraphicLegra_Terra_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20173,
    in_GraphicItem: "GraphicLegra_Terra_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20174,
    in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_500_Left"
  }
  , {
    _id: 20175,
    in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_500_Right"
  }
  , {
    _id: 20176,
    in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20177,
    in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20178,
    in_GraphicItem: "GraphicLegra_Terra_500_K",
    Model3DGroupName: "Legra_Box_Terra_K_500_Left"
  }
  , {
    _id: 20179,
    in_GraphicItem: "GraphicLegra_Terra_500_K",
    Model3DGroupName: "Legra_Box_Terra_K_500_Right"
  }
  , {
    _id: 20180,
    in_GraphicItem: "GraphicLegra_Terra_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20181,
    in_GraphicItem: "GraphicLegra_Terra_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20182,
    in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_500_Left"
  }
  , {
    _id: 20183,
    in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_500_Right"
  }
  , {
    _id: 20184,
    in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20185,
    in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20186,
    in_GraphicItem: "GraphicLegra_Terra_500_M",
    Model3DGroupName: "Legra_Box_Terra_M_500_Left"
  }
  , {
    _id: 20187,
    in_GraphicItem: "GraphicLegra_Terra_500_M",
    Model3DGroupName: "Legra_Box_Terra_M_500_Right"
  }
  , {
    _id: 20188,
    in_GraphicItem: "GraphicLegra_Terra_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20189,
    in_GraphicItem: "GraphicLegra_Terra_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20190,
    in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_500_Left"
  }
  , {
    _id: 20191,
    in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_500_Right"
  }
  , {
    _id: 20192,
    in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20193,
    in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20194,
    in_GraphicItem: "GraphicLegra_Terra_500_N",
    Model3DGroupName: "Legra_Box_Terra_N_500_Left"
  }
  , {
    _id: 20195,
    in_GraphicItem: "GraphicLegra_Terra_500_N",
    Model3DGroupName: "Legra_Box_Terra_N_500_Right"
  }
  , {
    _id: 20196,
    in_GraphicItem: "GraphicLegra_Terra_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20197,
    in_GraphicItem: "GraphicLegra_Terra_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20198,
    in_GraphicItem: "GraphicLegra_Terra_550_C",
    Model3DGroupName: "Legra_Box_Terra_C_550_Left"
  }
  , {
    _id: 20199,
    in_GraphicItem: "GraphicLegra_Terra_550_C",
    Model3DGroupName: "Legra_Box_Terra_C_550_Right"
  }
  , {
    _id: 20200,
    in_GraphicItem: "GraphicLegra_Terra_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20201,
    in_GraphicItem: "GraphicLegra_Terra_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20202,
    in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_550_Left"
  }
  , {
    _id: 20203,
    in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_550_Right"
  }
  , {
    _id: 20204,
    in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20205,
    in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20206,
    in_GraphicItem: "GraphicLegra_Terra_550_F",
    Model3DGroupName: "Legra_Box_Terra_F_550_Left"
  }
  , {
    _id: 20207,
    in_GraphicItem: "GraphicLegra_Terra_550_F",
    Model3DGroupName: "Legra_Box_Terra_F_550_Right"
  }
  , {
    _id: 20208,
    in_GraphicItem: "GraphicLegra_Terra_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20209,
    in_GraphicItem: "GraphicLegra_Terra_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20210,
    in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_550_Left"
  }
  , {
    _id: 20211,
    in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_550_Right"
  }
  , {
    _id: 20212,
    in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20213,
    in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20214,
    in_GraphicItem: "GraphicLegra_Terra_550_K",
    Model3DGroupName: "Legra_Box_Terra_K_550_Left"
  }
  , {
    _id: 20215,
    in_GraphicItem: "GraphicLegra_Terra_550_K",
    Model3DGroupName: "Legra_Box_Terra_K_550_Right"
  }
  , {
    _id: 20216,
    in_GraphicItem: "GraphicLegra_Terra_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20217,
    in_GraphicItem: "GraphicLegra_Terra_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20218,
    in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_550_Left"
  }
  , {
    _id: 20219,
    in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_550_Right"
  }
  , {
    _id: 20220,
    in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20221,
    in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20222,
    in_GraphicItem: "GraphicLegra_Terra_550_M",
    Model3DGroupName: "Legra_Box_Terra_M_550_Left"
  }
  , {
    _id: 20223,
    in_GraphicItem: "GraphicLegra_Terra_550_M",
    Model3DGroupName: "Legra_Box_Terra_M_550_Right"
  }
  , {
    _id: 20224,
    in_GraphicItem: "GraphicLegra_Terra_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20225,
    in_GraphicItem: "GraphicLegra_Terra_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20226,
    in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_550_Left"
  }
  , {
    _id: 20227,
    in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_550_Right"
  }
  , {
    _id: 20228,
    in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20229,
    in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20230,
    in_GraphicItem: "GraphicLegra_Terra_550_N",
    Model3DGroupName: "Legra_Box_Terra_N_550_Left"
  }
  , {
    _id: 20231,
    in_GraphicItem: "GraphicLegra_Terra_550_N",
    Model3DGroupName: "Legra_Box_Terra_N_550_Right"
  }
  , {
    _id: 20232,
    in_GraphicItem: "GraphicLegra_Terra_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20233,
    in_GraphicItem: "GraphicLegra_Terra_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20234,
    in_GraphicItem: "GraphicLegra_Terra_600_C",
    Model3DGroupName: "Legra_Box_Terra_C_600_Left"
  }
  , {
    _id: 20235,
    in_GraphicItem: "GraphicLegra_Terra_600_C",
    Model3DGroupName: "Legra_Box_Terra_C_600_Right"
  }
  , {
    _id: 20236,
    in_GraphicItem: "GraphicLegra_Terra_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20237,
    in_GraphicItem: "GraphicLegra_Terra_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20238,
    in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_600_Left"
  }
  , {
    _id: 20239,
    in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_600_Right"
  }
  , {
    _id: 20240,
    in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20241,
    in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20242,
    in_GraphicItem: "GraphicLegra_Terra_600_F",
    Model3DGroupName: "Legra_Box_Terra_F_600_Left"
  }
  , {
    _id: 20243,
    in_GraphicItem: "GraphicLegra_Terra_600_F",
    Model3DGroupName: "Legra_Box_Terra_F_600_Right"
  }
  , {
    _id: 20244,
    in_GraphicItem: "GraphicLegra_Terra_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20245,
    in_GraphicItem: "GraphicLegra_Terra_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20246,
    in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_600_Left"
  }
  , {
    _id: 20247,
    in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_600_Right"
  }
  , {
    _id: 20248,
    in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20249,
    in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20250,
    in_GraphicItem: "GraphicLegra_Terra_600_K",
    Model3DGroupName: "Legra_Box_Terra_K_600_Left"
  }
  , {
    _id: 20251,
    in_GraphicItem: "GraphicLegra_Terra_600_K",
    Model3DGroupName: "Legra_Box_Terra_K_600_Right"
  }
  , {
    _id: 20252,
    in_GraphicItem: "GraphicLegra_Terra_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20253,
    in_GraphicItem: "GraphicLegra_Terra_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20254,
    in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_600_Left"
  }
  , {
    _id: 20255,
    in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_600_Right"
  }
  , {
    _id: 20256,
    in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20257,
    in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20258,
    in_GraphicItem: "GraphicLegra_Terra_600_M",
    Model3DGroupName: "Legra_Box_Terra_M_600_Left"
  }
  , {
    _id: 20259,
    in_GraphicItem: "GraphicLegra_Terra_600_M",
    Model3DGroupName: "Legra_Box_Terra_M_600_Right"
  }
  , {
    _id: 20260,
    in_GraphicItem: "GraphicLegra_Terra_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20261,
    in_GraphicItem: "GraphicLegra_Terra_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20262,
    in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_600_Left"
  }
  , {
    _id: 20263,
    in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_600_Right"
  }
  , {
    _id: 20264,
    in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20265,
    in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20266,
    in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_650_Left"
  }
  , {
    _id: 20267,
    in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_650_Right"
  }
  , {
    _id: 20268,
    in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 20269,
    in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 20270,
    in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_650_Left"
  }
  , {
    _id: 20271,
    in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_650_Right"
  }
  , {
    _id: 20272,
    in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 20273,
    in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 20274,
    in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_650_Left"
  }
  , {
    _id: 20275,
    in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_650_Right"
  }
  , {
    _id: 20276,
    in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 20277,
    in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 20278,
    in_GraphicItem: "GraphicLegra_White_270_C",
    Model3DGroupName: "Legra_Box_White_C_270_Left"
  }
  , {
    _id: 20279,
    in_GraphicItem: "GraphicLegra_White_270_C",
    Model3DGroupName: "Legra_Box_White_C_270_Right"
  }
  , {
    _id: 20280,
    in_GraphicItem: "GraphicLegra_White_270_C",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 20281,
    in_GraphicItem: "GraphicLegra_White_270_C",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 20282,
    in_GraphicItem: "GraphicLegra_White_270_M",
    Model3DGroupName: "Legra_Box_White_M_270_Left"
  }
  , {
    _id: 20283,
    in_GraphicItem: "GraphicLegra_White_270_M",
    Model3DGroupName: "Legra_Box_White_M_270_Right"
  }
  , {
    _id: 20284,
    in_GraphicItem: "GraphicLegra_White_270_M",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 20285,
    in_GraphicItem: "GraphicLegra_White_270_M",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 20286,
    in_GraphicItem: "GraphicLegra_White_300_C",
    Model3DGroupName: "Legra_Box_White_C_300_Left"
  }
  , {
    _id: 20287,
    in_GraphicItem: "GraphicLegra_White_300_C",
    Model3DGroupName: "Legra_Box_White_C_300_Right"
  }
  , {
    _id: 20288,
    in_GraphicItem: "GraphicLegra_White_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20289,
    in_GraphicItem: "GraphicLegra_White_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20290,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Box_White_K_300_Left"
  }
  , {
    _id: 20291,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Box_White_K_300_Right"
  }
  , {
    _id: 20292,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20293,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20294,
    in_GraphicItem: "GraphicLegra_White_300_M",
    Model3DGroupName: "Legra_Box_White_M_300_Left"
  }
  , {
    _id: 20295,
    in_GraphicItem: "GraphicLegra_White_300_M",
    Model3DGroupName: "Legra_Box_White_M_300_Right"
  }
  , {
    _id: 20296,
    in_GraphicItem: "GraphicLegra_White_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20297,
    in_GraphicItem: "GraphicLegra_White_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20298,
    in_GraphicItem: "GraphicLegra_White_350_C",
    Model3DGroupName: "Legra_Box_White_C_350_Left"
  }
  , {
    _id: 20299,
    in_GraphicItem: "GraphicLegra_White_350_C",
    Model3DGroupName: "Legra_Box_White_C_350_Right"
  }
  , {
    _id: 20300,
    in_GraphicItem: "GraphicLegra_White_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20301,
    in_GraphicItem: "GraphicLegra_White_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20302,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Box_White_K_350_Left"
  }
  , {
    _id: 20303,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Box_White_K_350_Right"
  }
  , {
    _id: 20304,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20305,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20306,
    in_GraphicItem: "GraphicLegra_White_350_M",
    Model3DGroupName: "Legra_Box_White_M_350_Left"
  }
  , {
    _id: 20307,
    in_GraphicItem: "GraphicLegra_White_350_M",
    Model3DGroupName: "Legra_Box_White_M_350_Right"
  }
  , {
    _id: 20308,
    in_GraphicItem: "GraphicLegra_White_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 20309,
    in_GraphicItem: "GraphicLegra_White_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 20310,
    in_GraphicItem: "GraphicLegra_White_400_C",
    Model3DGroupName: "Legra_Box_White_C_400_Left"
  }
  , {
    _id: 20311,
    in_GraphicItem: "GraphicLegra_White_400_C",
    Model3DGroupName: "Legra_Box_White_C_400_Right"
  }
  , {
    _id: 20312,
    in_GraphicItem: "GraphicLegra_White_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20313,
    in_GraphicItem: "GraphicLegra_White_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20314,
    in_GraphicItem: "GraphicLegra_White_400_F",
    Model3DGroupName: "Legra_Box_White_F_400_Left"
  }
  , {
    _id: 20315,
    in_GraphicItem: "GraphicLegra_White_400_F",
    Model3DGroupName: "Legra_Box_White_F_400_Right"
  }
  , {
    _id: 20316,
    in_GraphicItem: "GraphicLegra_White_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20317,
    in_GraphicItem: "GraphicLegra_White_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20318,
    in_GraphicItem: "GraphicLegra_White_400_K",
    Model3DGroupName: "Legra_Box_White_K_400_Left"
  }
  , {
    _id: 20319,
    in_GraphicItem: "GraphicLegra_White_400_K",
    Model3DGroupName: "Legra_Box_White_K_400_Right"
  }
  , {
    _id: 20320,
    in_GraphicItem: "GraphicLegra_White_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20321,
    in_GraphicItem: "GraphicLegra_White_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20322,
    in_GraphicItem: "GraphicLegra_White_400_M",
    Model3DGroupName: "Legra_Box_White_M_400_Left"
  }
  , {
    _id: 20323,
    in_GraphicItem: "GraphicLegra_White_400_M",
    Model3DGroupName: "Legra_Box_White_M_400_Right"
  }
  , {
    _id: 20324,
    in_GraphicItem: "GraphicLegra_White_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20325,
    in_GraphicItem: "GraphicLegra_White_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20326,
    in_GraphicItem: "GraphicLegra_White_400_N",
    Model3DGroupName: "Legra_Box_White_N_400_Left"
  }
  , {
    _id: 20327,
    in_GraphicItem: "GraphicLegra_White_400_N",
    Model3DGroupName: "Legra_Box_White_N_400_Right"
  }
  , {
    _id: 20328,
    in_GraphicItem: "GraphicLegra_White_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20329,
    in_GraphicItem: "GraphicLegra_White_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20330,
    in_GraphicItem: "GraphicLegra_White_450_C",
    Model3DGroupName: "Legra_Box_White_C_450_Left"
  }
  , {
    _id: 20331,
    in_GraphicItem: "GraphicLegra_White_450_C",
    Model3DGroupName: "Legra_Box_White_C_450_Right"
  }
  , {
    _id: 20332,
    in_GraphicItem: "GraphicLegra_White_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20333,
    in_GraphicItem: "GraphicLegra_White_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20334,
    in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_450_Left"
  }
  , {
    _id: 20335,
    in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_450_Right"
  }
  , {
    _id: 20336,
    in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 20337,
    in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 20338,
    in_GraphicItem: "GraphicLegra_White_450_F",
    Model3DGroupName: "Legra_Box_White_F_450_Left"
  }
  , {
    _id: 20339,
    in_GraphicItem: "GraphicLegra_White_450_F",
    Model3DGroupName: "Legra_Box_White_F_450_Right"
  }
  , {
    _id: 20340,
    in_GraphicItem: "GraphicLegra_White_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20341,
    in_GraphicItem: "GraphicLegra_White_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20342,
    in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_450_Left"
  }
  , {
    _id: 20343,
    in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_450_Right"
  }
  , {
    _id: 20344,
    in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 20345,
    in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 20346,
    in_GraphicItem: "GraphicLegra_White_450_K",
    Model3DGroupName: "Legra_Box_White_K_450_Left"
  }
  , {
    _id: 20347,
    in_GraphicItem: "GraphicLegra_White_450_K",
    Model3DGroupName: "Legra_Box_White_K_450_Right"
  }
  , {
    _id: 20348,
    in_GraphicItem: "GraphicLegra_White_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20349,
    in_GraphicItem: "GraphicLegra_White_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20350,
    in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_450_Left"
  }
  , {
    _id: 20351,
    in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_450_Right"
  }
  , {
    _id: 20352,
    in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 20353,
    in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 20354,
    in_GraphicItem: "GraphicLegra_White_450_M",
    Model3DGroupName: "Legra_Box_White_M_450_Left"
  }
  , {
    _id: 20355,
    in_GraphicItem: "GraphicLegra_White_450_M",
    Model3DGroupName: "Legra_Box_White_M_450_Right"
  }
  , {
    _id: 20356,
    in_GraphicItem: "GraphicLegra_White_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20357,
    in_GraphicItem: "GraphicLegra_White_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20358,
    in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_450_Left"
  }
  , {
    _id: 20359,
    in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_450_Right"
  }
  , {
    _id: 20360,
    in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 20361,
    in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 20362,
    in_GraphicItem: "GraphicLegra_White_450_N",
    Model3DGroupName: "Legra_Box_White_N_450_Left"
  }
  , {
    _id: 20363,
    in_GraphicItem: "GraphicLegra_White_450_N",
    Model3DGroupName: "Legra_Box_White_N_450_Right"
  }
  , {
    _id: 20364,
    in_GraphicItem: "GraphicLegra_White_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20365,
    in_GraphicItem: "GraphicLegra_White_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20366,
    in_GraphicItem: "GraphicLegra_White_500_C",
    Model3DGroupName: "Legra_Box_White_C_500_Left"
  }
  , {
    _id: 20367,
    in_GraphicItem: "GraphicLegra_White_500_C",
    Model3DGroupName: "Legra_Box_White_C_500_Right"
  }
  , {
    _id: 20368,
    in_GraphicItem: "GraphicLegra_White_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20369,
    in_GraphicItem: "GraphicLegra_White_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20370,
    in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_500_Left"
  }
  , {
    _id: 20371,
    in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_500_Right"
  }
  , {
    _id: 20372,
    in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20373,
    in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20374,
    in_GraphicItem: "GraphicLegra_White_500_F",
    Model3DGroupName: "Legra_Box_White_F_500_Left"
  }
  , {
    _id: 20375,
    in_GraphicItem: "GraphicLegra_White_500_F",
    Model3DGroupName: "Legra_Box_White_F_500_Right"
  }
  , {
    _id: 20376,
    in_GraphicItem: "GraphicLegra_White_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20377,
    in_GraphicItem: "GraphicLegra_White_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20378,
    in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_500_Left"
  }
  , {
    _id: 20379,
    in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_500_Right"
  }
  , {
    _id: 20380,
    in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20381,
    in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20382,
    in_GraphicItem: "GraphicLegra_White_500_K",
    Model3DGroupName: "Legra_Box_White_K_500_Left"
  }
  , {
    _id: 20383,
    in_GraphicItem: "GraphicLegra_White_500_K",
    Model3DGroupName: "Legra_Box_White_K_500_Right"
  }
  , {
    _id: 20384,
    in_GraphicItem: "GraphicLegra_White_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20385,
    in_GraphicItem: "GraphicLegra_White_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20386,
    in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_500_Left"
  }
  , {
    _id: 20387,
    in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_500_Right"
  }
  , {
    _id: 20388,
    in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20389,
    in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20390,
    in_GraphicItem: "GraphicLegra_White_500_M",
    Model3DGroupName: "Legra_Box_White_M_500_Left"
  }
  , {
    _id: 20391,
    in_GraphicItem: "GraphicLegra_White_500_M",
    Model3DGroupName: "Legra_Box_White_M_500_Right"
  }
  , {
    _id: 20392,
    in_GraphicItem: "GraphicLegra_White_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20393,
    in_GraphicItem: "GraphicLegra_White_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20394,
    in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_500_Left"
  }
  , {
    _id: 20395,
    in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_500_Right"
  }
  , {
    _id: 20396,
    in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20397,
    in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20398,
    in_GraphicItem: "GraphicLegra_White_500_N",
    Model3DGroupName: "Legra_Box_White_N_500_Left"
  }
  , {
    _id: 20399,
    in_GraphicItem: "GraphicLegra_White_500_N",
    Model3DGroupName: "Legra_Box_White_N_500_Right"
  }
  , {
    _id: 20400,
    in_GraphicItem: "GraphicLegra_White_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 20401,
    in_GraphicItem: "GraphicLegra_White_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 20402,
    in_GraphicItem: "GraphicLegra_White_550_C",
    Model3DGroupName: "Legra_Box_White_C_550_Left"
  }
  , {
    _id: 20403,
    in_GraphicItem: "GraphicLegra_White_550_C",
    Model3DGroupName: "Legra_Box_White_C_550_Right"
  }
  , {
    _id: 20404,
    in_GraphicItem: "GraphicLegra_White_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20405,
    in_GraphicItem: "GraphicLegra_White_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20406,
    in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_550_Left"
  }
  , {
    _id: 20407,
    in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_550_Right"
  }
  , {
    _id: 20408,
    in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20409,
    in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20410,
    in_GraphicItem: "GraphicLegra_White_550_F",
    Model3DGroupName: "Legra_Box_White_F_550_Left"
  }
  , {
    _id: 20411,
    in_GraphicItem: "GraphicLegra_White_550_F",
    Model3DGroupName: "Legra_Box_White_F_550_Right"
  }
  , {
    _id: 20412,
    in_GraphicItem: "GraphicLegra_White_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20413,
    in_GraphicItem: "GraphicLegra_White_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20414,
    in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_550_Left"
  }
  , {
    _id: 20415,
    in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_550_Right"
  }
  , {
    _id: 20416,
    in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20417,
    in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20418,
    in_GraphicItem: "GraphicLegra_White_550_K",
    Model3DGroupName: "Legra_Box_White_K_550_Left"
  }
  , {
    _id: 20419,
    in_GraphicItem: "GraphicLegra_White_550_K",
    Model3DGroupName: "Legra_Box_White_K_550_Right"
  }
  , {
    _id: 20420,
    in_GraphicItem: "GraphicLegra_White_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20421,
    in_GraphicItem: "GraphicLegra_White_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20422,
    in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_550_Left"
  }
  , {
    _id: 20423,
    in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_550_Right"
  }
  , {
    _id: 20424,
    in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20425,
    in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20426,
    in_GraphicItem: "GraphicLegra_White_550_M",
    Model3DGroupName: "Legra_Box_White_M_550_Left"
  }
  , {
    _id: 20427,
    in_GraphicItem: "GraphicLegra_White_550_M",
    Model3DGroupName: "Legra_Box_White_M_550_Right"
  }
  , {
    _id: 20428,
    in_GraphicItem: "GraphicLegra_White_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20429,
    in_GraphicItem: "GraphicLegra_White_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20430,
    in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_550_Left"
  }
  , {
    _id: 20431,
    in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_550_Right"
  }
  , {
    _id: 20432,
    in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20433,
    in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20434,
    in_GraphicItem: "GraphicLegra_White_550_N",
    Model3DGroupName: "Legra_Box_White_N_550_Left"
  }
  , {
    _id: 20435,
    in_GraphicItem: "GraphicLegra_White_550_N",
    Model3DGroupName: "Legra_Box_White_N_550_Right"
  }
  , {
    _id: 20436,
    in_GraphicItem: "GraphicLegra_White_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20437,
    in_GraphicItem: "GraphicLegra_White_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20438,
    in_GraphicItem: "GraphicLegra_White_600_C",
    Model3DGroupName: "Legra_Box_White_C_600_Left"
  }
  , {
    _id: 20439,
    in_GraphicItem: "GraphicLegra_White_600_C",
    Model3DGroupName: "Legra_Box_White_C_600_Right"
  }
  , {
    _id: 20440,
    in_GraphicItem: "GraphicLegra_White_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20441,
    in_GraphicItem: "GraphicLegra_White_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20442,
    in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_600_Left"
  }
  , {
    _id: 20443,
    in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_600_Right"
  }
  , {
    _id: 20444,
    in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20445,
    in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20446,
    in_GraphicItem: "GraphicLegra_White_600_F",
    Model3DGroupName: "Legra_Box_White_F_600_Left"
  }
  , {
    _id: 20447,
    in_GraphicItem: "GraphicLegra_White_600_F",
    Model3DGroupName: "Legra_Box_White_F_600_Right"
  }
  , {
    _id: 20448,
    in_GraphicItem: "GraphicLegra_White_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20449,
    in_GraphicItem: "GraphicLegra_White_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20450,
    in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_600_Left"
  }
  , {
    _id: 20451,
    in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_600_Right"
  }
  , {
    _id: 20452,
    in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20453,
    in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20454,
    in_GraphicItem: "GraphicLegra_White_600_K",
    Model3DGroupName: "Legra_Box_White_K_600_Left"
  }
  , {
    _id: 20455,
    in_GraphicItem: "GraphicLegra_White_600_K",
    Model3DGroupName: "Legra_Box_White_K_600_Right"
  }
  , {
    _id: 20456,
    in_GraphicItem: "GraphicLegra_White_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20457,
    in_GraphicItem: "GraphicLegra_White_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20458,
    in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_600_Left"
  }
  , {
    _id: 20459,
    in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_600_Right"
  }
  , {
    _id: 20460,
    in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20461,
    in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20462,
    in_GraphicItem: "GraphicLegra_White_600_M",
    Model3DGroupName: "Legra_Box_White_M_600_Left"
  }
  , {
    _id: 20463,
    in_GraphicItem: "GraphicLegra_White_600_M",
    Model3DGroupName: "Legra_Box_White_M_600_Right"
  }
  , {
    _id: 20464,
    in_GraphicItem: "GraphicLegra_White_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 20465,
    in_GraphicItem: "GraphicLegra_White_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 20466,
    in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_600_Left"
  }
  , {
    _id: 20467,
    in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_600_Right"
  }
  , {
    _id: 20468,
    in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 20469,
    in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 20470,
    in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_650_Left"
  }
  , {
    _id: 20471,
    in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_650_Right"
  }
  , {
    _id: 20472,
    in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 20473,
    in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 20474,
    in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_650_Left"
  }
  , {
    _id: 20475,
    in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_650_Right"
  }
  , {
    _id: 20476,
    in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 20477,
    in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 20478,
    in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_650_Left"
  }
  , {
    _id: 20479,
    in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_650_Right"
  }
  , {
    _id: 20480,
    in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 20481,
    in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 20482,
    in_GraphicItem: "Graphic_DH100_Black_160",
    Model3DGroupName: "Model3d_DH100_Black_160"
  }
  , {
    _id: 20483,
    in_GraphicItem: "Graphic_DH100_Black_320",
    Model3DGroupName: "Model3d_DH100_Black_320"
  }
  , {
    _id: 20484,
    in_GraphicItem: "Graphic_DH100_Black_64",
    Model3DGroupName: "Model3d_DH100_Black_64"
  }
  , {
    _id: 20485,
    in_GraphicItem: "Graphic_DH100_NickelPlated_160",
    Model3DGroupName: "Model3d_DH100_NickelPlated_160"
  }
  , {
    _id: 20486,
    in_GraphicItem: "Graphic_DH100_NickelPlated_320",
    Model3DGroupName: "Model3d_DH100_NickelPlated_320"
  }
  , {
    _id: 20487,
    in_GraphicItem: "Graphic_DH100_NickelPlated_64",
    Model3DGroupName: "Model3d_DH100_NickelPlated_64"
  }
  , {
    _id: 20488,
    in_GraphicItem: "Graphic_DH100_Tin_160",
    Model3DGroupName: "Model3d_DH100_Tin_160"
  }
  , {
    _id: 20489,
    in_GraphicItem: "Graphic_DH100_Tin_320",
    Model3DGroupName: "Model3d_DH100_Tin_320"
  }
  , {
    _id: 20490,
    in_GraphicItem: "Graphic_DH100_Tin_64",
    Model3DGroupName: "Model3d_DH100_Tin_64"
  }
  , {
    _id: 20491,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1060",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1060"
  }
  , {
    _id: 20492,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1160",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1160"
  }
  , {
    _id: 20493,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1260",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1260"
  }
  , {
    _id: 20494,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_128",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_128"
  }
  , {
    _id: 20495,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1360",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1360"
  }
  , {
    _id: 20496,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1460",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1460"
  }
  , {
    _id: 20497,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1560",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1560"
  }
  , {
    _id: 20498,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_160",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_160"
  }
  , {
    _id: 20499,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1760",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1760"
  }
  , {
    _id: 20500,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1960",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1960"
  }
  , {
    _id: 20501,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_210",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_210"
  }
  , {
    _id: 20502,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_260",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_260"
  }
  , {
    _id: 20503,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_310",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_310"
  }
  , {
    _id: 20504,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_360",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_360"
  }
  , {
    _id: 20505,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_410",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_410"
  }
  , {
    _id: 20506,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_460",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_460"
  }
  , {
    _id: 20507,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_560",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_560"
  }
  , {
    _id: 20508,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_660",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_660"
  }
  , {
    _id: 20509,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_760",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_760"
  }
  , {
    _id: 20510,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_860",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_860"
  }
  , {
    _id: 20511,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_96",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_96"
  }
  , {
    _id: 20512,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_960",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_960"
  }
  , {
    _id: 20513,
    in_GraphicItem: "Graphic_DH120_Black",
    Model3DGroupName: "Model3d_DH120_Black"
  }
  , {
    _id: 20514,
    in_GraphicItem: "Graphic_DH120_StainlessSteel",
    Model3DGroupName: "Model3d_DH120_StainlessSteel"
  }
  , {
    _id: 20515,
    in_GraphicItem: "Graphic_DH130_Black",
    Model3DGroupName: "Model3d_DH130_Black"
  }
  , {
    _id: 20516,
    in_GraphicItem: "Graphic_DH130_BrassPlatedAntique",
    Model3DGroupName: "Model3d_DH130_BrassPlatedAntique"
  }
  , {
    _id: 20517,
    in_GraphicItem: "Graphic_DH130_StainlessSteel",
    Model3DGroupName: "Model3d_DH130_StainlessSteel"
  }
  , {
    _id: 20518,
    in_GraphicItem: "Graphic_BH_128",
    Model3DGroupName: "Model3d_BH_128"
  }
  , {
    _id: 20519,
    in_GraphicItem: "Graphic_BH_160",
    Model3DGroupName: "Model3d_BH_160"
  }
  , {
    _id: 20520,
    in_GraphicItem: "Graphic_BH_192",
    Model3DGroupName: "Model3d_BH_192"
  }
  , {
    _id: 20521,
    in_GraphicItem: "Graphic_BH_224",
    Model3DGroupName: "Model3d_BH_224"
  }
  , {
    _id: 20522,
    in_GraphicItem: "Graphic_BH_288",
    Model3DGroupName: "Model3d_BH_288"
  }
  , {
    _id: 20523,
    in_GraphicItem: "Graphic_BH_320",
    Model3DGroupName: "Model3d_BH_320"
  }
  , {
    _id: 20524,
    in_GraphicItem: "Graphic_BH_352",
    Model3DGroupName: "Model3d_BH_352"
  }
  , {
    _id: 20525,
    in_GraphicItem: "Graphic_BH_448",
    Model3DGroupName: "Model3d_BH_448"
  }
  , {
    _id: 20526,
    in_GraphicItem: "Graphic_BH_480",
    Model3DGroupName: "Model3d_BH_480"
  }
  , {
    _id: 20527,
    in_GraphicItem: "Graphic_BH_560",
    Model3DGroupName: "Model3d_BH_560"
  }
  , {
    _id: 20528,
    in_GraphicItem: "Graphic_BH_640",
    Model3DGroupName: "Model3d_BH_640"
  }
  , {
    _id: 20529,
    in_GraphicItem: "Graphic_BH_96",
    Model3DGroupName: "Model3d_BH_96"
  }
  , {
    _id: 20530,
    in_GraphicItem: "Graphic_BH_960",
    Model3DGroupName: "Model3d_BH_960"
  }
  , {
    _id: 20531,
    in_GraphicItem: "Graphic_DH60_Black_128",
    Model3DGroupName: "Model3d_DH60_Black_128"
  }
  , {
    _id: 20532,
    in_GraphicItem: "Graphic_DH60_Black_160",
    Model3DGroupName: "Model3d_DH60_Black_160"
  }
  , {
    _id: 20533,
    in_GraphicItem: "Graphic_DH60_BrassPlatedAntique_128",
    Model3DGroupName: "Model3d_DH60_BrassPlatedAntique_128"
  }
  , {
    _id: 20534,
    in_GraphicItem: "Graphic_DH60_BrassPlatedAntique_160",
    Model3DGroupName: "Model3d_DH60_BrassPlatedAntique_160"
  }
  , {
    _id: 20535,
    in_GraphicItem: "Graphic_DH60_ChromedPolished_128",
    Model3DGroupName: "Model3d_DH60_ChromedPolished_128"
  }
  , {
    _id: 20536,
    in_GraphicItem: "Graphic_DH60_ChromedPolished_160",
    Model3DGroupName: "Model3d_DH60_ChromedPolished_160"
  }
  , {
    _id: 20537,
    in_GraphicItem: "Graphic_DH60_NickelPlated_128",
    Model3DGroupName: "Model3d_DH60_NickelPlated_128"
  }
  , {
    _id: 20538,
    in_GraphicItem: "Graphic_DH60_NickelPlated_160",
    Model3DGroupName: "Model3d_DH60_NickelPlated_160"
  }
  , {
    _id: 20539,
    in_GraphicItem: "Graphic_RH_128",
    Model3DGroupName: "Model3d_RH_128"
  }
  , {
    _id: 20540,
    in_GraphicItem: "Graphic_RH_160",
    Model3DGroupName: "Model3d_RH_160"
  }
  , {
    _id: 20541,
    in_GraphicItem: "Graphic_RH_192",
    Model3DGroupName: "Model3d_RH_192"
  }
  , {
    _id: 20542,
    in_GraphicItem: "Graphic_RH_224",
    Model3DGroupName: "Model3d_RH_224"
  }
  , {
    _id: 20543,
    in_GraphicItem: "Graphic_RH_288",
    Model3DGroupName: "Model3d_RH_288"
  }
  , {
    _id: 20544,
    in_GraphicItem: "Graphic_RH_320",
    Model3DGroupName: "Model3d_RH_320"
  }
  , {
    _id: 20545,
    in_GraphicItem: "Graphic_RH_352",
    Model3DGroupName: "Model3d_RH_352"
  }
  , {
    _id: 20546,
    in_GraphicItem: "Graphic_RH_448",
    Model3DGroupName: "Model3d_RH_448"
  }
  , {
    _id: 20547,
    in_GraphicItem: "Graphic_RH_560",
    Model3DGroupName: "Model3d_RH_560"
  }
  , {
    _id: 20548,
    in_GraphicItem: "Graphic_RH_660",
    Model3DGroupName: "Model3d_RH_660"
  }
  , {
    _id: 20549,
    in_GraphicItem: "Graphic_RH_760",
    Model3DGroupName: "Model3d_RH_760"
  }
  , {
    _id: 20550,
    in_GraphicItem: "Graphic_RH_96",
    Model3DGroupName: "Model3d_RH_96"
  }
  , {
    _id: 20551,
    in_GraphicItem: "DispensaClassic16030",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20552,
    in_GraphicItem: "DispensaClassic16030",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20553,
    in_GraphicItem: "DispensaClassic16030",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 20554,
    in_GraphicItem: "DispensaClassic16030",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 20555,
    in_GraphicItem: "DispensaClassic16030",
    Model3DGroupName: "Dispensa160_Grey"
  }
  , {
    _id: 20556,
    in_GraphicItem: "DispensaClassic19030",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20557,
    in_GraphicItem: "DispensaClassic19030",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20558,
    in_GraphicItem: "DispensaClassic19030",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 20559,
    in_GraphicItem: "DispensaClassic19030",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 20560,
    in_GraphicItem: "DispensaClassic19030",
    Model3DGroupName: "Dispensa190_Grey"
  }
  , {
    _id: 20561,
    in_GraphicItem: "DispensaClassic23030",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20562,
    in_GraphicItem: "DispensaClassic23030",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20563,
    in_GraphicItem: "DispensaClassic23030",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 20564,
    in_GraphicItem: "DispensaClassic23030",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 20565,
    in_GraphicItem: "DispensaClassic23030",
    Model3DGroupName: "Dispensa230_Grey"
  }
  , {
    _id: 20566,
    in_GraphicItem: "DispensaClassic16040",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20567,
    in_GraphicItem: "DispensaClassic16040",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20568,
    in_GraphicItem: "DispensaClassic16040",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 20569,
    in_GraphicItem: "DispensaClassic16040",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 20570,
    in_GraphicItem: "DispensaClassic16040",
    Model3DGroupName: "Dispensa160_Grey"
  }
  , {
    _id: 20571,
    in_GraphicItem: "DispensaClassic19040",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20572,
    in_GraphicItem: "DispensaClassic19040",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20573,
    in_GraphicItem: "DispensaClassic19040",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 20574,
    in_GraphicItem: "DispensaClassic19040",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 20575,
    in_GraphicItem: "DispensaClassic19040",
    Model3DGroupName: "Dispensa190_Grey"
  }
  , {
    _id: 20576,
    in_GraphicItem: "DispensaClassic23040",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20577,
    in_GraphicItem: "DispensaClassic23040",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20578,
    in_GraphicItem: "DispensaClassic23040",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 20579,
    in_GraphicItem: "DispensaClassic23040",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 20580,
    in_GraphicItem: "DispensaClassic23040",
    Model3DGroupName: "Dispensa230_Grey"
  }
  , {
    _id: 20581,
    in_GraphicItem: "DispensaStyle16030_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20582,
    in_GraphicItem: "DispensaStyle16030_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20583,
    in_GraphicItem: "DispensaStyle16030_Grey",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 20584,
    in_GraphicItem: "DispensaStyle16030_Grey",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 20585,
    in_GraphicItem: "DispensaStyle16030_Grey",
    Model3DGroupName: "Dispensa160_Grey"
  }
  , {
    _id: 20586,
    in_GraphicItem: "DispensaStyle19030_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20587,
    in_GraphicItem: "DispensaStyle19030_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20588,
    in_GraphicItem: "DispensaStyle19030_Grey",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 20589,
    in_GraphicItem: "DispensaStyle19030_Grey",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 20590,
    in_GraphicItem: "DispensaStyle19030_Grey",
    Model3DGroupName: "Dispensa190_Grey"
  }
  , {
    _id: 20591,
    in_GraphicItem: "DispensaStyle23030_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20592,
    in_GraphicItem: "DispensaStyle23030_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20593,
    in_GraphicItem: "DispensaStyle23030_Grey",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 20594,
    in_GraphicItem: "DispensaStyle23030_Grey",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 20595,
    in_GraphicItem: "DispensaStyle23030_Grey",
    Model3DGroupName: "Dispensa230_Grey"
  }
  , {
    _id: 20596,
    in_GraphicItem: "DispensaStyle16040_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20597,
    in_GraphicItem: "DispensaStyle16040_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20598,
    in_GraphicItem: "DispensaStyle16040_Grey",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 20599,
    in_GraphicItem: "DispensaStyle16040_Grey",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 20600,
    in_GraphicItem: "DispensaStyle16040_Grey",
    Model3DGroupName: "Dispensa160_Grey"
  }
  , {
    _id: 20601,
    in_GraphicItem: "DispensaStyle19040_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20602,
    in_GraphicItem: "DispensaStyle19040_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20603,
    in_GraphicItem: "DispensaStyle19040_Grey",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 20604,
    in_GraphicItem: "DispensaStyle19040_Grey",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 20605,
    in_GraphicItem: "DispensaStyle19040_Grey",
    Model3DGroupName: "Dispensa190_Grey"
  }
  , {
    _id: 20606,
    in_GraphicItem: "DispensaStyle23040_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 20607,
    in_GraphicItem: "DispensaStyle23040_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 20608,
    in_GraphicItem: "DispensaStyle23040_Grey",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 20609,
    in_GraphicItem: "DispensaStyle23040_Grey",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 20610,
    in_GraphicItem: "DispensaStyle23040_Grey",
    Model3DGroupName: "Dispensa230_Grey"
  }
  , {
    _id: 20611,
    in_GraphicItem: "DispensaStyle16030_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 20612,
    in_GraphicItem: "DispensaStyle16030_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 20613,
    in_GraphicItem: "DispensaStyle16030_Anthrazit",
    Model3DGroupName: "Dispensa30ConTop_Anthrazit"
  }
  , {
    _id: 20614,
    in_GraphicItem: "DispensaStyle16030_Anthrazit",
    Model3DGroupName: "Dispensa30ConBtm_Anthrazit"
  }
  , {
    _id: 20615,
    in_GraphicItem: "DispensaStyle16030_Anthrazit",
    Model3DGroupName: "Dispensa160_Anthrazit"
  }
  , {
    _id: 20616,
    in_GraphicItem: "DispensaStyle19030_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 20617,
    in_GraphicItem: "DispensaStyle19030_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 20618,
    in_GraphicItem: "DispensaStyle19030_Anthrazit",
    Model3DGroupName: "Dispensa30ConTop_Anthrazit"
  }
  , {
    _id: 20619,
    in_GraphicItem: "DispensaStyle19030_Anthrazit",
    Model3DGroupName: "Dispensa30ConBtm_Anthrazit"
  }
  , {
    _id: 20620,
    in_GraphicItem: "DispensaStyle19030_Anthrazit",
    Model3DGroupName: "Dispensa190_Anthrazit"
  }
  , {
    _id: 20621,
    in_GraphicItem: "DispensaStyle23030_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 20622,
    in_GraphicItem: "DispensaStyle23030_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 20623,
    in_GraphicItem: "DispensaStyle23030_Anthrazit",
    Model3DGroupName: "Dispensa30ConTop_Anthrazit"
  }
  , {
    _id: 20624,
    in_GraphicItem: "DispensaStyle23030_Anthrazit",
    Model3DGroupName: "Dispensa30ConBtm_Anthrazit"
  }
  , {
    _id: 20625,
    in_GraphicItem: "DispensaStyle23030_Anthrazit",
    Model3DGroupName: "Dispensa230_Anthrazit"
  }
  , {
    _id: 20626,
    in_GraphicItem: "DispensaStyle16040_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 20627,
    in_GraphicItem: "DispensaStyle16040_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 20628,
    in_GraphicItem: "DispensaStyle16040_Anthrazit",
    Model3DGroupName: "Dispensa40ConTop_Anthrazit"
  }
  , {
    _id: 20629,
    in_GraphicItem: "DispensaStyle16040_Anthrazit",
    Model3DGroupName: "Dispensa40ConBtm_Anthrazit"
  }
  , {
    _id: 20630,
    in_GraphicItem: "DispensaStyle16040_Anthrazit",
    Model3DGroupName: "Dispensa160_Anthrazit"
  }
  , {
    _id: 20631,
    in_GraphicItem: "DispensaStyle19040_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 20632,
    in_GraphicItem: "DispensaStyle19040_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 20633,
    in_GraphicItem: "DispensaStyle19040_Anthrazit",
    Model3DGroupName: "Dispensa40ConTop_Anthrazit"
  }
  , {
    _id: 20634,
    in_GraphicItem: "DispensaStyle19040_Anthrazit",
    Model3DGroupName: "Dispensa40ConBtm_Anthrazit"
  }
  , {
    _id: 20635,
    in_GraphicItem: "DispensaStyle19040_Anthrazit",
    Model3DGroupName: "Dispensa190_Anthrazit"
  }
  , {
    _id: 20636,
    in_GraphicItem: "DispensaStyle23040_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 20637,
    in_GraphicItem: "DispensaStyle23040_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 20638,
    in_GraphicItem: "DispensaStyle23040_Anthrazit",
    Model3DGroupName: "Dispensa40ConTop_Anthrazit"
  }
  , {
    _id: 20639,
    in_GraphicItem: "DispensaStyle23040_Anthrazit",
    Model3DGroupName: "Dispensa40ConBtm_Anthrazit"
  }
  , {
    _id: 20640,
    in_GraphicItem: "DispensaStyle23040_Anthrazit",
    Model3DGroupName: "Dispensa230_Anthrazit"
  }
  , {
    _id: 20641,
    in_GraphicItem: "DispensaClassic30",
    Model3DGroupName: "DispensaClassic30"
  }
  , {
    _id: 20642,
    in_GraphicItem: "DispensaClassic40",
    Model3DGroupName: "DispensaClassic40"
  }
  , {
    _id: 20643,
    in_GraphicItem: "DispensaStyle30_Grey",
    Model3DGroupName: "DispensaStyle30_Grey"
  }
  , {
    _id: 20644,
    in_GraphicItem: "DispensaStyle40_Grey",
    Model3DGroupName: "DispensaStyle40_Grey"
  }
  , {
    _id: 20645,
    in_GraphicItem: "DispensaStyle30_Anthrazit",
    Model3DGroupName: "DispensaStyle30_Anthrazit"
  }
  , {
    _id: 20646,
    in_GraphicItem: "DispensaStyle40_Anthrazit",
    Model3DGroupName: "DispensaStyle40_Anthrazit"
  }
  , {
    _id: 20647,
    in_GraphicItem: "Graphic_No15_Classic_Silver_Right",
    Model3DGroupName: "No15_Classic_Silver_Right_Basket"
  }
  , {
    _id: 20648,
    in_GraphicItem: "Graphic_No15_Classic_Silver_Right",
    Model3DGroupName: "No15_Classic_Silver_Right_Slides"
  }
  , {
    _id: 20649,
    in_GraphicItem: "Graphic_No15_Classic_Anthrazit_Right",
    Model3DGroupName: "No15_Classic_Anthrazit_Right_Basket"
  }
  , {
    _id: 20650,
    in_GraphicItem: "Graphic_No15_Classic_Anthrazit_Right",
    Model3DGroupName: "No15_Classic_Anthrazit_Right_Slides"
  }
  , {
    _id: 20651,
    in_GraphicItem: "Graphic_No15_Classic_Silver_Left",
    Model3DGroupName: "No15_Classic_Silver_Left_Basket"
  }
  , {
    _id: 20652,
    in_GraphicItem: "Graphic_No15_Classic_Silver_Left",
    Model3DGroupName: "No15_Classic_Silver_Left_Slides"
  }
  , {
    _id: 20653,
    in_GraphicItem: "Graphic_No15_Classic_Anthrazit_Left",
    Model3DGroupName: "No15_Classic_Anthrazit_Left_Basket"
  }
  , {
    _id: 20654,
    in_GraphicItem: "Graphic_No15_Classic_Anthrazit_Left",
    Model3DGroupName: "No15_Classic_Anthrazit_Left_Slides"
  }
  , {
    _id: 20655,
    in_GraphicItem: "Graphic_No15_Style_Silver_Right",
    Model3DGroupName: "No15_Style_Silver_Right_Basket"
  }
  , {
    _id: 20656,
    in_GraphicItem: "Graphic_No15_Style_Silver_Right",
    Model3DGroupName: "No15_Style_Silver_Right_Slides"
  }
  , {
    _id: 20657,
    in_GraphicItem: "Graphic_No15_Style_Anthrazit_Right",
    Model3DGroupName: "No15_Style_Anthrazit_Right_Basket"
  }
  , {
    _id: 20658,
    in_GraphicItem: "Graphic_No15_Style_Anthrazit_Right",
    Model3DGroupName: "No15_Style_Anthrazit_Right_Slides"
  }
  , {
    _id: 20659,
    in_GraphicItem: "Graphic_No15_Style_Silver_Left",
    Model3DGroupName: "No15_Style_Silver_Left_Basket"
  }
  , {
    _id: 20660,
    in_GraphicItem: "Graphic_No15_Style_Silver_Left",
    Model3DGroupName: "No15_Style_Silver_Left_Slides"
  }
  , {
    _id: 20661,
    in_GraphicItem: "Graphic_No15_Style_Anthrazit_Left",
    Model3DGroupName: "No15_Style_Anthrazit_Left_Basket"
  }
  , {
    _id: 20662,
    in_GraphicItem: "Graphic_No15_Style_Anthrazit_Left",
    Model3DGroupName: "No15_Style_Anthrazit_Left_Slides"
  }
  , {
    _id: 20663,
    in_GraphicItem: "GraphicConero445",
    Model3DGroupName: "Model3DConero625"
  }
  , {
    _id: 20664,
    in_GraphicItem: "GraphicConero625",
    Model3DGroupName: "Model3DConero625"
  }
  , {
    _id: 20665,
    in_GraphicItem: "GraphicConero805",
    Model3DGroupName: "Model3DConero625"
  }
  , {
    _id: 20666,
    in_GraphicItem: "GraphicConero985",
    Model3DGroupName: "Model3DConero625"
  }
];
