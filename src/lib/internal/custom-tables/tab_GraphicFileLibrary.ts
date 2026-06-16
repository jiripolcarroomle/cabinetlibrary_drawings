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
import { IThreeDModelData } from '../models-3d'

export interface cti_tab_GraphicFileLibrary {
  readonly in_GraphicFileId?: string;
}

export interface ctm_tab_GraphicFileLibrary {
}

export interface cto_tab_GraphicFileLibrary extends ctm_tab_GraphicFileLibrary {
  readonly _id: number;
  readonly Model3D_Value?: string;
  readonly Model3D_Id?: string;
  get Model3D(): IThreeDModelData | undefined;
  readonly Model3DParameters?: any;
}

export interface ICT_tab_GraphicFileLibrary
  extends cti_tab_GraphicFileLibrary, cto_tab_GraphicFileLibrary { }

export class ct2_tab_GraphicFileLibrary {

  public findExactly(
    in_GraphicFileId: string | undefined,
  ): cto_tab_GraphicFileLibrary | undefined {
    const res = ct_tab_GraphicFileLibrary.find((p) =>
      p.in_GraphicFileId === in_GraphicFileId
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_GraphicFileLibrary) => boolean
  ): cto_tab_GraphicFileLibrary | undefined {
    for (let index = 0; index < ct_tab_GraphicFileLibrary.length; index++) {
      const element = ct_tab_GraphicFileLibrary[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_GraphicFileLibrary: ICT_tab_GraphicFileLibrary[] = [
  {
    _id: 9464,
    in_GraphicFileId: "Dowel",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ec6ac0fd-ae43-4ceb-8d45-dafa8d1c9501_dowel.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Dk06Flhtsb560wyUGbaKpkXrB4LoXyFzo0WnEpOKqjQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWM2YWMwZmQtYWU0My00Y2ViLThkNDUtZGFmYThkMWM5NTAxX2Rvd2VsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9465,
    in_GraphicFileId: "DowelMiddleSide",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ec6ac0fd-ae43-4ceb-8d45-dafa8d1c9501_dowel.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Dk06Flhtsb560wyUGbaKpkXrB4LoXyFzo0WnEpOKqjQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWM2YWMwZmQtYWU0My00Y2ViLThkNDUtZGFmYThkMWM5NTAxX2Rvd2VsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9466,
    in_GraphicFileId: "DropDown_Front",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a88909dd-a6e5-4e82-8ffc-9f2e301c9bc1_bar_front.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=v6SF9NfUMf7Hg0YKvuOR%2BHDiw7iKl6ZyLjp9l29aMxc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTg4OTA5ZGQtYTZlNS00ZTgyLThmZmMtOWYyZTMwMWM5YmMxX2Jhcl9mcm9udC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9467,
    in_GraphicFileId: "DropDown_L",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c6e02f13-9ae4-4ae2-9b81-e1bd4224f35a_bar_l.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=OqN6QmgzbJPPKrtk0j0xQhTYLsHutXoOgY0M8LMEQgM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzZlMDJmMTMtOWFlNC00YWUyLTliODEtZTFiZDQyMjRmMzVhX2Jhcl9sLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9468,
    in_GraphicFileId: "DropDown_R",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9f0692fe-9ce7-4a76-8789-a0c4d2c9f2e2_bar_r.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=fo74fH%2BEh1iWiuz4iYTQnWtFk3dSxqcHwFs%2FRZv10RU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWYwNjkyZmUtOWNlNy00YTc2LTg3ODktYTBjNGQyYzlmMmUyX2Jhcl9yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9469,
    in_GraphicFileId: "Graphic_Legra_Syncro",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ad995a98-8fef-4afd-a80a-26602e73f757_snchro_legra_2.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=UDOHOix%2FnSbvvTfOEneccYMuvDM%2Bepc41%2FEewyw1jbY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWQ5OTVhOTgtOGZlZi00YWZkLWE4MGEtMjY2MDJlNzNmNzU3X3NuY2hyb19sZWdyYV8yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9470,
    in_GraphicFileId: "Legra_Box_C_270_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/21bef297-43cc-4f1f-b9af-0e64e1b46ef5_legra_box_c_270_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=zNqEnm8PjvMtmPqYYcOcltaafMUQTMwrRVs62emVDw0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjFiZWYyOTctNDNjYy00ZjFmLWI5YWYtMGU2NGUxYjQ2ZWY1X2xlZ3JhX2JveF9jXzI3MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9471,
    in_GraphicFileId: "Legra_Box_C_270_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/69e4512a-7b41-481a-ab43-4ef6188123cd_legra_box_c_270_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=a6CIEO6fsalI3T1Oe6v9n8CX33PN%2F9TbLjWqhcsvdSs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjllNDUxMmEtN2I0MS00ODFhLWFiNDMtNGVmNjE4ODEyM2NkX2xlZ3JhX2JveF9jXzI3MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9472,
    in_GraphicFileId: "Legra_Box_C_300_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/83e06037-14a4-45d3-9372-9bab1f9e0d69_legra_box_c_300_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=rQExrRmkvW07qH8cUwuAJbV%2B1rLZmGMpIBGDZZOt%2B3s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODNlMDYwMzctMTRhNC00NWQzLTkzNzItOWJhYjFmOWUwZDY5X2xlZ3JhX2JveF9jXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9473,
    in_GraphicFileId: "Legra_Box_C_300_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/11ae72da-8ae1-466a-988c-ea564b7b0781_legra_box_c_300_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=zSXC%2FsXIaZPQSnlbbpigXO9WVm3UsVMlrwYmMZad2wA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTFhZTcyZGEtOGFlMS00NjZhLTk4OGMtZWE1NjRiN2IwNzgxX2xlZ3JhX2JveF9jXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9474,
    in_GraphicFileId: "Legra_Box_C_350_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/32e5a3f4-a4c3-4ee0-a16a-8d68732ca8ea_legra_box_c_350_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZJgEJb0ZeGxlBs%2FgSjv4jly42vShuUr%2FWpRO9xO78u8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzJlNWEzZjQtYTRjMy00ZWUwLWExNmEtOGQ2ODczMmNhOGVhX2xlZ3JhX2JveF9jXzM1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9475,
    in_GraphicFileId: "Legra_Box_C_350_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5b564dfb-54d8-451b-ae35-4b12e979fc1e_legra_box_c_350_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=RfwiYIGE7XZONsDnXB0B4N1Ya1sLCGl8LO48qXLMvsY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWI1NjRkZmItNTRkOC00NTFiLWFlMzUtNGIxMmU5NzlmYzFlX2xlZ3JhX2JveF9jXzM1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9476,
    in_GraphicFileId: "Legra_Box_C_400_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fce88b9f-66db-464e-a3ba-fbdbd398d43e_legra_box_c_400_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=4yEIHFp4bF%2BQCss%2FJ4%2B9bMfgcCep%2BWWSQmpnTyFqrw4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmNlODhiOWYtNjZkYi00NjRlLWEzYmEtZmJkYmQzOThkNDNlX2xlZ3JhX2JveF9jXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9477,
    in_GraphicFileId: "Legra_Box_C_400_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bbace5c5-442a-4658-92cd-e4181b0def0a_legra_box_c_400_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=cwBH%2FhdYq%2FgxOVJsBnz1%2BhpvZXKAX8D7a8CqC04%2BVaU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmJhY2U1YzUtNDQyYS00NjU4LTkyY2QtZTQxODFiMGRlZjBhX2xlZ3JhX2JveF9jXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9478,
    in_GraphicFileId: "Legra_Box_C_450_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9e395ac2-405f-4596-b954-e340999fdc76_legra_box_c_450_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=kwYJNykDWzVX%2FVHSWI009f61B89yBm1BLFjakWXqJ0E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWUzOTVhYzItNDA1Zi00NTk2LWI5NTQtZTM0MDk5OWZkYzc2X2xlZ3JhX2JveF9jXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9479,
    in_GraphicFileId: "Legra_Box_C_450_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d81b16af-6366-4898-b847-f3194e09098c_legra_box_c_450_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=94qJWWcMWyUDUyZ0EkHDeACzXuZuk196E%2BPiVEn9VA4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDgxYjE2YWYtNjM2Ni00ODk4LWI4NDctZjMxOTRlMDkwOThjX2xlZ3JhX2JveF9jXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9480,
    in_GraphicFileId: "Legra_Box_C_500_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e6e7fa8d-fcb0-4300-bd88-eed7ec1975a5_legra_box_c_500_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=VY1faPhtMoy1O%2BOWmeAMSfN24pQUI8Hf%2BQC12RYcxLQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTZlN2ZhOGQtZmNiMC00MzAwLWJkODgtZWVkN2VjMTk3NWE1X2xlZ3JhX2JveF9jXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9481,
    in_GraphicFileId: "Legra_Box_C_500_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c4313c00-b27e-479c-b834-177a5f1e3671_legra_box_c_500_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=S9sux%2FnaZEIoCvhWGOWx2WikfpocC9Eu7rYSFU45A10%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzQzMTNjMDAtYjI3ZS00NzljLWI4MzQtMTc3YTVmMWUzNjcxX2xlZ3JhX2JveF9jXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9482,
    in_GraphicFileId: "Legra_Box_C_550_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8036494a-06e2-4560-b8bd-d8ad431aa91e_legra_box_c_550_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=4dAxWI8PfT%2BYu6AHZHQYZ3FaMKmFY51zfhEUqaxxzwI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODAzNjQ5NGEtMDZlMi00NTYwLWI4YmQtZDhhZDQzMWFhOTFlX2xlZ3JhX2JveF9jXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9483,
    in_GraphicFileId: "Legra_Box_C_550_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ee5d72e3-2a2e-45d1-99e4-95c342c93220_legra_box_c_550_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Z5%2Fn9xeFLXivwMyO%2BvbRQTAwATXBLrylr81ac9CK5Bk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWU1ZDcyZTMtMmEyZS00NWQxLTk5ZTQtOTVjMzQyYzkzMjIwX2xlZ3JhX2JveF9jXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9484,
    in_GraphicFileId: "Legra_Box_C_600_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0e879bc4-7353-4a62-8817-725bfe11e50f_legra_box_c_600_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Qq525ZFQkkp8mn9k%2B9ncSeX9ZhUsVzYiTYWocXA27cI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGU4NzliYzQtNzM1My00YTYyLTg4MTctNzI1YmZlMTFlNTBmX2xlZ3JhX2JveF9jXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9485,
    in_GraphicFileId: "Legra_Box_C_600_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/79365c86-cc2e-40c3-80be-667e35109c8a_legra_box_c_600_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=dluLVtc%2BfLDvlhY2hQJEHDQ%2FvIU%2Bc8ycdiDlN9ERHnw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzkzNjVjODYtY2MyZS00MGMzLTgwYmUtNjY3ZTM1MTA5YzhhX2xlZ3JhX2JveF9jXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9486,
    in_GraphicFileId: "Legra_Box_C_650_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ba18c13e-0cf8-49c7-867b-5edc48243902_legra_box_c_650_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZagJzlBw2sQRYnFRJdj9QVngfqXwt5%2Fe%2BjQqY6WggkI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmExOGMxM2UtMGNmOC00OWM3LTg2N2ItNWVkYzQ4MjQzOTAyX2xlZ3JhX2JveF9jXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9487,
    in_GraphicFileId: "Legra_Box_C_650_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bbfa1830-aeff-4dee-8ff3-1cdb1c32ffe7_legra_box_c_650_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=OneMSwUotXj4udAyJFiNCDsS4u3fKdhHKJVbl%2FLaY4k%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmJmYTE4MzAtYWVmZi00ZGVlLThmZjMtMWNkYjFjMzJmZmU3X2xlZ3JhX2JveF9jXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9488,
    in_GraphicFileId: "Legra_Box_F_400_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/286025ec-263e-427e-b6d4-90ae5c2d756b_legra_box_f_400_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=p8zdt%2F67WJM7zYpJrZCOQQ%2B6pgP35SSL57HcgBiIaC0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjg2MDI1ZWMtMjYzZS00MjdlLWI2ZDQtOTBhZTVjMmQ3NTZiX2xlZ3JhX2JveF9mXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9489,
    in_GraphicFileId: "Legra_Box_F_400_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/10594d21-9975-4aba-9866-e15c072f267b_legra_box_f_400_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=uFs8SXMvX93Wh6wt%2Fvb9qvPwoPkxlfaO0p6yOOn2c2Q%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTA1OTRkMjEtOTk3NS00YWJhLTk4NjYtZTE1YzA3MmYyNjdiX2xlZ3JhX2JveF9mXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9490,
    in_GraphicFileId: "Legra_Box_F_450_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/69834345-8156-43bf-a454-0adc9e328d04_legra_box_f_450_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=tm8IPneZSkjKwarsHMOTOYx9dIJ8yNDRlfnstwX5e0E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjk4MzQzNDUtODE1Ni00M2JmLWE0NTQtMGFkYzllMzI4ZDA0X2xlZ3JhX2JveF9mXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9491,
    in_GraphicFileId: "Legra_Box_F_450_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c5ea8a63-dead-4ec4-a017-7fe169167752_legra_box_f_450_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=da2vnjMcnyz5RVsWojGAzhhz0PLaOLKpYmHzBQTMJ1Y%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzVlYThhNjMtZGVhZC00ZWM0LWEwMTctN2ZlMTY5MTY3NzUyX2xlZ3JhX2JveF9mXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9492,
    in_GraphicFileId: "Legra_Box_F_500_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f84324ef-362e-4af2-a638-fb1bda301e87_legra_box_f_500_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=HiP0DsP7tGaQs9HIuzWxCK7yu9yv4q8b%2Fhfw3gqjm0o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjg0MzI0ZWYtMzYyZS00YWYyLWE2MzgtZmIxYmRhMzAxZTg3X2xlZ3JhX2JveF9mXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9493,
    in_GraphicFileId: "Legra_Box_F_500_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f7de5b85-58eb-44ab-838f-0992188f7006_legra_box_f_500_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=8Z3XnjY9Cb5I3RxI47NCo3NdZe1Ql%2BEOxU5QOg6T0UI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjdkZTViODUtNThlYi00NGFiLTgzOGYtMDk5MjE4OGY3MDA2X2xlZ3JhX2JveF9mXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9494,
    in_GraphicFileId: "Legra_Box_F_550_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f1e5ed73-5da7-4e93-b95b-3d3769b865fd_legra_box_f_550_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Z2tWihNXx47hFrueKOyCeNyjDjlbE6EafahcFv%2BGFyA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjFlNWVkNzMtNWRhNy00ZTkzLWI5NWItM2QzNzY5Yjg2NWZkX2xlZ3JhX2JveF9mXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9495,
    in_GraphicFileId: "Legra_Box_F_550_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f3d06abc-5a37-4f78-b180-da094044bc9a_legra_box_f_550_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ntVhREhxsWeDbXm4XPGn7Dq4SIVc8Jx8BMSmdrdqvEI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjNkMDZhYmMtNWEzNy00Zjc4LWIxODAtZGEwOTQwNDRiYzlhX2xlZ3JhX2JveF9mXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9496,
    in_GraphicFileId: "Legra_Box_F_600_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ce2a835b-b46d-4646-b47c-4436dc057b61_legra_box_f_600_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Natx8B3Z1MuGxSfA%2BcAMgPHqK1UVp2IPiJHxdMmlfkc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2UyYTgzNWItYjQ2ZC00NjQ2LWI0N2MtNDQzNmRjMDU3YjYxX2xlZ3JhX2JveF9mXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9497,
    in_GraphicFileId: "Legra_Box_F_600_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c1125374-8cc5-4f05-aca6-63f23fe2bff4_legra_box_f_600_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=3Djn%2FRpbvLQLsZRt0RenCFrNdI4Z0VWy8ps6rhb9OHY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzExMjUzNzQtOGNjNS00ZjA1LWFjYTYtNjNmMjNmZTJiZmY0X2xlZ3JhX2JveF9mXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9498,
    in_GraphicFileId: "Legra_Box_F_650_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5fb8e994-466b-4f0c-9d14-f33e4a5a89b1_legra_box_f_650_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=tOt93bRkgBLLnU8g2RNHme7cKTPOKK7yfQOI4l%2BBZ%2Bk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWZiOGU5OTQtNDY2Yi00ZjBjLTlkMTQtZjMzZTRhNWE4OWIxX2xlZ3JhX2JveF9mXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9499,
    in_GraphicFileId: "Legra_Box_F_650_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/17af4f80-9802-4829-8e69-cd4da7b31af0_legra_box_f_650_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=aN4tyFbqAkcrOyTc8OEZuxIIiqT9HfQW1doL0Z6OeY4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTdhZjRmODAtOTgwMi00ODI5LThlNjktY2Q0ZGE3YjMxYWYwX2xlZ3JhX2JveF9mXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9500,
    in_GraphicFileId: "Legra_Box_K_300_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5253da2d-caa8-4a74-901f-e6d75b208834_legra_box_k_300_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=RNgHMy7aoJJsM%2Fq2lhx47iLvVJLQ1HpAhEtA9EtMjjo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTI1M2RhMmQtY2FhOC00YTc0LTkwMWYtZTZkNzViMjA4ODM0X2xlZ3JhX2JveF9rXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9501,
    in_GraphicFileId: "Legra_Box_K_300_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/02469486-be1e-4519-946a-53d0e8b37798_legra_box_k_300_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Z5cCq%2FYMJXLWw3ksWbJWQEuoqCOtNL3yIg6VNA6%2BRIQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDI0Njk0ODYtYmUxZS00NTE5LTk0NmEtNTNkMGU4YjM3Nzk4X2xlZ3JhX2JveF9rXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9502,
    in_GraphicFileId: "Legra_Box_K_350_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/34be24df-a701-4149-a7ab-68938fc91bc2_legra_box_k_350_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=kn5AOm%2BwnJ%2BVM4cLUTbmF6Mdvtr76UAJXGP6b2%2FvuFM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzRiZTI0ZGYtYTcwMS00MTQ5LWE3YWItNjg5MzhmYzkxYmMyX2xlZ3JhX2JveF9rXzM1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9503,
    in_GraphicFileId: "Legra_Box_K_350_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b6c4e93d-f284-4723-96c4-c6e967f8f80d_legra_box_k_350_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=uc18nlD%2FqyY1e9S4V0u%2F7tgmIqj9K6Ybx1loeU3A5oA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjZjNGU5M2QtZjI4NC00NzIzLTk2YzQtYzZlOTY3ZjhmODBkX2xlZ3JhX2JveF9rXzM1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9504,
    in_GraphicFileId: "Legra_Box_K_400_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b34602ab-0174-4edf-b479-2f93be67c838_legra_box_k_400_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=pJHgT1tVcBdLKEkfJAvCTiRuzGdlc6KUwmITkM3KiJo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjM0NjAyYWItMDE3NC00ZWRmLWI0NzktMmY5M2JlNjdjODM4X2xlZ3JhX2JveF9rXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9505,
    in_GraphicFileId: "Legra_Box_K_400_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/42be1e17-5ec8-42c5-b182-e637e613200a_legra_box_k_400_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=zu%2B4rgI3JEWV4ypGGuj7S3mX5Nlm3wJ41rJiWDuNBy4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDJiZTFlMTctNWVjOC00MmM1LWIxODItZTYzN2U2MTMyMDBhX2xlZ3JhX2JveF9rXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9506,
    in_GraphicFileId: "Legra_Box_K_450_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b51fed18-6327-4ee3-a145-3e7f4be4023b_legra_box_k_450_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=IWWgmDBWGFaN3Jcu5nyG%2BwE1gV4tagpNMKQH1FwUMF4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjUxZmVkMTgtNjMyNy00ZWUzLWExNDUtM2U3ZjRiZTQwMjNiX2xlZ3JhX2JveF9rXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9507,
    in_GraphicFileId: "Legra_Box_K_450_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b66529d1-b4e5-455c-b46d-c07d1f79ef3c_legra_box_k_450_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=vgEBcX1D4YcnAYwr6nU843kHoBsqq1m3mOzKKPp7aNk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjY2NTI5ZDEtYjRlNS00NTVjLWI0NmQtYzA3ZDFmNzllZjNjX2xlZ3JhX2JveF9rXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9508,
    in_GraphicFileId: "Legra_Box_K_500_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/25b5ed47-3199-4204-b789-c596dd0370d6_legra_box_k_500_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZxTw%2F4scFGwgKqbXyQG2Uxb4bkerrpyjFwnQHTedfhU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjViNWVkNDctMzE5OS00MjA0LWI3ODktYzU5NmRkMDM3MGQ2X2xlZ3JhX2JveF9rXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9509,
    in_GraphicFileId: "Legra_Box_K_500_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bdbba657-9bee-4b5e-8e88-ff3b1dc2aff9_legra_box_k_500_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=uuSuToUcu7MBmbayn8s3o%2FPagokrN8bzrgXlaxuktJo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmRiYmE2NTctOWJlZS00YjVlLThlODgtZmYzYjFkYzJhZmY5X2xlZ3JhX2JveF9rXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9510,
    in_GraphicFileId: "Legra_Box_K_550_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f7f0a6d7-d480-4323-9c9f-a28fa14e725e_legra_box_k_550_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2BPuEC%2BovoCEtjzz2CL7jsmpnSB0pZLc4sHGlRgIxTr8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjdmMGE2ZDctZDQ4MC00MzIzLTljOWYtYTI4ZmExNGU3MjVlX2xlZ3JhX2JveF9rXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9511,
    in_GraphicFileId: "Legra_Box_K_550_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f1cfa35c-9bd6-45f5-93c6-ac596befd2f6_legra_box_k_550_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=5imEX4FrU1TBW2h6KcoC0AlYut5yvxNoTbBJWzJCgPA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjFjZmEzNWMtOWJkNi00NWY1LTkzYzYtYWM1OTZiZWZkMmY2X2xlZ3JhX2JveF9rXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9512,
    in_GraphicFileId: "Legra_Box_K_600_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5fd4ef89-ea78-4915-96ab-052a13a99c5e_legra_box_k_600_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=BDm6spbgg7zJqx9S1PbBXJnkYTNXnP8m4UXO0aJ6oUA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWZkNGVmODktZWE3OC00OTE1LTk2YWItMDUyYTEzYTk5YzVlX2xlZ3JhX2JveF9rXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9513,
    in_GraphicFileId: "Legra_Box_K_600_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b07ab715-a508-4e51-bf0b-792bafaedd8e_legra_box_k_600_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=8m0JB6VIfWgeNxFW2Uzt0WKTsjHAvZJ0vKB6W8dDU5s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjA3YWI3MTUtYTUwOC00ZTUxLWJmMGItNzkyYmFmYWVkZDhlX2xlZ3JhX2JveF9rXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9514,
    in_GraphicFileId: "Legra_Box_M_270_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/09aeb87e-cddb-4946-8d15-f4de39f6c93a_legra_box_m_270_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=FleDJIevpFsBvK4v6JsG%2BC2glFlED8MBK62ru%2FadWBs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDlhZWI4N2UtY2RkYi00OTQ2LThkMTUtZjRkZTM5ZjZjOTNhX2xlZ3JhX2JveF9tXzI3MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9515,
    in_GraphicFileId: "Legra_Box_M_270_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4c3f8af3-b0e9-4ac6-bb7d-dc3517119dee_legra_box_m_270_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Iat23OdH4HjjSK%2BhWiWBoZbQEkssV3aJBWlMk30Vw1U%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGMzZjhhZjMtYjBlOS00YWM2LWJiN2QtZGMzNTE3MTE5ZGVlX2xlZ3JhX2JveF9tXzI3MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9516,
    in_GraphicFileId: "Legra_Box_M_300_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0d4426ba-e7da-4c5b-a552-5fe97e3a016a_legra_box_m_300_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=rRUfTaD3JRpy9SsOOKhrtxoZMNNIEg%2FBYfVr4Z5JAWE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGQ0NDI2YmEtZTdkYS00YzViLWE1NTItNWZlOTdlM2EwMTZhX2xlZ3JhX2JveF9tXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9517,
    in_GraphicFileId: "Legra_Box_M_300_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c802dd1c-75db-4d28-91ea-44f4e93f0af3_legra_box_m_300_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZL7FsSev6%2FW%2BrRBnsVAzWlaokYX0S6D9tQIbAjiPtaM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzgwMmRkMWMtNzVkYi00ZDI4LTkxZWEtNDRmNGU5M2YwYWYzX2xlZ3JhX2JveF9tXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9518,
    in_GraphicFileId: "Legra_Box_M_350_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/38b987f7-58cc-40de-90d5-723838c04188_legra_box_m_350_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Eoro6aEQOrwb40%2BJmD3uPZmqh2XA%2F5hJ48VYNJ4BaJQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzhiOTg3ZjctNThjYy00MGRlLTkwZDUtNzIzODM4YzA0MTg4X2xlZ3JhX2JveF9tXzM1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9519,
    in_GraphicFileId: "Legra_Box_M_350_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/507be629-1987-4e4b-98f2-1e46acf8df2e_legra_box_m_350_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=1e4ckxpj00hrA%2BqK4orznNVmrU5VmEpH7sneeD2k%2Fks%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTA3YmU2MjktMTk4Ny00ZTRiLTk4ZjItMWU0NmFjZjhkZjJlX2xlZ3JhX2JveF9tXzM1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9520,
    in_GraphicFileId: "Legra_Box_M_400_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/04636b3c-80ed-451d-b912-06813f65f39a_legra_box_m_400_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=RsqbciDCbyG6XxQsYyK%2B5D4f6O1v0I4xyVLF4Fk3ft8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDQ2MzZiM2MtODBlZC00NTFkLWI5MTItMDY4MTNmNjVmMzlhX2xlZ3JhX2JveF9tXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9521,
    in_GraphicFileId: "Legra_Box_M_400_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/47810e9a-fc5d-4f04-8650-2e4b754702c1_legra_box_m_400_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=H0SiyM2f1PrGOV1MJiX15vxCZiiFt8sn7enINgU2T40%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDc4MTBlOWEtZmM1ZC00ZjA0LTg2NTAtMmU0Yjc1NDcwMmMxX2xlZ3JhX2JveF9tXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9522,
    in_GraphicFileId: "Legra_Box_M_450_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d23d9b7f-bf2f-4d93-8224-120d5f8b9f1f_legra_box_m_450_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=bBYCwXfoZ33GHWB1OIyaNrQVrYciKJa6h4pSXK8%2BIks%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDIzZDliN2YtYmYyZi00ZDkzLTgyMjQtMTIwZDVmOGI5ZjFmX2xlZ3JhX2JveF9tXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9523,
    in_GraphicFileId: "Legra_Box_M_450_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e1cd8258-5126-45e4-a049-b483803ce563_legra_box_m_450_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=4ochoqtgQlF6aSFRvJEkyvG%2BZvANZLvEwBS3bnjW3zo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTFjZDgyNTgtNTEyNi00NWU0LWEwNDktYjQ4MzgwM2NlNTYzX2xlZ3JhX2JveF9tXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9524,
    in_GraphicFileId: "Legra_Box_M_500_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/65cd8e7d-38bc-4465-9132-1891f403f981_legra_box_m_500_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=iZN4qh9MXPDuw46Wn976b%2Bah1%2BZW%2BQna1yVLrmep8XQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjVjZDhlN2QtMzhiYy00NDY1LTkxMzItMTg5MWY0MDNmOTgxX2xlZ3JhX2JveF9tXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9525,
    in_GraphicFileId: "Legra_Box_M_500_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ac9f6ece-c262-4ad7-9e13-50221c2073bb_legra_box_m_500_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=or5lSTDSQ%2FMfJNUXcYtZA7ZCGBso%2BLgmXE9Osa2FRYQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWM5ZjZlY2UtYzI2Mi00YWQ3LTllMTMtNTAyMjFjMjA3M2JiX2xlZ3JhX2JveF9tXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9526,
    in_GraphicFileId: "Legra_Box_M_550_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d729863c-3284-42b1-98c6-8e63de24c8e2_legra_box_m_550_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=V68dqJzkloTLrVcZOQKYOpZ1Fy%2BPz0fl%2ByjslEY0Zuk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDcyOTg2M2MtMzI4NC00MmIxLTk4YzYtOGU2M2RlMjRjOGUyX2xlZ3JhX2JveF9tXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9527,
    in_GraphicFileId: "Legra_Box_M_550_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/153a6ee8-a441-45ec-a6fa-05c6c1daea9a_legra_box_m_550_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=w%2FcBeah8AaDXSfvPVhL4c%2BLf0PzmQzQu2kNMPxpKB3c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTUzYTZlZTgtYTQ0MS00NWVjLWE2ZmEtMDVjNmMxZGFlYTlhX2xlZ3JhX2JveF9tXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9528,
    in_GraphicFileId: "Legra_Box_M_600_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1c3203e4-e50b-446d-a982-d617e0dd6ffe_legra_box_m_600_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2BkYAvBkZGrqZXRwP3Vy4gPCllKWit8C8eRh0SLLtWvo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWMzMjAzZTQtZTUwYi00NDZkLWE5ODItZDYxN2UwZGQ2ZmZlX2xlZ3JhX2JveF9tXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9529,
    in_GraphicFileId: "Legra_Box_M_600_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7fd798c7-0075-4514-aa1e-e6a5977c7272_legra_box_m_600_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=QL%2BrcCw%2BYHi546MdNXDPCkogj%2FiKPGM9RLv%2F%2FybAqDc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2ZkNzk4YzctMDA3NS00NTE0LWFhMWUtZTZhNTk3N2M3MjcyX2xlZ3JhX2JveF9tXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9530,
    in_GraphicFileId: "Legra_Box_M_650_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4ae16f79-9205-4aed-8550-96fa1a7b6154_legra_box_m_650_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=e3kfWLNJzKMNKzPOQzBgUpAGi4OoHiBX707EwBu%2BC8Y%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGFlMTZmNzktOTIwNS00YWVkLTg1NTAtOTZmYTFhN2I2MTU0X2xlZ3JhX2JveF9tXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9531,
    in_GraphicFileId: "Legra_Box_M_650_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/69f1e534-198d-4c3d-8155-50eaa5e60091_legra_box_m_650_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=dBFm3NtmryqegwDdhHCg37dIuTjrDkYh32jwYvRMA18%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjlmMWU1MzQtMTk4ZC00YzNkLTgxNTUtNTBlYWE1ZTYwMDkxX2xlZ3JhX2JveF9tXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9532,
    in_GraphicFileId: "Legra_Box_N_400_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a6b9e78e-df85-4dd1-999d-9d8567cc5049_legra_box_n_400_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=wL7%2BoJW47hpWpU3z8kU%2B5Mv3r4tJmbWe6brUSUd3yeE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTZiOWU3OGUtZGY4NS00ZGQxLTk5OWQtOWQ4NTY3Y2M1MDQ5X2xlZ3JhX2JveF9uXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9533,
    in_GraphicFileId: "Legra_Box_N_400_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a9a97913-7c17-462e-8360-28ca3165f5ed_legra_box_n_400_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=xpfAOKq3hJ0HSFKQdvLITYz5lLpUiZMn863Tk2GtemA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTlhOTc5MTMtN2MxNy00NjJlLTgzNjAtMjhjYTMxNjVmNWVkX2xlZ3JhX2JveF9uXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9534,
    in_GraphicFileId: "Legra_Box_N_450_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a1a2302a-cb82-4104-9222-4932b711f1a0_legra_box_n_450_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=CBY5cuioN6UI54T9C2IHd3v22T%2BHo7NWzdo5m0nUU3Q%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTFhMjMwMmEtY2I4Mi00MTA0LTkyMjItNDkzMmI3MTFmMWEwX2xlZ3JhX2JveF9uXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9535,
    in_GraphicFileId: "Legra_Box_N_450_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/38d35753-6cb0-4071-9eed-89ca26dd3e26_legra_box_n_450_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=YpfURdnU9gNVHNNLGXKbr7hS4CHsAiN1yfcGkL%2BIZng%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzhkMzU3NTMtNmNiMC00MDcxLTllZWQtODljYTI2ZGQzZTI2X2xlZ3JhX2JveF9uXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9536,
    in_GraphicFileId: "Legra_Box_N_500_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3357d1a2-e4b3-475b-908c-3b1074aaca25_legra_box_n_500_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2BHbSDlS1UgqdfqIw594XCP1RLdKryXMK%2FK0BIIOfI0o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzM1N2QxYTItZTRiMy00NzViLTkwOGMtM2IxMDc0YWFjYTI1X2xlZ3JhX2JveF9uXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9537,
    in_GraphicFileId: "Legra_Box_N_500_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/18da3a38-d227-479f-9881-71f4d48e6abe_legra_box_n_500_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=RLfS0ALltLO8FDurHkVOvYopdJPh7g6smulmCxJYBdE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMThkYTNhMzgtZDIyNy00NzlmLTk4ODEtNzFmNGQ0OGU2YWJlX2xlZ3JhX2JveF9uXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9538,
    in_GraphicFileId: "Legra_Box_N_550_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a08cbde8-ab4d-4b4a-a171-2fd226db6c3a_legra_box_n_550_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=wlBTmRjnTU7lFZVwhy0EOZAmjaLYAdSLLyxm7Jfzevc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTA4Y2JkZTgtYWI0ZC00YjRhLWExNzEtMmZkMjI2ZGI2YzNhX2xlZ3JhX2JveF9uXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9539,
    in_GraphicFileId: "Legra_Box_N_550_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/67d7974e-08d0-4ebb-a6b0-a0aeab951ee5_legra_box_n_550_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=kIqR2wm44Evf%2BXnSKp1S2g9y8HWmuHvw80Mq8UnYCUw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjdkNzk3NGUtMDhkMC00ZWJiLWE2YjAtYTBhZWFiOTUxZWU1X2xlZ3JhX2JveF9uXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9540,
    in_GraphicFileId: "Legra_Pure_C",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/557041f7-a69e-48b4-883e-6e37c98107f5_legra_c_low.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZUG4jkU%2FX4al3VetztJzNknI1U0vfmw77MOIxPAAZz4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTU3MDQxZjctYTY5ZS00OGI0LTg4M2UtNmUzN2M5ODEwN2Y1X2xlZ3JhX2NfbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9541,
    in_GraphicFileId: "Legra_Pure_F",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5899fec4-7635-4bce-94bf-1e399df74e68_legra_f_low.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=lVmK1op384jmJwwHvF%2FL50kdCIMUUCk5G0QWVR%2FQUBE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTg5OWZlYzQtNzYzNS00YmNlLTk0YmYtMWUzOTlkZjc0ZTY4X2xlZ3JhX2ZfbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9542,
    in_GraphicFileId: "Legra_Pure_K",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0baec70a-f8e1-4662-88eb-0ff6a3662890_legra_k_low.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=m5Z%2BU7QGa%2FKuRR7ZNnmyotQLIlyT74H9deleOFzl36Q%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGJhZWM3MGEtZjhlMS00NjYyLTg4ZWItMGZmNmEzNjYyODkwX2xlZ3JhX2tfbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9543,
    in_GraphicFileId: "Legra_Pure_M",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a2b95503-a6da-4313-942e-de9f68e00433_legra_m_low.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=YXoTwyvUJ5MZ1P78eV5x6DCOY%2FVO%2FuTp1OaxUkaIE0M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTJiOTU1MDMtYTZkYS00MzEzLTk0MmUtZGU5ZjY4ZTAwNDMzX2xlZ3JhX21fbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9544,
    in_GraphicFileId: "Legra_Pure_N",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/623826c0-8399-461c-b17e-903f87deb2e6_legra_n_low.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=AHUqnx%2BH1PMOSznzX6Q7A6iDum5PKwooAMEk%2B05LLQ0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjIzODI2YzAtODM5OS00NjFjLWIxN2UtOTAzZjg3ZGViMmU2X2xlZ3JhX25fbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9545,
    in_GraphicFileId: "Legra_Slide_270_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5559c8d1-277d-4b43-8823-6710fd058b9f_legra_glide_270_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=TKe3QOCCa3LxfYP8FJ7CraWxCzsrUnLyndOPyMSC8kc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTU1OWM4ZDEtMjc3ZC00YjQzLTg4MjMtNjcxMGZkMDU4YjlmX2xlZ3JhX2dsaWRlXzI3MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9546,
    in_GraphicFileId: "Legra_Slide_270_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e1a02cb8-14ac-4965-bf8f-a44ed2793d3e_legra_glide_270_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=F1Aq1nTLT1DCNavvlze6O9eTMUM7QTcU2qyuInF1FHg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTFhMDJjYjgtMTRhYy00OTY1LWJmOGYtYTQ0ZWQyNzkzZDNlX2xlZ3JhX2dsaWRlXzI3MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9547,
    in_GraphicFileId: "Legra_Slide_300_350_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/84e650f5-cf16-48cb-828e-d4accf0757ae_legra_glide_300_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=32vUiLA1IDI2Se%2FnjeHswGZILA4U5Ec3tfH5gB%2BJSgA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODRlNjUwZjUtY2YxNi00OGNiLTgyOGUtZDRhY2NmMDc1N2FlX2xlZ3JhX2dsaWRlXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9548,
    in_GraphicFileId: "Legra_Slide_300_350_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1965c1da-fcf5-4578-baa6-1f6635a1e1ec_legra_glide_300_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=nB91RU5JcApl6E7qZWZ%2BT02srnGlADcusj%2BKgspjb%2Fs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTk2NWMxZGEtZmNmNS00NTc4LWJhYTYtMWY2NjM1YTFlMWVjX2xlZ3JhX2dsaWRlXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9549,
    in_GraphicFileId: "Legra_Slide_400_450_500_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c5fbbf74-3b5b-4f44-a1e1-d05ae0c1ee02_legra_glide_400_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=H4IxrbQx5vpbu0EmzCPrZkVL7nvlIb%2Fc%2BsZFSU3wZOw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzVmYmJmNzQtM2I1Yi00ZjQ0LWExZTEtZDA1YWUwYzFlZTAyX2xlZ3JhX2dsaWRlXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9550,
    in_GraphicFileId: "Legra_Slide_400_450_500_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/be7bc78b-f844-47b6-ac26-1c659404eed5_legra_glide_400_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Q9ck26NKO%2FW7W2muDWiZOLtVjAnJVwXgskPNG0XBzxQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmU3YmM3OGItZjg0NC00N2I2LWFjMjYtMWM2NTk0MDRlZWQ1X2xlZ3JhX2dsaWRlXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9551,
    in_GraphicFileId: "Legra_Slide_450_H_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c5fbbf74-3b5b-4f44-a1e1-d05ae0c1ee02_legra_glide_400_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=H4IxrbQx5vpbu0EmzCPrZkVL7nvlIb%2Fc%2BsZFSU3wZOw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzVmYmJmNzQtM2I1Yi00ZjQ0LWExZTEtZDA1YWUwYzFlZTAyX2xlZ3JhX2dsaWRlXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9552,
    in_GraphicFileId: "Legra_Slide_450_H_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/be7bc78b-f844-47b6-ac26-1c659404eed5_legra_glide_400_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Q9ck26NKO%2FW7W2muDWiZOLtVjAnJVwXgskPNG0XBzxQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmU3YmM3OGItZjg0NC00N2I2LWFjMjYtMWM2NTk0MDRlZWQ1X2xlZ3JhX2dsaWRlXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9553,
    in_GraphicFileId: "Legra_Slide_500_550_600_H_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a312867c-71f3-4d00-9f35-a6666f17ed63_legra_glide_600_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Y75%2BEBgpVToiABsGUMIV4BQZX%2FgU5NwGQ4iMDIV4dLo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTMxMjg2N2MtNzFmMy00ZDAwLTlmMzUtYTY2NjZmMTdlZDYzX2xlZ3JhX2dsaWRlXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9554,
    in_GraphicFileId: "Legra_Slide_500_550_600_H_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a031af9c-100f-450a-b859-b7986f3f4114_legra_glide_600_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=rjfFoztvP9B8lzSbrHEWzRtpgsdXaiuv0cdbefy%2Bg0U%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTAzMWFmOWMtMTAwZi00NTBhLWI4NTktYjc5ODZmM2Y0MTE0X2xlZ3JhX2dsaWRlXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9555,
    in_GraphicFileId: "Legra_Slide_550_600_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a312867c-71f3-4d00-9f35-a6666f17ed63_legra_glide_600_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Y75%2BEBgpVToiABsGUMIV4BQZX%2FgU5NwGQ4iMDIV4dLo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTMxMjg2N2MtNzFmMy00ZDAwLTlmMzUtYTY2NjZmMTdlZDYzX2xlZ3JhX2dsaWRlXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9556,
    in_GraphicFileId: "Legra_Slide_550_600_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a031af9c-100f-450a-b859-b7986f3f4114_legra_glide_600_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=rjfFoztvP9B8lzSbrHEWzRtpgsdXaiuv0cdbefy%2Bg0U%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTAzMWFmOWMtMTAwZi00NTBhLWI4NTktYjc5ODZmM2Y0MTE0X2xlZ3JhX2dsaWRlXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9557,
    in_GraphicFileId: "Legra_Slide_650_H_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ff2a90ba-a0ed-4636-9800-bb4d15e43e99_slide_650_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=9rfJ9QFWypLXD4FcbrOMGNbNabpbWsefTq28ZDPZCEU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmYyYTkwYmEtYTBlZC00NjM2LTk4MDAtYmI0ZDE1ZTQzZTk5X3NsaWRlXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9558,
    in_GraphicFileId: "Legra_Slide_650_H_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3d512dc2-af80-45f2-8ed4-96184b282ec5_slide_650_right.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2B7O9pTAzfgYbwtFXNAYrkn7AaeOxIJZ6EEnrXVsVHSU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2Q1MTJkYzItYWY4MC00NWYyLThlZDQtOTYxODRiMjgyZWM1X3NsaWRlXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9559,
    in_GraphicFileId: "MinifixConnectionBolt01",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e2017afc-654a-4d8b-8426-f1d5aa3d110c_262_28_920_details_low.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=dSwF%2FZx7luzV2p8IBwLJ6Rxh9QrKpQ53M7aImhW6EZI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTIwMTdhZmMtNjU0YS00ZDhiLTg0MjYtZjFkNWFhM2QxMTBjXzI2Ml8yOF85MjBfZGV0YWlsc19sb3cub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9560,
    in_GraphicFileId: "MinifixConnectionCover",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/93d43825-3030-46b4-b839-1a22c03152a5_262_24_751_details_low.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=xVW%2Bkygg5x6meLJwNpy7hJSLAtL36L5z0DAf70HNC5o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTNkNDM4MjUtMzAzMC00NmI0LWI4MzktMWEyMmMwMzE1MmE1XzI2Ml8yNF83NTFfZGV0YWlsc19sb3cub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9561,
    in_GraphicFileId: "MinifixConnectionHousing01",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/af50cb8a-e74e-440a-b71e-17dc1673c078_262_26_533_details_low.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=dNCyzUKwMYKbHlkivNFaMjJiMOldd1ALAYb%2FmoQw1CY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWY1MGNiOGEtZTc0ZS00NDBhLWI3MWUtMTdkYzE2NzNjMDc4XzI2Ml8yNl81MzNfZGV0YWlsc19sb3cub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9562,
    in_GraphicFileId: "Model3D_Aventos_HF_Connector",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/df6d93aa-d341-462e-8247-ec8c5e4a1e26_connector.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=8fi2SdaiUtwcSNfQiWgnEhriXEotFLyCeT%2BsevRGrdk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGY2ZDkzYWEtZDM0MS00NjJlLTgyNDctZWM4YzVlNGExZTI2X2Nvbm5lY3Rvci5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9563,
    in_GraphicFileId: "Model3D_Aventos_HF_Mech",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ebcfdc4d-c97b-4c53-b018-a6fc0d0be5a0_mech_480_610.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=qB9OgS5tjnSzI%2B8H9daUivjddulryPkj1rOtcXlY3aM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWJjZmRjNGQtYzk3Yi00YzUzLWIwMTgtYTZmYzBkMGJlNWEwX21lY2hfNDgwXzYxMC5vYmo=',
    Model3DParameters: {
      "regions": {
        "x": [
          {
            "pos": 0,
            "scalable": false
          }
        ],
        "y": [
          {
            "pos": 250,
            "scalable": false
          },
          {
            "pos": 340,
            "scalable": true
          }
        ],
        "z": [
          {
            "pos": 0,
            "scalable": false
          }
        ]
      },
      "attachmentId": "bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTFkM2EyMjgtZWQ1My00MDQ0LTgwZDctYTBmOTM1YjEyYmYwX2RhdGEuYmlu"
    },
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9564,
    in_GraphicFileId: "Model3D_Aventos_HF_Mech_480",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/eafd42a3-bded-4bba-ac41-0d842375300a_aventos_hf_arm_480.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=fgeUnHMeol208xM0L%2BJ2gt2lIeXBjaAvIIFzwz6ugvs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWFmZDQyYTMtYmRlZC00YmJhLWFjNDEtMGQ4NDIzNzUzMDBhX2F2ZW50b3NfaGZfYXJtXzQ4MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9565,
    in_GraphicFileId: "Model3D_Aventos_HF_Mech_600",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/64308ec8-b17a-410f-a76a-5543715c3c18_aventos_hf_arm_600.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=T4DqxSVHgwuWUskoW0v8tUfEY67X5%2BK6CkUYR4CDc2k%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjQzMDhlYzgtYjE3YS00MTBmLWE3NmEtNTU0MzcxNWMzYzE4X2F2ZW50b3NfaGZfYXJtXzYwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9566,
    in_GraphicFileId: "Model3D_Aventos_HF_Mech_840",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ad95c3e2-3d7e-4310-8f6c-6745e578848e_aventos_hf_arm_840.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=B49mKpXnHTzT2OYGQZwbb9tjrfDlowcrnKB7I8plgb8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWQ5NWMzZTItM2Q3ZS00MzEwLThmNmMtNjc0NWU1Nzg4NDhlX2F2ZW50b3NfaGZfYXJtXzg0MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9567,
    in_GraphicFileId: "Model3D_Aventos_HF_PSL",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fa55b49e-5a9c-468a-9c55-7d47b916e6d1_aventos_psl.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ndwzshfKfk9kbIxnVSZSZkkGHQhz7VNpSjCw9dBJ5tY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmE1NWI0OWUtNWE5Yy00NjhhLTljNTUtN2Q0N2I5MTZlNmQxX2F2ZW50b3NfcHNsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9568,
    in_GraphicFileId: "Model3D_Aventos_HF_PSR",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ed6c1f2e-9c75-4aeb-b5c5-ac69d02ef178_aventos_psr.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=NRp89gPPMbQzGPzDnEyyiPwkKoR3Z7sGEVcrE%2Fc1qiY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWQ2YzFmMmUtOWM3NS00YWViLWI1YzUtYWM2OWQwMmVmMTc4X2F2ZW50b3NfcHNyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9569,
    in_GraphicFileId: "Model3D_Aventos_HK_Connector",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9cada489-54d6-4d82-8f02-d1c9bc4d6b8d_aventos_hk_connector.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=xRTdCduMvjLvAD5UTmdQXf%2BzH%2B1EP5tFUR6iyRhx%2Bnk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWNhZGE0ODktNTRkNi00ZDgyLThmMDItZDFjOWJjNGQ2YjhkX2F2ZW50b3NfaGtfY29ubmVjdG9yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9570,
    in_GraphicFileId: "Model3D_Aventos_HK_PSL",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d09ebdc2-9df5-450b-bd9c-5240c01f9d05_aventos_hk_l.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=wilaX1RQ06essh7pGoRooRxvgxaHDDe6B0NA3UcEBZY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDA5ZWJkYzItOWRmNS00NTBiLWJkOWMtNTI0MGMwMWY5ZDA1X2F2ZW50b3NfaGtfbC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9571,
    in_GraphicFileId: "Model3D_Aventos_HK_PSR",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fa7cd538-824e-4254-9bfe-ed73b1597910_aventos_hk_r.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=tYV6hQPe9JWfcq2LPstKY8cRf97ke%2BDOHtbz5i%2BZWfE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmE3Y2Q1MzgtODI0ZS00MjU0LTliZmUtZWQ3M2IxNTk3OTEwX2F2ZW50b3NfaGtfci5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9572,
    in_GraphicFileId: "Model3D_Aventos_HKXS_Carcase_L",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e43e4574-101a-4d01-be91-02476b374dc8_hkxs_cl.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=EkMamVGOtrcyFOh6XNbFnIc4VqEnjcfwetIy3Rk1s3Y%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTQzZTQ1NzQtMTAxYS00ZDAxLWJlOTEtMDI0NzZiMzc0ZGM4X2hreHNfY2wub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9573,
    in_GraphicFileId: "Model3D_Aventos_HKXS_Carcase_R",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ad3dfd91-1828-45f2-9315-ea3409611a34_hkxs_cr.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=mBsxYE8wbmsMwRY7NChvv6LNIMpkAXPNCVI0XBvhk8o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWQzZGZkOTEtMTgyOC00NWYyLTkzMTUtZWEzNDA5NjExYTM0X2hreHNfY3Iub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9574,
    in_GraphicFileId: "Model3D_Aventos_HKXS_Front",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/944357e4-060b-4aa7-a9d7-98e745443786_hkxs_connector.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=n5IEVdd2PycdmON8EbjOlw3VXMufueeUm2TYZR%2F9PB8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTQ0MzU3ZTQtMDYwYi00YWE3LWE5ZDctOThlNzQ1NDQzNzg2X2hreHNfY29ubmVjdG9yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9575,
    in_GraphicFileId: "Model3D_Aventos_HKXS_Mech",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d7370768-7e5c-4d79-a7f5-939472ee5d34_hkxs_mech.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=sH5LiqJT1vDTwNAlvflCtsbVBXmJ80WTB922j7sG0X0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDczNzA3NjgtN2U1Yy00ZDc5LWE3ZjUtOTM5NDcyZWU1ZDM0X2hreHNfbWVjaC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9576,
    in_GraphicFileId: "Model3D_Aventos_HL_Mech1",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3ab70a41-8be6-41e3-a270-b3fad60e8437_aventos_hl_mech1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=DUW1sel7CyXi8xGtkBv%2FmOkhhaLQu8Md4KN7to6MUoU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2FiNzBhNDEtOGJlNi00MWUzLWEyNzAtYjNmYWQ2MGU4NDM3X2F2ZW50b3NfaGxfbWVjaDEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9577,
    in_GraphicFileId: "Model3D_Aventos_HL_Mech2",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/52efcd62-4870-4a86-9fe1-fdba5cdf3189_aventos_hl_mech2.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=8nMrXRDuR0t0NTLXSZdRZX5IDpgE2Aqa1iXUmZyDiMg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTJlZmNkNjItNDg3MC00YTg2LTlmZTEtZmRiYTVjZGYzMTg5X2F2ZW50b3NfaGxfbWVjaDIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9578,
    in_GraphicFileId: "Model3D_Aventos_HL_Mech3",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c76f1568-17ad-46fd-ad96-1c4da58ed0bc_aventos_hl_mech3.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=C%2FjT%2Fef2X1hJKY3Xl3a2qeemVfm%2FrGV3FL8x6tH6M%2FQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzc2ZjE1NjgtMTdhZC00NmZkLWFkOTYtMWM0ZGE1OGVkMGJjX2F2ZW50b3NfaGxfbWVjaDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9579,
    in_GraphicFileId: "Model3D_Aventos_HL_Mech4",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1ceb7e1d-ad90-4695-8e5d-85c1f83ce47c_aventos_hl_mech4.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=3dQFrMG0cVvnuqvWKN%2FbJpMJzJHwS%2FmrOgZXf2CIXaA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWNlYjdlMWQtYWQ5MC00Njk1LThlNWQtODVjMWY4M2NlNDdjX2F2ZW50b3NfaGxfbWVjaDQub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9580,
    in_GraphicFileId: "Model3D_Aventos_HL_PSL",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3caebc3c-6e95-49f5-a7fd-4ead387beb7d_aventos_hl_psl.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ueGRakC1SjgtdeXtha2uv%2B3s%2B7fULlgcca1F9g1y8fM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2NhZWJjM2MtNmU5NS00OWY1LWE3ZmQtNGVhZDM4N2JlYjdkX2F2ZW50b3NfaGxfcHNsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9581,
    in_GraphicFileId: "Model3D_Aventos_HL_PSR",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8ed8559d-bf76-4b33-bf8b-8b8f7fdfeaf9_aventos_hl_psr.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=cUxI5JvXPawFmSOZTRP4TGsV1s9gjXi%2Fm4palHcoYWA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGVkODU1OWQtYmY3Ni00YjMzLWJmOGItOGI4ZjdmZGZlYWY5X2F2ZW50b3NfaGxfcHNyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9582,
    in_GraphicFileId: "Model3D_Aventos_HS_PSL",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/945596c3-8594-4960-88d8-3e842b652a8d_aventos_hs_psl.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=2Sl0kYRLjQvC6cOLsBh5uqC3ugFuVr32doveyy0EGrY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTQ1NTk2YzMtODU5NC00OTYwLTg4ZDgtM2U4NDJiNjUyYThkX2F2ZW50b3NfaHNfcHNsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9583,
    in_GraphicFileId: "Model3D_Aventos_HS_PSR",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/86c321d4-1cd6-49e2-8d2d-d0a81263ca4e_aventos_hs_psr.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=W63ANs7TTDR7nPcLrUk5px0x1SyDq4%2FZb6HGK1hvwuw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODZjMzIxZDQtMWNkNi00OWUyLThkMmQtZDBhODEyNjNjYTRlX2F2ZW50b3NfaHNfcHNyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9584,
    in_GraphicFileId: "Model3D_Legra_FrontBotCon",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/22d3bca9-cb0d-49cf-8810-54ad5ee1f252_legra_bottofrontcon.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=9cYwaw%2FGDVu8aW79drDzbUyvxwG%2BCgNbshNlzdBvGYY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjJkM2JjYTktY2IwZC00OWNmLTg4MTAtNTRhZDVlZTFmMjUyX2xlZ3JhX2JvdHRvZnJvbnRjb24ub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9585,
    in_GraphicFileId: "Model3DAdapterHousingLong",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9f1ac3bc-ca2d-40f6-8994-480c5074412d_adapterhousinglongblack_356_04_362.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=GsLwKWYcSV6Hv4WkcMdxfqtcFS33MaDrwusPr9MHeNY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWYxYWMzYmMtY2EyZC00MGY2LTg5OTQtNDgwYzUwNzQ0MTJkX2FkYXB0ZXJob3VzaW5nbG9uZ2JsYWNrXzM1Nl8wNF8zNjIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9586,
    in_GraphicFileId: "Model3DAdapterHousingShort",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/01c89764-66ee-4cd3-82e1-48b630f15049_adapterhousingshortblack_356_04_363.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=4vhSpfSd0vvtW273eYwdRw03nOW%2FWbqDW%2BfX4qrvD7M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDFjODk3NjQtNjZlZS00Y2QzLTgyZTEtNDhiNjMwZjE1MDQ5X2FkYXB0ZXJob3VzaW5nc2hvcnRibGFja18zNTZfMDRfMzYzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9587,
    in_GraphicFileId: "Model3DBracket01",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a9765b6c-9723-4039-8dd1-051ea6908cdf_bracket%20-%20260_28_004.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=PXZrAkzYOz1xQEPAZslCidsfdhooHe6Vmy2Uc5t14nM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTk3NjViNmMtOTcyMy00MDM5LThkZDEtMDUxZWE2OTA4Y2RmX2JyYWNrZXQgLSAyNjBfMjhfMDA0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9588,
    in_GraphicFileId: "Model3DBracketHandle128",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fdce53ea-dd19-44cc-9e93-6385fed78204_155_01_251_2.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=VP0fHhITg4ES99TtwL2ZhopHxut7A%2FdR0EbryVA3XCs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmRjZTUzZWEtZGQxOS00NGNjLTllOTMtNjM4NWZlZDc4MjA0XzE1NV8wMV8yNTFfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9589,
    in_GraphicFileId: "Model3DBracketHandle160",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/731d1eeb-137b-4561-a92c-d6c92709f15a_155_01_252_3.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Gyx9WDPM52G5fcwa%2F5mDMEA66lhe7Nzb2AK9kT%2BxKV4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzMxZDFlZWItMTM3Yi00NTYxLWE5MmMtZDZjOTI3MDlmMTVhXzE1NV8wMV8yNTJfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9590,
    in_GraphicFileId: "Model3DBracketHandle192",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/13254fd6-796f-4b16-8b96-fafe5cddd14a_155_01_253_4.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=VmT09WA8SOx0Eh9OP%2B2pnP9YAmY%2FnKrEoD04rXAn%2F%2FM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTMyNTRmZDYtNzk2Zi00YjE2LThiOTYtZmFmZTVjZGRkMTRhXzE1NV8wMV8yNTNfNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9591,
    in_GraphicFileId: "Model3DBracketHandle224",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ca280a82-a744-4411-9604-920175664a6a_155_01_254_5.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=crW8rtgOq5ug5rplBH9l2XEpMZB1BHgOVrkcTbhDq3g%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2EyODBhODItYTc0NC00NDExLTk2MDQtOTIwMTc1NjY0YTZhXzE1NV8wMV8yNTRfNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9592,
    in_GraphicFileId: "Model3DBracketHandle288",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bbe48421-7dc3-49b4-bcb5-4f162c5aecc4_155_01_255_6.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=w9m7ZSsMyoLoh%2BZ0t86C9CldDj4iD0%2F2BUnCbJn3bmI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmJlNDg0MjEtN2RjMy00OWI0LWJjYjUtNGYxNjJjNWFlY2M0XzE1NV8wMV8yNTVfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9593,
    in_GraphicFileId: "Model3DBracketHandle320",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1a5f2247-667e-4bb2-9e7f-82578c8aabb8_155_01_256_7.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=cJFWak1QhukBXE5L12uQy4b0h8zQjZfqEj5vXWvwfpY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWE1ZjIyNDctNjY3ZS00YmIyLTllN2YtODI1NzhjOGFhYmI4XzE1NV8wMV8yNTZfNy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9594,
    in_GraphicFileId: "Model3DBracketHandle352",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1fc65395-e0cb-4507-86ec-0813cb37b0ca_155_01_257_8.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=X2SWf5fakFC6TME3Hep3Q5%2FSj%2FrdjXVF159A4RABjlE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWZjNjUzOTUtZTBjYi00NTA3LTg2ZWMtMDgxM2NiMzdiMGNhXzE1NV8wMV8yNTdfOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9595,
    in_GraphicFileId: "Model3DBracketHandle448",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7154fe66-02df-4a00-9c8a-fbf353b5d5e8_155_01_258_9.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=3X%2FequB0ZK6DFaAK1mupfr%2Bva9Sv2nPPajtEB1taDAQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzE1NGZlNjYtMDJkZi00YTAwLTljOGEtZmJmMzUzYjVkNWU4XzE1NV8wMV8yNThfOS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9596,
    in_GraphicFileId: "Model3DBracketHandle480",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/21251a6b-0520-4339-a45d-71977d214eca_155_01_259_10.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=sPERV9EzuGM6L1nSMU4IDkK%2Fo3byeL0Hy8R43c3WVeQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjEyNTFhNmItMDUyMC00MzM5LWE0NWQtNzE5NzdkMjE0ZWNhXzE1NV8wMV8yNTlfMTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9597,
    in_GraphicFileId: "Model3DBracketHandle560",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/796800ba-d275-44be-a1d1-5708fa68734a_155_01_260_11.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=fLS1AE2sRJpsBO3GA8SiTBoj2fQuMXRkLIlrlRujr3g%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzk2ODAwYmEtZDI3NS00NGJlLWExZDEtNTcwOGZhNjg3MzRhXzE1NV8wMV8yNjBfMTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9598,
    in_GraphicFileId: "Model3DBracketHandle640",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a09f7e53-861d-46f9-9808-404636e68e14_155_01_261_12.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=CvkaQTE4J7ylnizznPe9vshbhKZ%2FtZ2jR1wqVk6zdbk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTA5ZjdlNTMtODYxZC00NmY5LTk4MDgtNDA0NjM2ZTY4ZTE0XzE1NV8wMV8yNjFfMTIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9599,
    in_GraphicFileId: "Model3DBracketHandle96",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6e1e305f-72e5-410f-afda-e5f4c162fb56_155_01_250_1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=tovlDS5BOGMA2ayoVm5n90z%2FevljGCP7S2fi1Igrsxk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmUxZTMwNWYtNzJlNS00MTBmLWFmZGEtZTVmNGMxNjJmYjU2XzE1NV8wMV8yNTBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9600,
    in_GraphicFileId: "Model3DBracketHandle960",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8c4d8419-6e97-4215-aba7-c4ac762f851a_155_01_262_13.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2BymOZ4D8FsQp76y0l2U9NvaNn7GF2Bas2BT%2F3Q490qE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGM0ZDg0MTktNmU5Ny00MjE1LWFiYTctYzRhYzc2MmY4NTFhXzE1NV8wMV8yNjJfMTMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9601,
    in_GraphicFileId: "Model3DbrARRAS5",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cb80c49b-ee43-4f68-a762-fe5043e8ec52_support2.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=CWwZYiyE21M1%2Bf3HyAqKgbGf9stKiwM80hHVfk%2F2FeA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2I4MGM0OWItZWU0My00ZjY4LWE3NjItZmU1MDQzZThlYzUyX3N1cHBvcnQyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9602,
    in_GraphicFileId: "Model3DbrTucano",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c5753fb8-9974-4886-817c-a3ae36b667f2_support1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=9lBtYLgC36LdaOfKuYMdW0%2B4E89dl5th39TgKPicEes%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzU3NTNmYjgtOTk3NC00ODg2LTgxN2MtYTNhZTM2YjY2N2YyX3N1cHBvcnQxLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9603,
    in_GraphicFileId: "Model3DCoverCap290.40.701",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9c050326-c6b3-452b-a056-55e678c46df6_cover%20cap%20right%20-%20290_40_701.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=VvkE4N7Mvf3hU5jtvUpH2YQg7Uow3jcymA3ipcz41cs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWMwNTAzMjYtYzZiMy00NTJiLWEwNTYtNTVlNjc4YzQ2ZGY2X2NvdmVyIGNhcCByaWdodCAtIDI5MF80MF83MDEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9604,
    in_GraphicFileId: "Model3DCoverCap290.40.702",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b1373eb8-0bf3-4e14-bfeb-1815808c67e0_cover%20cap%20left%20-%20290_40_702.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZqKBfHXo6WqjEgREKp675UsYPvyFRyNz0yxBST1ywlc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjEzNzNlYjgtMGJmMy00ZTE0LWJmZWItMTgxNTgwOGM2N2UwX2NvdmVyIGNhcCBsZWZ0IC0gMjkwXzQwXzcwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9605,
    in_GraphicFileId: "Model3DDesignLegRectangular001H100",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8aed7f75-8579-47bf-be45-5246dc7d66cb_model3ddesignlegrectangular001h100.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=yloFovvRhd8Hwg5hl6mbbxWGWTpJ6ld6I6%2FzGvtlNmo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGFlZDdmNzUtODU3OS00N2JmLWJlNDUtNTI0NmRjN2Q2NmNiX21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgxMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9606,
    in_GraphicFileId: "Model3DDesignLegRectangular001H150",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3a8f1933-3c40-4b64-906f-f2504ee868c7_model3ddesignlegrectangular001h150.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=BrNt8RpNxrPwfwVEBlK95qVs0KlOOdThL7og3F7H%2BfE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2E4ZjE5MzMtM2M0MC00YjY0LTkwNmYtZjI1MDRlZTg2OGM3X21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgxNTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9607,
    in_GraphicFileId: "Model3DDesignLegRectangular001H200",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/82bc051a-66b4-46da-bf4d-d9a730843434_model3ddesignlegrectangular001h200.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=QNK8zqZzPklsrSacLwWtIezRG%2BFSkANxB9MhrtKMt3s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODJiYzA1MWEtNjZiNC00NmRhLWJmNGQtZDlhNzMwODQzNDM0X21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgyMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9608,
    in_GraphicFileId: "Model3DDesignLegRectangular001H50",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ca222a66-2e3b-4f6f-a9c2-cd4bd6ac2d37_model3ddesignlegrectangular001h50.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=jd3%2F3MV52OrLniOUDVO9AghhMYlENi%2Fa1ZUtc%2BL%2BmJk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2EyMjJhNjYtMmUzYi00ZjZmLWE5YzItY2Q0YmQ2YWMyZDM3X21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWg1MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9609,
    in_GraphicFileId: "Model3DDesignLegRectangular001H80",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0fee7f2d-5533-4d59-a255-f2893dba1b1b_model3ddesignlegrectangular001h80.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=d7jfEhrXCN7nc%2B9%2BVHCLqwm%2FhA9005CFB%2Fz%2BIQVgr9A%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGZlZTdmMmQtNTUzMy00ZDU5LWEyNTUtZjI4OTNkYmExYjFiX21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWg4MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9610,
    in_GraphicFileId: "Model3DDesignLegSlanted001H250",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bacd9b78-d630-4540-8cd0-cd35a2e32799_634_48_050_6.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Mg7N%2Ff3XwSIbZLd8fKtB87hluiJzpbog8pZd3Uf9%2Frw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmFjZDliNzgtZDYzMC00NTQwLThjZDAtY2QzNWEyZTMyNzk5XzYzNF80OF8wNTBfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9611,
    in_GraphicFileId: "Model3DGlueDuststrip",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4eae5edb-e920-4d92-81bd-8c02e7a8701f_glueduststrip.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=6kThHoIm5YoWgAoJcqpXsKA8b%2FCP9nafQaVsPXgouFg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGVhZTVlZGItZTkyMC00ZDkyLTgxYmQtOGMwMmU3YTg3MDFmX2dsdWVkdXN0c3RyaXAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9612,
    in_GraphicFileId: "Model3DHandle100_160",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/04de1e9e-82e5-46cd-82e3-2b39d4ac1b7b_106_69_321_2.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=JJkv8Q0Dph8X%2BI%2Fl1TJErybxQS7F%2BIB8wT7Bb9JiICs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDRkZTFlOWUtODJlNS00NmNkLTgyZTMtMmIzOWQ0YWMxYjdiXzEwNl82OV8zMjFfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9613,
    in_GraphicFileId: "Model3DHandle100_320",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/13bb0c35-9e79-4c1c-8e2d-ae1bc9705f00_106_69_322_3.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Ca9Xhe4rvZqQ5%2BiMja%2BLcxjGBoU6n6bSjL0%2BUSES61U%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTNiYjBjMzUtOWU3OS00YzFjLThlMmQtYWUxYmM5NzA1ZjAwXzEwNl82OV8zMjJfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9614,
    in_GraphicFileId: "Model3DHandle100_64",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bb1f44c3-b573-46ee-bcc3-2d0a23cc5983_106_69_320_1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=4Do6%2BBQE1M3JUdUxpZaWxtA8AxP7%2BBdRFl2mGDbxIdE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmIxZjQ0YzMtYjU3My00NmVlLWJjYzMtMmQwYTIzY2M1OTgzXzEwNl82OV8zMjBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9615,
    in_GraphicFileId: "Model3DHandle110_1060",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/95e6ff12-ccbb-4221-9cd4-56cefd1188d1_117_66_101_19.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=HAbgjbHdBfS%2B%2BRPzBMAHnIbZlELGnftg1QHIUxlpjRc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTVlNmZmMTItY2NiYi00MjIxLTljZDQtNTZjZWZkMTE4OGQxXzExN182Nl8xMDFfMTkub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9616,
    in_GraphicFileId: "Model3DHandle110_1160",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/33070cd1-4a37-4c38-84e5-1e6476eee473_117_66_102_20.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=t%2Bujb4VjuPMJKuVP7qeHvAL2QwpMPClMQTITAIG545E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzMwNzBjZDEtNGEzNy00YzM4LTg0ZTUtMWU2NDc2ZWVlNDczXzExN182Nl8xMDJfMjAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9617,
    in_GraphicFileId: "Model3DHandle110_1260",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/76282ffa-d082-415a-94d4-887b5e5110df_117_66_103_21.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=RRo70KthX%2F2tKK3LlXLpDT0H2TWErYc%2BeTf1LHeYlhk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzYyODJmZmEtZDA4Mi00MTVhLTk0ZDQtODg3YjVlNTExMGRmXzExN182Nl8xMDNfMjEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9618,
    in_GraphicFileId: "Model3DHandle110_128",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d86a752a-5f68-4462-826e-3fe0953715a2_117_66_026_2.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=vELLTCCIYLTKVulJD8plmVtQIS7vJ0Ad0rqWOPgLevs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDg2YTc1MmEtNWY2OC00NDYyLTgyNmUtM2ZlMDk1MzcxNWEyXzExN182Nl8wMjZfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9619,
    in_GraphicFileId: "Model3DHandle110_1360",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/42c394a7-92a7-4e7e-97bd-9936b985653a_117_66_104_22.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Uc%2FElXkc%2BvkzJV8wPdgoHFe%2Bn1UOfXHkaEADaZCadh8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDJjMzk0YTctOTJhNy00ZTdlLTk3YmQtOTkzNmI5ODU2NTNhXzExN182Nl8xMDRfMjIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9620,
    in_GraphicFileId: "Model3DHandle110_1460",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/449845a0-bc56-4497-800c-cc8e5a17cb16_117_66_106_23.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ikjLfRxNljRkLgTRHsA2q4fJNKP4DwrTxqTmPnQxjAQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDQ5ODQ1YTAtYmM1Ni00NDk3LTgwMGMtY2M4ZTVhMTdjYjE2XzExN182Nl8xMDZfMjMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9621,
    in_GraphicFileId: "Model3DHandle110_1560",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c4949ab7-ebaf-4400-b758-f4267a5be514_117_66_107_24.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=pxvDa5aCtsso9Gh1JP1oo0qdMgHSxC4dVIgae7b8P1s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzQ5NDlhYjctZWJhZi00NDAwLWI3NTgtZjQyNjdhNWJlNTE0XzExN182Nl8xMDdfMjQub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9622,
    in_GraphicFileId: "Model3DHandle110_160",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8727e8c4-3ee5-4b63-8a62-d083ea08f028_117_66_035_3.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=IoUbN9W64Pag0KzeUrhYfQhYOKVNDF7ifp9X6LTaLas%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODcyN2U4YzQtM2VlNS00YjYzLThhNjItZDA4M2VhMDhmMDI4XzExN182Nl8wMzVfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9623,
    in_GraphicFileId: "Model3DHandle110_1760",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3a912b5e-b187-417a-b2c0-3d59fa33bb27_117_66_108_25.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=yWgUJBgw4ihZ9h7smcwxPVt1ZDsm3V1t%2BaiV3VNYsQQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2E5MTJiNWUtYjE4Ny00MTdhLWIyYzAtM2Q1OWZhMzNiYjI3XzExN182Nl8xMDhfMjUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9624,
    in_GraphicFileId: "Model3DHandle110_1960",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8c51e5ba-4040-4be7-b105-4cd7660d65a9_117_66_109_26.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=I34zT8uVKYxSyxVgT1BZJwC1rcQerttVtnz2XmEbOSY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGM1MWU1YmEtNDA0MC00YmU3LWIxMDUtNGNkNzY2MGQ2NWE5XzExN182Nl8xMDlfMjYub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9625,
    in_GraphicFileId: "Model3DHandle110_210",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0ee898a6-7e1f-4869-ad30-98177260444f_117_66_045_5.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=4UYBQkW1K9FWycJ%2FAC7XofudvAWElDtRPkUUfw76Rb8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGVlODk4YTYtN2UxZi00ODY5LWFkMzAtOTgxNzcyNjA0NDRmXzExN182Nl8wNDVfNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9626,
    in_GraphicFileId: "Model3DHandle110_260",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6b688ba2-8499-45b5-a839-d19de7b0f28e_117_66_050_6.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FBcI1N1L4Fuj7SW31BbMyZ%2F7IKlDoZ8aJZx8%2FCWCpwo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmI2ODhiYTItODQ5OS00NWI1LWE4MzktZDE5ZGU3YjBmMjhlXzExN182Nl8wNTBfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9627,
    in_GraphicFileId: "Model3DHandle110_310",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4c113995-fa32-4896-b4f2-e352dd581662_117_66_055_8.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=za%2BWXVnCVxSjxFOt3oyT5ansUNfSNR%2BOCIUcFxc6BZI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGMxMTM5OTUtZmEzMi00ODk2LWI0ZjItZTM1MmRkNTgxNjYyXzExN182Nl8wNTVfOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9628,
    in_GraphicFileId: "Model3DHandle110_360",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c50d71b6-f184-475e-8fa7-af86cc4b0ee0_117_66_064_10.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=fn5YAZU%2FW3Co5BCeyWkk6IiFLxTHjqXKcRvneazb5Y8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzUwZDcxYjYtZjE4NC00NzVlLThmYTctYWY4NmNjNGIwZWUwXzExN182Nl8wNjRfMTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9629,
    in_GraphicFileId: "Model3DHandle110_410",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f99ab36a-88f2-44d1-a472-5220b9c08e48_117_66_065_11.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=8jwo0Q7dzdUf3GaFBn2pqwMu4feU%2BdgRJFQvj%2BX3LAs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjk5YWIzNmEtODhmMi00NGQxLWE0NzItNTIyMGI5YzA4ZTQ4XzExN182Nl8wNjVfMTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9630,
    in_GraphicFileId: "Model3DHandle110_460",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b6ffe2e9-7914-450b-ad7d-a2591a951d8e_117_66_075_13.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Btf78PBXCztNaabFbG%2BN4ClcDLWpT%2BZ9Uh2mjarpAdQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjZmZmUyZTktNzkxNC00NTBiLWFkN2QtYTI1OTFhOTUxZDhlXzExN182Nl8wNzVfMTMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9631,
    in_GraphicFileId: "Model3DHandle110_560",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b83d9a59-f7c6-4f3f-bd4b-486028624fd0_117_66_080_14.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=MvzSdoCWVLcVEveZbSLqiIY5jnLAkYjSAhhQ6qSoFPw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjgzZDlhNTktZjdjNi00ZjNmLWJkNGItNDg2MDI4NjI0ZmQwXzExN182Nl8wODBfMTQub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9632,
    in_GraphicFileId: "Model3DHandle110_660",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e3fe572e-deaf-4a8a-8367-0dedf59e60c6_117_66_085_15.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=IWHtYhvTtIoPY51eDO38XDxc7sjgjcdaJia4PHelPew%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTNmZTU3MmUtZGVhZi00YThhLTgzNjctMGRlZGY1OWU2MGM2XzExN182Nl8wODVfMTUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9633,
    in_GraphicFileId: "Model3DHandle110_760",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/52f97587-b753-4fed-bf5c-95e05fa60564_117_66_090_16.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=dhZRARU2glbrLBV51cCfNMapfOFSnSCD7rSQYLphbUY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTJmOTc1ODctYjc1My00ZmVkLWJmNWMtOTVlMDVmYTYwNTY0XzExN182Nl8wOTBfMTYub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9634,
    in_GraphicFileId: "Model3DHandle110_860",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bd2664f7-f44f-4635-96f9-502a5b8f1d8f_117_66_095_17.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=eiaUFC9bvVoYbZanDMhqTSxe5dgftKfws%2FKo90k4iQ8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmQyNjY0ZjctZjQ0Zi00NjM1LTk2ZjktNTAyYTViOGYxZDhmXzExN182Nl8wOTVfMTcub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9635,
    in_GraphicFileId: "Model3DHandle110_96",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0877bd6c-032b-4fba-a078-2a8fee256bdd_117_66_017_1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZmgN1ZazYFAKP3%2BgRnejLog8qsCU3PICasX6JSEB1GE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDg3N2JkNmMtMDMyYi00ZmJhLWEwNzgtMmE4ZmVlMjU2YmRkXzExN182Nl8wMTdfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9636,
    in_GraphicFileId: "Model3DHandle110_960",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7ca78686-6bc1-4c3f-a173-dc7931b53492_117_66_100_18.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=nIBwgIghBxfJkbQThjep2oN3yOfptVUI2Tzx3eppAog%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2NhNzg2ODYtNmJjMS00YzNmLWExNzMtZGM3OTMxYjUzNDkyXzExN182Nl8xMDBfMTgub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9637,
    in_GraphicFileId: "Model3DHandle120",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/33978398-643f-41d1-aeaa-a182e19eb04c_mod3d_120.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=RCUmHNzgCI7%2Fk0tkuQ%2FImaM2AndBlN7%2BqSyNsiyIGyM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzM5NzgzOTgtNjQzZi00MWQxLWFlYWEtYTE4MmUxOWViMDRjX21vZDNkXzEyMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9638,
    in_GraphicFileId: "Model3DHandle130",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/62522f5a-cae3-40c9-b79e-8dedd4335a1e_110_35_393_1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=uW2v5zzLtzIfkruTaJWKkEdRZGsLZ26JAF%2B%2Fr99C0dA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjI1MjJmNWEtY2FlMy00MGM5LWI3OWUtOGRlZGQ0MzM1YTFlXzExMF8zNV8zOTNfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9639,
    in_GraphicFileId: "Model3DHandleDesign20_128",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1da4bb51-a570-4239-86fd-aa4a05f22cf0_155_01_381_2.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=8JwwMmTaSLAaV3laZWge3i2ZFJQjW%2BJVnuHC1EXgRqU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWRhNGJiNTEtYTU3MC00MjM5LTg2ZmQtYWE0YTA1ZjIyY2YwXzE1NV8wMV8zODFfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9640,
    in_GraphicFileId: "Model3DHandleDesign20_160",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c4f4c69f-c68b-495f-b49c-4b88c577a742_155_01_382_3.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=3dkPJNPw%2F7Aetko6SUI9EG3g7s6bq3%2F%2FLYTKU5wnCPg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzRmNGM2OWYtYzY4Yi00OTVmLWI0OWMtNGI4OGM1NzdhNzQyXzE1NV8wMV8zODJfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9641,
    in_GraphicFileId: "Model3DHandleDesign20_192",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dedb0655-cb61-478a-bc63-e348139ef994_155_01_383_4.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=cu%2FOwTwDWX6yBi1p7ltAh5n28gwZySRPbdUNXFR7idc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGVkYjA2NTUtY2I2MS00NzhhLWJjNjMtZTM0ODEzOWVmOTk0XzE1NV8wMV8zODNfNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9642,
    in_GraphicFileId: "Model3DHandleDesign20_224",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a8ee0371-e03c-489c-974e-3ad318dd83bb_155_01_384_5.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=cf1TS6XX2zbmZ2Iaj1UbB%2FD2EgYldG%2BWuSkvjlmgr5c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYThlZTAzNzEtZTAzYy00ODljLTk3NGUtM2FkMzE4ZGQ4M2JiXzE1NV8wMV8zODRfNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9643,
    in_GraphicFileId: "Model3DHandleDesign20_288",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6beef8ab-6049-4ac8-b9e6-70a19ffb8c29_155_01_385_6.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ACam2f6QZ%2BzIX1VEyg%2BH1Ty1TgFZtxnsNtotXp88wc0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmJlZWY4YWItNjA0OS00YWM4LWI5ZTYtNzBhMTlmZmI4YzI5XzE1NV8wMV8zODVfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9644,
    in_GraphicFileId: "Model3DHandleDesign20_320",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a9e24f1b-182f-4b8c-9478-e301b3f67f61_155_01_386_7.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=f3FGSi9NkXngiA1Ih%2B2fubU1WYFjX9Jfdw0BfDAqNHU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTllMjRmMWItMTgyZi00YjhjLTk0NzgtZTMwMWIzZjY3ZjYxXzE1NV8wMV8zODZfNy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9645,
    in_GraphicFileId: "Model3DHandleDesign20_352",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/682dc8b1-ef4f-4eaa-b866-019ac752f8a3_155_01_387_8.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2BWa9JBPaZtH2kauFkqaxk%2Bw9SYh1ENCMA164IB0iVkQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjgyZGM4YjEtZWY0Zi00ZWFhLWI4NjYtMDE5YWM3NTJmOGEzXzE1NV8wMV8zODdfOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9646,
    in_GraphicFileId: "Model3DHandleDesign20_448",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a81fa60f-f01f-4e58-a9f6-ce20fa1a91ed_155_01_388_9.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=M6paX7Jd75yqpBuHExSZGdRGbZ0DJdGA1y0fDBhSm90%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTgxZmE2MGYtZjAxZi00ZTU4LWE5ZjYtY2UyMGZhMWE5MWVkXzE1NV8wMV8zODhfOS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9647,
    in_GraphicFileId: "Model3DHandleDesign20_560",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bed2f69f-6f70-4a86-8bad-a199d3359962_155_01_389_10.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=CnIwp1jWQMih6Bx1dFMEDUgc43UKFpSF1Rt8a%2B1LQAQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmVkMmY2OWYtNmY3MC00YTg2LThiYWQtYTE5OWQzMzU5OTYyXzE1NV8wMV8zODlfMTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9648,
    in_GraphicFileId: "Model3DHandleDesign20_660",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8103567d-148a-48bb-9808-79828d0883c9_155_01_390_11.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=B%2BoUKiko99m%2FuWZKi8qYL0kTC5MlUJFgWvhu1CPGg4g%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODEwMzU2N2QtMTQ4YS00OGJiLTk4MDgtNzk4MjhkMDg4M2M5XzE1NV8wMV8zOTBfMTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9649,
    in_GraphicFileId: "Model3DHandleDesign20_760",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/97f760ae-9812-47ee-a6f5-997855f5bd24_155_01_391_12.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2BhFbUTc%2FRzIqn8h9JJ5E9W%2BTx%2BK5Di9WPHqoxgaitJo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTdmNzYwYWUtOTgxMi00N2VlLWE2ZjUtOTk3ODU1ZjViZDI0XzE1NV8wMV8zOTFfMTIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9650,
    in_GraphicFileId: "Model3DHandleDesign20_96",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/481f300f-bdd9-4b68-a9db-499321093a26_155_01_380_1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Df5gY7vTkZlXhegR5lX0nBbUEBuQZTcAGOdT7TUolZ4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDgxZjMwMGYtYmRkOS00YjY4LWE5ZGItNDk5MzIxMDkzYTI2XzE1NV8wMV8zODBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9651,
    in_GraphicFileId: "Model3DHandleDesign60_128",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5d399eb2-14c9-4cf9-8751-ac615a47b771_106_62_425_1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=SV6f3y3mPEEE0tJzY9iYK36DtrpPJfEheHbyFqHDLnQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWQzOTllYjItMTRjOS00Y2Y5LTg3NTEtYWM2MTVhNDdiNzcxXzEwNl82Ml80MjVfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9652,
    in_GraphicFileId: "Model3DHandleDesign60_160",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bc89492f-7612-4b84-864b-094a186b0f89_106_62_426_2.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Ozv3nu%2Fu4xrjDMUUzyAbQNpwp%2B8ltt2dEuSdvce9hFI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmM4OTQ5MmYtNzYxMi00Yjg0LTg2NGItMDk0YTE4NmIwZjg5XzEwNl82Ml80MjZfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9653,
    in_GraphicFileId: "Model3DHandleDesign80_212",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d8ce4db3-1a8d-4b77-9448-81f32a9b0de8_106_61_214_1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=q3Ogbdo9RskOidNif9Tcxzpz7gNy0ypD4l6xwBl3LVo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDhjZTRkYjMtMWE4ZC00Yjc3LTk0NDgtODFmMzJhOWIwZGU4XzEwNl82MV8yMTRfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9654,
    in_GraphicFileId: "Model3DHandleDesign80_340",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9e1ce052-5b6f-422e-8b58-6acf5e5dc975_106_61_217_2.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=nlS84KbZIyX3zPALlt5eYwTexMltuLZuiC%2FevA%2BKVD0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWUxY2UwNTItNWI2Zi00MjJlLThiNTgtNmFjZjVlNWRjOTc1XzEwNl82MV8yMTdfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9655,
    in_GraphicFileId: "Model3DHanger290.02.702",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e65615d5-483a-4fea-94f1-59e4a7703bcf_hanger%20left%20-%20290_02_702.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=0aCGRuv9s6Zs8V5LpkiQobTPzZ5oPac4XSPEofvZB94%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTY1NjE1ZDUtNDgzYS00ZmVhLTk0ZjEtNTllNGE3NzAzYmNmX2hhbmdlciBsZWZ0IC0gMjkwXzAyXzcwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9656,
    in_GraphicFileId: "Model3DHanger290.02.703",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a4ffd723-5b53-4b0f-a215-314a851bfe69_hanger%20right%20-%20290_02_703.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=HKYmE24ErADtPHv9A5z2HKvzCiFD49GbfGPGGEwLtqU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTRmZmQ3MjMtNWI1My00YjBmLWEyMTUtMzE0YTg1MWJmZTY5X2hhbmdlciByaWdodCAtIDI5MF8wMl83MDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9657,
    in_GraphicFileId: "Model3DHanger290.02.710",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/91826164-2709-4829-b9ad-bf176c9721d6_hanger%20left%20-%20290_02_710.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2BZoAaErpE1QgfnlCB0%2B7%2BvTKH0VeX%2BGG95UiE2EKE4E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTE4MjYxNjQtMjcwOS00ODI5LWI5YWQtYmYxNzZjOTcyMWQ2X2hhbmdlciBsZWZ0IC0gMjkwXzAyXzcxMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9658,
    in_GraphicFileId: "Model3DHanger290.02.711",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4c4edb66-bcc7-4595-8b77-525071d49fdd_hanger%20right%20-%20290_02_711.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=m8jHMUfWmdYDtLLNHB%2FAeaiMBJFDvD9iuahd%2FJigDBs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGM0ZWRiNjYtYmNjNy00NTk1LThiNzctNTI1MDcxZDQ5ZmRkX2hhbmdlciByaWdodCAtIDI5MF8wMl83MTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9659,
    in_GraphicFileId: "Model3DHanger290.03.937",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/be8ad984-782d-40b0-b5fe-142ea4d89df2_hanger%20right%20-%20290_03_937.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=fyOO8LIsOgXJ%2F4REu7inL0iFg%2FATPG4WRO2ADT8c56E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmU4YWQ5ODQtNzgyZC00MGIwLWI1ZmUtMTQyZWE0ZDg5ZGYyX2hhbmdlciByaWdodCAtIDI5MF8wM185Mzcub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9660,
    in_GraphicFileId: "Model3DHanger290.03.938",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/162de782-5888-429a-a3b8-38c3b6333210_hanger%20left%20-%20290_03_938.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=TlkzSLFc4puEmnXrwJP1epxbxkfhJjaEx8roNoUGgHY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTYyZGU3ODItNTg4OC00MjlhLWEzYjgtMzhjM2I2MzMzMjEwX2hhbmdlciBsZWZ0IC0gMjkwXzAzXzkzOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9661,
    in_GraphicFileId: "Model3DHanger290.40.901",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/336d714b-8ceb-428a-b2c4-2d995078186c_hanger%20right%20-%20290_40_901.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ENC%2BPFM6naeAKl6pi%2FQJCjUjbS%2BMXaNgXrtCv0ykLdU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzM2ZDcxNGItOGNlYi00MjhhLWIyYzQtMmQ5OTUwNzgxODZjX2hhbmdlciByaWdodCAtIDI5MF80MF85MDEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9662,
    in_GraphicFileId: "Model3DHanger290.40.902",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ee5c9778-cc17-4a63-8c93-d656f23003f7_hanger%20left%20-%20290_40_902.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ugAdLPoGX8snmzPlS7ms%2B1QH1R42%2F6v4dwCS5tx9aqc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWU1Yzk3NzgtY2MxNy00YTYzLThjOTMtZDY1NmYyMzAwM2Y3X2hhbmdlciBsZWZ0IC0gMjkwXzQwXzkwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9663,
    in_GraphicFileId: "Model3DHanger290.40.980",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3f7f97b8-d3a1-487a-aa00-4708ae9b8858_hanger%20right%20-%20290_40_980.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=dY4JzRybqJYC2TeoC%2FijltODaEm2T%2Ba4VHXXQthcqzg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2Y3Zjk3YjgtZDNhMS00ODdhLWFhMDAtNDcwOGFlOWI4ODU4X2hhbmdlciByaWdodCAtIDI5MF80MF85ODAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9664,
    in_GraphicFileId: "Model3DHanger290.40.981",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7cd7abf3-3ca4-479a-9a72-8847e2f4a7f4_hanger%20left%20-%20290_40_981.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=JR2p9WdIcf5OQznsNHxdYt4oWXN9w51y2XYgwwq9MhM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2NkN2FiZjMtM2NhNC00NzlhLTlhNzItODg0N2UyZjRhN2Y0X2hhbmdlciBsZWZ0IC0gMjkwXzQwXzk4MS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9665,
    in_GraphicFileId: "Model3DHinge110HalfSpringSS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b7aa8ae9-c919-47ab-a56b-7856927de6dc_hinge110halfspringss%20-%20329_17_602.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=o0HX0E1NNsFmE3Rs8HCpiArdzYqJu%2BrdxQGVXEzF3fM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjdhYThhZTktYzkxOS00N2FiLWE1NmItNzg1NjkyN2RlNmRjX2hpbmdlMTEwaGFsZnNwcmluZ3NzIC0gMzI5XzE3XzYwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9666,
    in_GraphicFileId: "Model3DHinge110InsetSpringSS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/23018fbb-ec74-456a-a31b-a93c303bc5f7_hinge110insetspringss%20-%20329_17_603.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=KvbC7qqVkCwjrW%2BLPiHu6t%2FpsdsCmat7gaebaTeW5NE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjMwMThmYmItZWM3NC00NTZhLWEzMWItYTkzYzMwM2JjNWY3X2hpbmdlMTEwaW5zZXRzcHJpbmdzcyAtIDMyOV8xN182MDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9667,
    in_GraphicFileId: "Model3DHinge110OverlaySpringSS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c16d0d50-c9a1-492b-b489-e341ac534d77_hinge110overlayspringss%20-%20329_17_600.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=St0YdlFWraYn79lr3OgcThnKQKzfvr1rHa%2BCmp3CfnE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzE2ZDBkNTAtYzlhMS00OTJiLWI0ODktZTM0MWFjNTM0ZDc3X2hpbmdlMTEwb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzE3XzYwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9668,
    in_GraphicFileId: "Model3DHinge110SoftClHalfSpringSS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/834eb748-74b9-4c19-811a-a33a9065c613_hinge110softclhalfspringss%20-%20329_15_403.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=N10yYjq5xfrVBsxDIoV8qQen7E3ot4tdZRlnKXde9h8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODM0ZWI3NDgtNzRiOS00YzE5LTgxMWEtYTMzYTkwNjVjNjEzX2hpbmdlMTEwc29mdGNsaGFsZnNwcmluZ3NzIC0gMzI5XzE1XzQwMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9669,
    in_GraphicFileId: "Model3DHinge110SoftClInsetSpringSS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8897d066-09f7-4099-9dc9-757b05439a2f_hinge110softclinsetspringss%20-%20329_15_405.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=NnVpjX46m%2FJn0uz4m6nbJAgoLJESjoyLqMRYePC81Ps%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODg5N2QwNjYtMDlmNy00MDk5LTlkYzktNzU3YjA1NDM5YTJmX2hpbmdlMTEwc29mdGNsaW5zZXRzcHJpbmdzcyAtIDMyOV8xNV80MDUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9670,
    in_GraphicFileId: "Model3DHinge110SoftClOverlaySpringSS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/587ad33e-28f9-479b-8f84-9c42859b3adb_hinge110softcloverlayspringss%20-%20329_15_401.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=urwej%2BVfKBxaPl7%2Fx1aUDkivxNIfe6%2FqfnDU2%2Bp%2BZGs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTg3YWQzM2UtMjhmOS00NzliLThmODQtOWM0Mjg1OWIzYWRiX2hpbmdlMTEwc29mdGNsb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzE1XzQwMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9671,
    in_GraphicFileId: "Model3DHinge120OverlayNoSpringSSForFHF",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b6dc09ba-8fd0-4f85-b1b9-97cc45f75626_hingeflipliftfhftop%20-%20342_81_400.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=cL0jEkBafsUk3A6NlwntXdEizLyTzbeYvEKN9ozF2ew%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjZkYzA5YmEtOGZkMC00Zjg1LWIxYjktOTdjYzQ1Zjc1NjI2X2hpbmdlZmxpcGxpZnRmaGZ0b3AgLSAzNDJfODFfNDAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9672,
    in_GraphicFileId: "Model3DHinge155SoftClHalfSpringSS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/58fe3eac-b31d-4b6a-bedd-35b3b6284aef_hinge155softclhalfspringss%20-%20329_29_221.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZIJ9Ww4b5L819by5%2FomiOuw2kRM28%2B9rukGcSW7XDPo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNThmZTNlYWMtYjMxZC00YjZhLWJlZGQtMzViM2I2Mjg0YWVmX2hpbmdlMTU1c29mdGNsaGFsZnNwcmluZ3NzIC0gMzI5XzI5XzIyMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9673,
    in_GraphicFileId: "Model3DHinge155SoftClOverlaySpringSS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f6856aa9-3352-4d6f-b2f8-b647e0d73e56_hinge155softcloverlayspringss%20-%20329_29_217.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=uzDaCeiv6Kes7uAX4Ag1YrbqogMe9KBrg%2BFsDygusKA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjY4NTZhYTktMzM1Mi00ZDZmLWIyZjgtYjY0N2UwZDczZTU2X2hpbmdlMTU1c29mdGNsb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzI5XzIxNy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9674,
    in_GraphicFileId: "Model3DHinge165HalfSpringSS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/835de0fe-5d74-4e98-b011-f200855241ae_hinge165halfspringss%20-%20329_07_702.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=YijgvFzDebbaiVz0CdFliJ6Gq35Ttkrqov1vEq4LH58%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODM1ZGUwZmUtNWQ3NC00ZTk4LWIwMTEtZjIwMDg1NTI0MWFlX2hpbmdlMTY1aGFsZnNwcmluZ3NzIC0gMzI5XzA3XzcwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9675,
    in_GraphicFileId: "Model3DHinge165InsetSpringSS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/365ebe96-cb9c-4645-aafc-9300f6ef9b33_hinge165insetspringss%20-%20329_07_703.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=0El5yDjDc%2B9s5Kz%2FPU4KgVDJVibI8ZwnLkJgZHiZuVs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzY1ZWJlOTYtY2I5Yy00NjQ1LWFhZmMtOTMwMGY2ZWY5YjMzX2hpbmdlMTY1aW5zZXRzcHJpbmdzcyAtIDMyOV8wN183MDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9676,
    in_GraphicFileId: "Model3DHinge165OverlaySpringSS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d770cef5-f565-4dee-8e1a-fda7cdb4550e_hinge165overlayspringss%20-%20329_07_700.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=EsKo4sRFbarzJvv2mH9GAZ%2BCmY3OGTrOep93KQjNhYE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDc3MGNlZjUtZjU2NS00ZGVlLThlMWEtZmRhN2NkYjQ1NTBlX2hpbmdlMTY1b3ZlcmxheXNwcmluZ3NzIC0gMzI5XzA3XzcwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9677,
    in_GraphicFileId: "Model3DHingeBlindCornerInset110SoftClNP",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cd866081-88f5-4ced-ae4e-0f26104a4f3b_hinge110blindcornerinset%20-%20329_11_705.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=I09a3hSrxGxeMEpj9hkkxBaP3EH2zz2yyF20grLl8eA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2Q4NjYwODEtODhmNS00Y2VkLWFlNGUtMGYyNjEwNGE0ZjNiX2hpbmdlMTEwYmxpbmRjb3JuZXJpbnNldCAtIDMyOV8xMV83MDUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9678,
    in_GraphicFileId: "Model3DHingeCenterForFHF",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fd1fb855-2d2f-4c89-b911-3057488487d2_hingeforcenterfhf%20-%20372_74_990.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=L44kLkNR5ytlbX2ZFlpXxcSHdQSzt6CDOy4vEJmw59M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmQxZmI4NTUtMmQyZi00Yzg5LWI5MTEtMzA1NzQ4ODQ4N2QyX2hpbmdlZm9yY2VudGVyZmhmIC0gMzcyXzc0Xzk5MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9679,
    in_GraphicFileId: "Model3DHingeFlipLiftDF",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/74c67dc2-3157-4ab5-8fe5-ef251ffb2cc8_hingeflipliftdf%20-%20342_78_700_1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=0iE9UaeU50c7dzzdyGfAb5crSdnDxncxQ0n%2F1Cnr3cQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzRjNjdkYzItMzE1Ny00YWI1LThmZTUtZWYyNTFmZmIyY2M4X2hpbmdlZmxpcGxpZnRkZiAtIDM0Ml83OF83MDBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9680,
    in_GraphicFileId: "Model3DKeku_Front_262_50_359",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1b799995-4e02-4e0b-a10b-f4786921ea00_keku_front_262_50_359.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ChChmfOuFw0Zs6Bpa7vwt6TL15oD4fIw6%2BDygaEb468%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWI3OTk5OTUtNGUwMi00ZTBiLWExMGItZjQ3ODY5MjFlYTAwX2tla3VfZnJvbnRfMjYyXzUwXzM1OS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9681,
    in_GraphicFileId: "Model3DKeku_Side_262_50_368",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/508b1c3c-09b1-45a6-b0d2-f2e037f92d43_keku_side_262_50_368.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=B5UR%2B%2F%2BnKfZMlytK308GMLkEG642P8Pd5uoKjnjwMck%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTA4YjFjM2MtMDliMS00NWE2LWIwZDItZjJlMDM3ZjkyZDQzX2tla3Vfc2lkZV8yNjJfNTBfMzY4Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9682,
    in_GraphicFileId: "Model3DMpCruciformA0SS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d3a1fbfd-4599-4980-b9bd-9f3f1788cf60_mpcruciforma0ss%20-%20329_80_528.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=uv5%2BrE0K7EO6Q%2BJ0T4oQrL8hHZYAHnGS77naVErJv%2Fk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDNhMWZiZmQtNDU5OS00OTgwLWI5YmQtOWYzZjE3ODhjZjYwX21wY3J1Y2lmb3JtYTBzcyAtIDMyOV84MF81Mjgub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9683,
    in_GraphicFileId: "Model3DMpCruciformA3SS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9337b663-4e97-478b-a09f-0672c9601e74_mpcruciforma3ss%20-%20329_80_555.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=HoPqQAL4SyIxtlk7Y%2FyqCgxSUOdfTMuEXSJI%2BiHFz5c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTMzN2I2NjMtNGU5Ny00NzhiLWEwOWYtMDY3MmM5NjAxZTc0X21wY3J1Y2lmb3JtYTNzcyAtIDMyOV84MF81NTUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9684,
    in_GraphicFileId: "Model3DMpCruciformA6SS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/73b39064-6c81-4743-b767-12866a160c88_mpcruciforma6ss%20-%20329_80_582.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=FHSXDASfAvhoMI44CfEXGd3mVSHMyhYNazbpqvv92tk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzNiMzkwNjQtNmM4MS00NzQzLWI3NjctMTI4NjZhMTYwYzg4X21wY3J1Y2lmb3JtYTZzcyAtIDMyOV84MF81ODIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9685,
    in_GraphicFileId: "Model3DMpCruciformSM0SS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c53964e8-ea08-4c0e-84bf-0e21867c6b9b_mpcruciformsm0ss%20-%20329_71_500.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=19FvUvy0sfqtgwyfXViZAY0y7txCdPqAq5J6uWdDCQQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzUzOTY0ZTgtZWEwOC00YzBlLTg0YmYtMGUyMTg2N2M2YjliX21wY3J1Y2lmb3Jtc20wc3MgLSAzMjlfNzFfNTAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9686,
    in_GraphicFileId: "Model3DMpCruciformSM3SS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2cbc7db2-d099-4f2a-a2d3-c07fc58d7b83_mpcruciformsm3ss%20-%20329_71_503.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=WwmXmxbH29U%2Fm0AJo6CW7ZapBPze3w0TUIfJvjbsIbg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmNiYzdkYjItZDA5OS00ZjJhLWEyZDMtYzA3ZmM1OGQ3YjgzX21wY3J1Y2lmb3Jtc20zc3MgLSAzMjlfNzFfNTAzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9687,
    in_GraphicFileId: "Model3DMpCruciformSM6SS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5466c9e5-366a-4c0c-8e47-61f39c5204ba_mphorizontalsm6ss%20-%20329_67_006.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FSBen8PkbDCvkBVicDbk8yeTL9cBERmU4SuqW6PcMm4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTQ2NmM5ZTUtMzY2YS00YzBjLThlNDctNjFmMzljNTIwNGJhX21waG9yaXpvbnRhbHNtNnNzIC0gMzI5XzY3XzAwNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9688,
    in_GraphicFileId: "Model3DMPHorizontalBL0SS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d79c1440-82bf-4269-a5a3-ab64bda838d4_mphorizontal175h3100%20-%20342_22_060.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=DexnmkLLFacpD3NXStgkQwNB6F1QmQs5T0iTBMtq6Cc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDc5YzE0NDAtODJiZi00MjY5LWE1YTMtYWI2NGJkYTgzOGQ0X21waG9yaXpvbnRhbDE3NWgzMTAwIC0gMzQyXzIyXzA2MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9689,
    in_GraphicFileId: "Model3DMPHorizontalBL3SS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/45272bee-0cb5-4bac-a2ba-4399ac664c44_mphorizontal175h3130%20-%20342_22_063.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=W67CvBu9jUqKBD%2FVKT01zZ8R7NTEBiT2wqtq4j49u3o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDUyNzJiZWUtMGNiNS00YmFjLWEyYmEtNDM5OWFjNjY0YzQ0X21waG9yaXpvbnRhbDE3NWgzMTMwIC0gMzQyXzIyXzA2My5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9690,
    in_GraphicFileId: "Model3DMpHorizontalSM0SS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f7b95fc8-50ab-4a3d-8e37-ed09796b8b1f_mphorizontalsm0ss%20-%20329_67_000.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=gYaG6GUKv4J3Aav4WLi196xlHHOW1nbWUzSxnXkZwOE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjdiOTVmYzgtNTBhYi00YTNkLThlMzctZWQwOTc5NmI4YjFmX21waG9yaXpvbnRhbHNtMHNzIC0gMzI5XzY3XzAwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9691,
    in_GraphicFileId: "Model3DMpHorizontalSM3SS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7bb6e80f-7cba-4130-a253-b6df658d3b40_mphorizontalsm3ss%20-%20329_67_003.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=db%2Bk56WnVEyiwNufJNo3yIxtRpoe%2BAJl2KkiEbR6Jxo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2JiNmU4MGYtN2NiYS00MTMwLWEyNTMtYjZkZjY1OGQzYjQwX21waG9yaXpvbnRhbHNtM3NzIC0gMzI5XzY3XzAwMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9692,
    in_GraphicFileId: "Model3DMpHorizontalSM6SS",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5466c9e5-366a-4c0c-8e47-61f39c5204ba_mphorizontalsm6ss%20-%20329_67_006.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FSBen8PkbDCvkBVicDbk8yeTL9cBERmU4SuqW6PcMm4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTQ2NmM5ZTUtMzY2YS00YzBjLThlNDctNjFmMzljNTIwNGJhX21waG9yaXpvbnRhbHNtNnNzIC0gMzI5XzY3XzAwNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9693,
    in_GraphicFileId: "Model3DPlinthLegRectangularScrewH100",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2f4ce4f7-e93c-4d68-a1e3-d29beef62f4d_plinthlegrectangularscrewh100.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=fP9dQUtRMmdn8MoI%2FWq5Lqon4%2FmywUTwQzy%2FNMUxkz0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmY0Y2U0ZjctZTkzYy00ZDY4LWExZTMtZDI5YmVlZjYyZjRkX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9694,
    in_GraphicFileId: "Model3DPlinthLegRectangularScrewH120",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8fe3aba1-086a-4f88-8b5b-4c88de10378a_plinthlegrectangularscrewh120.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=RjIbnHfA7OHDP%2FZ7VAOanEp5RBTzT3yfp6JPEbQ7yyQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGZlM2FiYTEtMDg2YS00Zjg4LThiNWItNGM4OGRlMTAzNzhhX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTIwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9695,
    in_GraphicFileId: "Model3DPlinthLegRectangularScrewH150",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e54cc58f-53ee-4ec5-bb54-868da27f9de0_plinthlegrectangularscrewh150.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=6WG9JacYIcUJYlNt3zffK2syDbwR0N%2F%2FXqA94P72iag%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTU0Y2M1OGYtNTNlZS00ZWM1LWJiNTQtODY4ZGEyN2Y5ZGUwX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTUwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9696,
    in_GraphicFileId: "Model3DPlinthLegTriangularPressH100",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0dac5ca5-92d6-4f0b-ab91-6e3d9d82ba47_plinthlegtriangularpressh100.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=69PLCRRgYYJHdW7wL3QnYG6tFYRFXtNgjneDdxPVGOo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGRhYzVjYTUtOTJkNi00ZjBiLWFiOTEtNmUzZDlkODJiYTQ3X3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9697,
    in_GraphicFileId: "Model3DPlinthLegTriangularPressH120",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/86d7665e-4d2f-434a-9fd6-c69acaa2b0d5_plinthlegtriangularpressh120.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=puthx6m7OkmI3wBd3VfkkE%2BRVj40pml4um%2FG4NvxYbA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODZkNzY2NWUtNGQyZi00MzRhLTlmZDYtYzY5YWNhYTJiMGQ1X3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxMjAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9698,
    in_GraphicFileId: "Model3DPlinthLegTriangularPressH150",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a0bcaba9-5f36-4074-93ad-f1148d67fc33_plinthlegtriangularpressh150.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=F5n1VzXiQx1guy0oxZ5XSiPw%2FQhnOupxZKRzVtPyUMA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTBiY2FiYTktNWYzNi00MDc0LTkzYWQtZjExNDhkNjdmYzMzX3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxNTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9699,
    in_GraphicFileId: "Model3DPlinthLegTriangularPressNoise",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0d9b5a1b-bec3-440a-8754-24bffbd61d6e_plinthareadesign2007.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=iq6lr0vxL33f0TJbJgrXddbj%2BJZQBIJJkfbcEzGqfTk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGQ5YjVhMWItYmVjMy00NDBhLTg3NTQtMjRiZmZiZDYxZDZlX3BsaW50aGFyZWFkZXNpZ24yMDA3Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9700,
    in_GraphicFileId: "Model3DPlinthLegTriangularPressSensitive",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e8d4481b-ed94-4b6c-96fc-e01537293545_plinthareadesign2008.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=fdE0FSFzAWEl7AtTG4xNPGW%2F2joF6esSdw4gNX3VsUA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZThkNDQ4MWItZWQ5NC00YjZjLTk2ZmMtZTAxNTM3MjkzNTQ1X3BsaW50aGFyZWFkZXNpZ24yMDA4Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9701,
    in_GraphicFileId: "Model3DPushToOpenLong",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d46fe77e-6968-4997-9ed4-a5d793b39578_pushtoopenlongblack_356_04_754.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=0%2BEaK6y9PLBYpPRtJIg%2FN%2F9hZzrP0SvXfOtRha0exSM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDQ2ZmU3N2UtNjk2OC00OTk3LTllZDQtYTVkNzkzYjM5NTc4X3B1c2h0b29wZW5sb25nYmxhY2tfMzU2XzA0Xzc1NC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9702,
    in_GraphicFileId: "Model3DPushToOpenShort",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fdbcb21f-5734-4a8e-b5ba-5ab1a9c4cb9d_pushtoopenshortblack_356_04_353.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=qQA2600P8%2F%2B2XklOT1wi9hG3LrIs6RlAlVODaB%2B%2BZP0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmRiY2IyMWYtNTczNC00YThlLWI1YmEtNWFiMWE5YzRjYjlkX3B1c2h0b29wZW5zaG9ydGJsYWNrXzM1Nl8wNF8zNTMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9703,
    in_GraphicFileId: "Model3DShelfadjGlassDesign01",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a00540c6-69bb-4e48-95b3-771f158b8a8c_281_41_907_4.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=hebI2CD5AUMJ1lEgOVkWBTEpzffAHGeNM3niGSIz%2Flc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTAwNTQwYzYtNjliYi00ZTQ4LTk1YjMtNzcxZjE1OGI4YThjXzI4MV80MV85MDdfNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9704,
    in_GraphicFileId: "Model3DShelfadjWoodDesign01",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5d443bad-539a-4598-a0ea-00325145ad55_ft_stift.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=SBGDF6LhYhRDtGKk2udeLUFo2stAEhkIOvxdRe2fUQU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWQ0NDNiYWQtNTM5YS00NTk4LWEwZWEtMDAzMjUxNDVhZDU1X2Z0X3N0aWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9705,
    in_GraphicFileId: "Model3DShelfadjWoodDesign02",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/68a82cd1-b653-43f9-a1cf-3ebc91d73f3d_717_24.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=fwePmJuV4tcDUDg3lXYDCHBFXfuWwVv3b8Zy3%2B2Qk7E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjhhODJjZDEtYjY1My00M2Y5LWExY2YtM2ViYzkxZDczZjNkXzcxN18yNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9706,
    in_GraphicFileId: "Model3DShelfadjWoodDesign03",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/febdb2ee-1921-400a-ba69-eac95ba00f08_717_25.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=kHqKh4f2WvZkyd%2BH5zSEfuZ%2F9TrT%2FC%2FPQyuC7p%2FEkOE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmViZGIyZWUtMTkyMS00MDBhLWJhNjktZWFjOTViYTAwZjA4XzcxN18yNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9707,
    in_GraphicFileId: "Model3DWallPlate290.09.910",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ba35990c-b5e2-41c0-a0b9-3fe4a5b7de4f_wall%20plate%20cuttable%20-%20290_09_910.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=SlcGCrWHwEMDC%2B%2B%2FiUfwr%2F4j6xlTbIiyyaRk8s0%2Bar4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmEzNTk5MGMtYjVlMi00MWMwLWEwYjktM2ZlNGE1YjdkZTRmX3dhbGwgcGxhdGUgY3V0dGFibGUgLSAyOTBfMDlfOTEwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9708,
    in_GraphicFileId: "Model3DWallPlate290.40.989",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/354d1e61-d117-4576-a3fa-e815bcb1788b_wall%20plate%20-%20290_40_989.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=cQpopRg3SAvKmeNw1q669rcvbrgwBtWgdccBQ%2FOeEVg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzU0ZDFlNjEtZDExNy00NTc2LWEzZmEtZTgxNWJjYjE3ODhiX3dhbGwgcGxhdGUgLSAyOTBfNDBfOTg5Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9709,
    in_GraphicFileId: "Model3DWallPlate290.40.991",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/01ad7aaf-f318-4f9f-bebb-bae139ffa54a_wall%20plate%20-%20290_40_991.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=CGgMLRRT1U%2FkdRAOb32Sgv7Pa6JUxda1eDU0e4QxVAs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDFhZDdhYWYtZjMxOC00ZjlmLWJlYmItYmFlMTM5ZmZhNTRhX3dhbGwgcGxhdGUgLSAyOTBfNDBfOTkxLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9710,
    in_GraphicFileId: "NoGraphic",
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9711,
    in_GraphicFileId: "Rafix20Housing19mmNickelPlated",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/77852679-a47c-46d9-aa9b-e221fcb2b686_rafixhousing_263_15_705.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=vQ5sXJhy%2BnjoNp%2B%2FCjQkckoXwD1iqnNvII5ppYRDbZs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzc4NTI2NzktYTQ3Yy00NmQ5LWFhOWItZTIyMWZjYjJiNjg2X3JhZml4aG91c2luZ18yNjNfMTVfNzA1Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9712,
    in_GraphicFileId: "RafixConnectionBolt11x5mm",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ed07dde7-670a-4c7a-9ce5-6c0cbd370d58_rafixconnectingbolt_263_20_847_1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=YO8kJL6jKfUxnLPNdPqgF1rSJNK49KxHPwRglL6IJAA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWQwN2RkZTctNjcwYS00YzdhLTljZTUtNmMwY2JkMzcwZDU4X3JhZml4Y29ubmVjdGluZ2JvbHRfMjYzXzIwXzg0N18xLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9713,
    in_GraphicFileId: "SquareBracket",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/852eb7e6-a124-4669-97b5-f5df4934f5a1_cornerbrace1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FWW2rJi2Bf96gr5Lqvcv0d5JN4T0s53XDqUh24Yzsyo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODUyZWI3ZTYtYTEyNC00NjY5LTk3YjUtZjVkZjQ5MzRmNWExX2Nvcm5lcmJyYWNlMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9714,
    in_GraphicFileId: "DispensaSlideBtm",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/10f7b19a-5d33-4af0-b31e-a9e5242b9a86_slidebtm.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZnOqffFC8Dzur%2FT%2FJ0q%2BqkMrTxJRqDPplEKFQJzM%2F%2Fo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTBmN2IxOWEtNWQzMy00YWYwLWIzMWUtYTllNTI0MmI5YTg2X3NsaWRlYnRtLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9715,
    in_GraphicFileId: "DispensaSlideTop",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5a647c45-24c6-4545-bc89-3002924ab7fd_slidetop.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=JznGXBnVMqorii8%2Bxy%2BAO8M1s%2FfH06%2Bt0O5sbUaTono%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWE2NDdjNDUtMjRjNi00NTQ1LWJjODktMzAwMjkyNGFiN2ZkX3NsaWRldG9wLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9716,
    in_GraphicFileId: "Dispensa160",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/afdeecc0-4904-4120-adb8-66c262f0c99b_dispensa160.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=wVERp%2F2eN2bZvbn054eID2xJDhwEIQ6eIpWpgTh4xaE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWZkZWVjYzAtNDkwNC00MTIwLWFkYjgtNjZjMjYyZjBjOTliX2Rpc3BlbnNhMTYwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9717,
    in_GraphicFileId: "Dispensa190",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fd086e87-e4c0-4f4c-b143-1db657adc735_dispensa190.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=7mYRldoBtX4hJGgSg3qLXL49b4lRgOGCi%2FQKkmB21t0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmQwODZlODctZTRjMC00ZjRjLWIxNDMtMWRiNjU3YWRjNzM1X2Rpc3BlbnNhMTkwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9718,
    in_GraphicFileId: "Dispensa230",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7ae7ff1c-e5b3-4b3a-b0fd-c80916975658_dispensa230.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Jl2RfTMP8NcjLp33cmcRFPkmN%2BbkUIYT2jGPrmHicTo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2FlN2ZmMWMtZTViMy00YjNhLWIwZmQtYzgwOTE2OTc1NjU4X2Rpc3BlbnNhMjMwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9719,
    in_GraphicFileId: "Dispensa30ConTop",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6693ba49-f036-4298-8362-9556cadc6f69_connectortop300.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=0B9Z9XRmNXe%2BsNXKepmnWGS%2Fm3T93wmbitefuaK%2BB3E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjY5M2JhNDktZjAzNi00Mjk4LTgzNjItOTU1NmNhZGM2ZjY5X2Nvbm5lY3RvcnRvcDMwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9720,
    in_GraphicFileId: "Dispensa30ConBtm",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/445777e6-b276-45ba-96c6-e97309108b1c_connectorbtm300.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=8OxJTbyIrbZyJtqBEdaPX5GVYBJtx4PB6%2BEGXKIBCYI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDQ1Nzc3ZTYtYjI3Ni00NWJhLTk2YzYtZTk3MzA5MTA4YjFjX2Nvbm5lY3RvcmJ0bTMwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9721,
    in_GraphicFileId: "Dispensa40ConTop",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/36c29773-8d85-4dc7-8085-9f3d67a18e5b_connectortop400.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=AzAhUCSteDcX1BY9l42uroJ6vS2EfIrrI8CdPCvgIQc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzZjMjk3NzMtOGQ4NS00ZGM3LTgwODUtOWYzZDY3YTE4ZTViX2Nvbm5lY3RvcnRvcDQwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9722,
    in_GraphicFileId: "Dispensa40ConBtm",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4cb573bf-444f-476f-9f27-0619a1dcd131_connectorbtm400.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=4e6yJyDxY8EP2w5fF5JhLISwIgtNHnpGPsESvfUOOYs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGNiNTczYmYtNDQ0Zi00NzZmLTlmMjctMDYxOWExZGNkMTMxX2Nvbm5lY3RvcmJ0bTQwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9723,
    in_GraphicFileId: "DispensaClassic30",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/54890a0d-88f2-418e-b24b-80d96b008cdd_classic300.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=5lQlqHAZgmckYIvDakqcw%2BMUL5QIfAYjITTd%2BW1g4bg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTQ4OTBhMGQtODhmMi00MThlLWIyNGItODBkOTZiMDA4Y2RkX2NsYXNzaWMzMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9724,
    in_GraphicFileId: "DispensaClassic40",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4918667d-00a5-409a-aba6-6727938a4b95_classic400.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=dwdKHaIB3YoYGXXefrisBUjJTwbCqa63hgXDHEEGvas%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDkxODY2N2QtMDBhNS00MDlhLWFiYTYtNjcyNzkzOGE0Yjk1X2NsYXNzaWM0MDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9725,
    in_GraphicFileId: "DispensaStyle30",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7cfe9bec-058c-4666-b419-6e72a03cd0ac_style300.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=bAptVENzeUTejnHj%2BTXfDyFKjQQ8E61iMo5DtapX6oU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2NmZTliZWMtMDU4Yy00NjY2LWI0MTktNmU3MmEwM2NkMGFjX3N0eWxlMzAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9726,
    in_GraphicFileId: "DispensaStyle40",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f1a941de-ee4f-422f-8a6b-359743fe1ed4_style400.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=K19vI9%2BSqiv2UsV0QMbue6tOvH6d6uMKgTkm7bfNIaw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjFhOTQxZGUtZWU0Zi00MjJmLThhNmItMzU5NzQzZmUxZWQ0X3N0eWxlNDAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9727,
    in_GraphicFileId: "No15_Classic_right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6d0b9538-c8bd-4192-a25d-1352dfb06d03_no15_auszu%CC%88ge_rechts.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=u0X5KBJM3AxBsc%2BjkCHkroQ2jqH%2FarU7p0Z9gJtqwFg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmQwYjk1MzgtYzhiZC00MTkyLWEyNWQtMTM1MmRmYjA2ZDAzX25vMTVfYXVzenXMiGdlX3JlY2h0cy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9728,
    in_GraphicFileId: "No15_Classic_left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5a35f6fa-47a3-4251-bd4c-e60d8578a2be_no15_auszu%CC%88ge_links.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=dXE%2F%2BasO%2Bdj%2B4FL64OZzJ2UCFU5sQ1xwLL%2F4o%2BsnAk4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWEzNWY2ZmEtNDdhMy00MjUxLWJkNGMtZTYwZDg1NzhhMmJlX25vMTVfYXVzenXMiGdlX2xpbmtzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9729,
    in_GraphicFileId: "No15_Style_right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/876efc34-29e1-4fe0-b7dc-a29d92ac9aa6_no15_rotated.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=wDbmAGwr%2B40qpmroZivvJAAWHztqE3wyYrpd87Ynqfw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODc2ZWZjMzQtMjllMS00ZmUwLWI3ZGMtYTI5ZDkyYWM5YWE2X25vMTVfcm90YXRlZC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9730,
    in_GraphicFileId: "No15_Style_left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bb0fc99b-9e42-4318-9475-830974171606_no15_rotated_left.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=C%2FhFOr8uxPq4gMeTC9J3vgUsCxoaikyNiUCwyk5Sjj0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmIwZmM5OWItOWU0Mi00MzE4LTk0NzUtODMwOTc0MTcxNjA2X25vMTVfcm90YXRlZF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9731,
    in_GraphicFileId: "No15_Slides_right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b1950271-b1a5-420f-8e3b-eaf95a80a2de_no15_beschla%CC%88ge_rechts.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=2I6CFkZ3i4zyMGPLj6e0GXIX2WQIFLFhX3HSO0JRDoY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjE5NTAyNzEtYjFhNS00MjBmLThlM2ItZWFmOTVhODBhMmRlX25vMTVfYmVzY2hsYcyIZ2VfcmVjaHRzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9732,
    in_GraphicFileId: "No15_Slides_left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e05e8cbb-874e-455c-a224-c471bf3ce401_no15_beschla%CC%88ge_links.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=9e%2FZBNGcoLRZlC7WX%2F8PCjbE%2FlunWkTwA06ZhnQ3vHU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTA1ZThjYmItODc0ZS00NTVjLWEyMjQtYzQ3MWJmM2NlNDAxX25vMTVfYmVzY2hsYcyIZ2VfbGlua3Mub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9733,
    in_GraphicFileId: "FrontTuscanMilling",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/08c6bd8f-979c-4e76-8f07-9b9dd849b5c3_fronttuscanmilling.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=YAeNZY9LarQem%2BrZNp%2FY7%2Bt2700KaVmTk%2B1lx6UARy8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDhjNmJkOGYtOTc5Yy00ZTc2LThmMDctOWI5ZGQ4NDliNWMzX2Zyb250dHVzY2FubWlsbGluZy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9734,
    in_GraphicFileId: "Model3DConero625",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ce39c1e8-cff8-49b3-a453-b50cc07e3646_coneron.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=UwXsA1HAL28DK869GXwwjKVrc3Z8yHmgCAtHIbPDROc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2UzOWMxZTgtY2ZmOC00OWIzLWE0NTMtYjUwY2MwN2UzNjQ2X2NvbmVyb24ub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9735,
    in_GraphicFileId: "Model3DConero72H",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9729b5fa-e6ba-4c82-842e-52e17666b2c5_conerotrousers.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=iInxjSlAZxdEG43IfpPzyj9ekPOC9EqyEz1y1jGwtD0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTcyOWI1ZmEtZTZiYS00YzgyLTg0MmUtNTJlMTc2NjZiMmM1X2NvbmVyb3Ryb3VzZXJzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9736,
    in_GraphicFileId: "Model3DConeroRigid_Right",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/45dc5849-f5d7-4604-af40-07b12538a473_tierackright.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=CqgNKlS1xDCIW7PY3JChulRLLnmhpkMerle7fbydfg8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDVkYzU4NDktZjVkNy00NjA0LWFmNDAtMDdiMTI1MzhhNDczX3RpZXJhY2tyaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9737,
    in_GraphicFileId: "Model3DConeroRigid_Left",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0a92a116-6a43-4ed0-a4c4-01c2702c1f95_tierackleft.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=bcALFQ9VLS2xxyGpc8mHUlI%2BLME3yJuLPQ2UO3EaNAU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGE5MmExMTYtNmE0My00ZWQwLWE0YzQtMDFjMjcwMmMxZjk1X3RpZXJhY2tsZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 9738,
    in_GraphicFileId: "Handle_140",
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f18eee57-f7e9-406a-9bc3-573361b8a127_151_38_111.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FwW%2BU0U0jNPn9IduOR876jwlpdhqFvXWa2lbnMdXJiA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjE4ZWVlNTctZjdlOS00MDZhLTliYzMtNTczMzYxYjhhMTI3XzE1MV8zOF8xMTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
];
