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
import { IModParents_mr_CoatBoard_mr_MirrorBoard } from '../mod-interfaces'
import { OD_M_mc_BoardShelf, dc_mc_BoardShelf } from './mc_BoardShelf'
import { OD_M_me_BoardHanger, dc_me_BoardHanger } from './me_BoardHanger'
import { IModuleNonNull_mf_BoardShelf, IModParents_mf_BoardShelf, IPartParentsNonNull_mf_BoardShelf } from '../mod-interfaces'
import { IModVar_mod_FrontId, IModVarNonNull_mod_FrontId, IModVar_mod_BoardShelfColor, IModVarNonNull_mod_BoardShelfColor, IModVar_mod_BoardShelfProgram, IModVarNonNull_mod_BoardShelfProgram, IModVar_mod_BoardShelfWidth, IModVarNonNull_mod_BoardShelfWidth, IModVar_mod_BoardShelfDepth, IModVarNonNull_mod_BoardShelfDepth, IModVar_mod_BoardShelfThickness, IModVarNonNull_mod_BoardShelfThickness, IModVar_mod_BoardShelfPositionWidth, IModVarNonNull_mod_BoardShelfPositionWidth, IModVar_mod_BoardShelfPositionHeight, IModVarNonNull_mod_BoardShelfPositionHeight } from '../var-interfaces'
import { VariantValidation, IMatrix_mod_FrontId, IMatrix_mod_BoardShelfColor, IMatrix_mod_BoardShelfProgram, IMatrix_mod_BoardShelfWidth, IMatrix_mod_BoardShelfDepth, IMatrix_mod_BoardShelfThickness, IMatrix_mod_BoardShelfPositionWidth, IMatrix_mod_BoardShelfPositionHeight } from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { mf_BoardShelf_createBuildPlan, mf_BoardShelf_afterDataCompletion, mf_BoardShelf_manufacturerDataCompletion, mf_BoardShelf_calculateContainerModules } from '../../modules/mf_BoardShelf';

export interface cbp_mf_BoardShelf extends IModBaseProp
  , IModVarNonNull_mod_FrontId, IModVarNonNull_mod_BoardShelfColor, IModVarNonNull_mod_BoardShelfProgram, IModVarNonNull_mod_BoardShelfWidth, IModVarNonNull_mod_BoardShelfDepth, IModVarNonNull_mod_BoardShelfThickness, IModVarNonNull_mod_BoardShelfPositionWidth, IModVarNonNull_mod_BoardShelfPositionHeight {
  parent: IModParents_mr_CoatBoard_mr_MirrorBoard;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mf_BoardShelf extends IModBaseProp
  , IModVar_mod_FrontId, IModVar_mod_BoardShelfColor, IModVar_mod_BoardShelfProgram, IModVar_mod_BoardShelfWidth, IModVar_mod_BoardShelfDepth, IModVar_mod_BoardShelfThickness, IModVar_mod_BoardShelfPositionWidth, IModVar_mod_BoardShelfPositionHeight {
  m: OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  seal(): IModuleNonNull_mf_BoardShelf;
  parent: IModParents_mr_CoatBoard_mr_MirrorBoard;
  addOD_M_mc_BoardShelf(index?: number): dc_mc_BoardShelf;
  addOD_M_me_BoardHanger(index?: number): dc_me_BoardHanger;
}

export interface adc_base_mf_BoardShelf extends IModBaseProp
  , IModVarNonNull_mod_FrontId, IModVarNonNull_mod_BoardShelfColor, IModVarNonNull_mod_BoardShelfProgram, IModVarNonNull_mod_BoardShelfWidth, IModVarNonNull_mod_BoardShelfDepth, IModVarNonNull_mod_BoardShelfThickness, IModVarNonNull_mod_BoardShelfPositionWidth, IModVarNonNull_mod_BoardShelfPositionHeight {
  get m(): OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
}

export interface adc_mf_BoardShelf extends adc_base_mf_BoardShelf {
  addOD_M_mc_BoardShelf(index?: number): dc_mc_BoardShelf;
  addOD_M_me_BoardHanger(index?: number): dc_me_BoardHanger;
}

export interface ccm_mf_BoardShelf extends adc_base_mf_BoardShelf {
}


export class OD_M_mf_BoardShelf extends OD_Base implements dc_mf_BoardShelf
  , IModParents_mf_BoardShelf
  , IModVar_mod_FrontId, IModVar_mod_BoardShelfColor, IModVar_mod_BoardShelfProgram, IModVar_mod_BoardShelfWidth, IModVar_mod_BoardShelfDepth, IModVar_mod_BoardShelfThickness, IModVar_mod_BoardShelfPositionWidth, IModVar_mod_BoardShelfPositionHeight {
  constructor(parent: IModParents_mr_CoatBoard_mr_MirrorBoard, manufacturerMode?: boolean) {
    super('mf_BoardShelf', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mf_BoardShelf_NonNull(this);
  }
  parent: IModParents_mr_CoatBoard_mr_MirrorBoard;
  _selfNonNull: OD_M_mf_BoardShelf_NonNull;

  override variants: string[] = ['mod_FrontId', 'mod_BoardShelfColor', 'mod_BoardShelfProgram', 'mod_BoardShelfWidth', 'mod_BoardShelfDepth', 'mod_BoardShelfThickness', 'mod_BoardShelfPositionWidth', 'mod_BoardShelfPositionHeight',];
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
  #mod_BoardShelfColor?: string;
  get mod_BoardShelfColor(): string | undefined { return this.#mod_BoardShelfColor }
  set mod_BoardShelfColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BoardShelfColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BoardShelfColor === value) return;
    this.#mod_BoardShelfColor = value;
  }

  mod_BoardShelfColor_matrix?: IMatrix_mod_BoardShelfColor;
  #mod_BoardShelfProgram?: string;
  get mod_BoardShelfProgram(): string | undefined { return this.#mod_BoardShelfProgram }
  set mod_BoardShelfProgram(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BoardShelfProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BoardShelfProgram === value) return;
    this.#mod_BoardShelfProgram = value;
  }

  mod_BoardShelfProgram_matrix?: IMatrix_mod_BoardShelfProgram;
  #mod_BoardShelfWidth?: number;
  get mod_BoardShelfWidth(): number | undefined { return this.#mod_BoardShelfWidth }
  set mod_BoardShelfWidth(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BoardShelfWidth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BoardShelfWidth === value) return;
    this.#mod_BoardShelfWidth = value;
  }

  mod_BoardShelfWidth_matrix?: IMatrix_mod_BoardShelfWidth;
  #mod_BoardShelfDepth?: number;
  get mod_BoardShelfDepth(): number | undefined { return this.#mod_BoardShelfDepth }
  set mod_BoardShelfDepth(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BoardShelfDepth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BoardShelfDepth === value) return;
    this.#mod_BoardShelfDepth = value;
  }

  mod_BoardShelfDepth_matrix?: IMatrix_mod_BoardShelfDepth;
  #mod_BoardShelfThickness?: number;
  get mod_BoardShelfThickness(): number | undefined { return this.#mod_BoardShelfThickness }
  set mod_BoardShelfThickness(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BoardShelfThickness' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BoardShelfThickness === value) return;
    this.#mod_BoardShelfThickness = value;
  }

  mod_BoardShelfThickness_matrix?: IMatrix_mod_BoardShelfThickness;
  #mod_BoardShelfPositionWidth?: number;
  get mod_BoardShelfPositionWidth(): number | undefined { return this.#mod_BoardShelfPositionWidth }
  set mod_BoardShelfPositionWidth(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BoardShelfPositionWidth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BoardShelfPositionWidth === value) return;
    this.#mod_BoardShelfPositionWidth = value;
  }

  mod_BoardShelfPositionWidth_matrix?: IMatrix_mod_BoardShelfPositionWidth;
  #mod_BoardShelfPositionHeight?: number;
  get mod_BoardShelfPositionHeight(): number | undefined { return this.#mod_BoardShelfPositionHeight }
  set mod_BoardShelfPositionHeight(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BoardShelfPositionHeight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BoardShelfPositionHeight === value) return;
    this.#mod_BoardShelfPositionHeight = value;
  }

  mod_BoardShelfPositionHeight_matrix?: IMatrix_mod_BoardShelfPositionHeight;
  override getAttributes(): Map<string, any> {
    let res = new Map<string, any>();
    res.set('mod_FrontId', this.mod_FrontId);
    res.set('mod_BoardShelfColor', this.mod_BoardShelfColor);
    res.set('mod_BoardShelfProgram', this.mod_BoardShelfProgram);
    res.set('mod_BoardShelfWidth', this.mod_BoardShelfWidth);
    res.set('mod_BoardShelfDepth', this.mod_BoardShelfDepth);
    res.set('mod_BoardShelfThickness', this.mod_BoardShelfThickness);
    res.set('mod_BoardShelfPositionWidth', this.mod_BoardShelfPositionWidth);
    res.set('mod_BoardShelfPositionHeight', this.mod_BoardShelfPositionHeight);
    return res;
  }
  override getCheckAttributes(): Map<string, number | string | boolean | undefined> | undefined {
    const res = new Map<string, number | string | boolean | undefined>();
    res.set('_moduleId', this.modId);
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
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontId');
      const val = _toString(json['attributes']['mod_FrontId'], 'mod_FrontId');
      internal_leaveValidateVariant();
      this.mod_FrontId = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BoardShelfColor');
      const val = _toString(json['attributes']['mod_BoardShelfColor'], 'mod_BoardShelfColor');
      internal_leaveValidateVariant();
      this.mod_BoardShelfColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BoardShelfProgram');
      const val = _toString(json['attributes']['mod_BoardShelfProgram'], 'mod_BoardShelfProgram');
      internal_leaveValidateVariant();
      this.mod_BoardShelfProgram = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BoardShelfWidth');
      const val = _toFloat(json['attributes']['mod_BoardShelfWidth'], 'mod_BoardShelfWidth');
      internal_leaveValidateVariant();
      this.mod_BoardShelfWidth = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BoardShelfDepth');
      const val = _toFloat(json['attributes']['mod_BoardShelfDepth'], 'mod_BoardShelfDepth');
      internal_leaveValidateVariant();
      this.mod_BoardShelfDepth = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BoardShelfThickness');
      const val = _toFloat(json['attributes']['mod_BoardShelfThickness'], 'mod_BoardShelfThickness');
      internal_leaveValidateVariant();
      this.mod_BoardShelfThickness = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BoardShelfPositionWidth');
      const val = _toFloat(json['attributes']['mod_BoardShelfPositionWidth'], 'mod_BoardShelfPositionWidth');
      internal_leaveValidateVariant();
      this.mod_BoardShelfPositionWidth = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BoardShelfPositionHeight');
      const val = _toFloat(json['attributes']['mod_BoardShelfPositionHeight'], 'mod_BoardShelfPositionHeight');
      internal_leaveValidateVariant();
      this.mod_BoardShelfPositionHeight = val;
    }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod: any) => { this.m.push(loadOrderData(subMod, this, manufacturerMode)) });
    }
    internal_leaveLoadJson();
  }
  override checkPosRelevantRequiredAttributes(): void {
    if (this.#mod_FrontId !== undefined) {
      this.#mod_FrontId = undefined;
      logWarning('The attribute "mod_FrontId" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_BoardShelfWidth === undefined) {
      logWarning('The required attribute "mod_BoardShelfWidth" was not set in the order data');
    }
    if (this.#mod_BoardShelfDepth === undefined) {
      logWarning('The required attribute "mod_BoardShelfDepth" was not set in the order data');
    }
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    if (this.mod_BoardShelfColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_BoardShelfColor')) {
          let pv = <IModVar_mod_BoardShelfColor>s;
          if (pv.mod_BoardShelfColor !== undefined) {
            this.mod_BoardShelfColor = (<IModVar_mod_BoardShelfColor>s).mod_BoardShelfColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_BoardShelfProgram === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_BoardShelfProgram')) {
          let pv = <IModVar_mod_BoardShelfProgram>s;
          if (pv.mod_BoardShelfProgram !== undefined) {
            this.mod_BoardShelfProgram = (<IModVar_mod_BoardShelfProgram>s).mod_BoardShelfProgram;
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
      this.mod_FrontId = "Boardshelf01";
    }
    if (this.mod_BoardShelfThickness === undefined) {
      this.mod_BoardShelfThickness = 19;
    }
    if (this.mod_BoardShelfPositionWidth === undefined) {
      this.mod_BoardShelfPositionWidth = 0;
    }
    if (this.mod_BoardShelfPositionHeight === undefined) {
      this.mod_BoardShelfPositionHeight = 0;
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
  #manufacturerDataCompletionInternal = mf_BoardShelf_manufacturerDataCompletion;
  override afterDataCompletion(): void {
    if (this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mf_BoardShelf_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mf_BoardShelf {
    this.afterDataCompletion();
    const adc = new OD_M_mf_BoardShelf_NonNull(this);
    return adc;
  }

  addOD_M_mc_BoardShelf(index?: number): dc_mc_BoardShelf {
    var m = new OD_M_mc_BoardShelf(this);
    m.dataCompletion();
    if (this._manufacturerMode) {
      m.manufacturerDataCompletion();
    }
    if (index !== undefined) {
      this.m.splice(index, 0, m);
    } else {
      this.m.push(m);
    }
    return m;
  }
  addOD_M_me_BoardHanger(index?: number): dc_me_BoardHanger {
    var m = new OD_M_me_BoardHanger(this);
    m.dataCompletion();
    if (this._manufacturerMode) {
      m.manufacturerDataCompletion();
    }
    if (index !== undefined) {
      this.m.splice(index, 0, m);
    } else {
      this.m.push(m);
    }
    return m;
  }
  override validateSelections(): void {
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this.mod_FrontId);
    this.mod_BoardShelfColor_matrix = VariantValidation.mod_BoardShelfColor(this, this.mod_BoardShelfColor);
    this.mod_BoardShelfProgram_matrix = VariantValidation.mod_BoardShelfProgram(this, this.mod_BoardShelfProgram);
    this.mod_BoardShelfWidth_matrix = VariantValidation.mod_BoardShelfWidth(this, this.mod_BoardShelfWidth);
    this.mod_BoardShelfDepth_matrix = VariantValidation.mod_BoardShelfDepth(this, this.mod_BoardShelfDepth);
    this.mod_BoardShelfThickness_matrix = VariantValidation.mod_BoardShelfThickness(this, this.mod_BoardShelfThickness);
    this.mod_BoardShelfPositionWidth_matrix = VariantValidation.mod_BoardShelfPositionWidth(this, this.mod_BoardShelfPositionWidth);
    this.mod_BoardShelfPositionHeight_matrix = VariantValidation.mod_BoardShelfPositionHeight(this, this.mod_BoardShelfPositionHeight);
  }

  override calculateContainerModules(): void {
    let ccm = new OD_M_mf_BoardShelf_NonNull(this);
    ccm.calculateContainerModules();
    this.m.forEach(subMod => subMod.calculateContainerModules());
  }


  override createBuildPlan(): void {
    var cbp = new OD_M_mf_BoardShelf_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mf_BoardShelf_NonNull implements cbp_mf_BoardShelf, adc_mf_BoardShelf, ccm_mf_BoardShelf, IPartParentsNonNull_mf_BoardShelf {
  constructor(parent: OD_M_mf_BoardShelf) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mf_BoardShelf;

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
  #createBuildPlanInternal = mf_BoardShelf_createBuildPlan;
  afterDataCompletion(): void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mf_BoardShelf_afterDataCompletion;
  calculateContainerModules(): void {
    this.#calculateContainerModulesInternal();
  }
  #calculateContainerModulesInternal = mf_BoardShelf_calculateContainerModules;
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
  parent: IModParents_mr_CoatBoard_mr_MirrorBoard;
  get mod_FrontId(): string {
    return this.#internalParent.mod_FrontId!;
  }
  get mod_BoardShelfColor(): string {
    return this.#internalParent.mod_BoardShelfColor!;
  }
  get mod_BoardShelfColor_matrix(): IMatrix_mod_BoardShelfColor {
    return this.#internalParent.mod_BoardShelfColor_matrix!;
  }
  get mod_BoardShelfProgram(): string {
    return this.#internalParent.mod_BoardShelfProgram!;
  }
  get mod_BoardShelfProgram_matrix(): IMatrix_mod_BoardShelfProgram {
    return this.#internalParent.mod_BoardShelfProgram_matrix!;
  }
  get mod_BoardShelfWidth(): number {
    return this.#internalParent.mod_BoardShelfWidth!;
  }
  get mod_BoardShelfDepth(): number {
    return this.#internalParent.mod_BoardShelfDepth!;
  }
  get mod_BoardShelfThickness(): number {
    return this.#internalParent.mod_BoardShelfThickness!;
  }
  get mod_BoardShelfPositionWidth(): number {
    return this.#internalParent.mod_BoardShelfPositionWidth!;
  }
  get mod_BoardShelfPositionHeight(): number {
    return this.#internalParent.mod_BoardShelfPositionHeight!;
  }
  addOD_M_mc_BoardShelf(index?: number): dc_mc_BoardShelf {
    return this.#internalParent.addOD_M_mc_BoardShelf(index);
  }
  addOD_M_me_BoardHanger(index?: number): dc_me_BoardHanger {
    return this.#internalParent.addOD_M_me_BoardHanger(index);
  }
}

