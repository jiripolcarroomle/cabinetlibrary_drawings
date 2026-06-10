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
    _id: 25144,
    in_GraphicItem: "DesignLegSlanted001H250",
    Model3DGroupName: "Model3DDesignLegSlanted001H250"
  }
  , {
    _id: 25145,
    in_GraphicItem: "GraphicShelfadjFittingWoodDesign01",
    Model3DGroupName: "Model3DShelfadjWoodDesign01"
  }
  , {
    _id: 25146,
    in_GraphicItem: "GraphicShelfadjFittingWoodDesign02",
    Model3DGroupName: "Model3DShelfadjWoodDesign02"
  }
  , {
    _id: 25147,
    in_GraphicItem: "GraphicShelfadjFittingWoodDesign03",
    Model3DGroupName: "Model3DShelfadjWoodDesign03"
  }
  , {
    _id: 25148,
    in_GraphicItem: "GraphicShelfadjFittingGlassDesign01",
    Model3DGroupName: "Model3DShelfadjGlassDesign01"
  }
  , {
    _id: 25149,
    in_GraphicItem: "GraphicItemMinifix01White",
    Model3DGroupName: "MinifixConnectionBolt01"
  }
  , {
    _id: 25150,
    in_GraphicItem: "GraphicItemMinifix01White",
    Model3DGroupName: "MinifixConnectionHousing01"
  }
  , {
    _id: 25151,
    in_GraphicItem: "GraphicItemMinifix01White",
    Model3DGroupName: "MinifixConnectionCover"
  }
  , {
    _id: 25152,
    in_GraphicItem: "GraphicItemMinifix01Black",
    Model3DGroupName: "MinifixConnectionBolt01"
  }
  , {
    _id: 25153,
    in_GraphicItem: "GraphicItemMinifix01Black",
    Model3DGroupName: "MinifixConnectionHousing01"
  }
  , {
    _id: 25154,
    in_GraphicItem: "GraphicItemMinifix01Black",
    Model3DGroupName: "MinifixConnectionCover"
  }
  , {
    _id: 25155,
    in_GraphicItem: "GraphicItemMinifix01Light",
    Model3DGroupName: "MinifixConnectionBolt01"
  }
  , {
    _id: 25156,
    in_GraphicItem: "GraphicItemMinifix01Light",
    Model3DGroupName: "MinifixConnectionHousing01"
  }
  , {
    _id: 25157,
    in_GraphicItem: "GraphicItemMinifix01Light",
    Model3DGroupName: "MinifixConnectionCover"
  }
  , {
    _id: 25158,
    in_GraphicItem: "GraphicItemMinifix01Dark",
    Model3DGroupName: "MinifixConnectionBolt01"
  }
  , {
    _id: 25159,
    in_GraphicItem: "GraphicItemMinifix01Dark",
    Model3DGroupName: "MinifixConnectionHousing01"
  }
  , {
    _id: 25160,
    in_GraphicItem: "GraphicItemMinifix01Dark",
    Model3DGroupName: "MinifixConnectionCover"
  }
  , {
    _id: 25161,
    in_GraphicItem: "GraphicItemDowel01",
    Model3DGroupName: "Dowel"
  }
  , {
    _id: 25162,
    in_GraphicItem: "GraphicItemDowel02",
    Model3DGroupName: "Dowel"
  }
  , {
    _id: 25163,
    in_GraphicItem: "GraphicHinge110HalfSpringSS",
    Model3DGroupName: "Model3DHinge110HalfSpringSS"
  }
  , {
    _id: 25164,
    in_GraphicItem: "GraphicHinge110InsetSpringSS",
    Model3DGroupName: "Model3DHinge110InsetSpringSS"
  }
  , {
    _id: 25165,
    in_GraphicItem: "GraphicHinge110OverlaySpringSS",
    Model3DGroupName: "Model3DHinge110OverlaySpringSS"
  }
  , {
    _id: 25166,
    in_GraphicItem: "GraphicHinge110SoftClHalfSpringSS",
    Model3DGroupName: "Model3DHinge110SoftClHalfSpringSS"
  }
  , {
    _id: 25167,
    in_GraphicItem: "GraphicHinge110SoftClInsetSpringSS",
    Model3DGroupName: "Model3DHinge110SoftClInsetSpringSS"
  }
  , {
    _id: 25168,
    in_GraphicItem: "GraphicHinge110SoftClOverlaySpringSS",
    Model3DGroupName: "Model3DHinge110SoftClOverlaySpringSS"
  }
  , {
    _id: 25169,
    in_GraphicItem: "GraphicHinge155SoftClHalfSpringSS",
    Model3DGroupName: "Model3DHinge155SoftClHalfSpringSS"
  }
  , {
    _id: 25170,
    in_GraphicItem: "GraphicHinge155SoftClOverlaySpringSS",
    Model3DGroupName: "Model3DHinge155SoftClOverlaySpringSS"
  }
  , {
    _id: 25171,
    in_GraphicItem: "GraphicHinge165HalfSpringSS",
    Model3DGroupName: "Model3DHinge165HalfSpringSS"
  }
  , {
    _id: 25172,
    in_GraphicItem: "GraphicHinge165InsetSpringSS",
    Model3DGroupName: "Model3DHinge165InsetSpringSS"
  }
  , {
    _id: 25173,
    in_GraphicItem: "GraphicHinge165OverlaySpringSS",
    Model3DGroupName: "Model3DHinge165OverlaySpringSS"
  }
  , {
    _id: 25174,
    in_GraphicItem: "GraphicMpCruciformA0SS",
    Model3DGroupName: "Model3DMpCruciformA0SS"
  }
  , {
    _id: 25175,
    in_GraphicItem: "GraphicMpCruciformA3SS",
    Model3DGroupName: "Model3DMpCruciformA3SS"
  }
  , {
    _id: 25176,
    in_GraphicItem: "GraphicMpCruciformA6SS",
    Model3DGroupName: "Model3DMpCruciformA6SS"
  }
  , {
    _id: 25177,
    in_GraphicItem: "GraphicMpCruciformSM0SS",
    Model3DGroupName: "Model3DMpCruciformSM0SS"
  }
  , {
    _id: 25178,
    in_GraphicItem: "GraphicMpCruciformSM3SS",
    Model3DGroupName: "Model3DMpCruciformSM3SS"
  }
  , {
    _id: 25179,
    in_GraphicItem: "GraphicMpCruciformSM6SS",
    Model3DGroupName: "Model3DMpCruciformSM6SS"
  }
  , {
    _id: 25180,
    in_GraphicItem: "GraphicMpHorizontalSM0SS",
    Model3DGroupName: "Model3DMpHorizontalSM0SS"
  }
  , {
    _id: 25181,
    in_GraphicItem: "GraphicMpHorizontalSM3SS",
    Model3DGroupName: "Model3DMpHorizontalSM3SS"
  }
  , {
    _id: 25182,
    in_GraphicItem: "GraphicMpHorizontalSM6SS",
    Model3DGroupName: "Model3DMpHorizontalSM6SS"
  }
  , {
    _id: 25183,
    in_GraphicItem: "GraphicHingeBlindCornerInset110SoftClNP",
    Model3DGroupName: "Model3DHingeBlindCornerInset110SoftClNP"
  }
  , {
    _id: 25184,
    in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
    Model3DGroupName: "Model3DCoverCap290.40.701"
  }
  , {
    _id: 25185,
    in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
    Model3DGroupName: "Model3DCoverCap290.40.702"
  }
  , {
    _id: 25186,
    in_GraphicItem: "GraphicWallUnitVisibleHanger52kgNickelPlated",
    Model3DGroupName: "Model3DHanger290.02.702"
  }
  , {
    _id: 25187,
    in_GraphicItem: "GraphicWallUnitVisibleHanger52kgNickelPlated",
    Model3DGroupName: "Model3DHanger290.02.703"
  }
  , {
    _id: 25188,
    in_GraphicItem: "GraphicWallUnitHiddenHanger92kgWhite",
    Model3DGroupName: "Model3DHanger290.03.937"
  }
  , {
    _id: 25189,
    in_GraphicItem: "GraphicWallUnitHiddenHanger92kgWhite",
    Model3DGroupName: "Model3DHanger290.03.938"
  }
  , {
    _id: 25190,
    in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
    Model3DGroupName: "Model3DHanger290.40.901"
  }
  , {
    _id: 25191,
    in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
    Model3DGroupName: "Model3DHanger290.40.902"
  }
  , {
    _id: 25192,
    in_GraphicItem: "GraphicWallUnitVisibleHanger75kgWhite",
    Model3DGroupName: "Model3DHanger290.40.980"
  }
  , {
    _id: 25193,
    in_GraphicItem: "GraphicWallUnitVisibleHanger75kgWhite",
    Model3DGroupName: "Model3DHanger290.40.981"
  }
  , {
    _id: 25194,
    in_GraphicItem: "GraphicWallUnitVisibleHanger52kgNickelPlated",
    Model3DGroupName: "Model3DWallPlate290.09.910"
  }
  , {
    _id: 25195,
    in_GraphicItem: "GraphicWallUnitVisibleHanger75kgWhite",
    Model3DGroupName: "Model3DWallPlate290.40.989"
  }
  , {
    _id: 25196,
    in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
    Model3DGroupName: "Model3DWallPlate290.40.991"
  }
  , {
    _id: 25197,
    in_GraphicItem: "GraphicWallUnitHiddenHanger92kgWhite",
    Model3DGroupName: "Model3DWallPlate290.09.910"
  }
  , {
    _id: 25198,
    in_GraphicItem: "Graphic_Legra_FrontBotCon",
    Model3DGroupName: "Model3D_Legra_FrontBotCon"
  }
  , {
    _id: 25199,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgWhite",
    Model3DGroupName: "Model3DHanger290.02.710"
  }
  , {
    _id: 25200,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgWhite",
    Model3DGroupName: "Model3DHanger290.02.711"
  }
  , {
    _id: 25201,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgGrey",
    Model3DGroupName: "Model3DHanger290.02.710"
  }
  , {
    _id: 25202,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgGrey",
    Model3DGroupName: "Model3DHanger290.02.711"
  }
  , {
    _id: 25203,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgWhite",
    Model3DGroupName: "Model3DWallPlate290.09.910"
  }
  , {
    _id: 25204,
    in_GraphicItem: "GraphicWallUnitVisibleHanger45kgGrey",
    Model3DGroupName: "Model3DWallPlate290.09.910"
  }
  , {
    _id: 25205,
    in_GraphicItem: "GraphicItemDowel03",
    Model3DGroupName: "Dowel"
  }
  , {
    _id: 25206,
    in_GraphicItem: "GraphicGlueDuststrip",
    Model3DGroupName: "Model3DGlueDuststrip"
  }
  , {
    _id: 25207,
    in_GraphicItem: "GraphicPushToOpenShort",
    Model3DGroupName: "Model3DPushToOpenShort"
  }
  , {
    _id: 25208,
    in_GraphicItem: "GraphicPushToOpenLong",
    Model3DGroupName: "Model3DPushToOpenLong"
  }
  , {
    _id: 25209,
    in_GraphicItem: "GraphicAdapterHousingShort",
    Model3DGroupName: "Model3DAdapterHousingShort"
  }
  , {
    _id: 25210,
    in_GraphicItem: "GraphicAdapterHousingLong",
    Model3DGroupName: "Model3DAdapterHousingLong"
  }
  , {
    _id: 25211,
    in_GraphicItem: "NoGraphic",
    Model3DGroupName: "NoGraphic"
  }
  , {
    _id: 25212,
    in_GraphicItem: "GraphicRafix01Nickel",
    Model3DGroupName: "Rafix20Housing19mmNickelPlated"
  }
  , {
    _id: 25213,
    in_GraphicItem: "GraphicRafix01Nickel",
    Model3DGroupName: "RafixConnectionBolt11x5mm"
  }
  , {
    _id: 25214,
    in_GraphicItem: "GraphicHingeFlipLiftDF",
    Model3DGroupName: "Model3DHingeFlipLiftDF"
  }
  , {
    _id: 25215,
    in_GraphicItem: "Aventos_HF_PSL",
    Model3DGroupName: "Model3D_Aventos_HF_PSL"
  }
  , {
    _id: 25216,
    in_GraphicItem: "Aventos_HF_PSR",
    Model3DGroupName: "Model3D_Aventos_HF_PSR"
  }
  , {
    _id: 25217,
    in_GraphicItem: "Aventos_HF_Connector",
    Model3DGroupName: "Model3D_Aventos_HF_Connector"
  }
  , {
    _id: 25218,
    in_GraphicItem: "Aventos_HF_Mech480",
    Model3DGroupName: "Model3D_Aventos_HF_Mech_480"
  }
  , {
    _id: 25219,
    in_GraphicItem: "Aventos_HF_Mech600",
    Model3DGroupName: "Model3D_Aventos_HF_Mech_600"
  }
  , {
    _id: 25220,
    in_GraphicItem: "Aventos_HF_Mech840",
    Model3DGroupName: "Model3D_Aventos_HF_Mech_840"
  }
  , {
    _id: 25221,
    in_GraphicItem: "Aventos_HK_PSL",
    Model3DGroupName: "Model3D_Aventos_HK_PSL"
  }
  , {
    _id: 25222,
    in_GraphicItem: "Aventos_HK_PSR",
    Model3DGroupName: "Model3D_Aventos_HK_PSR"
  }
  , {
    _id: 25223,
    in_GraphicItem: "Aventos_HK_Connector",
    Model3DGroupName: "Model3D_Aventos_HK_Connector"
  }
  , {
    _id: 25224,
    in_GraphicItem: "GraphicHinge120OverlayNoSpringSSForFHF",
    Model3DGroupName: "Model3DHinge120OverlayNoSpringSSForFHF"
  }
  , {
    _id: 25225,
    in_GraphicItem: "Aventos_HS_PSL",
    Model3DGroupName: "Model3D_Aventos_HS_PSL"
  }
  , {
    _id: 25226,
    in_GraphicItem: "Aventos_HS_PSR",
    Model3DGroupName: "Model3D_Aventos_HS_PSR"
  }
  , {
    _id: 25227,
    in_GraphicItem: "Aventos_HL_PSL",
    Model3DGroupName: "Model3D_Aventos_HL_PSL"
  }
  , {
    _id: 25228,
    in_GraphicItem: "Aventos_HL_PSR",
    Model3DGroupName: "Model3D_Aventos_HL_PSR"
  }
  , {
    _id: 25229,
    in_GraphicItem: "Aventos_HL_Mech1",
    Model3DGroupName: "Model3D_Aventos_HL_Mech1"
  }
  , {
    _id: 25230,
    in_GraphicItem: "Aventos_HL_Mech2",
    Model3DGroupName: "Model3D_Aventos_HL_Mech2"
  }
  , {
    _id: 25231,
    in_GraphicItem: "Aventos_HL_Mech3",
    Model3DGroupName: "Model3D_Aventos_HL_Mech3"
  }
  , {
    _id: 25232,
    in_GraphicItem: "Aventos_HL_Mech4",
    Model3DGroupName: "Model3D_Aventos_HL_Mech4"
  }
  , {
    _id: 25233,
    in_GraphicItem: "Aventos_HKXS_Mech_R",
    Model3DGroupName: "Model3D_Aventos_HKXS_Mech_R"
  }
  , {
    _id: 25234,
    in_GraphicItem: "Aventos_HKXS_Mech_L",
    Model3DGroupName: "Model3D_Aventos_HKXS_Mech_L"
  }
  , {
    _id: 25235,
    in_GraphicItem: "Aventos_HKXS_Front",
    Model3DGroupName: "Model3D_Aventos_HKXS_Front"
  }
  , {
    _id: 25236,
    in_GraphicItem: "Aventos_HKXS_Carcase_R",
    Model3DGroupName: "Model3D_Aventos_HKXS_Carcase_R"
  }
  , {
    _id: 25237,
    in_GraphicItem: "Aventos_HKXS_Carcase_L",
    Model3DGroupName: "Model3D_Aventos_HKXS_Carcase_L"
  }
  , {
    _id: 25238,
    in_GraphicItem: "DropDown_L",
    Model3DGroupName: "DropDown_L"
  }
  , {
    _id: 25239,
    in_GraphicItem: "DropDown_R",
    Model3DGroupName: "DropDown_R"
  }
  , {
    _id: 25240,
    in_GraphicItem: "DropDown_Front",
    Model3DGroupName: "DropDown_Front"
  }
  , {
    _id: 25241,
    in_GraphicItem: "GraphicHingeCenterForFHF",
    Model3DGroupName: "Model3DHingeCenterForFHF"
  }
  , {
    _id: 25242,
    in_GraphicItem: "GraphicMPHorizontalBL0SS",
    Model3DGroupName: "Model3DMPHorizontalBL0SS"
  }
  , {
    _id: 25243,
    in_GraphicItem: "GraphicMPHorizontalBL3SS",
    Model3DGroupName: "Model3DMPHorizontalBL3SS"
  }
  , {
    _id: 25244,
    in_GraphicItem: "SquareBracket",
    Model3DGroupName: "SquareBracket"
  }
  , {
    _id: 25245,
    in_GraphicItem: "GraphicBracket01",
    Model3DGroupName: "Model3DBracket01"
  }
  , {
    _id: 25246,
    in_GraphicItem: "GraphicPlinthLegTriangularPressH100",
    Model3DGroupName: "Model3DPlinthLegTriangularPressH100"
  }
  , {
    _id: 25247,
    in_GraphicItem: "GraphicPlinthLegTriangularPressH120",
    Model3DGroupName: "Model3DPlinthLegTriangularPressH120"
  }
  , {
    _id: 25248,
    in_GraphicItem: "GraphicPlinthLegTriangularPressH150",
    Model3DGroupName: "Model3DPlinthLegTriangularPressH150"
  }
  , {
    _id: 25249,
    in_GraphicItem: "GraphicPlinthLegRectangularScrewH100",
    Model3DGroupName: "Model3DPlinthLegRectangularScrewH100"
  }
  , {
    _id: 25250,
    in_GraphicItem: "GraphicPlinthLegRectangularScrewH120",
    Model3DGroupName: "Model3DPlinthLegRectangularScrewH120"
  }
  , {
    _id: 25251,
    in_GraphicItem: "GraphicPlinthLegRectangularScrewH150",
    Model3DGroupName: "Model3DPlinthLegRectangularScrewH150"
  }
  , {
    _id: 25252,
    in_GraphicItem: "DesignLegRectangular001H100",
    Model3DGroupName: "Model3DDesignLegRectangular001H100"
  }
  , {
    _id: 25253,
    in_GraphicItem: "DesignLegRectangular001H150",
    Model3DGroupName: "Model3DDesignLegRectangular001H150"
  }
  , {
    _id: 25254,
    in_GraphicItem: "DesignLegRectangular001H200",
    Model3DGroupName: "Model3DDesignLegRectangular001H200"
  }
  , {
    _id: 25255,
    in_GraphicItem: "DesignLegRectangular001H50",
    Model3DGroupName: "Model3DDesignLegRectangular001H50"
  }
  , {
    _id: 25256,
    in_GraphicItem: "DesignLegRectangular001H80",
    Model3DGroupName: "Model3DDesignLegRectangular001H80"
  }
  , {
    _id: 25257,
    in_GraphicItem: "GraphicKeku01",
    Model3DGroupName: "Model3DKeku_Side_262_50_368"
  }
  , {
    _id: 25258,
    in_GraphicItem: "GraphicKeku01",
    Model3DGroupName: "Model3DKeku_Front_262_50_359"
  }
  , {
    _id: 25259,
    in_GraphicItem: "GraphicLegra_Inox_270_C",
    Model3DGroupName: "Legra_Box_Inox_C_270_Left"
  }
  , {
    _id: 25260,
    in_GraphicItem: "GraphicLegra_Inox_270_C",
    Model3DGroupName: "Legra_Box_Inox_C_270_Right"
  }
  , {
    _id: 25261,
    in_GraphicItem: "GraphicLegra_Inox_270_C",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 25262,
    in_GraphicItem: "GraphicLegra_Inox_270_C",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 25263,
    in_GraphicItem: "GraphicLegra_Inox_270_M",
    Model3DGroupName: "Legra_Box_Inox_M_270_Left"
  }
  , {
    _id: 25264,
    in_GraphicItem: "GraphicLegra_Inox_270_M",
    Model3DGroupName: "Legra_Box_Inox_M_270_Right"
  }
  , {
    _id: 25265,
    in_GraphicItem: "GraphicLegra_Inox_270_M",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 25266,
    in_GraphicItem: "GraphicLegra_Inox_270_M",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 25267,
    in_GraphicItem: "GraphicLegra_Inox_300_C",
    Model3DGroupName: "Legra_Box_Inox_C_300_Left"
  }
  , {
    _id: 25268,
    in_GraphicItem: "GraphicLegra_Inox_300_C",
    Model3DGroupName: "Legra_Box_Inox_C_300_Right"
  }
  , {
    _id: 25269,
    in_GraphicItem: "GraphicLegra_Inox_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25270,
    in_GraphicItem: "GraphicLegra_Inox_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25271,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Box_Inox_K_300_Left"
  }
  , {
    _id: 25272,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Box_Inox_K_300_Right"
  }
  , {
    _id: 25273,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25274,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25275,
    in_GraphicItem: "GraphicLegra_Inox_300_M",
    Model3DGroupName: "Legra_Box_Inox_M_300_Left"
  }
  , {
    _id: 25276,
    in_GraphicItem: "GraphicLegra_Inox_300_M",
    Model3DGroupName: "Legra_Box_Inox_M_300_Right"
  }
  , {
    _id: 25277,
    in_GraphicItem: "GraphicLegra_Inox_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25278,
    in_GraphicItem: "GraphicLegra_Inox_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25279,
    in_GraphicItem: "GraphicLegra_Inox_350_C",
    Model3DGroupName: "Legra_Box_Inox_C_350_Left"
  }
  , {
    _id: 25280,
    in_GraphicItem: "GraphicLegra_Inox_350_C",
    Model3DGroupName: "Legra_Box_Inox_C_350_Right"
  }
  , {
    _id: 25281,
    in_GraphicItem: "GraphicLegra_Inox_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25282,
    in_GraphicItem: "GraphicLegra_Inox_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25283,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Box_Inox_K_350_Left"
  }
  , {
    _id: 25284,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Box_Inox_K_350_Right"
  }
  , {
    _id: 25285,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25286,
    in_GraphicItem: "GraphicLegra_Inox_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25287,
    in_GraphicItem: "GraphicLegra_Inox_350_M",
    Model3DGroupName: "Legra_Box_Inox_M_350_Left"
  }
  , {
    _id: 25288,
    in_GraphicItem: "GraphicLegra_Inox_350_M",
    Model3DGroupName: "Legra_Box_Inox_M_350_Right"
  }
  , {
    _id: 25289,
    in_GraphicItem: "GraphicLegra_Inox_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25290,
    in_GraphicItem: "GraphicLegra_Inox_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25291,
    in_GraphicItem: "GraphicLegra_Inox_400_C",
    Model3DGroupName: "Legra_Box_Inox_C_400_Left"
  }
  , {
    _id: 25292,
    in_GraphicItem: "GraphicLegra_Inox_400_C",
    Model3DGroupName: "Legra_Box_Inox_C_400_Right"
  }
  , {
    _id: 25293,
    in_GraphicItem: "GraphicLegra_Inox_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25294,
    in_GraphicItem: "GraphicLegra_Inox_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25295,
    in_GraphicItem: "GraphicLegra_Inox_400_F",
    Model3DGroupName: "Legra_Box_Inox_F_400_Left"
  }
  , {
    _id: 25296,
    in_GraphicItem: "GraphicLegra_Inox_400_F",
    Model3DGroupName: "Legra_Box_Inox_F_400_Right"
  }
  , {
    _id: 25297,
    in_GraphicItem: "GraphicLegra_Inox_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25298,
    in_GraphicItem: "GraphicLegra_Inox_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25299,
    in_GraphicItem: "GraphicLegra_Inox_400_K",
    Model3DGroupName: "Legra_Box_Inox_K_400_Left"
  }
  , {
    _id: 25300,
    in_GraphicItem: "GraphicLegra_Inox_400_K",
    Model3DGroupName: "Legra_Box_Inox_K_400_Right"
  }
  , {
    _id: 25301,
    in_GraphicItem: "GraphicLegra_Inox_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25302,
    in_GraphicItem: "GraphicLegra_Inox_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25303,
    in_GraphicItem: "GraphicLegra_Inox_400_M",
    Model3DGroupName: "Legra_Box_Inox_M_400_Left"
  }
  , {
    _id: 25304,
    in_GraphicItem: "GraphicLegra_Inox_400_M",
    Model3DGroupName: "Legra_Box_Inox_M_400_Right"
  }
  , {
    _id: 25305,
    in_GraphicItem: "GraphicLegra_Inox_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25306,
    in_GraphicItem: "GraphicLegra_Inox_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25307,
    in_GraphicItem: "GraphicLegra_Inox_400_N",
    Model3DGroupName: "Legra_Box_Inox_N_400_Left"
  }
  , {
    _id: 25308,
    in_GraphicItem: "GraphicLegra_Inox_400_N",
    Model3DGroupName: "Legra_Box_Inox_N_400_Right"
  }
  , {
    _id: 25309,
    in_GraphicItem: "GraphicLegra_Inox_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25310,
    in_GraphicItem: "GraphicLegra_Inox_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25311,
    in_GraphicItem: "GraphicLegra_Inox_450_C",
    Model3DGroupName: "Legra_Box_Inox_C_450_Left"
  }
  , {
    _id: 25312,
    in_GraphicItem: "GraphicLegra_Inox_450_C",
    Model3DGroupName: "Legra_Box_Inox_C_450_Right"
  }
  , {
    _id: 25313,
    in_GraphicItem: "GraphicLegra_Inox_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25314,
    in_GraphicItem: "GraphicLegra_Inox_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25315,
    in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_450_Left"
  }
  , {
    _id: 25316,
    in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_450_Right"
  }
  , {
    _id: 25317,
    in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25318,
    in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25319,
    in_GraphicItem: "GraphicLegra_Inox_450_F",
    Model3DGroupName: "Legra_Box_Inox_F_450_Left"
  }
  , {
    _id: 25320,
    in_GraphicItem: "GraphicLegra_Inox_450_F",
    Model3DGroupName: "Legra_Box_Inox_F_450_Right"
  }
  , {
    _id: 25321,
    in_GraphicItem: "GraphicLegra_Inox_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25322,
    in_GraphicItem: "GraphicLegra_Inox_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25323,
    in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_450_Left"
  }
  , {
    _id: 25324,
    in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_450_Right"
  }
  , {
    _id: 25325,
    in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25326,
    in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25327,
    in_GraphicItem: "GraphicLegra_Inox_450_K",
    Model3DGroupName: "Legra_Box_Inox_K_450_Left"
  }
  , {
    _id: 25328,
    in_GraphicItem: "GraphicLegra_Inox_450_K",
    Model3DGroupName: "Legra_Box_Inox_K_450_Right"
  }
  , {
    _id: 25329,
    in_GraphicItem: "GraphicLegra_Inox_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25330,
    in_GraphicItem: "GraphicLegra_Inox_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25331,
    in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_450_Left"
  }
  , {
    _id: 25332,
    in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_450_Right"
  }
  , {
    _id: 25333,
    in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25334,
    in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25335,
    in_GraphicItem: "GraphicLegra_Inox_450_M",
    Model3DGroupName: "Legra_Box_Inox_M_450_Left"
  }
  , {
    _id: 25336,
    in_GraphicItem: "GraphicLegra_Inox_450_M",
    Model3DGroupName: "Legra_Box_Inox_M_450_Right"
  }
  , {
    _id: 25337,
    in_GraphicItem: "GraphicLegra_Inox_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25338,
    in_GraphicItem: "GraphicLegra_Inox_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25339,
    in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_450_Left"
  }
  , {
    _id: 25340,
    in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_450_Right"
  }
  , {
    _id: 25341,
    in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25342,
    in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25343,
    in_GraphicItem: "GraphicLegra_Inox_450_N",
    Model3DGroupName: "Legra_Box_Inox_N_450_Left"
  }
  , {
    _id: 25344,
    in_GraphicItem: "GraphicLegra_Inox_450_N",
    Model3DGroupName: "Legra_Box_Inox_N_450_Right"
  }
  , {
    _id: 25345,
    in_GraphicItem: "GraphicLegra_Inox_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25346,
    in_GraphicItem: "GraphicLegra_Inox_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25347,
    in_GraphicItem: "GraphicLegra_Inox_500_C",
    Model3DGroupName: "Legra_Box_Inox_C_500_Left"
  }
  , {
    _id: 25348,
    in_GraphicItem: "GraphicLegra_Inox_500_C",
    Model3DGroupName: "Legra_Box_Inox_C_500_Right"
  }
  , {
    _id: 25349,
    in_GraphicItem: "GraphicLegra_Inox_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25350,
    in_GraphicItem: "GraphicLegra_Inox_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25351,
    in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_500_Left"
  }
  , {
    _id: 25352,
    in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_500_Right"
  }
  , {
    _id: 25353,
    in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25354,
    in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25355,
    in_GraphicItem: "GraphicLegra_Inox_500_F",
    Model3DGroupName: "Legra_Box_Inox_F_500_Left"
  }
  , {
    _id: 25356,
    in_GraphicItem: "GraphicLegra_Inox_500_F",
    Model3DGroupName: "Legra_Box_Inox_F_500_Right"
  }
  , {
    _id: 25357,
    in_GraphicItem: "GraphicLegra_Inox_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25358,
    in_GraphicItem: "GraphicLegra_Inox_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25359,
    in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_500_Left"
  }
  , {
    _id: 25360,
    in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_500_Right"
  }
  , {
    _id: 25361,
    in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25362,
    in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25363,
    in_GraphicItem: "GraphicLegra_Inox_500_K",
    Model3DGroupName: "Legra_Box_Inox_K_500_Left"
  }
  , {
    _id: 25364,
    in_GraphicItem: "GraphicLegra_Inox_500_K",
    Model3DGroupName: "Legra_Box_Inox_K_500_Right"
  }
  , {
    _id: 25365,
    in_GraphicItem: "GraphicLegra_Inox_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25366,
    in_GraphicItem: "GraphicLegra_Inox_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25367,
    in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_500_Left"
  }
  , {
    _id: 25368,
    in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_500_Right"
  }
  , {
    _id: 25369,
    in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25370,
    in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25371,
    in_GraphicItem: "GraphicLegra_Inox_500_M",
    Model3DGroupName: "Legra_Box_Inox_M_500_Left"
  }
  , {
    _id: 25372,
    in_GraphicItem: "GraphicLegra_Inox_500_M",
    Model3DGroupName: "Legra_Box_Inox_M_500_Right"
  }
  , {
    _id: 25373,
    in_GraphicItem: "GraphicLegra_Inox_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25374,
    in_GraphicItem: "GraphicLegra_Inox_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25375,
    in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_500_Left"
  }
  , {
    _id: 25376,
    in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_500_Right"
  }
  , {
    _id: 25377,
    in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25378,
    in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25379,
    in_GraphicItem: "GraphicLegra_Inox_500_N",
    Model3DGroupName: "Legra_Box_Inox_N_500_Left"
  }
  , {
    _id: 25380,
    in_GraphicItem: "GraphicLegra_Inox_500_N",
    Model3DGroupName: "Legra_Box_Inox_N_500_Right"
  }
  , {
    _id: 25381,
    in_GraphicItem: "GraphicLegra_Inox_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25382,
    in_GraphicItem: "GraphicLegra_Inox_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25383,
    in_GraphicItem: "GraphicLegra_Inox_550_C",
    Model3DGroupName: "Legra_Box_Inox_C_550_Left"
  }
  , {
    _id: 25384,
    in_GraphicItem: "GraphicLegra_Inox_550_C",
    Model3DGroupName: "Legra_Box_Inox_C_550_Right"
  }
  , {
    _id: 25385,
    in_GraphicItem: "GraphicLegra_Inox_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25386,
    in_GraphicItem: "GraphicLegra_Inox_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25387,
    in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_550_Left"
  }
  , {
    _id: 25388,
    in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_550_Right"
  }
  , {
    _id: 25389,
    in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25390,
    in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25391,
    in_GraphicItem: "GraphicLegra_Inox_550_F",
    Model3DGroupName: "Legra_Box_Inox_F_550_Left"
  }
  , {
    _id: 25392,
    in_GraphicItem: "GraphicLegra_Inox_550_F",
    Model3DGroupName: "Legra_Box_Inox_F_550_Right"
  }
  , {
    _id: 25393,
    in_GraphicItem: "GraphicLegra_Inox_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25394,
    in_GraphicItem: "GraphicLegra_Inox_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25395,
    in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_550_Left"
  }
  , {
    _id: 25396,
    in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_550_Right"
  }
  , {
    _id: 25397,
    in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25398,
    in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25399,
    in_GraphicItem: "GraphicLegra_Inox_550_K",
    Model3DGroupName: "Legra_Box_Inox_K_550_Left"
  }
  , {
    _id: 25400,
    in_GraphicItem: "GraphicLegra_Inox_550_K",
    Model3DGroupName: "Legra_Box_Inox_K_550_Right"
  }
  , {
    _id: 25401,
    in_GraphicItem: "GraphicLegra_Inox_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25402,
    in_GraphicItem: "GraphicLegra_Inox_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25403,
    in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_550_Left"
  }
  , {
    _id: 25404,
    in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_550_Right"
  }
  , {
    _id: 25405,
    in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25406,
    in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25407,
    in_GraphicItem: "GraphicLegra_Inox_550_M",
    Model3DGroupName: "Legra_Box_Inox_M_550_Left"
  }
  , {
    _id: 25408,
    in_GraphicItem: "GraphicLegra_Inox_550_M",
    Model3DGroupName: "Legra_Box_Inox_M_550_Right"
  }
  , {
    _id: 25409,
    in_GraphicItem: "GraphicLegra_Inox_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25410,
    in_GraphicItem: "GraphicLegra_Inox_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25411,
    in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_550_Left"
  }
  , {
    _id: 25412,
    in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_550_Right"
  }
  , {
    _id: 25413,
    in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25414,
    in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25415,
    in_GraphicItem: "GraphicLegra_Inox_550_N",
    Model3DGroupName: "Legra_Box_Inox_N_550_Left"
  }
  , {
    _id: 25416,
    in_GraphicItem: "GraphicLegra_Inox_550_N",
    Model3DGroupName: "Legra_Box_Inox_N_550_Right"
  }
  , {
    _id: 25417,
    in_GraphicItem: "GraphicLegra_Inox_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25418,
    in_GraphicItem: "GraphicLegra_Inox_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25419,
    in_GraphicItem: "GraphicLegra_Inox_600_C",
    Model3DGroupName: "Legra_Box_Inox_C_600_Left"
  }
  , {
    _id: 25420,
    in_GraphicItem: "GraphicLegra_Inox_600_C",
    Model3DGroupName: "Legra_Box_Inox_C_600_Right"
  }
  , {
    _id: 25421,
    in_GraphicItem: "GraphicLegra_Inox_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25422,
    in_GraphicItem: "GraphicLegra_Inox_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25423,
    in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_600_Left"
  }
  , {
    _id: 25424,
    in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_600_Right"
  }
  , {
    _id: 25425,
    in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25426,
    in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25427,
    in_GraphicItem: "GraphicLegra_Inox_600_F",
    Model3DGroupName: "Legra_Box_Inox_F_600_Left"
  }
  , {
    _id: 25428,
    in_GraphicItem: "GraphicLegra_Inox_600_F",
    Model3DGroupName: "Legra_Box_Inox_F_600_Right"
  }
  , {
    _id: 25429,
    in_GraphicItem: "GraphicLegra_Inox_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25430,
    in_GraphicItem: "GraphicLegra_Inox_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25431,
    in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_600_Left"
  }
  , {
    _id: 25432,
    in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_600_Right"
  }
  , {
    _id: 25433,
    in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25434,
    in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25435,
    in_GraphicItem: "GraphicLegra_Inox_600_K",
    Model3DGroupName: "Legra_Box_Inox_K_600_Left"
  }
  , {
    _id: 25436,
    in_GraphicItem: "GraphicLegra_Inox_600_K",
    Model3DGroupName: "Legra_Box_Inox_K_600_Right"
  }
  , {
    _id: 25437,
    in_GraphicItem: "GraphicLegra_Inox_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25438,
    in_GraphicItem: "GraphicLegra_Inox_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25439,
    in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_600_Left"
  }
  , {
    _id: 25440,
    in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Inox_K_600_Right"
  }
  , {
    _id: 25441,
    in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25442,
    in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25443,
    in_GraphicItem: "GraphicLegra_Inox_600_M",
    Model3DGroupName: "Legra_Box_Inox_M_600_Left"
  }
  , {
    _id: 25444,
    in_GraphicItem: "GraphicLegra_Inox_600_M",
    Model3DGroupName: "Legra_Box_Inox_M_600_Right"
  }
  , {
    _id: 25445,
    in_GraphicItem: "GraphicLegra_Inox_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25446,
    in_GraphicItem: "GraphicLegra_Inox_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25447,
    in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_600_Left"
  }
  , {
    _id: 25448,
    in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_600_Right"
  }
  , {
    _id: 25449,
    in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25450,
    in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25451,
    in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_650_Left"
  }
  , {
    _id: 25452,
    in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Inox_C_650_Right"
  }
  , {
    _id: 25453,
    in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 25454,
    in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 25455,
    in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_650_Left"
  }
  , {
    _id: 25456,
    in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Inox_F_650_Right"
  }
  , {
    _id: 25457,
    in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 25458,
    in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 25459,
    in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_650_Left"
  }
  , {
    _id: 25460,
    in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Inox_M_650_Right"
  }
  , {
    _id: 25461,
    in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 25462,
    in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 25463,
    in_GraphicItem: "Graphic_Legra_Syncro",
    Model3DGroupName: "Graphic_Legra_Syncro"
  }
  , {
    _id: 25464,
    in_GraphicItem: "GraphicLegra_Orion_270_C",
    Model3DGroupName: "Legra_Box_Orion_C_270_Left"
  }
  , {
    _id: 25465,
    in_GraphicItem: "GraphicLegra_Orion_270_C",
    Model3DGroupName: "Legra_Box_Orion_C_270_Right"
  }
  , {
    _id: 25466,
    in_GraphicItem: "GraphicLegra_Orion_270_C",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 25467,
    in_GraphicItem: "GraphicLegra_Orion_270_C",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 25468,
    in_GraphicItem: "GraphicLegra_Orion_270_M",
    Model3DGroupName: "Legra_Box_Orion_M_270_Left"
  }
  , {
    _id: 25469,
    in_GraphicItem: "GraphicLegra_Orion_270_M",
    Model3DGroupName: "Legra_Box_Orion_M_270_Right"
  }
  , {
    _id: 25470,
    in_GraphicItem: "GraphicLegra_Orion_270_M",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 25471,
    in_GraphicItem: "GraphicLegra_Orion_270_M",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 25472,
    in_GraphicItem: "GraphicLegra_Orion_300_C",
    Model3DGroupName: "Legra_Box_Orion_C_300_Left"
  }
  , {
    _id: 25473,
    in_GraphicItem: "GraphicLegra_Orion_300_C",
    Model3DGroupName: "Legra_Box_Orion_C_300_Right"
  }
  , {
    _id: 25474,
    in_GraphicItem: "GraphicLegra_Orion_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25475,
    in_GraphicItem: "GraphicLegra_Orion_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25476,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Box_Orion_K_300_Left"
  }
  , {
    _id: 25477,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Box_Orion_K_300_Right"
  }
  , {
    _id: 25478,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25479,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25480,
    in_GraphicItem: "GraphicLegra_Orion_300_M",
    Model3DGroupName: "Legra_Box_Orion_M_300_Left"
  }
  , {
    _id: 25481,
    in_GraphicItem: "GraphicLegra_Orion_300_M",
    Model3DGroupName: "Legra_Box_Orion_M_300_Right"
  }
  , {
    _id: 25482,
    in_GraphicItem: "GraphicLegra_Orion_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25483,
    in_GraphicItem: "GraphicLegra_Orion_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25484,
    in_GraphicItem: "GraphicLegra_Orion_350_C",
    Model3DGroupName: "Legra_Box_Orion_C_350_Left"
  }
  , {
    _id: 25485,
    in_GraphicItem: "GraphicLegra_Orion_350_C",
    Model3DGroupName: "Legra_Box_Orion_C_350_Right"
  }
  , {
    _id: 25486,
    in_GraphicItem: "GraphicLegra_Orion_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25487,
    in_GraphicItem: "GraphicLegra_Orion_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25488,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Box_Orion_K_350_Left"
  }
  , {
    _id: 25489,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Box_Orion_K_350_Right"
  }
  , {
    _id: 25490,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25491,
    in_GraphicItem: "GraphicLegra_Orion_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25492,
    in_GraphicItem: "GraphicLegra_Orion_350_M",
    Model3DGroupName: "Legra_Box_Orion_M_350_Left"
  }
  , {
    _id: 25493,
    in_GraphicItem: "GraphicLegra_Orion_350_M",
    Model3DGroupName: "Legra_Box_Orion_M_350_Right"
  }
  , {
    _id: 25494,
    in_GraphicItem: "GraphicLegra_Orion_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25495,
    in_GraphicItem: "GraphicLegra_Orion_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25496,
    in_GraphicItem: "GraphicLegra_Orion_400_C",
    Model3DGroupName: "Legra_Box_Orion_C_400_Left"
  }
  , {
    _id: 25497,
    in_GraphicItem: "GraphicLegra_Orion_400_C",
    Model3DGroupName: "Legra_Box_Orion_C_400_Right"
  }
  , {
    _id: 25498,
    in_GraphicItem: "GraphicLegra_Orion_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25499,
    in_GraphicItem: "GraphicLegra_Orion_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25500,
    in_GraphicItem: "GraphicLegra_Orion_400_F",
    Model3DGroupName: "Legra_Box_Orion_F_400_Left"
  }
  , {
    _id: 25501,
    in_GraphicItem: "GraphicLegra_Orion_400_F",
    Model3DGroupName: "Legra_Box_Orion_F_400_Right"
  }
  , {
    _id: 25502,
    in_GraphicItem: "GraphicLegra_Orion_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25503,
    in_GraphicItem: "GraphicLegra_Orion_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25504,
    in_GraphicItem: "GraphicLegra_Orion_400_K",
    Model3DGroupName: "Legra_Box_Orion_K_400_Left"
  }
  , {
    _id: 25505,
    in_GraphicItem: "GraphicLegra_Orion_400_K",
    Model3DGroupName: "Legra_Box_Orion_K_400_Right"
  }
  , {
    _id: 25506,
    in_GraphicItem: "GraphicLegra_Orion_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25507,
    in_GraphicItem: "GraphicLegra_Orion_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25508,
    in_GraphicItem: "GraphicLegra_Orion_400_M",
    Model3DGroupName: "Legra_Box_Orion_M_400_Left"
  }
  , {
    _id: 25509,
    in_GraphicItem: "GraphicLegra_Orion_400_M",
    Model3DGroupName: "Legra_Box_Orion_M_400_Right"
  }
  , {
    _id: 25510,
    in_GraphicItem: "GraphicLegra_Orion_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25511,
    in_GraphicItem: "GraphicLegra_Orion_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25512,
    in_GraphicItem: "GraphicLegra_Orion_400_N",
    Model3DGroupName: "Legra_Box_Orion_N_400_Left"
  }
  , {
    _id: 25513,
    in_GraphicItem: "GraphicLegra_Orion_400_N",
    Model3DGroupName: "Legra_Box_Orion_N_400_Right"
  }
  , {
    _id: 25514,
    in_GraphicItem: "GraphicLegra_Orion_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25515,
    in_GraphicItem: "GraphicLegra_Orion_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25516,
    in_GraphicItem: "GraphicLegra_Orion_450_C",
    Model3DGroupName: "Legra_Box_Orion_C_450_Left"
  }
  , {
    _id: 25517,
    in_GraphicItem: "GraphicLegra_Orion_450_C",
    Model3DGroupName: "Legra_Box_Orion_C_450_Right"
  }
  , {
    _id: 25518,
    in_GraphicItem: "GraphicLegra_Orion_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25519,
    in_GraphicItem: "GraphicLegra_Orion_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25520,
    in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_450_Left"
  }
  , {
    _id: 25521,
    in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_450_Right"
  }
  , {
    _id: 25522,
    in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25523,
    in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25524,
    in_GraphicItem: "GraphicLegra_Orion_450_F",
    Model3DGroupName: "Legra_Box_Orion_F_450_Left"
  }
  , {
    _id: 25525,
    in_GraphicItem: "GraphicLegra_Orion_450_F",
    Model3DGroupName: "Legra_Box_Orion_F_450_Right"
  }
  , {
    _id: 25526,
    in_GraphicItem: "GraphicLegra_Orion_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25527,
    in_GraphicItem: "GraphicLegra_Orion_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25528,
    in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_450_Left"
  }
  , {
    _id: 25529,
    in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_450_Right"
  }
  , {
    _id: 25530,
    in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25531,
    in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25532,
    in_GraphicItem: "GraphicLegra_Orion_450_K",
    Model3DGroupName: "Legra_Box_Orion_K_450_Left"
  }
  , {
    _id: 25533,
    in_GraphicItem: "GraphicLegra_Orion_450_K",
    Model3DGroupName: "Legra_Box_Orion_K_450_Right"
  }
  , {
    _id: 25534,
    in_GraphicItem: "GraphicLegra_Orion_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25535,
    in_GraphicItem: "GraphicLegra_Orion_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25536,
    in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_450_Left"
  }
  , {
    _id: 25537,
    in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_450_Right"
  }
  , {
    _id: 25538,
    in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25539,
    in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25540,
    in_GraphicItem: "GraphicLegra_Orion_450_M",
    Model3DGroupName: "Legra_Box_Orion_M_450_Left"
  }
  , {
    _id: 25541,
    in_GraphicItem: "GraphicLegra_Orion_450_M",
    Model3DGroupName: "Legra_Box_Orion_M_450_Right"
  }
  , {
    _id: 25542,
    in_GraphicItem: "GraphicLegra_Orion_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25543,
    in_GraphicItem: "GraphicLegra_Orion_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25544,
    in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_450_Left"
  }
  , {
    _id: 25545,
    in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_450_Right"
  }
  , {
    _id: 25546,
    in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25547,
    in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25548,
    in_GraphicItem: "GraphicLegra_Orion_450_N",
    Model3DGroupName: "Legra_Box_Orion_N_450_Left"
  }
  , {
    _id: 25549,
    in_GraphicItem: "GraphicLegra_Orion_450_N",
    Model3DGroupName: "Legra_Box_Orion_N_450_Right"
  }
  , {
    _id: 25550,
    in_GraphicItem: "GraphicLegra_Orion_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25551,
    in_GraphicItem: "GraphicLegra_Orion_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25552,
    in_GraphicItem: "GraphicLegra_Orion_500_C",
    Model3DGroupName: "Legra_Box_Orion_C_500_Left"
  }
  , {
    _id: 25553,
    in_GraphicItem: "GraphicLegra_Orion_500_C",
    Model3DGroupName: "Legra_Box_Orion_C_500_Right"
  }
  , {
    _id: 25554,
    in_GraphicItem: "GraphicLegra_Orion_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25555,
    in_GraphicItem: "GraphicLegra_Orion_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25556,
    in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_500_Left"
  }
  , {
    _id: 25557,
    in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_500_Right"
  }
  , {
    _id: 25558,
    in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25559,
    in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25560,
    in_GraphicItem: "GraphicLegra_Orion_500_F",
    Model3DGroupName: "Legra_Box_Orion_F_500_Left"
  }
  , {
    _id: 25561,
    in_GraphicItem: "GraphicLegra_Orion_500_F",
    Model3DGroupName: "Legra_Box_Orion_F_500_Right"
  }
  , {
    _id: 25562,
    in_GraphicItem: "GraphicLegra_Orion_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25563,
    in_GraphicItem: "GraphicLegra_Orion_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25564,
    in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_500_Left"
  }
  , {
    _id: 25565,
    in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_500_Right"
  }
  , {
    _id: 25566,
    in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25567,
    in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25568,
    in_GraphicItem: "GraphicLegra_Orion_500_K",
    Model3DGroupName: "Legra_Box_Orion_K_500_Left"
  }
  , {
    _id: 25569,
    in_GraphicItem: "GraphicLegra_Orion_500_K",
    Model3DGroupName: "Legra_Box_Orion_K_500_Right"
  }
  , {
    _id: 25570,
    in_GraphicItem: "GraphicLegra_Orion_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25571,
    in_GraphicItem: "GraphicLegra_Orion_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25572,
    in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_500_Left"
  }
  , {
    _id: 25573,
    in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_500_Right"
  }
  , {
    _id: 25574,
    in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25575,
    in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25576,
    in_GraphicItem: "GraphicLegra_Orion_500_M",
    Model3DGroupName: "Legra_Box_Orion_M_500_Left"
  }
  , {
    _id: 25577,
    in_GraphicItem: "GraphicLegra_Orion_500_M",
    Model3DGroupName: "Legra_Box_Orion_M_500_Right"
  }
  , {
    _id: 25578,
    in_GraphicItem: "GraphicLegra_Orion_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25579,
    in_GraphicItem: "GraphicLegra_Orion_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25580,
    in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_500_Left"
  }
  , {
    _id: 25581,
    in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_500_Right"
  }
  , {
    _id: 25582,
    in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25583,
    in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25584,
    in_GraphicItem: "GraphicLegra_Orion_500_N",
    Model3DGroupName: "Legra_Box_Orion_N_500_Left"
  }
  , {
    _id: 25585,
    in_GraphicItem: "GraphicLegra_Orion_500_N",
    Model3DGroupName: "Legra_Box_Orion_N_500_Right"
  }
  , {
    _id: 25586,
    in_GraphicItem: "GraphicLegra_Orion_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25587,
    in_GraphicItem: "GraphicLegra_Orion_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25588,
    in_GraphicItem: "GraphicLegra_Orion_550_C",
    Model3DGroupName: "Legra_Box_Orion_C_550_Left"
  }
  , {
    _id: 25589,
    in_GraphicItem: "GraphicLegra_Orion_550_C",
    Model3DGroupName: "Legra_Box_Orion_C_550_Right"
  }
  , {
    _id: 25590,
    in_GraphicItem: "GraphicLegra_Orion_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25591,
    in_GraphicItem: "GraphicLegra_Orion_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25592,
    in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_550_Left"
  }
  , {
    _id: 25593,
    in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_550_Right"
  }
  , {
    _id: 25594,
    in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25595,
    in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25596,
    in_GraphicItem: "GraphicLegra_Orion_550_F",
    Model3DGroupName: "Legra_Box_Orion_F_550_Left"
  }
  , {
    _id: 25597,
    in_GraphicItem: "GraphicLegra_Orion_550_F",
    Model3DGroupName: "Legra_Box_Orion_F_550_Right"
  }
  , {
    _id: 25598,
    in_GraphicItem: "GraphicLegra_Orion_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25599,
    in_GraphicItem: "GraphicLegra_Orion_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25600,
    in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_550_Left"
  }
  , {
    _id: 25601,
    in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_550_Right"
  }
  , {
    _id: 25602,
    in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25603,
    in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25604,
    in_GraphicItem: "GraphicLegra_Orion_550_K",
    Model3DGroupName: "Legra_Box_Orion_K_550_Left"
  }
  , {
    _id: 25605,
    in_GraphicItem: "GraphicLegra_Orion_550_K",
    Model3DGroupName: "Legra_Box_Orion_K_550_Right"
  }
  , {
    _id: 25606,
    in_GraphicItem: "GraphicLegra_Orion_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25607,
    in_GraphicItem: "GraphicLegra_Orion_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25608,
    in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_550_Left"
  }
  , {
    _id: 25609,
    in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_550_Right"
  }
  , {
    _id: 25610,
    in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25611,
    in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25612,
    in_GraphicItem: "GraphicLegra_Orion_550_M",
    Model3DGroupName: "Legra_Box_Orion_M_550_Left"
  }
  , {
    _id: 25613,
    in_GraphicItem: "GraphicLegra_Orion_550_M",
    Model3DGroupName: "Legra_Box_Orion_M_550_Right"
  }
  , {
    _id: 25614,
    in_GraphicItem: "GraphicLegra_Orion_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25615,
    in_GraphicItem: "GraphicLegra_Orion_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25616,
    in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_550_Left"
  }
  , {
    _id: 25617,
    in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_550_Right"
  }
  , {
    _id: 25618,
    in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25619,
    in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25620,
    in_GraphicItem: "GraphicLegra_Orion_550_N",
    Model3DGroupName: "Legra_Box_Orion_N_550_Left"
  }
  , {
    _id: 25621,
    in_GraphicItem: "GraphicLegra_Orion_550_N",
    Model3DGroupName: "Legra_Box_Orion_N_550_Right"
  }
  , {
    _id: 25622,
    in_GraphicItem: "GraphicLegra_Orion_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25623,
    in_GraphicItem: "GraphicLegra_Orion_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25624,
    in_GraphicItem: "GraphicLegra_Orion_600_C",
    Model3DGroupName: "Legra_Box_Orion_C_600_Left"
  }
  , {
    _id: 25625,
    in_GraphicItem: "GraphicLegra_Orion_600_C",
    Model3DGroupName: "Legra_Box_Orion_C_600_Right"
  }
  , {
    _id: 25626,
    in_GraphicItem: "GraphicLegra_Orion_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25627,
    in_GraphicItem: "GraphicLegra_Orion_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25628,
    in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_600_Left"
  }
  , {
    _id: 25629,
    in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_600_Right"
  }
  , {
    _id: 25630,
    in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25631,
    in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25632,
    in_GraphicItem: "GraphicLegra_Orion_600_F",
    Model3DGroupName: "Legra_Box_Orion_F_600_Left"
  }
  , {
    _id: 25633,
    in_GraphicItem: "GraphicLegra_Orion_600_F",
    Model3DGroupName: "Legra_Box_Orion_F_600_Right"
  }
  , {
    _id: 25634,
    in_GraphicItem: "GraphicLegra_Orion_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25635,
    in_GraphicItem: "GraphicLegra_Orion_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25636,
    in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_600_Left"
  }
  , {
    _id: 25637,
    in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_600_Right"
  }
  , {
    _id: 25638,
    in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25639,
    in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25640,
    in_GraphicItem: "GraphicLegra_Orion_600_K",
    Model3DGroupName: "Legra_Box_Orion_K_600_Left"
  }
  , {
    _id: 25641,
    in_GraphicItem: "GraphicLegra_Orion_600_K",
    Model3DGroupName: "Legra_Box_Orion_K_600_Right"
  }
  , {
    _id: 25642,
    in_GraphicItem: "GraphicLegra_Orion_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25643,
    in_GraphicItem: "GraphicLegra_Orion_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25644,
    in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_600_Left"
  }
  , {
    _id: 25645,
    in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Orion_K_600_Right"
  }
  , {
    _id: 25646,
    in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25647,
    in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25648,
    in_GraphicItem: "GraphicLegra_Orion_600_M",
    Model3DGroupName: "Legra_Box_Orion_M_600_Left"
  }
  , {
    _id: 25649,
    in_GraphicItem: "GraphicLegra_Orion_600_M",
    Model3DGroupName: "Legra_Box_Orion_M_600_Right"
  }
  , {
    _id: 25650,
    in_GraphicItem: "GraphicLegra_Orion_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25651,
    in_GraphicItem: "GraphicLegra_Orion_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25652,
    in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_600_Left"
  }
  , {
    _id: 25653,
    in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_600_Right"
  }
  , {
    _id: 25654,
    in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25655,
    in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25656,
    in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_650_Left"
  }
  , {
    _id: 25657,
    in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Orion_C_650_Right"
  }
  , {
    _id: 25658,
    in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 25659,
    in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 25660,
    in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_650_Left"
  }
  , {
    _id: 25661,
    in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Orion_F_650_Right"
  }
  , {
    _id: 25662,
    in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 25663,
    in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 25664,
    in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_650_Left"
  }
  , {
    _id: 25665,
    in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Orion_M_650_Right"
  }
  , {
    _id: 25666,
    in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 25667,
    in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 25668,
    in_GraphicItem: "GraphicLegra_Terra_270_C",
    Model3DGroupName: "Legra_Box_Terra_C_270_Left"
  }
  , {
    _id: 25669,
    in_GraphicItem: "GraphicLegra_Terra_270_C",
    Model3DGroupName: "Legra_Box_Terra_C_270_Right"
  }
  , {
    _id: 25670,
    in_GraphicItem: "GraphicLegra_Terra_270_C",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 25671,
    in_GraphicItem: "GraphicLegra_Terra_270_C",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 25672,
    in_GraphicItem: "GraphicLegra_Terra_270_M",
    Model3DGroupName: "Legra_Box_Terra_M_270_Left"
  }
  , {
    _id: 25673,
    in_GraphicItem: "GraphicLegra_Terra_270_M",
    Model3DGroupName: "Legra_Box_Terra_M_270_Right"
  }
  , {
    _id: 25674,
    in_GraphicItem: "GraphicLegra_Terra_270_M",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 25675,
    in_GraphicItem: "GraphicLegra_Terra_270_M",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 25676,
    in_GraphicItem: "GraphicLegra_Terra_300_C",
    Model3DGroupName: "Legra_Box_Terra_C_300_Left"
  }
  , {
    _id: 25677,
    in_GraphicItem: "GraphicLegra_Terra_300_C",
    Model3DGroupName: "Legra_Box_Terra_C_300_Right"
  }
  , {
    _id: 25678,
    in_GraphicItem: "GraphicLegra_Terra_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25679,
    in_GraphicItem: "GraphicLegra_Terra_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25680,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Box_Terra_K_300_Left"
  }
  , {
    _id: 25681,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Box_Terra_K_300_Right"
  }
  , {
    _id: 25682,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25683,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25684,
    in_GraphicItem: "GraphicLegra_Terra_300_M",
    Model3DGroupName: "Legra_Box_Terra_M_300_Left"
  }
  , {
    _id: 25685,
    in_GraphicItem: "GraphicLegra_Terra_300_M",
    Model3DGroupName: "Legra_Box_Terra_M_300_Right"
  }
  , {
    _id: 25686,
    in_GraphicItem: "GraphicLegra_Terra_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25687,
    in_GraphicItem: "GraphicLegra_Terra_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25688,
    in_GraphicItem: "GraphicLegra_Terra_350_C",
    Model3DGroupName: "Legra_Box_Terra_C_350_Left"
  }
  , {
    _id: 25689,
    in_GraphicItem: "GraphicLegra_Terra_350_C",
    Model3DGroupName: "Legra_Box_Terra_C_350_Right"
  }
  , {
    _id: 25690,
    in_GraphicItem: "GraphicLegra_Terra_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25691,
    in_GraphicItem: "GraphicLegra_Terra_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25692,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Box_Terra_K_350_Left"
  }
  , {
    _id: 25693,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Box_Terra_K_350_Right"
  }
  , {
    _id: 25694,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25695,
    in_GraphicItem: "GraphicLegra_Terra_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25696,
    in_GraphicItem: "GraphicLegra_Terra_350_M",
    Model3DGroupName: "Legra_Box_Terra_M_350_Left"
  }
  , {
    _id: 25697,
    in_GraphicItem: "GraphicLegra_Terra_350_M",
    Model3DGroupName: "Legra_Box_Terra_M_350_Right"
  }
  , {
    _id: 25698,
    in_GraphicItem: "GraphicLegra_Terra_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25699,
    in_GraphicItem: "GraphicLegra_Terra_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25700,
    in_GraphicItem: "GraphicLegra_Terra_400_C",
    Model3DGroupName: "Legra_Box_Terra_C_400_Left"
  }
  , {
    _id: 25701,
    in_GraphicItem: "GraphicLegra_Terra_400_C",
    Model3DGroupName: "Legra_Box_Terra_C_400_Right"
  }
  , {
    _id: 25702,
    in_GraphicItem: "GraphicLegra_Terra_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25703,
    in_GraphicItem: "GraphicLegra_Terra_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25704,
    in_GraphicItem: "GraphicLegra_Terra_400_F",
    Model3DGroupName: "Legra_Box_Terra_F_400_Left"
  }
  , {
    _id: 25705,
    in_GraphicItem: "GraphicLegra_Terra_400_F",
    Model3DGroupName: "Legra_Box_Terra_F_400_Right"
  }
  , {
    _id: 25706,
    in_GraphicItem: "GraphicLegra_Terra_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25707,
    in_GraphicItem: "GraphicLegra_Terra_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25708,
    in_GraphicItem: "GraphicLegra_Terra_400_K",
    Model3DGroupName: "Legra_Box_Terra_K_400_Left"
  }
  , {
    _id: 25709,
    in_GraphicItem: "GraphicLegra_Terra_400_K",
    Model3DGroupName: "Legra_Box_Terra_K_400_Right"
  }
  , {
    _id: 25710,
    in_GraphicItem: "GraphicLegra_Terra_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25711,
    in_GraphicItem: "GraphicLegra_Terra_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25712,
    in_GraphicItem: "GraphicLegra_Terra_400_M",
    Model3DGroupName: "Legra_Box_Terra_M_400_Left"
  }
  , {
    _id: 25713,
    in_GraphicItem: "GraphicLegra_Terra_400_M",
    Model3DGroupName: "Legra_Box_Terra_M_400_Right"
  }
  , {
    _id: 25714,
    in_GraphicItem: "GraphicLegra_Terra_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25715,
    in_GraphicItem: "GraphicLegra_Terra_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25716,
    in_GraphicItem: "GraphicLegra_Terra_400_N",
    Model3DGroupName: "Legra_Box_Terra_N_400_Left"
  }
  , {
    _id: 25717,
    in_GraphicItem: "GraphicLegra_Terra_400_N",
    Model3DGroupName: "Legra_Box_Terra_N_400_Right"
  }
  , {
    _id: 25718,
    in_GraphicItem: "GraphicLegra_Terra_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25719,
    in_GraphicItem: "GraphicLegra_Terra_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25720,
    in_GraphicItem: "GraphicLegra_Terra_450_C",
    Model3DGroupName: "Legra_Box_Terra_C_450_Left"
  }
  , {
    _id: 25721,
    in_GraphicItem: "GraphicLegra_Terra_450_C",
    Model3DGroupName: "Legra_Box_Terra_C_450_Right"
  }
  , {
    _id: 25722,
    in_GraphicItem: "GraphicLegra_Terra_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25723,
    in_GraphicItem: "GraphicLegra_Terra_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25724,
    in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_450_Left"
  }
  , {
    _id: 25725,
    in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_450_Right"
  }
  , {
    _id: 25726,
    in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25727,
    in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25728,
    in_GraphicItem: "GraphicLegra_Terra_450_F",
    Model3DGroupName: "Legra_Box_Terra_F_450_Left"
  }
  , {
    _id: 25729,
    in_GraphicItem: "GraphicLegra_Terra_450_F",
    Model3DGroupName: "Legra_Box_Terra_F_450_Right"
  }
  , {
    _id: 25730,
    in_GraphicItem: "GraphicLegra_Terra_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25731,
    in_GraphicItem: "GraphicLegra_Terra_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25732,
    in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_450_Left"
  }
  , {
    _id: 25733,
    in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_450_Right"
  }
  , {
    _id: 25734,
    in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25735,
    in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25736,
    in_GraphicItem: "GraphicLegra_Terra_450_K",
    Model3DGroupName: "Legra_Box_Terra_K_450_Left"
  }
  , {
    _id: 25737,
    in_GraphicItem: "GraphicLegra_Terra_450_K",
    Model3DGroupName: "Legra_Box_Terra_K_450_Right"
  }
  , {
    _id: 25738,
    in_GraphicItem: "GraphicLegra_Terra_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25739,
    in_GraphicItem: "GraphicLegra_Terra_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25740,
    in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_450_Left"
  }
  , {
    _id: 25741,
    in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_450_Right"
  }
  , {
    _id: 25742,
    in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25743,
    in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25744,
    in_GraphicItem: "GraphicLegra_Terra_450_M",
    Model3DGroupName: "Legra_Box_Terra_M_450_Left"
  }
  , {
    _id: 25745,
    in_GraphicItem: "GraphicLegra_Terra_450_M",
    Model3DGroupName: "Legra_Box_Terra_M_450_Right"
  }
  , {
    _id: 25746,
    in_GraphicItem: "GraphicLegra_Terra_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25747,
    in_GraphicItem: "GraphicLegra_Terra_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25748,
    in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_450_Left"
  }
  , {
    _id: 25749,
    in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_450_Right"
  }
  , {
    _id: 25750,
    in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25751,
    in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25752,
    in_GraphicItem: "GraphicLegra_Terra_450_N",
    Model3DGroupName: "Legra_Box_Terra_N_450_Left"
  }
  , {
    _id: 25753,
    in_GraphicItem: "GraphicLegra_Terra_450_N",
    Model3DGroupName: "Legra_Box_Terra_N_450_Right"
  }
  , {
    _id: 25754,
    in_GraphicItem: "GraphicLegra_Terra_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25755,
    in_GraphicItem: "GraphicLegra_Terra_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25756,
    in_GraphicItem: "GraphicLegra_Terra_500_C",
    Model3DGroupName: "Legra_Box_Terra_C_500_Left"
  }
  , {
    _id: 25757,
    in_GraphicItem: "GraphicLegra_Terra_500_C",
    Model3DGroupName: "Legra_Box_Terra_C_500_Right"
  }
  , {
    _id: 25758,
    in_GraphicItem: "GraphicLegra_Terra_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25759,
    in_GraphicItem: "GraphicLegra_Terra_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25760,
    in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_500_Left"
  }
  , {
    _id: 25761,
    in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_500_Right"
  }
  , {
    _id: 25762,
    in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25763,
    in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25764,
    in_GraphicItem: "GraphicLegra_Terra_500_F",
    Model3DGroupName: "Legra_Box_Terra_F_500_Left"
  }
  , {
    _id: 25765,
    in_GraphicItem: "GraphicLegra_Terra_500_F",
    Model3DGroupName: "Legra_Box_Terra_F_500_Right"
  }
  , {
    _id: 25766,
    in_GraphicItem: "GraphicLegra_Terra_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25767,
    in_GraphicItem: "GraphicLegra_Terra_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25768,
    in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_500_Left"
  }
  , {
    _id: 25769,
    in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_500_Right"
  }
  , {
    _id: 25770,
    in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25771,
    in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25772,
    in_GraphicItem: "GraphicLegra_Terra_500_K",
    Model3DGroupName: "Legra_Box_Terra_K_500_Left"
  }
  , {
    _id: 25773,
    in_GraphicItem: "GraphicLegra_Terra_500_K",
    Model3DGroupName: "Legra_Box_Terra_K_500_Right"
  }
  , {
    _id: 25774,
    in_GraphicItem: "GraphicLegra_Terra_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25775,
    in_GraphicItem: "GraphicLegra_Terra_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25776,
    in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_500_Left"
  }
  , {
    _id: 25777,
    in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_500_Right"
  }
  , {
    _id: 25778,
    in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25779,
    in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25780,
    in_GraphicItem: "GraphicLegra_Terra_500_M",
    Model3DGroupName: "Legra_Box_Terra_M_500_Left"
  }
  , {
    _id: 25781,
    in_GraphicItem: "GraphicLegra_Terra_500_M",
    Model3DGroupName: "Legra_Box_Terra_M_500_Right"
  }
  , {
    _id: 25782,
    in_GraphicItem: "GraphicLegra_Terra_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25783,
    in_GraphicItem: "GraphicLegra_Terra_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25784,
    in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_500_Left"
  }
  , {
    _id: 25785,
    in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_500_Right"
  }
  , {
    _id: 25786,
    in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25787,
    in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25788,
    in_GraphicItem: "GraphicLegra_Terra_500_N",
    Model3DGroupName: "Legra_Box_Terra_N_500_Left"
  }
  , {
    _id: 25789,
    in_GraphicItem: "GraphicLegra_Terra_500_N",
    Model3DGroupName: "Legra_Box_Terra_N_500_Right"
  }
  , {
    _id: 25790,
    in_GraphicItem: "GraphicLegra_Terra_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25791,
    in_GraphicItem: "GraphicLegra_Terra_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25792,
    in_GraphicItem: "GraphicLegra_Terra_550_C",
    Model3DGroupName: "Legra_Box_Terra_C_550_Left"
  }
  , {
    _id: 25793,
    in_GraphicItem: "GraphicLegra_Terra_550_C",
    Model3DGroupName: "Legra_Box_Terra_C_550_Right"
  }
  , {
    _id: 25794,
    in_GraphicItem: "GraphicLegra_Terra_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25795,
    in_GraphicItem: "GraphicLegra_Terra_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25796,
    in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_550_Left"
  }
  , {
    _id: 25797,
    in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_550_Right"
  }
  , {
    _id: 25798,
    in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25799,
    in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25800,
    in_GraphicItem: "GraphicLegra_Terra_550_F",
    Model3DGroupName: "Legra_Box_Terra_F_550_Left"
  }
  , {
    _id: 25801,
    in_GraphicItem: "GraphicLegra_Terra_550_F",
    Model3DGroupName: "Legra_Box_Terra_F_550_Right"
  }
  , {
    _id: 25802,
    in_GraphicItem: "GraphicLegra_Terra_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25803,
    in_GraphicItem: "GraphicLegra_Terra_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25804,
    in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_550_Left"
  }
  , {
    _id: 25805,
    in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_550_Right"
  }
  , {
    _id: 25806,
    in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25807,
    in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25808,
    in_GraphicItem: "GraphicLegra_Terra_550_K",
    Model3DGroupName: "Legra_Box_Terra_K_550_Left"
  }
  , {
    _id: 25809,
    in_GraphicItem: "GraphicLegra_Terra_550_K",
    Model3DGroupName: "Legra_Box_Terra_K_550_Right"
  }
  , {
    _id: 25810,
    in_GraphicItem: "GraphicLegra_Terra_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25811,
    in_GraphicItem: "GraphicLegra_Terra_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25812,
    in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_550_Left"
  }
  , {
    _id: 25813,
    in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_550_Right"
  }
  , {
    _id: 25814,
    in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25815,
    in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25816,
    in_GraphicItem: "GraphicLegra_Terra_550_M",
    Model3DGroupName: "Legra_Box_Terra_M_550_Left"
  }
  , {
    _id: 25817,
    in_GraphicItem: "GraphicLegra_Terra_550_M",
    Model3DGroupName: "Legra_Box_Terra_M_550_Right"
  }
  , {
    _id: 25818,
    in_GraphicItem: "GraphicLegra_Terra_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25819,
    in_GraphicItem: "GraphicLegra_Terra_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25820,
    in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_550_Left"
  }
  , {
    _id: 25821,
    in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_550_Right"
  }
  , {
    _id: 25822,
    in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25823,
    in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25824,
    in_GraphicItem: "GraphicLegra_Terra_550_N",
    Model3DGroupName: "Legra_Box_Terra_N_550_Left"
  }
  , {
    _id: 25825,
    in_GraphicItem: "GraphicLegra_Terra_550_N",
    Model3DGroupName: "Legra_Box_Terra_N_550_Right"
  }
  , {
    _id: 25826,
    in_GraphicItem: "GraphicLegra_Terra_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25827,
    in_GraphicItem: "GraphicLegra_Terra_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25828,
    in_GraphicItem: "GraphicLegra_Terra_600_C",
    Model3DGroupName: "Legra_Box_Terra_C_600_Left"
  }
  , {
    _id: 25829,
    in_GraphicItem: "GraphicLegra_Terra_600_C",
    Model3DGroupName: "Legra_Box_Terra_C_600_Right"
  }
  , {
    _id: 25830,
    in_GraphicItem: "GraphicLegra_Terra_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25831,
    in_GraphicItem: "GraphicLegra_Terra_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25832,
    in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_600_Left"
  }
  , {
    _id: 25833,
    in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_600_Right"
  }
  , {
    _id: 25834,
    in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25835,
    in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25836,
    in_GraphicItem: "GraphicLegra_Terra_600_F",
    Model3DGroupName: "Legra_Box_Terra_F_600_Left"
  }
  , {
    _id: 25837,
    in_GraphicItem: "GraphicLegra_Terra_600_F",
    Model3DGroupName: "Legra_Box_Terra_F_600_Right"
  }
  , {
    _id: 25838,
    in_GraphicItem: "GraphicLegra_Terra_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25839,
    in_GraphicItem: "GraphicLegra_Terra_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25840,
    in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_600_Left"
  }
  , {
    _id: 25841,
    in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_600_Right"
  }
  , {
    _id: 25842,
    in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25843,
    in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25844,
    in_GraphicItem: "GraphicLegra_Terra_600_K",
    Model3DGroupName: "Legra_Box_Terra_K_600_Left"
  }
  , {
    _id: 25845,
    in_GraphicItem: "GraphicLegra_Terra_600_K",
    Model3DGroupName: "Legra_Box_Terra_K_600_Right"
  }
  , {
    _id: 25846,
    in_GraphicItem: "GraphicLegra_Terra_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25847,
    in_GraphicItem: "GraphicLegra_Terra_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25848,
    in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_600_Left"
  }
  , {
    _id: 25849,
    in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
    Model3DGroupName: "Legra_Box_Terra_K_600_Right"
  }
  , {
    _id: 25850,
    in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25851,
    in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25852,
    in_GraphicItem: "GraphicLegra_Terra_600_M",
    Model3DGroupName: "Legra_Box_Terra_M_600_Left"
  }
  , {
    _id: 25853,
    in_GraphicItem: "GraphicLegra_Terra_600_M",
    Model3DGroupName: "Legra_Box_Terra_M_600_Right"
  }
  , {
    _id: 25854,
    in_GraphicItem: "GraphicLegra_Terra_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25855,
    in_GraphicItem: "GraphicLegra_Terra_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 25856,
    in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_600_Left"
  }
  , {
    _id: 25857,
    in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_600_Right"
  }
  , {
    _id: 25858,
    in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25859,
    in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25860,
    in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_650_Left"
  }
  , {
    _id: 25861,
    in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
    Model3DGroupName: "Legra_Box_Terra_C_650_Right"
  }
  , {
    _id: 25862,
    in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 25863,
    in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 25864,
    in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_650_Left"
  }
  , {
    _id: 25865,
    in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
    Model3DGroupName: "Legra_Box_Terra_F_650_Right"
  }
  , {
    _id: 25866,
    in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 25867,
    in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 25868,
    in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_650_Left"
  }
  , {
    _id: 25869,
    in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
    Model3DGroupName: "Legra_Box_Terra_M_650_Right"
  }
  , {
    _id: 25870,
    in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 25871,
    in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 25872,
    in_GraphicItem: "GraphicLegra_White_270_C",
    Model3DGroupName: "Legra_Box_White_C_270_Left"
  }
  , {
    _id: 25873,
    in_GraphicItem: "GraphicLegra_White_270_C",
    Model3DGroupName: "Legra_Box_White_C_270_Right"
  }
  , {
    _id: 25874,
    in_GraphicItem: "GraphicLegra_White_270_C",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 25875,
    in_GraphicItem: "GraphicLegra_White_270_C",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 25876,
    in_GraphicItem: "GraphicLegra_White_270_M",
    Model3DGroupName: "Legra_Box_White_M_270_Left"
  }
  , {
    _id: 25877,
    in_GraphicItem: "GraphicLegra_White_270_M",
    Model3DGroupName: "Legra_Box_White_M_270_Right"
  }
  , {
    _id: 25878,
    in_GraphicItem: "GraphicLegra_White_270_M",
    Model3DGroupName: "Legra_Slide_270_Left"
  }
  , {
    _id: 25879,
    in_GraphicItem: "GraphicLegra_White_270_M",
    Model3DGroupName: "Legra_Slide_270_Right"
  }
  , {
    _id: 25880,
    in_GraphicItem: "GraphicLegra_White_300_C",
    Model3DGroupName: "Legra_Box_White_C_300_Left"
  }
  , {
    _id: 25881,
    in_GraphicItem: "GraphicLegra_White_300_C",
    Model3DGroupName: "Legra_Box_White_C_300_Right"
  }
  , {
    _id: 25882,
    in_GraphicItem: "GraphicLegra_White_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25883,
    in_GraphicItem: "GraphicLegra_White_300_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25884,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Box_White_K_300_Left"
  }
  , {
    _id: 25885,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Box_White_K_300_Right"
  }
  , {
    _id: 25886,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25887,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25888,
    in_GraphicItem: "GraphicLegra_White_300_M",
    Model3DGroupName: "Legra_Box_White_M_300_Left"
  }
  , {
    _id: 25889,
    in_GraphicItem: "GraphicLegra_White_300_M",
    Model3DGroupName: "Legra_Box_White_M_300_Right"
  }
  , {
    _id: 25890,
    in_GraphicItem: "GraphicLegra_White_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25891,
    in_GraphicItem: "GraphicLegra_White_300_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25892,
    in_GraphicItem: "GraphicLegra_White_350_C",
    Model3DGroupName: "Legra_Box_White_C_350_Left"
  }
  , {
    _id: 25893,
    in_GraphicItem: "GraphicLegra_White_350_C",
    Model3DGroupName: "Legra_Box_White_C_350_Right"
  }
  , {
    _id: 25894,
    in_GraphicItem: "GraphicLegra_White_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25895,
    in_GraphicItem: "GraphicLegra_White_350_C",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25896,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Box_White_K_350_Left"
  }
  , {
    _id: 25897,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Box_White_K_350_Right"
  }
  , {
    _id: 25898,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25899,
    in_GraphicItem: "GraphicLegra_White_350_K",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25900,
    in_GraphicItem: "GraphicLegra_White_350_M",
    Model3DGroupName: "Legra_Box_White_M_350_Left"
  }
  , {
    _id: 25901,
    in_GraphicItem: "GraphicLegra_White_350_M",
    Model3DGroupName: "Legra_Box_White_M_350_Right"
  }
  , {
    _id: 25902,
    in_GraphicItem: "GraphicLegra_White_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Left"
  }
  , {
    _id: 25903,
    in_GraphicItem: "GraphicLegra_White_350_M",
    Model3DGroupName: "Legra_Slide_300_350_Right"
  }
  , {
    _id: 25904,
    in_GraphicItem: "GraphicLegra_White_400_C",
    Model3DGroupName: "Legra_Box_White_C_400_Left"
  }
  , {
    _id: 25905,
    in_GraphicItem: "GraphicLegra_White_400_C",
    Model3DGroupName: "Legra_Box_White_C_400_Right"
  }
  , {
    _id: 25906,
    in_GraphicItem: "GraphicLegra_White_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25907,
    in_GraphicItem: "GraphicLegra_White_400_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25908,
    in_GraphicItem: "GraphicLegra_White_400_F",
    Model3DGroupName: "Legra_Box_White_F_400_Left"
  }
  , {
    _id: 25909,
    in_GraphicItem: "GraphicLegra_White_400_F",
    Model3DGroupName: "Legra_Box_White_F_400_Right"
  }
  , {
    _id: 25910,
    in_GraphicItem: "GraphicLegra_White_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25911,
    in_GraphicItem: "GraphicLegra_White_400_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25912,
    in_GraphicItem: "GraphicLegra_White_400_K",
    Model3DGroupName: "Legra_Box_White_K_400_Left"
  }
  , {
    _id: 25913,
    in_GraphicItem: "GraphicLegra_White_400_K",
    Model3DGroupName: "Legra_Box_White_K_400_Right"
  }
  , {
    _id: 25914,
    in_GraphicItem: "GraphicLegra_White_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25915,
    in_GraphicItem: "GraphicLegra_White_400_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25916,
    in_GraphicItem: "GraphicLegra_White_400_M",
    Model3DGroupName: "Legra_Box_White_M_400_Left"
  }
  , {
    _id: 25917,
    in_GraphicItem: "GraphicLegra_White_400_M",
    Model3DGroupName: "Legra_Box_White_M_400_Right"
  }
  , {
    _id: 25918,
    in_GraphicItem: "GraphicLegra_White_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25919,
    in_GraphicItem: "GraphicLegra_White_400_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25920,
    in_GraphicItem: "GraphicLegra_White_400_N",
    Model3DGroupName: "Legra_Box_White_N_400_Left"
  }
  , {
    _id: 25921,
    in_GraphicItem: "GraphicLegra_White_400_N",
    Model3DGroupName: "Legra_Box_White_N_400_Right"
  }
  , {
    _id: 25922,
    in_GraphicItem: "GraphicLegra_White_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25923,
    in_GraphicItem: "GraphicLegra_White_400_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25924,
    in_GraphicItem: "GraphicLegra_White_450_C",
    Model3DGroupName: "Legra_Box_White_C_450_Left"
  }
  , {
    _id: 25925,
    in_GraphicItem: "GraphicLegra_White_450_C",
    Model3DGroupName: "Legra_Box_White_C_450_Right"
  }
  , {
    _id: 25926,
    in_GraphicItem: "GraphicLegra_White_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25927,
    in_GraphicItem: "GraphicLegra_White_450_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25928,
    in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_450_Left"
  }
  , {
    _id: 25929,
    in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_450_Right"
  }
  , {
    _id: 25930,
    in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25931,
    in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25932,
    in_GraphicItem: "GraphicLegra_White_450_F",
    Model3DGroupName: "Legra_Box_White_F_450_Left"
  }
  , {
    _id: 25933,
    in_GraphicItem: "GraphicLegra_White_450_F",
    Model3DGroupName: "Legra_Box_White_F_450_Right"
  }
  , {
    _id: 25934,
    in_GraphicItem: "GraphicLegra_White_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25935,
    in_GraphicItem: "GraphicLegra_White_450_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25936,
    in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_450_Left"
  }
  , {
    _id: 25937,
    in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_450_Right"
  }
  , {
    _id: 25938,
    in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25939,
    in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25940,
    in_GraphicItem: "GraphicLegra_White_450_K",
    Model3DGroupName: "Legra_Box_White_K_450_Left"
  }
  , {
    _id: 25941,
    in_GraphicItem: "GraphicLegra_White_450_K",
    Model3DGroupName: "Legra_Box_White_K_450_Right"
  }
  , {
    _id: 25942,
    in_GraphicItem: "GraphicLegra_White_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25943,
    in_GraphicItem: "GraphicLegra_White_450_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25944,
    in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_450_Left"
  }
  , {
    _id: 25945,
    in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_450_Right"
  }
  , {
    _id: 25946,
    in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25947,
    in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25948,
    in_GraphicItem: "GraphicLegra_White_450_M",
    Model3DGroupName: "Legra_Box_White_M_450_Left"
  }
  , {
    _id: 25949,
    in_GraphicItem: "GraphicLegra_White_450_M",
    Model3DGroupName: "Legra_Box_White_M_450_Right"
  }
  , {
    _id: 25950,
    in_GraphicItem: "GraphicLegra_White_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25951,
    in_GraphicItem: "GraphicLegra_White_450_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25952,
    in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_450_Left"
  }
  , {
    _id: 25953,
    in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_450_Right"
  }
  , {
    _id: 25954,
    in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Left"
  }
  , {
    _id: 25955,
    in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
    Model3DGroupName: "Legra_Slide_450_H_Right"
  }
  , {
    _id: 25956,
    in_GraphicItem: "GraphicLegra_White_450_N",
    Model3DGroupName: "Legra_Box_White_N_450_Left"
  }
  , {
    _id: 25957,
    in_GraphicItem: "GraphicLegra_White_450_N",
    Model3DGroupName: "Legra_Box_White_N_450_Right"
  }
  , {
    _id: 25958,
    in_GraphicItem: "GraphicLegra_White_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25959,
    in_GraphicItem: "GraphicLegra_White_450_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25960,
    in_GraphicItem: "GraphicLegra_White_500_C",
    Model3DGroupName: "Legra_Box_White_C_500_Left"
  }
  , {
    _id: 25961,
    in_GraphicItem: "GraphicLegra_White_500_C",
    Model3DGroupName: "Legra_Box_White_C_500_Right"
  }
  , {
    _id: 25962,
    in_GraphicItem: "GraphicLegra_White_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25963,
    in_GraphicItem: "GraphicLegra_White_500_C",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25964,
    in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_500_Left"
  }
  , {
    _id: 25965,
    in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_500_Right"
  }
  , {
    _id: 25966,
    in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25967,
    in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25968,
    in_GraphicItem: "GraphicLegra_White_500_F",
    Model3DGroupName: "Legra_Box_White_F_500_Left"
  }
  , {
    _id: 25969,
    in_GraphicItem: "GraphicLegra_White_500_F",
    Model3DGroupName: "Legra_Box_White_F_500_Right"
  }
  , {
    _id: 25970,
    in_GraphicItem: "GraphicLegra_White_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25971,
    in_GraphicItem: "GraphicLegra_White_500_F",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25972,
    in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_500_Left"
  }
  , {
    _id: 25973,
    in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_500_Right"
  }
  , {
    _id: 25974,
    in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25975,
    in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25976,
    in_GraphicItem: "GraphicLegra_White_500_K",
    Model3DGroupName: "Legra_Box_White_K_500_Left"
  }
  , {
    _id: 25977,
    in_GraphicItem: "GraphicLegra_White_500_K",
    Model3DGroupName: "Legra_Box_White_K_500_Right"
  }
  , {
    _id: 25978,
    in_GraphicItem: "GraphicLegra_White_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25979,
    in_GraphicItem: "GraphicLegra_White_500_K",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25980,
    in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_500_Left"
  }
  , {
    _id: 25981,
    in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_500_Right"
  }
  , {
    _id: 25982,
    in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25983,
    in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25984,
    in_GraphicItem: "GraphicLegra_White_500_M",
    Model3DGroupName: "Legra_Box_White_M_500_Left"
  }
  , {
    _id: 25985,
    in_GraphicItem: "GraphicLegra_White_500_M",
    Model3DGroupName: "Legra_Box_White_M_500_Right"
  }
  , {
    _id: 25986,
    in_GraphicItem: "GraphicLegra_White_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25987,
    in_GraphicItem: "GraphicLegra_White_500_M",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25988,
    in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_500_Left"
  }
  , {
    _id: 25989,
    in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_500_Right"
  }
  , {
    _id: 25990,
    in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 25991,
    in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 25992,
    in_GraphicItem: "GraphicLegra_White_500_N",
    Model3DGroupName: "Legra_Box_White_N_500_Left"
  }
  , {
    _id: 25993,
    in_GraphicItem: "GraphicLegra_White_500_N",
    Model3DGroupName: "Legra_Box_White_N_500_Right"
  }
  , {
    _id: 25994,
    in_GraphicItem: "GraphicLegra_White_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Left"
  }
  , {
    _id: 25995,
    in_GraphicItem: "GraphicLegra_White_500_N",
    Model3DGroupName: "Legra_Slide_400_450_500_Right"
  }
  , {
    _id: 25996,
    in_GraphicItem: "GraphicLegra_White_550_C",
    Model3DGroupName: "Legra_Box_White_C_550_Left"
  }
  , {
    _id: 25997,
    in_GraphicItem: "GraphicLegra_White_550_C",
    Model3DGroupName: "Legra_Box_White_C_550_Right"
  }
  , {
    _id: 25998,
    in_GraphicItem: "GraphicLegra_White_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 25999,
    in_GraphicItem: "GraphicLegra_White_550_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 26000,
    in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_550_Left"
  }
  , {
    _id: 26001,
    in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_550_Right"
  }
  , {
    _id: 26002,
    in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 26003,
    in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 26004,
    in_GraphicItem: "GraphicLegra_White_550_F",
    Model3DGroupName: "Legra_Box_White_F_550_Left"
  }
  , {
    _id: 26005,
    in_GraphicItem: "GraphicLegra_White_550_F",
    Model3DGroupName: "Legra_Box_White_F_550_Right"
  }
  , {
    _id: 26006,
    in_GraphicItem: "GraphicLegra_White_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 26007,
    in_GraphicItem: "GraphicLegra_White_550_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 26008,
    in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_550_Left"
  }
  , {
    _id: 26009,
    in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_550_Right"
  }
  , {
    _id: 26010,
    in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 26011,
    in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 26012,
    in_GraphicItem: "GraphicLegra_White_550_K",
    Model3DGroupName: "Legra_Box_White_K_550_Left"
  }
  , {
    _id: 26013,
    in_GraphicItem: "GraphicLegra_White_550_K",
    Model3DGroupName: "Legra_Box_White_K_550_Right"
  }
  , {
    _id: 26014,
    in_GraphicItem: "GraphicLegra_White_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 26015,
    in_GraphicItem: "GraphicLegra_White_550_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 26016,
    in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_550_Left"
  }
  , {
    _id: 26017,
    in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_550_Right"
  }
  , {
    _id: 26018,
    in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 26019,
    in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 26020,
    in_GraphicItem: "GraphicLegra_White_550_M",
    Model3DGroupName: "Legra_Box_White_M_550_Left"
  }
  , {
    _id: 26021,
    in_GraphicItem: "GraphicLegra_White_550_M",
    Model3DGroupName: "Legra_Box_White_M_550_Right"
  }
  , {
    _id: 26022,
    in_GraphicItem: "GraphicLegra_White_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 26023,
    in_GraphicItem: "GraphicLegra_White_550_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 26024,
    in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_550_Left"
  }
  , {
    _id: 26025,
    in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_550_Right"
  }
  , {
    _id: 26026,
    in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 26027,
    in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 26028,
    in_GraphicItem: "GraphicLegra_White_550_N",
    Model3DGroupName: "Legra_Box_White_N_550_Left"
  }
  , {
    _id: 26029,
    in_GraphicItem: "GraphicLegra_White_550_N",
    Model3DGroupName: "Legra_Box_White_N_550_Right"
  }
  , {
    _id: 26030,
    in_GraphicItem: "GraphicLegra_White_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 26031,
    in_GraphicItem: "GraphicLegra_White_550_N",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 26032,
    in_GraphicItem: "GraphicLegra_White_600_C",
    Model3DGroupName: "Legra_Box_White_C_600_Left"
  }
  , {
    _id: 26033,
    in_GraphicItem: "GraphicLegra_White_600_C",
    Model3DGroupName: "Legra_Box_White_C_600_Right"
  }
  , {
    _id: 26034,
    in_GraphicItem: "GraphicLegra_White_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 26035,
    in_GraphicItem: "GraphicLegra_White_600_C",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 26036,
    in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_600_Left"
  }
  , {
    _id: 26037,
    in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_600_Right"
  }
  , {
    _id: 26038,
    in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 26039,
    in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 26040,
    in_GraphicItem: "GraphicLegra_White_600_F",
    Model3DGroupName: "Legra_Box_White_F_600_Left"
  }
  , {
    _id: 26041,
    in_GraphicItem: "GraphicLegra_White_600_F",
    Model3DGroupName: "Legra_Box_White_F_600_Right"
  }
  , {
    _id: 26042,
    in_GraphicItem: "GraphicLegra_White_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 26043,
    in_GraphicItem: "GraphicLegra_White_600_F",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 26044,
    in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_600_Left"
  }
  , {
    _id: 26045,
    in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_600_Right"
  }
  , {
    _id: 26046,
    in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 26047,
    in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 26048,
    in_GraphicItem: "GraphicLegra_White_600_K",
    Model3DGroupName: "Legra_Box_White_K_600_Left"
  }
  , {
    _id: 26049,
    in_GraphicItem: "GraphicLegra_White_600_K",
    Model3DGroupName: "Legra_Box_White_K_600_Right"
  }
  , {
    _id: 26050,
    in_GraphicItem: "GraphicLegra_White_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 26051,
    in_GraphicItem: "GraphicLegra_White_600_K",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 26052,
    in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_600_Left"
  }
  , {
    _id: 26053,
    in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
    Model3DGroupName: "Legra_Box_White_K_600_Right"
  }
  , {
    _id: 26054,
    in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 26055,
    in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 26056,
    in_GraphicItem: "GraphicLegra_White_600_M",
    Model3DGroupName: "Legra_Box_White_M_600_Left"
  }
  , {
    _id: 26057,
    in_GraphicItem: "GraphicLegra_White_600_M",
    Model3DGroupName: "Legra_Box_White_M_600_Right"
  }
  , {
    _id: 26058,
    in_GraphicItem: "GraphicLegra_White_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Left"
  }
  , {
    _id: 26059,
    in_GraphicItem: "GraphicLegra_White_600_M",
    Model3DGroupName: "Legra_Slide_550_600_Right"
  }
  , {
    _id: 26060,
    in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_600_Left"
  }
  , {
    _id: 26061,
    in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_600_Right"
  }
  , {
    _id: 26062,
    in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
  }
  , {
    _id: 26063,
    in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
    Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
  }
  , {
    _id: 26064,
    in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_650_Left"
  }
  , {
    _id: 26065,
    in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
    Model3DGroupName: "Legra_Box_White_C_650_Right"
  }
  , {
    _id: 26066,
    in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 26067,
    in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 26068,
    in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_650_Left"
  }
  , {
    _id: 26069,
    in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
    Model3DGroupName: "Legra_Box_White_F_650_Right"
  }
  , {
    _id: 26070,
    in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 26071,
    in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 26072,
    in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_650_Left"
  }
  , {
    _id: 26073,
    in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
    Model3DGroupName: "Legra_Box_White_M_650_Right"
  }
  , {
    _id: 26074,
    in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Left"
  }
  , {
    _id: 26075,
    in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
    Model3DGroupName: "Legra_Slide_650_H_Right"
  }
  , {
    _id: 26076,
    in_GraphicItem: "Graphic_DH100_Black_160",
    Model3DGroupName: "Model3d_DH100_Black_160"
  }
  , {
    _id: 26077,
    in_GraphicItem: "Graphic_DH100_Black_320",
    Model3DGroupName: "Model3d_DH100_Black_320"
  }
  , {
    _id: 26078,
    in_GraphicItem: "Graphic_DH100_Black_64",
    Model3DGroupName: "Model3d_DH100_Black_64"
  }
  , {
    _id: 26079,
    in_GraphicItem: "Graphic_DH100_NickelPlated_160",
    Model3DGroupName: "Model3d_DH100_NickelPlated_160"
  }
  , {
    _id: 26080,
    in_GraphicItem: "Graphic_DH100_NickelPlated_320",
    Model3DGroupName: "Model3d_DH100_NickelPlated_320"
  }
  , {
    _id: 26081,
    in_GraphicItem: "Graphic_DH100_NickelPlated_64",
    Model3DGroupName: "Model3d_DH100_NickelPlated_64"
  }
  , {
    _id: 26082,
    in_GraphicItem: "Graphic_DH100_Tin_160",
    Model3DGroupName: "Model3d_DH100_Tin_160"
  }
  , {
    _id: 26083,
    in_GraphicItem: "Graphic_DH100_Tin_320",
    Model3DGroupName: "Model3d_DH100_Tin_320"
  }
  , {
    _id: 26084,
    in_GraphicItem: "Graphic_DH100_Tin_64",
    Model3DGroupName: "Model3d_DH100_Tin_64"
  }
  , {
    _id: 26085,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1060",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1060"
  }
  , {
    _id: 26086,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1160",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1160"
  }
  , {
    _id: 26087,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1260",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1260"
  }
  , {
    _id: 26088,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_128",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_128"
  }
  , {
    _id: 26089,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1360",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1360"
  }
  , {
    _id: 26090,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1460",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1460"
  }
  , {
    _id: 26091,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1560",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1560"
  }
  , {
    _id: 26092,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_160",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_160"
  }
  , {
    _id: 26093,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1760",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1760"
  }
  , {
    _id: 26094,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_1960",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_1960"
  }
  , {
    _id: 26095,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_210",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_210"
  }
  , {
    _id: 26096,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_260",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_260"
  }
  , {
    _id: 26097,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_310",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_310"
  }
  , {
    _id: 26098,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_360",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_360"
  }
  , {
    _id: 26099,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_410",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_410"
  }
  , {
    _id: 26100,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_460",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_460"
  }
  , {
    _id: 26101,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_560",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_560"
  }
  , {
    _id: 26102,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_660",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_660"
  }
  , {
    _id: 26103,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_760",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_760"
  }
  , {
    _id: 26104,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_860",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_860"
  }
  , {
    _id: 26105,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_96",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_96"
  }
  , {
    _id: 26106,
    in_GraphicItem: "Graphic_DH110_StainlessSteel_960",
    Model3DGroupName: "Model3d_DH110_StainlessSteel_960"
  }
  , {
    _id: 26107,
    in_GraphicItem: "Graphic_DH120_Black",
    Model3DGroupName: "Model3d_DH120_Black"
  }
  , {
    _id: 26108,
    in_GraphicItem: "Graphic_DH120_StainlessSteel",
    Model3DGroupName: "Model3d_DH120_StainlessSteel"
  }
  , {
    _id: 26109,
    in_GraphicItem: "Graphic_DH130_Black",
    Model3DGroupName: "Model3d_DH130_Black"
  }
  , {
    _id: 26110,
    in_GraphicItem: "Graphic_DH130_BrassPlatedAntique",
    Model3DGroupName: "Model3d_DH130_BrassPlatedAntique"
  }
  , {
    _id: 26111,
    in_GraphicItem: "Graphic_DH130_StainlessSteel",
    Model3DGroupName: "Model3d_DH130_StainlessSteel"
  }
  , {
    _id: 26112,
    in_GraphicItem: "Graphic_BH_128",
    Model3DGroupName: "Model3d_BH_128"
  }
  , {
    _id: 26113,
    in_GraphicItem: "Graphic_BH_160",
    Model3DGroupName: "Model3d_BH_160"
  }
  , {
    _id: 26114,
    in_GraphicItem: "Graphic_BH_192",
    Model3DGroupName: "Model3d_BH_192"
  }
  , {
    _id: 26115,
    in_GraphicItem: "Graphic_BH_224",
    Model3DGroupName: "Model3d_BH_224"
  }
  , {
    _id: 26116,
    in_GraphicItem: "Graphic_BH_288",
    Model3DGroupName: "Model3d_BH_288"
  }
  , {
    _id: 26117,
    in_GraphicItem: "Graphic_BH_320",
    Model3DGroupName: "Model3d_BH_320"
  }
  , {
    _id: 26118,
    in_GraphicItem: "Graphic_BH_352",
    Model3DGroupName: "Model3d_BH_352"
  }
  , {
    _id: 26119,
    in_GraphicItem: "Graphic_BH_448",
    Model3DGroupName: "Model3d_BH_448"
  }
  , {
    _id: 26120,
    in_GraphicItem: "Graphic_BH_480",
    Model3DGroupName: "Model3d_BH_480"
  }
  , {
    _id: 26121,
    in_GraphicItem: "Graphic_BH_560",
    Model3DGroupName: "Model3d_BH_560"
  }
  , {
    _id: 26122,
    in_GraphicItem: "Graphic_BH_640",
    Model3DGroupName: "Model3d_BH_640"
  }
  , {
    _id: 26123,
    in_GraphicItem: "Graphic_BH_96",
    Model3DGroupName: "Model3d_BH_96"
  }
  , {
    _id: 26124,
    in_GraphicItem: "Graphic_BH_960",
    Model3DGroupName: "Model3d_BH_960"
  }
  , {
    _id: 26125,
    in_GraphicItem: "Graphic_DH60_Black_128",
    Model3DGroupName: "Model3d_DH60_Black_128"
  }
  , {
    _id: 26126,
    in_GraphicItem: "Graphic_DH60_Black_160",
    Model3DGroupName: "Model3d_DH60_Black_160"
  }
  , {
    _id: 26127,
    in_GraphicItem: "Graphic_DH60_BrassPlatedAntique_128",
    Model3DGroupName: "Model3d_DH60_BrassPlatedAntique_128"
  }
  , {
    _id: 26128,
    in_GraphicItem: "Graphic_DH60_BrassPlatedAntique_160",
    Model3DGroupName: "Model3d_DH60_BrassPlatedAntique_160"
  }
  , {
    _id: 26129,
    in_GraphicItem: "Graphic_DH60_ChromedPolished_128",
    Model3DGroupName: "Model3d_DH60_ChromedPolished_128"
  }
  , {
    _id: 26130,
    in_GraphicItem: "Graphic_DH60_ChromedPolished_160",
    Model3DGroupName: "Model3d_DH60_ChromedPolished_160"
  }
  , {
    _id: 26131,
    in_GraphicItem: "Graphic_DH60_NickelPlated_128",
    Model3DGroupName: "Model3d_DH60_NickelPlated_128"
  }
  , {
    _id: 26132,
    in_GraphicItem: "Graphic_DH60_NickelPlated_160",
    Model3DGroupName: "Model3d_DH60_NickelPlated_160"
  }
  , {
    _id: 26133,
    in_GraphicItem: "Graphic_RH_128",
    Model3DGroupName: "Model3d_RH_128"
  }
  , {
    _id: 26134,
    in_GraphicItem: "Graphic_RH_160",
    Model3DGroupName: "Model3d_RH_160"
  }
  , {
    _id: 26135,
    in_GraphicItem: "Graphic_RH_192",
    Model3DGroupName: "Model3d_RH_192"
  }
  , {
    _id: 26136,
    in_GraphicItem: "Graphic_RH_224",
    Model3DGroupName: "Model3d_RH_224"
  }
  , {
    _id: 26137,
    in_GraphicItem: "Graphic_RH_288",
    Model3DGroupName: "Model3d_RH_288"
  }
  , {
    _id: 26138,
    in_GraphicItem: "Graphic_RH_320",
    Model3DGroupName: "Model3d_RH_320"
  }
  , {
    _id: 26139,
    in_GraphicItem: "Graphic_RH_352",
    Model3DGroupName: "Model3d_RH_352"
  }
  , {
    _id: 26140,
    in_GraphicItem: "Graphic_RH_448",
    Model3DGroupName: "Model3d_RH_448"
  }
  , {
    _id: 26141,
    in_GraphicItem: "Graphic_RH_560",
    Model3DGroupName: "Model3d_RH_560"
  }
  , {
    _id: 26142,
    in_GraphicItem: "Graphic_RH_660",
    Model3DGroupName: "Model3d_RH_660"
  }
  , {
    _id: 26143,
    in_GraphicItem: "Graphic_RH_760",
    Model3DGroupName: "Model3d_RH_760"
  }
  , {
    _id: 26144,
    in_GraphicItem: "Graphic_RH_96",
    Model3DGroupName: "Model3d_RH_96"
  }
  , {
    _id: 26145,
    in_GraphicItem: "DispensaClassic16030",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26146,
    in_GraphicItem: "DispensaClassic16030",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26147,
    in_GraphicItem: "DispensaClassic16030",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 26148,
    in_GraphicItem: "DispensaClassic16030",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 26149,
    in_GraphicItem: "DispensaClassic16030",
    Model3DGroupName: "Dispensa160_Grey"
  }
  , {
    _id: 26150,
    in_GraphicItem: "DispensaClassic19030",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26151,
    in_GraphicItem: "DispensaClassic19030",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26152,
    in_GraphicItem: "DispensaClassic19030",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 26153,
    in_GraphicItem: "DispensaClassic19030",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 26154,
    in_GraphicItem: "DispensaClassic19030",
    Model3DGroupName: "Dispensa190_Grey"
  }
  , {
    _id: 26155,
    in_GraphicItem: "DispensaClassic23030",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26156,
    in_GraphicItem: "DispensaClassic23030",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26157,
    in_GraphicItem: "DispensaClassic23030",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 26158,
    in_GraphicItem: "DispensaClassic23030",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 26159,
    in_GraphicItem: "DispensaClassic23030",
    Model3DGroupName: "Dispensa230_Grey"
  }
  , {
    _id: 26160,
    in_GraphicItem: "DispensaClassic16040",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26161,
    in_GraphicItem: "DispensaClassic16040",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26162,
    in_GraphicItem: "DispensaClassic16040",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 26163,
    in_GraphicItem: "DispensaClassic16040",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 26164,
    in_GraphicItem: "DispensaClassic16040",
    Model3DGroupName: "Dispensa160_Grey"
  }
  , {
    _id: 26165,
    in_GraphicItem: "DispensaClassic19040",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26166,
    in_GraphicItem: "DispensaClassic19040",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26167,
    in_GraphicItem: "DispensaClassic19040",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 26168,
    in_GraphicItem: "DispensaClassic19040",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 26169,
    in_GraphicItem: "DispensaClassic19040",
    Model3DGroupName: "Dispensa190_Grey"
  }
  , {
    _id: 26170,
    in_GraphicItem: "DispensaClassic23040",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26171,
    in_GraphicItem: "DispensaClassic23040",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26172,
    in_GraphicItem: "DispensaClassic23040",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 26173,
    in_GraphicItem: "DispensaClassic23040",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 26174,
    in_GraphicItem: "DispensaClassic23040",
    Model3DGroupName: "Dispensa230_Grey"
  }
  , {
    _id: 26175,
    in_GraphicItem: "DispensaStyle16030_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26176,
    in_GraphicItem: "DispensaStyle16030_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26177,
    in_GraphicItem: "DispensaStyle16030_Grey",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 26178,
    in_GraphicItem: "DispensaStyle16030_Grey",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 26179,
    in_GraphicItem: "DispensaStyle16030_Grey",
    Model3DGroupName: "Dispensa160_Grey"
  }
  , {
    _id: 26180,
    in_GraphicItem: "DispensaStyle19030_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26181,
    in_GraphicItem: "DispensaStyle19030_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26182,
    in_GraphicItem: "DispensaStyle19030_Grey",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 26183,
    in_GraphicItem: "DispensaStyle19030_Grey",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 26184,
    in_GraphicItem: "DispensaStyle19030_Grey",
    Model3DGroupName: "Dispensa190_Grey"
  }
  , {
    _id: 26185,
    in_GraphicItem: "DispensaStyle23030_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26186,
    in_GraphicItem: "DispensaStyle23030_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26187,
    in_GraphicItem: "DispensaStyle23030_Grey",
    Model3DGroupName: "Dispensa30ConTop_Grey"
  }
  , {
    _id: 26188,
    in_GraphicItem: "DispensaStyle23030_Grey",
    Model3DGroupName: "Dispensa30ConBtm_Grey"
  }
  , {
    _id: 26189,
    in_GraphicItem: "DispensaStyle23030_Grey",
    Model3DGroupName: "Dispensa230_Grey"
  }
  , {
    _id: 26190,
    in_GraphicItem: "DispensaStyle16040_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26191,
    in_GraphicItem: "DispensaStyle16040_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26192,
    in_GraphicItem: "DispensaStyle16040_Grey",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 26193,
    in_GraphicItem: "DispensaStyle16040_Grey",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 26194,
    in_GraphicItem: "DispensaStyle16040_Grey",
    Model3DGroupName: "Dispensa160_Grey"
  }
  , {
    _id: 26195,
    in_GraphicItem: "DispensaStyle19040_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26196,
    in_GraphicItem: "DispensaStyle19040_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26197,
    in_GraphicItem: "DispensaStyle19040_Grey",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 26198,
    in_GraphicItem: "DispensaStyle19040_Grey",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 26199,
    in_GraphicItem: "DispensaStyle19040_Grey",
    Model3DGroupName: "Dispensa190_Grey"
  }
  , {
    _id: 26200,
    in_GraphicItem: "DispensaStyle23040_Grey",
    Model3DGroupName: "DispensaSlideBtm_Grey"
  }
  , {
    _id: 26201,
    in_GraphicItem: "DispensaStyle23040_Grey",
    Model3DGroupName: "DispensaSlideTop_Grey"
  }
  , {
    _id: 26202,
    in_GraphicItem: "DispensaStyle23040_Grey",
    Model3DGroupName: "Dispensa40ConTop_Grey"
  }
  , {
    _id: 26203,
    in_GraphicItem: "DispensaStyle23040_Grey",
    Model3DGroupName: "Dispensa40ConBtm_Grey"
  }
  , {
    _id: 26204,
    in_GraphicItem: "DispensaStyle23040_Grey",
    Model3DGroupName: "Dispensa230_Grey"
  }
  , {
    _id: 26205,
    in_GraphicItem: "DispensaStyle16030_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 26206,
    in_GraphicItem: "DispensaStyle16030_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 26207,
    in_GraphicItem: "DispensaStyle16030_Anthrazit",
    Model3DGroupName: "Dispensa30ConTop_Anthrazit"
  }
  , {
    _id: 26208,
    in_GraphicItem: "DispensaStyle16030_Anthrazit",
    Model3DGroupName: "Dispensa30ConBtm_Anthrazit"
  }
  , {
    _id: 26209,
    in_GraphicItem: "DispensaStyle16030_Anthrazit",
    Model3DGroupName: "Dispensa160_Anthrazit"
  }
  , {
    _id: 26210,
    in_GraphicItem: "DispensaStyle19030_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 26211,
    in_GraphicItem: "DispensaStyle19030_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 26212,
    in_GraphicItem: "DispensaStyle19030_Anthrazit",
    Model3DGroupName: "Dispensa30ConTop_Anthrazit"
  }
  , {
    _id: 26213,
    in_GraphicItem: "DispensaStyle19030_Anthrazit",
    Model3DGroupName: "Dispensa30ConBtm_Anthrazit"
  }
  , {
    _id: 26214,
    in_GraphicItem: "DispensaStyle19030_Anthrazit",
    Model3DGroupName: "Dispensa190_Anthrazit"
  }
  , {
    _id: 26215,
    in_GraphicItem: "DispensaStyle23030_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 26216,
    in_GraphicItem: "DispensaStyle23030_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 26217,
    in_GraphicItem: "DispensaStyle23030_Anthrazit",
    Model3DGroupName: "Dispensa30ConTop_Anthrazit"
  }
  , {
    _id: 26218,
    in_GraphicItem: "DispensaStyle23030_Anthrazit",
    Model3DGroupName: "Dispensa30ConBtm_Anthrazit"
  }
  , {
    _id: 26219,
    in_GraphicItem: "DispensaStyle23030_Anthrazit",
    Model3DGroupName: "Dispensa230_Anthrazit"
  }
  , {
    _id: 26220,
    in_GraphicItem: "DispensaStyle16040_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 26221,
    in_GraphicItem: "DispensaStyle16040_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 26222,
    in_GraphicItem: "DispensaStyle16040_Anthrazit",
    Model3DGroupName: "Dispensa40ConTop_Anthrazit"
  }
  , {
    _id: 26223,
    in_GraphicItem: "DispensaStyle16040_Anthrazit",
    Model3DGroupName: "Dispensa40ConBtm_Anthrazit"
  }
  , {
    _id: 26224,
    in_GraphicItem: "DispensaStyle16040_Anthrazit",
    Model3DGroupName: "Dispensa160_Anthrazit"
  }
  , {
    _id: 26225,
    in_GraphicItem: "DispensaStyle19040_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 26226,
    in_GraphicItem: "DispensaStyle19040_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 26227,
    in_GraphicItem: "DispensaStyle19040_Anthrazit",
    Model3DGroupName: "Dispensa40ConTop_Anthrazit"
  }
  , {
    _id: 26228,
    in_GraphicItem: "DispensaStyle19040_Anthrazit",
    Model3DGroupName: "Dispensa40ConBtm_Anthrazit"
  }
  , {
    _id: 26229,
    in_GraphicItem: "DispensaStyle19040_Anthrazit",
    Model3DGroupName: "Dispensa190_Anthrazit"
  }
  , {
    _id: 26230,
    in_GraphicItem: "DispensaStyle23040_Anthrazit",
    Model3DGroupName: "DispensaSlideBtm_Anthrazit"
  }
  , {
    _id: 26231,
    in_GraphicItem: "DispensaStyle23040_Anthrazit",
    Model3DGroupName: "DispensaSlideTop_Anthrazit"
  }
  , {
    _id: 26232,
    in_GraphicItem: "DispensaStyle23040_Anthrazit",
    Model3DGroupName: "Dispensa40ConTop_Anthrazit"
  }
  , {
    _id: 26233,
    in_GraphicItem: "DispensaStyle23040_Anthrazit",
    Model3DGroupName: "Dispensa40ConBtm_Anthrazit"
  }
  , {
    _id: 26234,
    in_GraphicItem: "DispensaStyle23040_Anthrazit",
    Model3DGroupName: "Dispensa230_Anthrazit"
  }
  , {
    _id: 26235,
    in_GraphicItem: "DispensaClassic30",
    Model3DGroupName: "DispensaClassic30"
  }
  , {
    _id: 26236,
    in_GraphicItem: "DispensaClassic40",
    Model3DGroupName: "DispensaClassic40"
  }
  , {
    _id: 26237,
    in_GraphicItem: "DispensaStyle30_Grey",
    Model3DGroupName: "DispensaStyle30_Grey"
  }
  , {
    _id: 26238,
    in_GraphicItem: "DispensaStyle40_Grey",
    Model3DGroupName: "DispensaStyle40_Grey"
  }
  , {
    _id: 26239,
    in_GraphicItem: "DispensaStyle30_Anthrazit",
    Model3DGroupName: "DispensaStyle30_Anthrazit"
  }
  , {
    _id: 26240,
    in_GraphicItem: "DispensaStyle40_Anthrazit",
    Model3DGroupName: "DispensaStyle40_Anthrazit"
  }
  , {
    _id: 26241,
    in_GraphicItem: "Graphic_No15_Classic_Silver_Right",
    Model3DGroupName: "No15_Classic_Silver_Right_Basket"
  }
  , {
    _id: 26242,
    in_GraphicItem: "Graphic_No15_Classic_Silver_Right",
    Model3DGroupName: "No15_Classic_Silver_Right_Slides"
  }
  , {
    _id: 26243,
    in_GraphicItem: "Graphic_No15_Classic_Anthrazit_Right",
    Model3DGroupName: "No15_Classic_Anthrazit_Right_Basket"
  }
  , {
    _id: 26244,
    in_GraphicItem: "Graphic_No15_Classic_Anthrazit_Right",
    Model3DGroupName: "No15_Classic_Anthrazit_Right_Slides"
  }
  , {
    _id: 26245,
    in_GraphicItem: "Graphic_No15_Classic_Silver_Left",
    Model3DGroupName: "No15_Classic_Silver_Left_Basket"
  }
  , {
    _id: 26246,
    in_GraphicItem: "Graphic_No15_Classic_Silver_Left",
    Model3DGroupName: "No15_Classic_Silver_Left_Slides"
  }
  , {
    _id: 26247,
    in_GraphicItem: "Graphic_No15_Classic_Anthrazit_Left",
    Model3DGroupName: "No15_Classic_Anthrazit_Left_Basket"
  }
  , {
    _id: 26248,
    in_GraphicItem: "Graphic_No15_Classic_Anthrazit_Left",
    Model3DGroupName: "No15_Classic_Anthrazit_Left_Slides"
  }
  , {
    _id: 26249,
    in_GraphicItem: "Graphic_No15_Style_Silver_Right",
    Model3DGroupName: "No15_Style_Silver_Right_Basket"
  }
  , {
    _id: 26250,
    in_GraphicItem: "Graphic_No15_Style_Silver_Right",
    Model3DGroupName: "No15_Style_Silver_Right_Slides"
  }
  , {
    _id: 26251,
    in_GraphicItem: "Graphic_No15_Style_Anthrazit_Right",
    Model3DGroupName: "No15_Style_Anthrazit_Right_Basket"
  }
  , {
    _id: 26252,
    in_GraphicItem: "Graphic_No15_Style_Anthrazit_Right",
    Model3DGroupName: "No15_Style_Anthrazit_Right_Slides"
  }
  , {
    _id: 26253,
    in_GraphicItem: "Graphic_No15_Style_Silver_Left",
    Model3DGroupName: "No15_Style_Silver_Left_Basket"
  }
  , {
    _id: 26254,
    in_GraphicItem: "Graphic_No15_Style_Silver_Left",
    Model3DGroupName: "No15_Style_Silver_Left_Slides"
  }
  , {
    _id: 26255,
    in_GraphicItem: "Graphic_No15_Style_Anthrazit_Left",
    Model3DGroupName: "No15_Style_Anthrazit_Left_Basket"
  }
  , {
    _id: 26256,
    in_GraphicItem: "Graphic_No15_Style_Anthrazit_Left",
    Model3DGroupName: "No15_Style_Anthrazit_Left_Slides"
  }
  , {
    _id: 26257,
    in_GraphicItem: "GraphicConero445",
    Model3DGroupName: "Model3DConero625"
  }
  , {
    _id: 26258,
    in_GraphicItem: "GraphicConero625",
    Model3DGroupName: "Model3DConero625"
  }
  , {
    _id: 26259,
    in_GraphicItem: "GraphicConero805",
    Model3DGroupName: "Model3DConero625"
  }
  , {
    _id: 26260,
    in_GraphicItem: "GraphicConero985",
    Model3DGroupName: "Model3DConero625"
  }
  , {
    _id: 26261,
    in_GraphicItem: "GraphicConero72H",
    Model3DGroupName: "Model3DConero72H"
  }
  , {
    _id: 26262,
    in_GraphicItem: "GraphicConeroRigid_Right",
    Model3DGroupName: "Model3DConeroRigid_Right"
  }
  , {
    _id: 26263,
    in_GraphicItem: "GraphicConeroRigid_Left",
    Model3DGroupName: "Model3DConeroRigid_Left"
  }
  , {
    _id: 26264,
    in_GraphicItem: "Handle_140_StainlessSteel",
    Model3DGroupName: "Handle_140_StainlessSteel"
  }
  , {
    _id: 26265,
    in_GraphicItem: "Handle_140_Black",
    Model3DGroupName: "Handle_140_Black"
  }
];
