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
import { IModParents_mf_Door } from '../mod-interfaces'
import { OD_M_mc_HoodInsert01, dc_mc_HoodInsert01 } from './mc_HoodInsert01'
import { IModuleNonNull_me_HoodInsert, IModParents_me_HoodInsert, IPartParentsNonNull_me_HoodInsert } from '../mod-interfaces'
import { IModVar_mod_HoodId, IModVarNonNull_mod_HoodId, IModVar_mod_HoodSupplier, IModVarNonNull_mod_HoodSupplier, IModVar_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseHeight, IModVar_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseDepth, IModVar_mod_CarcaseSpaceDimension, IModVarNonNull_mod_CarcaseSpaceDimension, IModVar_mod_CarcaseWidth, IModVarNonNull_mod_CarcaseWidth, IModVar_mod_CarcaseId, IModVarNonNull_mod_CarcaseId, IModVar_mod_FrontGapHor, IModVarNonNull_mod_FrontGapHor, IModVar_mod_FrontId, IModVarNonNull_mod_FrontId, IModVar_mod_FrontPosStart, IModVarNonNull_mod_FrontPosStart, IModVar_mod_Information, IModVarNonNull_mod_Information, IModVar_mod_Originpos, IModVarNonNull_mod_Originpos, IModVar_mod_ModuleName, IModVarNonNull_mod_ModuleName, IModVar_mod_ParentName, IModVarNonNull_mod_ParentName, IModVar_mod_ShelfbtmThk, IModVarNonNull_mod_ShelfbtmThk, IModVar_mod_ShelffixedInfoList, IModVarNonNull_mod_ShelffixedInfoList, IModVar_mod_ShelffixedThk, IModVarNonNull_mod_ShelffixedThk, IModVar_mod_SidepanelrightThk, IModVarNonNull_mod_SidepanelrightThk, IModVar_mod_SidepanelleftThk, IModVarNonNull_mod_SidepanelleftThk } from '../var-interfaces'
import { VariantValidation, IMatrix_mod_HoodId, IMatrix_mod_HoodSupplier, IMatrix_mod_CarcaseHeight, IMatrix_mod_CarcaseDepth, IMatrix_mod_CarcaseWidth, IMatrix_mod_CarcaseId, IMatrix_mod_FrontGapHor, IMatrix_mod_FrontId, IMatrix_mod_FrontPosStart, IMatrix_mod_Information, IMatrix_mod_ModuleName, IMatrix_mod_ParentName, IMatrix_mod_ShelfbtmThk, IMatrix_mod_ShelffixedThk, IMatrix_mod_SidepanelrightThk, IMatrix_mod_SidepanelleftThk } from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { me_HoodInsert_createBuildPlan, me_HoodInsert_afterDataCompletion, me_HoodInsert_manufacturerDataCompletion, me_HoodInsert_calculateContainerModules } from '../../modules/me_HoodInsert';

export interface cbp_me_HoodInsert extends IModBaseProp
  , IModVarNonNull_mod_HoodId, IModVarNonNull_mod_HoodSupplier, IModVarNonNull_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseSpaceDimension, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_Information, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_ShelfbtmThk, IModVarNonNull_mod_ShelffixedInfoList, IModVarNonNull_mod_ShelffixedThk, IModVarNonNull_mod_SidepanelrightThk, IModVarNonNull_mod_SidepanelleftThk {
  parent: IModParents_mf_Door;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_me_HoodInsert extends IModBaseProp
  , IModVar_mod_HoodId, IModVar_mod_HoodSupplier, IModVar_mod_CarcaseHeight, IModVar_mod_CarcaseDepth, IModVar_mod_CarcaseSpaceDimension, IModVar_mod_CarcaseWidth, IModVar_mod_CarcaseId, IModVar_mod_FrontGapHor, IModVar_mod_FrontId, IModVar_mod_FrontPosStart, IModVar_mod_Information, IModVar_mod_Originpos, IModVar_mod_ModuleName, IModVar_mod_ParentName, IModVar_mod_ShelfbtmThk, IModVar_mod_ShelffixedInfoList, IModVar_mod_ShelffixedThk, IModVar_mod_SidepanelrightThk, IModVar_mod_SidepanelleftThk {
  m: OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  seal(): IModuleNonNull_me_HoodInsert;
  parent: IModParents_mf_Door;
  addOD_M_mc_HoodInsert01(index?: number): dc_mc_HoodInsert01;
}

export interface adc_base_me_HoodInsert extends IModBaseProp
  , IModVarNonNull_mod_HoodId, IModVarNonNull_mod_HoodSupplier, IModVarNonNull_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseSpaceDimension, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_Information, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_ShelfbtmThk, IModVarNonNull_mod_ShelffixedInfoList, IModVarNonNull_mod_ShelffixedThk, IModVarNonNull_mod_SidepanelrightThk, IModVarNonNull_mod_SidepanelleftThk {
  get m(): OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
}

export interface adc_me_HoodInsert extends adc_base_me_HoodInsert {
  addOD_M_mc_HoodInsert01(index?: number): dc_mc_HoodInsert01;
}

export interface ccm_me_HoodInsert extends adc_base_me_HoodInsert {
}


export class OD_M_me_HoodInsert extends OD_Base implements dc_me_HoodInsert
  , IModParents_me_HoodInsert
  , IModVar_mod_HoodId, IModVar_mod_HoodSupplier, IModVar_mod_CarcaseHeight, IModVar_mod_CarcaseDepth, IModVar_mod_CarcaseSpaceDimension, IModVar_mod_CarcaseWidth, IModVar_mod_CarcaseId, IModVar_mod_FrontGapHor, IModVar_mod_FrontId, IModVar_mod_FrontPosStart, IModVar_mod_Information, IModVar_mod_Originpos, IModVar_mod_ModuleName, IModVar_mod_ParentName, IModVar_mod_ShelfbtmThk, IModVar_mod_ShelffixedInfoList, IModVar_mod_ShelffixedThk, IModVar_mod_SidepanelrightThk, IModVar_mod_SidepanelleftThk {
  constructor(parent: IModParents_mf_Door, manufacturerMode?: boolean) {
    super('me_HoodInsert', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_me_HoodInsert_NonNull(this);
  }
  parent: IModParents_mf_Door;
  _selfNonNull: OD_M_me_HoodInsert_NonNull;

  override variants: string[] = ['mod_HoodId', 'mod_HoodSupplier', 'mod_CarcaseHeight', 'mod_CarcaseDepth', 'mod_CarcaseSpaceDimension', 'mod_CarcaseWidth', 'mod_CarcaseId', 'mod_FrontGapHor', 'mod_FrontId', 'mod_FrontPosStart', 'mod_Information', 'mod_Originpos', 'mod_ModuleName', 'mod_ParentName', 'mod_ShelfbtmThk', 'mod_ShelffixedInfoList', 'mod_ShelffixedThk', 'mod_SidepanelrightThk', 'mod_SidepanelleftThk',];
  #mod_HoodId?: string;
  get mod_HoodId(): string | undefined { return this.#mod_HoodId }
  set mod_HoodId(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HoodId' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HoodId === value) return;
    this.#mod_HoodId = value;
  }

  mod_HoodId_matrix?: IMatrix_mod_HoodId;
  #mod_HoodSupplier?: string;
  get mod_HoodSupplier(): string | undefined { return this.#mod_HoodSupplier }
  set mod_HoodSupplier(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_HoodSupplier' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_HoodSupplier === value) return;
    this.#mod_HoodSupplier = value;
  }

  mod_HoodSupplier_matrix?: IMatrix_mod_HoodSupplier;
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
  #mod_CarcaseSpaceDimension: string[] = [];
  get mod_CarcaseSpaceDimension(): string[] { return this.#mod_CarcaseSpaceDimension; }
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
  #mod_Originpos: number[] = [];
  get mod_Originpos(): number[] { return this.#mod_Originpos; }
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
  #mod_ShelffixedInfoList: string[] = [];
  get mod_ShelffixedInfoList(): string[] { return this.#mod_ShelffixedInfoList; }
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
  override getAttributes(): Map<string, any> {
    let res = new Map<string, any>();
    res.set('mod_HoodId', this.mod_HoodId);
    res.set('mod_HoodSupplier', this.mod_HoodSupplier);
    res.set('mod_CarcaseHeight', this.mod_CarcaseHeight);
    res.set('mod_CarcaseDepth', this.mod_CarcaseDepth);
    res.set('mod_CarcaseSpaceDimension', JSON.stringify(this.mod_CarcaseSpaceDimension));
    res.set('mod_CarcaseWidth', this.mod_CarcaseWidth);
    res.set('mod_CarcaseId', this.mod_CarcaseId);
    res.set('mod_FrontGapHor', this.mod_FrontGapHor);
    res.set('mod_FrontId', this.mod_FrontId);
    res.set('mod_FrontPosStart', this.mod_FrontPosStart);
    res.set('mod_Information', this.mod_Information);
    res.set('mod_Originpos', JSON.stringify(this.mod_Originpos));
    res.set('mod_ModuleName', this.mod_ModuleName);
    res.set('mod_ParentName', this.mod_ParentName);
    res.set('mod_ShelfbtmThk', this.mod_ShelfbtmThk);
    res.set('mod_ShelffixedInfoList', JSON.stringify(this.mod_ShelffixedInfoList));
    res.set('mod_ShelffixedThk', this.mod_ShelffixedThk);
    res.set('mod_SidepanelrightThk', this.mod_SidepanelrightThk);
    res.set('mod_SidepanelleftThk', this.mod_SidepanelleftThk);
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
      internal_enterValidateVariant(this.modId, this._id, 'mod_HoodId');
      const val = _toString(json['attributes']['mod_HoodId'], 'mod_HoodId');
      internal_leaveValidateVariant();
      this.mod_HoodId = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_HoodSupplier');
      const val = _toString(json['attributes']['mod_HoodSupplier'], 'mod_HoodSupplier');
      internal_leaveValidateVariant();
      this.mod_HoodSupplier = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseHeight');
      const val = _toFloat(json['attributes']['mod_CarcaseHeight'], 'mod_CarcaseHeight');
      internal_leaveValidateVariant();
      this.mod_CarcaseHeight = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseDepth');
      const val = _toFloat(json['attributes']['mod_CarcaseDepth'], 'mod_CarcaseDepth');
      internal_leaveValidateVariant();
      this.mod_CarcaseDepth = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseWidth');
      const val = _toFloat(json['attributes']['mod_CarcaseWidth'], 'mod_CarcaseWidth');
      internal_leaveValidateVariant();
      this.mod_CarcaseWidth = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseId');
      const val = _toString(json['attributes']['mod_CarcaseId'], 'mod_CarcaseId');
      internal_leaveValidateVariant();
      this.mod_CarcaseId = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapHor');
      const val = _toFloat(json['attributes']['mod_FrontGapHor'], 'mod_FrontGapHor');
      internal_leaveValidateVariant();
      this.mod_FrontGapHor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontId');
      const val = _toString(json['attributes']['mod_FrontId'], 'mod_FrontId');
      internal_leaveValidateVariant();
      this.mod_FrontId = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontPosStart');
      const val = _toFloat(json['attributes']['mod_FrontPosStart'], 'mod_FrontPosStart');
      internal_leaveValidateVariant();
      this.mod_FrontPosStart = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_Information');
      const val = _toString(json['attributes']['mod_Information'], 'mod_Information');
      internal_leaveValidateVariant();
      this.mod_Information = val;
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
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedThk');
      const val = _toFloat(json['attributes']['mod_ShelffixedThk'], 'mod_ShelffixedThk');
      internal_leaveValidateVariant();
      this.mod_ShelffixedThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelrightThk');
      const val = _toFloat(json['attributes']['mod_SidepanelrightThk'], 'mod_SidepanelrightThk');
      internal_leaveValidateVariant();
      this.mod_SidepanelrightThk = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelleftThk');
      const val = _toFloat(json['attributes']['mod_SidepanelleftThk'], 'mod_SidepanelleftThk');
      internal_leaveValidateVariant();
      this.mod_SidepanelleftThk = val;
    }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod: any) => { this.m.push(loadOrderData(subMod, this, manufacturerMode)) });
    }
    internal_leaveLoadJson();
  }
  override checkPosRelevantRequiredAttributes(): void {
    if (this.#mod_CarcaseHeight !== undefined) {
      this.#mod_CarcaseHeight = undefined;
      logWarning('The attribute "mod_CarcaseHeight" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_CarcaseDepth !== undefined) {
      this.#mod_CarcaseDepth = undefined;
      logWarning('The attribute "mod_CarcaseDepth" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_CarcaseWidth !== undefined) {
      this.#mod_CarcaseWidth = undefined;
      logWarning('The attribute "mod_CarcaseWidth" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_CarcaseId !== undefined) {
      this.#mod_CarcaseId = undefined;
      logWarning('The attribute "mod_CarcaseId" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FrontId !== undefined) {
      this.#mod_FrontId = undefined;
      logWarning('The attribute "mod_FrontId" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_Information !== undefined) {
      this.#mod_Information = undefined;
      logWarning('The attribute "mod_Information" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_ModuleName !== undefined) {
      this.#mod_ModuleName = undefined;
      logWarning('The attribute "mod_ModuleName" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_ParentName !== undefined) {
      this.#mod_ParentName = undefined;
      logWarning('The attribute "mod_ParentName" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_ShelffixedThk !== undefined) {
      this.#mod_ShelffixedThk = undefined;
      logWarning('The attribute "mod_ShelffixedThk" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_SidepanelrightThk !== undefined) {
      this.#mod_SidepanelrightThk = undefined;
      logWarning('The attribute "mod_SidepanelrightThk" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_SidepanelleftThk !== undefined) {
      this.#mod_SidepanelleftThk = undefined;
      logWarning('The attribute "mod_SidepanelleftThk" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
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
    internal_leaveDataCompletionAssignDerivedData();
  }

  #dataCompletionSetDefaults() {
    this.#dataCompletionSetDefaultValues();
    this.#dataCompletionSetDefaultScripts();
  }
  #dataCompletionSetDefaultValues() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    if (this.mod_HoodId === undefined) {
      this.mod_HoodId = "None";
    }
    if (this.mod_HoodSupplier === undefined) {
      this.mod_HoodSupplier = "None";
    }
    if (this.mod_CarcaseId === undefined) {
      this.mod_CarcaseId = "";
    }
    if (this.mod_FrontId === undefined) {
      this.mod_FrontId = "";
    }
    if (this.mod_FrontPosStart === undefined) {
      this.mod_FrontPosStart = 0;
    }
    if (this.mod_Information === undefined) {
      this.mod_Information = "";
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "me_HoodInsert";
    }
    if (this.mod_ParentName === undefined) {
      this.mod_ParentName = "";
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
  #manufacturerDataCompletionInternal = me_HoodInsert_manufacturerDataCompletion;
  override afterDataCompletion(): void {
    if (this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_me_HoodInsert_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_me_HoodInsert {
    this.afterDataCompletion();
    const adc = new OD_M_me_HoodInsert_NonNull(this);
    return adc;
  }

  addOD_M_mc_HoodInsert01(index?: number): dc_mc_HoodInsert01 {
    var m = new OD_M_mc_HoodInsert01(this);
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
    this.mod_HoodId_matrix = VariantValidation.mod_HoodId(this, this.mod_HoodId);
    this.mod_HoodSupplier_matrix = VariantValidation.mod_HoodSupplier(this, this.mod_HoodSupplier);
    this.mod_CarcaseHeight_matrix = VariantValidation.mod_CarcaseHeight(this, this.mod_CarcaseHeight);
    this.mod_CarcaseDepth_matrix = VariantValidation.mod_CarcaseDepth(this, this.mod_CarcaseDepth);
    this.mod_CarcaseWidth_matrix = VariantValidation.mod_CarcaseWidth(this, this.mod_CarcaseWidth);
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this.mod_CarcaseId);
    this.mod_FrontGapHor_matrix = VariantValidation.mod_FrontGapHor(this, this.mod_FrontGapHor);
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this.mod_FrontId);
    this.mod_FrontPosStart_matrix = VariantValidation.mod_FrontPosStart(this, this.mod_FrontPosStart);
    this.mod_Information_matrix = VariantValidation.mod_Information(this, this.mod_Information);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this.mod_ModuleName);
    this.mod_ParentName_matrix = VariantValidation.mod_ParentName(this, this.mod_ParentName);
    this.mod_ShelfbtmThk_matrix = VariantValidation.mod_ShelfbtmThk(this, this.mod_ShelfbtmThk);
    this.mod_ShelffixedThk_matrix = VariantValidation.mod_ShelffixedThk(this, this.mod_ShelffixedThk);
    this.mod_SidepanelrightThk_matrix = VariantValidation.mod_SidepanelrightThk(this, this.mod_SidepanelrightThk);
    this.mod_SidepanelleftThk_matrix = VariantValidation.mod_SidepanelleftThk(this, this.mod_SidepanelleftThk);
  }

  override calculateContainerModules(): void {
    let ccm = new OD_M_me_HoodInsert_NonNull(this);
    ccm.calculateContainerModules();
    this.m.forEach(subMod => subMod.calculateContainerModules());
  }


  override createBuildPlan(): void {
    var cbp = new OD_M_me_HoodInsert_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_me_HoodInsert_NonNull implements cbp_me_HoodInsert, adc_me_HoodInsert, ccm_me_HoodInsert, IPartParentsNonNull_me_HoodInsert {
  constructor(parent: OD_M_me_HoodInsert) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_me_HoodInsert;

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
  #createBuildPlanInternal = me_HoodInsert_createBuildPlan;
  afterDataCompletion(): void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = me_HoodInsert_afterDataCompletion;
  calculateContainerModules(): void {
    this.#calculateContainerModulesInternal();
  }
  #calculateContainerModulesInternal = me_HoodInsert_calculateContainerModules;
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
  parent: IModParents_mf_Door;
  get mod_HoodId(): string {
    return this.#internalParent.mod_HoodId!;
  }
  get mod_HoodSupplier(): string {
    return this.#internalParent.mod_HoodSupplier!;
  }
  get mod_CarcaseHeight(): number {
    return this.#internalParent.mod_CarcaseHeight!;
  }
  get mod_CarcaseDepth(): number {
    return this.#internalParent.mod_CarcaseDepth!;
  }
  get mod_CarcaseSpaceDimension(): string[] {
    return this.#internalParent.mod_CarcaseSpaceDimension!;
  }
  get mod_CarcaseWidth(): number {
    return this.#internalParent.mod_CarcaseWidth!;
  }
  get mod_CarcaseId(): string {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_FrontGapHor(): number {
    return this.#internalParent.mod_FrontGapHor!;
  }
  get mod_FrontId(): string {
    return this.#internalParent.mod_FrontId!;
  }
  get mod_FrontPosStart(): number {
    return this.#internalParent.mod_FrontPosStart!;
  }
  get mod_Information(): string {
    return this.#internalParent.mod_Information!;
  }
  get mod_Originpos(): number[] {
    return this.#internalParent.mod_Originpos!;
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
  get mod_ShelffixedInfoList(): string[] {
    return this.#internalParent.mod_ShelffixedInfoList!;
  }
  get mod_ShelffixedThk(): number {
    return this.#internalParent.mod_ShelffixedThk!;
  }
  get mod_SidepanelrightThk(): number {
    return this.#internalParent.mod_SidepanelrightThk!;
  }
  get mod_SidepanelleftThk(): number {
    return this.#internalParent.mod_SidepanelleftThk!;
  }
  addOD_M_mc_HoodInsert01(index?: number): dc_mc_HoodInsert01 {
    return this.#internalParent.addOD_M_mc_HoodInsert01(index);
  }
}

