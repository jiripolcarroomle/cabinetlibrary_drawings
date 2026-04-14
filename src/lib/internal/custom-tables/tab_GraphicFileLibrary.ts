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
    _id: 8372,
    in_GraphicFileId: "Dowel",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/990edf83-8634-4727-9494-803a58cc5a15_dowel.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=MJ%2FuKiVFeEmaa%2BwuZkWaEDhzulaufxy0r1JMgSnvhvg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTkwZWRmODMtODYzNC00NzI3LTk0OTQtODAzYTU4Y2M1YTE1X2Rvd2VsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8373,
    in_GraphicFileId: "DowelMiddleSide",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/990edf83-8634-4727-9494-803a58cc5a15_dowel.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=MJ%2FuKiVFeEmaa%2BwuZkWaEDhzulaufxy0r1JMgSnvhvg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTkwZWRmODMtODYzNC00NzI3LTk0OTQtODAzYTU4Y2M1YTE1X2Rvd2VsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8374,
    in_GraphicFileId: "DropDown_Front",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bb53a688-6c16-49f7-965a-0654fb6e3564_bar_front.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=0jiNazzYFABsGyFG12H6hYEJrYKDGzZw%2BC7d8nYe7Jk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmI1M2E2ODgtNmMxNi00OWY3LTk2NWEtMDY1NGZiNmUzNTY0X2Jhcl9mcm9udC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8375,
    in_GraphicFileId: "DropDown_L",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e28ca546-52fc-44ac-afc3-56b040252650_bar_l.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Bl1wb8QmwniZPEHnszTY0Cn8tU0lZ93Mfs2sUvPUjbA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTI4Y2E1NDYtNTJmYy00NGFjLWFmYzMtNTZiMDQwMjUyNjUwX2Jhcl9sLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8376,
    in_GraphicFileId: "DropDown_R",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/67921de9-035e-4c0e-8dc5-7095d89b90ba_bar_r.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=qHmEH0oYc%2F7XcOfChFCfGb1PJMpaFX%2Blax9vSkUMsek%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjc5MjFkZTktMDM1ZS00YzBlLThkYzUtNzA5NWQ4OWI5MGJhX2Jhcl9yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8377,
    in_GraphicFileId: "Graphic_Legra_Syncro",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/50c6c330-1d15-4b70-949e-68501e24d8c2_snchro_legra_2.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=rfkCcclXQDXchFp26VChe2aIP3tGZA8e0UkpNP5w5nk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTBjNmMzMzAtMWQxNS00YjcwLTk0OWUtNjg1MDFlMjRkOGMyX3NuY2hyb19sZWdyYV8yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8378,
    in_GraphicFileId: "Legra_Box_C_270_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2ced4606-ca2f-4c30-bf71-aa960685ee67_legra_box_c_270_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=AlvyPcsRTHXqhU1BYdTmjitzqnPb7PS4lmZ7g5KI%2FU8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmNlZDQ2MDYtY2EyZi00YzMwLWJmNzEtYWE5NjA2ODVlZTY3X2xlZ3JhX2JveF9jXzI3MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8379,
    in_GraphicFileId: "Legra_Box_C_270_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/482e7dd5-b133-48af-9ee5-67b2f07fa79e_legra_box_c_270_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=oTRB%2Bo2doN2xXRGpEJ5zFRSnir2ViFOmueUYciGpVXI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDgyZTdkZDUtYjEzMy00OGFmLTllZTUtNjdiMmYwN2ZhNzllX2xlZ3JhX2JveF9jXzI3MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8380,
    in_GraphicFileId: "Legra_Box_C_300_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cfc7e6d3-67c2-4353-83b1-05e5002e71c2_legra_box_c_300_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=4xUuRNsJRWB2R9Zp0%2BoRIzY0ulctVbYwwqmV44al5FE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2ZjN2U2ZDMtNjdjMi00MzUzLTgzYjEtMDVlNTAwMmU3MWMyX2xlZ3JhX2JveF9jXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8381,
    in_GraphicFileId: "Legra_Box_C_300_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/661adc63-bd14-4d76-b430-8e362e438d74_legra_box_c_300_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=hzHwnuI0FGBhq0WuV%2FFOxTL39%2BsOaV1ySDqnNkvcFKk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjYxYWRjNjMtYmQxNC00ZDc2LWI0MzAtOGUzNjJlNDM4ZDc0X2xlZ3JhX2JveF9jXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8382,
    in_GraphicFileId: "Legra_Box_C_350_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f0b70821-7536-4636-a60c-1aef4cb005eb_legra_box_c_350_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=j3V5Rtn1nUiCIXYj5q6f9HJ09ZSIIqvqIoiJajHMiuw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjBiNzA4MjEtNzUzNi00NjM2LWE2MGMtMWFlZjRjYjAwNWViX2xlZ3JhX2JveF9jXzM1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8383,
    in_GraphicFileId: "Legra_Box_C_350_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3e9c55e3-d5b7-4ed8-9e8c-6d29c19e39a2_legra_box_c_350_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=dBE5NEhXtbEhjbM5VGoGyi8EWf%2F09msZ7WztoHnGOxE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2U5YzU1ZTMtZDViNy00ZWQ4LTllOGMtNmQyOWMxOWUzOWEyX2xlZ3JhX2JveF9jXzM1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8384,
    in_GraphicFileId: "Legra_Box_C_400_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/44ef8f1f-b315-41db-bfad-3aa42917d9c7_legra_box_c_400_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=GQcXzMcFVnlnFjhsWpHwFhVis%2B4xPvILQKcQnwT1KVY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDRlZjhmMWYtYjMxNS00MWRiLWJmYWQtM2FhNDI5MTdkOWM3X2xlZ3JhX2JveF9jXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8385,
    in_GraphicFileId: "Legra_Box_C_400_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a20b2453-78d5-4c9a-8dad-9d73eec77aaf_legra_box_c_400_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=YRhdZ7GFjJ4AmcvHC3AydCG2%2BeK%2Fa5CPny6bG0n5ZkY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTIwYjI0NTMtNzhkNS00YzlhLThkYWQtOWQ3M2VlYzc3YWFmX2xlZ3JhX2JveF9jXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8386,
    in_GraphicFileId: "Legra_Box_C_450_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/85067691-a6d9-4f7d-9c2c-2c2b85874f63_legra_box_c_450_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=hWue5nNN%2F3LJ1DV%2FI4R5L8vLj3qdOBuV7eIW1JG3nGs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODUwNjc2OTEtYTZkOS00ZjdkLTljMmMtMmMyYjg1ODc0ZjYzX2xlZ3JhX2JveF9jXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8387,
    in_GraphicFileId: "Legra_Box_C_450_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/132dcbdb-9c69-4446-8ee9-d1d840ae7e98_legra_box_c_450_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=V06aF6Rbto73qreDBjJtRc5qUqBDe%2BcL1usZ0OpGxFg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTMyZGNiZGItOWM2OS00NDQ2LThlZTktZDFkODQwYWU3ZTk4X2xlZ3JhX2JveF9jXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8388,
    in_GraphicFileId: "Legra_Box_C_500_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/37cb0146-ec3c-4fd5-8f18-6beb5683b823_legra_box_c_500_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=fz0xvLezrutfkB6rmkJL3a%2Bc3KiMJbASiPTpsiyUKLo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzdjYjAxNDYtZWMzYy00ZmQ1LThmMTgtNmJlYjU2ODNiODIzX2xlZ3JhX2JveF9jXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8389,
    in_GraphicFileId: "Legra_Box_C_500_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2c18c5c0-3995-44e7-aabf-ecc1f9399605_legra_box_c_500_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=38Hqbsj4oN7P9gHxUlaNTmml1AdvsTpBMX%2BaDAKE%2BkI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmMxOGM1YzAtMzk5NS00NGU3LWFhYmYtZWNjMWY5Mzk5NjA1X2xlZ3JhX2JveF9jXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8390,
    in_GraphicFileId: "Legra_Box_C_550_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/beebbeff-80f0-4747-9d18-e9aa09b2c204_legra_box_c_550_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=9ogUz6zoCvoC1hzeHaHAuJ0UnNYezNlVggKnAbxyyYQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmVlYmJlZmYtODBmMC00NzQ3LTlkMTgtZTlhYTA5YjJjMjA0X2xlZ3JhX2JveF9jXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8391,
    in_GraphicFileId: "Legra_Box_C_550_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4e9cdfec-0643-4451-9073-b36ad7cd46c4_legra_box_c_550_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=UvFuV8imeaoeNJfrHj%2FkrydeOdJOyYXYrrdcfIMDS44%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGU5Y2RmZWMtMDY0My00NDUxLTkwNzMtYjM2YWQ3Y2Q0NmM0X2xlZ3JhX2JveF9jXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8392,
    in_GraphicFileId: "Legra_Box_C_600_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/75fa2172-ab44-46c7-aa6b-6d74abf3874d_legra_box_c_600_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=QjEZ6D%2BgLvEHYBm6XS1vXUGy7vU%2FQBZayuGq5CJ95cg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzVmYTIxNzItYWI0NC00NmM3LWFhNmItNmQ3NGFiZjM4NzRkX2xlZ3JhX2JveF9jXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8393,
    in_GraphicFileId: "Legra_Box_C_600_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/77bfb195-26a1-45bb-b128-7f4d63941212_legra_box_c_600_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=0dxvYaFWB4e0yuSbFbQOjQBsaKsNYVR4BcacJ%2FZrVgE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzdiZmIxOTUtMjZhMS00NWJiLWIxMjgtN2Y0ZDYzOTQxMjEyX2xlZ3JhX2JveF9jXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8394,
    in_GraphicFileId: "Legra_Box_C_650_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d9186a11-b585-4058-9842-23b8d89dbf41_legra_box_c_650_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=zq6SvHMxE0A66cpqzqe0hNtMmdKPQvowY1giILL%2F0Y8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDkxODZhMTEtYjU4NS00MDU4LTk4NDItMjNiOGQ4OWRiZjQxX2xlZ3JhX2JveF9jXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8395,
    in_GraphicFileId: "Legra_Box_C_650_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/56380462-13cc-460f-b916-8c2aa49fc74c_legra_box_c_650_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=CSryZTvaRZMiF9hM4kRfjxK3VfGgCy1DaS6Wy5kWxGQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTYzODA0NjItMTNjYy00NjBmLWI5MTYtOGMyYWE0OWZjNzRjX2xlZ3JhX2JveF9jXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8396,
    in_GraphicFileId: "Legra_Box_F_400_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ef58b296-1377-4b11-9e66-f72439b2c657_legra_box_f_400_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=GCWwI%2FxH%2FDlXSU4qyLyvAIa6szbpCrP%2FCtPYF8dix7U%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWY1OGIyOTYtMTM3Ny00YjExLTllNjYtZjcyNDM5YjJjNjU3X2xlZ3JhX2JveF9mXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8397,
    in_GraphicFileId: "Legra_Box_F_400_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b3ca69ff-3ce1-4635-ada0-9ecb90dd6224_legra_box_f_400_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=vFzXSnHmt8cL9a722uuHWskSziX5pUMjb%2B7fP8yaIwk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjNjYTY5ZmYtM2NlMS00NjM1LWFkYTAtOWVjYjkwZGQ2MjI0X2xlZ3JhX2JveF9mXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8398,
    in_GraphicFileId: "Legra_Box_F_450_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/304662bb-9c0e-4dd4-881c-15270f85249d_legra_box_f_450_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=No5tJe5nSRPrCn%2F2SQ%2B6oKhxLPPmsy7GY%2FOTh8c9MbQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzA0NjYyYmItOWMwZS00ZGQ0LTg4MWMtMTUyNzBmODUyNDlkX2xlZ3JhX2JveF9mXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8399,
    in_GraphicFileId: "Legra_Box_F_450_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/67004518-fb3f-4b61-8b31-0a8fdccf789d_legra_box_f_450_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=8%2FeGa%2BPyu%2B1AOTAYIyogg1qZ6qwBOsGo8A6Je5uzARk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjcwMDQ1MTgtZmIzZi00YjYxLThiMzEtMGE4ZmRjY2Y3ODlkX2xlZ3JhX2JveF9mXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8400,
    in_GraphicFileId: "Legra_Box_F_500_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/43a756ee-23d3-4f9d-9e81-05cc87094471_legra_box_f_500_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=4B6bBPzP0QWvPp%2FyBQ2Cbk43JA%2BWeXKfvN2WxoHkB7k%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDNhNzU2ZWUtMjNkMy00ZjlkLTllODEtMDVjYzg3MDk0NDcxX2xlZ3JhX2JveF9mXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8401,
    in_GraphicFileId: "Legra_Box_F_500_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0ef57de8-64c4-451b-8877-48b585b4acfc_legra_box_f_500_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=bdrFmMUv0OYWhhmzWUpyIn8%2FRA7tulIzB9IneUFzClw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGVmNTdkZTgtNjRjNC00NTFiLTg4NzctNDhiNTg1YjRhY2ZjX2xlZ3JhX2JveF9mXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8402,
    in_GraphicFileId: "Legra_Box_F_550_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/755128fe-a0d1-47d1-bd06-761d2167709a_legra_box_f_550_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=BsIOBETyN%2Fe3%2BMlWA1Ymcjznnvq9ly5YmopyT26fAnA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzU1MTI4ZmUtYTBkMS00N2QxLWJkMDYtNzYxZDIxNjc3MDlhX2xlZ3JhX2JveF9mXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8403,
    in_GraphicFileId: "Legra_Box_F_550_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/873f9654-7c60-4c18-89eb-67f3dfb7b5f4_legra_box_f_550_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=QbP9hpTvK2dG6coVScB%2Blppo9gEmpepX6wJcCeBat4Y%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODczZjk2NTQtN2M2MC00YzE4LTg5ZWItNjdmM2RmYjdiNWY0X2xlZ3JhX2JveF9mXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8404,
    in_GraphicFileId: "Legra_Box_F_600_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f727a3de-9eb0-400d-9e49-a5969d29e5b2_legra_box_f_600_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=wVqgA4acXtsLLjXKGY0fMSck5RcDWkmoY%2BNQeRMnUAw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjcyN2EzZGUtOWViMC00MDBkLTllNDktYTU5NjlkMjllNWIyX2xlZ3JhX2JveF9mXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8405,
    in_GraphicFileId: "Legra_Box_F_600_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3a4a8708-711c-4150-bac8-2fe21c6244b4_legra_box_f_600_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=2w7baC%2FFpmOERwvzRIjj0mjdvCGZva24Yelul74nP%2Fk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2E0YTg3MDgtNzExYy00MTUwLWJhYzgtMmZlMjFjNjI0NGI0X2xlZ3JhX2JveF9mXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8406,
    in_GraphicFileId: "Legra_Box_F_650_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8e912b57-83fd-4f1c-b29e-6aef86764a35_legra_box_f_650_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=j709ATegt6sX7y7IHLRKzNHfZi4Id%2FDDghcrn2lxNDA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGU5MTJiNTctODNmZC00ZjFjLWIyOWUtNmFlZjg2NzY0YTM1X2xlZ3JhX2JveF9mXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8407,
    in_GraphicFileId: "Legra_Box_F_650_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b1c09f70-ac24-4fb0-a52c-0ce0e7738d86_legra_box_f_650_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=QnvExCEOG1KjiD5CcU1tE9Fk3udOYuMnqH3tfbBwPow%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjFjMDlmNzAtYWMyNC00ZmIwLWE1MmMtMGNlMGU3NzM4ZDg2X2xlZ3JhX2JveF9mXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8408,
    in_GraphicFileId: "Legra_Box_K_300_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8cad9237-2098-4da0-858e-347fff0eaad8_legra_box_k_300_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=DacV%2BpNvOB%2BUN2s0lkig4Hxp5TGWTND%2BXe6zDGa%2Bq6c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGNhZDkyMzctMjA5OC00ZGEwLTg1OGUtMzQ3ZmZmMGVhYWQ4X2xlZ3JhX2JveF9rXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8409,
    in_GraphicFileId: "Legra_Box_K_300_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1bd7b5c8-10db-4808-9dac-cc27a1682c8b_legra_box_k_300_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=7c%2BdaW%2Fk9oFjJHdaQo%2FlMiSuAHJm%2Fly5Vpn8fzpMvdU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWJkN2I1YzgtMTBkYi00ODA4LTlkYWMtY2MyN2ExNjgyYzhiX2xlZ3JhX2JveF9rXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8410,
    in_GraphicFileId: "Legra_Box_K_350_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bdec7ade-867b-4f5d-b218-ff0899d68bd0_legra_box_k_350_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=SnbOmNokydUzL%2Btw%2FwsV3MRYL9o9GOBkWRRSUHIPTWA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmRlYzdhZGUtODY3Yi00ZjVkLWIyMTgtZmYwODk5ZDY4YmQwX2xlZ3JhX2JveF9rXzM1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8411,
    in_GraphicFileId: "Legra_Box_K_350_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/65e3c236-80c4-40cf-b985-c009a967785e_legra_box_k_350_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=AkUFKxKkhWgmqhJ3E4Bse7xOtYa%2FWugFQicAG%2BFt7lk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjVlM2MyMzYtODBjNC00MGNmLWI5ODUtYzAwOWE5Njc3ODVlX2xlZ3JhX2JveF9rXzM1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8412,
    in_GraphicFileId: "Legra_Box_K_400_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d9e7fa80-55cc-4b84-a979-674087a4197c_legra_box_k_400_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=n%2BIsM7fbIfOdpctWZFfG%2FbZDP0z%2BZ%2B0AW5CT5bxWHqs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDllN2ZhODAtNTVjYy00Yjg0LWE5NzktNjc0MDg3YTQxOTdjX2xlZ3JhX2JveF9rXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8413,
    in_GraphicFileId: "Legra_Box_K_400_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6ee590df-fb48-4c1f-99f3-41384988f804_legra_box_k_400_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=G1S7CzcVau9ryn8jneX2d8vxW0n%2FnGZdOFFKRKJ0PoY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmVlNTkwZGYtZmI0OC00YzFmLTk5ZjMtNDEzODQ5ODhmODA0X2xlZ3JhX2JveF9rXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8414,
    in_GraphicFileId: "Legra_Box_K_450_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b97a9fd7-4ece-42d3-b346-2f767e377cf2_legra_box_k_450_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=CaY%2B8hjo%2FvxSiL3YXzCLvmBsHqpbtd9egVVaZX0ciNk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjk3YTlmZDctNGVjZS00MmQzLWIzNDYtMmY3NjdlMzc3Y2YyX2xlZ3JhX2JveF9rXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8415,
    in_GraphicFileId: "Legra_Box_K_450_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1c14a78d-82af-49d5-95ff-30c935ec9713_legra_box_k_450_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=V70ZaR6hVoP%2BXxZuonI4bs8v1KEKIDqh296mmT54Bzg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWMxNGE3OGQtODJhZi00OWQ1LTk1ZmYtMzBjOTM1ZWM5NzEzX2xlZ3JhX2JveF9rXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8416,
    in_GraphicFileId: "Legra_Box_K_500_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/32236a11-1642-4723-9c2e-0e3652b20a80_legra_box_k_500_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=oFVtas7Qvubmr72IqIsBAgkaWxgHT%2F15cdN5FY702ZU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzIyMzZhMTEtMTY0Mi00NzIzLTljMmUtMGUzNjUyYjIwYTgwX2xlZ3JhX2JveF9rXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8417,
    in_GraphicFileId: "Legra_Box_K_500_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e55873b7-1ae7-4620-a9f6-88bea69a4ce1_legra_box_k_500_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=mFM%2FjTE7QFHGv5mrH4h6qk1wLzZ0A1rCwQpwUjMVx4M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTU1ODczYjctMWFlNy00NjIwLWE5ZjYtODhiZWE2OWE0Y2UxX2xlZ3JhX2JveF9rXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8418,
    in_GraphicFileId: "Legra_Box_K_550_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/75a9cb15-99ca-41e3-8c7d-543977ca25a3_legra_box_k_550_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=b4fWL9kC8ovw7Wf%2FU%2B%2ByO2xHNXf%2BYgtFrbzwNZatyHQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzVhOWNiMTUtOTljYS00MWUzLThjN2QtNTQzOTc3Y2EyNWEzX2xlZ3JhX2JveF9rXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8419,
    in_GraphicFileId: "Legra_Box_K_550_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/42b49072-b6b1-4a0d-9604-5fc48b025f26_legra_box_k_550_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=cgiKQXD%2Baa69xfmRn9YGFMtAmQty1zvFGvacL8kFe8c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDJiNDkwNzItYjZiMS00YTBkLTk2MDQtNWZjNDhiMDI1ZjI2X2xlZ3JhX2JveF9rXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8420,
    in_GraphicFileId: "Legra_Box_K_600_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3688cfd5-2b7a-49ea-a85b-5ada07ffd0ec_legra_box_k_600_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=brYXvO%2BkfUsdxtDZqjtpKF3jTF%2BC0XJ304UAFgCBfe0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzY4OGNmZDUtMmI3YS00OWVhLWE4NWItNWFkYTA3ZmZkMGVjX2xlZ3JhX2JveF9rXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8421,
    in_GraphicFileId: "Legra_Box_K_600_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4e3861b2-2697-4e27-8a7b-d5507a710afa_legra_box_k_600_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2F6qjTnp8HfZ7UbusWrBWD4%2BtJPzpMSc0P2lZ4aCVvfY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGUzODYxYjItMjY5Ny00ZTI3LThhN2ItZDU1MDdhNzEwYWZhX2xlZ3JhX2JveF9rXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8422,
    in_GraphicFileId: "Legra_Box_M_270_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9f7905a9-ea9f-4e89-876a-c752d53b16d9_legra_box_m_270_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ULcQtVBWJpdXff4luIaK%2F7JrE32nUg7j4YBmUqRY9cA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWY3OTA1YTktZWE5Zi00ZTg5LTg3NmEtYzc1MmQ1M2IxNmQ5X2xlZ3JhX2JveF9tXzI3MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8423,
    in_GraphicFileId: "Legra_Box_M_270_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1cddd179-bfdc-4136-934b-c4d8e4a768ca_legra_box_m_270_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=FcRzzvfZvADeLwtXHwWgqwJPLihJn6kjm20i3HHIZZM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWNkZGQxNzktYmZkYy00MTM2LTkzNGItYzRkOGU0YTc2OGNhX2xlZ3JhX2JveF9tXzI3MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8424,
    in_GraphicFileId: "Legra_Box_M_300_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/60eaf90c-8d68-4f1d-bb98-49b23e8bc748_legra_box_m_300_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2Bh92kVJiLR15vBcONTn%2BKcu7mLXQOn%2FjnLE8KTO6ges%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjBlYWY5MGMtOGQ2OC00ZjFkLWJiOTgtNDliMjNlOGJjNzQ4X2xlZ3JhX2JveF9tXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8425,
    in_GraphicFileId: "Legra_Box_M_300_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/af3a4f1f-a1fc-4d93-8ca8-29636a484272_legra_box_m_300_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=wWdN08NClqqaU%2BDh3FQoxLMHY1G7uAgZGtLeKvB6rSI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWYzYTRmMWYtYTFmYy00ZDkzLThjYTgtMjk2MzZhNDg0MjcyX2xlZ3JhX2JveF9tXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8426,
    in_GraphicFileId: "Legra_Box_M_350_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/79bba4e9-a56a-40d0-bb94-b9fa2929d458_legra_box_m_350_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=iNDUUrQhk5BPj3xXprGNcDv0SwxNGQa54lkFRE9dZqE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzliYmE0ZTktYTU2YS00MGQwLWJiOTQtYjlmYTI5MjlkNDU4X2xlZ3JhX2JveF9tXzM1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8427,
    in_GraphicFileId: "Legra_Box_M_350_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9d04914f-b70a-4896-abb7-bf63b4778f13_legra_box_m_350_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=BitujxYBpeHHt%2BhFhYyw6xAJQOEkl3BF8KiDHuJxXD4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWQwNDkxNGYtYjcwYS00ODk2LWFiYjctYmY2M2I0Nzc4ZjEzX2xlZ3JhX2JveF9tXzM1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8428,
    in_GraphicFileId: "Legra_Box_M_400_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/725fb76a-0013-4fba-94b4-5c9b1ab771d6_legra_box_m_400_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=aY%2BxiqpRQ6JT1N1z1vmcujWOzi8E9AjyDyeqd9YEZVA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzI1ZmI3NmEtMDAxMy00ZmJhLTk0YjQtNWM5YjFhYjc3MWQ2X2xlZ3JhX2JveF9tXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8429,
    in_GraphicFileId: "Legra_Box_M_400_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/12d6c28f-4024-45b4-b63e-add201f6ac48_legra_box_m_400_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=KCa3kgNkSHI6Bdr4%2Fd0zoNK9upv0pJ19jlSdAbdKBlo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTJkNmMyOGYtNDAyNC00NWI0LWI2M2UtYWRkMjAxZjZhYzQ4X2xlZ3JhX2JveF9tXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8430,
    in_GraphicFileId: "Legra_Box_M_450_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ce48315a-c36c-4339-ba9c-8f632d170564_legra_box_m_450_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=qtPiMk9isAikAxCIPwqs4s4kWJjuGLXEPPoHEOfRPAM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2U0ODMxNWEtYzM2Yy00MzM5LWJhOWMtOGY2MzJkMTcwNTY0X2xlZ3JhX2JveF9tXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8431,
    in_GraphicFileId: "Legra_Box_M_450_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e379d18a-5124-4277-a5a2-d2ec5da4f2f1_legra_box_m_450_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=5jPqJFfnelq6Gg3O4zUV4XLpp4zDjciFgoP8IuXzhBc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTM3OWQxOGEtNTEyNC00Mjc3LWE1YTItZDJlYzVkYTRmMmYxX2xlZ3JhX2JveF9tXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8432,
    in_GraphicFileId: "Legra_Box_M_500_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cdc6711e-3e7e-4c40-86ea-a62258391249_legra_box_m_500_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=mYfGklBY6azJ7QKUNfSZk5FVQ3klvY1o8YtwuSJHfNg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2RjNjcxMWUtM2U3ZS00YzQwLTg2ZWEtYTYyMjU4MzkxMjQ5X2xlZ3JhX2JveF9tXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8433,
    in_GraphicFileId: "Legra_Box_M_500_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f25899ca-dc71-482b-823e-334850ebb8ec_legra_box_m_500_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=0MsnK5%2FIsDgKuz3JkpL%2FmvZOdFhA5cr01IU%2FbLVPniQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjI1ODk5Y2EtZGM3MS00ODJiLTgyM2UtMzM0ODUwZWJiOGVjX2xlZ3JhX2JveF9tXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8434,
    in_GraphicFileId: "Legra_Box_M_550_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dc8a410f-7ac6-4683-afac-55016eff47e8_legra_box_m_550_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=tpuNDlACM%2FWFFBPoAavOTSSGl49r3r0XoQim%2FdkXX80%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGM4YTQxMGYtN2FjNi00NjgzLWFmYWMtNTUwMTZlZmY0N2U4X2xlZ3JhX2JveF9tXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8435,
    in_GraphicFileId: "Legra_Box_M_550_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ffe8450f-d647-44e4-a946-723ded37131f_legra_box_m_550_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=svRl%2FfkRB%2BTGRwygqDEwlMmKAIiMnYdNJr2ymPYq59Y%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmZlODQ1MGYtZDY0Ny00NGU0LWE5NDYtNzIzZGVkMzcxMzFmX2xlZ3JhX2JveF9tXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8436,
    in_GraphicFileId: "Legra_Box_M_600_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/988e5d54-670e-4250-9f36-00d73bc56e52_legra_box_m_600_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=YpJpe1lW%2FbAA8pedexKH32fKS3jltAfO%2B07pvkBP46s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTg4ZTVkNTQtNjcwZS00MjUwLTlmMzYtMDBkNzNiYzU2ZTUyX2xlZ3JhX2JveF9tXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8437,
    in_GraphicFileId: "Legra_Box_M_600_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/550e847a-057a-4266-8e64-ccdacfad7149_legra_box_m_600_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=jzq%2BXofl234R6kT92395JlJ%2BPCA0wFgSv9Obt9cfR4w%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTUwZTg0N2EtMDU3YS00MjY2LThlNjQtY2NkYWNmYWQ3MTQ5X2xlZ3JhX2JveF9tXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8438,
    in_GraphicFileId: "Legra_Box_M_650_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cff96b27-d8c5-4eb0-a2bd-970fe88819be_legra_box_m_650_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=OCxK2OFB7eW0dOFY7hdOcS1CuI2b107vcS%2FWbR5Qe9s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2ZmOTZiMjctZDhjNS00ZWIwLWEyYmQtOTcwZmU4ODgxOWJlX2xlZ3JhX2JveF9tXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8439,
    in_GraphicFileId: "Legra_Box_M_650_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fe09b72f-7037-44a3-9f1b-44d248f37c33_legra_box_m_650_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=5ic%2BBQwzjiLx2IQJhMfOUAvdzHhCN581Ah50D0B9peg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmUwOWI3MmYtNzAzNy00NGEzLTlmMWItNDRkMjQ4ZjM3YzMzX2xlZ3JhX2JveF9tXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8440,
    in_GraphicFileId: "Legra_Box_N_400_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1e88ca09-3453-410d-bb7c-e8ae0cc19aa1_legra_box_n_400_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=OnErwGMddvnViHk5epAEB2ApoZWZ%2BulyX3FoqHJxOF4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWU4OGNhMDktMzQ1My00MTBkLWJiN2MtZThhZTBjYzE5YWExX2xlZ3JhX2JveF9uXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8441,
    in_GraphicFileId: "Legra_Box_N_400_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b9bd6003-052b-4812-aea8-17f699ad99d5_legra_box_n_400_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=PjVXfH5DUiaXVWcsOr94p4A3GptIkRR1hiVYNcd2qZ0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjliZDYwMDMtMDUyYi00ODEyLWFlYTgtMTdmNjk5YWQ5OWQ1X2xlZ3JhX2JveF9uXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8442,
    in_GraphicFileId: "Legra_Box_N_450_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9a376c43-9b5e-48b9-b469-b5ac3273bec8_legra_box_n_450_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=jTKbdg55Ii0QJXUwMuvLVmZl0Jm5iMncPdR0s9PsR2M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWEzNzZjNDMtOWI1ZS00OGI5LWI0NjktYjVhYzMyNzNiZWM4X2xlZ3JhX2JveF9uXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8443,
    in_GraphicFileId: "Legra_Box_N_450_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/463398c4-7ffd-4cb5-b1e1-89bb16db1460_legra_box_n_450_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=LIf3SGHSfjcwgoEIHDpMxMpVflgaoS7N0uHjK2mOBes%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDYzMzk4YzQtN2ZmZC00Y2I1LWIxZTEtODliYjE2ZGIxNDYwX2xlZ3JhX2JveF9uXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8444,
    in_GraphicFileId: "Legra_Box_N_500_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a78b3f85-b864-4ad2-b397-001d778bc10a_legra_box_n_500_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=gf2AcfGo%2BKBAuDKlemGLQEf3hHnJibisTtLjeneKXh8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTc4YjNmODUtYjg2NC00YWQyLWIzOTctMDAxZDc3OGJjMTBhX2xlZ3JhX2JveF9uXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8445,
    in_GraphicFileId: "Legra_Box_N_500_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/edf6b05b-b3a2-4dfe-9d30-49b557e580b7_legra_box_n_500_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=XPqJLp6VmX8Rso4wrjYqgfSlyOQAbHh56GlC%2Bfwtj00%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWRmNmIwNWItYjNhMi00ZGZlLTlkMzAtNDliNTU3ZTU4MGI3X2xlZ3JhX2JveF9uXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8446,
    in_GraphicFileId: "Legra_Box_N_550_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/40be35f6-a306-4d9d-b543-6050ae0378d7_legra_box_n_550_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=eKDWPfmnbdUjPR9ADCH4rRNss0oKGY4iJ5AKctvrA2c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDBiZTM1ZjYtYTMwNi00ZDlkLWI1NDMtNjA1MGFlMDM3OGQ3X2xlZ3JhX2JveF9uXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8447,
    in_GraphicFileId: "Legra_Box_N_550_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8f227258-038f-473d-a7c9-a24403f5f31f_legra_box_n_550_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Uj9M52kwMSdxF7F0%2FeqR39jJnXNk%2Fw0XzptkU7UWalQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGYyMjcyNTgtMDM4Zi00NzNkLWE3YzktYTI0NDAzZjVmMzFmX2xlZ3JhX2JveF9uXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8448,
    in_GraphicFileId: "Legra_Pure_C",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a74e26d9-b9c9-4ac2-9e8a-9fd0ba9ab964_legra_c_low.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=K5PHK%2BW%2B5fRBoDgDhRD0hhMlpY24farXm3G5JUV0Dus%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTc0ZTI2ZDktYjljOS00YWMyLTllOGEtOWZkMGJhOWFiOTY0X2xlZ3JhX2NfbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8449,
    in_GraphicFileId: "Legra_Pure_F",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/999e3bf7-00ec-4079-b68d-67d85394f2c4_legra_f_low.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=M%2FnGwjj2lxv0miDpgw%2FTvDFSNx%2BfCpWm%2BnsxVQYWotQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTk5ZTNiZjctMDBlYy00MDc5LWI2OGQtNjdkODUzOTRmMmM0X2xlZ3JhX2ZfbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8450,
    in_GraphicFileId: "Legra_Pure_K",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9425a710-208e-4698-8b8e-072ee30f2e5f_legra_k_low.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=FoqGpI5xJfTHqOKtzNCL%2FjlfqYTglWOO5EJkSDrJJIw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTQyNWE3MTAtMjA4ZS00Njk4LThiOGUtMDcyZWUzMGYyZTVmX2xlZ3JhX2tfbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8451,
    in_GraphicFileId: "Legra_Pure_M",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b4cb3f8b-fe0f-4db5-a0a6-eb38cb7534e6_legra_m_low.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=WYRnhcGNSO8t%2BkzsenA%2BzIA2eefvXdlQf9y69YRYbb4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjRjYjNmOGItZmUwZi00ZGI1LWEwYTYtZWIzOGNiNzUzNGU2X2xlZ3JhX21fbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8452,
    in_GraphicFileId: "Legra_Pure_N",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dbfe818c-5cb3-4bf7-aa35-95e77caa5780_legra_n_low.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=mw2ij3Wz6o9HLGOEy92CN9EOyEiAvB9XwAO1nIsROoU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGJmZTgxOGMtNWNiMy00YmY3LWFhMzUtOTVlNzdjYWE1NzgwX2xlZ3JhX25fbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8453,
    in_GraphicFileId: "Legra_Slide_270_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8a174d84-6e2b-4a37-a09c-3738c2015d75_legra_glide_270_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=HImlSpMeljVy4C8cjM0kE9VqoP7QdhXHMh1wN1YNXBk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGExNzRkODQtNmUyYi00YTM3LWEwOWMtMzczOGMyMDE1ZDc1X2xlZ3JhX2dsaWRlXzI3MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8454,
    in_GraphicFileId: "Legra_Slide_270_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8414cdf5-b75d-4a97-908e-84ce71761340_legra_glide_270_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=48I5oPjiJMtiQrbYBmPQDAHicOoBfDHqRYsW9oowGe0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODQxNGNkZjUtYjc1ZC00YTk3LTkwOGUtODRjZTcxNzYxMzQwX2xlZ3JhX2dsaWRlXzI3MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8455,
    in_GraphicFileId: "Legra_Slide_300_350_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6ba631ef-1d09-414c-9fec-5d368ec7e5e6_legra_glide_300_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=SNVa8eMMjmYZ8jtRYF0m5%2BBY%2FbBKB%2F5S56Vuvo%2BryWE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmJhNjMxZWYtMWQwOS00MTRjLTlmZWMtNWQzNjhlYzdlNWU2X2xlZ3JhX2dsaWRlXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8456,
    in_GraphicFileId: "Legra_Slide_300_350_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/37ec789b-8bd6-4250-95ba-9d3802bc4866_legra_glide_300_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=QvJ2d%2Btzcfc23JUCtIp39qMFEpvN2TEozQr2qdbwJ38%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzdlYzc4OWItOGJkNi00MjUwLTk1YmEtOWQzODAyYmM0ODY2X2xlZ3JhX2dsaWRlXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8457,
    in_GraphicFileId: "Legra_Slide_400_450_500_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8bbf79c8-f774-4bcd-a384-3ae64cb84f65_legra_glide_400_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=JkXmOtkqc5C5ZE%2Bklxw62OAgEITgtGsYsN0cqDQhnfs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGJiZjc5YzgtZjc3NC00YmNkLWEzODQtM2FlNjRjYjg0ZjY1X2xlZ3JhX2dsaWRlXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8458,
    in_GraphicFileId: "Legra_Slide_400_450_500_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f299ed45-c904-4261-961b-9dca84e8d475_legra_glide_400_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=etI7RhRtgmpNqz7J%2F10%2BpeQvPKX7PIGLAG0q4lgPFGY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjI5OWVkNDUtYzkwNC00MjYxLTk2MWItOWRjYTg0ZThkNDc1X2xlZ3JhX2dsaWRlXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8459,
    in_GraphicFileId: "Legra_Slide_450_H_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8bbf79c8-f774-4bcd-a384-3ae64cb84f65_legra_glide_400_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=JkXmOtkqc5C5ZE%2Bklxw62OAgEITgtGsYsN0cqDQhnfs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGJiZjc5YzgtZjc3NC00YmNkLWEzODQtM2FlNjRjYjg0ZjY1X2xlZ3JhX2dsaWRlXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8460,
    in_GraphicFileId: "Legra_Slide_450_H_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f299ed45-c904-4261-961b-9dca84e8d475_legra_glide_400_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=etI7RhRtgmpNqz7J%2F10%2BpeQvPKX7PIGLAG0q4lgPFGY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjI5OWVkNDUtYzkwNC00MjYxLTk2MWItOWRjYTg0ZThkNDc1X2xlZ3JhX2dsaWRlXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8461,
    in_GraphicFileId: "Legra_Slide_500_550_600_H_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ae892456-60e4-4bd6-a961-a183f03034ae_legra_glide_600_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=VSK1b8inplvTONEitgKp4ChC6lwdhsfLTYCsQpYYmdk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWU4OTI0NTYtNjBlNC00YmQ2LWE5NjEtYTE4M2YwMzAzNGFlX2xlZ3JhX2dsaWRlXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8462,
    in_GraphicFileId: "Legra_Slide_500_550_600_H_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/db0d825d-3fb2-49b0-b49e-24892e0d907e_legra_glide_600_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=fmlFjXDwr%2B0zGCvVPDmsA1Ikge2QJ1k5VugG9taIj4Y%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGIwZDgyNWQtM2ZiMi00OWIwLWI0OWUtMjQ4OTJlMGQ5MDdlX2xlZ3JhX2dsaWRlXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8463,
    in_GraphicFileId: "Legra_Slide_550_600_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ae892456-60e4-4bd6-a961-a183f03034ae_legra_glide_600_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=VSK1b8inplvTONEitgKp4ChC6lwdhsfLTYCsQpYYmdk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWU4OTI0NTYtNjBlNC00YmQ2LWE5NjEtYTE4M2YwMzAzNGFlX2xlZ3JhX2dsaWRlXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8464,
    in_GraphicFileId: "Legra_Slide_550_600_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/db0d825d-3fb2-49b0-b49e-24892e0d907e_legra_glide_600_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=fmlFjXDwr%2B0zGCvVPDmsA1Ikge2QJ1k5VugG9taIj4Y%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGIwZDgyNWQtM2ZiMi00OWIwLWI0OWUtMjQ4OTJlMGQ5MDdlX2xlZ3JhX2dsaWRlXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8465,
    in_GraphicFileId: "Legra_Slide_650_H_Left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5f15c6a9-1ce6-4212-9f45-309deae7aef7_slide_650_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=MwZdAvx18S8UZTYzJOeQioKoBNcR%2F4qo%2F72X4m%2BoR8M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWYxNWM2YTktMWNlNi00MjEyLTlmNDUtMzA5ZGVhZTdhZWY3X3NsaWRlXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8466,
    in_GraphicFileId: "Legra_Slide_650_H_Right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/db6467ac-28b5-4092-a6ec-c510db1ff553_slide_650_right.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Im80PQzCDPex%2Bp96QtHzplVNpxhehCTxvqTnVHyyX8E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGI2NDY3YWMtMjhiNS00MDkyLWE2ZWMtYzUxMGRiMWZmNTUzX3NsaWRlXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8467,
    in_GraphicFileId: "MinifixConnectionBolt01",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0a04dd59-1611-47bb-939c-6bfd127a7620_262_28_920_details_low.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=7Hxnyn87Cr0dIIFgQHsONUROedqpuKw3h2GUOQCLKT0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGEwNGRkNTktMTYxMS00N2JiLTkzOWMtNmJmZDEyN2E3NjIwXzI2Ml8yOF85MjBfZGV0YWlsc19sb3cub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8468,
    in_GraphicFileId: "MinifixConnectionCover",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/466380dd-da71-4b61-8975-55813b9ae265_262_24_751_details_low.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=7eNDOiq8V7mB7Xicz0CXZ1l9gZP7cncEqGKeieYioNI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDY2MzgwZGQtZGE3MS00YjYxLTg5NzUtNTU4MTNiOWFlMjY1XzI2Ml8yNF83NTFfZGV0YWlsc19sb3cub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8469,
    in_GraphicFileId: "MinifixConnectionHousing01",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/54097e50-a5a1-459e-b6f4-1d8a93c47781_262_26_533_details_low.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=BFry2eo8ML31n7IBoHgYCAjM06SFvPrjY3BT56qhsIw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTQwOTdlNTAtYTVhMS00NTllLWI2ZjQtMWQ4YTkzYzQ3NzgxXzI2Ml8yNl81MzNfZGV0YWlsc19sb3cub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8470,
    in_GraphicFileId: "Model3D_Aventos_HF_Connector",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/68d4b3f7-5e31-4072-89d3-dfe140f7a2a9_connector.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=auQqpzTPgDsDdEKorv%2FDgT6NW0q1xCIxZ%2F4p9ULhLkQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjhkNGIzZjctNWUzMS00MDcyLTg5ZDMtZGZlMTQwZjdhMmE5X2Nvbm5lY3Rvci5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8471,
    in_GraphicFileId: "Model3D_Aventos_HF_Mech",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d63fac78-bc8c-4bef-93a6-e5ec52aa3134_mech_480_610.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=nwPPIloj3SrOAOG9GGqeqoqAkdvt%2BgUDb6%2BwyO7Uw3I%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDYzZmFjNzgtYmM4Yy00YmVmLTkzYTYtZTVlYzUyYWEzMTM0X21lY2hfNDgwXzYxMC5vYmo=',
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
      "attachmentId": "bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWU5NWU3NjItOTZjYi00OGQyLTg4MjctNWM2NzMyOWIzYzMwX2RhdGEuYmlu"
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
    _id: 8472,
    in_GraphicFileId: "Model3D_Aventos_HF_Mech_480",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8f9e3d4d-31fd-47e8-b569-fa1060a5fd41_aventos_hf_arm_480.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=j2Rrsf4SDktaE2ckrAKdbhJ10WdoOBQIWjEKvc4sI6E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGY5ZTNkNGQtMzFmZC00N2U4LWI1NjktZmExMDYwYTVmZDQxX2F2ZW50b3NfaGZfYXJtXzQ4MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8473,
    in_GraphicFileId: "Model3D_Aventos_HF_Mech_600",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4897c688-012a-4c5d-8dcc-73566ffa489d_aventos_hf_arm_600.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=nnPOwrT7KE%2BY%2Fa4p7gs5DlYcd2sRG8U9XGTyjbVWBuY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDg5N2M2ODgtMDEyYS00YzVkLThkY2MtNzM1NjZmZmE0ODlkX2F2ZW50b3NfaGZfYXJtXzYwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8474,
    in_GraphicFileId: "Model3D_Aventos_HF_Mech_840",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d6db76a8-c4ac-48cb-8379-212d1149f616_aventos_hf_arm_840.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Z2JMUXvp%2BC3bzNSvKBQc74mFwWAJAekkBBBCkGBVvWU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDZkYjc2YTgtYzRhYy00OGNiLTgzNzktMjEyZDExNDlmNjE2X2F2ZW50b3NfaGZfYXJtXzg0MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8475,
    in_GraphicFileId: "Model3D_Aventos_HF_PSL",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0e18360b-c0e4-47fc-983d-b2e0a132e799_aventos_psl.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=8HV7m2nA9bK99g3BKjojwHnXp6VZwtv05iX9qeTQCZk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGUxODM2MGItYzBlNC00N2ZjLTk4M2QtYjJlMGExMzJlNzk5X2F2ZW50b3NfcHNsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8476,
    in_GraphicFileId: "Model3D_Aventos_HF_PSR",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/712d2a8b-69d7-4c64-a043-26e5b17cf0d0_aventos_psr.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=YqycRV4iK2flGrOaU4kRn3O5dKblMmFOS8pXcKuOzoA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzEyZDJhOGItNjlkNy00YzY0LWEwNDMtMjZlNWIxN2NmMGQwX2F2ZW50b3NfcHNyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8477,
    in_GraphicFileId: "Model3D_Aventos_HK_Connector",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/26eb4cc3-ccd3-447a-b345-7aa2e48a0ff2_aventos_hk_connector.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=9fhaPO6q6FHQlNrHXnUWWzXaRFgYOBV%2BM0uRCCUp0OQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjZlYjRjYzMtY2NkMy00NDdhLWIzNDUtN2FhMmU0OGEwZmYyX2F2ZW50b3NfaGtfY29ubmVjdG9yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8478,
    in_GraphicFileId: "Model3D_Aventos_HK_PSL",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a174d243-0521-4dbc-8515-246768979f69_aventos_hk_l.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=tAALVl7lxdipKSXiaFV9nnQ4R5Uk9gFqB0viSlax%2F10%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTE3NGQyNDMtMDUyMS00ZGJjLTg1MTUtMjQ2NzY4OTc5ZjY5X2F2ZW50b3NfaGtfbC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8479,
    in_GraphicFileId: "Model3D_Aventos_HK_PSR",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/89b9df54-ba74-49a1-b315-f2b962a17df2_aventos_hk_r.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=2QplwU%2FbG4kFbbq3TQjCwzwMnaPG5oCuGb8ROrx2i4M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODliOWRmNTQtYmE3NC00OWExLWIzMTUtZjJiOTYyYTE3ZGYyX2F2ZW50b3NfaGtfci5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8480,
    in_GraphicFileId: "Model3D_Aventos_HKXS_Carcase_L",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b6d9bf8e-1a90-4a5a-ba03-15f64fa0e811_hkxs_cl.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=44HqWSLXNHux88owE9FX9Ipix6DDzmHIhmDCNhTi4CY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjZkOWJmOGUtMWE5MC00YTVhLWJhMDMtMTVmNjRmYTBlODExX2hreHNfY2wub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8481,
    in_GraphicFileId: "Model3D_Aventos_HKXS_Carcase_R",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/431fed66-a239-4ffa-aa56-c8cb38b9646d_hkxs_cr.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=FhxGv%2F6clgm6M3wr2bp%2B9KKYK3RHMG51Gbz%2FVOXMFxs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDMxZmVkNjYtYTIzOS00ZmZhLWFhNTYtYzhjYjM4Yjk2NDZkX2hreHNfY3Iub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8482,
    in_GraphicFileId: "Model3D_Aventos_HKXS_Front",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8c81aa76-ce5b-40b8-9d25-4ead1155b534_hkxs_connector.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=hldC%2BxADkm3D%2FUmJ3Wuy3xDQn1RMdyf%2BFuoHm5LT5pY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGM4MWFhNzYtY2U1Yi00MGI4LTlkMjUtNGVhZDExNTViNTM0X2hreHNfY29ubmVjdG9yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8483,
    in_GraphicFileId: "Model3D_Aventos_HKXS_Mech",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c9414b5c-c2cf-4c96-92a4-57b3baa72194_hkxs_mech.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=lsBLOgqGJ%2BFa%2B4Ue%2FKn2i7DKn8EhhnQSGUczF3qwYi4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzk0MTRiNWMtYzJjZi00Yzk2LTkyYTQtNTdiM2JhYTcyMTk0X2hreHNfbWVjaC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8484,
    in_GraphicFileId: "Model3D_Aventos_HL_Mech1",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/90e61c8e-9525-4029-ba91-136ef1648e9d_aventos_hl_mech1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=zRE%2FIlgH%2BT6kFNvFZE3LST1bgUtyPjFKHNtE3yy2NtQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTBlNjFjOGUtOTUyNS00MDI5LWJhOTEtMTM2ZWYxNjQ4ZTlkX2F2ZW50b3NfaGxfbWVjaDEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8485,
    in_GraphicFileId: "Model3D_Aventos_HL_Mech2",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d4f50146-afbd-418d-9550-b0872873a172_aventos_hl_mech2.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=GZ%2FBvc8DbUebeKioMT4aRPGbSKAH3mGD14ZT9Flm6eM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDRmNTAxNDYtYWZiZC00MThkLTk1NTAtYjA4NzI4NzNhMTcyX2F2ZW50b3NfaGxfbWVjaDIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8486,
    in_GraphicFileId: "Model3D_Aventos_HL_Mech3",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0cac380c-e7c0-43bf-af2e-e8864bac0ca6_aventos_hl_mech3.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=aghzr%2Frc5wtS7SxYFCoHOhcGffQnsZKAJs93B6E2CxM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGNhYzM4MGMtZTdjMC00M2JmLWFmMmUtZTg4NjRiYWMwY2E2X2F2ZW50b3NfaGxfbWVjaDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8487,
    in_GraphicFileId: "Model3D_Aventos_HL_Mech4",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7f6b9f18-798f-494a-ae9c-4f454b06e7b2_aventos_hl_mech4.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=7T6BcNIVSlzFP%2BVNFUur%2FyxtGclHK94uadwOzGBpQfQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2Y2YjlmMTgtNzk4Zi00OTRhLWFlOWMtNGY0NTRiMDZlN2IyX2F2ZW50b3NfaGxfbWVjaDQub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8488,
    in_GraphicFileId: "Model3D_Aventos_HL_PSL",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e429d37c-8e40-4f88-8071-1e69b2c4d81c_aventos_hl_psl.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=gGIUxvCPTzqkCCzpxk%2BxrbyAj%2FwuCK%2BSR2tuskOXpnQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTQyOWQzN2MtOGU0MC00Zjg4LTgwNzEtMWU2OWIyYzRkODFjX2F2ZW50b3NfaGxfcHNsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8489,
    in_GraphicFileId: "Model3D_Aventos_HL_PSR",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/db76f4c2-d393-4ad7-b3a6-efb22ce3e8dc_aventos_hl_psr.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=5CEi7lOGn6AlXQrQTtpAa6gAlLVzxlYHZ4EfLS6pK5M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGI3NmY0YzItZDM5My00YWQ3LWIzYTYtZWZiMjJjZTNlOGRjX2F2ZW50b3NfaGxfcHNyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8490,
    in_GraphicFileId: "Model3D_Aventos_HS_PSL",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9a8871a2-bd53-4f61-8d8c-54e3e0e4c0e0_aventos_hs_psl.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=A9J9i9%2BNJFesWyoaDF%2BNXnhreGykDahgyrxYVvLgvxY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWE4ODcxYTItYmQ1My00ZjYxLThkOGMtNTRlM2UwZTRjMGUwX2F2ZW50b3NfaHNfcHNsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8491,
    in_GraphicFileId: "Model3D_Aventos_HS_PSR",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7307dbb1-fd92-4be6-8b03-6ee6f91bbaf7_aventos_hs_psr.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=5ERzOhhvQEVZxn%2F1cojzk5SmdPO1lVvWPb1pc%2Bdnwf8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzMwN2RiYjEtZmQ5Mi00YmU2LThiMDMtNmVlNmY5MWJiYWY3X2F2ZW50b3NfaHNfcHNyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8492,
    in_GraphicFileId: "Model3D_Legra_FrontBotCon",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2383231f-3612-4573-a1df-67430e0c1dd9_legra_bottofrontcon.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=l5LPMPLD9QbexNB1WymA2vGicUdNlK2wHqDTChaPqfc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjM4MzIzMWYtMzYxMi00NTczLWExZGYtNjc0MzBlMGMxZGQ5X2xlZ3JhX2JvdHRvZnJvbnRjb24ub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8493,
    in_GraphicFileId: "Model3DAdapterHousingLong",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e0dfff34-862f-44c2-9868-5ac25aabb8b3_adapterhousinglongblack_356_04_362.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=3ni%2BfZFwDVs7f2ojSzfW6MtagE%2FA3ZAuTk0piS5PtpQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTBkZmZmMzQtODYyZi00NGMyLTk4NjgtNWFjMjVhYWJiOGIzX2FkYXB0ZXJob3VzaW5nbG9uZ2JsYWNrXzM1Nl8wNF8zNjIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8494,
    in_GraphicFileId: "Model3DAdapterHousingShort",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ac868306-80d5-4446-84a5-00cf8585187a_adapterhousingshortblack_356_04_363.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ikPmG0ZFpvMR505OQDsrhyI7SMY1JRCs1rbRSpSol08%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWM4NjgzMDYtODBkNS00NDQ2LTg0YTUtMDBjZjg1ODUxODdhX2FkYXB0ZXJob3VzaW5nc2hvcnRibGFja18zNTZfMDRfMzYzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8495,
    in_GraphicFileId: "Model3DBracket01",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d10122ea-f766-4bf1-a080-f1178bd318e9_bracket%20-%20260_28_004.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=m6r1lTDfBNYcvDuDmtrvszDm36Y3j9D15uMsJGveGg4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDEwMTIyZWEtZjc2Ni00YmYxLWEwODAtZjExNzhiZDMxOGU5X2JyYWNrZXQgLSAyNjBfMjhfMDA0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8496,
    in_GraphicFileId: "Model3DBracketHandle128",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/94f0be95-24ea-4e6e-b7f8-5e157896333c_155_01_251_2.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=J5qQSSZAPhJBWqNn3vaVm2N8okvfbCoRU6ta4a%2F84Qs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTRmMGJlOTUtMjRlYS00ZTZlLWI3ZjgtNWUxNTc4OTYzMzNjXzE1NV8wMV8yNTFfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8497,
    in_GraphicFileId: "Model3DBracketHandle160",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/08dea716-01fa-41b9-bbab-04504cb1ed13_155_01_252_3.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=DS5jASSGHCbj%2BqFA28k%2FSU0q8obDPeVW9MhNw%2FF%2FnAM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDhkZWE3MTYtMDFmYS00MWI5LWJiYWItMDQ1MDRjYjFlZDEzXzE1NV8wMV8yNTJfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8498,
    in_GraphicFileId: "Model3DBracketHandle192",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/60a46fb5-6627-4da5-b63f-86632c268e25_155_01_253_4.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=k%2BG3wSuuRlEGJ0lgPcA4q6syjIfEbzqRo823WFnFijs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjBhNDZmYjUtNjYyNy00ZGE1LWI2M2YtODY2MzJjMjY4ZTI1XzE1NV8wMV8yNTNfNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8499,
    in_GraphicFileId: "Model3DBracketHandle224",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/341f0125-0de6-4b2b-a519-9b7bd3a7e4fe_155_01_254_5.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=5TfFr1RPAMGGnpTbDX2aBrv2YxZe%2F3lc%2F8eERFXstPo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzQxZjAxMjUtMGRlNi00YjJiLWE1MTktOWI3YmQzYTdlNGZlXzE1NV8wMV8yNTRfNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8500,
    in_GraphicFileId: "Model3DBracketHandle288",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4907e536-be36-4fbf-ab49-eb5a7488efbd_155_01_255_6.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=7nJL76O60cNvvDgeSvtWOUPeDn6ZzGysuPbzjL2vXRg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDkwN2U1MzYtYmUzNi00ZmJmLWFiNDktZWI1YTc0ODhlZmJkXzE1NV8wMV8yNTVfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8501,
    in_GraphicFileId: "Model3DBracketHandle320",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7f76b962-6206-4d12-a2f5-8672bcf02141_155_01_256_7.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=zAUUhcHX%2FpvzzATYyBiawncgh0Jkv4c%2FNI9V60QLwJU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2Y3NmI5NjItNjIwNi00ZDEyLWEyZjUtODY3MmJjZjAyMTQxXzE1NV8wMV8yNTZfNy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8502,
    in_GraphicFileId: "Model3DBracketHandle352",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/305835a8-00be-402d-af95-5082ce4ec93a_155_01_257_8.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=zJUUQvw1KdX9HoLwIz7Ffh3Ph9igg11ugZKHay3SZ6o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzA1ODM1YTgtMDBiZS00MDJkLWFmOTUtNTA4MmNlNGVjOTNhXzE1NV8wMV8yNTdfOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8503,
    in_GraphicFileId: "Model3DBracketHandle448",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4ecee9a9-6937-4caf-9234-912140fbbd9c_155_01_258_9.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=h44U%2Ffs6Kkcuoe7muryveKVqlQAKxFQ0lEBNbyPieMM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGVjZWU5YTktNjkzNy00Y2FmLTkyMzQtOTEyMTQwZmJiZDljXzE1NV8wMV8yNThfOS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8504,
    in_GraphicFileId: "Model3DBracketHandle480",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/68fece82-7dbd-409a-998a-7f967b4eb78c_155_01_259_10.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=cNqrXa1x%2B%2BuE%2F3ukBOb%2FoO0vmaF3MoohIapzEFH%2FweI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjhmZWNlODItN2RiZC00MDlhLTk5OGEtN2Y5NjdiNGViNzhjXzE1NV8wMV8yNTlfMTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8505,
    in_GraphicFileId: "Model3DBracketHandle560",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1ceec369-2b36-4b79-8132-881bfc01fb30_155_01_260_11.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=d2TeHhK259FMu%2BHCX%2FNpID%2Bjdf4N3aOnRf6hrfDwOqU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWNlZWMzNjktMmIzNi00Yjc5LTgxMzItODgxYmZjMDFmYjMwXzE1NV8wMV8yNjBfMTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8506,
    in_GraphicFileId: "Model3DBracketHandle640",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7a690429-d8f1-4427-9022-4e2d34c268ef_155_01_261_12.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=af7i6iHoWbw0Bd6t2UgLyP31GKgbMVCIk0Xez8Nwa6w%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2E2OTA0MjktZDhmMS00NDI3LTkwMjItNGUyZDM0YzI2OGVmXzE1NV8wMV8yNjFfMTIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8507,
    in_GraphicFileId: "Model3DBracketHandle96",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f19a47a9-c7d6-4fed-bcee-637231ddab15_155_01_250_1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=oiWBm0QTuxg8BPsZr5xbpB6oTJbpc2Z19%2FWzVXQa8w8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjE5YTQ3YTktYzdkNi00ZmVkLWJjZWUtNjM3MjMxZGRhYjE1XzE1NV8wMV8yNTBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8508,
    in_GraphicFileId: "Model3DBracketHandle960",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/92dec8a3-383c-4aad-adf4-1f4716298af4_155_01_262_13.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2B%2F%2F0LS6f2zsrsaDGJjL0LXTwZd6VBnacKM%2FBE2RDQj4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTJkZWM4YTMtMzgzYy00YWFkLWFkZjQtMWY0NzE2Mjk4YWY0XzE1NV8wMV8yNjJfMTMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8509,
    in_GraphicFileId: "Model3DbrARRAS5",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3fb4bd2f-dc07-434d-bcfb-8606a41a43dd_support2.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=7DYXdMihDxxlLhkB2tkqd5EFc1W6rfVN%2FeC3zBl01L4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2ZiNGJkMmYtZGMwNy00MzRkLWJjZmItODYwNmE0MWE0M2RkX3N1cHBvcnQyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8510,
    in_GraphicFileId: "Model3DbrTucano",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d517f4f5-c6f4-4a60-b9eb-7b9c75cbf2e2_support1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=DZVEujwi6tcpcIMHsuwcjfNAcFCRpnWQALQ%2FjO7Ngkg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDUxN2Y0ZjUtYzZmNC00YTYwLWI5ZWItN2I5Yzc1Y2JmMmUyX3N1cHBvcnQxLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8511,
    in_GraphicFileId: "Model3DCoverCap290.40.701",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7c4a6c5f-b1ed-46d5-b5ad-261081423e2a_cover%20cap%20right%20-%20290_40_701.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=fkznQ5UkhceF5vhOvE%2ByA8Mj4mi%2B1jI%2Br5o3KqSPh%2FY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2M0YTZjNWYtYjFlZC00NmQ1LWI1YWQtMjYxMDgxNDIzZTJhX2NvdmVyIGNhcCByaWdodCAtIDI5MF80MF83MDEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8512,
    in_GraphicFileId: "Model3DCoverCap290.40.702",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f106dce1-4ecc-44aa-84c3-ea4f999829dd_cover%20cap%20left%20-%20290_40_702.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=86V7cAFjYbZ8Uwg7EwLdMJpM%2BMbfaj4kcHRy172Ddm8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjEwNmRjZTEtNGVjYy00NGFhLTg0YzMtZWE0Zjk5OTgyOWRkX2NvdmVyIGNhcCBsZWZ0IC0gMjkwXzQwXzcwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8513,
    in_GraphicFileId: "Model3DDesignLegRectangular001H100",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/010ce132-988b-4725-8103-409cc0c71a84_model3ddesignlegrectangular001h100.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=a3j90WPY8%2BJ7nQRZJhFxvraQltyw0i5rjNIvKBM0Kow%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDEwY2UxMzItOTg4Yi00NzI1LTgxMDMtNDA5Y2MwYzcxYTg0X21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgxMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8514,
    in_GraphicFileId: "Model3DDesignLegRectangular001H150",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4f03eff9-23b1-4d84-9d17-81e9fa16702a_model3ddesignlegrectangular001h150.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Bhf4fpUCzeGrL9601RWf0w6g69W89v7WAv8L4PMOdbE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGYwM2VmZjktMjNiMS00ZDg0LTlkMTctODFlOWZhMTY3MDJhX21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgxNTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8515,
    in_GraphicFileId: "Model3DDesignLegRectangular001H200",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/72761049-20bd-4fd4-9915-69a4c302f4af_model3ddesignlegrectangular001h200.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=CD6HNOs6MKJkootGQQPi4vusiBs88blgEV505BR9bds%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzI3NjEwNDktMjBiZC00ZmQ0LTk5MTUtNjlhNGMzMDJmNGFmX21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgyMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8516,
    in_GraphicFileId: "Model3DDesignLegRectangular001H50",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/17a7c57b-ba20-443c-8569-c196d7724624_model3ddesignlegrectangular001h50.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=i3PrjPXICp0JQGVM3gRHYbPTbmuNHOevjox6FwDFHo0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTdhN2M1N2ItYmEyMC00NDNjLTg1NjktYzE5NmQ3NzI0NjI0X21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWg1MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8517,
    in_GraphicFileId: "Model3DDesignLegRectangular001H80",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/070b2d82-3102-469b-991f-0da8dd252549_model3ddesignlegrectangular001h80.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=CE2eLAK2ld4olwISmoY5z92CwppnJh0E8i1l1uvA7fk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDcwYjJkODItMzEwMi00NjliLTk5MWYtMGRhOGRkMjUyNTQ5X21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWg4MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8518,
    in_GraphicFileId: "Model3DDesignLegSlanted001H250",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fd422f63-898e-46f8-8e13-cf023a6f7c7f_634_48_050_6.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=S5d%2Be7G6ReQWmUc3kmNmbPKBFaG%2FKiUCo%2BMwylPzxKc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmQ0MjJmNjMtODk4ZS00NmY4LThlMTMtY2YwMjNhNmY3YzdmXzYzNF80OF8wNTBfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8519,
    in_GraphicFileId: "Model3DGlueDuststrip",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/43247097-7d86-42c6-a12c-ed09041d0d1f_glueduststrip.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=7Y9AtkzRXquXvdZ92vQmZs95ZPr1OuoqKcBxAWGAN4k%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDMyNDcwOTctN2Q4Ni00MmM2LWExMmMtZWQwOTA0MWQwZDFmX2dsdWVkdXN0c3RyaXAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8520,
    in_GraphicFileId: "Model3DHandle100_160",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ae91774e-6895-4688-aa6d-dc6616ff4176_106_69_321_2.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Cbdzzw4QboP%2FN34XxhxvPg7NiAk5hub4kERwJVTvvK0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWU5MTc3NGUtNjg5NS00Njg4LWFhNmQtZGM2NjE2ZmY0MTc2XzEwNl82OV8zMjFfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8521,
    in_GraphicFileId: "Model3DHandle100_320",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5ce97840-c6a2-48a2-b4ee-aad132dfe19f_106_69_322_3.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=TbBtq5tGN22vaf5eqvE5Mqt%2B5T%2F7LzdOYTlzQj4OxNw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWNlOTc4NDAtYzZhMi00OGEyLWI0ZWUtYWFkMTMyZGZlMTlmXzEwNl82OV8zMjJfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8522,
    in_GraphicFileId: "Model3DHandle100_64",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9db951a7-e80c-478d-a1e1-3834e93bec23_106_69_320_1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=bA%2BxSagJpL9OViqQVbIuciRANLBHT8C%2B9LMln%2F%2BwUrU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWRiOTUxYTctZTgwYy00NzhkLWExZTEtMzgzNGU5M2JlYzIzXzEwNl82OV8zMjBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8523,
    in_GraphicFileId: "Model3DHandle110_1060",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/511ccab3-2440-4f48-9092-e527b03194ca_117_66_101_19.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZeMNMWxo%2FatzrkAHS6DGTcZ3Pqr1LHHP3vdfTyRPmWE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTExY2NhYjMtMjQ0MC00ZjQ4LTkwOTItZTUyN2IwMzE5NGNhXzExN182Nl8xMDFfMTkub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8524,
    in_GraphicFileId: "Model3DHandle110_1160",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dcf593e4-9902-4196-a94a-784719ec7199_117_66_102_20.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=HvOK6vruyJCwjZXJ8EShjr2wHEvFdARrcQzT05C9DHI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGNmNTkzZTQtOTkwMi00MTk2LWE5NGEtNzg0NzE5ZWM3MTk5XzExN182Nl8xMDJfMjAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8525,
    in_GraphicFileId: "Model3DHandle110_1260",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4d13ab30-619b-48f6-bbbe-157f1aada958_117_66_103_21.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=r9sgYGF8pDc6zqHIaw4t3C6uFHoS2z8IOyvLTijB5n4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGQxM2FiMzAtNjE5Yi00OGY2LWJiYmUtMTU3ZjFhYWRhOTU4XzExN182Nl8xMDNfMjEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8526,
    in_GraphicFileId: "Model3DHandle110_128",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/359fcc7b-4b83-4197-b731-60a8fe2046c5_117_66_026_2.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=FKCNCvEMl9PRJJn6zmDKdtoeMGCgVKDoM85M873I5mM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzU5ZmNjN2ItNGI4My00MTk3LWI3MzEtNjBhOGZlMjA0NmM1XzExN182Nl8wMjZfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8527,
    in_GraphicFileId: "Model3DHandle110_1360",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b52504d5-4d82-498e-80be-4343592b0cd5_117_66_104_22.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=lL5mnmZ4FUDYfEAPFJR2z7dLtC5src9Xj0B0Rojk8P8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjUyNTA0ZDUtNGQ4Mi00OThlLTgwYmUtNDM0MzU5MmIwY2Q1XzExN182Nl8xMDRfMjIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8528,
    in_GraphicFileId: "Model3DHandle110_1460",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8e04113e-5216-41da-a0e5-1511535f34af_117_66_106_23.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZyiBPJJvNObFJ2yLlcEsZ2aYbJJ9tIZ2T%2B6o59nrZL8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGUwNDExM2UtNTIxNi00MWRhLWEwZTUtMTUxMTUzNWYzNGFmXzExN182Nl8xMDZfMjMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8529,
    in_GraphicFileId: "Model3DHandle110_1560",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/87037b24-115f-43a0-a763-3c33cdbc4dec_117_66_107_24.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=i9EDfrMRZe3alQoZ8mumRWguztKZkK0p3YnlvmkKh6s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODcwMzdiMjQtMTE1Zi00M2EwLWE3NjMtM2MzM2NkYmM0ZGVjXzExN182Nl8xMDdfMjQub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8530,
    in_GraphicFileId: "Model3DHandle110_160",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c493b3f5-a04b-488c-a740-3f9890c9d029_117_66_035_3.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Ekvm2ov0Y7%2BZN1p32cdi%2FNmjEFiiRA26OgkNaBriYHs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzQ5M2IzZjUtYTA0Yi00ODhjLWE3NDAtM2Y5ODkwYzlkMDI5XzExN182Nl8wMzVfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8531,
    in_GraphicFileId: "Model3DHandle110_1760",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/98bd2d26-ebb7-49b0-975a-e2bb3f681923_117_66_108_25.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=WDypUxgNL16YeKkXfTzfMPVkgySzZJ1%2BCuAKpxFnx6M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOThiZDJkMjYtZWJiNy00OWIwLTk3NWEtZTJiYjNmNjgxOTIzXzExN182Nl8xMDhfMjUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8532,
    in_GraphicFileId: "Model3DHandle110_1960",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/deddb83b-24e5-44b8-b450-7a8c52395adf_117_66_109_26.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ypgsoPMl9ozxatJ0Jnv%2BNMMbLmIKKgS8yn8RT4RvL0w%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGVkZGI4M2ItMjRlNS00NGI4LWI0NTAtN2E4YzUyMzk1YWRmXzExN182Nl8xMDlfMjYub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8533,
    in_GraphicFileId: "Model3DHandle110_210",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/563ee536-4a2a-41b8-873c-bc8206a61239_117_66_045_5.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ftgF5TkJSw3r4H7IYb6s%2FWdsZM7UYkdgz%2FOAzkcpzqM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTYzZWU1MzYtNGEyYS00MWI4LTg3M2MtYmM4MjA2YTYxMjM5XzExN182Nl8wNDVfNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8534,
    in_GraphicFileId: "Model3DHandle110_260",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6f34c795-f71d-49dc-ad60-7f8c5bab1775_117_66_050_6.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Pp3LQ4jELI6uYoR219BbcUZgGh%2F9GJQfxwSSWdCBTZg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmYzNGM3OTUtZjcxZC00OWRjLWFkNjAtN2Y4YzViYWIxNzc1XzExN182Nl8wNTBfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8535,
    in_GraphicFileId: "Model3DHandle110_310",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0bc4e8d3-fabb-40d5-95f8-fca07db55413_117_66_055_8.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=IbAFGe%2BpQTX%2Fj2t3Y9o%2Bna%2FlC%2BEoov%2F5EjXOwe%2BKzmo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGJjNGU4ZDMtZmFiYi00MGQ1LTk1ZjgtZmNhMDdkYjU1NDEzXzExN182Nl8wNTVfOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8536,
    in_GraphicFileId: "Model3DHandle110_360",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/826fbc92-671c-4020-9d4c-08761f0feabb_117_66_064_10.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=o5KNilontXu6H09e6jrvwZtvphY4YRM1qVxeIoZvv%2F0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODI2ZmJjOTItNjcxYy00MDIwLTlkNGMtMDg3NjFmMGZlYWJiXzExN182Nl8wNjRfMTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8537,
    in_GraphicFileId: "Model3DHandle110_410",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d87a86e6-92f0-4ba6-b3d9-83b57e5dd58c_117_66_065_11.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=xxgA0XJgvMvSAhe%2FrY35FlFW4YthJAks5laHqcTPqcw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDg3YTg2ZTYtOTJmMC00YmE2LWIzZDktODNiNTdlNWRkNThjXzExN182Nl8wNjVfMTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8538,
    in_GraphicFileId: "Model3DHandle110_460",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/650ddc6a-f440-4b04-8674-27f59071587d_117_66_075_13.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=jx04uGYD1QKJ6Hbfrt0HuX4OBZMwTJrLn7WlQ9tdQ4k%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjUwZGRjNmEtZjQ0MC00YjA0LTg2NzQtMjdmNTkwNzE1ODdkXzExN182Nl8wNzVfMTMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8539,
    in_GraphicFileId: "Model3DHandle110_560",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/625bf2a0-5555-4655-a556-65c152ebbecb_117_66_080_14.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=6zjyB93ssr8PLZx6OcqAtl%2F1yRyF9Xg4iaLvAlJigvE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjI1YmYyYTAtNTU1NS00NjU1LWE1NTYtNjVjMTUyZWJiZWNiXzExN182Nl8wODBfMTQub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8540,
    in_GraphicFileId: "Model3DHandle110_660",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/004aa4de-6b0f-4747-8509-d89a7dd40f2d_117_66_085_15.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=RHdPXtKEWMIZhtIJ%2FAegvRv%2FcaIXB3%2FJMqDfkZxu%2BmY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDA0YWE0ZGUtNmIwZi00NzQ3LTg1MDktZDg5YTdkZDQwZjJkXzExN182Nl8wODVfMTUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8541,
    in_GraphicFileId: "Model3DHandle110_760",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/813acf39-08eb-4349-833e-b4580c7ecf20_117_66_090_16.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=vONcVD861nbtlEbJrw79TOPTolIlSOoNXOEUwLySQjY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODEzYWNmMzktMDhlYi00MzQ5LTgzM2UtYjQ1ODBjN2VjZjIwXzExN182Nl8wOTBfMTYub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8542,
    in_GraphicFileId: "Model3DHandle110_860",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9fd0dac5-dd3f-4668-8a75-b29c5e3dcbc1_117_66_095_17.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=jvHynanGOru0zNdgis9MFMluspn7Ycu9N8ihiRTKrdo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWZkMGRhYzUtZGQzZi00NjY4LThhNzUtYjI5YzVlM2RjYmMxXzExN182Nl8wOTVfMTcub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8543,
    in_GraphicFileId: "Model3DHandle110_96",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/99004e44-323d-4e9b-a217-9c2e67d13154_117_66_017_1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=xOaD0GfM0bT8rVkHY4MsS78vqWc%2Bf6CYKBtVpljTDTY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTkwMDRlNDQtMzIzZC00ZTliLWEyMTctOWMyZTY3ZDEzMTU0XzExN182Nl8wMTdfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8544,
    in_GraphicFileId: "Model3DHandle110_960",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e1f83ea6-c063-4da6-b9b8-244a45162010_117_66_100_18.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=6KPAypjx2v0CE6NIkHDjqqArE29bf3eEUAkt%2FLsOQ5c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTFmODNlYTYtYzA2My00ZGE2LWI5YjgtMjQ0YTQ1MTYyMDEwXzExN182Nl8xMDBfMTgub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8545,
    in_GraphicFileId: "Model3DHandle120",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dc4ecac7-b863-4320-9f7b-c7948fd455d9_mod3d_120.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=DB5Voh37aauQEHoFcVb9iwxmttCxHLspvVe7FzXJTrk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGM0ZWNhYzctYjg2My00MzIwLTlmN2ItYzc5NDhmZDQ1NWQ5X21vZDNkXzEyMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8546,
    in_GraphicFileId: "Model3DHandle130",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8040c8d0-dde5-419a-bbcc-279c2183590c_110_35_393_1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=GK0%2BvLNlPcge3U2fL%2FY6lDZW9gmHof18b4GhXFySNQY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODA0MGM4ZDAtZGRlNS00MTlhLWJiY2MtMjc5YzIxODM1OTBjXzExMF8zNV8zOTNfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8547,
    in_GraphicFileId: "Model3DHandleDesign20_128",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/caf8fa7c-2bb5-4813-a4ed-9130457de3ba_155_01_381_2.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Xh5uFoZ%2FsYuv1A%2B3U4xz3rewoIC25FFWxmuQ2YIzHcg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2FmOGZhN2MtMmJiNS00ODEzLWE0ZWQtOTEzMDQ1N2RlM2JhXzE1NV8wMV8zODFfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8548,
    in_GraphicFileId: "Model3DHandleDesign20_160",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e9004034-520c-4f9e-bf0e-1d8e86392bb4_155_01_382_3.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=nkgmEeeMzx5OHN98ExUEpdYHnWHarHJw0M8o%2BXhBLNI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTkwMDQwMzQtNTIwYy00ZjllLWJmMGUtMWQ4ZTg2MzkyYmI0XzE1NV8wMV8zODJfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8549,
    in_GraphicFileId: "Model3DHandleDesign20_192",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8a2782aa-2b52-4656-b677-80f7319e6549_155_01_383_4.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=LL889R7OrbkDw%2BMbhJ40N5f0PYLQ7hkUyggVcylBKog%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGEyNzgyYWEtMmI1Mi00NjU2LWI2NzctODBmNzMxOWU2NTQ5XzE1NV8wMV8zODNfNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8550,
    in_GraphicFileId: "Model3DHandleDesign20_224",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/73f65b81-da2f-4ff7-8722-f442e2b34a59_155_01_384_5.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=yubmMjCeJqzek6xenQT4dnOH7WhkgYPkZPUEZes%2FW3A%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzNmNjViODEtZGEyZi00ZmY3LTg3MjItZjQ0MmUyYjM0YTU5XzE1NV8wMV8zODRfNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8551,
    in_GraphicFileId: "Model3DHandleDesign20_288",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/83ad28db-b78e-4c37-8c88-5a067606de5d_155_01_385_6.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Nq8EGJ1Kh%2Frqerk7CL4Hqww%2Fl6g0jEaj78VAVgWLMks%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODNhZDI4ZGItYjc4ZS00YzM3LThjODgtNWEwNjc2MDZkZTVkXzE1NV8wMV8zODVfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8552,
    in_GraphicFileId: "Model3DHandleDesign20_320",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/55a178ba-369c-4d65-8aec-587e5268a0b6_155_01_386_7.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=F2jCXlLwNL%2BwkQ%2BxmgUChTfACSUYY9QeyaLwifuHub8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTVhMTc4YmEtMzY5Yy00ZDY1LThhZWMtNTg3ZTUyNjhhMGI2XzE1NV8wMV8zODZfNy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8553,
    in_GraphicFileId: "Model3DHandleDesign20_352",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fdac7e17-0d1a-4872-9b4f-2a0f629e54e7_155_01_387_8.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=t7x%2FIZsn1ccBpHuUAd1QS6wAbq7jqs4Dhtntr%2BTdIcI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmRhYzdlMTctMGQxYS00ODcyLTliNGYtMmEwZjYyOWU1NGU3XzE1NV8wMV8zODdfOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8554,
    in_GraphicFileId: "Model3DHandleDesign20_448",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0aa5d245-f4d1-4044-8751-6d8865fabf6b_155_01_388_9.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Fw2qbUIg8CQEHqXWI78B1gkUjy%2F1LxszMiLuVv36Qzo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGFhNWQyNDUtZjRkMS00MDQ0LTg3NTEtNmQ4ODY1ZmFiZjZiXzE1NV8wMV8zODhfOS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8555,
    in_GraphicFileId: "Model3DHandleDesign20_560",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/42b9a0fd-1509-4384-8bd7-9f38aaa7f9a2_155_01_389_10.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=aHF7kIBUWYULobbLsWq3LTqh9Nw5H4MJGQ%2BeyBz0OfI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDJiOWEwZmQtMTUwOS00Mzg0LThiZDctOWYzOGFhYTdmOWEyXzE1NV8wMV8zODlfMTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8556,
    in_GraphicFileId: "Model3DHandleDesign20_660",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3f67eaf0-d8cb-4c67-b307-4aaa06fde1df_155_01_390_11.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ijPZ9lUQ6DRHTJZaz8c3MLr2a6fbRWAOIq7xUZFBo5w%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2Y2N2VhZjAtZDhjYi00YzY3LWIzMDctNGFhYTA2ZmRlMWRmXzE1NV8wMV8zOTBfMTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8557,
    in_GraphicFileId: "Model3DHandleDesign20_760",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a5ed163d-fa72-43ee-9ffe-dfc4c8426e39_155_01_391_12.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=QJkmFOK2sNOHZhil7Ag9aRLIDd2fbozxNosnK%2BFFOY0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTVlZDE2M2QtZmE3Mi00M2VlLTlmZmUtZGZjNGM4NDI2ZTM5XzE1NV8wMV8zOTFfMTIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8558,
    in_GraphicFileId: "Model3DHandleDesign20_96",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3da9799a-2d91-427c-b43f-cb36de5ccf76_155_01_380_1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=KndEdPhLgKgZIMB4n9vUbxHbKi9zbPg%2Ft2QNYb8dB94%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2RhOTc5OWEtMmQ5MS00MjdjLWI0M2YtY2IzNmRlNWNjZjc2XzE1NV8wMV8zODBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8559,
    in_GraphicFileId: "Model3DHandleDesign60_128",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d9310950-c7eb-4954-ae74-84b4ac8daaaf_106_62_425_1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=B%2FjqgC9Kpp%2F6FDN7HWlaZokCC5Df2LuzTVWwjFH3%2BGg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDkzMTA5NTAtYzdlYi00OTU0LWFlNzQtODRiNGFjOGRhYWFmXzEwNl82Ml80MjVfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8560,
    in_GraphicFileId: "Model3DHandleDesign60_160",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9ece5849-7f56-4fff-a07e-f4ffa437300f_106_62_426_2.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=hD0hdcvQnGKypoR%2FVVNtkfcuRiO1%2BOmhQeBK9o7IHGw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWVjZTU4NDktN2Y1Ni00ZmZmLWEwN2UtZjRmZmE0MzczMDBmXzEwNl82Ml80MjZfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8561,
    in_GraphicFileId: "Model3DHandleDesign80_212",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c8134a0d-7dbf-4ed0-bd53-364adf7a0cc0_106_61_214_1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=wAB4BlWe2qvOvrWp2iOlQE2p%2BMfc8Xlm92RNzkuH%2FQY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzgxMzRhMGQtN2RiZi00ZWQwLWJkNTMtMzY0YWRmN2EwY2MwXzEwNl82MV8yMTRfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8562,
    in_GraphicFileId: "Model3DHandleDesign80_340",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bd8ef464-3ced-47e7-a9ba-e81f71a05181_106_61_217_2.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=azqFCnqCd7kb2moOzL9eS2o53Kr1D66wjJENWQO43%2FQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmQ4ZWY0NjQtM2NlZC00N2U3LWE5YmEtZTgxZjcxYTA1MTgxXzEwNl82MV8yMTdfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8563,
    in_GraphicFileId: "Model3DHanger290.02.702",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/04fcee91-cf78-4024-89f2-1a55c5a385ab_hanger%20left%20-%20290_02_702.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=fSZFTVI4HEZ1Dhzo2%2FlxC%2BHjPHmjn%2BLrl0RMSwDLgEc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDRmY2VlOTEtY2Y3OC00MDI0LTg5ZjItMWE1NWM1YTM4NWFiX2hhbmdlciBsZWZ0IC0gMjkwXzAyXzcwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8564,
    in_GraphicFileId: "Model3DHanger290.02.703",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/061bb52d-b09e-414a-9fd3-d93cffaefd04_hanger%20right%20-%20290_02_703.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=pCQ4z7yMbSQvfaanTGdMnXfx%2F0bcq9zmkF3BmqNuzs0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDYxYmI1MmQtYjA5ZS00MTRhLTlmZDMtZDkzY2ZmYWVmZDA0X2hhbmdlciByaWdodCAtIDI5MF8wMl83MDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8565,
    in_GraphicFileId: "Model3DHanger290.02.710",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/24b4360d-e9c9-4b45-8cfd-76883a43e126_hanger%20left%20-%20290_02_710.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=QsieV3AmGZYa2FsFHig0AaKssROL7KqMKlqjF%2B1xiOY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjRiNDM2MGQtZTljOS00YjQ1LThjZmQtNzY4ODNhNDNlMTI2X2hhbmdlciBsZWZ0IC0gMjkwXzAyXzcxMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8566,
    in_GraphicFileId: "Model3DHanger290.02.711",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0a0f6ae6-b183-4b70-8f9e-4aae51f84d28_hanger%20right%20-%20290_02_711.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=S1Vqk3aoiz9k8mNzd0bUEFfIxJue%2FpB2OizZ5k7Zs74%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGEwZjZhZTYtYjE4My00YjcwLThmOWUtNGFhZTUxZjg0ZDI4X2hhbmdlciByaWdodCAtIDI5MF8wMl83MTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8567,
    in_GraphicFileId: "Model3DHanger290.03.937",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0c41c79a-7556-4d41-b79e-e707c89d7be4_hanger%20right%20-%20290_03_937.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=cZtbMN%2Beitdqg7H%2B%2Fts1AwEqcFPmWvMkDfXYvZbmwuY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGM0MWM3OWEtNzU1Ni00ZDQxLWI3OWUtZTcwN2M4OWQ3YmU0X2hhbmdlciByaWdodCAtIDI5MF8wM185Mzcub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8568,
    in_GraphicFileId: "Model3DHanger290.03.938",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/07dd8522-0fb8-426b-8d62-1910196f82a0_hanger%20left%20-%20290_03_938.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=uVFuiRfGmEDNo1dmJlybdIwa8BeThjXum8YV4IzFlvw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDdkZDg1MjItMGZiOC00MjZiLThkNjItMTkxMDE5NmY4MmEwX2hhbmdlciBsZWZ0IC0gMjkwXzAzXzkzOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8569,
    in_GraphicFileId: "Model3DHanger290.40.901",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f5e2b0cd-e7ce-4c3a-873b-8eb910490a83_hanger%20right%20-%20290_40_901.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=SFuPgaZ5hZpwnS5auY%2FvTuX%2BMNM2tjgeZZ4qarkN%2BzA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjVlMmIwY2QtZTdjZS00YzNhLTg3M2ItOGViOTEwNDkwYTgzX2hhbmdlciByaWdodCAtIDI5MF80MF85MDEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8570,
    in_GraphicFileId: "Model3DHanger290.40.902",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2b4786a2-90b2-46f8-a1e5-96ac3ac4d27f_hanger%20left%20-%20290_40_902.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=6WwTgEWJ1aoubm3II%2Bp0vfT0ltGk6RcFvoB0mnz9THY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmI0Nzg2YTItOTBiMi00NmY4LWExZTUtOTZhYzNhYzRkMjdmX2hhbmdlciBsZWZ0IC0gMjkwXzQwXzkwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8571,
    in_GraphicFileId: "Model3DHanger290.40.980",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7ea544b8-9632-47be-a6d0-6b8322eb7214_hanger%20right%20-%20290_40_980.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=WAX9P7UXWYD1Y1pBUGe8t0ZZoaVb9jfYC9IadIBmiVo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2VhNTQ0YjgtOTYzMi00N2JlLWE2ZDAtNmI4MzIyZWI3MjE0X2hhbmdlciByaWdodCAtIDI5MF80MF85ODAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8572,
    in_GraphicFileId: "Model3DHanger290.40.981",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bcba8f36-c88d-4a76-9b8c-fefbe20cb582_hanger%20left%20-%20290_40_981.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=smVySe%2Bo2CmVyMZlvV7yIFzzdP%2BbzB1lnhFz7Nn9Qo4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmNiYThmMzYtYzg4ZC00YTc2LTliOGMtZmVmYmUyMGNiNTgyX2hhbmdlciBsZWZ0IC0gMjkwXzQwXzk4MS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8573,
    in_GraphicFileId: "Model3DHinge110HalfSpringSS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cdcf6ec7-8b00-4c8d-b138-40ea8e83b8c7_hinge110halfspringss%20-%20329_17_602.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=hWhRQr3cokoSz0J9obC9FZxI4V5a5BBO05DOkWXKUqg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2RjZjZlYzctOGIwMC00YzhkLWIxMzgtNDBlYThlODNiOGM3X2hpbmdlMTEwaGFsZnNwcmluZ3NzIC0gMzI5XzE3XzYwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8574,
    in_GraphicFileId: "Model3DHinge110InsetSpringSS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cb46e8fe-c4a0-4006-bfdf-b307e323212f_hinge110insetspringss%20-%20329_17_603.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=OUvtCg56%2BkXxwOlXg4PTWE5mcXTD3fxy09ycFzWe%2BrI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2I0NmU4ZmUtYzRhMC00MDA2LWJmZGYtYjMwN2UzMjMyMTJmX2hpbmdlMTEwaW5zZXRzcHJpbmdzcyAtIDMyOV8xN182MDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8575,
    in_GraphicFileId: "Model3DHinge110OverlaySpringSS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ed972852-3fe1-4304-adbd-52908c764f5b_hinge110overlayspringss%20-%20329_17_600.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=OtejcdGH4RMa74Ki2kXO4ezzbrDAFYcIz0%2Byy6ipMXU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWQ5NzI4NTItM2ZlMS00MzA0LWFkYmQtNTI5MDhjNzY0ZjViX2hpbmdlMTEwb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzE3XzYwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8576,
    in_GraphicFileId: "Model3DHinge110SoftClHalfSpringSS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c9a29747-a996-461d-96a3-fdba5e2fd926_hinge110softclhalfspringss%20-%20329_15_403.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=JaxxYVsqyEQaegu8W%2BA38ilNmcALcl80C7oeWksHzlc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzlhMjk3NDctYTk5Ni00NjFkLTk2YTMtZmRiYTVlMmZkOTI2X2hpbmdlMTEwc29mdGNsaGFsZnNwcmluZ3NzIC0gMzI5XzE1XzQwMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8577,
    in_GraphicFileId: "Model3DHinge110SoftClInsetSpringSS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2e05d5cc-01d1-4421-a7d8-44f4aaf2cc05_hinge110softclinsetspringss%20-%20329_15_405.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=s5iKxfkxfHS%2BcCdqjHXjUl05l6a%2FbxF5btTkgB82jBU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmUwNWQ1Y2MtMDFkMS00NDIxLWE3ZDgtNDRmNGFhZjJjYzA1X2hpbmdlMTEwc29mdGNsaW5zZXRzcHJpbmdzcyAtIDMyOV8xNV80MDUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8578,
    in_GraphicFileId: "Model3DHinge110SoftClOverlaySpringSS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5c2008ff-de8e-44d7-b96e-d224cb0ac0f2_hinge110softcloverlayspringss%20-%20329_15_401.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=HTkJxWh0166INEHcCVoMnQhyMKQyUe58Op7YWSlYUBc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWMyMDA4ZmYtZGU4ZS00NGQ3LWI5NmUtZDIyNGNiMGFjMGYyX2hpbmdlMTEwc29mdGNsb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzE1XzQwMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8579,
    in_GraphicFileId: "Model3DHinge120OverlayNoSpringSSForFHF",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/99cdbae8-acea-42b5-ac24-a5ce6ffd2a73_hingeflipliftfhftop%20-%20342_81_400.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FDd2NtPAyaP5U7QCZagSTlF0kvh927VYdCZNt%2BLPu6c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTljZGJhZTgtYWNlYS00MmI1LWFjMjQtYTVjZTZmZmQyYTczX2hpbmdlZmxpcGxpZnRmaGZ0b3AgLSAzNDJfODFfNDAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8580,
    in_GraphicFileId: "Model3DHinge155SoftClHalfSpringSS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7b8c2915-2761-42e9-b839-9e8d50a3b491_hinge155softclhalfspringss%20-%20329_29_221.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=IzEQaTz4O2uawvLGwUzDq6uyHKU3Nc5MjJw43Rfm%2BpI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2I4YzI5MTUtMjc2MS00MmU5LWI4MzktOWU4ZDUwYTNiNDkxX2hpbmdlMTU1c29mdGNsaGFsZnNwcmluZ3NzIC0gMzI5XzI5XzIyMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8581,
    in_GraphicFileId: "Model3DHinge155SoftClOverlaySpringSS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d9926fc3-5cff-44d1-afba-d3563b5cecd3_hinge155softcloverlayspringss%20-%20329_29_217.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=4nXCu1273i2%2F%2F1gCBtdBXyYhj7j0n6oKwbXPomn%2FRQo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDk5MjZmYzMtNWNmZi00NGQxLWFmYmEtZDM1NjNiNWNlY2QzX2hpbmdlMTU1c29mdGNsb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzI5XzIxNy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8582,
    in_GraphicFileId: "Model3DHinge165HalfSpringSS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b09a0903-cddf-4fa8-89e3-ab5bf21a3536_hinge165halfspringss%20-%20329_07_702.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=gJsgxBODvB7volQX3YuR1msOwrl7Z4kz5pavVolQcMk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjA5YTA5MDMtY2RkZi00ZmE4LTg5ZTMtYWI1YmYyMWEzNTM2X2hpbmdlMTY1aGFsZnNwcmluZ3NzIC0gMzI5XzA3XzcwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8583,
    in_GraphicFileId: "Model3DHinge165InsetSpringSS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c6c18ff0-bccb-440c-9da4-7f9ec0615bf8_hinge165insetspringss%20-%20329_07_703.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=IigsxlgwGvQNHHzHMgOScJZvIaGwxuDgsBPK9%2BR0Rn8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzZjMThmZjAtYmNjYi00NDBjLTlkYTQtN2Y5ZWMwNjE1YmY4X2hpbmdlMTY1aW5zZXRzcHJpbmdzcyAtIDMyOV8wN183MDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8584,
    in_GraphicFileId: "Model3DHinge165OverlaySpringSS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/663b7ed8-cb27-451e-ae38-fd7fa1524536_hinge165overlayspringss%20-%20329_07_700.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=IbSOzDVFDvlZaYBGh18N0%2FUT2avguTBXPxIasjlJH%2FM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjYzYjdlZDgtY2IyNy00NTFlLWFlMzgtZmQ3ZmExNTI0NTM2X2hpbmdlMTY1b3ZlcmxheXNwcmluZ3NzIC0gMzI5XzA3XzcwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8585,
    in_GraphicFileId: "Model3DHingeBlindCornerInset110SoftClNP",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/22cdb5ac-cf23-4fb6-a5e5-08c25e301aee_hinge110blindcornerinset%20-%20329_11_705.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=NzyHoVavkh8sn89pNRpCMsyMqcB49UIf8SRORUcQWh8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjJjZGI1YWMtY2YyMy00ZmI2LWE1ZTUtMDhjMjVlMzAxYWVlX2hpbmdlMTEwYmxpbmRjb3JuZXJpbnNldCAtIDMyOV8xMV83MDUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8586,
    in_GraphicFileId: "Model3DHingeCenterForFHF",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f74a8738-1978-4b35-ba2c-d4f0202d5dc6_hingeforcenterfhf%20-%20372_74_990.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=2jmxW5l%2F3Um8jQSpaLR8et8wPHVaU%2FFFUeWmo3dqN7E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjc0YTg3MzgtMTk3OC00YjM1LWJhMmMtZDRmMDIwMmQ1ZGM2X2hpbmdlZm9yY2VudGVyZmhmIC0gMzcyXzc0Xzk5MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8587,
    in_GraphicFileId: "Model3DHingeFlipLiftDF",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2303354e-a7d5-4acb-b8d8-73bcd2e86380_hingeflipliftdf%20-%20342_78_700_1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=mqYahxXDCqb%2FDEtm3mhopNwLO2mDwXbT37CGXLINMRk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjMwMzM1NGUtYTdkNS00YWNiLWI4ZDgtNzNiY2QyZTg2MzgwX2hpbmdlZmxpcGxpZnRkZiAtIDM0Ml83OF83MDBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8588,
    in_GraphicFileId: "Model3DKeku_Front_262_50_359",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2ffd408f-f661-42f0-88a0-9b93607127c0_keku_front_262_50_359.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=bjw%2FFSAxxQq%2Fe9TPs4MTqRx9BvzAuqcMSqyrg6pwZSY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmZmZDQwOGYtZjY2MS00MmYwLTg4YTAtOWI5MzYwNzEyN2MwX2tla3VfZnJvbnRfMjYyXzUwXzM1OS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8589,
    in_GraphicFileId: "Model3DKeku_Side_262_50_368",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/186dd076-5a4b-483a-baba-83986df518a7_keku_side_262_50_368.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=miI0t3xsBQjp9TxSJS3gp2GQYPZeS4oao2QN%2FcE6hxw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTg2ZGQwNzYtNWE0Yi00ODNhLWJhYmEtODM5ODZkZjUxOGE3X2tla3Vfc2lkZV8yNjJfNTBfMzY4Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8590,
    in_GraphicFileId: "Model3DMpCruciformA0SS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d0291151-b485-4e63-a420-3319294ef0d8_mpcruciforma0ss%20-%20329_80_528.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=fl8zTyZlgLP1nadGj%2FYDrNZQriYGEXhygMIlxegiywA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDAyOTExNTEtYjQ4NS00ZTYzLWE0MjAtMzMxOTI5NGVmMGQ4X21wY3J1Y2lmb3JtYTBzcyAtIDMyOV84MF81Mjgub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8591,
    in_GraphicFileId: "Model3DMpCruciformA3SS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/349a856d-9278-4a51-b43b-3ca75299932f_mpcruciforma3ss%20-%20329_80_555.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=09s5OmmL6oEoHkLWeQ%2F0tuFROrvRYxaYbBmXonMR4sQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzQ5YTg1NmQtOTI3OC00YTUxLWI0M2ItM2NhNzUyOTk5MzJmX21wY3J1Y2lmb3JtYTNzcyAtIDMyOV84MF81NTUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8592,
    in_GraphicFileId: "Model3DMpCruciformA6SS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a6399584-1cd1-4c82-b72c-821778c8efa3_mpcruciforma6ss%20-%20329_80_582.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ihfUewNBW1I%2Fuj2nmR%2BhRnjaT5CG1D%2B5I8cFnh0KjUo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTYzOTk1ODQtMWNkMS00YzgyLWI3MmMtODIxNzc4YzhlZmEzX21wY3J1Y2lmb3JtYTZzcyAtIDMyOV84MF81ODIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8593,
    in_GraphicFileId: "Model3DMpCruciformSM0SS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6e8a1e37-e030-4c4d-af18-32487c51a54a_mpcruciformsm0ss%20-%20329_71_500.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=uLSaQV283nnLGGnhAZU142ZiRt6HpRU9SfhvAoE5NsE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmU4YTFlMzctZTAzMC00YzRkLWFmMTgtMzI0ODdjNTFhNTRhX21wY3J1Y2lmb3Jtc20wc3MgLSAzMjlfNzFfNTAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8594,
    in_GraphicFileId: "Model3DMpCruciformSM3SS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/42c4db60-26fb-417c-a68c-2e6155ee44af_mpcruciformsm3ss%20-%20329_71_503.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=a%2BnqvKBhqFsfiZXY34IBy5fVosSvPIA%2BXO%2FItvIbn74%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDJjNGRiNjAtMjZmYi00MTdjLWE2OGMtMmU2MTU1ZWU0NGFmX21wY3J1Y2lmb3Jtc20zc3MgLSAzMjlfNzFfNTAzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8595,
    in_GraphicFileId: "Model3DMpCruciformSM6SS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/79c1c946-5517-4d79-bbd9-0c1244663e8f_mphorizontalsm6ss%20-%20329_67_006.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=98hXTzzN0x4K0%2BOwvk5GdnZnr%2BASifVodqwZ%2FPiDOCA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzljMWM5NDYtNTUxNy00ZDc5LWJiZDktMGMxMjQ0NjYzZThmX21waG9yaXpvbnRhbHNtNnNzIC0gMzI5XzY3XzAwNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8596,
    in_GraphicFileId: "Model3DMPHorizontalBL0SS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dd62157c-07bb-4f7a-a1ea-c11c595454af_mphorizontal175h3100%20-%20342_22_060.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=a6FUj5%2FN%2FlF54atPm1waFfi6CYx0KCEKSSrDWznXR%2Bk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGQ2MjE1N2MtMDdiYi00ZjdhLWExZWEtYzExYzU5NTQ1NGFmX21waG9yaXpvbnRhbDE3NWgzMTAwIC0gMzQyXzIyXzA2MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8597,
    in_GraphicFileId: "Model3DMPHorizontalBL3SS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/07d0020d-3ed8-448a-84ff-e0c07f0db595_mphorizontal175h3130%20-%20342_22_063.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Qi6KB9dildRtly01IawjgJc67bxBHavjeGiQ9R6S7Zo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDdkMDAyMGQtM2VkOC00NDhhLTg0ZmYtZTBjMDdmMGRiNTk1X21waG9yaXpvbnRhbDE3NWgzMTMwIC0gMzQyXzIyXzA2My5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8598,
    in_GraphicFileId: "Model3DMpHorizontalSM0SS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e772b27a-ac88-45bb-8dc9-1929e9fc748b_mphorizontalsm0ss%20-%20329_67_000.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ALYeRHIHTnFvUWW8oJJRpvhD2uLvq9ZW1Aww3QQtunM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTc3MmIyN2EtYWM4OC00NWJiLThkYzktMTkyOWU5ZmM3NDhiX21waG9yaXpvbnRhbHNtMHNzIC0gMzI5XzY3XzAwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8599,
    in_GraphicFileId: "Model3DMpHorizontalSM3SS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8ad6062f-29dd-4c3f-8b53-1a7ca7241c34_mphorizontalsm3ss%20-%20329_67_003.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=kuiV5kcxTBYk59ktSlxy7cI%2FW0qJNi2uokIJiMfdi9o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGFkNjA2MmYtMjlkZC00YzNmLThiNTMtMWE3Y2E3MjQxYzM0X21waG9yaXpvbnRhbHNtM3NzIC0gMzI5XzY3XzAwMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8600,
    in_GraphicFileId: "Model3DMpHorizontalSM6SS",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/79c1c946-5517-4d79-bbd9-0c1244663e8f_mphorizontalsm6ss%20-%20329_67_006.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=98hXTzzN0x4K0%2BOwvk5GdnZnr%2BASifVodqwZ%2FPiDOCA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzljMWM5NDYtNTUxNy00ZDc5LWJiZDktMGMxMjQ0NjYzZThmX21waG9yaXpvbnRhbHNtNnNzIC0gMzI5XzY3XzAwNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8601,
    in_GraphicFileId: "Model3DPlinthLegRectangularScrewH100",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fb4d8425-769e-425d-a1b3-f7ad35757421_plinthlegrectangularscrewh100.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=VTSb6jMlJFwYtVAxe6pA2H7ubm3MPjDidJdNKJeV2ds%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmI0ZDg0MjUtNzY5ZS00MjVkLWExYjMtZjdhZDM1NzU3NDIxX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8602,
    in_GraphicFileId: "Model3DPlinthLegRectangularScrewH120",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f885d94d-09df-4f0a-bc07-6035b1e46d6b_plinthlegrectangularscrewh120.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=KQ8uPEE5rGlvjg0HQKke7Cp1RPj2JEN7gyOCgeDM9oA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjg4NWQ5NGQtMDlkZi00ZjBhLWJjMDctNjAzNWIxZTQ2ZDZiX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTIwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8603,
    in_GraphicFileId: "Model3DPlinthLegRectangularScrewH150",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0585a9b0-38fe-4b75-8b3d-f440e276a5ae_plinthlegrectangularscrewh150.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=P1g8tHhyoetTQ0ZDJpRaxAtPSLIQIZKT4vzXCPaBotg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDU4NWE5YjAtMzhmZS00Yjc1LThiM2QtZjQ0MGUyNzZhNWFlX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTUwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8604,
    in_GraphicFileId: "Model3DPlinthLegTriangularPressH100",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/716831da-250d-4a00-8160-e8972018b921_plinthlegtriangularpressh100.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=P2tSDBX8qg0Ehi%2FmPiaLoWEsU46WkuZDKr5QOyJmB3U%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzE2ODMxZGEtMjUwZC00YTAwLTgxNjAtZTg5NzIwMThiOTIxX3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8605,
    in_GraphicFileId: "Model3DPlinthLegTriangularPressH120",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3ed454e4-2d66-4072-98d0-6485161f238e_plinthlegtriangularpressh120.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Qwfw9vZaM5klHChPrtCFgKTnAdT%2Fvrtj5cEzkJLlrLE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2VkNDU0ZTQtMmQ2Ni00MDcyLTk4ZDAtNjQ4NTE2MWYyMzhlX3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxMjAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8606,
    in_GraphicFileId: "Model3DPlinthLegTriangularPressH150",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/205d77d1-748e-4712-b765-d92f70470d25_plinthlegtriangularpressh150.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=wAUPtPagSikydfdm%2F8RdTQL0L%2B9BgfdxQPnw1P%2FkHxI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjA1ZDc3ZDEtNzQ4ZS00NzEyLWI3NjUtZDkyZjcwNDcwZDI1X3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxNTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8607,
    in_GraphicFileId: "Model3DPlinthLegTriangularPressNoise",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c78df64f-f4dd-43a1-a2c2-2a5351ef81d7_plinthareadesign2007.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=o7SQ7jtXnxpVkG%2B%2B%2BEQu6JlO7wrEPb8TqSTVU4CvHW0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzc4ZGY2NGYtZjRkZC00M2ExLWEyYzItMmE1MzUxZWY4MWQ3X3BsaW50aGFyZWFkZXNpZ24yMDA3Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8608,
    in_GraphicFileId: "Model3DPlinthLegTriangularPressSensitive",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/16ccc287-5179-4b0a-9c9a-797ee4f0a401_plinthareadesign2008.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=1S8yNAnlCOFRrd10YMP4agaHQUwdjO%2B13IhQTjaMNkU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTZjY2MyODctNTE3OS00YjBhLTljOWEtNzk3ZWU0ZjBhNDAxX3BsaW50aGFyZWFkZXNpZ24yMDA4Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8609,
    in_GraphicFileId: "Model3DPushToOpenLong",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/824a07df-d4e1-4ea6-8fd5-228917816dd3_pushtoopenlongblack_356_04_754.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=J3Jz8hBbDKvRE2BO5NAHj5paQ6yEZ%2FP9bF2hQc8J%2F68%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODI0YTA3ZGYtZDRlMS00ZWE2LThmZDUtMjI4OTE3ODE2ZGQzX3B1c2h0b29wZW5sb25nYmxhY2tfMzU2XzA0Xzc1NC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8610,
    in_GraphicFileId: "Model3DPushToOpenShort",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b7648e49-ca12-4008-8d37-fc258446fb86_pushtoopenshortblack_356_04_353.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=7XKidHX76XkUvt2QyVKfu6m2xyoWcfBLOqjXOI1%2F78s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjc2NDhlNDktY2ExMi00MDA4LThkMzctZmMyNTg0NDZmYjg2X3B1c2h0b29wZW5zaG9ydGJsYWNrXzM1Nl8wNF8zNTMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8611,
    in_GraphicFileId: "Model3DShelfadjGlassDesign01",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8c9bad20-defb-432f-8873-aeeb0e13fe07_281_41_907_4.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=7ZlbeTwDe%2BEkUfphQEvcsqVV%2Bh82I9OA3WIOA1gJAwY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGM5YmFkMjAtZGVmYi00MzJmLTg4NzMtYWVlYjBlMTNmZTA3XzI4MV80MV85MDdfNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8612,
    in_GraphicFileId: "Model3DShelfadjWoodDesign01",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3c01e279-af57-444e-a152-d67853b4d793_ft_stift.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=tbjcTrv6GkLmsjrnuvslyivlGaW4yH%2FssOM4TN942fM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2MwMWUyNzktYWY1Ny00NDRlLWExNTItZDY3ODUzYjRkNzkzX2Z0X3N0aWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8613,
    in_GraphicFileId: "Model3DShelfadjWoodDesign02",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9a695965-02a2-45c0-ba12-a762edfcf769_717_24.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=brhsYZrVCZZcxDyhPExrnxenpHqGvwXH2G2j2ey4ilg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWE2OTU5NjUtMDJhMi00NWMwLWJhMTItYTc2MmVkZmNmNzY5XzcxN18yNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8614,
    in_GraphicFileId: "Model3DShelfadjWoodDesign03",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3e823363-ba2b-4a16-9e3b-b99bda033371_717_25.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=otK8P2LBV2izZC%2BmvhXjs590G5HlhzzoON80Uc%2BbQ9I%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2U4MjMzNjMtYmEyYi00YTE2LTllM2ItYjk5YmRhMDMzMzcxXzcxN18yNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8615,
    in_GraphicFileId: "Model3DWallPlate290.09.910",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/05e32cc9-d200-41dd-876e-7cbf13bfe2cb_wall%20plate%20cuttable%20-%20290_09_910.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Ux%2FIlU6GrrtYbkZr9cvCELlSTChZfvdoph6Wtfieu00%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDVlMzJjYzktZDIwMC00MWRkLTg3NmUtN2NiZjEzYmZlMmNiX3dhbGwgcGxhdGUgY3V0dGFibGUgLSAyOTBfMDlfOTEwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8616,
    in_GraphicFileId: "Model3DWallPlate290.40.989",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ebf03659-3bf8-4187-ad34-7fbb6e303027_wall%20plate%20-%20290_40_989.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=SE7P6lTfBLdcZSYF3Uoxcj43UBwQ6y1wVGHU1Gdf8f4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWJmMDM2NTktM2JmOC00MTg3LWFkMzQtN2ZiYjZlMzAzMDI3X3dhbGwgcGxhdGUgLSAyOTBfNDBfOTg5Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8617,
    in_GraphicFileId: "Model3DWallPlate290.40.991",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4da9f96d-abba-4e1b-9de8-148bbc47da47_wall%20plate%20-%20290_40_991.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=8z1jSWZhV6aOqap%2Fr3wwA4qsIlJajtS7IUet6eCTaNs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGRhOWY5NmQtYWJiYS00ZTFiLTlkZTgtMTQ4YmJjNDdkYTQ3X3dhbGwgcGxhdGUgLSAyOTBfNDBfOTkxLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8618,
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
    _id: 8619,
    in_GraphicFileId: "Rafix20Housing19mmNickelPlated",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/78175d64-57b2-49f5-a935-09546f8d6a2a_rafixhousing_263_15_705.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=D4jko9VkW18KLEO8kE89qFcSc5CW2mYuMbavqPMR2hE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzgxNzVkNjQtNTdiMi00OWY1LWE5MzUtMDk1NDZmOGQ2YTJhX3JhZml4aG91c2luZ18yNjNfMTVfNzA1Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8620,
    in_GraphicFileId: "RafixConnectionBolt11x5mm",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2a995b7e-0eee-4722-ad6b-2ecf01a79f13_rafixconnectingbolt_263_20_847_1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FzgdeKSYHmY76Cspa92IMkmJbForVy7EccvnIBhAEMM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmE5OTViN2UtMGVlZS00NzIyLWFkNmItMmVjZjAxYTc5ZjEzX3JhZml4Y29ubmVjdGluZ2JvbHRfMjYzXzIwXzg0N18xLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8621,
    in_GraphicFileId: "SquareBracket",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5d597b69-0088-4e9e-8724-4c4889a692ab_cornerbrace1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2F92I9z5JYix6optBGWg3uU27trdo3U2VxayK63t6OVI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWQ1OTdiNjktMDA4OC00ZTllLTg3MjQtNGM0ODg5YTY5MmFiX2Nvcm5lcmJyYWNlMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8622,
    in_GraphicFileId: "DispensaSlideBtm",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5f1b92b9-1035-40ae-8357-2d58aa2ab322_slidebtm.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ju2K4tyx9irHkAA0zN2zVgpjqfccXxCixUeH3jWU2Cw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWYxYjkyYjktMTAzNS00MGFlLTgzNTctMmQ1OGFhMmFiMzIyX3NsaWRlYnRtLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8623,
    in_GraphicFileId: "DispensaSlideTop",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8f1c4c03-0222-4c8d-9d63-b3d0b568d8ed_slidetop.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=GmuTl2T%2BJUO8ivn2NOasLvGklehYKW5c5N4zQfIpufo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGYxYzRjMDMtMDIyMi00YzhkLTlkNjMtYjNkMGI1NjhkOGVkX3NsaWRldG9wLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8624,
    in_GraphicFileId: "Dispensa160",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d43c8f78-4bca-4e4c-b018-989536334131_dispensa160.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=0VhP2vNmkO4KGOTp5Q0cvBMDHuMhNeN1W%2FXIGCi25Pw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDQzYzhmNzgtNGJjYS00ZTRjLWIwMTgtOTg5NTM2MzM0MTMxX2Rpc3BlbnNhMTYwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8625,
    in_GraphicFileId: "Dispensa190",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f15773dd-fbac-4dff-b4d5-91af4adb90b4_dispensa190.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=bGUmB4ty1C69DsrVaiUwRqNd66NFHOlqNg%2BXXmUPZ3E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjE1NzczZGQtZmJhYy00ZGZmLWI0ZDUtOTFhZjRhZGI5MGI0X2Rpc3BlbnNhMTkwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8626,
    in_GraphicFileId: "Dispensa230",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3966b30b-5704-4119-80bd-6a4271eafdc9_dispensa230.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=cUkklkDerT0Dm7vp8Abc6l69Fcf9T7IkzyyFnbIve64%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzk2NmIzMGItNTcwNC00MTE5LTgwYmQtNmE0MjcxZWFmZGM5X2Rpc3BlbnNhMjMwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8627,
    in_GraphicFileId: "Dispensa30ConTop",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bc7c7d59-3ccd-462f-88cd-01757ebbe023_connectortop300.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=hptPgfCPzbP2a0qTND6SDpvNyFdfPE5yzPkv4d13eas%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmM3YzdkNTktM2NjZC00NjJmLTg4Y2QtMDE3NTdlYmJlMDIzX2Nvbm5lY3RvcnRvcDMwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8628,
    in_GraphicFileId: "Dispensa30ConBtm",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e159ae82-d4f9-4164-bfa3-f1bbf9b2898f_connectorbtm300.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=gePR5FvjYr8m3z4soF4OKsTZhZLctUkeAg1hxb66QUs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTE1OWFlODItZDRmOS00MTY0LWJmYTMtZjFiYmY5YjI4OThmX2Nvbm5lY3RvcmJ0bTMwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8629,
    in_GraphicFileId: "Dispensa40ConTop",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7865f894-f692-46c9-8121-6d3a85f49e81_connectortop400.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=I8NSsfqvCxqiqhxIEPzCYbwY3KrE0JKrrrfY1SdwF8Y%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzg2NWY4OTQtZjY5Mi00NmM5LTgxMjEtNmQzYTg1ZjQ5ZTgxX2Nvbm5lY3RvcnRvcDQwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8630,
    in_GraphicFileId: "Dispensa40ConBtm",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9e63953f-e9a9-4b0b-88fd-bd51cf3adbd2_connectorbtm400.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=WOUmfZV%2Foy43m%2FtgLmkIa0JfOOcXYHxtITBguK1a2Qs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWU2Mzk1M2YtZTlhOS00YjBiLTg4ZmQtYmQ1MWNmM2FkYmQyX2Nvbm5lY3RvcmJ0bTQwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8631,
    in_GraphicFileId: "DispensaClassic30",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1095f052-7889-4768-aea5-3081fcbf8211_classic300.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FGYhiGzk5SXWE0kb4yNQ1%2FgjxLQPY147YrlbPWvH3so%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTA5NWYwNTItNzg4OS00NzY4LWFlYTUtMzA4MWZjYmY4MjExX2NsYXNzaWMzMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8632,
    in_GraphicFileId: "DispensaClassic40",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/31a50b54-ebca-4b5d-8894-bc23a1c22e5e_classic400.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=B%2BM2O4YD10Il9jCmjnx8jAD1gF5qKGD5lZMjzjKxkqI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzFhNTBiNTQtZWJjYS00YjVkLTg4OTQtYmMyM2ExYzIyZTVlX2NsYXNzaWM0MDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8633,
    in_GraphicFileId: "DispensaStyle30",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/62a1d97c-498d-4632-a10f-b5a867a4fa40_style300.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=av3K5bgzsVfBhqmtOLrOnZggDaBdCCa75gIyjn6vCDE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjJhMWQ5N2MtNDk4ZC00NjMyLWExMGYtYjVhODY3YTRmYTQwX3N0eWxlMzAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8634,
    in_GraphicFileId: "DispensaStyle40",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4081aead-61be-490b-98f4-11f9f21f4c00_style400.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=X1vrtl5Yiz50j1NVutjwD%2Ft9cvCSciW%2BQBevHyNl8y0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDA4MWFlYWQtNjFiZS00OTBiLTk4ZjQtMTFmOWYyMWY0YzAwX3N0eWxlNDAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8635,
    in_GraphicFileId: "No15_Classic_right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/03da7b14-0698-4e8d-93e8-108096638da2_no15_auszu%CC%88ge_rechts.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=jejzAL2qX9qB4yBNnKpyKdlBaZy1EsR1GcvoC5qppCs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDNkYTdiMTQtMDY5OC00ZThkLTkzZTgtMTA4MDk2NjM4ZGEyX25vMTVfYXVzenXMiGdlX3JlY2h0cy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8636,
    in_GraphicFileId: "No15_Classic_left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3ad457b8-4fd1-4701-aac8-be12e0a9c334_no15_auszu%CC%88ge_links.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=aazazoXvWX6PkylfD7rRq7hyDLzP0ggXCkYqWLUh6Ys%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2FkNDU3YjgtNGZkMS00NzAxLWFhYzgtYmUxMmUwYTljMzM0X25vMTVfYXVzenXMiGdlX2xpbmtzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8637,
    in_GraphicFileId: "No15_Style_right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c5cdc0e0-2ed4-43e8-b2cf-3f1d690ad808_no15_rotated.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=0bTUOZTj9R2Lbq8TYWMt6i%2F5a%2BfGHFa8bl3lNowE9f4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzVjZGMwZTAtMmVkNC00M2U4LWIyY2YtM2YxZDY5MGFkODA4X25vMTVfcm90YXRlZC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8638,
    in_GraphicFileId: "No15_Style_left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/870f03bd-dda4-4f8f-9d19-5ffbb6989e26_no15_rotated_left.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=5Pr%2BAxPvjXbyWpfVCTkJqs5Sebf%2FWL5Q%2BxtwUXMUzf4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODcwZjAzYmQtZGRhNC00ZjhmLTlkMTktNWZmYmI2OTg5ZTI2X25vMTVfcm90YXRlZF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8639,
    in_GraphicFileId: "No15_Slides_right",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a12e4011-9932-4da2-9fd6-b77cbfa4eb87_no15_beschla%CC%88ge_rechts.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=buJkfZ%2BGIQyXaNhvedwY16wWD7ZR4VEZF5dHUbwwJac%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTEyZTQwMTEtOTkzMi00ZGEyLTlmZDYtYjc3Y2JmYTRlYjg3X25vMTVfYmVzY2hsYcyIZ2VfcmVjaHRzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8640,
    in_GraphicFileId: "No15_Slides_left",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bb11accc-6336-4252-b546-6be655c78fc6_no15_beschla%CC%88ge_links.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=DLKK7%2BkB6Mk3nVvnYNK1FSY0BRw4qNG9%2B0gpkEcrurw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmIxMWFjY2MtNjMzNi00MjUyLWI1NDYtNmJlNjU1Yzc4ZmM2X25vMTVfYmVzY2hsYcyIZ2VfbGlua3Mub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8641,
    in_GraphicFileId: "FrontTuscanMilling",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/97afc04d-240e-40a0-9e1a-561c5208ce6e_fronttuscanmilling.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=SuqMxbTpc67V5kRwOqfxG9vKkReOHEPUNEQKtOMudm4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTdhZmMwNGQtMjQwZS00MGEwLTllMWEtNTYxYzUyMDhjZTZlX2Zyb250dHVzY2FubWlsbGluZy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.Model3DParameters
      }
    }
  }
  , {
    _id: 8642,
    in_GraphicFileId: "Model3DConero625",
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b42e4ce1-c248-45f4-94ce-72b6f4d5618c_coneron.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=XsixPNtyYLMyAj%2FlNB1uvuc29HkdkDvRPZwyL%2F%2FtPfA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjQyZTRjZTEtYzI0OC00NWY0LTk0Y2UtNzJiNmY0ZDU2MThjX2NvbmVyb24ub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
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
