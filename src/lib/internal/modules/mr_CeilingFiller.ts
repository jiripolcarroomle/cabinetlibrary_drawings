import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars } from '../logging'
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
import { IPartBase, PartBase, _toFloat, _toInt, _toString, _toBoolean, IModBaseProp } from '../mod-base'
import { loadOrderData } from '../loader'
import { GlobalFunc } from '../global-func'
import { OD_M_mc_CeilingFiller01, dc_mc_CeilingFiller01 } from './mc_CeilingFiller01'
import { IModuleNonNull_mr_CeilingFiller, IModParents_mr_CeilingFiller, IPartParentsNonNull_mr_CeilingFiller } from '../mod-interfaces'
import { IModVar_mod_CeilingFillerFittingPanelThk, IModVarNonNull_mod_CeilingFillerFittingPanelThk, IModVar_mod_CeilingFillerHeight, IModVarNonNull_mod_CeilingFillerHeight, IModVar_mod_CeilingFillerRecess, IModVarNonNull_mod_CeilingFillerRecess, IModVar_mod_CeilingFillerRecessLeft, IModVarNonNull_mod_CeilingFillerRecessLeft, IModVar_mod_CeilingFillerRecessRight, IModVarNonNull_mod_CeilingFillerRecessRight, IModVar_mod_CeilingFillerThk, IModVarNonNull_mod_CeilingFillerThk, IModVar_mod_CeilingFillerTransitionType, IModVarNonNull_mod_CeilingFillerTransitionType, IModVar_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapCarcase, IModVar_mod_ModuleName, IModVarNonNull_mod_ModuleName, IModVar_mod_CeilingFillerConstruction, IModVarNonNull_mod_CeilingFillerConstruction, IModVar_mod_CeilingFillerColor, IModVarNonNull_mod_CeilingFillerColor, IModVar_mod_CeilingFillerEdgeBackColor, IModVarNonNull_mod_CeilingFillerEdgeBackColor, IModVar_mod_CeilingFillerEdgeFrontColor, IModVarNonNull_mod_CeilingFillerEdgeFrontColor, IModVar_mod_CeilingFillerEdgeLeftColor, IModVarNonNull_mod_CeilingFillerEdgeLeftColor, IModVar_mod_CeilingFillerEdgeRightColor, IModVarNonNull_mod_CeilingFillerEdgeRightColor, IModVar_mod_CeilingFillerProgram, IModVarNonNull_mod_CeilingFillerProgram, IModVar_mod_LengthList, IModVarNonNull_mod_LengthList, IModVar_mod_FrontGapHor, IModVarNonNull_mod_FrontGapHor, IModVar_mod_CeilingFillerFittingPanelDepth, IModVarNonNull_mod_CeilingFillerFittingPanelDepth } from '../var-interfaces'
import { VariantValidation, IMatrix_mod_CeilingFillerFittingPanelThk, IMatrix_mod_CeilingFillerHeight, IMatrix_mod_CeilingFillerRecess, IMatrix_mod_CeilingFillerRecessLeft, IMatrix_mod_CeilingFillerRecessRight, IMatrix_mod_CeilingFillerThk, IMatrix_mod_CeilingFillerTransitionType, IMatrix_mod_FrontGapCarcase, IMatrix_mod_ModuleName, IMatrix_mod_CeilingFillerConstruction, IMatrix_mod_CeilingFillerColor, IMatrix_mod_CeilingFillerEdgeBackColor, IMatrix_mod_CeilingFillerEdgeFrontColor, IMatrix_mod_CeilingFillerEdgeLeftColor, IMatrix_mod_CeilingFillerEdgeRightColor, IMatrix_mod_CeilingFillerProgram, IMatrix_mod_FrontGapHor, IMatrix_mod_CeilingFillerFittingPanelDepth } from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { mr_CeilingFiller_createBuildPlan, mr_CeilingFiller_afterDataCompletion, mr_CeilingFiller_manufacturerDataCompletion, mr_CeilingFiller_calculateContainerModules } from '../../modules/mr_CeilingFiller';

export interface cbp_mr_CeilingFiller extends IModBaseProp
  , IModVarNonNull_mod_CeilingFillerFittingPanelThk, IModVarNonNull_mod_CeilingFillerHeight, IModVarNonNull_mod_CeilingFillerRecess, IModVarNonNull_mod_CeilingFillerRecessLeft, IModVarNonNull_mod_CeilingFillerRecessRight, IModVarNonNull_mod_CeilingFillerThk, IModVarNonNull_mod_CeilingFillerTransitionType, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CeilingFillerConstruction, IModVarNonNull_mod_CeilingFillerColor, IModVarNonNull_mod_CeilingFillerEdgeBackColor, IModVarNonNull_mod_CeilingFillerEdgeFrontColor, IModVarNonNull_mod_CeilingFillerEdgeLeftColor, IModVarNonNull_mod_CeilingFillerEdgeRightColor, IModVarNonNull_mod_CeilingFillerProgram, IModVarNonNull_mod_LengthList, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_CeilingFillerFittingPanelDepth {
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  getFullOrigin(): Vector3;
  getGenerationContours(): GenerationContour[];
  getRoomContours(): RoomContour[];
  get m(): OD_Base[];
}

export interface dc_mr_CeilingFiller extends IModBaseProp
  , IModVar_mod_CeilingFillerFittingPanelThk, IModVar_mod_CeilingFillerHeight, IModVar_mod_CeilingFillerRecess, IModVar_mod_CeilingFillerRecessLeft, IModVar_mod_CeilingFillerRecessRight, IModVar_mod_CeilingFillerThk, IModVar_mod_CeilingFillerTransitionType, IModVar_mod_FrontGapCarcase, IModVar_mod_ModuleName, IModVar_mod_CeilingFillerConstruction, IModVar_mod_CeilingFillerColor, IModVar_mod_CeilingFillerEdgeBackColor, IModVar_mod_CeilingFillerEdgeFrontColor, IModVar_mod_CeilingFillerEdgeLeftColor, IModVar_mod_CeilingFillerEdgeRightColor, IModVar_mod_CeilingFillerProgram, IModVar_mod_LengthList, IModVar_mod_FrontGapHor, IModVar_mod_CeilingFillerFittingPanelDepth {
  m: OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  seal(): IModuleNonNull_mr_CeilingFiller;
  getGenerationContours(): GenerationContour[];
  addOD_M_mc_CeilingFiller01(index?: number): dc_mc_CeilingFiller01;
}

export interface adc_base_mr_CeilingFiller extends IModBaseProp
  , IModVarNonNull_mod_CeilingFillerFittingPanelThk, IModVarNonNull_mod_CeilingFillerHeight, IModVarNonNull_mod_CeilingFillerRecess, IModVarNonNull_mod_CeilingFillerRecessLeft, IModVarNonNull_mod_CeilingFillerRecessRight, IModVarNonNull_mod_CeilingFillerThk, IModVarNonNull_mod_CeilingFillerTransitionType, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CeilingFillerConstruction, IModVarNonNull_mod_CeilingFillerColor, IModVarNonNull_mod_CeilingFillerEdgeBackColor, IModVarNonNull_mod_CeilingFillerEdgeFrontColor, IModVarNonNull_mod_CeilingFillerEdgeLeftColor, IModVarNonNull_mod_CeilingFillerEdgeRightColor, IModVarNonNull_mod_CeilingFillerProgram, IModVarNonNull_mod_LengthList, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_CeilingFillerFittingPanelDepth {
  get m(): OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  getGenerationContours(): GenerationContour[];
  getRoomContours(): RoomContour[];
  get _posData(): Map<string, string | number>;
}

export interface adc_mr_CeilingFiller extends adc_base_mr_CeilingFiller {
  addOD_M_mc_CeilingFiller01(index?: number): dc_mc_CeilingFiller01;
}

export interface ccm_mr_CeilingFiller extends adc_base_mr_CeilingFiller {
}


export class OD_M_mr_CeilingFiller extends OD_Base implements dc_mr_CeilingFiller
  , IModParents_mr_CeilingFiller
  , IModVar_mod_CeilingFillerFittingPanelThk, IModVar_mod_CeilingFillerHeight, IModVar_mod_CeilingFillerRecess, IModVar_mod_CeilingFillerRecessLeft, IModVar_mod_CeilingFillerRecessRight, IModVar_mod_CeilingFillerThk, IModVar_mod_CeilingFillerTransitionType, IModVar_mod_FrontGapCarcase, IModVar_mod_ModuleName, IModVar_mod_CeilingFillerConstruction, IModVar_mod_CeilingFillerColor, IModVar_mod_CeilingFillerEdgeBackColor, IModVar_mod_CeilingFillerEdgeFrontColor, IModVar_mod_CeilingFillerEdgeLeftColor, IModVar_mod_CeilingFillerEdgeRightColor, IModVar_mod_CeilingFillerProgram, IModVar_mod_LengthList, IModVar_mod_FrontGapHor, IModVar_mod_CeilingFillerFittingPanelDepth {
  constructor(parent?: OD_Base, manufacturerMode?: boolean) {
    super('mr_CeilingFiller', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this._g = new GlobalVars();
    this._openGroups = new Map<string, OpenGroup>();
    this._partGroups = new Map<string, PartGroup>();
    this._selfNonNull = new OD_M_mr_CeilingFiller_NonNull(this);
    this._isGenerated = true;
  }
  _selfNonNull: OD_M_mr_CeilingFiller_NonNull;
  getGenerationContours(): GenerationContour[] { return this.generationContours; }

  override variants: string[] = ['mod_CeilingFillerFittingPanelThk', 'mod_CeilingFillerHeight', 'mod_CeilingFillerRecess', 'mod_CeilingFillerRecessLeft', 'mod_CeilingFillerRecessRight', 'mod_CeilingFillerThk', 'mod_CeilingFillerTransitionType', 'mod_FrontGapCarcase', 'mod_ModuleName', 'mod_CeilingFillerConstruction', 'mod_CeilingFillerColor', 'mod_CeilingFillerEdgeBackColor', 'mod_CeilingFillerEdgeFrontColor', 'mod_CeilingFillerEdgeLeftColor', 'mod_CeilingFillerEdgeRightColor', 'mod_CeilingFillerProgram', 'mod_LengthList', 'mod_FrontGapHor', 'mod_CeilingFillerFittingPanelDepth',];
  #mod_CeilingFillerFittingPanelThk?: number;
  get mod_CeilingFillerFittingPanelThk(): number | undefined { return this.#mod_CeilingFillerFittingPanelThk }
  set mod_CeilingFillerFittingPanelThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerFittingPanelThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerFittingPanelThk === value) return;
    this.#mod_CeilingFillerFittingPanelThk = value;
  }

  mod_CeilingFillerFittingPanelThk_matrix?: IMatrix_mod_CeilingFillerFittingPanelThk;
  #mod_CeilingFillerHeight?: number;
  get mod_CeilingFillerHeight(): number | undefined { return this.#mod_CeilingFillerHeight }
  set mod_CeilingFillerHeight(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerHeight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerHeight === value) return;
    this.#mod_CeilingFillerHeight = value;
  }

  mod_CeilingFillerHeight_matrix?: IMatrix_mod_CeilingFillerHeight;
  #mod_CeilingFillerRecess?: number;
  get mod_CeilingFillerRecess(): number | undefined { return this.#mod_CeilingFillerRecess }
  set mod_CeilingFillerRecess(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerRecess' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerRecess === value) return;
    this.#mod_CeilingFillerRecess = value;
  }

  mod_CeilingFillerRecess_matrix?: IMatrix_mod_CeilingFillerRecess;
  #mod_CeilingFillerRecessLeft?: number;
  get mod_CeilingFillerRecessLeft(): number | undefined { return this.#mod_CeilingFillerRecessLeft }
  set mod_CeilingFillerRecessLeft(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerRecessLeft' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerRecessLeft === value) return;
    this.#mod_CeilingFillerRecessLeft = value;
  }

  mod_CeilingFillerRecessLeft_matrix?: IMatrix_mod_CeilingFillerRecessLeft;
  #mod_CeilingFillerRecessRight?: number;
  get mod_CeilingFillerRecessRight(): number | undefined { return this.#mod_CeilingFillerRecessRight }
  set mod_CeilingFillerRecessRight(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerRecessRight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerRecessRight === value) return;
    this.#mod_CeilingFillerRecessRight = value;
  }

  mod_CeilingFillerRecessRight_matrix?: IMatrix_mod_CeilingFillerRecessRight;
  #mod_CeilingFillerThk?: number;
  get mod_CeilingFillerThk(): number | undefined { return this.#mod_CeilingFillerThk }
  set mod_CeilingFillerThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerThk === value) return;
    this.#mod_CeilingFillerThk = value;
  }

  mod_CeilingFillerThk_matrix?: IMatrix_mod_CeilingFillerThk;
  #mod_CeilingFillerTransitionType?: string;
  get mod_CeilingFillerTransitionType(): string | undefined { return this.#mod_CeilingFillerTransitionType }
  set mod_CeilingFillerTransitionType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerTransitionType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerTransitionType === value) return;
    this.#mod_CeilingFillerTransitionType = value;
  }

  mod_CeilingFillerTransitionType_matrix?: IMatrix_mod_CeilingFillerTransitionType;
  #mod_FrontGapCarcase?: number;
  get mod_FrontGapCarcase(): number | undefined { return this.#mod_FrontGapCarcase }
  set mod_FrontGapCarcase(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontGapCarcase' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontGapCarcase === value) return;
    this.#mod_FrontGapCarcase = value;
  }

  mod_FrontGapCarcase_matrix?: IMatrix_mod_FrontGapCarcase;
  #mod_ModuleName?: string;
  get mod_ModuleName(): string | undefined { return this.#mod_ModuleName }
  set mod_ModuleName(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ModuleName' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ModuleName === value) return;
    this.#mod_ModuleName = value;
  }

  mod_ModuleName_matrix?: IMatrix_mod_ModuleName;
  #mod_CeilingFillerConstruction?: string;
  get mod_CeilingFillerConstruction(): string | undefined { return this.#mod_CeilingFillerConstruction }
  set mod_CeilingFillerConstruction(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerConstruction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerConstruction === value) return;
    this.#mod_CeilingFillerConstruction = value;
  }

  mod_CeilingFillerConstruction_matrix?: IMatrix_mod_CeilingFillerConstruction;
  #mod_CeilingFillerColor?: string;
  get mod_CeilingFillerColor(): string | undefined { return this.#mod_CeilingFillerColor }
  set mod_CeilingFillerColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerColor === value) return;
    this.#mod_CeilingFillerColor = value;
  }

  mod_CeilingFillerColor_matrix?: IMatrix_mod_CeilingFillerColor;
  #mod_CeilingFillerEdgeBackColor?: string;
  get mod_CeilingFillerEdgeBackColor(): string | undefined { return this.#mod_CeilingFillerEdgeBackColor }
  set mod_CeilingFillerEdgeBackColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerEdgeBackColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerEdgeBackColor === value) return;
    this.#mod_CeilingFillerEdgeBackColor = value;
  }

  mod_CeilingFillerEdgeBackColor_matrix?: IMatrix_mod_CeilingFillerEdgeBackColor;
  #mod_CeilingFillerEdgeFrontColor?: string;
  get mod_CeilingFillerEdgeFrontColor(): string | undefined { return this.#mod_CeilingFillerEdgeFrontColor }
  set mod_CeilingFillerEdgeFrontColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerEdgeFrontColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerEdgeFrontColor === value) return;
    this.#mod_CeilingFillerEdgeFrontColor = value;
  }

  mod_CeilingFillerEdgeFrontColor_matrix?: IMatrix_mod_CeilingFillerEdgeFrontColor;
  #mod_CeilingFillerEdgeLeftColor?: string;
  get mod_CeilingFillerEdgeLeftColor(): string | undefined { return this.#mod_CeilingFillerEdgeLeftColor }
  set mod_CeilingFillerEdgeLeftColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerEdgeLeftColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerEdgeLeftColor === value) return;
    this.#mod_CeilingFillerEdgeLeftColor = value;
  }

  mod_CeilingFillerEdgeLeftColor_matrix?: IMatrix_mod_CeilingFillerEdgeLeftColor;
  #mod_CeilingFillerEdgeRightColor?: string;
  get mod_CeilingFillerEdgeRightColor(): string | undefined { return this.#mod_CeilingFillerEdgeRightColor }
  set mod_CeilingFillerEdgeRightColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerEdgeRightColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerEdgeRightColor === value) return;
    this.#mod_CeilingFillerEdgeRightColor = value;
  }

  mod_CeilingFillerEdgeRightColor_matrix?: IMatrix_mod_CeilingFillerEdgeRightColor;
  #mod_CeilingFillerProgram?: string;
  get mod_CeilingFillerProgram(): string | undefined { return this.#mod_CeilingFillerProgram }
  set mod_CeilingFillerProgram(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerProgram === value) return;
    this.#mod_CeilingFillerProgram = value;
  }

  mod_CeilingFillerProgram_matrix?: IMatrix_mod_CeilingFillerProgram;
  #mod_LengthList: number[] = [];
  get mod_LengthList(): number[] { return this.#mod_LengthList; }
  #mod_FrontGapHor?: number;
  get mod_FrontGapHor(): number | undefined { return this.#mod_FrontGapHor }
  set mod_FrontGapHor(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontGapHor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontGapHor === value) return;
    this.#mod_FrontGapHor = value;
  }

  mod_FrontGapHor_matrix?: IMatrix_mod_FrontGapHor;
  #mod_CeilingFillerFittingPanelDepth?: number;
  get mod_CeilingFillerFittingPanelDepth(): number | undefined { return this.#mod_CeilingFillerFittingPanelDepth }
  set mod_CeilingFillerFittingPanelDepth(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CeilingFillerFittingPanelDepth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CeilingFillerFittingPanelDepth === value) return;
    this.#mod_CeilingFillerFittingPanelDepth = value;
  }

  mod_CeilingFillerFittingPanelDepth_matrix?: IMatrix_mod_CeilingFillerFittingPanelDepth;
  override getAttributes(): Map<string, any> {
    let res = new Map<string, any>();
    res.set('mod_CeilingFillerFittingPanelThk', this.mod_CeilingFillerFittingPanelThk);
    res.set('mod_CeilingFillerHeight', this.mod_CeilingFillerHeight);
    res.set('mod_CeilingFillerRecess', this.mod_CeilingFillerRecess);
    res.set('mod_CeilingFillerRecessLeft', this.mod_CeilingFillerRecessLeft);
    res.set('mod_CeilingFillerRecessRight', this.mod_CeilingFillerRecessRight);
    res.set('mod_CeilingFillerThk', this.mod_CeilingFillerThk);
    res.set('mod_CeilingFillerTransitionType', this.mod_CeilingFillerTransitionType);
    res.set('mod_FrontGapCarcase', this.mod_FrontGapCarcase);
    res.set('mod_ModuleName', this.mod_ModuleName);
    res.set('mod_CeilingFillerConstruction', this.mod_CeilingFillerConstruction);
    res.set('mod_CeilingFillerColor', this.mod_CeilingFillerColor);
    res.set('mod_CeilingFillerEdgeBackColor', this.mod_CeilingFillerEdgeBackColor);
    res.set('mod_CeilingFillerEdgeFrontColor', this.mod_CeilingFillerEdgeFrontColor);
    res.set('mod_CeilingFillerEdgeLeftColor', this.mod_CeilingFillerEdgeLeftColor);
    res.set('mod_CeilingFillerEdgeRightColor', this.mod_CeilingFillerEdgeRightColor);
    res.set('mod_CeilingFillerProgram', this.mod_CeilingFillerProgram);
    res.set('mod_LengthList', JSON.stringify(this.mod_LengthList));
    res.set('mod_FrontGapHor', this.mod_FrontGapHor);
    res.set('mod_CeilingFillerFittingPanelDepth', this.mod_CeilingFillerFittingPanelDepth);
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
    // only take over the attributes we know...
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerFittingPanelThk');
      const val = _toFloat(json['attributes']['mod_CeilingFillerFittingPanelThk'], 'mod_CeilingFillerFittingPanelThk');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerFittingPanelThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerHeight');
      const val = _toFloat(json['attributes']['mod_CeilingFillerHeight'], 'mod_CeilingFillerHeight');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerHeight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerRecess');
      const val = _toFloat(json['attributes']['mod_CeilingFillerRecess'], 'mod_CeilingFillerRecess');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerRecess = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerRecessLeft');
      const val = _toFloat(json['attributes']['mod_CeilingFillerRecessLeft'], 'mod_CeilingFillerRecessLeft');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerRecessLeft = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerRecessRight');
      const val = _toFloat(json['attributes']['mod_CeilingFillerRecessRight'], 'mod_CeilingFillerRecessRight');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerRecessRight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerThk');
      const val = _toFloat(json['attributes']['mod_CeilingFillerThk'], 'mod_CeilingFillerThk');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerTransitionType');
      const val = _toString(json['attributes']['mod_CeilingFillerTransitionType'], 'mod_CeilingFillerTransitionType');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerTransitionType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapCarcase');
      const val = _toFloat(json['attributes']['mod_FrontGapCarcase'], 'mod_FrontGapCarcase');
      internal_leaveValidateVariant();
      this.mod_FrontGapCarcase = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
      const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
      internal_leaveValidateVariant();
      this.mod_ModuleName = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerConstruction');
      const val = _toString(json['attributes']['mod_CeilingFillerConstruction'], 'mod_CeilingFillerConstruction');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerConstruction = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerColor');
      const val = _toString(json['attributes']['mod_CeilingFillerColor'], 'mod_CeilingFillerColor');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerEdgeBackColor');
      const val = _toString(json['attributes']['mod_CeilingFillerEdgeBackColor'], 'mod_CeilingFillerEdgeBackColor');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerEdgeBackColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerEdgeFrontColor');
      const val = _toString(json['attributes']['mod_CeilingFillerEdgeFrontColor'], 'mod_CeilingFillerEdgeFrontColor');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerEdgeFrontColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerEdgeLeftColor');
      const val = _toString(json['attributes']['mod_CeilingFillerEdgeLeftColor'], 'mod_CeilingFillerEdgeLeftColor');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerEdgeLeftColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerEdgeRightColor');
      const val = _toString(json['attributes']['mod_CeilingFillerEdgeRightColor'], 'mod_CeilingFillerEdgeRightColor');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerEdgeRightColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerProgram');
      const val = _toString(json['attributes']['mod_CeilingFillerProgram'], 'mod_CeilingFillerProgram');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerProgram = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapHor');
      const val = _toFloat(json['attributes']['mod_FrontGapHor'], 'mod_FrontGapHor');
      internal_leaveValidateVariant();
      this.mod_FrontGapHor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerFittingPanelDepth');
      const val = _toFloat(json['attributes']['mod_CeilingFillerFittingPanelDepth'], 'mod_CeilingFillerFittingPanelDepth');
      internal_leaveValidateVariant();
      this.mod_CeilingFillerFittingPanelDepth = val;
    }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod: any) => { this.m.push(loadOrderData(subMod, this, manufacturerMode)) });
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    internal_leaveDataCompletionAssignDerivedData();
  }

  #dataCompletionSetDefaults() {
    this.#dataCompletionSetDefaultValues();
    this.#dataCompletionSetDefaultScripts();
  }
  #dataCompletionSetDefaultValues() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    if (this.mod_CeilingFillerTransitionType === undefined) {
      this.mod_CeilingFillerTransitionType = "FrontLong";
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mr_CeilingFiller";
    }
    if (this.mod_CeilingFillerConstruction === undefined) {
      this.mod_CeilingFillerConstruction = "Construction1";
    }
    if (this.mod_CeilingFillerColor === undefined) {
      this.mod_CeilingFillerColor = "240";
    }
    if (this.mod_CeilingFillerEdgeBackColor === undefined) {
      this.mod_CeilingFillerEdgeBackColor = "240";
    }
    if (this.mod_CeilingFillerEdgeFrontColor === undefined) {
      this.mod_CeilingFillerEdgeFrontColor = "240";
    }
    if (this.mod_CeilingFillerEdgeLeftColor === undefined) {
      this.mod_CeilingFillerEdgeLeftColor = "240";
    }
    if (this.mod_CeilingFillerEdgeRightColor === undefined) {
      this.mod_CeilingFillerEdgeRightColor = "240";
    }
    if (this.mod_CeilingFillerProgram === undefined) {
      this.mod_CeilingFillerProgram = "Nature";
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
    if (this.mod_CeilingFillerFittingPanelThk === undefined) {
      this.mod_CeilingFillerFittingPanelThk = this.g.basic_CeilingFillerFittingPanelThk;
    }
    if (this.mod_CeilingFillerHeight === undefined) {
      this.mod_CeilingFillerHeight = this.g.basic_CeilingFillerHeight;
    }
    if (this.mod_CeilingFillerRecess === undefined) {
      this.mod_CeilingFillerRecess = this.g.basic_CeilingFillerRecess;
    }
    if (this.mod_CeilingFillerRecessLeft === undefined) {
      this.mod_CeilingFillerRecessLeft = this.g.basic_CeilingFillerRecessLeft;
    }
    if (this.mod_CeilingFillerRecessRight === undefined) {
      this.mod_CeilingFillerRecessRight = this.g.basic_CeilingFillerRecessRight;
    }
    if (this.mod_CeilingFillerThk === undefined) {
      this.mod_CeilingFillerThk = this.g.basic_CeilingFillerThk;
    }
    if (this.mod_FrontGapCarcase === undefined) {
      this.mod_FrontGapCarcase = this.g.basic_FrontGapCarcase;
    }
    if (this.mod_FrontGapHor === undefined) {
      this.mod_FrontGapHor = this.g.basic_FrontGapHor;
    }
    if (this.mod_CeilingFillerFittingPanelDepth === undefined) {
      this.mod_CeilingFillerFittingPanelDepth = this.g.basic_CeilingFillerFittingPanelDepth;
    }
    internal_leaveDataCompletionSetDefaultScripts_globalVars();
  }

  override dataCompletion(): void {
    this.#dataCompletionSetDefaultValues();

    this.#dataCompletionSetDefaultScripts_globalVars();
    this._g!.setRootModuleData(this, false);

    this.#dataCompletionSetDefaultScripts_globalVars();

    // Optionally set the global variables based on this root data
    internal_enterDataCompletionSetGlobalVars(this.modId, this._id);
    this._g!.setRootModuleData(this);
    internal_leaveDataCompletionSetGlobalVars();

    this.#dataCompletionSetDefaultScripts();
    this.m.forEach(subMod => subMod.dataCompletion());
  }

  override manufacturerDataCompletion(): void {
    this.#manufacturerDataCompletionInternal();
    this.m.forEach(subMod => subMod.manufacturerDataCompletion());
  }
  #manufacturerDataCompletionInternal = mr_CeilingFiller_manufacturerDataCompletion;
  override afterDataCompletion(): void {
    if (this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mr_CeilingFiller_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mr_CeilingFiller {
    this.afterDataCompletion();
    const adc = new OD_M_mr_CeilingFiller_NonNull(this);
    return adc;
  }

  addOD_M_mc_CeilingFiller01(index?: number): dc_mc_CeilingFiller01 {
    var m = new OD_M_mc_CeilingFiller01(this);
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
    this.mod_CeilingFillerFittingPanelThk_matrix = VariantValidation.mod_CeilingFillerFittingPanelThk(this, this.mod_CeilingFillerFittingPanelThk);
    this.mod_CeilingFillerHeight_matrix = VariantValidation.mod_CeilingFillerHeight(this, this.mod_CeilingFillerHeight);
    this.mod_CeilingFillerRecess_matrix = VariantValidation.mod_CeilingFillerRecess(this, this.mod_CeilingFillerRecess);
    this.mod_CeilingFillerRecessLeft_matrix = VariantValidation.mod_CeilingFillerRecessLeft(this, this.mod_CeilingFillerRecessLeft);
    this.mod_CeilingFillerRecessRight_matrix = VariantValidation.mod_CeilingFillerRecessRight(this, this.mod_CeilingFillerRecessRight);
    this.mod_CeilingFillerThk_matrix = VariantValidation.mod_CeilingFillerThk(this, this.mod_CeilingFillerThk);
    this.mod_CeilingFillerTransitionType_matrix = VariantValidation.mod_CeilingFillerTransitionType(this, this.mod_CeilingFillerTransitionType);
    this.mod_FrontGapCarcase_matrix = VariantValidation.mod_FrontGapCarcase(this, this.mod_FrontGapCarcase);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this.mod_ModuleName);
    this.mod_CeilingFillerConstruction_matrix = VariantValidation.mod_CeilingFillerConstruction(this, this.mod_CeilingFillerConstruction);
    this.mod_CeilingFillerColor_matrix = VariantValidation.mod_CeilingFillerColor(this, this.mod_CeilingFillerColor);
    this.mod_CeilingFillerEdgeBackColor_matrix = VariantValidation.mod_CeilingFillerEdgeBackColor(this, this.mod_CeilingFillerEdgeBackColor);
    this.mod_CeilingFillerEdgeFrontColor_matrix = VariantValidation.mod_CeilingFillerEdgeFrontColor(this, this.mod_CeilingFillerEdgeFrontColor);
    this.mod_CeilingFillerEdgeLeftColor_matrix = VariantValidation.mod_CeilingFillerEdgeLeftColor(this, this.mod_CeilingFillerEdgeLeftColor);
    this.mod_CeilingFillerEdgeRightColor_matrix = VariantValidation.mod_CeilingFillerEdgeRightColor(this, this.mod_CeilingFillerEdgeRightColor);
    this.mod_CeilingFillerProgram_matrix = VariantValidation.mod_CeilingFillerProgram(this, this.mod_CeilingFillerProgram);
    this.mod_FrontGapHor_matrix = VariantValidation.mod_FrontGapHor(this, this.mod_FrontGapHor);
    this.mod_CeilingFillerFittingPanelDepth_matrix = VariantValidation.mod_CeilingFillerFittingPanelDepth(this, this.mod_CeilingFillerFittingPanelDepth);
  }

  override calculateContainerModules(): void {
    let ccm = new OD_M_mr_CeilingFiller_NonNull(this);
    ccm.calculateContainerModules();
    this.m.forEach(subMod => subMod.calculateContainerModules());
  }


  override createBuildPlan(): void {
    var cbp = new OD_M_mr_CeilingFiller_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mr_CeilingFiller_NonNull implements cbp_mr_CeilingFiller, adc_mr_CeilingFiller, ccm_mr_CeilingFiller, IPartParentsNonNull_mr_CeilingFiller {
  constructor(parent: OD_M_mr_CeilingFiller) {
    this.#internalParent = parent;
  }
  #internalParent: OD_M_mr_CeilingFiller;
  getGenerationContours(): GenerationContour[] { return this.#internalParent.getGenerationContours(); }
  getRoomContours(): RoomContour[] { return this.#internalParent.roomContours ?? []; }
  get _posData(): Map<string, string | number> { return this.#internalParent._posData; }

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
  #createBuildPlanInternal = mr_CeilingFiller_createBuildPlan;
  afterDataCompletion(): void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mr_CeilingFiller_afterDataCompletion;
  calculateContainerModules(): void {
    this.#calculateContainerModulesInternal();
  }
  #calculateContainerModulesInternal = mr_CeilingFiller_calculateContainerModules;
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
  get mod_CeilingFillerFittingPanelThk(): number {
    return this.#internalParent.mod_CeilingFillerFittingPanelThk!;
  }
  get mod_CeilingFillerHeight(): number {
    return this.#internalParent.mod_CeilingFillerHeight!;
  }
  get mod_CeilingFillerRecess(): number {
    return this.#internalParent.mod_CeilingFillerRecess!;
  }
  get mod_CeilingFillerRecessLeft(): number {
    return this.#internalParent.mod_CeilingFillerRecessLeft!;
  }
  get mod_CeilingFillerRecessRight(): number {
    return this.#internalParent.mod_CeilingFillerRecessRight!;
  }
  get mod_CeilingFillerThk(): number {
    return this.#internalParent.mod_CeilingFillerThk!;
  }
  get mod_CeilingFillerTransitionType(): string {
    return this.#internalParent.mod_CeilingFillerTransitionType!;
  }
  get mod_FrontGapCarcase(): number {
    return this.#internalParent.mod_FrontGapCarcase!;
  }
  get mod_ModuleName(): string {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_CeilingFillerConstruction(): string {
    return this.#internalParent.mod_CeilingFillerConstruction!;
  }
  get mod_CeilingFillerColor(): string {
    return this.#internalParent.mod_CeilingFillerColor!;
  }
  get mod_CeilingFillerColor_matrix(): IMatrix_mod_CeilingFillerColor {
    return this.#internalParent.mod_CeilingFillerColor_matrix!;
  }
  get mod_CeilingFillerEdgeBackColor(): string {
    return this.#internalParent.mod_CeilingFillerEdgeBackColor!;
  }
  get mod_CeilingFillerEdgeFrontColor(): string {
    return this.#internalParent.mod_CeilingFillerEdgeFrontColor!;
  }
  get mod_CeilingFillerEdgeLeftColor(): string {
    return this.#internalParent.mod_CeilingFillerEdgeLeftColor!;
  }
  get mod_CeilingFillerEdgeRightColor(): string {
    return this.#internalParent.mod_CeilingFillerEdgeRightColor!;
  }
  get mod_CeilingFillerProgram(): string {
    return this.#internalParent.mod_CeilingFillerProgram!;
  }
  get mod_CeilingFillerProgram_matrix(): IMatrix_mod_CeilingFillerProgram {
    return this.#internalParent.mod_CeilingFillerProgram_matrix!;
  }
  get mod_LengthList(): number[] {
    return this.#internalParent.mod_LengthList!;
  }
  get mod_FrontGapHor(): number {
    return this.#internalParent.mod_FrontGapHor!;
  }
  get mod_CeilingFillerFittingPanelDepth(): number {
    return this.#internalParent.mod_CeilingFillerFittingPanelDepth!;
  }
  addOD_M_mc_CeilingFiller01(index?: number): dc_mc_CeilingFiller01 {
    return this.#internalParent.addOD_M_mc_CeilingFiller01(index);
  }
}

