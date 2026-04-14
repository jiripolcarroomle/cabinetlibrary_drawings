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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b7f49711-cd42-4a94-945d-8310295fc55e_cm776gkb1_g.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=hV9g6f1ORX50%2FCb9RbLzPnPmPcoJDFonLgMYa2OC0EY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjdmNDk3MTEtY2Q0Mi00YTk0LTk0NWQtODMxMDI5NWZjNTVlX2NtNzc2Z2tiMV9nLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/61b1fcde-2aad-47d9-bb5f-e02a6c4908a3_cm776gkb1_c.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=j70geuhTddRpWYQk3s1SbMFcZx%2F7rbahJ1GvyEhS0qg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjFiMWZjZGUtMmFhZC00N2Q5LWJiNWYtZTAyYTZjNDkwOGEzX2NtNzc2Z2tiMV9jLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/576e1921-b916-4192-9e33-0ed85be40010_ki41fadd0.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=yxb13oaakhlDLjqEWOdO2Zjxl2bzb0M3GkCdrlHBZ5Y%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTc2ZTE5MjEtYjkxNi00MTkyLTllMzMtMGVkODViZTQwMDEwX2tpNDFmYWRkMC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/380d5512-1655-4b2c-9103-3ac198e3265e_ki86shdd0.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=IRRPmeTiaXC0r1OpCFHAm6zI7SZKQ2pqvyA8%2BW0UwQI%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzgwZDU1MTItMTY1NS00YjJjLTkxMDMtM2FjMTk4ZTMyNjVlX2tpODZzaGRkMC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fe119abd-7cca-40a7-bd75-11c914512dc1_ki82ladd0.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=EofxmvVuT2PpBXwbvb9upDTbVxyEukiEHlWaC4n6MWg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmUxMTlhYmQtN2NjYS00MGE3LWJkNzUtMTFjOTE0NTEyZGMxX2tpODJsYWRkMC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/576e1921-b916-4192-9e33-0ed85be40010_ki41fadd0.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=yxb13oaakhlDLjqEWOdO2Zjxl2bzb0M3GkCdrlHBZ5Y%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTc2ZTE5MjEtYjkxNi00MTkyLTllMzMtMGVkODViZTQwMDEwX2tpNDFmYWRkMC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f7860f6d-d813-468c-bdfd-ab8e5eb4e572_carc_lc66bbm50.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=waqXYuYWZjIga%2FgEdKpTPfQAOYUobJI55MPmigb4i1M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjc4NjBmNmQtZDgxMy00NjhjLWJkZmQtYWI4ZTVlYjRlNTcyX2NhcmNfbGM2NmJibTUwLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6d524599-910a-477c-8258-f83237100ef7_tower_lc66bbm50.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=pySJ69aWVFBW54jFO9d8ddp8Gbutl6JrCogvefM3MMg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmQ1MjQ1OTktOTEwYS00NzdjLTgyNTgtZjgzMjM3MTAwZWY3X3Rvd2VyX2xjNjZiYm01MC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/967a358f-8636-4c74-bbce-7026c6e4d124_siemens.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=wWrNmVJPkLeOz2F9USbV2hNS5X%2FONrQlhYhNudhD39o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTY3YTM1OGYtODYzNi00Yzc0LWJiY2UtNzAyNmM2ZTRkMTI0X3NpZW1lbnMub2Jq',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6d524599-910a-477c-8258-f83237100ef7_tower_lc66bbm50.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=pySJ69aWVFBW54jFO9d8ddp8Gbutl6JrCogvefM3MMg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmQ1MjQ1OTktOTEwYS00NzdjLTgyNTgtZjgzMjM3MTAwZWY3X3Rvd2VyX2xjNjZiYm01MC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f7860f6d-d813-468c-bdfd-ab8e5eb4e572_carc_lc66bbm50.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=waqXYuYWZjIga%2FgEdKpTPfQAOYUobJI55MPmigb4i1M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjc4NjBmNmQtZDgxMy00NjhjLWJkZmQtYWI4ZTVlYjRlNTcyX2NhcmNfbGM2NmJibTUwLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/967a358f-8636-4c74-bbce-7026c6e4d124_siemens.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=wWrNmVJPkLeOz2F9USbV2hNS5X%2FONrQlhYhNudhD39o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTY3YTM1OGYtODYzNi00Yzc0LWJiY2UtNzAyNmM2ZTRkMTI0X3NpZW1lbnMub2Jq',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6d524599-910a-477c-8258-f83237100ef7_tower_lc66bbm50.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=pySJ69aWVFBW54jFO9d8ddp8Gbutl6JrCogvefM3MMg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmQ1MjQ1OTktOTEwYS00NzdjLTgyNTgtZjgzMjM3MTAwZWY3X3Rvd2VyX2xjNjZiYm01MC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4c66e32f-4360-467e-94c3-7987a3016bbf_carc_lc96bbm50.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=bLpPb4sateuxAGXK5azs6M78ZzsxfwfuEemuO6pZOto%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGM2NmUzMmYtNDM2MC00NjdlLTk0YzMtNzk4N2EzMDE2YmJmX2NhcmNfbGM5NmJibTUwLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/967a358f-8636-4c74-bbce-7026c6e4d124_siemens.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=wWrNmVJPkLeOz2F9USbV2hNS5X%2FONrQlhYhNudhD39o%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTY3YTM1OGYtODYzNi00Yzc0LWJiY2UtNzAyNmM2ZTRkMTI0X3NpZW1lbnMub2Jq',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3c2e986d-5750-490e-b55d-a8ae9adc4ca9_carc_lc65kdk60.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=U2nAazaRKb%2Fm6O4HVrCQ%2B5lN%2FPp0pQUtUlpGkhw3tbA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2MyZTk4NmQtNTc1MC00OTBlLWI1NWQtYThhZTlhZGM0Y2E5X2NhcmNfbGM2NWtkazYwLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3c2e986d-5750-490e-b55d-a8ae9adc4ca9_carc_lc65kdk60.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=U2nAazaRKb%2Fm6O4HVrCQ%2B5lN%2FPp0pQUtUlpGkhw3tbA%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2MyZTk4NmQtNTc1MC00OTBlLWI1NWQtYThhZTlhZGM0Y2E5X2NhcmNfbGM2NWtkazYwLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/91fef4d4-386a-4f73-8c67-c8e7e53a76fb_front_lc85kdk60.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=rcclQDBN39ZTJTXz0XmopGCGuOGH4U8DDeomNPpVZoY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTFmZWY0ZDQtMzg2YS00ZjczLThjNjctYzhlN2U1M2E3NmZiX2Zyb250X2xjODVrZGs2MC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b7f49711-cd42-4a94-945d-8310295fc55e_cm776gkb1_g.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=hV9g6f1ORX50%2FCb9RbLzPnPmPcoJDFonLgMYa2OC0EY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjdmNDk3MTEtY2Q0Mi00YTk0LTk0NWQtODMxMDI5NWZjNTVlX2NtNzc2Z2tiMV9nLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4ed1066a-b3ba-4175-a6d9-04daec7bde7c_et601fnp1e_frame.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ABx%2Bvyqp1iDEAik%2B4k6qeoVnmS%2FdC86oUtp%2Bq9gUNUg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGVkMTA2NmEtYjNiYS00MTc1LWE2ZDktMDRkYWVjN2JkZTdjX2V0NjAxZm5wMWVfZnJhbWUub2Jq',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9d3c4aae-108c-4f1a-9adb-7a8e332a64cf_puxu_carc.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=tbT3kYG1QhgiiKvJU1gC8q4anV39xThk4JRtT55VnT0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWQzYzRhYWUtMTA4Yy00ZjFhLTlhZGItN2E4ZTMzMmE2NGNmX3B1eHVfY2FyYy5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4ed1066a-b3ba-4175-a6d9-04daec7bde7c_et601fnp1e_frame.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=ABx%2Bvyqp1iDEAik%2B4k6qeoVnmS%2FdC86oUtp%2Bq9gUNUg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGVkMTA2NmEtYjNiYS00MTc1LWE2ZDktMDRkYWVjN2JkZTdjX2V0NjAxZm5wMWVfZnJhbWUub2Jq',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b70e732e-c2bb-41eb-8a0d-157b71523d1e_ex975lxc1e_frame.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=lKczYa5j7CnCyaqrLBNz9YtWBSWpzT1hpvSDbIDvqdg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjcwZTczMmUtYzJiYi00MWViLThhMGQtMTU3YjcxNTIzZDFlX2V4OTc1bHhjMWVfZnJhbWUub2Jq',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/283c0cfd-cce6-42ea-bdf0-fe651af3e597_er6a6pb70d_handle.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=e3I97blDdN2agtytIh9egvP6NGAd4OkNPkCbfkdQktU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjgzYzBjZmQtY2NlNi00MmVhLWJkZjAtZmU2NTFhZjNlNTk3X2VyNmE2cGI3MGRfaGFuZGxlLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4cce630b-c21a-40e6-af88-a15a6eb70c36_er6a6pb70d_grill.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=gC5TxPQMIfdh4EjjHcbDq9zIyA%2BvgZ8Q%2BzLGzJY9Ia4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGNjZTYzMGItYzIxYS00MGU2LWFmODgtYTE1YTZlYjcwYzM2X2VyNmE2cGI3MGRfZ3JpbGwub2Jq',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f383d309-9d1f-474f-9f17-dfb85f9bb81d_hb774g1b1.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=JjNB6ElpYGjmGQ3fxAz1ia5AU5P8%2Fgq2SqOC%2BcxtkNw%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjM4M2QzMDktOWQxZi00NzRmLTlmMTctZGZiODVmOWJiODFkX2hiNzc0ZzFiMS5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b7f49711-cd42-4a94-945d-8310295fc55e_cm776gkb1_g.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=hV9g6f1ORX50%2FCb9RbLzPnPmPcoJDFonLgMYa2OC0EY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjdmNDk3MTEtY2Q0Mi00YTk0LTk0NWQtODMxMDI5NWZjNTVlX2NtNzc2Z2tiMV9nLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/71ce4964-04af-43e4-b5f1-bd4e4aa30e05_he510abs2_handlebar.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=hRI%2BYhiWBpa6tf6rfP9zdAC%2Bv8UniTKtPgMZJSjWwew%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzFjZTQ5NjQtMDRhZi00M2U0LWI1ZjEtYmQ0ZTRhYTMwZTA1X2hlNTEwYWJzMl9oYW5kbGViYXIub2Jq',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b3f4f387-ee71-468b-b3b7-7ff4679ace1e_he510abs2_carc.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=J%2FULmbPQedTSl2G%2FDzcTEVk7na5BLWiv8jzq5CE3vBM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjNmNGYzODctZWU3MS00NjhiLWIzYjctN2ZmNDY3OWFjZTFlX2hlNTEwYWJzMl9jYXJjLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/35fd7738-d211-4f10-ab62-8771f26a1c5c_he510abs2_handleblock.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=vCwRm5Si5QGotLz1BzrbOW8IS%2FjzG6927X2pNpqEPoM%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzVmZDc3MzgtZDIxMS00ZjEwLWFiNjItODc3MWYyNmExYzVjX2hlNTEwYWJzMl9oYW5kbGVibG9jay5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c442778f-26a6-47f1-8870-2862c9b9936e_he510abs2_knob.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=EtynS%2F90EDQJJAMfOayRT5mNDSVwvsGmaEGSvmb5DQY%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzQ0Mjc3OGYtMjZhNi00N2YxLTg4NzAtMjg2MmM5Yjk5MzZlX2hlNTEwYWJzMl9rbm9iLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/52e74c25-c194-4f38-9e06-bc8064c552cf_metra_r_base.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Bg3ga76v5dWwFXISUuiFJ0cSM1xWU%2FLsx95dI%2BKLciE%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTJlNzRjMjUtYzE5NC00ZjM4LTllMDYtYmM4MDY0YzU1MmNmX21ldHJhX3JfYmFzZS5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1e904eee-c58c-4667-ab75-cd5ec09ea603_grohe_cosmopolitan.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=HRFVZAzpnWBlsxzBj397uvwocU93W7XSswOM%2BgG5c3M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWU5MDRlZWUtYzU4Yy00NjY3LWFiNzUtY2Q1ZWMwOWVhNjAzX2dyb2hlX2Nvc21vcG9saXRhbi5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5e988751-d732-425c-b5bb-9cf3dd527250_grohe_minta.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=qkZpfDVF5BXaFjP0YUy893Y8a3ik0DqeTCqVTnBYRnk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWU5ODg3NTEtZDczMi00MjVjLWI1YmItOWNmM2RkNTI3MjUwX2dyb2hlX21pbnRhLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6bbcc942-3974-4d09-9df4-d34783e4c519_sn87tx02ce.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=8wfY%2FqPn1LAEGlNN%2BLu928nU9F79J0l8Q2UFPuC%2FCo0%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmJiY2M5NDItMzk3NC00ZDA5LTlkZjQtZDM0NzgzZTRjNTE5X3NuODd0eDAyY2Uub2Jq',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7d469d44-bd9f-49bf-84ad-f7aef2fe3c2e_sr65yx08me.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Ovbhl43o2MiitHa52cW9Xz2rHieK%2FAz75hyjjgXeCd4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2Q0NjlkNDQtYmQ5Zi00OWJmLTg0YWQtZjdhZWYyZmUzYzJlX3NyNjV5eDA4bWUub2Jq',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/14fd1d82-dac4-4721-848f-2b3e15140f34_carcasedw.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=MPaUm%2FYGZkXxbxbEt5ltsdwiURU06rPULeB3BrN2i1I%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTRmZDFkODItZGFjNC00NzIxLTg0OGYtMmIzZTE1MTQwZjM0X2NhcmNhc2Vkdy5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3a4e4df5-9d63-40e2-a125-60e694763ff2_carcasedw_small.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=4M%2BVGnta7OR70DdJSZ%2BfLsmMQxEOGRfYnwe4csUdfJk%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2E0ZTRkZjUtOWQ2My00MGUyLWExMjUtNjBlNjk0NzYzZmYyX2NhcmNhc2Vkd19zbWFsbC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7d4bf775-3164-4c03-800a-342ae1d1f6e9_ku21wahg0.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=Gldh30bsBgybaX3XgGPtMPjMCbEN3Ge8%2Fs6Q9Zv4r8M%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2Q0YmY3NzUtMzE2NC00YzAzLTgwMGEtMzQyYWUxZDFmNmU5X2t1MjF3YWhnMC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/90bc1a63-8f92-4f52-ae91-934882fa6819_ku20wvhf0.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=hunIGSJJj82M9TCxX6uGsXfkem23OEqoIdCghvA5Kp4%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTBiYzFhNjMtOGY5Mi00ZjUyLWFlOTEtOTM0ODgyZmE2ODE5X2t1MjB3dmhmMC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b6ba6834-57f4-4bda-8771-9800aa30c5a2_baseunitfridge.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FAIpZUd1qTc7c7hs%2BM8Dode69H2%2BoN6sbE6JerFttB8%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjZiYTY4MzQtNTdmNC00YmRhLTg3NzEtOTgwMGFhMzBjNWEyX2Jhc2V1bml0ZnJpZGdlLm9iag==',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a4d7f8a6-79c2-45c7-b0f2-49ba26f8650e_washingmachine_rot.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=GewdLDfkE3nCW%2FiR0djOJyLUQuZL2BSNXr0Jo7wiYlg%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTRkN2Y4YTYtNzljMi00NWM3LWIwZjItNDliYTI2Zjg2NTBlX3dhc2hpbmdtYWNoaW5lX3JvdC5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/08f8b8b4-5940-41ca-998b-84c89757ecbf_metra_xl6s_f_518881.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=l6W9DQTB%2FEPgatN8MQNtSWdcyEI2fwh2l7JpuUkF1ps%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDhmOGI4YjQtNTk0MC00MWNhLTk5OGItODRjODk3NTdlY2JmX21ldHJhX3hsNnNfZl81MTg4ODEub2Jq',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9408e5f2-d0ec-401b-a52e-2d1a457f3769_metra_bottom.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=YrE5XgxoQJbZJvbkwFYgHrTUIq8v177nQQCDBkbx43U%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTQwOGU1ZjItZDBlYy00MDFiLWE1MmUtMmQxYTQ1N2YzNzY5X21ldHJhX2JvdHRvbS5vYmo=',
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
    Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/111c1ae7-5326-4ef0-9835-671a1f4ea627_li99sa684.obj?sv=2023-11-03&st=2026-03-30T00%3A00%3A00Z&se=2026-05-02T00%3A00%3A00Z&sr=b&sp=r&sig=tRIgroOyteF1TsWV4EQ7vUAzJDZUJRg0YVF9fSjQSNU%3D',
    Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTExYzFhZTctNTMyNi00ZWYwLTk4MzUtNjcxYTFmNGVhNjI3X2xpOTlzYTY4NC5vYmo=',
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
