import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterModuleGroupOrchestrator, internal_leaveModuleGroupOrchestrator, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars, internal_enterModulePrepareContext, internal_leaveModulePrepareContext } from '../logging'
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

export interface cti_tab_ApplianceGraphicLibrary {
  readonly in_GraphicId?: string;
}

export interface ctm_tab_ApplianceGraphicLibrary {
}

export interface cto_tab_ApplianceGraphicLibrary extends ctm_tab_ApplianceGraphicLibrary {
  readonly _id: number;
  readonly Description?: string;
  readonly Width: number;
  readonly Height: number;
  readonly Depth: number;
  readonly WidthPos: number;
  readonly HeightPos: number;
  readonly DepthPos: number;
  readonly Model3D_Value?: string;
  readonly Model3D_Id?: string;
  get Model3D(): IThreeDModelData | undefined;
  readonly StretchParams?: any;
  readonly MaterialId?: string;
}

export interface ICT_tab_ApplianceGraphicLibrary
  extends cti_tab_ApplianceGraphicLibrary, cto_tab_ApplianceGraphicLibrary { }

export class ct2_tab_ApplianceGraphicLibrary {

  public findExactly(
    in_GraphicId: string | undefined,
  ): cto_tab_ApplianceGraphicLibrary | undefined {
    const res = ct_tab_ApplianceGraphicLibrary.find((p) =>
      p.in_GraphicId === in_GraphicId
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_ApplianceGraphicLibrary) => boolean
  ): cto_tab_ApplianceGraphicLibrary | undefined {
    for (let index = 0; index < ct_tab_ApplianceGraphicLibrary.length; index++) {
      const element = ct_tab_ApplianceGraphicLibrary[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_ApplianceGraphicLibrary: ICT_tab_ApplianceGraphicLibrary[] = [
  {
    _id: 13111,
    in_GraphicId: "OvenDefault",
    Description: "Oven front",
    Width: 595,
    Height: 587.5,
    Depth: 19.5,
    WidthPos: -297.5,
    HeightPos: 7.5,
    DepthPos: 0,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:oven"
  }
  , {
    _id: 13112,
    in_GraphicId: "OvenDefault",
    Description: "Oven carcase",
    Width: 550,
    Height: 580,
    Depth: 550,
    WidthPos: -275,
    HeightPos: 0,
    DepthPos: -550,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13113,
    in_GraphicId: "BI510CNR0",
    Description: "Oven front",
    Width: 594,
    Height: 124,
    Depth: 19.5,
    WidthPos: -297.5,
    HeightPos: 7.5,
    DepthPos: 0,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:bi510cnr0"
  }
  , {
    _id: 13114,
    in_GraphicId: "BI510CNR0",
    Description: "Oven carcase",
    Width: 560,
    Height: 140,
    Depth: 549,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -550,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13115,
    in_GraphicId: "CM776GKB1",
    Description: "Oven front",
    Width: 595,
    Height: 447.5,
    Depth: 19.5,
    WidthPos: -297.5,
    HeightPos: 7.5,
    DepthPos: 0,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:cm776gkb1"
  }
  , {
    _id: 13116,
    in_GraphicId: "CM776GKB1",
    Description: "Oven Handle",
    Width: 507,
    Height: 14,
    Depth: 45,
    WidthPos: -253.5,
    HeightPos: 304,
    DepthPos: 19.5,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8921fde3-2b94-4b22-bc66-7133b9a25da3_cm776gkb1_g.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=2%2B3JoNw8rsx88MLTvRNqOQ5sUAp43OjzXY%2BoI0Xv%2BHw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODkyMWZkZTMtMmI5NC00YjIyLWJjNjYtNzEzM2I5YTI1ZGEzX2NtNzc2Z2tiMV9nLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13117,
    in_GraphicId: "CM776GKB1",
    Description: "Oven carcase",
    Width: 560,
    Height: 444,
    Depth: 526,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -527,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/25991f7e-46aa-409b-ad83-5bc3ad60e942_cm776gkb1_c.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=e2qI2%2BicYsx1HIEzWu5MGN7Ctzxk5E9pKyWg4xidCA8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjU5OTFmN2UtNDZhYS00MDliLWFkODMtNWJjM2FkNjBlOTQyX2NtNzc2Z2tiMV9jLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13118,
    in_GraphicId: "CS736G1B1",
    Description: "Oven carcase",
    Width: 560,
    Height: 444,
    Depth: 548,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -549,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13119,
    in_GraphicId: "CS736G1B1",
    Description: "Oven front",
    Width: 594,
    Height: 447.5,
    Depth: 19.5,
    WidthPos: -297,
    HeightPos: 7.5,
    DepthPos: 0,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:cs736g1b1"
  }
  , {
    _id: 13120,
    in_GraphicId: "FridgeDefault",
    Description: "Complete Fridge",
    Width: 558,
    Height: 1221,
    Depth: 546,
    WidthPos: -279,
    HeightPos: 0,
    DepthPos: -546,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ce329702-e4e2-4867-a59f-5a484a0f0724_ki41fadd0.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=r2rffu9MOMiLuwR%2F1RhmVpccp08%2FLTlzwBQqX6NzZYY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2UzMjk3MDItZTRlMi00ODY3LWE1OWYtNWE0ODRhMGYwNzI0X2tpNDFmYWRkMC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:w980_st7"
  }
  , {
    _id: 13121,
    in_GraphicId: "KI86SHDD0",
    Description: "Complete Fridge",
    Width: 558,
    Height: 1772,
    Depth: 554,
    WidthPos: -279,
    HeightPos: 0,
    DepthPos: -554,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1add6595-a74e-4cb8-a654-e33f25e3fdfd_ki86shdd0.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Y2wgQSh3UqB6mQyZwi0HC5REgqdqrgl%2FAnUIppAbl58%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWFkZDY1OTUtYTc0ZS00Y2I4LWE2NTQtZTMzZjI1ZTNmZGZkX2tpODZzaGRkMC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:w980_st7"
  }
  , {
    _id: 13122,
    in_GraphicId: "KI82LADD0",
    Description: "Complete Fridge",
    Width: 558,
    Height: 1776,
    Depth: 546,
    WidthPos: -279,
    HeightPos: 0,
    DepthPos: -546,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/673b3d9f-1012-497c-841b-ea9fc25141ba_ki82ladd0.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=tI%2FEXAi1Dw1CNJSv52JZ8cdU1OlPKjcpjKfl6WEnwgM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjczYjNkOWYtMTAxMi00OTdjLTg0MWItZWE5ZmMyNTE0MWJhX2tpODJsYWRkMC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:w980_st7"
  }
  , {
    _id: 13123,
    in_GraphicId: "KI41FADD0",
    Description: "Complete Fridge",
    Width: 558,
    Height: 1221,
    Depth: 546,
    WidthPos: -279,
    HeightPos: 0,
    DepthPos: -546,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ce329702-e4e2-4867-a59f-5a484a0f0724_ki41fadd0.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=r2rffu9MOMiLuwR%2F1RhmVpccp08%2FLTlzwBQqX6NzZYY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2UzMjk3MDItZTRlMi00ODY3LWE1OWYtNWE0ODRhMGYwNzI0X2tpNDFmYWRkMC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:w980_st7"
  }
  , {
    _id: 13124,
    in_GraphicId: "HoodDefault",
    Description: "Hood Base",
    Width: 598,
    Height: 41,
    Depth: 500,
    WidthPos: -299,
    HeightPos: 0,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/272a1932-4fcb-4090-9817-5b92a268b6b2_carc_lc66bbm50.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=VPhtZFBQcKVB8tqpxrmNVQ10Cr7GGaSfa4%2BdX3U%2BZLM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjcyYTE5MzItNGZjYi00MDkwLTk4MTctNWI5MmEyNjhiNmIyX2NhcmNfbGM2NmJibTUwLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13125,
    in_GraphicId: "HoodDefault",
    Description: "Hood Tower",
    Width: 260,
    Height: 700,
    Depth: 250,
    WidthPos: -130,
    HeightPos: 41,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ce66aad0-8a87-4169-9d73-3d750068d6dc_tower_lc66bbm50.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=RthI1lrfAwoN4WEB85T5duqsG3%2BGn1Ock8WzBwO8uJs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2U2NmFhZDAtOGE4Ny00MTY5LTlkNzMtM2Q3NTAwNjhkNmRjX3Rvd2VyX2xjNjZiYm01MC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13126,
    in_GraphicId: "HoodDefault",
    Description: "Hood Label",
    Width: 150,
    Height: 15,
    Depth: 1,
    WidthPos: -75,
    HeightPos: 13,
    DepthPos: 500,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13127,
    in_GraphicId: "HoodDefault",
    Description: "Logo",
    Width: 50,
    Height: 8.8,
    Depth: 1,
    WidthPos: -25,
    HeightPos: 150,
    DepthPos: 250,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a56f42bb-c32d-4b19-a635-06f80c026a04_siemens.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=MRHVL0HMOLTR6GPsxXJgR8PnCY8AUWbU%2FASDzTSVbFo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTU2ZjQyYmItYzMyZC00YjE5LWE2MzUtMDZmODBjMDI2YTA0X3NpZW1lbnMub2Jq',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13128,
    in_GraphicId: "LC66BBM50",
    Description: "Hood Tower",
    Width: 260,
    Height: 700,
    Depth: 250,
    WidthPos: -130,
    HeightPos: 41,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ce66aad0-8a87-4169-9d73-3d750068d6dc_tower_lc66bbm50.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=RthI1lrfAwoN4WEB85T5duqsG3%2BGn1Ock8WzBwO8uJs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2U2NmFhZDAtOGE4Ny00MTY5LTlkNzMtM2Q3NTAwNjhkNmRjX3Rvd2VyX2xjNjZiYm01MC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13129,
    in_GraphicId: "LC66BBM50",
    Description: "Hood Base",
    Width: 598,
    Height: 41,
    Depth: 500,
    WidthPos: -299,
    HeightPos: 0,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/272a1932-4fcb-4090-9817-5b92a268b6b2_carc_lc66bbm50.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=VPhtZFBQcKVB8tqpxrmNVQ10Cr7GGaSfa4%2BdX3U%2BZLM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjcyYTE5MzItNGZjYi00MDkwLTk4MTctNWI5MmEyNjhiNmIyX2NhcmNfbGM2NmJibTUwLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13130,
    in_GraphicId: "LC66BBM50",
    Description: "Logo",
    Width: 50,
    Height: 8.8,
    Depth: 1,
    WidthPos: -25,
    HeightPos: 150,
    DepthPos: 250,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a56f42bb-c32d-4b19-a635-06f80c026a04_siemens.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=MRHVL0HMOLTR6GPsxXJgR8PnCY8AUWbU%2FASDzTSVbFo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTU2ZjQyYmItYzMyZC00YjE5LWE2MzUtMDZmODBjMDI2YTA0X3NpZW1lbnMub2Jq',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13131,
    in_GraphicId: "LC66BBM50",
    Description: "Hood Label",
    Width: 150,
    Height: 15,
    Depth: 1,
    WidthPos: -75,
    HeightPos: 13,
    DepthPos: 500,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13132,
    in_GraphicId: "LC96BBM50",
    Description: "Hood Tower",
    Width: 260,
    Height: 700,
    Depth: 250,
    WidthPos: -130,
    HeightPos: 51,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ce66aad0-8a87-4169-9d73-3d750068d6dc_tower_lc66bbm50.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=RthI1lrfAwoN4WEB85T5duqsG3%2BGn1Ock8WzBwO8uJs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2U2NmFhZDAtOGE4Ny00MTY5LTlkNzMtM2Q3NTAwNjhkNmRjX3Rvd2VyX2xjNjZiYm01MC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13133,
    in_GraphicId: "LC96BBM50",
    Description: "Hood Base",
    Width: 898,
    Height: 51,
    Depth: 500,
    WidthPos: -449,
    HeightPos: 0,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ebb46cb8-41e3-40c9-851c-97e340db540d_carc_lc96bbm50.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=XQdYaH4yGyPtaokkzJpgV5h3qYldzzj4U7wB48w2GeE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWJiNDZjYjgtNDFlMy00MGM5LTg1MWMtOTdlMzQwZGI1NDBkX2NhcmNfbGM5NmJibTUwLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13134,
    in_GraphicId: "LC96BBM50",
    Description: "Logo",
    Width: 50,
    Height: 8.8,
    Depth: 1,
    WidthPos: -25,
    HeightPos: 150,
    DepthPos: 250,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a56f42bb-c32d-4b19-a635-06f80c026a04_siemens.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=MRHVL0HMOLTR6GPsxXJgR8PnCY8AUWbU%2FASDzTSVbFo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTU2ZjQyYmItYzMyZC00YjE5LWE2MzUtMDZmODBjMDI2YTA0X3NpZW1lbnMub2Jq',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13135,
    in_GraphicId: "LC96BBM50",
    Description: "Hood Label",
    Width: 150,
    Height: 15,
    Depth: 1,
    WidthPos: -75,
    HeightPos: 18,
    DepthPos: 500,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13136,
    in_GraphicId: "LC65KDK60",
    Description: "Hood Base",
    Width: 456,
    Height: 1090,
    Depth: 318.5,
    WidthPos: -228,
    HeightPos: 38,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/153042d9-d4d8-412f-b286-c9b923cb4b23_carc_lc65kdk60.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=TD9gDe%2FmTfhNXgUj5AOayU%2BV8Z9pOY7dbA9XxvbPBcc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTUzMDQyZDktZDRkOC00MTJmLWIyODYtYzliOTIzY2I0YjIzX2NhcmNfbGM2NWtkazYwLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13137,
    in_GraphicId: "LC65KDK60",
    Description: "Hood Front",
    Width: 600,
    Height: 440,
    Depth: 241,
    WidthPos: -300,
    HeightPos: 0,
    DepthPos: 151,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:lc65kdk60"
  }
  , {
    _id: 13138,
    in_GraphicId: "LC85KDK60",
    Description: "Hood Base",
    Width: 456,
    Height: 1090,
    Depth: 318.5,
    WidthPos: -228,
    HeightPos: 38,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/153042d9-d4d8-412f-b286-c9b923cb4b23_carc_lc65kdk60.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=TD9gDe%2FmTfhNXgUj5AOayU%2BV8Z9pOY7dbA9XxvbPBcc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTUzMDQyZDktZDRkOC00MTJmLWIyODYtYzliOTIzY2I0YjIzX2NhcmNfbGM2NWtkazYwLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13139,
    in_GraphicId: "LC85KDK60",
    Description: "Hood Front",
    Width: 794,
    Height: 440,
    Depth: 241,
    WidthPos: -397,
    HeightPos: 0,
    DepthPos: 151,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/72ec9062-b940-45ad-be26-2b00fb86eb10_front_lc85kdk60.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=vs7F2UIRzJiOwe5JwGUZd5p75ii8OM2Er9sRxS2ydHQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzJlYzkwNjItYjk0MC00NWFkLWJlMjYtMmIwMGZiODZlYjEwX2Zyb250X2xjODVrZGs2MC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:lc85kdk60"
  }
  , {
    _id: 13140,
    in_GraphicId: "CS736G1B1",
    Description: "Oven Handle",
    Width: 507,
    Height: 14,
    Depth: 45,
    WidthPos: -253.5,
    HeightPos: 304,
    DepthPos: 19.5,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8921fde3-2b94-4b22-bc66-7133b9a25da3_cm776gkb1_g.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=2%2B3JoNw8rsx88MLTvRNqOQ5sUAp43OjzXY%2BoI0Xv%2BHw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODkyMWZkZTMtMmI5NC00YjIyLWJjNjYtNzEzM2I5YTI1ZGEzX2NtNzc2Z2tiMV9nLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13141,
    in_GraphicId: "BE732R1B1",
    Description: "Oven Front",
    Width: 594,
    Height: 382,
    Depth: 19.5,
    WidthPos: -297.5,
    HeightPos: 0,
    DepthPos: 0,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:be732l1b1"
  }
  , {
    _id: 13142,
    in_GraphicId: "BE732R1B1",
    Description: "Oven carcase",
    Width: 560,
    Height: 362,
    Depth: 300,
    WidthPos: -280,
    HeightPos: 14,
    DepthPos: -300,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13143,
    in_GraphicId: "DefaultHob",
    Description: "Hob carcase",
    Width: 539,
    Height: 49,
    Depth: 470,
    WidthPos: -269.5,
    HeightPos: -49,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13144,
    in_GraphicId: "DefaultHob",
    Description: "Hob frame",
    Width: 580,
    Height: 1,
    Depth: 511,
    WidthPos: -290,
    HeightPos: 0,
    DepthPos: -500.5,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6f6b9a87-d368-466c-b5e4-c1a1c87f6baf_et601fnp1e_frame.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=74iaNINUawGaDjVmlTruH%2FkzWUrsfh2g9mXDWIvj2mE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmY2YjlhODctZDM2OC00NjZjLWI1ZTQtYzFhMWM4N2Y2YmFmX2V0NjAxZm5wMWVfZnJhbWUub2Jq',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13145,
    in_GraphicId: "DefaultHob",
    Description: "Hob glass",
    Width: 542,
    Height: 0.5,
    Depth: 471.5,
    WidthPos: -271,
    HeightPos: 0,
    DepthPos: -480.75,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13146,
    in_GraphicId: "PUXU",
    Description: "Hob carcase",
    Width: 809,
    Height: 199,
    Depth: 579,
    WidthPos: -404.5,
    HeightPos: -199,
    DepthPos: -579,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/47971014-aaa0-4840-8d0a-f3a7872a0654_puxu_carc.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=DWoq4Gw1ocw%2FQPHSDyswZ%2FskyVTuh7WGwDzXNUUE4xc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDc5NzEwMTQtYWFhMC00ODQwLThkMGEtZjNhNzg3MmEwNjU0X3B1eHVfY2FyYy5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13147,
    in_GraphicId: "PUXU",
    Description: "Hob glass",
    Width: 830,
    Height: 4,
    Depth: 515,
    WidthPos: -415,
    HeightPos: 0,
    DepthPos: -505,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:puxu"
  }
  , {
    _id: 13148,
    in_GraphicId: "ET601FNP1E",
    Description: "Hob carcase",
    Width: 539,
    Height: 49,
    Depth: 470,
    WidthPos: -269.5,
    HeightPos: -49,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13149,
    in_GraphicId: "ET601FNP1E",
    Description: "Hob frame",
    Width: 580,
    Height: 1,
    Depth: 511,
    WidthPos: -290,
    HeightPos: 0,
    DepthPos: -500.5,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6f6b9a87-d368-466c-b5e4-c1a1c87f6baf_et601fnp1e_frame.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=74iaNINUawGaDjVmlTruH%2FkzWUrsfh2g9mXDWIvj2mE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmY2YjlhODctZDM2OC00NjZjLWI1ZTQtYzFhMWM4N2Y2YmFmX2V0NjAxZm5wMWVfZnJhbWUub2Jq',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13150,
    in_GraphicId: "ET601FNP1E",
    Description: "Hob glass",
    Width: 542,
    Height: 0.5,
    Depth: 471.5,
    WidthPos: -271,
    HeightPos: 0,
    DepthPos: -480.75,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:et601fnp1e"
  }
  , {
    _id: 13151,
    in_GraphicId: "EX975LXC1E",
    Description: "Hob carcase",
    Width: 864,
    Height: 37,
    Depth: 495,
    WidthPos: -432,
    HeightPos: -37,
    DepthPos: -497.5,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13152,
    in_GraphicId: "EX975LXC1E",
    Description: "Hob frame",
    Width: 910,
    Height: 6,
    Depth: 519,
    WidthPos: -455,
    HeightPos: 0,
    DepthPos: -509.5,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f26ddac8-63f8-411a-908b-da41081b3d0e_ex975lxc1e_frame.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=cMRzqXUEG9Fax1cBWq6%2FL7XogmlomdCTqjsMTX8YjJU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjI2ZGRhYzgtNjNmOC00MTFhLTkwOGItZGE0MTA4MWIzZDBlX2V4OTc1bHhjMWVfZnJhbWUub2Jq',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13153,
    in_GraphicId: "EX975LXC1E",
    Description: "Hob glass",
    Width: 905,
    Height: 5,
    Depth: 520,
    WidthPos: -452.5,
    HeightPos: 1,
    DepthPos: -510,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:ex975lxc1e"
  }
  , {
    _id: 13154,
    in_GraphicId: "ER6A6PB70D",
    Description: "Hob glass",
    Width: 602,
    Height: 5,
    Depth: 520,
    WidthPos: -301,
    HeightPos: 0,
    DepthPos: -505,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:er6a6pb70d"
  }
  , {
    _id: 13155,
    in_GraphicId: "ER6A6PB70D",
    Description: "Hob carcase",
    Width: 550,
    Height: 50,
    Depth: 470,
    WidthPos: -275,
    HeightPos: -50,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13156,
    in_GraphicId: "ER6A6PB70D",
    Description: "Hob handle",
    Width: 209,
    Height: 21,
    Depth: 40,
    WidthPos: -103.5,
    HeightPos: 5,
    DepthPos: -47,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2a9d93d7-8dd2-44c6-b699-e5515fba1f19_er6a6pb70d_handle.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=VK8MvBixK01lmzVsMmpvVmAcAQ73Ex%2BO%2By8nSxLRVBw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmE5ZDkzZDctOGRkMi00NGM2LWI2OTktZTU1MTVmYmExZjE5X2VyNmE2cGI3MGRfaGFuZGxlLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:chrome"
  }
  , {
    _id: 13157,
    in_GraphicId: "ER6A6PB70D",
    Description: "Hob grill",
    Width: 590,
    Height: 30,
    Depth: 427,
    WidthPos: -294,
    HeightPos: 5,
    DepthPos: -488,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bcc1a943-3b95-4115-9b9d-4360a72cc6d6_er6a6pb70d_grill.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=5W0krpoU4CSyy4rON4mDpQAWsbN%2FZL3ecsGC7%2B6IX8w%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmNjMWE5NDMtM2I5NS00MTE1LTliOWQtNDM2MGE3MmNjNmQ2X2VyNmE2cGI3MGRfZ3JpbGwub2Jq',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13158,
    in_GraphicId: "SinkDefault",
    Description: "Sink top",
    Width: 990,
    Height: 5,
    Depth: 490,
    WidthPos: -495,
    HeightPos: 0,
    DepthPos: -490,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:axis_l"
  }
  , {
    _id: 13159,
    in_GraphicId: "SinkDefault",
    Description: "Sink base",
    Width: 548.5,
    Height: 190,
    Depth: 470,
    WidthPos: -480,
    HeightPos: -195,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13160,
    in_GraphicId: "Dinas_L",
    Description: "Sink top",
    Width: 860,
    Height: 5,
    Depth: 500,
    WidthPos: -430,
    HeightPos: 0,
    DepthPos: -490,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:dinas_l"
  }
  , {
    _id: 13161,
    in_GraphicId: "Dinas_L",
    Description: "Sink base",
    Width: 340,
    Height: 195,
    Depth: 400,
    WidthPos: -380,
    HeightPos: -195,
    DepthPos: -440,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13162,
    in_GraphicId: "Dinas_R",
    Description: "Sink top",
    Width: 860,
    Height: 5,
    Depth: 500,
    WidthPos: -430,
    HeightPos: 0,
    DepthPos: -490,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:dinas_r"
  }
  , {
    _id: 13163,
    in_GraphicId: "Dinas_R",
    Description: "Sink base",
    Width: 340,
    Height: 195,
    Depth: 400,
    WidthPos: 40,
    HeightPos: -195,
    DepthPos: -440,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13164,
    in_GraphicId: "HB774G1B1",
    Description: "Oven Front",
    Width: 594,
    Height: 587.5,
    Depth: 19.5,
    WidthPos: -297.5,
    HeightPos: 7.5,
    DepthPos: 0,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:hb774g1b1"
  }
  , {
    _id: 13165,
    in_GraphicId: "BI510CNR0",
    Description: "Oven carcase front",
    Width: 560,
    Height: 140,
    Depth: 1,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -1,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13166,
    in_GraphicId: "CM776GKB1",
    Description: "Oven carcase front",
    Width: 560,
    Height: 444,
    Depth: 1,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -1,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13167,
    in_GraphicId: "HB774G1B1",
    Description: "Oven carcase",
    Width: 560,
    Height: 577,
    Depth: 525,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -526,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/66787abb-2958-471b-8cea-e468dcf75ee3_hb774g1b1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=bOaZK%2BE3ja%2BsfLu8Zw6CoZer59GaPwfAQ%2FhuCCz6P7c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjY3ODdhYmItMjk1OC00NzFiLThjZWEtZTQ2OGRjZjc1ZWUzX2hiNzc0ZzFiMS5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13168,
    in_GraphicId: "CS736G1B1",
    Description: "Oven carcase front",
    Width: 560,
    Height: 444,
    Depth: 1,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -1,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13169,
    in_GraphicId: "HB774G1B1",
    Description: "Oven Handle",
    Width: 507,
    Height: 14,
    Depth: 45,
    WidthPos: -253.5,
    HeightPos: 440,
    DepthPos: 19.5,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8921fde3-2b94-4b22-bc66-7133b9a25da3_cm776gkb1_g.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=2%2B3JoNw8rsx88MLTvRNqOQ5sUAp43OjzXY%2BoI0Xv%2BHw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODkyMWZkZTMtMmI5NC00YjIyLWJjNjYtNzEzM2I5YTI1ZGEzX2NtNzc2Z2tiMV9nLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13170,
    in_GraphicId: "HE510ABS2",
    Description: "Oven Handle",
    Width: 469,
    Height: 16.7,
    Depth: 12.3,
    WidthPos: -234.5,
    HeightPos: 440,
    DepthPos: 49,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e5be744e-2b57-49b4-8b73-3ef48ba2b0af_he510abs2_handlebar.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=iF1cuJoOhexRT2nTNURrVwhcYnfTJWmEOQHT3NMy7gs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTViZTc0NGUtMmI1Ny00OWI0LThiNzMtM2VmNDhiYTJiMGFmX2hlNTEwYWJzMl9oYW5kbGViYXIub2Jq',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13171,
    in_GraphicId: "HB774G1B1",
    Description: "Oven carcase front",
    Width: 560,
    Height: 577,
    Depth: 1,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -1,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13172,
    in_GraphicId: "HE510ABS2",
    Description: "Oven Front",
    Width: 594,
    Height: 587.5,
    Depth: 19.5,
    WidthPos: -297,
    HeightPos: 7.5,
    DepthPos: 0,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:he510abs2"
  }
  , {
    _id: 13173,
    in_GraphicId: "HE510ABS2",
    Description: "Oven carcase",
    Width: 560,
    Height: 574,
    Depth: 525,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -526,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f0ed1c6a-0300-4dc4-9020-652099226d19_he510abs2_carc.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=ztjwIiUoM7ZIWZStTRHFylZqBPEsU89yOP07JwFkTFU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjBlZDFjNmEtMDMwMC00ZGM0LTkwMjAtNjUyMDk5MjI2ZDE5X2hlNTEwYWJzMl9jYXJjLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13174,
    in_GraphicId: "HE510ABS2",
    Description: "Oven Handle",
    Width: 469,
    Height: 16.9,
    Depth: 41,
    WidthPos: -234.5,
    HeightPos: 439.9,
    DepthPos: 19.5,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/db7914d1-2d3a-4138-abc1-9a41cc9a1531_he510abs2_handleblock.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=YrSRO3EnEh49aQvTfNBtkuTPydDsqyYvpz%2BKnOZVp5M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGI3OTE0ZDEtMmQzYS00MTM4LWFiYzEtOWE0MWNjOWExNTMxX2hlNTEwYWJzMl9oYW5kbGVibG9jay5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13175,
    in_GraphicId: "HE510ABS2",
    Description: "OvenKnob",
    Width: 486,
    Height: 42,
    Depth: 15,
    WidthPos: -244,
    HeightPos: 516,
    DepthPos: 20,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/514a9aaa-ab4c-41bf-8fad-65b6b2b15081_he510abs2_knob.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=DxNgmpgCAslli80PXhFTHUmHIiaKqkPLL0fBr9qj%2F1M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTE0YTlhYWEtYWI0Yy00MWJmLThmYWQtNjViNmIyYjE1MDgxX2hlNTEwYWJzMl9rbm9iLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13176,
    in_GraphicId: "HE510ABS2",
    Description: "Oven carcase front",
    Width: 560,
    Height: 574,
    Depth: 1,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -1,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:metallic_black"
  }
  , {
    _id: 13177,
    in_GraphicId: "Metra_R",
    Description: "Sink base",
    Width: 495,
    Height: 175,
    Depth: 430,
    WidthPos: -15,
    HeightPos: -190,
    DepthPos: -455,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7cb925e2-9b36-4da7-9889-d9f6371d0d4f_metra_r_base.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=bcyba0Ycn3KHtSHLjyk3nZXH5RVEVzbc4JBdzprP6B4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2NiOTI1ZTItOWIzNi00ZGE3LTk4ODktZDlmNjM3MWQwZDRmX21ldHJhX3JfYmFzZS5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:u960_st9"
  }
  , {
    _id: 13178,
    in_GraphicId: "Cosmopolitan",
    Description: "Mixer tab",
    Width: 105,
    Height: 306,
    Depth: 259,
    WidthPos: -25.5,
    HeightPos: 0,
    DepthPos: -25.5,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f0533e5a-c9ff-42bb-9db3-2402375982c2_grohe_cosmopolitan.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=iWg5NFgOVUYwzaGIU5LEoPUQTM0RYdezNoJ5lI%2F3Ogo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjA1MzNlNWEtYzlmZi00MmJiLTlkYjMtMjQwMjM3NTk4MmMyX2dyb2hlX2Nvc21vcG9saXRhbi5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:chrome"
  }
  , {
    _id: 13179,
    in_GraphicId: "HGR7764B1",
    Description: "Oven Front",
    Width: 594,
    Height: 595,
    Depth: 19.5,
    WidthPos: -297.5,
    HeightPos: 7.5,
    DepthPos: 0,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:hrg7764b1"
  }
  , {
    _id: 13180,
    in_GraphicId: "HGR7764B1",
    Description: "Oven carcase",
    Width: 560,
    Height: 584.5,
    Depth: 548,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -548.5,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13181,
    in_GraphicId: "Minta",
    Description: "Mixer tab",
    Width: 132,
    Height: 333,
    Depth: 274,
    WidthPos: -27.5,
    HeightPos: 0,
    DepthPos: -28,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/40c68125-c35b-4c7e-a38d-7f26e41e9b99_grohe_minta.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=Nd3GAblRW%2BFWaT03BTBOxIWjIEmBhQAdxzWqW5VH%2BCM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDBjNjgxMjUtYzM1Yi00YzdlLWEzOGQtN2YyNmU0MWU5Yjk5X2dyb2hlX21pbnRhLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:chrome"
  }
  , {
    _id: 13182,
    in_GraphicId: "Axis_L",
    Description: "Sink top",
    Width: 990,
    Height: 5,
    Depth: 490,
    WidthPos: -495,
    HeightPos: 0,
    DepthPos: -490,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:axis_l"
  }
  , {
    _id: 13183,
    in_GraphicId: "Axis_L",
    Description: "Sink base",
    Width: 548.5,
    Height: 190,
    Depth: 470,
    WidthPos: -480,
    HeightPos: -195,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13184,
    in_GraphicId: "Axis_R",
    Description: "Sink top",
    Width: 990,
    Height: 5,
    Depth: 490,
    WidthPos: -495,
    HeightPos: 0,
    DepthPos: -490,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:axis_r"
  }
  , {
    _id: 13185,
    in_GraphicId: "Axis_R",
    Description: "Sink base",
    Width: 548.5,
    Height: 190,
    Depth: 470,
    WidthPos: -68.5,
    HeightPos: -195,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13186,
    in_GraphicId: "Axia_White_L",
    Description: "Sink top",
    Width: 980,
    Height: 5,
    Depth: 490,
    WidthPos: -490,
    HeightPos: 0,
    DepthPos: -490,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:axia_white_l"
  }
  , {
    _id: 13187,
    in_GraphicId: "Axia_White_L",
    Description: "Sink base",
    Width: 548.5,
    Height: 190,
    Depth: 470,
    WidthPos: -480,
    HeightPos: -195,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13188,
    in_GraphicId: "Axia_White_R",
    Description: "Sink top",
    Width: 980,
    Height: 5,
    Depth: 490,
    WidthPos: -490,
    HeightPos: 0,
    DepthPos: -490,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:axia_white_r"
  }
  , {
    _id: 13189,
    in_GraphicId: "Axia_White_R",
    Description: "Sink base",
    Width: 548.5,
    Height: 190,
    Depth: 470,
    WidthPos: -68.5,
    HeightPos: -195,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13190,
    in_GraphicId: "Axia_Grey_L",
    Description: "Sink top",
    Width: 980,
    Height: 5,
    Depth: 490,
    WidthPos: -490,
    HeightPos: 0,
    DepthPos: -490,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:axia_grey_l"
  }
  , {
    _id: 13191,
    in_GraphicId: "Axia_Grey_L",
    Description: "Sink base",
    Width: 548.5,
    Height: 190,
    Depth: 470,
    WidthPos: -480,
    HeightPos: -195,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13192,
    in_GraphicId: "Axia_Grey_R",
    Description: "Sink top",
    Width: 980,
    Height: 5,
    Depth: 490,
    WidthPos: -490,
    HeightPos: 0,
    DepthPos: -490,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:axia_grey_r"
  }
  , {
    _id: 13193,
    in_GraphicId: "Axia_Grey_R",
    Description: "Sink base",
    Width: 548.5,
    Height: 190,
    Depth: 470,
    WidthPos: -68.5,
    HeightPos: -195,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13194,
    in_GraphicId: "Axia_Anthrazit_L",
    Description: "Sink top",
    Width: 980,
    Height: 5,
    Depth: 490,
    WidthPos: -490,
    HeightPos: 0,
    DepthPos: -490,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:axia_anthrazit_l"
  }
  , {
    _id: 13195,
    in_GraphicId: "Axia_Anthrazit_L",
    Description: "Sink base",
    Width: 548.5,
    Height: 190,
    Depth: 470,
    WidthPos: -480,
    HeightPos: -195,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13196,
    in_GraphicId: "Axia_Anthrazit_R",
    Description: "Sink top",
    Width: 980,
    Height: 5,
    Depth: 490,
    WidthPos: -490,
    HeightPos: 0,
    DepthPos: -490,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:axia_anthrazit_r"
  }
  , {
    _id: 13197,
    in_GraphicId: "Axia_Anthrazit_R",
    Description: "Sink base",
    Width: 548.5,
    Height: 190,
    Depth: 470,
    WidthPos: -68.5,
    HeightPos: -195,
    DepthPos: -480,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13198,
    in_GraphicId: "SN87TX02CE",
    Description: "Complete Dishwasher",
    Width: 598,
    Height: 813.5,
    Depth: 550,
    WidthPos: -299,
    HeightPos: -813.5,
    DepthPos: -550,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/35d51ecf-18a5-4c6e-b13c-df8292da8972_sn87tx02ce.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=rzeZ1uEF8coiiukK6wnJZT1aTjJUCcqdddqux2PwrII%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzVkNTFlY2YtMThhNS00YzZlLWIxM2MtZGY4MjkyZGE4OTcyX3NuODd0eDAyY2Uub2Jq',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13199,
    in_GraphicId: "SR65YX08ME",
    Description: "Complete Dishwasher",
    Width: 448,
    Height: 813.5,
    Depth: 550,
    WidthPos: -224,
    HeightPos: -813.5,
    DepthPos: -550,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1048cdb4-08a8-4a91-ac1e-296471acc1f5_sr65yx08me.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=BwLTlOV3hZE46B7Uh8lrLrdJ%2BUfLjdjQVodyeREgrJk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTA0OGNkYjQtMDhhOC00YTkxLWFjMWUtMjk2NDcxYWNjMWY1X3NyNjV5eDA4bWUub2Jq',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13200,
    in_GraphicId: "SN55ZS07CE",
    Description: "Dishwasher Carcase",
    Width: 598,
    Height: 813.5,
    Depth: 515,
    WidthPos: -299,
    HeightPos: -813.5,
    DepthPos: -548,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/411051c5-b9c3-4900-8d07-a4481cb57140_carcasedw.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=XfQ%2BkaQfmdSU7HEnjDitW5LkNFeAI1yJRuoqcd2tKXE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDExMDUxYzUtYjljMy00OTAwLThkMDctYTQ0ODFjYjU3MTQwX2NhcmNhc2Vkdy5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13201,
    in_GraphicId: "SN55ZS07CE",
    Description: "Dishwasher Frontpanel",
    Width: 594,
    Height: 530,
    Depth: 30,
    WidthPos: -297,
    HeightPos: -650,
    DepthPos: -30,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:chrome"
  }
  , {
    _id: 13202,
    in_GraphicId: "SN55ZS07CE",
    Description: "Dishwasher Controlpanel",
    Width: 598,
    Height: 115,
    Depth: 53,
    WidthPos: -299,
    HeightPos: -120,
    DepthPos: -30,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:sn55zs07ce"
  }
  , {
    _id: 13203,
    in_GraphicId: "SR55ZS10ME",
    Description: "Dishwasher Carcase",
    Width: 448,
    Height: 813.5,
    Depth: 515,
    WidthPos: -224,
    HeightPos: -813.5,
    DepthPos: -548,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8bc5c58c-8f71-406f-8f24-25f575712fdc_carcasedw_small.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=6D9TW9FJRJUCzp7%2BilT5bI%2Bg%2BLEypSKR1nq9YVUBG8c%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGJjNWM1OGMtOGY3MS00MDZmLThmMjQtMjVmNTc1NzEyZmRjX2NhcmNhc2Vkd19zbWFsbC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13204,
    in_GraphicId: "SR55ZS10ME",
    Description: "Dishwasher Frontpanel",
    Width: 444,
    Height: 530,
    Depth: 30,
    WidthPos: -222,
    HeightPos: -650,
    DepthPos: -30,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:chrome"
  }
  , {
    _id: 13205,
    in_GraphicId: "SR55ZS10ME",
    Description: "Dishwasher Controlpanel",
    Width: 448,
    Height: 115,
    Depth: 53,
    WidthPos: -224,
    HeightPos: -120,
    DepthPos: -30,
    Model3D_Value: undefined,
    Model3D_Id: undefined,
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:sr55zs10me"
  }
  , {
    _id: 13206,
    in_GraphicId: "KU21WAHG0",
    Description: "Complete Baseunit Fridge",
    Width: 594,
    Height: 826,
    Depth: 628,
    WidthPos: -297,
    HeightPos: -826,
    DepthPos: -550,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4b65fa09-390e-4cb1-9ff7-9e175e694443_ku21wahg0.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=7kvQOb6td%2FNHmnWpxhURNfcqGmc0WMqkUUpE9qYNjqI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGI2NWZhMDktMzkwZS00Y2IxLTlmZjctOWUxNzVlNjk0NDQzX2t1MjF3YWhnMC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:KU21WAHG0"
  }
  , {
    _id: 13207,
    in_GraphicId: "KU20WVHF0",
    Description: "Complete Baseunit Fridge",
    Width: 301,
    Height: 826,
    Depth: 628,
    WidthPos: -150.5,
    HeightPos: -826,
    DepthPos: -550,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2dafa6b9-2e5e-4429-9c6d-6b6a32f7acb8_ku20wvhf0.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=rG3WYnj4YDO3Kymj4ystDnbWRsGp%2FFi2pwj87fmdFao%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmRhZmE2YjktMmU1ZS00NDI5LTljNmQtNmI2YTMyZjdhY2I4X2t1MjB3dmhmMC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "cabinetlibrary:KU20WVHF0"
  }
  , {
    _id: 13208,
    in_GraphicId: "KU21RADE0",
    Description: "Complete Baseunit Fridge",
    Width: 597,
    Height: 820,
    Depth: 550,
    WidthPos: -298.5,
    HeightPos: -820,
    DepthPos: -550,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/01b42c76-d83b-4e65-ab17-a7b5e0916423_baseunitfridge.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=tNSKHLejInlxwZjP%2B6w80IzWqNDhSMuaci2DHXPACw4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDFiNDJjNzYtZDgzYi00ZTY1LWFiMTctYTdiNWUwOTE2NDIzX2Jhc2V1bml0ZnJpZGdlLm9iag==',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:w980_st7"
  }
  , {
    _id: 13209,
    in_GraphicId: "GenericLaundryMachine",
    Description: "Generic Laundry Machine",
    Width: 600,
    Height: 850,
    Depth: 654,
    WidthPos: -300,
    HeightPos: 0,
    DepthPos: -654,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1e76f99d-8428-4e7a-9729-3f5ef165fb40_washingmachine_rot.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=apElipd6a%2FKWd6uTngjPByclGDhq9KPBwyP94jufSyE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWU3NmY5OWQtODQyOC00ZTdhLTk3MjktM2Y1ZWYxNjVmYjQwX3dhc2hpbmdtYWNoaW5lX3JvdC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: ""
  }
  , {
    _id: 13210,
    in_GraphicId: "Metra_R",
    Description: "Sink Complete",
    Width: 1000,
    Height: 203,
    Depth: 500,
    WidthPos: -500,
    HeightPos: -195,
    DepthPos: -490,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/45ca392a-6b65-4ce1-90cc-7a64bb331e1b_metra_xl6s_f_518881.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=7h0cacDAigO3lzh7fb1ahjiiKLqhn5Q%2B7tze0sOPQm4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDVjYTM5MmEtNmI2NS00Y2UxLTkwY2MtN2E2NGJiMzMxZTFiX21ldHJhX3hsNnNfZl81MTg4ODEub2Jq',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:u960_st9"
  }
  , {
    _id: 13211,
    in_GraphicId: "Metra_R",
    Description: "Sink inlay",
    Width: 100,
    Height: 1,
    Depth: 100,
    WidthPos: 55,
    HeightPos: -182,
    DepthPos: -290,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8dfe8133-9c4b-4838-b569-b9562193fcff_metra_bottom.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=1wpCb2%2BdQaL15CqIFn%2BskgIqn8MuMDdP8%2BBzq1QzYLY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGRmZTgxMzMtOWM0Yi00ODM4LWI1NjktYjk1NjIxOTNmY2ZmX21ldHJhX2JvdHRvbS5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:f765_st20"
  }
  , {
    _id: 13212,
    in_GraphicId: "LI99SA684",
    Description: "Internal Hood",
    Width: 898,
    Height: 423,
    Depth: 290,
    WidthPos: -449,
    HeightPos: -41,
    DepthPos: -290,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6d875ee9-cc09-4ab6-b8e2-8b0d050f31ae_li99sa684.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=09qqNLzYNbxYIy0Q4a%2FT%2B%2Bq9vOmAic%2BzZ9yRmOOshSM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmQ4NzVlZTktY2MwOS00YWI2LWI4ZTItOGIwZDA1MGYzMWFlX2xpOTlzYTY4NC5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: "egger:w980_st7"
  }
  , {
    _id: 13213,
    in_GraphicId: "D46ED52X1",
    Description: "Flad panel hood",
    Width: 598,
    Height: 471,
    Depth: 290,
    WidthPos: -299,
    HeightPos: -41,
    DepthPos: -290,
    Model3D_Value: 'https://tecconfig-preview.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/61fc4ca5-d8f5-4d16-b629-487d2c81725e_d46ed52x1.obj?sv=2023-11-03&st=2026-05-30T00%3A00%3A00Z&se=2026-07-02T00%3A00%3A00Z&sr=b&sp=r&sig=FeZaopujgWxJDGNP7v%2FBk0TQsalIlvIPlEbRwIxdV%2F8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjFmYzRjYTUtZDhmNS00ZDE2LWI2MjktNDg3ZDJjODE3MjVlX2Q0NmVkNTJ4MS5vYmo=',
    StretchParams: undefined,
    get Model3D(): IThreeDModelData | undefined {
      if (this.Model3D_Value === undefined) {
        return undefined;
      }
      return {
        _3dUrl: this.Model3D_Value!,
        _3dObjectId: this.Model3D_Id!,
        _3dParameters: this.StretchParams
      }
    },
    MaterialId: ""
  }
];
