import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars, internal_enterModulePrepareContext, internal_leaveModulePrepareContext } from '../logging'
import { ct_tab_ApplianceGraphicLibrary, ICT_tab_ApplianceGraphicLibrary, ct2_tab_ApplianceGraphicLibrary } from '../custom-tables/tab_ApplianceGraphicLibrary'
import { ct_tab_BaseunitFridgeConstruction, ICT_tab_BaseunitFridgeConstruction, ct2_tab_BaseunitFridgeConstruction } from '../custom-tables/tab_BaseunitFridgeConstruction'
import { ct_tab_BaseunitFridgeMapping, ICT_tab_BaseunitFridgeMapping, ct2_tab_BaseunitFridgeMapping } from '../custom-tables/tab_BaseunitFridgeMapping'
import { ct_tab_BoardLibrary, ICT_tab_BoardLibrary, ct2_tab_BoardLibrary } from '../custom-tables/tab_BoardLibrary'
import { ct_tab_BoardMapping, ICT_tab_BoardMapping, ct2_tab_BoardMapping } from '../custom-tables/tab_BoardMapping'
import { ct_tab_BracketConstruction, ICT_tab_BracketConstruction, ct2_tab_BracketConstruction } from '../custom-tables/tab_BracketConstruction'
import { ct_tab_BracketMapping, ICT_tab_BracketMapping, ct2_tab_BracketMapping } from '../custom-tables/tab_BracketMapping'
import { ct_tab_CarcaseBackwallConstruction, ICT_tab_CarcaseBackwallConstruction, ct2_tab_CarcaseBackwallConstruction } from '../custom-tables/tab_CarcaseBackwallConstruction'
import { ct_tab_CarcaseBackwallSettings, ICT_tab_CarcaseBackwallSettings, ct2_tab_CarcaseBackwallSettings } from '../custom-tables/tab_CarcaseBackwallSettings'
import { ct_tab_CarcaseCornerunitConstruction, ICT_tab_CarcaseCornerunitConstruction, ct2_tab_CarcaseCornerunitConstruction } from '../custom-tables/tab_CarcaseCornerunitConstruction'
import { ct_tab_CarcaseHoodConstruction, ICT_tab_CarcaseHoodConstruction, ct2_tab_CarcaseHoodConstruction } from '../custom-tables/tab_CarcaseHoodConstruction'
import { ct_tab_CarcasePartConnectionCalculations, ICT_tab_CarcasePartConnectionCalculations, ct2_tab_CarcasePartConnectionCalculations } from '../custom-tables/tab_CarcasePartConnectionCalculations'
import { ct_tab_CarcasePartConnectionMapping, ICT_tab_CarcasePartConnectionMapping, ct2_tab_CarcasePartConnectionMapping } from '../custom-tables/tab_CarcasePartConnectionMapping'
import { ct_tab_CarcasePartsShape, ICT_tab_CarcasePartsShape, ct2_tab_CarcasePartsShape } from '../custom-tables/tab_CarcasePartsShape'
import { ct_tab_CarcaseShelfbtmSettings, ICT_tab_CarcaseShelfbtmSettings, ct2_tab_CarcaseShelfbtmSettings } from '../custom-tables/tab_CarcaseShelfbtmSettings'
import { ct_tab_CarcaseShelftopSettings, ICT_tab_CarcaseShelftopSettings, ct2_tab_CarcaseShelftopSettings } from '../custom-tables/tab_CarcaseShelftopSettings'
import { ct_tab_CarcaseSidepanelSettings, ICT_tab_CarcaseSidepanelSettings, ct2_tab_CarcaseSidepanelSettings } from '../custom-tables/tab_CarcaseSidepanelSettings'
import { ct_tab_CarcaseSlopedCeilingDimension, ICT_tab_CarcaseSlopedCeilingDimension, ct2_tab_CarcaseSlopedCeilingDimension } from '../custom-tables/tab_CarcaseSlopedCeilingDimension'
import { ct_tab_CarcaseStorageunitConstruction, ICT_tab_CarcaseStorageunitConstruction, ct2_tab_CarcaseStorageunitConstruction } from '../custom-tables/tab_CarcaseStorageunitConstruction'
import { ct_tab_ClothingOrganizerColorMapping, ICT_tab_ClothingOrganizerColorMapping, ct2_tab_ClothingOrganizerColorMapping } from '../custom-tables/tab_ClothingOrganizerColorMapping'
import { ct_tab_ClothingOrganizerExtraItemMapping, ICT_tab_ClothingOrganizerExtraItemMapping, ct2_tab_ClothingOrganizerExtraItemMapping } from '../custom-tables/tab_ClothingOrganizerExtraItemMapping'
import { ct_tab_ClothingOrganizerMapping, ICT_tab_ClothingOrganizerMapping, ct2_tab_ClothingOrganizerMapping } from '../custom-tables/tab_ClothingOrganizerMapping'
import { ct_tab_ClothingOrganizerPositionZSettings, ICT_tab_ClothingOrganizerPositionZSettings, ct2_tab_ClothingOrganizerPositionZSettings } from '../custom-tables/tab_ClothingOrganizerPositionZSettings'
import { ct_tab_ComponentLibrary, ICT_tab_ComponentLibrary, ct2_tab_ComponentLibrary } from '../custom-tables/tab_ComponentLibrary'
import { ct_tab_ComponentVariables, ICT_tab_ComponentVariables, ct2_tab_ComponentVariables } from '../custom-tables/tab_ComponentVariables'
import { ct_tab_CornerFillerFrontpanelConstruction, ICT_tab_CornerFillerFrontpanelConstruction, ct2_tab_CornerFillerFrontpanelConstruction } from '../custom-tables/tab_CornerFillerFrontpanelConstruction'
import { ct_tab_CornerunitStraightConstruction, ICT_tab_CornerunitStraightConstruction, ct2_tab_CornerunitStraightConstruction } from '../custom-tables/tab_CornerunitStraightConstruction'
import { ct_tab_CornerunitStraightDimensionLogic, ICT_tab_CornerunitStraightDimensionLogic, ct2_tab_CornerunitStraightDimensionLogic } from '../custom-tables/tab_CornerunitStraightDimensionLogic'
import { ct_tab_DishwasherConstruction, ICT_tab_DishwasherConstruction, ct2_tab_DishwasherConstruction } from '../custom-tables/tab_DishwasherConstruction'
import { ct_tab_DishwasherMapping, ICT_tab_DishwasherMapping, ct2_tab_DishwasherMapping } from '../custom-tables/tab_DishwasherMapping'
import { ct_tab_DoorSettings, ICT_tab_DoorSettings, ct2_tab_DoorSettings } from '../custom-tables/tab_DoorSettings'
import { ct_tab_DrawerBoxColorMapping, ICT_tab_DrawerBoxColorMapping, ct2_tab_DrawerBoxColorMapping } from '../custom-tables/tab_DrawerBoxColorMapping'
import { ct_tab_DrawerBoxConstruction, ICT_tab_DrawerBoxConstruction, ct2_tab_DrawerBoxConstruction } from '../custom-tables/tab_DrawerBoxConstruction'
import { ct_tab_DrawerBoxDimensionMapping, ICT_tab_DrawerBoxDimensionMapping, ct2_tab_DrawerBoxDimensionMapping } from '../custom-tables/tab_DrawerBoxDimensionMapping'
import { ct_tab_DrawerBoxExtraItemSettings, ICT_tab_DrawerBoxExtraItemSettings, ct2_tab_DrawerBoxExtraItemSettings } from '../custom-tables/tab_DrawerBoxExtraItemSettings'
import { ct_tab_DrawerBoxInsertionSettings, ICT_tab_DrawerBoxInsertionSettings, ct2_tab_DrawerBoxInsertionSettings } from '../custom-tables/tab_DrawerBoxInsertionSettings'
import { ct_tab_DrawerBoxMapping, ICT_tab_DrawerBoxMapping, ct2_tab_DrawerBoxMapping } from '../custom-tables/tab_DrawerBoxMapping'
import { ct_tab_DrawerBoxWeightTypeSettings, ICT_tab_DrawerBoxWeightTypeSettings, ct2_tab_DrawerBoxWeightTypeSettings } from '../custom-tables/tab_DrawerBoxWeightTypeSettings'
import { ct_tab_DuststripMapping, ICT_tab_DuststripMapping, ct2_tab_DuststripMapping } from '../custom-tables/tab_DuststripMapping'
import { ct_tab_EdgeClassSettings, ICT_tab_EdgeClassSettings, ct2_tab_EdgeClassSettings } from '../custom-tables/tab_EdgeClassSettings'
import { ct_tab_EdgeFrameSettings, ICT_tab_EdgeFrameSettings, ct2_tab_EdgeFrameSettings } from '../custom-tables/tab_EdgeFrameSettings'
import { ct_tab_EdgeJointMapping, ICT_tab_EdgeJointMapping, ct2_tab_EdgeJointMapping } from '../custom-tables/tab_EdgeJointMapping'
import { ct_tab_EdgeJointSettings, ICT_tab_EdgeJointSettings, ct2_tab_EdgeJointSettings } from '../custom-tables/tab_EdgeJointSettings'
import { ct_tab_EdgeLibrary, ICT_tab_EdgeLibrary, ct2_tab_EdgeLibrary } from '../custom-tables/tab_EdgeLibrary'
import { ct_tab_EdgeMapping, ICT_tab_EdgeMapping, ct2_tab_EdgeMapping } from '../custom-tables/tab_EdgeMapping'
import { ct_tab_EdgeNumberSettings, ICT_tab_EdgeNumberSettings, ct2_tab_EdgeNumberSettings } from '../custom-tables/tab_EdgeNumberSettings'
import { ct_tab_EdgeSettings, ICT_tab_EdgeSettings, ct2_tab_EdgeSettings } from '../custom-tables/tab_EdgeSettings'
import { ct_tab_ErrorList, ICT_tab_ErrorList, ct2_tab_ErrorList } from '../custom-tables/tab_ErrorList'
import { ct_tab_FillerHardwareSettings, ICT_tab_FillerHardwareSettings, ct2_tab_FillerHardwareSettings } from '../custom-tables/tab_FillerHardwareSettings'
import { ct_tab_FillerSettings, ICT_tab_FillerSettings, ct2_tab_FillerSettings } from '../custom-tables/tab_FillerSettings'
import { ct_tab_FlipliftColorMapping, ICT_tab_FlipliftColorMapping, ct2_tab_FlipliftColorMapping } from '../custom-tables/tab_FlipliftColorMapping'
import { ct_tab_FlipliftConstruction, ICT_tab_FlipliftConstruction, ct2_tab_FlipliftConstruction } from '../custom-tables/tab_FlipliftConstruction'
import { ct_tab_FlipliftMapping, ICT_tab_FlipliftMapping, ct2_tab_FlipliftMapping } from '../custom-tables/tab_FlipliftMapping'
import { ct_tab_FlipliftSettings, ICT_tab_FlipliftSettings, ct2_tab_FlipliftSettings } from '../custom-tables/tab_FlipliftSettings'
import { ct_tab_FlipliftWeightTypeMapping, ICT_tab_FlipliftWeightTypeMapping, ct2_tab_FlipliftWeightTypeMapping } from '../custom-tables/tab_FlipliftWeightTypeMapping'
import { ct_tab_FrameFillingMapping, ICT_tab_FrameFillingMapping, ct2_tab_FrameFillingMapping } from '../custom-tables/tab_FrameFillingMapping'
import { ct_tab_FramePartConnectionMapping, ICT_tab_FramePartConnectionMapping, ct2_tab_FramePartConnectionMapping } from '../custom-tables/tab_FramePartConnectionMapping'
import { ct_tab_FridgeConstruction, ICT_tab_FridgeConstruction, ct2_tab_FridgeConstruction } from '../custom-tables/tab_FridgeConstruction'
import { ct_tab_FridgeMapping, ICT_tab_FridgeMapping, ct2_tab_FridgeMapping } from '../custom-tables/tab_FridgeMapping'
import { ct_tab_FridgeNicheConstruction, ICT_tab_FridgeNicheConstruction, ct2_tab_FridgeNicheConstruction } from '../custom-tables/tab_FridgeNicheConstruction'
import { ct_tab_FrontConstruction, ICT_tab_FrontConstruction, ct2_tab_FrontConstruction } from '../custom-tables/tab_FrontConstruction'
import { ct_tab_FrontEdgeColorMapping, ICT_tab_FrontEdgeColorMapping, ct2_tab_FrontEdgeColorMapping } from '../custom-tables/tab_FrontEdgeColorMapping'
import { ct_tab_FrontPanelConstruction, ICT_tab_FrontPanelConstruction, ct2_tab_FrontPanelConstruction } from '../custom-tables/tab_FrontPanelConstruction'
import { ct_tab_GrainDirectionSettings, ICT_tab_GrainDirectionSettings, ct2_tab_GrainDirectionSettings } from '../custom-tables/tab_GrainDirectionSettings'
import { ct_tab_GraphicFileLibrary, ICT_tab_GraphicFileLibrary, ct2_tab_GraphicFileLibrary } from '../custom-tables/tab_GraphicFileLibrary'
import { ct_tab_GraphicLibrary, ICT_tab_GraphicLibrary, ct2_tab_GraphicLibrary } from '../custom-tables/tab_GraphicLibrary'
import { ct_tab_GraphicLibraryMapping, ICT_tab_GraphicLibraryMapping, ct2_tab_GraphicLibraryMapping } from '../custom-tables/tab_GraphicLibraryMapping'
import { ct_tab_HandleConstruction, ICT_tab_HandleConstruction, ct2_tab_HandleConstruction } from '../custom-tables/tab_HandleConstruction'
import { ct_tab_HandleLengthMapping, ICT_tab_HandleLengthMapping, ct2_tab_HandleLengthMapping } from '../custom-tables/tab_HandleLengthMapping'
import { ct_tab_HandleMapping, ICT_tab_HandleMapping, ct2_tab_HandleMapping } from '../custom-tables/tab_HandleMapping'
import { ct_tab_HandleSettings, ICT_tab_HandleSettings, ct2_tab_HandleSettings } from '../custom-tables/tab_HandleSettings'
import { ct_tab_HangerMapping, ICT_tab_HangerMapping, ct2_tab_HangerMapping } from '../custom-tables/tab_HangerMapping'
import { ct_tab_HangerSettings, ICT_tab_HangerSettings, ct2_tab_HangerSettings } from '../custom-tables/tab_HangerSettings'
import { ct_tab_HardwareDrillHorLibrary, ICT_tab_HardwareDrillHorLibrary, ct2_tab_HardwareDrillHorLibrary } from '../custom-tables/tab_HardwareDrillHorLibrary'
import { ct_tab_HardwareDrillVertLibrary, ICT_tab_HardwareDrillVertLibrary, ct2_tab_HardwareDrillVertLibrary } from '../custom-tables/tab_HardwareDrillVertLibrary'
import { ct_tab_HardwareLibrary, ICT_tab_HardwareLibrary, ct2_tab_HardwareLibrary } from '../custom-tables/tab_HardwareLibrary'
import { ct_tab_HardwareLibraryMapping, ICT_tab_HardwareLibraryMapping, ct2_tab_HardwareLibraryMapping } from '../custom-tables/tab_HardwareLibraryMapping'
import { ct_tab_HardwareMillingLibrary, ICT_tab_HardwareMillingLibrary, ct2_tab_HardwareMillingLibrary } from '../custom-tables/tab_HardwareMillingLibrary'
import { ct_tab_HardwareSettings, ICT_tab_HardwareSettings, ct2_tab_HardwareSettings } from '../custom-tables/tab_HardwareSettings'
import { ct_tab_HingeConstruction, ICT_tab_HingeConstruction, ct2_tab_HingeConstruction } from '../custom-tables/tab_HingeConstruction'
import { ct_tab_HingeDrillingDistance, ICT_tab_HingeDrillingDistance, ct2_tab_HingeDrillingDistance } from '../custom-tables/tab_HingeDrillingDistance'
import { ct_tab_HingeMapping, ICT_tab_HingeMapping, ct2_tab_HingeMapping } from '../custom-tables/tab_HingeMapping'
import { ct_tab_HingePosition, ICT_tab_HingePosition, ct2_tab_HingePosition } from '../custom-tables/tab_HingePosition'
import { ct_tab_HingeSettings, ICT_tab_HingeSettings, ct2_tab_HingeSettings } from '../custom-tables/tab_HingeSettings'
import { ct_tab_HobConstruction, ICT_tab_HobConstruction, ct2_tab_HobConstruction } from '../custom-tables/tab_HobConstruction'
import { ct_tab_HobMapping, ICT_tab_HobMapping, ct2_tab_HobMapping } from '../custom-tables/tab_HobMapping'
import { ct_tab_HoodAssemblyMapping, ICT_tab_HoodAssemblyMapping, ct2_tab_HoodAssemblyMapping } from '../custom-tables/tab_HoodAssemblyMapping'
import { ct_tab_HoodAssemblyParts, ICT_tab_HoodAssemblyParts, ct2_tab_HoodAssemblyParts } from '../custom-tables/tab_HoodAssemblyParts'
import { ct_tab_HoodConstruction, ICT_tab_HoodConstruction, ct2_tab_HoodConstruction } from '../custom-tables/tab_HoodConstruction'
import { ct_tab_HoodMapping, ICT_tab_HoodMapping, ct2_tab_HoodMapping } from '../custom-tables/tab_HoodMapping'
import { ct_tab_LaundryMachineMapping, ICT_tab_LaundryMachineMapping, ct2_tab_LaundryMachineMapping } from '../custom-tables/tab_LaundryMachineMapping'
import { ct_tab_MaterialMapping, ICT_tab_MaterialMapping, ct2_tab_MaterialMapping } from '../custom-tables/tab_MaterialMapping'
import { ct_tab_ObjectMapping, ICT_tab_ObjectMapping, ct2_tab_ObjectMapping } from '../custom-tables/tab_ObjectMapping'
import { ct_tab_OvenConstruction, ICT_tab_OvenConstruction, ct2_tab_OvenConstruction } from '../custom-tables/tab_OvenConstruction'
import { ct_tab_OvenMapping, ICT_tab_OvenMapping, ct2_tab_OvenMapping } from '../custom-tables/tab_OvenMapping'
import { ct_tab_PanelWoodFrameConstruction, ICT_tab_PanelWoodFrameConstruction, ct2_tab_PanelWoodFrameConstruction } from '../custom-tables/tab_PanelWoodFrameConstruction'
import { ct_tab_PantryPulloutColorMapping, ICT_tab_PantryPulloutColorMapping, ct2_tab_PantryPulloutColorMapping } from '../custom-tables/tab_PantryPulloutColorMapping'
import { ct_tab_PantryPulloutConstruction, ICT_tab_PantryPulloutConstruction, ct2_tab_PantryPulloutConstruction } from '../custom-tables/tab_PantryPulloutConstruction'
import { ct_tab_PantryPulloutMapping, ICT_tab_PantryPulloutMapping, ct2_tab_PantryPulloutMapping } from '../custom-tables/tab_PantryPulloutMapping'
import { ct_tab_PartConnectionSettings, ICT_tab_PartConnectionSettings, ct2_tab_PartConnectionSettings } from '../custom-tables/tab_PartConnectionSettings'
import { ct_tab_PartOverdimensionSettings, ICT_tab_PartOverdimensionSettings, ct2_tab_PartOverdimensionSettings } from '../custom-tables/tab_PartOverdimensionSettings'
import { ct_tab_PartSettings, ICT_tab_PartSettings, ct2_tab_PartSettings } from '../custom-tables/tab_PartSettings'
import { ct_tab_PartsGraphicRotation, ICT_tab_PartsGraphicRotation, ct2_tab_PartsGraphicRotation } from '../custom-tables/tab_PartsGraphicRotation'
import { ct_tab_PlinthAreaBaseboardSettings, ICT_tab_PlinthAreaBaseboardSettings, ct2_tab_PlinthAreaBaseboardSettings } from '../custom-tables/tab_PlinthAreaBaseboardSettings'
import { ct_tab_PlinthAreaConstruction, ICT_tab_PlinthAreaConstruction, ct2_tab_PlinthAreaConstruction } from '../custom-tables/tab_PlinthAreaConstruction'
import { ct_tab_PlinthAreaMapping, ICT_tab_PlinthAreaMapping, ct2_tab_PlinthAreaMapping } from '../custom-tables/tab_PlinthAreaMapping'
import { ct_tab_PlinthAreaSettings, ICT_tab_PlinthAreaSettings, ct2_tab_PlinthAreaSettings } from '../custom-tables/tab_PlinthAreaSettings'
import { ct_tab_ProcessingMapping, ICT_tab_ProcessingMapping, ct2_tab_ProcessingMapping } from '../custom-tables/tab_ProcessingMapping'
import { ct_tab_PulloutElementColorMapping, ICT_tab_PulloutElementColorMapping, ct2_tab_PulloutElementColorMapping } from '../custom-tables/tab_PulloutElementColorMapping'
import { ct_tab_PulloutHardwareInsertionSettings, ICT_tab_PulloutHardwareInsertionSettings, ct2_tab_PulloutHardwareInsertionSettings } from '../custom-tables/tab_PulloutHardwareInsertionSettings'
import { ct_tab_PulloutMapping, ICT_tab_PulloutMapping, ct2_tab_PulloutMapping } from '../custom-tables/tab_PulloutMapping'
import { ct_tab_PulloutSettings, ICT_tab_PulloutSettings, ct2_tab_PulloutSettings } from '../custom-tables/tab_PulloutSettings'
import { ct_tab_PushtoopenMapping, ICT_tab_PushtoopenMapping, ct2_tab_PushtoopenMapping } from '../custom-tables/tab_PushtoopenMapping'
import { ct_tab_PushtoopenSettings, ICT_tab_PushtoopenSettings, ct2_tab_PushtoopenSettings } from '../custom-tables/tab_PushtoopenSettings'
import { ct_tab_SawingAngleLibrary, ICT_tab_SawingAngleLibrary, ct2_tab_SawingAngleLibrary } from '../custom-tables/tab_SawingAngleLibrary'
import { ct_tab_SawingVertLibrary, ICT_tab_SawingVertLibrary, ct2_tab_SawingVertLibrary } from '../custom-tables/tab_SawingVertLibrary'
import { ct_tab_SegmentFrontConstruction, ICT_tab_SegmentFrontConstruction, ct2_tab_SegmentFrontConstruction } from '../custom-tables/tab_SegmentFrontConstruction'
import { ct_tab_SegmentFrontMapping, ICT_tab_SegmentFrontMapping, ct2_tab_SegmentFrontMapping } from '../custom-tables/tab_SegmentFrontMapping'
import { ct_tab_ShelfadjDrillSettings, ICT_tab_ShelfadjDrillSettings, ct2_tab_ShelfadjDrillSettings } from '../custom-tables/tab_ShelfadjDrillSettings'
import { ct_tab_ShelfadjQtyPosSettings, ICT_tab_ShelfadjQtyPosSettings, ct2_tab_ShelfadjQtyPosSettings } from '../custom-tables/tab_ShelfadjQtyPosSettings'
import { ct_tab_ShelfadjSettings, ICT_tab_ShelfadjSettings, ct2_tab_ShelfadjSettings } from '../custom-tables/tab_ShelfadjSettings'
import { ct_tab_SinkConstruction, ICT_tab_SinkConstruction, ct2_tab_SinkConstruction } from '../custom-tables/tab_SinkConstruction'
import { ct_tab_SinkMapping, ICT_tab_SinkMapping, ct2_tab_SinkMapping } from '../custom-tables/tab_SinkMapping'
import { ct_tab_SlopedCeilingSettings, ICT_tab_SlopedCeilingSettings, ct2_tab_SlopedCeilingSettings } from '../custom-tables/tab_SlopedCeilingSettings'

import { OD_Base, PartGroup, OpenGroup, Matrix4, Vector3, GenerationContour, Contour, GenerationMethod, RoomContour, ArticlePos } from '../base'
import { IPartBase, PartBase, _toFloat, _toInt, _toString, _toBoolean, IModBaseProp, IContextData } from '../mod-base'
import { loadOrderData } from '../loader'
import { GlobalFunc } from '../global-func'
import { IModParents_mc_Pullout01 } from '../mod-interfaces'
import { IP_part_PulloutHardware_PartVarsWritable, P_part_PulloutHardware } from '../parts/part_PulloutHardware'
import { IP_part_PulloutHardwareDrillings_PartVarsWritable, P_part_PulloutHardwareDrillings } from '../parts/part_PulloutHardwareDrillings'
import { IModuleNonNull_mc_PulloutHardware01, IModParents_mc_PulloutHardware01, IPartParentsNonNull_mc_PulloutHardware01 } from '../mod-interfaces'
import { IModVar_mod_PulloutConnectionPosition, IModVarNonNull_mod_PulloutConnectionPosition, IModVar_mod_PulloutDesign, IModVarNonNull_mod_PulloutDesign, IModVar_mod_PulloutElementColor, IModVarNonNull_mod_PulloutElementColor, IModVar_mod_PulloutType, IModVarNonNull_mod_PulloutType, IModVar_mod_OpeningType, IModVarNonNull_mod_OpeningType, IModVar_mod_FrontId, IModVarNonNull_mod_FrontId, IModVar_mod_HardwareColor, IModVarNonNull_mod_HardwareColor } from '../var-interfaces'
import { VariantValidation, IMatrix_mod_PulloutConnectionPosition, IMatrix_mod_PulloutDesign, IMatrix_mod_PulloutElementColor, IMatrix_mod_PulloutType, IMatrix_mod_OpeningType, IMatrix_mod_FrontId, IMatrix_mod_HardwareColor } from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_PulloutHardware, IPartAdd_part_PulloutHardwareDrillings } from '../part-add-interfaces';
import { mc_PulloutHardware01_createBuildPlan, mc_PulloutHardware01_afterDataCompletion, mc_PulloutHardware01_manufacturerDataCompletion, mc_PulloutHardware01_calculateContainerModules } from '../../modules/mc_PulloutHardware01';

export interface cbp_mc_PulloutHardware01 extends IModBaseProp
  , IPartAdd_part_PulloutHardware, IPartAdd_part_PulloutHardwareDrillings, IModVarNonNull_mod_PulloutConnectionPosition, IModVarNonNull_mod_PulloutDesign, IModVarNonNull_mod_PulloutElementColor, IModVarNonNull_mod_PulloutType, IModVarNonNull_mod_OpeningType, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_HardwareColor {
  parent: IModParents_mc_Pullout01;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mc_PulloutHardware01 extends IModBaseProp
  , IModVar_mod_PulloutConnectionPosition, IModVar_mod_PulloutDesign, IModVar_mod_PulloutElementColor, IModVar_mod_PulloutType, IModVar_mod_OpeningType, IModVar_mod_FrontId, IModVar_mod_HardwareColor {
  m: OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  seal(): IModuleNonNull_mc_PulloutHardware01;
  parent: IModParents_mc_Pullout01;
}

export interface adc_base_mc_PulloutHardware01 extends IModBaseProp
  , IModVarNonNull_mod_PulloutConnectionPosition, IModVarNonNull_mod_PulloutDesign, IModVarNonNull_mod_PulloutElementColor, IModVarNonNull_mod_PulloutType, IModVarNonNull_mod_OpeningType, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_HardwareColor {
  get m(): OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
}

export interface adc_mc_PulloutHardware01 extends adc_base_mc_PulloutHardware01 {
}

export interface ccm_mc_PulloutHardware01 extends adc_base_mc_PulloutHardware01 {
}


export class OD_M_mc_PulloutHardware01 extends OD_Base implements dc_mc_PulloutHardware01
  , IModParents_mc_PulloutHardware01
  , IModVar_mod_PulloutConnectionPosition, IModVar_mod_PulloutDesign, IModVar_mod_PulloutElementColor, IModVar_mod_PulloutType, IModVar_mod_OpeningType, IModVar_mod_FrontId, IModVar_mod_HardwareColor {
  constructor(parent: IModParents_mc_Pullout01, manufacturerMode?: boolean) {
    super('mc_PulloutHardware01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_PulloutHardware01_NonNull(this);
  }
  parent: IModParents_mc_Pullout01;
  _selfNonNull: OD_M_mc_PulloutHardware01_NonNull;

  override variants: string[] = ['mod_PulloutConnectionPosition', 'mod_PulloutDesign', 'mod_PulloutElementColor', 'mod_PulloutType', 'mod_OpeningType', 'mod_FrontId', 'mod_HardwareColor',];
  #mod_PulloutConnectionPosition?: string;
  get mod_PulloutConnectionPosition(): string | undefined { return this.#mod_PulloutConnectionPosition }
  set mod_PulloutConnectionPosition(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PulloutConnectionPosition' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PulloutConnectionPosition === value) return;
    this.#mod_PulloutConnectionPosition = value;
  }

  mod_PulloutConnectionPosition_matrix?: IMatrix_mod_PulloutConnectionPosition;
  #mod_PulloutDesign?: string;
  get mod_PulloutDesign(): string | undefined { return this.#mod_PulloutDesign }
  set mod_PulloutDesign(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PulloutDesign' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PulloutDesign === value) return;
    this.#mod_PulloutDesign = value;
  }

  mod_PulloutDesign_matrix?: IMatrix_mod_PulloutDesign;
  #mod_PulloutElementColor?: string;
  get mod_PulloutElementColor(): string | undefined { return this.#mod_PulloutElementColor }
  set mod_PulloutElementColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PulloutElementColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PulloutElementColor === value) return;
    this.#mod_PulloutElementColor = value;
  }

  mod_PulloutElementColor_matrix?: IMatrix_mod_PulloutElementColor;
  #mod_PulloutType?: string;
  get mod_PulloutType(): string | undefined { return this.#mod_PulloutType }
  set mod_PulloutType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PulloutType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PulloutType === value) return;
    this.#mod_PulloutType = value;
  }

  mod_PulloutType_matrix?: IMatrix_mod_PulloutType;
  #mod_OpeningType?: string;
  get mod_OpeningType(): string | undefined { return this.#mod_OpeningType }
  set mod_OpeningType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_OpeningType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_OpeningType === value) return;
    this.#mod_OpeningType = value;
  }

  mod_OpeningType_matrix?: IMatrix_mod_OpeningType;
  #mod_FrontId?: string;
  get mod_FrontId(): string | undefined { return this.#mod_FrontId }
  set mod_FrontId(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontId' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontId === value) return;
    this.#mod_FrontId = value;
  }

  mod_FrontId_matrix?: IMatrix_mod_FrontId;
  #mod_HardwareColor?: string;
  get mod_HardwareColor(): string | undefined { return this.#mod_HardwareColor }
  set mod_HardwareColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HardwareColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HardwareColor === value) return;
    this.#mod_HardwareColor = value;
  }

  mod_HardwareColor_matrix?: IMatrix_mod_HardwareColor;
  override getAttributes(): Map<string, any> {
    let res = new Map<string, any>();
    res.set('mod_PulloutConnectionPosition', this.mod_PulloutConnectionPosition);
    res.set('mod_PulloutDesign', this.mod_PulloutDesign);
    res.set('mod_PulloutElementColor', this.mod_PulloutElementColor);
    res.set('mod_PulloutType', this.mod_PulloutType);
    res.set('mod_OpeningType', this.mod_OpeningType);
    res.set('mod_FrontId', this.mod_FrontId);
    res.set('mod_HardwareColor', this.mod_HardwareColor);
    return res;
  }
  override loadJson(json: any, withSubModules: boolean = true, manufacturerMode: boolean) {
    internal_enterLoadJson(this.modId, this._id);
    if (json['articleId']) {
      this._articleId = json['articleId'];
    }
    this._contextData = json['contextData'];
    // only take over the attributes we know...
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PulloutConnectionPosition');
      const val = _toString(json['attributes']['mod_PulloutConnectionPosition'], 'mod_PulloutConnectionPosition');
      internal_leaveValidateVariant();
      this.mod_PulloutConnectionPosition = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PulloutDesign');
      const val = _toString(json['attributes']['mod_PulloutDesign'], 'mod_PulloutDesign');
      internal_leaveValidateVariant();
      this.mod_PulloutDesign = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PulloutElementColor');
      const val = _toString(json['attributes']['mod_PulloutElementColor'], 'mod_PulloutElementColor');
      internal_leaveValidateVariant();
      this.mod_PulloutElementColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PulloutType');
      const val = _toString(json['attributes']['mod_PulloutType'], 'mod_PulloutType');
      internal_leaveValidateVariant();
      this.mod_PulloutType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_OpeningType');
      const val = _toString(json['attributes']['mod_OpeningType'], 'mod_OpeningType');
      internal_leaveValidateVariant();
      this.mod_OpeningType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontId');
      const val = _toString(json['attributes']['mod_FrontId'], 'mod_FrontId');
      internal_leaveValidateVariant();
      this.mod_FrontId = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HardwareColor');
      const val = _toString(json['attributes']['mod_HardwareColor'], 'mod_HardwareColor');
      internal_leaveValidateVariant();
      this.mod_HardwareColor = val;
    }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod: any) => { this.m.push(loadOrderData(subMod, this, manufacturerMode)) });
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    if (this.mod_PulloutConnectionPosition === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PulloutConnectionPosition')) {
          let pv = <IModVar_mod_PulloutConnectionPosition>s;
          if (pv.mod_PulloutConnectionPosition !== undefined) {
            this.mod_PulloutConnectionPosition = (<IModVar_mod_PulloutConnectionPosition>s).mod_PulloutConnectionPosition;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PulloutDesign === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PulloutDesign')) {
          let pv = <IModVar_mod_PulloutDesign>s;
          if (pv.mod_PulloutDesign !== undefined) {
            this.mod_PulloutDesign = (<IModVar_mod_PulloutDesign>s).mod_PulloutDesign;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PulloutElementColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PulloutElementColor')) {
          let pv = <IModVar_mod_PulloutElementColor>s;
          if (pv.mod_PulloutElementColor !== undefined) {
            this.mod_PulloutElementColor = (<IModVar_mod_PulloutElementColor>s).mod_PulloutElementColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PulloutType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PulloutType')) {
          let pv = <IModVar_mod_PulloutType>s;
          if (pv.mod_PulloutType !== undefined) {
            this.mod_PulloutType = (<IModVar_mod_PulloutType>s).mod_PulloutType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_OpeningType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_OpeningType')) {
          let pv = <IModVar_mod_OpeningType>s;
          if (pv.mod_OpeningType !== undefined) {
            this.mod_OpeningType = (<IModVar_mod_OpeningType>s).mod_OpeningType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontId === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontId')) {
          let pv = <IModVar_mod_FrontId>s;
          if (pv.mod_FrontId !== undefined) {
            this.mod_FrontId = (<IModVar_mod_FrontId>s).mod_FrontId;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HardwareColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HardwareColor')) {
          let pv = <IModVar_mod_HardwareColor>s;
          if (pv.mod_HardwareColor !== undefined) {
            this.mod_HardwareColor = (<IModVar_mod_HardwareColor>s).mod_HardwareColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    internal_leaveDataCompletionAssignDerivedData();
  }

  #dataCompletionSetDefaults() {
    this.#dataCompletionSetDefaultValues();
    this.#dataCompletionSetDefaultScripts();
  }
  #dataCompletionSetDefaultValues() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    if (this.mod_FrontId === undefined) {
      this.mod_FrontId = "";
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    this.#dataCompletionSetDefaultScripts_globalVars();
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
    }
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
    finally {
      internal_leaveDataCompletionSetDefault();
    }
  }
  #dataCompletionSetDefaultScripts_globalVars() {
    internal_enterDataCompletionSetDefaultScripts_globalVars(this.modId, this._id);
    internal_leaveDataCompletionSetDefaultScripts_globalVars();
  }

  override dataCompletion(): void {
    this.#dataCompletionAssignDerivedData();
    this.#dataCompletionSetDefaults();
    this.m.forEach(subMod => subMod.dataCompletion());
  }

  override manufacturerDataCompletion(): void {
    this.#manufacturerDataCompletionInternal();
    this.m.forEach(subMod => subMod.manufacturerDataCompletion());
  }
  #manufacturerDataCompletionInternal = mc_PulloutHardware01_manufacturerDataCompletion;
  override afterDataCompletion(): void {
    if (this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_PulloutHardware01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_PulloutHardware01 {
    this.afterDataCompletion();
    const adc = new OD_M_mc_PulloutHardware01_NonNull(this);
    return adc;
  }

  override validateSelections(): void {
    this.mod_PulloutConnectionPosition_matrix = VariantValidation.mod_PulloutConnectionPosition(this, this.mod_PulloutConnectionPosition);
    this.mod_PulloutDesign_matrix = VariantValidation.mod_PulloutDesign(this, this.mod_PulloutDesign);
    this.mod_PulloutElementColor_matrix = VariantValidation.mod_PulloutElementColor(this, this.mod_PulloutElementColor);
    this.mod_PulloutType_matrix = VariantValidation.mod_PulloutType(this, this.mod_PulloutType);
    this.mod_OpeningType_matrix = VariantValidation.mod_OpeningType(this, this.mod_OpeningType);
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this.mod_FrontId);
    this.mod_HardwareColor_matrix = VariantValidation.mod_HardwareColor(this, this.mod_HardwareColor);
  }

  override calculateContainerModules(): void {
    let ccm = new OD_M_mc_PulloutHardware01_NonNull(this);
    ccm.calculateContainerModules();
    this.m.forEach(subMod => subMod.calculateContainerModules());
  }

  addpart_PulloutHardware(x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): IP_part_PulloutHardware_PartVarsWritable {
    var c = new P_part_PulloutHardware(this._selfNonNull, x, y, z, dimx, dimy, dimz, undefined);
    this.p.push(c);
    return c;
  }
  addpart_PulloutHardwareDrillings(x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): IP_part_PulloutHardwareDrillings_PartVarsWritable {
    var c = new P_part_PulloutHardwareDrillings(this._selfNonNull, x, y, z, dimx, dimy, dimz, undefined);
    this.p.push(c);
    return c;
  }

  override createBuildPlan(): void {
    var cbp = new OD_M_mc_PulloutHardware01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_PulloutHardware01_NonNull implements cbp_mc_PulloutHardware01, adc_mc_PulloutHardware01, ccm_mc_PulloutHardware01, IPartParentsNonNull_mc_PulloutHardware01 {
  constructor(parent: OD_M_mc_PulloutHardware01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_PulloutHardware01;

  get _id(): string { return this.#internalParent._id; }
  get modId(): string { return this.#internalParent.modId; }
  getOrigin(): Matrix4 {
    return this.#internalParent.getOrigin();
  }
  getOriginPos(): Vector3 {
    return this.#internalParent.getOriginPos();
  }
  getArticlePos(): ArticlePos {
    return this.#internalParent.getArticlePos();
  }
  createBuildPlan(): void {
    this.#createBuildPlanInternal();
  }
  #createBuildPlanInternal = mc_PulloutHardware01_createBuildPlan;
  afterDataCompletion(): void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_PulloutHardware01_afterDataCompletion;
  calculateContainerModules(): void {
    this.#calculateContainerModulesInternal();
  }
  #calculateContainerModulesInternal = mc_PulloutHardware01_calculateContainerModules;
  createPartGroup(groupName: string, part: PartBase): PartGroup {
    return this.#internalParent.createPartGroup(groupName, part);
  }
  assignPartGroup(groupName: string, part: PartBase): void {
    this.#internalParent.assignPartGroup(groupName, part);
  }
  createOpenGroup(groupName: string, part: PartBase): OpenGroup {
    return this.#internalParent.createOpenGroup(groupName, part);
  }
  assignOpenGroup(groupName: string, part: PartBase): void {
    this.#internalParent.assignOpenGroup(groupName, part);
  }
  setOrigin(x: number | Matrix4, y?: number, z?: number): void {
    this.#internalParent.setOrigin(x, y, z);
  }
  getFullOrigin(): Vector3 {
    return this.#internalParent.getFullOrigin();
  }
  get m(): OD_Base[] { return this.#internalParent.m; }
  get g(): IGlobalVars { return this.#internalParent.g; }
  parent: IModParents_mc_Pullout01;
  addpart_PulloutHardware(x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): IP_part_PulloutHardware_PartVarsWritable {
    return this.#internalParent.addpart_PulloutHardware(x, y, z, dimx, dimy, dimz);
  }
  addpart_PulloutHardwareDrillings(x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): IP_part_PulloutHardwareDrillings_PartVarsWritable {
    return this.#internalParent.addpart_PulloutHardwareDrillings(x, y, z, dimx, dimy, dimz);
  }
  get mod_PulloutConnectionPosition(): string {
    return this.#internalParent.mod_PulloutConnectionPosition!;
  }
  get mod_PulloutDesign(): string {
    return this.#internalParent.mod_PulloutDesign!;
  }
  get mod_PulloutElementColor(): string {
    return this.#internalParent.mod_PulloutElementColor!;
  }
  get mod_PulloutType(): string {
    return this.#internalParent.mod_PulloutType!;
  }
  get mod_PulloutType_matrix(): IMatrix_mod_PulloutType {
    return this.#internalParent.mod_PulloutType_matrix!;
  }
  get mod_OpeningType(): string {
    return this.#internalParent.mod_OpeningType!;
  }
  get mod_FrontId(): string {
    return this.#internalParent.mod_FrontId!;
  }
  get mod_HardwareColor(): string {
    return this.#internalParent.mod_HardwareColor!;
  }
}

