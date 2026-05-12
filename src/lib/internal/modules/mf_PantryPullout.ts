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
import { IModParents_mr_StorageunitSingle } from '../mod-interfaces'
import { OD_M_mc_PantryPullout01, dc_mc_PantryPullout01 } from './mc_PantryPullout01'
import { IModuleNonNull_mf_PantryPullout, IModParents_mf_PantryPullout, IPartParentsNonNull_mf_PantryPullout } from '../mod-interfaces'
import { IModVar_mod_CarcaseSpaceDimension, IModVarNonNull_mod_CarcaseSpaceDimension, IModVar_mod_BackwallPos, IModVarNonNull_mod_BackwallPos, IModVar_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseDepth, IModVar_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseHeight, IModVar_mod_CarcaseWidth, IModVarNonNull_mod_CarcaseWidth, IModVar_mod_CarcaseBackwallConstruction, IModVarNonNull_mod_CarcaseBackwallConstruction, IModVar_mod_CarcaseId, IModVarNonNull_mod_CarcaseId, IModVar_mod_FrontColor, IModVarNonNull_mod_FrontColor, IModVar_mod_FrontDesign, IModVarNonNull_mod_FrontDesign, IModVar_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapCarcase, IModVar_mod_FrontGapHor, IModVarNonNull_mod_FrontGapHor, IModVar_mod_FrontGapVert, IModVarNonNull_mod_FrontGapVert, IModVar_mod_FrontHeight, IModVarNonNull_mod_FrontHeight, IModVar_mod_FrontHeightSelection, IModVarNonNull_mod_FrontHeightSelection, IModVar_mod_FingergripTop, IModVarNonNull_mod_FingergripTop, IModVar_mod_FrontId, IModVarNonNull_mod_FrontId, IModVar_mod_FrontSplit, IModVarNonNull_mod_FrontSplit, IModVar_mod_FrontThk, IModVarNonNull_mod_FrontThk, IModVar_mod_FrontWidth, IModVarNonNull_mod_FrontWidth, IModVar_mod_HandleDrill, IModVarNonNull_mod_HandleDrill, IModVar_mod_HandleLine, IModVarNonNull_mod_HandleLine, IModVar_mod_HandlePosLogic, IModVarNonNull_mod_HandlePosLogic, IModVar_mod_FrontQtyElements, IModVarNonNull_mod_FrontQtyElements, IModVar_mod_ShelffixedType, IModVarNonNull_mod_ShelffixedType, IModVar_mod_FrontPosStart, IModVarNonNull_mod_FrontPosStart, IModVar_mod_FrontOversizeBtm, IModVarNonNull_mod_FrontOversizeBtm, IModVar_mod_FrontOversizeLeft, IModVarNonNull_mod_FrontOversizeLeft, IModVar_mod_FrontOversizeRight, IModVarNonNull_mod_FrontOversizeRight, IModVar_mod_FrontOversizeTop, IModVarNonNull_mod_FrontOversizeTop, IModVar_mod_FrontProgram, IModVarNonNull_mod_FrontProgram, IModVar_mod_FrontSplitType1, IModVarNonNull_mod_FrontSplitType1, IModVar_mod_FrontSplitType2, IModVarNonNull_mod_FrontSplitType2, IModVar_mod_HandleColor, IModVarNonNull_mod_HandleColor, IModVar_mod_HandleLength, IModVarNonNull_mod_HandleLength, IModVar_mod_HandleOffsetX, IModVarNonNull_mod_HandleOffsetX, IModVar_mod_HandleOffsetY, IModVarNonNull_mod_HandleOffsetY, IModVar_mod_HandlePosMatrix, IModVarNonNull_mod_HandlePosMatrix, IModVar_mod_HandlePosType, IModVarNonNull_mod_HandlePosType, IModVar_mod_HandlestripPos, IModVarNonNull_mod_HandlestripPos, IModVar_mod_HeightPosInsertion, IModVarNonNull_mod_HeightPosInsertion, IModVar_mod_PlinthAreaHeight, IModVarNonNull_mod_PlinthAreaHeight, IModVar_mod_ShelffixedBtm, IModVarNonNull_mod_ShelffixedBtm, IModVar_mod_ShelffixedPos, IModVarNonNull_mod_ShelffixedPos, IModVar_mod_ShelffixedOffsetFront, IModVarNonNull_mod_ShelffixedOffsetFront, IModVar_mod_ShelffixedThk, IModVarNonNull_mod_ShelffixedThk, IModVar_mod_ShelffixedOversizeFront, IModVarNonNull_mod_ShelffixedOversizeFront, IModVar_mod_ShelffixedOversizeBack, IModVarNonNull_mod_ShelffixedOversizeBack, IModVar_mod_HandleDesign, IModVarNonNull_mod_HandleDesign, IModVar_mod_Originpos, IModVarNonNull_mod_Originpos, IModVar_mod_ParentName, IModVarNonNull_mod_ParentName, IModVar_mod_ModuleName, IModVarNonNull_mod_ModuleName, IModVar_mod_FingergripBtmType, IModVarNonNull_mod_FingergripBtmType, IModVar_mod_FingergripTopType, IModVarNonNull_mod_FingergripTopType, IModVar_mod_ShelffixedTop, IModVarNonNull_mod_ShelffixedTop, IModVar_mod_VertDividerType, IModVarNonNull_mod_VertDividerType, IModVar_mod_SidepanelmiddleThk, IModVarNonNull_mod_SidepanelmiddleThk, IModVar_mod_FrameFillingType, IModVarNonNull_mod_FrameFillingType, IModVar_mod_FrameFillingColor, IModVarNonNull_mod_FrameFillingColor, IModVar_mod_DrawerOpeningDistance, IModVarNonNull_mod_DrawerOpeningDistance, IModVar_mod_FirstFront, IModVarNonNull_mod_FirstFront, IModVar_mod_LastFront, IModVarNonNull_mod_LastFront, IModVar_mod_PantryPulloutDesign, IModVarNonNull_mod_PantryPulloutDesign, IModVar_mod_PantryPulloutType, IModVarNonNull_mod_PantryPulloutType, IModVar_mod_PantryPulloutColor, IModVarNonNull_mod_PantryPulloutColor, IModVar_mod_FrontSplitDescriptor, IModVarNonNull_mod_FrontSplitDescriptor, IModVar_mod_HandlePosMatrixMultiple, IModVarNonNull_mod_HandlePosMatrixMultiple, IModVar_mod_HandleActivated, IModVarNonNull_mod_HandleActivated } from '../var-interfaces'
import { VariantValidation, IMatrix_mod_BackwallPos, IMatrix_mod_CarcaseDepth, IMatrix_mod_CarcaseHeight, IMatrix_mod_CarcaseWidth, IMatrix_mod_CarcaseBackwallConstruction, IMatrix_mod_CarcaseId, IMatrix_mod_FrontColor, IMatrix_mod_FrontDesign, IMatrix_mod_FrontGapCarcase, IMatrix_mod_FrontGapHor, IMatrix_mod_FrontGapVert, IMatrix_mod_FrontHeight, IMatrix_mod_FrontHeightSelection, IMatrix_mod_FingergripTop, IMatrix_mod_FrontId, IMatrix_mod_FrontSplit, IMatrix_mod_FrontThk, IMatrix_mod_FrontWidth, IMatrix_mod_HandleDrill, IMatrix_mod_HandleLine, IMatrix_mod_HandlePosLogic, IMatrix_mod_FrontQtyElements, IMatrix_mod_ShelffixedType, IMatrix_mod_FrontPosStart, IMatrix_mod_FrontOversizeBtm, IMatrix_mod_FrontOversizeLeft, IMatrix_mod_FrontOversizeRight, IMatrix_mod_FrontOversizeTop, IMatrix_mod_FrontProgram, IMatrix_mod_FrontSplitType1, IMatrix_mod_FrontSplitType2, IMatrix_mod_HandleColor, IMatrix_mod_HandleLength, IMatrix_mod_HandleOffsetX, IMatrix_mod_HandleOffsetY, IMatrix_mod_HandlePosMatrix, IMatrix_mod_HandlePosType, IMatrix_mod_HandlestripPos, IMatrix_mod_HeightPosInsertion, IMatrix_mod_PlinthAreaHeight, IMatrix_mod_ShelffixedBtm, IMatrix_mod_ShelffixedPos, IMatrix_mod_ShelffixedOffsetFront, IMatrix_mod_ShelffixedThk, IMatrix_mod_ShelffixedOversizeFront, IMatrix_mod_ShelffixedOversizeBack, IMatrix_mod_HandleDesign, IMatrix_mod_ParentName, IMatrix_mod_ModuleName, IMatrix_mod_FingergripBtmType, IMatrix_mod_FingergripTopType, IMatrix_mod_ShelffixedTop, IMatrix_mod_VertDividerType, IMatrix_mod_SidepanelmiddleThk, IMatrix_mod_FrameFillingType, IMatrix_mod_FrameFillingColor, IMatrix_mod_DrawerOpeningDistance, IMatrix_mod_FirstFront, IMatrix_mod_LastFront, IMatrix_mod_PantryPulloutDesign, IMatrix_mod_PantryPulloutType, IMatrix_mod_PantryPulloutColor, IMatrix_mod_FrontSplitDescriptor, IMatrix_mod_HandlePosMatrixMultiple, IMatrix_mod_HandleActivated } from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { mf_PantryPullout_createBuildPlan, mf_PantryPullout_afterDataCompletion, mf_PantryPullout_manufacturerDataCompletion, mf_PantryPullout_calculateContainerModules } from '../../modules/mf_PantryPullout';

export interface cbp_mf_PantryPullout extends IModBaseProp
  , IModVarNonNull_mod_CarcaseSpaceDimension, IModVarNonNull_mod_BackwallPos, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_CarcaseBackwallConstruction, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontHeightSelection, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontSplit, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_HandleDrill, IModVarNonNull_mod_HandleLine, IModVarNonNull_mod_HandlePosLogic, IModVarNonNull_mod_FrontQtyElements, IModVarNonNull_mod_ShelffixedType, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontOversizeBtm, IModVarNonNull_mod_FrontOversizeLeft, IModVarNonNull_mod_FrontOversizeRight, IModVarNonNull_mod_FrontOversizeTop, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_FrontSplitType1, IModVarNonNull_mod_FrontSplitType2, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_HandleLength, IModVarNonNull_mod_HandleOffsetX, IModVarNonNull_mod_HandleOffsetY, IModVarNonNull_mod_HandlePosMatrix, IModVarNonNull_mod_HandlePosType, IModVarNonNull_mod_HandlestripPos, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_ShelffixedBtm, IModVarNonNull_mod_ShelffixedPos, IModVarNonNull_mod_ShelffixedOffsetFront, IModVarNonNull_mod_ShelffixedThk, IModVarNonNull_mod_ShelffixedOversizeFront, IModVarNonNull_mod_ShelffixedOversizeBack, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_FingergripBtmType, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_ShelffixedTop, IModVarNonNull_mod_VertDividerType, IModVarNonNull_mod_SidepanelmiddleThk, IModVarNonNull_mod_FrameFillingType, IModVarNonNull_mod_FrameFillingColor, IModVarNonNull_mod_DrawerOpeningDistance, IModVarNonNull_mod_FirstFront, IModVarNonNull_mod_LastFront, IModVarNonNull_mod_PantryPulloutDesign, IModVarNonNull_mod_PantryPulloutType, IModVarNonNull_mod_PantryPulloutColor, IModVarNonNull_mod_FrontSplitDescriptor, IModVarNonNull_mod_HandlePosMatrixMultiple, IModVarNonNull_mod_HandleActivated {
  parent: IModParents_mr_StorageunitSingle;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mf_PantryPullout extends IModBaseProp
  , IModVar_mod_CarcaseSpaceDimension, IModVar_mod_BackwallPos, IModVar_mod_CarcaseDepth, IModVar_mod_CarcaseHeight, IModVar_mod_CarcaseWidth, IModVar_mod_CarcaseBackwallConstruction, IModVar_mod_CarcaseId, IModVar_mod_FrontColor, IModVar_mod_FrontDesign, IModVar_mod_FrontGapCarcase, IModVar_mod_FrontGapHor, IModVar_mod_FrontGapVert, IModVar_mod_FrontHeight, IModVar_mod_FrontHeightSelection, IModVar_mod_FingergripTop, IModVar_mod_FrontId, IModVar_mod_FrontSplit, IModVar_mod_FrontThk, IModVar_mod_FrontWidth, IModVar_mod_HandleDrill, IModVar_mod_HandleLine, IModVar_mod_HandlePosLogic, IModVar_mod_FrontQtyElements, IModVar_mod_ShelffixedType, IModVar_mod_FrontPosStart, IModVar_mod_FrontOversizeBtm, IModVar_mod_FrontOversizeLeft, IModVar_mod_FrontOversizeRight, IModVar_mod_FrontOversizeTop, IModVar_mod_FrontProgram, IModVar_mod_FrontSplitType1, IModVar_mod_FrontSplitType2, IModVar_mod_HandleColor, IModVar_mod_HandleLength, IModVar_mod_HandleOffsetX, IModVar_mod_HandleOffsetY, IModVar_mod_HandlePosMatrix, IModVar_mod_HandlePosType, IModVar_mod_HandlestripPos, IModVar_mod_HeightPosInsertion, IModVar_mod_PlinthAreaHeight, IModVar_mod_ShelffixedBtm, IModVar_mod_ShelffixedPos, IModVar_mod_ShelffixedOffsetFront, IModVar_mod_ShelffixedThk, IModVar_mod_ShelffixedOversizeFront, IModVar_mod_ShelffixedOversizeBack, IModVar_mod_HandleDesign, IModVar_mod_Originpos, IModVar_mod_ParentName, IModVar_mod_ModuleName, IModVar_mod_FingergripBtmType, IModVar_mod_FingergripTopType, IModVar_mod_ShelffixedTop, IModVar_mod_VertDividerType, IModVar_mod_SidepanelmiddleThk, IModVar_mod_FrameFillingType, IModVar_mod_FrameFillingColor, IModVar_mod_DrawerOpeningDistance, IModVar_mod_FirstFront, IModVar_mod_LastFront, IModVar_mod_PantryPulloutDesign, IModVar_mod_PantryPulloutType, IModVar_mod_PantryPulloutColor, IModVar_mod_FrontSplitDescriptor, IModVar_mod_HandlePosMatrixMultiple, IModVar_mod_HandleActivated {
  m: OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  seal(): IModuleNonNull_mf_PantryPullout;
  parent: IModParents_mr_StorageunitSingle;
  addOD_M_mc_PantryPullout01(index?: number): dc_mc_PantryPullout01;
}

export interface adc_base_mf_PantryPullout extends IModBaseProp
  , IModVarNonNull_mod_CarcaseSpaceDimension, IModVarNonNull_mod_BackwallPos, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_CarcaseBackwallConstruction, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontHeightSelection, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontSplit, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_HandleDrill, IModVarNonNull_mod_HandleLine, IModVarNonNull_mod_HandlePosLogic, IModVarNonNull_mod_FrontQtyElements, IModVarNonNull_mod_ShelffixedType, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontOversizeBtm, IModVarNonNull_mod_FrontOversizeLeft, IModVarNonNull_mod_FrontOversizeRight, IModVarNonNull_mod_FrontOversizeTop, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_FrontSplitType1, IModVarNonNull_mod_FrontSplitType2, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_HandleLength, IModVarNonNull_mod_HandleOffsetX, IModVarNonNull_mod_HandleOffsetY, IModVarNonNull_mod_HandlePosMatrix, IModVarNonNull_mod_HandlePosType, IModVarNonNull_mod_HandlestripPos, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_ShelffixedBtm, IModVarNonNull_mod_ShelffixedPos, IModVarNonNull_mod_ShelffixedOffsetFront, IModVarNonNull_mod_ShelffixedThk, IModVarNonNull_mod_ShelffixedOversizeFront, IModVarNonNull_mod_ShelffixedOversizeBack, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_FingergripBtmType, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_ShelffixedTop, IModVarNonNull_mod_VertDividerType, IModVarNonNull_mod_SidepanelmiddleThk, IModVarNonNull_mod_FrameFillingType, IModVarNonNull_mod_FrameFillingColor, IModVarNonNull_mod_DrawerOpeningDistance, IModVarNonNull_mod_FirstFront, IModVarNonNull_mod_LastFront, IModVarNonNull_mod_PantryPulloutDesign, IModVarNonNull_mod_PantryPulloutType, IModVarNonNull_mod_PantryPulloutColor, IModVarNonNull_mod_FrontSplitDescriptor, IModVarNonNull_mod_HandlePosMatrixMultiple, IModVarNonNull_mod_HandleActivated {
  get m(): OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
}

export interface adc_mf_PantryPullout extends adc_base_mf_PantryPullout {
  addOD_M_mc_PantryPullout01(index?: number): dc_mc_PantryPullout01;
}

export interface ccm_mf_PantryPullout extends adc_base_mf_PantryPullout {
}


export class OD_M_mf_PantryPullout extends OD_Base implements dc_mf_PantryPullout
  , IModParents_mf_PantryPullout
  , IModVar_mod_CarcaseSpaceDimension, IModVar_mod_BackwallPos, IModVar_mod_CarcaseDepth, IModVar_mod_CarcaseHeight, IModVar_mod_CarcaseWidth, IModVar_mod_CarcaseBackwallConstruction, IModVar_mod_CarcaseId, IModVar_mod_FrontColor, IModVar_mod_FrontDesign, IModVar_mod_FrontGapCarcase, IModVar_mod_FrontGapHor, IModVar_mod_FrontGapVert, IModVar_mod_FrontHeight, IModVar_mod_FrontHeightSelection, IModVar_mod_FingergripTop, IModVar_mod_FrontId, IModVar_mod_FrontSplit, IModVar_mod_FrontThk, IModVar_mod_FrontWidth, IModVar_mod_HandleDrill, IModVar_mod_HandleLine, IModVar_mod_HandlePosLogic, IModVar_mod_FrontQtyElements, IModVar_mod_ShelffixedType, IModVar_mod_FrontPosStart, IModVar_mod_FrontOversizeBtm, IModVar_mod_FrontOversizeLeft, IModVar_mod_FrontOversizeRight, IModVar_mod_FrontOversizeTop, IModVar_mod_FrontProgram, IModVar_mod_FrontSplitType1, IModVar_mod_FrontSplitType2, IModVar_mod_HandleColor, IModVar_mod_HandleLength, IModVar_mod_HandleOffsetX, IModVar_mod_HandleOffsetY, IModVar_mod_HandlePosMatrix, IModVar_mod_HandlePosType, IModVar_mod_HandlestripPos, IModVar_mod_HeightPosInsertion, IModVar_mod_PlinthAreaHeight, IModVar_mod_ShelffixedBtm, IModVar_mod_ShelffixedPos, IModVar_mod_ShelffixedOffsetFront, IModVar_mod_ShelffixedThk, IModVar_mod_ShelffixedOversizeFront, IModVar_mod_ShelffixedOversizeBack, IModVar_mod_HandleDesign, IModVar_mod_Originpos, IModVar_mod_ParentName, IModVar_mod_ModuleName, IModVar_mod_FingergripBtmType, IModVar_mod_FingergripTopType, IModVar_mod_ShelffixedTop, IModVar_mod_VertDividerType, IModVar_mod_SidepanelmiddleThk, IModVar_mod_FrameFillingType, IModVar_mod_FrameFillingColor, IModVar_mod_DrawerOpeningDistance, IModVar_mod_FirstFront, IModVar_mod_LastFront, IModVar_mod_PantryPulloutDesign, IModVar_mod_PantryPulloutType, IModVar_mod_PantryPulloutColor, IModVar_mod_FrontSplitDescriptor, IModVar_mod_HandlePosMatrixMultiple, IModVar_mod_HandleActivated {
  constructor(parent: IModParents_mr_StorageunitSingle, manufacturerMode?: boolean) {
    super('mf_PantryPullout', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mf_PantryPullout_NonNull(this);
  }
  parent: IModParents_mr_StorageunitSingle;
  _selfNonNull: OD_M_mf_PantryPullout_NonNull;

  override variants: string[] = ['mod_CarcaseSpaceDimension', 'mod_BackwallPos', 'mod_CarcaseDepth', 'mod_CarcaseHeight', 'mod_CarcaseWidth', 'mod_CarcaseBackwallConstruction', 'mod_CarcaseId', 'mod_FrontColor', 'mod_FrontDesign', 'mod_FrontGapCarcase', 'mod_FrontGapHor', 'mod_FrontGapVert', 'mod_FrontHeight', 'mod_FrontHeightSelection', 'mod_FingergripTop', 'mod_FrontId', 'mod_FrontSplit', 'mod_FrontThk', 'mod_FrontWidth', 'mod_HandleDrill', 'mod_HandleLine', 'mod_HandlePosLogic', 'mod_FrontQtyElements', 'mod_ShelffixedType', 'mod_FrontPosStart', 'mod_FrontOversizeBtm', 'mod_FrontOversizeLeft', 'mod_FrontOversizeRight', 'mod_FrontOversizeTop', 'mod_FrontProgram', 'mod_FrontSplitType1', 'mod_FrontSplitType2', 'mod_HandleColor', 'mod_HandleLength', 'mod_HandleOffsetX', 'mod_HandleOffsetY', 'mod_HandlePosMatrix', 'mod_HandlePosType', 'mod_HandlestripPos', 'mod_HeightPosInsertion', 'mod_PlinthAreaHeight', 'mod_ShelffixedBtm', 'mod_ShelffixedPos', 'mod_ShelffixedOffsetFront', 'mod_ShelffixedThk', 'mod_ShelffixedOversizeFront', 'mod_ShelffixedOversizeBack', 'mod_HandleDesign', 'mod_Originpos', 'mod_ParentName', 'mod_ModuleName', 'mod_FingergripBtmType', 'mod_FingergripTopType', 'mod_ShelffixedTop', 'mod_VertDividerType', 'mod_SidepanelmiddleThk', 'mod_FrameFillingType', 'mod_FrameFillingColor', 'mod_DrawerOpeningDistance', 'mod_FirstFront', 'mod_LastFront', 'mod_PantryPulloutDesign', 'mod_PantryPulloutType', 'mod_PantryPulloutColor', 'mod_FrontSplitDescriptor', 'mod_HandlePosMatrixMultiple', 'mod_HandleActivated',];
  #mod_CarcaseSpaceDimension: string[] = [];
  get mod_CarcaseSpaceDimension(): string[] { return this.#mod_CarcaseSpaceDimension; }
  #mod_BackwallPos?: number;
  get mod_BackwallPos(): number | undefined { return this.#mod_BackwallPos }
  set mod_BackwallPos(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_BackwallPos' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_BackwallPos === value) return;
    this.#mod_BackwallPos = value;
  }

  mod_BackwallPos_matrix?: IMatrix_mod_BackwallPos;
  #mod_CarcaseDepth?: number;
  get mod_CarcaseDepth(): number | undefined { return this.#mod_CarcaseDepth }
  set mod_CarcaseDepth(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseDepth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseDepth === value) return;
    this.#mod_CarcaseDepth = value;
  }

  mod_CarcaseDepth_matrix?: IMatrix_mod_CarcaseDepth;
  #mod_CarcaseHeight?: number;
  get mod_CarcaseHeight(): number | undefined { return this.#mod_CarcaseHeight }
  set mod_CarcaseHeight(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseHeight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseHeight === value) return;
    this.#mod_CarcaseHeight = value;
  }

  mod_CarcaseHeight_matrix?: IMatrix_mod_CarcaseHeight;
  #mod_CarcaseWidth?: number;
  get mod_CarcaseWidth(): number | undefined { return this.#mod_CarcaseWidth }
  set mod_CarcaseWidth(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseWidth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseWidth === value) return;
    this.#mod_CarcaseWidth = value;
  }

  mod_CarcaseWidth_matrix?: IMatrix_mod_CarcaseWidth;
  #mod_CarcaseBackwallConstruction?: string;
  get mod_CarcaseBackwallConstruction(): string | undefined { return this.#mod_CarcaseBackwallConstruction }
  set mod_CarcaseBackwallConstruction(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseBackwallConstruction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseBackwallConstruction === value) return;
    this.#mod_CarcaseBackwallConstruction = value;
  }

  mod_CarcaseBackwallConstruction_matrix?: IMatrix_mod_CarcaseBackwallConstruction;
  #mod_CarcaseId?: string;
  get mod_CarcaseId(): string | undefined { return this.#mod_CarcaseId }
  set mod_CarcaseId(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseId' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseId === value) return;
    this.#mod_CarcaseId = value;
  }

  mod_CarcaseId_matrix?: IMatrix_mod_CarcaseId;
  #mod_FrontColor?: string;
  get mod_FrontColor(): string | undefined { return this.#mod_FrontColor }
  set mod_FrontColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontColor === value) return;
    this.#mod_FrontColor = value;
  }

  mod_FrontColor_matrix?: IMatrix_mod_FrontColor;
  #mod_FrontDesign?: string;
  get mod_FrontDesign(): string | undefined { return this.#mod_FrontDesign }
  set mod_FrontDesign(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontDesign' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontDesign === value) return;
    this.#mod_FrontDesign = value;
  }

  mod_FrontDesign_matrix?: IMatrix_mod_FrontDesign;
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
  #mod_FrontGapVert?: number;
  get mod_FrontGapVert(): number | undefined { return this.#mod_FrontGapVert }
  set mod_FrontGapVert(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontGapVert' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontGapVert === value) return;
    this.#mod_FrontGapVert = value;
  }

  mod_FrontGapVert_matrix?: IMatrix_mod_FrontGapVert;
  #mod_FrontHeight?: number;
  get mod_FrontHeight(): number | undefined { return this.#mod_FrontHeight }
  set mod_FrontHeight(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontHeight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontHeight === value) return;
    this.#mod_FrontHeight = value;
  }

  mod_FrontHeight_matrix?: IMatrix_mod_FrontHeight;
  #mod_FrontHeightSelection?: number;
  get mod_FrontHeightSelection(): number | undefined { return this.#mod_FrontHeightSelection }
  set mod_FrontHeightSelection(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontHeightSelection' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontHeightSelection === value) return;
    this.#mod_FrontHeightSelection = value;
  }

  mod_FrontHeightSelection_matrix?: IMatrix_mod_FrontHeightSelection;
  #mod_FingergripTop?: boolean;
  get mod_FingergripTop(): boolean | undefined { return this.#mod_FingergripTop }
  set mod_FingergripTop(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FingergripTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FingergripTop === value) return;
    this.#mod_FingergripTop = value;
  }

  mod_FingergripTop_matrix?: IMatrix_mod_FingergripTop;
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
  #mod_FrontSplit?: boolean;
  get mod_FrontSplit(): boolean | undefined { return this.#mod_FrontSplit }
  set mod_FrontSplit(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontSplit' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontSplit === value) return;
    this.#mod_FrontSplit = value;
  }

  mod_FrontSplit_matrix?: IMatrix_mod_FrontSplit;
  #mod_FrontThk?: number;
  get mod_FrontThk(): number | undefined { return this.#mod_FrontThk }
  set mod_FrontThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontThk === value) return;
    this.#mod_FrontThk = value;
  }

  mod_FrontThk_matrix?: IMatrix_mod_FrontThk;
  #mod_FrontWidth?: number;
  get mod_FrontWidth(): number | undefined { return this.#mod_FrontWidth }
  set mod_FrontWidth(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontWidth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontWidth === value) return;
    this.#mod_FrontWidth = value;
  }

  mod_FrontWidth_matrix?: IMatrix_mod_FrontWidth;
  #mod_HandleDrill?: boolean;
  get mod_HandleDrill(): boolean | undefined { return this.#mod_HandleDrill }
  set mod_HandleDrill(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandleDrill' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandleDrill === value) return;
    this.#mod_HandleDrill = value;
  }

  mod_HandleDrill_matrix?: IMatrix_mod_HandleDrill;
  #mod_HandleLine?: number;
  get mod_HandleLine(): number | undefined { return this.#mod_HandleLine }
  set mod_HandleLine(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandleLine' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandleLine === value) return;
    this.#mod_HandleLine = value;
  }

  mod_HandleLine_matrix?: IMatrix_mod_HandleLine;
  #mod_HandlePosLogic?: string;
  get mod_HandlePosLogic(): string | undefined { return this.#mod_HandlePosLogic }
  set mod_HandlePosLogic(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandlePosLogic' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandlePosLogic === value) return;
    this.#mod_HandlePosLogic = value;
  }

  mod_HandlePosLogic_matrix?: IMatrix_mod_HandlePosLogic;
  #mod_FrontQtyElements?: number;
  get mod_FrontQtyElements(): number | undefined { return this.#mod_FrontQtyElements }
  set mod_FrontQtyElements(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontQtyElements' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontQtyElements === value) return;
    this.#mod_FrontQtyElements = value;
  }

  mod_FrontQtyElements_matrix?: IMatrix_mod_FrontQtyElements;
  #mod_ShelffixedType?: string;
  get mod_ShelffixedType(): string | undefined { return this.#mod_ShelffixedType }
  set mod_ShelffixedType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelffixedType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelffixedType === value) return;
    this.#mod_ShelffixedType = value;
  }

  mod_ShelffixedType_matrix?: IMatrix_mod_ShelffixedType;
  #mod_FrontPosStart?: number;
  get mod_FrontPosStart(): number | undefined { return this.#mod_FrontPosStart }
  set mod_FrontPosStart(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontPosStart' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontPosStart === value) return;
    this.#mod_FrontPosStart = value;
  }

  mod_FrontPosStart_matrix?: IMatrix_mod_FrontPosStart;
  #mod_FrontOversizeBtm?: number;
  get mod_FrontOversizeBtm(): number | undefined { return this.#mod_FrontOversizeBtm }
  set mod_FrontOversizeBtm(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontOversizeBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontOversizeBtm === value) return;
    this.#mod_FrontOversizeBtm = value;
  }

  mod_FrontOversizeBtm_matrix?: IMatrix_mod_FrontOversizeBtm;
  #mod_FrontOversizeLeft?: number;
  get mod_FrontOversizeLeft(): number | undefined { return this.#mod_FrontOversizeLeft }
  set mod_FrontOversizeLeft(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontOversizeLeft' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontOversizeLeft === value) return;
    this.#mod_FrontOversizeLeft = value;
  }

  mod_FrontOversizeLeft_matrix?: IMatrix_mod_FrontOversizeLeft;
  #mod_FrontOversizeRight?: number;
  get mod_FrontOversizeRight(): number | undefined { return this.#mod_FrontOversizeRight }
  set mod_FrontOversizeRight(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontOversizeRight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontOversizeRight === value) return;
    this.#mod_FrontOversizeRight = value;
  }

  mod_FrontOversizeRight_matrix?: IMatrix_mod_FrontOversizeRight;
  #mod_FrontOversizeTop?: number;
  get mod_FrontOversizeTop(): number | undefined { return this.#mod_FrontOversizeTop }
  set mod_FrontOversizeTop(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontOversizeTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontOversizeTop === value) return;
    this.#mod_FrontOversizeTop = value;
  }

  mod_FrontOversizeTop_matrix?: IMatrix_mod_FrontOversizeTop;
  #mod_FrontProgram?: string;
  get mod_FrontProgram(): string | undefined { return this.#mod_FrontProgram }
  set mod_FrontProgram(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontProgram === value) return;
    this.#mod_FrontProgram = value;
  }

  mod_FrontProgram_matrix?: IMatrix_mod_FrontProgram;
  #mod_FrontSplitType1?: string;
  get mod_FrontSplitType1(): string | undefined { return this.#mod_FrontSplitType1 }
  set mod_FrontSplitType1(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontSplitType1' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontSplitType1 === value) return;
    this.#mod_FrontSplitType1 = value;
  }

  mod_FrontSplitType1_matrix?: IMatrix_mod_FrontSplitType1;
  #mod_FrontSplitType2?: string;
  get mod_FrontSplitType2(): string | undefined { return this.#mod_FrontSplitType2 }
  set mod_FrontSplitType2(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontSplitType2' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontSplitType2 === value) return;
    this.#mod_FrontSplitType2 = value;
  }

  mod_FrontSplitType2_matrix?: IMatrix_mod_FrontSplitType2;
  #mod_HandleColor?: string;
  get mod_HandleColor(): string | undefined { return this.#mod_HandleColor }
  set mod_HandleColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandleColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandleColor === value) return;
    this.#mod_HandleColor = value;
  }

  mod_HandleColor_matrix?: IMatrix_mod_HandleColor;
  #mod_HandleLength?: number;
  get mod_HandleLength(): number | undefined { return this.#mod_HandleLength }
  set mod_HandleLength(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandleLength' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandleLength === value) return;
    this.#mod_HandleLength = value;
  }

  mod_HandleLength_matrix?: IMatrix_mod_HandleLength;
  #mod_HandleOffsetX?: number;
  get mod_HandleOffsetX(): number | undefined { return this.#mod_HandleOffsetX }
  set mod_HandleOffsetX(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandleOffsetX' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandleOffsetX === value) return;
    this.#mod_HandleOffsetX = value;
  }

  mod_HandleOffsetX_matrix?: IMatrix_mod_HandleOffsetX;
  #mod_HandleOffsetY?: number;
  get mod_HandleOffsetY(): number | undefined { return this.#mod_HandleOffsetY }
  set mod_HandleOffsetY(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandleOffsetY' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandleOffsetY === value) return;
    this.#mod_HandleOffsetY = value;
  }

  mod_HandleOffsetY_matrix?: IMatrix_mod_HandleOffsetY;
  #mod_HandlePosMatrix?: string;
  get mod_HandlePosMatrix(): string | undefined { return this.#mod_HandlePosMatrix }
  set mod_HandlePosMatrix(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandlePosMatrix' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandlePosMatrix === value) return;
    this.#mod_HandlePosMatrix = value;
  }

  mod_HandlePosMatrix_matrix?: IMatrix_mod_HandlePosMatrix;
  #mod_HandlePosType?: string;
  get mod_HandlePosType(): string | undefined { return this.#mod_HandlePosType }
  set mod_HandlePosType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandlePosType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandlePosType === value) return;
    this.#mod_HandlePosType = value;
  }

  mod_HandlePosType_matrix?: IMatrix_mod_HandlePosType;
  #mod_HandlestripPos?: string;
  get mod_HandlestripPos(): string | undefined { return this.#mod_HandlestripPos }
  set mod_HandlestripPos(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandlestripPos' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandlestripPos === value) return;
    this.#mod_HandlestripPos = value;
  }

  mod_HandlestripPos_matrix?: IMatrix_mod_HandlestripPos;
  #mod_HeightPosInsertion?: number;
  get mod_HeightPosInsertion(): number | undefined { return this.#mod_HeightPosInsertion }
  set mod_HeightPosInsertion(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HeightPosInsertion' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HeightPosInsertion === value) return;
    this.#mod_HeightPosInsertion = value;
  }

  mod_HeightPosInsertion_matrix?: IMatrix_mod_HeightPosInsertion;
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
  #mod_ShelffixedBtm?: boolean;
  get mod_ShelffixedBtm(): boolean | undefined { return this.#mod_ShelffixedBtm }
  set mod_ShelffixedBtm(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelffixedBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelffixedBtm === value) return;
    this.#mod_ShelffixedBtm = value;
  }

  mod_ShelffixedBtm_matrix?: IMatrix_mod_ShelffixedBtm;
  #mod_ShelffixedPos?: string;
  get mod_ShelffixedPos(): string | undefined { return this.#mod_ShelffixedPos }
  set mod_ShelffixedPos(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelffixedPos' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelffixedPos === value) return;
    this.#mod_ShelffixedPos = value;
  }

  mod_ShelffixedPos_matrix?: IMatrix_mod_ShelffixedPos;
  #mod_ShelffixedOffsetFront?: number;
  get mod_ShelffixedOffsetFront(): number | undefined { return this.#mod_ShelffixedOffsetFront }
  set mod_ShelffixedOffsetFront(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelffixedOffsetFront' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelffixedOffsetFront === value) return;
    this.#mod_ShelffixedOffsetFront = value;
  }

  mod_ShelffixedOffsetFront_matrix?: IMatrix_mod_ShelffixedOffsetFront;
  #mod_ShelffixedThk?: number;
  get mod_ShelffixedThk(): number | undefined { return this.#mod_ShelffixedThk }
  set mod_ShelffixedThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelffixedThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelffixedThk === value) return;
    this.#mod_ShelffixedThk = value;
  }

  mod_ShelffixedThk_matrix?: IMatrix_mod_ShelffixedThk;
  #mod_ShelffixedOversizeFront?: number;
  get mod_ShelffixedOversizeFront(): number | undefined { return this.#mod_ShelffixedOversizeFront }
  set mod_ShelffixedOversizeFront(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelffixedOversizeFront' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelffixedOversizeFront === value) return;
    this.#mod_ShelffixedOversizeFront = value;
  }

  mod_ShelffixedOversizeFront_matrix?: IMatrix_mod_ShelffixedOversizeFront;
  #mod_ShelffixedOversizeBack?: number;
  get mod_ShelffixedOversizeBack(): number | undefined { return this.#mod_ShelffixedOversizeBack }
  set mod_ShelffixedOversizeBack(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelffixedOversizeBack' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelffixedOversizeBack === value) return;
    this.#mod_ShelffixedOversizeBack = value;
  }

  mod_ShelffixedOversizeBack_matrix?: IMatrix_mod_ShelffixedOversizeBack;
  #mod_HandleDesign?: string;
  get mod_HandleDesign(): string | undefined { return this.#mod_HandleDesign }
  set mod_HandleDesign(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandleDesign' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandleDesign === value) return;
    this.#mod_HandleDesign = value;
  }

  mod_HandleDesign_matrix?: IMatrix_mod_HandleDesign;
  #mod_Originpos: number[] = [];
  get mod_Originpos(): number[] { return this.#mod_Originpos; }
  #mod_ParentName?: string;
  get mod_ParentName(): string | undefined { return this.#mod_ParentName }
  set mod_ParentName(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ParentName' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ParentName === value) return;
    this.#mod_ParentName = value;
  }

  mod_ParentName_matrix?: IMatrix_mod_ParentName;
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
  #mod_FingergripBtmType?: string;
  get mod_FingergripBtmType(): string | undefined { return this.#mod_FingergripBtmType }
  set mod_FingergripBtmType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FingergripBtmType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FingergripBtmType === value) return;
    this.#mod_FingergripBtmType = value;
  }

  mod_FingergripBtmType_matrix?: IMatrix_mod_FingergripBtmType;
  #mod_FingergripTopType?: string;
  get mod_FingergripTopType(): string | undefined { return this.#mod_FingergripTopType }
  set mod_FingergripTopType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FingergripTopType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FingergripTopType === value) return;
    this.#mod_FingergripTopType = value;
  }

  mod_FingergripTopType_matrix?: IMatrix_mod_FingergripTopType;
  #mod_ShelffixedTop?: boolean;
  get mod_ShelffixedTop(): boolean | undefined { return this.#mod_ShelffixedTop }
  set mod_ShelffixedTop(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelffixedTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelffixedTop === value) return;
    this.#mod_ShelffixedTop = value;
  }

  mod_ShelffixedTop_matrix?: IMatrix_mod_ShelffixedTop;
  #mod_VertDividerType?: string;
  get mod_VertDividerType(): string | undefined { return this.#mod_VertDividerType }
  set mod_VertDividerType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_VertDividerType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_VertDividerType === value) return;
    this.#mod_VertDividerType = value;
  }

  mod_VertDividerType_matrix?: IMatrix_mod_VertDividerType;
  #mod_SidepanelmiddleThk?: number;
  get mod_SidepanelmiddleThk(): number | undefined { return this.#mod_SidepanelmiddleThk }
  set mod_SidepanelmiddleThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_SidepanelmiddleThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_SidepanelmiddleThk === value) return;
    this.#mod_SidepanelmiddleThk = value;
  }

  mod_SidepanelmiddleThk_matrix?: IMatrix_mod_SidepanelmiddleThk;
  #mod_FrameFillingType?: string;
  get mod_FrameFillingType(): string | undefined { return this.#mod_FrameFillingType }
  set mod_FrameFillingType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrameFillingType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrameFillingType === value) return;
    this.#mod_FrameFillingType = value;
  }

  mod_FrameFillingType_matrix?: IMatrix_mod_FrameFillingType;
  #mod_FrameFillingColor?: string;
  get mod_FrameFillingColor(): string | undefined { return this.#mod_FrameFillingColor }
  set mod_FrameFillingColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrameFillingColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrameFillingColor === value) return;
    this.#mod_FrameFillingColor = value;
  }

  mod_FrameFillingColor_matrix?: IMatrix_mod_FrameFillingColor;
  #mod_DrawerOpeningDistance?: number;
  get mod_DrawerOpeningDistance(): number | undefined { return this.#mod_DrawerOpeningDistance }
  set mod_DrawerOpeningDistance(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_DrawerOpeningDistance' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_DrawerOpeningDistance === value) return;
    this.#mod_DrawerOpeningDistance = value;
  }

  mod_DrawerOpeningDistance_matrix?: IMatrix_mod_DrawerOpeningDistance;
  #mod_FirstFront?: boolean;
  get mod_FirstFront(): boolean | undefined { return this.#mod_FirstFront }
  set mod_FirstFront(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FirstFront' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FirstFront === value) return;
    this.#mod_FirstFront = value;
  }

  mod_FirstFront_matrix?: IMatrix_mod_FirstFront;
  #mod_LastFront?: boolean;
  get mod_LastFront(): boolean | undefined { return this.#mod_LastFront }
  set mod_LastFront(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_LastFront' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_LastFront === value) return;
    this.#mod_LastFront = value;
  }

  mod_LastFront_matrix?: IMatrix_mod_LastFront;
  #mod_PantryPulloutDesign?: string;
  get mod_PantryPulloutDesign(): string | undefined { return this.#mod_PantryPulloutDesign }
  set mod_PantryPulloutDesign(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PantryPulloutDesign' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PantryPulloutDesign === value) return;
    this.#mod_PantryPulloutDesign = value;
  }

  mod_PantryPulloutDesign_matrix?: IMatrix_mod_PantryPulloutDesign;
  #mod_PantryPulloutType?: string;
  get mod_PantryPulloutType(): string | undefined { return this.#mod_PantryPulloutType }
  set mod_PantryPulloutType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PantryPulloutType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PantryPulloutType === value) return;
    this.#mod_PantryPulloutType = value;
  }

  mod_PantryPulloutType_matrix?: IMatrix_mod_PantryPulloutType;
  #mod_PantryPulloutColor?: string;
  get mod_PantryPulloutColor(): string | undefined { return this.#mod_PantryPulloutColor }
  set mod_PantryPulloutColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_PantryPulloutColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_PantryPulloutColor === value) return;
    this.#mod_PantryPulloutColor = value;
  }

  mod_PantryPulloutColor_matrix?: IMatrix_mod_PantryPulloutColor;
  #mod_FrontSplitDescriptor?: string;
  get mod_FrontSplitDescriptor(): string | undefined { return this.#mod_FrontSplitDescriptor }
  set mod_FrontSplitDescriptor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontSplitDescriptor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontSplitDescriptor === value) return;
    this.#mod_FrontSplitDescriptor = value;
  }

  mod_FrontSplitDescriptor_matrix?: IMatrix_mod_FrontSplitDescriptor;
  #mod_HandlePosMatrixMultiple?: string;
  get mod_HandlePosMatrixMultiple(): string | undefined { return this.#mod_HandlePosMatrixMultiple }
  set mod_HandlePosMatrixMultiple(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandlePosMatrixMultiple' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandlePosMatrixMultiple === value) return;
    this.#mod_HandlePosMatrixMultiple = value;
  }

  mod_HandlePosMatrixMultiple_matrix?: IMatrix_mod_HandlePosMatrixMultiple;
  #mod_HandleActivated?: string;
  get mod_HandleActivated(): string | undefined { return this.#mod_HandleActivated }
  set mod_HandleActivated(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HandleActivated' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HandleActivated === value) return;
    this.#mod_HandleActivated = value;
  }

  mod_HandleActivated_matrix?: IMatrix_mod_HandleActivated;
  override getAttributes(): Map<string, any> {
    let res = new Map<string, any>();
    res.set('mod_CarcaseSpaceDimension', JSON.stringify(this.mod_CarcaseSpaceDimension));
    res.set('mod_BackwallPos', this.mod_BackwallPos);
    res.set('mod_CarcaseDepth', this.mod_CarcaseDepth);
    res.set('mod_CarcaseHeight', this.mod_CarcaseHeight);
    res.set('mod_CarcaseWidth', this.mod_CarcaseWidth);
    res.set('mod_CarcaseBackwallConstruction', this.mod_CarcaseBackwallConstruction);
    res.set('mod_CarcaseId', this.mod_CarcaseId);
    res.set('mod_FrontColor', this.mod_FrontColor);
    res.set('mod_FrontDesign', this.mod_FrontDesign);
    res.set('mod_FrontGapCarcase', this.mod_FrontGapCarcase);
    res.set('mod_FrontGapHor', this.mod_FrontGapHor);
    res.set('mod_FrontGapVert', this.mod_FrontGapVert);
    res.set('mod_FrontHeight', this.mod_FrontHeight);
    res.set('mod_FrontHeightSelection', this.mod_FrontHeightSelection);
    res.set('mod_FingergripTop', this.mod_FingergripTop);
    res.set('mod_FrontId', this.mod_FrontId);
    res.set('mod_FrontSplit', this.mod_FrontSplit);
    res.set('mod_FrontThk', this.mod_FrontThk);
    res.set('mod_FrontWidth', this.mod_FrontWidth);
    res.set('mod_HandleDrill', this.mod_HandleDrill);
    res.set('mod_HandleLine', this.mod_HandleLine);
    res.set('mod_HandlePosLogic', this.mod_HandlePosLogic);
    res.set('mod_FrontQtyElements', this.mod_FrontQtyElements);
    res.set('mod_ShelffixedType', this.mod_ShelffixedType);
    res.set('mod_FrontPosStart', this.mod_FrontPosStart);
    res.set('mod_FrontOversizeBtm', this.mod_FrontOversizeBtm);
    res.set('mod_FrontOversizeLeft', this.mod_FrontOversizeLeft);
    res.set('mod_FrontOversizeRight', this.mod_FrontOversizeRight);
    res.set('mod_FrontOversizeTop', this.mod_FrontOversizeTop);
    res.set('mod_FrontProgram', this.mod_FrontProgram);
    res.set('mod_FrontSplitType1', this.mod_FrontSplitType1);
    res.set('mod_FrontSplitType2', this.mod_FrontSplitType2);
    res.set('mod_HandleColor', this.mod_HandleColor);
    res.set('mod_HandleLength', this.mod_HandleLength);
    res.set('mod_HandleOffsetX', this.mod_HandleOffsetX);
    res.set('mod_HandleOffsetY', this.mod_HandleOffsetY);
    res.set('mod_HandlePosMatrix', this.mod_HandlePosMatrix);
    res.set('mod_HandlePosType', this.mod_HandlePosType);
    res.set('mod_HandlestripPos', this.mod_HandlestripPos);
    res.set('mod_HeightPosInsertion', this.mod_HeightPosInsertion);
    res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
    res.set('mod_ShelffixedBtm', this.mod_ShelffixedBtm);
    res.set('mod_ShelffixedPos', this.mod_ShelffixedPos);
    res.set('mod_ShelffixedOffsetFront', this.mod_ShelffixedOffsetFront);
    res.set('mod_ShelffixedThk', this.mod_ShelffixedThk);
    res.set('mod_ShelffixedOversizeFront', this.mod_ShelffixedOversizeFront);
    res.set('mod_ShelffixedOversizeBack', this.mod_ShelffixedOversizeBack);
    res.set('mod_HandleDesign', this.mod_HandleDesign);
    res.set('mod_Originpos', JSON.stringify(this.mod_Originpos));
    res.set('mod_ParentName', this.mod_ParentName);
    res.set('mod_ModuleName', this.mod_ModuleName);
    res.set('mod_FingergripBtmType', this.mod_FingergripBtmType);
    res.set('mod_FingergripTopType', this.mod_FingergripTopType);
    res.set('mod_ShelffixedTop', this.mod_ShelffixedTop);
    res.set('mod_VertDividerType', this.mod_VertDividerType);
    res.set('mod_SidepanelmiddleThk', this.mod_SidepanelmiddleThk);
    res.set('mod_FrameFillingType', this.mod_FrameFillingType);
    res.set('mod_FrameFillingColor', this.mod_FrameFillingColor);
    res.set('mod_DrawerOpeningDistance', this.mod_DrawerOpeningDistance);
    res.set('mod_FirstFront', this.mod_FirstFront);
    res.set('mod_LastFront', this.mod_LastFront);
    res.set('mod_PantryPulloutDesign', this.mod_PantryPulloutDesign);
    res.set('mod_PantryPulloutType', this.mod_PantryPulloutType);
    res.set('mod_PantryPulloutColor', this.mod_PantryPulloutColor);
    res.set('mod_FrontSplitDescriptor', this.mod_FrontSplitDescriptor);
    res.set('mod_HandlePosMatrixMultiple', this.mod_HandlePosMatrixMultiple);
    res.set('mod_HandleActivated', this.mod_HandleActivated);
    return res;
  }
  override getCheckAttributes(): Map<string, number | string | boolean | undefined> | undefined {
    const res = new Map<string, number | string | boolean | undefined>();
    res.set('mod_FrontColor', this.mod_FrontColor);
    res.set('mod_FrontDesign', this.mod_FrontDesign);
    res.set('mod_FrontProgram', this.mod_FrontProgram);
    res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
    res.set('mod_FrameFillingType', this.mod_FrameFillingType);
    res.set('mod_FrameFillingColor', this.mod_FrameFillingColor);
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
      internal_enterValidateVariant(this.modId, this._id, 'mod_BackwallPos');
      const val = _toFloat(json['attributes']['mod_BackwallPos'], 'mod_BackwallPos');
      internal_leaveValidateVariant();
      this.mod_BackwallPos = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseDepth');
      const val = _toFloat(json['attributes']['mod_CarcaseDepth'], 'mod_CarcaseDepth');
      internal_leaveValidateVariant();
      this.mod_CarcaseDepth = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseHeight');
      const val = _toFloat(json['attributes']['mod_CarcaseHeight'], 'mod_CarcaseHeight');
      internal_leaveValidateVariant();
      this.mod_CarcaseHeight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseWidth');
      const val = _toFloat(json['attributes']['mod_CarcaseWidth'], 'mod_CarcaseWidth');
      internal_leaveValidateVariant();
      this.mod_CarcaseWidth = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseBackwallConstruction');
      const val = _toString(json['attributes']['mod_CarcaseBackwallConstruction'], 'mod_CarcaseBackwallConstruction');
      internal_leaveValidateVariant();
      this.mod_CarcaseBackwallConstruction = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseId');
      const val = _toString(json['attributes']['mod_CarcaseId'], 'mod_CarcaseId');
      internal_leaveValidateVariant();
      this.mod_CarcaseId = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontColor');
      const val = _toString(json['attributes']['mod_FrontColor'], 'mod_FrontColor');
      internal_leaveValidateVariant();
      this.mod_FrontColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontDesign');
      const val = _toString(json['attributes']['mod_FrontDesign'], 'mod_FrontDesign');
      internal_leaveValidateVariant();
      this.mod_FrontDesign = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapCarcase');
      const val = _toFloat(json['attributes']['mod_FrontGapCarcase'], 'mod_FrontGapCarcase');
      internal_leaveValidateVariant();
      this.mod_FrontGapCarcase = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapHor');
      const val = _toFloat(json['attributes']['mod_FrontGapHor'], 'mod_FrontGapHor');
      internal_leaveValidateVariant();
      this.mod_FrontGapHor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapVert');
      const val = _toFloat(json['attributes']['mod_FrontGapVert'], 'mod_FrontGapVert');
      internal_leaveValidateVariant();
      this.mod_FrontGapVert = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontHeight');
      const val = _toFloat(json['attributes']['mod_FrontHeight'], 'mod_FrontHeight');
      internal_leaveValidateVariant();
      this.mod_FrontHeight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontHeightSelection');
      const val = _toFloat(json['attributes']['mod_FrontHeightSelection'], 'mod_FrontHeightSelection');
      internal_leaveValidateVariant();
      this.mod_FrontHeightSelection = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripTop');
      const val = _toBoolean(json['attributes']['mod_FingergripTop'], 'mod_FingergripTop');
      internal_leaveValidateVariant();
      this.mod_FingergripTop = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontId');
      const val = _toString(json['attributes']['mod_FrontId'], 'mod_FrontId');
      internal_leaveValidateVariant();
      this.mod_FrontId = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontSplit');
      const val = _toBoolean(json['attributes']['mod_FrontSplit'], 'mod_FrontSplit');
      internal_leaveValidateVariant();
      this.mod_FrontSplit = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontThk');
      const val = _toFloat(json['attributes']['mod_FrontThk'], 'mod_FrontThk');
      internal_leaveValidateVariant();
      this.mod_FrontThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontWidth');
      const val = _toFloat(json['attributes']['mod_FrontWidth'], 'mod_FrontWidth');
      internal_leaveValidateVariant();
      this.mod_FrontWidth = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDrill');
      const val = _toBoolean(json['attributes']['mod_HandleDrill'], 'mod_HandleDrill');
      internal_leaveValidateVariant();
      this.mod_HandleDrill = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandleLine');
      const val = _toFloat(json['attributes']['mod_HandleLine'], 'mod_HandleLine');
      internal_leaveValidateVariant();
      this.mod_HandleLine = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosLogic');
      const val = _toString(json['attributes']['mod_HandlePosLogic'], 'mod_HandlePosLogic');
      internal_leaveValidateVariant();
      this.mod_HandlePosLogic = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontQtyElements');
      const val = _toInt(json['attributes']['mod_FrontQtyElements'], 'mod_FrontQtyElements');
      internal_leaveValidateVariant();
      this.mod_FrontQtyElements = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedType');
      const val = _toString(json['attributes']['mod_ShelffixedType'], 'mod_ShelffixedType');
      internal_leaveValidateVariant();
      this.mod_ShelffixedType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontPosStart');
      const val = _toFloat(json['attributes']['mod_FrontPosStart'], 'mod_FrontPosStart');
      internal_leaveValidateVariant();
      this.mod_FrontPosStart = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontOversizeBtm');
      const val = _toFloat(json['attributes']['mod_FrontOversizeBtm'], 'mod_FrontOversizeBtm');
      internal_leaveValidateVariant();
      this.mod_FrontOversizeBtm = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontOversizeLeft');
      const val = _toFloat(json['attributes']['mod_FrontOversizeLeft'], 'mod_FrontOversizeLeft');
      internal_leaveValidateVariant();
      this.mod_FrontOversizeLeft = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontOversizeRight');
      const val = _toFloat(json['attributes']['mod_FrontOversizeRight'], 'mod_FrontOversizeRight');
      internal_leaveValidateVariant();
      this.mod_FrontOversizeRight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontOversizeTop');
      const val = _toFloat(json['attributes']['mod_FrontOversizeTop'], 'mod_FrontOversizeTop');
      internal_leaveValidateVariant();
      this.mod_FrontOversizeTop = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontProgram');
      const val = _toString(json['attributes']['mod_FrontProgram'], 'mod_FrontProgram');
      internal_leaveValidateVariant();
      this.mod_FrontProgram = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontSplitType1');
      const val = _toString(json['attributes']['mod_FrontSplitType1'], 'mod_FrontSplitType1');
      internal_leaveValidateVariant();
      this.mod_FrontSplitType1 = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontSplitType2');
      const val = _toString(json['attributes']['mod_FrontSplitType2'], 'mod_FrontSplitType2');
      internal_leaveValidateVariant();
      this.mod_FrontSplitType2 = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandleColor');
      const val = _toString(json['attributes']['mod_HandleColor'], 'mod_HandleColor');
      internal_leaveValidateVariant();
      this.mod_HandleColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandleLength');
      const val = _toFloat(json['attributes']['mod_HandleLength'], 'mod_HandleLength');
      internal_leaveValidateVariant();
      this.mod_HandleLength = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandleOffsetX');
      const val = _toFloat(json['attributes']['mod_HandleOffsetX'], 'mod_HandleOffsetX');
      internal_leaveValidateVariant();
      this.mod_HandleOffsetX = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandleOffsetY');
      const val = _toFloat(json['attributes']['mod_HandleOffsetY'], 'mod_HandleOffsetY');
      internal_leaveValidateVariant();
      this.mod_HandleOffsetY = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosMatrix');
      const val = _toString(json['attributes']['mod_HandlePosMatrix'], 'mod_HandlePosMatrix');
      internal_leaveValidateVariant();
      this.mod_HandlePosMatrix = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosType');
      const val = _toString(json['attributes']['mod_HandlePosType'], 'mod_HandlePosType');
      internal_leaveValidateVariant();
      this.mod_HandlePosType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandlestripPos');
      const val = _toString(json['attributes']['mod_HandlestripPos'], 'mod_HandlestripPos');
      internal_leaveValidateVariant();
      this.mod_HandlestripPos = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HeightPosInsertion');
      const val = _toFloat(json['attributes']['mod_HeightPosInsertion'], 'mod_HeightPosInsertion');
      internal_leaveValidateVariant();
      this.mod_HeightPosInsertion = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaHeight');
      const val = _toFloat(json['attributes']['mod_PlinthAreaHeight'], 'mod_PlinthAreaHeight');
      internal_leaveValidateVariant();
      this.mod_PlinthAreaHeight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedBtm');
      const val = _toBoolean(json['attributes']['mod_ShelffixedBtm'], 'mod_ShelffixedBtm');
      internal_leaveValidateVariant();
      this.mod_ShelffixedBtm = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedPos');
      const val = _toString(json['attributes']['mod_ShelffixedPos'], 'mod_ShelffixedPos');
      internal_leaveValidateVariant();
      this.mod_ShelffixedPos = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedOffsetFront');
      const val = _toFloat(json['attributes']['mod_ShelffixedOffsetFront'], 'mod_ShelffixedOffsetFront');
      internal_leaveValidateVariant();
      this.mod_ShelffixedOffsetFront = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedThk');
      const val = _toFloat(json['attributes']['mod_ShelffixedThk'], 'mod_ShelffixedThk');
      internal_leaveValidateVariant();
      this.mod_ShelffixedThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedOversizeFront');
      const val = _toFloat(json['attributes']['mod_ShelffixedOversizeFront'], 'mod_ShelffixedOversizeFront');
      internal_leaveValidateVariant();
      this.mod_ShelffixedOversizeFront = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedOversizeBack');
      const val = _toFloat(json['attributes']['mod_ShelffixedOversizeBack'], 'mod_ShelffixedOversizeBack');
      internal_leaveValidateVariant();
      this.mod_ShelffixedOversizeBack = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDesign');
      const val = _toString(json['attributes']['mod_HandleDesign'], 'mod_HandleDesign');
      internal_leaveValidateVariant();
      this.mod_HandleDesign = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ParentName');
      const val = _toString(json['attributes']['mod_ParentName'], 'mod_ParentName');
      internal_leaveValidateVariant();
      this.mod_ParentName = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
      const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
      internal_leaveValidateVariant();
      this.mod_ModuleName = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripBtmType');
      const val = _toString(json['attributes']['mod_FingergripBtmType'], 'mod_FingergripBtmType');
      internal_leaveValidateVariant();
      this.mod_FingergripBtmType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripTopType');
      const val = _toString(json['attributes']['mod_FingergripTopType'], 'mod_FingergripTopType');
      internal_leaveValidateVariant();
      this.mod_FingergripTopType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedTop');
      const val = _toBoolean(json['attributes']['mod_ShelffixedTop'], 'mod_ShelffixedTop');
      internal_leaveValidateVariant();
      this.mod_ShelffixedTop = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_VertDividerType');
      const val = _toString(json['attributes']['mod_VertDividerType'], 'mod_VertDividerType');
      internal_leaveValidateVariant();
      this.mod_VertDividerType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelmiddleThk');
      const val = _toFloat(json['attributes']['mod_SidepanelmiddleThk'], 'mod_SidepanelmiddleThk');
      internal_leaveValidateVariant();
      this.mod_SidepanelmiddleThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrameFillingType');
      const val = _toString(json['attributes']['mod_FrameFillingType'], 'mod_FrameFillingType');
      internal_leaveValidateVariant();
      this.mod_FrameFillingType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrameFillingColor');
      const val = _toString(json['attributes']['mod_FrameFillingColor'], 'mod_FrameFillingColor');
      internal_leaveValidateVariant();
      this.mod_FrameFillingColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_DrawerOpeningDistance');
      const val = _toFloat(json['attributes']['mod_DrawerOpeningDistance'], 'mod_DrawerOpeningDistance');
      internal_leaveValidateVariant();
      this.mod_DrawerOpeningDistance = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FirstFront');
      const val = _toBoolean(json['attributes']['mod_FirstFront'], 'mod_FirstFront');
      internal_leaveValidateVariant();
      this.mod_FirstFront = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_LastFront');
      const val = _toBoolean(json['attributes']['mod_LastFront'], 'mod_LastFront');
      internal_leaveValidateVariant();
      this.mod_LastFront = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PantryPulloutDesign');
      const val = _toString(json['attributes']['mod_PantryPulloutDesign'], 'mod_PantryPulloutDesign');
      internal_leaveValidateVariant();
      this.mod_PantryPulloutDesign = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PantryPulloutType');
      const val = _toString(json['attributes']['mod_PantryPulloutType'], 'mod_PantryPulloutType');
      internal_leaveValidateVariant();
      this.mod_PantryPulloutType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_PantryPulloutColor');
      const val = _toString(json['attributes']['mod_PantryPulloutColor'], 'mod_PantryPulloutColor');
      internal_leaveValidateVariant();
      this.mod_PantryPulloutColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontSplitDescriptor');
      const val = _toString(json['attributes']['mod_FrontSplitDescriptor'], 'mod_FrontSplitDescriptor');
      internal_leaveValidateVariant();
      this.mod_FrontSplitDescriptor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosMatrixMultiple');
      const val = _toString(json['attributes']['mod_HandlePosMatrixMultiple'], 'mod_HandlePosMatrixMultiple');
      internal_leaveValidateVariant();
      this.mod_HandlePosMatrixMultiple = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandleActivated');
      const val = _toString(json['attributes']['mod_HandleActivated'], 'mod_HandleActivated');
      internal_leaveValidateVariant();
      this.mod_HandleActivated = val;
    }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod: any) => { this.m.push(loadOrderData(subMod, this, manufacturerMode)) });
    }
    internal_leaveLoadJson();
  }
  override checkPosRelevantRequiredAttributes(): void {
    if (this.#mod_CarcaseDepth !== undefined) {
      this.#mod_CarcaseDepth = undefined;
      logWarning('The attribute "mod_CarcaseDepth" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_CarcaseHeight !== undefined) {
      this.#mod_CarcaseHeight = undefined;
      logWarning('The attribute "mod_CarcaseHeight" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_CarcaseWidth !== undefined) {
      this.#mod_CarcaseWidth = undefined;
      logWarning('The attribute "mod_CarcaseWidth" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_CarcaseId !== undefined) {
      this.#mod_CarcaseId = undefined;
      logWarning('The attribute "mod_CarcaseId" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FrontHeight !== undefined) {
      this.#mod_FrontHeight = undefined;
      logWarning('The attribute "mod_FrontHeight" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FrontHeightSelection === undefined) {
      logWarning('The required attribute "mod_FrontHeightSelection" was not set in the order data');
    }
    if (this.#mod_FrontId !== undefined) {
      this.#mod_FrontId = undefined;
      logWarning('The attribute "mod_FrontId" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FrontThk !== undefined) {
      this.#mod_FrontThk = undefined;
      logWarning('The attribute "mod_FrontThk" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FrontQtyElements !== undefined) {
      this.#mod_FrontQtyElements = undefined;
      logWarning('The attribute "mod_FrontQtyElements" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_ShelffixedThk !== undefined) {
      this.#mod_ShelffixedThk = undefined;
      logWarning('The attribute "mod_ShelffixedThk" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_ParentName !== undefined) {
      this.#mod_ParentName = undefined;
      logWarning('The attribute "mod_ParentName" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_ModuleName !== undefined) {
      this.#mod_ModuleName = undefined;
      logWarning('The attribute "mod_ModuleName" was set in the order data but is marked as "fixed" - the value is ignored');
    }
    if (this.#mod_FingergripBtmType !== undefined) {
      this.#mod_FingergripBtmType = undefined;
      logWarning('The attribute "mod_FingergripBtmType" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FingergripTopType !== undefined) {
      this.#mod_FingergripTopType = undefined;
      logWarning('The attribute "mod_FingergripTopType" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_SidepanelmiddleThk !== undefined) {
      this.#mod_SidepanelmiddleThk = undefined;
      logWarning('The attribute "mod_SidepanelmiddleThk" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_DrawerOpeningDistance !== undefined) {
      this.#mod_DrawerOpeningDistance = undefined;
      logWarning('The attribute "mod_DrawerOpeningDistance" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FirstFront !== undefined) {
      this.#mod_FirstFront = undefined;
      logWarning('The attribute "mod_FirstFront" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_LastFront !== undefined) {
      this.#mod_LastFront = undefined;
      logWarning('The attribute "mod_LastFront" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    if (this.mod_BackwallPos === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_BackwallPos')) {
          let pv = <IModVar_mod_BackwallPos>s;
          if (pv.mod_BackwallPos !== undefined) {
            this.mod_BackwallPos = (<IModVar_mod_BackwallPos>s).mod_BackwallPos;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseDepth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseDepth')) {
          let pv = <IModVar_mod_CarcaseDepth>s;
          if (pv.mod_CarcaseDepth !== undefined) {
            this.mod_CarcaseDepth = (<IModVar_mod_CarcaseDepth>s).mod_CarcaseDepth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseHeight === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseHeight')) {
          let pv = <IModVar_mod_CarcaseHeight>s;
          if (pv.mod_CarcaseHeight !== undefined) {
            this.mod_CarcaseHeight = (<IModVar_mod_CarcaseHeight>s).mod_CarcaseHeight;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseWidth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseWidth')) {
          let pv = <IModVar_mod_CarcaseWidth>s;
          if (pv.mod_CarcaseWidth !== undefined) {
            this.mod_CarcaseWidth = (<IModVar_mod_CarcaseWidth>s).mod_CarcaseWidth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseBackwallConstruction === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseBackwallConstruction')) {
          let pv = <IModVar_mod_CarcaseBackwallConstruction>s;
          if (pv.mod_CarcaseBackwallConstruction !== undefined) {
            this.mod_CarcaseBackwallConstruction = (<IModVar_mod_CarcaseBackwallConstruction>s).mod_CarcaseBackwallConstruction;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontColor')) {
          let pv = <IModVar_mod_FrontColor>s;
          if (pv.mod_FrontColor !== undefined) {
            this.mod_FrontColor = (<IModVar_mod_FrontColor>s).mod_FrontColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontDesign === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontDesign')) {
          let pv = <IModVar_mod_FrontDesign>s;
          if (pv.mod_FrontDesign !== undefined) {
            this.mod_FrontDesign = (<IModVar_mod_FrontDesign>s).mod_FrontDesign;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontGapCarcase === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontGapCarcase')) {
          let pv = <IModVar_mod_FrontGapCarcase>s;
          if (pv.mod_FrontGapCarcase !== undefined) {
            this.mod_FrontGapCarcase = (<IModVar_mod_FrontGapCarcase>s).mod_FrontGapCarcase;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontGapHor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontGapHor')) {
          let pv = <IModVar_mod_FrontGapHor>s;
          if (pv.mod_FrontGapHor !== undefined) {
            this.mod_FrontGapHor = (<IModVar_mod_FrontGapHor>s).mod_FrontGapHor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontGapVert === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontGapVert')) {
          let pv = <IModVar_mod_FrontGapVert>s;
          if (pv.mod_FrontGapVert !== undefined) {
            this.mod_FrontGapVert = (<IModVar_mod_FrontGapVert>s).mod_FrontGapVert;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandleLine === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandleLine')) {
          let pv = <IModVar_mod_HandleLine>s;
          if (pv.mod_HandleLine !== undefined) {
            this.mod_HandleLine = (<IModVar_mod_HandleLine>s).mod_HandleLine;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandlePosLogic === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandlePosLogic')) {
          let pv = <IModVar_mod_HandlePosLogic>s;
          if (pv.mod_HandlePosLogic !== undefined) {
            this.mod_HandlePosLogic = (<IModVar_mod_HandlePosLogic>s).mod_HandlePosLogic;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontProgram === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontProgram')) {
          let pv = <IModVar_mod_FrontProgram>s;
          if (pv.mod_FrontProgram !== undefined) {
            this.mod_FrontProgram = (<IModVar_mod_FrontProgram>s).mod_FrontProgram;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandleColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandleColor')) {
          let pv = <IModVar_mod_HandleColor>s;
          if (pv.mod_HandleColor !== undefined) {
            this.mod_HandleColor = (<IModVar_mod_HandleColor>s).mod_HandleColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandleLength === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandleLength')) {
          let pv = <IModVar_mod_HandleLength>s;
          if (pv.mod_HandleLength !== undefined) {
            this.mod_HandleLength = (<IModVar_mod_HandleLength>s).mod_HandleLength;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandlePosType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandlePosType')) {
          let pv = <IModVar_mod_HandlePosType>s;
          if (pv.mod_HandlePosType !== undefined) {
            this.mod_HandlePosType = (<IModVar_mod_HandlePosType>s).mod_HandlePosType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HeightPosInsertion === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HeightPosInsertion')) {
          let pv = <IModVar_mod_HeightPosInsertion>s;
          if (pv.mod_HeightPosInsertion !== undefined) {
            this.mod_HeightPosInsertion = (<IModVar_mod_HeightPosInsertion>s).mod_HeightPosInsertion;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PlinthAreaHeight === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PlinthAreaHeight')) {
          let pv = <IModVar_mod_PlinthAreaHeight>s;
          if (pv.mod_PlinthAreaHeight !== undefined) {
            this.mod_PlinthAreaHeight = (<IModVar_mod_PlinthAreaHeight>s).mod_PlinthAreaHeight;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_ShelffixedThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelffixedThk')) {
          let pv = <IModVar_mod_ShelffixedThk>s;
          if (pv.mod_ShelffixedThk !== undefined) {
            this.mod_ShelffixedThk = (<IModVar_mod_ShelffixedThk>s).mod_ShelffixedThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandleDesign === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandleDesign')) {
          let pv = <IModVar_mod_HandleDesign>s;
          if (pv.mod_HandleDesign !== undefined) {
            this.mod_HandleDesign = (<IModVar_mod_HandleDesign>s).mod_HandleDesign;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_ParentName === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ParentName')) {
          let pv = <IModVar_mod_ParentName>s;
          if (pv.mod_ParentName !== undefined) {
            this.mod_ParentName = (<IModVar_mod_ParentName>s).mod_ParentName;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_VertDividerType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_VertDividerType')) {
          let pv = <IModVar_mod_VertDividerType>s;
          if (pv.mod_VertDividerType !== undefined) {
            this.mod_VertDividerType = (<IModVar_mod_VertDividerType>s).mod_VertDividerType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_SidepanelmiddleThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_SidepanelmiddleThk')) {
          let pv = <IModVar_mod_SidepanelmiddleThk>s;
          if (pv.mod_SidepanelmiddleThk !== undefined) {
            this.mod_SidepanelmiddleThk = (<IModVar_mod_SidepanelmiddleThk>s).mod_SidepanelmiddleThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrameFillingType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrameFillingType')) {
          let pv = <IModVar_mod_FrameFillingType>s;
          if (pv.mod_FrameFillingType !== undefined) {
            this.mod_FrameFillingType = (<IModVar_mod_FrameFillingType>s).mod_FrameFillingType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrameFillingColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrameFillingColor')) {
          let pv = <IModVar_mod_FrameFillingColor>s;
          if (pv.mod_FrameFillingColor !== undefined) {
            this.mod_FrameFillingColor = (<IModVar_mod_FrameFillingColor>s).mod_FrameFillingColor;
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
    if (this.mod_CarcaseId === undefined) {
      this.mod_CarcaseId = "";
    }
    if (this.mod_FrontHeight === undefined) {
      this.mod_FrontHeight = 9999;
    }
    if (this.mod_FingergripTop === undefined) {
      this.mod_FingergripTop = false;
    }
    if (this.mod_FrontId === undefined) {
      this.mod_FrontId = "None";
    }
    if (this.mod_FrontSplit === undefined) {
      this.mod_FrontSplit = false;
    }
    if (this.mod_HandleDrill === undefined) {
      this.mod_HandleDrill = true;
    }
    if (this.mod_FrontQtyElements === undefined) {
      this.mod_FrontQtyElements = 0;
    }
    if (this.mod_ShelffixedType === undefined) {
      this.mod_ShelffixedType = "ContactBw";
    }
    if (this.mod_FrontPosStart === undefined) {
      this.mod_FrontPosStart = 0;
    }
    if (this.mod_FrontOversizeBtm === undefined) {
      this.mod_FrontOversizeBtm = 0;
    }
    if (this.mod_FrontOversizeLeft === undefined) {
      this.mod_FrontOversizeLeft = 0;
    }
    if (this.mod_FrontOversizeRight === undefined) {
      this.mod_FrontOversizeRight = 0;
    }
    if (this.mod_FrontOversizeTop === undefined) {
      this.mod_FrontOversizeTop = 0;
    }
    if (this.mod_FrontSplitType1 === undefined) {
      this.mod_FrontSplitType1 = "0";
    }
    if (this.mod_FrontSplitType2 === undefined) {
      this.mod_FrontSplitType2 = "0";
    }
    if (this.mod_HandleOffsetX === undefined) {
      this.mod_HandleOffsetX = 0;
    }
    if (this.mod_HandleOffsetY === undefined) {
      this.mod_HandleOffsetY = 0;
    }
    if (this.mod_HandlePosMatrix === undefined) {
      this.mod_HandlePosMatrix = "Center";
    }
    if (this.mod_HandlestripPos === undefined) {
      this.mod_HandlestripPos = "4";
    }
    if (this.mod_ShelffixedBtm === undefined) {
      this.mod_ShelffixedBtm = false;
    }
    if (this.mod_ShelffixedPos === undefined) {
      this.mod_ShelffixedPos = "GapMiddle";
    }
    if (this.mod_ShelffixedOffsetFront === undefined) {
      this.mod_ShelffixedOffsetFront = 0;
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mf_Drawer";
    }
    if (this.mod_FingergripBtmType === undefined) {
      this.mod_FingergripBtmType = "NoFingergrip";
    }
    if (this.mod_FingergripTopType === undefined) {
      this.mod_FingergripTopType = "NoFingergrip";
    }
    if (this.mod_ShelffixedTop === undefined) {
      this.mod_ShelffixedTop = false;
    }
    if (this.mod_DrawerOpeningDistance === undefined) {
      this.mod_DrawerOpeningDistance = 0;
    }
    if (this.mod_FirstFront === undefined) {
      this.mod_FirstFront = false;
    }
    if (this.mod_LastFront === undefined) {
      this.mod_LastFront = false;
    }
    if (this.mod_PantryPulloutDesign === undefined) {
      this.mod_PantryPulloutDesign = "Classic";
    }
    if (this.mod_PantryPulloutType === undefined) {
      this.mod_PantryPulloutType = "Dispensa";
    }
    if (this.mod_PantryPulloutColor === undefined) {
      this.mod_PantryPulloutColor = "Automatic";
    }
    if (this.mod_HandlePosMatrixMultiple === undefined) {
      this.mod_HandlePosMatrixMultiple = "Center_Center";
    }
    if (this.mod_HandleActivated === undefined) {
      this.mod_HandleActivated = "All";
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    this.#dataCompletionSetDefaultScripts_globalVars();
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
      if (this.mod_FrontWidth === undefined) {
        // ###############################################################
        // ####################### CUSTOM SCRIPTS ########################
        // ###############################################################
        // CUSTOMSCRIPT_mf_PantryPullout_mod_FrontWidth_SETDEFAULT
        this.mod_FrontWidth = this.parent.mod_Width;
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
    if (this.mod_FrontThk === undefined) {
      this.mod_FrontThk = this.g.basic_FrontThk;
    }
    if (this.mod_ShelffixedOversizeFront === undefined) {
      this.mod_ShelffixedOversizeFront = this.g.basic_ShelffixedOversizeFront;
    }
    if (this.mod_ShelffixedOversizeBack === undefined) {
      this.mod_ShelffixedOversizeBack = this.g.basic_ShelffixedOversizeBack;
    }
    if (this.mod_FrontSplitDescriptor === undefined) {
      this.mod_FrontSplitDescriptor = this.g.basic_FrontSplitDescriptor;
    }
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
  #manufacturerDataCompletionInternal = mf_PantryPullout_manufacturerDataCompletion;
  override afterDataCompletion(): void {
    if (this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mf_PantryPullout_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mf_PantryPullout {
    this.afterDataCompletion();
    const adc = new OD_M_mf_PantryPullout_NonNull(this);
    return adc;
  }

  addOD_M_mc_PantryPullout01(index?: number): dc_mc_PantryPullout01 {
    var m = new OD_M_mc_PantryPullout01(this);
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
    this.mod_BackwallPos_matrix = VariantValidation.mod_BackwallPos(this, this.mod_BackwallPos);
    this.mod_CarcaseDepth_matrix = VariantValidation.mod_CarcaseDepth(this, this.mod_CarcaseDepth);
    this.mod_CarcaseHeight_matrix = VariantValidation.mod_CarcaseHeight(this, this.mod_CarcaseHeight);
    this.mod_CarcaseWidth_matrix = VariantValidation.mod_CarcaseWidth(this, this.mod_CarcaseWidth);
    this.mod_CarcaseBackwallConstruction_matrix = VariantValidation.mod_CarcaseBackwallConstruction(this, this.mod_CarcaseBackwallConstruction);
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this.mod_CarcaseId);
    this.mod_FrontColor_matrix = VariantValidation.mod_FrontColor(this, this.mod_FrontColor);
    this.mod_FrontDesign_matrix = VariantValidation.mod_FrontDesign(this, this.mod_FrontDesign);
    this.mod_FrontGapCarcase_matrix = VariantValidation.mod_FrontGapCarcase(this, this.mod_FrontGapCarcase);
    this.mod_FrontGapHor_matrix = VariantValidation.mod_FrontGapHor(this, this.mod_FrontGapHor);
    this.mod_FrontGapVert_matrix = VariantValidation.mod_FrontGapVert(this, this.mod_FrontGapVert);
    this.mod_FrontHeight_matrix = VariantValidation.mod_FrontHeight(this, this.mod_FrontHeight);
    this.mod_FrontHeightSelection_matrix = VariantValidation.mod_FrontHeightSelection(this, this.mod_FrontHeightSelection);
    this.mod_FingergripTop_matrix = VariantValidation.mod_FingergripTop(this, this.mod_FingergripTop);
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this.mod_FrontId);
    this.mod_FrontSplit_matrix = VariantValidation.mod_FrontSplit(this, this.mod_FrontSplit);
    this.mod_FrontThk_matrix = VariantValidation.mod_FrontThk(this, this.mod_FrontThk);
    this.mod_FrontWidth_matrix = VariantValidation.mod_FrontWidth(this, this.mod_FrontWidth);
    this.mod_HandleDrill_matrix = VariantValidation.mod_HandleDrill(this, this.mod_HandleDrill);
    this.mod_HandleLine_matrix = VariantValidation.mod_HandleLine(this, this.mod_HandleLine);
    this.mod_HandlePosLogic_matrix = VariantValidation.mod_HandlePosLogic(this, this.mod_HandlePosLogic);
    this.mod_FrontQtyElements_matrix = VariantValidation.mod_FrontQtyElements(this, this.mod_FrontQtyElements);
    this.mod_ShelffixedType_matrix = VariantValidation.mod_ShelffixedType(this, this.mod_ShelffixedType);
    this.mod_FrontPosStart_matrix = VariantValidation.mod_FrontPosStart(this, this.mod_FrontPosStart);
    this.mod_FrontOversizeBtm_matrix = VariantValidation.mod_FrontOversizeBtm(this, this.mod_FrontOversizeBtm);
    this.mod_FrontOversizeLeft_matrix = VariantValidation.mod_FrontOversizeLeft(this, this.mod_FrontOversizeLeft);
    this.mod_FrontOversizeRight_matrix = VariantValidation.mod_FrontOversizeRight(this, this.mod_FrontOversizeRight);
    this.mod_FrontOversizeTop_matrix = VariantValidation.mod_FrontOversizeTop(this, this.mod_FrontOversizeTop);
    this.mod_FrontProgram_matrix = VariantValidation.mod_FrontProgram(this, this.mod_FrontProgram);
    this.mod_FrontSplitType1_matrix = VariantValidation.mod_FrontSplitType1(this, this.mod_FrontSplitType1);
    this.mod_FrontSplitType2_matrix = VariantValidation.mod_FrontSplitType2(this, this.mod_FrontSplitType2);
    this.mod_HandleColor_matrix = VariantValidation.mod_HandleColor(this, this.mod_HandleColor);
    this.mod_HandleLength_matrix = VariantValidation.mod_HandleLength(this, this.mod_HandleLength);
    this.mod_HandleOffsetX_matrix = VariantValidation.mod_HandleOffsetX(this, this.mod_HandleOffsetX);
    this.mod_HandleOffsetY_matrix = VariantValidation.mod_HandleOffsetY(this, this.mod_HandleOffsetY);
    this.mod_HandlePosMatrix_matrix = VariantValidation.mod_HandlePosMatrix(this, this.mod_HandlePosMatrix);
    this.mod_HandlePosType_matrix = VariantValidation.mod_HandlePosType(this, this.mod_HandlePosType);
    this.mod_HandlestripPos_matrix = VariantValidation.mod_HandlestripPos(this, this.mod_HandlestripPos);
    this.mod_HeightPosInsertion_matrix = VariantValidation.mod_HeightPosInsertion(this, this.mod_HeightPosInsertion);
    this.mod_PlinthAreaHeight_matrix = VariantValidation.mod_PlinthAreaHeight(this, this.mod_PlinthAreaHeight);
    this.mod_ShelffixedBtm_matrix = VariantValidation.mod_ShelffixedBtm(this, this.mod_ShelffixedBtm);
    this.mod_ShelffixedPos_matrix = VariantValidation.mod_ShelffixedPos(this, this.mod_ShelffixedPos);
    this.mod_ShelffixedOffsetFront_matrix = VariantValidation.mod_ShelffixedOffsetFront(this, this.mod_ShelffixedOffsetFront);
    this.mod_ShelffixedThk_matrix = VariantValidation.mod_ShelffixedThk(this, this.mod_ShelffixedThk);
    this.mod_ShelffixedOversizeFront_matrix = VariantValidation.mod_ShelffixedOversizeFront(this, this.mod_ShelffixedOversizeFront);
    this.mod_ShelffixedOversizeBack_matrix = VariantValidation.mod_ShelffixedOversizeBack(this, this.mod_ShelffixedOversizeBack);
    this.mod_HandleDesign_matrix = VariantValidation.mod_HandleDesign(this, this.mod_HandleDesign);
    this.mod_ParentName_matrix = VariantValidation.mod_ParentName(this, this.mod_ParentName);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this.mod_ModuleName);
    this.mod_FingergripBtmType_matrix = VariantValidation.mod_FingergripBtmType(this, this.mod_FingergripBtmType);
    this.mod_FingergripTopType_matrix = VariantValidation.mod_FingergripTopType(this, this.mod_FingergripTopType);
    this.mod_ShelffixedTop_matrix = VariantValidation.mod_ShelffixedTop(this, this.mod_ShelffixedTop);
    this.mod_VertDividerType_matrix = VariantValidation.mod_VertDividerType(this, this.mod_VertDividerType);
    this.mod_SidepanelmiddleThk_matrix = VariantValidation.mod_SidepanelmiddleThk(this, this.mod_SidepanelmiddleThk);
    this.mod_FrameFillingType_matrix = VariantValidation.mod_FrameFillingType(this, this.mod_FrameFillingType);
    this.mod_FrameFillingColor_matrix = VariantValidation.mod_FrameFillingColor(this, this.mod_FrameFillingColor);
    this.mod_DrawerOpeningDistance_matrix = VariantValidation.mod_DrawerOpeningDistance(this, this.mod_DrawerOpeningDistance);
    this.mod_FirstFront_matrix = VariantValidation.mod_FirstFront(this, this.mod_FirstFront);
    this.mod_LastFront_matrix = VariantValidation.mod_LastFront(this, this.mod_LastFront);
    this.mod_PantryPulloutDesign_matrix = VariantValidation.mod_PantryPulloutDesign(this, this.mod_PantryPulloutDesign);
    this.mod_PantryPulloutType_matrix = VariantValidation.mod_PantryPulloutType(this, this.mod_PantryPulloutType);
    this.mod_PantryPulloutColor_matrix = VariantValidation.mod_PantryPulloutColor(this, this.mod_PantryPulloutColor);
    this.mod_FrontSplitDescriptor_matrix = VariantValidation.mod_FrontSplitDescriptor(this, this.mod_FrontSplitDescriptor);
    this.mod_HandlePosMatrixMultiple_matrix = VariantValidation.mod_HandlePosMatrixMultiple(this, this.mod_HandlePosMatrixMultiple);
    this.mod_HandleActivated_matrix = VariantValidation.mod_HandleActivated(this, this.mod_HandleActivated);
  }

  override calculateContainerModules(): void {
    let ccm = new OD_M_mf_PantryPullout_NonNull(this);
    ccm.calculateContainerModules();
    this.m.forEach(subMod => subMod.calculateContainerModules());
  }


  override createBuildPlan(): void {
    var cbp = new OD_M_mf_PantryPullout_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mf_PantryPullout_NonNull implements cbp_mf_PantryPullout, adc_mf_PantryPullout, ccm_mf_PantryPullout, IPartParentsNonNull_mf_PantryPullout {
  constructor(parent: OD_M_mf_PantryPullout) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mf_PantryPullout;

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
  #createBuildPlanInternal = mf_PantryPullout_createBuildPlan;
  afterDataCompletion(): void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mf_PantryPullout_afterDataCompletion;
  calculateContainerModules(): void {
    this.#calculateContainerModulesInternal();
  }
  #calculateContainerModulesInternal = mf_PantryPullout_calculateContainerModules;
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
  parent: IModParents_mr_StorageunitSingle;
  get mod_CarcaseSpaceDimension(): string[] {
    return this.#internalParent.mod_CarcaseSpaceDimension!;
  }
  get mod_BackwallPos(): number {
    return this.#internalParent.mod_BackwallPos!;
  }
  get mod_CarcaseDepth(): number {
    return this.#internalParent.mod_CarcaseDepth!;
  }
  get mod_CarcaseHeight(): number {
    return this.#internalParent.mod_CarcaseHeight!;
  }
  get mod_CarcaseWidth(): number {
    return this.#internalParent.mod_CarcaseWidth!;
  }
  get mod_CarcaseBackwallConstruction(): string {
    return this.#internalParent.mod_CarcaseBackwallConstruction!;
  }
  get mod_CarcaseId(): string {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_FrontColor(): string {
    return this.#internalParent.mod_FrontColor!;
  }
  get mod_FrontColor_matrix(): IMatrix_mod_FrontColor {
    return this.#internalParent.mod_FrontColor_matrix!;
  }
  get mod_FrontDesign(): string {
    return this.#internalParent.mod_FrontDesign!;
  }
  get mod_FrontGapCarcase(): number {
    return this.#internalParent.mod_FrontGapCarcase!;
  }
  get mod_FrontGapHor(): number {
    return this.#internalParent.mod_FrontGapHor!;
  }
  get mod_FrontGapVert(): number {
    return this.#internalParent.mod_FrontGapVert!;
  }
  get mod_FrontHeight(): number {
    return this.#internalParent.mod_FrontHeight!;
  }
  get mod_FrontHeightSelection(): number {
    return this.#internalParent.mod_FrontHeightSelection!;
  }
  get mod_FingergripTop(): boolean {
    return this.#internalParent.mod_FingergripTop!;
  }
  get mod_FrontId(): string {
    return this.#internalParent.mod_FrontId!;
  }
  get mod_FrontSplit(): boolean {
    return this.#internalParent.mod_FrontSplit!;
  }
  get mod_FrontThk(): number {
    return this.#internalParent.mod_FrontThk!;
  }
  get mod_FrontWidth(): number {
    return this.#internalParent.mod_FrontWidth!;
  }
  get mod_HandleDrill(): boolean {
    return this.#internalParent.mod_HandleDrill!;
  }
  get mod_HandleLine(): number {
    return this.#internalParent.mod_HandleLine!;
  }
  get mod_HandlePosLogic(): string {
    return this.#internalParent.mod_HandlePosLogic!;
  }
  get mod_FrontQtyElements(): number {
    return this.#internalParent.mod_FrontQtyElements!;
  }
  get mod_ShelffixedType(): string {
    return this.#internalParent.mod_ShelffixedType!;
  }
  get mod_FrontPosStart(): number {
    return this.#internalParent.mod_FrontPosStart!;
  }
  get mod_FrontOversizeBtm(): number {
    return this.#internalParent.mod_FrontOversizeBtm!;
  }
  get mod_FrontOversizeLeft(): number {
    return this.#internalParent.mod_FrontOversizeLeft!;
  }
  get mod_FrontOversizeRight(): number {
    return this.#internalParent.mod_FrontOversizeRight!;
  }
  get mod_FrontOversizeTop(): number {
    return this.#internalParent.mod_FrontOversizeTop!;
  }
  get mod_FrontProgram(): string {
    return this.#internalParent.mod_FrontProgram!;
  }
  get mod_FrontProgram_matrix(): IMatrix_mod_FrontProgram {
    return this.#internalParent.mod_FrontProgram_matrix!;
  }
  get mod_FrontSplitType1(): string {
    return this.#internalParent.mod_FrontSplitType1!;
  }
  get mod_FrontSplitType2(): string {
    return this.#internalParent.mod_FrontSplitType2!;
  }
  get mod_HandleColor(): string {
    return this.#internalParent.mod_HandleColor!;
  }
  get mod_HandleLength(): number {
    return this.#internalParent.mod_HandleLength!;
  }
  get mod_HandleOffsetX(): number {
    return this.#internalParent.mod_HandleOffsetX!;
  }
  get mod_HandleOffsetY(): number {
    return this.#internalParent.mod_HandleOffsetY!;
  }
  get mod_HandlePosMatrix(): string {
    return this.#internalParent.mod_HandlePosMatrix!;
  }
  get mod_HandlePosMatrix_matrix(): IMatrix_mod_HandlePosMatrix {
    return this.#internalParent.mod_HandlePosMatrix_matrix!;
  }
  get mod_HandlePosType(): string {
    return this.#internalParent.mod_HandlePosType!;
  }
  get mod_HandlestripPos(): string {
    return this.#internalParent.mod_HandlestripPos!;
  }
  get mod_HeightPosInsertion(): number {
    return this.#internalParent.mod_HeightPosInsertion!;
  }
  get mod_PlinthAreaHeight(): number {
    return this.#internalParent.mod_PlinthAreaHeight!;
  }
  get mod_ShelffixedBtm(): boolean {
    return this.#internalParent.mod_ShelffixedBtm!;
  }
  get mod_ShelffixedPos(): string {
    return this.#internalParent.mod_ShelffixedPos!;
  }
  get mod_ShelffixedOffsetFront(): number {
    return this.#internalParent.mod_ShelffixedOffsetFront!;
  }
  get mod_ShelffixedThk(): number {
    return this.#internalParent.mod_ShelffixedThk!;
  }
  get mod_ShelffixedOversizeFront(): number {
    return this.#internalParent.mod_ShelffixedOversizeFront!;
  }
  get mod_ShelffixedOversizeBack(): number {
    return this.#internalParent.mod_ShelffixedOversizeBack!;
  }
  get mod_HandleDesign(): string {
    return this.#internalParent.mod_HandleDesign!;
  }
  get mod_HandleDesign_matrix(): IMatrix_mod_HandleDesign {
    return this.#internalParent.mod_HandleDesign_matrix!;
  }
  get mod_Originpos(): number[] {
    return this.#internalParent.mod_Originpos!;
  }
  get mod_ParentName(): string {
    return this.#internalParent.mod_ParentName!;
  }
  get mod_ModuleName(): string {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_FingergripBtmType(): string {
    return this.#internalParent.mod_FingergripBtmType!;
  }
  get mod_FingergripTopType(): string {
    return this.#internalParent.mod_FingergripTopType!;
  }
  get mod_ShelffixedTop(): boolean {
    return this.#internalParent.mod_ShelffixedTop!;
  }
  get mod_VertDividerType(): string {
    return this.#internalParent.mod_VertDividerType!;
  }
  get mod_VertDividerType_matrix(): IMatrix_mod_VertDividerType {
    return this.#internalParent.mod_VertDividerType_matrix!;
  }
  get mod_SidepanelmiddleThk(): number {
    return this.#internalParent.mod_SidepanelmiddleThk!;
  }
  get mod_FrameFillingType(): string {
    return this.#internalParent.mod_FrameFillingType!;
  }
  get mod_FrameFillingColor(): string {
    return this.#internalParent.mod_FrameFillingColor!;
  }
  get mod_FrameFillingColor_matrix(): IMatrix_mod_FrameFillingColor {
    return this.#internalParent.mod_FrameFillingColor_matrix!;
  }
  get mod_DrawerOpeningDistance(): number {
    return this.#internalParent.mod_DrawerOpeningDistance!;
  }
  get mod_FirstFront(): boolean {
    return this.#internalParent.mod_FirstFront!;
  }
  get mod_LastFront(): boolean {
    return this.#internalParent.mod_LastFront!;
  }
  get mod_PantryPulloutDesign(): string {
    return this.#internalParent.mod_PantryPulloutDesign!;
  }
  get mod_PantryPulloutType(): string {
    return this.#internalParent.mod_PantryPulloutType!;
  }
  get mod_PantryPulloutColor(): string {
    return this.#internalParent.mod_PantryPulloutColor!;
  }
  get mod_FrontSplitDescriptor(): string {
    return this.#internalParent.mod_FrontSplitDescriptor!;
  }
  get mod_HandlePosMatrixMultiple(): string {
    return this.#internalParent.mod_HandlePosMatrixMultiple!;
  }
  get mod_HandlePosMatrixMultiple_matrix(): IMatrix_mod_HandlePosMatrixMultiple {
    return this.#internalParent.mod_HandlePosMatrixMultiple_matrix!;
  }
  get mod_HandleActivated(): string {
    return this.#internalParent.mod_HandleActivated!;
  }
  addOD_M_mc_PantryPullout01(index?: number): dc_mc_PantryPullout01 {
    return this.#internalParent.addOD_M_mc_PantryPullout01(index);
  }
}

