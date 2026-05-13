import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars, internal_enterModulePrepareContext, internal_leaveModulePrepareContext } from './logging'
import { OD_Base, OD_Base_NotFound } from './base'
import { OD_M_mc_FrontPanel01 } from './modules/mc_FrontPanel01'
import { OD_M_mc_Drawer01 } from './modules/mc_Drawer01'
import { OD_M_mc_Handle01 } from './modules/mc_Handle01'
import { OD_M_mc_DrawerBox01 } from './modules/mc_DrawerBox01'
import { OD_M_mc_Hinge01 } from './modules/mc_Hinge01'
import { OD_M_mc_Leg01 } from './modules/mc_Leg01'
import { OD_M_mr_Paneltop } from './modules/mr_Paneltop'
import { OD_M_mc_Panel01 } from './modules/mc_Panel01'
import { OD_M_mf_Drawer } from './modules/mf_Drawer'
import { OD_M_mc_PlinthArea01 } from './modules/mc_PlinthArea01'
import { OD_M_mr_StorageunitSingle } from './modules/mr_StorageunitSingle'
import { OD_M_mc_FrontPanelGlass01 } from './modules/mc_FrontPanelGlass01'
import { OD_M_mc_LightSystem01 } from './modules/mc_LightSystem01'
import { OD_M_mc_HangerSystem01 } from './modules/mc_HangerSystem01'
import { OD_M_mf_Fliplift } from './modules/mf_Fliplift'
import { OD_M_mc_Fliplift01 } from './modules/mc_Fliplift01'
import { OD_M_mf_Door } from './modules/mf_Door'
import { OD_M_mc_Door01 } from './modules/mc_Door01'
import { OD_M_mr_CornerunitStraight } from './modules/mr_CornerunitStraight'
import { OD_M_mc_ShelfadjGroup01 } from './modules/mc_ShelfadjGroup01'
import { OD_M_mc_ShelfadjWood01 } from './modules/mc_ShelfadjWood01'
import { OD_M_mc_ShelfadjGlass01 } from './modules/mc_ShelfadjGlass01'
import { OD_M_mc_ShelfadjDrill01 } from './modules/mc_ShelfadjDrill01'
import { OD_M_mc_ThermoformedPanel01 } from './modules/mc_ThermoformedPanel01'
import { OD_M_mc_MetalFrame01 } from './modules/mc_MetalFrame01'
import { OD_M_mc_Storageunit01 } from './modules/mc_Storageunit01'
import { OD_M_mc_Handlestrip01 } from './modules/mc_Handlestrip01'
import { OD_M_mc_StorageunitSidepanel01 } from './modules/mc_StorageunitSidepanel01'
import { OD_M_mc_StorageunitShelfbtm01 } from './modules/mc_StorageunitShelfbtm01'
import { OD_M_mc_StorageunitShelftop01 } from './modules/mc_StorageunitShelftop01'
import { OD_M_mc_StorageunitBackwall01 } from './modules/mc_StorageunitBackwall01'
import { OD_M_mc_StorageunitShelffixed01 } from './modules/mc_StorageunitShelffixed01'
import { OD_M_mc_CleatVert01 } from './modules/mc_CleatVert01'
import { OD_M_mc_Panelblind01 } from './modules/mc_Panelblind01'
import { OD_M_mc_CornerunitStraight01 } from './modules/mc_CornerunitStraight01'
import { OD_M_mc_ShelfadjFitting01 } from './modules/mc_ShelfadjFitting01'
import { OD_M_mf_Oven } from './modules/mf_Oven'
import { OD_M_mc_Oven01 } from './modules/mc_Oven01'
import { OD_M_mf_Fridge } from './modules/mf_Fridge'
import { OD_M_mf_RackArea } from './modules/mf_RackArea'
import { OD_M_mc_RackArea01 } from './modules/mc_RackArea01'
import { OD_M_mc_ShelffixedGroup01 } from './modules/mc_ShelffixedGroup01'
import { OD_M_mc_VertDivider01 } from './modules/mc_VertDivider01'
import { OD_M_mc_Duststrip01 } from './modules/mc_Duststrip01'
import { OD_M_mr_Upright } from './modules/mr_Upright'
import { OD_M_mc_Upright01 } from './modules/mc_Upright01'
import { OD_M_mr_Countertop } from './modules/mr_Countertop'
import { OD_M_mc_Countertop01 } from './modules/mc_Countertop01'
import { OD_M_mr_Backsplash } from './modules/mr_Backsplash'
import { OD_M_mc_Backsplash } from './modules/mc_Backsplash'
import { OD_M_mr_Toekick } from './modules/mr_Toekick'
import { OD_M_mc_Toekick } from './modules/mc_Toekick'
import { OD_M_mc_Pushtoopen01 } from './modules/mc_Pushtoopen01'
import { OD_M_mc_PanelWoodFrame01 } from './modules/mc_PanelWoodFrame01'
import { OD_M_mc_HingeGroup01 } from './modules/mc_HingeGroup01'
import { OD_M_mc_FlipliftHardware01 } from './modules/mc_FlipliftHardware01'
import { OD_M_mr_Fingergrip } from './modules/mr_Fingergrip'
import { OD_M_mf_Fixedfront } from './modules/mf_Fixedfront'
import { OD_M_mc_Fixedfront01 } from './modules/mc_Fixedfront01'
import { OD_M_mc_StorageunitShelftop02 } from './modules/mc_StorageunitShelftop02'
import { OD_M_mc_StorageunitShelftop03 } from './modules/mc_StorageunitShelftop03'
import { OD_M_mc_StorageunitShelftop04 } from './modules/mc_StorageunitShelftop04'
import { OD_M_mc_Fingergrip01 } from './modules/mc_Fingergrip01'
import { OD_M_mc_Fridge01 } from './modules/mc_Fridge01'
import { OD_M_mc_ApplianceGraphic } from './modules/mc_ApplianceGraphic'
import { OD_M_mr_Hood } from './modules/mr_Hood'
import { OD_M_mc_Paneltop01 } from './modules/mc_Paneltop01'
import { OD_M_mf_Hob } from './modules/mf_Hob'
import { OD_M_mc_Hob01 } from './modules/mc_Hob01'
import { OD_M_mc_Sink01 } from './modules/mc_Sink01'
import { OD_M_mf_Sink } from './modules/mf_Sink'
import { OD_M_mr_Filler01 } from './modules/mr_Filler01'
import { OD_M_mf_FillerFront } from './modules/mf_FillerFront'
import { OD_M_mc_FillerFront01 } from './modules/mc_FillerFront01'
import { OD_M_mr_Appliance } from './modules/mr_Appliance'
import { OD_M_mf_Dishwasher } from './modules/mf_Dishwasher'
import { OD_M_mr_CornerFiller } from './modules/mr_CornerFiller'
import { OD_M_mc_Cornerunit01 } from './modules/mc_Cornerunit01'
import { OD_M_mr_IslandBackwall } from './modules/mr_IslandBackwall'
import { OD_M_mr_Shelves } from './modules/mr_Shelves'
import { OD_M_mc_Shelves01 } from './modules/mc_Shelves01'
import { OD_M_mc_Bracket01 } from './modules/mc_Bracket01'
import { OD_M_mf_CornerFillerFront } from './modules/mf_CornerFillerFront'
import { OD_M_mc_CornerFillerFront01 } from './modules/mc_CornerFillerFront01'
import { OD_M_mf_Pullout } from './modules/mf_Pullout'
import { OD_M_mc_Pullout01 } from './modules/mc_Pullout01'
import { OD_M_mc_PulloutHardware01 } from './modules/mc_PulloutHardware01'
import { OD_M_mc_Dishwasher01 } from './modules/mc_Dishwasher01'
import { OD_M_me_ShelfadjMultiple01 } from './modules/me_ShelfadjMultiple01'
import { OD_M_mr_PlinthAreaBaseboard } from './modules/mr_PlinthAreaBaseboard'
import { OD_M_mc_Baseboard01 } from './modules/mc_Baseboard01'
import { OD_M_mc_BaseunitFridge01 } from './modules/mc_BaseunitFridge01'
import { OD_M_mf_BaseunitFridge } from './modules/mf_BaseunitFridge'
import { OD_M_me_LaundryMachine } from './modules/me_LaundryMachine'
import { OD_M_mf_PantryPullout } from './modules/mf_PantryPullout'
import { OD_M_mc_PantryPullout01 } from './modules/mc_PantryPullout01'
import { OD_M_mr_MirrorBoard } from './modules/mr_MirrorBoard'
import { OD_M_mr_CoatBoard } from './modules/mr_CoatBoard'
import { OD_M_mf_BoardShelf } from './modules/mf_BoardShelf'
import { OD_M_me_BoardHanger } from './modules/me_BoardHanger'
import { OD_M_mc_PantryPulloutHardware01 } from './modules/mc_PantryPulloutHardware01'
import { OD_M_mc_MirrorBoard } from './modules/mc_MirrorBoard'
import { OD_M_mc_Mirror } from './modules/mc_Mirror'
import { OD_M_mc_BoardShelf } from './modules/mc_BoardShelf'
import { OD_M_mc_CoatBoard } from './modules/mc_CoatBoard'
import { OD_M_mc_BoardHanger } from './modules/mc_BoardHanger'
import { OD_M_me_ClothingOrganizer01 } from './modules/me_ClothingOrganizer01'
import { OD_M_mc_ClothingOrganizerHardware01 } from './modules/mc_ClothingOrganizerHardware01'
import { OD_M_mc_ClothingOrganizerBoard01 } from './modules/mc_ClothingOrganizerBoard01'
import { OD_M_mc_SegmentFront01 } from './modules/mc_SegmentFront01'
import { OD_M_me_HoodInsert } from './modules/me_HoodInsert'
import { OD_M_mc_HoodInsert01 } from './modules/mc_HoodInsert01'
import { OD_M_md_EquipmentArticleBuilder } from './modules/md_EquipmentArticleBuilder'
import { OD_M_md_EquipmentPlaceholder } from './modules/md_EquipmentPlaceholder'
import { OD_M_mr_CeilingFiller } from './modules/mr_CeilingFiller'
import { OD_M_mc_CeilingFiller01 } from './modules/mc_CeilingFiller01'
import { OD_M_md_FrontPlaceholder } from './modules/md_FrontPlaceholder'
import { OD_M_md_FrontArticleBuilder } from './modules/md_FrontArticleBuilder'
import { OD_M_mr_Filler } from './modules/mr_Filler'
import { OD_M_mc_Filler01 } from './modules/mc_Filler01'
import { IModParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_PantryPullout01_mc_Pullout01, IModParents_mf_Drawer, IModParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_Fliplift01_mc_PantryPullout01_mc_Pullout01, IModParents_mc_Drawer01, IModParents_mc_HingeGroup01, IModParents_mc_PlinthArea01_mr_PlinthAreaBaseboard, IModParents_mr_IslandBackwall, IModParents_md_FrontArticleBuilder_md_FrontPlaceholder_mr_CornerunitStraight_mr_StorageunitSingle, IModParents_mr_CornerunitStraight_mr_Filler01_mr_StorageunitSingle, IModParents_mc_Door01_mc_Drawer01_mc_Fliplift01, IModParents_mc_Storageunit01, IModParents_md_FrontArticleBuilder_md_FrontPlaceholder_mr_StorageunitSingle, IModParents_mf_Fliplift, IModParents_mf_Door_mf_Fridge, IModParents_mf_Door_mf_Fliplift_mf_RackArea, IModParents_mc_ShelfadjGroup01_me_ShelfadjMultiple01, IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01, IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01_mc_PantryPullout01_mc_Pullout01, IModParents_mc_Cornerunit01_mc_Filler01_mc_Storageunit01_mc_VertDivider01, IModParents_mc_Filler01_mc_Storageunit01, IModParents_mc_PantryPullout01_mc_Storageunit01, IModParents_mc_VertDivider01, IModParents_mc_CornerunitStraight01, IModParents_mr_CornerunitStraight, IModParents_mf_Oven, IModParents_mf_RackArea, IModParents_mc_CornerunitStraight01_mc_Storageunit01, IModParents_mc_Door01, IModParents_mr_Upright, IModParents_mr_Countertop, IModParents_mr_Backsplash, IModParents_mr_PlinthAreaBaseboard_mr_Toekick, IModParents_mc_Door01_mc_Fliplift01, IModParents_mc_Fliplift01, IModParents_mr_CornerunitStraight_mr_StorageunitSingle, IModParents_mf_Fixedfront, IModParents_mr_Fingergrip, IModParents_mf_Fridge, IModParents_mc_BaseunitFridge01_mc_Dishwasher01_mc_Fridge01_mc_Hob01_mc_HoodInsert01_mc_Oven01_mc_Sink01_me_LaundryMachine_mf_Sink_mr_Hood, IModParents_mr_Paneltop, IModParents_mr_StorageunitSingle, IModParents_mf_Hob, IModParents_mf_Sink, IModParents_mr_Filler01, IModParents_mc_Filler01_mf_FillerFront, IModParents_mr_Appliance, IModParents_mr_CornerFiller, IModParents_mr_Shelves, IModParents_mf_CornerFillerFront_mr_CornerFiller, IModParents_mf_Pullout, IModParents_mc_Pullout01, IModParents_mf_Dishwasher, IModParents_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_Fliplift_mf_RackArea, IModParents_mr_PlinthAreaBaseboard, IModParents_mf_BaseunitFridge, IModParents_mf_PantryPullout, IModParents_mr_CoatBoard_mr_MirrorBoard, IModParents_mf_BoardShelf, IModParents_mc_PantryPullout01, IModParents_mr_MirrorBoard, IModParents_mc_MirrorBoard, IModParents_mr_CoatBoard, IModParents_me_BoardHanger, IModParents_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_RackArea, IModParents_me_ClothingOrganizer01, IModParents_mf_Door, IModParents_me_HoodInsert, IModParents_mr_CeilingFiller, IModParents_mr_Filler_mr_StorageunitSingle } from './mod-interfaces'

function createRoot(moduleId: string, manufacturerMode: boolean): OD_Base {
  switch (moduleId.toLowerCase()) {
    case 'mr_storageunitsingle':
      return new OD_M_mr_StorageunitSingle(undefined, manufacturerMode);
    case 'mr_cornerunitstraight':
      return new OD_M_mr_CornerunitStraight(undefined, manufacturerMode);
    case 'mr_upright':
      return new OD_M_mr_Upright(undefined, manufacturerMode);
    case 'mr_hood':
      return new OD_M_mr_Hood(undefined, manufacturerMode);
    case 'mr_filler01':
      return new OD_M_mr_Filler01(undefined, manufacturerMode);
    case 'mr_appliance':
      return new OD_M_mr_Appliance(undefined, manufacturerMode);
    case 'mr_cornerfiller':
      return new OD_M_mr_CornerFiller(undefined, manufacturerMode);
    case 'mr_islandbackwall':
      return new OD_M_mr_IslandBackwall(undefined, manufacturerMode);
    case 'mr_shelves':
      return new OD_M_mr_Shelves(undefined, manufacturerMode);
    case 'mr_mirrorboard':
      return new OD_M_mr_MirrorBoard(undefined, manufacturerMode);
    case 'mr_coatboard':
      return new OD_M_mr_CoatBoard(undefined, manufacturerMode);
    case 'md_equipmentarticlebuilder':
      return new OD_M_md_EquipmentArticleBuilder(undefined, manufacturerMode);
    case 'md_frontarticlebuilder':
      return new OD_M_md_FrontArticleBuilder(undefined, manufacturerMode);
    case 'mr_filler':
      return new OD_M_mr_Filler(undefined, manufacturerMode);
    default: {
      const notFoundModule = new OD_Base_NotFound(moduleId, undefined, manufacturerMode);
      logError('Unknown root module: ' + moduleId);
      return notFoundModule;
    }
  }
}

function createGenerationRoot(moduleId: string, manufacturerMode: boolean): OD_Base {
  switch (moduleId.toLowerCase()) {
    case 'mr_paneltop':
      return new OD_M_mr_Paneltop(undefined, manufacturerMode);
    case 'mr_countertop':
      return new OD_M_mr_Countertop(undefined, manufacturerMode);
    case 'mr_backsplash':
      return new OD_M_mr_Backsplash(undefined, manufacturerMode);
    case 'mr_toekick':
      return new OD_M_mr_Toekick(undefined, manufacturerMode);
    case 'mr_fingergrip':
      return new OD_M_mr_Fingergrip(undefined, manufacturerMode);
    case 'mr_plinthareabaseboard':
      return new OD_M_mr_PlinthAreaBaseboard(undefined, manufacturerMode);
    case 'mr_ceilingfiller':
      return new OD_M_mr_CeilingFiller(undefined, manufacturerMode);
    default: {
      const notFoundModule = new OD_Base_NotFound(moduleId, undefined, manufacturerMode);
      logError('Unknown generation root module:' + moduleId);
      return notFoundModule;
    }
  }
}

function createModule(moduleId: string, parent: OD_Base, manufacturerMode: boolean): OD_Base {
  switch (moduleId.toLowerCase()) {
    case 'mc_frontpanel01':
      return new OD_M_mc_FrontPanel01(<IModParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_PantryPullout01_mc_Pullout01><unknown>parent, manufacturerMode);
    case 'mc_drawer01':
      return new OD_M_mc_Drawer01(<IModParents_mf_Drawer><unknown>parent, manufacturerMode);
    case 'mc_handle01':
      return new OD_M_mc_Handle01(<IModParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_Fliplift01_mc_PantryPullout01_mc_Pullout01><unknown>parent, manufacturerMode);
    case 'mc_drawerbox01':
      return new OD_M_mc_DrawerBox01(<IModParents_mc_Drawer01><unknown>parent, manufacturerMode);
    case 'mc_hinge01':
      return new OD_M_mc_Hinge01(<IModParents_mc_HingeGroup01><unknown>parent, manufacturerMode);
    case 'mc_leg01':
      return new OD_M_mc_Leg01(<IModParents_mc_PlinthArea01_mr_PlinthAreaBaseboard><unknown>parent, manufacturerMode);
    case 'mc_panel01':
      return new OD_M_mc_Panel01(<IModParents_mr_IslandBackwall><unknown>parent, manufacturerMode);
    case 'mf_drawer':
      return new OD_M_mf_Drawer(<IModParents_md_FrontArticleBuilder_md_FrontPlaceholder_mr_CornerunitStraight_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mc_plintharea01':
      return new OD_M_mc_PlinthArea01(<IModParents_mr_CornerunitStraight_mr_Filler01_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mr_storageunitsingle':
      return new OD_M_mr_StorageunitSingle(parent, manufacturerMode);
    case 'mc_frontpanelglass01':
      return new OD_M_mc_FrontPanelGlass01(<IModParents_mc_Door01_mc_Drawer01_mc_Fliplift01><unknown>parent, manufacturerMode);
    case 'mc_lightsystem01':
      return new OD_M_mc_LightSystem01(<IModParents_mc_Storageunit01><unknown>parent, manufacturerMode);
    case 'mc_hangersystem01':
      return new OD_M_mc_HangerSystem01(<IModParents_mc_Storageunit01><unknown>parent, manufacturerMode);
    case 'mf_fliplift':
      return new OD_M_mf_Fliplift(<IModParents_md_FrontArticleBuilder_md_FrontPlaceholder_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mc_fliplift01':
      return new OD_M_mc_Fliplift01(<IModParents_mf_Fliplift><unknown>parent, manufacturerMode);
    case 'mf_door':
      return new OD_M_mf_Door(<IModParents_md_FrontArticleBuilder_md_FrontPlaceholder_mr_CornerunitStraight_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mc_door01':
      return new OD_M_mc_Door01(<IModParents_mf_Door_mf_Fridge><unknown>parent, manufacturerMode);
    case 'mr_cornerunitstraight':
      return new OD_M_mr_CornerunitStraight(parent, manufacturerMode);
    case 'mc_shelfadjgroup01':
      return new OD_M_mc_ShelfadjGroup01(<IModParents_mf_Door_mf_Fliplift_mf_RackArea><unknown>parent, manufacturerMode);
    case 'mc_shelfadjwood01':
      return new OD_M_mc_ShelfadjWood01(<IModParents_mc_ShelfadjGroup01_me_ShelfadjMultiple01><unknown>parent, manufacturerMode);
    case 'mc_shelfadjglass01':
      return new OD_M_mc_ShelfadjGlass01(<IModParents_mc_ShelfadjGroup01_me_ShelfadjMultiple01><unknown>parent, manufacturerMode);
    case 'mc_shelfadjdrill01':
      return new OD_M_mc_ShelfadjDrill01(<IModParents_mc_ShelfadjGroup01_me_ShelfadjMultiple01><unknown>parent, manufacturerMode);
    case 'mc_thermoformedpanel01':
      return new OD_M_mc_ThermoformedPanel01(<IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01><unknown>parent, manufacturerMode);
    case 'mc_metalframe01':
      return new OD_M_mc_MetalFrame01(<IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01><unknown>parent, manufacturerMode);
    case 'mc_storageunit01':
      return new OD_M_mc_Storageunit01(<IModParents_mr_CornerunitStraight_mr_Filler01_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mc_handlestrip01':
      return new OD_M_mc_Handlestrip01(<IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01_mc_PantryPullout01_mc_Pullout01><unknown>parent, manufacturerMode);
    case 'mc_storageunitsidepanel01':
      return new OD_M_mc_StorageunitSidepanel01(<IModParents_mc_Cornerunit01_mc_Filler01_mc_Storageunit01_mc_VertDivider01><unknown>parent, manufacturerMode);
    case 'mc_storageunitshelfbtm01':
      return new OD_M_mc_StorageunitShelfbtm01(<IModParents_mc_Filler01_mc_Storageunit01><unknown>parent, manufacturerMode);
    case 'mc_storageunitshelftop01':
      return new OD_M_mc_StorageunitShelftop01(<IModParents_mc_Filler01_mc_Storageunit01><unknown>parent, manufacturerMode);
    case 'mc_storageunitbackwall01':
      return new OD_M_mc_StorageunitBackwall01(<IModParents_mc_Storageunit01><unknown>parent, manufacturerMode);
    case 'mc_storageunitshelffixed01':
      return new OD_M_mc_StorageunitShelffixed01(<IModParents_mc_PantryPullout01_mc_Storageunit01><unknown>parent, manufacturerMode);
    case 'mc_cleatvert01':
      return new OD_M_mc_CleatVert01(<IModParents_mc_VertDivider01><unknown>parent, manufacturerMode);
    case 'mc_panelblind01':
      return new OD_M_mc_Panelblind01(<IModParents_mc_CornerunitStraight01><unknown>parent, manufacturerMode);
    case 'mc_cornerunitstraight01':
      return new OD_M_mc_CornerunitStraight01(<IModParents_mr_CornerunitStraight><unknown>parent, manufacturerMode);
    case 'mc_shelfadjfitting01':
      return new OD_M_mc_ShelfadjFitting01(<IModParents_mc_ShelfadjGroup01_me_ShelfadjMultiple01><unknown>parent, manufacturerMode);
    case 'mf_oven':
      return new OD_M_mf_Oven(<IModParents_md_FrontArticleBuilder_md_FrontPlaceholder_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mc_oven01':
      return new OD_M_mc_Oven01(<IModParents_mf_Oven><unknown>parent, manufacturerMode);
    case 'mf_fridge':
      return new OD_M_mf_Fridge(<IModParents_md_FrontArticleBuilder_md_FrontPlaceholder_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mf_rackarea':
      return new OD_M_mf_RackArea(<IModParents_md_FrontArticleBuilder_md_FrontPlaceholder_mr_CornerunitStraight_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mc_rackarea01':
      return new OD_M_mc_RackArea01(<IModParents_mf_RackArea><unknown>parent, manufacturerMode);
    case 'mc_shelffixedgroup01':
      return new OD_M_mc_ShelffixedGroup01(<IModParents_mf_RackArea><unknown>parent, manufacturerMode);
    case 'mc_vertdivider01':
      return new OD_M_mc_VertDivider01(<IModParents_mc_CornerunitStraight01_mc_Storageunit01><unknown>parent, manufacturerMode);
    case 'mc_duststrip01':
      return new OD_M_mc_Duststrip01(<IModParents_mc_Door01><unknown>parent, manufacturerMode);
    case 'mr_upright':
      return new OD_M_mr_Upright(parent, manufacturerMode);
    case 'mc_upright01':
      return new OD_M_mc_Upright01(<IModParents_mr_Upright><unknown>parent, manufacturerMode);
    case 'mc_countertop01':
      return new OD_M_mc_Countertop01(<IModParents_mr_Countertop><unknown>parent, manufacturerMode);
    case 'mc_backsplash':
      return new OD_M_mc_Backsplash(<IModParents_mr_Backsplash><unknown>parent, manufacturerMode);
    case 'mc_toekick':
      return new OD_M_mc_Toekick(<IModParents_mr_PlinthAreaBaseboard_mr_Toekick><unknown>parent, manufacturerMode);
    case 'mc_pushtoopen01':
      return new OD_M_mc_Pushtoopen01(<IModParents_mc_Door01_mc_Fliplift01><unknown>parent, manufacturerMode);
    case 'mc_panelwoodframe01':
      return new OD_M_mc_PanelWoodFrame01(<IModParents_mc_BaseunitFridge01_mc_CornerFillerFront01_mc_Dishwasher01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01_mc_PantryPullout01_mc_Pullout01><unknown>parent, manufacturerMode);
    case 'mc_hingegroup01':
      return new OD_M_mc_HingeGroup01(<IModParents_mc_Door01_mc_Fliplift01><unknown>parent, manufacturerMode);
    case 'mc_fliplifthardware01':
      return new OD_M_mc_FlipliftHardware01(<IModParents_mc_Fliplift01><unknown>parent, manufacturerMode);
    case 'mf_fixedfront':
      return new OD_M_mf_Fixedfront(<IModParents_mr_CornerunitStraight_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mc_fixedfront01':
      return new OD_M_mc_Fixedfront01(<IModParents_mf_Fixedfront><unknown>parent, manufacturerMode);
    case 'mc_storageunitshelftop02':
      return new OD_M_mc_StorageunitShelftop02(<IModParents_mc_Storageunit01><unknown>parent, manufacturerMode);
    case 'mc_storageunitshelftop03':
      return new OD_M_mc_StorageunitShelftop03(<IModParents_mc_Storageunit01><unknown>parent, manufacturerMode);
    case 'mc_storageunitshelftop04':
      return new OD_M_mc_StorageunitShelftop04(<IModParents_mc_Storageunit01><unknown>parent, manufacturerMode);
    case 'mc_fingergrip01':
      return new OD_M_mc_Fingergrip01(<IModParents_mr_Fingergrip><unknown>parent, manufacturerMode);
    case 'mc_fridge01':
      return new OD_M_mc_Fridge01(<IModParents_mf_Fridge><unknown>parent, manufacturerMode);
    case 'mc_appliancegraphic':
      return new OD_M_mc_ApplianceGraphic(<IModParents_mc_BaseunitFridge01_mc_Dishwasher01_mc_Fridge01_mc_Hob01_mc_HoodInsert01_mc_Oven01_mc_Sink01_me_LaundryMachine_mf_Sink_mr_Hood><unknown>parent, manufacturerMode);
    case 'mr_hood':
      return new OD_M_mr_Hood(parent, manufacturerMode);
    case 'mc_paneltop01':
      return new OD_M_mc_Paneltop01(<IModParents_mr_Paneltop><unknown>parent, manufacturerMode);
    case 'mf_hob':
      return new OD_M_mf_Hob(<IModParents_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mc_hob01':
      return new OD_M_mc_Hob01(<IModParents_mf_Hob><unknown>parent, manufacturerMode);
    case 'mc_sink01':
      return new OD_M_mc_Sink01(<IModParents_mf_Sink><unknown>parent, manufacturerMode);
    case 'mf_sink':
      return new OD_M_mf_Sink(<IModParents_mr_CornerunitStraight_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mr_filler01':
      return new OD_M_mr_Filler01(parent, manufacturerMode);
    case 'mf_fillerfront':
      return new OD_M_mf_FillerFront(<IModParents_mr_Filler01><unknown>parent, manufacturerMode);
    case 'mc_fillerfront01':
      return new OD_M_mc_FillerFront01(<IModParents_mc_Filler01_mf_FillerFront><unknown>parent, manufacturerMode);
    case 'mr_appliance':
      return new OD_M_mr_Appliance(parent, manufacturerMode);
    case 'mf_dishwasher':
      return new OD_M_mf_Dishwasher(<IModParents_mr_Appliance><unknown>parent, manufacturerMode);
    case 'mr_cornerfiller':
      return new OD_M_mr_CornerFiller(parent, manufacturerMode);
    case 'mc_cornerunit01':
      return new OD_M_mc_Cornerunit01(<IModParents_mr_CornerFiller><unknown>parent, manufacturerMode);
    case 'mr_islandbackwall':
      return new OD_M_mr_IslandBackwall(parent, manufacturerMode);
    case 'mr_shelves':
      return new OD_M_mr_Shelves(parent, manufacturerMode);
    case 'mc_shelves01':
      return new OD_M_mc_Shelves01(<IModParents_mr_Shelves><unknown>parent, manufacturerMode);
    case 'mc_bracket01':
      return new OD_M_mc_Bracket01(<IModParents_mr_Shelves><unknown>parent, manufacturerMode);
    case 'mf_cornerfillerfront':
      return new OD_M_mf_CornerFillerFront(<IModParents_mr_CornerunitStraight><unknown>parent, manufacturerMode);
    case 'mc_cornerfillerfront01':
      return new OD_M_mc_CornerFillerFront01(<IModParents_mf_CornerFillerFront_mr_CornerFiller><unknown>parent, manufacturerMode);
    case 'mf_pullout':
      return new OD_M_mf_Pullout(<IModParents_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mc_pullout01':
      return new OD_M_mc_Pullout01(<IModParents_mf_Pullout><unknown>parent, manufacturerMode);
    case 'mc_pullouthardware01':
      return new OD_M_mc_PulloutHardware01(<IModParents_mc_Pullout01><unknown>parent, manufacturerMode);
    case 'mc_dishwasher01':
      return new OD_M_mc_Dishwasher01(<IModParents_mf_Dishwasher><unknown>parent, manufacturerMode);
    case 'me_shelfadjmultiple01':
      return new OD_M_me_ShelfadjMultiple01(<IModParents_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_Fliplift_mf_RackArea><unknown>parent, manufacturerMode);
    case 'mc_baseboard01':
      return new OD_M_mc_Baseboard01(<IModParents_mr_PlinthAreaBaseboard><unknown>parent, manufacturerMode);
    case 'mc_baseunitfridge01':
      return new OD_M_mc_BaseunitFridge01(<IModParents_mf_BaseunitFridge><unknown>parent, manufacturerMode);
    case 'mf_baseunitfridge':
      return new OD_M_mf_BaseunitFridge(<IModParents_mr_Appliance><unknown>parent, manufacturerMode);
    case 'me_laundrymachine':
      return new OD_M_me_LaundryMachine(<IModParents_mf_RackArea><unknown>parent, manufacturerMode);
    case 'mf_pantrypullout':
      return new OD_M_mf_PantryPullout(<IModParents_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'mc_pantrypullout01':
      return new OD_M_mc_PantryPullout01(<IModParents_mf_PantryPullout><unknown>parent, manufacturerMode);
    case 'mr_mirrorboard':
      return new OD_M_mr_MirrorBoard(parent, manufacturerMode);
    case 'mr_coatboard':
      return new OD_M_mr_CoatBoard(parent, manufacturerMode);
    case 'mf_boardshelf':
      return new OD_M_mf_BoardShelf(<IModParents_mr_CoatBoard_mr_MirrorBoard><unknown>parent, manufacturerMode);
    case 'me_boardhanger':
      return new OD_M_me_BoardHanger(<IModParents_mf_BoardShelf><unknown>parent, manufacturerMode);
    case 'mc_pantrypullouthardware01':
      return new OD_M_mc_PantryPulloutHardware01(<IModParents_mc_PantryPullout01><unknown>parent, manufacturerMode);
    case 'mc_mirrorboard':
      return new OD_M_mc_MirrorBoard(<IModParents_mr_MirrorBoard><unknown>parent, manufacturerMode);
    case 'mc_mirror':
      return new OD_M_mc_Mirror(<IModParents_mc_MirrorBoard><unknown>parent, manufacturerMode);
    case 'mc_boardshelf':
      return new OD_M_mc_BoardShelf(<IModParents_mf_BoardShelf><unknown>parent, manufacturerMode);
    case 'mc_coatboard':
      return new OD_M_mc_CoatBoard(<IModParents_mr_CoatBoard><unknown>parent, manufacturerMode);
    case 'mc_boardhanger':
      return new OD_M_mc_BoardHanger(<IModParents_me_BoardHanger><unknown>parent, manufacturerMode);
    case 'me_clothingorganizer01':
      return new OD_M_me_ClothingOrganizer01(<IModParents_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_RackArea><unknown>parent, manufacturerMode);
    case 'mc_clothingorganizerhardware01':
      return new OD_M_mc_ClothingOrganizerHardware01(<IModParents_me_ClothingOrganizer01><unknown>parent, manufacturerMode);
    case 'mc_clothingorganizerboard01':
      return new OD_M_mc_ClothingOrganizerBoard01(<IModParents_me_ClothingOrganizer01><unknown>parent, manufacturerMode);
    case 'mc_segmentfront01':
      return new OD_M_mc_SegmentFront01(<IModParents_mc_Door01><unknown>parent, manufacturerMode);
    case 'me_hoodinsert':
      return new OD_M_me_HoodInsert(<IModParents_mf_Door><unknown>parent, manufacturerMode);
    case 'mc_hoodinsert01':
      return new OD_M_mc_HoodInsert01(<IModParents_me_HoodInsert><unknown>parent, manufacturerMode);
    case 'md_equipmentarticlebuilder':
      return new OD_M_md_EquipmentArticleBuilder(parent, manufacturerMode);
    case 'md_equipmentplaceholder':
      return new OD_M_md_EquipmentPlaceholder(<IModParents_mf_Door><unknown>parent, manufacturerMode);
    case 'mc_ceilingfiller01':
      return new OD_M_mc_CeilingFiller01(<IModParents_mr_CeilingFiller><unknown>parent, manufacturerMode);
    case 'md_frontplaceholder':
      return new OD_M_md_FrontPlaceholder(<IModParents_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    case 'md_frontarticlebuilder':
      return new OD_M_md_FrontArticleBuilder(parent, manufacturerMode);
    case 'mr_filler':
      return new OD_M_mr_Filler(parent, manufacturerMode);
    case 'mc_filler01':
      return new OD_M_mc_Filler01(<IModParents_mr_Filler_mr_StorageunitSingle><unknown>parent, manufacturerMode);
    default: {
      const notFoundModule = new OD_Base_NotFound(moduleId, parent, manufacturerMode);
      logError('Unknown module: ' + moduleId);
      return notFoundModule;
    }
  }
}

export function loadOrderData(json: any, parent: OD_Base | undefined = undefined, manufacturerMode: boolean, isGenerationRoot: boolean = false): OD_Base {
  let m: OD_Base;
  if (!parent) {
    if (isGenerationRoot) {
      m = createGenerationRoot(json['moduleId'], manufacturerMode);
    } else {
      m = createRoot(json['moduleId'], manufacturerMode);
    }
  } else {
    m = createModule(json['moduleId'], parent, manufacturerMode);
  }
  if ('id' in json) {
    m._id = json['id'];
  }
  m.loadJson(json, true, manufacturerMode);
  m.checkPosRelevantRequiredAttributes();
  return m;
}
