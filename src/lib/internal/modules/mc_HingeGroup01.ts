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
import { IModParents_mc_Door01_mc_Fliplift01 } from '../mod-interfaces'
import { IP_part_DoorUnit_PartVarsWritable, P_part_DoorUnit } from '../parts/part_DoorUnit'
import { OD_M_mc_Hinge01, dc_mc_Hinge01 } from './mc_Hinge01'
import { IModuleNonNull_mc_HingeGroup01, IModParents_mc_HingeGroup01, IModParents_mc_Door01_mc_HingeGroup01, IPartParentsNonNull_mc_HingeGroup01, IPartParentsNonNull_mc_Door01_mc_HingeGroup01 } from '../mod-interfaces'
import { IModVar_mod_HingePos1, IModVarNonNull_mod_HingePos1, IModVar_mod_HingePos2, IModVarNonNull_mod_HingePos2, IModVar_mod_HingePos3, IModVarNonNull_mod_HingePos3, IModVar_mod_HingePos4, IModVarNonNull_mod_HingePos4, IModVar_mod_HingePos5, IModVarNonNull_mod_HingePos5, IModVar_mod_HingePos6, IModVarNonNull_mod_HingePos6, IModVar_mod_FrontHeight, IModVarNonNull_mod_FrontHeight, IModVar_mod_FrontType, IModVarNonNull_mod_FrontType, IModVar_mod_Width, IModVarNonNull_mod_Width, IModVar_mod_Depth, IModVarNonNull_mod_Depth, IModVar_mod_Height, IModVarNonNull_mod_Height, IModVar_mod_HingeInfo, IModVarNonNull_mod_HingeInfo, IModVar_mod_CarcasePartInfo, IModVarNonNull_mod_CarcasePartInfo, IModVar_mod_HingeLogic, IModVarNonNull_mod_HingeLogic, IModVar_mod_ModuleName, IModVarNonNull_mod_ModuleName, IModVar_mod_TypeElement, IModVarNonNull_mod_TypeElement, IModVar_mod_FrontWidth, IModVarNonNull_mod_FrontWidth, IModVar_mod_FrontThk, IModVarNonNull_mod_FrontThk, IModVar_mod_FingergripBtmType, IModVarNonNull_mod_FingergripBtmType, IModVar_mod_FingergripTopType, IModVarNonNull_mod_FingergripTopType, IModVar_mod_HandleDesign, IModVarNonNull_mod_HandleDesign, IModVar_mod_HandlePosLogic, IModVarNonNull_mod_HandlePosLogic, IModVar_mod_DoorDirection, IModVarNonNull_mod_DoorDirection, IModVar_mod_InteriorEquipmentHinge, IModVarNonNull_mod_InteriorEquipmentHinge, IModVar_mod_HingeColor, IModVarNonNull_mod_HingeColor, IModVar_mod_MountingPlateType, IModVarNonNull_mod_MountingPlateType, IModVar_mod_Originpos, IModVarNonNull_mod_Originpos, IModVar_mod_FrontPosStart, IModVarNonNull_mod_FrontPosStart, IModVar_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapCarcase, IModVar_mod_HingeType, IModVarNonNull_mod_HingeType, IModVar_mod_DoorType, IModVarNonNull_mod_DoorType, IModVar_mod_FrontId, IModVarNonNull_mod_FrontId, IModVar_mod_CarcaseId, IModVarNonNull_mod_CarcaseId, IModVar_mod_OpeningAngle, IModVarNonNull_mod_OpeningAngle, IModVar_mod_FlipliftType, IModVarNonNull_mod_FlipliftType, IModVar_mod_FlipliftHardwareType, IModVarNonNull_mod_FlipliftHardwareType, IModVar_mod_OpeningType, IModVarNonNull_mod_OpeningType, IModVar_mod_Information, IModVarNonNull_mod_Information } from '../var-interfaces'
import { VariantValidation, IMatrix_mod_HingePos1, IMatrix_mod_HingePos2, IMatrix_mod_HingePos3, IMatrix_mod_HingePos4, IMatrix_mod_HingePos5, IMatrix_mod_HingePos6, IMatrix_mod_FrontHeight, IMatrix_mod_FrontType, IMatrix_mod_Width, IMatrix_mod_Depth, IMatrix_mod_Height, IMatrix_mod_HingeLogic, IMatrix_mod_ModuleName, IMatrix_mod_TypeElement, IMatrix_mod_FrontWidth, IMatrix_mod_FrontThk, IMatrix_mod_FingergripBtmType, IMatrix_mod_FingergripTopType, IMatrix_mod_HandleDesign, IMatrix_mod_HandlePosLogic, IMatrix_mod_DoorDirection, IMatrix_mod_InteriorEquipmentHinge, IMatrix_mod_HingeColor, IMatrix_mod_MountingPlateType, IMatrix_mod_FrontPosStart, IMatrix_mod_FrontGapCarcase, IMatrix_mod_HingeType, IMatrix_mod_DoorType, IMatrix_mod_FrontId, IMatrix_mod_CarcaseId, IMatrix_mod_FlipliftType, IMatrix_mod_FlipliftHardwareType, IMatrix_mod_OpeningType, IMatrix_mod_Information } from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_DoorUnit } from '../part-add-interfaces';
import { mc_HingeGroup01_createBuildPlan, mc_HingeGroup01_afterDataCompletion, mc_HingeGroup01_manufacturerDataCompletion, mc_HingeGroup01_calculateContainerModules } from '../../modules/mc_HingeGroup01';

export interface cbp_mc_HingeGroup01 extends IModBaseProp
  , IPartAdd_part_DoorUnit, IModVarNonNull_mod_HingePos1, IModVarNonNull_mod_HingePos2, IModVarNonNull_mod_HingePos3, IModVarNonNull_mod_HingePos4, IModVarNonNull_mod_HingePos5, IModVarNonNull_mod_HingePos6, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontType, IModVarNonNull_mod_Width, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_HingeInfo, IModVarNonNull_mod_CarcasePartInfo, IModVarNonNull_mod_HingeLogic, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FingergripBtmType, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_HandlePosLogic, IModVarNonNull_mod_DoorDirection, IModVarNonNull_mod_InteriorEquipmentHinge, IModVarNonNull_mod_HingeColor, IModVarNonNull_mod_MountingPlateType, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_HingeType, IModVarNonNull_mod_DoorType, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_OpeningAngle, IModVarNonNull_mod_FlipliftType, IModVarNonNull_mod_FlipliftHardwareType, IModVarNonNull_mod_OpeningType, IModVarNonNull_mod_Information {
  parent: IModParents_mc_Door01_mc_Fliplift01;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mc_HingeGroup01 extends IModBaseProp
  , IModVar_mod_HingePos1, IModVar_mod_HingePos2, IModVar_mod_HingePos3, IModVar_mod_HingePos4, IModVar_mod_HingePos5, IModVar_mod_HingePos6, IModVar_mod_FrontHeight, IModVar_mod_FrontType, IModVar_mod_Width, IModVar_mod_Depth, IModVar_mod_Height, IModVar_mod_HingeInfo, IModVar_mod_CarcasePartInfo, IModVar_mod_HingeLogic, IModVar_mod_ModuleName, IModVar_mod_TypeElement, IModVar_mod_FrontWidth, IModVar_mod_FrontThk, IModVar_mod_FingergripBtmType, IModVar_mod_FingergripTopType, IModVar_mod_HandleDesign, IModVar_mod_HandlePosLogic, IModVar_mod_DoorDirection, IModVar_mod_InteriorEquipmentHinge, IModVar_mod_HingeColor, IModVar_mod_MountingPlateType, IModVar_mod_Originpos, IModVar_mod_FrontPosStart, IModVar_mod_FrontGapCarcase, IModVar_mod_HingeType, IModVar_mod_DoorType, IModVar_mod_FrontId, IModVar_mod_CarcaseId, IModVar_mod_OpeningAngle, IModVar_mod_FlipliftType, IModVar_mod_FlipliftHardwareType, IModVar_mod_OpeningType, IModVar_mod_Information {
  m: OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  seal(): IModuleNonNull_mc_HingeGroup01;
  parent: IModParents_mc_Door01_mc_Fliplift01;
  addOD_M_mc_Hinge01(index?: number): dc_mc_Hinge01;
}

export interface adc_base_mc_HingeGroup01 extends IModBaseProp
  , IModVarNonNull_mod_HingePos1, IModVarNonNull_mod_HingePos2, IModVarNonNull_mod_HingePos3, IModVarNonNull_mod_HingePos4, IModVarNonNull_mod_HingePos5, IModVarNonNull_mod_HingePos6, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontType, IModVarNonNull_mod_Width, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_HingeInfo, IModVarNonNull_mod_CarcasePartInfo, IModVarNonNull_mod_HingeLogic, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FingergripBtmType, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_HandlePosLogic, IModVarNonNull_mod_DoorDirection, IModVarNonNull_mod_InteriorEquipmentHinge, IModVarNonNull_mod_HingeColor, IModVarNonNull_mod_MountingPlateType, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_HingeType, IModVarNonNull_mod_DoorType, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_OpeningAngle, IModVarNonNull_mod_FlipliftType, IModVarNonNull_mod_FlipliftHardwareType, IModVarNonNull_mod_OpeningType, IModVarNonNull_mod_Information {
  get m(): OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
}

export interface adc_mc_HingeGroup01 extends adc_base_mc_HingeGroup01 {
  addOD_M_mc_Hinge01(index?: number): dc_mc_Hinge01;
}

export interface ccm_mc_HingeGroup01 extends adc_base_mc_HingeGroup01 {
}


export class OD_M_mc_HingeGroup01 extends OD_Base implements dc_mc_HingeGroup01
  , IModParents_mc_HingeGroup01, IModParents_mc_Door01_mc_HingeGroup01
  , IModVar_mod_HingePos1, IModVar_mod_HingePos2, IModVar_mod_HingePos3, IModVar_mod_HingePos4, IModVar_mod_HingePos5, IModVar_mod_HingePos6, IModVar_mod_FrontHeight, IModVar_mod_FrontType, IModVar_mod_Width, IModVar_mod_Depth, IModVar_mod_Height, IModVar_mod_HingeInfo, IModVar_mod_CarcasePartInfo, IModVar_mod_HingeLogic, IModVar_mod_ModuleName, IModVar_mod_TypeElement, IModVar_mod_FrontWidth, IModVar_mod_FrontThk, IModVar_mod_FingergripBtmType, IModVar_mod_FingergripTopType, IModVar_mod_HandleDesign, IModVar_mod_HandlePosLogic, IModVar_mod_DoorDirection, IModVar_mod_InteriorEquipmentHinge, IModVar_mod_HingeColor, IModVar_mod_MountingPlateType, IModVar_mod_Originpos, IModVar_mod_FrontPosStart, IModVar_mod_FrontGapCarcase, IModVar_mod_HingeType, IModVar_mod_DoorType, IModVar_mod_FrontId, IModVar_mod_CarcaseId, IModVar_mod_OpeningAngle, IModVar_mod_FlipliftType, IModVar_mod_FlipliftHardwareType, IModVar_mod_OpeningType, IModVar_mod_Information {
  constructor(parent: IModParents_mc_Door01_mc_Fliplift01, manufacturerMode?: boolean) {
    super('mc_HingeGroup01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_HingeGroup01_NonNull(this);
  }
  parent: IModParents_mc_Door01_mc_Fliplift01;
  _selfNonNull: OD_M_mc_HingeGroup01_NonNull;

  override variants: string[] = ['mod_HingePos1', 'mod_HingePos2', 'mod_HingePos3', 'mod_HingePos4', 'mod_HingePos5', 'mod_HingePos6', 'mod_FrontHeight', 'mod_FrontType', 'mod_Width', 'mod_Depth', 'mod_Height', 'mod_HingeInfo', 'mod_CarcasePartInfo', 'mod_HingeLogic', 'mod_ModuleName', 'mod_TypeElement', 'mod_FrontWidth', 'mod_FrontThk', 'mod_FingergripBtmType', 'mod_FingergripTopType', 'mod_HandleDesign', 'mod_HandlePosLogic', 'mod_DoorDirection', 'mod_InteriorEquipmentHinge', 'mod_HingeColor', 'mod_MountingPlateType', 'mod_Originpos', 'mod_FrontPosStart', 'mod_FrontGapCarcase', 'mod_HingeType', 'mod_DoorType', 'mod_FrontId', 'mod_CarcaseId', 'mod_OpeningAngle', 'mod_FlipliftType', 'mod_FlipliftHardwareType', 'mod_OpeningType', 'mod_Information',];
  #mod_HingePos1?: number;
  get mod_HingePos1(): number | undefined { return this.#mod_HingePos1 }
  set mod_HingePos1(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HingePos1' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HingePos1 === value) return;
    this.#mod_HingePos1 = value;
  }

  mod_HingePos1_matrix?: IMatrix_mod_HingePos1;
  #mod_HingePos2?: number;
  get mod_HingePos2(): number | undefined { return this.#mod_HingePos2 }
  set mod_HingePos2(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HingePos2' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HingePos2 === value) return;
    this.#mod_HingePos2 = value;
  }

  mod_HingePos2_matrix?: IMatrix_mod_HingePos2;
  #mod_HingePos3?: number;
  get mod_HingePos3(): number | undefined { return this.#mod_HingePos3 }
  set mod_HingePos3(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HingePos3' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HingePos3 === value) return;
    this.#mod_HingePos3 = value;
  }

  mod_HingePos3_matrix?: IMatrix_mod_HingePos3;
  #mod_HingePos4?: number;
  get mod_HingePos4(): number | undefined { return this.#mod_HingePos4 }
  set mod_HingePos4(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HingePos4' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HingePos4 === value) return;
    this.#mod_HingePos4 = value;
  }

  mod_HingePos4_matrix?: IMatrix_mod_HingePos4;
  #mod_HingePos5?: number;
  get mod_HingePos5(): number | undefined { return this.#mod_HingePos5 }
  set mod_HingePos5(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HingePos5' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HingePos5 === value) return;
    this.#mod_HingePos5 = value;
  }

  mod_HingePos5_matrix?: IMatrix_mod_HingePos5;
  #mod_HingePos6?: number;
  get mod_HingePos6(): number | undefined { return this.#mod_HingePos6 }
  set mod_HingePos6(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HingePos6' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HingePos6 === value) return;
    this.#mod_HingePos6 = value;
  }

  mod_HingePos6_matrix?: IMatrix_mod_HingePos6;
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
  #mod_FrontType?: string;
  get mod_FrontType(): string | undefined { return this.#mod_FrontType }
  set mod_FrontType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FrontType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FrontType === value) return;
    this.#mod_FrontType = value;
  }

  mod_FrontType_matrix?: IMatrix_mod_FrontType;
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
  #mod_HingeInfo: string[] = [];
  get mod_HingeInfo(): string[] { return this.#mod_HingeInfo; }
  #mod_CarcasePartInfo: string[] = [];
  get mod_CarcasePartInfo(): string[] { return this.#mod_CarcasePartInfo; }
  #mod_HingeLogic?: string;
  get mod_HingeLogic(): string | undefined { return this.#mod_HingeLogic }
  set mod_HingeLogic(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HingeLogic' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HingeLogic === value) return;
    this.#mod_HingeLogic = value;
  }

  mod_HingeLogic_matrix?: IMatrix_mod_HingeLogic;
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
  #mod_DoorDirection?: string;
  get mod_DoorDirection(): string | undefined { return this.#mod_DoorDirection }
  set mod_DoorDirection(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_DoorDirection' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_DoorDirection === value) return;
    this.#mod_DoorDirection = value;
  }

  mod_DoorDirection_matrix?: IMatrix_mod_DoorDirection;
  #mod_InteriorEquipmentHinge?: string;
  get mod_InteriorEquipmentHinge(): string | undefined { return this.#mod_InteriorEquipmentHinge }
  set mod_InteriorEquipmentHinge(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_InteriorEquipmentHinge' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_InteriorEquipmentHinge === value) return;
    this.#mod_InteriorEquipmentHinge = value;
  }

  mod_InteriorEquipmentHinge_matrix?: IMatrix_mod_InteriorEquipmentHinge;
  #mod_HingeColor?: string;
  get mod_HingeColor(): string | undefined { return this.#mod_HingeColor }
  set mod_HingeColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HingeColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HingeColor === value) return;
    this.#mod_HingeColor = value;
  }

  mod_HingeColor_matrix?: IMatrix_mod_HingeColor;
  #mod_MountingPlateType?: string;
  get mod_MountingPlateType(): string | undefined { return this.#mod_MountingPlateType }
  set mod_MountingPlateType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_MountingPlateType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_MountingPlateType === value) return;
    this.#mod_MountingPlateType = value;
  }

  mod_MountingPlateType_matrix?: IMatrix_mod_MountingPlateType;
  #mod_Originpos: number[] = [];
  get mod_Originpos(): number[] { return this.#mod_Originpos; }
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
  #mod_HingeType?: string;
  get mod_HingeType(): string | undefined { return this.#mod_HingeType }
  set mod_HingeType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HingeType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HingeType === value) return;
    this.#mod_HingeType = value;
  }

  mod_HingeType_matrix?: IMatrix_mod_HingeType;
  #mod_DoorType?: string;
  get mod_DoorType(): string | undefined { return this.#mod_DoorType }
  set mod_DoorType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_DoorType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_DoorType === value) return;
    this.#mod_DoorType = value;
  }

  mod_DoorType_matrix?: IMatrix_mod_DoorType;
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
  #mod_OpeningAngle: string[] = [];
  get mod_OpeningAngle(): string[] { return this.#mod_OpeningAngle; }
  #mod_FlipliftType?: string;
  get mod_FlipliftType(): string | undefined { return this.#mod_FlipliftType }
  set mod_FlipliftType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FlipliftType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FlipliftType === value) return;
    this.#mod_FlipliftType = value;
  }

  mod_FlipliftType_matrix?: IMatrix_mod_FlipliftType;
  #mod_FlipliftHardwareType?: string;
  get mod_FlipliftHardwareType(): string | undefined { return this.#mod_FlipliftHardwareType }
  set mod_FlipliftHardwareType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_FlipliftHardwareType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_FlipliftHardwareType === value) return;
    this.#mod_FlipliftHardwareType = value;
  }

  mod_FlipliftHardwareType_matrix?: IMatrix_mod_FlipliftHardwareType;
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
  #mod_Information?: string;
  get mod_Information(): string | undefined { return this.#mod_Information }
  set mod_Information(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_Information' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_Information === value) return;
    this.#mod_Information = value;
  }

  mod_Information_matrix?: IMatrix_mod_Information;
  override getAttributes(): Map<string, any> {
    let res = new Map<string, any>();
    res.set('mod_HingePos1', this.mod_HingePos1);
    res.set('mod_HingePos2', this.mod_HingePos2);
    res.set('mod_HingePos3', this.mod_HingePos3);
    res.set('mod_HingePos4', this.mod_HingePos4);
    res.set('mod_HingePos5', this.mod_HingePos5);
    res.set('mod_HingePos6', this.mod_HingePos6);
    res.set('mod_FrontHeight', this.mod_FrontHeight);
    res.set('mod_FrontType', this.mod_FrontType);
    res.set('mod_Width', this.mod_Width);
    res.set('mod_Depth', this.mod_Depth);
    res.set('mod_Height', this.mod_Height);
    res.set('mod_HingeInfo', JSON.stringify(this.mod_HingeInfo));
    res.set('mod_CarcasePartInfo', JSON.stringify(this.mod_CarcasePartInfo));
    res.set('mod_HingeLogic', this.mod_HingeLogic);
    res.set('mod_ModuleName', this.mod_ModuleName);
    res.set('mod_TypeElement', this.mod_TypeElement);
    res.set('mod_FrontWidth', this.mod_FrontWidth);
    res.set('mod_FrontThk', this.mod_FrontThk);
    res.set('mod_FingergripBtmType', this.mod_FingergripBtmType);
    res.set('mod_FingergripTopType', this.mod_FingergripTopType);
    res.set('mod_HandleDesign', this.mod_HandleDesign);
    res.set('mod_HandlePosLogic', this.mod_HandlePosLogic);
    res.set('mod_DoorDirection', this.mod_DoorDirection);
    res.set('mod_InteriorEquipmentHinge', this.mod_InteriorEquipmentHinge);
    res.set('mod_HingeColor', this.mod_HingeColor);
    res.set('mod_MountingPlateType', this.mod_MountingPlateType);
    res.set('mod_Originpos', JSON.stringify(this.mod_Originpos));
    res.set('mod_FrontPosStart', this.mod_FrontPosStart);
    res.set('mod_FrontGapCarcase', this.mod_FrontGapCarcase);
    res.set('mod_HingeType', this.mod_HingeType);
    res.set('mod_DoorType', this.mod_DoorType);
    res.set('mod_FrontId', this.mod_FrontId);
    res.set('mod_CarcaseId', this.mod_CarcaseId);
    res.set('mod_OpeningAngle', JSON.stringify(this.mod_OpeningAngle));
    res.set('mod_FlipliftType', this.mod_FlipliftType);
    res.set('mod_FlipliftHardwareType', this.mod_FlipliftHardwareType);
    res.set('mod_OpeningType', this.mod_OpeningType);
    res.set('mod_Information', this.mod_Information);
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
      internal_enterValidateVariant(this.modId, this._id, 'mod_HingePos1');
      const val = _toFloat(json['attributes']['mod_HingePos1'], 'mod_HingePos1');
      internal_leaveValidateVariant();
      this.mod_HingePos1 = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HingePos2');
      const val = _toFloat(json['attributes']['mod_HingePos2'], 'mod_HingePos2');
      internal_leaveValidateVariant();
      this.mod_HingePos2 = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HingePos3');
      const val = _toFloat(json['attributes']['mod_HingePos3'], 'mod_HingePos3');
      internal_leaveValidateVariant();
      this.mod_HingePos3 = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HingePos4');
      const val = _toFloat(json['attributes']['mod_HingePos4'], 'mod_HingePos4');
      internal_leaveValidateVariant();
      this.mod_HingePos4 = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HingePos5');
      const val = _toFloat(json['attributes']['mod_HingePos5'], 'mod_HingePos5');
      internal_leaveValidateVariant();
      this.mod_HingePos5 = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HingePos6');
      const val = _toFloat(json['attributes']['mod_HingePos6'], 'mod_HingePos6');
      internal_leaveValidateVariant();
      this.mod_HingePos6 = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontHeight');
      const val = _toFloat(json['attributes']['mod_FrontHeight'], 'mod_FrontHeight');
      internal_leaveValidateVariant();
      this.mod_FrontHeight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontType');
      const val = _toString(json['attributes']['mod_FrontType'], 'mod_FrontType');
      internal_leaveValidateVariant();
      this.mod_FrontType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_Width');
      const val = _toFloat(json['attributes']['mod_Width'], 'mod_Width');
      internal_leaveValidateVariant();
      this.mod_Width = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_Depth');
      const val = _toFloat(json['attributes']['mod_Depth'], 'mod_Depth');
      internal_leaveValidateVariant();
      this.mod_Depth = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_Height');
      const val = _toFloat(json['attributes']['mod_Height'], 'mod_Height');
      internal_leaveValidateVariant();
      this.mod_Height = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HingeLogic');
      const val = _toString(json['attributes']['mod_HingeLogic'], 'mod_HingeLogic');
      internal_leaveValidateVariant();
      this.mod_HingeLogic = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
      const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
      internal_leaveValidateVariant();
      this.mod_ModuleName = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_TypeElement');
      const val = _toString(json['attributes']['mod_TypeElement'], 'mod_TypeElement');
      internal_leaveValidateVariant();
      this.mod_TypeElement = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontWidth');
      const val = _toFloat(json['attributes']['mod_FrontWidth'], 'mod_FrontWidth');
      internal_leaveValidateVariant();
      this.mod_FrontWidth = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontThk');
      const val = _toFloat(json['attributes']['mod_FrontThk'], 'mod_FrontThk');
      internal_leaveValidateVariant();
      this.mod_FrontThk = val;
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
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDesign');
      const val = _toString(json['attributes']['mod_HandleDesign'], 'mod_HandleDesign');
      internal_leaveValidateVariant();
      this.mod_HandleDesign = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosLogic');
      const val = _toString(json['attributes']['mod_HandlePosLogic'], 'mod_HandlePosLogic');
      internal_leaveValidateVariant();
      this.mod_HandlePosLogic = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_DoorDirection');
      const val = _toString(json['attributes']['mod_DoorDirection'], 'mod_DoorDirection');
      internal_leaveValidateVariant();
      this.mod_DoorDirection = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_InteriorEquipmentHinge');
      const val = _toString(json['attributes']['mod_InteriorEquipmentHinge'], 'mod_InteriorEquipmentHinge');
      internal_leaveValidateVariant();
      this.mod_InteriorEquipmentHinge = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HingeColor');
      const val = _toString(json['attributes']['mod_HingeColor'], 'mod_HingeColor');
      internal_leaveValidateVariant();
      this.mod_HingeColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_MountingPlateType');
      const val = _toString(json['attributes']['mod_MountingPlateType'], 'mod_MountingPlateType');
      internal_leaveValidateVariant();
      this.mod_MountingPlateType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontPosStart');
      const val = _toFloat(json['attributes']['mod_FrontPosStart'], 'mod_FrontPosStart');
      internal_leaveValidateVariant();
      this.mod_FrontPosStart = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapCarcase');
      const val = _toFloat(json['attributes']['mod_FrontGapCarcase'], 'mod_FrontGapCarcase');
      internal_leaveValidateVariant();
      this.mod_FrontGapCarcase = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HingeType');
      const val = _toString(json['attributes']['mod_HingeType'], 'mod_HingeType');
      internal_leaveValidateVariant();
      this.mod_HingeType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_DoorType');
      const val = _toString(json['attributes']['mod_DoorType'], 'mod_DoorType');
      internal_leaveValidateVariant();
      this.mod_DoorType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontId');
      const val = _toString(json['attributes']['mod_FrontId'], 'mod_FrontId');
      internal_leaveValidateVariant();
      this.mod_FrontId = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseId');
      const val = _toString(json['attributes']['mod_CarcaseId'], 'mod_CarcaseId');
      internal_leaveValidateVariant();
      this.mod_CarcaseId = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FlipliftType');
      const val = _toString(json['attributes']['mod_FlipliftType'], 'mod_FlipliftType');
      internal_leaveValidateVariant();
      this.mod_FlipliftType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FlipliftHardwareType');
      const val = _toString(json['attributes']['mod_FlipliftHardwareType'], 'mod_FlipliftHardwareType');
      internal_leaveValidateVariant();
      this.mod_FlipliftHardwareType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_OpeningType');
      const val = _toString(json['attributes']['mod_OpeningType'], 'mod_OpeningType');
      internal_leaveValidateVariant();
      this.mod_OpeningType = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_Information');
      const val = _toString(json['attributes']['mod_Information'], 'mod_Information');
      internal_leaveValidateVariant();
      this.mod_Information = val;
    }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod: any) => { this.m.push(loadOrderData(subMod, this, manufacturerMode)) });
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    if (this.mod_HingePos1 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HingePos1')) {
          let pv = <IModVar_mod_HingePos1>s;
          if (pv.mod_HingePos1 !== undefined) {
            this.mod_HingePos1 = (<IModVar_mod_HingePos1>s).mod_HingePos1;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HingePos2 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HingePos2')) {
          let pv = <IModVar_mod_HingePos2>s;
          if (pv.mod_HingePos2 !== undefined) {
            this.mod_HingePos2 = (<IModVar_mod_HingePos2>s).mod_HingePos2;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HingePos3 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HingePos3')) {
          let pv = <IModVar_mod_HingePos3>s;
          if (pv.mod_HingePos3 !== undefined) {
            this.mod_HingePos3 = (<IModVar_mod_HingePos3>s).mod_HingePos3;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HingePos4 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HingePos4')) {
          let pv = <IModVar_mod_HingePos4>s;
          if (pv.mod_HingePos4 !== undefined) {
            this.mod_HingePos4 = (<IModVar_mod_HingePos4>s).mod_HingePos4;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HingePos5 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HingePos5')) {
          let pv = <IModVar_mod_HingePos5>s;
          if (pv.mod_HingePos5 !== undefined) {
            this.mod_HingePos5 = (<IModVar_mod_HingePos5>s).mod_HingePos5;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HingePos6 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HingePos6')) {
          let pv = <IModVar_mod_HingePos6>s;
          if (pv.mod_HingePos6 !== undefined) {
            this.mod_HingePos6 = (<IModVar_mod_HingePos6>s).mod_HingePos6;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontHeight === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontHeight')) {
          let pv = <IModVar_mod_FrontHeight>s;
          if (pv.mod_FrontHeight !== undefined) {
            this.mod_FrontHeight = (<IModVar_mod_FrontHeight>s).mod_FrontHeight;
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
    if (this.mod_HingeLogic === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HingeLogic')) {
          let pv = <IModVar_mod_HingeLogic>s;
          if (pv.mod_HingeLogic !== undefined) {
            this.mod_HingeLogic = (<IModVar_mod_HingeLogic>s).mod_HingeLogic;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_ModuleName === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ModuleName')) {
          let pv = <IModVar_mod_ModuleName>s;
          if (pv.mod_ModuleName !== undefined) {
            this.mod_ModuleName = (<IModVar_mod_ModuleName>s).mod_ModuleName;
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
    if (this.mod_FrontWidth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontWidth')) {
          let pv = <IModVar_mod_FrontWidth>s;
          if (pv.mod_FrontWidth !== undefined) {
            this.mod_FrontWidth = (<IModVar_mod_FrontWidth>s).mod_FrontWidth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontThk')) {
          let pv = <IModVar_mod_FrontThk>s;
          if (pv.mod_FrontThk !== undefined) {
            this.mod_FrontThk = (<IModVar_mod_FrontThk>s).mod_FrontThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripBtmType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripBtmType')) {
          let pv = <IModVar_mod_FingergripBtmType>s;
          if (pv.mod_FingergripBtmType !== undefined) {
            this.mod_FingergripBtmType = (<IModVar_mod_FingergripBtmType>s).mod_FingergripBtmType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripTopType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripTopType')) {
          let pv = <IModVar_mod_FingergripTopType>s;
          if (pv.mod_FingergripTopType !== undefined) {
            this.mod_FingergripTopType = (<IModVar_mod_FingergripTopType>s).mod_FingergripTopType;
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
    if (this.mod_DoorDirection === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DoorDirection')) {
          let pv = <IModVar_mod_DoorDirection>s;
          if (pv.mod_DoorDirection !== undefined) {
            this.mod_DoorDirection = (<IModVar_mod_DoorDirection>s).mod_DoorDirection;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_InteriorEquipmentHinge === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_InteriorEquipmentHinge')) {
          let pv = <IModVar_mod_InteriorEquipmentHinge>s;
          if (pv.mod_InteriorEquipmentHinge !== undefined) {
            this.mod_InteriorEquipmentHinge = (<IModVar_mod_InteriorEquipmentHinge>s).mod_InteriorEquipmentHinge;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HingeColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HingeColor')) {
          let pv = <IModVar_mod_HingeColor>s;
          if (pv.mod_HingeColor !== undefined) {
            this.mod_HingeColor = (<IModVar_mod_HingeColor>s).mod_HingeColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_MountingPlateType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_MountingPlateType')) {
          let pv = <IModVar_mod_MountingPlateType>s;
          if (pv.mod_MountingPlateType !== undefined) {
            this.mod_MountingPlateType = (<IModVar_mod_MountingPlateType>s).mod_MountingPlateType;
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
    if (this.mod_HingeType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HingeType')) {
          let pv = <IModVar_mod_HingeType>s;
          if (pv.mod_HingeType !== undefined) {
            this.mod_HingeType = (<IModVar_mod_HingeType>s).mod_HingeType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_DoorType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DoorType')) {
          let pv = <IModVar_mod_DoorType>s;
          if (pv.mod_DoorType !== undefined) {
            this.mod_DoorType = (<IModVar_mod_DoorType>s).mod_DoorType;
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
    if (this.mod_CarcaseId === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseId')) {
          let pv = <IModVar_mod_CarcaseId>s;
          if (pv.mod_CarcaseId !== undefined) {
            this.mod_CarcaseId = (<IModVar_mod_CarcaseId>s).mod_CarcaseId;
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
    internal_leaveDataCompletionAssignDerivedData();
  }

  #dataCompletionSetDefaults() {
    this.#dataCompletionSetDefaultValues();
    this.#dataCompletionSetDefaultScripts();
  }
  #dataCompletionSetDefaultValues() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    if (this.mod_FrontType === undefined) {
      this.mod_FrontType = "";
    }
    if (this.mod_Height === undefined) {
      this.mod_Height = 1000;
    }
    if (this.mod_FrontId === undefined) {
      this.mod_FrontId = "";
    }
    if (this.mod_CarcaseId === undefined) {
      this.mod_CarcaseId = "";
    }
    if (this.mod_FlipliftType === undefined) {
      this.mod_FlipliftType = "FHF";
    }
    if (this.mod_FlipliftHardwareType === undefined) {
      this.mod_FlipliftHardwareType = "Automatic";
    }
    if (this.mod_Information === undefined) {
      this.mod_Information = "";
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
  #manufacturerDataCompletionInternal = mc_HingeGroup01_manufacturerDataCompletion;
  override afterDataCompletion(): void {
    if (this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_HingeGroup01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_HingeGroup01 {
    this.afterDataCompletion();
    const adc = new OD_M_mc_HingeGroup01_NonNull(this);
    return adc;
  }

  addOD_M_mc_Hinge01(index?: number): dc_mc_Hinge01 {
    var m = new OD_M_mc_Hinge01(this);
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
    this.mod_HingePos1_matrix = VariantValidation.mod_HingePos1(this, this.mod_HingePos1);
    this.mod_HingePos2_matrix = VariantValidation.mod_HingePos2(this, this.mod_HingePos2);
    this.mod_HingePos3_matrix = VariantValidation.mod_HingePos3(this, this.mod_HingePos3);
    this.mod_HingePos4_matrix = VariantValidation.mod_HingePos4(this, this.mod_HingePos4);
    this.mod_HingePos5_matrix = VariantValidation.mod_HingePos5(this, this.mod_HingePos5);
    this.mod_HingePos6_matrix = VariantValidation.mod_HingePos6(this, this.mod_HingePos6);
    this.mod_FrontHeight_matrix = VariantValidation.mod_FrontHeight(this, this.mod_FrontHeight);
    this.mod_FrontType_matrix = VariantValidation.mod_FrontType(this, this.mod_FrontType);
    this.mod_Width_matrix = VariantValidation.mod_Width(this, this.mod_Width);
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this.mod_Depth);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this.mod_Height);
    this.mod_HingeLogic_matrix = VariantValidation.mod_HingeLogic(this, this.mod_HingeLogic);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this.mod_ModuleName);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this.mod_TypeElement);
    this.mod_FrontWidth_matrix = VariantValidation.mod_FrontWidth(this, this.mod_FrontWidth);
    this.mod_FrontThk_matrix = VariantValidation.mod_FrontThk(this, this.mod_FrontThk);
    this.mod_FingergripBtmType_matrix = VariantValidation.mod_FingergripBtmType(this, this.mod_FingergripBtmType);
    this.mod_FingergripTopType_matrix = VariantValidation.mod_FingergripTopType(this, this.mod_FingergripTopType);
    this.mod_HandleDesign_matrix = VariantValidation.mod_HandleDesign(this, this.mod_HandleDesign);
    this.mod_HandlePosLogic_matrix = VariantValidation.mod_HandlePosLogic(this, this.mod_HandlePosLogic);
    this.mod_DoorDirection_matrix = VariantValidation.mod_DoorDirection(this, this.mod_DoorDirection);
    this.mod_InteriorEquipmentHinge_matrix = VariantValidation.mod_InteriorEquipmentHinge(this, this.mod_InteriorEquipmentHinge);
    this.mod_HingeColor_matrix = VariantValidation.mod_HingeColor(this, this.mod_HingeColor);
    this.mod_MountingPlateType_matrix = VariantValidation.mod_MountingPlateType(this, this.mod_MountingPlateType);
    this.mod_FrontPosStart_matrix = VariantValidation.mod_FrontPosStart(this, this.mod_FrontPosStart);
    this.mod_FrontGapCarcase_matrix = VariantValidation.mod_FrontGapCarcase(this, this.mod_FrontGapCarcase);
    this.mod_HingeType_matrix = VariantValidation.mod_HingeType(this, this.mod_HingeType);
    this.mod_DoorType_matrix = VariantValidation.mod_DoorType(this, this.mod_DoorType);
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this.mod_FrontId);
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this.mod_CarcaseId);
    this.mod_FlipliftType_matrix = VariantValidation.mod_FlipliftType(this, this.mod_FlipliftType);
    this.mod_FlipliftHardwareType_matrix = VariantValidation.mod_FlipliftHardwareType(this, this.mod_FlipliftHardwareType);
    this.mod_OpeningType_matrix = VariantValidation.mod_OpeningType(this, this.mod_OpeningType);
    this.mod_Information_matrix = VariantValidation.mod_Information(this, this.mod_Information);
  }

  override calculateContainerModules(): void {
    let ccm = new OD_M_mc_HingeGroup01_NonNull(this);
    ccm.calculateContainerModules();
    this.m.forEach(subMod => subMod.calculateContainerModules());
  }

  addpart_DoorUnit(x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): IP_part_DoorUnit_PartVarsWritable {
    var c = new P_part_DoorUnit(this._selfNonNull, x, y, z, dimx, dimy, dimz, undefined);
    this.p.push(c);
    return c;
  }

  override createBuildPlan(): void {
    var cbp = new OD_M_mc_HingeGroup01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_HingeGroup01_NonNull implements cbp_mc_HingeGroup01, adc_mc_HingeGroup01, ccm_mc_HingeGroup01, IPartParentsNonNull_mc_HingeGroup01, IPartParentsNonNull_mc_Door01_mc_HingeGroup01 {
  constructor(parent: OD_M_mc_HingeGroup01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_HingeGroup01;

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
  #createBuildPlanInternal = mc_HingeGroup01_createBuildPlan;
  afterDataCompletion(): void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_HingeGroup01_afterDataCompletion;
  calculateContainerModules(): void {
    this.#calculateContainerModulesInternal();
  }
  #calculateContainerModulesInternal = mc_HingeGroup01_calculateContainerModules;
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
  parent: IModParents_mc_Door01_mc_Fliplift01;
  addpart_DoorUnit(x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): IP_part_DoorUnit_PartVarsWritable {
    return this.#internalParent.addpart_DoorUnit(x, y, z, dimx, dimy, dimz);
  }
  get mod_HingePos1(): number {
    return this.#internalParent.mod_HingePos1!;
  }
  get mod_HingePos2(): number {
    return this.#internalParent.mod_HingePos2!;
  }
  get mod_HingePos3(): number {
    return this.#internalParent.mod_HingePos3!;
  }
  get mod_HingePos4(): number {
    return this.#internalParent.mod_HingePos4!;
  }
  get mod_HingePos5(): number {
    return this.#internalParent.mod_HingePos5!;
  }
  get mod_HingePos6(): number {
    return this.#internalParent.mod_HingePos6!;
  }
  get mod_FrontHeight(): number {
    return this.#internalParent.mod_FrontHeight!;
  }
  get mod_FrontType(): string {
    return this.#internalParent.mod_FrontType!;
  }
  get mod_Width(): number {
    return this.#internalParent.mod_Width!;
  }
  get mod_Depth(): number {
    return this.#internalParent.mod_Depth!;
  }
  get mod_Height(): number {
    return this.#internalParent.mod_Height!;
  }
  get mod_HingeInfo(): string[] {
    return this.#internalParent.mod_HingeInfo!;
  }
  get mod_CarcasePartInfo(): string[] {
    return this.#internalParent.mod_CarcasePartInfo!;
  }
  get mod_HingeLogic(): string {
    return this.#internalParent.mod_HingeLogic!;
  }
  get mod_HingeLogic_matrix(): IMatrix_mod_HingeLogic {
    return this.#internalParent.mod_HingeLogic_matrix!;
  }
  get mod_ModuleName(): string {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_TypeElement(): string {
    return this.#internalParent.mod_TypeElement!;
  }
  get mod_FrontWidth(): number {
    return this.#internalParent.mod_FrontWidth!;
  }
  get mod_FrontThk(): number {
    return this.#internalParent.mod_FrontThk!;
  }
  get mod_FingergripBtmType(): string {
    return this.#internalParent.mod_FingergripBtmType!;
  }
  get mod_FingergripTopType(): string {
    return this.#internalParent.mod_FingergripTopType!;
  }
  get mod_HandleDesign(): string {
    return this.#internalParent.mod_HandleDesign!;
  }
  get mod_HandleDesign_matrix(): IMatrix_mod_HandleDesign {
    return this.#internalParent.mod_HandleDesign_matrix!;
  }
  get mod_HandlePosLogic(): string {
    return this.#internalParent.mod_HandlePosLogic!;
  }
  get mod_DoorDirection(): string {
    return this.#internalParent.mod_DoorDirection!;
  }
  get mod_InteriorEquipmentHinge(): string {
    return this.#internalParent.mod_InteriorEquipmentHinge!;
  }
  get mod_HingeColor(): string {
    return this.#internalParent.mod_HingeColor!;
  }
  get mod_MountingPlateType(): string {
    return this.#internalParent.mod_MountingPlateType!;
  }
  get mod_Originpos(): number[] {
    return this.#internalParent.mod_Originpos!;
  }
  get mod_FrontPosStart(): number {
    return this.#internalParent.mod_FrontPosStart!;
  }
  get mod_FrontGapCarcase(): number {
    return this.#internalParent.mod_FrontGapCarcase!;
  }
  get mod_HingeType(): string {
    return this.#internalParent.mod_HingeType!;
  }
  get mod_HingeType_matrix(): IMatrix_mod_HingeType {
    return this.#internalParent.mod_HingeType_matrix!;
  }
  get mod_DoorType(): string {
    return this.#internalParent.mod_DoorType!;
  }
  get mod_FrontId(): string {
    return this.#internalParent.mod_FrontId!;
  }
  get mod_CarcaseId(): string {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_OpeningAngle(): string[] {
    return this.#internalParent.mod_OpeningAngle!;
  }
  get mod_FlipliftType(): string {
    return this.#internalParent.mod_FlipliftType!;
  }
  get mod_FlipliftType_matrix(): IMatrix_mod_FlipliftType {
    return this.#internalParent.mod_FlipliftType_matrix!;
  }
  get mod_FlipliftHardwareType(): string {
    return this.#internalParent.mod_FlipliftHardwareType!;
  }
  get mod_OpeningType(): string {
    return this.#internalParent.mod_OpeningType!;
  }
  get mod_Information(): string {
    return this.#internalParent.mod_Information!;
  }
  addOD_M_mc_Hinge01(index?: number): dc_mc_Hinge01 {
    return this.#internalParent.addOD_M_mc_Hinge01(index);
  }
}

