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

export interface cti_tab_GraphicLibrary {
  readonly in_Model3DGroupName?: string;
}

export interface ctm_tab_GraphicLibrary {
}

export interface cto_tab_GraphicLibrary extends ctm_tab_GraphicLibrary {
  readonly _id: number;
  readonly Model3D_Value?: string;
  readonly Model3D_Id?: string;
  get Model3D(): IThreeDModelData | undefined;
  readonly Model3DParameters?: any;
  readonly GraphicFileId?: string;
  readonly ColorId?: string;
  readonly DimensionX: number;
  readonly DimensionY: number;
  readonly DimensionZ: number;
  readonly ReferencePointXYZ?: string;
  readonly InsertionPointX: number;
  readonly InsertionPointY: number;
  readonly InsertionPointZ: number;
  readonly PartOffsetX: number;
  readonly PartOffsetY: number;
  readonly PartOffsetZ: number;
  readonly Visible?: boolean;
  readonly Identifier?: string;
}

export interface ICT_tab_GraphicLibrary
  extends cti_tab_GraphicLibrary, cto_tab_GraphicLibrary { }

export class ct2_tab_GraphicLibrary {

  public findExactly(
    in_Model3DGroupName: string | undefined,
  ): cto_tab_GraphicLibrary | undefined {
    const res = ct_tab_GraphicLibrary.find((p) =>
      p.in_Model3DGroupName === in_Model3DGroupName
    );
    return res;
  }

  public find(
    predicate: (value: cti_tab_GraphicLibrary) => boolean
  ): cto_tab_GraphicLibrary | undefined {
    for (let index = 0; index < ct_tab_GraphicLibrary.length; index++) {
      const element = ct_tab_GraphicLibrary[index];
      if (predicate(element)) return element;
    }
    return undefined;
  }
}

export var ct_tab_GraphicLibrary: ICT_tab_GraphicLibrary[] = [
  {
    _id: 1021,
    in_Model3DGroupName: "Model3DDesignLegSlanted001H250",
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
    },
    GraphicFileId: "Model3DDesignLegSlanted001H250",
    ColorId: "StainlessSteel",
    DimensionX: 139,
    DimensionY: 250,
    DimensionZ: 139,
    ReferencePointXYZ: "022",
    InsertionPointX: 123.85,
    InsertionPointY: 0,
    InsertionPointZ: -123.85,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1022,
    in_Model3DGroupName: "Model3DShelfadjWoodDesign01",
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
    },
    GraphicFileId: "Model3DShelfadjWoodDesign01",
    ColorId: "StainlessSteel",
    DimensionX: 13.3,
    DimensionY: 16,
    DimensionZ: 8.2,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: -3.5,
    InsertionPointZ: 0,
    PartOffsetX: -7.4,
    PartOffsetY: 5,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1023,
    in_Model3DGroupName: "Model3DShelfadjWoodDesign02",
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
    },
    GraphicFileId: "Model3DShelfadjWoodDesign02",
    ColorId: "StainlessSteel",
    DimensionX: 13.3,
    DimensionY: 11,
    DimensionZ: 9,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: -1,
    InsertionPointZ: 0,
    PartOffsetX: -7.3,
    PartOffsetY: 2.6,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1024,
    in_Model3DGroupName: "Model3DShelfadjWoodDesign03",
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
    },
    GraphicFileId: "Model3DShelfadjWoodDesign03",
    ColorId: "StainlessSteel",
    DimensionX: 13.3,
    DimensionY: 13,
    DimensionZ: 9,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: -1.5,
    InsertionPointZ: 0,
    PartOffsetX: -7.3,
    PartOffsetY: 2.8,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1025,
    in_Model3DGroupName: "Model3DShelfadjGlassDesign01",
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
    },
    GraphicFileId: "Model3DShelfadjGlassDesign01",
    ColorId: "StainlessSteel",
    DimensionX: 9,
    DimensionY: 7,
    DimensionZ: 7,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: -7,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1026,
    in_Model3DGroupName: "MinifixConnectionBolt01",
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
    },
    GraphicFileId: "MinifixConnectionBolt01",
    ColorId: "StainlessSteel",
    DimensionX: 0,
    DimensionY: 0,
    DimensionZ: 0,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 3.5,
    InsertionPointZ: 3.5,
    PartOffsetX: -8,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1027,
    in_Model3DGroupName: "MinifixConnectionHousing01",
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
    },
    GraphicFileId: "MinifixConnectionHousing01",
    ColorId: "StainlessSteel",
    DimensionX: 0,
    DimensionY: 0,
    DimensionZ: 0,
    ReferencePointXYZ: "000",
    InsertionPointX: 7.5,
    InsertionPointY: 7.5,
    InsertionPointZ: 6.5,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1028,
    in_Model3DGroupName: "Dowel",
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
    },
    GraphicFileId: "Dowel",
    ColorId: undefined,
    DimensionX: 0,
    DimensionY: 0,
    DimensionZ: 0,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 4,
    InsertionPointZ: 4,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1029,
    in_Model3DGroupName: "MinifixConnectionCover",
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
    },
    GraphicFileId: "MinifixConnectionCover",
    ColorId: "StainlessSteel",
    DimensionX: 0,
    DimensionY: 0,
    DimensionZ: 0,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 8.5,
    InsertionPointZ: 8.5,
    PartOffsetX: -3,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1030,
    in_Model3DGroupName: "Model3DHinge110HalfSpringSS",
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
    },
    GraphicFileId: "Model3DHinge110HalfSpringSS",
    ColorId: "StainlessSteel",
    DimensionX: 37,
    DimensionY: 66,
    DimensionZ: 74,
    ReferencePointXYZ: "012",
    InsertionPointX: 17.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 11,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1031,
    in_Model3DGroupName: "Model3DHinge110InsetSpringSS",
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
    },
    GraphicFileId: "Model3DHinge110InsetSpringSS",
    ColorId: "StainlessSteel",
    DimensionX: 39,
    DimensionY: 66,
    DimensionZ: 73.5,
    ReferencePointXYZ: "012",
    InsertionPointX: 17.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 11,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1032,
    in_Model3DGroupName: "Model3DHinge110OverlaySpringSS",
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
    },
    GraphicFileId: "Model3DHinge110OverlaySpringSS",
    ColorId: "StainlessSteel",
    DimensionX: 37,
    DimensionY: 66,
    DimensionZ: 74,
    ReferencePointXYZ: "012",
    InsertionPointX: 17.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 11,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1033,
    in_Model3DGroupName: "Model3DHinge110SoftClHalfSpringSS",
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
    },
    GraphicFileId: "Model3DHinge110SoftClHalfSpringSS",
    ColorId: "StainlessSteel",
    DimensionX: 36.8,
    DimensionY: 66,
    DimensionZ: 75.5,
    ReferencePointXYZ: "012",
    InsertionPointX: 17.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 13.3,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1034,
    in_Model3DGroupName: "Model3DHinge110SoftClInsetSpringSS",
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
    },
    GraphicFileId: "Model3DHinge110SoftClInsetSpringSS",
    ColorId: "StainlessSteel",
    DimensionX: 39,
    DimensionY: 66,
    DimensionZ: 75.5,
    ReferencePointXYZ: "012",
    InsertionPointX: 17.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 13.3,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1035,
    in_Model3DGroupName: "Model3DHinge110SoftClOverlaySpringSS",
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
    },
    GraphicFileId: "Model3DHinge110SoftClOverlaySpringSS",
    ColorId: "StainlessSteel",
    DimensionX: 36.8,
    DimensionY: 66,
    DimensionZ: 75.5,
    ReferencePointXYZ: "222",
    InsertionPointX: -19.5,
    InsertionPointY: -33,
    InsertionPointZ: 0,
    PartOffsetX: 0.2,
    PartOffsetY: 0,
    PartOffsetZ: 13.3,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1036,
    in_Model3DGroupName: "Model3DHinge155SoftClHalfSpringSS",
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
    },
    GraphicFileId: "Model3DHinge155SoftClHalfSpringSS",
    ColorId: "StainlessSteel",
    DimensionX: 82,
    DimensionY: 66,
    DimensionZ: 75,
    ReferencePointXYZ: "012",
    InsertionPointX: 17.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 13.5,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1037,
    in_Model3DGroupName: "Model3DHinge155SoftClOverlaySpringSS",
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
    },
    GraphicFileId: "Model3DHinge155SoftClOverlaySpringSS",
    ColorId: "StainlessSteel",
    DimensionX: 82,
    DimensionY: 66,
    DimensionZ: 75.1,
    ReferencePointXYZ: "012",
    InsertionPointX: 17.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 13.5,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1038,
    in_Model3DGroupName: "Model3DHinge165HalfSpringSS",
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
    },
    GraphicFileId: "Model3DHinge165HalfSpringSS",
    ColorId: "StainlessSteel",
    DimensionX: 71.7,
    DimensionY: 66,
    DimensionZ: 72.8,
    ReferencePointXYZ: "012",
    InsertionPointX: 17.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 11,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1039,
    in_Model3DGroupName: "Model3DHinge165InsetSpringSS",
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
    },
    GraphicFileId: "Model3DHinge165InsetSpringSS",
    ColorId: "StainlessSteel",
    DimensionX: 73.7,
    DimensionY: 66,
    DimensionZ: 72.8,
    ReferencePointXYZ: "012",
    InsertionPointX: 17.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 11,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1040,
    in_Model3DGroupName: "Model3DHinge165OverlaySpringSS",
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
    },
    GraphicFileId: "Model3DHinge165OverlaySpringSS",
    ColorId: "StainlessSteel",
    DimensionX: 71.7,
    DimensionY: 66,
    DimensionZ: 73.2,
    ReferencePointXYZ: "012",
    InsertionPointX: 17.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 11,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1041,
    in_Model3DGroupName: "Model3DMpCruciformA0SS",
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
    },
    GraphicFileId: "Model3DMpCruciformA0SS",
    ColorId: "StainlessSteel",
    DimensionX: 8,
    DimensionY: 50,
    DimensionZ: 41,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -16.5,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1042,
    in_Model3DGroupName: "Model3DMpCruciformA3SS",
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
    },
    GraphicFileId: "Model3DMpCruciformA3SS",
    ColorId: "StainlessSteel",
    DimensionX: 11,
    DimensionY: 50,
    DimensionZ: 41,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -16.5,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1043,
    in_Model3DGroupName: "Model3DMpCruciformA6SS",
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
    },
    GraphicFileId: "Model3DMpCruciformA6SS",
    ColorId: "StainlessSteel",
    DimensionX: 14,
    DimensionY: 50,
    DimensionZ: 41,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -16.5,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1044,
    in_Model3DGroupName: "Model3DMpCruciformSM0SS",
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
    },
    GraphicFileId: "Model3DMpCruciformSM0SS",
    ColorId: "StainlessSteel",
    DimensionX: 13.3,
    DimensionY: 48,
    DimensionZ: 64,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -9.6,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1045,
    in_Model3DGroupName: "Model3DMpCruciformSM3SS",
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
    },
    GraphicFileId: "Model3DMpCruciformSM3SS",
    ColorId: "StainlessSteel",
    DimensionX: 16.3,
    DimensionY: 48,
    DimensionZ: 64,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -10,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1046,
    in_Model3DGroupName: "Model3DMpCruciformSM6SS",
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
    },
    GraphicFileId: "Model3DMpCruciformSM6SS",
    ColorId: "StainlessSteel",
    DimensionX: 19.3,
    DimensionY: 48,
    DimensionZ: 64,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -9.6,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1047,
    in_Model3DGroupName: "Model3DMpHorizontalSM0SS",
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
    },
    GraphicFileId: "Model3DMpHorizontalSM0SS",
    ColorId: "StainlessSteel",
    DimensionX: 13.1,
    DimensionY: 19,
    DimensionZ: 64,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -9.6,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1048,
    in_Model3DGroupName: "Model3DMpHorizontalSM3SS",
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
    },
    GraphicFileId: "Model3DMpHorizontalSM3SS",
    ColorId: "StainlessSteel",
    DimensionX: 16.1,
    DimensionY: 19,
    DimensionZ: 64,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -9.6,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1049,
    in_Model3DGroupName: "Model3DMpHorizontalSM6SS",
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
    },
    GraphicFileId: "Model3DMpHorizontalSM6SS",
    ColorId: "StainlessSteel",
    DimensionX: 19.1,
    DimensionY: 19,
    DimensionZ: 64,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -9.6,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1050,
    in_Model3DGroupName: "Model3DHingeBlindCornerInset110SoftClNP",
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
    },
    GraphicFileId: "Model3DHingeBlindCornerInset110SoftClNP",
    ColorId: "StainlessSteel",
    DimensionX: 101.3,
    DimensionY: 66,
    DimensionZ: 33.8,
    ReferencePointXYZ: "012",
    InsertionPointX: 82,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: -64.5,
    PartOffsetY: 0,
    PartOffsetZ: 13.3,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1051,
    in_Model3DGroupName: "Legra_Box_Inox_F_400_Left",
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
    },
    GraphicFileId: "Legra_Box_F_400_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1052,
    in_Model3DGroupName: "Legra_Box_Inox_F_400_Right",
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
    },
    GraphicFileId: "Legra_Box_F_400_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1053,
    in_Model3DGroupName: "Legra_Box_Inox_F_450_Left",
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
    },
    GraphicFileId: "Legra_Box_F_450_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1054,
    in_Model3DGroupName: "Legra_Box_Inox_F_450_Right",
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
    },
    GraphicFileId: "Legra_Box_F_450_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1055,
    in_Model3DGroupName: "Legra_Box_Inox_F_500_Left",
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
    },
    GraphicFileId: "Legra_Box_F_500_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1056,
    in_Model3DGroupName: "Legra_Box_Inox_F_500_Right",
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
    },
    GraphicFileId: "Legra_Box_F_500_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1057,
    in_Model3DGroupName: "Legra_Box_Inox_F_550_Left",
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
    },
    GraphicFileId: "Legra_Box_F_550_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1058,
    in_Model3DGroupName: "Legra_Box_Inox_F_550_Right",
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
    },
    GraphicFileId: "Legra_Box_F_550_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1059,
    in_Model3DGroupName: "Legra_Box_Inox_F_600_Left",
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
    },
    GraphicFileId: "Legra_Box_F_600_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1060,
    in_Model3DGroupName: "Legra_Box_Inox_F_600_Right",
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
    },
    GraphicFileId: "Legra_Box_F_600_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1061,
    in_Model3DGroupName: "Legra_Box_Inox_F_650_Left",
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
    },
    GraphicFileId: "Legra_Box_F_650_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1062,
    in_Model3DGroupName: "Legra_Box_Inox_F_650_Right",
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
    },
    GraphicFileId: "Legra_Box_F_650_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1063,
    in_Model3DGroupName: "Legra_Box_Inox_C_270_Left",
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
    },
    GraphicFileId: "Legra_Box_C_270_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1064,
    in_Model3DGroupName: "Legra_Box_Inox_C_270_Right",
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
    },
    GraphicFileId: "Legra_Box_C_270_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1065,
    in_Model3DGroupName: "Legra_Box_Inox_C_300_Left",
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
    },
    GraphicFileId: "Legra_Box_C_300_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1066,
    in_Model3DGroupName: "Legra_Box_Inox_C_300_Right",
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
    },
    GraphicFileId: "Legra_Box_C_300_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1067,
    in_Model3DGroupName: "Legra_Box_Inox_C_350_Left",
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
    },
    GraphicFileId: "Legra_Box_C_350_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1068,
    in_Model3DGroupName: "Legra_Box_Inox_C_350_Right",
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
    },
    GraphicFileId: "Legra_Box_C_350_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1069,
    in_Model3DGroupName: "Legra_Box_Inox_C_400_Left",
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
    },
    GraphicFileId: "Legra_Box_C_400_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1070,
    in_Model3DGroupName: "Legra_Box_Inox_C_400_Right",
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
    },
    GraphicFileId: "Legra_Box_C_400_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1071,
    in_Model3DGroupName: "Legra_Box_Inox_C_450_Left",
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
    },
    GraphicFileId: "Legra_Box_C_450_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1072,
    in_Model3DGroupName: "Legra_Box_Inox_C_450_Right",
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
    },
    GraphicFileId: "Legra_Box_C_450_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1073,
    in_Model3DGroupName: "Legra_Box_Inox_C_500_Left",
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
    },
    GraphicFileId: "Legra_Box_C_500_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1074,
    in_Model3DGroupName: "Legra_Box_Inox_C_500_Right",
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
    },
    GraphicFileId: "Legra_Box_C_500_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1075,
    in_Model3DGroupName: "Legra_Box_Inox_C_550_Left",
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
    },
    GraphicFileId: "Legra_Box_C_550_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1076,
    in_Model3DGroupName: "Legra_Box_Inox_C_550_Right",
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
    },
    GraphicFileId: "Legra_Box_C_550_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1077,
    in_Model3DGroupName: "Legra_Box_Inox_C_600_Left",
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
    },
    GraphicFileId: "Legra_Box_C_600_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1078,
    in_Model3DGroupName: "Legra_Box_Inox_C_600_Right",
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
    },
    GraphicFileId: "Legra_Box_C_600_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1079,
    in_Model3DGroupName: "Legra_Box_Inox_C_650_Left",
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
    },
    GraphicFileId: "Legra_Box_C_650_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1080,
    in_Model3DGroupName: "Legra_Box_Inox_C_650_Right",
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
    },
    GraphicFileId: "Legra_Box_C_650_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1081,
    in_Model3DGroupName: "Legra_Box_Inox_K_300_Left",
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
    },
    GraphicFileId: "Legra_Box_K_300_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1082,
    in_Model3DGroupName: "Legra_Box_Inox_K_300_Right",
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
    },
    GraphicFileId: "Legra_Box_K_300_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1083,
    in_Model3DGroupName: "Legra_Box_Inox_K_350_Left",
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
    },
    GraphicFileId: "Legra_Box_K_350_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1084,
    in_Model3DGroupName: "Legra_Box_Inox_K_350_Right",
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
    },
    GraphicFileId: "Legra_Box_K_350_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1085,
    in_Model3DGroupName: "Legra_Box_Inox_K_400_Left",
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
    },
    GraphicFileId: "Legra_Box_K_400_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1086,
    in_Model3DGroupName: "Legra_Box_Inox_K_400_Right",
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
    },
    GraphicFileId: "Legra_Box_K_400_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1087,
    in_Model3DGroupName: "Legra_Box_Inox_K_450_Left",
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
    },
    GraphicFileId: "Legra_Box_K_450_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1088,
    in_Model3DGroupName: "Legra_Box_Inox_K_450_Right",
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
    },
    GraphicFileId: "Legra_Box_K_450_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1089,
    in_Model3DGroupName: "Legra_Box_Inox_K_500_Left",
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
    },
    GraphicFileId: "Legra_Box_K_500_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1090,
    in_Model3DGroupName: "Legra_Box_Inox_K_500_Right",
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
    },
    GraphicFileId: "Legra_Box_K_500_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1091,
    in_Model3DGroupName: "Legra_Box_Inox_K_550_Left",
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
    },
    GraphicFileId: "Legra_Box_K_550_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1092,
    in_Model3DGroupName: "Legra_Box_Inox_K_550_Right",
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
    },
    GraphicFileId: "Legra_Box_K_550_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1093,
    in_Model3DGroupName: "Legra_Box_Inox_K_600_Left",
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
    },
    GraphicFileId: "Legra_Box_K_600_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1094,
    in_Model3DGroupName: "Legra_Box_Inox_K_600_Right",
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
    },
    GraphicFileId: "Legra_Box_K_600_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1095,
    in_Model3DGroupName: "Legra_Box_Inox_M_270_Left",
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
    },
    GraphicFileId: "Legra_Box_M_270_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1096,
    in_Model3DGroupName: "Legra_Box_Inox_M_270_Right",
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
    },
    GraphicFileId: "Legra_Box_M_270_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1097,
    in_Model3DGroupName: "Legra_Box_Inox_M_300_Left",
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
    },
    GraphicFileId: "Legra_Box_M_300_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1098,
    in_Model3DGroupName: "Legra_Box_Inox_M_300_Right",
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
    },
    GraphicFileId: "Legra_Box_M_300_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1099,
    in_Model3DGroupName: "Legra_Box_Inox_M_350_Left",
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
    },
    GraphicFileId: "Legra_Box_M_350_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1100,
    in_Model3DGroupName: "Legra_Box_Inox_M_350_Right",
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
    },
    GraphicFileId: "Legra_Box_M_350_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1101,
    in_Model3DGroupName: "Legra_Box_Inox_M_400_Left",
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
    },
    GraphicFileId: "Legra_Box_M_400_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1102,
    in_Model3DGroupName: "Legra_Box_Inox_M_400_Right",
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
    },
    GraphicFileId: "Legra_Box_M_400_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1103,
    in_Model3DGroupName: "Legra_Box_Inox_M_450_Left",
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
    },
    GraphicFileId: "Legra_Box_M_450_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1104,
    in_Model3DGroupName: "Legra_Box_Inox_M_450_Right",
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
    },
    GraphicFileId: "Legra_Box_M_450_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1105,
    in_Model3DGroupName: "Legra_Box_Inox_M_500_Left",
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
    },
    GraphicFileId: "Legra_Box_M_500_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1106,
    in_Model3DGroupName: "Legra_Box_Inox_M_500_Right",
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
    },
    GraphicFileId: "Legra_Box_M_500_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1107,
    in_Model3DGroupName: "Legra_Box_Inox_M_550_Left",
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
    },
    GraphicFileId: "Legra_Box_M_550_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1108,
    in_Model3DGroupName: "Legra_Box_Inox_M_550_Right",
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
    },
    GraphicFileId: "Legra_Box_M_550_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1109,
    in_Model3DGroupName: "Legra_Box_Inox_M_600_Left",
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
    },
    GraphicFileId: "Legra_Box_M_600_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1110,
    in_Model3DGroupName: "Legra_Box_Inox_M_600_Right",
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
    },
    GraphicFileId: "Legra_Box_M_600_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1111,
    in_Model3DGroupName: "Legra_Box_Inox_M_650_Left",
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
    },
    GraphicFileId: "Legra_Box_M_650_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1112,
    in_Model3DGroupName: "Legra_Box_Inox_M_650_Right",
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
    },
    GraphicFileId: "Legra_Box_M_650_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1113,
    in_Model3DGroupName: "Legra_Box_Inox_N_400_Left",
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
    },
    GraphicFileId: "Legra_Box_N_400_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1114,
    in_Model3DGroupName: "Legra_Box_Inox_N_400_Right",
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
    },
    GraphicFileId: "Legra_Box_N_400_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1115,
    in_Model3DGroupName: "Legra_Box_Inox_N_450_Left",
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
    },
    GraphicFileId: "Legra_Box_N_450_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1116,
    in_Model3DGroupName: "Legra_Box_Inox_N_450_Right",
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
    },
    GraphicFileId: "Legra_Box_N_450_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1117,
    in_Model3DGroupName: "Legra_Box_Inox_N_500_Left",
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
    },
    GraphicFileId: "Legra_Box_N_500_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1118,
    in_Model3DGroupName: "Legra_Box_Inox_N_500_Right",
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
    },
    GraphicFileId: "Legra_Box_N_500_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1119,
    in_Model3DGroupName: "Legra_Box_Inox_N_550_Left",
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
    },
    GraphicFileId: "Legra_Box_N_550_Left",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1120,
    in_Model3DGroupName: "Legra_Box_Inox_N_550_Right",
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
    },
    GraphicFileId: "Legra_Box_N_550_Right",
    ColorId: "LegraInox",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1121,
    in_Model3DGroupName: "Legra_Slide_270_Left",
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
    },
    GraphicFileId: "Legra_Slide_270_Left",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 247,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideLeft"
  }
  , {
    _id: 1122,
    in_Model3DGroupName: "Legra_Slide_270_Right",
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
    },
    GraphicFileId: "Legra_Slide_270_Right",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 247,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideRight"
  }
  , {
    _id: 1123,
    in_Model3DGroupName: "Legra_Slide_300_350_Left",
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
    },
    GraphicFileId: "Legra_Slide_300_350_Left",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 276,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideLeft"
  }
  , {
    _id: 1124,
    in_Model3DGroupName: "Legra_Slide_300_350_Right",
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
    },
    GraphicFileId: "Legra_Slide_300_350_Right",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 276,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideRight"
  }
  , {
    _id: 1125,
    in_Model3DGroupName: "Legra_Slide_400_450_500_Left",
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
    },
    GraphicFileId: "Legra_Slide_400_450_500_Left",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 309,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideLeft"
  }
  , {
    _id: 1126,
    in_Model3DGroupName: "Legra_Slide_400_450_500_Right",
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
    },
    GraphicFileId: "Legra_Slide_400_450_500_Right",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 309,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideRight"
  }
  , {
    _id: 1127,
    in_Model3DGroupName: "Legra_Slide_550_600_Left",
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
    },
    GraphicFileId: "Legra_Slide_550_600_Left",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 401,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideLeft"
  }
  , {
    _id: 1128,
    in_Model3DGroupName: "Legra_Slide_550_600_Right",
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
    },
    GraphicFileId: "Legra_Slide_550_600_Right",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 401,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideRight"
  }
  , {
    _id: 1129,
    in_Model3DGroupName: "Model3DCoverCap290.40.701",
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
    },
    GraphicFileId: "Model3DCoverCap290.40.701",
    ColorId: "StainlessSteel",
    DimensionX: 25,
    DimensionY: 84,
    DimensionZ: 61.8,
    ReferencePointXYZ: "220",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "HangerCoverCapRight"
  }
  , {
    _id: 1130,
    in_Model3DGroupName: "Model3DCoverCap290.40.702",
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
    },
    GraphicFileId: "Model3DCoverCap290.40.702",
    ColorId: "StainlessSteel",
    DimensionX: 25,
    DimensionY: 84,
    DimensionZ: 61.8,
    ReferencePointXYZ: "020",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "HangerCoverCapLeft"
  }
  , {
    _id: 1131,
    in_Model3DGroupName: "Model3DHanger290.02.702",
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
    },
    GraphicFileId: "Model3DHanger290.02.702",
    ColorId: "StainlessSteel",
    DimensionX: 27,
    DimensionY: 46,
    DimensionZ: 79.2,
    ReferencePointXYZ: "020",
    InsertionPointX: 0,
    InsertionPointY: -39,
    InsertionPointZ: 30.7,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -20,
    Visible: true,
    Identifier: "HangerLeftVisible"
  }
  , {
    _id: 1132,
    in_Model3DGroupName: "Model3DHanger290.02.703",
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
    },
    GraphicFileId: "Model3DHanger290.02.703",
    ColorId: "StainlessSteel",
    DimensionX: 27,
    DimensionY: 46,
    DimensionZ: 79.2,
    ReferencePointXYZ: "220",
    InsertionPointX: 0,
    InsertionPointY: -39,
    InsertionPointZ: 30.7,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -20,
    Visible: true,
    Identifier: "HangerRightVisible"
  }
  , {
    _id: 1133,
    in_Model3DGroupName: "Model3DHanger290.03.937",
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
    },
    GraphicFileId: "Model3DHanger290.03.937",
    ColorId: "StainlessSteel",
    DimensionX: 46.7,
    DimensionY: 146,
    DimensionZ: 21.2,
    ReferencePointXYZ: "220",
    InsertionPointX: 0,
    InsertionPointY: -56,
    InsertionPointZ: 16.2,
    PartOffsetX: 12,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "HangerRightInvisible"
  }
  , {
    _id: 1134,
    in_Model3DGroupName: "Model3DHanger290.03.938",
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
    },
    GraphicFileId: "Model3DHanger290.03.938",
    ColorId: "StainlessSteel",
    DimensionX: 46.7,
    DimensionY: 146,
    DimensionZ: 21.2,
    ReferencePointXYZ: "020",
    InsertionPointX: 0,
    InsertionPointY: -56,
    InsertionPointZ: 16.2,
    PartOffsetX: -12,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "HangerLeftInvisible"
  }
  , {
    _id: 1135,
    in_Model3DGroupName: "Model3DHanger290.40.901",
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
    },
    GraphicFileId: "Model3DHanger290.40.901",
    ColorId: "StainlessSteel",
    DimensionX: 19.8,
    DimensionY: 80,
    DimensionZ: 75.6,
    ReferencePointXYZ: "220",
    InsertionPointX: 0,
    InsertionPointY: -8,
    InsertionPointZ: 35.6,
    PartOffsetX: 10,
    PartOffsetY: 0,
    PartOffsetZ: -15.6,
    Visible: true,
    Identifier: "HangerRightVisible"
  }
  , {
    _id: 1136,
    in_Model3DGroupName: "Model3DHanger290.40.902",
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
    },
    GraphicFileId: "Model3DHanger290.40.902",
    ColorId: "StainlessSteel",
    DimensionX: 19.8,
    DimensionY: 80,
    DimensionZ: 75.6,
    ReferencePointXYZ: "020",
    InsertionPointX: 0,
    InsertionPointY: -8,
    InsertionPointZ: 35.6,
    PartOffsetX: -10,
    PartOffsetY: 0,
    PartOffsetZ: -15.6,
    Visible: true,
    Identifier: "HangerLeftVisible"
  }
  , {
    _id: 1137,
    in_Model3DGroupName: "Model3DHanger290.40.980",
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
    },
    GraphicFileId: "Model3DHanger290.40.980",
    ColorId: "StainlessSteel",
    DimensionX: 29.4,
    DimensionY: 48,
    DimensionZ: 74.4,
    ReferencePointXYZ: "220",
    InsertionPointX: 0,
    InsertionPointY: -42,
    InsertionPointZ: 34.4,
    PartOffsetX: 10.5,
    PartOffsetY: 0,
    PartOffsetZ: -14.3,
    Visible: true,
    Identifier: "HangerRightVisible"
  }
  , {
    _id: 1138,
    in_Model3DGroupName: "Model3DHanger290.40.981",
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
    },
    GraphicFileId: "Model3DHanger290.40.981",
    ColorId: "StainlessSteel",
    DimensionX: 29.4,
    DimensionY: 48,
    DimensionZ: 74.4,
    ReferencePointXYZ: "020",
    InsertionPointX: 0,
    InsertionPointY: -42,
    InsertionPointZ: 34.4,
    PartOffsetX: -10.5,
    PartOffsetY: 0,
    PartOffsetZ: -14.3,
    Visible: true,
    Identifier: "HangerLeftVisible"
  }
  , {
    _id: 1139,
    in_Model3DGroupName: "Model3DWallPlate290.09.910",
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
    },
    GraphicFileId: "Model3DWallPlate290.09.910",
    ColorId: "StainlessSteel",
    DimensionX: 1250,
    DimensionY: 28.3,
    DimensionZ: 6.3,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "WallPlate"
  }
  , {
    _id: 1140,
    in_Model3DGroupName: "Model3DWallPlate290.40.989",
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
    },
    GraphicFileId: "Model3DWallPlate290.40.989",
    ColorId: "StainlessSteel",
    DimensionX: 47,
    DimensionY: 28,
    DimensionZ: 6,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "WallPlate"
  }
  , {
    _id: 1141,
    in_Model3DGroupName: "Model3DWallPlate290.40.991",
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
    },
    GraphicFileId: "Model3DWallPlate290.40.991",
    ColorId: "StainlessSteel",
    DimensionX: 120,
    DimensionY: 120,
    DimensionZ: 8,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "WallPlate"
  }
  , {
    _id: 1142,
    in_Model3DGroupName: "Model3DPlinthLegTriangularPressSensitive",
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
    },
    GraphicFileId: "Model3DPlinthLegTriangularPressSensitive",
    ColorId: "Black",
    DimensionX: 95,
    DimensionY: 80,
    DimensionZ: 95,
    ReferencePointXYZ: "022",
    InsertionPointX: 39.5,
    InsertionPointY: 0,
    InsertionPointZ: -39.5,
    PartOffsetX: -5,
    PartOffsetY: 11,
    PartOffsetZ: 5,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1143,
    in_Model3DGroupName: "Model3DPlinthLegTriangularPressNoise",
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
    },
    GraphicFileId: "Model3DPlinthLegTriangularPressNoise",
    ColorId: "Black",
    DimensionX: 95,
    DimensionY: 80,
    DimensionZ: 95,
    ReferencePointXYZ: "022",
    InsertionPointX: 39.5,
    InsertionPointY: 0,
    InsertionPointZ: -39.5,
    PartOffsetX: -5,
    PartOffsetY: 11,
    PartOffsetZ: 5,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1144,
    in_Model3DGroupName: "Model3D_Legra_FrontBotCon",
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
    },
    GraphicFileId: "Model3D_Legra_FrontBotCon",
    ColorId: "Black",
    DimensionX: 36.4,
    DimensionY: 13,
    DimensionZ: 48.2,
    ReferencePointXYZ: "122",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 6,
    Visible: true,
    Identifier: "DrawerBox"
  }
  , {
    _id: 1145,
    in_Model3DGroupName: "Model3DHanger290.02.710",
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
    },
    GraphicFileId: "Model3DHanger290.02.710",
    ColorId: "StainlessSteel",
    DimensionX: 22.3,
    DimensionY: 48.2,
    DimensionZ: 83.7,
    ReferencePointXYZ: "220",
    InsertionPointX: 0,
    InsertionPointY: -40,
    InsertionPointZ: 31.85,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -21,
    Visible: true,
    Identifier: "HangerLeftVisible"
  }
  , {
    _id: 1146,
    in_Model3DGroupName: "Model3DHanger290.02.711",
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
    },
    GraphicFileId: "Model3DHanger290.02.711",
    ColorId: "StainlessSteel",
    DimensionX: 22.3,
    DimensionY: 48.2,
    DimensionZ: 83.7,
    ReferencePointXYZ: "020",
    InsertionPointX: 0,
    InsertionPointY: -40,
    InsertionPointZ: 31.85,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -21,
    Visible: true,
    Identifier: "HangerRightVisible"
  }
  , {
    _id: 1147,
    in_Model3DGroupName: "Legra_Slide_450_H_Left",
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
    },
    GraphicFileId: "Legra_Slide_450_H_Left",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 309,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideLeft"
  }
  , {
    _id: 1148,
    in_Model3DGroupName: "Legra_Slide_450_H_Right",
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
    },
    GraphicFileId: "Legra_Slide_450_H_Right",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 309,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideRight"
  }
  , {
    _id: 1149,
    in_Model3DGroupName: "Legra_Slide_500_550_600_H_Left",
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
    },
    GraphicFileId: "Legra_Slide_500_550_600_H_Left",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 401,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideLeft"
  }
  , {
    _id: 1150,
    in_Model3DGroupName: "Legra_Slide_500_550_600_H_Right",
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
    },
    GraphicFileId: "Legra_Slide_500_550_600_H_Right",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 401,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideRight"
  }
  , {
    _id: 1151,
    in_Model3DGroupName: "Legra_Slide_650_H_Left",
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
    },
    GraphicFileId: "Legra_Slide_650_H_Left",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 529,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideLeft"
  }
  , {
    _id: 1152,
    in_Model3DGroupName: "Legra_Slide_650_H_Right",
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
    },
    GraphicFileId: "Legra_Slide_650_H_Right",
    ColorId: "Steel",
    DimensionX: 31,
    DimensionY: 47,
    DimensionZ: 529,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideRight"
  }
  , {
    _id: 1153,
    in_Model3DGroupName: "Graphic_Legra_Syncro",
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
    },
    GraphicFileId: "Graphic_Legra_Syncro",
    ColorId: "Black",
    DimensionX: 0,
    DimensionY: 34,
    DimensionZ: 0,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 1,
    InsertionPointZ: 0,
    PartOffsetX: -5,
    PartOffsetY: 0,
    PartOffsetZ: 12,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1154,
    in_Model3DGroupName: "DowelMiddelSide",
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
    },
    GraphicFileId: "Dowel",
    ColorId: undefined,
    DimensionX: 0,
    DimensionY: 0,
    DimensionZ: 0,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 2.5,
    InsertionPointZ: 2.5,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1155,
    in_Model3DGroupName: "Model3DGlueDuststrip",
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
    },
    GraphicFileId: "Model3DGlueDuststrip",
    ColorId: "StainlessSteel",
    DimensionX: 21,
    DimensionY: 100,
    DimensionZ: 3,
    ReferencePointXYZ: "012",
    InsertionPointX: -13.5,
    InsertionPointY: 0,
    InsertionPointZ: -1.5,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1156,
    in_Model3DGroupName: "Model3DPushToOpenShort",
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
    },
    GraphicFileId: "Model3DPushToOpenShort",
    ColorId: "Black",
    DimensionX: 18,
    DimensionY: 15,
    DimensionZ: 53,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 3.1,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1157,
    in_Model3DGroupName: "Model3DPushToOpenLong",
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
    },
    GraphicFileId: "Model3DPushToOpenLong",
    ColorId: "Black",
    DimensionX: 18,
    DimensionY: 15,
    DimensionZ: 79,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 3.1,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1158,
    in_Model3DGroupName: "Model3DAdapterHousingShort",
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
    },
    GraphicFileId: "Model3DAdapterHousingShort",
    ColorId: "StainlessSteel",
    DimensionX: 18,
    DimensionY: 15.4,
    DimensionZ: 54.6,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 7.7,
    PartOffsetZ: 1,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1159,
    in_Model3DGroupName: "Model3DAdapterHousingLong",
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
    },
    GraphicFileId: "Model3DAdapterHousingLong",
    ColorId: "StainlessSteel",
    DimensionX: 18,
    DimensionY: 15.4,
    DimensionZ: 80.6,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 7.7,
    PartOffsetZ: 1,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1160,
    in_Model3DGroupName: "NoGraphic",
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
    },
    GraphicFileId: "NoGraphic",
    ColorId: "Error",
    DimensionX: 0,
    DimensionY: 0,
    DimensionZ: 0,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1161,
    in_Model3DGroupName: "Rafix20Housing19mmNickelPlated",
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
    },
    GraphicFileId: "Rafix20Housing19mmNickelPlated",
    ColorId: "StainlessSteel",
    DimensionX: 24,
    DimensionY: 15.4,
    DimensionZ: 22,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1162,
    in_Model3DGroupName: "RafixConnectionBolt11x5mm",
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
    },
    GraphicFileId: "RafixConnectionBolt11x5mm",
    ColorId: "StainlessSteel",
    DimensionX: 7,
    DimensionY: 7,
    DimensionZ: 19.8,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1163,
    in_Model3DGroupName: "Model3DHingeFlipLiftDF",
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
    },
    GraphicFileId: "Model3DHingeFlipLiftDF",
    ColorId: "StainlessSteel",
    DimensionX: 27.8,
    DimensionY: 38,
    DimensionZ: 43.6,
    ReferencePointXYZ: "012",
    InsertionPointX: 10.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 14,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1164,
    in_Model3DGroupName: "Model3D_Aventos_HF_PSL",
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
    },
    GraphicFileId: "Model3D_Aventos_HF_PSL",
    ColorId: "StainlessSteel",
    DimensionX: 30.6,
    DimensionY: 105,
    DimensionZ: 260,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 26.8,
    InsertionPointZ: 99.35,
    PartOffsetX: 4.5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseLeft"
  }
  , {
    _id: 1165,
    in_Model3DGroupName: "Model3D_Aventos_HF_PSR",
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
    },
    GraphicFileId: "Model3D_Aventos_HF_PSR",
    ColorId: "StainlessSteel",
    DimensionX: 30.6,
    DimensionY: 105,
    DimensionZ: 260,
    ReferencePointXYZ: "222",
    InsertionPointX: 0,
    InsertionPointY: 26.8,
    InsertionPointZ: 99.35,
    PartOffsetX: 4.5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseRight"
  }
  , {
    _id: 1166,
    in_Model3DGroupName: "Model3D_Aventos_HF_Mech",
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
    },
    GraphicFileId: "Model3D_Aventos_HF_Mech",
    ColorId: "StainlessSteel",
    DimensionX: 19,
    DimensionY: 360,
    DimensionZ: 43,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Mechanism"
  }
  , {
    _id: 1167,
    in_Model3DGroupName: "Model3D_Aventos_HF_Connector",
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
    },
    GraphicFileId: "Model3D_Aventos_HF_Connector",
    ColorId: "StainlessSteel",
    DimensionX: 18.6,
    DimensionY: 43.7,
    DimensionZ: 8.5,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: -6.5,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 11.5,
    Visible: true,
    Identifier: "FrontConnector"
  }
  , {
    _id: 1168,
    in_Model3DGroupName: "Model3D_Aventos_HK_PSL",
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
    },
    GraphicFileId: "Model3D_Aventos_HK_PSL",
    ColorId: "StainlessSteel",
    DimensionX: 30.2,
    DimensionY: 162,
    DimensionZ: 185,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 32.5,
    InsertionPointZ: 36.3,
    PartOffsetX: 5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseLeft"
  }
  , {
    _id: 1169,
    in_Model3DGroupName: "Model3D_Aventos_HK_PSR",
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
    },
    GraphicFileId: "Model3D_Aventos_HK_PSR",
    ColorId: "StainlessSteel",
    DimensionX: 30.2,
    DimensionY: 162,
    DimensionZ: 185,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 32.5,
    InsertionPointZ: 36.3,
    PartOffsetX: 5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseRight"
  }
  , {
    _id: 1170,
    in_Model3DGroupName: "Model3D_Aventos_HK_Connector",
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
    },
    GraphicFileId: "Model3D_Aventos_HK_Connector",
    ColorId: "StainlessSteel",
    DimensionX: 16.5,
    DimensionY: 108,
    DimensionZ: 13.5,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: -6,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "FrontConnector"
  }
  , {
    _id: 1171,
    in_Model3DGroupName: "Model3DHinge120OverlayNoSpringSSForFHF",
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
    },
    GraphicFileId: "Model3DHinge120OverlayNoSpringSSForFHF",
    ColorId: "StainlessSteel",
    DimensionX: 38,
    DimensionY: 57,
    DimensionZ: 80.5,
    ReferencePointXYZ: "012",
    InsertionPointX: 18.5,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 1,
    PartOffsetY: 0,
    PartOffsetZ: 12.6,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1172,
    in_Model3DGroupName: "Model3D_Aventos_HL_PSL",
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
    },
    GraphicFileId: "Model3D_Aventos_HL_PSL",
    ColorId: "StainlessSteel",
    DimensionX: 30.7,
    DimensionY: 137,
    DimensionZ: 260,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 58.85,
    InsertionPointZ: 99.5,
    PartOffsetX: 4.5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseLeft"
  }
  , {
    _id: 1173,
    in_Model3DGroupName: "Model3D_Aventos_HL_PSR",
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
    },
    GraphicFileId: "Model3D_Aventos_HL_PSR",
    ColorId: "StainlessSteel",
    DimensionX: 30.7,
    DimensionY: 137,
    DimensionZ: 260,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 58.85,
    InsertionPointZ: 99.5,
    PartOffsetX: 4.5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseRight"
  }
  , {
    _id: 1174,
    in_Model3DGroupName: "Model3D_Aventos_HL_Mech1",
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
    },
    GraphicFileId: "Model3D_Aventos_HL_Mech1",
    ColorId: "StainlessSteel",
    DimensionX: 18.3,
    DimensionY: 207,
    DimensionZ: 55.7,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Mechanism"
  }
  , {
    _id: 1175,
    in_Model3DGroupName: "Model3D_Aventos_HL_Mech2",
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
    },
    GraphicFileId: "Model3D_Aventos_HL_Mech2",
    ColorId: "StainlessSteel",
    DimensionX: 18.3,
    DimensionY: 247,
    DimensionZ: 55.7,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Mechanism"
  }
  , {
    _id: 1176,
    in_Model3DGroupName: "Model3D_Aventos_HL_Mech3",
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
    },
    GraphicFileId: "Model3D_Aventos_HL_Mech3",
    ColorId: "StainlessSteel",
    DimensionX: 18.3,
    DimensionY: 297,
    DimensionZ: 55.7,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Mechanism"
  }
  , {
    _id: 1177,
    in_Model3DGroupName: "Model3D_Aventos_HL_Mech4",
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
    },
    GraphicFileId: "Model3D_Aventos_HL_Mech4",
    ColorId: "StainlessSteel",
    DimensionX: 18.3,
    DimensionY: 351,
    DimensionZ: 55.7,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Mechanism"
  }
  , {
    _id: 1178,
    in_Model3DGroupName: "Model3D_Aventos_HS_PSL",
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
    },
    GraphicFileId: "Model3D_Aventos_HS_PSL",
    ColorId: "StainlessSteel",
    DimensionX: 30.6,
    DimensionY: 288,
    DimensionZ: 260,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 53,
    InsertionPointZ: 99.5,
    PartOffsetX: 4.5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseLeft"
  }
  , {
    _id: 1179,
    in_Model3DGroupName: "Model3D_Aventos_HS_PSR",
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
    },
    GraphicFileId: "Model3D_Aventos_HS_PSR",
    ColorId: "StainlessSteel",
    DimensionX: 30.6,
    DimensionY: 288,
    DimensionZ: 260,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 53,
    InsertionPointZ: 99.5,
    PartOffsetX: 4.5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseRight"
  }
  , {
    _id: 1180,
    in_Model3DGroupName: "DropDown_L",
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
    },
    GraphicFileId: "DropDown_L",
    ColorId: "StainlessSteel",
    DimensionX: 46.3,
    DimensionY: 25,
    DimensionZ: 313.2,
    ReferencePointXYZ: "022",
    InsertionPointX: 22.2,
    InsertionPointY: 0,
    InsertionPointZ: 48,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseLeft"
  }
  , {
    _id: 1181,
    in_Model3DGroupName: "DropDown_R",
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
    },
    GraphicFileId: "DropDown_R",
    ColorId: "StainlessSteel",
    DimensionX: 46.3,
    DimensionY: 25,
    DimensionZ: 313.2,
    ReferencePointXYZ: "022",
    InsertionPointX: 22.2,
    InsertionPointY: 0,
    InsertionPointZ: 48,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseRight"
  }
  , {
    _id: 1182,
    in_Model3DGroupName: "DropDown_Front",
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
    },
    GraphicFileId: "DropDown_Front",
    ColorId: "StainlessSteel",
    DimensionX: 26,
    DimensionY: 26,
    DimensionZ: 1,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: -13,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 8,
    Visible: true,
    Identifier: "FrontConnector"
  }
  , {
    _id: 1183,
    in_Model3DGroupName: "Model3D_Aventos_HKXS_Mech_R",
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
    },
    GraphicFileId: "Model3D_Aventos_HKXS_Mech",
    ColorId: "StainlessSteel",
    DimensionX: 20.2,
    DimensionY: 174.2,
    DimensionZ: 110.3,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Mechanism"
  }
  , {
    _id: 1184,
    in_Model3DGroupName: "Model3D_Aventos_HKXS_Mech_L",
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
    },
    GraphicFileId: "Model3D_Aventos_HKXS_Mech",
    ColorId: "StainlessSteel",
    DimensionX: 20.2,
    DimensionY: 174.2,
    DimensionZ: 110.3,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Mechanism"
  }
  , {
    _id: 1185,
    in_Model3DGroupName: "Model3D_Aventos_HKXS_Front",
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
    },
    GraphicFileId: "Model3D_Aventos_HKXS_Front",
    ColorId: "StainlessSteel",
    DimensionX: 17.3,
    DimensionY: 43,
    DimensionZ: 17.4,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: -5.5,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 11.5,
    Visible: true,
    Identifier: "FrontConnector"
  }
  , {
    _id: 1186,
    in_Model3DGroupName: "Model3D_Aventos_HKXS_Carcase_R",
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
    },
    GraphicFileId: "Model3D_Aventos_HKXS_Carcase_R",
    ColorId: "StainlessSteel",
    DimensionX: 26,
    DimensionY: 68.6,
    DimensionZ: 20.6,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 10.3,
    InsertionPointZ: 10.3,
    PartOffsetX: 11.8,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseLeft"
  }
  , {
    _id: 1187,
    in_Model3DGroupName: "Model3D_Aventos_HKXS_Carcase_L",
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
    },
    GraphicFileId: "Model3D_Aventos_HKXS_Carcase_L",
    ColorId: "StainlessSteel",
    DimensionX: 26,
    DimensionY: 68.6,
    DimensionZ: 20.6,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 10.3,
    InsertionPointZ: 10.3,
    PartOffsetX: 11.8,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "CarcaseRight"
  }
  , {
    _id: 1188,
    in_Model3DGroupName: "Model3DHingeCenterForFHF",
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
    },
    GraphicFileId: "Model3DHingeCenterForFHF",
    ColorId: "StainlessSteel",
    DimensionX: 112.2,
    DimensionY: 57,
    DimensionZ: 31.6,
    ReferencePointXYZ: "012",
    InsertionPointX: 92.7,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: -75.2,
    PartOffsetY: 0,
    PartOffsetZ: 12,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1189,
    in_Model3DGroupName: "Model3DMPHorizontalBL0SS",
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
    },
    GraphicFileId: "Model3DMPHorizontalBL0SS",
    ColorId: "StainlessSteel",
    DimensionX: 8.5,
    DimensionY: 18.7,
    DimensionZ: 43.7,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -14.8,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1190,
    in_Model3DGroupName: "Model3DMPHorizontalBL3SS",
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
    },
    GraphicFileId: "Model3DMPHorizontalBL3SS",
    ColorId: "StainlessSteel",
    DimensionX: 11.5,
    DimensionY: 18.7,
    DimensionZ: 48.4,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: -14.8,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1191,
    in_Model3DGroupName: "SquareBracket",
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
    },
    GraphicFileId: "SquareBracket",
    ColorId: "StainlessSteel",
    DimensionX: 30,
    DimensionY: 30,
    DimensionZ: 70,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1192,
    in_Model3DGroupName: "Model3DBracket01",
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
    },
    GraphicFileId: "Model3DBracket01",
    ColorId: "StainlessSteel",
    DimensionX: 40,
    DimensionY: 15,
    DimensionZ: 40,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "FrontAndCarcaseConnector"
  }
  , {
    _id: 1193,
    in_Model3DGroupName: "Model3DPlinthLegRectangularScrewH100",
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
    },
    GraphicFileId: "Model3DPlinthLegRectangularScrewH100",
    ColorId: "Black",
    DimensionX: 92,
    DimensionY: 100,
    DimensionZ: 79,
    ReferencePointXYZ: "022",
    InsertionPointX: 39.5,
    InsertionPointY: 0,
    InsertionPointZ: -39.5,
    PartOffsetX: -5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1194,
    in_Model3DGroupName: "Model3DPlinthLegRectangularScrewH120",
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
    },
    GraphicFileId: "Model3DPlinthLegRectangularScrewH120",
    ColorId: "Black",
    DimensionX: 92,
    DimensionY: 120,
    DimensionZ: 79,
    ReferencePointXYZ: "022",
    InsertionPointX: 39.5,
    InsertionPointY: 0,
    InsertionPointZ: -39.5,
    PartOffsetX: -5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1195,
    in_Model3DGroupName: "Model3DPlinthLegRectangularScrewH150",
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
    },
    GraphicFileId: "Model3DPlinthLegRectangularScrewH150",
    ColorId: "Black",
    DimensionX: 92,
    DimensionY: 150,
    DimensionZ: 79,
    ReferencePointXYZ: "022",
    InsertionPointX: 39.5,
    InsertionPointY: 0,
    InsertionPointZ: -39.5,
    PartOffsetX: -5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1196,
    in_Model3DGroupName: "Model3DPlinthLegTriangularPressH100",
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
    },
    GraphicFileId: "Model3DPlinthLegTriangularPressH100",
    ColorId: "Black",
    DimensionX: 95,
    DimensionY: 100,
    DimensionZ: 95,
    ReferencePointXYZ: "022",
    InsertionPointX: 39.5,
    InsertionPointY: 0,
    InsertionPointZ: -39.5,
    PartOffsetX: -5,
    PartOffsetY: 11,
    PartOffsetZ: 5,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1197,
    in_Model3DGroupName: "Model3DPlinthLegTriangularPressH120",
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
    },
    GraphicFileId: "Model3DPlinthLegTriangularPressH120",
    ColorId: "Black",
    DimensionX: 95,
    DimensionY: 120,
    DimensionZ: 95,
    ReferencePointXYZ: "022",
    InsertionPointX: 39.5,
    InsertionPointY: 0,
    InsertionPointZ: -39.5,
    PartOffsetX: -5,
    PartOffsetY: 11,
    PartOffsetZ: 5,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1198,
    in_Model3DGroupName: "Model3DPlinthLegTriangularPressH150",
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
    },
    GraphicFileId: "Model3DPlinthLegTriangularPressH150",
    ColorId: "Black",
    DimensionX: 95,
    DimensionY: 150,
    DimensionZ: 95,
    ReferencePointXYZ: "022",
    InsertionPointX: 39.5,
    InsertionPointY: 0,
    InsertionPointZ: -39.5,
    PartOffsetX: -5,
    PartOffsetY: 11,
    PartOffsetZ: 5,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1199,
    in_Model3DGroupName: "Model3DDesignLegRectangular001H100",
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
    },
    GraphicFileId: "Model3DDesignLegRectangular001H100",
    ColorId: "StainlessSteel",
    DimensionX: 60,
    DimensionY: 100,
    DimensionZ: 60,
    ReferencePointXYZ: "020",
    InsertionPointX: 30,
    InsertionPointY: 0,
    InsertionPointZ: 30,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1200,
    in_Model3DGroupName: "Model3DDesignLegRectangular001H150",
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
    },
    GraphicFileId: "Model3DDesignLegRectangular001H150",
    ColorId: "StainlessSteel",
    DimensionX: 60,
    DimensionY: 150,
    DimensionZ: 60,
    ReferencePointXYZ: "020",
    InsertionPointX: 30,
    InsertionPointY: 0,
    InsertionPointZ: 30,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1201,
    in_Model3DGroupName: "Model3DDesignLegRectangular001H200",
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
    },
    GraphicFileId: "Model3DDesignLegRectangular001H200",
    ColorId: "StainlessSteel",
    DimensionX: 60,
    DimensionY: 200,
    DimensionZ: 60,
    ReferencePointXYZ: "020",
    InsertionPointX: 30,
    InsertionPointY: 0,
    InsertionPointZ: 30,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1202,
    in_Model3DGroupName: "Model3DDesignLegRectangular001H50",
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
    },
    GraphicFileId: "Model3DDesignLegRectangular001H50",
    ColorId: "StainlessSteel",
    DimensionX: 60,
    DimensionY: 50,
    DimensionZ: 60,
    ReferencePointXYZ: "020",
    InsertionPointX: 30,
    InsertionPointY: 0,
    InsertionPointZ: 30,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1203,
    in_Model3DGroupName: "Model3DDesignLegRectangular001H80",
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
    },
    GraphicFileId: "Model3DDesignLegRectangular001H80",
    ColorId: "StainlessSteel",
    DimensionX: 60,
    DimensionY: 80,
    DimensionZ: 60,
    ReferencePointXYZ: "020",
    InsertionPointX: 30,
    InsertionPointY: 0,
    InsertionPointZ: 30,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1204,
    in_Model3DGroupName: "Model3D_Aventos_HF_Mech_480",
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
    },
    GraphicFileId: "Model3D_Aventos_HF_Mech_480",
    ColorId: "StainlessSteel",
    DimensionX: 19,
    DimensionY: 360,
    DimensionZ: 43,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Mechanism"
  }
  , {
    _id: 1205,
    in_Model3DGroupName: "Model3D_Aventos_HF_Mech_600",
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
    },
    GraphicFileId: "Model3D_Aventos_HF_Mech_600",
    ColorId: "StainlessSteel",
    DimensionX: 19,
    DimensionY: 464,
    DimensionZ: 43,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Mechanism"
  }
  , {
    _id: 1206,
    in_Model3DGroupName: "Model3D_Aventos_HF_Mech_840",
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
    },
    GraphicFileId: "Model3D_Aventos_HF_Mech_840",
    ColorId: "StainlessSteel",
    DimensionX: 19,
    DimensionY: 644,
    DimensionZ: 43,
    ReferencePointXYZ: "022",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Mechanism"
  }
  , {
    _id: 1207,
    in_Model3DGroupName: "Model3DKeku_Side_262_50_368",
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
    },
    GraphicFileId: "Model3DKeku_Side_262_50_368",
    ColorId: "Black",
    DimensionX: 10.2,
    DimensionY: 48,
    DimensionZ: 36,
    ReferencePointXYZ: "012",
    InsertionPointX: 9,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 9,
    Visible: true,
    Identifier: "CarcaseConnector"
  }
  , {
    _id: 1208,
    in_Model3DGroupName: "Model3DKeku_Front_262_50_359",
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
    },
    GraphicFileId: "Model3DKeku_Front_262_50_359",
    ColorId: "Black",
    DimensionX: 23,
    DimensionY: 48,
    DimensionZ: 29,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "FrontConnector"
  }
  , {
    _id: 1209,
    in_Model3DGroupName: "Model3DbrARRAS5",
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
    },
    GraphicFileId: "Model3DbrARRAS5",
    ColorId: "StainlessSteel",
    DimensionX: 20,
    DimensionY: 150,
    DimensionZ: 150,
    ReferencePointXYZ: "000",
    InsertionPointX: -10,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1210,
    in_Model3DGroupName: "Model3DbrTucano",
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
    },
    GraphicFileId: "Model3DbrTucano",
    ColorId: "StainlessSteel",
    DimensionX: 25,
    DimensionY: 75,
    DimensionZ: 75,
    ReferencePointXYZ: "000",
    InsertionPointX: -12.5,
    InsertionPointY: 35,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1211,
    in_Model3DGroupName: "Legra_Box_White_C_270_Left",
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
    },
    GraphicFileId: "Legra_Box_C_270_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1212,
    in_Model3DGroupName: "Legra_Box_White_C_270_Right",
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
    },
    GraphicFileId: "Legra_Box_C_270_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1213,
    in_Model3DGroupName: "Legra_Box_White_C_300_Left",
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
    },
    GraphicFileId: "Legra_Box_C_300_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1214,
    in_Model3DGroupName: "Legra_Box_White_C_300_Right",
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
    },
    GraphicFileId: "Legra_Box_C_300_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1215,
    in_Model3DGroupName: "Legra_Box_White_C_350_Left",
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
    },
    GraphicFileId: "Legra_Box_C_350_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1216,
    in_Model3DGroupName: "Legra_Box_White_C_350_Right",
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
    },
    GraphicFileId: "Legra_Box_C_350_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1217,
    in_Model3DGroupName: "Legra_Box_White_C_400_Left",
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
    },
    GraphicFileId: "Legra_Box_C_400_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1218,
    in_Model3DGroupName: "Legra_Box_White_C_400_Right",
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
    },
    GraphicFileId: "Legra_Box_C_400_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1219,
    in_Model3DGroupName: "Legra_Box_White_C_450_Left",
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
    },
    GraphicFileId: "Legra_Box_C_450_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1220,
    in_Model3DGroupName: "Legra_Box_White_C_450_Right",
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
    },
    GraphicFileId: "Legra_Box_C_450_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1221,
    in_Model3DGroupName: "Legra_Box_White_C_500_Left",
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
    },
    GraphicFileId: "Legra_Box_C_500_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1222,
    in_Model3DGroupName: "Legra_Box_White_C_500_Right",
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
    },
    GraphicFileId: "Legra_Box_C_500_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1223,
    in_Model3DGroupName: "Legra_Box_White_C_550_Left",
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
    },
    GraphicFileId: "Legra_Box_C_550_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1224,
    in_Model3DGroupName: "Legra_Box_White_C_550_Right",
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
    },
    GraphicFileId: "Legra_Box_C_550_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1225,
    in_Model3DGroupName: "Legra_Box_White_C_600_Left",
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
    },
    GraphicFileId: "Legra_Box_C_600_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1226,
    in_Model3DGroupName: "Legra_Box_White_C_600_Right",
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
    },
    GraphicFileId: "Legra_Box_C_600_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1227,
    in_Model3DGroupName: "Legra_Box_White_C_650_Left",
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
    },
    GraphicFileId: "Legra_Box_C_650_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1228,
    in_Model3DGroupName: "Legra_Box_White_C_650_Right",
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
    },
    GraphicFileId: "Legra_Box_C_650_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1229,
    in_Model3DGroupName: "Legra_Box_White_F_400_Left",
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
    },
    GraphicFileId: "Legra_Box_F_400_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1230,
    in_Model3DGroupName: "Legra_Box_White_F_400_Right",
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
    },
    GraphicFileId: "Legra_Box_F_400_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1231,
    in_Model3DGroupName: "Legra_Box_White_F_450_Left",
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
    },
    GraphicFileId: "Legra_Box_F_450_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1232,
    in_Model3DGroupName: "Legra_Box_White_F_450_Right",
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
    },
    GraphicFileId: "Legra_Box_F_450_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1233,
    in_Model3DGroupName: "Legra_Box_White_F_500_Left",
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
    },
    GraphicFileId: "Legra_Box_F_500_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1234,
    in_Model3DGroupName: "Legra_Box_White_F_500_Right",
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
    },
    GraphicFileId: "Legra_Box_F_500_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1235,
    in_Model3DGroupName: "Legra_Box_White_F_550_Left",
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
    },
    GraphicFileId: "Legra_Box_F_550_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1236,
    in_Model3DGroupName: "Legra_Box_White_F_550_Right",
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
    },
    GraphicFileId: "Legra_Box_F_550_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1237,
    in_Model3DGroupName: "Legra_Box_White_F_600_Left",
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
    },
    GraphicFileId: "Legra_Box_F_600_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1238,
    in_Model3DGroupName: "Legra_Box_White_F_600_Right",
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
    },
    GraphicFileId: "Legra_Box_F_600_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1239,
    in_Model3DGroupName: "Legra_Box_White_F_650_Left",
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
    },
    GraphicFileId: "Legra_Box_F_650_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1240,
    in_Model3DGroupName: "Legra_Box_White_F_650_Right",
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
    },
    GraphicFileId: "Legra_Box_F_650_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1241,
    in_Model3DGroupName: "Legra_Box_White_K_300_Left",
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
    },
    GraphicFileId: "Legra_Box_K_300_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1242,
    in_Model3DGroupName: "Legra_Box_White_K_300_Right",
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
    },
    GraphicFileId: "Legra_Box_K_300_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1243,
    in_Model3DGroupName: "Legra_Box_White_K_350_Left",
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
    },
    GraphicFileId: "Legra_Box_K_350_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1244,
    in_Model3DGroupName: "Legra_Box_White_K_350_Right",
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
    },
    GraphicFileId: "Legra_Box_K_350_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1245,
    in_Model3DGroupName: "Legra_Box_White_K_400_Left",
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
    },
    GraphicFileId: "Legra_Box_K_400_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1246,
    in_Model3DGroupName: "Legra_Box_White_K_400_Right",
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
    },
    GraphicFileId: "Legra_Box_K_400_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1247,
    in_Model3DGroupName: "Legra_Box_White_K_450_Left",
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
    },
    GraphicFileId: "Legra_Box_K_450_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1248,
    in_Model3DGroupName: "Legra_Box_White_K_450_Right",
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
    },
    GraphicFileId: "Legra_Box_K_450_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1249,
    in_Model3DGroupName: "Legra_Box_White_K_500_Left",
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
    },
    GraphicFileId: "Legra_Box_K_500_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1250,
    in_Model3DGroupName: "Legra_Box_White_K_500_Right",
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
    },
    GraphicFileId: "Legra_Box_K_500_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1251,
    in_Model3DGroupName: "Legra_Box_White_K_550_Left",
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
    },
    GraphicFileId: "Legra_Box_K_550_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1252,
    in_Model3DGroupName: "Legra_Box_White_K_550_Right",
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
    },
    GraphicFileId: "Legra_Box_K_550_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1253,
    in_Model3DGroupName: "Legra_Box_White_K_600_Left",
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
    },
    GraphicFileId: "Legra_Box_K_600_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1254,
    in_Model3DGroupName: "Legra_Box_White_K_600_Right",
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
    },
    GraphicFileId: "Legra_Box_K_600_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1255,
    in_Model3DGroupName: "Legra_Box_White_M_270_Left",
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
    },
    GraphicFileId: "Legra_Box_M_270_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1256,
    in_Model3DGroupName: "Legra_Box_White_M_270_Right",
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
    },
    GraphicFileId: "Legra_Box_M_270_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1257,
    in_Model3DGroupName: "Legra_Box_White_M_300_Left",
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
    },
    GraphicFileId: "Legra_Box_M_300_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1258,
    in_Model3DGroupName: "Legra_Box_White_M_300_Right",
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
    },
    GraphicFileId: "Legra_Box_M_300_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1259,
    in_Model3DGroupName: "Legra_Box_White_M_350_Left",
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
    },
    GraphicFileId: "Legra_Box_M_350_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1260,
    in_Model3DGroupName: "Legra_Box_White_M_350_Right",
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
    },
    GraphicFileId: "Legra_Box_M_350_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1261,
    in_Model3DGroupName: "Legra_Box_White_M_400_Left",
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
    },
    GraphicFileId: "Legra_Box_M_400_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1262,
    in_Model3DGroupName: "Legra_Box_White_M_400_Right",
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
    },
    GraphicFileId: "Legra_Box_M_400_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1263,
    in_Model3DGroupName: "Legra_Box_White_M_450_Left",
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
    },
    GraphicFileId: "Legra_Box_M_450_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1264,
    in_Model3DGroupName: "Legra_Box_White_M_450_Right",
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
    },
    GraphicFileId: "Legra_Box_M_450_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1265,
    in_Model3DGroupName: "Legra_Box_White_M_500_Left",
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
    },
    GraphicFileId: "Legra_Box_M_500_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1266,
    in_Model3DGroupName: "Legra_Box_White_M_500_Right",
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
    },
    GraphicFileId: "Legra_Box_M_500_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1267,
    in_Model3DGroupName: "Legra_Box_White_M_550_Left",
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
    },
    GraphicFileId: "Legra_Box_M_550_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1268,
    in_Model3DGroupName: "Legra_Box_White_M_550_Right",
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
    },
    GraphicFileId: "Legra_Box_M_550_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1269,
    in_Model3DGroupName: "Legra_Box_White_M_600_Left",
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
    },
    GraphicFileId: "Legra_Box_M_600_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1270,
    in_Model3DGroupName: "Legra_Box_White_M_600_Right",
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
    },
    GraphicFileId: "Legra_Box_M_600_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1271,
    in_Model3DGroupName: "Legra_Box_White_M_650_Left",
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
    },
    GraphicFileId: "Legra_Box_M_650_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1272,
    in_Model3DGroupName: "Legra_Box_White_M_650_Right",
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
    },
    GraphicFileId: "Legra_Box_M_650_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1273,
    in_Model3DGroupName: "Legra_Box_White_N_400_Left",
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
    },
    GraphicFileId: "Legra_Box_N_400_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1274,
    in_Model3DGroupName: "Legra_Box_White_N_400_Right",
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
    },
    GraphicFileId: "Legra_Box_N_400_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1275,
    in_Model3DGroupName: "Legra_Box_White_N_450_Left",
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
    },
    GraphicFileId: "Legra_Box_N_450_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1276,
    in_Model3DGroupName: "Legra_Box_White_N_450_Right",
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
    },
    GraphicFileId: "Legra_Box_N_450_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1277,
    in_Model3DGroupName: "Legra_Box_White_N_500_Left",
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
    },
    GraphicFileId: "Legra_Box_N_500_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1278,
    in_Model3DGroupName: "Legra_Box_White_N_500_Right",
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
    },
    GraphicFileId: "Legra_Box_N_500_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1279,
    in_Model3DGroupName: "Legra_Box_White_N_550_Left",
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
    },
    GraphicFileId: "Legra_Box_N_550_Left",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1280,
    in_Model3DGroupName: "Legra_Box_White_N_550_Right",
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
    },
    GraphicFileId: "Legra_Box_N_550_Right",
    ColorId: "LegraWhite",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1281,
    in_Model3DGroupName: "Legra_Box_Orion_C_270_Left",
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
    },
    GraphicFileId: "Legra_Box_C_270_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1282,
    in_Model3DGroupName: "Legra_Box_Orion_C_270_Right",
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
    },
    GraphicFileId: "Legra_Box_C_270_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1283,
    in_Model3DGroupName: "Legra_Box_Orion_C_300_Left",
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
    },
    GraphicFileId: "Legra_Box_C_300_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1284,
    in_Model3DGroupName: "Legra_Box_Orion_C_300_Right",
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
    },
    GraphicFileId: "Legra_Box_C_300_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1285,
    in_Model3DGroupName: "Legra_Box_Orion_C_350_Left",
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
    },
    GraphicFileId: "Legra_Box_C_350_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1286,
    in_Model3DGroupName: "Legra_Box_Orion_C_350_Right",
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
    },
    GraphicFileId: "Legra_Box_C_350_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1287,
    in_Model3DGroupName: "Legra_Box_Orion_C_400_Left",
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
    },
    GraphicFileId: "Legra_Box_C_400_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1288,
    in_Model3DGroupName: "Legra_Box_Orion_C_400_Right",
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
    },
    GraphicFileId: "Legra_Box_C_400_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1289,
    in_Model3DGroupName: "Legra_Box_Orion_C_450_Left",
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
    },
    GraphicFileId: "Legra_Box_C_450_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1290,
    in_Model3DGroupName: "Legra_Box_Orion_C_450_Right",
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
    },
    GraphicFileId: "Legra_Box_C_450_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1291,
    in_Model3DGroupName: "Legra_Box_Orion_C_500_Left",
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
    },
    GraphicFileId: "Legra_Box_C_500_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1292,
    in_Model3DGroupName: "Legra_Box_Orion_C_500_Right",
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
    },
    GraphicFileId: "Legra_Box_C_500_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1293,
    in_Model3DGroupName: "Legra_Box_Orion_C_550_Left",
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
    },
    GraphicFileId: "Legra_Box_C_550_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1294,
    in_Model3DGroupName: "Legra_Box_Orion_C_550_Right",
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
    },
    GraphicFileId: "Legra_Box_C_550_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1295,
    in_Model3DGroupName: "Legra_Box_Orion_C_600_Left",
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
    },
    GraphicFileId: "Legra_Box_C_600_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1296,
    in_Model3DGroupName: "Legra_Box_Orion_C_600_Right",
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
    },
    GraphicFileId: "Legra_Box_C_600_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1297,
    in_Model3DGroupName: "Legra_Box_Orion_C_650_Left",
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
    },
    GraphicFileId: "Legra_Box_C_650_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1298,
    in_Model3DGroupName: "Legra_Box_Orion_C_650_Right",
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
    },
    GraphicFileId: "Legra_Box_C_650_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1299,
    in_Model3DGroupName: "Legra_Box_Orion_F_400_Left",
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
    },
    GraphicFileId: "Legra_Box_F_400_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1300,
    in_Model3DGroupName: "Legra_Box_Orion_F_400_Right",
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
    },
    GraphicFileId: "Legra_Box_F_400_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1301,
    in_Model3DGroupName: "Legra_Box_Orion_F_450_Left",
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
    },
    GraphicFileId: "Legra_Box_F_450_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1302,
    in_Model3DGroupName: "Legra_Box_Orion_F_450_Right",
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
    },
    GraphicFileId: "Legra_Box_F_450_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1303,
    in_Model3DGroupName: "Legra_Box_Orion_F_500_Left",
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
    },
    GraphicFileId: "Legra_Box_F_500_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1304,
    in_Model3DGroupName: "Legra_Box_Orion_F_500_Right",
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
    },
    GraphicFileId: "Legra_Box_F_500_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1305,
    in_Model3DGroupName: "Legra_Box_Orion_F_550_Left",
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
    },
    GraphicFileId: "Legra_Box_F_550_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1306,
    in_Model3DGroupName: "Legra_Box_Orion_F_550_Right",
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
    },
    GraphicFileId: "Legra_Box_F_550_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1307,
    in_Model3DGroupName: "Legra_Box_Orion_F_600_Left",
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
    },
    GraphicFileId: "Legra_Box_F_600_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1308,
    in_Model3DGroupName: "Legra_Box_Orion_F_600_Right",
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
    },
    GraphicFileId: "Legra_Box_F_600_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1309,
    in_Model3DGroupName: "Legra_Box_Orion_F_650_Left",
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
    },
    GraphicFileId: "Legra_Box_F_650_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1310,
    in_Model3DGroupName: "Legra_Box_Orion_F_650_Right",
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
    },
    GraphicFileId: "Legra_Box_F_650_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1311,
    in_Model3DGroupName: "Legra_Box_Orion_K_300_Left",
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
    },
    GraphicFileId: "Legra_Box_K_300_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1312,
    in_Model3DGroupName: "Legra_Box_Orion_K_300_Right",
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
    },
    GraphicFileId: "Legra_Box_K_300_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1313,
    in_Model3DGroupName: "Legra_Box_Orion_K_350_Left",
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
    },
    GraphicFileId: "Legra_Box_K_350_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1314,
    in_Model3DGroupName: "Legra_Box_Orion_K_350_Right",
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
    },
    GraphicFileId: "Legra_Box_K_350_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1315,
    in_Model3DGroupName: "Legra_Box_Orion_K_400_Left",
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
    },
    GraphicFileId: "Legra_Box_K_400_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1316,
    in_Model3DGroupName: "Legra_Box_Orion_K_400_Right",
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
    },
    GraphicFileId: "Legra_Box_K_400_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1317,
    in_Model3DGroupName: "Legra_Box_Orion_K_450_Left",
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
    },
    GraphicFileId: "Legra_Box_K_450_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1318,
    in_Model3DGroupName: "Legra_Box_Orion_K_450_Right",
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
    },
    GraphicFileId: "Legra_Box_K_450_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1319,
    in_Model3DGroupName: "Legra_Box_Orion_K_500_Left",
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
    },
    GraphicFileId: "Legra_Box_K_500_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1320,
    in_Model3DGroupName: "Legra_Box_Orion_K_500_Right",
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
    },
    GraphicFileId: "Legra_Box_K_500_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1321,
    in_Model3DGroupName: "Legra_Box_Orion_K_550_Left",
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
    },
    GraphicFileId: "Legra_Box_K_550_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1322,
    in_Model3DGroupName: "Legra_Box_Orion_K_550_Right",
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
    },
    GraphicFileId: "Legra_Box_K_550_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1323,
    in_Model3DGroupName: "Legra_Box_Orion_K_600_Left",
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
    },
    GraphicFileId: "Legra_Box_K_600_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1324,
    in_Model3DGroupName: "Legra_Box_Orion_K_600_Right",
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
    },
    GraphicFileId: "Legra_Box_K_600_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1325,
    in_Model3DGroupName: "Legra_Box_Orion_M_270_Left",
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
    },
    GraphicFileId: "Legra_Box_M_270_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1326,
    in_Model3DGroupName: "Legra_Box_Orion_M_270_Right",
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
    },
    GraphicFileId: "Legra_Box_M_270_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1327,
    in_Model3DGroupName: "Legra_Box_Orion_M_300_Left",
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
    },
    GraphicFileId: "Legra_Box_M_300_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1328,
    in_Model3DGroupName: "Legra_Box_Orion_M_300_Right",
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
    },
    GraphicFileId: "Legra_Box_M_300_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1329,
    in_Model3DGroupName: "Legra_Box_Orion_M_350_Left",
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
    },
    GraphicFileId: "Legra_Box_M_350_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1330,
    in_Model3DGroupName: "Legra_Box_Orion_M_350_Right",
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
    },
    GraphicFileId: "Legra_Box_M_350_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1331,
    in_Model3DGroupName: "Legra_Box_Orion_M_400_Left",
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
    },
    GraphicFileId: "Legra_Box_M_400_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1332,
    in_Model3DGroupName: "Legra_Box_Orion_M_400_Right",
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
    },
    GraphicFileId: "Legra_Box_M_400_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1333,
    in_Model3DGroupName: "Legra_Box_Orion_M_450_Left",
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
    },
    GraphicFileId: "Legra_Box_M_450_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1334,
    in_Model3DGroupName: "Legra_Box_Orion_M_450_Right",
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
    },
    GraphicFileId: "Legra_Box_M_450_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1335,
    in_Model3DGroupName: "Legra_Box_Orion_M_500_Left",
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
    },
    GraphicFileId: "Legra_Box_M_500_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1336,
    in_Model3DGroupName: "Legra_Box_Orion_M_500_Right",
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
    },
    GraphicFileId: "Legra_Box_M_500_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1337,
    in_Model3DGroupName: "Legra_Box_Orion_M_550_Left",
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
    },
    GraphicFileId: "Legra_Box_M_550_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1338,
    in_Model3DGroupName: "Legra_Box_Orion_M_550_Right",
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
    },
    GraphicFileId: "Legra_Box_M_550_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1339,
    in_Model3DGroupName: "Legra_Box_Orion_M_600_Left",
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
    },
    GraphicFileId: "Legra_Box_M_600_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1340,
    in_Model3DGroupName: "Legra_Box_Orion_M_600_Right",
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
    },
    GraphicFileId: "Legra_Box_M_600_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1341,
    in_Model3DGroupName: "Legra_Box_Orion_M_650_Left",
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
    },
    GraphicFileId: "Legra_Box_M_650_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1342,
    in_Model3DGroupName: "Legra_Box_Orion_M_650_Right",
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
    },
    GraphicFileId: "Legra_Box_M_650_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1343,
    in_Model3DGroupName: "Legra_Box_Orion_N_400_Left",
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
    },
    GraphicFileId: "Legra_Box_N_400_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1344,
    in_Model3DGroupName: "Legra_Box_Orion_N_400_Right",
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
    },
    GraphicFileId: "Legra_Box_N_400_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1345,
    in_Model3DGroupName: "Legra_Box_Orion_N_450_Left",
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
    },
    GraphicFileId: "Legra_Box_N_450_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1346,
    in_Model3DGroupName: "Legra_Box_Orion_N_450_Right",
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
    },
    GraphicFileId: "Legra_Box_N_450_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1347,
    in_Model3DGroupName: "Legra_Box_Orion_N_500_Left",
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
    },
    GraphicFileId: "Legra_Box_N_500_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1348,
    in_Model3DGroupName: "Legra_Box_Orion_N_500_Right",
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
    },
    GraphicFileId: "Legra_Box_N_500_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1349,
    in_Model3DGroupName: "Legra_Box_Orion_N_550_Left",
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
    },
    GraphicFileId: "Legra_Box_N_550_Left",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1350,
    in_Model3DGroupName: "Legra_Box_Orion_N_550_Right",
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
    },
    GraphicFileId: "Legra_Box_N_550_Right",
    ColorId: "LegraOrion",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1351,
    in_Model3DGroupName: "Legra_Box_Terra_C_270_Left",
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
    },
    GraphicFileId: "Legra_Box_C_270_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1352,
    in_Model3DGroupName: "Legra_Box_Terra_C_270_Right",
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
    },
    GraphicFileId: "Legra_Box_C_270_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1353,
    in_Model3DGroupName: "Legra_Box_Terra_C_300_Left",
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
    },
    GraphicFileId: "Legra_Box_C_300_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1354,
    in_Model3DGroupName: "Legra_Box_Terra_C_300_Right",
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
    },
    GraphicFileId: "Legra_Box_C_300_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1355,
    in_Model3DGroupName: "Legra_Box_Terra_C_350_Left",
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
    },
    GraphicFileId: "Legra_Box_C_350_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1356,
    in_Model3DGroupName: "Legra_Box_Terra_C_350_Right",
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
    },
    GraphicFileId: "Legra_Box_C_350_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1357,
    in_Model3DGroupName: "Legra_Box_Terra_C_400_Left",
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
    },
    GraphicFileId: "Legra_Box_C_400_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1358,
    in_Model3DGroupName: "Legra_Box_Terra_C_400_Right",
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
    },
    GraphicFileId: "Legra_Box_C_400_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1359,
    in_Model3DGroupName: "Legra_Box_Terra_C_450_Left",
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
    },
    GraphicFileId: "Legra_Box_C_450_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1360,
    in_Model3DGroupName: "Legra_Box_Terra_C_450_Right",
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
    },
    GraphicFileId: "Legra_Box_C_450_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1361,
    in_Model3DGroupName: "Legra_Box_Terra_C_500_Left",
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
    },
    GraphicFileId: "Legra_Box_C_500_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1362,
    in_Model3DGroupName: "Legra_Box_Terra_C_500_Right",
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
    },
    GraphicFileId: "Legra_Box_C_500_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1363,
    in_Model3DGroupName: "Legra_Box_Terra_C_550_Left",
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
    },
    GraphicFileId: "Legra_Box_C_550_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1364,
    in_Model3DGroupName: "Legra_Box_Terra_C_550_Right",
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
    },
    GraphicFileId: "Legra_Box_C_550_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1365,
    in_Model3DGroupName: "Legra_Box_Terra_C_600_Left",
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
    },
    GraphicFileId: "Legra_Box_C_600_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1366,
    in_Model3DGroupName: "Legra_Box_Terra_C_600_Right",
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
    },
    GraphicFileId: "Legra_Box_C_600_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1367,
    in_Model3DGroupName: "Legra_Box_Terra_C_650_Left",
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
    },
    GraphicFileId: "Legra_Box_C_650_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1368,
    in_Model3DGroupName: "Legra_Box_Terra_C_650_Right",
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
    },
    GraphicFileId: "Legra_Box_C_650_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 187,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1369,
    in_Model3DGroupName: "Legra_Box_Terra_F_400_Left",
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
    },
    GraphicFileId: "Legra_Box_F_400_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1370,
    in_Model3DGroupName: "Legra_Box_Terra_F_400_Right",
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
    },
    GraphicFileId: "Legra_Box_F_400_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1371,
    in_Model3DGroupName: "Legra_Box_Terra_F_450_Left",
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
    },
    GraphicFileId: "Legra_Box_F_450_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1372,
    in_Model3DGroupName: "Legra_Box_Terra_F_450_Right",
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
    },
    GraphicFileId: "Legra_Box_F_450_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1373,
    in_Model3DGroupName: "Legra_Box_Terra_F_500_Left",
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
    },
    GraphicFileId: "Legra_Box_F_500_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1374,
    in_Model3DGroupName: "Legra_Box_Terra_F_500_Right",
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
    },
    GraphicFileId: "Legra_Box_F_500_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1375,
    in_Model3DGroupName: "Legra_Box_Terra_F_550_Left",
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
    },
    GraphicFileId: "Legra_Box_F_550_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1376,
    in_Model3DGroupName: "Legra_Box_Terra_F_550_Right",
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
    },
    GraphicFileId: "Legra_Box_F_550_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1377,
    in_Model3DGroupName: "Legra_Box_Terra_F_600_Left",
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
    },
    GraphicFileId: "Legra_Box_F_600_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1378,
    in_Model3DGroupName: "Legra_Box_Terra_F_600_Right",
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
    },
    GraphicFileId: "Legra_Box_F_600_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1379,
    in_Model3DGroupName: "Legra_Box_Terra_F_650_Left",
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
    },
    GraphicFileId: "Legra_Box_F_650_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1380,
    in_Model3DGroupName: "Legra_Box_Terra_F_650_Right",
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
    },
    GraphicFileId: "Legra_Box_F_650_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 251,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1381,
    in_Model3DGroupName: "Legra_Box_Terra_K_300_Left",
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
    },
    GraphicFileId: "Legra_Box_K_300_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1382,
    in_Model3DGroupName: "Legra_Box_Terra_K_300_Right",
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
    },
    GraphicFileId: "Legra_Box_K_300_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1383,
    in_Model3DGroupName: "Legra_Box_Terra_K_350_Left",
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
    },
    GraphicFileId: "Legra_Box_K_350_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1384,
    in_Model3DGroupName: "Legra_Box_Terra_K_350_Right",
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
    },
    GraphicFileId: "Legra_Box_K_350_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1385,
    in_Model3DGroupName: "Legra_Box_Terra_K_400_Left",
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
    },
    GraphicFileId: "Legra_Box_K_400_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1386,
    in_Model3DGroupName: "Legra_Box_Terra_K_400_Right",
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
    },
    GraphicFileId: "Legra_Box_K_400_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1387,
    in_Model3DGroupName: "Legra_Box_Terra_K_450_Left",
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
    },
    GraphicFileId: "Legra_Box_K_450_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1388,
    in_Model3DGroupName: "Legra_Box_Terra_K_450_Right",
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
    },
    GraphicFileId: "Legra_Box_K_450_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1389,
    in_Model3DGroupName: "Legra_Box_Terra_K_500_Left",
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
    },
    GraphicFileId: "Legra_Box_K_500_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1390,
    in_Model3DGroupName: "Legra_Box_Terra_K_500_Right",
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
    },
    GraphicFileId: "Legra_Box_K_500_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1391,
    in_Model3DGroupName: "Legra_Box_Terra_K_550_Left",
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
    },
    GraphicFileId: "Legra_Box_K_550_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1392,
    in_Model3DGroupName: "Legra_Box_Terra_K_550_Right",
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
    },
    GraphicFileId: "Legra_Box_K_550_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1393,
    in_Model3DGroupName: "Legra_Box_Terra_K_600_Left",
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
    },
    GraphicFileId: "Legra_Box_K_600_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1394,
    in_Model3DGroupName: "Legra_Box_Terra_K_600_Right",
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
    },
    GraphicFileId: "Legra_Box_K_600_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 140,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1395,
    in_Model3DGroupName: "Legra_Box_Terra_M_270_Left",
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
    },
    GraphicFileId: "Legra_Box_M_270_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1396,
    in_Model3DGroupName: "Legra_Box_Terra_M_270_Right",
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
    },
    GraphicFileId: "Legra_Box_M_270_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 267,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1397,
    in_Model3DGroupName: "Legra_Box_Terra_M_300_Left",
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
    },
    GraphicFileId: "Legra_Box_M_300_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1398,
    in_Model3DGroupName: "Legra_Box_Terra_M_300_Right",
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
    },
    GraphicFileId: "Legra_Box_M_300_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 297,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1399,
    in_Model3DGroupName: "Legra_Box_Terra_M_350_Left",
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
    },
    GraphicFileId: "Legra_Box_M_350_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1400,
    in_Model3DGroupName: "Legra_Box_Terra_M_350_Right",
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
    },
    GraphicFileId: "Legra_Box_M_350_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 347,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1401,
    in_Model3DGroupName: "Legra_Box_Terra_M_400_Left",
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
    },
    GraphicFileId: "Legra_Box_M_400_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1402,
    in_Model3DGroupName: "Legra_Box_Terra_M_400_Right",
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
    },
    GraphicFileId: "Legra_Box_M_400_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1403,
    in_Model3DGroupName: "Legra_Box_Terra_M_450_Left",
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
    },
    GraphicFileId: "Legra_Box_M_450_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1404,
    in_Model3DGroupName: "Legra_Box_Terra_M_450_Right",
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
    },
    GraphicFileId: "Legra_Box_M_450_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1405,
    in_Model3DGroupName: "Legra_Box_Terra_M_500_Left",
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
    },
    GraphicFileId: "Legra_Box_M_500_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1406,
    in_Model3DGroupName: "Legra_Box_Terra_M_500_Right",
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
    },
    GraphicFileId: "Legra_Box_M_500_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1407,
    in_Model3DGroupName: "Legra_Box_Terra_M_550_Left",
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
    },
    GraphicFileId: "Legra_Box_M_550_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1408,
    in_Model3DGroupName: "Legra_Box_Terra_M_550_Right",
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
    },
    GraphicFileId: "Legra_Box_M_550_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1409,
    in_Model3DGroupName: "Legra_Box_Terra_M_600_Left",
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
    },
    GraphicFileId: "Legra_Box_M_600_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1410,
    in_Model3DGroupName: "Legra_Box_Terra_M_600_Right",
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
    },
    GraphicFileId: "Legra_Box_M_600_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 597,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1411,
    in_Model3DGroupName: "Legra_Box_Terra_M_650_Left",
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
    },
    GraphicFileId: "Legra_Box_M_650_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1412,
    in_Model3DGroupName: "Legra_Box_Terra_M_650_Right",
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
    },
    GraphicFileId: "Legra_Box_M_650_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 102,
    DimensionZ: 647,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1413,
    in_Model3DGroupName: "Legra_Box_Terra_N_400_Left",
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
    },
    GraphicFileId: "Legra_Box_N_400_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1414,
    in_Model3DGroupName: "Legra_Box_Terra_N_400_Right",
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
    },
    GraphicFileId: "Legra_Box_N_400_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 397,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1415,
    in_Model3DGroupName: "Legra_Box_Terra_N_450_Left",
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
    },
    GraphicFileId: "Legra_Box_N_450_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1416,
    in_Model3DGroupName: "Legra_Box_Terra_N_450_Right",
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
    },
    GraphicFileId: "Legra_Box_N_450_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 447,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1417,
    in_Model3DGroupName: "Legra_Box_Terra_N_500_Left",
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
    },
    GraphicFileId: "Legra_Box_N_500_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1418,
    in_Model3DGroupName: "Legra_Box_Terra_N_500_Right",
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
    },
    GraphicFileId: "Legra_Box_N_500_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 497,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1419,
    in_Model3DGroupName: "Legra_Box_Terra_N_550_Left",
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
    },
    GraphicFileId: "Legra_Box_N_550_Left",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxLeft"
  }
  , {
    _id: 1420,
    in_Model3DGroupName: "Legra_Box_Terra_N_550_Right",
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
    },
    GraphicFileId: "Legra_Box_N_550_Right",
    ColorId: "LegraTerra",
    DimensionX: 66,
    DimensionY: 78,
    DimensionZ: 547,
    ReferencePointXYZ: "012",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "BoxRight"
  }
  , {
    _id: 1421,
    in_Model3DGroupName: "Model3d_BH_128",
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
    },
    GraphicFileId: "Model3DBracketHandle128",
    ColorId: "StainlessSteel",
    DimensionX: 140,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1422,
    in_Model3DGroupName: "Model3d_BH_160",
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
    },
    GraphicFileId: "Model3DBracketHandle160",
    ColorId: "StainlessSteel",
    DimensionX: 172,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1423,
    in_Model3DGroupName: "Model3d_BH_192",
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
    },
    GraphicFileId: "Model3DBracketHandle192",
    ColorId: "StainlessSteel",
    DimensionX: 204,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1424,
    in_Model3DGroupName: "Model3d_BH_224",
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
    },
    GraphicFileId: "Model3DBracketHandle224",
    ColorId: "StainlessSteel",
    DimensionX: 236,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1425,
    in_Model3DGroupName: "Model3d_BH_288",
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
    },
    GraphicFileId: "Model3DBracketHandle288",
    ColorId: "StainlessSteel",
    DimensionX: 300,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1426,
    in_Model3DGroupName: "Model3d_BH_320",
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
    },
    GraphicFileId: "Model3DBracketHandle320",
    ColorId: "StainlessSteel",
    DimensionX: 332,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1427,
    in_Model3DGroupName: "Model3d_BH_352",
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
    },
    GraphicFileId: "Model3DBracketHandle352",
    ColorId: "StainlessSteel",
    DimensionX: 364,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1428,
    in_Model3DGroupName: "Model3d_BH_448",
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
    },
    GraphicFileId: "Model3DBracketHandle448",
    ColorId: "StainlessSteel",
    DimensionX: 460,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1429,
    in_Model3DGroupName: "Model3d_BH_480",
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
    },
    GraphicFileId: "Model3DBracketHandle480",
    ColorId: "StainlessSteel",
    DimensionX: 492,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1430,
    in_Model3DGroupName: "Model3d_BH_560",
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
    },
    GraphicFileId: "Model3DBracketHandle560",
    ColorId: "StainlessSteel",
    DimensionX: 572,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1431,
    in_Model3DGroupName: "Model3d_BH_640",
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
    },
    GraphicFileId: "Model3DBracketHandle640",
    ColorId: "StainlessSteel",
    DimensionX: 652,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1432,
    in_Model3DGroupName: "Model3d_BH_96",
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
    },
    GraphicFileId: "Model3DBracketHandle96",
    ColorId: "StainlessSteel",
    DimensionX: 108,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1433,
    in_Model3DGroupName: "Model3d_BH_960",
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
    },
    GraphicFileId: "Model3DBracketHandle960",
    ColorId: "StainlessSteel",
    DimensionX: 972,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1434,
    in_Model3DGroupName: "Model3d_DH100_Black_160",
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
    },
    GraphicFileId: "Model3DHandle100_160",
    ColorId: "Black",
    DimensionX: 170,
    DimensionY: 38,
    DimensionZ: 32,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: -2,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1435,
    in_Model3DGroupName: "Model3d_DH100_Black_320",
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
    },
    GraphicFileId: "Model3DHandle100_320",
    ColorId: "Black",
    DimensionX: 329,
    DimensionY: 38,
    DimensionZ: 32,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: -2,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1436,
    in_Model3DGroupName: "Model3d_DH100_Black_64",
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
    },
    GraphicFileId: "Model3DHandle100_64",
    ColorId: "Black",
    DimensionX: 74,
    DimensionY: 38,
    DimensionZ: 32,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: -2,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1437,
    in_Model3DGroupName: "Model3d_DH100_NickelPlated_160",
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
    },
    GraphicFileId: "Model3DHandle100_160",
    ColorId: "NickelPlated",
    DimensionX: 170,
    DimensionY: 38,
    DimensionZ: 32,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: -2,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1438,
    in_Model3DGroupName: "Model3d_DH100_NickelPlated_320",
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
    },
    GraphicFileId: "Model3DHandle100_320",
    ColorId: "NickelPlated",
    DimensionX: 329,
    DimensionY: 38,
    DimensionZ: 32,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: -2,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1439,
    in_Model3DGroupName: "Model3d_DH100_NickelPlated_64",
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
    },
    GraphicFileId: "Model3DHandle100_64",
    ColorId: "NickelPlated",
    DimensionX: 74,
    DimensionY: 38,
    DimensionZ: 32,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: -2,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1440,
    in_Model3DGroupName: "Model3d_DH100_Tin_160",
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
    },
    GraphicFileId: "Model3DHandle100_160",
    ColorId: "NickelPlated",
    DimensionX: 170,
    DimensionY: 38,
    DimensionZ: 32,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: -2,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1441,
    in_Model3DGroupName: "Model3d_DH100_Tin_320",
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
    },
    GraphicFileId: "Model3DHandle100_320",
    ColorId: "NickelPlated",
    DimensionX: 329,
    DimensionY: 38,
    DimensionZ: 32,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: -2,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1442,
    in_Model3DGroupName: "Model3d_DH100_Tin_64",
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
    },
    GraphicFileId: "Model3DHandle100_64",
    ColorId: "NickelPlated",
    DimensionX: 74,
    DimensionY: 38,
    DimensionZ: 32,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: -2,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1443,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1060",
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
    },
    GraphicFileId: "Model3DHandle110_1060",
    ColorId: "StainlessSteel",
    DimensionX: 1100,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1444,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1160",
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
    },
    GraphicFileId: "Model3DHandle110_1160",
    ColorId: "StainlessSteel",
    DimensionX: 1200,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1445,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1260",
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
    },
    GraphicFileId: "Model3DHandle110_1260",
    ColorId: "StainlessSteel",
    DimensionX: 1300,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1446,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_128",
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
    },
    GraphicFileId: "Model3DHandle110_128",
    ColorId: "StainlessSteel",
    DimensionX: 168,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1447,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1360",
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
    },
    GraphicFileId: "Model3DHandle110_1360",
    ColorId: "StainlessSteel",
    DimensionX: 1400,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1448,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1460",
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
    },
    GraphicFileId: "Model3DHandle110_1460",
    ColorId: "StainlessSteel",
    DimensionX: 1500,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1449,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1560",
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
    },
    GraphicFileId: "Model3DHandle110_1560",
    ColorId: "StainlessSteel",
    DimensionX: 1600,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1450,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_160",
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
    },
    GraphicFileId: "Model3DHandle110_160",
    ColorId: "StainlessSteel",
    DimensionX: 200,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1451,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1760",
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
    },
    GraphicFileId: "Model3DHandle110_1760",
    ColorId: "StainlessSteel",
    DimensionX: 1800,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1452,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1960",
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
    },
    GraphicFileId: "Model3DHandle110_1960",
    ColorId: "StainlessSteel",
    DimensionX: 2000,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1453,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_210",
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
    },
    GraphicFileId: "Model3DHandle110_210",
    ColorId: "StainlessSteel",
    DimensionX: 250,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1454,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_260",
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
    },
    GraphicFileId: "Model3DHandle110_260",
    ColorId: "StainlessSteel",
    DimensionX: 300,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1455,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_310",
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
    },
    GraphicFileId: "Model3DHandle110_310",
    ColorId: "StainlessSteel",
    DimensionX: 350,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1456,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_360",
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
    },
    GraphicFileId: "Model3DHandle110_360",
    ColorId: "StainlessSteel",
    DimensionX: 400,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1457,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_410",
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
    },
    GraphicFileId: "Model3DHandle110_410",
    ColorId: "StainlessSteel",
    DimensionX: 450,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1458,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_460",
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
    },
    GraphicFileId: "Model3DHandle110_460",
    ColorId: "StainlessSteel",
    DimensionX: 500,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1459,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_560",
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
    },
    GraphicFileId: "Model3DHandle110_560",
    ColorId: "StainlessSteel",
    DimensionX: 600,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1460,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_660",
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
    },
    GraphicFileId: "Model3DHandle110_660",
    ColorId: "StainlessSteel",
    DimensionX: 700,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1461,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_760",
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
    },
    GraphicFileId: "Model3DHandle110_760",
    ColorId: "StainlessSteel",
    DimensionX: 800,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1462,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_860",
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
    },
    GraphicFileId: "Model3DHandle110_860",
    ColorId: "StainlessSteel",
    DimensionX: 900,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1463,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_96",
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
    },
    GraphicFileId: "Model3DHandle110_96",
    ColorId: "StainlessSteel",
    DimensionX: 136,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1464,
    in_Model3DGroupName: "Model3d_DH110_StainlessSteel_960",
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
    },
    GraphicFileId: "Model3DHandle110_960",
    ColorId: "StainlessSteel",
    DimensionX: 1000,
    DimensionY: 12,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1465,
    in_Model3DGroupName: "Model3d_DH120_Black",
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
    },
    GraphicFileId: "Model3DHandle120",
    ColorId: "Black",
    DimensionX: 20,
    DimensionY: 20,
    DimensionZ: 30,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1466,
    in_Model3DGroupName: "Model3d_DH120_StainlessSteel",
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
    },
    GraphicFileId: "Model3DHandle120",
    ColorId: "StainlessSteel",
    DimensionX: 20,
    DimensionY: 20,
    DimensionZ: 30,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1467,
    in_Model3DGroupName: "Model3d_DH130_Black",
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
    },
    GraphicFileId: "Model3DHandle130",
    ColorId: "Black",
    DimensionX: 29,
    DimensionY: 29,
    DimensionZ: 30,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1468,
    in_Model3DGroupName: "Model3d_DH130_BrassPlatedAntique",
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
    },
    GraphicFileId: "Model3DHandle130",
    ColorId: "BrassPlatedAntique",
    DimensionX: 29,
    DimensionY: 29,
    DimensionZ: 30,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1469,
    in_Model3DGroupName: "Model3d_DH130_StainlessSteel",
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
    },
    GraphicFileId: "Model3DHandle130",
    ColorId: "StainlessSteel",
    DimensionX: 29,
    DimensionY: 29,
    DimensionZ: 30,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1470,
    in_Model3DGroupName: "Model3d_RH_128",
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
    },
    GraphicFileId: "Model3DHandleDesign20_128",
    ColorId: "StainlessSteel",
    DimensionX: 168,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1471,
    in_Model3DGroupName: "Model3d_RH_160",
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
    },
    GraphicFileId: "Model3DHandleDesign20_160",
    ColorId: "StainlessSteel",
    DimensionX: 200,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1472,
    in_Model3DGroupName: "Model3d_RH_192",
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
    },
    GraphicFileId: "Model3DHandleDesign20_192",
    ColorId: "StainlessSteel",
    DimensionX: 232,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1473,
    in_Model3DGroupName: "Model3d_RH_224",
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
    },
    GraphicFileId: "Model3DHandleDesign20_224",
    ColorId: "StainlessSteel",
    DimensionX: 264,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1474,
    in_Model3DGroupName: "Model3d_RH_288",
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
    },
    GraphicFileId: "Model3DHandleDesign20_288",
    ColorId: "StainlessSteel",
    DimensionX: 328,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1475,
    in_Model3DGroupName: "Model3d_RH_320",
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
    },
    GraphicFileId: "Model3DHandleDesign20_320",
    ColorId: "StainlessSteel",
    DimensionX: 360,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1476,
    in_Model3DGroupName: "Model3d_RH_352",
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
    },
    GraphicFileId: "Model3DHandleDesign20_352",
    ColorId: "StainlessSteel",
    DimensionX: 392,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1477,
    in_Model3DGroupName: "Model3d_RH_448",
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
    },
    GraphicFileId: "Model3DHandleDesign20_448",
    ColorId: "StainlessSteel",
    DimensionX: 488,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1478,
    in_Model3DGroupName: "Model3d_RH_560",
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
    },
    GraphicFileId: "Model3DHandleDesign20_560",
    ColorId: "StainlessSteel",
    DimensionX: 600,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1479,
    in_Model3DGroupName: "Model3d_RH_660",
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
    },
    GraphicFileId: "Model3DHandleDesign20_660",
    ColorId: "StainlessSteel",
    DimensionX: 700,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1480,
    in_Model3DGroupName: "Model3d_RH_760",
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
    },
    GraphicFileId: "Model3DHandleDesign20_760",
    ColorId: "StainlessSteel",
    DimensionX: 800,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1481,
    in_Model3DGroupName: "Model3d_RH_96",
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
    },
    GraphicFileId: "Model3DHandleDesign20_96",
    ColorId: "StainlessSteel",
    DimensionX: 136,
    DimensionY: 10,
    DimensionZ: 35,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1482,
    in_Model3DGroupName: "Model3d_DH60_Black_128",
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
    },
    GraphicFileId: "Model3DHandleDesign60_128",
    ColorId: "Black",
    DimensionX: 139,
    DimensionY: 14.5,
    DimensionZ: 28,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1483,
    in_Model3DGroupName: "Model3d_DH60_Black_160",
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
    },
    GraphicFileId: "Model3DHandleDesign60_160",
    ColorId: "Black",
    DimensionX: 171,
    DimensionY: 14.5,
    DimensionZ: 28,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1484,
    in_Model3DGroupName: "Model3d_DH60_BrassPlatedAntique_128",
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
    },
    GraphicFileId: "Model3DHandleDesign60_128",
    ColorId: "BrassPlatedAntique",
    DimensionX: 139,
    DimensionY: 14.5,
    DimensionZ: 28,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1485,
    in_Model3DGroupName: "Model3d_DH60_BrassPlatedAntique_160",
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
    },
    GraphicFileId: "Model3DHandleDesign60_160",
    ColorId: "BrassPlatedAntique",
    DimensionX: 171,
    DimensionY: 14.5,
    DimensionZ: 28,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1486,
    in_Model3DGroupName: "Model3d_DH60_ChromedPolished_128",
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
    },
    GraphicFileId: "Model3DHandleDesign60_128",
    ColorId: "Mirror",
    DimensionX: 139,
    DimensionY: 14.5,
    DimensionZ: 28,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1487,
    in_Model3DGroupName: "Model3d_DH60_ChromedPolished_160",
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
    },
    GraphicFileId: "Model3DHandleDesign60_160",
    ColorId: "Mirror",
    DimensionX: 171,
    DimensionY: 14.5,
    DimensionZ: 28,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1488,
    in_Model3DGroupName: "Model3d_DH60_NickelPlated_128",
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
    },
    GraphicFileId: "Model3DHandleDesign60_128",
    ColorId: "NickelPlated",
    DimensionX: 139,
    DimensionY: 14.5,
    DimensionZ: 28,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1489,
    in_Model3DGroupName: "Model3d_DH60_NickelPlated_160",
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
    },
    GraphicFileId: "Model3DHandleDesign60_160",
    ColorId: "NickelPlated",
    DimensionX: 171,
    DimensionY: 14.5,
    DimensionZ: 28,
    ReferencePointXYZ: "110",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "NoIdentifier"
  }
  , {
    _id: 1490,
    in_Model3DGroupName: "DispensaSlideBtm_Grey",
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
    },
    GraphicFileId: "DispensaSlideBtm",
    ColorId: "StainlessSteel",
    DimensionX: 130,
    DimensionY: 77,
    DimensionZ: 487,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideBtm"
  }
  , {
    _id: 1491,
    in_Model3DGroupName: "DispensaSlideTop_Grey",
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
    },
    GraphicFileId: "DispensaSlideTop",
    ColorId: "StainlessSteel",
    DimensionX: 51,
    DimensionY: 58,
    DimensionZ: 376,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideTop"
  }
  , {
    _id: 1492,
    in_Model3DGroupName: "Dispensa30ConTop_Grey",
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
    },
    GraphicFileId: "Dispensa30ConTop",
    ColorId: "StainlessSteel",
    DimensionX: 250,
    DimensionY: 37,
    DimensionZ: 79,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "ConnectorTop"
  }
  , {
    _id: 1493,
    in_Model3DGroupName: "Dispensa30ConBtm_Grey",
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
    },
    GraphicFileId: "Dispensa30ConBtm",
    ColorId: "StainlessSteel",
    DimensionX: 250,
    DimensionY: 37,
    DimensionZ: 79,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "ConnectorBtm"
  }
  , {
    _id: 1494,
    in_Model3DGroupName: "Dispensa40ConTop_Grey",
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
    },
    GraphicFileId: "Dispensa40ConTop",
    ColorId: "StainlessSteel",
    DimensionX: 350,
    DimensionY: 37,
    DimensionZ: 79,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "ConnectorTop"
  }
  , {
    _id: 1495,
    in_Model3DGroupName: "Dispensa40ConBtm_Grey",
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
    },
    GraphicFileId: "Dispensa40ConBtm",
    ColorId: "StainlessSteel",
    DimensionX: 350,
    DimensionY: 37,
    DimensionZ: 79,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "ConnectorBtm"
  }
  , {
    _id: 1496,
    in_Model3DGroupName: "Dispensa160_Grey",
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
    },
    GraphicFileId: "Dispensa160",
    ColorId: "StainlessSteel",
    DimensionX: 47,
    DimensionY: 1200,
    DimensionZ: 500,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Frame"
  }
  , {
    _id: 1497,
    in_Model3DGroupName: "Dispensa190_Grey",
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
    },
    GraphicFileId: "Dispensa190",
    ColorId: "StainlessSteel",
    DimensionX: 47,
    DimensionY: 1600,
    DimensionZ: 500,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Frame"
  }
  , {
    _id: 1498,
    in_Model3DGroupName: "Dispensa230_Grey",
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
    },
    GraphicFileId: "Dispensa230",
    ColorId: "StainlessSteel",
    DimensionX: 48,
    DimensionY: 1870,
    DimensionZ: 500,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Frame"
  }
  , {
    _id: 1499,
    in_Model3DGroupName: "DispensaSlideBtm_Anthrazit",
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
    },
    GraphicFileId: "DispensaSlideBtm",
    ColorId: "anthrazit",
    DimensionX: 130,
    DimensionY: 77,
    DimensionZ: 487,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideBtm"
  }
  , {
    _id: 1500,
    in_Model3DGroupName: "DispensaSlideTop_Anthrazit",
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
    },
    GraphicFileId: "DispensaSlideTop",
    ColorId: "anthrazit",
    DimensionX: 51,
    DimensionY: 58,
    DimensionZ: 376,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "SlideTop"
  }
  , {
    _id: 1501,
    in_Model3DGroupName: "Dispensa30ConTop_Anthrazit",
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
    },
    GraphicFileId: "Dispensa30ConTop",
    ColorId: "anthrazit",
    DimensionX: 250,
    DimensionY: 37,
    DimensionZ: 79,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "ConnectorTop"
  }
  , {
    _id: 1502,
    in_Model3DGroupName: "Dispensa30ConBtm_Anthrazit",
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
    },
    GraphicFileId: "Dispensa30ConBtm",
    ColorId: "anthrazit",
    DimensionX: 250,
    DimensionY: 37,
    DimensionZ: 79,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "ConnectorBtm"
  }
  , {
    _id: 1503,
    in_Model3DGroupName: "Dispensa40ConTop_Anthrazit",
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
    },
    GraphicFileId: "Dispensa40ConTop",
    ColorId: "anthrazit",
    DimensionX: 350,
    DimensionY: 37,
    DimensionZ: 79,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "ConnectorTop"
  }
  , {
    _id: 1504,
    in_Model3DGroupName: "Dispensa40ConBtm_Anthrazit",
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
    },
    GraphicFileId: "Dispensa40ConBtm",
    ColorId: "anthrazit",
    DimensionX: 350,
    DimensionY: 37,
    DimensionZ: 79,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "ConnectorBtm"
  }
  , {
    _id: 1505,
    in_Model3DGroupName: "Dispensa160_Anthrazit",
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
    },
    GraphicFileId: "Dispensa160",
    ColorId: "anthrazit",
    DimensionX: 47,
    DimensionY: 1200,
    DimensionZ: 500,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Frame"
  }
  , {
    _id: 1506,
    in_Model3DGroupName: "Dispensa190_Anthrazit",
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
    },
    GraphicFileId: "Dispensa190",
    ColorId: "anthrazit",
    DimensionX: 47,
    DimensionY: 1600,
    DimensionZ: 500,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Frame"
  }
  , {
    _id: 1507,
    in_Model3DGroupName: "Dispensa230_Anthrazit",
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
    },
    GraphicFileId: "Dispensa230",
    ColorId: "anthrazit",
    DimensionX: 48,
    DimensionY: 1870,
    DimensionZ: 500,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Frame"
  }
  , {
    _id: 1508,
    in_Model3DGroupName: "DispensaClassic30",
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
    },
    GraphicFileId: "DispensaClassic30",
    ColorId: "StainlessSteel",
    DimensionX: 250,
    DimensionY: 110.5,
    DimensionZ: 459,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Basket"
  }
  , {
    _id: 1509,
    in_Model3DGroupName: "DispensaClassic40",
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
    },
    GraphicFileId: "DispensaClassic40",
    ColorId: "StainlessSteel",
    DimensionX: 350,
    DimensionY: 110.5,
    DimensionZ: 459,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Basket"
  }
  , {
    _id: 1510,
    in_Model3DGroupName: "DispensaStyle30_Grey",
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
    },
    GraphicFileId: "DispensaStyle30",
    ColorId: "StainlessSteel",
    DimensionX: 250,
    DimensionY: 97,
    DimensionZ: 463.5,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Basket"
  }
  , {
    _id: 1511,
    in_Model3DGroupName: "DispensaStyle40_Grey",
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
    },
    GraphicFileId: "DispensaStyle40",
    ColorId: "StainlessSteel",
    DimensionX: 350,
    DimensionY: 97,
    DimensionZ: 463.5,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Basket"
  }
  , {
    _id: 1512,
    in_Model3DGroupName: "DispensaStyle30_Anthrazit",
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
    },
    GraphicFileId: "DispensaStyle30",
    ColorId: "anthrazit",
    DimensionX: 250,
    DimensionY: 97,
    DimensionZ: 463.5,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Basket"
  }
  , {
    _id: 1513,
    in_Model3DGroupName: "DispensaStyle40_Anthrazit",
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
    },
    GraphicFileId: "DispensaStyle40",
    ColorId: "anthrazit",
    DimensionX: 350,
    DimensionY: 97,
    DimensionZ: 463.5,
    ReferencePointXYZ: "102",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: 0,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "Basket"
  }
  , {
    _id: 1514,
    in_Model3DGroupName: "No15_Classic_Silver_Right_Basket",
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
    },
    GraphicFileId: "No15_Classic_right",
    ColorId: "StainlessSteel",
    DimensionX: 104,
    DimensionY: 477,
    DimensionZ: 527,
    ReferencePointXYZ: "202",
    InsertionPointX: -104,
    InsertionPointY: 0,
    InsertionPointZ: -527,
    PartOffsetX: 4.2,
    PartOffsetY: 6.5,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Basket"
  }
  , {
    _id: 1515,
    in_Model3DGroupName: "No15_Classic_Silver_Right_Slides",
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
    },
    GraphicFileId: "No15_Slides_right",
    ColorId: "StainlessSteel",
    DimensionX: 26.8,
    DimensionY: 415,
    DimensionZ: 448,
    ReferencePointXYZ: "202",
    InsertionPointX: -26.8,
    InsertionPointY: 0,
    InsertionPointZ: -485.7,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Slides"
  }
  , {
    _id: 1516,
    in_Model3DGroupName: "No15_Classic_Anthrazit_Right_Basket",
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
    },
    GraphicFileId: "No15_Classic_right",
    ColorId: "anthrazit",
    DimensionX: 104,
    DimensionY: 477,
    DimensionZ: 527,
    ReferencePointXYZ: "202",
    InsertionPointX: -104,
    InsertionPointY: 0,
    InsertionPointZ: -527,
    PartOffsetX: 4.2,
    PartOffsetY: 6.5,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Basket"
  }
  , {
    _id: 1517,
    in_Model3DGroupName: "No15_Classic_Anthrazit_Right_Slides",
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
    },
    GraphicFileId: "No15_Slides_right",
    ColorId: "anthrazit",
    DimensionX: 26.8,
    DimensionY: 415,
    DimensionZ: 448,
    ReferencePointXYZ: "202",
    InsertionPointX: -26.8,
    InsertionPointY: 0,
    InsertionPointZ: -485.7,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Slides"
  }
  , {
    _id: 1518,
    in_Model3DGroupName: "No15_Classic_Silver_Left_Basket",
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
    },
    GraphicFileId: "No15_Classic_left",
    ColorId: "StainlessSteel",
    DimensionX: 104,
    DimensionY: 477,
    DimensionZ: 527,
    ReferencePointXYZ: "202",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: -527,
    PartOffsetX: 4.2,
    PartOffsetY: 6.5,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Basket"
  }
  , {
    _id: 1519,
    in_Model3DGroupName: "No15_Classic_Silver_Left_Slides",
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
    },
    GraphicFileId: "No15_Slides_left",
    ColorId: "StainlessSteel",
    DimensionX: 26.8,
    DimensionY: 415,
    DimensionZ: 448,
    ReferencePointXYZ: "202",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: -485.7,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Slides"
  }
  , {
    _id: 1520,
    in_Model3DGroupName: "No15_Classic_Anthrazit_Left_Basket",
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
    },
    GraphicFileId: "No15_Classic_left",
    ColorId: "anthrazit",
    DimensionX: 104,
    DimensionY: 533,
    DimensionZ: 527,
    ReferencePointXYZ: "202",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: -527,
    PartOffsetX: 4.2,
    PartOffsetY: 6.5,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Basket"
  }
  , {
    _id: 1521,
    in_Model3DGroupName: "No15_Classic_Anthrazit_Left_Slides",
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
    },
    GraphicFileId: "No15_Slides_left",
    ColorId: "anthrazit",
    DimensionX: 26.8,
    DimensionY: 415,
    DimensionZ: 448,
    ReferencePointXYZ: "202",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: -485.7,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Slides"
  }
  , {
    _id: 1522,
    in_Model3DGroupName: "No15_Style_Silver_Right_Basket",
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
    },
    GraphicFileId: "No15_Style_right",
    ColorId: "StainlessSteel",
    DimensionX: 104,
    DimensionY: 477,
    DimensionZ: 527,
    ReferencePointXYZ: "202",
    InsertionPointX: -104,
    InsertionPointY: 0,
    InsertionPointZ: -527,
    PartOffsetX: 4.2,
    PartOffsetY: 6.5,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Basket"
  }
  , {
    _id: 1523,
    in_Model3DGroupName: "No15_Style_Silver_Right_Slides",
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
    },
    GraphicFileId: "No15_Slides_right",
    ColorId: "StainlessSteel",
    DimensionX: 26.8,
    DimensionY: 415,
    DimensionZ: 448,
    ReferencePointXYZ: "202",
    InsertionPointX: -26.8,
    InsertionPointY: 0,
    InsertionPointZ: -485.7,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Slides"
  }
  , {
    _id: 1524,
    in_Model3DGroupName: "No15_Style_Anthrazit_Right_Basket",
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
    },
    GraphicFileId: "No15_Style_right",
    ColorId: "anthrazit",
    DimensionX: 104,
    DimensionY: 477,
    DimensionZ: 527,
    ReferencePointXYZ: "202",
    InsertionPointX: -104,
    InsertionPointY: 0,
    InsertionPointZ: -527,
    PartOffsetX: 4.2,
    PartOffsetY: 6.5,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Basket"
  }
  , {
    _id: 1525,
    in_Model3DGroupName: "No15_Style_Anthrazit_Right_Slides",
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
    },
    GraphicFileId: "No15_Slides_right",
    ColorId: "anthrazit",
    DimensionX: 26.8,
    DimensionY: 415,
    DimensionZ: 448,
    ReferencePointXYZ: "202",
    InsertionPointX: -26.8,
    InsertionPointY: 0,
    InsertionPointZ: -485.7,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Slides"
  }
  , {
    _id: 1526,
    in_Model3DGroupName: "No15_Style_Silver_Left_Basket",
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
    },
    GraphicFileId: "No15_Style_left",
    ColorId: "StainlessSteel",
    DimensionX: 104,
    DimensionY: 477,
    DimensionZ: 527,
    ReferencePointXYZ: "202",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: -527,
    PartOffsetX: 4.2,
    PartOffsetY: 6.5,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Basket"
  }
  , {
    _id: 1527,
    in_Model3DGroupName: "No15_Style_Silver_Left_Slides",
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
    },
    GraphicFileId: "No15_Slides_left",
    ColorId: "StainlessSteel",
    DimensionX: 26.8,
    DimensionY: 415,
    DimensionZ: 448,
    ReferencePointXYZ: "202",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: -485.7,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Slides"
  }
  , {
    _id: 1528,
    in_Model3DGroupName: "No15_Style_Anthrazit_Left_Basket",
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
    },
    GraphicFileId: "No15_Style_left",
    ColorId: "anthrazit",
    DimensionX: 104,
    DimensionY: 477,
    DimensionZ: 527,
    ReferencePointXYZ: "202",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: -527,
    PartOffsetX: 4.2,
    PartOffsetY: 6.5,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Basket"
  }
  , {
    _id: 1529,
    in_Model3DGroupName: "No15_Style_Anthrazit_Left_Slides",
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
    },
    GraphicFileId: "No15_Slides_left",
    ColorId: "anthrazit",
    DimensionX: 26.8,
    DimensionY: 415,
    DimensionZ: 448,
    ReferencePointXYZ: "202",
    InsertionPointX: 0,
    InsertionPointY: 0,
    InsertionPointZ: -485.7,
    PartOffsetX: 0,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: false,
    Identifier: "Slides"
  }
  , {
    _id: 1530,
    in_Model3DGroupName: "Model3DConero625",
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
    },
    GraphicFileId: "Model3DConero625",
    ColorId: "anthrazit",
    DimensionX: 771,
    DimensionY: 705,
    DimensionZ: 211,
    ReferencePointXYZ: "000",
    InsertionPointX: 0,
    InsertionPointY: 220,
    InsertionPointZ: 68,
    PartOffsetX: -4.5,
    PartOffsetY: 0,
    PartOffsetZ: 0,
    Visible: true,
    Identifier: "ClothingOrganizer_LR"
  }
];
