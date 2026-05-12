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
import { IPartBase, PartBase, _toFloat, _toInt, _toString, _toBoolean, IModBaseProp, IContextData, IDockingInfo, Dock, IInsertLevelInfo } from '../mod-base'
import { loadOrderData } from '../loader'
import { GlobalFunc } from '../global-func'
import { IP_part_Placeholder_PartVarsWritable, P_part_Placeholder } from '../parts/part_Placeholder'
import { OD_M_me_ShelfadjMultiple01, dc_me_ShelfadjMultiple01 } from './me_ShelfadjMultiple01'
import { OD_M_me_ClothingOrganizer01, dc_me_ClothingOrganizer01 } from './me_ClothingOrganizer01'
import { IModuleNonNull_md_EquipmentArticleBuilder, IModParents_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_Fliplift_mf_RackArea, IModParents_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_RackArea, IModParents_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_md_FrontArticleBuilder_md_FrontPlaceholder, IPartParentsNonNull_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_Fliplift_mf_RackArea, IPartParentsNonNull_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_RackArea, IPartParentsNonNull_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_md_FrontArticleBuilder_md_FrontPlaceholder } from '../mod-interfaces'
import { IModVar_mod_CarcaseColor, IModVarNonNull_mod_CarcaseColor, IModVar_mod_CarcaseId, IModVarNonNull_mod_CarcaseId, IModVar_mod_CarcaseProgram, IModVarNonNull_mod_CarcaseProgram, IModVar_mod_FrontDesign, IModVarNonNull_mod_FrontDesign, IModVar_mod_FrontProgram, IModVarNonNull_mod_FrontProgram, IModVar_mod_ShelfadjColor, IModVarNonNull_mod_ShelfadjColor, IModVar_mod_ShelfadjDescriptor, IModVarNonNull_mod_ShelfadjDescriptor, IModVar_mod_ShelfadjDesign, IModVarNonNull_mod_ShelfadjDesign, IModVar_mod_ShelfadjDrillDistance, IModVarNonNull_mod_ShelfadjDrillDistance, IModVar_mod_ShelfadjDrillType, IModVarNonNull_mod_ShelfadjDrillType, IModVar_mod_TypeElement, IModVarNonNull_mod_TypeElement, IModVar_mod_Width, IModVarNonNull_mod_Width, IModVar_mod_CarcaseSpaceDimension, IModVarNonNull_mod_CarcaseSpaceDimension } from '../var-interfaces'
import { VariantValidation, IMatrix_mod_CarcaseColor, IMatrix_mod_CarcaseId, IMatrix_mod_CarcaseProgram, IMatrix_mod_FrontDesign, IMatrix_mod_FrontProgram, IMatrix_mod_ShelfadjColor, IMatrix_mod_ShelfadjDescriptor, IMatrix_mod_ShelfadjDesign, IMatrix_mod_ShelfadjDrillDistance, IMatrix_mod_ShelfadjDrillType, IMatrix_mod_TypeElement, IMatrix_mod_Width } from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'
import { IGlobalVarsParent } from '../global-vars-parent'

import { IPartAdd_part_Placeholder } from '../part-add-interfaces';
import { md_EquipmentArticleBuilder_createBuildPlan, md_EquipmentArticleBuilder_afterDataCompletion, md_EquipmentArticleBuilder_manufacturerDataCompletion, md_EquipmentArticleBuilder_calculateContainerModules, md_EquipmentArticleBuilder_prepareContext } from '../../modules/md_EquipmentArticleBuilder';

export interface cbp_md_EquipmentArticleBuilder extends IModBaseProp
  , IPartAdd_part_Placeholder, IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_ShelfadjColor, IModVarNonNull_mod_ShelfadjDescriptor, IModVarNonNull_mod_ShelfadjDesign, IModVarNonNull_mod_ShelfadjDrillDistance, IModVarNonNull_mod_ShelfadjDrillType, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_Width, IModVarNonNull_mod_CarcaseSpaceDimension {
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  getFullOrigin(): Vector3;
  addGenerationContour(generationMethod: GenerationMethod, height: number, contour: Contour): void;
  getRoomContours(): RoomContour[];
  get m(): OD_Base[];
}

export interface dc_md_EquipmentArticleBuilder extends IModBaseProp
  , IModVar_mod_CarcaseColor, IModVar_mod_CarcaseId, IModVar_mod_CarcaseProgram, IModVar_mod_FrontDesign, IModVar_mod_FrontProgram, IModVar_mod_ShelfadjColor, IModVar_mod_ShelfadjDescriptor, IModVar_mod_ShelfadjDesign, IModVar_mod_ShelfadjDrillDistance, IModVar_mod_ShelfadjDrillType, IModVar_mod_TypeElement, IModVar_mod_Width, IModVar_mod_CarcaseSpaceDimension {
  m: OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  seal(): IModuleNonNull_md_EquipmentArticleBuilder;
  addOD_M_me_ShelfadjMultiple01(index?: number): dc_me_ShelfadjMultiple01;
  addOD_M_me_ClothingOrganizer01(index?: number): dc_me_ClothingOrganizer01;
}

export interface pc_md_EquipmentArticleBuilder extends dc_md_EquipmentArticleBuilder {
  getContextData(): IContextData | undefined;
  getContextModule(id: string): OD_Base | undefined;
}

export interface adc_base_md_EquipmentArticleBuilder extends IModBaseProp
  , IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_ShelfadjColor, IModVarNonNull_mod_ShelfadjDescriptor, IModVarNonNull_mod_ShelfadjDesign, IModVarNonNull_mod_ShelfadjDrillDistance, IModVarNonNull_mod_ShelfadjDrillType, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_Width, IModVarNonNull_mod_CarcaseSpaceDimension {
  get m(): OD_Base[];
  setOrigin(x: number | Matrix4, y?: number, z?: number): void;
  get dockingInfo(): IDockingInfo[];
  addDockingInfo(id: Dock, start: Vector3, end: Vector3): IDockingInfo;
  get insertLevelInfo(): IInsertLevelInfo[];
  get insertLevelFixed(): boolean;
  set insertLevelFixed(value: boolean);
  addInsertLevelHeight(height: number): IInsertLevelInfo;
  addInsertLevelHeight(height: number, isDefault: boolean | undefined): IInsertLevelInfo;
  getRoomContours(): RoomContour[];
  get _posData(): Map<string, string | number>;
}

export interface adc_md_EquipmentArticleBuilder extends adc_base_md_EquipmentArticleBuilder {
  addOD_M_me_ShelfadjMultiple01(index?: number): dc_me_ShelfadjMultiple01;
  addOD_M_me_ClothingOrganizer01(index?: number): dc_me_ClothingOrganizer01;
}

export interface ccm_md_EquipmentArticleBuilder extends adc_base_md_EquipmentArticleBuilder {
}


export class OD_M_md_EquipmentArticleBuilder extends OD_Base implements pc_md_EquipmentArticleBuilder, dc_md_EquipmentArticleBuilder
  , IModParents_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_Fliplift_mf_RackArea, IModParents_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_RackArea, IModParents_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_md_FrontArticleBuilder_md_FrontPlaceholder
  , IModVar_mod_CarcaseColor, IModVar_mod_CarcaseId, IModVar_mod_CarcaseProgram, IModVar_mod_FrontDesign, IModVar_mod_FrontProgram, IModVar_mod_ShelfadjColor, IModVar_mod_ShelfadjDescriptor, IModVar_mod_ShelfadjDesign, IModVar_mod_ShelfadjDrillDistance, IModVar_mod_ShelfadjDrillType, IModVar_mod_TypeElement, IModVar_mod_Width, IModVar_mod_CarcaseSpaceDimension {
  constructor(parent?: OD_Base, manufacturerMode?: boolean) {
    super('md_EquipmentArticleBuilder', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this._g = new GlobalVars();
    this._openGroups = new Map<string, OpenGroup>();
    this._partGroups = new Map<string, PartGroup>();
    this._selfNonNull = new OD_M_md_EquipmentArticleBuilder_NonNull(this);
  }
  _selfNonNull: OD_M_md_EquipmentArticleBuilder_NonNull;

  addGenerationContour(generationMethod: GenerationMethod, height: number, contour: Contour): void {
    this.generationContours.push({
      generationMethod: generationMethod,
      height: height,
      contour: contour,
      position: this._articlePos,
    });
  }

  override variants: string[] = ['mod_CarcaseColor', 'mod_CarcaseId', 'mod_CarcaseProgram', 'mod_FrontDesign', 'mod_FrontProgram', 'mod_ShelfadjColor', 'mod_ShelfadjDescriptor', 'mod_ShelfadjDesign', 'mod_ShelfadjDrillDistance', 'mod_ShelfadjDrillType', 'mod_TypeElement', 'mod_Width', 'mod_CarcaseSpaceDimension',];
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
  #mod_ShelfadjColor?: string;
  get mod_ShelfadjColor(): string | undefined { return this.#mod_ShelfadjColor }
  set mod_ShelfadjColor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelfadjColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelfadjColor === value) return;
    this.#mod_ShelfadjColor = value;
  }

  mod_ShelfadjColor_matrix?: IMatrix_mod_ShelfadjColor;
  #mod_ShelfadjDescriptor?: string;
  get mod_ShelfadjDescriptor(): string | undefined { return this.#mod_ShelfadjDescriptor }
  set mod_ShelfadjDescriptor(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelfadjDescriptor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelfadjDescriptor === value) return;
    this.#mod_ShelfadjDescriptor = value;
  }

  mod_ShelfadjDescriptor_matrix?: IMatrix_mod_ShelfadjDescriptor;
  #mod_ShelfadjDesign?: string;
  get mod_ShelfadjDesign(): string | undefined { return this.#mod_ShelfadjDesign }
  set mod_ShelfadjDesign(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelfadjDesign' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelfadjDesign === value) return;
    this.#mod_ShelfadjDesign = value;
  }

  mod_ShelfadjDesign_matrix?: IMatrix_mod_ShelfadjDesign;
  #mod_ShelfadjDrillDistance?: number;
  get mod_ShelfadjDrillDistance(): number | undefined { return this.#mod_ShelfadjDrillDistance }
  set mod_ShelfadjDrillDistance(value: number | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelfadjDrillDistance' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelfadjDrillDistance === value) return;
    this.#mod_ShelfadjDrillDistance = value;
  }

  mod_ShelfadjDrillDistance_matrix?: IMatrix_mod_ShelfadjDrillDistance;
  #mod_ShelfadjDrillType?: string;
  get mod_ShelfadjDrillType(): string | undefined { return this.#mod_ShelfadjDrillType }
  set mod_ShelfadjDrillType(value: string | undefined) {
    if (this._adcFinished) {
      logError("The property 'mod_ShelfadjDrillType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if (this.#mod_ShelfadjDrillType === value) return;
    this.#mod_ShelfadjDrillType = value;
  }

  mod_ShelfadjDrillType_matrix?: IMatrix_mod_ShelfadjDrillType;
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
  #mod_CarcaseSpaceDimension: string[] = [];
  get mod_CarcaseSpaceDimension(): string[] { return this.#mod_CarcaseSpaceDimension; }
  override getAttributes(): Map<string, any> {
    let res = new Map<string, any>();
    res.set('mod_CarcaseColor', this.mod_CarcaseColor);
    res.set('mod_CarcaseId', this.mod_CarcaseId);
    res.set('mod_CarcaseProgram', this.mod_CarcaseProgram);
    res.set('mod_FrontDesign', this.mod_FrontDesign);
    res.set('mod_FrontProgram', this.mod_FrontProgram);
    res.set('mod_ShelfadjColor', this.mod_ShelfadjColor);
    res.set('mod_ShelfadjDescriptor', this.mod_ShelfadjDescriptor);
    res.set('mod_ShelfadjDesign', this.mod_ShelfadjDesign);
    res.set('mod_ShelfadjDrillDistance', this.mod_ShelfadjDrillDistance);
    res.set('mod_ShelfadjDrillType', this.mod_ShelfadjDrillType);
    res.set('mod_TypeElement', this.mod_TypeElement);
    res.set('mod_Width', this.mod_Width);
    res.set('mod_CarcaseSpaceDimension', JSON.stringify(this.mod_CarcaseSpaceDimension));
    return res;
  }
  override getCheckAttributes(): Map<string, number | string | boolean | undefined> | undefined {
    const res = new Map<string, number | string | boolean | undefined>();
    res.set('mod_CarcaseColor:GrainGroupId', this.mod_CarcaseColor_matrix?.GrainGroupId);
    res.set('mod_CarcaseColor', this.mod_CarcaseColor);
    res.set('mod_CarcaseProgram:GrainGroupId', this.mod_CarcaseProgram_matrix?.GrainGroupId);
    res.set('mod_CarcaseProgram', this.mod_CarcaseProgram);
    res.set('mod_FrontDesign', this.mod_FrontDesign);
    res.set('mod_FrontProgram', this.mod_FrontProgram);
    res.set('mod_ShelfadjColor', this.mod_ShelfadjColor);
    res.set('mod_ShelfadjDesign', this.mod_ShelfadjDesign);
    res.set('_moduleId', this.modId);
    return res;
  }
  override loadJson(json: any, withSubModules: boolean = true, manufacturerMode: boolean) {
    internal_enterLoadJson(this.modId, this._id);

    if (json['articlePos']) {
      let val: number | string | undefined;
      val = json['articlePos']['x'];
      if (val !== undefined) {
        if (typeof val === 'string') { val = parseFloat(val); }
        if (Number.isNaN(val)) {
          logError('Article position X is invalid!');
        } else {
          this._articlePos.x = val;
        }
      }

      val = json['articlePos']['y'];
      if (val !== undefined) {
        if (typeof val === 'string') { val = parseFloat(val); }
        if (Number.isNaN(val)) {
          logError('Article position Y is invalid!');
        } else {
          this._articlePos.y = val;
        }
      }

      val = json['articlePos']['z'];
      if (val !== undefined) {
        if (typeof val === 'string') { val = parseFloat(val); }
        if (Number.isNaN(val)) {
          logError('Article position Z is invalid!');
        } else {
          this._articlePos.z = val;
        }
      }

      val = json['articlePos']['rotationY'];
      if (val !== undefined) {
        if (typeof val === 'string') {
          val = parseFloat(val);
        }
        if (Number.isNaN(val)) {
          logError('Article rotation Y is invalid!');
        } else {
          this._articlePos.rotationY = val;
        }
      }

    }
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
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseId');
      const val = _toString(json['attributes']['mod_CarcaseId'], 'mod_CarcaseId');
      internal_leaveValidateVariant();
      this.mod_CarcaseId = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseProgram');
      const val = _toString(json['attributes']['mod_CarcaseProgram'], 'mod_CarcaseProgram');
      internal_leaveValidateVariant();
      this.mod_CarcaseProgram = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontDesign');
      const val = _toString(json['attributes']['mod_FrontDesign'], 'mod_FrontDesign');
      internal_leaveValidateVariant();
      this.mod_FrontDesign = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_FrontProgram');
      const val = _toString(json['attributes']['mod_FrontProgram'], 'mod_FrontProgram');
      internal_leaveValidateVariant();
      this.mod_FrontProgram = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjColor');
      const val = _toString(json['attributes']['mod_ShelfadjColor'], 'mod_ShelfadjColor');
      internal_leaveValidateVariant();
      this.mod_ShelfadjColor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjDescriptor');
      const val = _toString(json['attributes']['mod_ShelfadjDescriptor'], 'mod_ShelfadjDescriptor');
      internal_leaveValidateVariant();
      this.mod_ShelfadjDescriptor = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjDesign');
      const val = _toString(json['attributes']['mod_ShelfadjDesign'], 'mod_ShelfadjDesign');
      internal_leaveValidateVariant();
      this.mod_ShelfadjDesign = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjDrillDistance');
      const val = _toFloat(json['attributes']['mod_ShelfadjDrillDistance'], 'mod_ShelfadjDrillDistance');
      internal_leaveValidateVariant();
      this.mod_ShelfadjDrillDistance = val;
    }
    {
      internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjDrillType');
      const val = _toString(json['attributes']['mod_ShelfadjDrillType'], 'mod_ShelfadjDrillType');
      internal_leaveValidateVariant();
      this.mod_ShelfadjDrillType = val;
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
  override checkPosRelevantRequiredAttributes(): void {
    if (this.#mod_CarcaseId !== undefined) {
      this.#mod_CarcaseId = undefined;
      logWarning('The attribute "mod_CarcaseId" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
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
    if (this.mod_CarcaseId === undefined) {
      this.mod_CarcaseId = "None";
    }
    if (this.mod_CarcaseProgram === undefined) {
      this.mod_CarcaseProgram = "ModernNature";
    }
    if (this.mod_FrontProgram === undefined) {
      this.mod_FrontProgram = "Classic";
    }
    if (this.mod_ShelfadjColor === undefined) {
      this.mod_ShelfadjColor = "Automatic";
    }
    if (this.mod_ShelfadjDescriptor === undefined) {
      this.mod_ShelfadjDescriptor = "1_1";
    }
    if (this.mod_TypeElement === undefined) {
      this.mod_TypeElement = "WallUnit";
    }
    if (this.mod_Width === undefined) {
      this.mod_Width = 600;
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
    if (this.mod_CarcaseColor === undefined) {
      this.mod_CarcaseColor = this.g.basic_CarcaseColor;
    }
    if (this.mod_FrontDesign === undefined) {
      this.mod_FrontDesign = this.g.basic_FrontDesign;
    }
    if (this.mod_ShelfadjDesign === undefined) {
      this.mod_ShelfadjDesign = this.g.basic_ShelfadjDesign;
    }
    if (this.mod_ShelfadjDrillDistance === undefined) {
      this.mod_ShelfadjDrillDistance = this.g.basic_ShelfadjDrillDistance;
    }
    if (this.mod_ShelfadjDrillType === undefined) {
      this.mod_ShelfadjDrillType = this.g.basic_ShelfadjDrillType;
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
  #manufacturerDataCompletionInternal = md_EquipmentArticleBuilder_manufacturerDataCompletion;
  override afterDataCompletion(): void {
    if (this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_md_EquipmentArticleBuilder_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  override prepareContext(contextRoots: OD_Base[]): void {
    super.prepareContext(contextRoots);
    this.internallyPrepareContext();
  }
  internallyPrepareContext(): void {
    this.#prepareContextInternal();
  }
  #prepareContextInternal = md_EquipmentArticleBuilder_prepareContext;
  seal(): IModuleNonNull_md_EquipmentArticleBuilder {
    this.afterDataCompletion();
    const adc = new OD_M_md_EquipmentArticleBuilder_NonNull(this);
    return adc;
  }

  addOD_M_me_ShelfadjMultiple01(index?: number): dc_me_ShelfadjMultiple01 {
    var m = new OD_M_me_ShelfadjMultiple01(this);
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
  addOD_M_me_ClothingOrganizer01(index?: number): dc_me_ClothingOrganizer01 {
    var m = new OD_M_me_ClothingOrganizer01(this);
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
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this.mod_CarcaseId);
    this.mod_CarcaseProgram_matrix = VariantValidation.mod_CarcaseProgram(this, this.mod_CarcaseProgram);
    this.mod_FrontDesign_matrix = VariantValidation.mod_FrontDesign(this, this.mod_FrontDesign);
    this.mod_FrontProgram_matrix = VariantValidation.mod_FrontProgram(this, this.mod_FrontProgram);
    this.mod_ShelfadjColor_matrix = VariantValidation.mod_ShelfadjColor(this, this.mod_ShelfadjColor);
    this.mod_ShelfadjDescriptor_matrix = VariantValidation.mod_ShelfadjDescriptor(this, this.mod_ShelfadjDescriptor);
    this.mod_ShelfadjDesign_matrix = VariantValidation.mod_ShelfadjDesign(this, this.mod_ShelfadjDesign);
    this.mod_ShelfadjDrillDistance_matrix = VariantValidation.mod_ShelfadjDrillDistance(this, this.mod_ShelfadjDrillDistance);
    this.mod_ShelfadjDrillType_matrix = VariantValidation.mod_ShelfadjDrillType(this, this.mod_ShelfadjDrillType);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this.mod_TypeElement);
    this.mod_Width_matrix = VariantValidation.mod_Width(this, this.mod_Width);
  }

  override calculateContainerModules(): void {
    let ccm = new OD_M_md_EquipmentArticleBuilder_NonNull(this);
    ccm.calculateContainerModules();
    this.m.forEach(subMod => subMod.calculateContainerModules());
  }

  addpart_Placeholder(x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): IP_part_Placeholder_PartVarsWritable {
    var c = new P_part_Placeholder(this._selfNonNull, x, y, z, dimx, dimy, dimz, undefined);
    this.p.push(c);
    return c;
  }

  override createBuildPlan(): void {
    var cbp = new OD_M_md_EquipmentArticleBuilder_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_md_EquipmentArticleBuilder_NonNull implements cbp_md_EquipmentArticleBuilder, adc_md_EquipmentArticleBuilder, ccm_md_EquipmentArticleBuilder, IPartParentsNonNull_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_Fliplift_mf_RackArea, IPartParentsNonNull_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_mf_Door_mf_RackArea, IPartParentsNonNull_md_EquipmentArticleBuilder_md_EquipmentPlaceholder_md_FrontArticleBuilder_md_FrontPlaceholder {
  constructor(parent: OD_M_md_EquipmentArticleBuilder) {
    this.#internalParent = parent;
  }
  #internalParent: OD_M_md_EquipmentArticleBuilder;

  addGenerationContour(generationMethod: GenerationMethod, height: number, contour: Contour): void {
    this.#internalParent.addGenerationContour(
      generationMethod,
      height,
      contour
    );
  }
  getRoomContours(): RoomContour[] { return this.#internalParent.roomContours ?? []; }
  getContextData(): IContextData | undefined { return this.#internalParent.getContextData(); }
  getContextModule(id: string): OD_Base | undefined {
    return this.#internalParent.getContextModule(id);
  }
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
  #createBuildPlanInternal = md_EquipmentArticleBuilder_createBuildPlan;
  afterDataCompletion(): void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = md_EquipmentArticleBuilder_afterDataCompletion;
  calculateContainerModules(): void {
    this.#calculateContainerModulesInternal();
  }
  #calculateContainerModulesInternal = md_EquipmentArticleBuilder_calculateContainerModules;
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
  get dockingInfo() { return this.#internalParent.dockingInfo; }
  addDockingInfo(id: Dock, start: Vector3, end: Vector3): IDockingInfo { return this.#internalParent.addDockingInfo(id, start, end); }
  get insertLevelInfo(): IInsertLevelInfo[] { return this.#internalParent.insertLevelInfo; }
  get insertLevelFixed(): boolean { return this.#internalParent.insertLevelFixed; }
  set insertLevelFixed(value: boolean) { this.#internalParent.insertLevelFixed = value; }
  addInsertLevelHeight(height: number, isDefault: boolean | undefined = undefined): IInsertLevelInfo { return this.#internalParent.addInsertLevelHeight(height, isDefault); }
  addpart_Placeholder(x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): IP_part_Placeholder_PartVarsWritable {
    return this.#internalParent.addpart_Placeholder(x, y, z, dimx, dimy, dimz);
  }
  get mod_CarcaseColor(): string {
    return this.#internalParent.mod_CarcaseColor!;
  }
  get mod_CarcaseColor_matrix(): IMatrix_mod_CarcaseColor {
    return this.#internalParent.mod_CarcaseColor_matrix!;
  }
  get mod_CarcaseId(): string {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_CarcaseProgram(): string {
    return this.#internalParent.mod_CarcaseProgram!;
  }
  get mod_CarcaseProgram_matrix(): IMatrix_mod_CarcaseProgram {
    return this.#internalParent.mod_CarcaseProgram_matrix!;
  }
  get mod_FrontDesign(): string {
    return this.#internalParent.mod_FrontDesign!;
  }
  get mod_FrontProgram(): string {
    return this.#internalParent.mod_FrontProgram!;
  }
  get mod_FrontProgram_matrix(): IMatrix_mod_FrontProgram {
    return this.#internalParent.mod_FrontProgram_matrix!;
  }
  get mod_ShelfadjColor(): string {
    return this.#internalParent.mod_ShelfadjColor!;
  }
  get mod_ShelfadjColor_matrix(): IMatrix_mod_ShelfadjColor {
    return this.#internalParent.mod_ShelfadjColor_matrix!;
  }
  get mod_ShelfadjDescriptor(): string {
    return this.#internalParent.mod_ShelfadjDescriptor!;
  }
  get mod_ShelfadjDesign(): string {
    return this.#internalParent.mod_ShelfadjDesign!;
  }
  get mod_ShelfadjDrillDistance(): number {
    return this.#internalParent.mod_ShelfadjDrillDistance!;
  }
  get mod_ShelfadjDrillType(): string {
    return this.#internalParent.mod_ShelfadjDrillType!;
  }
  get mod_ShelfadjDrillType_matrix(): IMatrix_mod_ShelfadjDrillType {
    return this.#internalParent.mod_ShelfadjDrillType_matrix!;
  }
  get mod_TypeElement(): string {
    return this.#internalParent.mod_TypeElement!;
  }
  get mod_Width(): number {
    return this.#internalParent.mod_Width!;
  }
  get mod_CarcaseSpaceDimension(): string[] {
    return this.#internalParent.mod_CarcaseSpaceDimension!;
  }
  addOD_M_me_ShelfadjMultiple01(index?: number): dc_me_ShelfadjMultiple01 {
    return this.#internalParent.addOD_M_me_ShelfadjMultiple01(index);
  }
  addOD_M_me_ClothingOrganizer01(index?: number): dc_me_ClothingOrganizer01 {
    return this.#internalParent.addOD_M_me_ClothingOrganizer01(index);
  }
}

