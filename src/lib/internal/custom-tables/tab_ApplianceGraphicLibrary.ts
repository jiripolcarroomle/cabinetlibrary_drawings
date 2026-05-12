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
import { ITableParents_mc_HoodInsert01 } from '../var-interfaces';
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
    _id: 12907,
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
    _id: 12908,
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
    _id: 12909,
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
    _id: 12910,
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
    _id: 12911,
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
    _id: 12912,
    in_GraphicId: "CM776GKB1",
    Description: "Oven Handle",
    Width: 507,
    Height: 14,
    Depth: 45,
    WidthPos: -253.5,
    HeightPos: 304,
    DepthPos: 19.5,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/77ecdd56-ee66-459c-8665-5cc10750100d_cm776gkb1_g.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=3JccDW%2FGCtPU1XJNYbNWOkToAdRtOpGuGuYSFMCyxNg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzdlY2RkNTYtZWU2Ni00NTljLTg2NjUtNWNjMTA3NTAxMDBkX2NtNzc2Z2tiMV9nLm9iag==',
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
    _id: 12913,
    in_GraphicId: "CM776GKB1",
    Description: "Oven carcase",
    Width: 560,
    Height: 444,
    Depth: 526,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -527,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/46674e9c-3c30-49f0-9746-c5c8de32d787_cm776gkb1_c.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=JSfxmjSMP6xi%2FBoahPKZT1gROJWUA%2B2C8mOYytXpxnw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDY2NzRlOWMtM2MzMC00OWYwLTk3NDYtYzVjOGRlMzJkNzg3X2NtNzc2Z2tiMV9jLm9iag==',
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
    _id: 12914,
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
    _id: 12915,
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
    _id: 12916,
    in_GraphicId: "FridgeDefault",
    Description: "Complete Fridge",
    Width: 558,
    Height: 1221,
    Depth: 546,
    WidthPos: -279,
    HeightPos: 0,
    DepthPos: -546,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cad5aaba-2475-4316-a42c-4ec74a2b5d50_ki41fadd0.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=SE%2B853NCG2S1V4uTtkhSp1iQPn3esQ7xMUOVhkU8PiM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2FkNWFhYmEtMjQ3NS00MzE2LWE0MmMtNGVjNzRhMmI1ZDUwX2tpNDFmYWRkMC5vYmo=',
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
    _id: 12917,
    in_GraphicId: "KI86SHDD0",
    Description: "Complete Fridge",
    Width: 558,
    Height: 1772,
    Depth: 554,
    WidthPos: -279,
    HeightPos: 0,
    DepthPos: -554,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e0a49921-2246-45bc-ac97-1b3efe1305b0_ki86shdd0.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=f4QHeotUsMW7Dtvvf5X%2Bk%2FNHRKn%2Fdtgt0HFwACwPQtA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTBhNDk5MjEtMjI0Ni00NWJjLWFjOTctMWIzZWZlMTMwNWIwX2tpODZzaGRkMC5vYmo=',
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
    _id: 12918,
    in_GraphicId: "KI82LADD0",
    Description: "Complete Fridge",
    Width: 558,
    Height: 1776,
    Depth: 546,
    WidthPos: -279,
    HeightPos: 0,
    DepthPos: -546,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d4f09362-d18e-4e95-ba4a-bf01bbe9788c_ki82ladd0.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=67zAk1pRez2k8v32N7dfGulyKHj%2BTlEaEuvXreTWy3A%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDRmMDkzNjItZDE4ZS00ZTk1LWJhNGEtYmYwMWJiZTk3ODhjX2tpODJsYWRkMC5vYmo=',
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
    _id: 12919,
    in_GraphicId: "KI41FADD0",
    Description: "Complete Fridge",
    Width: 558,
    Height: 1221,
    Depth: 546,
    WidthPos: -279,
    HeightPos: 0,
    DepthPos: -546,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cad5aaba-2475-4316-a42c-4ec74a2b5d50_ki41fadd0.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=SE%2B853NCG2S1V4uTtkhSp1iQPn3esQ7xMUOVhkU8PiM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2FkNWFhYmEtMjQ3NS00MzE2LWE0MmMtNGVjNzRhMmI1ZDUwX2tpNDFmYWRkMC5vYmo=',
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
    _id: 12920,
    in_GraphicId: "HoodDefault",
    Description: "Hood Base",
    Width: 598,
    Height: 41,
    Depth: 500,
    WidthPos: -299,
    HeightPos: 0,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8a5b79a6-89e1-48cc-90c1-3582e74cf6e7_carc_lc66bbm50.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=8UypZqEImCTsLEuFVhLYSIRpSnzNBkr2cooaMFFy0lo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGE1Yjc5YTYtODllMS00OGNjLTkwYzEtMzU4MmU3NGNmNmU3X2NhcmNfbGM2NmJibTUwLm9iag==',
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
    _id: 12921,
    in_GraphicId: "HoodDefault",
    Description: "Hood Tower",
    Width: 260,
    Height: 700,
    Depth: 250,
    WidthPos: -130,
    HeightPos: 41,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/72ead85e-fc4e-411c-8fde-3b2c1cfceb7d_tower_lc66bbm50.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=htuPDz%2Bhpx3U5p4pmFgMJGHVdlBNCM5IKgaGZQAf6wg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzJlYWQ4NWUtZmM0ZS00MTFjLThmZGUtM2IyYzFjZmNlYjdkX3Rvd2VyX2xjNjZiYm01MC5vYmo=',
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
    _id: 12922,
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
    _id: 12923,
    in_GraphicId: "HoodDefault",
    Description: "Logo",
    Width: 50,
    Height: 8.8,
    Depth: 1,
    WidthPos: -25,
    HeightPos: 150,
    DepthPos: 250,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/590c1880-ea27-4f6e-a10c-e743ca86fc86_siemens.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=8uDi4p4DCIBumULs%2B7%2BCoDvYK5TdJpEyhKkELnu%2BpBs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTkwYzE4ODAtZWEyNy00ZjZlLWExMGMtZTc0M2NhODZmYzg2X3NpZW1lbnMub2Jq',
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
    _id: 12924,
    in_GraphicId: "LC66BBM50",
    Description: "Hood Tower",
    Width: 260,
    Height: 700,
    Depth: 250,
    WidthPos: -130,
    HeightPos: 41,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/72ead85e-fc4e-411c-8fde-3b2c1cfceb7d_tower_lc66bbm50.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=htuPDz%2Bhpx3U5p4pmFgMJGHVdlBNCM5IKgaGZQAf6wg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzJlYWQ4NWUtZmM0ZS00MTFjLThmZGUtM2IyYzFjZmNlYjdkX3Rvd2VyX2xjNjZiYm01MC5vYmo=',
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
    _id: 12925,
    in_GraphicId: "LC66BBM50",
    Description: "Hood Base",
    Width: 598,
    Height: 41,
    Depth: 500,
    WidthPos: -299,
    HeightPos: 0,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8a5b79a6-89e1-48cc-90c1-3582e74cf6e7_carc_lc66bbm50.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=8UypZqEImCTsLEuFVhLYSIRpSnzNBkr2cooaMFFy0lo%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGE1Yjc5YTYtODllMS00OGNjLTkwYzEtMzU4MmU3NGNmNmU3X2NhcmNfbGM2NmJibTUwLm9iag==',
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
    _id: 12926,
    in_GraphicId: "LC66BBM50",
    Description: "Logo",
    Width: 50,
    Height: 8.8,
    Depth: 1,
    WidthPos: -25,
    HeightPos: 150,
    DepthPos: 250,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/590c1880-ea27-4f6e-a10c-e743ca86fc86_siemens.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=8uDi4p4DCIBumULs%2B7%2BCoDvYK5TdJpEyhKkELnu%2BpBs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTkwYzE4ODAtZWEyNy00ZjZlLWExMGMtZTc0M2NhODZmYzg2X3NpZW1lbnMub2Jq',
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
    _id: 12927,
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
    _id: 12928,
    in_GraphicId: "LC96BBM50",
    Description: "Hood Tower",
    Width: 260,
    Height: 700,
    Depth: 250,
    WidthPos: -130,
    HeightPos: 51,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/72ead85e-fc4e-411c-8fde-3b2c1cfceb7d_tower_lc66bbm50.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=htuPDz%2Bhpx3U5p4pmFgMJGHVdlBNCM5IKgaGZQAf6wg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzJlYWQ4NWUtZmM0ZS00MTFjLThmZGUtM2IyYzFjZmNlYjdkX3Rvd2VyX2xjNjZiYm01MC5vYmo=',
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
    _id: 12929,
    in_GraphicId: "LC96BBM50",
    Description: "Hood Base",
    Width: 898,
    Height: 51,
    Depth: 500,
    WidthPos: -449,
    HeightPos: 0,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cf186dac-45e9-42a8-961d-f02dc4983b05_carc_lc96bbm50.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=wsUe1v2bX0By9IMBKVnhQ7fr6jFlO6eI5ju1FQq3Eow%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2YxODZkYWMtNDVlOS00MmE4LTk2MWQtZjAyZGM0OTgzYjA1X2NhcmNfbGM5NmJibTUwLm9iag==',
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
    _id: 12930,
    in_GraphicId: "LC96BBM50",
    Description: "Logo",
    Width: 50,
    Height: 8.8,
    Depth: 1,
    WidthPos: -25,
    HeightPos: 150,
    DepthPos: 250,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/590c1880-ea27-4f6e-a10c-e743ca86fc86_siemens.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=8uDi4p4DCIBumULs%2B7%2BCoDvYK5TdJpEyhKkELnu%2BpBs%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTkwYzE4ODAtZWEyNy00ZjZlLWExMGMtZTc0M2NhODZmYzg2X3NpZW1lbnMub2Jq',
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
    _id: 12931,
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
    _id: 12932,
    in_GraphicId: "LC65KDK60",
    Description: "Hood Base",
    Width: 456,
    Height: 1090,
    Depth: 318.5,
    WidthPos: -228,
    HeightPos: 38,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/74862dbd-c0b1-4c9d-9311-82554070d126_carc_lc65kdk60.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=3Hf7FbvX3VLAZRSL2hCZjktODJxJqNqyR1KoitGAfmI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzQ4NjJkYmQtYzBiMS00YzlkLTkzMTEtODI1NTQwNzBkMTI2X2NhcmNfbGM2NWtkazYwLm9iag==',
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
    _id: 12933,
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
    _id: 12934,
    in_GraphicId: "LC85KDK60",
    Description: "Hood Base",
    Width: 456,
    Height: 1090,
    Depth: 318.5,
    WidthPos: -228,
    HeightPos: 38,
    DepthPos: 0,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/74862dbd-c0b1-4c9d-9311-82554070d126_carc_lc65kdk60.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=3Hf7FbvX3VLAZRSL2hCZjktODJxJqNqyR1KoitGAfmI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzQ4NjJkYmQtYzBiMS00YzlkLTkzMTEtODI1NTQwNzBkMTI2X2NhcmNfbGM2NWtkazYwLm9iag==',
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
    _id: 12935,
    in_GraphicId: "LC85KDK60",
    Description: "Hood Front",
    Width: 794,
    Height: 440,
    Depth: 241,
    WidthPos: -397,
    HeightPos: 0,
    DepthPos: 151,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5ccdd764-888b-4edf-9e2c-9afe53f5ec53_front_lc85kdk60.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=kTVhy50XXVx5pYZ4CvdC5b2vIysZ9NbO3RFaYgVVFT0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWNjZGQ3NjQtODg4Yi00ZWRmLTllMmMtOWFmZTUzZjVlYzUzX2Zyb250X2xjODVrZGs2MC5vYmo=',
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
    _id: 12936,
    in_GraphicId: "CS736G1B1",
    Description: "Oven Handle",
    Width: 507,
    Height: 14,
    Depth: 45,
    WidthPos: -253.5,
    HeightPos: 304,
    DepthPos: 19.5,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/77ecdd56-ee66-459c-8665-5cc10750100d_cm776gkb1_g.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=3JccDW%2FGCtPU1XJNYbNWOkToAdRtOpGuGuYSFMCyxNg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzdlY2RkNTYtZWU2Ni00NTljLTg2NjUtNWNjMTA3NTAxMDBkX2NtNzc2Z2tiMV9nLm9iag==',
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
    _id: 12937,
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
    _id: 12938,
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
    _id: 12939,
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
    _id: 12940,
    in_GraphicId: "DefaultHob",
    Description: "Hob frame",
    Width: 580,
    Height: 1,
    Depth: 511,
    WidthPos: -290,
    HeightPos: 0,
    DepthPos: -500.5,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/18c238f0-83e4-4a3c-b26a-0dc3fb090c85_et601fnp1e_frame.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=JyWWzbiHGF6wUFavPMye5EkJ6Ut8NGaS516iUaAGtlk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMThjMjM4ZjAtODNlNC00YTNjLWIyNmEtMGRjM2ZiMDkwYzg1X2V0NjAxZm5wMWVfZnJhbWUub2Jq',
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
    _id: 12941,
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
    _id: 12942,
    in_GraphicId: "PUXU",
    Description: "Hob carcase",
    Width: 809,
    Height: 199,
    Depth: 579,
    WidthPos: -404.5,
    HeightPos: -199,
    DepthPos: -579,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bf7b702f-80bc-49a1-9fbf-73f88536a47e_puxu_carc.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=iCiRoD%2BOn5IUrKVVlX4a%2Bfgdn3EH03YOWA98l57bW3U%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmY3YjcwMmYtODBiYy00OWExLTlmYmYtNzNmODg1MzZhNDdlX3B1eHVfY2FyYy5vYmo=',
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
    _id: 12943,
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
    _id: 12944,
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
    _id: 12945,
    in_GraphicId: "ET601FNP1E",
    Description: "Hob frame",
    Width: 580,
    Height: 1,
    Depth: 511,
    WidthPos: -290,
    HeightPos: 0,
    DepthPos: -500.5,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/18c238f0-83e4-4a3c-b26a-0dc3fb090c85_et601fnp1e_frame.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=JyWWzbiHGF6wUFavPMye5EkJ6Ut8NGaS516iUaAGtlk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMThjMjM4ZjAtODNlNC00YTNjLWIyNmEtMGRjM2ZiMDkwYzg1X2V0NjAxZm5wMWVfZnJhbWUub2Jq',
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
    _id: 12946,
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
    _id: 12947,
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
    _id: 12948,
    in_GraphicId: "EX975LXC1E",
    Description: "Hob frame",
    Width: 910,
    Height: 6,
    Depth: 519,
    WidthPos: -455,
    HeightPos: 0,
    DepthPos: -509.5,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/51016403-2be3-4e2e-99ef-3a6bc7050664_ex975lxc1e_frame.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=mRkltMC65J7C%2BdXI0ze4UW%2FMzPE194a5tgnNozKYyJ8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTEwMTY0MDMtMmJlMy00ZTJlLTk5ZWYtM2E2YmM3MDUwNjY0X2V4OTc1bHhjMWVfZnJhbWUub2Jq',
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
    _id: 12949,
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
    _id: 12950,
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
    _id: 12951,
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
    _id: 12952,
    in_GraphicId: "ER6A6PB70D",
    Description: "Hob handle",
    Width: 209,
    Height: 21,
    Depth: 40,
    WidthPos: -103.5,
    HeightPos: 5,
    DepthPos: -47,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7a57d36f-59d5-42df-837e-81a65ead3e52_er6a6pb70d_handle.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=tlaDIZ7KO3pwwk6bdruuRRI22uDMIOx5CfAWMeWhN6Q%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2E1N2QzNmYtNTlkNS00MmRmLTgzN2UtODFhNjVlYWQzZTUyX2VyNmE2cGI3MGRfaGFuZGxlLm9iag==',
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
    _id: 12953,
    in_GraphicId: "ER6A6PB70D",
    Description: "Hob grill",
    Width: 590,
    Height: 30,
    Depth: 427,
    WidthPos: -294,
    HeightPos: 5,
    DepthPos: -488,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8efd8949-628d-40d7-9b34-f0f777f948e5_er6a6pb70d_grill.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=pkiHhj1vorlveoSsJ977yjCSkiUe3CI8UuBe4zC671Q%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGVmZDg5NDktNjI4ZC00MGQ3LTliMzQtZjBmNzc3Zjk0OGU1X2VyNmE2cGI3MGRfZ3JpbGwub2Jq',
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
    _id: 12954,
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
    _id: 12955,
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
    _id: 12956,
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
    _id: 12957,
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
    _id: 12958,
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
    _id: 12959,
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
    _id: 12960,
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
    _id: 12961,
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
    _id: 12962,
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
    _id: 12963,
    in_GraphicId: "HB774G1B1",
    Description: "Oven carcase",
    Width: 560,
    Height: 577,
    Depth: 525,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -526,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/db7ba301-9dd8-4761-8d7a-c5c1114949a7_hb774g1b1.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=4eq6fmRdFr3d0QvqjpWe7BnfUm1aXbMFT3Q478WPYt0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGI3YmEzMDEtOWRkOC00NzYxLThkN2EtYzVjMTExNDk0OWE3X2hiNzc0ZzFiMS5vYmo=',
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
    _id: 12964,
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
    _id: 12965,
    in_GraphicId: "HB774G1B1",
    Description: "Oven Handle",
    Width: 507,
    Height: 14,
    Depth: 45,
    WidthPos: -253.5,
    HeightPos: 440,
    DepthPos: 19.5,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/77ecdd56-ee66-459c-8665-5cc10750100d_cm776gkb1_g.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=3JccDW%2FGCtPU1XJNYbNWOkToAdRtOpGuGuYSFMCyxNg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzdlY2RkNTYtZWU2Ni00NTljLTg2NjUtNWNjMTA3NTAxMDBkX2NtNzc2Z2tiMV9nLm9iag==',
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
    _id: 12966,
    in_GraphicId: "HE510ABS2",
    Description: "Oven Handle",
    Width: 469,
    Height: 16.7,
    Depth: 12.3,
    WidthPos: -234.5,
    HeightPos: 440,
    DepthPos: 49,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/16b46f3d-edd4-4afe-adbd-4d67db8cd0e0_he510abs2_handlebar.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=j1wR%2F5VK1YbMBcWLU%2FZv40XdSVpaFHGaQ%2FKkFd%2FKHUw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTZiNDZmM2QtZWRkNC00YWZlLWFkYmQtNGQ2N2RiOGNkMGUwX2hlNTEwYWJzMl9oYW5kbGViYXIub2Jq',
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
    _id: 12967,
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
    _id: 12968,
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
    _id: 12969,
    in_GraphicId: "HE510ABS2",
    Description: "Oven carcase",
    Width: 560,
    Height: 574,
    Depth: 525,
    WidthPos: -280,
    HeightPos: 0,
    DepthPos: -526,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b4264a3c-1525-4b78-94bd-9bf377acccc5_he510abs2_carc.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=RsAZWPqGK4%2FLTLuFZqAh1wAaXISbchoeymEn1BHjiK4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjQyNjRhM2MtMTUyNS00Yjc4LTk0YmQtOWJmMzc3YWNjY2M1X2hlNTEwYWJzMl9jYXJjLm9iag==',
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
    _id: 12970,
    in_GraphicId: "HE510ABS2",
    Description: "Oven Handle",
    Width: 469,
    Height: 16.9,
    Depth: 41,
    WidthPos: -234.5,
    HeightPos: 439.9,
    DepthPos: 19.5,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0d8b60a9-c005-43d4-8be2-90b78d9c2917_he510abs2_handleblock.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=2cX9xJAwCpAuVCv5NuTOUCZkUyFDyDNdvCWaGh0Ua74%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGQ4YjYwYTktYzAwNS00M2Q0LThiZTItOTBiNzhkOWMyOTE3X2hlNTEwYWJzMl9oYW5kbGVibG9jay5vYmo=',
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
    _id: 12971,
    in_GraphicId: "HE510ABS2",
    Description: "OvenKnob",
    Width: 486,
    Height: 42,
    Depth: 15,
    WidthPos: -244,
    HeightPos: 516,
    DepthPos: 20,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ca84d03a-7bf5-4cc6-9a8e-c47830560c03_he510abs2_knob.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=sVLB8jQQXGICtFYOTvpXBmojB%2Fp%2BGe9PhrFQMdgih8w%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2E4NGQwM2EtN2JmNS00Y2M2LTlhOGUtYzQ3ODMwNTYwYzAzX2hlNTEwYWJzMl9rbm9iLm9iag==',
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
    _id: 12972,
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
    _id: 12973,
    in_GraphicId: "Metra_R",
    Description: "Sink base",
    Width: 495,
    Height: 175,
    Depth: 430,
    WidthPos: -15,
    HeightPos: -190,
    DepthPos: -455,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7da831f2-5b2e-4ca9-aa3c-44a095b35a4a_metra_r_base.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=NXQ3d7fBhXFk5J4CX5N6XNe2UvaP%2FPqXAymy3EH4PCM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2RhODMxZjItNWIyZS00Y2E5LWFhM2MtNDRhMDk1YjM1YTRhX21ldHJhX3JfYmFzZS5vYmo=',
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
    _id: 12974,
    in_GraphicId: "Cosmopolitan",
    Description: "Mixer tab",
    Width: 105,
    Height: 306,
    Depth: 259,
    WidthPos: -25.5,
    HeightPos: 0,
    DepthPos: -25.5,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/405b45f3-bd53-4eb3-81d3-fc12de0b51ac_grohe_cosmopolitan.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=cW00F4nOA9p6Az%2Fuv%2FlEB9eMp%2B9s0jE54SecCLVqG8s%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDA1YjQ1ZjMtYmQ1My00ZWIzLTgxZDMtZmMxMmRlMGI1MWFjX2dyb2hlX2Nvc21vcG9saXRhbi5vYmo=',
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
    _id: 12975,
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
    _id: 12976,
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
    _id: 12977,
    in_GraphicId: "Minta",
    Description: "Mixer tab",
    Width: 132,
    Height: 333,
    Depth: 274,
    WidthPos: -27.5,
    HeightPos: 0,
    DepthPos: -28,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/784e3ecd-e7ce-4874-ad08-2cf98c2417dc_grohe_minta.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=wr8QakX%2FsLFklIfvVBfRO0xkMbDYtXMvWDcDXY6rUVE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzg0ZTNlY2QtZTdjZS00ODc0LWFkMDgtMmNmOThjMjQxN2RjX2dyb2hlX21pbnRhLm9iag==',
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
    _id: 12978,
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
    _id: 12979,
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
    _id: 12980,
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
    _id: 12981,
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
    _id: 12982,
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
    _id: 12983,
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
    _id: 12984,
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
    _id: 12985,
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
    _id: 12986,
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
    _id: 12987,
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
    _id: 12988,
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
    _id: 12989,
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
    _id: 12990,
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
    _id: 12991,
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
    _id: 12992,
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
    _id: 12993,
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
    _id: 12994,
    in_GraphicId: "SN87TX02CE",
    Description: "Complete Dishwasher",
    Width: 598,
    Height: 813.5,
    Depth: 550,
    WidthPos: -299,
    HeightPos: -813.5,
    DepthPos: -550,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bfe02c13-fd88-4f68-8bec-b5a84c119407_sn87tx02ce.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=V4TAyI2LuioXKncLm%2B6lQxdrabCgxqlMnyxKuB4fiE0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmZlMDJjMTMtZmQ4OC00ZjY4LThiZWMtYjVhODRjMTE5NDA3X3NuODd0eDAyY2Uub2Jq',
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
    _id: 12995,
    in_GraphicId: "SR65YX08ME",
    Description: "Complete Dishwasher",
    Width: 448,
    Height: 813.5,
    Depth: 550,
    WidthPos: -224,
    HeightPos: -813.5,
    DepthPos: -550,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b2060751-c3e8-4290-adcf-9d14fcf2663d_sr65yx08me.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=7gZmirkRIIbW0VpirD27VZQPM9rvulhMKOCjTCetTIY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjIwNjA3NTEtYzNlOC00MjkwLWFkY2YtOWQxNGZjZjI2NjNkX3NyNjV5eDA4bWUub2Jq',
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
    _id: 12996,
    in_GraphicId: "SN55ZS07CE",
    Description: "Dishwasher Carcase",
    Width: 598,
    Height: 813.5,
    Depth: 515,
    WidthPos: -299,
    HeightPos: -813.5,
    DepthPos: -548,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5f2b6344-c6bb-46fb-b1fd-9ce9eecb8b62_carcasedw.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=aji%2Bz1HWK2k0bCc8TnL8CY3xyXiwFNo8euJvZnt50v0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWYyYjYzNDQtYzZiYi00NmZiLWIxZmQtOWNlOWVlY2I4YjYyX2NhcmNhc2Vkdy5vYmo=',
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
    _id: 12997,
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
    _id: 12998,
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
    _id: 12999,
    in_GraphicId: "SR55ZS10ME",
    Description: "Dishwasher Carcase",
    Width: 448,
    Height: 813.5,
    Depth: 515,
    WidthPos: -224,
    HeightPos: -813.5,
    DepthPos: -548,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8ed32ed5-db2f-4c92-8e2f-b3addaf985c8_carcasedw_small.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=a0o57YOVUEfilwWqsWQ4uTQotKtEC4jqJhQNcc2ezHw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGVkMzJlZDUtZGIyZi00YzkyLThlMmYtYjNhZGRhZjk4NWM4X2NhcmNhc2Vkd19zbWFsbC5vYmo=',
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
    _id: 13000,
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
    _id: 13001,
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
    _id: 13002,
    in_GraphicId: "KU21WAHG0",
    Description: "Complete Baseunit Fridge",
    Width: 594,
    Height: 826,
    Depth: 628,
    WidthPos: -297,
    HeightPos: -826,
    DepthPos: -550,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f0de2b56-4c37-40dc-8816-e319805317ba_ku21wahg0.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=OnLD1EWgNgvAmQManzSrhZKe8%2FP4u8CMRUqqfvnhsgc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjBkZTJiNTYtNGMzNy00MGRjLTg4MTYtZTMxOTgwNTMxN2JhX2t1MjF3YWhnMC5vYmo=',
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
    _id: 13003,
    in_GraphicId: "KU20WVHF0",
    Description: "Complete Baseunit Fridge",
    Width: 301,
    Height: 826,
    Depth: 628,
    WidthPos: -150.5,
    HeightPos: -826,
    DepthPos: -550,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cbc28cd3-259d-4932-89d1-154d193d0d3e_ku20wvhf0.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=u%2Bkg9lWBOn3SYPCB9EtR6DQXFaULjlwcpRSt4lkCT4E%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2JjMjhjZDMtMjU5ZC00OTMyLTg5ZDEtMTU0ZDE5M2QwZDNlX2t1MjB3dmhmMC5vYmo=',
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
    _id: 13004,
    in_GraphicId: "KU21RADE0",
    Description: "Complete Baseunit Fridge",
    Width: 597,
    Height: 820,
    Depth: 550,
    WidthPos: -298.5,
    HeightPos: -820,
    DepthPos: -550,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d918ad24-4bb9-4359-a12d-678b825fa18b_baseunitfridge.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=uFFuANH0hQv5K9%2Bc%2FDHdJKiRdBk2hRFcXe8Disq%2BUJE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDkxOGFkMjQtNGJiOS00MzU5LWExMmQtNjc4YjgyNWZhMThiX2Jhc2V1bml0ZnJpZGdlLm9iag==',
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
    _id: 13005,
    in_GraphicId: "GenericLaundryMachine",
    Description: "Generic Laundry Machine",
    Width: 600,
    Height: 850,
    Depth: 654,
    WidthPos: -300,
    HeightPos: 0,
    DepthPos: -654,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/13d78d6b-ca52-449d-a361-65df6cb05b4b_washingmachine_rot.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=ZgnXZXutKh6mehjjTuxLazknhKaX6ggLqN8j3oa5zJA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTNkNzhkNmItY2E1Mi00NDlkLWEzNjEtNjVkZjZjYjA1YjRiX3dhc2hpbmdtYWNoaW5lX3JvdC5vYmo=',
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
    _id: 13006,
    in_GraphicId: "Metra_R",
    Description: "Sink Complete",
    Width: 1000,
    Height: 203,
    Depth: 500,
    WidthPos: -500,
    HeightPos: -195,
    DepthPos: -490,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/12871131-8678-4014-9bc7-fbe3c7d48cdd_metra_xl6s_f_518881.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=sRy2AtHHFcvvPySaOFnaHzZA7dPystR2V71YfXQmMlc%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTI4NzExMzEtODY3OC00MDE0LTliYzctZmJlM2M3ZDQ4Y2RkX21ldHJhX3hsNnNfZl81MTg4ODEub2Jq',
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
    _id: 13007,
    in_GraphicId: "Metra_R",
    Description: "Sink inlay",
    Width: 100,
    Height: 1,
    Depth: 100,
    WidthPos: 55,
    HeightPos: -182,
    DepthPos: -290,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/17e9b13b-2b0a-4185-a8f7-447b195388e6_metra_bottom.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=yhKkvSMG64SQTcMB971eF%2FASY2Br8H73zspGPPxgRJM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTdlOWIxM2ItMmIwYS00MTg1LWE4ZjctNDQ3YjE5NTM4OGU2X21ldHJhX2JvdHRvbS5vYmo=',
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
    _id: 13008,
    in_GraphicId: "LI99SA684",
    Description: "Internal Hood",
    Width: 898,
    Height: 423,
    Depth: 290,
    WidthPos: 0,
    HeightPos: -41,
    DepthPos: -290,
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f3e98e4a-7686-494e-8b8a-9f4860208a7b_li99sa684.obj?sv=2023-11-03&st=2026-04-29T00%3A00%3A00Z&se=2026-06-01T00%3A00%3A00Z&sr=b&sp=r&sig=VT1mCRwrRfDXt2XuRqShHfNu%2FN%2BOnHIJVfQ7QXNnLWQ%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjNlOThlNGEtNzY4Ni00OTRlLThiOGEtOWY0ODYwMjA4YTdiX2xpOTlzYTY4NC5vYmo=',
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
];
