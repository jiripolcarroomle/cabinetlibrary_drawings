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
import { IModParents_mr_Filler_mr_StorageunitSingle } from '../mod-interfaces'
import { OD_M_mc_StorageunitSidepanel01, dc_mc_StorageunitSidepanel01 } from './mc_StorageunitSidepanel01'
import { OD_M_mc_StorageunitShelfbtm01, dc_mc_StorageunitShelfbtm01 } from './mc_StorageunitShelfbtm01'
import { OD_M_mc_StorageunitShelftop01, dc_mc_StorageunitShelftop01 } from './mc_StorageunitShelftop01'
import { OD_M_mc_FillerFront01, dc_mc_FillerFront01 } from './mc_FillerFront01'
import { IModuleNonNull_mc_Filler01, IModParents_mc_Cornerunit01_mc_Filler01_mc_Storageunit01_mc_VertDivider01, IModParents_mc_Filler01_mc_Storageunit01, IModParents_mc_Filler01_mf_FillerFront, IPartParentsNonNull_mc_Cornerunit01_mc_Filler01_mc_Storageunit01_mc_VertDivider01, IPartParentsNonNull_mc_Filler01_mc_Storageunit01, IPartParentsNonNull_mc_Filler01_mf_FillerFront } from '../mod-interfaces'
import { IModVar_mod_CarcaseColor, IModVarNonNull_mod_CarcaseColor, IModVar_mod_CarcaseDistanceWall, IModVarNonNull_mod_CarcaseDistanceWall, IModVar_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseEdgeColor, IModVar_mod_CarcaseEdgeFrontColor, IModVarNonNull_mod_CarcaseEdgeFrontColor, IModVar_mod_CarcaseFrontConstruction, IModVarNonNull_mod_CarcaseFrontConstruction, IModVar_mod_CarcaseProgram, IModVarNonNull_mod_CarcaseProgram, IModVar_mod_CountertopInfo, IModVarNonNull_mod_CountertopInfo, IModVar_mod_CountertopThk, IModVarNonNull_mod_CountertopThk, IModVar_mod_CreateBacksplash, IModVarNonNull_mod_CreateBacksplash, IModVar_mod_CreateCountertop, IModVarNonNull_mod_CreateCountertop, IModVar_mod_CreateFingergrip, IModVarNonNull_mod_CreateFingergrip, IModVar_mod_CreatePaneltop, IModVarNonNull_mod_CreatePaneltop, IModVar_mod_CreateToekick, IModVarNonNull_mod_CreateToekick, IModVar_mod_Depth, IModVarNonNull_mod_Depth, IModVar_mod_Direction, IModVarNonNull_mod_Direction, IModVar_mod_FillerHardware, IModVarNonNull_mod_FillerHardware, IModVar_mod_FillerType, IModVarNonNull_mod_FillerType, IModVar_mod_FingergripType, IModVarNonNull_mod_FingergripType, IModVar_mod_FrontColor, IModVarNonNull_mod_FrontColor, IModVar_mod_FrontDesign, IModVarNonNull_mod_FrontDesign, IModVar_mod_FrontEdgeColor, IModVarNonNull_mod_FrontEdgeColor, IModVar_mod_FrontEdgeThk, IModVarNonNull_mod_FrontEdgeThk, IModVar_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapCarcase, IModVar_mod_FrontGapHorTop, IModVarNonNull_mod_FrontGapHorTop, IModVar_mod_FrontGapHor, IModVarNonNull_mod_FrontGapHor, IModVar_mod_FrontPosStart, IModVarNonNull_mod_FrontPosStart, IModVar_mod_FrontGapVert, IModVarNonNull_mod_FrontGapVert, IModVar_mod_GlobalFrontOversizeBtm, IModVarNonNull_mod_GlobalFrontOversizeBtm, IModVar_mod_FrontProgram, IModVarNonNull_mod_FrontProgram, IModVar_mod_GlobalFrontOversizeRight, IModVarNonNull_mod_GlobalFrontOversizeRight, IModVar_mod_GlobalFrontOversizeLeft, IModVarNonNull_mod_GlobalFrontOversizeLeft, IModVar_mod_GlobalFrontOversizeTop, IModVarNonNull_mod_GlobalFrontOversizeTop, IModVar_mod_HardwareColor, IModVarNonNull_mod_HardwareColor, IModVar_mod_Height, IModVarNonNull_mod_Height, IModVar_mod_HeightPosInsertion, IModVarNonNull_mod_HeightPosInsertion, IModVar_mod_ModuleName, IModVarNonNull_mod_ModuleName, IModVar_mod_ParentName, IModVarNonNull_mod_ParentName, IModVar_mod_ShelfbtmThk, IModVarNonNull_mod_ShelfbtmThk, IModVar_mod_ShelftopThk, IModVarNonNull_mod_ShelftopThk, IModVar_mod_SidepanelleftThk, IModVarNonNull_mod_SidepanelleftThk, IModVar_mod_SidepanelrightThk, IModVarNonNull_mod_SidepanelrightThk, IModVar_mod_TypeElement, IModVarNonNull_mod_TypeElement, IModVar_mod_Width, IModVarNonNull_mod_Width } from '../var-interfaces'
import { VariantValidation, IMatrix_mod_CarcaseColor, IMatrix_mod_CarcaseDistanceWall, IMatrix_mod_CarcaseEdgeColor, IMatrix_mod_CarcaseEdgeFrontColor, IMatrix_mod_CarcaseFrontConstruction, IMatrix_mod_CarcaseProgram, IMatrix_mod_CountertopThk, IMatrix_mod_CreateBacksplash, IMatrix_mod_CreateCountertop, IMatrix_mod_CreateFingergrip, IMatrix_mod_CreatePaneltop, IMatrix_mod_CreateToekick, IMatrix_mod_Depth, IMatrix_mod_Direction, IMatrix_mod_FillerHardware, IMatrix_mod_FillerType, IMatrix_mod_FingergripType, IMatrix_mod_FrontColor, IMatrix_mod_FrontDesign, IMatrix_mod_FrontEdgeColor, IMatrix_mod_FrontEdgeThk, IMatrix_mod_FrontGapCarcase, IMatrix_mod_FrontGapHorTop, IMatrix_mod_FrontGapHor, IMatrix_mod_FrontPosStart, IMatrix_mod_FrontGapVert, IMatrix_mod_GlobalFrontOversizeBtm, IMatrix_mod_FrontProgram, IMatrix_mod_GlobalFrontOversizeRight, IMatrix_mod_GlobalFrontOversizeLeft, IMatrix_mod_GlobalFrontOversizeTop, IMatrix_mod_HardwareColor, IMatrix_mod_Height, IMatrix_mod_HeightPosInsertion, IMatrix_mod_ModuleName, IMatrix_mod_ParentName, IMatrix_mod_ShelfbtmThk, IMatrix_mod_ShelftopThk, IMatrix_mod_SidepanelleftThk, IMatrix_mod_SidepanelrightThk, IMatrix_mod_TypeElement, IMatrix_mod_Width } from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { mc_Filler01_createBuildPlan, mc_Filler01_afterDataCompletion, mc_Filler01_manufacturerDataCompletion, mc_Filler01_calculateContainerModules } from '../../modules/mc_Filler01';

export interface cbp_mc_Filler01 extends IModBaseProp
  , IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseDistanceWall, IModVarNonNull_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseEdgeFrontColor, IModVarNonNull_mod_CarcaseFrontConstruction, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_CountertopInfo, IModVarNonNull_mod_CountertopThk, IModVarNonNull_mod_CreateBacksplash, IModVarNonNull_mod_CreateCountertop, IModVarNonNull_mod_CreateFingergrip, IModVarNonNull_mod_CreatePaneltop, IModVarNonNull_mod_CreateToekick, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Direction, IModVarNonNull_mod_FillerHardware, IModVarNonNull_mod_FillerType, IModVarNonNull_mod_FingergripType, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontEdgeColor, IModVarNonNull_mod_FrontEdgeThk, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHorTop, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_GlobalFrontOversizeBtm, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_GlobalFrontOversizeRight, IModVarNonNull_mod_GlobalFrontOversizeLeft, IModVarNonNull_mod_GlobalFrontOversizeTop, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_Height, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_ShelfbtmThk, IModVarNonNull_mod_ShelftopThk, IModVarNonNull_mod_SidepanelleftThk, IModVarNonNull_mod_SidepanelrightThk, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_Width {
  parent: IModParents_mr_Filler_mr_StorageunitSingle;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mc_Filler01 extends IModBaseProp
  , IModVar_mod_CarcaseColor, IModVar_mod_CarcaseDistanceWall, IModVar_mod_CarcaseEdgeColor, IModVar_mod_CarcaseEdgeFrontColor, IModVar_mod_CarcaseFrontConstruction, IModVar_mod_CarcaseProgram, IModVar_mod_CountertopInfo, IModVar_mod_CountertopThk, IModVar_mod_CreateBacksplash, IModVar_mod_CreateCountertop, IModVar_mod_CreateFingergrip, IModVar_mod_CreatePaneltop, IModVar_mod_CreateToekick, IModVar_mod_Depth, IModVar_mod_Direction, IModVar_mod_FillerHardware, IModVar_mod_FillerType, IModVar_mod_FingergripType, IModVar_mod_FrontColor, IModVar_mod_FrontDesign, IModVar_mod_FrontEdgeColor, IModVar_mod_FrontEdgeThk, IModVar_mod_FrontGapCarcase, IModVar_mod_FrontGapHorTop, IModVar_mod_FrontGapHor, IModVar_mod_FrontPosStart, IModVar_mod_FrontGapVert, IModVar_mod_GlobalFrontOversizeBtm, IModVar_mod_FrontProgram, IModVar_mod_GlobalFrontOversizeRight, IModVar_mod_GlobalFrontOversizeLeft, IModVar_mod_GlobalFrontOversizeTop, IModVar_mod_HardwareColor, IModVar_mod_Height, IModVar_mod_HeightPosInsertion, IModVar_mod_ModuleName, IModVar_mod_ParentName, IModVar_mod_ShelfbtmThk, IModVar_mod_ShelftopThk, IModVar_mod_SidepanelleftThk, IModVar_mod_SidepanelrightThk, IModVar_mod_TypeElement, IModVar_mod_Width {
  m: OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  seal(): IModuleNonNull_mc_Filler01;
  parent: IModParents_mr_Filler_mr_StorageunitSingle;
  addOD_M_mc_StorageunitSidepanel01(index?: number): dc_mc_StorageunitSidepanel01;
  addOD_M_mc_StorageunitShelfbtm01(index?: number): dc_mc_StorageunitShelfbtm01;
  addOD_M_mc_StorageunitShelftop01(index?: number): dc_mc_StorageunitShelftop01;
  addOD_M_mc_FillerFront01(index?: number): dc_mc_FillerFront01;
}

export interface adc_base_mc_Filler01 extends IModBaseProp
  , IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseDistanceWall, IModVarNonNull_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseEdgeFrontColor, IModVarNonNull_mod_CarcaseFrontConstruction, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_CountertopInfo, IModVarNonNull_mod_CountertopThk, IModVarNonNull_mod_CreateBacksplash, IModVarNonNull_mod_CreateCountertop, IModVarNonNull_mod_CreateFingergrip, IModVarNonNull_mod_CreatePaneltop, IModVarNonNull_mod_CreateToekick, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Direction, IModVarNonNull_mod_FillerHardware, IModVarNonNull_mod_FillerType, IModVarNonNull_mod_FingergripType, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontEdgeColor, IModVarNonNull_mod_FrontEdgeThk, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHorTop, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_GlobalFrontOversizeBtm, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_GlobalFrontOversizeRight, IModVarNonNull_mod_GlobalFrontOversizeLeft, IModVarNonNull_mod_GlobalFrontOversizeTop, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_Height, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_ShelfbtmThk, IModVarNonNull_mod_ShelftopThk, IModVarNonNull_mod_SidepanelleftThk, IModVarNonNull_mod_SidepanelrightThk, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_Width {
  get m(): OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
}

export interface adc_mc_Filler01 extends adc_base_mc_Filler01 {
  addOD_M_mc_StorageunitSidepanel01(index?: number): dc_mc_StorageunitSidepanel01;
  addOD_M_mc_StorageunitShelfbtm01(index?: number): dc_mc_StorageunitShelfbtm01;
  addOD_M_mc_StorageunitShelftop01(index?: number): dc_mc_StorageunitShelftop01;
  addOD_M_mc_FillerFront01(index?: number): dc_mc_FillerFront01;
}

export interface ccm_mc_Filler01 extends adc_base_mc_Filler01 {
}


export class OD_M_mc_Filler01 extends OD_Base implements dc_mc_Filler01
  , IModParents_mc_Cornerunit01_mc_Filler01_mc_Storageunit01_mc_VertDivider01, IModParents_mc_Filler01_mc_Storageunit01, IModParents_mc_Filler01_mf_FillerFront
  , IModVar_mod_CarcaseColor, IModVar_mod_CarcaseDistanceWall, IModVar_mod_CarcaseEdgeColor, IModVar_mod_CarcaseEdgeFrontColor, IModVar_mod_CarcaseFrontConstruction, IModVar_mod_CarcaseProgram, IModVar_mod_CountertopInfo, IModVar_mod_CountertopThk, IModVar_mod_CreateBacksplash, IModVar_mod_CreateCountertop, IModVar_mod_CreateFingergrip, IModVar_mod_CreatePaneltop, IModVar_mod_CreateToekick, IModVar_mod_Depth, IModVar_mod_Direction, IModVar_mod_FillerHardware, IModVar_mod_FillerType, IModVar_mod_FingergripType, IModVar_mod_FrontColor, IModVar_mod_FrontDesign, IModVar_mod_FrontEdgeColor, IModVar_mod_FrontEdgeThk, IModVar_mod_FrontGapCarcase, IModVar_mod_FrontGapHorTop, IModVar_mod_FrontGapHor, IModVar_mod_FrontPosStart, IModVar_mod_FrontGapVert, IModVar_mod_GlobalFrontOversizeBtm, IModVar_mod_FrontProgram, IModVar_mod_GlobalFrontOversizeRight, IModVar_mod_GlobalFrontOversizeLeft, IModVar_mod_GlobalFrontOversizeTop, IModVar_mod_HardwareColor, IModVar_mod_Height, IModVar_mod_HeightPosInsertion, IModVar_mod_ModuleName, IModVar_mod_ParentName, IModVar_mod_ShelfbtmThk, IModVar_mod_ShelftopThk, IModVar_mod_SidepanelleftThk, IModVar_mod_SidepanelrightThk, IModVar_mod_TypeElement, IModVar_mod_Width {
  constructor(parent: IModParents_mr_Filler_mr_StorageunitSingle, manufacturerMode?: boolean) {
    super('mc_Filler01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_Filler01_NonNull(this);
  }
  parent: IModParents_mr_Filler_mr_StorageunitSingle;
  _selfNonNull: OD_M_mc_Filler01_NonNull;

  override variants: string[] = ['mod_CarcaseColor', 'mod_CarcaseDistanceWall', 'mod_CarcaseEdgeColor', 'mod_CarcaseEdgeFrontColor', 'mod_CarcaseFrontConstruction', 'mod_CarcaseProgram', 'mod_CountertopInfo', 'mod_CountertopThk', 'mod_CreateBacksplash', 'mod_CreateCountertop', 'mod_CreateFingergrip', 'mod_CreatePaneltop', 'mod_CreateToekick', 'mod_Depth', 'mod_Direction', 'mod_FillerHardware', 'mod_FillerType', 'mod_FingergripType', 'mod_FrontColor', 'mod_FrontDesign', 'mod_FrontEdgeColor', 'mod_FrontEdgeThk', 'mod_FrontGapCarcase', 'mod_FrontGapHorTop', 'mod_FrontGapHor', 'mod_FrontPosStart', 'mod_FrontGapVert', 'mod_GlobalFrontOversizeBtm', 'mod_FrontProgram', 'mod_GlobalFrontOversizeRight', 'mod_GlobalFrontOversizeLeft', 'mod_GlobalFrontOversizeTop', 'mod_HardwareColor', 'mod_Height', 'mod_HeightPosInsertion', 'mod_ModuleName', 'mod_ParentName', 'mod_ShelfbtmThk', 'mod_ShelftopThk', 'mod_SidepanelleftThk', 'mod_SidepanelrightThk', 'mod_TypeElement', 'mod_Width',];
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
  #mod_CarcaseDistanceWall?: number;
  get mod_CarcaseDistanceWall(): number | undefined { return this.#mod_CarcaseDistanceWall }
  set mod_CarcaseDistanceWall(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseDistanceWall' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseDistanceWall === value) return;
    this.#mod_CarcaseDistanceWall = value;
  }

  mod_CarcaseDistanceWall_matrix?: IMatrix_mod_CarcaseDistanceWall;
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
  #mod_CarcaseFrontConstruction?: string;
  get mod_CarcaseFrontConstruction(): string | undefined { return this.#mod_CarcaseFrontConstruction }
  set mod_CarcaseFrontConstruction(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CarcaseFrontConstruction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CarcaseFrontConstruction === value) return;
    this.#mod_CarcaseFrontConstruction = value;
  }

  mod_CarcaseFrontConstruction_matrix?: IMatrix_mod_CarcaseFrontConstruction;
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
  #mod_CountertopInfo: string[] = [];
  get mod_CountertopInfo(): string[] { return this.#mod_CountertopInfo; }
  #mod_CountertopThk?: number;
  get mod_CountertopThk(): number | undefined { return this.#mod_CountertopThk }
  set mod_CountertopThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CountertopThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CountertopThk === value) return;
    this.#mod_CountertopThk = value;
  }

  mod_CountertopThk_matrix?: IMatrix_mod_CountertopThk;
  #mod_CreateBacksplash?: boolean;
  get mod_CreateBacksplash(): boolean | undefined { return this.#mod_CreateBacksplash }
  set mod_CreateBacksplash(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CreateBacksplash' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CreateBacksplash === value) return;
    this.#mod_CreateBacksplash = value;
  }

  mod_CreateBacksplash_matrix?: IMatrix_mod_CreateBacksplash;
  #mod_CreateCountertop?: boolean;
  get mod_CreateCountertop(): boolean | undefined { return this.#mod_CreateCountertop }
  set mod_CreateCountertop(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CreateCountertop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CreateCountertop === value) return;
    this.#mod_CreateCountertop = value;
  }

  mod_CreateCountertop_matrix?: IMatrix_mod_CreateCountertop;
  #mod_CreateFingergrip?: boolean;
  get mod_CreateFingergrip(): boolean | undefined { return this.#mod_CreateFingergrip }
  set mod_CreateFingergrip(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CreateFingergrip' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CreateFingergrip === value) return;
    this.#mod_CreateFingergrip = value;
  }

  mod_CreateFingergrip_matrix?: IMatrix_mod_CreateFingergrip;
  #mod_CreatePaneltop?: boolean;
  get mod_CreatePaneltop(): boolean | undefined { return this.#mod_CreatePaneltop }
  set mod_CreatePaneltop(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CreatePaneltop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CreatePaneltop === value) return;
    this.#mod_CreatePaneltop = value;
  }

  mod_CreatePaneltop_matrix?: IMatrix_mod_CreatePaneltop;
  #mod_CreateToekick?: boolean;
  get mod_CreateToekick(): boolean | undefined { return this.#mod_CreateToekick }
  set mod_CreateToekick(value: boolean | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_CreateToekick' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_CreateToekick === value) return;
    this.#mod_CreateToekick = value;
  }

  mod_CreateToekick_matrix?: IMatrix_mod_CreateToekick;
  #mod_Depth?: number;
  get mod_Depth(): number | undefined { return this.#mod_Depth }
  set mod_Depth(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_Depth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_Depth === value) return;
    this.#mod_Depth = value;
  }

  mod_Depth_matrix?: IMatrix_mod_Depth;
  #mod_Direction?: string;
  get mod_Direction(): string | undefined { return this.#mod_Direction }
  set mod_Direction(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_Direction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_Direction === value) return;
    this.#mod_Direction = value;
  }

  mod_Direction_matrix?: IMatrix_mod_Direction;
  #mod_FillerHardware?: string;
  get mod_FillerHardware(): string | undefined { return this.#mod_FillerHardware }
  set mod_FillerHardware(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FillerHardware' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FillerHardware === value) return;
    this.#mod_FillerHardware = value;
  }

  mod_FillerHardware_matrix?: IMatrix_mod_FillerHardware;
  #mod_FillerType?: string;
  get mod_FillerType(): string | undefined { return this.#mod_FillerType }
  set mod_FillerType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FillerType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FillerType === value) return;
    this.#mod_FillerType = value;
  }

  mod_FillerType_matrix?: IMatrix_mod_FillerType;
  #mod_FingergripType?: string;
  get mod_FingergripType(): string | undefined { return this.#mod_FingergripType }
  set mod_FingergripType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FingergripType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FingergripType === value) return;
    this.#mod_FingergripType = value;
  }

  mod_FingergripType_matrix?: IMatrix_mod_FingergripType;
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
  #mod_FrontEdgeColor?: string;
  get mod_FrontEdgeColor(): string | undefined { return this.#mod_FrontEdgeColor }
  set mod_FrontEdgeColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontEdgeColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontEdgeColor === value) return;
    this.#mod_FrontEdgeColor = value;
  }

  mod_FrontEdgeColor_matrix?: IMatrix_mod_FrontEdgeColor;
  #mod_FrontEdgeThk?: string;
  get mod_FrontEdgeThk(): string | undefined { return this.#mod_FrontEdgeThk }
  set mod_FrontEdgeThk(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontEdgeThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontEdgeThk === value) return;
    this.#mod_FrontEdgeThk = value;
  }

  mod_FrontEdgeThk_matrix?: IMatrix_mod_FrontEdgeThk;
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
  #mod_FrontGapHorTop?: number;
  get mod_FrontGapHorTop(): number | undefined { return this.#mod_FrontGapHorTop }
  set mod_FrontGapHorTop(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontGapHorTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontGapHorTop === value) return;
    this.#mod_FrontGapHorTop = value;
  }

  mod_FrontGapHorTop_matrix?: IMatrix_mod_FrontGapHorTop;
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
  #mod_GlobalFrontOversizeBtm?: number;
  get mod_GlobalFrontOversizeBtm(): number | undefined { return this.#mod_GlobalFrontOversizeBtm }
  set mod_GlobalFrontOversizeBtm(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_GlobalFrontOversizeBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_GlobalFrontOversizeBtm === value) return;
    this.#mod_GlobalFrontOversizeBtm = value;
  }

  mod_GlobalFrontOversizeBtm_matrix?: IMatrix_mod_GlobalFrontOversizeBtm;
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
  #mod_GlobalFrontOversizeRight?: number;
  get mod_GlobalFrontOversizeRight(): number | undefined { return this.#mod_GlobalFrontOversizeRight }
  set mod_GlobalFrontOversizeRight(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_GlobalFrontOversizeRight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_GlobalFrontOversizeRight === value) return;
    this.#mod_GlobalFrontOversizeRight = value;
  }

  mod_GlobalFrontOversizeRight_matrix?: IMatrix_mod_GlobalFrontOversizeRight;
  #mod_GlobalFrontOversizeLeft?: number;
  get mod_GlobalFrontOversizeLeft(): number | undefined { return this.#mod_GlobalFrontOversizeLeft }
  set mod_GlobalFrontOversizeLeft(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_GlobalFrontOversizeLeft' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_GlobalFrontOversizeLeft === value) return;
    this.#mod_GlobalFrontOversizeLeft = value;
  }

  mod_GlobalFrontOversizeLeft_matrix?: IMatrix_mod_GlobalFrontOversizeLeft;
  #mod_GlobalFrontOversizeTop?: number;
  get mod_GlobalFrontOversizeTop(): number | undefined { return this.#mod_GlobalFrontOversizeTop }
  set mod_GlobalFrontOversizeTop(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_GlobalFrontOversizeTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_GlobalFrontOversizeTop === value) return;
    this.#mod_GlobalFrontOversizeTop = value;
  }

  mod_GlobalFrontOversizeTop_matrix?: IMatrix_mod_GlobalFrontOversizeTop;
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
  #mod_Height?: number;
  get mod_Height(): number | undefined { return this.#mod_Height }
  set mod_Height(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_Height' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_Height === value) return;
    this.#mod_Height = value;
  }

  mod_Height_matrix?: IMatrix_mod_Height;
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
  #mod_ShelfbtmThk?: number;
  get mod_ShelfbtmThk(): number | undefined { return this.#mod_ShelfbtmThk }
  set mod_ShelfbtmThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelfbtmThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelfbtmThk === value) return;
    this.#mod_ShelfbtmThk = value;
  }

  mod_ShelfbtmThk_matrix?: IMatrix_mod_ShelfbtmThk;
  #mod_ShelftopThk?: number;
  get mod_ShelftopThk(): number | undefined { return this.#mod_ShelftopThk }
  set mod_ShelftopThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelftopThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelftopThk === value) return;
    this.#mod_ShelftopThk = value;
  }

  mod_ShelftopThk_matrix?: IMatrix_mod_ShelftopThk;
  #mod_SidepanelleftThk?: number;
  get mod_SidepanelleftThk(): number | undefined { return this.#mod_SidepanelleftThk }
  set mod_SidepanelleftThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_SidepanelleftThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_SidepanelleftThk === value) return;
    this.#mod_SidepanelleftThk = value;
  }

  mod_SidepanelleftThk_matrix?: IMatrix_mod_SidepanelleftThk;
  #mod_SidepanelrightThk?: number;
  get mod_SidepanelrightThk(): number | undefined { return this.#mod_SidepanelrightThk }
  set mod_SidepanelrightThk(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_SidepanelrightThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_SidepanelrightThk === value) return;
    this.#mod_SidepanelrightThk = value;
  }

  mod_SidepanelrightThk_matrix?: IMatrix_mod_SidepanelrightThk;
  #mod_TypeElement?: string;
  get mod_TypeElement(): string | undefined { return this.#mod_TypeElement }
  set mod_TypeElement(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_TypeElement' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_TypeElement === value) return;
    this.#mod_TypeElement = value;
  }

  mod_TypeElement_matrix?: IMatrix_mod_TypeElement;
  #mod_Width?: number;
  get mod_Width(): number | undefined { return this.#mod_Width }
  set mod_Width(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_Width' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_Width === value) return;
    this.#mod_Width = value;
  }

  mod_Width_matrix?: IMatrix_mod_Width;
  override getAttributes(): Map<string, any> {
    let res = new Map<string, any>();
    res.set('mod_CarcaseColor', this.mod_CarcaseColor);
    res.set('mod_CarcaseDistanceWall', this.mod_CarcaseDistanceWall);
    res.set('mod_CarcaseEdgeColor', this.mod_CarcaseEdgeColor);
    res.set('mod_CarcaseEdgeFrontColor', this.mod_CarcaseEdgeFrontColor);
    res.set('mod_CarcaseFrontConstruction', this.mod_CarcaseFrontConstruction);
    res.set('mod_CarcaseProgram', this.mod_CarcaseProgram);
    res.set('mod_CountertopInfo', JSON.stringify(this.mod_CountertopInfo));
    res.set('mod_CountertopThk', this.mod_CountertopThk);
    res.set('mod_CreateBacksplash', this.mod_CreateBacksplash);
    res.set('mod_CreateCountertop', this.mod_CreateCountertop);
    res.set('mod_CreateFingergrip', this.mod_CreateFingergrip);
    res.set('mod_CreatePaneltop', this.mod_CreatePaneltop);
    res.set('mod_CreateToekick', this.mod_CreateToekick);
    res.set('mod_Depth', this.mod_Depth);
    res.set('mod_Direction', this.mod_Direction);
    res.set('mod_FillerHardware', this.mod_FillerHardware);
    res.set('mod_FillerType', this.mod_FillerType);
    res.set('mod_FingergripType', this.mod_FingergripType);
    res.set('mod_FrontColor', this.mod_FrontColor);
    res.set('mod_FrontDesign', this.mod_FrontDesign);
    res.set('mod_FrontEdgeColor', this.mod_FrontEdgeColor);
    res.set('mod_FrontEdgeThk', this.mod_FrontEdgeThk);
    res.set('mod_FrontGapCarcase', this.mod_FrontGapCarcase);
    res.set('mod_FrontGapHorTop', this.mod_FrontGapHorTop);
    res.set('mod_FrontGapHor', this.mod_FrontGapHor);
    res.set('mod_FrontPosStart', this.mod_FrontPosStart);
    res.set('mod_FrontGapVert', this.mod_FrontGapVert);
    res.set('mod_GlobalFrontOversizeBtm', this.mod_GlobalFrontOversizeBtm);
    res.set('mod_FrontProgram', this.mod_FrontProgram);
    res.set('mod_GlobalFrontOversizeRight', this.mod_GlobalFrontOversizeRight);
    res.set('mod_GlobalFrontOversizeLeft', this.mod_GlobalFrontOversizeLeft);
    res.set('mod_GlobalFrontOversizeTop', this.mod_GlobalFrontOversizeTop);
    res.set('mod_HardwareColor', this.mod_HardwareColor);
    res.set('mod_Height', this.mod_Height);
    res.set('mod_HeightPosInsertion', this.mod_HeightPosInsertion);
    res.set('mod_ModuleName', this.mod_ModuleName);
    res.set('mod_ParentName', this.mod_ParentName);
    res.set('mod_ShelfbtmThk', this.mod_ShelfbtmThk);
    res.set('mod_ShelftopThk', this.mod_ShelftopThk);
    res.set('mod_SidepanelleftThk', this.mod_SidepanelleftThk);
    res.set('mod_SidepanelrightThk', this.mod_SidepanelrightThk);
    res.set('mod_TypeElement', this.mod_TypeElement);
    res.set('mod_Width', this.mod_Width);
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
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseColor');
      const val = _toString(json['attributes']['mod_CarcaseColor'], 'mod_CarcaseColor');
      internal_leaveValidateVariant();
      this.mod_CarcaseColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseDistanceWall');
      const val = _toFloat(json['attributes']['mod_CarcaseDistanceWall'], 'mod_CarcaseDistanceWall');
      internal_leaveValidateVariant();
      this.mod_CarcaseDistanceWall = val;
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
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseFrontConstruction');
      const val = _toString(json['attributes']['mod_CarcaseFrontConstruction'], 'mod_CarcaseFrontConstruction');
      internal_leaveValidateVariant();
      this.mod_CarcaseFrontConstruction = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseProgram');
      const val = _toString(json['attributes']['mod_CarcaseProgram'], 'mod_CarcaseProgram');
      internal_leaveValidateVariant();
      this.mod_CarcaseProgram = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopThk');
      const val = _toFloat(json['attributes']['mod_CountertopThk'], 'mod_CountertopThk');
      internal_leaveValidateVariant();
      this.mod_CountertopThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CreateBacksplash');
      const val = _toBoolean(json['attributes']['mod_CreateBacksplash'], 'mod_CreateBacksplash');
      internal_leaveValidateVariant();
      this.mod_CreateBacksplash = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CreateCountertop');
      const val = _toBoolean(json['attributes']['mod_CreateCountertop'], 'mod_CreateCountertop');
      internal_leaveValidateVariant();
      this.mod_CreateCountertop = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CreateFingergrip');
      const val = _toBoolean(json['attributes']['mod_CreateFingergrip'], 'mod_CreateFingergrip');
      internal_leaveValidateVariant();
      this.mod_CreateFingergrip = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CreatePaneltop');
      const val = _toBoolean(json['attributes']['mod_CreatePaneltop'], 'mod_CreatePaneltop');
      internal_leaveValidateVariant();
      this.mod_CreatePaneltop = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CreateToekick');
      const val = _toBoolean(json['attributes']['mod_CreateToekick'], 'mod_CreateToekick');
      internal_leaveValidateVariant();
      this.mod_CreateToekick = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_Depth');
      const val = _toFloat(json['attributes']['mod_Depth'], 'mod_Depth');
      internal_leaveValidateVariant();
      this.mod_Depth = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_Direction');
      const val = _toString(json['attributes']['mod_Direction'], 'mod_Direction');
      internal_leaveValidateVariant();
      this.mod_Direction = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FillerHardware');
      const val = _toString(json['attributes']['mod_FillerHardware'], 'mod_FillerHardware');
      internal_leaveValidateVariant();
      this.mod_FillerHardware = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FillerType');
      const val = _toString(json['attributes']['mod_FillerType'], 'mod_FillerType');
      internal_leaveValidateVariant();
      this.mod_FillerType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripType');
      const val = _toString(json['attributes']['mod_FingergripType'], 'mod_FingergripType');
      internal_leaveValidateVariant();
      this.mod_FingergripType = val;
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
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontEdgeColor');
      const val = _toString(json['attributes']['mod_FrontEdgeColor'], 'mod_FrontEdgeColor');
      internal_leaveValidateVariant();
      this.mod_FrontEdgeColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontEdgeThk');
      const val = _toString(json['attributes']['mod_FrontEdgeThk'], 'mod_FrontEdgeThk');
      internal_leaveValidateVariant();
      this.mod_FrontEdgeThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapCarcase');
      const val = _toFloat(json['attributes']['mod_FrontGapCarcase'], 'mod_FrontGapCarcase');
      internal_leaveValidateVariant();
      this.mod_FrontGapCarcase = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapHorTop');
      const val = _toFloat(json['attributes']['mod_FrontGapHorTop'], 'mod_FrontGapHorTop');
      internal_leaveValidateVariant();
      this.mod_FrontGapHorTop = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapHor');
      const val = _toFloat(json['attributes']['mod_FrontGapHor'], 'mod_FrontGapHor');
      internal_leaveValidateVariant();
      this.mod_FrontGapHor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontPosStart');
      const val = _toFloat(json['attributes']['mod_FrontPosStart'], 'mod_FrontPosStart');
      internal_leaveValidateVariant();
      this.mod_FrontPosStart = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapVert');
      const val = _toFloat(json['attributes']['mod_FrontGapVert'], 'mod_FrontGapVert');
      internal_leaveValidateVariant();
      this.mod_FrontGapVert = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_GlobalFrontOversizeBtm');
      const val = _toFloat(json['attributes']['mod_GlobalFrontOversizeBtm'], 'mod_GlobalFrontOversizeBtm');
      internal_leaveValidateVariant();
      this.mod_GlobalFrontOversizeBtm = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontProgram');
      const val = _toString(json['attributes']['mod_FrontProgram'], 'mod_FrontProgram');
      internal_leaveValidateVariant();
      this.mod_FrontProgram = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_GlobalFrontOversizeRight');
      const val = _toFloat(json['attributes']['mod_GlobalFrontOversizeRight'], 'mod_GlobalFrontOversizeRight');
      internal_leaveValidateVariant();
      this.mod_GlobalFrontOversizeRight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_GlobalFrontOversizeLeft');
      const val = _toFloat(json['attributes']['mod_GlobalFrontOversizeLeft'], 'mod_GlobalFrontOversizeLeft');
      internal_leaveValidateVariant();
      this.mod_GlobalFrontOversizeLeft = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_GlobalFrontOversizeTop');
      const val = _toFloat(json['attributes']['mod_GlobalFrontOversizeTop'], 'mod_GlobalFrontOversizeTop');
      internal_leaveValidateVariant();
      this.mod_GlobalFrontOversizeTop = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HardwareColor');
      const val = _toString(json['attributes']['mod_HardwareColor'], 'mod_HardwareColor');
      internal_leaveValidateVariant();
      this.mod_HardwareColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_Height');
      const val = _toFloat(json['attributes']['mod_Height'], 'mod_Height');
      internal_leaveValidateVariant();
      this.mod_Height = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HeightPosInsertion');
      const val = _toFloat(json['attributes']['mod_HeightPosInsertion'], 'mod_HeightPosInsertion');
      internal_leaveValidateVariant();
      this.mod_HeightPosInsertion = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
      const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
      internal_leaveValidateVariant();
      this.mod_ModuleName = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ParentName');
      const val = _toString(json['attributes']['mod_ParentName'], 'mod_ParentName');
      internal_leaveValidateVariant();
      this.mod_ParentName = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfbtmThk');
      const val = _toFloat(json['attributes']['mod_ShelfbtmThk'], 'mod_ShelfbtmThk');
      internal_leaveValidateVariant();
      this.mod_ShelfbtmThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelftopThk');
      const val = _toFloat(json['attributes']['mod_ShelftopThk'], 'mod_ShelftopThk');
      internal_leaveValidateVariant();
      this.mod_ShelftopThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelleftThk');
      const val = _toFloat(json['attributes']['mod_SidepanelleftThk'], 'mod_SidepanelleftThk');
      internal_leaveValidateVariant();
      this.mod_SidepanelleftThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelrightThk');
      const val = _toFloat(json['attributes']['mod_SidepanelrightThk'], 'mod_SidepanelrightThk');
      internal_leaveValidateVariant();
      this.mod_SidepanelrightThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_TypeElement');
      const val = _toString(json['attributes']['mod_TypeElement'], 'mod_TypeElement');
      internal_leaveValidateVariant();
      this.mod_TypeElement = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_Width');
      const val = _toFloat(json['attributes']['mod_Width'], 'mod_Width');
      internal_leaveValidateVariant();
      this.mod_Width = val;
    }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod: any) => { this.m.push(loadOrderData(subMod, this, manufacturerMode)) });
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    if (this.mod_CarcaseColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseColor')) {
          let pv = <IModVar_mod_CarcaseColor>s;
          if (pv.mod_CarcaseColor !== undefined) {
            this.mod_CarcaseColor = (<IModVar_mod_CarcaseColor>s).mod_CarcaseColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseDistanceWall === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseDistanceWall')) {
          let pv = <IModVar_mod_CarcaseDistanceWall>s;
          if (pv.mod_CarcaseDistanceWall !== undefined) {
            this.mod_CarcaseDistanceWall = (<IModVar_mod_CarcaseDistanceWall>s).mod_CarcaseDistanceWall;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseEdgeColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseEdgeColor')) {
          let pv = <IModVar_mod_CarcaseEdgeColor>s;
          if (pv.mod_CarcaseEdgeColor !== undefined) {
            this.mod_CarcaseEdgeColor = (<IModVar_mod_CarcaseEdgeColor>s).mod_CarcaseEdgeColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseEdgeFrontColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseEdgeFrontColor')) {
          let pv = <IModVar_mod_CarcaseEdgeFrontColor>s;
          if (pv.mod_CarcaseEdgeFrontColor !== undefined) {
            this.mod_CarcaseEdgeFrontColor = (<IModVar_mod_CarcaseEdgeFrontColor>s).mod_CarcaseEdgeFrontColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseFrontConstruction === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseFrontConstruction')) {
          let pv = <IModVar_mod_CarcaseFrontConstruction>s;
          if (pv.mod_CarcaseFrontConstruction !== undefined) {
            this.mod_CarcaseFrontConstruction = (<IModVar_mod_CarcaseFrontConstruction>s).mod_CarcaseFrontConstruction;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseProgram === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseProgram')) {
          let pv = <IModVar_mod_CarcaseProgram>s;
          if (pv.mod_CarcaseProgram !== undefined) {
            this.mod_CarcaseProgram = (<IModVar_mod_CarcaseProgram>s).mod_CarcaseProgram;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopThk')) {
          let pv = <IModVar_mod_CountertopThk>s;
          if (pv.mod_CountertopThk !== undefined) {
            this.mod_CountertopThk = (<IModVar_mod_CountertopThk>s).mod_CountertopThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CreateBacksplash === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CreateBacksplash')) {
          let pv = <IModVar_mod_CreateBacksplash>s;
          if (pv.mod_CreateBacksplash !== undefined) {
            this.mod_CreateBacksplash = (<IModVar_mod_CreateBacksplash>s).mod_CreateBacksplash;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CreateCountertop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CreateCountertop')) {
          let pv = <IModVar_mod_CreateCountertop>s;
          if (pv.mod_CreateCountertop !== undefined) {
            this.mod_CreateCountertop = (<IModVar_mod_CreateCountertop>s).mod_CreateCountertop;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CreateFingergrip === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CreateFingergrip')) {
          let pv = <IModVar_mod_CreateFingergrip>s;
          if (pv.mod_CreateFingergrip !== undefined) {
            this.mod_CreateFingergrip = (<IModVar_mod_CreateFingergrip>s).mod_CreateFingergrip;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CreatePaneltop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CreatePaneltop')) {
          let pv = <IModVar_mod_CreatePaneltop>s;
          if (pv.mod_CreatePaneltop !== undefined) {
            this.mod_CreatePaneltop = (<IModVar_mod_CreatePaneltop>s).mod_CreatePaneltop;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CreateToekick === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CreateToekick')) {
          let pv = <IModVar_mod_CreateToekick>s;
          if (pv.mod_CreateToekick !== undefined) {
            this.mod_CreateToekick = (<IModVar_mod_CreateToekick>s).mod_CreateToekick;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_Depth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_Depth')) {
          let pv = <IModVar_mod_Depth>s;
          if (pv.mod_Depth !== undefined) {
            this.mod_Depth = (<IModVar_mod_Depth>s).mod_Depth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_Direction === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_Direction')) {
          let pv = <IModVar_mod_Direction>s;
          if (pv.mod_Direction !== undefined) {
            this.mod_Direction = (<IModVar_mod_Direction>s).mod_Direction;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FillerHardware === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FillerHardware')) {
          let pv = <IModVar_mod_FillerHardware>s;
          if (pv.mod_FillerHardware !== undefined) {
            this.mod_FillerHardware = (<IModVar_mod_FillerHardware>s).mod_FillerHardware;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FillerType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FillerType')) {
          let pv = <IModVar_mod_FillerType>s;
          if (pv.mod_FillerType !== undefined) {
            this.mod_FillerType = (<IModVar_mod_FillerType>s).mod_FillerType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripType')) {
          let pv = <IModVar_mod_FingergripType>s;
          if (pv.mod_FingergripType !== undefined) {
            this.mod_FingergripType = (<IModVar_mod_FingergripType>s).mod_FingergripType;
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
    if (this.mod_FrontEdgeColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontEdgeColor')) {
          let pv = <IModVar_mod_FrontEdgeColor>s;
          if (pv.mod_FrontEdgeColor !== undefined) {
            this.mod_FrontEdgeColor = (<IModVar_mod_FrontEdgeColor>s).mod_FrontEdgeColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontEdgeThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontEdgeThk')) {
          let pv = <IModVar_mod_FrontEdgeThk>s;
          if (pv.mod_FrontEdgeThk !== undefined) {
            this.mod_FrontEdgeThk = (<IModVar_mod_FrontEdgeThk>s).mod_FrontEdgeThk;
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
    if (this.mod_FrontGapHorTop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontGapHorTop')) {
          let pv = <IModVar_mod_FrontGapHorTop>s;
          if (pv.mod_FrontGapHorTop !== undefined) {
            this.mod_FrontGapHorTop = (<IModVar_mod_FrontGapHorTop>s).mod_FrontGapHorTop;
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
    if (this.mod_FrontPosStart === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontPosStart')) {
          let pv = <IModVar_mod_FrontPosStart>s;
          if (pv.mod_FrontPosStart !== undefined) {
            this.mod_FrontPosStart = (<IModVar_mod_FrontPosStart>s).mod_FrontPosStart;
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
    if (this.mod_GlobalFrontOversizeBtm === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_GlobalFrontOversizeBtm')) {
          let pv = <IModVar_mod_GlobalFrontOversizeBtm>s;
          if (pv.mod_GlobalFrontOversizeBtm !== undefined) {
            this.mod_GlobalFrontOversizeBtm = (<IModVar_mod_GlobalFrontOversizeBtm>s).mod_GlobalFrontOversizeBtm;
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
    if (this.mod_GlobalFrontOversizeRight === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_GlobalFrontOversizeRight')) {
          let pv = <IModVar_mod_GlobalFrontOversizeRight>s;
          if (pv.mod_GlobalFrontOversizeRight !== undefined) {
            this.mod_GlobalFrontOversizeRight = (<IModVar_mod_GlobalFrontOversizeRight>s).mod_GlobalFrontOversizeRight;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_GlobalFrontOversizeLeft === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_GlobalFrontOversizeLeft')) {
          let pv = <IModVar_mod_GlobalFrontOversizeLeft>s;
          if (pv.mod_GlobalFrontOversizeLeft !== undefined) {
            this.mod_GlobalFrontOversizeLeft = (<IModVar_mod_GlobalFrontOversizeLeft>s).mod_GlobalFrontOversizeLeft;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_GlobalFrontOversizeTop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_GlobalFrontOversizeTop')) {
          let pv = <IModVar_mod_GlobalFrontOversizeTop>s;
          if (pv.mod_GlobalFrontOversizeTop !== undefined) {
            this.mod_GlobalFrontOversizeTop = (<IModVar_mod_GlobalFrontOversizeTop>s).mod_GlobalFrontOversizeTop;
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
    if (this.mod_Height === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_Height')) {
          let pv = <IModVar_mod_Height>s;
          if (pv.mod_Height !== undefined) {
            this.mod_Height = (<IModVar_mod_Height>s).mod_Height;
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
    if (this.mod_ShelfbtmThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelfbtmThk')) {
          let pv = <IModVar_mod_ShelfbtmThk>s;
          if (pv.mod_ShelfbtmThk !== undefined) {
            this.mod_ShelfbtmThk = (<IModVar_mod_ShelfbtmThk>s).mod_ShelfbtmThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_ShelftopThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelftopThk')) {
          let pv = <IModVar_mod_ShelftopThk>s;
          if (pv.mod_ShelftopThk !== undefined) {
            this.mod_ShelftopThk = (<IModVar_mod_ShelftopThk>s).mod_ShelftopThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_SidepanelleftThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_SidepanelleftThk')) {
          let pv = <IModVar_mod_SidepanelleftThk>s;
          if (pv.mod_SidepanelleftThk !== undefined) {
            this.mod_SidepanelleftThk = (<IModVar_mod_SidepanelleftThk>s).mod_SidepanelleftThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_SidepanelrightThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_SidepanelrightThk')) {
          let pv = <IModVar_mod_SidepanelrightThk>s;
          if (pv.mod_SidepanelrightThk !== undefined) {
            this.mod_SidepanelrightThk = (<IModVar_mod_SidepanelrightThk>s).mod_SidepanelrightThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_TypeElement === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_TypeElement')) {
          let pv = <IModVar_mod_TypeElement>s;
          if (pv.mod_TypeElement !== undefined) {
            this.mod_TypeElement = (<IModVar_mod_TypeElement>s).mod_TypeElement;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_Width === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_Width')) {
          let pv = <IModVar_mod_Width>s;
          if (pv.mod_Width !== undefined) {
            this.mod_Width = (<IModVar_mod_Width>s).mod_Width;
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
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mc_Filler01";
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    this.#dataCompletionSetDefaultScripts_globalVars();
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
      if (this.mod_ParentName === undefined) {
        // ###############################################################
        // ####################### CUSTOM SCRIPTS ########################
        // ###############################################################
        // CUSTOMSCRIPT_mc_Filler01_mod_ParentName_SETDEFAULT
        this.mod_ParentName = this.parent.mod_ModuleName;
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
  #manufacturerDataCompletionInternal = mc_Filler01_manufacturerDataCompletion;
  override afterDataCompletion(): void {
    if (this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_Filler01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_Filler01 {
    this.afterDataCompletion();
    const adc = new OD_M_mc_Filler01_NonNull(this);
    return adc;
  }

  addOD_M_mc_StorageunitSidepanel01(index?: number): dc_mc_StorageunitSidepanel01 {
    var m = new OD_M_mc_StorageunitSidepanel01(this);
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
  addOD_M_mc_StorageunitShelfbtm01(index?: number): dc_mc_StorageunitShelfbtm01 {
    var m = new OD_M_mc_StorageunitShelfbtm01(this);
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
  addOD_M_mc_StorageunitShelftop01(index?: number): dc_mc_StorageunitShelftop01 {
    var m = new OD_M_mc_StorageunitShelftop01(this);
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
  addOD_M_mc_FillerFront01(index?: number): dc_mc_FillerFront01 {
    var m = new OD_M_mc_FillerFront01(this);
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
    this.mod_CarcaseColor_matrix = VariantValidation.mod_CarcaseColor(this, this.mod_CarcaseColor);
    this.mod_CarcaseDistanceWall_matrix = VariantValidation.mod_CarcaseDistanceWall(this, this.mod_CarcaseDistanceWall);
    this.mod_CarcaseEdgeColor_matrix = VariantValidation.mod_CarcaseEdgeColor(this, this.mod_CarcaseEdgeColor);
    this.mod_CarcaseEdgeFrontColor_matrix = VariantValidation.mod_CarcaseEdgeFrontColor(this, this.mod_CarcaseEdgeFrontColor);
    this.mod_CarcaseFrontConstruction_matrix = VariantValidation.mod_CarcaseFrontConstruction(this, this.mod_CarcaseFrontConstruction);
    this.mod_CarcaseProgram_matrix = VariantValidation.mod_CarcaseProgram(this, this.mod_CarcaseProgram);
    this.mod_CountertopThk_matrix = VariantValidation.mod_CountertopThk(this, this.mod_CountertopThk);
    this.mod_CreateBacksplash_matrix = VariantValidation.mod_CreateBacksplash(this, this.mod_CreateBacksplash);
    this.mod_CreateCountertop_matrix = VariantValidation.mod_CreateCountertop(this, this.mod_CreateCountertop);
    this.mod_CreateFingergrip_matrix = VariantValidation.mod_CreateFingergrip(this, this.mod_CreateFingergrip);
    this.mod_CreatePaneltop_matrix = VariantValidation.mod_CreatePaneltop(this, this.mod_CreatePaneltop);
    this.mod_CreateToekick_matrix = VariantValidation.mod_CreateToekick(this, this.mod_CreateToekick);
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this.mod_Depth);
    this.mod_Direction_matrix = VariantValidation.mod_Direction(this, this.mod_Direction);
    this.mod_FillerHardware_matrix = VariantValidation.mod_FillerHardware(this, this.mod_FillerHardware);
    this.mod_FillerType_matrix = VariantValidation.mod_FillerType(this, this.mod_FillerType);
    this.mod_FingergripType_matrix = VariantValidation.mod_FingergripType(this, this.mod_FingergripType);
    this.mod_FrontColor_matrix = VariantValidation.mod_FrontColor(this, this.mod_FrontColor);
    this.mod_FrontDesign_matrix = VariantValidation.mod_FrontDesign(this, this.mod_FrontDesign);
    this.mod_FrontEdgeColor_matrix = VariantValidation.mod_FrontEdgeColor(this, this.mod_FrontEdgeColor);
    this.mod_FrontEdgeThk_matrix = VariantValidation.mod_FrontEdgeThk(this, this.mod_FrontEdgeThk);
    this.mod_FrontGapCarcase_matrix = VariantValidation.mod_FrontGapCarcase(this, this.mod_FrontGapCarcase);
    this.mod_FrontGapHorTop_matrix = VariantValidation.mod_FrontGapHorTop(this, this.mod_FrontGapHorTop);
    this.mod_FrontGapHor_matrix = VariantValidation.mod_FrontGapHor(this, this.mod_FrontGapHor);
    this.mod_FrontPosStart_matrix = VariantValidation.mod_FrontPosStart(this, this.mod_FrontPosStart);
    this.mod_FrontGapVert_matrix = VariantValidation.mod_FrontGapVert(this, this.mod_FrontGapVert);
    this.mod_GlobalFrontOversizeBtm_matrix = VariantValidation.mod_GlobalFrontOversizeBtm(this, this.mod_GlobalFrontOversizeBtm);
    this.mod_FrontProgram_matrix = VariantValidation.mod_FrontProgram(this, this.mod_FrontProgram);
    this.mod_GlobalFrontOversizeRight_matrix = VariantValidation.mod_GlobalFrontOversizeRight(this, this.mod_GlobalFrontOversizeRight);
    this.mod_GlobalFrontOversizeLeft_matrix = VariantValidation.mod_GlobalFrontOversizeLeft(this, this.mod_GlobalFrontOversizeLeft);
    this.mod_GlobalFrontOversizeTop_matrix = VariantValidation.mod_GlobalFrontOversizeTop(this, this.mod_GlobalFrontOversizeTop);
    this.mod_HardwareColor_matrix = VariantValidation.mod_HardwareColor(this, this.mod_HardwareColor);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this.mod_Height);
    this.mod_HeightPosInsertion_matrix = VariantValidation.mod_HeightPosInsertion(this, this.mod_HeightPosInsertion);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this.mod_ModuleName);
    this.mod_ParentName_matrix = VariantValidation.mod_ParentName(this, this.mod_ParentName);
    this.mod_ShelfbtmThk_matrix = VariantValidation.mod_ShelfbtmThk(this, this.mod_ShelfbtmThk);
    this.mod_ShelftopThk_matrix = VariantValidation.mod_ShelftopThk(this, this.mod_ShelftopThk);
    this.mod_SidepanelleftThk_matrix = VariantValidation.mod_SidepanelleftThk(this, this.mod_SidepanelleftThk);
    this.mod_SidepanelrightThk_matrix = VariantValidation.mod_SidepanelrightThk(this, this.mod_SidepanelrightThk);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this.mod_TypeElement);
    this.mod_Width_matrix = VariantValidation.mod_Width(this, this.mod_Width);
  }

  override calculateContainerModules(): void {
    let ccm = new OD_M_mc_Filler01_NonNull(this);
    ccm.calculateContainerModules();
    this.m.forEach(subMod => subMod.calculateContainerModules());
  }


  override createBuildPlan(): void {
    var cbp = new OD_M_mc_Filler01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_Filler01_NonNull implements cbp_mc_Filler01, adc_mc_Filler01, ccm_mc_Filler01, IPartParentsNonNull_mc_Cornerunit01_mc_Filler01_mc_Storageunit01_mc_VertDivider01, IPartParentsNonNull_mc_Filler01_mc_Storageunit01, IPartParentsNonNull_mc_Filler01_mf_FillerFront {
  constructor(parent: OD_M_mc_Filler01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_Filler01;

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
  #createBuildPlanInternal = mc_Filler01_createBuildPlan;
  afterDataCompletion(): void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_Filler01_afterDataCompletion;
  calculateContainerModules(): void {
    this.#calculateContainerModulesInternal();
  }
  #calculateContainerModulesInternal = mc_Filler01_calculateContainerModules;
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
  parent: IModParents_mr_Filler_mr_StorageunitSingle;
  get mod_CarcaseColor(): string {
    return this.#internalParent.mod_CarcaseColor!;
  }
  get mod_CarcaseColor_matrix(): IMatrix_mod_CarcaseColor {
    return this.#internalParent.mod_CarcaseColor_matrix!;
  }
  get mod_CarcaseDistanceWall(): number {
    return this.#internalParent.mod_CarcaseDistanceWall!;
  }
  get mod_CarcaseEdgeColor(): string {
    return this.#internalParent.mod_CarcaseEdgeColor!;
  }
  get mod_CarcaseEdgeFrontColor(): string {
    return this.#internalParent.mod_CarcaseEdgeFrontColor!;
  }
  get mod_CarcaseFrontConstruction(): string {
    return this.#internalParent.mod_CarcaseFrontConstruction!;
  }
  get mod_CarcaseFrontConstruction_matrix(): IMatrix_mod_CarcaseFrontConstruction {
    return this.#internalParent.mod_CarcaseFrontConstruction_matrix!;
  }
  get mod_CarcaseProgram(): string {
    return this.#internalParent.mod_CarcaseProgram!;
  }
  get mod_CarcaseProgram_matrix(): IMatrix_mod_CarcaseProgram {
    return this.#internalParent.mod_CarcaseProgram_matrix!;
  }
  get mod_CountertopInfo(): string[] {
    return this.#internalParent.mod_CountertopInfo!;
  }
  get mod_CountertopThk(): number {
    return this.#internalParent.mod_CountertopThk!;
  }
  get mod_CreateBacksplash(): boolean {
    return this.#internalParent.mod_CreateBacksplash!;
  }
  get mod_CreateCountertop(): boolean {
    return this.#internalParent.mod_CreateCountertop!;
  }
  get mod_CreateFingergrip(): boolean {
    return this.#internalParent.mod_CreateFingergrip!;
  }
  get mod_CreatePaneltop(): boolean {
    return this.#internalParent.mod_CreatePaneltop!;
  }
  get mod_CreateToekick(): boolean {
    return this.#internalParent.mod_CreateToekick!;
  }
  get mod_Depth(): number {
    return this.#internalParent.mod_Depth!;
  }
  get mod_Direction(): string {
    return this.#internalParent.mod_Direction!;
  }
  get mod_FillerHardware(): string {
    return this.#internalParent.mod_FillerHardware!;
  }
  get mod_FillerType(): string {
    return this.#internalParent.mod_FillerType!;
  }
  get mod_FingergripType(): string {
    return this.#internalParent.mod_FingergripType!;
  }
  get mod_FingergripType_matrix(): IMatrix_mod_FingergripType {
    return this.#internalParent.mod_FingergripType_matrix!;
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
  get mod_FrontEdgeColor(): string {
    return this.#internalParent.mod_FrontEdgeColor!;
  }
  get mod_FrontEdgeThk(): string {
    return this.#internalParent.mod_FrontEdgeThk!;
  }
  get mod_FrontGapCarcase(): number {
    return this.#internalParent.mod_FrontGapCarcase!;
  }
  get mod_FrontGapHorTop(): number {
    return this.#internalParent.mod_FrontGapHorTop!;
  }
  get mod_FrontGapHor(): number {
    return this.#internalParent.mod_FrontGapHor!;
  }
  get mod_FrontPosStart(): number {
    return this.#internalParent.mod_FrontPosStart!;
  }
  get mod_FrontGapVert(): number {
    return this.#internalParent.mod_FrontGapVert!;
  }
  get mod_GlobalFrontOversizeBtm(): number {
    return this.#internalParent.mod_GlobalFrontOversizeBtm!;
  }
  get mod_FrontProgram(): string {
    return this.#internalParent.mod_FrontProgram!;
  }
  get mod_FrontProgram_matrix(): IMatrix_mod_FrontProgram {
    return this.#internalParent.mod_FrontProgram_matrix!;
  }
  get mod_GlobalFrontOversizeRight(): number {
    return this.#internalParent.mod_GlobalFrontOversizeRight!;
  }
  get mod_GlobalFrontOversizeLeft(): number {
    return this.#internalParent.mod_GlobalFrontOversizeLeft!;
  }
  get mod_GlobalFrontOversizeTop(): number {
    return this.#internalParent.mod_GlobalFrontOversizeTop!;
  }
  get mod_HardwareColor(): string {
    return this.#internalParent.mod_HardwareColor!;
  }
  get mod_Height(): number {
    return this.#internalParent.mod_Height!;
  }
  get mod_HeightPosInsertion(): number {
    return this.#internalParent.mod_HeightPosInsertion!;
  }
  get mod_ModuleName(): string {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_ParentName(): string {
    return this.#internalParent.mod_ParentName!;
  }
  get mod_ShelfbtmThk(): number {
    return this.#internalParent.mod_ShelfbtmThk!;
  }
  get mod_ShelftopThk(): number {
    return this.#internalParent.mod_ShelftopThk!;
  }
  get mod_SidepanelleftThk(): number {
    return this.#internalParent.mod_SidepanelleftThk!;
  }
  get mod_SidepanelrightThk(): number {
    return this.#internalParent.mod_SidepanelrightThk!;
  }
  get mod_TypeElement(): string {
    return this.#internalParent.mod_TypeElement!;
  }
  get mod_Width(): number {
    return this.#internalParent.mod_Width!;
  }
  addOD_M_mc_StorageunitSidepanel01(index?: number): dc_mc_StorageunitSidepanel01 {
    return this.#internalParent.addOD_M_mc_StorageunitSidepanel01(index);
  }
  addOD_M_mc_StorageunitShelfbtm01(index?: number): dc_mc_StorageunitShelfbtm01 {
    return this.#internalParent.addOD_M_mc_StorageunitShelfbtm01(index);
  }
  addOD_M_mc_StorageunitShelftop01(index?: number): dc_mc_StorageunitShelftop01 {
    return this.#internalParent.addOD_M_mc_StorageunitShelftop01(index);
  }
  addOD_M_mc_FillerFront01(index?: number): dc_mc_FillerFront01 {
    return this.#internalParent.addOD_M_mc_FillerFront01(index);
  }
}

