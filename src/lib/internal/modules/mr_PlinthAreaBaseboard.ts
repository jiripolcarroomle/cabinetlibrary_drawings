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
import { IP_part_BaseboardGroup_PartVarsWritable, P_part_BaseboardGroup } from '../parts/part_BaseboardGroup'
import { OD_M_mc_Toekick, dc_mc_Toekick } from './mc_Toekick'
import { OD_M_mc_Leg01, dc_mc_Leg01 } from './mc_Leg01'
import { OD_M_mc_Baseboard01, dc_mc_Baseboard01 } from './mc_Baseboard01'
import { IModuleNonNull_mr_PlinthAreaBaseboard, IModParents_mc_PlinthArea01_mr_PlinthAreaBaseboard, IModParents_mr_PlinthAreaBaseboard_mr_Toekick, IModParents_mr_PlinthAreaBaseboard, IPartParentsNonNull_mc_PlinthArea01_mr_PlinthAreaBaseboard, IPartParentsNonNull_mr_PlinthAreaBaseboard_mr_Toekick, IPartParentsNonNull_mr_PlinthAreaBaseboard } from '../mod-interfaces'
import { IModVar_mod_PlinthAreaDesign, IModVarNonNull_mod_PlinthAreaDesign, IModVar_mod_PlinthAreaHeight, IModVarNonNull_mod_PlinthAreaHeight, IModVar_mod_PlinthAreaVisLeft, IModVarNonNull_mod_PlinthAreaVisLeft, IModVar_mod_PlinthAreaVisRight, IModVarNonNull_mod_PlinthAreaVisRight, IModVar_mod_PlinthAreaPosLogic, IModVarNonNull_mod_PlinthAreaPosLogic, IModVar_mod_PlinthAreaPosLeftMatrix, IModVarNonNull_mod_PlinthAreaPosLeftMatrix, IModVar_mod_PlinthAreaPosRightMatrix, IModVarNonNull_mod_PlinthAreaPosRightMatrix, IModVar_mod_PlinthAreaPosFrontMatrix, IModVarNonNull_mod_PlinthAreaPosFrontMatrix, IModVar_mod_PlinthAreaPosBackMatrix, IModVarNonNull_mod_PlinthAreaPosBackMatrix, IModVar_mod_PlinthAreaElementColor, IModVarNonNull_mod_PlinthAreaElementColor, IModVar_mod_PlinthAreaExtraItem, IModVarNonNull_mod_PlinthAreaExtraItem, IModVar_mod_BaseboardDepthLogic, IModVarNonNull_mod_BaseboardDepthLogic, IModVar_mod_BaseboardOverdimensionBack, IModVarNonNull_mod_BaseboardOverdimensionBack, IModVar_mod_BaseboardOverdimensionLeft, IModVarNonNull_mod_BaseboardOverdimensionLeft, IModVar_mod_BaseboardOverdimensionRight, IModVarNonNull_mod_BaseboardOverdimensionRight, IModVar_mod_BaseboardSplitLogic, IModVarNonNull_mod_BaseboardSplitLogic, IModVar_mod_CarcaseColor, IModVarNonNull_mod_CarcaseColor, IModVar_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseEdgeColor, IModVar_mod_CarcaseEdgeFrontColor, IModVarNonNull_mod_CarcaseEdgeFrontColor, IModVar_mod_CarcaseEdgeBackColor, IModVarNonNull_mod_CarcaseEdgeBackColor, IModVar_mod_LengthList, IModVarNonNull_mod_LengthList, IModVar_mod_ToekickColor, IModVarNonNull_mod_ToekickColor, IModVar_mod_ToekickConnectionOverhang, IModVarNonNull_mod_ToekickConnectionOverhang, IModVar_mod_ToekickConnectionSequence, IModVarNonNull_mod_ToekickConnectionSequence, IModVar_mod_ToekickId, IModVarNonNull_mod_ToekickId, IModVar_mod_ToekickProgram, IModVarNonNull_mod_ToekickProgram, IModVar_mod_ToekickReductionTop, IModVarNonNull_mod_ToekickReductionTop, IModVar_mod_ToekickSidepanelOverdimensionBtm, IModVarNonNull_mod_ToekickSidepanelOverdimensionBtm, IModVar_mod_ToekickSidepanelTransitionType, IModVarNonNull_mod_ToekickSidepanelTransitionType, IModVar_mod_ToekickThk, IModVarNonNull_mod_ToekickThk, IModVar_mod_BaseboardThk, IModVarNonNull_mod_BaseboardThk, IModVar_mod_BaseboardColor, IModVarNonNull_mod_BaseboardColor, IModVar_mod_BaseboardEdgeColor, IModVarNonNull_mod_BaseboardEdgeColor, IModVar_mod_BaseboardEdgeBackColor, IModVarNonNull_mod_BaseboardEdgeBackColor, IModVar_mod_BaseboardEdgeFrontColor, IModVarNonNull_mod_BaseboardEdgeFrontColor, IModVar_mod_BaseboardProgram, IModVarNonNull_mod_BaseboardProgram, IModVar_mod_CarcaseProgram, IModVarNonNull_mod_CarcaseProgram } from '../var-interfaces'
import { VariantValidation, IMatrix_mod_PlinthAreaDesign, IMatrix_mod_PlinthAreaHeight, IMatrix_mod_PlinthAreaVisLeft, IMatrix_mod_PlinthAreaVisRight, IMatrix_mod_PlinthAreaPosLogic, IMatrix_mod_PlinthAreaPosLeftMatrix, IMatrix_mod_PlinthAreaPosRightMatrix, IMatrix_mod_PlinthAreaPosFrontMatrix, IMatrix_mod_PlinthAreaPosBackMatrix, IMatrix_mod_PlinthAreaElementColor, IMatrix_mod_PlinthAreaExtraItem, IMatrix_mod_BaseboardDepthLogic, IMatrix_mod_BaseboardOverdimensionBack, IMatrix_mod_BaseboardOverdimensionLeft, IMatrix_mod_BaseboardOverdimensionRight, IMatrix_mod_BaseboardSplitLogic, IMatrix_mod_CarcaseColor, IMatrix_mod_CarcaseEdgeColor, IMatrix_mod_CarcaseEdgeFrontColor, IMatrix_mod_CarcaseEdgeBackColor, IMatrix_mod_ToekickColor, IMatrix_mod_ToekickConnectionOverhang, IMatrix_mod_ToekickConnectionSequence, IMatrix_mod_ToekickId, IMatrix_mod_ToekickProgram, IMatrix_mod_ToekickReductionTop, IMatrix_mod_ToekickSidepanelOverdimensionBtm, IMatrix_mod_ToekickSidepanelTransitionType, IMatrix_mod_ToekickThk, IMatrix_mod_BaseboardThk, IMatrix_mod_BaseboardColor, IMatrix_mod_BaseboardEdgeColor, IMatrix_mod_BaseboardEdgeBackColor, IMatrix_mod_BaseboardEdgeFrontColor, IMatrix_mod_BaseboardProgram, IMatrix_mod_CarcaseProgram } from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_BaseboardGroup } from '../part-add-interfaces';
import { mr_PlinthAreaBaseboard_createBuildPlan, mr_PlinthAreaBaseboard_afterDataCompletion, mr_PlinthAreaBaseboard_manufacturerDataCompletion, mr_PlinthAreaBaseboard_calculateContainerModules } from '../../modules/mr_PlinthAreaBaseboard';

export interface cbp_mr_PlinthAreaBaseboard extends IModBaseProp
  , IPartAdd_part_BaseboardGroup, IModVarNonNull_mod_PlinthAreaDesign, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_PlinthAreaVisLeft, IModVarNonNull_mod_PlinthAreaVisRight, IModVarNonNull_mod_PlinthAreaPosLogic, IModVarNonNull_mod_PlinthAreaPosLeftMatrix, IModVarNonNull_mod_PlinthAreaPosRightMatrix, IModVarNonNull_mod_PlinthAreaPosFrontMatrix, IModVarNonNull_mod_PlinthAreaPosBackMatrix, IModVarNonNull_mod_PlinthAreaElementColor, IModVarNonNull_mod_PlinthAreaExtraItem, IModVarNonNull_mod_BaseboardDepthLogic, IModVarNonNull_mod_BaseboardOverdimensionBack, IModVarNonNull_mod_BaseboardOverdimensionLeft, IModVarNonNull_mod_BaseboardOverdimensionRight, IModVarNonNull_mod_BaseboardSplitLogic, IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseEdgeFrontColor, IModVarNonNull_mod_CarcaseEdgeBackColor, IModVarNonNull_mod_LengthList, IModVarNonNull_mod_ToekickColor, IModVarNonNull_mod_ToekickConnectionOverhang, IModVarNonNull_mod_ToekickConnectionSequence, IModVarNonNull_mod_ToekickId, IModVarNonNull_mod_ToekickProgram, IModVarNonNull_mod_ToekickReductionTop, IModVarNonNull_mod_ToekickSidepanelOverdimensionBtm, IModVarNonNull_mod_ToekickSidepanelTransitionType, IModVarNonNull_mod_ToekickThk, IModVarNonNull_mod_BaseboardThk, IModVarNonNull_mod_BaseboardColor, IModVarNonNull_mod_BaseboardEdgeColor, IModVarNonNull_mod_BaseboardEdgeBackColor, IModVarNonNull_mod_BaseboardEdgeFrontColor, IModVarNonNull_mod_BaseboardProgram, IModVarNonNull_mod_CarcaseProgram {
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

export interface dc_mr_PlinthAreaBaseboard extends IModBaseProp
  , IModVar_mod_PlinthAreaDesign, IModVar_mod_PlinthAreaHeight, IModVar_mod_PlinthAreaVisLeft, IModVar_mod_PlinthAreaVisRight, IModVar_mod_PlinthAreaPosLogic, IModVar_mod_PlinthAreaPosLeftMatrix, IModVar_mod_PlinthAreaPosRightMatrix, IModVar_mod_PlinthAreaPosFrontMatrix, IModVar_mod_PlinthAreaPosBackMatrix, IModVar_mod_PlinthAreaElementColor, IModVar_mod_PlinthAreaExtraItem, IModVar_mod_BaseboardDepthLogic, IModVar_mod_BaseboardOverdimensionBack, IModVar_mod_BaseboardOverdimensionLeft, IModVar_mod_BaseboardOverdimensionRight, IModVar_mod_BaseboardSplitLogic, IModVar_mod_CarcaseColor, IModVar_mod_CarcaseEdgeColor, IModVar_mod_CarcaseEdgeFrontColor, IModVar_mod_CarcaseEdgeBackColor, IModVar_mod_LengthList, IModVar_mod_ToekickColor, IModVar_mod_ToekickConnectionOverhang, IModVar_mod_ToekickConnectionSequence, IModVar_mod_ToekickId, IModVar_mod_ToekickProgram, IModVar_mod_ToekickReductionTop, IModVar_mod_ToekickSidepanelOverdimensionBtm, IModVar_mod_ToekickSidepanelTransitionType, IModVar_mod_ToekickThk, IModVar_mod_BaseboardThk, IModVar_mod_BaseboardColor, IModVar_mod_BaseboardEdgeColor, IModVar_mod_BaseboardEdgeBackColor, IModVar_mod_BaseboardEdgeFrontColor, IModVar_mod_BaseboardProgram, IModVar_mod_CarcaseProgram {
  m: OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  seal(): IModuleNonNull_mr_PlinthAreaBaseboard;
  getGenerationContours(): GenerationContour[];
  addOD_M_mc_Toekick(index?: number): dc_mc_Toekick;
  addOD_M_mc_Leg01(index?: number): dc_mc_Leg01;
  addOD_M_mc_Baseboard01(index?: number): dc_mc_Baseboard01;
}

export interface adc_base_mr_PlinthAreaBaseboard extends IModBaseProp
  , IModVarNonNull_mod_PlinthAreaDesign, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_PlinthAreaVisLeft, IModVarNonNull_mod_PlinthAreaVisRight, IModVarNonNull_mod_PlinthAreaPosLogic, IModVarNonNull_mod_PlinthAreaPosLeftMatrix, IModVarNonNull_mod_PlinthAreaPosRightMatrix, IModVarNonNull_mod_PlinthAreaPosFrontMatrix, IModVarNonNull_mod_PlinthAreaPosBackMatrix, IModVarNonNull_mod_PlinthAreaElementColor, IModVarNonNull_mod_PlinthAreaExtraItem, IModVarNonNull_mod_BaseboardDepthLogic, IModVarNonNull_mod_BaseboardOverdimensionBack, IModVarNonNull_mod_BaseboardOverdimensionLeft, IModVarNonNull_mod_BaseboardOverdimensionRight, IModVarNonNull_mod_BaseboardSplitLogic, IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseEdgeFrontColor, IModVarNonNull_mod_CarcaseEdgeBackColor, IModVarNonNull_mod_LengthList, IModVarNonNull_mod_ToekickColor, IModVarNonNull_mod_ToekickConnectionOverhang, IModVarNonNull_mod_ToekickConnectionSequence, IModVarNonNull_mod_ToekickId, IModVarNonNull_mod_ToekickProgram, IModVarNonNull_mod_ToekickReductionTop, IModVarNonNull_mod_ToekickSidepanelOverdimensionBtm, IModVarNonNull_mod_ToekickSidepanelTransitionType, IModVarNonNull_mod_ToekickThk, IModVarNonNull_mod_BaseboardThk, IModVarNonNull_mod_BaseboardColor, IModVarNonNull_mod_BaseboardEdgeColor, IModVarNonNull_mod_BaseboardEdgeBackColor, IModVarNonNull_mod_BaseboardEdgeFrontColor, IModVarNonNull_mod_BaseboardProgram, IModVarNonNull_mod_CarcaseProgram {
  get m(): OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  getGenerationContours(): GenerationContour[];
  getRoomContours(): RoomContour[];
  get _posData(): Map<string, string | number>;
}

export interface adc_mr_PlinthAreaBaseboard extends adc_base_mr_PlinthAreaBaseboard {
  addOD_M_mc_Toekick(index?: number): dc_mc_Toekick;
  addOD_M_mc_Leg01(index?: number): dc_mc_Leg01;
  addOD_M_mc_Baseboard01(index?: number): dc_mc_Baseboard01;
}

export interface ccm_mr_PlinthAreaBaseboard extends adc_base_mr_PlinthAreaBaseboard {
}


export class OD_M_mr_PlinthAreaBaseboard extends OD_Base implements dc_mr_PlinthAreaBaseboard
  , IModParents_mc_PlinthArea01_mr_PlinthAreaBaseboard, IModParents_mr_PlinthAreaBaseboard_mr_Toekick, IModParents_mr_PlinthAreaBaseboard
  , IModVar_mod_PlinthAreaDesign, IModVar_mod_PlinthAreaHeight, IModVar_mod_PlinthAreaVisLeft, IModVar_mod_PlinthAreaVisRight, IModVar_mod_PlinthAreaPosLogic, IModVar_mod_PlinthAreaPosLeftMatrix, IModVar_mod_PlinthAreaPosRightMatrix, IModVar_mod_PlinthAreaPosFrontMatrix, IModVar_mod_PlinthAreaPosBackMatrix, IModVar_mod_PlinthAreaElementColor, IModVar_mod_PlinthAreaExtraItem, IModVar_mod_BaseboardDepthLogic, IModVar_mod_BaseboardOverdimensionBack, IModVar_mod_BaseboardOverdimensionLeft, IModVar_mod_BaseboardOverdimensionRight, IModVar_mod_BaseboardSplitLogic, IModVar_mod_CarcaseColor, IModVar_mod_CarcaseEdgeColor, IModVar_mod_CarcaseEdgeFrontColor, IModVar_mod_CarcaseEdgeBackColor, IModVar_mod_LengthList, IModVar_mod_ToekickColor, IModVar_mod_ToekickConnectionOverhang, IModVar_mod_ToekickConnectionSequence, IModVar_mod_ToekickId, IModVar_mod_ToekickProgram, IModVar_mod_ToekickReductionTop, IModVar_mod_ToekickSidepanelOverdimensionBtm, IModVar_mod_ToekickSidepanelTransitionType, IModVar_mod_ToekickThk, IModVar_mod_BaseboardThk, IModVar_mod_BaseboardColor, IModVar_mod_BaseboardEdgeColor, IModVar_mod_BaseboardEdgeBackColor, IModVar_mod_BaseboardEdgeFrontColor, IModVar_mod_BaseboardProgram, IModVar_mod_CarcaseProgram {
  constructor(parent?: OD_Base, manufacturerMode?: boolean) {
    super('mr_PlinthAreaBaseboard', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this._g = new GlobalVars();
    this._openGroups = new Map<string, OpenGroup>();
    this._partGroups = new Map<string, PartGroup>();
    this._selfNonNull = new OD_M_mr_PlinthAreaBaseboard_NonNull(this);
    this._isGenerated = true;
  }
  _selfNonNull: OD_M_mr_PlinthAreaBaseboard_NonNull;
  getGenerationContours(): GenerationContour[] { return this.generationContours; }

  override variants: string[] = ['mod_PlinthAreaDesign', 'mod_PlinthAreaHeight', 'mod_PlinthAreaVisLeft', 'mod_PlinthAreaVisRight', 'mod_PlinthAreaPosLogic', 'mod_PlinthAreaPosLeftMatrix', 'mod_PlinthAreaPosRightMatrix', 'mod_PlinthAreaPosFrontMatrix', 'mod_PlinthAreaPosBackMatrix', 'mod_PlinthAreaElementColor', 'mod_PlinthAreaExtraItem', 'mod_BaseboardDepthLogic', 'mod_BaseboardOverdimensionBack', 'mod_BaseboardOverdimensionLeft', 'mod_BaseboardOverdimensionRight', 'mod_BaseboardSplitLogic', 'mod_CarcaseColor', 'mod_CarcaseEdgeColor', 'mod_CarcaseEdgeFrontColor', 'mod_CarcaseEdgeBackColor', 'mod_LengthList', 'mod_ToekickColor', 'mod_ToekickConnectionOverhang', 'mod_ToekickConnectionSequence', 'mod_ToekickId', 'mod_ToekickProgram', 'mod_ToekickReductionTop', 'mod_ToekickSidepanelOverdimensionBtm', 'mod_ToekickSidepanelTransitionType', 'mod_ToekickThk', 'mod_BaseboardThk', 'mod_BaseboardColor', 'mod_BaseboardEdgeColor', 'mod_BaseboardEdgeBackColor', 'mod_BaseboardEdgeFrontColor', 'mod_BaseboardProgram', 'mod_CarcaseProgram',];
  #mod_PlinthAreaDesign?: string;
  get mod_PlinthAreaDesign(): string | undefined { return this.#mod_PlinthAreaDesign }
  set mod_PlinthAreaDesign(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PlinthAreaDesign' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PlinthAreaDesign === value) return;
    this.#mod_PlinthAreaDesign = value;
  }

  mod_PlinthAreaDesign_matrix?: IMatrix_mod_PlinthAreaDesign;
  #mod_PlinthAreaHeight?: number;
  get mod_PlinthAreaHeight(): number | undefined { return this.#mod_PlinthAreaHeight }
  set mod_PlinthAreaHeight(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PlinthAreaHeight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PlinthAreaHeight === value) return;
    this.#mod_PlinthAreaHeight = value;
  }

  mod_PlinthAreaHeight_matrix?: IMatrix_mod_PlinthAreaHeight;
  #mod_PlinthAreaVisLeft?: boolean;
  get mod_PlinthAreaVisLeft(): boolean | undefined { return this.#mod_PlinthAreaVisLeft }
  set mod_PlinthAreaVisLeft(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PlinthAreaVisLeft' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PlinthAreaVisLeft === value) return;
    this.#mod_PlinthAreaVisLeft = value;
  }

  mod_PlinthAreaVisLeft_matrix?: IMatrix_mod_PlinthAreaVisLeft;
  #mod_PlinthAreaVisRight?: boolean;
  get mod_PlinthAreaVisRight(): boolean | undefined { return this.#mod_PlinthAreaVisRight }
  set mod_PlinthAreaVisRight(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PlinthAreaVisRight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PlinthAreaVisRight === value) return;
    this.#mod_PlinthAreaVisRight = value;
  }

  mod_PlinthAreaVisRight_matrix?: IMatrix_mod_PlinthAreaVisRight;
  #mod_PlinthAreaPosLogic?: string;
  get mod_PlinthAreaPosLogic(): string | undefined { return this.#mod_PlinthAreaPosLogic }
  set mod_PlinthAreaPosLogic(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PlinthAreaPosLogic' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PlinthAreaPosLogic === value) return;
    this.#mod_PlinthAreaPosLogic = value;
  }

  mod_PlinthAreaPosLogic_matrix?: IMatrix_mod_PlinthAreaPosLogic;
  #mod_PlinthAreaPosLeftMatrix?: string;
  get mod_PlinthAreaPosLeftMatrix(): string | undefined { return this.#mod_PlinthAreaPosLeftMatrix }
  set mod_PlinthAreaPosLeftMatrix(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PlinthAreaPosLeftMatrix' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PlinthAreaPosLeftMatrix === value) return;
    this.#mod_PlinthAreaPosLeftMatrix = value;
  }

  mod_PlinthAreaPosLeftMatrix_matrix?: IMatrix_mod_PlinthAreaPosLeftMatrix;
  #mod_PlinthAreaPosRightMatrix?: string;
  get mod_PlinthAreaPosRightMatrix(): string | undefined { return this.#mod_PlinthAreaPosRightMatrix }
  set mod_PlinthAreaPosRightMatrix(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PlinthAreaPosRightMatrix' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PlinthAreaPosRightMatrix === value) return;
    this.#mod_PlinthAreaPosRightMatrix = value;
  }

  mod_PlinthAreaPosRightMatrix_matrix?: IMatrix_mod_PlinthAreaPosRightMatrix;
  #mod_PlinthAreaPosFrontMatrix?: string;
  get mod_PlinthAreaPosFrontMatrix(): string | undefined { return this.#mod_PlinthAreaPosFrontMatrix }
  set mod_PlinthAreaPosFrontMatrix(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PlinthAreaPosFrontMatrix' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PlinthAreaPosFrontMatrix === value) return;
    this.#mod_PlinthAreaPosFrontMatrix = value;
  }

  mod_PlinthAreaPosFrontMatrix_matrix?: IMatrix_mod_PlinthAreaPosFrontMatrix;
  #mod_PlinthAreaPosBackMatrix?: string;
  get mod_PlinthAreaPosBackMatrix(): string | undefined { return this.#mod_PlinthAreaPosBackMatrix }
  set mod_PlinthAreaPosBackMatrix(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PlinthAreaPosBackMatrix' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PlinthAreaPosBackMatrix === value) return;
    this.#mod_PlinthAreaPosBackMatrix = value;
  }

  mod_PlinthAreaPosBackMatrix_matrix?: IMatrix_mod_PlinthAreaPosBackMatrix;
  #mod_PlinthAreaElementColor?: string;
  get mod_PlinthAreaElementColor(): string | undefined { return this.#mod_PlinthAreaElementColor }
  set mod_PlinthAreaElementColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PlinthAreaElementColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PlinthAreaElementColor === value) return;
    this.#mod_PlinthAreaElementColor = value;
  }

  mod_PlinthAreaElementColor_matrix?: IMatrix_mod_PlinthAreaElementColor;
  #mod_PlinthAreaExtraItem?: string;
  get mod_PlinthAreaExtraItem(): string | undefined { return this.#mod_PlinthAreaExtraItem }
  set mod_PlinthAreaExtraItem(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PlinthAreaExtraItem' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PlinthAreaExtraItem === value) return;
    this.#mod_PlinthAreaExtraItem = value;
  }

  mod_PlinthAreaExtraItem_matrix?: IMatrix_mod_PlinthAreaExtraItem;
  #mod_BaseboardDepthLogic?: string;
  get mod_BaseboardDepthLogic(): string | undefined { return this.#mod_BaseboardDepthLogic }
  set mod_BaseboardDepthLogic(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BaseboardDepthLogic' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BaseboardDepthLogic === value) return;
    this.#mod_BaseboardDepthLogic = value;
  }

  mod_BaseboardDepthLogic_matrix?: IMatrix_mod_BaseboardDepthLogic;
  #mod_BaseboardOverdimensionBack?: number;
  get mod_BaseboardOverdimensionBack(): number | undefined { return this.#mod_BaseboardOverdimensionBack }
  set mod_BaseboardOverdimensionBack(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BaseboardOverdimensionBack' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BaseboardOverdimensionBack === value) return;
    this.#mod_BaseboardOverdimensionBack = value;
  }

  mod_BaseboardOverdimensionBack_matrix?: IMatrix_mod_BaseboardOverdimensionBack;
  #mod_BaseboardOverdimensionLeft?: number;
  get mod_BaseboardOverdimensionLeft(): number | undefined { return this.#mod_BaseboardOverdimensionLeft }
  set mod_BaseboardOverdimensionLeft(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BaseboardOverdimensionLeft' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BaseboardOverdimensionLeft === value) return;
    this.#mod_BaseboardOverdimensionLeft = value;
  }

  mod_BaseboardOverdimensionLeft_matrix?: IMatrix_mod_BaseboardOverdimensionLeft;
  #mod_BaseboardOverdimensionRight?: number;
  get mod_BaseboardOverdimensionRight(): number | undefined { return this.#mod_BaseboardOverdimensionRight }
  set mod_BaseboardOverdimensionRight(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BaseboardOverdimensionRight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BaseboardOverdimensionRight === value) return;
    this.#mod_BaseboardOverdimensionRight = value;
  }

  mod_BaseboardOverdimensionRight_matrix?: IMatrix_mod_BaseboardOverdimensionRight;
  #mod_BaseboardSplitLogic?: string;
  get mod_BaseboardSplitLogic(): string | undefined { return this.#mod_BaseboardSplitLogic }
  set mod_BaseboardSplitLogic(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BaseboardSplitLogic' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BaseboardSplitLogic === value) return;
    this.#mod_BaseboardSplitLogic = value;
  }

  mod_BaseboardSplitLogic_matrix?: IMatrix_mod_BaseboardSplitLogic;
  #mod_CarcaseColor?: string;
  get mod_CarcaseColor(): string | undefined { return this.#mod_CarcaseColor }
  set mod_CarcaseColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseColor === value) return;
    this.#mod_CarcaseColor = value;
  }

  mod_CarcaseColor_matrix?: IMatrix_mod_CarcaseColor;
  #mod_CarcaseEdgeColor?: string;
  get mod_CarcaseEdgeColor(): string | undefined { return this.#mod_CarcaseEdgeColor }
  set mod_CarcaseEdgeColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseEdgeColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseEdgeColor === value) return;
    this.#mod_CarcaseEdgeColor = value;
  }

  mod_CarcaseEdgeColor_matrix?: IMatrix_mod_CarcaseEdgeColor;
  #mod_CarcaseEdgeFrontColor?: string;
  get mod_CarcaseEdgeFrontColor(): string | undefined { return this.#mod_CarcaseEdgeFrontColor }
  set mod_CarcaseEdgeFrontColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseEdgeFrontColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseEdgeFrontColor === value) return;
    this.#mod_CarcaseEdgeFrontColor = value;
  }

  mod_CarcaseEdgeFrontColor_matrix?: IMatrix_mod_CarcaseEdgeFrontColor;
  #mod_CarcaseEdgeBackColor?: string;
  get mod_CarcaseEdgeBackColor(): string | undefined { return this.#mod_CarcaseEdgeBackColor }
  set mod_CarcaseEdgeBackColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseEdgeBackColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseEdgeBackColor === value) return;
    this.#mod_CarcaseEdgeBackColor = value;
  }

  mod_CarcaseEdgeBackColor_matrix?: IMatrix_mod_CarcaseEdgeBackColor;
  #mod_LengthList: number[] = [];
  get mod_LengthList(): number[] { return this.#mod_LengthList; }
  #mod_ToekickColor?: string;
  get mod_ToekickColor(): string | undefined { return this.#mod_ToekickColor }
  set mod_ToekickColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ToekickColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ToekickColor === value) return;
    this.#mod_ToekickColor = value;
  }

  mod_ToekickColor_matrix?: IMatrix_mod_ToekickColor;
  #mod_ToekickConnectionOverhang?: number;
  get mod_ToekickConnectionOverhang(): number | undefined { return this.#mod_ToekickConnectionOverhang }
  set mod_ToekickConnectionOverhang(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ToekickConnectionOverhang' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ToekickConnectionOverhang === value) return;
    this.#mod_ToekickConnectionOverhang = value;
  }

  mod_ToekickConnectionOverhang_matrix?: IMatrix_mod_ToekickConnectionOverhang;
  #mod_ToekickConnectionSequence?: string;
  get mod_ToekickConnectionSequence(): string | undefined { return this.#mod_ToekickConnectionSequence }
  set mod_ToekickConnectionSequence(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ToekickConnectionSequence' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ToekickConnectionSequence === value) return;
    this.#mod_ToekickConnectionSequence = value;
  }

  mod_ToekickConnectionSequence_matrix?: IMatrix_mod_ToekickConnectionSequence;
  #mod_ToekickId?: string;
  get mod_ToekickId(): string | undefined { return this.#mod_ToekickId }
  set mod_ToekickId(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ToekickId' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ToekickId === value) return;
    this.#mod_ToekickId = value;
  }

  mod_ToekickId_matrix?: IMatrix_mod_ToekickId;
  #mod_ToekickProgram?: string;
  get mod_ToekickProgram(): string | undefined { return this.#mod_ToekickProgram }
  set mod_ToekickProgram(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ToekickProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ToekickProgram === value) return;
    this.#mod_ToekickProgram = value;
  }

  mod_ToekickProgram_matrix?: IMatrix_mod_ToekickProgram;
  #mod_ToekickReductionTop?: number;
  get mod_ToekickReductionTop(): number | undefined { return this.#mod_ToekickReductionTop }
  set mod_ToekickReductionTop(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ToekickReductionTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ToekickReductionTop === value) return;
    this.#mod_ToekickReductionTop = value;
  }

  mod_ToekickReductionTop_matrix?: IMatrix_mod_ToekickReductionTop;
  #mod_ToekickSidepanelOverdimensionBtm?: number;
  get mod_ToekickSidepanelOverdimensionBtm(): number | undefined { return this.#mod_ToekickSidepanelOverdimensionBtm }
  set mod_ToekickSidepanelOverdimensionBtm(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ToekickSidepanelOverdimensionBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ToekickSidepanelOverdimensionBtm === value) return;
    this.#mod_ToekickSidepanelOverdimensionBtm = value;
  }

  mod_ToekickSidepanelOverdimensionBtm_matrix?: IMatrix_mod_ToekickSidepanelOverdimensionBtm;
  #mod_ToekickSidepanelTransitionType?: string;
  get mod_ToekickSidepanelTransitionType(): string | undefined { return this.#mod_ToekickSidepanelTransitionType }
  set mod_ToekickSidepanelTransitionType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ToekickSidepanelTransitionType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ToekickSidepanelTransitionType === value) return;
    this.#mod_ToekickSidepanelTransitionType = value;
  }

  mod_ToekickSidepanelTransitionType_matrix?: IMatrix_mod_ToekickSidepanelTransitionType;
  #mod_ToekickThk?: number;
  get mod_ToekickThk(): number | undefined { return this.#mod_ToekickThk }
  set mod_ToekickThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ToekickThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ToekickThk === value) return;
    this.#mod_ToekickThk = value;
  }

  mod_ToekickThk_matrix?: IMatrix_mod_ToekickThk;
  #mod_BaseboardThk?: number;
  get mod_BaseboardThk(): number | undefined { return this.#mod_BaseboardThk }
  set mod_BaseboardThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BaseboardThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BaseboardThk === value) return;
    this.#mod_BaseboardThk = value;
  }

  mod_BaseboardThk_matrix?: IMatrix_mod_BaseboardThk;
  #mod_BaseboardColor?: string;
  get mod_BaseboardColor(): string | undefined { return this.#mod_BaseboardColor }
  set mod_BaseboardColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BaseboardColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BaseboardColor === value) return;
    this.#mod_BaseboardColor = value;
  }

  mod_BaseboardColor_matrix?: IMatrix_mod_BaseboardColor;
  #mod_BaseboardEdgeColor?: string;
  get mod_BaseboardEdgeColor(): string | undefined { return this.#mod_BaseboardEdgeColor }
  set mod_BaseboardEdgeColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BaseboardEdgeColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BaseboardEdgeColor === value) return;
    this.#mod_BaseboardEdgeColor = value;
  }

  mod_BaseboardEdgeColor_matrix?: IMatrix_mod_BaseboardEdgeColor;
  #mod_BaseboardEdgeBackColor?: string;
  get mod_BaseboardEdgeBackColor(): string | undefined { return this.#mod_BaseboardEdgeBackColor }
  set mod_BaseboardEdgeBackColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BaseboardEdgeBackColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BaseboardEdgeBackColor === value) return;
    this.#mod_BaseboardEdgeBackColor = value;
  }

  mod_BaseboardEdgeBackColor_matrix?: IMatrix_mod_BaseboardEdgeBackColor;
  #mod_BaseboardEdgeFrontColor?: string;
  get mod_BaseboardEdgeFrontColor(): string | undefined { return this.#mod_BaseboardEdgeFrontColor }
  set mod_BaseboardEdgeFrontColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BaseboardEdgeFrontColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BaseboardEdgeFrontColor === value) return;
    this.#mod_BaseboardEdgeFrontColor = value;
  }

  mod_BaseboardEdgeFrontColor_matrix?: IMatrix_mod_BaseboardEdgeFrontColor;
  #mod_BaseboardProgram?: string;
  get mod_BaseboardProgram(): string | undefined { return this.#mod_BaseboardProgram }
  set mod_BaseboardProgram(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BaseboardProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BaseboardProgram === value) return;
    this.#mod_BaseboardProgram = value;
  }

  mod_BaseboardProgram_matrix?: IMatrix_mod_BaseboardProgram;
  #mod_CarcaseProgram?: string;
  get mod_CarcaseProgram(): string | undefined { return this.#mod_CarcaseProgram }
  set mod_CarcaseProgram(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseProgram === value) return;
    this.#mod_CarcaseProgram = value;
  }

  mod_CarcaseProgram_matrix?: IMatrix_mod_CarcaseProgram;
  override getAttributes(): Map<string, any> {
    let res = new Map<string, any>();
    res.set('mod_PlinthAreaDesign', this.mod_PlinthAreaDesign);
    res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
    res.set('mod_PlinthAreaVisLeft', this.mod_PlinthAreaVisLeft);
    res.set('mod_PlinthAreaVisRight', this.mod_PlinthAreaVisRight);
    res.set('mod_PlinthAreaPosLogic', this.mod_PlinthAreaPosLogic);
    res.set('mod_PlinthAreaPosLeftMatrix', this.mod_PlinthAreaPosLeftMatrix);
    res.set('mod_PlinthAreaPosRightMatrix', this.mod_PlinthAreaPosRightMatrix);
    res.set('mod_PlinthAreaPosFrontMatrix', this.mod_PlinthAreaPosFrontMatrix);
    res.set('mod_PlinthAreaPosBackMatrix', this.mod_PlinthAreaPosBackMatrix);
    res.set('mod_PlinthAreaElementColor', this.mod_PlinthAreaElementColor);
    res.set('mod_PlinthAreaExtraItem', this.mod_PlinthAreaExtraItem);
    res.set('mod_BaseboardDepthLogic', this.mod_BaseboardDepthLogic);
    res.set('mod_BaseboardOverdimensionBack', this.mod_BaseboardOverdimensionBack);
    res.set('mod_BaseboardOverdimensionLeft', this.mod_BaseboardOverdimensionLeft);
    res.set('mod_BaseboardOverdimensionRight', this.mod_BaseboardOverdimensionRight);
    res.set('mod_BaseboardSplitLogic', this.mod_BaseboardSplitLogic);
    res.set('mod_CarcaseColor', this.mod_CarcaseColor);
    res.set('mod_CarcaseEdgeColor', this.mod_CarcaseEdgeColor);
    res.set('mod_CarcaseEdgeFrontColor', this.mod_CarcaseEdgeFrontColor);
    res.set('mod_CarcaseEdgeBackColor', this.mod_CarcaseEdgeBackColor);
    res.set('mod_LengthList', JSON.stringify(this.mod_LengthList));
    res.set('mod_ToekickColor', this.mod_ToekickColor);
    res.set('mod_ToekickConnectionOverhang', this.mod_ToekickConnectionOverhang);
    res.set('mod_ToekickConnectionSequence', this.mod_ToekickConnectionSequence);
    res.set('mod_ToekickId', this.mod_ToekickId);
    res.set('mod_ToekickProgram', this.mod_ToekickProgram);
    res.set('mod_ToekickReductionTop', this.mod_ToekickReductionTop);
    res.set('mod_ToekickSidepanelOverdimensionBtm', this.mod_ToekickSidepanelOverdimensionBtm);
    res.set('mod_ToekickSidepanelTransitionType', this.mod_ToekickSidepanelTransitionType);
    res.set('mod_ToekickThk', this.mod_ToekickThk);
    res.set('mod_BaseboardThk', this.mod_BaseboardThk);
    res.set('mod_BaseboardColor', this.mod_BaseboardColor);
    res.set('mod_BaseboardEdgeColor', this.mod_BaseboardEdgeColor);
    res.set('mod_BaseboardEdgeBackColor', this.mod_BaseboardEdgeBackColor);
    res.set('mod_BaseboardEdgeFrontColor', this.mod_BaseboardEdgeFrontColor);
    res.set('mod_BaseboardProgram', this.mod_BaseboardProgram);
    res.set('mod_CarcaseProgram', this.mod_CarcaseProgram);
    return res;
  }
  override getCheckAttributes(): Map<string, number | string | boolean | undefined> | undefined {
    const res = new Map<string, number | string | boolean | undefined>();
    res.set('mod_PlinthAreaDesign', this.mod_PlinthAreaDesign);
    res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
    res.set('mod_CarcaseColor:GrainGroupId', this.mod_CarcaseColor_matrix?.GrainGroupId);
    res.set('mod_CarcaseColor', this.mod_CarcaseColor);
    res.set('mod_ToekickColor:GrainGroupId', this.mod_ToekickColor_matrix?.GrainGroupId);
    res.set('mod_ToekickColor', this.mod_ToekickColor);
    res.set('mod_ToekickProgram:GrainGroupId', this.mod_ToekickProgram_matrix?.GrainGroupId);
    res.set('mod_ToekickProgram', this.mod_ToekickProgram);
    res.set('mod_CarcaseProgram:GrainGroupId', this.mod_CarcaseProgram_matrix?.GrainGroupId);
    res.set('mod_CarcaseProgram', this.mod_CarcaseProgram);
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
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaDesign');
      const val = _toString(json['attributes']['mod_PlinthAreaDesign'], 'mod_PlinthAreaDesign');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaDesign = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaHeight');
      const val = _toFloat(json['attributes']['mod_PlinthAreaHeight'], 'mod_PlinthAreaHeight');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaHeight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaVisLeft');
      const val = _toBoolean(json['attributes']['mod_PlinthAreaVisLeft'], 'mod_PlinthAreaVisLeft');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaVisLeft = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaVisRight');
      const val = _toBoolean(json['attributes']['mod_PlinthAreaVisRight'], 'mod_PlinthAreaVisRight');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaVisRight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosLogic');
      const val = _toString(json['attributes']['mod_PlinthAreaPosLogic'], 'mod_PlinthAreaPosLogic');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaPosLogic = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosLeftMatrix');
      const val = _toString(json['attributes']['mod_PlinthAreaPosLeftMatrix'], 'mod_PlinthAreaPosLeftMatrix');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaPosLeftMatrix = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosRightMatrix');
      const val = _toString(json['attributes']['mod_PlinthAreaPosRightMatrix'], 'mod_PlinthAreaPosRightMatrix');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaPosRightMatrix = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosFrontMatrix');
      const val = _toString(json['attributes']['mod_PlinthAreaPosFrontMatrix'], 'mod_PlinthAreaPosFrontMatrix');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaPosFrontMatrix = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosBackMatrix');
      const val = _toString(json['attributes']['mod_PlinthAreaPosBackMatrix'], 'mod_PlinthAreaPosBackMatrix');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaPosBackMatrix = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaElementColor');
      const val = _toString(json['attributes']['mod_PlinthAreaElementColor'], 'mod_PlinthAreaElementColor');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaElementColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaExtraItem');
      const val = _toString(json['attributes']['mod_PlinthAreaExtraItem'], 'mod_PlinthAreaExtraItem');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaExtraItem = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BaseboardDepthLogic');
      const val = _toString(json['attributes']['mod_BaseboardDepthLogic'], 'mod_BaseboardDepthLogic');
      internal_leaveValidateVariant();
      this.mod_BaseboardDepthLogic = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BaseboardOverdimensionBack');
      const val = _toFloat(json['attributes']['mod_BaseboardOverdimensionBack'], 'mod_BaseboardOverdimensionBack');
      internal_leaveValidateVariant();
      this.mod_BaseboardOverdimensionBack = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BaseboardOverdimensionLeft');
      const val = _toFloat(json['attributes']['mod_BaseboardOverdimensionLeft'], 'mod_BaseboardOverdimensionLeft');
      internal_leaveValidateVariant();
      this.mod_BaseboardOverdimensionLeft = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BaseboardOverdimensionRight');
      const val = _toFloat(json['attributes']['mod_BaseboardOverdimensionRight'], 'mod_BaseboardOverdimensionRight');
      internal_leaveValidateVariant();
      this.mod_BaseboardOverdimensionRight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BaseboardSplitLogic');
      const val = _toString(json['attributes']['mod_BaseboardSplitLogic'], 'mod_BaseboardSplitLogic');
      internal_leaveValidateVariant();
      this.mod_BaseboardSplitLogic = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseColor');
      const val = _toString(json['attributes']['mod_CarcaseColor'], 'mod_CarcaseColor');
      internal_leaveValidateVariant();
      this.mod_CarcaseColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseEdgeColor');
      const val = _toString(json['attributes']['mod_CarcaseEdgeColor'], 'mod_CarcaseEdgeColor');
      internal_leaveValidateVariant();
      this.mod_CarcaseEdgeColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseEdgeFrontColor');
      const val = _toString(json['attributes']['mod_CarcaseEdgeFrontColor'], 'mod_CarcaseEdgeFrontColor');
      internal_leaveValidateVariant();
      this.mod_CarcaseEdgeFrontColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseEdgeBackColor');
      const val = _toString(json['attributes']['mod_CarcaseEdgeBackColor'], 'mod_CarcaseEdgeBackColor');
      internal_leaveValidateVariant();
      this.mod_CarcaseEdgeBackColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ToekickColor');
      const val = _toString(json['attributes']['mod_ToekickColor'], 'mod_ToekickColor');
      internal_leaveValidateVariant();
      this.mod_ToekickColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ToekickConnectionOverhang');
      const val = _toFloat(json['attributes']['mod_ToekickConnectionOverhang'], 'mod_ToekickConnectionOverhang');
      internal_leaveValidateVariant();
      this.mod_ToekickConnectionOverhang = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ToekickConnectionSequence');
      const val = _toString(json['attributes']['mod_ToekickConnectionSequence'], 'mod_ToekickConnectionSequence');
      internal_leaveValidateVariant();
      this.mod_ToekickConnectionSequence = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ToekickId');
      const val = _toString(json['attributes']['mod_ToekickId'], 'mod_ToekickId');
      internal_leaveValidateVariant();
      this.mod_ToekickId = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ToekickProgram');
      const val = _toString(json['attributes']['mod_ToekickProgram'], 'mod_ToekickProgram');
      internal_leaveValidateVariant();
      this.mod_ToekickProgram = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ToekickReductionTop');
      const val = _toFloat(json['attributes']['mod_ToekickReductionTop'], 'mod_ToekickReductionTop');
      internal_leaveValidateVariant();
      this.mod_ToekickReductionTop = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ToekickSidepanelOverdimensionBtm');
      const val = _toFloat(json['attributes']['mod_ToekickSidepanelOverdimensionBtm'], 'mod_ToekickSidepanelOverdimensionBtm');
      internal_leaveValidateVariant();
      this.mod_ToekickSidepanelOverdimensionBtm = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ToekickSidepanelTransitionType');
      const val = _toString(json['attributes']['mod_ToekickSidepanelTransitionType'], 'mod_ToekickSidepanelTransitionType');
      internal_leaveValidateVariant();
      this.mod_ToekickSidepanelTransitionType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ToekickThk');
      const val = _toFloat(json['attributes']['mod_ToekickThk'], 'mod_ToekickThk');
      internal_leaveValidateVariant();
      this.mod_ToekickThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BaseboardThk');
      const val = _toFloat(json['attributes']['mod_BaseboardThk'], 'mod_BaseboardThk');
      internal_leaveValidateVariant();
      this.mod_BaseboardThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BaseboardColor');
      const val = _toString(json['attributes']['mod_BaseboardColor'], 'mod_BaseboardColor');
      internal_leaveValidateVariant();
      this.mod_BaseboardColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BaseboardEdgeColor');
      const val = _toString(json['attributes']['mod_BaseboardEdgeColor'], 'mod_BaseboardEdgeColor');
      internal_leaveValidateVariant();
      this.mod_BaseboardEdgeColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BaseboardEdgeBackColor');
      const val = _toString(json['attributes']['mod_BaseboardEdgeBackColor'], 'mod_BaseboardEdgeBackColor');
      internal_leaveValidateVariant();
      this.mod_BaseboardEdgeBackColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BaseboardEdgeFrontColor');
      const val = _toString(json['attributes']['mod_BaseboardEdgeFrontColor'], 'mod_BaseboardEdgeFrontColor');
      internal_leaveValidateVariant();
      this.mod_BaseboardEdgeFrontColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_BaseboardProgram');
      const val = _toString(json['attributes']['mod_BaseboardProgram'], 'mod_BaseboardProgram');
      internal_leaveValidateVariant();
      this.mod_BaseboardProgram = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseProgram');
      const val = _toString(json['attributes']['mod_CarcaseProgram'], 'mod_CarcaseProgram');
      internal_leaveValidateVariant();
      this.mod_CarcaseProgram = val;
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
    if (this.mod_PlinthAreaDesign === undefined) {
      this.mod_PlinthAreaDesign = "90";
    }
    if (this.mod_PlinthAreaHeight === undefined) {
      this.mod_PlinthAreaHeight = 100;
    }
    if (this.mod_PlinthAreaVisLeft === undefined) {
      this.mod_PlinthAreaVisLeft = true;
    }
    if (this.mod_PlinthAreaVisRight === undefined) {
      this.mod_PlinthAreaVisRight = true;
    }
    if (this.mod_PlinthAreaPosLogic === undefined) {
      this.mod_PlinthAreaPosLogic = "Library";
    }
    if (this.mod_PlinthAreaPosLeftMatrix === undefined) {
      this.mod_PlinthAreaPosLeftMatrix = "LCF";
    }
    if (this.mod_PlinthAreaPosRightMatrix === undefined) {
      this.mod_PlinthAreaPosRightMatrix = "RCF";
    }
    if (this.mod_PlinthAreaPosFrontMatrix === undefined) {
      this.mod_PlinthAreaPosFrontMatrix = "FCF";
    }
    if (this.mod_PlinthAreaPosBackMatrix === undefined) {
      this.mod_PlinthAreaPosBackMatrix = "BCF";
    }
    if (this.mod_PlinthAreaElementColor === undefined) {
      this.mod_PlinthAreaElementColor = "StainlessSteel";
    }
    if (this.mod_PlinthAreaExtraItem === undefined) {
      this.mod_PlinthAreaExtraItem = "None";
    }
    if (this.mod_BaseboardDepthLogic === undefined) {
      this.mod_BaseboardDepthLogic = "FollowsMinDepth";
    }
    if (this.mod_BaseboardOverdimensionBack === undefined) {
      this.mod_BaseboardOverdimensionBack = 0;
    }
    if (this.mod_BaseboardOverdimensionLeft === undefined) {
      this.mod_BaseboardOverdimensionLeft = 0;
    }
    if (this.mod_BaseboardOverdimensionRight === undefined) {
      this.mod_BaseboardOverdimensionRight = 0;
    }
    if (this.mod_BaseboardSplitLogic === undefined) {
      this.mod_BaseboardSplitLogic = "BetweenCabinets";
    }
    if (this.mod_CarcaseColor === undefined) {
      this.mod_CarcaseColor = "316";
    }
    if (this.mod_ToekickColor === undefined) {
      this.mod_ToekickColor = "316";
    }
    if (this.mod_ToekickConnectionOverhang === undefined) {
      this.mod_ToekickConnectionOverhang = 0;
    }
    if (this.mod_ToekickConnectionSequence === undefined) {
      this.mod_ToekickConnectionSequence = "0";
    }
    if (this.mod_ToekickId === undefined) {
      this.mod_ToekickId = "0";
    }
    if (this.mod_ToekickProgram === undefined) {
      this.mod_ToekickProgram = "Nature";
    }
    if (this.mod_ToekickReductionTop === undefined) {
      this.mod_ToekickReductionTop = 10;
    }
    if (this.mod_ToekickSidepanelOverdimensionBtm === undefined) {
      this.mod_ToekickSidepanelOverdimensionBtm = 0;
    }
    if (this.mod_ToekickSidepanelTransitionType === undefined) {
      this.mod_ToekickSidepanelTransitionType = "FrontLong";
    }
    if (this.mod_BaseboardThk === undefined) {
      this.mod_BaseboardThk = 19;
    }
    if (this.mod_CarcaseProgram === undefined) {
      this.mod_CarcaseProgram = "Classic";
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    this.#dataCompletionSetDefaultScripts_globalVars();
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
      if (this.mod_CarcaseEdgeColor === undefined) {
        // ###############################################################
        // ####################### CUSTOM SCRIPTS ########################
        // ###############################################################
        // CUSTOMSCRIPT_mr_PlinthAreaBaseboard_mod_CarcaseEdgeColor_SETDEFAULT
        this.mod_CarcaseEdgeColor = this.mod_CarcaseColor;
        // ###############################################################
        // ################### END CUSTOM SCRIPTS ########################
        // ###############################################################
      }
      if (this.mod_CarcaseEdgeFrontColor === undefined) {
        // ###############################################################
        // ####################### CUSTOM SCRIPTS ########################
        // ###############################################################
        // CUSTOMSCRIPT_mr_PlinthAreaBaseboard_mod_CarcaseEdgeFrontColor_SETDEFAULT
        this.mod_CarcaseEdgeFrontColor = this.mod_CarcaseColor;
        // ###############################################################
        // ################### END CUSTOM SCRIPTS ########################
        // ###############################################################
      }
      if (this.mod_CarcaseEdgeBackColor === undefined) {
        // ###############################################################
        // ####################### CUSTOM SCRIPTS ########################
        // ###############################################################
        // CUSTOMSCRIPT_mr_PlinthAreaBaseboard_mod_CarcaseEdgeBackColor_SETDEFAULT
        this.mod_CarcaseEdgeBackColor = this.mod_CarcaseColor;
        // ###############################################################
        // ################### END CUSTOM SCRIPTS ########################
        // ###############################################################
      }
      if (this.mod_BaseboardColor === undefined) {
        // ###############################################################
        // ####################### CUSTOM SCRIPTS ########################
        // ###############################################################
        // CUSTOMSCRIPT_mr_PlinthAreaBaseboard_mod_BaseboardColor_SETDEFAULT
        this.mod_BaseboardColor = this.mod_CarcaseColor;
        // ###############################################################
        // ################### END CUSTOM SCRIPTS ########################
        // ###############################################################
      }
      if (this.mod_BaseboardEdgeColor === undefined) {
        // ###############################################################
        // ####################### CUSTOM SCRIPTS ########################
        // ###############################################################
        // CUSTOMSCRIPT_mr_PlinthAreaBaseboard_mod_BaseboardEdgeColor_SETDEFAULT
        this.mod_BaseboardEdgeColor = this.mod_CarcaseColor;
        // ###############################################################
        // ################### END CUSTOM SCRIPTS ########################
        // ###############################################################
      }
      if (this.mod_BaseboardEdgeBackColor === undefined) {
        // ###############################################################
        // ####################### CUSTOM SCRIPTS ########################
        // ###############################################################
        // CUSTOMSCRIPT_mr_PlinthAreaBaseboard_mod_BaseboardEdgeBackColor_SETDEFAULT
        this.mod_BaseboardEdgeBackColor = this.mod_CarcaseColor;
        // ###############################################################
        // ################### END CUSTOM SCRIPTS ########################
        // ###############################################################
      }
      if (this.mod_BaseboardEdgeFrontColor === undefined) {
        // ###############################################################
        // ####################### CUSTOM SCRIPTS ########################
        // ###############################################################
        // CUSTOMSCRIPT_mr_PlinthAreaBaseboard_mod_BaseboardEdgeFrontColor_SETDEFAULT
        this.mod_BaseboardEdgeFrontColor = this.mod_CarcaseColor;
        // ###############################################################
        // ################### END CUSTOM SCRIPTS ########################
        // ###############################################################
      }
      if (this.mod_BaseboardProgram === undefined) {
        // ###############################################################
        // ####################### CUSTOM SCRIPTS ########################
        // ###############################################################
        // CUSTOMSCRIPT_mr_PlinthAreaBaseboard_mod_BaseboardProgram_SETDEFAULT
        this.mod_BaseboardProgram = this.mod_CarcaseProgram;
        // ###############################################################
        // ################### END CUSTOM SCRIPTS ########################
        // ###############################################################
      }
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
    if (this.mod_ToekickThk === undefined) {
      this.mod_ToekickThk = this.g.basic_ToekickThk;
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
  #manufacturerDataCompletionInternal = mr_PlinthAreaBaseboard_manufacturerDataCompletion;
  override afterDataCompletion(): void {
    if (this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mr_PlinthAreaBaseboard_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mr_PlinthAreaBaseboard {
    this.afterDataCompletion();
    const adc = new OD_M_mr_PlinthAreaBaseboard_NonNull(this);
    return adc;
  }

  addOD_M_mc_Toekick(index?: number): dc_mc_Toekick {
    var m = new OD_M_mc_Toekick(this);
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
  addOD_M_mc_Leg01(index?: number): dc_mc_Leg01 {
    var m = new OD_M_mc_Leg01(this);
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
  addOD_M_mc_Baseboard01(index?: number): dc_mc_Baseboard01 {
    var m = new OD_M_mc_Baseboard01(this);
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
    this.mod_PlinthAreaDesign_matrix = VariantValidation.mod_PlinthAreaDesign(this, this.mod_PlinthAreaDesign);
    this.mod_PlinthAreaHeight_matrix = VariantValidation.mod_PlinthAreaHeight(this, this.mod_PlinthAreaHeight);
    this.mod_PlinthAreaVisLeft_matrix = VariantValidation.mod_PlinthAreaVisLeft(this, this.mod_PlinthAreaVisLeft);
    this.mod_PlinthAreaVisRight_matrix = VariantValidation.mod_PlinthAreaVisRight(this, this.mod_PlinthAreaVisRight);
    this.mod_PlinthAreaPosLogic_matrix = VariantValidation.mod_PlinthAreaPosLogic(this, this.mod_PlinthAreaPosLogic);
    this.mod_PlinthAreaPosLeftMatrix_matrix = VariantValidation.mod_PlinthAreaPosLeftMatrix(this, this.mod_PlinthAreaPosLeftMatrix);
    this.mod_PlinthAreaPosRightMatrix_matrix = VariantValidation.mod_PlinthAreaPosRightMatrix(this, this.mod_PlinthAreaPosRightMatrix);
    this.mod_PlinthAreaPosFrontMatrix_matrix = VariantValidation.mod_PlinthAreaPosFrontMatrix(this, this.mod_PlinthAreaPosFrontMatrix);
    this.mod_PlinthAreaPosBackMatrix_matrix = VariantValidation.mod_PlinthAreaPosBackMatrix(this, this.mod_PlinthAreaPosBackMatrix);
    this.mod_PlinthAreaElementColor_matrix = VariantValidation.mod_PlinthAreaElementColor(this, this.mod_PlinthAreaElementColor);
    this.mod_PlinthAreaExtraItem_matrix = VariantValidation.mod_PlinthAreaExtraItem(this, this.mod_PlinthAreaExtraItem);
    this.mod_BaseboardDepthLogic_matrix = VariantValidation.mod_BaseboardDepthLogic(this, this.mod_BaseboardDepthLogic);
    this.mod_BaseboardOverdimensionBack_matrix = VariantValidation.mod_BaseboardOverdimensionBack(this, this.mod_BaseboardOverdimensionBack);
    this.mod_BaseboardOverdimensionLeft_matrix = VariantValidation.mod_BaseboardOverdimensionLeft(this, this.mod_BaseboardOverdimensionLeft);
    this.mod_BaseboardOverdimensionRight_matrix = VariantValidation.mod_BaseboardOverdimensionRight(this, this.mod_BaseboardOverdimensionRight);
    this.mod_BaseboardSplitLogic_matrix = VariantValidation.mod_BaseboardSplitLogic(this, this.mod_BaseboardSplitLogic);
    this.mod_CarcaseColor_matrix = VariantValidation.mod_CarcaseColor(this, this.mod_CarcaseColor);
    this.mod_CarcaseEdgeColor_matrix = VariantValidation.mod_CarcaseEdgeColor(this, this.mod_CarcaseEdgeColor);
    this.mod_CarcaseEdgeFrontColor_matrix = VariantValidation.mod_CarcaseEdgeFrontColor(this, this.mod_CarcaseEdgeFrontColor);
    this.mod_CarcaseEdgeBackColor_matrix = VariantValidation.mod_CarcaseEdgeBackColor(this, this.mod_CarcaseEdgeBackColor);
    this.mod_ToekickColor_matrix = VariantValidation.mod_ToekickColor(this, this.mod_ToekickColor);
    this.mod_ToekickConnectionOverhang_matrix = VariantValidation.mod_ToekickConnectionOverhang(this, this.mod_ToekickConnectionOverhang);
    this.mod_ToekickConnectionSequence_matrix = VariantValidation.mod_ToekickConnectionSequence(this, this.mod_ToekickConnectionSequence);
    this.mod_ToekickId_matrix = VariantValidation.mod_ToekickId(this, this.mod_ToekickId);
    this.mod_ToekickProgram_matrix = VariantValidation.mod_ToekickProgram(this, this.mod_ToekickProgram);
    this.mod_ToekickReductionTop_matrix = VariantValidation.mod_ToekickReductionTop(this, this.mod_ToekickReductionTop);
    this.mod_ToekickSidepanelOverdimensionBtm_matrix = VariantValidation.mod_ToekickSidepanelOverdimensionBtm(this, this.mod_ToekickSidepanelOverdimensionBtm);
    this.mod_ToekickSidepanelTransitionType_matrix = VariantValidation.mod_ToekickSidepanelTransitionType(this, this.mod_ToekickSidepanelTransitionType);
    this.mod_ToekickThk_matrix = VariantValidation.mod_ToekickThk(this, this.mod_ToekickThk);
    this.mod_BaseboardThk_matrix = VariantValidation.mod_BaseboardThk(this, this.mod_BaseboardThk);
    this.mod_BaseboardColor_matrix = VariantValidation.mod_BaseboardColor(this, this.mod_BaseboardColor);
    this.mod_BaseboardEdgeColor_matrix = VariantValidation.mod_BaseboardEdgeColor(this, this.mod_BaseboardEdgeColor);
    this.mod_BaseboardEdgeBackColor_matrix = VariantValidation.mod_BaseboardEdgeBackColor(this, this.mod_BaseboardEdgeBackColor);
    this.mod_BaseboardEdgeFrontColor_matrix = VariantValidation.mod_BaseboardEdgeFrontColor(this, this.mod_BaseboardEdgeFrontColor);
    this.mod_BaseboardProgram_matrix = VariantValidation.mod_BaseboardProgram(this, this.mod_BaseboardProgram);
    this.mod_CarcaseProgram_matrix = VariantValidation.mod_CarcaseProgram(this, this.mod_CarcaseProgram);
  }

  override calculateContainerModules(): void {
    let ccm = new OD_M_mr_PlinthAreaBaseboard_NonNull(this);
    ccm.calculateContainerModules();
    this.m.forEach(subMod => subMod.calculateContainerModules());
  }

  addpart_BaseboardGroup(x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): IP_part_BaseboardGroup_PartVarsWritable {
    var c = new P_part_BaseboardGroup(this._selfNonNull, x, y, z, dimx, dimy, dimz, undefined);
    this.p.push(c);
    return c;
  }

  override createBuildPlan(): void {
    var cbp = new OD_M_mr_PlinthAreaBaseboard_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mr_PlinthAreaBaseboard_NonNull implements cbp_mr_PlinthAreaBaseboard, adc_mr_PlinthAreaBaseboard, ccm_mr_PlinthAreaBaseboard, IPartParentsNonNull_mc_PlinthArea01_mr_PlinthAreaBaseboard, IPartParentsNonNull_mr_PlinthAreaBaseboard_mr_Toekick, IPartParentsNonNull_mr_PlinthAreaBaseboard {
  constructor(parent: OD_M_mr_PlinthAreaBaseboard) {
    this.#internalParent = parent;
  }
  #internalParent: OD_M_mr_PlinthAreaBaseboard;
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
  #createBuildPlanInternal = mr_PlinthAreaBaseboard_createBuildPlan;
  afterDataCompletion(): void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mr_PlinthAreaBaseboard_afterDataCompletion;
  calculateContainerModules(): void {
    this.#calculateContainerModulesInternal();
  }
  #calculateContainerModulesInternal = mr_PlinthAreaBaseboard_calculateContainerModules;
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
  addpart_BaseboardGroup(x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): IP_part_BaseboardGroup_PartVarsWritable {
    return this.#internalParent.addpart_BaseboardGroup(x, y, z, dimx, dimy, dimz);
  }
  get mod_PlinthAreaDesign(): string {
    return this.#internalParent.mod_PlinthAreaDesign!;
  }
  get mod_PlinthAreaDesign_matrix(): IMatrix_mod_PlinthAreaDesign {
    return this.#internalParent.mod_PlinthAreaDesign_matrix!;
  }
  get mod_PlinthAreaHeight(): number {
    return this.#internalParent.mod_PlinthAreaHeight!;
  }
  get mod_PlinthAreaVisLeft(): boolean {
    return this.#internalParent.mod_PlinthAreaVisLeft!;
  }
  get mod_PlinthAreaVisRight(): boolean {
    return this.#internalParent.mod_PlinthAreaVisRight!;
  }
  get mod_PlinthAreaPosLogic(): string {
    return this.#internalParent.mod_PlinthAreaPosLogic!;
  }
  get mod_PlinthAreaPosLeftMatrix(): string {
    return this.#internalParent.mod_PlinthAreaPosLeftMatrix!;
  }
  get mod_PlinthAreaPosRightMatrix(): string {
    return this.#internalParent.mod_PlinthAreaPosRightMatrix!;
  }
  get mod_PlinthAreaPosFrontMatrix(): string {
    return this.#internalParent.mod_PlinthAreaPosFrontMatrix!;
  }
  get mod_PlinthAreaPosBackMatrix(): string {
    return this.#internalParent.mod_PlinthAreaPosBackMatrix!;
  }
  get mod_PlinthAreaElementColor(): string {
    return this.#internalParent.mod_PlinthAreaElementColor!;
  }
  get mod_PlinthAreaExtraItem(): string {
    return this.#internalParent.mod_PlinthAreaExtraItem!;
  }
  get mod_PlinthAreaExtraItem_matrix(): IMatrix_mod_PlinthAreaExtraItem {
    return this.#internalParent.mod_PlinthAreaExtraItem_matrix!;
  }
  get mod_BaseboardDepthLogic(): string {
    return this.#internalParent.mod_BaseboardDepthLogic!;
  }
  get mod_BaseboardOverdimensionBack(): number {
    return this.#internalParent.mod_BaseboardOverdimensionBack!;
  }
  get mod_BaseboardOverdimensionLeft(): number {
    return this.#internalParent.mod_BaseboardOverdimensionLeft!;
  }
  get mod_BaseboardOverdimensionRight(): number {
    return this.#internalParent.mod_BaseboardOverdimensionRight!;
  }
  get mod_BaseboardSplitLogic(): string {
    return this.#internalParent.mod_BaseboardSplitLogic!;
  }
  get mod_CarcaseColor(): string {
    return this.#internalParent.mod_CarcaseColor!;
  }
  get mod_CarcaseColor_matrix(): IMatrix_mod_CarcaseColor {
    return this.#internalParent.mod_CarcaseColor_matrix!;
  }
  get mod_CarcaseEdgeColor(): string {
    return this.#internalParent.mod_CarcaseEdgeColor!;
  }
  get mod_CarcaseEdgeFrontColor(): string {
    return this.#internalParent.mod_CarcaseEdgeFrontColor!;
  }
  get mod_CarcaseEdgeBackColor(): string {
    return this.#internalParent.mod_CarcaseEdgeBackColor!;
  }
  get mod_LengthList(): number[] {
    return this.#internalParent.mod_LengthList!;
  }
  get mod_ToekickColor(): string {
    return this.#internalParent.mod_ToekickColor!;
  }
  get mod_ToekickColor_matrix(): IMatrix_mod_ToekickColor {
    return this.#internalParent.mod_ToekickColor_matrix!;
  }
  get mod_ToekickConnectionOverhang(): number {
    return this.#internalParent.mod_ToekickConnectionOverhang!;
  }
  get mod_ToekickConnectionSequence(): string {
    return this.#internalParent.mod_ToekickConnectionSequence!;
  }
  get mod_ToekickId(): string {
    return this.#internalParent.mod_ToekickId!;
  }
  get mod_ToekickProgram(): string {
    return this.#internalParent.mod_ToekickProgram!;
  }
  get mod_ToekickProgram_matrix(): IMatrix_mod_ToekickProgram {
    return this.#internalParent.mod_ToekickProgram_matrix!;
  }
  get mod_ToekickReductionTop(): number {
    return this.#internalParent.mod_ToekickReductionTop!;
  }
  get mod_ToekickSidepanelOverdimensionBtm(): number {
    return this.#internalParent.mod_ToekickSidepanelOverdimensionBtm!;
  }
  get mod_ToekickSidepanelTransitionType(): string {
    return this.#internalParent.mod_ToekickSidepanelTransitionType!;
  }
  get mod_ToekickThk(): number {
    return this.#internalParent.mod_ToekickThk!;
  }
  get mod_BaseboardThk(): number {
    return this.#internalParent.mod_BaseboardThk!;
  }
  get mod_BaseboardColor(): string {
    return this.#internalParent.mod_BaseboardColor!;
  }
  get mod_BaseboardColor_matrix(): IMatrix_mod_BaseboardColor {
    return this.#internalParent.mod_BaseboardColor_matrix!;
  }
  get mod_BaseboardEdgeColor(): string {
    return this.#internalParent.mod_BaseboardEdgeColor!;
  }
  get mod_BaseboardEdgeBackColor(): string {
    return this.#internalParent.mod_BaseboardEdgeBackColor!;
  }
  get mod_BaseboardEdgeFrontColor(): string {
    return this.#internalParent.mod_BaseboardEdgeFrontColor!;
  }
  get mod_BaseboardProgram(): string {
    return this.#internalParent.mod_BaseboardProgram!;
  }
  get mod_BaseboardProgram_matrix(): IMatrix_mod_BaseboardProgram {
    return this.#internalParent.mod_BaseboardProgram_matrix!;
  }
  get mod_CarcaseProgram(): string {
    return this.#internalParent.mod_CarcaseProgram!;
  }
  get mod_CarcaseProgram_matrix(): IMatrix_mod_CarcaseProgram {
    return this.#internalParent.mod_CarcaseProgram_matrix!;
  }
  addOD_M_mc_Toekick(index?: number): dc_mc_Toekick {
    return this.#internalParent.addOD_M_mc_Toekick(index);
  }
  addOD_M_mc_Leg01(index?: number): dc_mc_Leg01 {
    return this.#internalParent.addOD_M_mc_Leg01(index);
  }
  addOD_M_mc_Baseboard01(index?: number): dc_mc_Baseboard01 {
    return this.#internalParent.addOD_M_mc_Baseboard01(index);
  }
}

