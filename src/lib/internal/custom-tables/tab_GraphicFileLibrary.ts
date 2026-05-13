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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d2509f2a-d3f3-4d78-a4c0-bb92f805b1ea_dowel.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=fOrncCdvHyfJU1BaNKyPiAODHdWobhHk4ushQ64kb9U%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDI1MDlmMmEtZDNmMy00ZDc4LWE0YzAtYmI5MmY4MDViMWVhX2Rvd2VsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d2509f2a-d3f3-4d78-a4c0-bb92f805b1ea_dowel.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=fOrncCdvHyfJU1BaNKyPiAODHdWobhHk4ushQ64kb9U%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDI1MDlmMmEtZDNmMy00ZDc4LWE0YzAtYmI5MmY4MDViMWVhX2Rvd2VsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c93d6962-c54e-4d45-9983-c0ab1e4354d0_bar_front.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=W1BhFnwmtzM%2Bh8k3%2F9Q9YbuMHBp1qfLzGUaT88RPjd4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzkzZDY5NjItYzU0ZS00ZDQ1LTk5ODMtYzBhYjFlNDM1NGQwX2Jhcl9mcm9udC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ae7baa46-e8b9-487b-82ec-1a76bfbd79c9_bar_l.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=MHNiMn%2FHvok4hfGqNJ9%2Fxqf4DbEMGtyyKJcKqsL%2BLGQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWU3YmFhNDYtZThiOS00ODdiLTgyZWMtMWE3NmJmYmQ3OWM5X2Jhcl9sLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/219fa3bf-e48a-46fb-b13b-38797a1a73ca_bar_r.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=r6EVh%2BR7B%2FEezmh2kBEITAuGBBr%2BniBWzcqj83B5irY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjE5ZmEzYmYtZTQ4YS00NmZiLWIxM2ItMzg3OTdhMWE3M2NhX2Jhcl9yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a30464c0-1b29-413b-9078-da2213cc6547_snchro_legra_2.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=EnF1JVnrWLM%2FFQRTdShJoIN%2BMfEnIOGNNZoViejbFLk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTMwNDY0YzAtMWIyOS00MTNiLTkwNzgtZGEyMjEzY2M2NTQ3X3NuY2hyb19sZWdyYV8yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fb75e9e3-5076-4ec5-bb5a-f9274b4f41df_legra_box_c_270_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=P7l8DdYk3iPZLNrXjoXY%2FwibchDItox9v6YIG41yRPg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmI3NWU5ZTMtNTA3Ni00ZWM1LWJiNWEtZjkyNzRiNGY0MWRmX2xlZ3JhX2JveF9jXzI3MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7ab432b2-6f2e-48f1-835f-6ec30640bdf1_legra_box_c_270_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=BW0MUK3dttME%2FguG%2FBEvqyh9FmOvbuLnRcVUmkIbEvg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2FiNDMyYjItNmYyZS00OGYxLTgzNWYtNmVjMzA2NDBiZGYxX2xlZ3JhX2JveF9jXzI3MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cae670de-2e5b-44f9-95b3-80a5c5de3c29_legra_box_c_300_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=X%2BXWvu3yRhC7zakypGRS0W8blZ0j%2FOCc0kLS%2FFyo6jw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2FlNjcwZGUtMmU1Yi00NGY5LTk1YjMtODBhNWM1ZGUzYzI5X2xlZ3JhX2JveF9jXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ecf64119-d6e4-4a06-9997-28541c963a18_legra_box_c_300_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=28QrEvRfmHLh7L4ImeoABDh1VO8Mot117%2FpVF0XucqI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWNmNjQxMTktZDZlNC00YTA2LTk5OTctMjg1NDFjOTYzYTE4X2xlZ3JhX2JveF9jXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4706f34e-eab4-47af-937e-2f0a34c5a16b_legra_box_c_350_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=2Xb2Aw5CtJbvcPW%2FGUBQAsOAJVY2tAuhmQNI0hh5DAw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDcwNmYzNGUtZWFiNC00N2FmLTkzN2UtMmYwYTM0YzVhMTZiX2xlZ3JhX2JveF9jXzM1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2c7b56aa-fb29-4195-96a9-77e0c98864f1_legra_box_c_350_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=i0Fy51wvg5mLIPcCnUW%2BIEUGvmUKnDF6RT%2FDlphtPbM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmM3YjU2YWEtZmIyOS00MTk1LTk2YTktNzdlMGM5ODg2NGYxX2xlZ3JhX2JveF9jXzM1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/eb6d2ab9-7cdc-4647-b424-aade6ca3a0da_legra_box_c_400_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=H8Ojf3kgg8NhjjH86hH7WKfpBVPDQF2xCO%2FUedGSSVA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWI2ZDJhYjktN2NkYy00NjQ3LWI0MjQtYWFkZTZjYTNhMGRhX2xlZ3JhX2JveF9jXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2c929d7d-32be-4be1-97fb-a21c23e96cf9_legra_box_c_400_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=%2BOCG7uBTwE9QQw9GdDs3tOQCEUpbUGQTWnwvALkAP4M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmM5MjlkN2QtMzJiZS00YmUxLTk3ZmItYTIxYzIzZTk2Y2Y5X2xlZ3JhX2JveF9jXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/31db4b27-274a-481a-86d8-4600057b6438_legra_box_c_450_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=icWSaaXmUXedKlL7hXFIuMfhdeqk11t%2F1bYo6J2AGLI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzFkYjRiMjctMjc0YS00ODFhLTg2ZDgtNDYwMDA1N2I2NDM4X2xlZ3JhX2JveF9jXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e2580f1a-1d00-46de-b148-37d6458ab16f_legra_box_c_450_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=iLjRAxeRcw9zPVp9J9h63xb5VzkNesOhncCKcxEAAvM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTI1ODBmMWEtMWQwMC00NmRlLWIxNDgtMzdkNjQ1OGFiMTZmX2xlZ3JhX2JveF9jXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dd376991-b8b9-4256-b4aa-948e36ff30db_legra_box_c_500_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=lHxBf9ivuB7Az2Ok07ExOVRl0zlN2UDHvSH6ieyzKQg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGQzNzY5OTEtYjhiOS00MjU2LWI0YWEtOTQ4ZTM2ZmYzMGRiX2xlZ3JhX2JveF9jXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1d6c2c94-d877-41fa-9d27-e901f981164b_legra_box_c_500_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=SiKaMgIXdeMKkKDvEuiOQJnLIQ3OjfQvxqcrSSCvgEQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWQ2YzJjOTQtZDg3Ny00MWZhLTlkMjctZTkwMWY5ODExNjRiX2xlZ3JhX2JveF9jXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b6e45577-a713-4dda-9bc0-625acfd59083_legra_box_c_550_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=7zYmRWE8sN41hlv%2FWTbL8kf2oMH9%2BCnwiZPW4zckc4Q%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjZlNDU1NzctYTcxMy00ZGRhLTliYzAtNjI1YWNmZDU5MDgzX2xlZ3JhX2JveF9jXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a4867ffb-215c-4309-b26d-c9ef6c1737a5_legra_box_c_550_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=cr%2BKkUk0toMDJi0%2BeU8Y2nj%2B7IGpxPY4vRV9ZlfqlWc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTQ4NjdmZmItMjE1Yy00MzA5LWIyNmQtYzllZjZjMTczN2E1X2xlZ3JhX2JveF9jXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/22ccfca4-7fef-41b4-aada-fa40fa0abeaa_legra_box_c_600_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=FoKV%2BIGQCldaxLMrOfq8e3DOuwxpTUb7yv%2BGFei0pik%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjJjY2ZjYTQtN2ZlZi00MWI0LWFhZGEtZmE0MGZhMGFiZWFhX2xlZ3JhX2JveF9jXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2a2fc109-405a-4cd5-b350-fe3bd7bafab3_legra_box_c_600_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=HYu0KuxnZytwznwrk17hAvSkk6DrVBrgWDjrZdOoXI0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmEyZmMxMDktNDA1YS00Y2Q1LWIzNTAtZmUzYmQ3YmFmYWIzX2xlZ3JhX2JveF9jXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b1b676fd-4683-476d-aa7a-e3e0ba5eb042_legra_box_c_650_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=LkQzH8cRBqxfnhF8RaAgdMW%2F9MW488cSM9gqJgptKK8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjFiNjc2ZmQtNDY4My00NzZkLWFhN2EtZTNlMGJhNWViMDQyX2xlZ3JhX2JveF9jXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7b378971-8a87-407c-bac2-bd41f5a0e817_legra_box_c_650_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=VhwnwtqCxCgl8%2BQIp8AIoTYsAXf2sXIXP76RcYzOexE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2IzNzg5NzEtOGE4Ny00MDdjLWJhYzItYmQ0MWY1YTBlODE3X2xlZ3JhX2JveF9jXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2c73b1a4-8bce-4d4b-ac05-992edfb66eb0_legra_box_f_400_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=D5Ysq4Tid7muHcfsWIEinb8jQcdVUJxvtW4RJYQa6aU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmM3M2IxYTQtOGJjZS00ZDRiLWFjMDUtOTkyZWRmYjY2ZWIwX2xlZ3JhX2JveF9mXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a7438b18-b844-46f9-b1e1-5d69826f21a1_legra_box_f_400_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=r2%2BrI8GSHZTz%2BcOfao7aM%2FaadTLWVPNEHd6rhH7ufGk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTc0MzhiMTgtYjg0NC00NmY5LWIxZTEtNWQ2OTgyNmYyMWExX2xlZ3JhX2JveF9mXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/faff435a-b3f8-4a46-b407-7cab2a392a21_legra_box_f_450_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=32nWK1FBZd0V5Q0OXYjQofYo0K2drAmpdXBD5PcFvNo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmFmZjQzNWEtYjNmOC00YTQ2LWI0MDctN2NhYjJhMzkyYTIxX2xlZ3JhX2JveF9mXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/421e2bb9-817d-4e24-bc3d-7ea696c838e5_legra_box_f_450_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=DwH5%2FcZAipM8YTaq1PB2c1SFUcs3sS%2Fx4AVuozvXam8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDIxZTJiYjktODE3ZC00ZTI0LWJjM2QtN2VhNjk2YzgzOGU1X2xlZ3JhX2JveF9mXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9d2934e2-7924-4e7f-a387-3025d5033888_legra_box_f_500_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=3UfJAPpHo2BaCCr0Ysuo%2FT8ctIyUAd68Drov%2FyL9oSI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWQyOTM0ZTItNzkyNC00ZTdmLWEzODctMzAyNWQ1MDMzODg4X2xlZ3JhX2JveF9mXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/778abe02-f40d-4dac-8f90-713c196487c3_legra_box_f_500_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=O7LPpr2jbxgGPq6XI14E31IJKQ1NFN%2FYbesc8c6Akpo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzc4YWJlMDItZjQwZC00ZGFjLThmOTAtNzEzYzE5NjQ4N2MzX2xlZ3JhX2JveF9mXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1dfe9cff-8646-4c85-b171-4ecc334034ba_legra_box_f_550_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=GWR%2BEYx2eRTpiEZM%2BmqMLIb8O2H79LI%2Ft5jdVSgaZbo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWRmZTljZmYtODY0Ni00Yzg1LWIxNzEtNGVjYzMzNDAzNGJhX2xlZ3JhX2JveF9mXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4be64bc1-9519-4d4c-826b-3e42ae96cf2f_legra_box_f_550_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=EGb%2BsPbElZ8sW4jW3LHMS4Zadvofz5MfCPPKyMn0UnY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGJlNjRiYzEtOTUxOS00ZDRjLTgyNmItM2U0MmFlOTZjZjJmX2xlZ3JhX2JveF9mXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f673da5b-90e4-45ef-a9ef-841df49037ef_legra_box_f_600_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Np%2BQwZJoo4ceuoOv%2F20VzTgGQ9GIzsHBeg8ICWih2ig%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjY3M2RhNWItOTBlNC00NWVmLWE5ZWYtODQxZGY0OTAzN2VmX2xlZ3JhX2JveF9mXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ccae48df-76e9-418a-8bbb-dfb2e9ec0cd3_legra_box_f_600_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=VNYVcIlF02mOol5iTOlv183gPQbeg%2Bt1wXHs3g19nB8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2NhZTQ4ZGYtNzZlOS00MThhLThiYmItZGZiMmU5ZWMwY2QzX2xlZ3JhX2JveF9mXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/eee98e62-c939-435b-86c9-14f7a3dc9605_legra_box_f_650_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=2a%2BJpYvWcj2QgetwfdJhsjfJthA3NcNWMCUI4sdVOVM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWVlOThlNjItYzkzOS00MzViLTg2YzktMTRmN2EzZGM5NjA1X2xlZ3JhX2JveF9mXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a70f6cc6-e90b-4195-b770-f40e3b233b70_legra_box_f_650_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=%2FfJfA6TcOTJmkPwLp2DziYzGSCsJG4874k53z1mTUco%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTcwZjZjYzYtZTkwYi00MTk1LWI3NzAtZjQwZTNiMjMzYjcwX2xlZ3JhX2JveF9mXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/de640040-c397-4094-a9a4-757a49e18683_legra_box_k_300_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=v%2FeLnWXXrOeAMbSeR8yUoGin9VWLX%2BApmJHXt3BY4Wc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGU2NDAwNDAtYzM5Ny00MDk0LWE5YTQtNzU3YTQ5ZTE4NjgzX2xlZ3JhX2JveF9rXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/941d462b-ec82-49a9-b4bd-2bf5c1678328_legra_box_k_300_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=uitGCjmpBgcmX%2B7VVZBQyuBAY62NU032SdJZ4vf%2F2C8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTQxZDQ2MmItZWM4Mi00OWE5LWI0YmQtMmJmNWMxNjc4MzI4X2xlZ3JhX2JveF9rXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/77dcf3ec-ef9b-4835-994b-f10366b11da0_legra_box_k_350_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=daCf%2Fy8AsneMYOvy6zz%2FUiyh86QB4g4uuOMTj7mW9qQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzdkY2YzZWMtZWY5Yi00ODM1LTk5NGItZjEwMzY2YjExZGEwX2xlZ3JhX2JveF9rXzM1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5fc87eb6-6225-46e2-8479-3b4015f16127_legra_box_k_350_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=%2FkaDWb28fRtIuH0BZ9%2B1XOeCJkV3b8EZgJHiEXWlzVo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWZjODdlYjYtNjIyNS00NmUyLTg0NzktM2I0MDE1ZjE2MTI3X2xlZ3JhX2JveF9rXzM1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e7215d1f-8111-423c-8c3d-622da9eff933_legra_box_k_400_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=X2pkKlL00Xdmez6jhVgrXgZduAjxoMSqhO9ldqjOZCI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTcyMTVkMWYtODExMS00MjNjLThjM2QtNjIyZGE5ZWZmOTMzX2xlZ3JhX2JveF9rXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3d54df0b-ef36-4795-ab9a-a50ab68b4b6e_legra_box_k_400_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=mStcyaQ0ByARJeH5WcVQZsQQ31qcE7vDuyZ8ymGApRk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2Q1NGRmMGItZWYzNi00Nzk1LWFiOWEtYTUwYWI2OGI0YjZlX2xlZ3JhX2JveF9rXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/68de1970-abd2-495f-b4e5-f735c064ad0d_legra_box_k_450_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=fxagOG7rvyQA4U3ejs6zPIH65yaa9IBByL79WvDJFJw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjhkZTE5NzAtYWJkMi00OTVmLWI0ZTUtZjczNWMwNjRhZDBkX2xlZ3JhX2JveF9rXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/44d60850-025c-43a3-9794-d1ed0117a787_legra_box_k_450_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=UUL6npWALEh05fupgMR35u9a4301lMo4%2FBVlrfcYuuY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDRkNjA4NTAtMDI1Yy00M2EzLTk3OTQtZDFlZDAxMTdhNzg3X2xlZ3JhX2JveF9rXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/49443dd8-85d0-41b5-8745-8d104ed1d3bb_legra_box_k_500_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=SCD0Zfx6ewmIK5zsivYKhvGZmAa3n6djSAS62iBaTac%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDk0NDNkZDgtODVkMC00MWI1LTg3NDUtOGQxMDRlZDFkM2JiX2xlZ3JhX2JveF9rXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/91c121a4-6860-4175-a43b-035e6bb4e718_legra_box_k_500_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=M8JN1AifJdY8AjhnaRV2yvTbK%2Fo8E8RM5B7ScJ%2B3kbM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTFjMTIxYTQtNjg2MC00MTc1LWE0M2ItMDM1ZTZiYjRlNzE4X2xlZ3JhX2JveF9rXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/26fbab76-537c-4690-8053-4eacb549ecc2_legra_box_k_550_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=f97sxHhGdjytHUmWomc%2B3%2FXojRa4FmcveYPzHwUGFMM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjZmYmFiNzYtNTM3Yy00NjkwLTgwNTMtNGVhY2I1NDllY2MyX2xlZ3JhX2JveF9rXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c856f6f7-23bf-4149-92e3-af1b97a33050_legra_box_k_550_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=oMNE40%2FuemVQHJKkQosLzUJhqaFhwlBhr30rMzo8XtQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzg1NmY2ZjctMjNiZi00MTQ5LTkyZTMtYWYxYjk3YTMzMDUwX2xlZ3JhX2JveF9rXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8066b892-8d76-4124-9c1f-df3c7e3b5dec_legra_box_k_600_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=mbwiU%2B8yQlILuAKMxRPRtyQf9Csiunj12gSdpDBMRPk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODA2NmI4OTItOGQ3Ni00MTI0LTljMWYtZGYzYzdlM2I1ZGVjX2xlZ3JhX2JveF9rXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/74081df7-b31e-4f14-ba08-1dd8708d8e79_legra_box_k_600_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=nuzcsuWLLjJvK5%2Bg5Zosir%2FEe6Q1kiFbz3N6a0dncXc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzQwODFkZjctYjMxZS00ZjE0LWJhMDgtMWRkODcwOGQ4ZTc5X2xlZ3JhX2JveF9rXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/98901d3b-c5d5-4c9b-a30d-b14c5ce79dd1_legra_box_m_270_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=XObctMxL12hK1pqR1OW%2FHo6HHPUgT9b6E9CQc8GcX%2Fk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTg5MDFkM2ItYzVkNS00YzliLWEzMGQtYjE0YzVjZTc5ZGQxX2xlZ3JhX2JveF9tXzI3MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e5721c9e-a804-44c9-b8a3-7dcd7911e6d5_legra_box_m_270_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=zwvs%2BQsSHk0rCTvowDTt9OqMZiOcIcl2JmUjxAoxo8Q%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTU3MjFjOWUtYTgwNC00NGM5LWI4YTMtN2RjZDc5MTFlNmQ1X2xlZ3JhX2JveF9tXzI3MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/29ba900b-25eb-4328-b65b-13fc3dcd89f3_legra_box_m_300_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=nlahctT4nkn8LEyzxkxHvCcWFsyQ5TLdDmIt6KOhg2s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjliYTkwMGItMjVlYi00MzI4LWI2NWItMTNmYzNkY2Q4OWYzX2xlZ3JhX2JveF9tXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e0f86cda-6e70-4162-aff5-8eef0893d431_legra_box_m_300_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=cCOxIRJobKUj2e27AR4KfUN9Y8AkgRBQMc1zfuNxxKM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTBmODZjZGEtNmU3MC00MTYyLWFmZjUtOGVlZjA4OTNkNDMxX2xlZ3JhX2JveF9tXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a6cb5d77-a597-42a1-8a49-6cce0405317d_legra_box_m_350_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=uJnVRUbz7GJ5iuHgH4H5xRUVhzPgtOHqmkFP%2BTDAd%2BA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTZjYjVkNzctYTU5Ny00MmExLThhNDktNmNjZTA0MDUzMTdkX2xlZ3JhX2JveF9tXzM1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/333a92ba-42eb-466d-a42b-f70d408edfd6_legra_box_m_350_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=kHRWy0fRDxmMwfBkjd4X3UhgZkd8v2M%2BCQiRMKNXkxc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzMzYTkyYmEtNDJlYi00NjZkLWE0MmItZjcwZDQwOGVkZmQ2X2xlZ3JhX2JveF9tXzM1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/74a4aa94-9bea-475d-8ffa-a70f5da94522_legra_box_m_400_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=37GGvJ1Oxwd8PGHgejFFMT0w%2BszLGH82YQ8lU%2BctV0g%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzRhNGFhOTQtOWJlYS00NzVkLThmZmEtYTcwZjVkYTk0NTIyX2xlZ3JhX2JveF9tXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/92506594-a5b1-4b5a-a6f4-95fc60d9fa58_legra_box_m_400_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=xjWWGY6wYWvuBkqx%2B5uZTs4v4RJXkadkcEIBdfVPSO8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTI1MDY1OTQtYTViMS00YjVhLWE2ZjQtOTVmYzYwZDlmYTU4X2xlZ3JhX2JveF9tXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/60f5e660-fa6c-42b9-96cb-81ad2d6de1e5_legra_box_m_450_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=NRRxHgn5vNNTTlvCAgVIEu%2Fc5Oecx25GCymhpoKfQ3E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjBmNWU2NjAtZmE2Yy00MmI5LTk2Y2ItODFhZDJkNmRlMWU1X2xlZ3JhX2JveF9tXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/597f265a-4119-4636-b8dd-0e4b8391a497_legra_box_m_450_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=6lDdyYESw6a6QzBrWdgw%2FVM%2BVAjUuJQXcsY8XcwZ7x0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTk3ZjI2NWEtNDExOS00NjM2LWI4ZGQtMGU0YjgzOTFhNDk3X2xlZ3JhX2JveF9tXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/249d924f-b30b-4998-a521-5df152863658_legra_box_m_500_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=1XY93Wzzv29usBNOGh2ocPRZgq3ga3y%2BjgnzgDty97E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjQ5ZDkyNGYtYjMwYi00OTk4LWE1MjEtNWRmMTUyODYzNjU4X2xlZ3JhX2JveF9tXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/33ef57ce-2141-45ea-9924-1622b8884f52_legra_box_m_500_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=DRcGp56y4oPSfLRKtZzrkz9wXEbzJxRtc%2FHWMbVRZBQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzNlZjU3Y2UtMjE0MS00NWVhLTk5MjQtMTYyMmI4ODg0ZjUyX2xlZ3JhX2JveF9tXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c43478c0-ffd9-45f4-b8d2-65f19550cefa_legra_box_m_550_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=AcH0zsysXwZFMr8TkfLpzQK7YUh36NCKvEwRFRn5ZwM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzQzNDc4YzAtZmZkOS00NWY0LWI4ZDItNjVmMTk1NTBjZWZhX2xlZ3JhX2JveF9tXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/73de90ac-f51f-4451-aaa0-b37fdf6208f0_legra_box_m_550_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=mMMEjVajz8cLcokhaB30ml%2FI9sR44MX63Gs1j1aVEhU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzNkZTkwYWMtZjUxZi00NDUxLWFhYTAtYjM3ZmRmNjIwOGYwX2xlZ3JhX2JveF9tXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2b04e5a9-c957-4d2d-b83d-3391ad52faa7_legra_box_m_600_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=1i2ILy8mOaE4zvDQpAGYmorr1gf7SeQbwkx2aJ%2BrfNE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmIwNGU1YTktYzk1Ny00ZDJkLWI4M2QtMzM5MWFkNTJmYWE3X2xlZ3JhX2JveF9tXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bb07a8ff-afe8-47d2-b752-637744db05d9_legra_box_m_600_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Ysf9Jara0BmZJM0K%2Bv2N6NUaBrlhZ8ZBUFVAUWkhEA8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmIwN2E4ZmYtYWZlOC00N2QyLWI3NTItNjM3NzQ0ZGIwNWQ5X2xlZ3JhX2JveF9tXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/25f06d96-ea39-43e0-bd04-2888f414612c_legra_box_m_650_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=zkbQzCVU%2FcjAQWnBeFhkn%2BWR%2FhfAOnsEG7D7pf%2FLv%2F4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjVmMDZkOTYtZWEzOS00M2UwLWJkMDQtMjg4OGY0MTQ2MTJjX2xlZ3JhX2JveF9tXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/42435017-de87-4e42-9616-96312e214f16_legra_box_m_650_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=502eyQovEk9xzU81BmL01oz4tFOszXUqntbvbAz9QmM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDI0MzUwMTctZGU4Ny00ZTQyLTk2MTYtOTYzMTJlMjE0ZjE2X2xlZ3JhX2JveF9tXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b616f012-60ff-4f9a-a86d-ce67cf694aa1_legra_box_n_400_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=7Z8HLFQtTRvmSreULsMi1QmSfThjijfprGKLdgFv470%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjYxNmYwMTItNjBmZi00ZjlhLWE4NmQtY2U2N2NmNjk0YWExX2xlZ3JhX2JveF9uXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6c837831-c67b-4758-bbc8-843b2f2d3a24_legra_box_n_400_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=KkKIXe5ZKGjhvKuoRVk9K7M%2F0WZ1WWekx3D2KGcd5eU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmM4Mzc4MzEtYzY3Yi00NzU4LWJiYzgtODQzYjJmMmQzYTI0X2xlZ3JhX2JveF9uXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3846d8ba-0fcf-418d-aa37-643c589fa19a_legra_box_n_450_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Md5ucqHtRe3U6O3sDgHsQjN4K%2FDB1r9XIFlX8oPeDNQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzg0NmQ4YmEtMGZjZi00MThkLWFhMzctNjQzYzU4OWZhMTlhX2xlZ3JhX2JveF9uXzQ1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a9c9e85b-8c02-4631-ae31-f8e6adb6671e_legra_box_n_450_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=MxBu%2Fc%2BX6FUYo6%2FKprV%2BhGliSoHIR5H1DsVcQuiqu74%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTljOWU4NWItOGMwMi00NjMxLWFlMzEtZjhlNmFkYjY2NzFlX2xlZ3JhX2JveF9uXzQ1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d8ae8dbd-beff-49d8-84a2-1724db4c3c1c_legra_box_n_500_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=WxjrQIQg4qn%2F6SNHjZBXsstnt2xZJFGoAv5dx3adfpA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDhhZThkYmQtYmVmZi00OWQ4LTg0YTItMTcyNGRiNGMzYzFjX2xlZ3JhX2JveF9uXzUwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/aa44607a-46b7-4191-835c-b1f980da1148_legra_box_n_500_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=ya3b8UYjYUAq%2FHCJ%2BhZzAQuMlXvYlaNXpzIbzypIlaM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWE0NDYwN2EtNDZiNy00MTkxLTgzNWMtYjFmOTgwZGExMTQ4X2xlZ3JhX2JveF9uXzUwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/894371ab-d349-460c-8414-af15f5bd7e77_legra_box_n_550_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=fctkYHZ%2F7Nh5gFYO%2FY1NoBaGfD39kyp61G3A4%2Bvsdg4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODk0MzcxYWItZDM0OS00NjBjLTg0MTQtYWYxNWY1YmQ3ZTc3X2xlZ3JhX2JveF9uXzU1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0c5eeb9e-de6b-4d48-a931-3251ccecd67f_legra_box_n_550_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=FFKZerbiDpMfcKl0rGWPrefkKM5jPkuUSFQBq0MVyAY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGM1ZWViOWUtZGU2Yi00ZDQ4LWE5MzEtMzI1MWNjZWNkNjdmX2xlZ3JhX2JveF9uXzU1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4446268c-942e-4150-99c9-8def82e38e2a_legra_c_low.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=ajdraYo1Nsnsu4%2FSGArEVJnqILo4RXVHRBG5jLnsGCQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDQ0NjI2OGMtOTQyZS00MTUwLTk5YzktOGRlZjgyZTM4ZTJhX2xlZ3JhX2NfbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dfce1f22-28bc-460c-b8d6-bd2d68f61825_legra_f_low.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=K5KSHqK8Z12I%2BX3Dln%2Bpr83iSPNtp3VAwL8JKc58NGs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGZjZTFmMjItMjhiYy00NjBjLWI4ZDYtYmQyZDY4ZjYxODI1X2xlZ3JhX2ZfbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ea8e9685-a208-466d-920c-9486b7e6ec90_legra_k_low.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Q18KimlcbDXGaNNriJImBTrr98xD0%2B%2B7iPz4SlZ9bUM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWE4ZTk2ODUtYTIwOC00NjZkLTkyMGMtOTQ4NmI3ZTZlYzkwX2xlZ3JhX2tfbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2b9675f5-c494-4920-ba2d-b996cd052f9d_legra_m_low.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=j3%2FPuu%2FRmFijMiylUvgVYMiDKPrU%2FinKrhk6MHPZE5w%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmI5Njc1ZjUtYzQ5NC00OTIwLWJhMmQtYjk5NmNkMDUyZjlkX2xlZ3JhX21fbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a1be99f5-c33f-4971-b92f-8c6b66da84a6_legra_n_low.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=EYZSnMsdYDeph9W1EoI%2Fn%2BzIpRhByDpsdOuR8Cmwvq4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTFiZTk5ZjUtYzMzZi00OTcxLWI5MmYtOGM2YjY2ZGE4NGE2X2xlZ3JhX25fbG93Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9e4af5ad-9459-47b2-8bec-a26496835b94_legra_glide_270_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Y%2FXfMmz%2BTpV53dzFXhCN6TziW6TSQ9JtiFvkNmP5RTI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWU0YWY1YWQtOTQ1OS00N2IyLThiZWMtYTI2NDk2ODM1Yjk0X2xlZ3JhX2dsaWRlXzI3MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a10ac2b4-1832-4d6d-a198-7b0a8a10e60b_legra_glide_270_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Dgu9yqoNL1fhJkkpt3WRF1Iqv6Q6f9WVOFJtoGyJcAQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTEwYWMyYjQtMTgzMi00ZDZkLWExOTgtN2IwYThhMTBlNjBiX2xlZ3JhX2dsaWRlXzI3MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5a383f3c-2f1f-43a0-848b-f039ca551119_legra_glide_300_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=OwohsORh%2FQ2Fao0IddqOC8KJm9tXuAIyGyJXXIpMDKY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWEzODNmM2MtMmYxZi00M2EwLTg0OGItZjAzOWNhNTUxMTE5X2xlZ3JhX2dsaWRlXzMwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6a74b1f7-0eda-44ee-b407-0d8abaf5a20d_legra_glide_300_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Q2BNBPlukw3b8DVRFl4CvBeW8Wq1XjONBUQmHnmusf4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmE3NGIxZjctMGVkYS00NGVlLWI0MDctMGQ4YWJhZjVhMjBkX2xlZ3JhX2dsaWRlXzMwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/14b651d8-4e4e-49b9-b060-12b7b72f6c74_legra_glide_400_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=nxFV%2F2l3dLxVxsI0cAj5jA2mMZHrvyhitUvxvWBAvD0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTRiNjUxZDgtNGU0ZS00OWI5LWIwNjAtMTJiN2I3MmY2Yzc0X2xlZ3JhX2dsaWRlXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7760fbad-036f-4872-b351-1304d02fbd20_legra_glide_400_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=N9H4kEHy2maJrtWDfQ5SzdvTmOWtuIfmUWCEHj4ClOc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzc2MGZiYWQtMDM2Zi00ODcyLWIzNTEtMTMwNGQwMmZiZDIwX2xlZ3JhX2dsaWRlXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/14b651d8-4e4e-49b9-b060-12b7b72f6c74_legra_glide_400_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=nxFV%2F2l3dLxVxsI0cAj5jA2mMZHrvyhitUvxvWBAvD0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTRiNjUxZDgtNGU0ZS00OWI5LWIwNjAtMTJiN2I3MmY2Yzc0X2xlZ3JhX2dsaWRlXzQwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7760fbad-036f-4872-b351-1304d02fbd20_legra_glide_400_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=N9H4kEHy2maJrtWDfQ5SzdvTmOWtuIfmUWCEHj4ClOc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzc2MGZiYWQtMDM2Zi00ODcyLWIzNTEtMTMwNGQwMmZiZDIwX2xlZ3JhX2dsaWRlXzQwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a4b34074-7363-4545-afc9-7fb5dee8d004_legra_glide_600_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=52MJlL%2FAY7OEe4o3V2oNBmgHkuOOIx2yws2EFGGHumc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTRiMzQwNzQtNzM2My00NTQ1LWFmYzktN2ZiNWRlZThkMDA0X2xlZ3JhX2dsaWRlXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/880e15b8-ba1f-446c-bee7-a64b26035c29_legra_glide_600_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=PHyaJOeMwBs0TXjB0GknZv7RYMLmXs0aeGHcJGohVjw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODgwZTE1YjgtYmExZi00NDZjLWJlZTctYTY0YjI2MDM1YzI5X2xlZ3JhX2dsaWRlXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a4b34074-7363-4545-afc9-7fb5dee8d004_legra_glide_600_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=52MJlL%2FAY7OEe4o3V2oNBmgHkuOOIx2yws2EFGGHumc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTRiMzQwNzQtNzM2My00NTQ1LWFmYzktN2ZiNWRlZThkMDA0X2xlZ3JhX2dsaWRlXzYwMF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/880e15b8-ba1f-446c-bee7-a64b26035c29_legra_glide_600_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=PHyaJOeMwBs0TXjB0GknZv7RYMLmXs0aeGHcJGohVjw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODgwZTE1YjgtYmExZi00NDZjLWJlZTctYTY0YjI2MDM1YzI5X2xlZ3JhX2dsaWRlXzYwMF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1922a251-e4cf-4700-9dff-322f64a7db14_slide_650_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=4ZSLF290ApAi0tg%2BfvnMTD6E%2BXetndL6dfZVT%2FsuiCM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTkyMmEyNTEtZTRjZi00NzAwLTlkZmYtMzIyZjY0YTdkYjE0X3NsaWRlXzY1MF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9da34152-8bac-424b-8059-fd12b0db3df5_slide_650_right.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=wuVpaG64yTw2Py8jo5zJuNiBzI7ppYckxnHy1Uuyp3M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWRhMzQxNTItOGJhYy00MjRiLTgwNTktZmQxMmIwZGIzZGY1X3NsaWRlXzY1MF9yaWdodC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/76514408-0465-49de-b514-42b8f4e94b3b_262_28_920_details_low.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=3uOQISsfFwE9L7Gxgp1OtawiCMzP3mRJAlYBhGgLwyU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzY1MTQ0MDgtMDQ2NS00OWRlLWI1MTQtNDJiOGY0ZTk0YjNiXzI2Ml8yOF85MjBfZGV0YWlsc19sb3cub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/56ec455a-b3f1-4db1-badc-fb720ef93070_262_24_751_details_low.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=fbZ6t2sFPqk7a2g8rZG5SKpYJohA2qssxgnp7i%2FrfAg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTZlYzQ1NWEtYjNmMS00ZGIxLWJhZGMtZmI3MjBlZjkzMDcwXzI2Ml8yNF83NTFfZGV0YWlsc19sb3cub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bf96292d-0374-4505-b4ad-a9fb6ef1416c_262_26_533_details_low.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=a%2Fr%2FhA6KhJVcFMEF1CD1WjeJ4ooGdszYWM85y04V%2FSA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmY5NjI5MmQtMDM3NC00NTA1LWI0YWQtYTlmYjZlZjE0MTZjXzI2Ml8yNl81MzNfZGV0YWlsc19sb3cub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d16394bf-5a4e-42c6-b141-b90ca910d303_connector.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=yPjHYpS%2FN7l9uSOS3PFP7okSO4D1tsH6%2FFIYwQD1CVo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDE2Mzk0YmYtNWE0ZS00MmM2LWIxNDEtYjkwY2E5MTBkMzAzX2Nvbm5lY3Rvci5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8d548ec6-c98d-4e6b-8b9c-299830cc4fa6_mech_480_610.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=xsBuipoMsWpYmPLVapgAvXgL4FeofKhYQM2kXleCj8k%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGQ1NDhlYzYtYzk4ZC00ZTZiLThiOWMtMjk5ODMwY2M0ZmE2X21lY2hfNDgwXzYxMC5vYmo=',
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
      "attachmentId": "bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTQzMjRhMGUtODZkNy00YmQ1LWEwNzYtZGY4ZDc5M2Q3YzhkX2RhdGEuYmlu"
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/92223c78-5b6d-4573-bacf-23167529999b_aventos_hf_arm_480.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=CIfR9X219xlGo199QD6B%2BrrNJCFjHyUZNpgHWZzRs%2Fc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTIyMjNjNzgtNWI2ZC00NTczLWJhY2YtMjMxNjc1Mjk5OTliX2F2ZW50b3NfaGZfYXJtXzQ4MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b39d9cb1-929a-4802-9c18-9847d815ecdd_aventos_hf_arm_600.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=VewlACxpKyM%2BFw%2B3ZjQisOwUU5VpjL8Y%2BC7sfjTHqxI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjM5ZDljYjEtOTI5YS00ODAyLTljMTgtOTg0N2Q4MTVlY2RkX2F2ZW50b3NfaGZfYXJtXzYwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f600c709-506c-41bc-8a2e-153f767d3a3f_aventos_hf_arm_840.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=%2Fv0YJ6kYWU7MyMLoBLb8W8SN64p2YomiLzVaODfRtsg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjYwMGM3MDktNTA2Yy00MWJjLThhMmUtMTUzZjc2N2QzYTNmX2F2ZW50b3NfaGZfYXJtXzg0MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/46536603-54ba-44d0-bfde-ea9c46f4f4e5_aventos_psl.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=kYXO65anv5ta5G6riS8du2RAbmzLXoyDL7pd4VQ5dmA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDY1MzY2MDMtNTRiYS00NGQwLWJmZGUtZWE5YzQ2ZjRmNGU1X2F2ZW50b3NfcHNsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/14abd29e-e596-44e6-b825-e1c3f06ad8f4_aventos_psr.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=dcjKILPG32OROZsdxY%2FkjUNl9xjf9mhtPANzl62uL8Q%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTRhYmQyOWUtZTU5Ni00NGU2LWI4MjUtZTFjM2YwNmFkOGY0X2F2ZW50b3NfcHNyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/41566bd9-420f-41a0-bd42-dc0ee7829f90_aventos_hk_connector.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=j45QBoL0UbbOaf0tGrI53xleqZcgkM%2FYlTB%2BzIIXJ8k%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDE1NjZiZDktNDIwZi00MWEwLWJkNDItZGMwZWU3ODI5ZjkwX2F2ZW50b3NfaGtfY29ubmVjdG9yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/acb6cac6-25cb-4c61-b06a-5f7e2896b4d9_aventos_hk_l.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=sw4NT%2BFmf4VA0djHHEoGRCCFQzaI1vsEYoXmaIupVZw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWNiNmNhYzYtMjVjYi00YzYxLWIwNmEtNWY3ZTI4OTZiNGQ5X2F2ZW50b3NfaGtfbC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e738cc7b-46af-40fc-9c3a-cb14b98764e4_aventos_hk_r.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=amBj09VGOszOH%2BIMNYjgfMFADWEDxEmOdOD%2Bq6aUwUQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTczOGNjN2ItNDZhZi00MGZjLTljM2EtY2IxNGI5ODc2NGU0X2F2ZW50b3NfaGtfci5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/144190e3-9511-4273-9de5-28e1e8a1e13d_hkxs_cl.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=IkUYx2I7lXOIBeG12TxQ4S3s4%2FmEDfwCVemdSpzYZ1Q%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTQ0MTkwZTMtOTUxMS00MjczLTlkZTUtMjhlMWU4YTFlMTNkX2hreHNfY2wub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9d7a6ba9-cdd7-48a0-bae4-34be22775979_hkxs_cr.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=CA%2FNMMSsgxvnCRn6W%2FVWcbEx7zDPYMnIxEB2vP1MXWk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWQ3YTZiYTktY2RkNy00OGEwLWJhZTQtMzRiZTIyNzc1OTc5X2hreHNfY3Iub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dd5fa04f-e982-4775-9e41-f3c29a307451_hkxs_connector.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=tDrGE6z5Bh5ng71gUQNCRj4QgtVg%2FxHxzxnNprV9IvI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGQ1ZmEwNGYtZTk4Mi00Nzc1LTllNDEtZjNjMjlhMzA3NDUxX2hreHNfY29ubmVjdG9yLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d2a05661-7bb3-46f9-aba7-e466878fd9cb_hkxs_mech.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=cg1luTXy1Ku2LBiT1cai51Y0olpmJL4wE3rdn5c%2FnUs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDJhMDU2NjEtN2JiMy00NmY5LWFiYTctZTQ2Njg3OGZkOWNiX2hreHNfbWVjaC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7b3c9518-4f27-47a8-9c24-728758a491ee_aventos_hl_mech1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=UWGWuxgJnDi%2FABwiQ2eFE8HiYST5f6BeRtOVkvjg1XI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2IzYzk1MTgtNGYyNy00N2E4LTljMjQtNzI4NzU4YTQ5MWVlX2F2ZW50b3NfaGxfbWVjaDEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/26a87f9e-cbc1-4e12-869d-31a3a19b455f_aventos_hl_mech2.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=SO5Y042vww3p%2Fwxukk4ShzKPGRPZiYgAzERN9Pup%2BOc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjZhODdmOWUtY2JjMS00ZTEyLTg2OWQtMzFhM2ExOWI0NTVmX2F2ZW50b3NfaGxfbWVjaDIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/38ff35da-ad07-4178-bedf-24fdd00ddd5e_aventos_hl_mech3.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=CXZ4osiGQvQEt0RP8B1L3n%2BfPiXDJqF8AQ81SlebII0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzhmZjM1ZGEtYWQwNy00MTc4LWJlZGYtMjRmZGQwMGRkZDVlX2F2ZW50b3NfaGxfbWVjaDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/126a557a-baca-49ce-87f7-c68f13ca07da_aventos_hl_mech4.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=ZpzRimZrWe8XgE1ZRRd765Lef7RsB2p%2FbqOf3iWHMJc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTI2YTU1N2EtYmFjYS00OWNlLTg3ZjctYzY4ZjEzY2EwN2RhX2F2ZW50b3NfaGxfbWVjaDQub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bd7bd1f6-1b5e-43da-813b-3cf1f95a2c29_aventos_hl_psl.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=S4tCcqsFloTs6UzlOkcX%2FNgbp%2FygRaFGtaOZI5BnZRc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmQ3YmQxZjYtMWI1ZS00M2RhLTgxM2ItM2NmMWY5NWEyYzI5X2F2ZW50b3NfaGxfcHNsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/646a38ed-8a5c-4d1c-acb0-7325d7388b43_aventos_hl_psr.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Ph4%2BS0QpcBAIOnUG5SiAXGLM%2Bn1D81rdI3ScknrEhSw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjQ2YTM4ZWQtOGE1Yy00ZDFjLWFjYjAtNzMyNWQ3Mzg4YjQzX2F2ZW50b3NfaGxfcHNyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bd4ea9a2-7a60-41b4-915f-b395d6de7e6b_aventos_hs_psl.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=jL1wQ9hdoeRgsA%2FWpGqk6FlYneV2IY7YZga7iUcR5yI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmQ0ZWE5YTItN2E2MC00MWI0LTkxNWYtYjM5NWQ2ZGU3ZTZiX2F2ZW50b3NfaHNfcHNsLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/69462de6-360f-4a6d-896b-7496fcb14ff8_aventos_hs_psr.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=BSKLtrKpYSHNbYPvcevaJ5r0WSx1Q8y98J4%2FCkHhgg4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjk0NjJkZTYtMzYwZi00YTZkLTg5NmItNzQ5NmZjYjE0ZmY4X2F2ZW50b3NfaHNfcHNyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/89a88529-ace9-473c-8479-584a2c71d5b8_legra_bottofrontcon.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=kpfiOQVRN%2Fp5QRpd1%2FHh3qp5MaEUg8SJ09fXi5cNktM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODlhODg1MjktYWNlOS00NzNjLTg0NzktNTg0YTJjNzFkNWI4X2xlZ3JhX2JvdHRvZnJvbnRjb24ub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5fa058d7-bbb8-4b17-80bb-9d9753be073c_adapterhousinglongblack_356_04_362.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=mgoPaxWKub5pfx97UxK%2FCdDe%2BuWGPq%2B2B6xKjCHPGpA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWZhMDU4ZDctYmJiOC00YjE3LTgwYmItOWQ5NzUzYmUwNzNjX2FkYXB0ZXJob3VzaW5nbG9uZ2JsYWNrXzM1Nl8wNF8zNjIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d74d7aa8-798c-4d4c-a273-d586669c4960_adapterhousingshortblack_356_04_363.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=oGG63sKjPaFvEdiNaiQKPTc5lk5JpWcnHxq49jkWr9A%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDc0ZDdhYTgtNzk4Yy00ZDRjLWEyNzMtZDU4NjY2OWM0OTYwX2FkYXB0ZXJob3VzaW5nc2hvcnRibGFja18zNTZfMDRfMzYzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a8c68c97-9628-47a8-8329-fb789349787d_bracket%20-%20260_28_004.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=0TiiH1XsW12XJQCOqzbFHt88gTwuyTYvtkU0wrS5kz4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYThjNjhjOTctOTYyOC00N2E4LTgzMjktZmI3ODkzNDk3ODdkX2JyYWNrZXQgLSAyNjBfMjhfMDA0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7f4fdddb-5b57-4031-b69c-b277c2c30e70_155_01_251_2.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=qZy782YtzCqSd7m4DQfbeQAnUZoHdTEUS2o%2BmmrJSqE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2Y0ZmRkZGItNWI1Ny00MDMxLWI2OWMtYjI3N2MyYzMwZTcwXzE1NV8wMV8yNTFfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/34818add-50ed-41ad-bb16-b855e0468519_155_01_252_3.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=gsEMBJofwc4SE9XodCp4uWuFoGa7LISl7JA%2BXfJmhHs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzQ4MThhZGQtNTBlZC00MWFkLWJiMTYtYjg1NWUwNDY4NTE5XzE1NV8wMV8yNTJfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/559b995a-85ac-4119-aeff-06e91d3c3d8d_155_01_253_4.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=O9%2FFVY1URtIf%2FJhvJSLR1tYsqmRI1nMcsBTvK4H7XSI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTU5Yjk5NWEtODVhYy00MTE5LWFlZmYtMDZlOTFkM2MzZDhkXzE1NV8wMV8yNTNfNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/94a3f8ce-2a3c-4324-af95-fe3c4c169033_155_01_254_5.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=nZ9OlU%2BorD3bEotrmvjzmPWsJjXq8xqlgR9oCIDwLJ4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTRhM2Y4Y2UtMmEzYy00MzI0LWFmOTUtZmUzYzRjMTY5MDMzXzE1NV8wMV8yNTRfNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/03f5351c-4b55-4197-8f48-aecb9c525181_155_01_255_6.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=IWBj6Suv%2FAiTt8usVNq%2F37%2FF82TK6ZcaN6fPxp5oq%2B8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDNmNTM1MWMtNGI1NS00MTk3LThmNDgtYWVjYjljNTI1MTgxXzE1NV8wMV8yNTVfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/184d9d1f-4e16-4487-9d08-c6afdfcfb703_155_01_256_7.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=vtSVb6PylsKGXUYIQ7%2FHKxdnoGJei%2BWC9FP%2FBhoOWZ0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTg0ZDlkMWYtNGUxNi00NDg3LTlkMDgtYzZhZmRmY2ZiNzAzXzE1NV8wMV8yNTZfNy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c50052e4-27a6-4a30-b5c2-6269e9d2b589_155_01_257_8.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=b8mVIKE2n%2BcvYXeEQYK2iEO2WZn2FmpqJV9in%2BlT%2FCM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzUwMDUyZTQtMjdhNi00YTMwLWI1YzItNjI2OWU5ZDJiNTg5XzE1NV8wMV8yNTdfOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9e3238b6-9ee6-4678-ab83-01bae1e98f99_155_01_258_9.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=JKL4lxqj32pDFuMd1wP6EC%2BxrE1jvL8Wo3OfggigOxM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWUzMjM4YjYtOWVlNi00Njc4LWFiODMtMDFiYWUxZTk4Zjk5XzE1NV8wMV8yNThfOS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/de0b184f-a89f-473b-82cb-681baedc6541_155_01_259_10.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=%2FW7SkeyWbG138OjN8rxPSFyvVPsE39NTrIK3huUuERY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGUwYjE4NGYtYTg5Zi00NzNiLTgyY2ItNjgxYmFlZGM2NTQxXzE1NV8wMV8yNTlfMTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/57a6aecc-83a0-422a-8fe0-5faa77976188_155_01_260_11.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=SRawvcRYIoWPRvUcXJH6WTnqEsvvCJbWL4OxNmk9UZE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTdhNmFlY2MtODNhMC00MjJhLThmZTAtNWZhYTc3OTc2MTg4XzE1NV8wMV8yNjBfMTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a87da037-a7a0-41ff-92e1-2eb2b52c4984_155_01_261_12.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=UTog2xhfkMIHVT6cIjufAVQzVLFsVjgH2DCxYNaTx6E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTg3ZGEwMzctYTdhMC00MWZmLTkyZTEtMmViMmI1MmM0OTg0XzE1NV8wMV8yNjFfMTIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/70b8d3dd-8d51-4a66-9387-bd6195dfedf7_155_01_250_1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=CgJ%2FZA%2FwEzkCb2iMO7xFbER1qIqpTtcLPpvD4Iwjms0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzBiOGQzZGQtOGQ1MS00YTY2LTkzODctYmQ2MTk1ZGZlZGY3XzE1NV8wMV8yNTBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c59e5722-6ad8-4c23-80dd-dc9694228c24_155_01_262_13.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=lUEKU3hFmecw99K%2BmrEyfdyGk%2F1rMeg3JYsgw3XnaOE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzU5ZTU3MjItNmFkOC00YzIzLTgwZGQtZGM5Njk0MjI4YzI0XzE1NV8wMV8yNjJfMTMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/56891ebb-18f8-4367-8139-f1bef4553c6d_support2.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=OASfRFWIY3xXrcV%2BUb0x5X30BhNrkxmqCt7A4hsTJQU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTY4OTFlYmItMThmOC00MzY3LTgxMzktZjFiZWY0NTUzYzZkX3N1cHBvcnQyLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a66f37c8-724d-4893-9aa9-8fd34985eebc_support1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=M%2FN%2Fasrg6XjRBaPRwv6lZdGOoIzgAACCcC00r6phYqM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTY2ZjM3YzgtNzI0ZC00ODkzLTlhYTktOGZkMzQ5ODVlZWJjX3N1cHBvcnQxLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/506ecbb3-f1d6-446d-9cdd-4db314d57830_cover%20cap%20right%20-%20290_40_701.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=SN%2FQE0bkuT8%2BYkoNfR%2FuW70f6RZvg0qtI8jT6ADDNCA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTA2ZWNiYjMtZjFkNi00NDZkLTljZGQtNGRiMzE0ZDU3ODMwX2NvdmVyIGNhcCByaWdodCAtIDI5MF80MF83MDEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/295acc2c-2b3b-4f4d-b56f-fb7b9c37bcbe_cover%20cap%20left%20-%20290_40_702.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=uYg9zr53WZ1pT%2BRhKqsM74e%2BDKFAMbSthYtt7s1EeiY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjk1YWNjMmMtMmIzYi00ZjRkLWI1NmYtZmI3YjljMzdiY2JlX2NvdmVyIGNhcCBsZWZ0IC0gMjkwXzQwXzcwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/64bba922-a12a-49be-82f8-ecd12f2214cf_model3ddesignlegrectangular001h100.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=VWJFi0iMEhEp6OKbJATCuJhiM5LnVtVdC1XARfL628o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjRiYmE5MjItYTEyYS00OWJlLTgyZjgtZWNkMTJmMjIxNGNmX21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgxMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8e54269b-3ba5-40dc-9aa8-648d2ae7abd2_model3ddesignlegrectangular001h150.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=cERkxz1OEXsjgFoCCvfRun5JLfuBHP74r%2Fu%2BXyo6kxQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGU1NDI2OWItM2JhNS00MGRjLTlhYTgtNjQ4ZDJhZTdhYmQyX21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgxNTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/be7967b6-62ff-4730-a959-39ae920a6cd8_model3ddesignlegrectangular001h200.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=eGcwpSonE%2B14KXJjjBvLk9ij8SD58ZCg7NRF8mZkwmk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmU3OTY3YjYtNjJmZi00NzMwLWE5NTktMzlhZTkyMGE2Y2Q4X21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgyMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/98299312-b113-46d2-a86b-ca47694bc5d4_model3ddesignlegrectangular001h50.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=1u6ZbO0uTwWYRVVt3tInm5BKThV0za50bH4mu3cUTtE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTgyOTkzMTItYjExMy00NmQyLWE4NmItY2E0NzY5NGJjNWQ0X21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWg1MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2e5b6da0-0176-4e6d-9c43-568721b1ed5c_model3ddesignlegrectangular001h80.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=ZatGPfwjMwUxaaqQCtIpnLuep2H7s4Kp9ttIgSgbtWE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmU1YjZkYTAtMDE3Ni00ZTZkLTljNDMtNTY4NzIxYjFlZDVjX21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWg4MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/66e55b0c-9868-40c1-ae5a-c3e1d962cfd8_634_48_050_6.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=ozQJJOYDmE8dDZ6SqSeDfhDjmSfSwUPmJ2MkD9T%2Fv6w%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjZlNTViMGMtOTg2OC00MGMxLWFlNWEtYzNlMWQ5NjJjZmQ4XzYzNF80OF8wNTBfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/91ac37d0-b24e-4730-a9f1-1f9dd72e280e_glueduststrip.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=PGZyOyqCOYACyqEOX2OhbdYFZCHbO9%2FV0xICW1PMoSk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTFhYzM3ZDAtYjI0ZS00NzMwLWE5ZjEtMWY5ZGQ3MmUyODBlX2dsdWVkdXN0c3RyaXAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6fa1ce9e-e198-4988-a357-80a673c0f50f_106_69_321_2.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=xuz6zuH9aClgeCk9I1lEh%2FHxhyHVYkFnCk7Dyxnvg8A%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmZhMWNlOWUtZTE5OC00OTg4LWEzNTctODBhNjczYzBmNTBmXzEwNl82OV8zMjFfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c67fc32a-a253-4e0d-acd9-539ab97b79e7_106_69_322_3.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=ZUMQnxbSJrnfUihN9kezGfyV6HMFbdLF%2Bzoi1SIhjbk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzY3ZmMzMmEtYTI1My00ZTBkLWFjZDktNTM5YWI5N2I3OWU3XzEwNl82OV8zMjJfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e5478695-6e02-4edc-9ff9-166b56acf54d_106_69_320_1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=9MPbOb95zkiyw9%2FGlXQxDY0KOT%2FSmISjOBRYFCgFGT8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTU0Nzg2OTUtNmUwMi00ZWRjLTlmZjktMTY2YjU2YWNmNTRkXzEwNl82OV8zMjBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/01964128-abff-48cd-9bea-430366e10884_117_66_101_19.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=bC%2F21jPhpMnE7Y2Rd8bXj%2FvGUn4edj%2BAkNnwsNCdGy4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDE5NjQxMjgtYWJmZi00OGNkLTliZWEtNDMwMzY2ZTEwODg0XzExN182Nl8xMDFfMTkub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e356f0f5-2d38-41a7-a8c9-03d598af07f7_117_66_102_20.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=YyDbqFv7JSQBJGAYjQ%2Br1YZXjKzXg0RSMOH9pmfAKQs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTM1NmYwZjUtMmQzOC00MWE3LWE4YzktMDNkNTk4YWYwN2Y3XzExN182Nl8xMDJfMjAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6063c25e-ef98-4433-a1f3-de8442f883ab_117_66_103_21.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=FXRbfncYmQwjJ2QnZd%2Bmowr%2F1QpmvYyi8gOxXZOhKds%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjA2M2MyNWUtZWY5OC00NDMzLWExZjMtZGU4NDQyZjg4M2FiXzExN182Nl8xMDNfMjEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ac0723a6-e362-4542-b7b4-dd5592364e45_117_66_026_2.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=fgopjvEBlWyBYdqwZB1qC%2B%2BFYth1IwExKm3fIRcPKdA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWMwNzIzYTYtZTM2Mi00NTQyLWI3YjQtZGQ1NTkyMzY0ZTQ1XzExN182Nl8wMjZfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8991bf49-206e-4138-87ec-0efd318cdc93_117_66_104_22.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=zVnH6jPP%2BH84sHmObPb%2BVf7wZ%2Fy7N%2FDcbUT0vA%2FxGSM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODk5MWJmNDktMjA2ZS00MTM4LTg3ZWMtMGVmZDMxOGNkYzkzXzExN182Nl8xMDRfMjIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/85ea0439-9c93-4a84-a6ce-05d013ec9b46_117_66_106_23.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=5ebYFuJTHiMFmKHJxI3t2OPV71iFT0Nv0gIE0DY6bmA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODVlYTA0MzktOWM5My00YTg0LWE2Y2UtMDVkMDEzZWM5YjQ2XzExN182Nl8xMDZfMjMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/97bad642-7661-4a7c-82fc-e4e9fa24aa33_117_66_107_24.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=hvDz2bLpWKV%2F0fxsfG44rlpDMvUHCwwc9gIQv2B9i4c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTdiYWQ2NDItNzY2MS00YTdjLTgyZmMtZTRlOWZhMjRhYTMzXzExN182Nl8xMDdfMjQub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/90616b53-178b-4aef-ae8e-ad9a55d491eb_117_66_035_3.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=JCuzgg6vQCBzxIyw7NTQmehO5ToXa1kqFxgbezoB5CQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTA2MTZiNTMtMTc4Yi00YWVmLWFlOGUtYWQ5YTU1ZDQ5MWViXzExN182Nl8wMzVfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a2bf762d-ec77-4b8c-ac33-967d67b2d53d_117_66_108_25.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=jq%2B%2BcTVg7RCcEJL9xFwm4B8E8e%2F3iN0QpHTvrYK7LYI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTJiZjc2MmQtZWM3Ny00YjhjLWFjMzMtOTY3ZDY3YjJkNTNkXzExN182Nl8xMDhfMjUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3d3963b6-489f-4e8a-8e66-4d69687b99cb_117_66_109_26.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=kbnIvhwW4IIYD1YHc5FdaU7uqa1gglv%2FUm5J6dyeGSY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2QzOTYzYjYtNDg5Zi00ZThhLThlNjYtNGQ2OTY4N2I5OWNiXzExN182Nl8xMDlfMjYub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/171703e8-9640-4076-afcc-5ca3185b899c_117_66_045_5.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=4sda2ALHfapO5FlWuEflMwlg3NKM%2BvLRvaZZl0v%2FlZE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTcxNzAzZTgtOTY0MC00MDc2LWFmY2MtNWNhMzE4NWI4OTljXzExN182Nl8wNDVfNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c9ab3f6c-076e-4eab-bbee-05c83dfb3a96_117_66_050_6.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=d6JOzeOvVF1UemA2NFdQbs%2FBLk5qTPKCerPr8gNiSEU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzlhYjNmNmMtMDc2ZS00ZWFiLWJiZWUtMDVjODNkZmIzYTk2XzExN182Nl8wNTBfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e734c0ff-099d-4824-92d5-4701046ce603_117_66_055_8.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=rRD1K6Zo0gjGrDfyrHHF9tSnG6niro5qIzH7jWWniK4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTczNGMwZmYtMDk5ZC00ODI0LTkyZDUtNDcwMTA0NmNlNjAzXzExN182Nl8wNTVfOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a4bf9332-98fc-4d53-ba24-348189d5632b_117_66_064_10.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=BhSnmqHG1gwKy86Z36yRvOC1LtZJKogIZ2PdmAv8nBQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTRiZjkzMzItOThmYy00ZDUzLWJhMjQtMzQ4MTg5ZDU2MzJiXzExN182Nl8wNjRfMTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/eb55fec3-b587-4812-afed-f791ea3475e9_117_66_065_11.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=vABF0T8ATNbnB2nBlSyAc4X7GgyEAIU9YyTL2FMrMgI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWI1NWZlYzMtYjU4Ny00ODEyLWFmZWQtZjc5MWVhMzQ3NWU5XzExN182Nl8wNjVfMTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/42384b07-f203-4b66-9247-5dfb083060fc_117_66_075_13.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=CSWJLqaQWcNY13CaiocAhpu%2Fwr61IdioGUrUNMezn7c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDIzODRiMDctZjIwMy00YjY2LTkyNDctNWRmYjA4MzA2MGZjXzExN182Nl8wNzVfMTMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/befe38af-ca98-4c4a-8581-51401345cbad_117_66_080_14.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=nu5w2%2Fl1ad8NRoE1QRRiNOfg8gwtT7SSZX27dQuq1Qs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmVmZTM4YWYtY2E5OC00YzRhLTg1ODEtNTE0MDEzNDVjYmFkXzExN182Nl8wODBfMTQub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/eef3196d-bb87-4710-bffe-45419fc99fa7_117_66_085_15.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=0OcnS57s2SaRcHaUvoNXp7i8NQB2JhJt45RWPrT77nE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWVmMzE5NmQtYmI4Ny00NzEwLWJmZmUtNDU0MTlmYzk5ZmE3XzExN182Nl8wODVfMTUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2de7fbad-00ed-4740-bbfa-c666723f5567_117_66_090_16.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=mmks7gfYgsfDcu3QDsJ9yF7riBuq8Rs5vzU89BwBWl0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmRlN2ZiYWQtMDBlZC00NzQwLWJiZmEtYzY2NjcyM2Y1NTY3XzExN182Nl8wOTBfMTYub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fb2458c4-9b5c-4933-917e-4af9ceae2dbc_117_66_095_17.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=sUm5cVIeFn9b8JzQIrKHOIjC4T5DW%2BQREEQB6jolpTs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmIyNDU4YzQtOWI1Yy00OTMzLTkxN2UtNGFmOWNlYWUyZGJjXzExN182Nl8wOTVfMTcub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e74f48f3-d74d-499a-a0ce-8bd71eb1df24_117_66_017_1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Y33rlUZ2E33%2FbZBTSVpYlgvW6Li7RGZwVegpy825Jhs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTc0ZjQ4ZjMtZDc0ZC00OTlhLWEwY2UtOGJkNzFlYjFkZjI0XzExN182Nl8wMTdfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/367fe884-56e2-4bce-b8e2-d8bbf042db39_117_66_100_18.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=t0X0nH73KH6yQrpO6n5si5t0%2FU5sAXCa5yHo%2FyykpO4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzY3ZmU4ODQtNTZlMi00YmNlLWI4ZTItZDhiYmYwNDJkYjM5XzExN182Nl8xMDBfMTgub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e55f4d23-7205-4878-8d02-4356f5d26b75_mod3d_120.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=4P3M8JXAXVFV5N3KBpkINBMLdT7%2Fq%2F25Hrx6C%2F4bRQ4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTU1ZjRkMjMtNzIwNS00ODc4LThkMDItNDM1NmY1ZDI2Yjc1X21vZDNkXzEyMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/db69bd0e-e309-419d-b5c7-52be60c96bc2_110_35_393_1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Vi4%2BIOB8feczxiDacrR6%2Bb5J%2FH%2FG6QyLwosyr2CMyR0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGI2OWJkMGUtZTMwOS00MTlkLWI1YzctNTJiZTYwYzk2YmMyXzExMF8zNV8zOTNfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/24f02da1-1381-4c13-99ad-b09850daa7e1_155_01_381_2.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=SwiA4z6ZrCX01ObuBI9EubSdr6JBK4BSUnyK0u0OPpY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjRmMDJkYTEtMTM4MS00YzEzLTk5YWQtYjA5ODUwZGFhN2UxXzE1NV8wMV8zODFfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0dd4d4c2-fecd-44d7-976c-d5d7ab2c43ff_155_01_382_3.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=hWlf77vhHsX8bob5bwheeQIXP2gWKWe%2BC6IEwVyG8y8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGRkNGQ0YzItZmVjZC00NGQ3LTk3NmMtZDVkN2FiMmM0M2ZmXzE1NV8wMV8zODJfMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/080fe660-11f8-4f16-aebb-abef4bd6b540_155_01_383_4.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=KaOaFwC5AdPXr9W3ONKcApTrMulm9rdJQhko4leUCQw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDgwZmU2NjAtMTFmOC00ZjE2LWFlYmItYWJlZjRiZDZiNTQwXzE1NV8wMV8zODNfNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d4476768-71c9-4f49-a50e-5f6d01f94982_155_01_384_5.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=KfdMWsKWeA3H23sc%2BT9bzL%2BG%2FUby2LtK%2FwLw5v7e0Io%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDQ0NzY3NjgtNzFjOS00ZjQ5LWE1MGUtNWY2ZDAxZjk0OTgyXzE1NV8wMV8zODRfNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0618e41f-8623-4384-8596-37ef042888c4_155_01_385_6.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=oknUM0B%2FoL2wyGAVZBqlyivAU57DKMJktNzcbcxGslg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDYxOGU0MWYtODYyMy00Mzg0LTg1OTYtMzdlZjA0Mjg4OGM0XzE1NV8wMV8zODVfNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b9a07800-41c6-43c4-8304-63efe0173927_155_01_386_7.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=SQ0lSPYBCrF83RrpYzFfkwBAKvs7anwiLqfQLGJhotc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjlhMDc4MDAtNDFjNi00M2M0LTgzMDQtNjNlZmUwMTczOTI3XzE1NV8wMV8zODZfNy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8478f1e0-b317-47bf-8a48-b201fea600c9_155_01_387_8.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=sc4aHavGEcldCVVwkBwA7tC7PnWi1ZKqd8VJRwUGYGA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODQ3OGYxZTAtYjMxNy00N2JmLThhNDgtYjIwMWZlYTYwMGM5XzE1NV8wMV8zODdfOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bab85f96-5c82-4f2c-9475-7aa8fcb8ca56_155_01_388_9.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=15csKbHJvXnfcRdaP27E8RHXYsW0GOcXbniClKRSOPo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmFiODVmOTYtNWM4Mi00ZjJjLTk0NzUtN2FhOGZjYjhjYTU2XzE1NV8wMV8zODhfOS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/066b70f6-2921-4a8d-abc1-14f6695400cd_155_01_389_10.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=R0CzKQ8btR94s8a9C9JwvLZ1XKdp5i%2Fmjv6MZ1zHkIk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDY2YjcwZjYtMjkyMS00YThkLWFiYzEtMTRmNjY5NTQwMGNkXzE1NV8wMV8zODlfMTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9753d796-1c0c-4125-aa9f-e7759a6ccad1_155_01_390_11.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=dMJrkPsgJBoLjOYFwOxVQhKdvG4WTs9%2Fq45K7wLRWsA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTc1M2Q3OTYtMWMwYy00MTI1LWFhOWYtZTc3NTlhNmNjYWQxXzE1NV8wMV8zOTBfMTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/69a08fb6-8adc-4643-81c0-4836da371166_155_01_391_12.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=ixbcFe9J78v8EXgx6e2AyWnZvET7FLmvbfy3ijDicvk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjlhMDhmYjYtOGFkYy00NjQzLTgxYzAtNDgzNmRhMzcxMTY2XzE1NV8wMV8zOTFfMTIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c8d038d7-ac10-407f-92f8-7d156d1890cb_155_01_380_1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=JQlFd4VtbwtT6mLgoqW6EoepU9oVCPkVI0zrfPe8Z0w%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzhkMDM4ZDctYWMxMC00MDdmLTkyZjgtN2QxNTZkMTg5MGNiXzE1NV8wMV8zODBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/98709201-983c-4cce-8104-70c071388b83_106_62_425_1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=hVafu52tDIfklRREoiOATrFYPH98fQAazQcfpsecpzU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTg3MDkyMDEtOTgzYy00Y2NlLTgxMDQtNzBjMDcxMzg4YjgzXzEwNl82Ml80MjVfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/248b8aa0-5468-4423-8a8b-ad405c7ee07a_106_62_426_2.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=WY3KMtx71erquSLPB2utK1tbuK7cYAG9ENzpPOfKJ3o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjQ4YjhhYTAtNTQ2OC00NDIzLThhOGItYWQ0MDVjN2VlMDdhXzEwNl82Ml80MjZfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3616e1a0-ab6a-46e6-afb0-b54117a850e7_106_61_214_1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=%2BL5DxsJlwKaMbV2ef1NWVoqGgv609ch%2FcfOC6HFQxNA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzYxNmUxYTAtYWI2YS00NmU2LWFmYjAtYjU0MTE3YTg1MGU3XzEwNl82MV8yMTRfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/00b2702d-177e-47ca-b254-7d8eacd3fddb_106_61_217_2.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=%2F2diyHixvQeHQGTI2Pr8MSQm9k4LCgllu396BJJNhsk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDBiMjcwMmQtMTc3ZS00N2NhLWIyNTQtN2Q4ZWFjZDNmZGRiXzEwNl82MV8yMTdfMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e9096a02-80d7-4f96-9376-f5ed15b70403_hanger%20left%20-%20290_02_702.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=E8uxRtbnVlNPlSHw9s486FCeDgXRe178DWoiUP9BctU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTkwOTZhMDItODBkNy00Zjk2LTkzNzYtZjVlZDE1YjcwNDAzX2hhbmdlciBsZWZ0IC0gMjkwXzAyXzcwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/57be0c73-06ca-4a66-a754-41dca61f048a_hanger%20right%20-%20290_02_703.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=ESRcZ5eiTtDFAuW1egPuYMKdM3jkiLjrN%2BwVRTnD%2Ffg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTdiZTBjNzMtMDZjYS00YTY2LWE3NTQtNDFkY2E2MWYwNDhhX2hhbmdlciByaWdodCAtIDI5MF8wMl83MDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8fc80198-243e-467f-adb5-6c2285d23b42_hanger%20left%20-%20290_02_710.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=F5Fuyoo3bpEDgpM%2Fj8EcK9jULyDpYQTuFfjo8CkSNp8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGZjODAxOTgtMjQzZS00NjdmLWFkYjUtNmMyMjg1ZDIzYjQyX2hhbmdlciBsZWZ0IC0gMjkwXzAyXzcxMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8d2f7ab3-b9e9-4c24-ab71-9b42bc7f2d3c_hanger%20right%20-%20290_02_711.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=GJptwNhTdPlbYBFJGEAMeK%2BmpVxMDwb0%2BJyZJBYxkUk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGQyZjdhYjMtYjllOS00YzI0LWFiNzEtOWI0MmJjN2YyZDNjX2hhbmdlciByaWdodCAtIDI5MF8wMl83MTEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f97e46d6-9253-4fc7-a5d9-e4bd8b98c029_hanger%20right%20-%20290_03_937.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=HrGtETwNqzwAz2ghgKXjCv4Zcj6Nx7aB23u4UbwaCXQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjk3ZTQ2ZDYtOTI1My00ZmM3LWE1ZDktZTRiZDhiOThjMDI5X2hhbmdlciByaWdodCAtIDI5MF8wM185Mzcub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d0a088a4-768b-4be2-9935-167f7661f116_hanger%20left%20-%20290_03_938.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=US0RQVrQuxhYRUQa%2FD%2Fam5bzJLcrOASu1G9LcsIDwzg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDBhMDg4YTQtNzY4Yi00YmUyLTk5MzUtMTY3Zjc2NjFmMTE2X2hhbmdlciBsZWZ0IC0gMjkwXzAzXzkzOC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/148c2d01-365f-450c-bcc0-134e9b76cc5c_hanger%20right%20-%20290_40_901.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=%2BEfFtpgdbWxyY%2FxEO9ksARhVSvICMUbhfmjLSpUsUY8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTQ4YzJkMDEtMzY1Zi00NTBjLWJjYzAtMTM0ZTliNzZjYzVjX2hhbmdlciByaWdodCAtIDI5MF80MF85MDEub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1d3bb1ab-b107-4aa2-9ad5-8f6bad1be633_hanger%20left%20-%20290_40_902.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=f23QsfikzsodNHCFuDjtwDOPxgRfBZqTHGZDtaZBl0s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWQzYmIxYWItYjEwNy00YWEyLTlhZDUtOGY2YmFkMWJlNjMzX2hhbmdlciBsZWZ0IC0gMjkwXzQwXzkwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0d629006-6f5f-48bf-b504-5e16c7ad0e86_hanger%20right%20-%20290_40_980.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=%2BBIfNMeKECc1d%2F0Ksi5b57Me3UafWqdCA%2F81MqIpr%2BM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGQ2MjkwMDYtNmY1Zi00OGJmLWI1MDQtNWUxNmM3YWQwZTg2X2hhbmdlciByaWdodCAtIDI5MF80MF85ODAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6219be30-1da8-45b7-8681-f63c5d08ef24_hanger%20left%20-%20290_40_981.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=89sN66w4lqDUsuZPolaWRSbNhPmnKLrM8LIptELo25g%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjIxOWJlMzAtMWRhOC00NWI3LTg2ODEtZjYzYzVkMDhlZjI0X2hhbmdlciBsZWZ0IC0gMjkwXzQwXzk4MS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/669e4b3c-aad4-4ab3-a4f3-088c38a0c375_hinge110halfspringss%20-%20329_17_602.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=SwhqZlPvQrER3swo%2FIjlRR8VKAAB1nCLQsSupqFVtfM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjY5ZTRiM2MtYWFkNC00YWIzLWE0ZjMtMDg4YzM4YTBjMzc1X2hpbmdlMTEwaGFsZnNwcmluZ3NzIC0gMzI5XzE3XzYwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8d2f0394-0971-4bb9-9931-2821d6bbd35b_hinge110insetspringss%20-%20329_17_603.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=f7fl7yLqPWHtukaqHBRcgBxWrRAxK4Rn5YW0Oehhq%2BA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGQyZjAzOTQtMDk3MS00YmI5LTk5MzEtMjgyMWQ2YmJkMzViX2hpbmdlMTEwaW5zZXRzcHJpbmdzcyAtIDMyOV8xN182MDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/feb23668-6ed2-45c1-868d-5b502150c992_hinge110overlayspringss%20-%20329_17_600.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=eKjHqFAkXn6PAUruaHFVWMHNF2gMWJLjhubvQa7YJWw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmViMjM2NjgtNmVkMi00NWMxLTg2OGQtNWI1MDIxNTBjOTkyX2hpbmdlMTEwb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzE3XzYwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7d7f8471-a6b7-48b7-8fe8-10dc725b5b35_hinge110softclhalfspringss%20-%20329_15_403.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=IH3IcLuQ4rt4h4gs6ZkNCjEWKvGXKkmJmlXB3UBjLUw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2Q3Zjg0NzEtYTZiNy00OGI3LThmZTgtMTBkYzcyNWI1YjM1X2hpbmdlMTEwc29mdGNsaGFsZnNwcmluZ3NzIC0gMzI5XzE1XzQwMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/53f46fac-f30a-47a1-b585-b0c0a005930f_hinge110softclinsetspringss%20-%20329_15_405.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=NlBm1b40uYuK4be3OIRVXmCQ7yFOWD2ZgFy94kARZz4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTNmNDZmYWMtZjMwYS00N2ExLWI1ODUtYjBjMGEwMDU5MzBmX2hpbmdlMTEwc29mdGNsaW5zZXRzcHJpbmdzcyAtIDMyOV8xNV80MDUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a0b98755-ca42-4a34-8ed1-ea758d059819_hinge110softcloverlayspringss%20-%20329_15_401.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Y2ohKjilx8rDiMa%2FoXZM0nFMolBru%2FhJiYT27liXRMk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTBiOTg3NTUtY2E0Mi00YTM0LThlZDEtZWE3NThkMDU5ODE5X2hpbmdlMTEwc29mdGNsb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzE1XzQwMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/40f14163-7cec-4505-b5a4-2d444f076ff3_hingeflipliftfhftop%20-%20342_81_400.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=8fvPqc6MeDWuCL7bqPScGRIAPnBprQ%2BoW3FE3PTt5LI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDBmMTQxNjMtN2NlYy00NTA1LWI1YTQtMmQ0NDRmMDc2ZmYzX2hpbmdlZmxpcGxpZnRmaGZ0b3AgLSAzNDJfODFfNDAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cf033ed5-76ee-40f3-9b54-cbfae894c742_hinge155softclhalfspringss%20-%20329_29_221.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=TaU1vgUPLBzn3Zod6LjmTJxEzyik4qes4MOFminnBbc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2YwMzNlZDUtNzZlZS00MGYzLTliNTQtY2JmYWU4OTRjNzQyX2hpbmdlMTU1c29mdGNsaGFsZnNwcmluZ3NzIC0gMzI5XzI5XzIyMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fd8d3c4e-f9d6-42a4-a0bf-6d44d8bfa0d2_hinge155softcloverlayspringss%20-%20329_29_217.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=fGFY0zmctttyit3IHrBLNVZOJS4I0EdrG%2BiBuQY8T9I%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmQ4ZDNjNGUtZjlkNi00MmE0LWEwYmYtNmQ0NGQ4YmZhMGQyX2hpbmdlMTU1c29mdGNsb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzI5XzIxNy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cff9d906-8198-4053-8b69-e1f751b5e693_hinge165halfspringss%20-%20329_07_702.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=bNnyQMEgDLHoJhVe%2BW0gbMafVcjDOdGNCDeWkmequrY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2ZmOWQ5MDYtODE5OC00MDUzLThiNjktZTFmNzUxYjVlNjkzX2hpbmdlMTY1aGFsZnNwcmluZ3NzIC0gMzI5XzA3XzcwMi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6d6b511c-4c82-42be-ba85-f7acf6248a30_hinge165insetspringss%20-%20329_07_703.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=oE%2BZKP8McXO8Q2nrjbZUPgPsQp6zC0VNCBbdC3ii9p8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmQ2YjUxMWMtNGM4Mi00MmJlLWJhODUtZjdhY2Y2MjQ4YTMwX2hpbmdlMTY1aW5zZXRzcHJpbmdzcyAtIDMyOV8wN183MDMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8f24d33b-3d2d-4934-883e-59abc21d728c_hinge165overlayspringss%20-%20329_07_700.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=LRHbVnuji4bDPwfX9y9ElkNGOX9f%2Faf8KIx2NiuPH8g%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGYyNGQzM2ItM2QyZC00OTM0LTg4M2UtNTlhYmMyMWQ3MjhjX2hpbmdlMTY1b3ZlcmxheXNwcmluZ3NzIC0gMzI5XzA3XzcwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7a873b43-30e8-4fc4-b445-f562d3713ff4_hinge110blindcornerinset%20-%20329_11_705.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=dgeFTdYePEzecYh2E0ca52Uu6D1UJl1J1Ii9vxYpwd4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2E4NzNiNDMtMzBlOC00ZmM0LWI0NDUtZjU2MmQzNzEzZmY0X2hpbmdlMTEwYmxpbmRjb3JuZXJpbnNldCAtIDMyOV8xMV83MDUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cc93b3d6-1ed0-43bb-ae97-2cf46978782e_hingeforcenterfhf%20-%20372_74_990.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=c0uhwJzelC9m7a62VNKbfnGeh5iV1DeqHPmukspYzbk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2M5M2IzZDYtMWVkMC00M2JiLWFlOTctMmNmNDY5Nzg3ODJlX2hpbmdlZm9yY2VudGVyZmhmIC0gMzcyXzc0Xzk5MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ae5abe1d-6545-4e3c-a766-ddc3f64aeef7_hingeflipliftdf%20-%20342_78_700_1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=9NN16IW%2FViRFMbFNBG1VeCaPfWbGmLO%2FqrEseNo3Km0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWU1YWJlMWQtNjU0NS00ZTNjLWE3NjYtZGRjM2Y2NGFlZWY3X2hpbmdlZmxpcGxpZnRkZiAtIDM0Ml83OF83MDBfMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/28680d97-8c3b-4439-b801-f43f0e3f08ed_keku_front_262_50_359.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=E7jK0XDe6KMhnHF%2FsDe58Y7yUg25562ezjB%2BTiBnwyI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjg2ODBkOTctOGMzYi00NDM5LWI4MDEtZjQzZjBlM2YwOGVkX2tla3VfZnJvbnRfMjYyXzUwXzM1OS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e8f671c4-dda6-46a4-a70e-8ca210b1ef1f_keku_side_262_50_368.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=85Ze%2BDsm021bkK3M0QgPEu%2BkJNhH5FW8wlwBO5YQ5Dc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZThmNjcxYzQtZGRhNi00NmE0LWE3MGUtOGNhMjEwYjFlZjFmX2tla3Vfc2lkZV8yNjJfNTBfMzY4Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bf9c197e-c8c6-486d-ae09-bb821e4303f9_mpcruciforma0ss%20-%20329_80_528.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=PUdPhQK9Qg1p5xe%2Fmj9yv%2FLAR9ERTzJd5G42%2B6leGjU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmY5YzE5N2UtYzhjNi00ODZkLWFlMDktYmI4MjFlNDMwM2Y5X21wY3J1Y2lmb3JtYTBzcyAtIDMyOV84MF81Mjgub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2b73d758-0fec-434e-93e0-9265d8e260af_mpcruciforma3ss%20-%20329_80_555.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=hUa7hzPNw%2Fgb6PTweGubWeVwQ8D8lQSrR7m3hajv1I4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmI3M2Q3NTgtMGZlYy00MzRlLTkzZTAtOTI2NWQ4ZTI2MGFmX21wY3J1Y2lmb3JtYTNzcyAtIDMyOV84MF81NTUub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/51b5091a-9c3f-47dc-b92d-17b1dacfe9d1_mpcruciforma6ss%20-%20329_80_582.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Pc6zWmWE4014GxPN1Ft4jlBwDFgv5OazNTWemnMZ6xA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTFiNTA5MWEtOWMzZi00N2RjLWI5MmQtMTdiMWRhY2ZlOWQxX21wY3J1Y2lmb3JtYTZzcyAtIDMyOV84MF81ODIub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/70d8e67f-e115-43ba-aafc-da7fd53da538_mpcruciformsm0ss%20-%20329_71_500.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=a7dBUiSsdkXd7N9j%2B%2Fq4U%2Bf9%2FAzEAKc4fZBkRU4JhlQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzBkOGU2N2YtZTExNS00M2JhLWFhZmMtZGE3ZmQ1M2RhNTM4X21wY3J1Y2lmb3Jtc20wc3MgLSAzMjlfNzFfNTAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7bc832c2-5087-4efe-add1-86d2342b752e_mpcruciformsm3ss%20-%20329_71_503.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=OIFZmkRX0oSyoWKGxJ9epXZQ2W4Qm3e4GwXLzgj8iYs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2JjODMyYzItNTA4Ny00ZWZlLWFkZDEtODZkMjM0MmI3NTJlX21wY3J1Y2lmb3Jtc20zc3MgLSAzMjlfNzFfNTAzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e4f6ba07-8ef7-4670-b2dc-8c5bf8e75547_mphorizontalsm6ss%20-%20329_67_006.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=W4lfsOz2ThyxZQiQaln%2FQnWs5QZQ1Dr%2B0%2BuY8C%2BgXdQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTRmNmJhMDctOGVmNy00NjcwLWIyZGMtOGM1YmY4ZTc1NTQ3X21waG9yaXpvbnRhbHNtNnNzIC0gMzI5XzY3XzAwNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e3376851-d729-4a08-8e24-4283349072f0_mphorizontal175h3100%20-%20342_22_060.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=qBVD9WoG8vxXp90KNxfH%2FyW%2Bx3Jbts5EGpxEUymYexo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTMzNzY4NTEtZDcyOS00YTA4LThlMjQtNDI4MzM0OTA3MmYwX21waG9yaXpvbnRhbDE3NWgzMTAwIC0gMzQyXzIyXzA2MC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/51280f74-88c9-462d-af7c-bd3d1a707ec6_mphorizontal175h3130%20-%20342_22_063.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=DGRRg7T2EFR2%2FwXZWsvSdPOvY37BeQ8Gd%2FKNUY9Kfw0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTEyODBmNzQtODhjOS00NjJkLWFmN2MtYmQzZDFhNzA3ZWM2X21waG9yaXpvbnRhbDE3NWgzMTMwIC0gMzQyXzIyXzA2My5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1638d177-4dd3-4989-bb83-6c56628022d9_mphorizontalsm0ss%20-%20329_67_000.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=kGe6fFXh5ow1mj8xkUJe86lr6Pjg4H6zKd8FQdfpie8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTYzOGQxNzctNGRkMy00OTg5LWJiODMtNmM1NjYyODAyMmQ5X21waG9yaXpvbnRhbHNtMHNzIC0gMzI5XzY3XzAwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/065f35ae-83d2-4371-9817-0578e30bf5f7_mphorizontalsm3ss%20-%20329_67_003.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=IeP9wXCJhlYaLebP3qI%2B6%2FCIPE8Zom3fH2dZOUs8Iqs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDY1ZjM1YWUtODNkMi00MzcxLTk4MTctMDU3OGUzMGJmNWY3X21waG9yaXpvbnRhbHNtM3NzIC0gMzI5XzY3XzAwMy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e4f6ba07-8ef7-4670-b2dc-8c5bf8e75547_mphorizontalsm6ss%20-%20329_67_006.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=W4lfsOz2ThyxZQiQaln%2FQnWs5QZQ1Dr%2B0%2BuY8C%2BgXdQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTRmNmJhMDctOGVmNy00NjcwLWIyZGMtOGM1YmY4ZTc1NTQ3X21waG9yaXpvbnRhbHNtNnNzIC0gMzI5XzY3XzAwNi5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8c21197f-6452-49fc-a3c7-b8bf57666daa_plinthlegrectangularscrewh100.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=OB8tsao%2B7jcTIDPL0J9UaNu%2FfolB2gLUr9MoFxjJB%2F8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGMyMTE5N2YtNjQ1Mi00OWZjLWEzYzctYjhiZjU3NjY2ZGFhX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/12fab1b5-a29d-46c8-9fb4-401dc7bac1dd_plinthlegrectangularscrewh120.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=1wFO%2F%2BZfBL5a3cUKg%2F7ht4%2BXFMhz%2FCXO7SlXy92DCDU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTJmYWIxYjUtYTI5ZC00NmM4LTlmYjQtNDAxZGM3YmFjMWRkX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTIwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/eec9359b-28e7-475d-ac5b-c0b1b332453c_plinthlegrectangularscrewh150.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=fe6AiATnv85%2FIyIKu8X1UhYuBDVluvsmiPhC6QOpph0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWVjOTM1OWItMjhlNy00NzVkLWFjNWItYzBiMWIzMzI0NTNjX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTUwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d672a6b6-256e-40ee-9ad6-24ab446bc6bc_plinthlegtriangularpressh100.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=F0uboCkgXAKirmdZYe5CBmyyXkZ5KwIbAaZFtGjRCBo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDY3MmE2YjYtMjU2ZS00MGVlLTlhZDYtMjRhYjQ0NmJjNmJjX3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bc8e211e-57ae-48b1-95e5-c018c85c9ee7_plinthlegtriangularpressh120.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=kcNxSDQlgK1%2B1ZJY7qpB3Apmdz79Ok33bjmiTPAIP5o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmM4ZTIxMWUtNTdhZS00OGIxLTk1ZTUtYzAxOGM4NWM5ZWU3X3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxMjAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/675ec935-5f72-43bd-9be2-b4fdc08a0b61_plinthlegtriangularpressh150.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=u9Xx92Gcdyy%2FnXjE8mzUXYfZ%2BqwB0oapiwgEe0Dy0oI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjc1ZWM5MzUtNWY3Mi00M2JkLTliZTItYjRmZGMwOGEwYjYxX3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxNTAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6afde4ae-fa14-42bd-9020-09e574fda2b8_plinthareadesign2007.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=BMQqO21zDYjtM9fUa3S07S3XDXNt%2BZ02osGbicUtWt8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmFmZGU0YWUtZmExNC00MmJkLTkwMjAtMDllNTc0ZmRhMmI4X3BsaW50aGFyZWFkZXNpZ24yMDA3Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/56cc35f9-80c9-43ea-a478-d26075e8796b_plinthareadesign2008.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=AAKJNSy8T%2BW5VuQwBLGWTuz0ZPl1cSxqEBvGaspXHbQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTZjYzM1ZjktODBjOS00M2VhLWE0NzgtZDI2MDc1ZTg3OTZiX3BsaW50aGFyZWFkZXNpZ24yMDA4Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1da24959-a8a2-453e-a3e5-b4c7cea41fce_pushtoopenlongblack_356_04_754.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=CwH41jwBe0WbE%2BHuR29nIiqjCc%2FAQ%2BAK9zZrIobBWaY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWRhMjQ5NTktYThhMi00NTNlLWEzZTUtYjRjN2NlYTQxZmNlX3B1c2h0b29wZW5sb25nYmxhY2tfMzU2XzA0Xzc1NC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/254b54d7-bc42-42f5-b240-bd0cdbab42ba_pushtoopenshortblack_356_04_353.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=MBjcEkLfB1d8U2TcMdg26QxRgJtbBThjh%2FwRtX34%2BEg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjU0YjU0ZDctYmM0Mi00MmY1LWIyNDAtYmQwY2RiYWI0MmJhX3B1c2h0b29wZW5zaG9ydGJsYWNrXzM1Nl8wNF8zNTMub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bd84b561-3d0e-4133-b673-8a54857a61c7_281_41_907_4.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=8Mb8%2BFWMkU6QqnlLKJXKKDJ%2BXwNQiPpzDB3pACUi6IU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmQ4NGI1NjEtM2QwZS00MTMzLWI2NzMtOGE1NDg1N2E2MWM3XzI4MV80MV85MDdfNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6509fae7-7d0a-4386-8df6-e46fb62936d1_ft_stift.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=mjmnr8lnG6zZf6dOg2L5ljM5jl4YvfodsvpBR8XROQk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjUwOWZhZTctN2QwYS00Mzg2LThkZjYtZTQ2ZmI2MjkzNmQxX2Z0X3N0aWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c213b6e2-c054-4a71-879c-c90de0236904_717_24.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=z66Ugw0QBvBkcD8d4KDrxKqnKPsqWUCYYzZgjIeftIM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzIxM2I2ZTItYzA1NC00YTcxLTg3OWMtYzkwZGUwMjM2OTA0XzcxN18yNC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/93df0e8d-1f5e-467e-838f-a69b0c04be21_717_25.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=ETuP2aaAk67AIFQkYc%2BSpyT1bRjWbbr1AB9jffzQaVo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTNkZjBlOGQtMWY1ZS00NjdlLTgzOGYtYTY5YjBjMDRiZTIxXzcxN18yNS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3514dd3d-2841-4cfb-8a11-c20b6acf6c4d_wall%20plate%20cuttable%20-%20290_09_910.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Q2GcawTSZvqrgih6jdJpHjJZuJlxcJJ6zMVETL8e1Ls%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzUxNGRkM2QtMjg0MS00Y2ZiLThhMTEtYzIwYjZhY2Y2YzRkX3dhbGwgcGxhdGUgY3V0dGFibGUgLSAyOTBfMDlfOTEwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cd349475-2ddf-4141-8bc5-4b6f99ae976e_wall%20plate%20-%20290_40_989.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=l38b%2FQm3X4EQUchW4hTlIW%2B15WMzovOKuGslPryqsrk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2QzNDk0NzUtMmRkZi00MTQxLThiYzUtNGI2Zjk5YWU5NzZlX3dhbGwgcGxhdGUgLSAyOTBfNDBfOTg5Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/18c4c9b5-9c91-4800-9042-ffc40f824cf9_wall%20plate%20-%20290_40_991.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=B8g3cmDutCN7%2Bzqe2%2Bzx52fbA4apwIy6669sdSuMUeM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMThjNGM5YjUtOWM5MS00ODAwLTkwNDItZmZjNDBmODI0Y2Y5X3dhbGwgcGxhdGUgLSAyOTBfNDBfOTkxLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8c719ab1-1e95-4958-9d72-901e5a29b273_rafixhousing_263_15_705.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=5HPNXg8OwcJ2wRIQUWgKRPBn7BH4knp%2BS3ts8MXN%2FP8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGM3MTlhYjEtMWU5NS00OTU4LTlkNzItOTAxZTVhMjliMjczX3JhZml4aG91c2luZ18yNjNfMTVfNzA1Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/885faca7-3ac7-4eec-b5db-f64f655a666e_rafixconnectingbolt_263_20_847_1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=BfQe4ctmdBdSrGt9ZXvV6dJrJGbse7wE1MjcpoCsGHo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODg1ZmFjYTctM2FjNy00ZWVjLWI1ZGItZjY0ZjY1NWE2NjZlX3JhZml4Y29ubmVjdGluZ2JvbHRfMjYzXzIwXzg0N18xLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4c457ede-5355-41f3-bf88-afd301b013e1_cornerbrace1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=twgQVvX0ViUlZdc%2BEJOPZxGDhnmH3PInQITxfTlavRA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGM0NTdlZGUtNTM1NS00MWYzLWJmODgtYWZkMzAxYjAxM2UxX2Nvcm5lcmJyYWNlMS5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0b4446c2-c5a0-40e3-b02f-e23705bba8ea_slidebtm.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=akLFcs%2B77%2BB0jkpZaaBy9Vq0Gp9RbKgz8PjB6W2N5yk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGI0NDQ2YzItYzVhMC00MGUzLWIwMmYtZTIzNzA1YmJhOGVhX3NsaWRlYnRtLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/74bdbf0c-f3df-402e-9755-c2acab7491e6_slidetop.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=N7g9W6QoHoEvVYLFeZxBkzqWl62oCBgonqWwp09qlx4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzRiZGJmMGMtZjNkZi00MDJlLTk3NTUtYzJhY2FiNzQ5MWU2X3NsaWRldG9wLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b1fed9cf-4638-4841-97e3-45c64169a2ec_dispensa160.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=l0CV8Uj5uOtMk1SJL8gTD4daQWUs1OUJM968TzgWsQg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjFmZWQ5Y2YtNDYzOC00ODQxLTk3ZTMtNDVjNjQxNjlhMmVjX2Rpc3BlbnNhMTYwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/de80649e-b388-433e-9480-83a8c15c5543_dispensa190.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=gXHDlRaWroVNzrINLZseg93nNZdh6n2k9uRAu58I1q8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGU4MDY0OWUtYjM4OC00MzNlLTk0ODAtODNhOGMxNWM1NTQzX2Rpc3BlbnNhMTkwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1802596f-8cbe-412f-bc17-852cb5f16cd5_dispensa230.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=fudlvSCFxep4APMihutLy7NKKOdwjLw7KuaqhiOP0tw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTgwMjU5NmYtOGNiZS00MTJmLWJjMTctODUyY2I1ZjE2Y2Q1X2Rpc3BlbnNhMjMwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9ad3504a-4ea7-4569-94bd-594e28443c3d_connectortop300.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=5C9X44xuRiLY0UTyaISDyPL7Tbc6VqgFzVrsEMe2RPQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWFkMzUwNGEtNGVhNy00NTY5LTk0YmQtNTk0ZTI4NDQzYzNkX2Nvbm5lY3RvcnRvcDMwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/94b83513-b0c9-43c8-b461-e77bc07baadc_connectorbtm300.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=m7pYE%2F2E3zasvbescLIchI7OjLL%2BovERtxWEYU7lfzw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTRiODM1MTMtYjBjOS00M2M4LWI0NjEtZTc3YmMwN2JhYWRjX2Nvbm5lY3RvcmJ0bTMwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ef22bf91-7b93-406e-968f-22e83e0b02e8_connectortop400.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=6tCQ4Ahnn554wWhd2eAWmFnn2QLQoty3%2FISRrU2PJTU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWYyMmJmOTEtN2I5My00MDZlLTk2OGYtMjJlODNlMGIwMmU4X2Nvbm5lY3RvcnRvcDQwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a52d7201-dc5f-4f77-9e69-ddbba15a6aa2_connectorbtm400.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=mfyIEsyBVe1XVnBk68JiRNUuvhgJjTVPOJUrP%2FQMras%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTUyZDcyMDEtZGM1Zi00Zjc3LTllNjktZGRiYmExNWE2YWEyX2Nvbm5lY3RvcmJ0bTQwMC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ffe5e3b8-4dfb-40e6-a46d-55594e609c00_classic300.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=dwlCuu7yGNxkR%2BvT1DTMhgqnkO3SLcTAJFNYTVa5P6Q%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmZlNWUzYjgtNGRmYi00MGU2LWE0NmQtNTU1OTRlNjA5YzAwX2NsYXNzaWMzMDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8e609c5a-c153-4974-8439-35c75c466422_classic400.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=nRMQFJta41LP2PCkyuyiTJrFzDEQ9wpVhojOfMpItgk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGU2MDljNWEtYzE1My00OTc0LTg0MzktMzVjNzVjNDY2NDIyX2NsYXNzaWM0MDAub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/da7fe0e0-85f7-464c-ae55-f5b4186a8345_style300.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=guXh5Wtw52xloSsT%2FbPagLMey90drqaLLb9%2FOtAYcDs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGE3ZmUwZTAtODVmNy00NjRjLWFlNTUtZjViNDE4NmE4MzQ1X3N0eWxlMzAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e2a104d2-fc82-4208-b774-bf829c88f70a_style400.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=ODIZ5XS7w6Mzu9la%2FWFE2N1UYQjiVGz%2Fx1nH%2FoB0M00%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTJhMTA0ZDItZmM4Mi00MjA4LWI3NzQtYmY4MjljODhmNzBhX3N0eWxlNDAwLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/65c87bd0-de74-45bf-a3be-d558e5586c41_no15_auszu%CC%88ge_rechts.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=qMCsDHTxeWpKvq4Xm%2FbnRv%2FmxK8mnk5V1oc1XhuMBRw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjVjODdiZDAtZGU3NC00NWJmLWEzYmUtZDU1OGU1NTg2YzQxX25vMTVfYXVzenXMiGdlX3JlY2h0cy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6ec1105e-abea-4fda-9ad0-49640cc5c15d_no15_auszu%CC%88ge_links.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=8jG8kwysC0a2wFLFq%2B%2BAW4a06xs8CaKwyjGc2yXzXrU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmVjMTEwNWUtYWJlYS00ZmRhLTlhZDAtNDk2NDBjYzVjMTVkX25vMTVfYXVzenXMiGdlX2xpbmtzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f5e242e7-ec53-438c-8576-1e1fa9102746_no15_rotated.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=sL2NJZEZe0VPQtMW7rTrP4kSdkF3UBDIX3HEJvavi7k%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjVlMjQyZTctZWM1My00MzhjLTg1NzYtMWUxZmE5MTAyNzQ2X25vMTVfcm90YXRlZC5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e86631e4-7588-40ab-ba08-120443aa37b1_no15_rotated_left.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=Wc8FAioWBpewr8Z4rGKzPUPsrZnH0of9Kb%2FMnfmwFVQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTg2NjMxZTQtNzU4OC00MGFiLWJhMDgtMTIwNDQzYWEzN2IxX25vMTVfcm90YXRlZF9sZWZ0Lm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6bb1d385-4cfa-46c1-bc57-3194cb32bdcb_no15_beschla%CC%88ge_rechts.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=iMDJ%2BOODgcESYp1TKGzPptsTU%2F2wlsNSDEzZfNJ9xxo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmJiMWQzODUtNGNmYS00NmMxLWJjNTctMzE5NGNiMzJiZGNiX25vMTVfYmVzY2hsYcyIZ2VfcmVjaHRzLm9iag==',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2b44c14d-89ba-4c4f-9390-f2064784d13d_no15_beschla%CC%88ge_links.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=QaoXZrsORqh0HMzWHnJEbYHIQBRy50b1sDDGALnkj9M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmI0NGMxNGQtODliYS00YzRmLTkzOTAtZjIwNjQ3ODRkMTNkX25vMTVfYmVzY2hsYcyIZ2VfbGlua3Mub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/98571eff-4f35-4461-b5dd-2832c288bf44_fronttuscanmilling.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=wlD34J4FRTUwx83tnk%2Fhg95K4keZR3OfeGOMEYAgHcU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTg1NzFlZmYtNGYzNS00NDYxLWI1ZGQtMjgzMmMyODhiZjQ0X2Zyb250dHVzY2FubWlsbGluZy5vYmo=',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/60d93e04-ecc5-4d9b-80a6-abd39bc3f1cd_coneron.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=%2FtcmvN0sg1iyP5sP3DucJAIjBbK2KR7%2BkXqpMAlzA5s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjBkOTNlMDQtZWNjNS00ZDliLTgwYTYtYWJkMzliYzNmMWNkX2NvbmVyb24ub2Jq',
    Model3DParameters: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
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
