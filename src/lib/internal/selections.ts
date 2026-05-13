import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars, internal_enterModulePrepareContext, internal_leaveModulePrepareContext } from './logging'
import { IModBase } from './mod-base';
import { IModVar_mod_BackHeight, IModVar_mod_BacksplashColor, IModVar_mod_BacksplashHeight, IModVar_mod_BacksplashId, IModVar_mod_BacksplashThk, IModVar_mod_BacksplashWidth, IModVar_mod_BackwallFixedHeight, IModVar_mod_BackwallPos, IModVar_mod_BackwallPosList, IModVar_mod_BackwallThk, IModVar_mod_BaseboardColor, IModVar_mod_BaseboardDepth, IModVar_mod_BaseboardDepthLogic, IModVar_mod_BaseboardEdgeBackColor, IModVar_mod_BaseboardEdgeColor, IModVar_mod_BaseboardEdgeFrontColor, IModVar_mod_BaseboardId, IModVar_mod_BaseboardLength, IModVar_mod_BaseboardOverdimensionBack, IModVar_mod_BaseboardOverdimensionLeft, IModVar_mod_BaseboardOverdimensionRight, IModVar_mod_BaseboardProgram, IModVar_mod_BaseboardSplitLogic, IModVar_mod_BaseboardThk, IModVar_mod_BaseunitFridgeId, IModVar_mod_BaseunitFridgeInfo, IModVar_mod_BaseunitFridgeSupplier, IModVar_mod_BoardShelfColor, IModVar_mod_BoardShelfDepth, IModVar_mod_BoardShelfPositionHeight, IModVar_mod_BoardShelfPositionWidth, IModVar_mod_BoardShelfProgram, IModVar_mod_BoardShelfThickness, IModVar_mod_BoardShelfWidth, IModVar_mod_CarcaseBackwallColor, IModVar_mod_CarcaseBackwallConstruction, IModVar_mod_CarcaseBackwallConstructionList, IModVar_mod_CarcaseBackwallProgram, IModVar_mod_CarcaseColor, IModVar_mod_CarcaseConnectionLeftBtm, IModVar_mod_CarcaseConnectionLeftTop, IModVar_mod_CarcaseConnectionRightBtm, IModVar_mod_CarcaseConnectionRightTop, IModVar_mod_CarcaseDepth, IModVar_mod_CarcaseDirection, IModVar_mod_CarcaseDirectionInfo, IModVar_mod_CarcaseDistanceWall, IModVar_mod_CarcaseEdgeBackColor, IModVar_mod_CarcaseEdgeColor, IModVar_mod_CarcaseEdgeFrontColor, IModVar_mod_CarcaseFrontConstruction, IModVar_mod_CarcaseHeight, IModVar_mod_CarcaseId, IModVar_mod_CarcaseMovement, IModVar_mod_CarcaseOutsideColor, IModVar_mod_CarcaseOutsideProgram, IModVar_mod_CarcaseOverdimensionBackLogic, IModVar_mod_CarcasePartConnectionBackHor, IModVar_mod_CarcasePartConnectionBackVert, IModVar_mod_CarcasePartConnectionBtmVert, IModVar_mod_CarcasePartConnectionLeftHor, IModVar_mod_CarcasePartConnectionRightHor, IModVar_mod_CarcasePartConnectionTopVert, IModVar_mod_CarcasePartInfo, IModVar_mod_CarcaseProgram, IModVar_mod_CarcaseShelfbtmConstruction, IModVar_mod_CarcaseShelfbtmOversizeInsideWall, IModVar_mod_CarcaseShelfbtmOversizeLeft, IModVar_mod_CarcaseShelfbtmOversizeRight, IModVar_mod_CarcaseShelftopConstruction, IModVar_mod_CarcaseShelftopOversizeInsideWall, IModVar_mod_CarcaseShelftopOversizeLeft, IModVar_mod_CarcaseShelftopOversizeRight, IModVar_mod_CarcaseSidepanelleftOversizeBtm, IModVar_mod_CarcaseSidepanelleftOversizeInsideWall, IModVar_mod_CarcaseSidepanelleftOversizeTop, IModVar_mod_CarcaseSidepanelrightOversizeBtm, IModVar_mod_CarcaseSidepanelrightOversizeInsideWall, IModVar_mod_CarcaseSidepanelrightOversizeTop, IModVar_mod_CarcaseSpaceDimension, IModVar_mod_CarcaseVisBack, IModVar_mod_CarcaseVisBtm, IModVar_mod_CarcaseVisLeft, IModVar_mod_CarcaseVisLeftSelection, IModVar_mod_CarcaseVisRight, IModVar_mod_CarcaseVisRightSelection, IModVar_mod_CarcaseVisTop, IModVar_mod_CarcaseWidth, IModVar_mod_CeilingAreaVisLeft, IModVar_mod_CeilingAreaVisLeftSelection, IModVar_mod_CeilingAreaVisRight, IModVar_mod_CeilingAreaVisRightSelection, IModVar_mod_CeilingFillerColor, IModVar_mod_CeilingFillerConstruction, IModVar_mod_CeilingFillerEdgeBackColor, IModVar_mod_CeilingFillerEdgeFrontColor, IModVar_mod_CeilingFillerEdgeLeftColor, IModVar_mod_CeilingFillerEdgeRightColor, IModVar_mod_CeilingFillerFittingPanelDepth, IModVar_mod_CeilingFillerFittingPanelThk, IModVar_mod_CeilingFillerHeight, IModVar_mod_CeilingFillerId, IModVar_mod_CeilingFillerProgram, IModVar_mod_CeilingFillerRecess, IModVar_mod_CeilingFillerRecessLeft, IModVar_mod_CeilingFillerRecessRight, IModVar_mod_CeilingFillerThk, IModVar_mod_CeilingFillerTransitionType, IModVar_mod_CleatThk, IModVar_mod_CleatWidth, IModVar_mod_ClothingOrganizerBoardColor, IModVar_mod_ClothingOrganizerColor, IModVar_mod_ClothingOrganizerConnectionPosition, IModVar_mod_ClothingOrganizerDepthPosition, IModVar_mod_ClothingOrganizerDesign, IModVar_mod_ClothingOrganizerDistanceBlock, IModVar_mod_ClothingOrganizerHeightPosition, IModVar_mod_ClothingOrganizerType, IModVar_mod_CoatBoardColor, IModVar_mod_CoatBoardId, IModVar_mod_CoatBoardProgram, IModVar_mod_CoatBoardThickness, IModVar_mod_Color, IModVar_mod_CornerunitDimensionLogic, IModVar_mod_CornerunitFrontWidth, IModVar_mod_CornerunitInfo, IModVar_mod_CornerunitStraightConstruction, IModVar_mod_CornerunitStraightDimensionLogic, IModVar_mod_CornerunitStraightFillerConstruction, IModVar_mod_CountertopColor, IModVar_mod_CountertopConnectionLengthLeft, IModVar_mod_CountertopConnectionLengthRight, IModVar_mod_CountertopConnectionOversize, IModVar_mod_CountertopConnectionRadius, IModVar_mod_CountertopConnectionSequence, IModVar_mod_CountertopDepth, IModVar_mod_CountertopEdgeBackType, IModVar_mod_CountertopEdgeFrontType, IModVar_mod_CountertopEdgeLeftType, IModVar_mod_CountertopEdgeRightType, IModVar_mod_CountertopId, IModVar_mod_CountertopInfo, IModVar_mod_CountertopLeftEndType, IModVar_mod_CountertopOverhangFront, IModVar_mod_CountertopOverhangLeft, IModVar_mod_CountertopOverhangRight, IModVar_mod_CountertopProgram, IModVar_mod_CountertopRightEndType, IModVar_mod_CountertopThk, IModVar_mod_CountertopWidth, IModVar_mod_CreateBacksplash, IModVar_mod_CreateCeilingFiller, IModVar_mod_CreateCountertop, IModVar_mod_CreateFingergrip, IModVar_mod_CreatePaneltop, IModVar_mod_CreateToekick, IModVar_mod_Depth, IModVar_mod_DepthLeft, IModVar_mod_DepthRight, IModVar_mod_Direction, IModVar_mod_DishwasherId, IModVar_mod_DishwasherInfo, IModVar_mod_DishwasherSupplier, IModVar_mod_DoorDirection, IModVar_mod_DoorDirectionSelection, IModVar_mod_DoorType, IModVar_mod_DoorTypeSelection, IModVar_mod_DrawerBackwallThk, IModVar_mod_DrawerBoxColor, IModVar_mod_DrawerBoxDepthType, IModVar_mod_DrawerBoxDesign, IModVar_mod_DrawerBoxHeightType, IModVar_mod_DrawerBoxLogic, IModVar_mod_DrawerBoxOffsetDepth, IModVar_mod_DrawerBoxProgram, IModVar_mod_DrawerBoxWeightType, IModVar_mod_DrawerDistanceDepth, IModVar_mod_DrawerDistanceHeight, IModVar_mod_DrawerDistanceWidth, IModVar_mod_DrawerOpeningDistance, IModVar_mod_DrawerShelfbtmThk, IModVar_mod_DrawerType, IModVar_mod_DropZoneVisible, IModVar_mod_EdgeBackType, IModVar_mod_EdgeFrontType, IModVar_mod_EdgeJointType, IModVar_mod_EdgeLeftType, IModVar_mod_EdgeRightType, IModVar_mod_FillerDepth, IModVar_mod_FillerDepthLeft, IModVar_mod_FillerDepthRight, IModVar_mod_FillerHardware, IModVar_mod_FillerHardwareInfo, IModVar_mod_FillerType, IModVar_mod_FingergripBtmType, IModVar_mod_FingergripColor, IModVar_mod_FingergripLength, IModVar_mod_FingergripPos1, IModVar_mod_FingergripPos2, IModVar_mod_FingergripPos3, IModVar_mod_FingergripPos4, IModVar_mod_FingergripPos5, IModVar_mod_FingergripPostype, IModVar_mod_FingergripQtyMiddle, IModVar_mod_FingergripTop, IModVar_mod_FingergripTopType, IModVar_mod_FingergripType, IModVar_mod_FirstFront, IModVar_mod_FittingConnectionBtmVert, IModVar_mod_FittingConnectionLeftBtm, IModVar_mod_FittingConnectionLeftHor, IModVar_mod_FittingConnectionLeftTop, IModVar_mod_FittingConnectionRightBtm, IModVar_mod_FittingConnectionRightHor, IModVar_mod_FittingConnectionRightTop, IModVar_mod_FittingConnectionTopVert, IModVar_mod_FlipliftFrontHeightList, IModVar_mod_FlipliftFrontNumber, IModVar_mod_FlipliftHardwareColor, IModVar_mod_FlipliftHardwareType, IModVar_mod_FlipliftLogic, IModVar_mod_FlipliftType, IModVar_mod_FrameFillingColor, IModVar_mod_FrameFillingType, IModVar_mod_FridgeCarcasePositionType, IModVar_mod_FridgeCarcaseSpaceDescriptor, IModVar_mod_FridgeFrontHeightDescriptor, IModVar_mod_FridgeGraphicId, IModVar_mod_FridgeId, IModVar_mod_FridgeInfo, IModVar_mod_FridgePositionId, IModVar_mod_FridgeSupplier, IModVar_mod_FrontAreaInfoList, IModVar_mod_FrontColor, IModVar_mod_FrontDescriptor, IModVar_mod_FrontDesign, IModVar_mod_FrontEdgeColor, IModVar_mod_FrontEdgeThk, IModVar_mod_FrontGapCarcase, IModVar_mod_FrontGapHor, IModVar_mod_FrontGapHorTop, IModVar_mod_FrontGapVert, IModVar_mod_FrontHeight, IModVar_mod_FrontHeightSelection, IModVar_mod_FrontId, IModVar_mod_FrontOverlayInfo, IModVar_mod_FrontOversizeBtm, IModVar_mod_FrontOversizeLeft, IModVar_mod_FrontOversizeRight, IModVar_mod_FrontOversizeTop, IModVar_mod_FrontPosStart, IModVar_mod_FrontProgram, IModVar_mod_FrontQtyElements, IModVar_mod_FrontSegmentColor, IModVar_mod_FrontSegmentDescriptor, IModVar_mod_FrontSegmentType, IModVar_mod_FrontSplit, IModVar_mod_FrontSplitDescriptor, IModVar_mod_FrontSplitHeight1, IModVar_mod_FrontSplitHeight2, IModVar_mod_FrontSplitHeight3, IModVar_mod_FrontSplitType1, IModVar_mod_FrontSplitType2, IModVar_mod_FrontThk, IModVar_mod_FrontType, IModVar_mod_FrontWidth, IModVar_mod_FrontpanelWeightCalculations, IModVar_mod_FrontpanelWeightLogic, IModVar_mod_GlobalFrontOversizeBtm, IModVar_mod_GlobalFrontOversizeLeft, IModVar_mod_GlobalFrontOversizeRight, IModVar_mod_GlobalFrontOversizeTop, IModVar_mod_GraphicId, IModVar_mod_HandleActivated, IModVar_mod_HandleColor, IModVar_mod_HandleDesign, IModVar_mod_HandleDrill, IModVar_mod_HandleInsertion, IModVar_mod_HandleLength, IModVar_mod_HandleLine, IModVar_mod_HandleOffsetX, IModVar_mod_HandleOffsetY, IModVar_mod_HandlePosLogic, IModVar_mod_HandlePosMatrix, IModVar_mod_HandlePosMatrixMultiple, IModVar_mod_HandlePosType, IModVar_mod_HandleWeightCalculations, IModVar_mod_HandlestripPos, IModVar_mod_HangerColor, IModVar_mod_HangerInfo, IModVar_mod_HangerOffsetPosY, IModVar_mod_HangerPosX, IModVar_mod_HangerPosY, IModVar_mod_HangerType, IModVar_mod_HardwareColor, IModVar_mod_HardwareId, IModVar_mod_HardwareTypeList, IModVar_mod_Height, IModVar_mod_HeightLeft, IModVar_mod_HeightPosInsertion, IModVar_mod_HeightRight, IModVar_mod_HingeColor, IModVar_mod_HingeInfo, IModVar_mod_HingeLogic, IModVar_mod_HingePos1, IModVar_mod_HingePos2, IModVar_mod_HingePos3, IModVar_mod_HingePos4, IModVar_mod_HingePos5, IModVar_mod_HingePos6, IModVar_mod_HingeType, IModVar_mod_HobConstructionId, IModVar_mod_HobGraphicId, IModVar_mod_HobHeightBlockedSpace, IModVar_mod_HobId, IModVar_mod_HobInfo, IModVar_mod_HobMoveDepth, IModVar_mod_HobMoveWidth, IModVar_mod_HobSupplier, IModVar_mod_HoodId, IModVar_mod_HoodSupplier, IModVar_mod_Information, IModVar_mod_InformationList, IModVar_mod_InteriorEquipmentHinge, IModVar_mod_IslandBackwallOverdimension, IModVar_mod_IslandBackwallOverhangFront, IModVar_mod_IslandBackwallWidth, IModVar_mod_LastFront, IModVar_mod_LastFrontHeight, IModVar_mod_LastFrontName, IModVar_mod_LaundryMachineId, IModVar_mod_LaundryMachineSupplier, IModVar_mod_LegInsertion, IModVar_mod_LengthList, IModVar_mod_LightPart, IModVar_mod_LightPosX, IModVar_mod_LightPosX1, IModVar_mod_LightPosX2, IModVar_mod_LightPosX3, IModVar_mod_LightPosX4, IModVar_mod_LightPosX5, IModVar_mod_LightPosY, IModVar_mod_LightSystem, IModVar_mod_MachiningDepth, IModVar_mod_MachiningDiameter, IModVar_mod_MachiningPosX, IModVar_mod_MachiningPosY, IModVar_mod_MachiningReferenceX, IModVar_mod_MachiningReferenceY, IModVar_mod_MachiningType, IModVar_mod_MirrorBoardColor, IModVar_mod_MirrorBoardId, IModVar_mod_MirrorBoardProgram, IModVar_mod_MirrorBoardThickness, IModVar_mod_MirrorColor, IModVar_mod_MirrorHeight, IModVar_mod_MirrorPositionHeight, IModVar_mod_MirrorPositionWidth, IModVar_mod_MirrorThickness, IModVar_mod_MirrorWidth, IModVar_mod_MixerId, IModVar_mod_MixerSupplier, IModVar_mod_Model, IModVar_mod_Model3DGroupName, IModVar_mod_ModuleName, IModVar_mod_MountingPlateType, IModVar_mod_OpeningAngle, IModVar_mod_OpeningType, IModVar_mod_Originpos, IModVar_mod_OvenGap1, IModVar_mod_OvenGap2, IModVar_mod_OvenGap3, IModVar_mod_OvenGap4, IModVar_mod_OvenId, IModVar_mod_OvenId1, IModVar_mod_OvenId2, IModVar_mod_OvenId3, IModVar_mod_OvenShelffixedOverhangTop, IModVar_mod_OvenSupplier1, IModVar_mod_OvenSupplier2, IModVar_mod_OvenSupplier3, IModVar_mod_PanelId, IModVar_mod_PanelblindThk, IModVar_mod_PaneltopColor, IModVar_mod_PaneltopConstruction, IModVar_mod_PaneltopEdgeBackColor, IModVar_mod_PaneltopEdgeFrontColor, IModVar_mod_PaneltopEdgeLeftColor, IModVar_mod_PaneltopEdgeRightColor, IModVar_mod_PaneltopEdgeVisBack, IModVar_mod_PaneltopEdgeVisFront, IModVar_mod_PaneltopEdgeVisLeft, IModVar_mod_PaneltopEdgeVisRight, IModVar_mod_PaneltopId, IModVar_mod_PaneltopOverhangFront, IModVar_mod_PaneltopOversizeBack, IModVar_mod_PaneltopProgram, IModVar_mod_PaneltopThk, IModVar_mod_PantryPulloutColor, IModVar_mod_PantryPulloutDesign, IModVar_mod_PantryPulloutType, IModVar_mod_ParentName, IModVar_mod_PartInfo, IModVar_mod_PartName, IModVar_mod_PartgroupDrawerWeight, IModVar_mod_PlinthAreaDesign, IModVar_mod_PlinthAreaElementColor, IModVar_mod_PlinthAreaExtraItem, IModVar_mod_PlinthAreaHeight, IModVar_mod_PlinthAreaPosBackMatrix, IModVar_mod_PlinthAreaPosFrontMatrix, IModVar_mod_PlinthAreaPosLeftMatrix, IModVar_mod_PlinthAreaPosLogic, IModVar_mod_PlinthAreaPosRightMatrix, IModVar_mod_PlinthAreaPositionInfo, IModVar_mod_PlinthAreaVisLeft, IModVar_mod_PlinthAreaVisLeftSelection, IModVar_mod_PlinthAreaVisRight, IModVar_mod_PlinthAreaVisRightSelection, IModVar_mod_ProcessingId, IModVar_mod_ProcessingLibrary, IModVar_mod_Program, IModVar_mod_PulloutConnectionPosition, IModVar_mod_PulloutDesign, IModVar_mod_PulloutElementColor, IModVar_mod_PulloutType, IModVar_mod_PushtoopenColor, IModVar_mod_PushtoopenInfo, IModVar_mod_PushtoopenLine, IModVar_mod_PushtoopenOffset, IModVar_mod_PushtoopenPosition, IModVar_mod_PushtoopenType, IModVar_mod_RackAreaManualOffsetCarcase, IModVar_mod_RackAreaOversizeCarcaseType, IModVar_mod_RackAreaShelftopConstruction, IModVar_mod_RackAreaType, IModVar_mod_RailhortopbackThk, IModVar_mod_RailhortopfrontThk, IModVar_mod_RailverttopbackThk, IModVar_mod_RailverttopfrontThk, IModVar_mod_Rotation, IModVar_mod_ShelfadjBackwallDrillDescriptor, IModVar_mod_ShelfadjBackwallProcessingId, IModVar_mod_ShelfadjColor, IModVar_mod_ShelfadjDescriptor, IModVar_mod_ShelfadjDesign, IModVar_mod_ShelfadjDrillDistance, IModVar_mod_ShelfadjDrillType, IModVar_mod_ShelfadjDrillinglineOffsetBtm, IModVar_mod_ShelfadjDrillinglineOffsetTop, IModVar_mod_ShelfadjGroupPositionY, IModVar_mod_ShelfadjOffsetBack, IModVar_mod_ShelfadjOffsetFront, IModVar_mod_ShelfadjPartParentName, IModVar_mod_ShelfadjPartParentType, IModVar_mod_ShelfadjSidepanelDrillDescriptor, IModVar_mod_ShelfadjSidepanelProcessingBackId, IModVar_mod_ShelfadjSidepanelProcessingFrontId, IModVar_mod_ShelfadjSidepanelProcessingMiddleId, IModVar_mod_ShelfadjThk, IModVar_mod_ShelfadjVertDividerProcessingId, IModVar_mod_ShelfadjVertdividerDrillDescriptor, IModVar_mod_ShelfadjWoodColor, IModVar_mod_ShelfbtmThk, IModVar_mod_ShelffixedBtm, IModVar_mod_ShelffixedInfoList, IModVar_mod_ShelffixedOffsetFront, IModVar_mod_ShelffixedOversizeBack, IModVar_mod_ShelffixedOversizeBackList, IModVar_mod_ShelffixedOversizeFront, IModVar_mod_ShelffixedOversizeFrontList, IModVar_mod_ShelffixedPartParentName, IModVar_mod_ShelffixedPartParentType, IModVar_mod_ShelffixedPos, IModVar_mod_ShelffixedPosList, IModVar_mod_ShelffixedThk, IModVar_mod_ShelffixedTop, IModVar_mod_ShelffixedType, IModVar_mod_ShelffixedTypeList, IModVar_mod_ShelftopConstruction, IModVar_mod_ShelftopThk, IModVar_mod_ShelvesBackwallFittingConnection, IModVar_mod_ShelvesBrackets, IModVar_mod_ShelvesBracketsColor, IModVar_mod_ShelvesColor, IModVar_mod_ShelvesThk, IModVar_mod_SidepanelType, IModVar_mod_SidepanelleftThk, IModVar_mod_SidepanelleftType, IModVar_mod_SidepanelmiddleShortWidth, IModVar_mod_SidepanelmiddleThk, IModVar_mod_SidepanelrightThk, IModVar_mod_SidepanelrightType, IModVar_mod_SinkConstructionId, IModVar_mod_SinkGraphicId, IModVar_mod_SinkId, IModVar_mod_SinkMoveDepth, IModVar_mod_SinkMoveWidth, IModVar_mod_SinkSupplier, IModVar_mod_SlopeAngle, IModVar_mod_SlopedCeilingConstruction, IModVar_mod_SlopedCeilingDimensionLogic, IModVar_mod_Supplier, IModVar_mod_SupplierNumber, IModVar_mod_Thk, IModVar_mod_ThkLeft, IModVar_mod_ThkRight, IModVar_mod_ToekickColor, IModVar_mod_ToekickConnectionOverhang, IModVar_mod_ToekickConnectionSequence, IModVar_mod_ToekickHeight, IModVar_mod_ToekickId, IModVar_mod_ToekickLength, IModVar_mod_ToekickProgram, IModVar_mod_ToekickReductionTop, IModVar_mod_ToekickSidepanelOverdimensionBtm, IModVar_mod_ToekickSidepanelTransitionType, IModVar_mod_ToekickThk, IModVar_mod_TopDepth, IModVar_mod_TotalDepth, IModVar_mod_TotalDimLeft, IModVar_mod_TotalDimRight, IModVar_mod_TotalWidth, IModVar_mod_TypeElement, IModVar_mod_UprightColor, IModVar_mod_UprightConstruction, IModVar_mod_UprightDepth, IModVar_mod_UprightFloorProfileColor, IModVar_mod_UprightHeight, IModVar_mod_UprightOverdimensionBtm, IModVar_mod_UprightOverdimensionTop, IModVar_mod_UprightOverhang, IModVar_mod_UprightProgram, IModVar_mod_UprightSide, IModVar_mod_UprightThk, IModVar_mod_VertDividerInfoList, IModVar_mod_VertDividerPosition, IModVar_mod_VertDividerType, IModVar_mod_VertDividerTypeList, IModVar_mod_Weight, IModVar_mod_Width, IModVar_mod_WidthBlind, IModVar_mod_WidthLeft, IModVar_mod_WidthRight } from './var-interfaces'
export interface IMatrix_mod_BackHeight {
}
export interface IMatrix_mod_BacksplashColor {
}
export interface IMatrix_mod_BacksplashHeight {
}
export interface IMatrix_mod_BacksplashId {
}
export interface IMatrix_mod_BacksplashThk {
}
export interface IMatrix_mod_BacksplashWidth {
}
export interface IMatrix_mod_BackwallFixedHeight {
}
export interface IMatrix_mod_BackwallPos {
}
export interface IMatrix_mod_BackwallThk {
}
export interface IMatrix_mod_BaseboardColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_BaseboardDepth {
}
export interface IMatrix_mod_BaseboardDepthLogic {
}
export interface IMatrix_mod_BaseboardEdgeBackColor {
}
export interface IMatrix_mod_BaseboardEdgeColor {
}
export interface IMatrix_mod_BaseboardEdgeFrontColor {
}
export interface IMatrix_mod_BaseboardId {
}
export interface IMatrix_mod_BaseboardLength {
}
export interface IMatrix_mod_BaseboardOverdimensionBack {
}
export interface IMatrix_mod_BaseboardOverdimensionLeft {
}
export interface IMatrix_mod_BaseboardOverdimensionRight {
}
export interface IMatrix_mod_BaseboardProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_BaseboardSplitLogic {
}
export interface IMatrix_mod_BaseboardThk {
}
export interface IMatrix_mod_BaseunitFridgeId {
}
export interface IMatrix_mod_BaseunitFridgeSupplier {
}
export interface IMatrix_mod_BoardShelfColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_BoardShelfDepth {
}
export interface IMatrix_mod_BoardShelfPositionHeight {
}
export interface IMatrix_mod_BoardShelfPositionWidth {
}
export interface IMatrix_mod_BoardShelfProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_BoardShelfThickness {
}
export interface IMatrix_mod_BoardShelfWidth {
}
export interface IMatrix_mod_CarcaseBackwallColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_CarcaseBackwallConstruction {
}
export interface IMatrix_mod_CarcaseBackwallProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_CarcaseColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_CarcaseConnectionLeftBtm {
}
export interface IMatrix_mod_CarcaseConnectionLeftTop {
}
export interface IMatrix_mod_CarcaseConnectionRightBtm {
}
export interface IMatrix_mod_CarcaseConnectionRightTop {
}
export interface IMatrix_mod_CarcaseDepth {
}
export interface IMatrix_mod_CarcaseDirection {
}
export interface IMatrix_mod_CarcaseDirectionInfo {
}
export interface IMatrix_mod_CarcaseDistanceWall {
}
export interface IMatrix_mod_CarcaseEdgeBackColor {
}
export interface IMatrix_mod_CarcaseEdgeColor {
}
export interface IMatrix_mod_CarcaseEdgeFrontColor {
}
export interface IMatrix_mod_CarcaseFrontConstruction {
  Left?: string;
  Top?: string;
  Right?: string;
  Bottom?: string;
}
export interface IMatrix_mod_CarcaseHeight {
}
export interface IMatrix_mod_CarcaseId {
}
export interface IMatrix_mod_CarcaseMovement {
}
export interface IMatrix_mod_CarcaseOutsideColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_CarcaseOutsideProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_CarcaseOverdimensionBackLogic {
}
export interface IMatrix_mod_CarcasePartConnectionBackHor {
}
export interface IMatrix_mod_CarcasePartConnectionBackVert {
}
export interface IMatrix_mod_CarcasePartConnectionBtmVert {
}
export interface IMatrix_mod_CarcasePartConnectionLeftHor {
}
export interface IMatrix_mod_CarcasePartConnectionRightHor {
}
export interface IMatrix_mod_CarcasePartConnectionTopVert {
}
export interface IMatrix_mod_CarcaseProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_CarcaseShelfbtmConstruction {
}
export interface IMatrix_mod_CarcaseShelfbtmOversizeInsideWall {
}
export interface IMatrix_mod_CarcaseShelfbtmOversizeLeft {
}
export interface IMatrix_mod_CarcaseShelfbtmOversizeRight {
}
export interface IMatrix_mod_CarcaseShelftopConstruction {
}
export interface IMatrix_mod_CarcaseShelftopOversizeInsideWall {
}
export interface IMatrix_mod_CarcaseShelftopOversizeLeft {
}
export interface IMatrix_mod_CarcaseShelftopOversizeRight {
}
export interface IMatrix_mod_CarcaseSidepanelleftOversizeBtm {
}
export interface IMatrix_mod_CarcaseSidepanelleftOversizeInsideWall {
}
export interface IMatrix_mod_CarcaseSidepanelleftOversizeTop {
}
export interface IMatrix_mod_CarcaseSidepanelrightOversizeBtm {
}
export interface IMatrix_mod_CarcaseSidepanelrightOversizeInsideWall {
}
export interface IMatrix_mod_CarcaseSidepanelrightOversizeTop {
}
export interface IMatrix_mod_CarcaseVisBack {
}
export interface IMatrix_mod_CarcaseVisBtm {
}
export interface IMatrix_mod_CarcaseVisLeft {
}
export interface IMatrix_mod_CarcaseVisLeftSelection {
}
export interface IMatrix_mod_CarcaseVisRight {
}
export interface IMatrix_mod_CarcaseVisRightSelection {
}
export interface IMatrix_mod_CarcaseVisTop {
}
export interface IMatrix_mod_CarcaseWidth {
}
export interface IMatrix_mod_CeilingAreaVisLeft {
}
export interface IMatrix_mod_CeilingAreaVisLeftSelection {
}
export interface IMatrix_mod_CeilingAreaVisRight {
}
export interface IMatrix_mod_CeilingAreaVisRightSelection {
}
export interface IMatrix_mod_CeilingFillerColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_CeilingFillerConstruction {
}
export interface IMatrix_mod_CeilingFillerEdgeBackColor {
}
export interface IMatrix_mod_CeilingFillerEdgeFrontColor {
}
export interface IMatrix_mod_CeilingFillerEdgeLeftColor {
}
export interface IMatrix_mod_CeilingFillerEdgeRightColor {
}
export interface IMatrix_mod_CeilingFillerFittingPanelDepth {
}
export interface IMatrix_mod_CeilingFillerFittingPanelThk {
}
export interface IMatrix_mod_CeilingFillerHeight {
}
export interface IMatrix_mod_CeilingFillerId {
}
export interface IMatrix_mod_CeilingFillerProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_CeilingFillerRecess {
}
export interface IMatrix_mod_CeilingFillerRecessLeft {
}
export interface IMatrix_mod_CeilingFillerRecessRight {
}
export interface IMatrix_mod_CeilingFillerThk {
}
export interface IMatrix_mod_CeilingFillerTransitionType {
}
export interface IMatrix_mod_CleatThk {
}
export interface IMatrix_mod_CleatWidth {
}
export interface IMatrix_mod_ClothingOrganizerBoardColor {
}
export interface IMatrix_mod_ClothingOrganizerColor {
}
export interface IMatrix_mod_ClothingOrganizerConnectionPosition {
}
export interface IMatrix_mod_ClothingOrganizerDepthPosition {
}
export interface IMatrix_mod_ClothingOrganizerDesign {
  Board: boolean;
}
export interface IMatrix_mod_ClothingOrganizerDistanceBlock {
}
export interface IMatrix_mod_ClothingOrganizerHeightPosition {
}
export interface IMatrix_mod_ClothingOrganizerType {
}
export interface IMatrix_mod_CoatBoardColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_CoatBoardId {
}
export interface IMatrix_mod_CoatBoardProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_CoatBoardThickness {
}
export interface IMatrix_mod_Color {
}
export interface IMatrix_mod_CornerunitDimensionLogic {
}
export interface IMatrix_mod_CornerunitFrontWidth {
}
export interface IMatrix_mod_CornerunitStraightConstruction {
  ContructionType?: string;
  IncludePanelblind: boolean;
  IncludeMiddleSideShort: boolean;
}
export interface IMatrix_mod_CornerunitStraightDimensionLogic {
}
export interface IMatrix_mod_CornerunitStraightFillerConstruction {
  PartInCornerCabinet: string;
}
export interface IMatrix_mod_CountertopColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_CountertopConnectionLengthLeft {
}
export interface IMatrix_mod_CountertopConnectionLengthRight {
}
export interface IMatrix_mod_CountertopConnectionOversize {
}
export interface IMatrix_mod_CountertopConnectionRadius {
}
export interface IMatrix_mod_CountertopConnectionSequence {
}
export interface IMatrix_mod_CountertopDepth {
}
export interface IMatrix_mod_CountertopEdgeBackType {
}
export interface IMatrix_mod_CountertopEdgeFrontType {
}
export interface IMatrix_mod_CountertopEdgeLeftType {
}
export interface IMatrix_mod_CountertopEdgeRightType {
}
export interface IMatrix_mod_CountertopId {
}
export interface IMatrix_mod_CountertopLeftEndType {
}
export interface IMatrix_mod_CountertopOverhangFront {
}
export interface IMatrix_mod_CountertopOverhangLeft {
}
export interface IMatrix_mod_CountertopOverhangRight {
}
export interface IMatrix_mod_CountertopProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_CountertopRightEndType {
}
export interface IMatrix_mod_CountertopThk {
}
export interface IMatrix_mod_CountertopWidth {
}
export interface IMatrix_mod_CreateBacksplash {
}
export interface IMatrix_mod_CreateCeilingFiller {
}
export interface IMatrix_mod_CreateCountertop {
}
export interface IMatrix_mod_CreateFingergrip {
}
export interface IMatrix_mod_CreatePaneltop {
}
export interface IMatrix_mod_CreateToekick {
}
export interface IMatrix_mod_Depth {
}
export interface IMatrix_mod_DepthLeft {
}
export interface IMatrix_mod_DepthRight {
}
export interface IMatrix_mod_Direction {
}
export interface IMatrix_mod_DishwasherId {
}
export interface IMatrix_mod_DishwasherSupplier {
}
export interface IMatrix_mod_DoorDirection {
}
export interface IMatrix_mod_DoorDirectionSelection {
}
export interface IMatrix_mod_DoorType {
}
export interface IMatrix_mod_DoorTypeSelection {
}
export interface IMatrix_mod_DrawerBackwallThk {
}
export interface IMatrix_mod_DrawerBoxColor {
}
export interface IMatrix_mod_DrawerBoxDepthType {
}
export interface IMatrix_mod_DrawerBoxDesign {
  DrawerBoxType: string;
}
export interface IMatrix_mod_DrawerBoxHeightType {
}
export interface IMatrix_mod_DrawerBoxLogic {
}
export interface IMatrix_mod_DrawerBoxOffsetDepth {
}
export interface IMatrix_mod_DrawerBoxProgram {
}
export interface IMatrix_mod_DrawerBoxWeightType {
}
export interface IMatrix_mod_DrawerDistanceDepth {
}
export interface IMatrix_mod_DrawerDistanceHeight {
}
export interface IMatrix_mod_DrawerDistanceWidth {
}
export interface IMatrix_mod_DrawerOpeningDistance {
}
export interface IMatrix_mod_DrawerShelfbtmThk {
}
export interface IMatrix_mod_DrawerType {
}
export interface IMatrix_mod_EdgeBackType {
}
export interface IMatrix_mod_EdgeFrontType {
}
export interface IMatrix_mod_EdgeJointType {
}
export interface IMatrix_mod_EdgeLeftType {
}
export interface IMatrix_mod_EdgeRightType {
}
export interface IMatrix_mod_FillerDepth {
}
export interface IMatrix_mod_FillerDepthLeft {
}
export interface IMatrix_mod_FillerDepthRight {
}
export interface IMatrix_mod_FillerHardware {
}
export interface IMatrix_mod_FillerType {
}
export interface IMatrix_mod_FingergripBtmType {
}
export interface IMatrix_mod_FingergripColor {
}
export interface IMatrix_mod_FingergripLength {
}
export interface IMatrix_mod_FingergripPos1 {
}
export interface IMatrix_mod_FingergripPos2 {
}
export interface IMatrix_mod_FingergripPos3 {
}
export interface IMatrix_mod_FingergripPos4 {
}
export interface IMatrix_mod_FingergripPos5 {
}
export interface IMatrix_mod_FingergripPostype {
}
export interface IMatrix_mod_FingergripQtyMiddle {
}
export interface IMatrix_mod_FingergripTop {
}
export interface IMatrix_mod_FingergripTopType {
}
export interface IMatrix_mod_FingergripType {
  LShapeHeight?: number;
  LShapeDepth?: number;
  LShapeGapAbove?: number;
  LShapeSVG?: string;
  CShapeHeight?: number;
  CShapeDepth?: number;
  CShapeOverlapBelow?: number;
  CShapeOverlapAbove?: number;
  CShapeSVG?: string;
  MprProfileStyle?: number;
  CutSide?: boolean;
}
export interface IMatrix_mod_FirstFront {
}
export interface IMatrix_mod_FittingConnectionBtmVert {
}
export interface IMatrix_mod_FittingConnectionLeftBtm {
}
export interface IMatrix_mod_FittingConnectionLeftHor {
}
export interface IMatrix_mod_FittingConnectionLeftTop {
}
export interface IMatrix_mod_FittingConnectionRightBtm {
}
export interface IMatrix_mod_FittingConnectionRightHor {
}
export interface IMatrix_mod_FittingConnectionRightTop {
}
export interface IMatrix_mod_FittingConnectionTopVert {
}
export interface IMatrix_mod_FlipliftFrontNumber {
}
export interface IMatrix_mod_FlipliftHardwareColor {
}
export interface IMatrix_mod_FlipliftHardwareType {
}
export interface IMatrix_mod_FlipliftLogic {
}
export interface IMatrix_mod_FlipliftType {
  FrontDividingNecessary?: boolean;
  PartQty: number;
  DirectionType?: string;
  NeedsHinges: boolean;
}
export interface IMatrix_mod_FrameFillingColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_FrameFillingType {
}
export interface IMatrix_mod_FridgeCarcasePositionType {
}
export interface IMatrix_mod_FridgeCarcaseSpaceDescriptor {
}
export interface IMatrix_mod_FridgeFrontHeightDescriptor {
}
export interface IMatrix_mod_FridgeGraphicId {
}
export interface IMatrix_mod_FridgeId {
}
export interface IMatrix_mod_FridgeInfo {
}
export interface IMatrix_mod_FridgePositionId {
}
export interface IMatrix_mod_FridgeSupplier {
}
export interface IMatrix_mod_FrontColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_FrontDescriptor {
}
export interface IMatrix_mod_FrontDesign {
}
export interface IMatrix_mod_FrontEdgeColor {
}
export interface IMatrix_mod_FrontEdgeThk {
}
export interface IMatrix_mod_FrontGapCarcase {
}
export interface IMatrix_mod_FrontGapHor {
}
export interface IMatrix_mod_FrontGapHorTop {
}
export interface IMatrix_mod_FrontGapVert {
}
export interface IMatrix_mod_FrontHeight {
}
export interface IMatrix_mod_FrontHeightSelection {
}
export interface IMatrix_mod_FrontId {
}
export interface IMatrix_mod_FrontOverlayInfo {
}
export interface IMatrix_mod_FrontOversizeBtm {
}
export interface IMatrix_mod_FrontOversizeLeft {
}
export interface IMatrix_mod_FrontOversizeRight {
}
export interface IMatrix_mod_FrontOversizeTop {
}
export interface IMatrix_mod_FrontPosStart {
}
export interface IMatrix_mod_FrontProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_FrontQtyElements {
}
export interface IMatrix_mod_FrontSegmentColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_FrontSegmentDescriptor {
}
export interface IMatrix_mod_FrontSegmentType {
}
export interface IMatrix_mod_FrontSplit {
}
export interface IMatrix_mod_FrontSplitDescriptor {
}
export interface IMatrix_mod_FrontSplitHeight1 {
}
export interface IMatrix_mod_FrontSplitHeight2 {
}
export interface IMatrix_mod_FrontSplitHeight3 {
}
export interface IMatrix_mod_FrontSplitType1 {
}
export interface IMatrix_mod_FrontSplitType2 {
}
export interface IMatrix_mod_FrontThk {
}
export interface IMatrix_mod_FrontType {
}
export interface IMatrix_mod_FrontWidth {
}
export interface IMatrix_mod_FrontpanelWeightLogic {
}
export interface IMatrix_mod_GlobalFrontOversizeBtm {
}
export interface IMatrix_mod_GlobalFrontOversizeLeft {
}
export interface IMatrix_mod_GlobalFrontOversizeRight {
}
export interface IMatrix_mod_GlobalFrontOversizeTop {
}
export interface IMatrix_mod_GraphicId {
}
export interface IMatrix_mod_HandleActivated {
}
export interface IMatrix_mod_HandleColor {
}
export interface IMatrix_mod_HandleDesign {
  HandleDesignGroup?: string;
  HandleType: string;
  HandleLength: string;
  HandleColor: string;
  HandlePosTypeRelevant: boolean;
  Cutable?: boolean;
  FillerRelevant: boolean;
}
export interface IMatrix_mod_HandleDrill {
}
export interface IMatrix_mod_HandleInsertion {
}
export interface IMatrix_mod_HandleLength {
}
export interface IMatrix_mod_HandleLine {
}
export interface IMatrix_mod_HandleOffsetX {
}
export interface IMatrix_mod_HandleOffsetY {
}
export interface IMatrix_mod_HandlePosLogic {
}
export interface IMatrix_mod_HandlePosMatrix {
  Mode: string;
  Section: string;
}
export interface IMatrix_mod_HandlePosMatrixMultiple {
  FirstMatrix: string;
  SecondMatrix: string;
}
export interface IMatrix_mod_HandlePosType {
}
export interface IMatrix_mod_HandlestripPos {
}
export interface IMatrix_mod_HangerColor {
}
export interface IMatrix_mod_HangerOffsetPosY {
}
export interface IMatrix_mod_HangerPosX {
  Left: boolean;
  Right: boolean;
  Middle: boolean;
}
export interface IMatrix_mod_HangerPosY {
}
export interface IMatrix_mod_HangerType {
}
export interface IMatrix_mod_HardwareColor {
}
export interface IMatrix_mod_HardwareId {
}
export interface IMatrix_mod_Height {
}
export interface IMatrix_mod_HeightLeft {
}
export interface IMatrix_mod_HeightPosInsertion {
}
export interface IMatrix_mod_HeightRight {
}
export interface IMatrix_mod_HingeColor {
}
export interface IMatrix_mod_HingeLogic {
  HingeSelection: string;
  HingePositioning: string;
}
export interface IMatrix_mod_HingePos1 {
}
export interface IMatrix_mod_HingePos2 {
}
export interface IMatrix_mod_HingePos3 {
}
export interface IMatrix_mod_HingePos4 {
}
export interface IMatrix_mod_HingePos5 {
}
export interface IMatrix_mod_HingePos6 {
}
export interface IMatrix_mod_HingeType {
  DrillingDistanceType: string;
}
export interface IMatrix_mod_HobConstructionId {
}
export interface IMatrix_mod_HobGraphicId {
}
export interface IMatrix_mod_HobHeightBlockedSpace {
}
export interface IMatrix_mod_HobId {
}
export interface IMatrix_mod_HobMoveDepth {
}
export interface IMatrix_mod_HobMoveWidth {
}
export interface IMatrix_mod_HobSupplier {
}
export interface IMatrix_mod_HoodId {
}
export interface IMatrix_mod_HoodSupplier {
}
export interface IMatrix_mod_Information {
}
export interface IMatrix_mod_InteriorEquipmentHinge {
}
export interface IMatrix_mod_IslandBackwallOverdimension {
}
export interface IMatrix_mod_IslandBackwallOverhangFront {
}
export interface IMatrix_mod_IslandBackwallWidth {
}
export interface IMatrix_mod_LastFront {
}
export interface IMatrix_mod_LastFrontHeight {
}
export interface IMatrix_mod_LastFrontName {
}
export interface IMatrix_mod_LaundryMachineId {
}
export interface IMatrix_mod_LaundryMachineSupplier {
}
export interface IMatrix_mod_LegInsertion {
}
export interface IMatrix_mod_LightPart {
}
export interface IMatrix_mod_LightPosX {
  Descriptor?: string;
}
export interface IMatrix_mod_LightPosX1 {
}
export interface IMatrix_mod_LightPosX2 {
}
export interface IMatrix_mod_LightPosX3 {
}
export interface IMatrix_mod_LightPosX4 {
}
export interface IMatrix_mod_LightPosX5 {
}
export interface IMatrix_mod_LightPosY {
}
export interface IMatrix_mod_LightSystem {
  Length: number;
  Width: number;
  Radius: number;
  Depth: number;
  EscapeDrill_Offset: number;
  EscapeDrill_Diameter: number;
}
export interface IMatrix_mod_MirrorBoardColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_MirrorBoardId {
}
export interface IMatrix_mod_MirrorBoardProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_MirrorBoardThickness {
}
export interface IMatrix_mod_MirrorColor {
}
export interface IMatrix_mod_MirrorHeight {
}
export interface IMatrix_mod_MirrorPositionHeight {
}
export interface IMatrix_mod_MirrorPositionWidth {
}
export interface IMatrix_mod_MirrorThickness {
}
export interface IMatrix_mod_MirrorWidth {
}
export interface IMatrix_mod_MixerId {
}
export interface IMatrix_mod_MixerSupplier {
}
export interface IMatrix_mod_Model {
}
export interface IMatrix_mod_Model3DGroupName {
}
export interface IMatrix_mod_ModuleName {
}
export interface IMatrix_mod_MountingPlateType {
}
export interface IMatrix_mod_OpeningType {
}
export interface IMatrix_mod_OvenGap1 {
}
export interface IMatrix_mod_OvenGap2 {
}
export interface IMatrix_mod_OvenGap3 {
}
export interface IMatrix_mod_OvenGap4 {
}
export interface IMatrix_mod_OvenId {
}
export interface IMatrix_mod_OvenId1 {
}
export interface IMatrix_mod_OvenId2 {
}
export interface IMatrix_mod_OvenId3 {
}
export interface IMatrix_mod_OvenShelffixedOverhangTop {
}
export interface IMatrix_mod_OvenSupplier1 {
}
export interface IMatrix_mod_OvenSupplier2 {
}
export interface IMatrix_mod_OvenSupplier3 {
}
export interface IMatrix_mod_PanelId {
}
export interface IMatrix_mod_PanelblindThk {
}
export interface IMatrix_mod_PaneltopColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_PaneltopConstruction {
}
export interface IMatrix_mod_PaneltopEdgeBackColor {
}
export interface IMatrix_mod_PaneltopEdgeFrontColor {
}
export interface IMatrix_mod_PaneltopEdgeLeftColor {
}
export interface IMatrix_mod_PaneltopEdgeRightColor {
}
export interface IMatrix_mod_PaneltopEdgeVisBack {
}
export interface IMatrix_mod_PaneltopEdgeVisFront {
}
export interface IMatrix_mod_PaneltopEdgeVisLeft {
}
export interface IMatrix_mod_PaneltopEdgeVisRight {
}
export interface IMatrix_mod_PaneltopId {
}
export interface IMatrix_mod_PaneltopOverhangFront {
}
export interface IMatrix_mod_PaneltopOversizeBack {
}
export interface IMatrix_mod_PaneltopProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_PaneltopThk {
}
export interface IMatrix_mod_PantryPulloutColor {
}
export interface IMatrix_mod_PantryPulloutDesign {
}
export interface IMatrix_mod_PantryPulloutType {
}
export interface IMatrix_mod_ParentName {
}
export interface IMatrix_mod_PartInfo {
}
export interface IMatrix_mod_PartName {
}
export interface IMatrix_mod_PartgroupDrawerWeight {
}
export interface IMatrix_mod_PlinthAreaDesign {
  PlinthAreaElementColor: string;
  PlinthAreaType: string;
  PlinthAreaExtraItem: string;
}
export interface IMatrix_mod_PlinthAreaElementColor {
}
export interface IMatrix_mod_PlinthAreaExtraItem {
  HeightExtension: number;
}
export interface IMatrix_mod_PlinthAreaHeight {
}
export interface IMatrix_mod_PlinthAreaPosBackMatrix {
}
export interface IMatrix_mod_PlinthAreaPosFrontMatrix {
}
export interface IMatrix_mod_PlinthAreaPosLeftMatrix {
}
export interface IMatrix_mod_PlinthAreaPosLogic {
}
export interface IMatrix_mod_PlinthAreaPosRightMatrix {
}
export interface IMatrix_mod_PlinthAreaVisLeft {
}
export interface IMatrix_mod_PlinthAreaVisLeftSelection {
}
export interface IMatrix_mod_PlinthAreaVisRight {
}
export interface IMatrix_mod_PlinthAreaVisRightSelection {
}
export interface IMatrix_mod_ProcessingId {
}
export interface IMatrix_mod_ProcessingLibrary {
}
export interface IMatrix_mod_Program {
  GrainGroupId: string;
}
export interface IMatrix_mod_PulloutConnectionPosition {
}
export interface IMatrix_mod_PulloutDesign {
}
export interface IMatrix_mod_PulloutElementColor {
}
export interface IMatrix_mod_PulloutType {
  PullOutDesign: string;
  PullOutElementColor: string;
  PullOutConnectionPosition: string;
  PushToOpenAvailable: boolean;
}
export interface IMatrix_mod_PushtoopenColor {
}
export interface IMatrix_mod_PushtoopenLine {
}
export interface IMatrix_mod_PushtoopenOffset {
}
export interface IMatrix_mod_PushtoopenPosition {
}
export interface IMatrix_mod_PushtoopenType {
}
export interface IMatrix_mod_RackAreaManualOffsetCarcase {
}
export interface IMatrix_mod_RackAreaOversizeCarcaseType {
}
export interface IMatrix_mod_RackAreaShelftopConstruction {
}
export interface IMatrix_mod_RackAreaType {
}
export interface IMatrix_mod_RailhortopbackThk {
}
export interface IMatrix_mod_RailhortopfrontThk {
}
export interface IMatrix_mod_RailverttopbackThk {
}
export interface IMatrix_mod_RailverttopfrontThk {
}
export interface IMatrix_mod_Rotation {
}
export interface IMatrix_mod_ShelfadjBackwallDrillDescriptor {
}
export interface IMatrix_mod_ShelfadjBackwallProcessingId {
}
export interface IMatrix_mod_ShelfadjColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_ShelfadjDescriptor {
}
export interface IMatrix_mod_ShelfadjDesign {
}
export interface IMatrix_mod_ShelfadjDrillDistance {
}
export interface IMatrix_mod_ShelfadjDrillType {
  NumberDrillings: number;
  ShelfadjQtyRelevant: boolean;
}
export interface IMatrix_mod_ShelfadjDrillinglineOffsetBtm {
}
export interface IMatrix_mod_ShelfadjDrillinglineOffsetTop {
}
export interface IMatrix_mod_ShelfadjGroupPositionY {
}
export interface IMatrix_mod_ShelfadjOffsetBack {
}
export interface IMatrix_mod_ShelfadjOffsetFront {
}
export interface IMatrix_mod_ShelfadjPartParentName {
}
export interface IMatrix_mod_ShelfadjPartParentType {
}
export interface IMatrix_mod_ShelfadjSidepanelDrillDescriptor {
}
export interface IMatrix_mod_ShelfadjSidepanelProcessingBackId {
}
export interface IMatrix_mod_ShelfadjSidepanelProcessingFrontId {
}
export interface IMatrix_mod_ShelfadjSidepanelProcessingMiddleId {
}
export interface IMatrix_mod_ShelfadjThk {
}
export interface IMatrix_mod_ShelfadjVertDividerProcessingId {
}
export interface IMatrix_mod_ShelfadjVertdividerDrillDescriptor {
}
export interface IMatrix_mod_ShelfadjWoodColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_ShelfbtmThk {
}
export interface IMatrix_mod_ShelffixedBtm {
}
export interface IMatrix_mod_ShelffixedOffsetFront {
}
export interface IMatrix_mod_ShelffixedOversizeBack {
}
export interface IMatrix_mod_ShelffixedOversizeFront {
}
export interface IMatrix_mod_ShelffixedPartParentName {
}
export interface IMatrix_mod_ShelffixedPartParentType {
}
export interface IMatrix_mod_ShelffixedPos {
}
export interface IMatrix_mod_ShelffixedThk {
}
export interface IMatrix_mod_ShelffixedTop {
}
export interface IMatrix_mod_ShelffixedType {
}
export interface IMatrix_mod_ShelftopConstruction {
}
export interface IMatrix_mod_ShelftopThk {
}
export interface IMatrix_mod_ShelvesBackwallFittingConnection {
}
export interface IMatrix_mod_ShelvesBrackets {
  Supplier?: string;
  SupItemCode?: string;
}
export interface IMatrix_mod_ShelvesBracketsColor {
}
export interface IMatrix_mod_ShelvesColor {
  Grain?: boolean;
}
export interface IMatrix_mod_ShelvesThk {
}
export interface IMatrix_mod_SidepanelType {
}
export interface IMatrix_mod_SidepanelleftThk {
}
export interface IMatrix_mod_SidepanelleftType {
}
export interface IMatrix_mod_SidepanelmiddleShortWidth {
}
export interface IMatrix_mod_SidepanelmiddleThk {
}
export interface IMatrix_mod_SidepanelrightThk {
}
export interface IMatrix_mod_SidepanelrightType {
}
export interface IMatrix_mod_SinkConstructionId {
}
export interface IMatrix_mod_SinkGraphicId {
}
export interface IMatrix_mod_SinkId {
}
export interface IMatrix_mod_SinkMoveDepth {
}
export interface IMatrix_mod_SinkMoveWidth {
}
export interface IMatrix_mod_SinkSupplier {
}
export interface IMatrix_mod_SlopeAngle {
}
export interface IMatrix_mod_SlopedCeilingConstruction {
}
export interface IMatrix_mod_SlopedCeilingDimensionLogic {
  UseWallData: boolean;
  Height: string;
  DimensionLogic: string;
}
export interface IMatrix_mod_Supplier {
}
export interface IMatrix_mod_SupplierNumber {
}
export interface IMatrix_mod_Thk {
}
export interface IMatrix_mod_ThkLeft {
}
export interface IMatrix_mod_ThkRight {
}
export interface IMatrix_mod_ToekickColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_ToekickConnectionOverhang {
}
export interface IMatrix_mod_ToekickConnectionSequence {
}
export interface IMatrix_mod_ToekickHeight {
}
export interface IMatrix_mod_ToekickId {
}
export interface IMatrix_mod_ToekickLength {
}
export interface IMatrix_mod_ToekickProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_ToekickReductionTop {
}
export interface IMatrix_mod_ToekickSidepanelOverdimensionBtm {
}
export interface IMatrix_mod_ToekickSidepanelTransitionType {
}
export interface IMatrix_mod_ToekickThk {
}
export interface IMatrix_mod_TopDepth {
}
export interface IMatrix_mod_TotalDepth {
}
export interface IMatrix_mod_TotalDimLeft {
}
export interface IMatrix_mod_TotalDimRight {
}
export interface IMatrix_mod_TotalWidth {
}
export interface IMatrix_mod_TypeElement {
}
export interface IMatrix_mod_UprightColor {
  GrainGroupId: string;
}
export interface IMatrix_mod_UprightConstruction {
  IncludeFloorProfile: boolean;
}
export interface IMatrix_mod_UprightDepth {
}
export interface IMatrix_mod_UprightFloorProfileColor {
}
export interface IMatrix_mod_UprightHeight {
}
export interface IMatrix_mod_UprightOverdimensionBtm {
}
export interface IMatrix_mod_UprightOverdimensionTop {
}
export interface IMatrix_mod_UprightOverhang {
}
export interface IMatrix_mod_UprightProgram {
  GrainGroupId: string;
}
export interface IMatrix_mod_UprightSide {
}
export interface IMatrix_mod_UprightThk {
}
export interface IMatrix_mod_VertDividerPosition {
}
export interface IMatrix_mod_VertDividerType {
  IncludeDivider: boolean;
  IncludeDustStrip: boolean;
}
export interface IMatrix_mod_Weight {
}
export interface IMatrix_mod_Width {
}
export interface IMatrix_mod_WidthBlind {
}
export interface IMatrix_mod_WidthLeft {
}
export interface IMatrix_mod_WidthRight {
}

class Matrix_mod_BackHeight implements IMatrix_mod_BackHeight {
  public constructor(init?: Partial<Matrix_mod_BackHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BacksplashColor implements IMatrix_mod_BacksplashColor {
  public constructor(init?: Partial<Matrix_mod_BacksplashColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BacksplashHeight implements IMatrix_mod_BacksplashHeight {
  public constructor(init?: Partial<Matrix_mod_BacksplashHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BacksplashId implements IMatrix_mod_BacksplashId {
  public constructor(init?: Partial<Matrix_mod_BacksplashId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BacksplashThk implements IMatrix_mod_BacksplashThk {
  public constructor(init?: Partial<Matrix_mod_BacksplashThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BacksplashWidth implements IMatrix_mod_BacksplashWidth {
  public constructor(init?: Partial<Matrix_mod_BacksplashWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BackwallFixedHeight implements IMatrix_mod_BackwallFixedHeight {
  public constructor(init?: Partial<Matrix_mod_BackwallFixedHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BackwallPos implements IMatrix_mod_BackwallPos {
  public constructor(init?: Partial<Matrix_mod_BackwallPos>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BackwallThk implements IMatrix_mod_BackwallThk {
  public constructor(init?: Partial<Matrix_mod_BackwallThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardColor implements IMatrix_mod_BaseboardColor {
  public constructor(init?: Partial<Matrix_mod_BaseboardColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_BaseboardDepth implements IMatrix_mod_BaseboardDepth {
  public constructor(init?: Partial<Matrix_mod_BaseboardDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardDepthLogic implements IMatrix_mod_BaseboardDepthLogic {
  public constructor(init?: Partial<Matrix_mod_BaseboardDepthLogic>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardEdgeBackColor implements IMatrix_mod_BaseboardEdgeBackColor {
  public constructor(init?: Partial<Matrix_mod_BaseboardEdgeBackColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardEdgeColor implements IMatrix_mod_BaseboardEdgeColor {
  public constructor(init?: Partial<Matrix_mod_BaseboardEdgeColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardEdgeFrontColor implements IMatrix_mod_BaseboardEdgeFrontColor {
  public constructor(init?: Partial<Matrix_mod_BaseboardEdgeFrontColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardId implements IMatrix_mod_BaseboardId {
  public constructor(init?: Partial<Matrix_mod_BaseboardId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardLength implements IMatrix_mod_BaseboardLength {
  public constructor(init?: Partial<Matrix_mod_BaseboardLength>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardOverdimensionBack implements IMatrix_mod_BaseboardOverdimensionBack {
  public constructor(init?: Partial<Matrix_mod_BaseboardOverdimensionBack>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardOverdimensionLeft implements IMatrix_mod_BaseboardOverdimensionLeft {
  public constructor(init?: Partial<Matrix_mod_BaseboardOverdimensionLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardOverdimensionRight implements IMatrix_mod_BaseboardOverdimensionRight {
  public constructor(init?: Partial<Matrix_mod_BaseboardOverdimensionRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardProgram implements IMatrix_mod_BaseboardProgram {
  public constructor(init?: Partial<Matrix_mod_BaseboardProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_BaseboardSplitLogic implements IMatrix_mod_BaseboardSplitLogic {
  public constructor(init?: Partial<Matrix_mod_BaseboardSplitLogic>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseboardThk implements IMatrix_mod_BaseboardThk {
  public constructor(init?: Partial<Matrix_mod_BaseboardThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseunitFridgeId implements IMatrix_mod_BaseunitFridgeId {
  public constructor(init?: Partial<Matrix_mod_BaseunitFridgeId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BaseunitFridgeSupplier implements IMatrix_mod_BaseunitFridgeSupplier {
  public constructor(init?: Partial<Matrix_mod_BaseunitFridgeSupplier>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BoardShelfColor implements IMatrix_mod_BoardShelfColor {
  public constructor(init?: Partial<Matrix_mod_BoardShelfColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_BoardShelfDepth implements IMatrix_mod_BoardShelfDepth {
  public constructor(init?: Partial<Matrix_mod_BoardShelfDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BoardShelfPositionHeight implements IMatrix_mod_BoardShelfPositionHeight {
  public constructor(init?: Partial<Matrix_mod_BoardShelfPositionHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BoardShelfPositionWidth implements IMatrix_mod_BoardShelfPositionWidth {
  public constructor(init?: Partial<Matrix_mod_BoardShelfPositionWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BoardShelfProgram implements IMatrix_mod_BoardShelfProgram {
  public constructor(init?: Partial<Matrix_mod_BoardShelfProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_BoardShelfThickness implements IMatrix_mod_BoardShelfThickness {
  public constructor(init?: Partial<Matrix_mod_BoardShelfThickness>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_BoardShelfWidth implements IMatrix_mod_BoardShelfWidth {
  public constructor(init?: Partial<Matrix_mod_BoardShelfWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseBackwallColor implements IMatrix_mod_CarcaseBackwallColor {
  public constructor(init?: Partial<Matrix_mod_CarcaseBackwallColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_CarcaseBackwallConstruction implements IMatrix_mod_CarcaseBackwallConstruction {
  public constructor(init?: Partial<Matrix_mod_CarcaseBackwallConstruction>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseBackwallProgram implements IMatrix_mod_CarcaseBackwallProgram {
  public constructor(init?: Partial<Matrix_mod_CarcaseBackwallProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_CarcaseColor implements IMatrix_mod_CarcaseColor {
  public constructor(init?: Partial<Matrix_mod_CarcaseColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_CarcaseConnectionLeftBtm implements IMatrix_mod_CarcaseConnectionLeftBtm {
  public constructor(init?: Partial<Matrix_mod_CarcaseConnectionLeftBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseConnectionLeftTop implements IMatrix_mod_CarcaseConnectionLeftTop {
  public constructor(init?: Partial<Matrix_mod_CarcaseConnectionLeftTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseConnectionRightBtm implements IMatrix_mod_CarcaseConnectionRightBtm {
  public constructor(init?: Partial<Matrix_mod_CarcaseConnectionRightBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseConnectionRightTop implements IMatrix_mod_CarcaseConnectionRightTop {
  public constructor(init?: Partial<Matrix_mod_CarcaseConnectionRightTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseDepth implements IMatrix_mod_CarcaseDepth {
  public constructor(init?: Partial<Matrix_mod_CarcaseDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseDirection implements IMatrix_mod_CarcaseDirection {
  public constructor(init?: Partial<Matrix_mod_CarcaseDirection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseDirectionInfo implements IMatrix_mod_CarcaseDirectionInfo {
  public constructor(init?: Partial<Matrix_mod_CarcaseDirectionInfo>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseDistanceWall implements IMatrix_mod_CarcaseDistanceWall {
  public constructor(init?: Partial<Matrix_mod_CarcaseDistanceWall>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseEdgeBackColor implements IMatrix_mod_CarcaseEdgeBackColor {
  public constructor(init?: Partial<Matrix_mod_CarcaseEdgeBackColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseEdgeColor implements IMatrix_mod_CarcaseEdgeColor {
  public constructor(init?: Partial<Matrix_mod_CarcaseEdgeColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseEdgeFrontColor implements IMatrix_mod_CarcaseEdgeFrontColor {
  public constructor(init?: Partial<Matrix_mod_CarcaseEdgeFrontColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseFrontConstruction implements IMatrix_mod_CarcaseFrontConstruction {
  public constructor(init?: Partial<Matrix_mod_CarcaseFrontConstruction>) {
    Object.assign(this, init);
  }
  Left?: string;
  Top?: string;
  Right?: string;
  Bottom?: string;
}
class Matrix_mod_CarcaseHeight implements IMatrix_mod_CarcaseHeight {
  public constructor(init?: Partial<Matrix_mod_CarcaseHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseId implements IMatrix_mod_CarcaseId {
  public constructor(init?: Partial<Matrix_mod_CarcaseId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseMovement implements IMatrix_mod_CarcaseMovement {
  public constructor(init?: Partial<Matrix_mod_CarcaseMovement>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseOutsideColor implements IMatrix_mod_CarcaseOutsideColor {
  public constructor(init?: Partial<Matrix_mod_CarcaseOutsideColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_CarcaseOutsideProgram implements IMatrix_mod_CarcaseOutsideProgram {
  public constructor(init?: Partial<Matrix_mod_CarcaseOutsideProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_CarcaseOverdimensionBackLogic implements IMatrix_mod_CarcaseOverdimensionBackLogic {
  public constructor(init?: Partial<Matrix_mod_CarcaseOverdimensionBackLogic>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcasePartConnectionBackHor implements IMatrix_mod_CarcasePartConnectionBackHor {
  public constructor(init?: Partial<Matrix_mod_CarcasePartConnectionBackHor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcasePartConnectionBackVert implements IMatrix_mod_CarcasePartConnectionBackVert {
  public constructor(init?: Partial<Matrix_mod_CarcasePartConnectionBackVert>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcasePartConnectionBtmVert implements IMatrix_mod_CarcasePartConnectionBtmVert {
  public constructor(init?: Partial<Matrix_mod_CarcasePartConnectionBtmVert>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcasePartConnectionLeftHor implements IMatrix_mod_CarcasePartConnectionLeftHor {
  public constructor(init?: Partial<Matrix_mod_CarcasePartConnectionLeftHor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcasePartConnectionRightHor implements IMatrix_mod_CarcasePartConnectionRightHor {
  public constructor(init?: Partial<Matrix_mod_CarcasePartConnectionRightHor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcasePartConnectionTopVert implements IMatrix_mod_CarcasePartConnectionTopVert {
  public constructor(init?: Partial<Matrix_mod_CarcasePartConnectionTopVert>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseProgram implements IMatrix_mod_CarcaseProgram {
  public constructor(init?: Partial<Matrix_mod_CarcaseProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_CarcaseShelfbtmConstruction implements IMatrix_mod_CarcaseShelfbtmConstruction {
  public constructor(init?: Partial<Matrix_mod_CarcaseShelfbtmConstruction>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseShelfbtmOversizeInsideWall implements IMatrix_mod_CarcaseShelfbtmOversizeInsideWall {
  public constructor(init?: Partial<Matrix_mod_CarcaseShelfbtmOversizeInsideWall>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseShelfbtmOversizeLeft implements IMatrix_mod_CarcaseShelfbtmOversizeLeft {
  public constructor(init?: Partial<Matrix_mod_CarcaseShelfbtmOversizeLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseShelfbtmOversizeRight implements IMatrix_mod_CarcaseShelfbtmOversizeRight {
  public constructor(init?: Partial<Matrix_mod_CarcaseShelfbtmOversizeRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseShelftopConstruction implements IMatrix_mod_CarcaseShelftopConstruction {
  public constructor(init?: Partial<Matrix_mod_CarcaseShelftopConstruction>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseShelftopOversizeInsideWall implements IMatrix_mod_CarcaseShelftopOversizeInsideWall {
  public constructor(init?: Partial<Matrix_mod_CarcaseShelftopOversizeInsideWall>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseShelftopOversizeLeft implements IMatrix_mod_CarcaseShelftopOversizeLeft {
  public constructor(init?: Partial<Matrix_mod_CarcaseShelftopOversizeLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseShelftopOversizeRight implements IMatrix_mod_CarcaseShelftopOversizeRight {
  public constructor(init?: Partial<Matrix_mod_CarcaseShelftopOversizeRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseSidepanelleftOversizeBtm implements IMatrix_mod_CarcaseSidepanelleftOversizeBtm {
  public constructor(init?: Partial<Matrix_mod_CarcaseSidepanelleftOversizeBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseSidepanelleftOversizeInsideWall implements IMatrix_mod_CarcaseSidepanelleftOversizeInsideWall {
  public constructor(init?: Partial<Matrix_mod_CarcaseSidepanelleftOversizeInsideWall>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseSidepanelleftOversizeTop implements IMatrix_mod_CarcaseSidepanelleftOversizeTop {
  public constructor(init?: Partial<Matrix_mod_CarcaseSidepanelleftOversizeTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseSidepanelrightOversizeBtm implements IMatrix_mod_CarcaseSidepanelrightOversizeBtm {
  public constructor(init?: Partial<Matrix_mod_CarcaseSidepanelrightOversizeBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseSidepanelrightOversizeInsideWall implements IMatrix_mod_CarcaseSidepanelrightOversizeInsideWall {
  public constructor(init?: Partial<Matrix_mod_CarcaseSidepanelrightOversizeInsideWall>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseSidepanelrightOversizeTop implements IMatrix_mod_CarcaseSidepanelrightOversizeTop {
  public constructor(init?: Partial<Matrix_mod_CarcaseSidepanelrightOversizeTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseVisBack implements IMatrix_mod_CarcaseVisBack {
  public constructor(init?: Partial<Matrix_mod_CarcaseVisBack>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseVisBtm implements IMatrix_mod_CarcaseVisBtm {
  public constructor(init?: Partial<Matrix_mod_CarcaseVisBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseVisLeft implements IMatrix_mod_CarcaseVisLeft {
  public constructor(init?: Partial<Matrix_mod_CarcaseVisLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseVisLeftSelection implements IMatrix_mod_CarcaseVisLeftSelection {
  public constructor(init?: Partial<Matrix_mod_CarcaseVisLeftSelection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseVisRight implements IMatrix_mod_CarcaseVisRight {
  public constructor(init?: Partial<Matrix_mod_CarcaseVisRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseVisRightSelection implements IMatrix_mod_CarcaseVisRightSelection {
  public constructor(init?: Partial<Matrix_mod_CarcaseVisRightSelection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseVisTop implements IMatrix_mod_CarcaseVisTop {
  public constructor(init?: Partial<Matrix_mod_CarcaseVisTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CarcaseWidth implements IMatrix_mod_CarcaseWidth {
  public constructor(init?: Partial<Matrix_mod_CarcaseWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingAreaVisLeft implements IMatrix_mod_CeilingAreaVisLeft {
  public constructor(init?: Partial<Matrix_mod_CeilingAreaVisLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingAreaVisLeftSelection implements IMatrix_mod_CeilingAreaVisLeftSelection {
  public constructor(init?: Partial<Matrix_mod_CeilingAreaVisLeftSelection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingAreaVisRight implements IMatrix_mod_CeilingAreaVisRight {
  public constructor(init?: Partial<Matrix_mod_CeilingAreaVisRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingAreaVisRightSelection implements IMatrix_mod_CeilingAreaVisRightSelection {
  public constructor(init?: Partial<Matrix_mod_CeilingAreaVisRightSelection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerColor implements IMatrix_mod_CeilingFillerColor {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_CeilingFillerConstruction implements IMatrix_mod_CeilingFillerConstruction {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerConstruction>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerEdgeBackColor implements IMatrix_mod_CeilingFillerEdgeBackColor {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerEdgeBackColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerEdgeFrontColor implements IMatrix_mod_CeilingFillerEdgeFrontColor {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerEdgeFrontColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerEdgeLeftColor implements IMatrix_mod_CeilingFillerEdgeLeftColor {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerEdgeLeftColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerEdgeRightColor implements IMatrix_mod_CeilingFillerEdgeRightColor {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerEdgeRightColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerFittingPanelDepth implements IMatrix_mod_CeilingFillerFittingPanelDepth {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerFittingPanelDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerFittingPanelThk implements IMatrix_mod_CeilingFillerFittingPanelThk {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerFittingPanelThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerHeight implements IMatrix_mod_CeilingFillerHeight {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerId implements IMatrix_mod_CeilingFillerId {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerProgram implements IMatrix_mod_CeilingFillerProgram {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_CeilingFillerRecess implements IMatrix_mod_CeilingFillerRecess {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerRecess>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerRecessLeft implements IMatrix_mod_CeilingFillerRecessLeft {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerRecessLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerRecessRight implements IMatrix_mod_CeilingFillerRecessRight {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerRecessRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerThk implements IMatrix_mod_CeilingFillerThk {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CeilingFillerTransitionType implements IMatrix_mod_CeilingFillerTransitionType {
  public constructor(init?: Partial<Matrix_mod_CeilingFillerTransitionType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CleatThk implements IMatrix_mod_CleatThk {
  public constructor(init?: Partial<Matrix_mod_CleatThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CleatWidth implements IMatrix_mod_CleatWidth {
  public constructor(init?: Partial<Matrix_mod_CleatWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ClothingOrganizerBoardColor implements IMatrix_mod_ClothingOrganizerBoardColor {
  public constructor(init?: Partial<Matrix_mod_ClothingOrganizerBoardColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ClothingOrganizerColor implements IMatrix_mod_ClothingOrganizerColor {
  public constructor(init?: Partial<Matrix_mod_ClothingOrganizerColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ClothingOrganizerConnectionPosition implements IMatrix_mod_ClothingOrganizerConnectionPosition {
  public constructor(init?: Partial<Matrix_mod_ClothingOrganizerConnectionPosition>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ClothingOrganizerDepthPosition implements IMatrix_mod_ClothingOrganizerDepthPosition {
  public constructor(init?: Partial<Matrix_mod_ClothingOrganizerDepthPosition>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ClothingOrganizerDesign implements IMatrix_mod_ClothingOrganizerDesign {
  public constructor(init?: Partial<Matrix_mod_ClothingOrganizerDesign>) {
    Object.assign(this, init);
  }
  Board: boolean = false;
}
class Matrix_mod_ClothingOrganizerDistanceBlock implements IMatrix_mod_ClothingOrganizerDistanceBlock {
  public constructor(init?: Partial<Matrix_mod_ClothingOrganizerDistanceBlock>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ClothingOrganizerHeightPosition implements IMatrix_mod_ClothingOrganizerHeightPosition {
  public constructor(init?: Partial<Matrix_mod_ClothingOrganizerHeightPosition>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ClothingOrganizerType implements IMatrix_mod_ClothingOrganizerType {
  public constructor(init?: Partial<Matrix_mod_ClothingOrganizerType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CoatBoardColor implements IMatrix_mod_CoatBoardColor {
  public constructor(init?: Partial<Matrix_mod_CoatBoardColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_CoatBoardId implements IMatrix_mod_CoatBoardId {
  public constructor(init?: Partial<Matrix_mod_CoatBoardId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CoatBoardProgram implements IMatrix_mod_CoatBoardProgram {
  public constructor(init?: Partial<Matrix_mod_CoatBoardProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_CoatBoardThickness implements IMatrix_mod_CoatBoardThickness {
  public constructor(init?: Partial<Matrix_mod_CoatBoardThickness>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_Color implements IMatrix_mod_Color {
  public constructor(init?: Partial<Matrix_mod_Color>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CornerunitDimensionLogic implements IMatrix_mod_CornerunitDimensionLogic {
  public constructor(init?: Partial<Matrix_mod_CornerunitDimensionLogic>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CornerunitFrontWidth implements IMatrix_mod_CornerunitFrontWidth {
  public constructor(init?: Partial<Matrix_mod_CornerunitFrontWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CornerunitStraightConstruction implements IMatrix_mod_CornerunitStraightConstruction {
  public constructor(init?: Partial<Matrix_mod_CornerunitStraightConstruction>) {
    Object.assign(this, init);
  }
  ContructionType?: string;
  IncludePanelblind: boolean = true;
  IncludeMiddleSideShort: boolean = false;
}
class Matrix_mod_CornerunitStraightDimensionLogic implements IMatrix_mod_CornerunitStraightDimensionLogic {
  public constructor(init?: Partial<Matrix_mod_CornerunitStraightDimensionLogic>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CornerunitStraightFillerConstruction implements IMatrix_mod_CornerunitStraightFillerConstruction {
  public constructor(init?: Partial<Matrix_mod_CornerunitStraightFillerConstruction>) {
    Object.assign(this, init);
  }
  PartInCornerCabinet: string = "0";
}
class Matrix_mod_CountertopColor implements IMatrix_mod_CountertopColor {
  public constructor(init?: Partial<Matrix_mod_CountertopColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_CountertopConnectionLengthLeft implements IMatrix_mod_CountertopConnectionLengthLeft {
  public constructor(init?: Partial<Matrix_mod_CountertopConnectionLengthLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopConnectionLengthRight implements IMatrix_mod_CountertopConnectionLengthRight {
  public constructor(init?: Partial<Matrix_mod_CountertopConnectionLengthRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopConnectionOversize implements IMatrix_mod_CountertopConnectionOversize {
  public constructor(init?: Partial<Matrix_mod_CountertopConnectionOversize>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopConnectionRadius implements IMatrix_mod_CountertopConnectionRadius {
  public constructor(init?: Partial<Matrix_mod_CountertopConnectionRadius>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopConnectionSequence implements IMatrix_mod_CountertopConnectionSequence {
  public constructor(init?: Partial<Matrix_mod_CountertopConnectionSequence>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopDepth implements IMatrix_mod_CountertopDepth {
  public constructor(init?: Partial<Matrix_mod_CountertopDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopEdgeBackType implements IMatrix_mod_CountertopEdgeBackType {
  public constructor(init?: Partial<Matrix_mod_CountertopEdgeBackType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopEdgeFrontType implements IMatrix_mod_CountertopEdgeFrontType {
  public constructor(init?: Partial<Matrix_mod_CountertopEdgeFrontType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopEdgeLeftType implements IMatrix_mod_CountertopEdgeLeftType {
  public constructor(init?: Partial<Matrix_mod_CountertopEdgeLeftType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopEdgeRightType implements IMatrix_mod_CountertopEdgeRightType {
  public constructor(init?: Partial<Matrix_mod_CountertopEdgeRightType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopId implements IMatrix_mod_CountertopId {
  public constructor(init?: Partial<Matrix_mod_CountertopId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopLeftEndType implements IMatrix_mod_CountertopLeftEndType {
  public constructor(init?: Partial<Matrix_mod_CountertopLeftEndType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopOverhangFront implements IMatrix_mod_CountertopOverhangFront {
  public constructor(init?: Partial<Matrix_mod_CountertopOverhangFront>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopOverhangLeft implements IMatrix_mod_CountertopOverhangLeft {
  public constructor(init?: Partial<Matrix_mod_CountertopOverhangLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopOverhangRight implements IMatrix_mod_CountertopOverhangRight {
  public constructor(init?: Partial<Matrix_mod_CountertopOverhangRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopProgram implements IMatrix_mod_CountertopProgram {
  public constructor(init?: Partial<Matrix_mod_CountertopProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Horizontal";
}
class Matrix_mod_CountertopRightEndType implements IMatrix_mod_CountertopRightEndType {
  public constructor(init?: Partial<Matrix_mod_CountertopRightEndType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopThk implements IMatrix_mod_CountertopThk {
  public constructor(init?: Partial<Matrix_mod_CountertopThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CountertopWidth implements IMatrix_mod_CountertopWidth {
  public constructor(init?: Partial<Matrix_mod_CountertopWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CreateBacksplash implements IMatrix_mod_CreateBacksplash {
  public constructor(init?: Partial<Matrix_mod_CreateBacksplash>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CreateCeilingFiller implements IMatrix_mod_CreateCeilingFiller {
  public constructor(init?: Partial<Matrix_mod_CreateCeilingFiller>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CreateCountertop implements IMatrix_mod_CreateCountertop {
  public constructor(init?: Partial<Matrix_mod_CreateCountertop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CreateFingergrip implements IMatrix_mod_CreateFingergrip {
  public constructor(init?: Partial<Matrix_mod_CreateFingergrip>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CreatePaneltop implements IMatrix_mod_CreatePaneltop {
  public constructor(init?: Partial<Matrix_mod_CreatePaneltop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_CreateToekick implements IMatrix_mod_CreateToekick {
  public constructor(init?: Partial<Matrix_mod_CreateToekick>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_Depth implements IMatrix_mod_Depth {
  public constructor(init?: Partial<Matrix_mod_Depth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DepthLeft implements IMatrix_mod_DepthLeft {
  public constructor(init?: Partial<Matrix_mod_DepthLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DepthRight implements IMatrix_mod_DepthRight {
  public constructor(init?: Partial<Matrix_mod_DepthRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_Direction implements IMatrix_mod_Direction {
  public constructor(init?: Partial<Matrix_mod_Direction>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DishwasherId implements IMatrix_mod_DishwasherId {
  public constructor(init?: Partial<Matrix_mod_DishwasherId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DishwasherSupplier implements IMatrix_mod_DishwasherSupplier {
  public constructor(init?: Partial<Matrix_mod_DishwasherSupplier>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DoorDirection implements IMatrix_mod_DoorDirection {
  public constructor(init?: Partial<Matrix_mod_DoorDirection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DoorDirectionSelection implements IMatrix_mod_DoorDirectionSelection {
  public constructor(init?: Partial<Matrix_mod_DoorDirectionSelection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DoorType implements IMatrix_mod_DoorType {
  public constructor(init?: Partial<Matrix_mod_DoorType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DoorTypeSelection implements IMatrix_mod_DoorTypeSelection {
  public constructor(init?: Partial<Matrix_mod_DoorTypeSelection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerBackwallThk implements IMatrix_mod_DrawerBackwallThk {
  public constructor(init?: Partial<Matrix_mod_DrawerBackwallThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerBoxColor implements IMatrix_mod_DrawerBoxColor {
  public constructor(init?: Partial<Matrix_mod_DrawerBoxColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerBoxDepthType implements IMatrix_mod_DrawerBoxDepthType {
  public constructor(init?: Partial<Matrix_mod_DrawerBoxDepthType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerBoxDesign implements IMatrix_mod_DrawerBoxDesign {
  public constructor(init?: Partial<Matrix_mod_DrawerBoxDesign>) {
    Object.assign(this, init);
  }
  DrawerBoxType: string = "DrawerBox";
}
class Matrix_mod_DrawerBoxHeightType implements IMatrix_mod_DrawerBoxHeightType {
  public constructor(init?: Partial<Matrix_mod_DrawerBoxHeightType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerBoxLogic implements IMatrix_mod_DrawerBoxLogic {
  public constructor(init?: Partial<Matrix_mod_DrawerBoxLogic>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerBoxOffsetDepth implements IMatrix_mod_DrawerBoxOffsetDepth {
  public constructor(init?: Partial<Matrix_mod_DrawerBoxOffsetDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerBoxProgram implements IMatrix_mod_DrawerBoxProgram {
  public constructor(init?: Partial<Matrix_mod_DrawerBoxProgram>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerBoxWeightType implements IMatrix_mod_DrawerBoxWeightType {
  public constructor(init?: Partial<Matrix_mod_DrawerBoxWeightType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerDistanceDepth implements IMatrix_mod_DrawerDistanceDepth {
  public constructor(init?: Partial<Matrix_mod_DrawerDistanceDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerDistanceHeight implements IMatrix_mod_DrawerDistanceHeight {
  public constructor(init?: Partial<Matrix_mod_DrawerDistanceHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerDistanceWidth implements IMatrix_mod_DrawerDistanceWidth {
  public constructor(init?: Partial<Matrix_mod_DrawerDistanceWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerOpeningDistance implements IMatrix_mod_DrawerOpeningDistance {
  public constructor(init?: Partial<Matrix_mod_DrawerOpeningDistance>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerShelfbtmThk implements IMatrix_mod_DrawerShelfbtmThk {
  public constructor(init?: Partial<Matrix_mod_DrawerShelfbtmThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_DrawerType implements IMatrix_mod_DrawerType {
  public constructor(init?: Partial<Matrix_mod_DrawerType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_EdgeBackType implements IMatrix_mod_EdgeBackType {
  public constructor(init?: Partial<Matrix_mod_EdgeBackType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_EdgeFrontType implements IMatrix_mod_EdgeFrontType {
  public constructor(init?: Partial<Matrix_mod_EdgeFrontType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_EdgeJointType implements IMatrix_mod_EdgeJointType {
  public constructor(init?: Partial<Matrix_mod_EdgeJointType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_EdgeLeftType implements IMatrix_mod_EdgeLeftType {
  public constructor(init?: Partial<Matrix_mod_EdgeLeftType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_EdgeRightType implements IMatrix_mod_EdgeRightType {
  public constructor(init?: Partial<Matrix_mod_EdgeRightType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FillerDepth implements IMatrix_mod_FillerDepth {
  public constructor(init?: Partial<Matrix_mod_FillerDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FillerDepthLeft implements IMatrix_mod_FillerDepthLeft {
  public constructor(init?: Partial<Matrix_mod_FillerDepthLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FillerDepthRight implements IMatrix_mod_FillerDepthRight {
  public constructor(init?: Partial<Matrix_mod_FillerDepthRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FillerHardware implements IMatrix_mod_FillerHardware {
  public constructor(init?: Partial<Matrix_mod_FillerHardware>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FillerType implements IMatrix_mod_FillerType {
  public constructor(init?: Partial<Matrix_mod_FillerType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripBtmType implements IMatrix_mod_FingergripBtmType {
  public constructor(init?: Partial<Matrix_mod_FingergripBtmType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripColor implements IMatrix_mod_FingergripColor {
  public constructor(init?: Partial<Matrix_mod_FingergripColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripLength implements IMatrix_mod_FingergripLength {
  public constructor(init?: Partial<Matrix_mod_FingergripLength>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripPos1 implements IMatrix_mod_FingergripPos1 {
  public constructor(init?: Partial<Matrix_mod_FingergripPos1>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripPos2 implements IMatrix_mod_FingergripPos2 {
  public constructor(init?: Partial<Matrix_mod_FingergripPos2>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripPos3 implements IMatrix_mod_FingergripPos3 {
  public constructor(init?: Partial<Matrix_mod_FingergripPos3>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripPos4 implements IMatrix_mod_FingergripPos4 {
  public constructor(init?: Partial<Matrix_mod_FingergripPos4>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripPos5 implements IMatrix_mod_FingergripPos5 {
  public constructor(init?: Partial<Matrix_mod_FingergripPos5>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripPostype implements IMatrix_mod_FingergripPostype {
  public constructor(init?: Partial<Matrix_mod_FingergripPostype>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripQtyMiddle implements IMatrix_mod_FingergripQtyMiddle {
  public constructor(init?: Partial<Matrix_mod_FingergripQtyMiddle>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripTop implements IMatrix_mod_FingergripTop {
  public constructor(init?: Partial<Matrix_mod_FingergripTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripTopType implements IMatrix_mod_FingergripTopType {
  public constructor(init?: Partial<Matrix_mod_FingergripTopType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FingergripType implements IMatrix_mod_FingergripType {
  public constructor(init?: Partial<Matrix_mod_FingergripType>) {
    Object.assign(this, init);
  }
  LShapeHeight?: number;
  LShapeDepth?: number;
  LShapeGapAbove?: number;
  LShapeSVG?: string;
  CShapeHeight?: number;
  CShapeDepth?: number;
  CShapeOverlapBelow?: number;
  CShapeOverlapAbove?: number;
  CShapeSVG?: string;
  MprProfileStyle?: number;
  CutSide?: boolean;
}
class Matrix_mod_FirstFront implements IMatrix_mod_FirstFront {
  public constructor(init?: Partial<Matrix_mod_FirstFront>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FittingConnectionBtmVert implements IMatrix_mod_FittingConnectionBtmVert {
  public constructor(init?: Partial<Matrix_mod_FittingConnectionBtmVert>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FittingConnectionLeftBtm implements IMatrix_mod_FittingConnectionLeftBtm {
  public constructor(init?: Partial<Matrix_mod_FittingConnectionLeftBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FittingConnectionLeftHor implements IMatrix_mod_FittingConnectionLeftHor {
  public constructor(init?: Partial<Matrix_mod_FittingConnectionLeftHor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FittingConnectionLeftTop implements IMatrix_mod_FittingConnectionLeftTop {
  public constructor(init?: Partial<Matrix_mod_FittingConnectionLeftTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FittingConnectionRightBtm implements IMatrix_mod_FittingConnectionRightBtm {
  public constructor(init?: Partial<Matrix_mod_FittingConnectionRightBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FittingConnectionRightHor implements IMatrix_mod_FittingConnectionRightHor {
  public constructor(init?: Partial<Matrix_mod_FittingConnectionRightHor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FittingConnectionRightTop implements IMatrix_mod_FittingConnectionRightTop {
  public constructor(init?: Partial<Matrix_mod_FittingConnectionRightTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FittingConnectionTopVert implements IMatrix_mod_FittingConnectionTopVert {
  public constructor(init?: Partial<Matrix_mod_FittingConnectionTopVert>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FlipliftFrontNumber implements IMatrix_mod_FlipliftFrontNumber {
  public constructor(init?: Partial<Matrix_mod_FlipliftFrontNumber>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FlipliftHardwareColor implements IMatrix_mod_FlipliftHardwareColor {
  public constructor(init?: Partial<Matrix_mod_FlipliftHardwareColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FlipliftHardwareType implements IMatrix_mod_FlipliftHardwareType {
  public constructor(init?: Partial<Matrix_mod_FlipliftHardwareType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FlipliftLogic implements IMatrix_mod_FlipliftLogic {
  public constructor(init?: Partial<Matrix_mod_FlipliftLogic>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FlipliftType implements IMatrix_mod_FlipliftType {
  public constructor(init?: Partial<Matrix_mod_FlipliftType>) {
    Object.assign(this, init);
  }
  FrontDividingNecessary?: boolean;
  PartQty: number = 1;
  DirectionType?: string;
  NeedsHinges: boolean = false;
}
class Matrix_mod_FrameFillingColor implements IMatrix_mod_FrameFillingColor {
  public constructor(init?: Partial<Matrix_mod_FrameFillingColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_FrameFillingType implements IMatrix_mod_FrameFillingType {
  public constructor(init?: Partial<Matrix_mod_FrameFillingType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FridgeCarcasePositionType implements IMatrix_mod_FridgeCarcasePositionType {
  public constructor(init?: Partial<Matrix_mod_FridgeCarcasePositionType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FridgeCarcaseSpaceDescriptor implements IMatrix_mod_FridgeCarcaseSpaceDescriptor {
  public constructor(init?: Partial<Matrix_mod_FridgeCarcaseSpaceDescriptor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FridgeFrontHeightDescriptor implements IMatrix_mod_FridgeFrontHeightDescriptor {
  public constructor(init?: Partial<Matrix_mod_FridgeFrontHeightDescriptor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FridgeGraphicId implements IMatrix_mod_FridgeGraphicId {
  public constructor(init?: Partial<Matrix_mod_FridgeGraphicId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FridgeId implements IMatrix_mod_FridgeId {
  public constructor(init?: Partial<Matrix_mod_FridgeId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FridgeInfo implements IMatrix_mod_FridgeInfo {
  public constructor(init?: Partial<Matrix_mod_FridgeInfo>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FridgePositionId implements IMatrix_mod_FridgePositionId {
  public constructor(init?: Partial<Matrix_mod_FridgePositionId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FridgeSupplier implements IMatrix_mod_FridgeSupplier {
  public constructor(init?: Partial<Matrix_mod_FridgeSupplier>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontColor implements IMatrix_mod_FrontColor {
  public constructor(init?: Partial<Matrix_mod_FrontColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_FrontDescriptor implements IMatrix_mod_FrontDescriptor {
  public constructor(init?: Partial<Matrix_mod_FrontDescriptor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontDesign implements IMatrix_mod_FrontDesign {
  public constructor(init?: Partial<Matrix_mod_FrontDesign>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontEdgeColor implements IMatrix_mod_FrontEdgeColor {
  public constructor(init?: Partial<Matrix_mod_FrontEdgeColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontEdgeThk implements IMatrix_mod_FrontEdgeThk {
  public constructor(init?: Partial<Matrix_mod_FrontEdgeThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontGapCarcase implements IMatrix_mod_FrontGapCarcase {
  public constructor(init?: Partial<Matrix_mod_FrontGapCarcase>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontGapHor implements IMatrix_mod_FrontGapHor {
  public constructor(init?: Partial<Matrix_mod_FrontGapHor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontGapHorTop implements IMatrix_mod_FrontGapHorTop {
  public constructor(init?: Partial<Matrix_mod_FrontGapHorTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontGapVert implements IMatrix_mod_FrontGapVert {
  public constructor(init?: Partial<Matrix_mod_FrontGapVert>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontHeight implements IMatrix_mod_FrontHeight {
  public constructor(init?: Partial<Matrix_mod_FrontHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontHeightSelection implements IMatrix_mod_FrontHeightSelection {
  public constructor(init?: Partial<Matrix_mod_FrontHeightSelection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontId implements IMatrix_mod_FrontId {
  public constructor(init?: Partial<Matrix_mod_FrontId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontOverlayInfo implements IMatrix_mod_FrontOverlayInfo {
  public constructor(init?: Partial<Matrix_mod_FrontOverlayInfo>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontOversizeBtm implements IMatrix_mod_FrontOversizeBtm {
  public constructor(init?: Partial<Matrix_mod_FrontOversizeBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontOversizeLeft implements IMatrix_mod_FrontOversizeLeft {
  public constructor(init?: Partial<Matrix_mod_FrontOversizeLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontOversizeRight implements IMatrix_mod_FrontOversizeRight {
  public constructor(init?: Partial<Matrix_mod_FrontOversizeRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontOversizeTop implements IMatrix_mod_FrontOversizeTop {
  public constructor(init?: Partial<Matrix_mod_FrontOversizeTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontPosStart implements IMatrix_mod_FrontPosStart {
  public constructor(init?: Partial<Matrix_mod_FrontPosStart>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontProgram implements IMatrix_mod_FrontProgram {
  public constructor(init?: Partial<Matrix_mod_FrontProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_FrontQtyElements implements IMatrix_mod_FrontQtyElements {
  public constructor(init?: Partial<Matrix_mod_FrontQtyElements>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontSegmentColor implements IMatrix_mod_FrontSegmentColor {
  public constructor(init?: Partial<Matrix_mod_FrontSegmentColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_FrontSegmentDescriptor implements IMatrix_mod_FrontSegmentDescriptor {
  public constructor(init?: Partial<Matrix_mod_FrontSegmentDescriptor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontSegmentType implements IMatrix_mod_FrontSegmentType {
  public constructor(init?: Partial<Matrix_mod_FrontSegmentType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontSplit implements IMatrix_mod_FrontSplit {
  public constructor(init?: Partial<Matrix_mod_FrontSplit>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontSplitDescriptor implements IMatrix_mod_FrontSplitDescriptor {
  public constructor(init?: Partial<Matrix_mod_FrontSplitDescriptor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontSplitHeight1 implements IMatrix_mod_FrontSplitHeight1 {
  public constructor(init?: Partial<Matrix_mod_FrontSplitHeight1>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontSplitHeight2 implements IMatrix_mod_FrontSplitHeight2 {
  public constructor(init?: Partial<Matrix_mod_FrontSplitHeight2>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontSplitHeight3 implements IMatrix_mod_FrontSplitHeight3 {
  public constructor(init?: Partial<Matrix_mod_FrontSplitHeight3>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontSplitType1 implements IMatrix_mod_FrontSplitType1 {
  public constructor(init?: Partial<Matrix_mod_FrontSplitType1>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontSplitType2 implements IMatrix_mod_FrontSplitType2 {
  public constructor(init?: Partial<Matrix_mod_FrontSplitType2>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontThk implements IMatrix_mod_FrontThk {
  public constructor(init?: Partial<Matrix_mod_FrontThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontType implements IMatrix_mod_FrontType {
  public constructor(init?: Partial<Matrix_mod_FrontType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontWidth implements IMatrix_mod_FrontWidth {
  public constructor(init?: Partial<Matrix_mod_FrontWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_FrontpanelWeightLogic implements IMatrix_mod_FrontpanelWeightLogic {
  public constructor(init?: Partial<Matrix_mod_FrontpanelWeightLogic>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_GlobalFrontOversizeBtm implements IMatrix_mod_GlobalFrontOversizeBtm {
  public constructor(init?: Partial<Matrix_mod_GlobalFrontOversizeBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_GlobalFrontOversizeLeft implements IMatrix_mod_GlobalFrontOversizeLeft {
  public constructor(init?: Partial<Matrix_mod_GlobalFrontOversizeLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_GlobalFrontOversizeRight implements IMatrix_mod_GlobalFrontOversizeRight {
  public constructor(init?: Partial<Matrix_mod_GlobalFrontOversizeRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_GlobalFrontOversizeTop implements IMatrix_mod_GlobalFrontOversizeTop {
  public constructor(init?: Partial<Matrix_mod_GlobalFrontOversizeTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_GraphicId implements IMatrix_mod_GraphicId {
  public constructor(init?: Partial<Matrix_mod_GraphicId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HandleActivated implements IMatrix_mod_HandleActivated {
  public constructor(init?: Partial<Matrix_mod_HandleActivated>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HandleColor implements IMatrix_mod_HandleColor {
  public constructor(init?: Partial<Matrix_mod_HandleColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HandleDesign implements IMatrix_mod_HandleDesign {
  public constructor(init?: Partial<Matrix_mod_HandleDesign>) {
    Object.assign(this, init);
  }
  HandleDesignGroup?: string;
  HandleType: string = "Handle";
  HandleLength: string = "Attribute";
  HandleColor: string = "Attribute";
  HandlePosTypeRelevant: boolean = false;
  Cutable?: boolean;
  FillerRelevant: boolean = false;
}
class Matrix_mod_HandleDrill implements IMatrix_mod_HandleDrill {
  public constructor(init?: Partial<Matrix_mod_HandleDrill>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HandleInsertion implements IMatrix_mod_HandleInsertion {
  public constructor(init?: Partial<Matrix_mod_HandleInsertion>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HandleLength implements IMatrix_mod_HandleLength {
  public constructor(init?: Partial<Matrix_mod_HandleLength>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HandleLine implements IMatrix_mod_HandleLine {
  public constructor(init?: Partial<Matrix_mod_HandleLine>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HandleOffsetX implements IMatrix_mod_HandleOffsetX {
  public constructor(init?: Partial<Matrix_mod_HandleOffsetX>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HandleOffsetY implements IMatrix_mod_HandleOffsetY {
  public constructor(init?: Partial<Matrix_mod_HandleOffsetY>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HandlePosLogic implements IMatrix_mod_HandlePosLogic {
  public constructor(init?: Partial<Matrix_mod_HandlePosLogic>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HandlePosMatrix implements IMatrix_mod_HandlePosMatrix {
  public constructor(init?: Partial<Matrix_mod_HandlePosMatrix>) {
    Object.assign(this, init);
  }
  Mode: string = "HandleLine";
  Section: string = "Center";
}
class Matrix_mod_HandlePosMatrixMultiple implements IMatrix_mod_HandlePosMatrixMultiple {
  public constructor(init?: Partial<Matrix_mod_HandlePosMatrixMultiple>) {
    Object.assign(this, init);
  }
  FirstMatrix: string = "Center";
  SecondMatrix: string = "Center";
}
class Matrix_mod_HandlePosType implements IMatrix_mod_HandlePosType {
  public constructor(init?: Partial<Matrix_mod_HandlePosType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HandlestripPos implements IMatrix_mod_HandlestripPos {
  public constructor(init?: Partial<Matrix_mod_HandlestripPos>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HangerColor implements IMatrix_mod_HangerColor {
  public constructor(init?: Partial<Matrix_mod_HangerColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HangerOffsetPosY implements IMatrix_mod_HangerOffsetPosY {
  public constructor(init?: Partial<Matrix_mod_HangerOffsetPosY>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HangerPosX implements IMatrix_mod_HangerPosX {
  public constructor(init?: Partial<Matrix_mod_HangerPosX>) {
    Object.assign(this, init);
  }
  Left: boolean = false;
  Right: boolean = false;
  Middle: boolean = false;
}
class Matrix_mod_HangerPosY implements IMatrix_mod_HangerPosY {
  public constructor(init?: Partial<Matrix_mod_HangerPosY>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HangerType implements IMatrix_mod_HangerType {
  public constructor(init?: Partial<Matrix_mod_HangerType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HardwareColor implements IMatrix_mod_HardwareColor {
  public constructor(init?: Partial<Matrix_mod_HardwareColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HardwareId implements IMatrix_mod_HardwareId {
  public constructor(init?: Partial<Matrix_mod_HardwareId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_Height implements IMatrix_mod_Height {
  public constructor(init?: Partial<Matrix_mod_Height>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HeightLeft implements IMatrix_mod_HeightLeft {
  public constructor(init?: Partial<Matrix_mod_HeightLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HeightPosInsertion implements IMatrix_mod_HeightPosInsertion {
  public constructor(init?: Partial<Matrix_mod_HeightPosInsertion>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HeightRight implements IMatrix_mod_HeightRight {
  public constructor(init?: Partial<Matrix_mod_HeightRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HingeColor implements IMatrix_mod_HingeColor {
  public constructor(init?: Partial<Matrix_mod_HingeColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HingeLogic implements IMatrix_mod_HingeLogic {
  public constructor(init?: Partial<Matrix_mod_HingeLogic>) {
    Object.assign(this, init);
  }
  HingeSelection: string = "Automatic";
  HingePositioning: string = "Manual";
}
class Matrix_mod_HingePos1 implements IMatrix_mod_HingePos1 {
  public constructor(init?: Partial<Matrix_mod_HingePos1>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HingePos2 implements IMatrix_mod_HingePos2 {
  public constructor(init?: Partial<Matrix_mod_HingePos2>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HingePos3 implements IMatrix_mod_HingePos3 {
  public constructor(init?: Partial<Matrix_mod_HingePos3>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HingePos4 implements IMatrix_mod_HingePos4 {
  public constructor(init?: Partial<Matrix_mod_HingePos4>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HingePos5 implements IMatrix_mod_HingePos5 {
  public constructor(init?: Partial<Matrix_mod_HingePos5>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HingePos6 implements IMatrix_mod_HingePos6 {
  public constructor(init?: Partial<Matrix_mod_HingePos6>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HingeType implements IMatrix_mod_HingeType {
  public constructor(init?: Partial<Matrix_mod_HingeType>) {
    Object.assign(this, init);
  }
  DrillingDistanceType: string = "Fixed";
}
class Matrix_mod_HobConstructionId implements IMatrix_mod_HobConstructionId {
  public constructor(init?: Partial<Matrix_mod_HobConstructionId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HobGraphicId implements IMatrix_mod_HobGraphicId {
  public constructor(init?: Partial<Matrix_mod_HobGraphicId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HobHeightBlockedSpace implements IMatrix_mod_HobHeightBlockedSpace {
  public constructor(init?: Partial<Matrix_mod_HobHeightBlockedSpace>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HobId implements IMatrix_mod_HobId {
  public constructor(init?: Partial<Matrix_mod_HobId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HobMoveDepth implements IMatrix_mod_HobMoveDepth {
  public constructor(init?: Partial<Matrix_mod_HobMoveDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HobMoveWidth implements IMatrix_mod_HobMoveWidth {
  public constructor(init?: Partial<Matrix_mod_HobMoveWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HobSupplier implements IMatrix_mod_HobSupplier {
  public constructor(init?: Partial<Matrix_mod_HobSupplier>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HoodId implements IMatrix_mod_HoodId {
  public constructor(init?: Partial<Matrix_mod_HoodId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_HoodSupplier implements IMatrix_mod_HoodSupplier {
  public constructor(init?: Partial<Matrix_mod_HoodSupplier>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_Information implements IMatrix_mod_Information {
  public constructor(init?: Partial<Matrix_mod_Information>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_InteriorEquipmentHinge implements IMatrix_mod_InteriorEquipmentHinge {
  public constructor(init?: Partial<Matrix_mod_InteriorEquipmentHinge>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_IslandBackwallOverdimension implements IMatrix_mod_IslandBackwallOverdimension {
  public constructor(init?: Partial<Matrix_mod_IslandBackwallOverdimension>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_IslandBackwallOverhangFront implements IMatrix_mod_IslandBackwallOverhangFront {
  public constructor(init?: Partial<Matrix_mod_IslandBackwallOverhangFront>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_IslandBackwallWidth implements IMatrix_mod_IslandBackwallWidth {
  public constructor(init?: Partial<Matrix_mod_IslandBackwallWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LastFront implements IMatrix_mod_LastFront {
  public constructor(init?: Partial<Matrix_mod_LastFront>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LastFrontHeight implements IMatrix_mod_LastFrontHeight {
  public constructor(init?: Partial<Matrix_mod_LastFrontHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LastFrontName implements IMatrix_mod_LastFrontName {
  public constructor(init?: Partial<Matrix_mod_LastFrontName>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LaundryMachineId implements IMatrix_mod_LaundryMachineId {
  public constructor(init?: Partial<Matrix_mod_LaundryMachineId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LaundryMachineSupplier implements IMatrix_mod_LaundryMachineSupplier {
  public constructor(init?: Partial<Matrix_mod_LaundryMachineSupplier>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LegInsertion implements IMatrix_mod_LegInsertion {
  public constructor(init?: Partial<Matrix_mod_LegInsertion>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LightPart implements IMatrix_mod_LightPart {
  public constructor(init?: Partial<Matrix_mod_LightPart>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LightPosX implements IMatrix_mod_LightPosX {
  public constructor(init?: Partial<Matrix_mod_LightPosX>) {
    Object.assign(this, init);
  }
  Descriptor?: string;
}
class Matrix_mod_LightPosX1 implements IMatrix_mod_LightPosX1 {
  public constructor(init?: Partial<Matrix_mod_LightPosX1>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LightPosX2 implements IMatrix_mod_LightPosX2 {
  public constructor(init?: Partial<Matrix_mod_LightPosX2>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LightPosX3 implements IMatrix_mod_LightPosX3 {
  public constructor(init?: Partial<Matrix_mod_LightPosX3>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LightPosX4 implements IMatrix_mod_LightPosX4 {
  public constructor(init?: Partial<Matrix_mod_LightPosX4>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LightPosX5 implements IMatrix_mod_LightPosX5 {
  public constructor(init?: Partial<Matrix_mod_LightPosX5>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LightPosY implements IMatrix_mod_LightPosY {
  public constructor(init?: Partial<Matrix_mod_LightPosY>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_LightSystem implements IMatrix_mod_LightSystem {
  public constructor(init?: Partial<Matrix_mod_LightSystem>) {
    Object.assign(this, init);
  }
  Length: number = 0;
  Width: number = 0;
  Radius: number = 0;
  Depth: number = 0;
  EscapeDrill_Offset: number = 0;
  EscapeDrill_Diameter: number = 0;
}
class Matrix_mod_MirrorBoardColor implements IMatrix_mod_MirrorBoardColor {
  public constructor(init?: Partial<Matrix_mod_MirrorBoardColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_MirrorBoardId implements IMatrix_mod_MirrorBoardId {
  public constructor(init?: Partial<Matrix_mod_MirrorBoardId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_MirrorBoardProgram implements IMatrix_mod_MirrorBoardProgram {
  public constructor(init?: Partial<Matrix_mod_MirrorBoardProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_MirrorBoardThickness implements IMatrix_mod_MirrorBoardThickness {
  public constructor(init?: Partial<Matrix_mod_MirrorBoardThickness>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_MirrorColor implements IMatrix_mod_MirrorColor {
  public constructor(init?: Partial<Matrix_mod_MirrorColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_MirrorHeight implements IMatrix_mod_MirrorHeight {
  public constructor(init?: Partial<Matrix_mod_MirrorHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_MirrorPositionHeight implements IMatrix_mod_MirrorPositionHeight {
  public constructor(init?: Partial<Matrix_mod_MirrorPositionHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_MirrorPositionWidth implements IMatrix_mod_MirrorPositionWidth {
  public constructor(init?: Partial<Matrix_mod_MirrorPositionWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_MirrorThickness implements IMatrix_mod_MirrorThickness {
  public constructor(init?: Partial<Matrix_mod_MirrorThickness>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_MirrorWidth implements IMatrix_mod_MirrorWidth {
  public constructor(init?: Partial<Matrix_mod_MirrorWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_MixerId implements IMatrix_mod_MixerId {
  public constructor(init?: Partial<Matrix_mod_MixerId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_MixerSupplier implements IMatrix_mod_MixerSupplier {
  public constructor(init?: Partial<Matrix_mod_MixerSupplier>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_Model implements IMatrix_mod_Model {
  public constructor(init?: Partial<Matrix_mod_Model>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_Model3DGroupName implements IMatrix_mod_Model3DGroupName {
  public constructor(init?: Partial<Matrix_mod_Model3DGroupName>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ModuleName implements IMatrix_mod_ModuleName {
  public constructor(init?: Partial<Matrix_mod_ModuleName>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_MountingPlateType implements IMatrix_mod_MountingPlateType {
  public constructor(init?: Partial<Matrix_mod_MountingPlateType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OpeningType implements IMatrix_mod_OpeningType {
  public constructor(init?: Partial<Matrix_mod_OpeningType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenGap1 implements IMatrix_mod_OvenGap1 {
  public constructor(init?: Partial<Matrix_mod_OvenGap1>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenGap2 implements IMatrix_mod_OvenGap2 {
  public constructor(init?: Partial<Matrix_mod_OvenGap2>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenGap3 implements IMatrix_mod_OvenGap3 {
  public constructor(init?: Partial<Matrix_mod_OvenGap3>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenGap4 implements IMatrix_mod_OvenGap4 {
  public constructor(init?: Partial<Matrix_mod_OvenGap4>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenId implements IMatrix_mod_OvenId {
  public constructor(init?: Partial<Matrix_mod_OvenId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenId1 implements IMatrix_mod_OvenId1 {
  public constructor(init?: Partial<Matrix_mod_OvenId1>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenId2 implements IMatrix_mod_OvenId2 {
  public constructor(init?: Partial<Matrix_mod_OvenId2>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenId3 implements IMatrix_mod_OvenId3 {
  public constructor(init?: Partial<Matrix_mod_OvenId3>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenShelffixedOverhangTop implements IMatrix_mod_OvenShelffixedOverhangTop {
  public constructor(init?: Partial<Matrix_mod_OvenShelffixedOverhangTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenSupplier1 implements IMatrix_mod_OvenSupplier1 {
  public constructor(init?: Partial<Matrix_mod_OvenSupplier1>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenSupplier2 implements IMatrix_mod_OvenSupplier2 {
  public constructor(init?: Partial<Matrix_mod_OvenSupplier2>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_OvenSupplier3 implements IMatrix_mod_OvenSupplier3 {
  public constructor(init?: Partial<Matrix_mod_OvenSupplier3>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PanelId implements IMatrix_mod_PanelId {
  public constructor(init?: Partial<Matrix_mod_PanelId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PanelblindThk implements IMatrix_mod_PanelblindThk {
  public constructor(init?: Partial<Matrix_mod_PanelblindThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopColor implements IMatrix_mod_PaneltopColor {
  public constructor(init?: Partial<Matrix_mod_PaneltopColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_PaneltopConstruction implements IMatrix_mod_PaneltopConstruction {
  public constructor(init?: Partial<Matrix_mod_PaneltopConstruction>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopEdgeBackColor implements IMatrix_mod_PaneltopEdgeBackColor {
  public constructor(init?: Partial<Matrix_mod_PaneltopEdgeBackColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopEdgeFrontColor implements IMatrix_mod_PaneltopEdgeFrontColor {
  public constructor(init?: Partial<Matrix_mod_PaneltopEdgeFrontColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopEdgeLeftColor implements IMatrix_mod_PaneltopEdgeLeftColor {
  public constructor(init?: Partial<Matrix_mod_PaneltopEdgeLeftColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopEdgeRightColor implements IMatrix_mod_PaneltopEdgeRightColor {
  public constructor(init?: Partial<Matrix_mod_PaneltopEdgeRightColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopEdgeVisBack implements IMatrix_mod_PaneltopEdgeVisBack {
  public constructor(init?: Partial<Matrix_mod_PaneltopEdgeVisBack>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopEdgeVisFront implements IMatrix_mod_PaneltopEdgeVisFront {
  public constructor(init?: Partial<Matrix_mod_PaneltopEdgeVisFront>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopEdgeVisLeft implements IMatrix_mod_PaneltopEdgeVisLeft {
  public constructor(init?: Partial<Matrix_mod_PaneltopEdgeVisLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopEdgeVisRight implements IMatrix_mod_PaneltopEdgeVisRight {
  public constructor(init?: Partial<Matrix_mod_PaneltopEdgeVisRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopId implements IMatrix_mod_PaneltopId {
  public constructor(init?: Partial<Matrix_mod_PaneltopId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopOverhangFront implements IMatrix_mod_PaneltopOverhangFront {
  public constructor(init?: Partial<Matrix_mod_PaneltopOverhangFront>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopOversizeBack implements IMatrix_mod_PaneltopOversizeBack {
  public constructor(init?: Partial<Matrix_mod_PaneltopOversizeBack>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PaneltopProgram implements IMatrix_mod_PaneltopProgram {
  public constructor(init?: Partial<Matrix_mod_PaneltopProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_PaneltopThk implements IMatrix_mod_PaneltopThk {
  public constructor(init?: Partial<Matrix_mod_PaneltopThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PantryPulloutColor implements IMatrix_mod_PantryPulloutColor {
  public constructor(init?: Partial<Matrix_mod_PantryPulloutColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PantryPulloutDesign implements IMatrix_mod_PantryPulloutDesign {
  public constructor(init?: Partial<Matrix_mod_PantryPulloutDesign>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PantryPulloutType implements IMatrix_mod_PantryPulloutType {
  public constructor(init?: Partial<Matrix_mod_PantryPulloutType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ParentName implements IMatrix_mod_ParentName {
  public constructor(init?: Partial<Matrix_mod_ParentName>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PartInfo implements IMatrix_mod_PartInfo {
  public constructor(init?: Partial<Matrix_mod_PartInfo>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PartName implements IMatrix_mod_PartName {
  public constructor(init?: Partial<Matrix_mod_PartName>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PartgroupDrawerWeight implements IMatrix_mod_PartgroupDrawerWeight {
  public constructor(init?: Partial<Matrix_mod_PartgroupDrawerWeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PlinthAreaDesign implements IMatrix_mod_PlinthAreaDesign {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaDesign>) {
    Object.assign(this, init);
  }
  PlinthAreaElementColor: string = "Fixed";
  PlinthAreaType: string = "Leg";
  PlinthAreaExtraItem: string = "None";
}
class Matrix_mod_PlinthAreaElementColor implements IMatrix_mod_PlinthAreaElementColor {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaElementColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PlinthAreaExtraItem implements IMatrix_mod_PlinthAreaExtraItem {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaExtraItem>) {
    Object.assign(this, init);
  }
  HeightExtension: number = 0;
}
class Matrix_mod_PlinthAreaHeight implements IMatrix_mod_PlinthAreaHeight {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PlinthAreaPosBackMatrix implements IMatrix_mod_PlinthAreaPosBackMatrix {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaPosBackMatrix>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PlinthAreaPosFrontMatrix implements IMatrix_mod_PlinthAreaPosFrontMatrix {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaPosFrontMatrix>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PlinthAreaPosLeftMatrix implements IMatrix_mod_PlinthAreaPosLeftMatrix {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaPosLeftMatrix>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PlinthAreaPosLogic implements IMatrix_mod_PlinthAreaPosLogic {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaPosLogic>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PlinthAreaPosRightMatrix implements IMatrix_mod_PlinthAreaPosRightMatrix {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaPosRightMatrix>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PlinthAreaVisLeft implements IMatrix_mod_PlinthAreaVisLeft {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaVisLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PlinthAreaVisLeftSelection implements IMatrix_mod_PlinthAreaVisLeftSelection {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaVisLeftSelection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PlinthAreaVisRight implements IMatrix_mod_PlinthAreaVisRight {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaVisRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PlinthAreaVisRightSelection implements IMatrix_mod_PlinthAreaVisRightSelection {
  public constructor(init?: Partial<Matrix_mod_PlinthAreaVisRightSelection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ProcessingId implements IMatrix_mod_ProcessingId {
  public constructor(init?: Partial<Matrix_mod_ProcessingId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ProcessingLibrary implements IMatrix_mod_ProcessingLibrary {
  public constructor(init?: Partial<Matrix_mod_ProcessingLibrary>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_Program implements IMatrix_mod_Program {
  public constructor(init?: Partial<Matrix_mod_Program>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_PulloutConnectionPosition implements IMatrix_mod_PulloutConnectionPosition {
  public constructor(init?: Partial<Matrix_mod_PulloutConnectionPosition>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PulloutDesign implements IMatrix_mod_PulloutDesign {
  public constructor(init?: Partial<Matrix_mod_PulloutDesign>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PulloutElementColor implements IMatrix_mod_PulloutElementColor {
  public constructor(init?: Partial<Matrix_mod_PulloutElementColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PulloutType implements IMatrix_mod_PulloutType {
  public constructor(init?: Partial<Matrix_mod_PulloutType>) {
    Object.assign(this, init);
  }
  PullOutDesign: string = "Fixed";
  PullOutElementColor: string = "Fixed";
  PullOutConnectionPosition: string = "Fixed";
  PushToOpenAvailable: boolean = false;
}
class Matrix_mod_PushtoopenColor implements IMatrix_mod_PushtoopenColor {
  public constructor(init?: Partial<Matrix_mod_PushtoopenColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PushtoopenLine implements IMatrix_mod_PushtoopenLine {
  public constructor(init?: Partial<Matrix_mod_PushtoopenLine>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PushtoopenOffset implements IMatrix_mod_PushtoopenOffset {
  public constructor(init?: Partial<Matrix_mod_PushtoopenOffset>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PushtoopenPosition implements IMatrix_mod_PushtoopenPosition {
  public constructor(init?: Partial<Matrix_mod_PushtoopenPosition>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_PushtoopenType implements IMatrix_mod_PushtoopenType {
  public constructor(init?: Partial<Matrix_mod_PushtoopenType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_RackAreaManualOffsetCarcase implements IMatrix_mod_RackAreaManualOffsetCarcase {
  public constructor(init?: Partial<Matrix_mod_RackAreaManualOffsetCarcase>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_RackAreaOversizeCarcaseType implements IMatrix_mod_RackAreaOversizeCarcaseType {
  public constructor(init?: Partial<Matrix_mod_RackAreaOversizeCarcaseType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_RackAreaShelftopConstruction implements IMatrix_mod_RackAreaShelftopConstruction {
  public constructor(init?: Partial<Matrix_mod_RackAreaShelftopConstruction>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_RackAreaType implements IMatrix_mod_RackAreaType {
  public constructor(init?: Partial<Matrix_mod_RackAreaType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_RailhortopbackThk implements IMatrix_mod_RailhortopbackThk {
  public constructor(init?: Partial<Matrix_mod_RailhortopbackThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_RailhortopfrontThk implements IMatrix_mod_RailhortopfrontThk {
  public constructor(init?: Partial<Matrix_mod_RailhortopfrontThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_RailverttopbackThk implements IMatrix_mod_RailverttopbackThk {
  public constructor(init?: Partial<Matrix_mod_RailverttopbackThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_RailverttopfrontThk implements IMatrix_mod_RailverttopfrontThk {
  public constructor(init?: Partial<Matrix_mod_RailverttopfrontThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_Rotation implements IMatrix_mod_Rotation {
  public constructor(init?: Partial<Matrix_mod_Rotation>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjBackwallDrillDescriptor implements IMatrix_mod_ShelfadjBackwallDrillDescriptor {
  public constructor(init?: Partial<Matrix_mod_ShelfadjBackwallDrillDescriptor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjBackwallProcessingId implements IMatrix_mod_ShelfadjBackwallProcessingId {
  public constructor(init?: Partial<Matrix_mod_ShelfadjBackwallProcessingId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjColor implements IMatrix_mod_ShelfadjColor {
  public constructor(init?: Partial<Matrix_mod_ShelfadjColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_ShelfadjDescriptor implements IMatrix_mod_ShelfadjDescriptor {
  public constructor(init?: Partial<Matrix_mod_ShelfadjDescriptor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjDesign implements IMatrix_mod_ShelfadjDesign {
  public constructor(init?: Partial<Matrix_mod_ShelfadjDesign>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjDrillDistance implements IMatrix_mod_ShelfadjDrillDistance {
  public constructor(init?: Partial<Matrix_mod_ShelfadjDrillDistance>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjDrillType implements IMatrix_mod_ShelfadjDrillType {
  public constructor(init?: Partial<Matrix_mod_ShelfadjDrillType>) {
    Object.assign(this, init);
  }
  NumberDrillings: number = 0;
  ShelfadjQtyRelevant: boolean = false;
}
class Matrix_mod_ShelfadjDrillinglineOffsetBtm implements IMatrix_mod_ShelfadjDrillinglineOffsetBtm {
  public constructor(init?: Partial<Matrix_mod_ShelfadjDrillinglineOffsetBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjDrillinglineOffsetTop implements IMatrix_mod_ShelfadjDrillinglineOffsetTop {
  public constructor(init?: Partial<Matrix_mod_ShelfadjDrillinglineOffsetTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjGroupPositionY implements IMatrix_mod_ShelfadjGroupPositionY {
  public constructor(init?: Partial<Matrix_mod_ShelfadjGroupPositionY>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjOffsetBack implements IMatrix_mod_ShelfadjOffsetBack {
  public constructor(init?: Partial<Matrix_mod_ShelfadjOffsetBack>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjOffsetFront implements IMatrix_mod_ShelfadjOffsetFront {
  public constructor(init?: Partial<Matrix_mod_ShelfadjOffsetFront>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjPartParentName implements IMatrix_mod_ShelfadjPartParentName {
  public constructor(init?: Partial<Matrix_mod_ShelfadjPartParentName>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjPartParentType implements IMatrix_mod_ShelfadjPartParentType {
  public constructor(init?: Partial<Matrix_mod_ShelfadjPartParentType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjSidepanelDrillDescriptor implements IMatrix_mod_ShelfadjSidepanelDrillDescriptor {
  public constructor(init?: Partial<Matrix_mod_ShelfadjSidepanelDrillDescriptor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjSidepanelProcessingBackId implements IMatrix_mod_ShelfadjSidepanelProcessingBackId {
  public constructor(init?: Partial<Matrix_mod_ShelfadjSidepanelProcessingBackId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjSidepanelProcessingFrontId implements IMatrix_mod_ShelfadjSidepanelProcessingFrontId {
  public constructor(init?: Partial<Matrix_mod_ShelfadjSidepanelProcessingFrontId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjSidepanelProcessingMiddleId implements IMatrix_mod_ShelfadjSidepanelProcessingMiddleId {
  public constructor(init?: Partial<Matrix_mod_ShelfadjSidepanelProcessingMiddleId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjThk implements IMatrix_mod_ShelfadjThk {
  public constructor(init?: Partial<Matrix_mod_ShelfadjThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjVertDividerProcessingId implements IMatrix_mod_ShelfadjVertDividerProcessingId {
  public constructor(init?: Partial<Matrix_mod_ShelfadjVertDividerProcessingId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjVertdividerDrillDescriptor implements IMatrix_mod_ShelfadjVertdividerDrillDescriptor {
  public constructor(init?: Partial<Matrix_mod_ShelfadjVertdividerDrillDescriptor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelfadjWoodColor implements IMatrix_mod_ShelfadjWoodColor {
  public constructor(init?: Partial<Matrix_mod_ShelfadjWoodColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_ShelfbtmThk implements IMatrix_mod_ShelfbtmThk {
  public constructor(init?: Partial<Matrix_mod_ShelfbtmThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelffixedBtm implements IMatrix_mod_ShelffixedBtm {
  public constructor(init?: Partial<Matrix_mod_ShelffixedBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelffixedOffsetFront implements IMatrix_mod_ShelffixedOffsetFront {
  public constructor(init?: Partial<Matrix_mod_ShelffixedOffsetFront>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelffixedOversizeBack implements IMatrix_mod_ShelffixedOversizeBack {
  public constructor(init?: Partial<Matrix_mod_ShelffixedOversizeBack>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelffixedOversizeFront implements IMatrix_mod_ShelffixedOversizeFront {
  public constructor(init?: Partial<Matrix_mod_ShelffixedOversizeFront>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelffixedPartParentName implements IMatrix_mod_ShelffixedPartParentName {
  public constructor(init?: Partial<Matrix_mod_ShelffixedPartParentName>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelffixedPartParentType implements IMatrix_mod_ShelffixedPartParentType {
  public constructor(init?: Partial<Matrix_mod_ShelffixedPartParentType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelffixedPos implements IMatrix_mod_ShelffixedPos {
  public constructor(init?: Partial<Matrix_mod_ShelffixedPos>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelffixedThk implements IMatrix_mod_ShelffixedThk {
  public constructor(init?: Partial<Matrix_mod_ShelffixedThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelffixedTop implements IMatrix_mod_ShelffixedTop {
  public constructor(init?: Partial<Matrix_mod_ShelffixedTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelffixedType implements IMatrix_mod_ShelffixedType {
  public constructor(init?: Partial<Matrix_mod_ShelffixedType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelftopConstruction implements IMatrix_mod_ShelftopConstruction {
  public constructor(init?: Partial<Matrix_mod_ShelftopConstruction>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelftopThk implements IMatrix_mod_ShelftopThk {
  public constructor(init?: Partial<Matrix_mod_ShelftopThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelvesBackwallFittingConnection implements IMatrix_mod_ShelvesBackwallFittingConnection {
  public constructor(init?: Partial<Matrix_mod_ShelvesBackwallFittingConnection>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelvesBrackets implements IMatrix_mod_ShelvesBrackets {
  public constructor(init?: Partial<Matrix_mod_ShelvesBrackets>) {
    Object.assign(this, init);
  }
  Supplier?: string;
  SupItemCode?: string;
}
class Matrix_mod_ShelvesBracketsColor implements IMatrix_mod_ShelvesBracketsColor {
  public constructor(init?: Partial<Matrix_mod_ShelvesBracketsColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ShelvesColor implements IMatrix_mod_ShelvesColor {
  public constructor(init?: Partial<Matrix_mod_ShelvesColor>) {
    Object.assign(this, init);
  }
  Grain?: boolean;
}
class Matrix_mod_ShelvesThk implements IMatrix_mod_ShelvesThk {
  public constructor(init?: Partial<Matrix_mod_ShelvesThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SidepanelType implements IMatrix_mod_SidepanelType {
  public constructor(init?: Partial<Matrix_mod_SidepanelType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SidepanelleftThk implements IMatrix_mod_SidepanelleftThk {
  public constructor(init?: Partial<Matrix_mod_SidepanelleftThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SidepanelleftType implements IMatrix_mod_SidepanelleftType {
  public constructor(init?: Partial<Matrix_mod_SidepanelleftType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SidepanelmiddleShortWidth implements IMatrix_mod_SidepanelmiddleShortWidth {
  public constructor(init?: Partial<Matrix_mod_SidepanelmiddleShortWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SidepanelmiddleThk implements IMatrix_mod_SidepanelmiddleThk {
  public constructor(init?: Partial<Matrix_mod_SidepanelmiddleThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SidepanelrightThk implements IMatrix_mod_SidepanelrightThk {
  public constructor(init?: Partial<Matrix_mod_SidepanelrightThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SidepanelrightType implements IMatrix_mod_SidepanelrightType {
  public constructor(init?: Partial<Matrix_mod_SidepanelrightType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SinkConstructionId implements IMatrix_mod_SinkConstructionId {
  public constructor(init?: Partial<Matrix_mod_SinkConstructionId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SinkGraphicId implements IMatrix_mod_SinkGraphicId {
  public constructor(init?: Partial<Matrix_mod_SinkGraphicId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SinkId implements IMatrix_mod_SinkId {
  public constructor(init?: Partial<Matrix_mod_SinkId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SinkMoveDepth implements IMatrix_mod_SinkMoveDepth {
  public constructor(init?: Partial<Matrix_mod_SinkMoveDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SinkMoveWidth implements IMatrix_mod_SinkMoveWidth {
  public constructor(init?: Partial<Matrix_mod_SinkMoveWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SinkSupplier implements IMatrix_mod_SinkSupplier {
  public constructor(init?: Partial<Matrix_mod_SinkSupplier>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SlopeAngle implements IMatrix_mod_SlopeAngle {
  public constructor(init?: Partial<Matrix_mod_SlopeAngle>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SlopedCeilingConstruction implements IMatrix_mod_SlopedCeilingConstruction {
  public constructor(init?: Partial<Matrix_mod_SlopedCeilingConstruction>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SlopedCeilingDimensionLogic implements IMatrix_mod_SlopedCeilingDimensionLogic {
  public constructor(init?: Partial<Matrix_mod_SlopedCeilingDimensionLogic>) {
    Object.assign(this, init);
  }
  UseWallData: boolean = true;
  Height: string = "Max";
  DimensionLogic: string = "BasedInTopDepth";
}
class Matrix_mod_Supplier implements IMatrix_mod_Supplier {
  public constructor(init?: Partial<Matrix_mod_Supplier>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_SupplierNumber implements IMatrix_mod_SupplierNumber {
  public constructor(init?: Partial<Matrix_mod_SupplierNumber>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_Thk implements IMatrix_mod_Thk {
  public constructor(init?: Partial<Matrix_mod_Thk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ThkLeft implements IMatrix_mod_ThkLeft {
  public constructor(init?: Partial<Matrix_mod_ThkLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ThkRight implements IMatrix_mod_ThkRight {
  public constructor(init?: Partial<Matrix_mod_ThkRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ToekickColor implements IMatrix_mod_ToekickColor {
  public constructor(init?: Partial<Matrix_mod_ToekickColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_ToekickConnectionOverhang implements IMatrix_mod_ToekickConnectionOverhang {
  public constructor(init?: Partial<Matrix_mod_ToekickConnectionOverhang>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ToekickConnectionSequence implements IMatrix_mod_ToekickConnectionSequence {
  public constructor(init?: Partial<Matrix_mod_ToekickConnectionSequence>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ToekickHeight implements IMatrix_mod_ToekickHeight {
  public constructor(init?: Partial<Matrix_mod_ToekickHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ToekickId implements IMatrix_mod_ToekickId {
  public constructor(init?: Partial<Matrix_mod_ToekickId>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ToekickLength implements IMatrix_mod_ToekickLength {
  public constructor(init?: Partial<Matrix_mod_ToekickLength>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ToekickProgram implements IMatrix_mod_ToekickProgram {
  public constructor(init?: Partial<Matrix_mod_ToekickProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_ToekickReductionTop implements IMatrix_mod_ToekickReductionTop {
  public constructor(init?: Partial<Matrix_mod_ToekickReductionTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ToekickSidepanelOverdimensionBtm implements IMatrix_mod_ToekickSidepanelOverdimensionBtm {
  public constructor(init?: Partial<Matrix_mod_ToekickSidepanelOverdimensionBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ToekickSidepanelTransitionType implements IMatrix_mod_ToekickSidepanelTransitionType {
  public constructor(init?: Partial<Matrix_mod_ToekickSidepanelTransitionType>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_ToekickThk implements IMatrix_mod_ToekickThk {
  public constructor(init?: Partial<Matrix_mod_ToekickThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_TopDepth implements IMatrix_mod_TopDepth {
  public constructor(init?: Partial<Matrix_mod_TopDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_TotalDepth implements IMatrix_mod_TotalDepth {
  public constructor(init?: Partial<Matrix_mod_TotalDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_TotalDimLeft implements IMatrix_mod_TotalDimLeft {
  public constructor(init?: Partial<Matrix_mod_TotalDimLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_TotalDimRight implements IMatrix_mod_TotalDimRight {
  public constructor(init?: Partial<Matrix_mod_TotalDimRight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_TotalWidth implements IMatrix_mod_TotalWidth {
  public constructor(init?: Partial<Matrix_mod_TotalWidth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_TypeElement implements IMatrix_mod_TypeElement {
  public constructor(init?: Partial<Matrix_mod_TypeElement>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_UprightColor implements IMatrix_mod_UprightColor {
  public constructor(init?: Partial<Matrix_mod_UprightColor>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "NoGrain";
}
class Matrix_mod_UprightConstruction implements IMatrix_mod_UprightConstruction {
  public constructor(init?: Partial<Matrix_mod_UprightConstruction>) {
    Object.assign(this, init);
  }
  IncludeFloorProfile: boolean = true;
}
class Matrix_mod_UprightDepth implements IMatrix_mod_UprightDepth {
  public constructor(init?: Partial<Matrix_mod_UprightDepth>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_UprightFloorProfileColor implements IMatrix_mod_UprightFloorProfileColor {
  public constructor(init?: Partial<Matrix_mod_UprightFloorProfileColor>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_UprightHeight implements IMatrix_mod_UprightHeight {
  public constructor(init?: Partial<Matrix_mod_UprightHeight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_UprightOverdimensionBtm implements IMatrix_mod_UprightOverdimensionBtm {
  public constructor(init?: Partial<Matrix_mod_UprightOverdimensionBtm>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_UprightOverdimensionTop implements IMatrix_mod_UprightOverdimensionTop {
  public constructor(init?: Partial<Matrix_mod_UprightOverdimensionTop>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_UprightOverhang implements IMatrix_mod_UprightOverhang {
  public constructor(init?: Partial<Matrix_mod_UprightOverhang>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_UprightProgram implements IMatrix_mod_UprightProgram {
  public constructor(init?: Partial<Matrix_mod_UprightProgram>) {
    Object.assign(this, init);
  }
  GrainGroupId: string = "Neutral";
}
class Matrix_mod_UprightSide implements IMatrix_mod_UprightSide {
  public constructor(init?: Partial<Matrix_mod_UprightSide>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_UprightThk implements IMatrix_mod_UprightThk {
  public constructor(init?: Partial<Matrix_mod_UprightThk>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_VertDividerPosition implements IMatrix_mod_VertDividerPosition {
  public constructor(init?: Partial<Matrix_mod_VertDividerPosition>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_VertDividerType implements IMatrix_mod_VertDividerType {
  public constructor(init?: Partial<Matrix_mod_VertDividerType>) {
    Object.assign(this, init);
  }
  IncludeDivider: boolean = false;
  IncludeDustStrip: boolean = false;
}
class Matrix_mod_Weight implements IMatrix_mod_Weight {
  public constructor(init?: Partial<Matrix_mod_Weight>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_Width implements IMatrix_mod_Width {
  public constructor(init?: Partial<Matrix_mod_Width>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_WidthBlind implements IMatrix_mod_WidthBlind {
  public constructor(init?: Partial<Matrix_mod_WidthBlind>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_WidthLeft implements IMatrix_mod_WidthLeft {
  public constructor(init?: Partial<Matrix_mod_WidthLeft>) {
    Object.assign(this, init);
  }
}
class Matrix_mod_WidthRight implements IMatrix_mod_WidthRight {
  public constructor(init?: Partial<Matrix_mod_WidthRight>) {
    Object.assign(this, init);
  }
}
export class SelectionEntryBase_number {
  constructor(value?: number, min?: number, max?: number, step?: number) {
    this.value = value;
    this.min = min;
    this.max = max;
    this.step = step;
  }
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  epsilon: number = 0.000001;
}
export class SelectionEntryBase_string {
  constructor(value?: string) {
    this.value = value;
  }
  value?: string;
}
export class SelectionEntry_mod_BacksplashColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_BacksplashColor: SelectionEntry_mod_BacksplashColor[] = [
  new SelectionEntry_mod_BacksplashColor("240"),
  new SelectionEntry_mod_BacksplashColor("230"),
  new SelectionEntry_mod_BacksplashColor("229"),
  new SelectionEntry_mod_BacksplashColor("222"),
  new SelectionEntry_mod_BacksplashColor("215"),
  new SelectionEntry_mod_BacksplashColor("214"),
  new SelectionEntry_mod_BacksplashColor("199"),
  new SelectionEntry_mod_BacksplashColor("190"),
  new SelectionEntry_mod_BacksplashColor("165"),
  new SelectionEntry_mod_BacksplashColor("160"),
  new SelectionEntry_mod_BacksplashColor("155"),
  new SelectionEntry_mod_BacksplashColor("152"),
  new SelectionEntry_mod_BacksplashColor("326"),
  new SelectionEntry_mod_BacksplashColor("316"),
  new SelectionEntry_mod_BacksplashColor("324"),
  new SelectionEntry_mod_BacksplashColor("380"),
  new SelectionEntry_mod_BacksplashColor("178"),
];
function selections_mod_BacksplashColor_find(value: string): SelectionEntry_mod_BacksplashColor | undefined {
  var sel = selections_mod_BacksplashColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BacksplashColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_BaseboardColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_BaseboardColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_BaseboardColor;
}

var selections_mod_BaseboardColor: SelectionEntry_mod_BaseboardColor[] = [
  new SelectionEntry_mod_BaseboardColor("316", new Matrix_mod_BaseboardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BaseboardColor("326", new Matrix_mod_BaseboardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BaseboardColor("152", new Matrix_mod_BaseboardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BaseboardColor("155", new Matrix_mod_BaseboardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BaseboardColor("160", new Matrix_mod_BaseboardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BaseboardColor("165", new Matrix_mod_BaseboardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BaseboardColor("190", new Matrix_mod_BaseboardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BaseboardColor("199", new Matrix_mod_BaseboardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BaseboardColor("214", new Matrix_mod_BaseboardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BaseboardColor("324", new Matrix_mod_BaseboardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BaseboardColor("215", new Matrix_mod_BaseboardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BaseboardColor("229", new Matrix_mod_BaseboardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BaseboardColor("230", new Matrix_mod_BaseboardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BaseboardColor("240", new Matrix_mod_BaseboardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BaseboardColor("222", new Matrix_mod_BaseboardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BaseboardColor("380", new Matrix_mod_BaseboardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BaseboardColor("178", new Matrix_mod_BaseboardColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_BaseboardColor_find(value: string): SelectionEntry_mod_BaseboardColor | undefined {
  var sel = selections_mod_BaseboardColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BaseboardColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_BaseboardDepthLogic extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_BaseboardDepthLogic: SelectionEntry_mod_BaseboardDepthLogic[] = [
  new SelectionEntry_mod_BaseboardDepthLogic("FollowsMaxDepth"),
  new SelectionEntry_mod_BaseboardDepthLogic("FollowsMinDepth"),
];
function selections_mod_BaseboardDepthLogic_find(value: string): SelectionEntry_mod_BaseboardDepthLogic | undefined {
  var sel = selections_mod_BaseboardDepthLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BaseboardDepthLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_BaseboardEdgeBackColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_BaseboardEdgeBackColor: SelectionEntry_mod_BaseboardEdgeBackColor[] = [
  new SelectionEntry_mod_BaseboardEdgeBackColor("316"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("326"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("152"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("155"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("160"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("165"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("190"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("199"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("214"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("324"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("215"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("229"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("230"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("240"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("222"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("380"),
  new SelectionEntry_mod_BaseboardEdgeBackColor("178"),
];
function selections_mod_BaseboardEdgeBackColor_find(value: string): SelectionEntry_mod_BaseboardEdgeBackColor | undefined {
  var sel = selections_mod_BaseboardEdgeBackColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BaseboardEdgeBackColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_BaseboardEdgeColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_BaseboardEdgeColor: SelectionEntry_mod_BaseboardEdgeColor[] = [
  new SelectionEntry_mod_BaseboardEdgeColor("316"),
  new SelectionEntry_mod_BaseboardEdgeColor("326"),
  new SelectionEntry_mod_BaseboardEdgeColor("152"),
  new SelectionEntry_mod_BaseboardEdgeColor("155"),
  new SelectionEntry_mod_BaseboardEdgeColor("160"),
  new SelectionEntry_mod_BaseboardEdgeColor("165"),
  new SelectionEntry_mod_BaseboardEdgeColor("190"),
  new SelectionEntry_mod_BaseboardEdgeColor("199"),
  new SelectionEntry_mod_BaseboardEdgeColor("214"),
  new SelectionEntry_mod_BaseboardEdgeColor("324"),
  new SelectionEntry_mod_BaseboardEdgeColor("215"),
  new SelectionEntry_mod_BaseboardEdgeColor("229"),
  new SelectionEntry_mod_BaseboardEdgeColor("230"),
  new SelectionEntry_mod_BaseboardEdgeColor("240"),
  new SelectionEntry_mod_BaseboardEdgeColor("222"),
  new SelectionEntry_mod_BaseboardEdgeColor("380"),
  new SelectionEntry_mod_BaseboardEdgeColor("178"),
];
function selections_mod_BaseboardEdgeColor_find(value: string): SelectionEntry_mod_BaseboardEdgeColor | undefined {
  var sel = selections_mod_BaseboardEdgeColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BaseboardEdgeColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_BaseboardEdgeFrontColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_BaseboardEdgeFrontColor: SelectionEntry_mod_BaseboardEdgeFrontColor[] = [
  new SelectionEntry_mod_BaseboardEdgeFrontColor("316"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("326"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("152"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("155"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("160"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("165"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("190"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("199"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("214"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("324"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("215"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("229"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("230"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("240"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("222"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("380"),
  new SelectionEntry_mod_BaseboardEdgeFrontColor("178"),
];
function selections_mod_BaseboardEdgeFrontColor_find(value: string): SelectionEntry_mod_BaseboardEdgeFrontColor | undefined {
  var sel = selections_mod_BaseboardEdgeFrontColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BaseboardEdgeFrontColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_BaseboardProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_BaseboardProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_BaseboardProgram;
}

var selections_mod_BaseboardProgram: SelectionEntry_mod_BaseboardProgram[] = [
  new SelectionEntry_mod_BaseboardProgram("ModernNature", new Matrix_mod_BaseboardProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_BaseboardProgram("Nature", new Matrix_mod_BaseboardProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_BaseboardProgram("Classic", new Matrix_mod_BaseboardProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_BaseboardProgram_find(value: string): SelectionEntry_mod_BaseboardProgram | undefined {
  var sel = selections_mod_BaseboardProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BaseboardProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_BaseboardSplitLogic extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_BaseboardSplitLogic: SelectionEntry_mod_BaseboardSplitLogic[] = [
  new SelectionEntry_mod_BaseboardSplitLogic("BetweenCabinets"),
  new SelectionEntry_mod_BaseboardSplitLogic("EqualDimension"),
];
function selections_mod_BaseboardSplitLogic_find(value: string): SelectionEntry_mod_BaseboardSplitLogic | undefined {
  var sel = selections_mod_BaseboardSplitLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BaseboardSplitLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_BaseunitFridgeId extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_BaseunitFridgeId: SelectionEntry_mod_BaseunitFridgeId[] = [
  new SelectionEntry_mod_BaseunitFridgeId("KU21WAHG0"),
  new SelectionEntry_mod_BaseunitFridgeId("KU20WVHF0"),
  new SelectionEntry_mod_BaseunitFridgeId("KU21RADE0"),
];
function selections_mod_BaseunitFridgeId_find(value: string): SelectionEntry_mod_BaseunitFridgeId | undefined {
  var sel = selections_mod_BaseunitFridgeId.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BaseunitFridgeId'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_BaseunitFridgeSupplier extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_BaseunitFridgeSupplier: SelectionEntry_mod_BaseunitFridgeSupplier[] = [
  new SelectionEntry_mod_BaseunitFridgeSupplier("Siemens"),
  new SelectionEntry_mod_BaseunitFridgeSupplier("None"),
];
function selections_mod_BaseunitFridgeSupplier_find(value: string): SelectionEntry_mod_BaseunitFridgeSupplier | undefined {
  var sel = selections_mod_BaseunitFridgeSupplier.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BaseunitFridgeSupplier'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_BoardShelfColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_BoardShelfColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_BoardShelfColor;
}

var selections_mod_BoardShelfColor: SelectionEntry_mod_BoardShelfColor[] = [
  new SelectionEntry_mod_BoardShelfColor("316", new Matrix_mod_BoardShelfColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BoardShelfColor("326", new Matrix_mod_BoardShelfColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BoardShelfColor("152", new Matrix_mod_BoardShelfColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BoardShelfColor("155", new Matrix_mod_BoardShelfColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BoardShelfColor("160", new Matrix_mod_BoardShelfColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BoardShelfColor("165", new Matrix_mod_BoardShelfColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BoardShelfColor("190", new Matrix_mod_BoardShelfColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BoardShelfColor("199", new Matrix_mod_BoardShelfColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_BoardShelfColor("214", new Matrix_mod_BoardShelfColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BoardShelfColor("324", new Matrix_mod_BoardShelfColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BoardShelfColor("215", new Matrix_mod_BoardShelfColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BoardShelfColor("229", new Matrix_mod_BoardShelfColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BoardShelfColor("230", new Matrix_mod_BoardShelfColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BoardShelfColor("240", new Matrix_mod_BoardShelfColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BoardShelfColor("222", new Matrix_mod_BoardShelfColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BoardShelfColor("380", new Matrix_mod_BoardShelfColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_BoardShelfColor("178", new Matrix_mod_BoardShelfColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_BoardShelfColor_find(value: string): SelectionEntry_mod_BoardShelfColor | undefined {
  var sel = selections_mod_BoardShelfColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BoardShelfColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_BoardShelfProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_BoardShelfProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_BoardShelfProgram;
}

var selections_mod_BoardShelfProgram: SelectionEntry_mod_BoardShelfProgram[] = [
  new SelectionEntry_mod_BoardShelfProgram("ModernNature", new Matrix_mod_BoardShelfProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_BoardShelfProgram("Nature", new Matrix_mod_BoardShelfProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_BoardShelfProgram("Classic", new Matrix_mod_BoardShelfProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_BoardShelfProgram_find(value: string): SelectionEntry_mod_BoardShelfProgram | undefined {
  var sel = selections_mod_BoardShelfProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_BoardShelfProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseBackwallColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CarcaseBackwallColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CarcaseBackwallColor;
}

var selections_mod_CarcaseBackwallColor: SelectionEntry_mod_CarcaseBackwallColor[] = [
  new SelectionEntry_mod_CarcaseBackwallColor("316", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("326", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("152", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("155", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("160", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("165", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("190", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("199", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("214", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("324", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("215", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("229", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("230", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("240", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("222", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("380", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseBackwallColor("178", new Matrix_mod_CarcaseBackwallColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_CarcaseBackwallColor_find(value: string): SelectionEntry_mod_CarcaseBackwallColor | undefined {
  var sel = selections_mod_CarcaseBackwallColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseBackwallColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseBackwallConstruction extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseBackwallConstruction: SelectionEntry_mod_CarcaseBackwallConstruction[] = [
  new SelectionEntry_mod_CarcaseBackwallConstruction("Grooved_LBRT"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Grooved_LRT"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Grooved_LBR"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Grooved_LR"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("NoBackwall"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Grooved_LBRF"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Inlayed_LBRF"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Rebated_LBRT"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Rebated_LRT"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Rebated_LBR"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Rebated_LR"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Inlayed_LBRT"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Removable"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Overlayed"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Inlayed_T"),
  new SelectionEntry_mod_CarcaseBackwallConstruction("Inlayed_LR"),
];
function selections_mod_CarcaseBackwallConstruction_find(value: string): SelectionEntry_mod_CarcaseBackwallConstruction | undefined {
  var sel = selections_mod_CarcaseBackwallConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseBackwallConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseBackwallProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CarcaseBackwallProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CarcaseBackwallProgram;
}

var selections_mod_CarcaseBackwallProgram: SelectionEntry_mod_CarcaseBackwallProgram[] = [
  new SelectionEntry_mod_CarcaseBackwallProgram("ModernNature", new Matrix_mod_CarcaseBackwallProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_CarcaseBackwallProgram("Nature", new Matrix_mod_CarcaseBackwallProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_CarcaseBackwallProgram("Classic", new Matrix_mod_CarcaseBackwallProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_CarcaseBackwallProgram_find(value: string): SelectionEntry_mod_CarcaseBackwallProgram | undefined {
  var sel = selections_mod_CarcaseBackwallProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseBackwallProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CarcaseColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CarcaseColor;
}

var selections_mod_CarcaseColor: SelectionEntry_mod_CarcaseColor[] = [
  new SelectionEntry_mod_CarcaseColor("316", new Matrix_mod_CarcaseColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseColor("326", new Matrix_mod_CarcaseColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseColor("152", new Matrix_mod_CarcaseColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseColor("155", new Matrix_mod_CarcaseColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseColor("160", new Matrix_mod_CarcaseColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseColor("165", new Matrix_mod_CarcaseColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseColor("190", new Matrix_mod_CarcaseColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseColor("199", new Matrix_mod_CarcaseColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseColor("214", new Matrix_mod_CarcaseColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseColor("324", new Matrix_mod_CarcaseColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseColor("215", new Matrix_mod_CarcaseColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseColor("229", new Matrix_mod_CarcaseColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseColor("230", new Matrix_mod_CarcaseColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseColor("240", new Matrix_mod_CarcaseColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseColor("222", new Matrix_mod_CarcaseColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseColor("380", new Matrix_mod_CarcaseColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseColor("178", new Matrix_mod_CarcaseColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_CarcaseColor_find(value: string): SelectionEntry_mod_CarcaseColor | undefined {
  var sel = selections_mod_CarcaseColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseConnectionLeftBtm extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseConnectionLeftBtm: SelectionEntry_mod_CarcaseConnectionLeftBtm[] = [
  new SelectionEntry_mod_CarcaseConnectionLeftBtm("SideCShelf"),
  new SelectionEntry_mod_CarcaseConnectionLeftBtm("ShelfCSide"),
  new SelectionEntry_mod_CarcaseConnectionLeftBtm("MitreCut"),
];
function selections_mod_CarcaseConnectionLeftBtm_find(value: string): SelectionEntry_mod_CarcaseConnectionLeftBtm | undefined {
  var sel = selections_mod_CarcaseConnectionLeftBtm.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseConnectionLeftBtm'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseConnectionLeftTop extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseConnectionLeftTop: SelectionEntry_mod_CarcaseConnectionLeftTop[] = [
  new SelectionEntry_mod_CarcaseConnectionLeftTop("SideCShelf"),
  new SelectionEntry_mod_CarcaseConnectionLeftTop("ShelfCSide"),
  new SelectionEntry_mod_CarcaseConnectionLeftTop("MitreCut"),
];
function selections_mod_CarcaseConnectionLeftTop_find(value: string): SelectionEntry_mod_CarcaseConnectionLeftTop | undefined {
  var sel = selections_mod_CarcaseConnectionLeftTop.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseConnectionLeftTop'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseConnectionRightBtm extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseConnectionRightBtm: SelectionEntry_mod_CarcaseConnectionRightBtm[] = [
  new SelectionEntry_mod_CarcaseConnectionRightBtm("SideCShelf"),
  new SelectionEntry_mod_CarcaseConnectionRightBtm("ShelfCSide"),
  new SelectionEntry_mod_CarcaseConnectionRightBtm("MitreCut"),
];
function selections_mod_CarcaseConnectionRightBtm_find(value: string): SelectionEntry_mod_CarcaseConnectionRightBtm | undefined {
  var sel = selections_mod_CarcaseConnectionRightBtm.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseConnectionRightBtm'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseConnectionRightTop extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseConnectionRightTop: SelectionEntry_mod_CarcaseConnectionRightTop[] = [
  new SelectionEntry_mod_CarcaseConnectionRightTop("SideCShelf"),
  new SelectionEntry_mod_CarcaseConnectionRightTop("ShelfCSide"),
  new SelectionEntry_mod_CarcaseConnectionRightTop("MitreCut"),
];
function selections_mod_CarcaseConnectionRightTop_find(value: string): SelectionEntry_mod_CarcaseConnectionRightTop | undefined {
  var sel = selections_mod_CarcaseConnectionRightTop.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseConnectionRightTop'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseDirection extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseDirection: SelectionEntry_mod_CarcaseDirection[] = [
  new SelectionEntry_mod_CarcaseDirection("Left"),
  new SelectionEntry_mod_CarcaseDirection("Right"),
];
function selections_mod_CarcaseDirection_find(value: string): SelectionEntry_mod_CarcaseDirection | undefined {
  var sel = selections_mod_CarcaseDirection.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseDirection'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseEdgeBackColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseEdgeBackColor: SelectionEntry_mod_CarcaseEdgeBackColor[] = [
  new SelectionEntry_mod_CarcaseEdgeBackColor("316"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("326"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("152"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("155"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("160"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("165"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("190"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("199"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("214"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("324"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("215"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("229"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("230"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("240"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("222"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("380"),
  new SelectionEntry_mod_CarcaseEdgeBackColor("178"),
];
function selections_mod_CarcaseEdgeBackColor_find(value: string): SelectionEntry_mod_CarcaseEdgeBackColor | undefined {
  var sel = selections_mod_CarcaseEdgeBackColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseEdgeBackColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseEdgeColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseEdgeColor: SelectionEntry_mod_CarcaseEdgeColor[] = [
  new SelectionEntry_mod_CarcaseEdgeColor("316"),
  new SelectionEntry_mod_CarcaseEdgeColor("326"),
  new SelectionEntry_mod_CarcaseEdgeColor("152"),
  new SelectionEntry_mod_CarcaseEdgeColor("155"),
  new SelectionEntry_mod_CarcaseEdgeColor("160"),
  new SelectionEntry_mod_CarcaseEdgeColor("165"),
  new SelectionEntry_mod_CarcaseEdgeColor("190"),
  new SelectionEntry_mod_CarcaseEdgeColor("199"),
  new SelectionEntry_mod_CarcaseEdgeColor("214"),
  new SelectionEntry_mod_CarcaseEdgeColor("324"),
  new SelectionEntry_mod_CarcaseEdgeColor("215"),
  new SelectionEntry_mod_CarcaseEdgeColor("229"),
  new SelectionEntry_mod_CarcaseEdgeColor("230"),
  new SelectionEntry_mod_CarcaseEdgeColor("240"),
  new SelectionEntry_mod_CarcaseEdgeColor("222"),
  new SelectionEntry_mod_CarcaseEdgeColor("380"),
  new SelectionEntry_mod_CarcaseEdgeColor("178"),
];
function selections_mod_CarcaseEdgeColor_find(value: string): SelectionEntry_mod_CarcaseEdgeColor | undefined {
  var sel = selections_mod_CarcaseEdgeColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseEdgeColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseEdgeFrontColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseEdgeFrontColor: SelectionEntry_mod_CarcaseEdgeFrontColor[] = [
  new SelectionEntry_mod_CarcaseEdgeFrontColor("316"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("326"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("152"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("155"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("160"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("165"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("190"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("199"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("214"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("324"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("215"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("229"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("230"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("240"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("222"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("380"),
  new SelectionEntry_mod_CarcaseEdgeFrontColor("178"),
];
function selections_mod_CarcaseEdgeFrontColor_find(value: string): SelectionEntry_mod_CarcaseEdgeFrontColor | undefined {
  var sel = selections_mod_CarcaseEdgeFrontColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseEdgeFrontColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseFrontConstruction extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CarcaseFrontConstruction) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CarcaseFrontConstruction;
}

var selections_mod_CarcaseFrontConstruction: SelectionEntry_mod_CarcaseFrontConstruction[] = [
  new SelectionEntry_mod_CarcaseFrontConstruction("FrontOverlayLBRT", new Matrix_mod_CarcaseFrontConstruction({ Left: "Overlayed", Top: "Overlayed", Right: "Overlayed", Bottom: "Overlayed" })),
  new SelectionEntry_mod_CarcaseFrontConstruction("FrontInlayLBRT", new Matrix_mod_CarcaseFrontConstruction({ Left: "Inlayed", Top: "Inlayed", Right: "Inlayed", Bottom: "Inlayed" })),
];
function selections_mod_CarcaseFrontConstruction_find(value: string): SelectionEntry_mod_CarcaseFrontConstruction | undefined {
  var sel = selections_mod_CarcaseFrontConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseFrontConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseOutsideColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CarcaseOutsideColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CarcaseOutsideColor;
}

var selections_mod_CarcaseOutsideColor: SelectionEntry_mod_CarcaseOutsideColor[] = [
  new SelectionEntry_mod_CarcaseOutsideColor("316", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("326", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("152", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("155", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("160", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("165", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("190", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("199", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("214", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("324", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("215", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("229", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("230", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("240", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("222", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("380", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CarcaseOutsideColor("178", new Matrix_mod_CarcaseOutsideColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_CarcaseOutsideColor_find(value: string): SelectionEntry_mod_CarcaseOutsideColor | undefined {
  var sel = selections_mod_CarcaseOutsideColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseOutsideColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseOutsideProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CarcaseOutsideProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CarcaseOutsideProgram;
}

var selections_mod_CarcaseOutsideProgram: SelectionEntry_mod_CarcaseOutsideProgram[] = [
  new SelectionEntry_mod_CarcaseOutsideProgram("ModernNature", new Matrix_mod_CarcaseOutsideProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_CarcaseOutsideProgram("Nature", new Matrix_mod_CarcaseOutsideProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_CarcaseOutsideProgram("Classic", new Matrix_mod_CarcaseOutsideProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_CarcaseOutsideProgram_find(value: string): SelectionEntry_mod_CarcaseOutsideProgram | undefined {
  var sel = selections_mod_CarcaseOutsideProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseOutsideProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseOverdimensionBackLogic extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseOverdimensionBackLogic: SelectionEntry_mod_CarcaseOverdimensionBackLogic[] = [
  new SelectionEntry_mod_CarcaseOverdimensionBackLogic("WallClosureIfVisible"),
  new SelectionEntry_mod_CarcaseOverdimensionBackLogic("NoOverdimensionAllowed"),
];
function selections_mod_CarcaseOverdimensionBackLogic_find(value: string): SelectionEntry_mod_CarcaseOverdimensionBackLogic | undefined {
  var sel = selections_mod_CarcaseOverdimensionBackLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseOverdimensionBackLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcasePartConnectionBackHor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcasePartConnectionBackHor: SelectionEntry_mod_CarcasePartConnectionBackHor[] = [
  new SelectionEntry_mod_CarcasePartConnectionBackHor("BackwallCShelf"),
];
function selections_mod_CarcasePartConnectionBackHor_find(value: string): SelectionEntry_mod_CarcasePartConnectionBackHor | undefined {
  var sel = selections_mod_CarcasePartConnectionBackHor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcasePartConnectionBackHor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcasePartConnectionBackVert extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcasePartConnectionBackVert: SelectionEntry_mod_CarcasePartConnectionBackVert[] = [
  new SelectionEntry_mod_CarcasePartConnectionBackVert("BackwallCSide"),
];
function selections_mod_CarcasePartConnectionBackVert_find(value: string): SelectionEntry_mod_CarcasePartConnectionBackVert | undefined {
  var sel = selections_mod_CarcasePartConnectionBackVert.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcasePartConnectionBackVert'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcasePartConnectionBtmVert extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcasePartConnectionBtmVert: SelectionEntry_mod_CarcasePartConnectionBtmVert[] = [
  new SelectionEntry_mod_CarcasePartConnectionBtmVert("ShelfCSide"),
];
function selections_mod_CarcasePartConnectionBtmVert_find(value: string): SelectionEntry_mod_CarcasePartConnectionBtmVert | undefined {
  var sel = selections_mod_CarcasePartConnectionBtmVert.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcasePartConnectionBtmVert'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcasePartConnectionLeftHor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcasePartConnectionLeftHor: SelectionEntry_mod_CarcasePartConnectionLeftHor[] = [
  new SelectionEntry_mod_CarcasePartConnectionLeftHor("SideCShelf"),
];
function selections_mod_CarcasePartConnectionLeftHor_find(value: string): SelectionEntry_mod_CarcasePartConnectionLeftHor | undefined {
  var sel = selections_mod_CarcasePartConnectionLeftHor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcasePartConnectionLeftHor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcasePartConnectionRightHor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcasePartConnectionRightHor: SelectionEntry_mod_CarcasePartConnectionRightHor[] = [
  new SelectionEntry_mod_CarcasePartConnectionRightHor("SideCShelf"),
];
function selections_mod_CarcasePartConnectionRightHor_find(value: string): SelectionEntry_mod_CarcasePartConnectionRightHor | undefined {
  var sel = selections_mod_CarcasePartConnectionRightHor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcasePartConnectionRightHor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcasePartConnectionTopVert extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcasePartConnectionTopVert: SelectionEntry_mod_CarcasePartConnectionTopVert[] = [
  new SelectionEntry_mod_CarcasePartConnectionTopVert("ShelfCSide"),
];
function selections_mod_CarcasePartConnectionTopVert_find(value: string): SelectionEntry_mod_CarcasePartConnectionTopVert | undefined {
  var sel = selections_mod_CarcasePartConnectionTopVert.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcasePartConnectionTopVert'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CarcaseProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CarcaseProgram;
}

var selections_mod_CarcaseProgram: SelectionEntry_mod_CarcaseProgram[] = [
  new SelectionEntry_mod_CarcaseProgram("ModernNature", new Matrix_mod_CarcaseProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_CarcaseProgram("Nature", new Matrix_mod_CarcaseProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_CarcaseProgram("Classic", new Matrix_mod_CarcaseProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_CarcaseProgram_find(value: string): SelectionEntry_mod_CarcaseProgram | undefined {
  var sel = selections_mod_CarcaseProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseShelfbtmConstruction extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseShelfbtmConstruction: SelectionEntry_mod_CarcaseShelfbtmConstruction[] = [
  new SelectionEntry_mod_CarcaseShelfbtmConstruction("ShelfBtm"),
  new SelectionEntry_mod_CarcaseShelfbtmConstruction("ShelfBtmHandleRail"),
  new SelectionEntry_mod_CarcaseShelfbtmConstruction("ShelfBtmAddLightBoard"),
  new SelectionEntry_mod_CarcaseShelfbtmConstruction("NoShelfBtm"),
];
function selections_mod_CarcaseShelfbtmConstruction_find(value: string): SelectionEntry_mod_CarcaseShelfbtmConstruction | undefined {
  var sel = selections_mod_CarcaseShelfbtmConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseShelfbtmConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseShelftopConstruction extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseShelftopConstruction: SelectionEntry_mod_CarcaseShelftopConstruction[] = [
  new SelectionEntry_mod_CarcaseShelftopConstruction("ShelfTop"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("RailTopFrontBackHorizontal"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("RailTopFrontHorizontal"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("RailTopBackHorizontal"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("RailTopFrontBackVertical"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("RailTopFrontVertical"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("RailTopBackVertical"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("RailTopFrontHorBackVer"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("RailTopFrontVerBackHor"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("RailTopFixedFrontBracket"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("HobUnitFixedBracket"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("HobUnitFixedRail"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("HobUnitRemovable"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("SlopedCeilingShelfTop"),
  new SelectionEntry_mod_CarcaseShelftopConstruction("NoShelfTop"),
];
function selections_mod_CarcaseShelftopConstruction_find(value: string): SelectionEntry_mod_CarcaseShelftopConstruction | undefined {
  var sel = selections_mod_CarcaseShelftopConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseShelftopConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseVisLeftSelection extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseVisLeftSelection: SelectionEntry_mod_CarcaseVisLeftSelection[] = [
  new SelectionEntry_mod_CarcaseVisLeftSelection("Automatic"),
  new SelectionEntry_mod_CarcaseVisLeftSelection("Visible"),
  new SelectionEntry_mod_CarcaseVisLeftSelection("NotVisible"),
];
function selections_mod_CarcaseVisLeftSelection_find(value: string): SelectionEntry_mod_CarcaseVisLeftSelection | undefined {
  var sel = selections_mod_CarcaseVisLeftSelection.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseVisLeftSelection'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CarcaseVisRightSelection extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CarcaseVisRightSelection: SelectionEntry_mod_CarcaseVisRightSelection[] = [
  new SelectionEntry_mod_CarcaseVisRightSelection("Automatic"),
  new SelectionEntry_mod_CarcaseVisRightSelection("Visible"),
  new SelectionEntry_mod_CarcaseVisRightSelection("NotVisible"),
];
function selections_mod_CarcaseVisRightSelection_find(value: string): SelectionEntry_mod_CarcaseVisRightSelection | undefined {
  var sel = selections_mod_CarcaseVisRightSelection.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CarcaseVisRightSelection'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CeilingAreaVisLeftSelection extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CeilingAreaVisLeftSelection: SelectionEntry_mod_CeilingAreaVisLeftSelection[] = [
  new SelectionEntry_mod_CeilingAreaVisLeftSelection("Automatic"),
  new SelectionEntry_mod_CeilingAreaVisLeftSelection("Visible"),
  new SelectionEntry_mod_CeilingAreaVisLeftSelection("NotVisible"),
];
function selections_mod_CeilingAreaVisLeftSelection_find(value: string): SelectionEntry_mod_CeilingAreaVisLeftSelection | undefined {
  var sel = selections_mod_CeilingAreaVisLeftSelection.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CeilingAreaVisLeftSelection'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CeilingAreaVisRightSelection extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CeilingAreaVisRightSelection: SelectionEntry_mod_CeilingAreaVisRightSelection[] = [
  new SelectionEntry_mod_CeilingAreaVisRightSelection("Automatic"),
  new SelectionEntry_mod_CeilingAreaVisRightSelection("Visible"),
  new SelectionEntry_mod_CeilingAreaVisRightSelection("NotVisible"),
];
function selections_mod_CeilingAreaVisRightSelection_find(value: string): SelectionEntry_mod_CeilingAreaVisRightSelection | undefined {
  var sel = selections_mod_CeilingAreaVisRightSelection.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CeilingAreaVisRightSelection'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CeilingFillerColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CeilingFillerColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CeilingFillerColor;
}

var selections_mod_CeilingFillerColor: SelectionEntry_mod_CeilingFillerColor[] = [
  new SelectionEntry_mod_CeilingFillerColor("316", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CeilingFillerColor("326", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CeilingFillerColor("152", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CeilingFillerColor("155", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CeilingFillerColor("160", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CeilingFillerColor("165", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CeilingFillerColor("190", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CeilingFillerColor("199", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CeilingFillerColor("214", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CeilingFillerColor("324", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CeilingFillerColor("215", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CeilingFillerColor("229", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CeilingFillerColor("230", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CeilingFillerColor("240", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CeilingFillerColor("222", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CeilingFillerColor("380", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CeilingFillerColor("178", new Matrix_mod_CeilingFillerColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_CeilingFillerColor_find(value: string): SelectionEntry_mod_CeilingFillerColor | undefined {
  var sel = selections_mod_CeilingFillerColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CeilingFillerColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CeilingFillerConstruction extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CeilingFillerConstruction: SelectionEntry_mod_CeilingFillerConstruction[] = [
  new SelectionEntry_mod_CeilingFillerConstruction("Construction1"),
  new SelectionEntry_mod_CeilingFillerConstruction("Construction2"),
];
function selections_mod_CeilingFillerConstruction_find(value: string): SelectionEntry_mod_CeilingFillerConstruction | undefined {
  var sel = selections_mod_CeilingFillerConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CeilingFillerConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CeilingFillerEdgeBackColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CeilingFillerEdgeBackColor: SelectionEntry_mod_CeilingFillerEdgeBackColor[] = [
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("316"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("326"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("152"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("155"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("160"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("165"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("190"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("199"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("214"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("324"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("215"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("229"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("230"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("240"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("222"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("380"),
  new SelectionEntry_mod_CeilingFillerEdgeBackColor("178"),
];
function selections_mod_CeilingFillerEdgeBackColor_find(value: string): SelectionEntry_mod_CeilingFillerEdgeBackColor | undefined {
  var sel = selections_mod_CeilingFillerEdgeBackColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CeilingFillerEdgeBackColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CeilingFillerEdgeFrontColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CeilingFillerEdgeFrontColor: SelectionEntry_mod_CeilingFillerEdgeFrontColor[] = [
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("316"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("326"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("152"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("155"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("160"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("165"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("190"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("199"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("214"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("324"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("215"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("229"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("230"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("240"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("222"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("380"),
  new SelectionEntry_mod_CeilingFillerEdgeFrontColor("178"),
];
function selections_mod_CeilingFillerEdgeFrontColor_find(value: string): SelectionEntry_mod_CeilingFillerEdgeFrontColor | undefined {
  var sel = selections_mod_CeilingFillerEdgeFrontColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CeilingFillerEdgeFrontColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CeilingFillerEdgeLeftColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CeilingFillerEdgeLeftColor: SelectionEntry_mod_CeilingFillerEdgeLeftColor[] = [
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("316"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("326"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("152"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("155"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("160"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("165"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("190"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("199"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("214"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("324"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("215"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("229"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("230"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("240"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("222"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("380"),
  new SelectionEntry_mod_CeilingFillerEdgeLeftColor("178"),
];
function selections_mod_CeilingFillerEdgeLeftColor_find(value: string): SelectionEntry_mod_CeilingFillerEdgeLeftColor | undefined {
  var sel = selections_mod_CeilingFillerEdgeLeftColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CeilingFillerEdgeLeftColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CeilingFillerEdgeRightColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CeilingFillerEdgeRightColor: SelectionEntry_mod_CeilingFillerEdgeRightColor[] = [
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("316"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("326"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("152"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("155"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("160"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("165"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("190"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("199"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("214"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("324"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("215"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("229"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("230"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("240"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("222"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("380"),
  new SelectionEntry_mod_CeilingFillerEdgeRightColor("178"),
];
function selections_mod_CeilingFillerEdgeRightColor_find(value: string): SelectionEntry_mod_CeilingFillerEdgeRightColor | undefined {
  var sel = selections_mod_CeilingFillerEdgeRightColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CeilingFillerEdgeRightColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CeilingFillerProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CeilingFillerProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CeilingFillerProgram;
}

var selections_mod_CeilingFillerProgram: SelectionEntry_mod_CeilingFillerProgram[] = [
  new SelectionEntry_mod_CeilingFillerProgram("Classic", new Matrix_mod_CeilingFillerProgram({ GrainGroupId: "Neutral" })),
  new SelectionEntry_mod_CeilingFillerProgram("Nature", new Matrix_mod_CeilingFillerProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_CeilingFillerProgram("Tradition", new Matrix_mod_CeilingFillerProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_CeilingFillerProgram("Modern", new Matrix_mod_CeilingFillerProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_CeilingFillerProgram("Tuscan", new Matrix_mod_CeilingFillerProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_CeilingFillerProgram_find(value: string): SelectionEntry_mod_CeilingFillerProgram | undefined {
  var sel = selections_mod_CeilingFillerProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CeilingFillerProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CeilingFillerTransitionType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CeilingFillerTransitionType: SelectionEntry_mod_CeilingFillerTransitionType[] = [
  new SelectionEntry_mod_CeilingFillerTransitionType("FrontLong"),
  new SelectionEntry_mod_CeilingFillerTransitionType("FrontShort"),
];
function selections_mod_CeilingFillerTransitionType_find(value: string): SelectionEntry_mod_CeilingFillerTransitionType | undefined {
  var sel = selections_mod_CeilingFillerTransitionType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CeilingFillerTransitionType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ClothingOrganizerBoardColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_ClothingOrganizerBoardColor: SelectionEntry_mod_ClothingOrganizerBoardColor[] = [
  new SelectionEntry_mod_ClothingOrganizerBoardColor("LikeCarcaseColor"),
  new SelectionEntry_mod_ClothingOrganizerBoardColor("CloudyBlue"),
  new SelectionEntry_mod_ClothingOrganizerBoardColor("LikeHardwareColor"),
];
function selections_mod_ClothingOrganizerBoardColor_find(value: string): SelectionEntry_mod_ClothingOrganizerBoardColor | undefined {
  var sel = selections_mod_ClothingOrganizerBoardColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ClothingOrganizerBoardColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ClothingOrganizerColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_ClothingOrganizerColor: SelectionEntry_mod_ClothingOrganizerColor[] = [
  new SelectionEntry_mod_ClothingOrganizerColor("Silver"),
  new SelectionEntry_mod_ClothingOrganizerColor("Black"),
  new SelectionEntry_mod_ClothingOrganizerColor("Automatic"),
];
function selections_mod_ClothingOrganizerColor_find(value: string): SelectionEntry_mod_ClothingOrganizerColor | undefined {
  var sel = selections_mod_ClothingOrganizerColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ClothingOrganizerColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ClothingOrganizerConnectionPosition extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_ClothingOrganizerConnectionPosition: SelectionEntry_mod_ClothingOrganizerConnectionPosition[] = [
  new SelectionEntry_mod_ClothingOrganizerConnectionPosition("Right"),
  new SelectionEntry_mod_ClothingOrganizerConnectionPosition("Left"),
  new SelectionEntry_mod_ClothingOrganizerConnectionPosition("Left&Right"),
  new SelectionEntry_mod_ClothingOrganizerConnectionPosition("Top"),
];
function selections_mod_ClothingOrganizerConnectionPosition_find(value: string): SelectionEntry_mod_ClothingOrganizerConnectionPosition | undefined {
  var sel = selections_mod_ClothingOrganizerConnectionPosition.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ClothingOrganizerConnectionPosition'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ClothingOrganizerDesign extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_ClothingOrganizerDesign) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_ClothingOrganizerDesign;
}

var selections_mod_ClothingOrganizerDesign: SelectionEntry_mod_ClothingOrganizerDesign[] = [
  new SelectionEntry_mod_ClothingOrganizerDesign("CONERO", new Matrix_mod_ClothingOrganizerDesign({ Board: false })),
  new SelectionEntry_mod_ClothingOrganizerDesign("CONEROTOP", new Matrix_mod_ClothingOrganizerDesign({ Board: true })),
  new SelectionEntry_mod_ClothingOrganizerDesign("SideRail", new Matrix_mod_ClothingOrganizerDesign({ Board: false })),
  new SelectionEntry_mod_ClothingOrganizerDesign("ShelfRail", new Matrix_mod_ClothingOrganizerDesign({ Board: false })),
  new SelectionEntry_mod_ClothingOrganizerDesign("CONERO BASIC TROUSERS", new Matrix_mod_ClothingOrganizerDesign({ Board: false })),
  new SelectionEntry_mod_ClothingOrganizerDesign("CONERO BASIC TROUSERS SMALL", new Matrix_mod_ClothingOrganizerDesign({ Board: false })),
];
function selections_mod_ClothingOrganizerDesign_find(value: string): SelectionEntry_mod_ClothingOrganizerDesign | undefined {
  var sel = selections_mod_ClothingOrganizerDesign.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ClothingOrganizerDesign'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ClothingOrganizerType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_ClothingOrganizerType: SelectionEntry_mod_ClothingOrganizerType[] = [
  new SelectionEntry_mod_ClothingOrganizerType("LiftRail"),
  new SelectionEntry_mod_ClothingOrganizerType("LiftRailShelf"),
  new SelectionEntry_mod_ClothingOrganizerType("SimpleRail"),
  new SelectionEntry_mod_ClothingOrganizerType("Functional1Side"),
  new SelectionEntry_mod_ClothingOrganizerType("Functional2Side"),
];
function selections_mod_ClothingOrganizerType_find(value: string): SelectionEntry_mod_ClothingOrganizerType | undefined {
  var sel = selections_mod_ClothingOrganizerType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ClothingOrganizerType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CoatBoardColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CoatBoardColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CoatBoardColor;
}

var selections_mod_CoatBoardColor: SelectionEntry_mod_CoatBoardColor[] = [
  new SelectionEntry_mod_CoatBoardColor("316", new Matrix_mod_CoatBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CoatBoardColor("326", new Matrix_mod_CoatBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CoatBoardColor("152", new Matrix_mod_CoatBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CoatBoardColor("155", new Matrix_mod_CoatBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CoatBoardColor("160", new Matrix_mod_CoatBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CoatBoardColor("165", new Matrix_mod_CoatBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CoatBoardColor("190", new Matrix_mod_CoatBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CoatBoardColor("199", new Matrix_mod_CoatBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CoatBoardColor("214", new Matrix_mod_CoatBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CoatBoardColor("324", new Matrix_mod_CoatBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CoatBoardColor("215", new Matrix_mod_CoatBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CoatBoardColor("229", new Matrix_mod_CoatBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CoatBoardColor("230", new Matrix_mod_CoatBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CoatBoardColor("240", new Matrix_mod_CoatBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CoatBoardColor("222", new Matrix_mod_CoatBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CoatBoardColor("380", new Matrix_mod_CoatBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CoatBoardColor("178", new Matrix_mod_CoatBoardColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_CoatBoardColor_find(value: string): SelectionEntry_mod_CoatBoardColor | undefined {
  var sel = selections_mod_CoatBoardColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CoatBoardColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CoatBoardProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CoatBoardProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CoatBoardProgram;
}

var selections_mod_CoatBoardProgram: SelectionEntry_mod_CoatBoardProgram[] = [
  new SelectionEntry_mod_CoatBoardProgram("ModernNature", new Matrix_mod_CoatBoardProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_CoatBoardProgram("Nature", new Matrix_mod_CoatBoardProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_CoatBoardProgram("Classic", new Matrix_mod_CoatBoardProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_CoatBoardProgram_find(value: string): SelectionEntry_mod_CoatBoardProgram | undefined {
  var sel = selections_mod_CoatBoardProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CoatBoardProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_Color extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_Color: SelectionEntry_mod_Color[] = [
  new SelectionEntry_mod_Color("316"),
  new SelectionEntry_mod_Color("326"),
  new SelectionEntry_mod_Color("152"),
  new SelectionEntry_mod_Color("155"),
  new SelectionEntry_mod_Color("160"),
  new SelectionEntry_mod_Color("165"),
  new SelectionEntry_mod_Color("190"),
  new SelectionEntry_mod_Color("199"),
  new SelectionEntry_mod_Color("214"),
  new SelectionEntry_mod_Color("324"),
  new SelectionEntry_mod_Color("215"),
  new SelectionEntry_mod_Color("229"),
  new SelectionEntry_mod_Color("230"),
  new SelectionEntry_mod_Color("240"),
  new SelectionEntry_mod_Color("222"),
  new SelectionEntry_mod_Color("380"),
  new SelectionEntry_mod_Color("178"),
];
function selections_mod_Color_find(value: string): SelectionEntry_mod_Color | undefined {
  var sel = selections_mod_Color.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_Color'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CornerunitDimensionLogic extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CornerunitDimensionLogic: SelectionEntry_mod_CornerunitDimensionLogic[] = [
  new SelectionEntry_mod_CornerunitDimensionLogic("BasedInWallDistance"),
  new SelectionEntry_mod_CornerunitDimensionLogic("BasedInFrontDimension"),
];
function selections_mod_CornerunitDimensionLogic_find(value: string): SelectionEntry_mod_CornerunitDimensionLogic | undefined {
  var sel = selections_mod_CornerunitDimensionLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CornerunitDimensionLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CornerunitStraightConstruction extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CornerunitStraightConstruction) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CornerunitStraightConstruction;
}

var selections_mod_CornerunitStraightConstruction: SelectionEntry_mod_CornerunitStraightConstruction[] = [
  new SelectionEntry_mod_CornerunitStraightConstruction("Construction01", new Matrix_mod_CornerunitStraightConstruction({ ContructionType: "Construction01", IncludePanelblind: true, IncludeMiddleSideShort: true })),
  new SelectionEntry_mod_CornerunitStraightConstruction("Construction02", new Matrix_mod_CornerunitStraightConstruction({ ContructionType: "Construction02", IncludePanelblind: true, IncludeMiddleSideShort: true })),
  new SelectionEntry_mod_CornerunitStraightConstruction("Construction03", new Matrix_mod_CornerunitStraightConstruction({ ContructionType: "Construction03", IncludePanelblind: true, IncludeMiddleSideShort: false })),
  new SelectionEntry_mod_CornerunitStraightConstruction("Construction04", new Matrix_mod_CornerunitStraightConstruction({ ContructionType: "Construction04", IncludePanelblind: true, IncludeMiddleSideShort: true })),
  new SelectionEntry_mod_CornerunitStraightConstruction("Construction05", new Matrix_mod_CornerunitStraightConstruction({ ContructionType: "Construction05", IncludePanelblind: true, IncludeMiddleSideShort: true })),
];
function selections_mod_CornerunitStraightConstruction_find(value: string): SelectionEntry_mod_CornerunitStraightConstruction | undefined {
  var sel = selections_mod_CornerunitStraightConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CornerunitStraightConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CornerunitStraightDimensionLogic extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CornerunitStraightDimensionLogic: SelectionEntry_mod_CornerunitStraightDimensionLogic[] = [
  new SelectionEntry_mod_CornerunitStraightDimensionLogic("Standard"),
];
function selections_mod_CornerunitStraightDimensionLogic_find(value: string): SelectionEntry_mod_CornerunitStraightDimensionLogic | undefined {
  var sel = selections_mod_CornerunitStraightDimensionLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CornerunitStraightDimensionLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CornerunitStraightFillerConstruction extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CornerunitStraightFillerConstruction) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CornerunitStraightFillerConstruction;
}

var selections_mod_CornerunitStraightFillerConstruction: SelectionEntry_mod_CornerunitStraightFillerConstruction[] = [
  new SelectionEntry_mod_CornerunitStraightFillerConstruction("Construction01", new Matrix_mod_CornerunitStraightFillerConstruction({ PartInCornerCabinet: "Mitre" })),
  new SelectionEntry_mod_CornerunitStraightFillerConstruction("Construction02", new Matrix_mod_CornerunitStraightFillerConstruction({ PartInCornerCabinet: "Short" })),
  new SelectionEntry_mod_CornerunitStraightFillerConstruction("Construction03", new Matrix_mod_CornerunitStraightFillerConstruction({ PartInCornerCabinet: "Long" })),
];
function selections_mod_CornerunitStraightFillerConstruction_find(value: string): SelectionEntry_mod_CornerunitStraightFillerConstruction | undefined {
  var sel = selections_mod_CornerunitStraightFillerConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CornerunitStraightFillerConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CountertopColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CountertopColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CountertopColor;
}

var selections_mod_CountertopColor: SelectionEntry_mod_CountertopColor[] = [
  new SelectionEntry_mod_CountertopColor("316", new Matrix_mod_CountertopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CountertopColor("326", new Matrix_mod_CountertopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CountertopColor("152", new Matrix_mod_CountertopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CountertopColor("155", new Matrix_mod_CountertopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CountertopColor("160", new Matrix_mod_CountertopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CountertopColor("165", new Matrix_mod_CountertopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CountertopColor("190", new Matrix_mod_CountertopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CountertopColor("199", new Matrix_mod_CountertopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_CountertopColor("214", new Matrix_mod_CountertopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CountertopColor("324", new Matrix_mod_CountertopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CountertopColor("215", new Matrix_mod_CountertopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CountertopColor("229", new Matrix_mod_CountertopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CountertopColor("230", new Matrix_mod_CountertopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CountertopColor("240", new Matrix_mod_CountertopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CountertopColor("222", new Matrix_mod_CountertopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CountertopColor("380", new Matrix_mod_CountertopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_CountertopColor("178", new Matrix_mod_CountertopColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_CountertopColor_find(value: string): SelectionEntry_mod_CountertopColor | undefined {
  var sel = selections_mod_CountertopColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CountertopColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CountertopEdgeBackType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CountertopEdgeBackType: SelectionEntry_mod_CountertopEdgeBackType[] = [
  new SelectionEntry_mod_CountertopEdgeBackType("Straight"),
  new SelectionEntry_mod_CountertopEdgeBackType("BullNose"),
  new SelectionEntry_mod_CountertopEdgeBackType("HalfBullnose"),
  new SelectionEntry_mod_CountertopEdgeBackType("NoEdge"),
];
function selections_mod_CountertopEdgeBackType_find(value: string): SelectionEntry_mod_CountertopEdgeBackType | undefined {
  var sel = selections_mod_CountertopEdgeBackType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CountertopEdgeBackType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CountertopEdgeFrontType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CountertopEdgeFrontType: SelectionEntry_mod_CountertopEdgeFrontType[] = [
  new SelectionEntry_mod_CountertopEdgeFrontType("Straight"),
  new SelectionEntry_mod_CountertopEdgeFrontType("BullNose"),
  new SelectionEntry_mod_CountertopEdgeFrontType("HalfBullnose"),
  new SelectionEntry_mod_CountertopEdgeFrontType("NoEdge"),
];
function selections_mod_CountertopEdgeFrontType_find(value: string): SelectionEntry_mod_CountertopEdgeFrontType | undefined {
  var sel = selections_mod_CountertopEdgeFrontType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CountertopEdgeFrontType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CountertopEdgeLeftType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CountertopEdgeLeftType: SelectionEntry_mod_CountertopEdgeLeftType[] = [
  new SelectionEntry_mod_CountertopEdgeLeftType("Straight"),
  new SelectionEntry_mod_CountertopEdgeLeftType("NoEdge"),
];
function selections_mod_CountertopEdgeLeftType_find(value: string): SelectionEntry_mod_CountertopEdgeLeftType | undefined {
  var sel = selections_mod_CountertopEdgeLeftType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CountertopEdgeLeftType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CountertopEdgeRightType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CountertopEdgeRightType: SelectionEntry_mod_CountertopEdgeRightType[] = [
  new SelectionEntry_mod_CountertopEdgeRightType("Straight"),
  new SelectionEntry_mod_CountertopEdgeRightType("NoEdge"),
];
function selections_mod_CountertopEdgeRightType_find(value: string): SelectionEntry_mod_CountertopEdgeRightType | undefined {
  var sel = selections_mod_CountertopEdgeRightType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CountertopEdgeRightType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CountertopLeftEndType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CountertopLeftEndType: SelectionEntry_mod_CountertopLeftEndType[] = [
  new SelectionEntry_mod_CountertopLeftEndType("StraightFinished"),
  new SelectionEntry_mod_CountertopLeftEndType("Mitre"),
  new SelectionEntry_mod_CountertopLeftEndType("Tongue"),
  new SelectionEntry_mod_CountertopLeftEndType("Groove"),
  new SelectionEntry_mod_CountertopLeftEndType("StraightUnfinished"),
];
function selections_mod_CountertopLeftEndType_find(value: string): SelectionEntry_mod_CountertopLeftEndType | undefined {
  var sel = selections_mod_CountertopLeftEndType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CountertopLeftEndType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CountertopProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_CountertopProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_CountertopProgram;
}

var selections_mod_CountertopProgram: SelectionEntry_mod_CountertopProgram[] = [
  new SelectionEntry_mod_CountertopProgram("Style", new Matrix_mod_CountertopProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_CountertopProgram("Cube", new Matrix_mod_CountertopProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_CountertopProgram_find(value: string): SelectionEntry_mod_CountertopProgram | undefined {
  var sel = selections_mod_CountertopProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CountertopProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CountertopRightEndType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_CountertopRightEndType: SelectionEntry_mod_CountertopRightEndType[] = [
  new SelectionEntry_mod_CountertopRightEndType("StraightFinished"),
  new SelectionEntry_mod_CountertopRightEndType("Mitre"),
  new SelectionEntry_mod_CountertopRightEndType("Tongue"),
  new SelectionEntry_mod_CountertopRightEndType("Groove"),
  new SelectionEntry_mod_CountertopRightEndType("StraightUnfinished"),
];
function selections_mod_CountertopRightEndType_find(value: string): SelectionEntry_mod_CountertopRightEndType | undefined {
  var sel = selections_mod_CountertopRightEndType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CountertopRightEndType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_CountertopThk extends SelectionEntryBase_number {
  constructor(value?: number, min?: number, max?: number, step?: number
  ) {
    super(value, min, max, step);
  }
}

var selections_mod_CountertopThk: SelectionEntry_mod_CountertopThk[] = [
  new SelectionEntry_mod_CountertopThk(19, undefined, undefined, undefined),
  new SelectionEntry_mod_CountertopThk(25, undefined, undefined, undefined),
  new SelectionEntry_mod_CountertopThk(40, undefined, undefined, undefined),
];
function selections_mod_CountertopThk_find(value: number): SelectionEntry_mod_CountertopThk | undefined {
  var sel = selections_mod_CountertopThk.find(p => findNumberEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_CountertopThk'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_Direction extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_Direction: SelectionEntry_mod_Direction[] = [
  new SelectionEntry_mod_Direction("Left"),
  new SelectionEntry_mod_Direction("Right"),
  new SelectionEntry_mod_Direction("Top"),
  new SelectionEntry_mod_Direction("Bottom"),
  new SelectionEntry_mod_Direction("Front"),
  new SelectionEntry_mod_Direction("Back"),
];
function selections_mod_Direction_find(value: string): SelectionEntry_mod_Direction | undefined {
  var sel = selections_mod_Direction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_Direction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DishwasherId extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DishwasherId: SelectionEntry_mod_DishwasherId[] = [
  new SelectionEntry_mod_DishwasherId("SN55ZS07CE"),
  new SelectionEntry_mod_DishwasherId("SN87TX02CE"),
  new SelectionEntry_mod_DishwasherId("SR55ZS10ME"),
  new SelectionEntry_mod_DishwasherId("SR65YX08ME"),
  new SelectionEntry_mod_DishwasherId("None"),
];
function selections_mod_DishwasherId_find(value: string): SelectionEntry_mod_DishwasherId | undefined {
  var sel = selections_mod_DishwasherId.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DishwasherId'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DishwasherSupplier extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DishwasherSupplier: SelectionEntry_mod_DishwasherSupplier[] = [
  new SelectionEntry_mod_DishwasherSupplier("Siemens"),
  new SelectionEntry_mod_DishwasherSupplier("None"),
];
function selections_mod_DishwasherSupplier_find(value: string): SelectionEntry_mod_DishwasherSupplier | undefined {
  var sel = selections_mod_DishwasherSupplier.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DishwasherSupplier'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DoorDirection extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DoorDirection: SelectionEntry_mod_DoorDirection[] = [
  new SelectionEntry_mod_DoorDirection("Left"),
  new SelectionEntry_mod_DoorDirection("Right"),
  new SelectionEntry_mod_DoorDirection("LeftRight"),
  new SelectionEntry_mod_DoorDirection("LeftLeft"),
  new SelectionEntry_mod_DoorDirection("RightRight"),
];
function selections_mod_DoorDirection_find(value: string): SelectionEntry_mod_DoorDirection | undefined {
  var sel = selections_mod_DoorDirection.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DoorDirection'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DoorDirectionSelection extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DoorDirectionSelection: SelectionEntry_mod_DoorDirectionSelection[] = [
  new SelectionEntry_mod_DoorDirectionSelection("Left"),
  new SelectionEntry_mod_DoorDirectionSelection("Right"),
  new SelectionEntry_mod_DoorDirectionSelection("LeftRight"),
  new SelectionEntry_mod_DoorDirectionSelection("LeftLeft"),
  new SelectionEntry_mod_DoorDirectionSelection("RightRight"),
  new SelectionEntry_mod_DoorDirectionSelection("Automatic"),
];
function selections_mod_DoorDirectionSelection_find(value: string): SelectionEntry_mod_DoorDirectionSelection | undefined {
  var sel = selections_mod_DoorDirectionSelection.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DoorDirectionSelection'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DoorType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DoorType: SelectionEntry_mod_DoorType[] = [
  new SelectionEntry_mod_DoorType("Single"),
  new SelectionEntry_mod_DoorType("Double"),
];
function selections_mod_DoorType_find(value: string): SelectionEntry_mod_DoorType | undefined {
  var sel = selections_mod_DoorType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DoorType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DoorTypeSelection extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DoorTypeSelection: SelectionEntry_mod_DoorTypeSelection[] = [
  new SelectionEntry_mod_DoorTypeSelection("Single"),
  new SelectionEntry_mod_DoorTypeSelection("Double"),
  new SelectionEntry_mod_DoorTypeSelection("Automatic"),
];
function selections_mod_DoorTypeSelection_find(value: string): SelectionEntry_mod_DoorTypeSelection | undefined {
  var sel = selections_mod_DoorTypeSelection.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DoorTypeSelection'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DrawerBoxColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DrawerBoxColor: SelectionEntry_mod_DrawerBoxColor[] = [
  new SelectionEntry_mod_DrawerBoxColor("Inox"),
  new SelectionEntry_mod_DrawerBoxColor("Orion"),
  new SelectionEntry_mod_DrawerBoxColor("White"),
  new SelectionEntry_mod_DrawerBoxColor("Terra"),
  new SelectionEntry_mod_DrawerBoxColor("Automatic"),
];
function selections_mod_DrawerBoxColor_find(value: string): SelectionEntry_mod_DrawerBoxColor | undefined {
  var sel = selections_mod_DrawerBoxColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DrawerBoxColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DrawerBoxDepthType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DrawerBoxDepthType: SelectionEntry_mod_DrawerBoxDepthType[] = [
  new SelectionEntry_mod_DrawerBoxDepthType("270"),
  new SelectionEntry_mod_DrawerBoxDepthType("300"),
  new SelectionEntry_mod_DrawerBoxDepthType("350"),
  new SelectionEntry_mod_DrawerBoxDepthType("400"),
  new SelectionEntry_mod_DrawerBoxDepthType("450"),
  new SelectionEntry_mod_DrawerBoxDepthType("500"),
  new SelectionEntry_mod_DrawerBoxDepthType("550"),
  new SelectionEntry_mod_DrawerBoxDepthType("600"),
  new SelectionEntry_mod_DrawerBoxDepthType("650"),
  new SelectionEntry_mod_DrawerBoxDepthType("Automatic"),
];
function selections_mod_DrawerBoxDepthType_find(value: string): SelectionEntry_mod_DrawerBoxDepthType | undefined {
  var sel = selections_mod_DrawerBoxDepthType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DrawerBoxDepthType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DrawerBoxDesign extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_DrawerBoxDesign) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_DrawerBoxDesign;
}

var selections_mod_DrawerBoxDesign: SelectionEntry_mod_DrawerBoxDesign[] = [
  new SelectionEntry_mod_DrawerBoxDesign("Legrabox", new Matrix_mod_DrawerBoxDesign({ DrawerBoxType: "DrawerBox" })),
  new SelectionEntry_mod_DrawerBoxDesign("Actros", new Matrix_mod_DrawerBoxDesign({ DrawerBoxType: "DrawerBox" })),
];
function selections_mod_DrawerBoxDesign_find(value: string): SelectionEntry_mod_DrawerBoxDesign | undefined {
  var sel = selections_mod_DrawerBoxDesign.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DrawerBoxDesign'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DrawerBoxHeightType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DrawerBoxHeightType: SelectionEntry_mod_DrawerBoxHeightType[] = [
  new SelectionEntry_mod_DrawerBoxHeightType("N"),
  new SelectionEntry_mod_DrawerBoxHeightType("M"),
  new SelectionEntry_mod_DrawerBoxHeightType("C"),
  new SelectionEntry_mod_DrawerBoxHeightType("K"),
  new SelectionEntry_mod_DrawerBoxHeightType("F"),
  new SelectionEntry_mod_DrawerBoxHeightType("Automatic"),
];
function selections_mod_DrawerBoxHeightType_find(value: string): SelectionEntry_mod_DrawerBoxHeightType | undefined {
  var sel = selections_mod_DrawerBoxHeightType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DrawerBoxHeightType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DrawerBoxLogic extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DrawerBoxLogic: SelectionEntry_mod_DrawerBoxLogic[] = [
  new SelectionEntry_mod_DrawerBoxLogic("Library"),
  new SelectionEntry_mod_DrawerBoxLogic("Custom"),
];
function selections_mod_DrawerBoxLogic_find(value: string): SelectionEntry_mod_DrawerBoxLogic | undefined {
  var sel = selections_mod_DrawerBoxLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DrawerBoxLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DrawerBoxProgram extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DrawerBoxProgram: SelectionEntry_mod_DrawerBoxProgram[] = [
  new SelectionEntry_mod_DrawerBoxProgram("Pure"),
  new SelectionEntry_mod_DrawerBoxProgram("Free"),
];
function selections_mod_DrawerBoxProgram_find(value: string): SelectionEntry_mod_DrawerBoxProgram | undefined {
  var sel = selections_mod_DrawerBoxProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DrawerBoxProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DrawerBoxWeightType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DrawerBoxWeightType: SelectionEntry_mod_DrawerBoxWeightType[] = [
  new SelectionEntry_mod_DrawerBoxWeightType("Standard"),
  new SelectionEntry_mod_DrawerBoxWeightType("Heavy"),
  new SelectionEntry_mod_DrawerBoxWeightType("Automatic"),
];
function selections_mod_DrawerBoxWeightType_find(value: string): SelectionEntry_mod_DrawerBoxWeightType | undefined {
  var sel = selections_mod_DrawerBoxWeightType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DrawerBoxWeightType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_DrawerType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_DrawerType: SelectionEntry_mod_DrawerType[] = [
  new SelectionEntry_mod_DrawerType("Single"),
  new SelectionEntry_mod_DrawerType("Double"),
];
function selections_mod_DrawerType_find(value: string): SelectionEntry_mod_DrawerType | undefined {
  var sel = selections_mod_DrawerType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_DrawerType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_EdgeBackType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_EdgeBackType: SelectionEntry_mod_EdgeBackType[] = [
  new SelectionEntry_mod_EdgeBackType("CBE"),
  new SelectionEntry_mod_EdgeBackType("CFE"),
  new SelectionEntry_mod_EdgeBackType("CLR"),
  new SelectionEntry_mod_EdgeBackType("DOW"),
  new SelectionEntry_mod_EdgeBackType("FHS"),
  new SelectionEntry_mod_EdgeBackType("FRE"),
  new SelectionEntry_mod_EdgeBackType("ICN"),
  new SelectionEntry_mod_EdgeBackType("ICV"),
  new SelectionEntry_mod_EdgeBackType("MIT"),
  new SelectionEntry_mod_EdgeBackType("NOE"),
  new SelectionEntry_mod_EdgeBackType("SPB"),
  new SelectionEntry_mod_EdgeBackType("SPT"),
  new SelectionEntry_mod_EdgeBackType("VBE"),
];
function selections_mod_EdgeBackType_find(value: string): SelectionEntry_mod_EdgeBackType | undefined {
  var sel = selections_mod_EdgeBackType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_EdgeBackType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_EdgeFrontType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_EdgeFrontType: SelectionEntry_mod_EdgeFrontType[] = [
  new SelectionEntry_mod_EdgeFrontType("CBE"),
  new SelectionEntry_mod_EdgeFrontType("CFE"),
  new SelectionEntry_mod_EdgeFrontType("CLR"),
  new SelectionEntry_mod_EdgeFrontType("DOW"),
  new SelectionEntry_mod_EdgeFrontType("FHS"),
  new SelectionEntry_mod_EdgeFrontType("FRE"),
  new SelectionEntry_mod_EdgeFrontType("ICN"),
  new SelectionEntry_mod_EdgeFrontType("ICV"),
  new SelectionEntry_mod_EdgeFrontType("MIT"),
  new SelectionEntry_mod_EdgeFrontType("NOE"),
  new SelectionEntry_mod_EdgeFrontType("SPB"),
  new SelectionEntry_mod_EdgeFrontType("SPT"),
  new SelectionEntry_mod_EdgeFrontType("VBE"),
];
function selections_mod_EdgeFrontType_find(value: string): SelectionEntry_mod_EdgeFrontType | undefined {
  var sel = selections_mod_EdgeFrontType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_EdgeFrontType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_EdgeJointType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_EdgeJointType: SelectionEntry_mod_EdgeJointType[] = [
  new SelectionEntry_mod_EdgeJointType("II"),
  new SelectionEntry_mod_EdgeJointType("VVVH"),
  new SelectionEntry_mod_EdgeJointType("VVHV"),
  new SelectionEntry_mod_EdgeJointType("VHVV"),
  new SelectionEntry_mod_EdgeJointType("HVVV"),
  new SelectionEntry_mod_EdgeJointType("MMMM"),
  new SelectionEntry_mod_EdgeJointType("VVVV"),
  new SelectionEntry_mod_EdgeJointType("HVHV"),
  new SelectionEntry_mod_EdgeJointType("VV"),
  new SelectionEntry_mod_EdgeJointType("VI"),
  new SelectionEntry_mod_EdgeJointType("MV"),
  new SelectionEntry_mod_EdgeJointType("MM"),
  new SelectionEntry_mod_EdgeJointType("MI"),
  new SelectionEntry_mod_EdgeJointType("IV"),
  new SelectionEntry_mod_EdgeJointType("IM"),
  new SelectionEntry_mod_EdgeJointType("VM"),
  new SelectionEntry_mod_EdgeJointType("VHVH"),
  new SelectionEntry_mod_EdgeJointType("FFFF"),
];
function selections_mod_EdgeJointType_find(value: string): SelectionEntry_mod_EdgeJointType | undefined {
  var sel = selections_mod_EdgeJointType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_EdgeJointType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_EdgeLeftType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_EdgeLeftType: SelectionEntry_mod_EdgeLeftType[] = [
  new SelectionEntry_mod_EdgeLeftType("CBE"),
  new SelectionEntry_mod_EdgeLeftType("CFE"),
  new SelectionEntry_mod_EdgeLeftType("CLR"),
  new SelectionEntry_mod_EdgeLeftType("DOW"),
  new SelectionEntry_mod_EdgeLeftType("FHS"),
  new SelectionEntry_mod_EdgeLeftType("FRE"),
  new SelectionEntry_mod_EdgeLeftType("ICN"),
  new SelectionEntry_mod_EdgeLeftType("ICV"),
  new SelectionEntry_mod_EdgeLeftType("MIT"),
  new SelectionEntry_mod_EdgeLeftType("NOE"),
  new SelectionEntry_mod_EdgeLeftType("SPB"),
  new SelectionEntry_mod_EdgeLeftType("SPT"),
  new SelectionEntry_mod_EdgeLeftType("VBE"),
];
function selections_mod_EdgeLeftType_find(value: string): SelectionEntry_mod_EdgeLeftType | undefined {
  var sel = selections_mod_EdgeLeftType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_EdgeLeftType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_EdgeRightType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_EdgeRightType: SelectionEntry_mod_EdgeRightType[] = [
  new SelectionEntry_mod_EdgeRightType("CBE"),
  new SelectionEntry_mod_EdgeRightType("CFE"),
  new SelectionEntry_mod_EdgeRightType("CLR"),
  new SelectionEntry_mod_EdgeRightType("DOW"),
  new SelectionEntry_mod_EdgeRightType("FHS"),
  new SelectionEntry_mod_EdgeRightType("FRE"),
  new SelectionEntry_mod_EdgeRightType("ICN"),
  new SelectionEntry_mod_EdgeRightType("ICV"),
  new SelectionEntry_mod_EdgeRightType("MIT"),
  new SelectionEntry_mod_EdgeRightType("NOE"),
  new SelectionEntry_mod_EdgeRightType("SPB"),
  new SelectionEntry_mod_EdgeRightType("SPT"),
  new SelectionEntry_mod_EdgeRightType("VBE"),
];
function selections_mod_EdgeRightType_find(value: string): SelectionEntry_mod_EdgeRightType | undefined {
  var sel = selections_mod_EdgeRightType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_EdgeRightType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FillerHardware extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FillerHardware: SelectionEntry_mod_FillerHardware[] = [
  new SelectionEntry_mod_FillerHardware("Bracket01"),
  new SelectionEntry_mod_FillerHardware("PacofixPF"),
];
function selections_mod_FillerHardware_find(value: string): SelectionEntry_mod_FillerHardware | undefined {
  var sel = selections_mod_FillerHardware.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FillerHardware'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FillerType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FillerType: SelectionEntry_mod_FillerType[] = [
  new SelectionEntry_mod_FillerType("LShape"),
  new SelectionEntry_mod_FillerType("CoverCarcase"),
];
function selections_mod_FillerType_find(value: string): SelectionEntry_mod_FillerType | undefined {
  var sel = selections_mod_FillerType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FillerType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FingergripColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FingergripColor: SelectionEntry_mod_FingergripColor[] = [
  new SelectionEntry_mod_FingergripColor("316"),
  new SelectionEntry_mod_FingergripColor("326"),
  new SelectionEntry_mod_FingergripColor("152"),
  new SelectionEntry_mod_FingergripColor("155"),
  new SelectionEntry_mod_FingergripColor("160"),
  new SelectionEntry_mod_FingergripColor("165"),
  new SelectionEntry_mod_FingergripColor("190"),
  new SelectionEntry_mod_FingergripColor("199"),
  new SelectionEntry_mod_FingergripColor("214"),
  new SelectionEntry_mod_FingergripColor("324"),
  new SelectionEntry_mod_FingergripColor("215"),
  new SelectionEntry_mod_FingergripColor("229"),
  new SelectionEntry_mod_FingergripColor("230"),
  new SelectionEntry_mod_FingergripColor("240"),
  new SelectionEntry_mod_FingergripColor("222"),
  new SelectionEntry_mod_FingergripColor("380"),
  new SelectionEntry_mod_FingergripColor("178"),
];
function selections_mod_FingergripColor_find(value: string): SelectionEntry_mod_FingergripColor | undefined {
  var sel = selections_mod_FingergripColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FingergripColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FingergripPostype extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FingergripPostype: SelectionEntry_mod_FingergripPostype[] = [
  new SelectionEntry_mod_FingergripPostype("Top"),
  new SelectionEntry_mod_FingergripPostype("Middle"),
];
function selections_mod_FingergripPostype_find(value: string): SelectionEntry_mod_FingergripPostype | undefined {
  var sel = selections_mod_FingergripPostype.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FingergripPostype'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FingergripType extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_FingergripType) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_FingergripType;
}

var selections_mod_FingergripType: SelectionEntry_mod_FingergripType[] = [
  new SelectionEntry_mod_FingergripType("None", new Matrix_mod_FingergripType({ LShapeHeight: 0, LShapeDepth: 0, LShapeGapAbove: 0, CShapeHeight: 0, CShapeDepth: 0, CShapeOverlapBelow: 0, CShapeOverlapAbove: 0, MprProfileStyle: 0, CutSide: false })),
  new SelectionEntry_mod_FingergripType("Metal", new Matrix_mod_FingergripType({ LShapeHeight: 49, LShapeDepth: 23.5, LShapeGapAbove: 30, LShapeSVG: "<svg><path d=\" M 0 0 L 0 1 A 2 2 0 0 1 -2 3 L -12.5 3 A 10 10 0 0 0 -22.5 11 L -22.5 49 L -23.5 49 L -23.5 0 Z \"/></svg>", CShapeHeight: 64, CShapeDepth: 23.5, CShapeOverlapBelow: 17, CShapeOverlapAbove: 17, CShapeSVG: "<svg><path d=\" M 0 -32 L 0 -31 A 2 2 0 0 1 -2 -29 L -12.5 -29 A 10 10 0 0 0 -22.5 -21 L -22.5 19 A 10 10 0 0 0 -12.5 29 L -2 29 A 2 2 0 0 1 0 31 L 0 32 L -23.5 32 L -23.5 -32 Z \"/></svg>", MprProfileStyle: 2, CutSide: true })),
  new SelectionEntry_mod_FingergripType("Wood", new Matrix_mod_FingergripType({ LShapeHeight: 50, LShapeDepth: 26, LShapeGapAbove: 30, LShapeSVG: "<svg><path d=\" M 0 0  L -26 0  L -26 50  L -16 50  L -16 10  L 0 10  Z\"/></svg>", CShapeHeight: 70, CShapeDepth: 26, CShapeOverlapBelow: 20, CShapeOverlapAbove: 20, CShapeSVG: "<svg><path d=\" M 0 -35  L -26 -35  L -26 35  L 0 35  L 0 25  L -16 25  L -16 -25  L 0 -25  Z\"/></svg>", MprProfileStyle: 2, CutSide: true })),
];
function selections_mod_FingergripType_find(value: string): SelectionEntry_mod_FingergripType | undefined {
  var sel = selections_mod_FingergripType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FingergripType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FittingConnectionBtmVert extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FittingConnectionBtmVert: SelectionEntry_mod_FittingConnectionBtmVert[] = [
  new SelectionEntry_mod_FittingConnectionBtmVert("DowelMinifix"),
  new SelectionEntry_mod_FittingConnectionBtmVert("Dowel"),
];
function selections_mod_FittingConnectionBtmVert_find(value: string): SelectionEntry_mod_FittingConnectionBtmVert | undefined {
  var sel = selections_mod_FittingConnectionBtmVert.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FittingConnectionBtmVert'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FittingConnectionLeftBtm extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FittingConnectionLeftBtm: SelectionEntry_mod_FittingConnectionLeftBtm[] = [
  new SelectionEntry_mod_FittingConnectionLeftBtm("DowelMinifix"),
  new SelectionEntry_mod_FittingConnectionLeftBtm("Dowel"),
  new SelectionEntry_mod_FittingConnectionLeftBtm("Rafix"),
];
function selections_mod_FittingConnectionLeftBtm_find(value: string): SelectionEntry_mod_FittingConnectionLeftBtm | undefined {
  var sel = selections_mod_FittingConnectionLeftBtm.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FittingConnectionLeftBtm'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FittingConnectionLeftHor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FittingConnectionLeftHor: SelectionEntry_mod_FittingConnectionLeftHor[] = [
  new SelectionEntry_mod_FittingConnectionLeftHor("DowelMinifix"),
  new SelectionEntry_mod_FittingConnectionLeftHor("Dowel"),
  new SelectionEntry_mod_FittingConnectionLeftHor("Rafix"),
];
function selections_mod_FittingConnectionLeftHor_find(value: string): SelectionEntry_mod_FittingConnectionLeftHor | undefined {
  var sel = selections_mod_FittingConnectionLeftHor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FittingConnectionLeftHor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FittingConnectionLeftTop extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FittingConnectionLeftTop: SelectionEntry_mod_FittingConnectionLeftTop[] = [
  new SelectionEntry_mod_FittingConnectionLeftTop("DowelMinifix"),
  new SelectionEntry_mod_FittingConnectionLeftTop("Dowel"),
  new SelectionEntry_mod_FittingConnectionLeftTop("Rafix"),
];
function selections_mod_FittingConnectionLeftTop_find(value: string): SelectionEntry_mod_FittingConnectionLeftTop | undefined {
  var sel = selections_mod_FittingConnectionLeftTop.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FittingConnectionLeftTop'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FittingConnectionRightBtm extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FittingConnectionRightBtm: SelectionEntry_mod_FittingConnectionRightBtm[] = [
  new SelectionEntry_mod_FittingConnectionRightBtm("DowelMinifix"),
  new SelectionEntry_mod_FittingConnectionRightBtm("Dowel"),
  new SelectionEntry_mod_FittingConnectionRightBtm("Rafix"),
];
function selections_mod_FittingConnectionRightBtm_find(value: string): SelectionEntry_mod_FittingConnectionRightBtm | undefined {
  var sel = selections_mod_FittingConnectionRightBtm.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FittingConnectionRightBtm'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FittingConnectionRightHor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FittingConnectionRightHor: SelectionEntry_mod_FittingConnectionRightHor[] = [
  new SelectionEntry_mod_FittingConnectionRightHor("DowelMinifix"),
  new SelectionEntry_mod_FittingConnectionRightHor("Dowel"),
  new SelectionEntry_mod_FittingConnectionRightHor("Rafix"),
];
function selections_mod_FittingConnectionRightHor_find(value: string): SelectionEntry_mod_FittingConnectionRightHor | undefined {
  var sel = selections_mod_FittingConnectionRightHor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FittingConnectionRightHor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FittingConnectionRightTop extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FittingConnectionRightTop: SelectionEntry_mod_FittingConnectionRightTop[] = [
  new SelectionEntry_mod_FittingConnectionRightTop("DowelMinifix"),
  new SelectionEntry_mod_FittingConnectionRightTop("Dowel"),
  new SelectionEntry_mod_FittingConnectionRightTop("Rafix"),
];
function selections_mod_FittingConnectionRightTop_find(value: string): SelectionEntry_mod_FittingConnectionRightTop | undefined {
  var sel = selections_mod_FittingConnectionRightTop.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FittingConnectionRightTop'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FittingConnectionTopVert extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FittingConnectionTopVert: SelectionEntry_mod_FittingConnectionTopVert[] = [
  new SelectionEntry_mod_FittingConnectionTopVert("DowelMinifix"),
  new SelectionEntry_mod_FittingConnectionTopVert("Dowel"),
];
function selections_mod_FittingConnectionTopVert_find(value: string): SelectionEntry_mod_FittingConnectionTopVert | undefined {
  var sel = selections_mod_FittingConnectionTopVert.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FittingConnectionTopVert'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FlipliftHardwareColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FlipliftHardwareColor: SelectionEntry_mod_FlipliftHardwareColor[] = [
  new SelectionEntry_mod_FlipliftHardwareColor("White"),
  new SelectionEntry_mod_FlipliftHardwareColor("Grey"),
  new SelectionEntry_mod_FlipliftHardwareColor("Black"),
  new SelectionEntry_mod_FlipliftHardwareColor("Metal"),
  new SelectionEntry_mod_FlipliftHardwareColor("Automatic"),
];
function selections_mod_FlipliftHardwareColor_find(value: string): SelectionEntry_mod_FlipliftHardwareColor | undefined {
  var sel = selections_mod_FlipliftHardwareColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FlipliftHardwareColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FlipliftHardwareType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FlipliftHardwareType: SelectionEntry_mod_FlipliftHardwareType[] = [
  new SelectionEntry_mod_FlipliftHardwareType("Powerstorage"),
  new SelectionEntry_mod_FlipliftHardwareType("Gasspring"),
  new SelectionEntry_mod_FlipliftHardwareType("DropDownHinge"),
  new SelectionEntry_mod_FlipliftHardwareType("Automatic"),
];
function selections_mod_FlipliftHardwareType_find(value: string): SelectionEntry_mod_FlipliftHardwareType | undefined {
  var sel = selections_mod_FlipliftHardwareType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FlipliftHardwareType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FlipliftLogic extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FlipliftLogic: SelectionEntry_mod_FlipliftLogic[] = [
  new SelectionEntry_mod_FlipliftLogic("Library"),
  new SelectionEntry_mod_FlipliftLogic("Custom"),
];
function selections_mod_FlipliftLogic_find(value: string): SelectionEntry_mod_FlipliftLogic | undefined {
  var sel = selections_mod_FlipliftLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FlipliftLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FlipliftType extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_FlipliftType) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_FlipliftType;
}

var selections_mod_FlipliftType: SelectionEntry_mod_FlipliftType[] = [
  new SelectionEntry_mod_FlipliftType("FHF", new Matrix_mod_FlipliftType({ FrontDividingNecessary: true, PartQty: 2, DirectionType: "BtmTop", NeedsHinges: false })),
  new SelectionEntry_mod_FlipliftType("SHF", new Matrix_mod_FlipliftType({ FrontDividingNecessary: false, PartQty: 1, DirectionType: "BtmTop", NeedsHinges: false })),
  new SelectionEntry_mod_FlipliftType("LHF", new Matrix_mod_FlipliftType({ FrontDividingNecessary: false, PartQty: 1, DirectionType: "BtmTop", NeedsHinges: false })),
  new SelectionEntry_mod_FlipliftType("UF", new Matrix_mod_FlipliftType({ FrontDividingNecessary: false, PartQty: 1, DirectionType: "BtmTop", NeedsHinges: true })),
  new SelectionEntry_mod_FlipliftType("DF", new Matrix_mod_FlipliftType({ FrontDividingNecessary: false, PartQty: 1, DirectionType: "TopBtm", NeedsHinges: true })),
];
function selections_mod_FlipliftType_find(value: string): SelectionEntry_mod_FlipliftType | undefined {
  var sel = selections_mod_FlipliftType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FlipliftType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FrameFillingColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_FrameFillingColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_FrameFillingColor;
}

var selections_mod_FrameFillingColor: SelectionEntry_mod_FrameFillingColor[] = [
  new SelectionEntry_mod_FrameFillingColor("316", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("326", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("152", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("155", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("160", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("165", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("190", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("199", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("214", new Matrix_mod_FrameFillingColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrameFillingColor("324", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("215", new Matrix_mod_FrameFillingColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrameFillingColor("229", new Matrix_mod_FrameFillingColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrameFillingColor("230", new Matrix_mod_FrameFillingColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrameFillingColor("240", new Matrix_mod_FrameFillingColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrameFillingColor("222", new Matrix_mod_FrameFillingColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrameFillingColor("380", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("178", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("LikeFrameColor", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("FloatGlass", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("SatinGlass", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("GreyGlass", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrameFillingColor("Mirror", new Matrix_mod_FrameFillingColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_FrameFillingColor_find(value: string): SelectionEntry_mod_FrameFillingColor | undefined {
  var sel = selections_mod_FrameFillingColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FrameFillingColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FrameFillingType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FrameFillingType: SelectionEntry_mod_FrameFillingType[] = [
  new SelectionEntry_mod_FrameFillingType("Automatic"),
  new SelectionEntry_mod_FrameFillingType("WoodVertical"),
  new SelectionEntry_mod_FrameFillingType("WoodHorizontal"),
  new SelectionEntry_mod_FrameFillingType("WoodNeutral"),
  new SelectionEntry_mod_FrameFillingType("Glass"),
];
function selections_mod_FrameFillingType_find(value: string): SelectionEntry_mod_FrameFillingType | undefined {
  var sel = selections_mod_FrameFillingType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FrameFillingType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FridgeCarcasePositionType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FridgeCarcasePositionType: SelectionEntry_mod_FridgeCarcasePositionType[] = [
  new SelectionEntry_mod_FridgeCarcasePositionType("Bottom"),
  new SelectionEntry_mod_FridgeCarcasePositionType("Top"),
  new SelectionEntry_mod_FridgeCarcasePositionType("Free"),
  new SelectionEntry_mod_FridgeCarcasePositionType("Automatic"),
];
function selections_mod_FridgeCarcasePositionType_find(value: string): SelectionEntry_mod_FridgeCarcasePositionType | undefined {
  var sel = selections_mod_FridgeCarcasePositionType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FridgeCarcasePositionType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FridgeId extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FridgeId: SelectionEntry_mod_FridgeId[] = [
  new SelectionEntry_mod_FridgeId("KI86SHDD0"),
  new SelectionEntry_mod_FridgeId("KI82LADD0"),
  new SelectionEntry_mod_FridgeId("KI41FADD0"),
  new SelectionEntry_mod_FridgeId("None"),
];
function selections_mod_FridgeId_find(value: string): SelectionEntry_mod_FridgeId | undefined {
  var sel = selections_mod_FridgeId.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FridgeId'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FridgePositionId extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FridgePositionId: SelectionEntry_mod_FridgePositionId[] = [
  new SelectionEntry_mod_FridgePositionId("First"),
  new SelectionEntry_mod_FridgePositionId("Last"),
  new SelectionEntry_mod_FridgePositionId("Middle"),
];
function selections_mod_FridgePositionId_find(value: string): SelectionEntry_mod_FridgePositionId | undefined {
  var sel = selections_mod_FridgePositionId.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FridgePositionId'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FridgeSupplier extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FridgeSupplier: SelectionEntry_mod_FridgeSupplier[] = [
  new SelectionEntry_mod_FridgeSupplier("None"),
  new SelectionEntry_mod_FridgeSupplier("Siemens"),
];
function selections_mod_FridgeSupplier_find(value: string): SelectionEntry_mod_FridgeSupplier | undefined {
  var sel = selections_mod_FridgeSupplier.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FridgeSupplier'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FrontColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_FrontColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_FrontColor;
}

var selections_mod_FrontColor: SelectionEntry_mod_FrontColor[] = [
  new SelectionEntry_mod_FrontColor("316", new Matrix_mod_FrontColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontColor("326", new Matrix_mod_FrontColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontColor("152", new Matrix_mod_FrontColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontColor("155", new Matrix_mod_FrontColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontColor("160", new Matrix_mod_FrontColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontColor("165", new Matrix_mod_FrontColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontColor("190", new Matrix_mod_FrontColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontColor("199", new Matrix_mod_FrontColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontColor("214", new Matrix_mod_FrontColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontColor("324", new Matrix_mod_FrontColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontColor("215", new Matrix_mod_FrontColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontColor("229", new Matrix_mod_FrontColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontColor("230", new Matrix_mod_FrontColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontColor("240", new Matrix_mod_FrontColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontColor("222", new Matrix_mod_FrontColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontColor("380", new Matrix_mod_FrontColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontColor("178", new Matrix_mod_FrontColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_FrontColor_find(value: string): SelectionEntry_mod_FrontColor | undefined {
  var sel = selections_mod_FrontColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FrontColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FrontDesign extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FrontDesign: SelectionEntry_mod_FrontDesign[] = [
  new SelectionEntry_mod_FrontDesign("Standard"),
  new SelectionEntry_mod_FrontDesign("FillingWoodClassic"),
  new SelectionEntry_mod_FrontDesign("FillingWoodModern"),
  new SelectionEntry_mod_FrontDesign("FillingGlass"),
  new SelectionEntry_mod_FrontDesign("SegmentGlassClassic"),
];
function selections_mod_FrontDesign_find(value: string): SelectionEntry_mod_FrontDesign | undefined {
  var sel = selections_mod_FrontDesign.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FrontDesign'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FrontEdgeColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FrontEdgeColor: SelectionEntry_mod_FrontEdgeColor[] = [
  new SelectionEntry_mod_FrontEdgeColor("316"),
  new SelectionEntry_mod_FrontEdgeColor("326"),
  new SelectionEntry_mod_FrontEdgeColor("152"),
  new SelectionEntry_mod_FrontEdgeColor("155"),
  new SelectionEntry_mod_FrontEdgeColor("160"),
  new SelectionEntry_mod_FrontEdgeColor("165"),
  new SelectionEntry_mod_FrontEdgeColor("190"),
  new SelectionEntry_mod_FrontEdgeColor("199"),
  new SelectionEntry_mod_FrontEdgeColor("214"),
  new SelectionEntry_mod_FrontEdgeColor("324"),
  new SelectionEntry_mod_FrontEdgeColor("215"),
  new SelectionEntry_mod_FrontEdgeColor("229"),
  new SelectionEntry_mod_FrontEdgeColor("230"),
  new SelectionEntry_mod_FrontEdgeColor("240"),
  new SelectionEntry_mod_FrontEdgeColor("222"),
  new SelectionEntry_mod_FrontEdgeColor("380"),
  new SelectionEntry_mod_FrontEdgeColor("178"),
  new SelectionEntry_mod_FrontEdgeColor("Automatic"),
];
function selections_mod_FrontEdgeColor_find(value: string): SelectionEntry_mod_FrontEdgeColor | undefined {
  var sel = selections_mod_FrontEdgeColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FrontEdgeColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FrontGapCarcase extends SelectionEntryBase_number {
  constructor(value?: number, min?: number, max?: number, step?: number
  ) {
    super(value, min, max, step);
  }
}

var selections_mod_FrontGapCarcase: SelectionEntry_mod_FrontGapCarcase[] = [
  new SelectionEntry_mod_FrontGapCarcase(2, undefined, undefined, undefined),
  new SelectionEntry_mod_FrontGapCarcase(4, undefined, undefined, undefined),
  new SelectionEntry_mod_FrontGapCarcase(0, undefined, undefined, undefined),
];
function selections_mod_FrontGapCarcase_find(value: number): SelectionEntry_mod_FrontGapCarcase | undefined {
  var sel = selections_mod_FrontGapCarcase.find(p => findNumberEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FrontGapCarcase'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FrontGapHorTop extends SelectionEntryBase_number {
  constructor(value?: number, min?: number, max?: number, step?: number
  ) {
    super(value, min, max, step);
  }
}

var selections_mod_FrontGapHorTop: SelectionEntry_mod_FrontGapHorTop[] = [
  new SelectionEntry_mod_FrontGapHorTop(3, undefined, undefined, undefined),
  new SelectionEntry_mod_FrontGapHorTop(0, undefined, undefined, undefined),
  new SelectionEntry_mod_FrontGapHorTop(2, undefined, undefined, undefined),
  new SelectionEntry_mod_FrontGapHorTop(6, undefined, undefined, undefined),
];
function selections_mod_FrontGapHorTop_find(value: number): SelectionEntry_mod_FrontGapHorTop | undefined {
  var sel = selections_mod_FrontGapHorTop.find(p => findNumberEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FrontGapHorTop'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FrontProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_FrontProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_FrontProgram;
}

var selections_mod_FrontProgram: SelectionEntry_mod_FrontProgram[] = [
  new SelectionEntry_mod_FrontProgram("Classic", new Matrix_mod_FrontProgram({ GrainGroupId: "Neutral" })),
  new SelectionEntry_mod_FrontProgram("Nature", new Matrix_mod_FrontProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_FrontProgram("Tradition", new Matrix_mod_FrontProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_FrontProgram("Modern", new Matrix_mod_FrontProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_FrontProgram("Tuscan", new Matrix_mod_FrontProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_FrontProgram_find(value: string): SelectionEntry_mod_FrontProgram | undefined {
  var sel = selections_mod_FrontProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FrontProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FrontSegmentColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_FrontSegmentColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_FrontSegmentColor;
}

var selections_mod_FrontSegmentColor: SelectionEntry_mod_FrontSegmentColor[] = [
  new SelectionEntry_mod_FrontSegmentColor("316", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("326", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("152", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("155", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("160", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("165", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("190", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("199", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("214", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontSegmentColor("324", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("215", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontSegmentColor("229", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontSegmentColor("230", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontSegmentColor("240", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontSegmentColor("222", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_FrontSegmentColor("380", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("178", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("FloatGlass", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("SatinGlass", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("GreyGlass", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_FrontSegmentColor("Mirror", new Matrix_mod_FrontSegmentColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_FrontSegmentColor_find(value: string): SelectionEntry_mod_FrontSegmentColor | undefined {
  var sel = selections_mod_FrontSegmentColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FrontSegmentColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FrontSegmentType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FrontSegmentType: SelectionEntry_mod_FrontSegmentType[] = [
  new SelectionEntry_mod_FrontSegmentType("Automatic"),
  new SelectionEntry_mod_FrontSegmentType("WoodVertical"),
  new SelectionEntry_mod_FrontSegmentType("WoodHorizontal"),
  new SelectionEntry_mod_FrontSegmentType("WoodNeutral"),
  new SelectionEntry_mod_FrontSegmentType("Glass"),
];
function selections_mod_FrontSegmentType_find(value: string): SelectionEntry_mod_FrontSegmentType | undefined {
  var sel = selections_mod_FrontSegmentType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FrontSegmentType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_FrontpanelWeightLogic extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_FrontpanelWeightLogic: SelectionEntry_mod_FrontpanelWeightLogic[] = [
  new SelectionEntry_mod_FrontpanelWeightLogic("Library"),
  new SelectionEntry_mod_FrontpanelWeightLogic("Custom"),
];
function selections_mod_FrontpanelWeightLogic_find(value: string): SelectionEntry_mod_FrontpanelWeightLogic | undefined {
  var sel = selections_mod_FrontpanelWeightLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_FrontpanelWeightLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HandleActivated extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HandleActivated: SelectionEntry_mod_HandleActivated[] = [
  new SelectionEntry_mod_HandleActivated("All"),
  new SelectionEntry_mod_HandleActivated("Top"),
  new SelectionEntry_mod_HandleActivated("Bottom"),
];
function selections_mod_HandleActivated_find(value: string): SelectionEntry_mod_HandleActivated | undefined {
  var sel = selections_mod_HandleActivated.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HandleActivated'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HandleColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HandleColor: SelectionEntry_mod_HandleColor[] = [
  new SelectionEntry_mod_HandleColor("StainlessSteel"),
  new SelectionEntry_mod_HandleColor("StainlessSteelMattBrushed"),
  new SelectionEntry_mod_HandleColor("Black"),
  new SelectionEntry_mod_HandleColor("Tin"),
  new SelectionEntry_mod_HandleColor("ChromedPolished"),
  new SelectionEntry_mod_HandleColor("BrassPlatedAntique"),
  new SelectionEntry_mod_HandleColor("NoColor"),
  new SelectionEntry_mod_HandleColor("NickelPlated"),
];
function selections_mod_HandleColor_find(value: string): SelectionEntry_mod_HandleColor | undefined {
  var sel = selections_mod_HandleColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HandleColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HandleDesign extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_HandleDesign) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_HandleDesign;
}

var selections_mod_HandleDesign: SelectionEntry_mod_HandleDesign[] = [
  new SelectionEntry_mod_HandleDesign("10", new Matrix_mod_HandleDesign({ HandleDesignGroup: "None", HandleType: "None", HandleLength: "Fixed", HandleColor: "Attribute", HandlePosTypeRelevant: false, Cutable: false, FillerRelevant: false })),
  new SelectionEntry_mod_HandleDesign("20", new Matrix_mod_HandleDesign({ HandleDesignGroup: "HandleGroup1", HandleType: "Handle", HandleLength: "Attribute", HandleColor: "Attribute", HandlePosTypeRelevant: false, Cutable: false, FillerRelevant: false })),
  new SelectionEntry_mod_HandleDesign("30", new Matrix_mod_HandleDesign({ HandleDesignGroup: "HandleGroup1", HandleType: "Handle", HandleLength: "FrontDimension", HandleColor: "Attribute", HandlePosTypeRelevant: false, Cutable: false, FillerRelevant: false })),
  new SelectionEntry_mod_HandleDesign("40", new Matrix_mod_HandleDesign({ HandleDesignGroup: "StripeGroup1", HandleType: "Handlestrip", HandleLength: "Fixed", HandleColor: "Attribute", HandlePosTypeRelevant: false, Cutable: false, FillerRelevant: false })),
  new SelectionEntry_mod_HandleDesign("50", new Matrix_mod_HandleDesign({ HandleDesignGroup: "StripeGroup3", HandleType: "Handlestrip", HandleLength: "Fixed", HandleColor: "Attribute", HandlePosTypeRelevant: false, Cutable: true, FillerRelevant: false })),
  new SelectionEntry_mod_HandleDesign("100", new Matrix_mod_HandleDesign({ HandleDesignGroup: "HandleGroup1", HandleType: "Handle", HandleLength: "Attribute", HandleColor: "Attribute", HandlePosTypeRelevant: false, Cutable: false, FillerRelevant: false })),
  new SelectionEntry_mod_HandleDesign("110", new Matrix_mod_HandleDesign({ HandleDesignGroup: "HandleGroup1", HandleType: "Handle", HandleLength: "FrontDimension", HandleColor: "Attribute", HandlePosTypeRelevant: false, Cutable: false, FillerRelevant: false })),
  new SelectionEntry_mod_HandleDesign("120", new Matrix_mod_HandleDesign({ HandleDesignGroup: "HandleGroup1", HandleType: "Handle", HandleLength: "Fixed", HandleColor: "Attribute", HandlePosTypeRelevant: false, Cutable: false, FillerRelevant: false })),
  new SelectionEntry_mod_HandleDesign("60", new Matrix_mod_HandleDesign({ HandleDesignGroup: "HandleGroup1", HandleType: "Handle", HandleLength: "Attribute", HandleColor: "Attribute", HandlePosTypeRelevant: false, Cutable: false, FillerRelevant: false })),
  new SelectionEntry_mod_HandleDesign("130", new Matrix_mod_HandleDesign({ HandleDesignGroup: "HandleGroup1", HandleType: "Handle", HandleLength: "Fixed", HandleColor: "Attribute", HandlePosTypeRelevant: false, Cutable: false, FillerRelevant: false })),
];
function selections_mod_HandleDesign_find(value: string): SelectionEntry_mod_HandleDesign | undefined {
  var sel = selections_mod_HandleDesign.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HandleDesign'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HandleLength extends SelectionEntryBase_number {
  constructor(value?: number, min?: number, max?: number, step?: number
  ) {
    super(value, min, max, step);
  }
}

var selections_mod_HandleLength: SelectionEntry_mod_HandleLength[] = [
  new SelectionEntry_mod_HandleLength(0, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(5, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(64, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(96, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(128, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(160, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(192, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(210, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(212, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(224, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(260, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(288, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(294, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(310, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(320, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(340, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(352, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(360, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(394, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(410, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(444, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(448, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(460, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(480, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(494, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(560, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(594, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(594, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(640, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(660, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(760, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(794, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(860, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(894, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(960, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(994, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(1060, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(1160, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(1194, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(1260, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(1360, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(1460, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(1560, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(1760, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(1960, undefined, undefined, undefined),
  new SelectionEntry_mod_HandleLength(2500, undefined, undefined, undefined),
];
function selections_mod_HandleLength_find(value: number): SelectionEntry_mod_HandleLength | undefined {
  var sel = selections_mod_HandleLength.find(p => findNumberEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HandleLength'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HandlePosLogic extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HandlePosLogic: SelectionEntry_mod_HandlePosLogic[] = [
  new SelectionEntry_mod_HandlePosLogic("Matrix"),
  new SelectionEntry_mod_HandlePosLogic("HandleLine"),
  new SelectionEntry_mod_HandlePosLogic("Custom"),
];
function selections_mod_HandlePosLogic_find(value: string): SelectionEntry_mod_HandlePosLogic | undefined {
  var sel = selections_mod_HandlePosLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HandlePosLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HandlePosMatrix extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_HandlePosMatrix) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_HandlePosMatrix;
}

var selections_mod_HandlePosMatrix: SelectionEntry_mod_HandlePosMatrix[] = [
  new SelectionEntry_mod_HandlePosMatrix("Top", new Matrix_mod_HandlePosMatrix({ Mode: "Matrix", Section: "Up" })),
  new SelectionEntry_mod_HandlePosMatrix("Center", new Matrix_mod_HandlePosMatrix({ Mode: "HandleLine", Section: "Center" })),
  new SelectionEntry_mod_HandlePosMatrix("Bottom", new Matrix_mod_HandlePosMatrix({ Mode: "Matrix", Section: "Down" })),
];
function selections_mod_HandlePosMatrix_find(value: string): SelectionEntry_mod_HandlePosMatrix | undefined {
  var sel = selections_mod_HandlePosMatrix.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HandlePosMatrix'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HandlePosMatrixMultiple extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_HandlePosMatrixMultiple) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_HandlePosMatrixMultiple;
}

var selections_mod_HandlePosMatrixMultiple: SelectionEntry_mod_HandlePosMatrixMultiple[] = [
  new SelectionEntry_mod_HandlePosMatrixMultiple("DoubleTop", new Matrix_mod_HandlePosMatrixMultiple({ FirstMatrix: "Top", SecondMatrix: "Top" })),
  new SelectionEntry_mod_HandlePosMatrixMultiple("DoubleCenter", new Matrix_mod_HandlePosMatrixMultiple({ FirstMatrix: "Center", SecondMatrix: "Center" })),
  new SelectionEntry_mod_HandlePosMatrixMultiple("DoubleBottom", new Matrix_mod_HandlePosMatrixMultiple({ FirstMatrix: "Bottom", SecondMatrix: "Bottom" })),
  new SelectionEntry_mod_HandlePosMatrixMultiple("Center_Center", new Matrix_mod_HandlePosMatrixMultiple({ FirstMatrix: "Center", SecondMatrix: "Center" })),
  new SelectionEntry_mod_HandlePosMatrixMultiple("Top_Bottom", new Matrix_mod_HandlePosMatrixMultiple({ FirstMatrix: "Top", SecondMatrix: "Bottom" })),
];
function selections_mod_HandlePosMatrixMultiple_find(value: string): SelectionEntry_mod_HandlePosMatrixMultiple | undefined {
  var sel = selections_mod_HandlePosMatrixMultiple.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HandlePosMatrixMultiple'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HandlePosType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HandlePosType: SelectionEntry_mod_HandlePosType[] = [
  new SelectionEntry_mod_HandlePosType("01"),
  new SelectionEntry_mod_HandlePosType("02"),
  new SelectionEntry_mod_HandlePosType("03"),
  new SelectionEntry_mod_HandlePosType("04"),
  new SelectionEntry_mod_HandlePosType("05"),
  new SelectionEntry_mod_HandlePosType("06"),
  new SelectionEntry_mod_HandlePosType("07"),
  new SelectionEntry_mod_HandlePosType("08"),
  new SelectionEntry_mod_HandlePosType("50"),
  new SelectionEntry_mod_HandlePosType("51"),
  new SelectionEntry_mod_HandlePosType("52"),
  new SelectionEntry_mod_HandlePosType("53"),
  new SelectionEntry_mod_HandlePosType("54"),
  new SelectionEntry_mod_HandlePosType("55"),
  new SelectionEntry_mod_HandlePosType("11"),
  new SelectionEntry_mod_HandlePosType("12"),
  new SelectionEntry_mod_HandlePosType("13"),
  new SelectionEntry_mod_HandlePosType("14"),
];
function selections_mod_HandlePosType_find(value: string): SelectionEntry_mod_HandlePosType | undefined {
  var sel = selections_mod_HandlePosType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HandlePosType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HangerColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HangerColor: SelectionEntry_mod_HangerColor[] = [
  new SelectionEntry_mod_HangerColor("DemoStainlessSteel"),
  new SelectionEntry_mod_HangerColor("DemoBlack"),
  new SelectionEntry_mod_HangerColor("DemoWhite"),
];
function selections_mod_HangerColor_find(value: string): SelectionEntry_mod_HangerColor | undefined {
  var sel = selections_mod_HangerColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HangerColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HangerPosX extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_HangerPosX) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_HangerPosX;
}

var selections_mod_HangerPosX: SelectionEntry_mod_HangerPosX[] = [
  new SelectionEntry_mod_HangerPosX("Left", new Matrix_mod_HangerPosX({ Left: true, Right: false, Middle: false })),
  new SelectionEntry_mod_HangerPosX("Right", new Matrix_mod_HangerPosX({ Left: false, Right: true, Middle: false })),
  new SelectionEntry_mod_HangerPosX("Left_Right", new Matrix_mod_HangerPosX({ Left: true, Right: true, Middle: false })),
];
function selections_mod_HangerPosX_find(value: string): SelectionEntry_mod_HangerPosX | undefined {
  var sel = selections_mod_HangerPosX.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HangerPosX'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HangerPosY extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HangerPosY: SelectionEntry_mod_HangerPosY[] = [
  new SelectionEntry_mod_HangerPosY("Automatic"),
  new SelectionEntry_mod_HangerPosY("Manual"),
  new SelectionEntry_mod_HangerPosY("Top"),
  new SelectionEntry_mod_HangerPosY("Middle"),
];
function selections_mod_HangerPosY_find(value: string): SelectionEntry_mod_HangerPosY | undefined {
  var sel = selections_mod_HangerPosY.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HangerPosY'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HangerType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HangerType: SelectionEntry_mod_HangerType[] = [
  new SelectionEntry_mod_HangerType("NoHanger"),
  new SelectionEntry_mod_HangerType("Automatic"),
  new SelectionEntry_mod_HangerType("Custom"),
  new SelectionEntry_mod_HangerType("WallUnitVisibleHanger75kg"),
  new SelectionEntry_mod_HangerType("WallUnitVisibleHanger52kg"),
  new SelectionEntry_mod_HangerType("BaseUnitVisibleHanger120kg"),
  new SelectionEntry_mod_HangerType("WallUnitHiddenHanger92kg"),
  new SelectionEntry_mod_HangerType("WallUnitVisibleHanger45kg"),
];
function selections_mod_HangerType_find(value: string): SelectionEntry_mod_HangerType | undefined {
  var sel = selections_mod_HangerType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HangerType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HardwareColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HardwareColor: SelectionEntry_mod_HardwareColor[] = [
  new SelectionEntry_mod_HardwareColor("DarkColor"),
  new SelectionEntry_mod_HardwareColor("LightColor"),
  new SelectionEntry_mod_HardwareColor("WhiteColor"),
  new SelectionEntry_mod_HardwareColor("BlackColor"),
];
function selections_mod_HardwareColor_find(value: string): SelectionEntry_mod_HardwareColor | undefined {
  var sel = selections_mod_HardwareColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HardwareColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HingeColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HingeColor: SelectionEntry_mod_HingeColor[] = [
  new SelectionEntry_mod_HingeColor("DemoNickelPlated"),
  new SelectionEntry_mod_HingeColor("DemoBlack"),
];
function selections_mod_HingeColor_find(value: string): SelectionEntry_mod_HingeColor | undefined {
  var sel = selections_mod_HingeColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HingeColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HingeLogic extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_HingeLogic) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_HingeLogic;
}

var selections_mod_HingeLogic: SelectionEntry_mod_HingeLogic[] = [
  new SelectionEntry_mod_HingeLogic("AutoSel_AutoPos", new Matrix_mod_HingeLogic({ HingeSelection: "Automatic", HingePositioning: "Automatic" })),
  new SelectionEntry_mod_HingeLogic("AutoSel_CustPos", new Matrix_mod_HingeLogic({ HingeSelection: "Automatic", HingePositioning: "Custom" })),
  new SelectionEntry_mod_HingeLogic("AutoSel_ManPos", new Matrix_mod_HingeLogic({ HingeSelection: "Automatic", HingePositioning: "Manual" })),
  new SelectionEntry_mod_HingeLogic("CustSel_AutoPos", new Matrix_mod_HingeLogic({ HingeSelection: "Custom", HingePositioning: "Automatic" })),
  new SelectionEntry_mod_HingeLogic("CustSel_CustPos", new Matrix_mod_HingeLogic({ HingeSelection: "Custom", HingePositioning: "Custom" })),
  new SelectionEntry_mod_HingeLogic("CustSel_ManPos", new Matrix_mod_HingeLogic({ HingeSelection: "Custom", HingePositioning: "Manual" })),
  new SelectionEntry_mod_HingeLogic("ManSel_AutoPos", new Matrix_mod_HingeLogic({ HingeSelection: "Manual", HingePositioning: "Automatic" })),
  new SelectionEntry_mod_HingeLogic("ManSel_CustPos", new Matrix_mod_HingeLogic({ HingeSelection: "Manual", HingePositioning: "Custom" })),
  new SelectionEntry_mod_HingeLogic("ManSel_ManPos", new Matrix_mod_HingeLogic({ HingeSelection: "Manual", HingePositioning: "Manual" })),
];
function selections_mod_HingeLogic_find(value: string): SelectionEntry_mod_HingeLogic | undefined {
  var sel = selections_mod_HingeLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HingeLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HingeType extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_HingeType) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_HingeType;
}

var selections_mod_HingeType: SelectionEntry_mod_HingeType[] = [
  new SelectionEntry_mod_HingeType("110º", new Matrix_mod_HingeType({ DrillingDistanceType: "Fixed" })),
  new SelectionEntry_mod_HingeType("110ºSoftClose", new Matrix_mod_HingeType({ DrillingDistanceType: "CalculationBasedMin" })),
  new SelectionEntry_mod_HingeType("165º", new Matrix_mod_HingeType({ DrillingDistanceType: "Fixed" })),
  new SelectionEntry_mod_HingeType("155ºSoftClose", new Matrix_mod_HingeType({ DrillingDistanceType: "CalculationBasedMax" })),
  new SelectionEntry_mod_HingeType("BlindCornerInset110ºSoftClose", new Matrix_mod_HingeType({ DrillingDistanceType: "Fixed" })),
  new SelectionEntry_mod_HingeType("NoHinges", new Matrix_mod_HingeType({ DrillingDistanceType: "Fixed" })),
];
function selections_mod_HingeType_find(value: string): SelectionEntry_mod_HingeType | undefined {
  var sel = selections_mod_HingeType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HingeType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HobId extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HobId: SelectionEntry_mod_HobId[] = [
  new SelectionEntry_mod_HobId("PUXU"),
  new SelectionEntry_mod_HobId("ER6A6PB70D"),
  new SelectionEntry_mod_HobId("ET601FNP1E"),
  new SelectionEntry_mod_HobId("EX975LXC1E"),
  new SelectionEntry_mod_HobId("None"),
];
function selections_mod_HobId_find(value: string): SelectionEntry_mod_HobId | undefined {
  var sel = selections_mod_HobId.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HobId'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HobSupplier extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HobSupplier: SelectionEntry_mod_HobSupplier[] = [
  new SelectionEntry_mod_HobSupplier("Siemens"),
  new SelectionEntry_mod_HobSupplier("Bora"),
  new SelectionEntry_mod_HobSupplier("None"),
];
function selections_mod_HobSupplier_find(value: string): SelectionEntry_mod_HobSupplier | undefined {
  var sel = selections_mod_HobSupplier.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HobSupplier'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HoodId extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HoodId: SelectionEntry_mod_HoodId[] = [
  new SelectionEntry_mod_HoodId("LC96BBM50"),
  new SelectionEntry_mod_HoodId("LC66BBM50"),
  new SelectionEntry_mod_HoodId("LC85KDK60"),
  new SelectionEntry_mod_HoodId("LC65KDK60"),
  new SelectionEntry_mod_HoodId("None"),
  new SelectionEntry_mod_HoodId("LI99SA684"),
];
function selections_mod_HoodId_find(value: string): SelectionEntry_mod_HoodId | undefined {
  var sel = selections_mod_HoodId.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HoodId'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_HoodSupplier extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_HoodSupplier: SelectionEntry_mod_HoodSupplier[] = [
  new SelectionEntry_mod_HoodSupplier("Siemens"),
  new SelectionEntry_mod_HoodSupplier("None"),
];
function selections_mod_HoodSupplier_find(value: string): SelectionEntry_mod_HoodSupplier | undefined {
  var sel = selections_mod_HoodSupplier.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_HoodSupplier'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_IslandBackwallWidth extends SelectionEntryBase_number {
  constructor(value?: number, min?: number, max?: number, step?: number
  ) {
    super(value, min, max, step);
  }
}

var selections_mod_IslandBackwallWidth: SelectionEntry_mod_IslandBackwallWidth[] = [
  new SelectionEntry_mod_IslandBackwallWidth(undefined, 150, 5000, 1),
];
function selections_mod_IslandBackwallWidth_find(value: number): SelectionEntry_mod_IslandBackwallWidth | undefined {
  var sel = selections_mod_IslandBackwallWidth.find(p => findNumberEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_IslandBackwallWidth'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_LaundryMachineId extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_LaundryMachineId: SelectionEntry_mod_LaundryMachineId[] = [
  new SelectionEntry_mod_LaundryMachineId("GenericMachine"),
];
function selections_mod_LaundryMachineId_find(value: string): SelectionEntry_mod_LaundryMachineId | undefined {
  var sel = selections_mod_LaundryMachineId.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_LaundryMachineId'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_LaundryMachineSupplier extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_LaundryMachineSupplier: SelectionEntry_mod_LaundryMachineSupplier[] = [
  new SelectionEntry_mod_LaundryMachineSupplier("GenericSupplier"),
];
function selections_mod_LaundryMachineSupplier_find(value: string): SelectionEntry_mod_LaundryMachineSupplier | undefined {
  var sel = selections_mod_LaundryMachineSupplier.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_LaundryMachineSupplier'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_LightPart extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_LightPart: SelectionEntry_mod_LightPart[] = [
  new SelectionEntry_mod_LightPart("BottomShelf"),
  new SelectionEntry_mod_LightPart("TopShelf"),
];
function selections_mod_LightPart_find(value: string): SelectionEntry_mod_LightPart | undefined {
  var sel = selections_mod_LightPart.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_LightPart'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_LightPosX extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_LightPosX) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_LightPosX;
}

var selections_mod_LightPosX: SelectionEntry_mod_LightPosX[] = [
  new SelectionEntry_mod_LightPosX("100mm_x_100mm", new Matrix_mod_LightPosX({ Descriptor: "100mm_1_100mm" })),
  new SelectionEntry_mod_LightPosX("100mm_x_x_100mm", new Matrix_mod_LightPosX({ Descriptor: "100mm_1_1_100mm" })),
  new SelectionEntry_mod_LightPosX("Central", new Matrix_mod_LightPosX({ Descriptor: "1_1" })),
  new SelectionEntry_mod_LightPosX("FreePosition", new Matrix_mod_LightPosX({ Descriptor: "FreePosition" })),
  new SelectionEntry_mod_LightPosX("CompleteLedStrip", new Matrix_mod_LightPosX({ Descriptor: "0mm_1_0mm" })),
  new SelectionEntry_mod_LightPosX("342mm", new Matrix_mod_LightPosX({ Descriptor: "1_342mm_1" })),
  new SelectionEntry_mod_LightPosX("442mm", new Matrix_mod_LightPosX({ Descriptor: "1_442mm_1" })),
  new SelectionEntry_mod_LightPosX("DescriptorBased", new Matrix_mod_LightPosX({})),
];
function selections_mod_LightPosX_find(value: string): SelectionEntry_mod_LightPosX | undefined {
  var sel = selections_mod_LightPosX.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_LightPosX'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_LightSystem extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_LightSystem) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_LightSystem;
}

var selections_mod_LightSystem: SelectionEntry_mod_LightSystem[] = [
  new SelectionEntry_mod_LightSystem("Spot", new Matrix_mod_LightSystem({ Length: 68, Width: 68, Radius: 34, Depth: 12, EscapeDrill_Offset: 0, EscapeDrill_Diameter: 8 })),
  new SelectionEntry_mod_LightSystem("LedStrip", new Matrix_mod_LightSystem({ Length: 0, Width: 30, Radius: 9, Depth: 13, EscapeDrill_Offset: 0, EscapeDrill_Diameter: 8 })),
  new SelectionEntry_mod_LightSystem("NoLight", new Matrix_mod_LightSystem({ Length: 0, Width: 0, Radius: 0, Depth: 0 })),
];
function selections_mod_LightSystem_find(value: string): SelectionEntry_mod_LightSystem | undefined {
  var sel = selections_mod_LightSystem.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_LightSystem'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_MirrorBoardColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_MirrorBoardColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_MirrorBoardColor;
}

var selections_mod_MirrorBoardColor: SelectionEntry_mod_MirrorBoardColor[] = [
  new SelectionEntry_mod_MirrorBoardColor("316", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_MirrorBoardColor("326", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_MirrorBoardColor("152", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_MirrorBoardColor("155", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_MirrorBoardColor("160", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_MirrorBoardColor("165", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_MirrorBoardColor("190", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_MirrorBoardColor("199", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_MirrorBoardColor("214", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_MirrorBoardColor("324", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_MirrorBoardColor("215", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_MirrorBoardColor("229", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_MirrorBoardColor("230", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_MirrorBoardColor("240", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_MirrorBoardColor("222", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_MirrorBoardColor("380", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_MirrorBoardColor("178", new Matrix_mod_MirrorBoardColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_MirrorBoardColor_find(value: string): SelectionEntry_mod_MirrorBoardColor | undefined {
  var sel = selections_mod_MirrorBoardColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_MirrorBoardColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_MirrorBoardProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_MirrorBoardProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_MirrorBoardProgram;
}

var selections_mod_MirrorBoardProgram: SelectionEntry_mod_MirrorBoardProgram[] = [
  new SelectionEntry_mod_MirrorBoardProgram("ModernNature", new Matrix_mod_MirrorBoardProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_MirrorBoardProgram("Nature", new Matrix_mod_MirrorBoardProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_MirrorBoardProgram("Classic", new Matrix_mod_MirrorBoardProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_MirrorBoardProgram_find(value: string): SelectionEntry_mod_MirrorBoardProgram | undefined {
  var sel = selections_mod_MirrorBoardProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_MirrorBoardProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_MirrorColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_MirrorColor: SelectionEntry_mod_MirrorColor[] = [
  new SelectionEntry_mod_MirrorColor("Mirror"),
];
function selections_mod_MirrorColor_find(value: string): SelectionEntry_mod_MirrorColor | undefined {
  var sel = selections_mod_MirrorColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_MirrorColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_MixerId extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_MixerId: SelectionEntry_mod_MixerId[] = [
  new SelectionEntry_mod_MixerId("Minta"),
  new SelectionEntry_mod_MixerId("Cosmopolitan"),
  new SelectionEntry_mod_MixerId("None"),
];
function selections_mod_MixerId_find(value: string): SelectionEntry_mod_MixerId | undefined {
  var sel = selections_mod_MixerId.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_MixerId'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_MixerSupplier extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_MixerSupplier: SelectionEntry_mod_MixerSupplier[] = [
  new SelectionEntry_mod_MixerSupplier("Grohe"),
  new SelectionEntry_mod_MixerSupplier("None"),
];
function selections_mod_MixerSupplier_find(value: string): SelectionEntry_mod_MixerSupplier | undefined {
  var sel = selections_mod_MixerSupplier.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_MixerSupplier'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_Model extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_Model: SelectionEntry_mod_Model[] = [
  new SelectionEntry_mod_Model("Classic"),
  new SelectionEntry_mod_Model("Modern"),
  new SelectionEntry_mod_Model("Country"),
];
function selections_mod_Model_find(value: string): SelectionEntry_mod_Model | undefined {
  var sel = selections_mod_Model.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_Model'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_MountingPlateType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_MountingPlateType: SelectionEntry_mod_MountingPlateType[] = [
  new SelectionEntry_mod_MountingPlateType("Horizontal"),
  new SelectionEntry_mod_MountingPlateType("CruciformSM"),
  new SelectionEntry_mod_MountingPlateType("CruciformA"),
];
function selections_mod_MountingPlateType_find(value: string): SelectionEntry_mod_MountingPlateType | undefined {
  var sel = selections_mod_MountingPlateType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_MountingPlateType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_OpeningType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_OpeningType: SelectionEntry_mod_OpeningType[] = [
  new SelectionEntry_mod_OpeningType("Handle"),
  new SelectionEntry_mod_OpeningType("PushToOpenElectric"),
  new SelectionEntry_mod_OpeningType("PushToOpenManual"),
];
function selections_mod_OpeningType_find(value: string): SelectionEntry_mod_OpeningType | undefined {
  var sel = selections_mod_OpeningType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_OpeningType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_OvenId1 extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_OvenId1: SelectionEntry_mod_OvenId1[] = [
  new SelectionEntry_mod_OvenId1("None"),
  new SelectionEntry_mod_OvenId1("BI510CNR0"),
  new SelectionEntry_mod_OvenId1("CM776GKB1"),
  new SelectionEntry_mod_OvenId1("BE732R1B1"),
  new SelectionEntry_mod_OvenId1("CS736G1B1"),
  new SelectionEntry_mod_OvenId1("HB774G1B1"),
  new SelectionEntry_mod_OvenId1("HE510ABS2"),
];
function selections_mod_OvenId1_find(value: string): SelectionEntry_mod_OvenId1 | undefined {
  var sel = selections_mod_OvenId1.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_OvenId1'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_OvenId2 extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_OvenId2: SelectionEntry_mod_OvenId2[] = [
  new SelectionEntry_mod_OvenId2("None"),
  new SelectionEntry_mod_OvenId2("BI510CNR0"),
  new SelectionEntry_mod_OvenId2("CM776GKB1"),
  new SelectionEntry_mod_OvenId2("BE732R1B1"),
  new SelectionEntry_mod_OvenId2("CS736G1B1"),
  new SelectionEntry_mod_OvenId2("HB774G1B1"),
  new SelectionEntry_mod_OvenId2("HE510ABS2"),
];
function selections_mod_OvenId2_find(value: string): SelectionEntry_mod_OvenId2 | undefined {
  var sel = selections_mod_OvenId2.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_OvenId2'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_OvenId3 extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_OvenId3: SelectionEntry_mod_OvenId3[] = [
  new SelectionEntry_mod_OvenId3("None"),
  new SelectionEntry_mod_OvenId3("BI510CNR0"),
  new SelectionEntry_mod_OvenId3("CM776GKB1"),
  new SelectionEntry_mod_OvenId3("BE732R1B1"),
  new SelectionEntry_mod_OvenId3("CS736G1B1"),
  new SelectionEntry_mod_OvenId3("HB774G1B1"),
  new SelectionEntry_mod_OvenId3("HE510ABS2"),
];
function selections_mod_OvenId3_find(value: string): SelectionEntry_mod_OvenId3 | undefined {
  var sel = selections_mod_OvenId3.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_OvenId3'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_OvenSupplier1 extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_OvenSupplier1: SelectionEntry_mod_OvenSupplier1[] = [
  new SelectionEntry_mod_OvenSupplier1("None"),
  new SelectionEntry_mod_OvenSupplier1("Siemens"),
];
function selections_mod_OvenSupplier1_find(value: string): SelectionEntry_mod_OvenSupplier1 | undefined {
  var sel = selections_mod_OvenSupplier1.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_OvenSupplier1'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_OvenSupplier2 extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_OvenSupplier2: SelectionEntry_mod_OvenSupplier2[] = [
  new SelectionEntry_mod_OvenSupplier2("None"),
  new SelectionEntry_mod_OvenSupplier2("Siemens"),
];
function selections_mod_OvenSupplier2_find(value: string): SelectionEntry_mod_OvenSupplier2 | undefined {
  var sel = selections_mod_OvenSupplier2.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_OvenSupplier2'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_OvenSupplier3 extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_OvenSupplier3: SelectionEntry_mod_OvenSupplier3[] = [
  new SelectionEntry_mod_OvenSupplier3("None"),
  new SelectionEntry_mod_OvenSupplier3("Siemens"),
];
function selections_mod_OvenSupplier3_find(value: string): SelectionEntry_mod_OvenSupplier3 | undefined {
  var sel = selections_mod_OvenSupplier3.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_OvenSupplier3'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PaneltopColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_PaneltopColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_PaneltopColor;
}

var selections_mod_PaneltopColor: SelectionEntry_mod_PaneltopColor[] = [
  new SelectionEntry_mod_PaneltopColor("316", new Matrix_mod_PaneltopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_PaneltopColor("326", new Matrix_mod_PaneltopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_PaneltopColor("152", new Matrix_mod_PaneltopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_PaneltopColor("155", new Matrix_mod_PaneltopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_PaneltopColor("160", new Matrix_mod_PaneltopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_PaneltopColor("165", new Matrix_mod_PaneltopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_PaneltopColor("190", new Matrix_mod_PaneltopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_PaneltopColor("199", new Matrix_mod_PaneltopColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_PaneltopColor("214", new Matrix_mod_PaneltopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_PaneltopColor("324", new Matrix_mod_PaneltopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_PaneltopColor("215", new Matrix_mod_PaneltopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_PaneltopColor("229", new Matrix_mod_PaneltopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_PaneltopColor("230", new Matrix_mod_PaneltopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_PaneltopColor("240", new Matrix_mod_PaneltopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_PaneltopColor("222", new Matrix_mod_PaneltopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_PaneltopColor("380", new Matrix_mod_PaneltopColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_PaneltopColor("178", new Matrix_mod_PaneltopColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_PaneltopColor_find(value: string): SelectionEntry_mod_PaneltopColor | undefined {
  var sel = selections_mod_PaneltopColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PaneltopColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PaneltopConstruction extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PaneltopConstruction: SelectionEntry_mod_PaneltopConstruction[] = [
  new SelectionEntry_mod_PaneltopConstruction("Construction1"),
];
function selections_mod_PaneltopConstruction_find(value: string): SelectionEntry_mod_PaneltopConstruction | undefined {
  var sel = selections_mod_PaneltopConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PaneltopConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PaneltopEdgeBackColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PaneltopEdgeBackColor: SelectionEntry_mod_PaneltopEdgeBackColor[] = [
  new SelectionEntry_mod_PaneltopEdgeBackColor("316"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("326"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("152"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("155"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("160"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("165"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("190"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("199"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("214"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("324"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("215"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("229"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("230"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("240"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("222"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("380"),
  new SelectionEntry_mod_PaneltopEdgeBackColor("178"),
];
function selections_mod_PaneltopEdgeBackColor_find(value: string): SelectionEntry_mod_PaneltopEdgeBackColor | undefined {
  var sel = selections_mod_PaneltopEdgeBackColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PaneltopEdgeBackColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PaneltopEdgeFrontColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PaneltopEdgeFrontColor: SelectionEntry_mod_PaneltopEdgeFrontColor[] = [
  new SelectionEntry_mod_PaneltopEdgeFrontColor("316"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("326"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("152"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("155"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("160"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("165"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("190"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("199"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("214"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("324"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("215"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("229"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("230"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("240"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("222"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("380"),
  new SelectionEntry_mod_PaneltopEdgeFrontColor("178"),
];
function selections_mod_PaneltopEdgeFrontColor_find(value: string): SelectionEntry_mod_PaneltopEdgeFrontColor | undefined {
  var sel = selections_mod_PaneltopEdgeFrontColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PaneltopEdgeFrontColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PaneltopEdgeLeftColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PaneltopEdgeLeftColor: SelectionEntry_mod_PaneltopEdgeLeftColor[] = [
  new SelectionEntry_mod_PaneltopEdgeLeftColor("316"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("326"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("152"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("155"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("160"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("165"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("190"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("199"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("214"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("324"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("215"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("229"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("230"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("240"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("222"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("380"),
  new SelectionEntry_mod_PaneltopEdgeLeftColor("178"),
];
function selections_mod_PaneltopEdgeLeftColor_find(value: string): SelectionEntry_mod_PaneltopEdgeLeftColor | undefined {
  var sel = selections_mod_PaneltopEdgeLeftColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PaneltopEdgeLeftColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PaneltopEdgeRightColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PaneltopEdgeRightColor: SelectionEntry_mod_PaneltopEdgeRightColor[] = [
  new SelectionEntry_mod_PaneltopEdgeRightColor("316"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("326"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("152"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("155"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("160"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("165"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("190"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("199"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("214"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("324"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("215"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("229"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("230"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("240"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("222"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("380"),
  new SelectionEntry_mod_PaneltopEdgeRightColor("178"),
];
function selections_mod_PaneltopEdgeRightColor_find(value: string): SelectionEntry_mod_PaneltopEdgeRightColor | undefined {
  var sel = selections_mod_PaneltopEdgeRightColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PaneltopEdgeRightColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PaneltopProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_PaneltopProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_PaneltopProgram;
}

var selections_mod_PaneltopProgram: SelectionEntry_mod_PaneltopProgram[] = [
  new SelectionEntry_mod_PaneltopProgram("Style", new Matrix_mod_PaneltopProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_PaneltopProgram("Cube", new Matrix_mod_PaneltopProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_PaneltopProgram_find(value: string): SelectionEntry_mod_PaneltopProgram | undefined {
  var sel = selections_mod_PaneltopProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PaneltopProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PantryPulloutColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PantryPulloutColor: SelectionEntry_mod_PantryPulloutColor[] = [
  new SelectionEntry_mod_PantryPulloutColor("Anthrazit"),
  new SelectionEntry_mod_PantryPulloutColor("SilverGrey"),
  new SelectionEntry_mod_PantryPulloutColor("Automatic"),
];
function selections_mod_PantryPulloutColor_find(value: string): SelectionEntry_mod_PantryPulloutColor | undefined {
  var sel = selections_mod_PantryPulloutColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PantryPulloutColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PantryPulloutDesign extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PantryPulloutDesign: SelectionEntry_mod_PantryPulloutDesign[] = [
  new SelectionEntry_mod_PantryPulloutDesign("Classic"),
  new SelectionEntry_mod_PantryPulloutDesign("Style"),
];
function selections_mod_PantryPulloutDesign_find(value: string): SelectionEntry_mod_PantryPulloutDesign | undefined {
  var sel = selections_mod_PantryPulloutDesign.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PantryPulloutDesign'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PantryPulloutType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PantryPulloutType: SelectionEntry_mod_PantryPulloutType[] = [
  new SelectionEntry_mod_PantryPulloutType("Dispensa"),
];
function selections_mod_PantryPulloutType_find(value: string): SelectionEntry_mod_PantryPulloutType | undefined {
  var sel = selections_mod_PantryPulloutType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PantryPulloutType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PlinthAreaDesign extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_PlinthAreaDesign) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_PlinthAreaDesign;
}

var selections_mod_PlinthAreaDesign: SelectionEntry_mod_PlinthAreaDesign[] = [
  new SelectionEntry_mod_PlinthAreaDesign("10", new Matrix_mod_PlinthAreaDesign({ PlinthAreaElementColor: "Fixed", PlinthAreaType: "None", PlinthAreaExtraItem: "None" })),
  new SelectionEntry_mod_PlinthAreaDesign("20", new Matrix_mod_PlinthAreaDesign({ PlinthAreaElementColor: "Fixed", PlinthAreaType: "Leg", PlinthAreaExtraItem: "None" })),
  new SelectionEntry_mod_PlinthAreaDesign("30", new Matrix_mod_PlinthAreaDesign({ PlinthAreaElementColor: "Fixed", PlinthAreaType: "Leg", PlinthAreaExtraItem: "None" })),
  new SelectionEntry_mod_PlinthAreaDesign("40", new Matrix_mod_PlinthAreaDesign({ PlinthAreaElementColor: "Fixed", PlinthAreaType: "Leg", PlinthAreaExtraItem: "Attribute" })),
  new SelectionEntry_mod_PlinthAreaDesign("50", new Matrix_mod_PlinthAreaDesign({ PlinthAreaElementColor: "Attribute", PlinthAreaType: "Leg", PlinthAreaExtraItem: "None" })),
  new SelectionEntry_mod_PlinthAreaDesign("90", new Matrix_mod_PlinthAreaDesign({ PlinthAreaElementColor: "Fixed", PlinthAreaType: "Baseboard+Legs", PlinthAreaExtraItem: "None" })),
];
function selections_mod_PlinthAreaDesign_find(value: string): SelectionEntry_mod_PlinthAreaDesign | undefined {
  var sel = selections_mod_PlinthAreaDesign.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PlinthAreaDesign'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PlinthAreaElementColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PlinthAreaElementColor: SelectionEntry_mod_PlinthAreaElementColor[] = [
  new SelectionEntry_mod_PlinthAreaElementColor("StainlessSteel"),
  new SelectionEntry_mod_PlinthAreaElementColor("StainlessSteelMattBrushed"),
  new SelectionEntry_mod_PlinthAreaElementColor("Black"),
  new SelectionEntry_mod_PlinthAreaElementColor("NickelPlated"),
  new SelectionEntry_mod_PlinthAreaElementColor("Tin"),
  new SelectionEntry_mod_PlinthAreaElementColor("Fixed"),
];
function selections_mod_PlinthAreaElementColor_find(value: string): SelectionEntry_mod_PlinthAreaElementColor | undefined {
  var sel = selections_mod_PlinthAreaElementColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PlinthAreaElementColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PlinthAreaExtraItem extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_PlinthAreaExtraItem) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_PlinthAreaExtraItem;
}

var selections_mod_PlinthAreaExtraItem: SelectionEntry_mod_PlinthAreaExtraItem[] = [
  new SelectionEntry_mod_PlinthAreaExtraItem("None", new Matrix_mod_PlinthAreaExtraItem({ HeightExtension: 0 })),
  new SelectionEntry_mod_PlinthAreaExtraItem("NoiseReduction", new Matrix_mod_PlinthAreaExtraItem({ HeightExtension: 6.5 })),
  new SelectionEntry_mod_PlinthAreaExtraItem("SensitiveFloors", new Matrix_mod_PlinthAreaExtraItem({ HeightExtension: 2 })),
];
function selections_mod_PlinthAreaExtraItem_find(value: string): SelectionEntry_mod_PlinthAreaExtraItem | undefined {
  var sel = selections_mod_PlinthAreaExtraItem.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PlinthAreaExtraItem'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PlinthAreaHeight extends SelectionEntryBase_number {
  constructor(value?: number, min?: number, max?: number, step?: number
  ) {
    super(value, min, max, step);
  }
}

var selections_mod_PlinthAreaHeight: SelectionEntry_mod_PlinthAreaHeight[] = [
  new SelectionEntry_mod_PlinthAreaHeight(50, undefined, undefined, undefined),
  new SelectionEntry_mod_PlinthAreaHeight(80, undefined, undefined, undefined),
  new SelectionEntry_mod_PlinthAreaHeight(100, undefined, undefined, undefined),
  new SelectionEntry_mod_PlinthAreaHeight(120, undefined, undefined, undefined),
  new SelectionEntry_mod_PlinthAreaHeight(150, undefined, undefined, undefined),
  new SelectionEntry_mod_PlinthAreaHeight(200, undefined, undefined, undefined),
  new SelectionEntry_mod_PlinthAreaHeight(250, undefined, undefined, undefined),
  new SelectionEntry_mod_PlinthAreaHeight(0, undefined, undefined, undefined),
  new SelectionEntry_mod_PlinthAreaHeight(119, undefined, undefined, undefined),
];
function selections_mod_PlinthAreaHeight_find(value: number): SelectionEntry_mod_PlinthAreaHeight | undefined {
  var sel = selections_mod_PlinthAreaHeight.find(p => findNumberEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PlinthAreaHeight'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PlinthAreaPosBackMatrix extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PlinthAreaPosBackMatrix: SelectionEntry_mod_PlinthAreaPosBackMatrix[] = [
  new SelectionEntry_mod_PlinthAreaPosBackMatrix("BCF"),
];
function selections_mod_PlinthAreaPosBackMatrix_find(value: string): SelectionEntry_mod_PlinthAreaPosBackMatrix | undefined {
  var sel = selections_mod_PlinthAreaPosBackMatrix.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PlinthAreaPosBackMatrix'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PlinthAreaPosFrontMatrix extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PlinthAreaPosFrontMatrix: SelectionEntry_mod_PlinthAreaPosFrontMatrix[] = [
  new SelectionEntry_mod_PlinthAreaPosFrontMatrix("FCF"),
  new SelectionEntry_mod_PlinthAreaPosFrontMatrix("FCR"),
];
function selections_mod_PlinthAreaPosFrontMatrix_find(value: string): SelectionEntry_mod_PlinthAreaPosFrontMatrix | undefined {
  var sel = selections_mod_PlinthAreaPosFrontMatrix.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PlinthAreaPosFrontMatrix'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PlinthAreaPosLeftMatrix extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PlinthAreaPosLeftMatrix: SelectionEntry_mod_PlinthAreaPosLeftMatrix[] = [
  new SelectionEntry_mod_PlinthAreaPosLeftMatrix("LCF"),
  new SelectionEntry_mod_PlinthAreaPosLeftMatrix("LCR"),
];
function selections_mod_PlinthAreaPosLeftMatrix_find(value: string): SelectionEntry_mod_PlinthAreaPosLeftMatrix | undefined {
  var sel = selections_mod_PlinthAreaPosLeftMatrix.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PlinthAreaPosLeftMatrix'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PlinthAreaPosLogic extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PlinthAreaPosLogic: SelectionEntry_mod_PlinthAreaPosLogic[] = [
  new SelectionEntry_mod_PlinthAreaPosLogic("Library"),
  new SelectionEntry_mod_PlinthAreaPosLogic("Custom"),
];
function selections_mod_PlinthAreaPosLogic_find(value: string): SelectionEntry_mod_PlinthAreaPosLogic | undefined {
  var sel = selections_mod_PlinthAreaPosLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PlinthAreaPosLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PlinthAreaPosRightMatrix extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PlinthAreaPosRightMatrix: SelectionEntry_mod_PlinthAreaPosRightMatrix[] = [
  new SelectionEntry_mod_PlinthAreaPosRightMatrix("RCF"),
  new SelectionEntry_mod_PlinthAreaPosRightMatrix("RCR"),
];
function selections_mod_PlinthAreaPosRightMatrix_find(value: string): SelectionEntry_mod_PlinthAreaPosRightMatrix | undefined {
  var sel = selections_mod_PlinthAreaPosRightMatrix.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PlinthAreaPosRightMatrix'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PlinthAreaVisLeftSelection extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PlinthAreaVisLeftSelection: SelectionEntry_mod_PlinthAreaVisLeftSelection[] = [
  new SelectionEntry_mod_PlinthAreaVisLeftSelection("Automatic"),
  new SelectionEntry_mod_PlinthAreaVisLeftSelection("Visible"),
  new SelectionEntry_mod_PlinthAreaVisLeftSelection("NotVisible"),
];
function selections_mod_PlinthAreaVisLeftSelection_find(value: string): SelectionEntry_mod_PlinthAreaVisLeftSelection | undefined {
  var sel = selections_mod_PlinthAreaVisLeftSelection.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PlinthAreaVisLeftSelection'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PlinthAreaVisRightSelection extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PlinthAreaVisRightSelection: SelectionEntry_mod_PlinthAreaVisRightSelection[] = [
  new SelectionEntry_mod_PlinthAreaVisRightSelection("Automatic"),
  new SelectionEntry_mod_PlinthAreaVisRightSelection("Visible"),
  new SelectionEntry_mod_PlinthAreaVisRightSelection("NotVisible"),
];
function selections_mod_PlinthAreaVisRightSelection_find(value: string): SelectionEntry_mod_PlinthAreaVisRightSelection | undefined {
  var sel = selections_mod_PlinthAreaVisRightSelection.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PlinthAreaVisRightSelection'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_Program extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_Program) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_Program;
}

var selections_mod_Program: SelectionEntry_mod_Program[] = [
  new SelectionEntry_mod_Program("Demoprogram1", new Matrix_mod_Program({})),
  new SelectionEntry_mod_Program("Demoprogram2", new Matrix_mod_Program({})),
  new SelectionEntry_mod_Program("Demoprogram3", new Matrix_mod_Program({})),
];
function selections_mod_Program_find(value: string): SelectionEntry_mod_Program | undefined {
  var sel = selections_mod_Program.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_Program'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PulloutConnectionPosition extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PulloutConnectionPosition: SelectionEntry_mod_PulloutConnectionPosition[] = [
  new SelectionEntry_mod_PulloutConnectionPosition("left"),
  new SelectionEntry_mod_PulloutConnectionPosition("right"),
];
function selections_mod_PulloutConnectionPosition_find(value: string): SelectionEntry_mod_PulloutConnectionPosition | undefined {
  var sel = selections_mod_PulloutConnectionPosition.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PulloutConnectionPosition'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PulloutDesign extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PulloutDesign: SelectionEntry_mod_PulloutDesign[] = [
  new SelectionEntry_mod_PulloutDesign("snelloFioro"),
  new SelectionEntry_mod_PulloutDesign("snelloLibell"),
  new SelectionEntry_mod_PulloutDesign("pinello"),
  new SelectionEntry_mod_PulloutDesign("arenaPure"),
  new SelectionEntry_mod_PulloutDesign("arenaClassic"),
  new SelectionEntry_mod_PulloutDesign("arenaStyle"),
];
function selections_mod_PulloutDesign_find(value: string): SelectionEntry_mod_PulloutDesign | undefined {
  var sel = selections_mod_PulloutDesign.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PulloutDesign'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PulloutElementColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PulloutElementColor: SelectionEntry_mod_PulloutElementColor[] = [
  new SelectionEntry_mod_PulloutElementColor("white"),
  new SelectionEntry_mod_PulloutElementColor("silver"),
  new SelectionEntry_mod_PulloutElementColor("anthrazit"),
];
function selections_mod_PulloutElementColor_find(value: string): SelectionEntry_mod_PulloutElementColor | undefined {
  var sel = selections_mod_PulloutElementColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PulloutElementColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PulloutType extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_PulloutType) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_PulloutType;
}

var selections_mod_PulloutType: SelectionEntry_mod_PulloutType[] = [
  new SelectionEntry_mod_PulloutType("No15", new Matrix_mod_PulloutType({ PullOutDesign: "Attribute", PullOutElementColor: "Fixed", PullOutConnectionPosition: "Fixed", PushToOpenAvailable: true })),
  new SelectionEntry_mod_PulloutType("Dispensa", new Matrix_mod_PulloutType({ PullOutDesign: "Fixed", PullOutElementColor: "Attribute", PullOutConnectionPosition: "Fixed", PushToOpenAvailable: true })),
  new SelectionEntry_mod_PulloutType("Pinello", new Matrix_mod_PulloutType({ PullOutDesign: "Attribute", PullOutElementColor: "Fixed", PullOutConnectionPosition: "Attribute", PushToOpenAvailable: false })),
];
function selections_mod_PulloutType_find(value: string): SelectionEntry_mod_PulloutType | undefined {
  var sel = selections_mod_PulloutType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PulloutType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PushtoopenColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PushtoopenColor: SelectionEntry_mod_PushtoopenColor[] = [
  new SelectionEntry_mod_PushtoopenColor("DemoBlack"),
  new SelectionEntry_mod_PushtoopenColor("DemoGrey"),
  new SelectionEntry_mod_PushtoopenColor("DemoWhite"),
];
function selections_mod_PushtoopenColor_find(value: string): SelectionEntry_mod_PushtoopenColor | undefined {
  var sel = selections_mod_PushtoopenColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PushtoopenColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PushtoopenPosition extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PushtoopenPosition: SelectionEntry_mod_PushtoopenPosition[] = [
  new SelectionEntry_mod_PushtoopenPosition("Top"),
  new SelectionEntry_mod_PushtoopenPosition("Side"),
  new SelectionEntry_mod_PushtoopenPosition("Bottom"),
  new SelectionEntry_mod_PushtoopenPosition("Automatic"),
];
function selections_mod_PushtoopenPosition_find(value: string): SelectionEntry_mod_PushtoopenPosition | undefined {
  var sel = selections_mod_PushtoopenPosition.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PushtoopenPosition'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_PushtoopenType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_PushtoopenType: SelectionEntry_mod_PushtoopenType[] = [
  new SelectionEntry_mod_PushtoopenType("DrilledCenter"),
  new SelectionEntry_mod_PushtoopenType("DrilledAdjustable"),
  new SelectionEntry_mod_PushtoopenType("WithAdapterHousing"),
  new SelectionEntry_mod_PushtoopenType("Automatic"),
];
function selections_mod_PushtoopenType_find(value: string): SelectionEntry_mod_PushtoopenType | undefined {
  var sel = selections_mod_PushtoopenType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_PushtoopenType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_RackAreaOversizeCarcaseType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_RackAreaOversizeCarcaseType: SelectionEntry_mod_RackAreaOversizeCarcaseType[] = [
  new SelectionEntry_mod_RackAreaOversizeCarcaseType("NoOversize"),
  new SelectionEntry_mod_RackAreaOversizeCarcaseType("FixedOversize"),
  new SelectionEntry_mod_RackAreaOversizeCarcaseType("FlexibleOversize"),
];
function selections_mod_RackAreaOversizeCarcaseType_find(value: string): SelectionEntry_mod_RackAreaOversizeCarcaseType | undefined {
  var sel = selections_mod_RackAreaOversizeCarcaseType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_RackAreaOversizeCarcaseType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_RackAreaShelftopConstruction extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_RackAreaShelftopConstruction: SelectionEntry_mod_RackAreaShelftopConstruction[] = [
  new SelectionEntry_mod_RackAreaShelftopConstruction("Automatic"),
  new SelectionEntry_mod_RackAreaShelftopConstruction("Manual"),
];
function selections_mod_RackAreaShelftopConstruction_find(value: string): SelectionEntry_mod_RackAreaShelftopConstruction | undefined {
  var sel = selections_mod_RackAreaShelftopConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_RackAreaShelftopConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_RackAreaType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_RackAreaType: SelectionEntry_mod_RackAreaType[] = [
  new SelectionEntry_mod_RackAreaType("Fixed"),
  new SelectionEntry_mod_RackAreaType("Adj"),
  new SelectionEntry_mod_RackAreaType("Empty"),
];
function selections_mod_RackAreaType_find(value: string): SelectionEntry_mod_RackAreaType | undefined {
  var sel = selections_mod_RackAreaType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_RackAreaType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelfadjColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_ShelfadjColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_ShelfadjColor;
}

var selections_mod_ShelfadjColor: SelectionEntry_mod_ShelfadjColor[] = [
  new SelectionEntry_mod_ShelfadjColor("316", new Matrix_mod_ShelfadjColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjColor("326", new Matrix_mod_ShelfadjColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjColor("152", new Matrix_mod_ShelfadjColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjColor("155", new Matrix_mod_ShelfadjColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjColor("160", new Matrix_mod_ShelfadjColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjColor("165", new Matrix_mod_ShelfadjColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjColor("190", new Matrix_mod_ShelfadjColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjColor("199", new Matrix_mod_ShelfadjColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjColor("214", new Matrix_mod_ShelfadjColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjColor("324", new Matrix_mod_ShelfadjColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjColor("215", new Matrix_mod_ShelfadjColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjColor("229", new Matrix_mod_ShelfadjColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjColor("230", new Matrix_mod_ShelfadjColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjColor("240", new Matrix_mod_ShelfadjColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjColor("222", new Matrix_mod_ShelfadjColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjColor("380", new Matrix_mod_ShelfadjColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjColor("178", new Matrix_mod_ShelfadjColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjColor("FloatGlass", new Matrix_mod_ShelfadjColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjColor("SatinGlass", new Matrix_mod_ShelfadjColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjColor("GreyGlass", new Matrix_mod_ShelfadjColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjColor("Automatic", new Matrix_mod_ShelfadjColor({})),
  new SelectionEntry_mod_ShelfadjColor("LikeCarcaseColor", new Matrix_mod_ShelfadjColor({})),
];
function selections_mod_ShelfadjColor_find(value: string): SelectionEntry_mod_ShelfadjColor | undefined {
  var sel = selections_mod_ShelfadjColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelfadjColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelfadjDesign extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_ShelfadjDesign: SelectionEntry_mod_ShelfadjDesign[] = [
  new SelectionEntry_mod_ShelfadjDesign("Automatic"),
  new SelectionEntry_mod_ShelfadjDesign("Glass"),
  new SelectionEntry_mod_ShelfadjDesign("Wood"),
];
function selections_mod_ShelfadjDesign_find(value: string): SelectionEntry_mod_ShelfadjDesign | undefined {
  var sel = selections_mod_ShelfadjDesign.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelfadjDesign'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelfadjDrillDistance extends SelectionEntryBase_number {
  constructor(value?: number, min?: number, max?: number, step?: number
  ) {
    super(value, min, max, step);
  }
}

var selections_mod_ShelfadjDrillDistance: SelectionEntry_mod_ShelfadjDrillDistance[] = [
  new SelectionEntry_mod_ShelfadjDrillDistance(0, undefined, undefined, undefined),
  new SelectionEntry_mod_ShelfadjDrillDistance(32, undefined, undefined, undefined),
  new SelectionEntry_mod_ShelfadjDrillDistance(64, undefined, undefined, undefined),
];
function selections_mod_ShelfadjDrillDistance_find(value: number): SelectionEntry_mod_ShelfadjDrillDistance | undefined {
  var sel = selections_mod_ShelfadjDrillDistance.find(p => findNumberEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelfadjDrillDistance'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelfadjDrillType extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_ShelfadjDrillType) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_ShelfadjDrillType;
}

var selections_mod_ShelfadjDrillType: SelectionEntry_mod_ShelfadjDrillType[] = [
  new SelectionEntry_mod_ShelfadjDrillType("Group3Drills", new Matrix_mod_ShelfadjDrillType({ NumberDrillings: 3, ShelfadjQtyRelevant: true })),
  new SelectionEntry_mod_ShelfadjDrillType("Group5Drills", new Matrix_mod_ShelfadjDrillType({ NumberDrillings: 5, ShelfadjQtyRelevant: true })),
  new SelectionEntry_mod_ShelfadjDrillType("FullHeightDrills", new Matrix_mod_ShelfadjDrillType({ NumberDrillings: 0, ShelfadjQtyRelevant: false })),
  new SelectionEntry_mod_ShelfadjDrillType("SingleDrill", new Matrix_mod_ShelfadjDrillType({ NumberDrillings: 1, ShelfadjQtyRelevant: false })),
  new SelectionEntry_mod_ShelfadjDrillType("Automatic", new Matrix_mod_ShelfadjDrillType({ NumberDrillings: 0, ShelfadjQtyRelevant: false })),
];
function selections_mod_ShelfadjDrillType_find(value: string): SelectionEntry_mod_ShelfadjDrillType | undefined {
  var sel = selections_mod_ShelfadjDrillType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelfadjDrillType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelfadjThk extends SelectionEntryBase_number {
  constructor(value?: number, min?: number, max?: number, step?: number
  ) {
    super(value, min, max, step);
  }
}

var selections_mod_ShelfadjThk: SelectionEntry_mod_ShelfadjThk[] = [
  new SelectionEntry_mod_ShelfadjThk(5, undefined, undefined, undefined),
  new SelectionEntry_mod_ShelfadjThk(16, undefined, undefined, undefined),
  new SelectionEntry_mod_ShelfadjThk(19, undefined, undefined, undefined),
  new SelectionEntry_mod_ShelfadjThk(25, undefined, undefined, undefined),
  new SelectionEntry_mod_ShelfadjThk(0, undefined, undefined, undefined),
];
function selections_mod_ShelfadjThk_find(value: number): SelectionEntry_mod_ShelfadjThk | undefined {
  var sel = selections_mod_ShelfadjThk.find(p => findNumberEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelfadjThk'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelfadjWoodColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_ShelfadjWoodColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_ShelfadjWoodColor;
}

var selections_mod_ShelfadjWoodColor: SelectionEntry_mod_ShelfadjWoodColor[] = [
  new SelectionEntry_mod_ShelfadjWoodColor("316", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("326", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("152", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("155", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("160", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("165", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("190", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("199", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("214", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("324", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("215", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("229", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("230", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("240", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("222", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("380", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ShelfadjWoodColor("178", new Matrix_mod_ShelfadjWoodColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_ShelfadjWoodColor_find(value: string): SelectionEntry_mod_ShelfadjWoodColor | undefined {
  var sel = selections_mod_ShelfadjWoodColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelfadjWoodColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelffixedPos extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_ShelffixedPos: SelectionEntry_mod_ShelffixedPos[] = [
  new SelectionEntry_mod_ShelffixedPos("GapMiddle"),
  new SelectionEntry_mod_ShelffixedPos("GapBelow"),
  new SelectionEntry_mod_ShelffixedPos("GapAbove"),
  new SelectionEntry_mod_ShelffixedPos("BehindFingerGrip"),
  new SelectionEntry_mod_ShelffixedPos("AboveFingerGrip"),
];
function selections_mod_ShelffixedPos_find(value: string): SelectionEntry_mod_ShelffixedPos | undefined {
  var sel = selections_mod_ShelffixedPos.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelffixedPos'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelffixedType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_ShelffixedType: SelectionEntry_mod_ShelffixedType[] = [
  new SelectionEntry_mod_ShelffixedType("ContactBw"),
  new SelectionEntry_mod_ShelffixedType("ThroughBw"),
];
function selections_mod_ShelffixedType_find(value: string): SelectionEntry_mod_ShelffixedType | undefined {
  var sel = selections_mod_ShelffixedType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelffixedType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelftopConstruction extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_ShelftopConstruction: SelectionEntry_mod_ShelftopConstruction[] = [
  new SelectionEntry_mod_ShelftopConstruction("ShelfTop"),
  new SelectionEntry_mod_ShelftopConstruction("RailFrontHorizontal"),
  new SelectionEntry_mod_ShelftopConstruction("RailBackHorizontal"),
  new SelectionEntry_mod_ShelftopConstruction("RailFrontVertical"),
  new SelectionEntry_mod_ShelftopConstruction("RailBackVertical"),
  new SelectionEntry_mod_ShelftopConstruction("Heatshelf"),
  new SelectionEntry_mod_ShelftopConstruction("HeatshelfFront"),
  new SelectionEntry_mod_ShelftopConstruction("SlopedCeilingShelfTop"),
];
function selections_mod_ShelftopConstruction_find(value: string): SelectionEntry_mod_ShelftopConstruction | undefined {
  var sel = selections_mod_ShelftopConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelftopConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelvesBackwallFittingConnection extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_ShelvesBackwallFittingConnection: SelectionEntry_mod_ShelvesBackwallFittingConnection[] = [
  new SelectionEntry_mod_ShelvesBackwallFittingConnection("Screws"),
];
function selections_mod_ShelvesBackwallFittingConnection_find(value: string): SelectionEntry_mod_ShelvesBackwallFittingConnection | undefined {
  var sel = selections_mod_ShelvesBackwallFittingConnection.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelvesBackwallFittingConnection'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelvesBrackets extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_ShelvesBrackets) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_ShelvesBrackets;
}

var selections_mod_ShelvesBrackets: SelectionEntry_mod_ShelvesBrackets[] = [
  new SelectionEntry_mod_ShelvesBrackets("Floating", new Matrix_mod_ShelvesBrackets({ Supplier: "Homag", SupItemCode: "Floating" })),
  new SelectionEntry_mod_ShelvesBrackets("ARRAS5", new Matrix_mod_ShelvesBrackets({ Supplier: "Homag", SupItemCode: "ARRAS5" })),
  new SelectionEntry_mod_ShelvesBrackets("Tucano", new Matrix_mod_ShelvesBrackets({ Supplier: "Homag", SupItemCode: "Tucano" })),
];
function selections_mod_ShelvesBrackets_find(value: string): SelectionEntry_mod_ShelvesBrackets | undefined {
  var sel = selections_mod_ShelvesBrackets.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelvesBrackets'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelvesBracketsColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_ShelvesBracketsColor: SelectionEntry_mod_ShelvesBracketsColor[] = [
  new SelectionEntry_mod_ShelvesBracketsColor("316"),
  new SelectionEntry_mod_ShelvesBracketsColor("326"),
  new SelectionEntry_mod_ShelvesBracketsColor("152"),
  new SelectionEntry_mod_ShelvesBracketsColor("155"),
  new SelectionEntry_mod_ShelvesBracketsColor("160"),
  new SelectionEntry_mod_ShelvesBracketsColor("165"),
  new SelectionEntry_mod_ShelvesBracketsColor("190"),
  new SelectionEntry_mod_ShelvesBracketsColor("199"),
  new SelectionEntry_mod_ShelvesBracketsColor("214"),
  new SelectionEntry_mod_ShelvesBracketsColor("324"),
  new SelectionEntry_mod_ShelvesBracketsColor("215"),
  new SelectionEntry_mod_ShelvesBracketsColor("229"),
  new SelectionEntry_mod_ShelvesBracketsColor("230"),
  new SelectionEntry_mod_ShelvesBracketsColor("240"),
  new SelectionEntry_mod_ShelvesBracketsColor("222"),
  new SelectionEntry_mod_ShelvesBracketsColor("380"),
  new SelectionEntry_mod_ShelvesBracketsColor("178"),
];
function selections_mod_ShelvesBracketsColor_find(value: string): SelectionEntry_mod_ShelvesBracketsColor | undefined {
  var sel = selections_mod_ShelvesBracketsColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelvesBracketsColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ShelvesColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_ShelvesColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_ShelvesColor;
}

var selections_mod_ShelvesColor: SelectionEntry_mod_ShelvesColor[] = [
  new SelectionEntry_mod_ShelvesColor("316", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("326", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("152", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("155", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("160", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("165", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("190", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("199", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("214", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("324", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("215", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("229", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("230", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("240", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("222", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("380", new Matrix_mod_ShelvesColor({})),
  new SelectionEntry_mod_ShelvesColor("178", new Matrix_mod_ShelvesColor({ Grain: false })),
];
function selections_mod_ShelvesColor_find(value: string): SelectionEntry_mod_ShelvesColor | undefined {
  var sel = selections_mod_ShelvesColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ShelvesColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_SidepanelType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_SidepanelType: SelectionEntry_mod_SidepanelType[] = [
  new SelectionEntry_mod_SidepanelType("Left"),
  new SelectionEntry_mod_SidepanelType("Right"),
  new SelectionEntry_mod_SidepanelType("Middle"),
];
function selections_mod_SidepanelType_find(value: string): SelectionEntry_mod_SidepanelType | undefined {
  var sel = selections_mod_SidepanelType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_SidepanelType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_SidepanelleftType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_SidepanelleftType: SelectionEntry_mod_SidepanelleftType[] = [
  new SelectionEntry_mod_SidepanelleftType("NoSpAtOutSp"),
  new SelectionEntry_mod_SidepanelleftType("NoSpAtMiSp"),
  new SelectionEntry_mod_SidepanelleftType("NoSpAtOutSpOversized"),
  new SelectionEntry_mod_SidepanelleftType("MiSp"),
  new SelectionEntry_mod_SidepanelleftType("OutSp"),
  new SelectionEntry_mod_SidepanelleftType("NoSp"),
];
function selections_mod_SidepanelleftType_find(value: string): SelectionEntry_mod_SidepanelleftType | undefined {
  var sel = selections_mod_SidepanelleftType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_SidepanelleftType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_SidepanelrightType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_SidepanelrightType: SelectionEntry_mod_SidepanelrightType[] = [
  new SelectionEntry_mod_SidepanelrightType("NoSpAtOutSp"),
  new SelectionEntry_mod_SidepanelrightType("NoSpAtMiSp"),
  new SelectionEntry_mod_SidepanelrightType("NoSpAtOutSpOversized"),
  new SelectionEntry_mod_SidepanelrightType("MiSp"),
  new SelectionEntry_mod_SidepanelrightType("OutSp"),
  new SelectionEntry_mod_SidepanelrightType("NoSp"),
];
function selections_mod_SidepanelrightType_find(value: string): SelectionEntry_mod_SidepanelrightType | undefined {
  var sel = selections_mod_SidepanelrightType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_SidepanelrightType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_SinkId extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_SinkId: SelectionEntry_mod_SinkId[] = [
  new SelectionEntry_mod_SinkId("Axis_R"),
  new SelectionEntry_mod_SinkId("Axis_L"),
  new SelectionEntry_mod_SinkId("Axia_White_R"),
  new SelectionEntry_mod_SinkId("Axia_White_L"),
  new SelectionEntry_mod_SinkId("Axia_Grey_R"),
  new SelectionEntry_mod_SinkId("Axia_Grey_L"),
  new SelectionEntry_mod_SinkId("Axia_Anthrazit_R"),
  new SelectionEntry_mod_SinkId("Axia_Anthrazit_L"),
  new SelectionEntry_mod_SinkId("Dinas_L"),
  new SelectionEntry_mod_SinkId("Dinas_R"),
  new SelectionEntry_mod_SinkId("None"),
  new SelectionEntry_mod_SinkId("Metra_R"),
];
function selections_mod_SinkId_find(value: string): SelectionEntry_mod_SinkId | undefined {
  var sel = selections_mod_SinkId.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_SinkId'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_SinkSupplier extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_SinkSupplier: SelectionEntry_mod_SinkSupplier[] = [
  new SelectionEntry_mod_SinkSupplier("Blanco"),
  new SelectionEntry_mod_SinkSupplier("None"),
];
function selections_mod_SinkSupplier_find(value: string): SelectionEntry_mod_SinkSupplier | undefined {
  var sel = selections_mod_SinkSupplier.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_SinkSupplier'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_SlopedCeilingConstruction extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_SlopedCeilingConstruction: SelectionEntry_mod_SlopedCeilingConstruction[] = [
  new SelectionEntry_mod_SlopedCeilingConstruction("Construction01"),
  new SelectionEntry_mod_SlopedCeilingConstruction("Construction01.1"),
  new SelectionEntry_mod_SlopedCeilingConstruction("Construction02_INPROCESS"),
  new SelectionEntry_mod_SlopedCeilingConstruction("Construction03_INPROCESS"),
];
function selections_mod_SlopedCeilingConstruction_find(value: string): SelectionEntry_mod_SlopedCeilingConstruction | undefined {
  var sel = selections_mod_SlopedCeilingConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_SlopedCeilingConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_SlopedCeilingDimensionLogic extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_SlopedCeilingDimensionLogic) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_SlopedCeilingDimensionLogic;
}

var selections_mod_SlopedCeilingDimensionLogic: SelectionEntry_mod_SlopedCeilingDimensionLogic[] = [
  new SelectionEntry_mod_SlopedCeilingDimensionLogic("FollowWallMaxHeight", new Matrix_mod_SlopedCeilingDimensionLogic({ UseWallData: true, Height: "Max", DimensionLogic: "BasedInTopDepth" })),
  new SelectionEntry_mod_SlopedCeilingDimensionLogic("FollowWallUserHeight", new Matrix_mod_SlopedCeilingDimensionLogic({ UseWallData: true, Height: "User", DimensionLogic: "BasedInHeight" })),
  new SelectionEntry_mod_SlopedCeilingDimensionLogic("IgnoreWallMaxHeight", new Matrix_mod_SlopedCeilingDimensionLogic({ UseWallData: false, Height: "Max", DimensionLogic: "BasedInTopDepth" })),
  new SelectionEntry_mod_SlopedCeilingDimensionLogic("IgnoreWallUserHeight", new Matrix_mod_SlopedCeilingDimensionLogic({ UseWallData: false, Height: "User", DimensionLogic: "BasedInHeight" })),
];
function selections_mod_SlopedCeilingDimensionLogic_find(value: string): SelectionEntry_mod_SlopedCeilingDimensionLogic | undefined {
  var sel = selections_mod_SlopedCeilingDimensionLogic.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_SlopedCeilingDimensionLogic'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ToekickColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_ToekickColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_ToekickColor;
}

var selections_mod_ToekickColor: SelectionEntry_mod_ToekickColor[] = [
  new SelectionEntry_mod_ToekickColor("316", new Matrix_mod_ToekickColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ToekickColor("326", new Matrix_mod_ToekickColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ToekickColor("152", new Matrix_mod_ToekickColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ToekickColor("155", new Matrix_mod_ToekickColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ToekickColor("160", new Matrix_mod_ToekickColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ToekickColor("165", new Matrix_mod_ToekickColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ToekickColor("190", new Matrix_mod_ToekickColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ToekickColor("199", new Matrix_mod_ToekickColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_ToekickColor("214", new Matrix_mod_ToekickColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ToekickColor("324", new Matrix_mod_ToekickColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ToekickColor("215", new Matrix_mod_ToekickColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ToekickColor("229", new Matrix_mod_ToekickColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ToekickColor("230", new Matrix_mod_ToekickColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ToekickColor("240", new Matrix_mod_ToekickColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ToekickColor("222", new Matrix_mod_ToekickColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ToekickColor("380", new Matrix_mod_ToekickColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_ToekickColor("178", new Matrix_mod_ToekickColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_ToekickColor_find(value: string): SelectionEntry_mod_ToekickColor | undefined {
  var sel = selections_mod_ToekickColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ToekickColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ToekickProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_ToekickProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_ToekickProgram;
}

var selections_mod_ToekickProgram: SelectionEntry_mod_ToekickProgram[] = [
  new SelectionEntry_mod_ToekickProgram("Classic", new Matrix_mod_ToekickProgram({ GrainGroupId: "Neutral" })),
  new SelectionEntry_mod_ToekickProgram("Nature", new Matrix_mod_ToekickProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_ToekickProgram("ModernNature", new Matrix_mod_ToekickProgram({ GrainGroupId: "Horizontal" })),
];
function selections_mod_ToekickProgram_find(value: string): SelectionEntry_mod_ToekickProgram | undefined {
  var sel = selections_mod_ToekickProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ToekickProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_ToekickSidepanelTransitionType extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_ToekickSidepanelTransitionType: SelectionEntry_mod_ToekickSidepanelTransitionType[] = [
  new SelectionEntry_mod_ToekickSidepanelTransitionType("FrontLong"),
  new SelectionEntry_mod_ToekickSidepanelTransitionType("FrontShort"),
];
function selections_mod_ToekickSidepanelTransitionType_find(value: string): SelectionEntry_mod_ToekickSidepanelTransitionType | undefined {
  var sel = selections_mod_ToekickSidepanelTransitionType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_ToekickSidepanelTransitionType'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_TypeElement extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_TypeElement: SelectionEntry_mod_TypeElement[] = [
  new SelectionEntry_mod_TypeElement("BaseUnit"),
  new SelectionEntry_mod_TypeElement("BaseUnitSink"),
  new SelectionEntry_mod_TypeElement("BaseUnitAppliance"),
  new SelectionEntry_mod_TypeElement("WallUnit"),
  new SelectionEntry_mod_TypeElement("TallUnit"),
  new SelectionEntry_mod_TypeElement("TallUnitAppliance"),
  new SelectionEntry_mod_TypeElement("EasyMode"),
  new SelectionEntry_mod_TypeElement("CornerUnitStraight"),
  new SelectionEntry_mod_TypeElement("Filler"),
  new SelectionEntry_mod_TypeElement("Filler01"),
  new SelectionEntry_mod_TypeElement("WashdisherPanel"),
  new SelectionEntry_mod_TypeElement("CornerFiller"),
  new SelectionEntry_mod_TypeElement("Upright"),
];
function selections_mod_TypeElement_find(value: string): SelectionEntry_mod_TypeElement | undefined {
  var sel = selections_mod_TypeElement.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_TypeElement'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_UprightColor extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_UprightColor) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_UprightColor;
}

var selections_mod_UprightColor: SelectionEntry_mod_UprightColor[] = [
  new SelectionEntry_mod_UprightColor("316", new Matrix_mod_UprightColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_UprightColor("326", new Matrix_mod_UprightColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_UprightColor("152", new Matrix_mod_UprightColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_UprightColor("155", new Matrix_mod_UprightColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_UprightColor("160", new Matrix_mod_UprightColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_UprightColor("165", new Matrix_mod_UprightColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_UprightColor("190", new Matrix_mod_UprightColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_UprightColor("199", new Matrix_mod_UprightColor({ GrainGroupId: "NoGrain" })),
  new SelectionEntry_mod_UprightColor("214", new Matrix_mod_UprightColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_UprightColor("324", new Matrix_mod_UprightColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_UprightColor("215", new Matrix_mod_UprightColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_UprightColor("229", new Matrix_mod_UprightColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_UprightColor("230", new Matrix_mod_UprightColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_UprightColor("240", new Matrix_mod_UprightColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_UprightColor("222", new Matrix_mod_UprightColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_UprightColor("380", new Matrix_mod_UprightColor({ GrainGroupId: "Grain" })),
  new SelectionEntry_mod_UprightColor("178", new Matrix_mod_UprightColor({ GrainGroupId: "NoGrain" })),
];
function selections_mod_UprightColor_find(value: string): SelectionEntry_mod_UprightColor | undefined {
  var sel = selections_mod_UprightColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_UprightColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_UprightConstruction extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_UprightConstruction) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_UprightConstruction;
}

var selections_mod_UprightConstruction: SelectionEntry_mod_UprightConstruction[] = [
  new SelectionEntry_mod_UprightConstruction("ToFloor", new Matrix_mod_UprightConstruction({ IncludeFloorProfile: false })),
  new SelectionEntry_mod_UprightConstruction("CarcaseHeight", new Matrix_mod_UprightConstruction({ IncludeFloorProfile: false })),
];
function selections_mod_UprightConstruction_find(value: string): SelectionEntry_mod_UprightConstruction | undefined {
  var sel = selections_mod_UprightConstruction.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_UprightConstruction'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_UprightFloorProfileColor extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_UprightFloorProfileColor: SelectionEntry_mod_UprightFloorProfileColor[] = [
  new SelectionEntry_mod_UprightFloorProfileColor("DemoStainlessSteel"),
  new SelectionEntry_mod_UprightFloorProfileColor("DemoStainlessSteelMattBrushed"),
  new SelectionEntry_mod_UprightFloorProfileColor("DemoBlack"),
  new SelectionEntry_mod_UprightFloorProfileColor("DemoNickelPlated"),
  new SelectionEntry_mod_UprightFloorProfileColor("DemoTin"),
  new SelectionEntry_mod_UprightFloorProfileColor("DemoBlue"),
];
function selections_mod_UprightFloorProfileColor_find(value: string): SelectionEntry_mod_UprightFloorProfileColor | undefined {
  var sel = selections_mod_UprightFloorProfileColor.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_UprightFloorProfileColor'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_UprightProgram extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_UprightProgram) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_UprightProgram;
}

var selections_mod_UprightProgram: SelectionEntry_mod_UprightProgram[] = [
  new SelectionEntry_mod_UprightProgram("ModernNature", new Matrix_mod_UprightProgram({ GrainGroupId: "Horizontal" })),
  new SelectionEntry_mod_UprightProgram("Nature", new Matrix_mod_UprightProgram({ GrainGroupId: "Vertical" })),
  new SelectionEntry_mod_UprightProgram("Classic", new Matrix_mod_UprightProgram({ GrainGroupId: "Neutral" })),
];
function selections_mod_UprightProgram_find(value: string): SelectionEntry_mod_UprightProgram | undefined {
  var sel = selections_mod_UprightProgram.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_UprightProgram'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_UprightSide extends SelectionEntryBase_string {
  constructor(value?: string
  ) {
    super(value);
  }
}

var selections_mod_UprightSide: SelectionEntry_mod_UprightSide[] = [
  new SelectionEntry_mod_UprightSide("Left"),
  new SelectionEntry_mod_UprightSide("Right"),
];
function selections_mod_UprightSide_find(value: string): SelectionEntry_mod_UprightSide | undefined {
  var sel = selections_mod_UprightSide.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_UprightSide'!");
    return undefined;
  }
  return sel;
}
export class SelectionEntry_mod_VertDividerType extends SelectionEntryBase_string {
  constructor(value?: string
    , matrix?: IMatrix_mod_VertDividerType) {
    super(value);
    this.matrix = matrix;
  }
  matrix?: IMatrix_mod_VertDividerType;
}

var selections_mod_VertDividerType: SelectionEntry_mod_VertDividerType[] = [
  new SelectionEntry_mod_VertDividerType("NoVertDivider", new Matrix_mod_VertDividerType({})),
  new SelectionEntry_mod_VertDividerType("MiddleSide", new Matrix_mod_VertDividerType({ IncludeDivider: true, IncludeDustStrip: false })),
  new SelectionEntry_mod_VertDividerType("Cleat", new Matrix_mod_VertDividerType({ IncludeDivider: true, IncludeDustStrip: false })),
  new SelectionEntry_mod_VertDividerType("DustStripRight", new Matrix_mod_VertDividerType({ IncludeDivider: false, IncludeDustStrip: true })),
  new SelectionEntry_mod_VertDividerType("DustStripLeft", new Matrix_mod_VertDividerType({ IncludeDivider: false, IncludeDustStrip: true })),
  new SelectionEntry_mod_VertDividerType("MiddleSideShort", new Matrix_mod_VertDividerType({ IncludeDivider: true, IncludeDustStrip: false })),
  new SelectionEntry_mod_VertDividerType("Automatic", new Matrix_mod_VertDividerType({})),
];
function selections_mod_VertDividerType_find(value: string): SelectionEntry_mod_VertDividerType | undefined {
  var sel = selections_mod_VertDividerType.find(p => findStringEntry(value, p));
  if (sel == undefined) {
    logError("Could not find the value '" + value + "' in the selections for variant 'mod_VertDividerType'!");
    return undefined;
  }
  return sel;
}
function cmpEqual(a: number, b: number, epsilon: number): boolean {
  if ((a + epsilon) >= b && (a - epsilon) <= b) {
    return true;
  }
  return false;
}
function findNumberEntry(value: number, p: SelectionEntryBase_number) {
  if (p.value != undefined && cmpEqual(p.value, value, p.epsilon)) {
    return true;
  }
  if (p.min != undefined && p.max != undefined) {
    if ((value + p.epsilon) < p.min) {
      return false;
    }
    if ((value - p.epsilon) > p.max) {
      return false;
    }
    if (p.step != undefined && p.step > 0) {
      var diff = value - p.min;
      var mod = diff % p.step;
      if (cmpEqual(mod, 0, p.epsilon) || cmpEqual(mod, p.step, p.epsilon)) {
        return true;
      }
    }
    else {
      return true;
    }
  }
  return false;
}

function findStringEntry(value: string | undefined, p: SelectionEntryBase_string) {
  if (p.value === undefined && value === undefined) {
    return true;
  }
  if (p.value === undefined) {
    return false;
  }
  if (value === undefined) {
    return false;
  }
  if (value.toUpperCase() === p.value.toUpperCase()) {
    return true;
  }
  return false;
}


export class VariantValidation {
  static mod_BackHeight(mod: IModBase | undefined, mod_BackHeight?: number): IMatrix_mod_BackHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BackHeight');
    }
    var matrix = new Matrix_mod_BackHeight();
    if (mod_BackHeight == undefined) {
      logError("The variant 'mod_BackHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BacksplashColor(mod: IModBase | undefined, mod_BacksplashColor?: string): IMatrix_mod_BacksplashColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BacksplashColor');
    }
    var matrix = new Matrix_mod_BacksplashColor();
    if (mod_BacksplashColor == undefined) {
      logError("The variant 'mod_BacksplashColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BacksplashColor_find(mod_BacksplashColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BacksplashHeight(mod: IModBase | undefined, mod_BacksplashHeight?: number): IMatrix_mod_BacksplashHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BacksplashHeight');
    }
    var matrix = new Matrix_mod_BacksplashHeight();
    if (mod_BacksplashHeight == undefined) {
      logError("The variant 'mod_BacksplashHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BacksplashId(mod: IModBase | undefined, mod_BacksplashId?: string): IMatrix_mod_BacksplashId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BacksplashId');
    }
    var matrix = new Matrix_mod_BacksplashId();
    if (mod_BacksplashId == undefined) {
      logError("The variant 'mod_BacksplashId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BacksplashThk(mod: IModBase | undefined, mod_BacksplashThk?: number): IMatrix_mod_BacksplashThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BacksplashThk');
    }
    var matrix = new Matrix_mod_BacksplashThk();
    if (mod_BacksplashThk == undefined) {
      logError("The variant 'mod_BacksplashThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BacksplashWidth(mod: IModBase | undefined, mod_BacksplashWidth?: number): IMatrix_mod_BacksplashWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BacksplashWidth');
    }
    var matrix = new Matrix_mod_BacksplashWidth();
    if (mod_BacksplashWidth == undefined) {
      logError("The variant 'mod_BacksplashWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BackwallFixedHeight(mod: IModBase | undefined, mod_BackwallFixedHeight?: number): IMatrix_mod_BackwallFixedHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BackwallFixedHeight');
    }
    var matrix = new Matrix_mod_BackwallFixedHeight();
    if (mod_BackwallFixedHeight == undefined) {
      logError("The variant 'mod_BackwallFixedHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BackwallPos(mod: IModBase | undefined, mod_BackwallPos?: number): IMatrix_mod_BackwallPos {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BackwallPos');
    }
    var matrix = new Matrix_mod_BackwallPos();
    if (mod_BackwallPos == undefined) {
      logError("The variant 'mod_BackwallPos' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BackwallThk(mod: IModBase | undefined, mod_BackwallThk?: number): IMatrix_mod_BackwallThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BackwallThk');
    }
    var matrix = new Matrix_mod_BackwallThk();
    if (mod_BackwallThk == undefined) {
      logError("The variant 'mod_BackwallThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardColor(mod: IModBase | undefined, mod_BaseboardColor?: string): IMatrix_mod_BaseboardColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardColor');
    }
    var matrix = new Matrix_mod_BaseboardColor();
    if (mod_BaseboardColor == undefined) {
      logError("The variant 'mod_BaseboardColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BaseboardColor_find(mod_BaseboardColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardDepth(mod: IModBase | undefined, mod_BaseboardDepth?: number): IMatrix_mod_BaseboardDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardDepth');
    }
    var matrix = new Matrix_mod_BaseboardDepth();
    if (mod_BaseboardDepth == undefined) {
      logError("The variant 'mod_BaseboardDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardDepthLogic(mod: IModBase | undefined, mod_BaseboardDepthLogic?: string): IMatrix_mod_BaseboardDepthLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardDepthLogic');
    }
    var matrix = new Matrix_mod_BaseboardDepthLogic();
    if (mod_BaseboardDepthLogic == undefined) {
      logError("The variant 'mod_BaseboardDepthLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BaseboardDepthLogic_find(mod_BaseboardDepthLogic);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardEdgeBackColor(mod: IModBase | undefined, mod_BaseboardEdgeBackColor?: string): IMatrix_mod_BaseboardEdgeBackColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardEdgeBackColor');
    }
    var matrix = new Matrix_mod_BaseboardEdgeBackColor();
    if (mod_BaseboardEdgeBackColor == undefined) {
      logError("The variant 'mod_BaseboardEdgeBackColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BaseboardEdgeBackColor_find(mod_BaseboardEdgeBackColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardEdgeColor(mod: IModBase | undefined, mod_BaseboardEdgeColor?: string): IMatrix_mod_BaseboardEdgeColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardEdgeColor');
    }
    var matrix = new Matrix_mod_BaseboardEdgeColor();
    if (mod_BaseboardEdgeColor == undefined) {
      logError("The variant 'mod_BaseboardEdgeColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BaseboardEdgeColor_find(mod_BaseboardEdgeColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardEdgeFrontColor(mod: IModBase | undefined, mod_BaseboardEdgeFrontColor?: string): IMatrix_mod_BaseboardEdgeFrontColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardEdgeFrontColor');
    }
    var matrix = new Matrix_mod_BaseboardEdgeFrontColor();
    if (mod_BaseboardEdgeFrontColor == undefined) {
      logError("The variant 'mod_BaseboardEdgeFrontColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BaseboardEdgeFrontColor_find(mod_BaseboardEdgeFrontColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardId(mod: IModBase | undefined, mod_BaseboardId?: string): IMatrix_mod_BaseboardId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardId');
    }
    var matrix = new Matrix_mod_BaseboardId();
    if (mod_BaseboardId == undefined) {
      logError("The variant 'mod_BaseboardId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardLength(mod: IModBase | undefined, mod_BaseboardLength?: number): IMatrix_mod_BaseboardLength {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardLength');
    }
    var matrix = new Matrix_mod_BaseboardLength();
    if (mod_BaseboardLength == undefined) {
      logError("The variant 'mod_BaseboardLength' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardOverdimensionBack(mod: IModBase | undefined, mod_BaseboardOverdimensionBack?: number): IMatrix_mod_BaseboardOverdimensionBack {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardOverdimensionBack');
    }
    var matrix = new Matrix_mod_BaseboardOverdimensionBack();
    if (mod_BaseboardOverdimensionBack == undefined) {
      logError("The variant 'mod_BaseboardOverdimensionBack' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardOverdimensionLeft(mod: IModBase | undefined, mod_BaseboardOverdimensionLeft?: number): IMatrix_mod_BaseboardOverdimensionLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardOverdimensionLeft');
    }
    var matrix = new Matrix_mod_BaseboardOverdimensionLeft();
    if (mod_BaseboardOverdimensionLeft == undefined) {
      logError("The variant 'mod_BaseboardOverdimensionLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardOverdimensionRight(mod: IModBase | undefined, mod_BaseboardOverdimensionRight?: number): IMatrix_mod_BaseboardOverdimensionRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardOverdimensionRight');
    }
    var matrix = new Matrix_mod_BaseboardOverdimensionRight();
    if (mod_BaseboardOverdimensionRight == undefined) {
      logError("The variant 'mod_BaseboardOverdimensionRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardProgram(mod: IModBase | undefined, mod_BaseboardProgram?: string): IMatrix_mod_BaseboardProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardProgram');
    }
    var matrix = new Matrix_mod_BaseboardProgram();
    if (mod_BaseboardProgram == undefined) {
      logError("The variant 'mod_BaseboardProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BaseboardProgram_find(mod_BaseboardProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardSplitLogic(mod: IModBase | undefined, mod_BaseboardSplitLogic?: string): IMatrix_mod_BaseboardSplitLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardSplitLogic');
    }
    var matrix = new Matrix_mod_BaseboardSplitLogic();
    if (mod_BaseboardSplitLogic == undefined) {
      logError("The variant 'mod_BaseboardSplitLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BaseboardSplitLogic_find(mod_BaseboardSplitLogic);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseboardThk(mod: IModBase | undefined, mod_BaseboardThk?: number): IMatrix_mod_BaseboardThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseboardThk');
    }
    var matrix = new Matrix_mod_BaseboardThk();
    if (mod_BaseboardThk == undefined) {
      logError("The variant 'mod_BaseboardThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseunitFridgeId(mod: IModBase | undefined, mod_BaseunitFridgeId?: string): IMatrix_mod_BaseunitFridgeId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseunitFridgeId');
    }
    var matrix = new Matrix_mod_BaseunitFridgeId();
    if (mod_BaseunitFridgeId == undefined) {
      logError("The variant 'mod_BaseunitFridgeId' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BaseunitFridgeId_find(mod_BaseunitFridgeId);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BaseunitFridgeSupplier(mod: IModBase | undefined, mod_BaseunitFridgeSupplier?: string): IMatrix_mod_BaseunitFridgeSupplier {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BaseunitFridgeSupplier');
    }
    var matrix = new Matrix_mod_BaseunitFridgeSupplier();
    if (mod_BaseunitFridgeSupplier == undefined) {
      logError("The variant 'mod_BaseunitFridgeSupplier' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BaseunitFridgeSupplier_find(mod_BaseunitFridgeSupplier);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BoardShelfColor(mod: IModBase | undefined, mod_BoardShelfColor?: string): IMatrix_mod_BoardShelfColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BoardShelfColor');
    }
    var matrix = new Matrix_mod_BoardShelfColor();
    if (mod_BoardShelfColor == undefined) {
      logError("The variant 'mod_BoardShelfColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BoardShelfColor_find(mod_BoardShelfColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BoardShelfDepth(mod: IModBase | undefined, mod_BoardShelfDepth?: number): IMatrix_mod_BoardShelfDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BoardShelfDepth');
    }
    var matrix = new Matrix_mod_BoardShelfDepth();
    if (mod_BoardShelfDepth == undefined) {
      logError("The variant 'mod_BoardShelfDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BoardShelfPositionHeight(mod: IModBase | undefined, mod_BoardShelfPositionHeight?: number): IMatrix_mod_BoardShelfPositionHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BoardShelfPositionHeight');
    }
    var matrix = new Matrix_mod_BoardShelfPositionHeight();
    if (mod_BoardShelfPositionHeight == undefined) {
      logError("The variant 'mod_BoardShelfPositionHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BoardShelfPositionWidth(mod: IModBase | undefined, mod_BoardShelfPositionWidth?: number): IMatrix_mod_BoardShelfPositionWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BoardShelfPositionWidth');
    }
    var matrix = new Matrix_mod_BoardShelfPositionWidth();
    if (mod_BoardShelfPositionWidth == undefined) {
      logError("The variant 'mod_BoardShelfPositionWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BoardShelfProgram(mod: IModBase | undefined, mod_BoardShelfProgram?: string): IMatrix_mod_BoardShelfProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BoardShelfProgram');
    }
    var matrix = new Matrix_mod_BoardShelfProgram();
    if (mod_BoardShelfProgram == undefined) {
      logError("The variant 'mod_BoardShelfProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_BoardShelfProgram_find(mod_BoardShelfProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BoardShelfThickness(mod: IModBase | undefined, mod_BoardShelfThickness?: number): IMatrix_mod_BoardShelfThickness {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BoardShelfThickness');
    }
    var matrix = new Matrix_mod_BoardShelfThickness();
    if (mod_BoardShelfThickness == undefined) {
      logError("The variant 'mod_BoardShelfThickness' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_BoardShelfWidth(mod: IModBase | undefined, mod_BoardShelfWidth?: number): IMatrix_mod_BoardShelfWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_BoardShelfWidth');
    }
    var matrix = new Matrix_mod_BoardShelfWidth();
    if (mod_BoardShelfWidth == undefined) {
      logError("The variant 'mod_BoardShelfWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseBackwallColor(mod: IModBase | undefined, mod_CarcaseBackwallColor?: string): IMatrix_mod_CarcaseBackwallColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseBackwallColor');
    }
    var matrix = new Matrix_mod_CarcaseBackwallColor();
    if (mod_CarcaseBackwallColor == undefined) {
      logError("The variant 'mod_CarcaseBackwallColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseBackwallColor_find(mod_CarcaseBackwallColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseBackwallConstruction(mod: IModBase | undefined, mod_CarcaseBackwallConstruction?: string): IMatrix_mod_CarcaseBackwallConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseBackwallConstruction');
    }
    var matrix = new Matrix_mod_CarcaseBackwallConstruction();
    if (mod_CarcaseBackwallConstruction == undefined) {
      logError("The variant 'mod_CarcaseBackwallConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseBackwallConstruction_find(mod_CarcaseBackwallConstruction);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseBackwallProgram(mod: IModBase | undefined, mod_CarcaseBackwallProgram?: string): IMatrix_mod_CarcaseBackwallProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseBackwallProgram');
    }
    var matrix = new Matrix_mod_CarcaseBackwallProgram();
    if (mod_CarcaseBackwallProgram == undefined) {
      logError("The variant 'mod_CarcaseBackwallProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseBackwallProgram_find(mod_CarcaseBackwallProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseColor(mod: IModBase | undefined, mod_CarcaseColor?: string): IMatrix_mod_CarcaseColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseColor');
    }
    var matrix = new Matrix_mod_CarcaseColor();
    if (mod_CarcaseColor == undefined) {
      logError("The variant 'mod_CarcaseColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseColor_find(mod_CarcaseColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseConnectionLeftBtm(mod: IModBase | undefined, mod_CarcaseConnectionLeftBtm?: string): IMatrix_mod_CarcaseConnectionLeftBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseConnectionLeftBtm');
    }
    var matrix = new Matrix_mod_CarcaseConnectionLeftBtm();
    if (mod_CarcaseConnectionLeftBtm == undefined) {
      logError("The variant 'mod_CarcaseConnectionLeftBtm' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseConnectionLeftBtm_find(mod_CarcaseConnectionLeftBtm);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseConnectionLeftTop(mod: IModBase | undefined, mod_CarcaseConnectionLeftTop?: string): IMatrix_mod_CarcaseConnectionLeftTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseConnectionLeftTop');
    }
    var matrix = new Matrix_mod_CarcaseConnectionLeftTop();
    if (mod_CarcaseConnectionLeftTop == undefined) {
      logError("The variant 'mod_CarcaseConnectionLeftTop' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseConnectionLeftTop_find(mod_CarcaseConnectionLeftTop);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseConnectionRightBtm(mod: IModBase | undefined, mod_CarcaseConnectionRightBtm?: string): IMatrix_mod_CarcaseConnectionRightBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseConnectionRightBtm');
    }
    var matrix = new Matrix_mod_CarcaseConnectionRightBtm();
    if (mod_CarcaseConnectionRightBtm == undefined) {
      logError("The variant 'mod_CarcaseConnectionRightBtm' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseConnectionRightBtm_find(mod_CarcaseConnectionRightBtm);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseConnectionRightTop(mod: IModBase | undefined, mod_CarcaseConnectionRightTop?: string): IMatrix_mod_CarcaseConnectionRightTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseConnectionRightTop');
    }
    var matrix = new Matrix_mod_CarcaseConnectionRightTop();
    if (mod_CarcaseConnectionRightTop == undefined) {
      logError("The variant 'mod_CarcaseConnectionRightTop' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseConnectionRightTop_find(mod_CarcaseConnectionRightTop);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseDepth(mod: IModBase | undefined, mod_CarcaseDepth?: number): IMatrix_mod_CarcaseDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseDepth');
    }
    var matrix = new Matrix_mod_CarcaseDepth();
    if (mod_CarcaseDepth == undefined) {
      logError("The variant 'mod_CarcaseDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseDirection(mod: IModBase | undefined, mod_CarcaseDirection?: string): IMatrix_mod_CarcaseDirection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseDirection');
    }
    var matrix = new Matrix_mod_CarcaseDirection();
    if (mod_CarcaseDirection == undefined) {
      logError("The variant 'mod_CarcaseDirection' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseDirection_find(mod_CarcaseDirection);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseDirectionInfo(mod: IModBase | undefined, mod_CarcaseDirectionInfo?: string): IMatrix_mod_CarcaseDirectionInfo {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseDirectionInfo');
    }
    var matrix = new Matrix_mod_CarcaseDirectionInfo();
    if (mod_CarcaseDirectionInfo == undefined) {
      logError("The variant 'mod_CarcaseDirectionInfo' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseDistanceWall(mod: IModBase | undefined, mod_CarcaseDistanceWall?: number): IMatrix_mod_CarcaseDistanceWall {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseDistanceWall');
    }
    var matrix = new Matrix_mod_CarcaseDistanceWall();
    if (mod_CarcaseDistanceWall == undefined) {
      logError("The variant 'mod_CarcaseDistanceWall' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseEdgeBackColor(mod: IModBase | undefined, mod_CarcaseEdgeBackColor?: string): IMatrix_mod_CarcaseEdgeBackColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseEdgeBackColor');
    }
    var matrix = new Matrix_mod_CarcaseEdgeBackColor();
    if (mod_CarcaseEdgeBackColor == undefined) {
      logError("The variant 'mod_CarcaseEdgeBackColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseEdgeBackColor_find(mod_CarcaseEdgeBackColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseEdgeColor(mod: IModBase | undefined, mod_CarcaseEdgeColor?: string): IMatrix_mod_CarcaseEdgeColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseEdgeColor');
    }
    var matrix = new Matrix_mod_CarcaseEdgeColor();
    if (mod_CarcaseEdgeColor == undefined) {
      logError("The variant 'mod_CarcaseEdgeColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseEdgeColor_find(mod_CarcaseEdgeColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseEdgeFrontColor(mod: IModBase | undefined, mod_CarcaseEdgeFrontColor?: string): IMatrix_mod_CarcaseEdgeFrontColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseEdgeFrontColor');
    }
    var matrix = new Matrix_mod_CarcaseEdgeFrontColor();
    if (mod_CarcaseEdgeFrontColor == undefined) {
      logError("The variant 'mod_CarcaseEdgeFrontColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseEdgeFrontColor_find(mod_CarcaseEdgeFrontColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseFrontConstruction(mod: IModBase | undefined, mod_CarcaseFrontConstruction?: string): IMatrix_mod_CarcaseFrontConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseFrontConstruction');
    }
    var matrix = new Matrix_mod_CarcaseFrontConstruction();
    if (mod_CarcaseFrontConstruction == undefined) {
      logError("The variant 'mod_CarcaseFrontConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseFrontConstruction_find(mod_CarcaseFrontConstruction);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseHeight(mod: IModBase | undefined, mod_CarcaseHeight?: number): IMatrix_mod_CarcaseHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseHeight');
    }
    var matrix = new Matrix_mod_CarcaseHeight();
    if (mod_CarcaseHeight == undefined) {
      logError("The variant 'mod_CarcaseHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseId(mod: IModBase | undefined, mod_CarcaseId?: string): IMatrix_mod_CarcaseId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseId');
    }
    var matrix = new Matrix_mod_CarcaseId();
    if (mod_CarcaseId == undefined) {
      logError("The variant 'mod_CarcaseId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseMovement(mod: IModBase | undefined, mod_CarcaseMovement?: number): IMatrix_mod_CarcaseMovement {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseMovement');
    }
    var matrix = new Matrix_mod_CarcaseMovement();
    if (mod_CarcaseMovement == undefined) {
      logError("The variant 'mod_CarcaseMovement' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseOutsideColor(mod: IModBase | undefined, mod_CarcaseOutsideColor?: string): IMatrix_mod_CarcaseOutsideColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseOutsideColor');
    }
    var matrix = new Matrix_mod_CarcaseOutsideColor();
    if (mod_CarcaseOutsideColor == undefined) {
      logError("The variant 'mod_CarcaseOutsideColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseOutsideColor_find(mod_CarcaseOutsideColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseOutsideProgram(mod: IModBase | undefined, mod_CarcaseOutsideProgram?: string): IMatrix_mod_CarcaseOutsideProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseOutsideProgram');
    }
    var matrix = new Matrix_mod_CarcaseOutsideProgram();
    if (mod_CarcaseOutsideProgram == undefined) {
      logError("The variant 'mod_CarcaseOutsideProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseOutsideProgram_find(mod_CarcaseOutsideProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseOverdimensionBackLogic(mod: IModBase | undefined, mod_CarcaseOverdimensionBackLogic?: string): IMatrix_mod_CarcaseOverdimensionBackLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseOverdimensionBackLogic');
    }
    var matrix = new Matrix_mod_CarcaseOverdimensionBackLogic();
    if (mod_CarcaseOverdimensionBackLogic == undefined) {
      logError("The variant 'mod_CarcaseOverdimensionBackLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseOverdimensionBackLogic_find(mod_CarcaseOverdimensionBackLogic);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcasePartConnectionBackHor(mod: IModBase | undefined, mod_CarcasePartConnectionBackHor?: string): IMatrix_mod_CarcasePartConnectionBackHor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcasePartConnectionBackHor');
    }
    var matrix = new Matrix_mod_CarcasePartConnectionBackHor();
    if (mod_CarcasePartConnectionBackHor == undefined) {
      logError("The variant 'mod_CarcasePartConnectionBackHor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcasePartConnectionBackHor_find(mod_CarcasePartConnectionBackHor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcasePartConnectionBackVert(mod: IModBase | undefined, mod_CarcasePartConnectionBackVert?: string): IMatrix_mod_CarcasePartConnectionBackVert {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcasePartConnectionBackVert');
    }
    var matrix = new Matrix_mod_CarcasePartConnectionBackVert();
    if (mod_CarcasePartConnectionBackVert == undefined) {
      logError("The variant 'mod_CarcasePartConnectionBackVert' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcasePartConnectionBackVert_find(mod_CarcasePartConnectionBackVert);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcasePartConnectionBtmVert(mod: IModBase | undefined, mod_CarcasePartConnectionBtmVert?: string): IMatrix_mod_CarcasePartConnectionBtmVert {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcasePartConnectionBtmVert');
    }
    var matrix = new Matrix_mod_CarcasePartConnectionBtmVert();
    if (mod_CarcasePartConnectionBtmVert == undefined) {
      logError("The variant 'mod_CarcasePartConnectionBtmVert' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcasePartConnectionBtmVert_find(mod_CarcasePartConnectionBtmVert);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcasePartConnectionLeftHor(mod: IModBase | undefined, mod_CarcasePartConnectionLeftHor?: string): IMatrix_mod_CarcasePartConnectionLeftHor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcasePartConnectionLeftHor');
    }
    var matrix = new Matrix_mod_CarcasePartConnectionLeftHor();
    if (mod_CarcasePartConnectionLeftHor == undefined) {
      logError("The variant 'mod_CarcasePartConnectionLeftHor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcasePartConnectionLeftHor_find(mod_CarcasePartConnectionLeftHor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcasePartConnectionRightHor(mod: IModBase | undefined, mod_CarcasePartConnectionRightHor?: string): IMatrix_mod_CarcasePartConnectionRightHor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcasePartConnectionRightHor');
    }
    var matrix = new Matrix_mod_CarcasePartConnectionRightHor();
    if (mod_CarcasePartConnectionRightHor == undefined) {
      logError("The variant 'mod_CarcasePartConnectionRightHor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcasePartConnectionRightHor_find(mod_CarcasePartConnectionRightHor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcasePartConnectionTopVert(mod: IModBase | undefined, mod_CarcasePartConnectionTopVert?: string): IMatrix_mod_CarcasePartConnectionTopVert {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcasePartConnectionTopVert');
    }
    var matrix = new Matrix_mod_CarcasePartConnectionTopVert();
    if (mod_CarcasePartConnectionTopVert == undefined) {
      logError("The variant 'mod_CarcasePartConnectionTopVert' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcasePartConnectionTopVert_find(mod_CarcasePartConnectionTopVert);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseProgram(mod: IModBase | undefined, mod_CarcaseProgram?: string): IMatrix_mod_CarcaseProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseProgram');
    }
    var matrix = new Matrix_mod_CarcaseProgram();
    if (mod_CarcaseProgram == undefined) {
      logError("The variant 'mod_CarcaseProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseProgram_find(mod_CarcaseProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseShelfbtmConstruction(mod: IModBase | undefined, mod_CarcaseShelfbtmConstruction?: string): IMatrix_mod_CarcaseShelfbtmConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseShelfbtmConstruction');
    }
    var matrix = new Matrix_mod_CarcaseShelfbtmConstruction();
    if (mod_CarcaseShelfbtmConstruction == undefined) {
      logError("The variant 'mod_CarcaseShelfbtmConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseShelfbtmConstruction_find(mod_CarcaseShelfbtmConstruction);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseShelfbtmOversizeInsideWall(mod: IModBase | undefined, mod_CarcaseShelfbtmOversizeInsideWall?: number): IMatrix_mod_CarcaseShelfbtmOversizeInsideWall {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseShelfbtmOversizeInsideWall');
    }
    var matrix = new Matrix_mod_CarcaseShelfbtmOversizeInsideWall();
    if (mod_CarcaseShelfbtmOversizeInsideWall == undefined) {
      logError("The variant 'mod_CarcaseShelfbtmOversizeInsideWall' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseShelfbtmOversizeLeft(mod: IModBase | undefined, mod_CarcaseShelfbtmOversizeLeft?: number): IMatrix_mod_CarcaseShelfbtmOversizeLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseShelfbtmOversizeLeft');
    }
    var matrix = new Matrix_mod_CarcaseShelfbtmOversizeLeft();
    if (mod_CarcaseShelfbtmOversizeLeft == undefined) {
      logError("The variant 'mod_CarcaseShelfbtmOversizeLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseShelfbtmOversizeRight(mod: IModBase | undefined, mod_CarcaseShelfbtmOversizeRight?: number): IMatrix_mod_CarcaseShelfbtmOversizeRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseShelfbtmOversizeRight');
    }
    var matrix = new Matrix_mod_CarcaseShelfbtmOversizeRight();
    if (mod_CarcaseShelfbtmOversizeRight == undefined) {
      logError("The variant 'mod_CarcaseShelfbtmOversizeRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseShelftopConstruction(mod: IModBase | undefined, mod_CarcaseShelftopConstruction?: string): IMatrix_mod_CarcaseShelftopConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseShelftopConstruction');
    }
    var matrix = new Matrix_mod_CarcaseShelftopConstruction();
    if (mod_CarcaseShelftopConstruction == undefined) {
      logError("The variant 'mod_CarcaseShelftopConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseShelftopConstruction_find(mod_CarcaseShelftopConstruction);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseShelftopOversizeInsideWall(mod: IModBase | undefined, mod_CarcaseShelftopOversizeInsideWall?: number): IMatrix_mod_CarcaseShelftopOversizeInsideWall {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseShelftopOversizeInsideWall');
    }
    var matrix = new Matrix_mod_CarcaseShelftopOversizeInsideWall();
    if (mod_CarcaseShelftopOversizeInsideWall == undefined) {
      logError("The variant 'mod_CarcaseShelftopOversizeInsideWall' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseShelftopOversizeLeft(mod: IModBase | undefined, mod_CarcaseShelftopOversizeLeft?: number): IMatrix_mod_CarcaseShelftopOversizeLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseShelftopOversizeLeft');
    }
    var matrix = new Matrix_mod_CarcaseShelftopOversizeLeft();
    if (mod_CarcaseShelftopOversizeLeft == undefined) {
      logError("The variant 'mod_CarcaseShelftopOversizeLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseShelftopOversizeRight(mod: IModBase | undefined, mod_CarcaseShelftopOversizeRight?: number): IMatrix_mod_CarcaseShelftopOversizeRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseShelftopOversizeRight');
    }
    var matrix = new Matrix_mod_CarcaseShelftopOversizeRight();
    if (mod_CarcaseShelftopOversizeRight == undefined) {
      logError("The variant 'mod_CarcaseShelftopOversizeRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseSidepanelleftOversizeBtm(mod: IModBase | undefined, mod_CarcaseSidepanelleftOversizeBtm?: number): IMatrix_mod_CarcaseSidepanelleftOversizeBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseSidepanelleftOversizeBtm');
    }
    var matrix = new Matrix_mod_CarcaseSidepanelleftOversizeBtm();
    if (mod_CarcaseSidepanelleftOversizeBtm == undefined) {
      logError("The variant 'mod_CarcaseSidepanelleftOversizeBtm' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseSidepanelleftOversizeInsideWall(mod: IModBase | undefined, mod_CarcaseSidepanelleftOversizeInsideWall?: number): IMatrix_mod_CarcaseSidepanelleftOversizeInsideWall {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseSidepanelleftOversizeInsideWall');
    }
    var matrix = new Matrix_mod_CarcaseSidepanelleftOversizeInsideWall();
    if (mod_CarcaseSidepanelleftOversizeInsideWall == undefined) {
      logError("The variant 'mod_CarcaseSidepanelleftOversizeInsideWall' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseSidepanelleftOversizeTop(mod: IModBase | undefined, mod_CarcaseSidepanelleftOversizeTop?: number): IMatrix_mod_CarcaseSidepanelleftOversizeTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseSidepanelleftOversizeTop');
    }
    var matrix = new Matrix_mod_CarcaseSidepanelleftOversizeTop();
    if (mod_CarcaseSidepanelleftOversizeTop == undefined) {
      logError("The variant 'mod_CarcaseSidepanelleftOversizeTop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseSidepanelrightOversizeBtm(mod: IModBase | undefined, mod_CarcaseSidepanelrightOversizeBtm?: number): IMatrix_mod_CarcaseSidepanelrightOversizeBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseSidepanelrightOversizeBtm');
    }
    var matrix = new Matrix_mod_CarcaseSidepanelrightOversizeBtm();
    if (mod_CarcaseSidepanelrightOversizeBtm == undefined) {
      logError("The variant 'mod_CarcaseSidepanelrightOversizeBtm' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseSidepanelrightOversizeInsideWall(mod: IModBase | undefined, mod_CarcaseSidepanelrightOversizeInsideWall?: number): IMatrix_mod_CarcaseSidepanelrightOversizeInsideWall {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseSidepanelrightOversizeInsideWall');
    }
    var matrix = new Matrix_mod_CarcaseSidepanelrightOversizeInsideWall();
    if (mod_CarcaseSidepanelrightOversizeInsideWall == undefined) {
      logError("The variant 'mod_CarcaseSidepanelrightOversizeInsideWall' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseSidepanelrightOversizeTop(mod: IModBase | undefined, mod_CarcaseSidepanelrightOversizeTop?: number): IMatrix_mod_CarcaseSidepanelrightOversizeTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseSidepanelrightOversizeTop');
    }
    var matrix = new Matrix_mod_CarcaseSidepanelrightOversizeTop();
    if (mod_CarcaseSidepanelrightOversizeTop == undefined) {
      logError("The variant 'mod_CarcaseSidepanelrightOversizeTop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseVisBack(mod: IModBase | undefined, mod_CarcaseVisBack?: boolean): IMatrix_mod_CarcaseVisBack {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseVisBack');
    }
    var matrix = new Matrix_mod_CarcaseVisBack();
    if (mod_CarcaseVisBack == undefined) {
      logError("The variant 'mod_CarcaseVisBack' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseVisBtm(mod: IModBase | undefined, mod_CarcaseVisBtm?: boolean): IMatrix_mod_CarcaseVisBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseVisBtm');
    }
    var matrix = new Matrix_mod_CarcaseVisBtm();
    if (mod_CarcaseVisBtm == undefined) {
      logError("The variant 'mod_CarcaseVisBtm' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseVisLeft(mod: IModBase | undefined, mod_CarcaseVisLeft?: boolean): IMatrix_mod_CarcaseVisLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseVisLeft');
    }
    var matrix = new Matrix_mod_CarcaseVisLeft();
    if (mod_CarcaseVisLeft == undefined) {
      logError("The variant 'mod_CarcaseVisLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseVisLeftSelection(mod: IModBase | undefined, mod_CarcaseVisLeftSelection?: string): IMatrix_mod_CarcaseVisLeftSelection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseVisLeftSelection');
    }
    var matrix = new Matrix_mod_CarcaseVisLeftSelection();
    if (mod_CarcaseVisLeftSelection == undefined) {
      logError("The variant 'mod_CarcaseVisLeftSelection' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseVisLeftSelection_find(mod_CarcaseVisLeftSelection);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseVisRight(mod: IModBase | undefined, mod_CarcaseVisRight?: boolean): IMatrix_mod_CarcaseVisRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseVisRight');
    }
    var matrix = new Matrix_mod_CarcaseVisRight();
    if (mod_CarcaseVisRight == undefined) {
      logError("The variant 'mod_CarcaseVisRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseVisRightSelection(mod: IModBase | undefined, mod_CarcaseVisRightSelection?: string): IMatrix_mod_CarcaseVisRightSelection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseVisRightSelection');
    }
    var matrix = new Matrix_mod_CarcaseVisRightSelection();
    if (mod_CarcaseVisRightSelection == undefined) {
      logError("The variant 'mod_CarcaseVisRightSelection' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CarcaseVisRightSelection_find(mod_CarcaseVisRightSelection);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseVisTop(mod: IModBase | undefined, mod_CarcaseVisTop?: boolean): IMatrix_mod_CarcaseVisTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseVisTop');
    }
    var matrix = new Matrix_mod_CarcaseVisTop();
    if (mod_CarcaseVisTop == undefined) {
      logError("The variant 'mod_CarcaseVisTop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CarcaseWidth(mod: IModBase | undefined, mod_CarcaseWidth?: number): IMatrix_mod_CarcaseWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CarcaseWidth');
    }
    var matrix = new Matrix_mod_CarcaseWidth();
    if (mod_CarcaseWidth == undefined) {
      logError("The variant 'mod_CarcaseWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingAreaVisLeft(mod: IModBase | undefined, mod_CeilingAreaVisLeft?: boolean): IMatrix_mod_CeilingAreaVisLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingAreaVisLeft');
    }
    var matrix = new Matrix_mod_CeilingAreaVisLeft();
    if (mod_CeilingAreaVisLeft == undefined) {
      logError("The variant 'mod_CeilingAreaVisLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingAreaVisLeftSelection(mod: IModBase | undefined, mod_CeilingAreaVisLeftSelection?: string): IMatrix_mod_CeilingAreaVisLeftSelection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingAreaVisLeftSelection');
    }
    var matrix = new Matrix_mod_CeilingAreaVisLeftSelection();
    if (mod_CeilingAreaVisLeftSelection == undefined) {
      logError("The variant 'mod_CeilingAreaVisLeftSelection' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CeilingAreaVisLeftSelection_find(mod_CeilingAreaVisLeftSelection);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingAreaVisRight(mod: IModBase | undefined, mod_CeilingAreaVisRight?: boolean): IMatrix_mod_CeilingAreaVisRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingAreaVisRight');
    }
    var matrix = new Matrix_mod_CeilingAreaVisRight();
    if (mod_CeilingAreaVisRight == undefined) {
      logError("The variant 'mod_CeilingAreaVisRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingAreaVisRightSelection(mod: IModBase | undefined, mod_CeilingAreaVisRightSelection?: string): IMatrix_mod_CeilingAreaVisRightSelection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingAreaVisRightSelection');
    }
    var matrix = new Matrix_mod_CeilingAreaVisRightSelection();
    if (mod_CeilingAreaVisRightSelection == undefined) {
      logError("The variant 'mod_CeilingAreaVisRightSelection' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CeilingAreaVisRightSelection_find(mod_CeilingAreaVisRightSelection);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerColor(mod: IModBase | undefined, mod_CeilingFillerColor?: string): IMatrix_mod_CeilingFillerColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerColor');
    }
    var matrix = new Matrix_mod_CeilingFillerColor();
    if (mod_CeilingFillerColor == undefined) {
      logError("The variant 'mod_CeilingFillerColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CeilingFillerColor_find(mod_CeilingFillerColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerConstruction(mod: IModBase | undefined, mod_CeilingFillerConstruction?: string): IMatrix_mod_CeilingFillerConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerConstruction');
    }
    var matrix = new Matrix_mod_CeilingFillerConstruction();
    if (mod_CeilingFillerConstruction == undefined) {
      logError("The variant 'mod_CeilingFillerConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CeilingFillerConstruction_find(mod_CeilingFillerConstruction);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerEdgeBackColor(mod: IModBase | undefined, mod_CeilingFillerEdgeBackColor?: string): IMatrix_mod_CeilingFillerEdgeBackColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerEdgeBackColor');
    }
    var matrix = new Matrix_mod_CeilingFillerEdgeBackColor();
    if (mod_CeilingFillerEdgeBackColor == undefined) {
      logError("The variant 'mod_CeilingFillerEdgeBackColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CeilingFillerEdgeBackColor_find(mod_CeilingFillerEdgeBackColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerEdgeFrontColor(mod: IModBase | undefined, mod_CeilingFillerEdgeFrontColor?: string): IMatrix_mod_CeilingFillerEdgeFrontColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerEdgeFrontColor');
    }
    var matrix = new Matrix_mod_CeilingFillerEdgeFrontColor();
    if (mod_CeilingFillerEdgeFrontColor == undefined) {
      logError("The variant 'mod_CeilingFillerEdgeFrontColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CeilingFillerEdgeFrontColor_find(mod_CeilingFillerEdgeFrontColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerEdgeLeftColor(mod: IModBase | undefined, mod_CeilingFillerEdgeLeftColor?: string): IMatrix_mod_CeilingFillerEdgeLeftColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerEdgeLeftColor');
    }
    var matrix = new Matrix_mod_CeilingFillerEdgeLeftColor();
    if (mod_CeilingFillerEdgeLeftColor == undefined) {
      logError("The variant 'mod_CeilingFillerEdgeLeftColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CeilingFillerEdgeLeftColor_find(mod_CeilingFillerEdgeLeftColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerEdgeRightColor(mod: IModBase | undefined, mod_CeilingFillerEdgeRightColor?: string): IMatrix_mod_CeilingFillerEdgeRightColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerEdgeRightColor');
    }
    var matrix = new Matrix_mod_CeilingFillerEdgeRightColor();
    if (mod_CeilingFillerEdgeRightColor == undefined) {
      logError("The variant 'mod_CeilingFillerEdgeRightColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CeilingFillerEdgeRightColor_find(mod_CeilingFillerEdgeRightColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerFittingPanelDepth(mod: IModBase | undefined, mod_CeilingFillerFittingPanelDepth?: number): IMatrix_mod_CeilingFillerFittingPanelDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerFittingPanelDepth');
    }
    var matrix = new Matrix_mod_CeilingFillerFittingPanelDepth();
    if (mod_CeilingFillerFittingPanelDepth == undefined) {
      logError("The variant 'mod_CeilingFillerFittingPanelDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerFittingPanelThk(mod: IModBase | undefined, mod_CeilingFillerFittingPanelThk?: number): IMatrix_mod_CeilingFillerFittingPanelThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerFittingPanelThk');
    }
    var matrix = new Matrix_mod_CeilingFillerFittingPanelThk();
    if (mod_CeilingFillerFittingPanelThk == undefined) {
      logError("The variant 'mod_CeilingFillerFittingPanelThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerHeight(mod: IModBase | undefined, mod_CeilingFillerHeight?: number): IMatrix_mod_CeilingFillerHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerHeight');
    }
    var matrix = new Matrix_mod_CeilingFillerHeight();
    if (mod_CeilingFillerHeight == undefined) {
      logError("The variant 'mod_CeilingFillerHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerId(mod: IModBase | undefined, mod_CeilingFillerId?: string): IMatrix_mod_CeilingFillerId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerId');
    }
    var matrix = new Matrix_mod_CeilingFillerId();
    if (mod_CeilingFillerId == undefined) {
      logError("The variant 'mod_CeilingFillerId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerProgram(mod: IModBase | undefined, mod_CeilingFillerProgram?: string): IMatrix_mod_CeilingFillerProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerProgram');
    }
    var matrix = new Matrix_mod_CeilingFillerProgram();
    if (mod_CeilingFillerProgram == undefined) {
      logError("The variant 'mod_CeilingFillerProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CeilingFillerProgram_find(mod_CeilingFillerProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerRecess(mod: IModBase | undefined, mod_CeilingFillerRecess?: number): IMatrix_mod_CeilingFillerRecess {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerRecess');
    }
    var matrix = new Matrix_mod_CeilingFillerRecess();
    if (mod_CeilingFillerRecess == undefined) {
      logError("The variant 'mod_CeilingFillerRecess' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerRecessLeft(mod: IModBase | undefined, mod_CeilingFillerRecessLeft?: number): IMatrix_mod_CeilingFillerRecessLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerRecessLeft');
    }
    var matrix = new Matrix_mod_CeilingFillerRecessLeft();
    if (mod_CeilingFillerRecessLeft == undefined) {
      logError("The variant 'mod_CeilingFillerRecessLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerRecessRight(mod: IModBase | undefined, mod_CeilingFillerRecessRight?: number): IMatrix_mod_CeilingFillerRecessRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerRecessRight');
    }
    var matrix = new Matrix_mod_CeilingFillerRecessRight();
    if (mod_CeilingFillerRecessRight == undefined) {
      logError("The variant 'mod_CeilingFillerRecessRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerThk(mod: IModBase | undefined, mod_CeilingFillerThk?: number): IMatrix_mod_CeilingFillerThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerThk');
    }
    var matrix = new Matrix_mod_CeilingFillerThk();
    if (mod_CeilingFillerThk == undefined) {
      logError("The variant 'mod_CeilingFillerThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CeilingFillerTransitionType(mod: IModBase | undefined, mod_CeilingFillerTransitionType?: string): IMatrix_mod_CeilingFillerTransitionType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CeilingFillerTransitionType');
    }
    var matrix = new Matrix_mod_CeilingFillerTransitionType();
    if (mod_CeilingFillerTransitionType == undefined) {
      logError("The variant 'mod_CeilingFillerTransitionType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CeilingFillerTransitionType_find(mod_CeilingFillerTransitionType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CleatThk(mod: IModBase | undefined, mod_CleatThk?: number): IMatrix_mod_CleatThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CleatThk');
    }
    var matrix = new Matrix_mod_CleatThk();
    if (mod_CleatThk == undefined) {
      logError("The variant 'mod_CleatThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CleatWidth(mod: IModBase | undefined, mod_CleatWidth?: number): IMatrix_mod_CleatWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CleatWidth');
    }
    var matrix = new Matrix_mod_CleatWidth();
    if (mod_CleatWidth == undefined) {
      logError("The variant 'mod_CleatWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ClothingOrganizerBoardColor(mod: IModBase | undefined, mod_ClothingOrganizerBoardColor?: string): IMatrix_mod_ClothingOrganizerBoardColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ClothingOrganizerBoardColor');
    }
    var matrix = new Matrix_mod_ClothingOrganizerBoardColor();
    if (mod_ClothingOrganizerBoardColor == undefined) {
      logError("The variant 'mod_ClothingOrganizerBoardColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ClothingOrganizerBoardColor_find(mod_ClothingOrganizerBoardColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ClothingOrganizerColor(mod: IModBase | undefined, mod_ClothingOrganizerColor?: string): IMatrix_mod_ClothingOrganizerColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ClothingOrganizerColor');
    }
    var matrix = new Matrix_mod_ClothingOrganizerColor();
    if (mod_ClothingOrganizerColor == undefined) {
      logError("The variant 'mod_ClothingOrganizerColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ClothingOrganizerColor_find(mod_ClothingOrganizerColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ClothingOrganizerConnectionPosition(mod: IModBase | undefined, mod_ClothingOrganizerConnectionPosition?: string): IMatrix_mod_ClothingOrganizerConnectionPosition {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ClothingOrganizerConnectionPosition');
    }
    var matrix = new Matrix_mod_ClothingOrganizerConnectionPosition();
    if (mod_ClothingOrganizerConnectionPosition == undefined) {
      logError("The variant 'mod_ClothingOrganizerConnectionPosition' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ClothingOrganizerConnectionPosition_find(mod_ClothingOrganizerConnectionPosition);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ClothingOrganizerDepthPosition(mod: IModBase | undefined, mod_ClothingOrganizerDepthPosition?: string): IMatrix_mod_ClothingOrganizerDepthPosition {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ClothingOrganizerDepthPosition');
    }
    var matrix = new Matrix_mod_ClothingOrganizerDepthPosition();
    if (mod_ClothingOrganizerDepthPosition == undefined) {
      logError("The variant 'mod_ClothingOrganizerDepthPosition' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ClothingOrganizerDesign(mod: IModBase | undefined, mod_ClothingOrganizerDesign?: string): IMatrix_mod_ClothingOrganizerDesign {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ClothingOrganizerDesign');
    }
    var matrix = new Matrix_mod_ClothingOrganizerDesign();
    if (mod_ClothingOrganizerDesign == undefined) {
      logError("The variant 'mod_ClothingOrganizerDesign' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ClothingOrganizerDesign_find(mod_ClothingOrganizerDesign);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ClothingOrganizerDistanceBlock(mod: IModBase | undefined, mod_ClothingOrganizerDistanceBlock?: string): IMatrix_mod_ClothingOrganizerDistanceBlock {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ClothingOrganizerDistanceBlock');
    }
    var matrix = new Matrix_mod_ClothingOrganizerDistanceBlock();
    if (mod_ClothingOrganizerDistanceBlock == undefined) {
      logError("The variant 'mod_ClothingOrganizerDistanceBlock' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ClothingOrganizerHeightPosition(mod: IModBase | undefined, mod_ClothingOrganizerHeightPosition?: number): IMatrix_mod_ClothingOrganizerHeightPosition {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ClothingOrganizerHeightPosition');
    }
    var matrix = new Matrix_mod_ClothingOrganizerHeightPosition();
    if (mod_ClothingOrganizerHeightPosition == undefined) {
      logError("The variant 'mod_ClothingOrganizerHeightPosition' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ClothingOrganizerType(mod: IModBase | undefined, mod_ClothingOrganizerType?: string): IMatrix_mod_ClothingOrganizerType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ClothingOrganizerType');
    }
    var matrix = new Matrix_mod_ClothingOrganizerType();
    if (mod_ClothingOrganizerType == undefined) {
      logError("The variant 'mod_ClothingOrganizerType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ClothingOrganizerType_find(mod_ClothingOrganizerType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CoatBoardColor(mod: IModBase | undefined, mod_CoatBoardColor?: string): IMatrix_mod_CoatBoardColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CoatBoardColor');
    }
    var matrix = new Matrix_mod_CoatBoardColor();
    if (mod_CoatBoardColor == undefined) {
      logError("The variant 'mod_CoatBoardColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CoatBoardColor_find(mod_CoatBoardColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CoatBoardId(mod: IModBase | undefined, mod_CoatBoardId?: string): IMatrix_mod_CoatBoardId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CoatBoardId');
    }
    var matrix = new Matrix_mod_CoatBoardId();
    if (mod_CoatBoardId == undefined) {
      logError("The variant 'mod_CoatBoardId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CoatBoardProgram(mod: IModBase | undefined, mod_CoatBoardProgram?: string): IMatrix_mod_CoatBoardProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CoatBoardProgram');
    }
    var matrix = new Matrix_mod_CoatBoardProgram();
    if (mod_CoatBoardProgram == undefined) {
      logError("The variant 'mod_CoatBoardProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CoatBoardProgram_find(mod_CoatBoardProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CoatBoardThickness(mod: IModBase | undefined, mod_CoatBoardThickness?: number): IMatrix_mod_CoatBoardThickness {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CoatBoardThickness');
    }
    var matrix = new Matrix_mod_CoatBoardThickness();
    if (mod_CoatBoardThickness == undefined) {
      logError("The variant 'mod_CoatBoardThickness' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Color(mod: IModBase | undefined, mod_Color?: string): IMatrix_mod_Color {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Color');
    }
    var matrix = new Matrix_mod_Color();
    if (mod_Color == undefined) {
      logError("The variant 'mod_Color' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_Color_find(mod_Color);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CornerunitDimensionLogic(mod: IModBase | undefined, mod_CornerunitDimensionLogic?: string): IMatrix_mod_CornerunitDimensionLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CornerunitDimensionLogic');
    }
    var matrix = new Matrix_mod_CornerunitDimensionLogic();
    if (mod_CornerunitDimensionLogic == undefined) {
      logError("The variant 'mod_CornerunitDimensionLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CornerunitDimensionLogic_find(mod_CornerunitDimensionLogic);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CornerunitFrontWidth(mod: IModBase | undefined, mod_CornerunitFrontWidth?: number): IMatrix_mod_CornerunitFrontWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CornerunitFrontWidth');
    }
    var matrix = new Matrix_mod_CornerunitFrontWidth();
    if (mod_CornerunitFrontWidth == undefined) {
      logError("The variant 'mod_CornerunitFrontWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CornerunitStraightConstruction(mod: IModBase | undefined, mod_CornerunitStraightConstruction?: string): IMatrix_mod_CornerunitStraightConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CornerunitStraightConstruction');
    }
    var matrix = new Matrix_mod_CornerunitStraightConstruction();
    if (mod_CornerunitStraightConstruction == undefined) {
      logError("The variant 'mod_CornerunitStraightConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CornerunitStraightConstruction_find(mod_CornerunitStraightConstruction);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CornerunitStraightDimensionLogic(mod: IModBase | undefined, mod_CornerunitStraightDimensionLogic?: string): IMatrix_mod_CornerunitStraightDimensionLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CornerunitStraightDimensionLogic');
    }
    var matrix = new Matrix_mod_CornerunitStraightDimensionLogic();
    if (mod_CornerunitStraightDimensionLogic == undefined) {
      logError("The variant 'mod_CornerunitStraightDimensionLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CornerunitStraightDimensionLogic_find(mod_CornerunitStraightDimensionLogic);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CornerunitStraightFillerConstruction(mod: IModBase | undefined, mod_CornerunitStraightFillerConstruction?: string): IMatrix_mod_CornerunitStraightFillerConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CornerunitStraightFillerConstruction');
    }
    var matrix = new Matrix_mod_CornerunitStraightFillerConstruction();
    if (mod_CornerunitStraightFillerConstruction == undefined) {
      logError("The variant 'mod_CornerunitStraightFillerConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CornerunitStraightFillerConstruction_find(mod_CornerunitStraightFillerConstruction);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopColor(mod: IModBase | undefined, mod_CountertopColor?: string): IMatrix_mod_CountertopColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopColor');
    }
    var matrix = new Matrix_mod_CountertopColor();
    if (mod_CountertopColor == undefined) {
      logError("The variant 'mod_CountertopColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CountertopColor_find(mod_CountertopColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopConnectionLengthLeft(mod: IModBase | undefined, mod_CountertopConnectionLengthLeft?: number): IMatrix_mod_CountertopConnectionLengthLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopConnectionLengthLeft');
    }
    var matrix = new Matrix_mod_CountertopConnectionLengthLeft();
    if (mod_CountertopConnectionLengthLeft == undefined) {
      logError("The variant 'mod_CountertopConnectionLengthLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopConnectionLengthRight(mod: IModBase | undefined, mod_CountertopConnectionLengthRight?: number): IMatrix_mod_CountertopConnectionLengthRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopConnectionLengthRight');
    }
    var matrix = new Matrix_mod_CountertopConnectionLengthRight();
    if (mod_CountertopConnectionLengthRight == undefined) {
      logError("The variant 'mod_CountertopConnectionLengthRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopConnectionOversize(mod: IModBase | undefined, mod_CountertopConnectionOversize?: number): IMatrix_mod_CountertopConnectionOversize {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopConnectionOversize');
    }
    var matrix = new Matrix_mod_CountertopConnectionOversize();
    if (mod_CountertopConnectionOversize == undefined) {
      logError("The variant 'mod_CountertopConnectionOversize' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopConnectionRadius(mod: IModBase | undefined, mod_CountertopConnectionRadius?: number): IMatrix_mod_CountertopConnectionRadius {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopConnectionRadius');
    }
    var matrix = new Matrix_mod_CountertopConnectionRadius();
    if (mod_CountertopConnectionRadius == undefined) {
      logError("The variant 'mod_CountertopConnectionRadius' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopConnectionSequence(mod: IModBase | undefined, mod_CountertopConnectionSequence?: string): IMatrix_mod_CountertopConnectionSequence {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopConnectionSequence');
    }
    var matrix = new Matrix_mod_CountertopConnectionSequence();
    if (mod_CountertopConnectionSequence == undefined) {
      logError("The variant 'mod_CountertopConnectionSequence' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopDepth(mod: IModBase | undefined, mod_CountertopDepth?: number): IMatrix_mod_CountertopDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopDepth');
    }
    var matrix = new Matrix_mod_CountertopDepth();
    if (mod_CountertopDepth == undefined) {
      logError("The variant 'mod_CountertopDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopEdgeBackType(mod: IModBase | undefined, mod_CountertopEdgeBackType?: string): IMatrix_mod_CountertopEdgeBackType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopEdgeBackType');
    }
    var matrix = new Matrix_mod_CountertopEdgeBackType();
    if (mod_CountertopEdgeBackType == undefined) {
      logError("The variant 'mod_CountertopEdgeBackType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CountertopEdgeBackType_find(mod_CountertopEdgeBackType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopEdgeFrontType(mod: IModBase | undefined, mod_CountertopEdgeFrontType?: string): IMatrix_mod_CountertopEdgeFrontType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopEdgeFrontType');
    }
    var matrix = new Matrix_mod_CountertopEdgeFrontType();
    if (mod_CountertopEdgeFrontType == undefined) {
      logError("The variant 'mod_CountertopEdgeFrontType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CountertopEdgeFrontType_find(mod_CountertopEdgeFrontType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopEdgeLeftType(mod: IModBase | undefined, mod_CountertopEdgeLeftType?: string): IMatrix_mod_CountertopEdgeLeftType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopEdgeLeftType');
    }
    var matrix = new Matrix_mod_CountertopEdgeLeftType();
    if (mod_CountertopEdgeLeftType == undefined) {
      logError("The variant 'mod_CountertopEdgeLeftType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CountertopEdgeLeftType_find(mod_CountertopEdgeLeftType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopEdgeRightType(mod: IModBase | undefined, mod_CountertopEdgeRightType?: string): IMatrix_mod_CountertopEdgeRightType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopEdgeRightType');
    }
    var matrix = new Matrix_mod_CountertopEdgeRightType();
    if (mod_CountertopEdgeRightType == undefined) {
      logError("The variant 'mod_CountertopEdgeRightType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CountertopEdgeRightType_find(mod_CountertopEdgeRightType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopId(mod: IModBase | undefined, mod_CountertopId?: string): IMatrix_mod_CountertopId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopId');
    }
    var matrix = new Matrix_mod_CountertopId();
    if (mod_CountertopId == undefined) {
      logError("The variant 'mod_CountertopId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopLeftEndType(mod: IModBase | undefined, mod_CountertopLeftEndType?: string): IMatrix_mod_CountertopLeftEndType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopLeftEndType');
    }
    var matrix = new Matrix_mod_CountertopLeftEndType();
    if (mod_CountertopLeftEndType == undefined) {
      logError("The variant 'mod_CountertopLeftEndType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CountertopLeftEndType_find(mod_CountertopLeftEndType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopOverhangFront(mod: IModBase | undefined, mod_CountertopOverhangFront?: number): IMatrix_mod_CountertopOverhangFront {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopOverhangFront');
    }
    var matrix = new Matrix_mod_CountertopOverhangFront();
    if (mod_CountertopOverhangFront == undefined) {
      logError("The variant 'mod_CountertopOverhangFront' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopOverhangLeft(mod: IModBase | undefined, mod_CountertopOverhangLeft?: number): IMatrix_mod_CountertopOverhangLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopOverhangLeft');
    }
    var matrix = new Matrix_mod_CountertopOverhangLeft();
    if (mod_CountertopOverhangLeft == undefined) {
      logError("The variant 'mod_CountertopOverhangLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopOverhangRight(mod: IModBase | undefined, mod_CountertopOverhangRight?: number): IMatrix_mod_CountertopOverhangRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopOverhangRight');
    }
    var matrix = new Matrix_mod_CountertopOverhangRight();
    if (mod_CountertopOverhangRight == undefined) {
      logError("The variant 'mod_CountertopOverhangRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopProgram(mod: IModBase | undefined, mod_CountertopProgram?: string): IMatrix_mod_CountertopProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopProgram');
    }
    var matrix = new Matrix_mod_CountertopProgram();
    if (mod_CountertopProgram == undefined) {
      logError("The variant 'mod_CountertopProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CountertopProgram_find(mod_CountertopProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopRightEndType(mod: IModBase | undefined, mod_CountertopRightEndType?: string): IMatrix_mod_CountertopRightEndType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopRightEndType');
    }
    var matrix = new Matrix_mod_CountertopRightEndType();
    if (mod_CountertopRightEndType == undefined) {
      logError("The variant 'mod_CountertopRightEndType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CountertopRightEndType_find(mod_CountertopRightEndType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopThk(mod: IModBase | undefined, mod_CountertopThk?: number): IMatrix_mod_CountertopThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopThk');
    }
    var matrix = new Matrix_mod_CountertopThk();
    if (mod_CountertopThk == undefined) {
      logError("The variant 'mod_CountertopThk' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_CountertopThk_find(mod_CountertopThk);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CountertopWidth(mod: IModBase | undefined, mod_CountertopWidth?: number): IMatrix_mod_CountertopWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CountertopWidth');
    }
    var matrix = new Matrix_mod_CountertopWidth();
    if (mod_CountertopWidth == undefined) {
      logError("The variant 'mod_CountertopWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CreateBacksplash(mod: IModBase | undefined, mod_CreateBacksplash?: boolean): IMatrix_mod_CreateBacksplash {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CreateBacksplash');
    }
    var matrix = new Matrix_mod_CreateBacksplash();
    if (mod_CreateBacksplash == undefined) {
      logError("The variant 'mod_CreateBacksplash' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CreateCeilingFiller(mod: IModBase | undefined, mod_CreateCeilingFiller?: boolean): IMatrix_mod_CreateCeilingFiller {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CreateCeilingFiller');
    }
    var matrix = new Matrix_mod_CreateCeilingFiller();
    if (mod_CreateCeilingFiller == undefined) {
      logError("The variant 'mod_CreateCeilingFiller' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CreateCountertop(mod: IModBase | undefined, mod_CreateCountertop?: boolean): IMatrix_mod_CreateCountertop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CreateCountertop');
    }
    var matrix = new Matrix_mod_CreateCountertop();
    if (mod_CreateCountertop == undefined) {
      logError("The variant 'mod_CreateCountertop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CreateFingergrip(mod: IModBase | undefined, mod_CreateFingergrip?: boolean): IMatrix_mod_CreateFingergrip {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CreateFingergrip');
    }
    var matrix = new Matrix_mod_CreateFingergrip();
    if (mod_CreateFingergrip == undefined) {
      logError("The variant 'mod_CreateFingergrip' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CreatePaneltop(mod: IModBase | undefined, mod_CreatePaneltop?: boolean): IMatrix_mod_CreatePaneltop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CreatePaneltop');
    }
    var matrix = new Matrix_mod_CreatePaneltop();
    if (mod_CreatePaneltop == undefined) {
      logError("The variant 'mod_CreatePaneltop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_CreateToekick(mod: IModBase | undefined, mod_CreateToekick?: boolean): IMatrix_mod_CreateToekick {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_CreateToekick');
    }
    var matrix = new Matrix_mod_CreateToekick();
    if (mod_CreateToekick == undefined) {
      logError("The variant 'mod_CreateToekick' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Depth(mod: IModBase | undefined, mod_Depth?: number): IMatrix_mod_Depth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Depth');
    }
    var matrix = new Matrix_mod_Depth();
    if (mod_Depth == undefined) {
      logError("The variant 'mod_Depth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DepthLeft(mod: IModBase | undefined, mod_DepthLeft?: number): IMatrix_mod_DepthLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DepthLeft');
    }
    var matrix = new Matrix_mod_DepthLeft();
    if (mod_DepthLeft == undefined) {
      logError("The variant 'mod_DepthLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DepthRight(mod: IModBase | undefined, mod_DepthRight?: number): IMatrix_mod_DepthRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DepthRight');
    }
    var matrix = new Matrix_mod_DepthRight();
    if (mod_DepthRight == undefined) {
      logError("The variant 'mod_DepthRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Direction(mod: IModBase | undefined, mod_Direction?: string): IMatrix_mod_Direction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Direction');
    }
    var matrix = new Matrix_mod_Direction();
    if (mod_Direction == undefined) {
      logError("The variant 'mod_Direction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_Direction_find(mod_Direction);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DishwasherId(mod: IModBase | undefined, mod_DishwasherId?: string): IMatrix_mod_DishwasherId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DishwasherId');
    }
    var matrix = new Matrix_mod_DishwasherId();
    if (mod_DishwasherId == undefined) {
      logError("The variant 'mod_DishwasherId' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DishwasherId_find(mod_DishwasherId);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DishwasherSupplier(mod: IModBase | undefined, mod_DishwasherSupplier?: string): IMatrix_mod_DishwasherSupplier {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DishwasherSupplier');
    }
    var matrix = new Matrix_mod_DishwasherSupplier();
    if (mod_DishwasherSupplier == undefined) {
      logError("The variant 'mod_DishwasherSupplier' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DishwasherSupplier_find(mod_DishwasherSupplier);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DoorDirection(mod: IModBase | undefined, mod_DoorDirection?: string): IMatrix_mod_DoorDirection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DoorDirection');
    }
    var matrix = new Matrix_mod_DoorDirection();
    if (mod_DoorDirection == undefined) {
      logError("The variant 'mod_DoorDirection' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DoorDirection_find(mod_DoorDirection);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DoorDirectionSelection(mod: IModBase | undefined, mod_DoorDirectionSelection?: string): IMatrix_mod_DoorDirectionSelection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DoorDirectionSelection');
    }
    var matrix = new Matrix_mod_DoorDirectionSelection();
    if (mod_DoorDirectionSelection == undefined) {
      logError("The variant 'mod_DoorDirectionSelection' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DoorDirectionSelection_find(mod_DoorDirectionSelection);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DoorType(mod: IModBase | undefined, mod_DoorType?: string): IMatrix_mod_DoorType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DoorType');
    }
    var matrix = new Matrix_mod_DoorType();
    if (mod_DoorType == undefined) {
      logError("The variant 'mod_DoorType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DoorType_find(mod_DoorType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DoorTypeSelection(mod: IModBase | undefined, mod_DoorTypeSelection?: string): IMatrix_mod_DoorTypeSelection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DoorTypeSelection');
    }
    var matrix = new Matrix_mod_DoorTypeSelection();
    if (mod_DoorTypeSelection == undefined) {
      logError("The variant 'mod_DoorTypeSelection' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DoorTypeSelection_find(mod_DoorTypeSelection);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerBackwallThk(mod: IModBase | undefined, mod_DrawerBackwallThk?: number): IMatrix_mod_DrawerBackwallThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerBackwallThk');
    }
    var matrix = new Matrix_mod_DrawerBackwallThk();
    if (mod_DrawerBackwallThk == undefined) {
      logError("The variant 'mod_DrawerBackwallThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerBoxColor(mod: IModBase | undefined, mod_DrawerBoxColor?: string): IMatrix_mod_DrawerBoxColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerBoxColor');
    }
    var matrix = new Matrix_mod_DrawerBoxColor();
    if (mod_DrawerBoxColor == undefined) {
      logError("The variant 'mod_DrawerBoxColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DrawerBoxColor_find(mod_DrawerBoxColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerBoxDepthType(mod: IModBase | undefined, mod_DrawerBoxDepthType?: string): IMatrix_mod_DrawerBoxDepthType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerBoxDepthType');
    }
    var matrix = new Matrix_mod_DrawerBoxDepthType();
    if (mod_DrawerBoxDepthType == undefined) {
      logError("The variant 'mod_DrawerBoxDepthType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DrawerBoxDepthType_find(mod_DrawerBoxDepthType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerBoxDesign(mod: IModBase | undefined, mod_DrawerBoxDesign?: string): IMatrix_mod_DrawerBoxDesign {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerBoxDesign');
    }
    var matrix = new Matrix_mod_DrawerBoxDesign();
    if (mod_DrawerBoxDesign == undefined) {
      logError("The variant 'mod_DrawerBoxDesign' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DrawerBoxDesign_find(mod_DrawerBoxDesign);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerBoxHeightType(mod: IModBase | undefined, mod_DrawerBoxHeightType?: string): IMatrix_mod_DrawerBoxHeightType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerBoxHeightType');
    }
    var matrix = new Matrix_mod_DrawerBoxHeightType();
    if (mod_DrawerBoxHeightType == undefined) {
      logError("The variant 'mod_DrawerBoxHeightType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DrawerBoxHeightType_find(mod_DrawerBoxHeightType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerBoxLogic(mod: IModBase | undefined, mod_DrawerBoxLogic?: string): IMatrix_mod_DrawerBoxLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerBoxLogic');
    }
    var matrix = new Matrix_mod_DrawerBoxLogic();
    if (mod_DrawerBoxLogic == undefined) {
      logError("The variant 'mod_DrawerBoxLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DrawerBoxLogic_find(mod_DrawerBoxLogic);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerBoxOffsetDepth(mod: IModBase | undefined, mod_DrawerBoxOffsetDepth?: number): IMatrix_mod_DrawerBoxOffsetDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerBoxOffsetDepth');
    }
    var matrix = new Matrix_mod_DrawerBoxOffsetDepth();
    if (mod_DrawerBoxOffsetDepth == undefined) {
      logError("The variant 'mod_DrawerBoxOffsetDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerBoxProgram(mod: IModBase | undefined, mod_DrawerBoxProgram?: string): IMatrix_mod_DrawerBoxProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerBoxProgram');
    }
    var matrix = new Matrix_mod_DrawerBoxProgram();
    if (mod_DrawerBoxProgram == undefined) {
      logError("The variant 'mod_DrawerBoxProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DrawerBoxProgram_find(mod_DrawerBoxProgram);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerBoxWeightType(mod: IModBase | undefined, mod_DrawerBoxWeightType?: string): IMatrix_mod_DrawerBoxWeightType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerBoxWeightType');
    }
    var matrix = new Matrix_mod_DrawerBoxWeightType();
    if (mod_DrawerBoxWeightType == undefined) {
      logError("The variant 'mod_DrawerBoxWeightType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DrawerBoxWeightType_find(mod_DrawerBoxWeightType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerDistanceDepth(mod: IModBase | undefined, mod_DrawerDistanceDepth?: number): IMatrix_mod_DrawerDistanceDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerDistanceDepth');
    }
    var matrix = new Matrix_mod_DrawerDistanceDepth();
    if (mod_DrawerDistanceDepth == undefined) {
      logError("The variant 'mod_DrawerDistanceDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerDistanceHeight(mod: IModBase | undefined, mod_DrawerDistanceHeight?: number): IMatrix_mod_DrawerDistanceHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerDistanceHeight');
    }
    var matrix = new Matrix_mod_DrawerDistanceHeight();
    if (mod_DrawerDistanceHeight == undefined) {
      logError("The variant 'mod_DrawerDistanceHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerDistanceWidth(mod: IModBase | undefined, mod_DrawerDistanceWidth?: number): IMatrix_mod_DrawerDistanceWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerDistanceWidth');
    }
    var matrix = new Matrix_mod_DrawerDistanceWidth();
    if (mod_DrawerDistanceWidth == undefined) {
      logError("The variant 'mod_DrawerDistanceWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerOpeningDistance(mod: IModBase | undefined, mod_DrawerOpeningDistance?: number): IMatrix_mod_DrawerOpeningDistance {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerOpeningDistance');
    }
    var matrix = new Matrix_mod_DrawerOpeningDistance();
    if (mod_DrawerOpeningDistance == undefined) {
      logError("The variant 'mod_DrawerOpeningDistance' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerShelfbtmThk(mod: IModBase | undefined, mod_DrawerShelfbtmThk?: number): IMatrix_mod_DrawerShelfbtmThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerShelfbtmThk');
    }
    var matrix = new Matrix_mod_DrawerShelfbtmThk();
    if (mod_DrawerShelfbtmThk == undefined) {
      logError("The variant 'mod_DrawerShelfbtmThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_DrawerType(mod: IModBase | undefined, mod_DrawerType?: string): IMatrix_mod_DrawerType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_DrawerType');
    }
    var matrix = new Matrix_mod_DrawerType();
    if (mod_DrawerType == undefined) {
      logError("The variant 'mod_DrawerType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_DrawerType_find(mod_DrawerType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_EdgeBackType(mod: IModBase | undefined, mod_EdgeBackType?: string): IMatrix_mod_EdgeBackType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_EdgeBackType');
    }
    var matrix = new Matrix_mod_EdgeBackType();
    if (mod_EdgeBackType == undefined) {
      logError("The variant 'mod_EdgeBackType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_EdgeBackType_find(mod_EdgeBackType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_EdgeFrontType(mod: IModBase | undefined, mod_EdgeFrontType?: string): IMatrix_mod_EdgeFrontType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_EdgeFrontType');
    }
    var matrix = new Matrix_mod_EdgeFrontType();
    if (mod_EdgeFrontType == undefined) {
      logError("The variant 'mod_EdgeFrontType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_EdgeFrontType_find(mod_EdgeFrontType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_EdgeJointType(mod: IModBase | undefined, mod_EdgeJointType?: string): IMatrix_mod_EdgeJointType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_EdgeJointType');
    }
    var matrix = new Matrix_mod_EdgeJointType();
    if (mod_EdgeJointType == undefined) {
      logError("The variant 'mod_EdgeJointType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_EdgeJointType_find(mod_EdgeJointType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_EdgeLeftType(mod: IModBase | undefined, mod_EdgeLeftType?: string): IMatrix_mod_EdgeLeftType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_EdgeLeftType');
    }
    var matrix = new Matrix_mod_EdgeLeftType();
    if (mod_EdgeLeftType == undefined) {
      logError("The variant 'mod_EdgeLeftType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_EdgeLeftType_find(mod_EdgeLeftType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_EdgeRightType(mod: IModBase | undefined, mod_EdgeRightType?: string): IMatrix_mod_EdgeRightType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_EdgeRightType');
    }
    var matrix = new Matrix_mod_EdgeRightType();
    if (mod_EdgeRightType == undefined) {
      logError("The variant 'mod_EdgeRightType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_EdgeRightType_find(mod_EdgeRightType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FillerDepth(mod: IModBase | undefined, mod_FillerDepth?: number): IMatrix_mod_FillerDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FillerDepth');
    }
    var matrix = new Matrix_mod_FillerDepth();
    if (mod_FillerDepth == undefined) {
      logError("The variant 'mod_FillerDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FillerDepthLeft(mod: IModBase | undefined, mod_FillerDepthLeft?: number): IMatrix_mod_FillerDepthLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FillerDepthLeft');
    }
    var matrix = new Matrix_mod_FillerDepthLeft();
    if (mod_FillerDepthLeft == undefined) {
      logError("The variant 'mod_FillerDepthLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FillerDepthRight(mod: IModBase | undefined, mod_FillerDepthRight?: number): IMatrix_mod_FillerDepthRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FillerDepthRight');
    }
    var matrix = new Matrix_mod_FillerDepthRight();
    if (mod_FillerDepthRight == undefined) {
      logError("The variant 'mod_FillerDepthRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FillerHardware(mod: IModBase | undefined, mod_FillerHardware?: string): IMatrix_mod_FillerHardware {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FillerHardware');
    }
    var matrix = new Matrix_mod_FillerHardware();
    if (mod_FillerHardware == undefined) {
      logError("The variant 'mod_FillerHardware' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FillerHardware_find(mod_FillerHardware);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FillerType(mod: IModBase | undefined, mod_FillerType?: string): IMatrix_mod_FillerType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FillerType');
    }
    var matrix = new Matrix_mod_FillerType();
    if (mod_FillerType == undefined) {
      logError("The variant 'mod_FillerType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FillerType_find(mod_FillerType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripBtmType(mod: IModBase | undefined, mod_FingergripBtmType?: string): IMatrix_mod_FingergripBtmType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripBtmType');
    }
    var matrix = new Matrix_mod_FingergripBtmType();
    if (mod_FingergripBtmType == undefined) {
      logError("The variant 'mod_FingergripBtmType' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripColor(mod: IModBase | undefined, mod_FingergripColor?: string): IMatrix_mod_FingergripColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripColor');
    }
    var matrix = new Matrix_mod_FingergripColor();
    if (mod_FingergripColor == undefined) {
      logError("The variant 'mod_FingergripColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FingergripColor_find(mod_FingergripColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripLength(mod: IModBase | undefined, mod_FingergripLength?: number): IMatrix_mod_FingergripLength {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripLength');
    }
    var matrix = new Matrix_mod_FingergripLength();
    if (mod_FingergripLength == undefined) {
      logError("The variant 'mod_FingergripLength' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripPos1(mod: IModBase | undefined, mod_FingergripPos1?: number): IMatrix_mod_FingergripPos1 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripPos1');
    }
    var matrix = new Matrix_mod_FingergripPos1();
    if (mod_FingergripPos1 == undefined) {
      logError("The variant 'mod_FingergripPos1' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripPos2(mod: IModBase | undefined, mod_FingergripPos2?: number): IMatrix_mod_FingergripPos2 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripPos2');
    }
    var matrix = new Matrix_mod_FingergripPos2();
    if (mod_FingergripPos2 == undefined) {
      logError("The variant 'mod_FingergripPos2' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripPos3(mod: IModBase | undefined, mod_FingergripPos3?: number): IMatrix_mod_FingergripPos3 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripPos3');
    }
    var matrix = new Matrix_mod_FingergripPos3();
    if (mod_FingergripPos3 == undefined) {
      logError("The variant 'mod_FingergripPos3' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripPos4(mod: IModBase | undefined, mod_FingergripPos4?: number): IMatrix_mod_FingergripPos4 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripPos4');
    }
    var matrix = new Matrix_mod_FingergripPos4();
    if (mod_FingergripPos4 == undefined) {
      logError("The variant 'mod_FingergripPos4' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripPos5(mod: IModBase | undefined, mod_FingergripPos5?: number): IMatrix_mod_FingergripPos5 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripPos5');
    }
    var matrix = new Matrix_mod_FingergripPos5();
    if (mod_FingergripPos5 == undefined) {
      logError("The variant 'mod_FingergripPos5' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripPostype(mod: IModBase | undefined, mod_FingergripPostype?: string): IMatrix_mod_FingergripPostype {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripPostype');
    }
    var matrix = new Matrix_mod_FingergripPostype();
    if (mod_FingergripPostype == undefined) {
      logError("The variant 'mod_FingergripPostype' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FingergripPostype_find(mod_FingergripPostype);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripQtyMiddle(mod: IModBase | undefined, mod_FingergripQtyMiddle?: number): IMatrix_mod_FingergripQtyMiddle {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripQtyMiddle');
    }
    var matrix = new Matrix_mod_FingergripQtyMiddle();
    if (mod_FingergripQtyMiddle == undefined) {
      logError("The variant 'mod_FingergripQtyMiddle' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripTop(mod: IModBase | undefined, mod_FingergripTop?: boolean): IMatrix_mod_FingergripTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripTop');
    }
    var matrix = new Matrix_mod_FingergripTop();
    if (mod_FingergripTop == undefined) {
      logError("The variant 'mod_FingergripTop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripTopType(mod: IModBase | undefined, mod_FingergripTopType?: string): IMatrix_mod_FingergripTopType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripTopType');
    }
    var matrix = new Matrix_mod_FingergripTopType();
    if (mod_FingergripTopType == undefined) {
      logError("The variant 'mod_FingergripTopType' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FingergripType(mod: IModBase | undefined, mod_FingergripType?: string): IMatrix_mod_FingergripType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FingergripType');
    }
    var matrix = new Matrix_mod_FingergripType();
    if (mod_FingergripType == undefined) {
      logError("The variant 'mod_FingergripType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FingergripType_find(mod_FingergripType);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FirstFront(mod: IModBase | undefined, mod_FirstFront?: boolean): IMatrix_mod_FirstFront {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FirstFront');
    }
    var matrix = new Matrix_mod_FirstFront();
    if (mod_FirstFront == undefined) {
      logError("The variant 'mod_FirstFront' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FittingConnectionBtmVert(mod: IModBase | undefined, mod_FittingConnectionBtmVert?: string): IMatrix_mod_FittingConnectionBtmVert {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FittingConnectionBtmVert');
    }
    var matrix = new Matrix_mod_FittingConnectionBtmVert();
    if (mod_FittingConnectionBtmVert == undefined) {
      logError("The variant 'mod_FittingConnectionBtmVert' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FittingConnectionBtmVert_find(mod_FittingConnectionBtmVert);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FittingConnectionLeftBtm(mod: IModBase | undefined, mod_FittingConnectionLeftBtm?: string): IMatrix_mod_FittingConnectionLeftBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FittingConnectionLeftBtm');
    }
    var matrix = new Matrix_mod_FittingConnectionLeftBtm();
    if (mod_FittingConnectionLeftBtm == undefined) {
      logError("The variant 'mod_FittingConnectionLeftBtm' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FittingConnectionLeftBtm_find(mod_FittingConnectionLeftBtm);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FittingConnectionLeftHor(mod: IModBase | undefined, mod_FittingConnectionLeftHor?: string): IMatrix_mod_FittingConnectionLeftHor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FittingConnectionLeftHor');
    }
    var matrix = new Matrix_mod_FittingConnectionLeftHor();
    if (mod_FittingConnectionLeftHor == undefined) {
      logError("The variant 'mod_FittingConnectionLeftHor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FittingConnectionLeftHor_find(mod_FittingConnectionLeftHor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FittingConnectionLeftTop(mod: IModBase | undefined, mod_FittingConnectionLeftTop?: string): IMatrix_mod_FittingConnectionLeftTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FittingConnectionLeftTop');
    }
    var matrix = new Matrix_mod_FittingConnectionLeftTop();
    if (mod_FittingConnectionLeftTop == undefined) {
      logError("The variant 'mod_FittingConnectionLeftTop' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FittingConnectionLeftTop_find(mod_FittingConnectionLeftTop);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FittingConnectionRightBtm(mod: IModBase | undefined, mod_FittingConnectionRightBtm?: string): IMatrix_mod_FittingConnectionRightBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FittingConnectionRightBtm');
    }
    var matrix = new Matrix_mod_FittingConnectionRightBtm();
    if (mod_FittingConnectionRightBtm == undefined) {
      logError("The variant 'mod_FittingConnectionRightBtm' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FittingConnectionRightBtm_find(mod_FittingConnectionRightBtm);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FittingConnectionRightHor(mod: IModBase | undefined, mod_FittingConnectionRightHor?: string): IMatrix_mod_FittingConnectionRightHor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FittingConnectionRightHor');
    }
    var matrix = new Matrix_mod_FittingConnectionRightHor();
    if (mod_FittingConnectionRightHor == undefined) {
      logError("The variant 'mod_FittingConnectionRightHor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FittingConnectionRightHor_find(mod_FittingConnectionRightHor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FittingConnectionRightTop(mod: IModBase | undefined, mod_FittingConnectionRightTop?: string): IMatrix_mod_FittingConnectionRightTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FittingConnectionRightTop');
    }
    var matrix = new Matrix_mod_FittingConnectionRightTop();
    if (mod_FittingConnectionRightTop == undefined) {
      logError("The variant 'mod_FittingConnectionRightTop' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FittingConnectionRightTop_find(mod_FittingConnectionRightTop);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FittingConnectionTopVert(mod: IModBase | undefined, mod_FittingConnectionTopVert?: string): IMatrix_mod_FittingConnectionTopVert {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FittingConnectionTopVert');
    }
    var matrix = new Matrix_mod_FittingConnectionTopVert();
    if (mod_FittingConnectionTopVert == undefined) {
      logError("The variant 'mod_FittingConnectionTopVert' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FittingConnectionTopVert_find(mod_FittingConnectionTopVert);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FlipliftFrontNumber(mod: IModBase | undefined, mod_FlipliftFrontNumber?: number): IMatrix_mod_FlipliftFrontNumber {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FlipliftFrontNumber');
    }
    var matrix = new Matrix_mod_FlipliftFrontNumber();
    if (mod_FlipliftFrontNumber == undefined) {
      logError("The variant 'mod_FlipliftFrontNumber' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FlipliftHardwareColor(mod: IModBase | undefined, mod_FlipliftHardwareColor?: string): IMatrix_mod_FlipliftHardwareColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FlipliftHardwareColor');
    }
    var matrix = new Matrix_mod_FlipliftHardwareColor();
    if (mod_FlipliftHardwareColor == undefined) {
      logError("The variant 'mod_FlipliftHardwareColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FlipliftHardwareColor_find(mod_FlipliftHardwareColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FlipliftHardwareType(mod: IModBase | undefined, mod_FlipliftHardwareType?: string): IMatrix_mod_FlipliftHardwareType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FlipliftHardwareType');
    }
    var matrix = new Matrix_mod_FlipliftHardwareType();
    if (mod_FlipliftHardwareType == undefined) {
      logError("The variant 'mod_FlipliftHardwareType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FlipliftHardwareType_find(mod_FlipliftHardwareType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FlipliftLogic(mod: IModBase | undefined, mod_FlipliftLogic?: string): IMatrix_mod_FlipliftLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FlipliftLogic');
    }
    var matrix = new Matrix_mod_FlipliftLogic();
    if (mod_FlipliftLogic == undefined) {
      logError("The variant 'mod_FlipliftLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FlipliftLogic_find(mod_FlipliftLogic);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FlipliftType(mod: IModBase | undefined, mod_FlipliftType?: string): IMatrix_mod_FlipliftType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FlipliftType');
    }
    var matrix = new Matrix_mod_FlipliftType();
    if (mod_FlipliftType == undefined) {
      logError("The variant 'mod_FlipliftType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FlipliftType_find(mod_FlipliftType);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrameFillingColor(mod: IModBase | undefined, mod_FrameFillingColor?: string): IMatrix_mod_FrameFillingColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrameFillingColor');
    }
    var matrix = new Matrix_mod_FrameFillingColor();
    if (mod_FrameFillingColor == undefined) {
      logError("The variant 'mod_FrameFillingColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FrameFillingColor_find(mod_FrameFillingColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrameFillingType(mod: IModBase | undefined, mod_FrameFillingType?: string): IMatrix_mod_FrameFillingType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrameFillingType');
    }
    var matrix = new Matrix_mod_FrameFillingType();
    if (mod_FrameFillingType == undefined) {
      logError("The variant 'mod_FrameFillingType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FrameFillingType_find(mod_FrameFillingType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FridgeCarcasePositionType(mod: IModBase | undefined, mod_FridgeCarcasePositionType?: string): IMatrix_mod_FridgeCarcasePositionType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FridgeCarcasePositionType');
    }
    var matrix = new Matrix_mod_FridgeCarcasePositionType();
    if (mod_FridgeCarcasePositionType == undefined) {
      logError("The variant 'mod_FridgeCarcasePositionType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FridgeCarcasePositionType_find(mod_FridgeCarcasePositionType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FridgeCarcaseSpaceDescriptor(mod: IModBase | undefined, mod_FridgeCarcaseSpaceDescriptor?: string): IMatrix_mod_FridgeCarcaseSpaceDescriptor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FridgeCarcaseSpaceDescriptor');
    }
    var matrix = new Matrix_mod_FridgeCarcaseSpaceDescriptor();
    if (mod_FridgeCarcaseSpaceDescriptor == undefined) {
      logError("The variant 'mod_FridgeCarcaseSpaceDescriptor' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FridgeFrontHeightDescriptor(mod: IModBase | undefined, mod_FridgeFrontHeightDescriptor?: string): IMatrix_mod_FridgeFrontHeightDescriptor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FridgeFrontHeightDescriptor');
    }
    var matrix = new Matrix_mod_FridgeFrontHeightDescriptor();
    if (mod_FridgeFrontHeightDescriptor == undefined) {
      logError("The variant 'mod_FridgeFrontHeightDescriptor' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FridgeGraphicId(mod: IModBase | undefined, mod_FridgeGraphicId?: string): IMatrix_mod_FridgeGraphicId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FridgeGraphicId');
    }
    var matrix = new Matrix_mod_FridgeGraphicId();
    if (mod_FridgeGraphicId == undefined) {
      logError("The variant 'mod_FridgeGraphicId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FridgeId(mod: IModBase | undefined, mod_FridgeId?: string): IMatrix_mod_FridgeId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FridgeId');
    }
    var matrix = new Matrix_mod_FridgeId();
    if (mod_FridgeId == undefined) {
      logError("The variant 'mod_FridgeId' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FridgeId_find(mod_FridgeId);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FridgeInfo(mod: IModBase | undefined, mod_FridgeInfo?: string): IMatrix_mod_FridgeInfo {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FridgeInfo');
    }
    var matrix = new Matrix_mod_FridgeInfo();
    if (mod_FridgeInfo == undefined) {
      logError("The variant 'mod_FridgeInfo' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FridgePositionId(mod: IModBase | undefined, mod_FridgePositionId?: string): IMatrix_mod_FridgePositionId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FridgePositionId');
    }
    var matrix = new Matrix_mod_FridgePositionId();
    if (mod_FridgePositionId == undefined) {
      logError("The variant 'mod_FridgePositionId' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FridgePositionId_find(mod_FridgePositionId);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FridgeSupplier(mod: IModBase | undefined, mod_FridgeSupplier?: string): IMatrix_mod_FridgeSupplier {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FridgeSupplier');
    }
    var matrix = new Matrix_mod_FridgeSupplier();
    if (mod_FridgeSupplier == undefined) {
      logError("The variant 'mod_FridgeSupplier' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FridgeSupplier_find(mod_FridgeSupplier);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontColor(mod: IModBase | undefined, mod_FrontColor?: string): IMatrix_mod_FrontColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontColor');
    }
    var matrix = new Matrix_mod_FrontColor();
    if (mod_FrontColor == undefined) {
      logError("The variant 'mod_FrontColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FrontColor_find(mod_FrontColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontDescriptor(mod: IModBase | undefined, mod_FrontDescriptor?: string): IMatrix_mod_FrontDescriptor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontDescriptor');
    }
    var matrix = new Matrix_mod_FrontDescriptor();
    if (mod_FrontDescriptor == undefined) {
      logError("The variant 'mod_FrontDescriptor' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontDesign(mod: IModBase | undefined, mod_FrontDesign?: string): IMatrix_mod_FrontDesign {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontDesign');
    }
    var matrix = new Matrix_mod_FrontDesign();
    if (mod_FrontDesign == undefined) {
      logError("The variant 'mod_FrontDesign' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FrontDesign_find(mod_FrontDesign);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontEdgeColor(mod: IModBase | undefined, mod_FrontEdgeColor?: string): IMatrix_mod_FrontEdgeColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontEdgeColor');
    }
    var matrix = new Matrix_mod_FrontEdgeColor();
    if (mod_FrontEdgeColor == undefined) {
      logError("The variant 'mod_FrontEdgeColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FrontEdgeColor_find(mod_FrontEdgeColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontEdgeThk(mod: IModBase | undefined, mod_FrontEdgeThk?: string): IMatrix_mod_FrontEdgeThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontEdgeThk');
    }
    var matrix = new Matrix_mod_FrontEdgeThk();
    if (mod_FrontEdgeThk == undefined) {
      logError("The variant 'mod_FrontEdgeThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontGapCarcase(mod: IModBase | undefined, mod_FrontGapCarcase?: number): IMatrix_mod_FrontGapCarcase {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontGapCarcase');
    }
    var matrix = new Matrix_mod_FrontGapCarcase();
    if (mod_FrontGapCarcase == undefined) {
      logError("The variant 'mod_FrontGapCarcase' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FrontGapCarcase_find(mod_FrontGapCarcase);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontGapHor(mod: IModBase | undefined, mod_FrontGapHor?: number): IMatrix_mod_FrontGapHor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontGapHor');
    }
    var matrix = new Matrix_mod_FrontGapHor();
    if (mod_FrontGapHor == undefined) {
      logError("The variant 'mod_FrontGapHor' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontGapHorTop(mod: IModBase | undefined, mod_FrontGapHorTop?: number): IMatrix_mod_FrontGapHorTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontGapHorTop');
    }
    var matrix = new Matrix_mod_FrontGapHorTop();
    if (mod_FrontGapHorTop == undefined) {
      logError("The variant 'mod_FrontGapHorTop' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FrontGapHorTop_find(mod_FrontGapHorTop);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontGapVert(mod: IModBase | undefined, mod_FrontGapVert?: number): IMatrix_mod_FrontGapVert {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontGapVert');
    }
    var matrix = new Matrix_mod_FrontGapVert();
    if (mod_FrontGapVert == undefined) {
      logError("The variant 'mod_FrontGapVert' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontHeight(mod: IModBase | undefined, mod_FrontHeight?: number): IMatrix_mod_FrontHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontHeight');
    }
    var matrix = new Matrix_mod_FrontHeight();
    if (mod_FrontHeight == undefined) {
      logError("The variant 'mod_FrontHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontHeightSelection(mod: IModBase | undefined, mod_FrontHeightSelection?: number): IMatrix_mod_FrontHeightSelection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontHeightSelection');
    }
    var matrix = new Matrix_mod_FrontHeightSelection();
    if (mod_FrontHeightSelection == undefined) {
      logError("The variant 'mod_FrontHeightSelection' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontId(mod: IModBase | undefined, mod_FrontId?: string): IMatrix_mod_FrontId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontId');
    }
    var matrix = new Matrix_mod_FrontId();
    if (mod_FrontId == undefined) {
      logError("The variant 'mod_FrontId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontOverlayInfo(mod: IModBase | undefined, mod_FrontOverlayInfo?: string): IMatrix_mod_FrontOverlayInfo {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontOverlayInfo');
    }
    var matrix = new Matrix_mod_FrontOverlayInfo();
    if (mod_FrontOverlayInfo == undefined) {
      logError("The variant 'mod_FrontOverlayInfo' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontOversizeBtm(mod: IModBase | undefined, mod_FrontOversizeBtm?: number): IMatrix_mod_FrontOversizeBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontOversizeBtm');
    }
    var matrix = new Matrix_mod_FrontOversizeBtm();
    if (mod_FrontOversizeBtm == undefined) {
      logError("The variant 'mod_FrontOversizeBtm' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontOversizeLeft(mod: IModBase | undefined, mod_FrontOversizeLeft?: number): IMatrix_mod_FrontOversizeLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontOversizeLeft');
    }
    var matrix = new Matrix_mod_FrontOversizeLeft();
    if (mod_FrontOversizeLeft == undefined) {
      logError("The variant 'mod_FrontOversizeLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontOversizeRight(mod: IModBase | undefined, mod_FrontOversizeRight?: number): IMatrix_mod_FrontOversizeRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontOversizeRight');
    }
    var matrix = new Matrix_mod_FrontOversizeRight();
    if (mod_FrontOversizeRight == undefined) {
      logError("The variant 'mod_FrontOversizeRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontOversizeTop(mod: IModBase | undefined, mod_FrontOversizeTop?: number): IMatrix_mod_FrontOversizeTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontOversizeTop');
    }
    var matrix = new Matrix_mod_FrontOversizeTop();
    if (mod_FrontOversizeTop == undefined) {
      logError("The variant 'mod_FrontOversizeTop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontPosStart(mod: IModBase | undefined, mod_FrontPosStart?: number): IMatrix_mod_FrontPosStart {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontPosStart');
    }
    var matrix = new Matrix_mod_FrontPosStart();
    if (mod_FrontPosStart == undefined) {
      logError("The variant 'mod_FrontPosStart' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontProgram(mod: IModBase | undefined, mod_FrontProgram?: string): IMatrix_mod_FrontProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontProgram');
    }
    var matrix = new Matrix_mod_FrontProgram();
    if (mod_FrontProgram == undefined) {
      logError("The variant 'mod_FrontProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FrontProgram_find(mod_FrontProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontQtyElements(mod: IModBase | undefined, mod_FrontQtyElements?: number): IMatrix_mod_FrontQtyElements {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontQtyElements');
    }
    var matrix = new Matrix_mod_FrontQtyElements();
    if (mod_FrontQtyElements == undefined) {
      logError("The variant 'mod_FrontQtyElements' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontSegmentColor(mod: IModBase | undefined, mod_FrontSegmentColor?: string): IMatrix_mod_FrontSegmentColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontSegmentColor');
    }
    var matrix = new Matrix_mod_FrontSegmentColor();
    if (mod_FrontSegmentColor == undefined) {
      logError("The variant 'mod_FrontSegmentColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FrontSegmentColor_find(mod_FrontSegmentColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontSegmentDescriptor(mod: IModBase | undefined, mod_FrontSegmentDescriptor?: string): IMatrix_mod_FrontSegmentDescriptor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontSegmentDescriptor');
    }
    var matrix = new Matrix_mod_FrontSegmentDescriptor();
    if (mod_FrontSegmentDescriptor == undefined) {
      logError("The variant 'mod_FrontSegmentDescriptor' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontSegmentType(mod: IModBase | undefined, mod_FrontSegmentType?: string): IMatrix_mod_FrontSegmentType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontSegmentType');
    }
    var matrix = new Matrix_mod_FrontSegmentType();
    if (mod_FrontSegmentType == undefined) {
      logError("The variant 'mod_FrontSegmentType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FrontSegmentType_find(mod_FrontSegmentType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontSplit(mod: IModBase | undefined, mod_FrontSplit?: boolean): IMatrix_mod_FrontSplit {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontSplit');
    }
    var matrix = new Matrix_mod_FrontSplit();
    if (mod_FrontSplit == undefined) {
      logError("The variant 'mod_FrontSplit' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontSplitDescriptor(mod: IModBase | undefined, mod_FrontSplitDescriptor?: string): IMatrix_mod_FrontSplitDescriptor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontSplitDescriptor');
    }
    var matrix = new Matrix_mod_FrontSplitDescriptor();
    if (mod_FrontSplitDescriptor == undefined) {
      logError("The variant 'mod_FrontSplitDescriptor' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontSplitHeight1(mod: IModBase | undefined, mod_FrontSplitHeight1?: number): IMatrix_mod_FrontSplitHeight1 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontSplitHeight1');
    }
    var matrix = new Matrix_mod_FrontSplitHeight1();
    if (mod_FrontSplitHeight1 == undefined) {
      logError("The variant 'mod_FrontSplitHeight1' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontSplitHeight2(mod: IModBase | undefined, mod_FrontSplitHeight2?: number): IMatrix_mod_FrontSplitHeight2 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontSplitHeight2');
    }
    var matrix = new Matrix_mod_FrontSplitHeight2();
    if (mod_FrontSplitHeight2 == undefined) {
      logError("The variant 'mod_FrontSplitHeight2' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontSplitHeight3(mod: IModBase | undefined, mod_FrontSplitHeight3?: number): IMatrix_mod_FrontSplitHeight3 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontSplitHeight3');
    }
    var matrix = new Matrix_mod_FrontSplitHeight3();
    if (mod_FrontSplitHeight3 == undefined) {
      logError("The variant 'mod_FrontSplitHeight3' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontSplitType1(mod: IModBase | undefined, mod_FrontSplitType1?: string): IMatrix_mod_FrontSplitType1 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontSplitType1');
    }
    var matrix = new Matrix_mod_FrontSplitType1();
    if (mod_FrontSplitType1 == undefined) {
      logError("The variant 'mod_FrontSplitType1' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontSplitType2(mod: IModBase | undefined, mod_FrontSplitType2?: string): IMatrix_mod_FrontSplitType2 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontSplitType2');
    }
    var matrix = new Matrix_mod_FrontSplitType2();
    if (mod_FrontSplitType2 == undefined) {
      logError("The variant 'mod_FrontSplitType2' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontThk(mod: IModBase | undefined, mod_FrontThk?: number): IMatrix_mod_FrontThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontThk');
    }
    var matrix = new Matrix_mod_FrontThk();
    if (mod_FrontThk == undefined) {
      logError("The variant 'mod_FrontThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontType(mod: IModBase | undefined, mod_FrontType?: string): IMatrix_mod_FrontType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontType');
    }
    var matrix = new Matrix_mod_FrontType();
    if (mod_FrontType == undefined) {
      logError("The variant 'mod_FrontType' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontWidth(mod: IModBase | undefined, mod_FrontWidth?: number): IMatrix_mod_FrontWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontWidth');
    }
    var matrix = new Matrix_mod_FrontWidth();
    if (mod_FrontWidth == undefined) {
      logError("The variant 'mod_FrontWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_FrontpanelWeightLogic(mod: IModBase | undefined, mod_FrontpanelWeightLogic?: string): IMatrix_mod_FrontpanelWeightLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_FrontpanelWeightLogic');
    }
    var matrix = new Matrix_mod_FrontpanelWeightLogic();
    if (mod_FrontpanelWeightLogic == undefined) {
      logError("The variant 'mod_FrontpanelWeightLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_FrontpanelWeightLogic_find(mod_FrontpanelWeightLogic);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_GlobalFrontOversizeBtm(mod: IModBase | undefined, mod_GlobalFrontOversizeBtm?: number): IMatrix_mod_GlobalFrontOversizeBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_GlobalFrontOversizeBtm');
    }
    var matrix = new Matrix_mod_GlobalFrontOversizeBtm();
    if (mod_GlobalFrontOversizeBtm == undefined) {
      logError("The variant 'mod_GlobalFrontOversizeBtm' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_GlobalFrontOversizeLeft(mod: IModBase | undefined, mod_GlobalFrontOversizeLeft?: number): IMatrix_mod_GlobalFrontOversizeLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_GlobalFrontOversizeLeft');
    }
    var matrix = new Matrix_mod_GlobalFrontOversizeLeft();
    if (mod_GlobalFrontOversizeLeft == undefined) {
      logError("The variant 'mod_GlobalFrontOversizeLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_GlobalFrontOversizeRight(mod: IModBase | undefined, mod_GlobalFrontOversizeRight?: number): IMatrix_mod_GlobalFrontOversizeRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_GlobalFrontOversizeRight');
    }
    var matrix = new Matrix_mod_GlobalFrontOversizeRight();
    if (mod_GlobalFrontOversizeRight == undefined) {
      logError("The variant 'mod_GlobalFrontOversizeRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_GlobalFrontOversizeTop(mod: IModBase | undefined, mod_GlobalFrontOversizeTop?: number): IMatrix_mod_GlobalFrontOversizeTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_GlobalFrontOversizeTop');
    }
    var matrix = new Matrix_mod_GlobalFrontOversizeTop();
    if (mod_GlobalFrontOversizeTop == undefined) {
      logError("The variant 'mod_GlobalFrontOversizeTop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_GraphicId(mod: IModBase | undefined, mod_GraphicId?: string): IMatrix_mod_GraphicId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_GraphicId');
    }
    var matrix = new Matrix_mod_GraphicId();
    if (mod_GraphicId == undefined) {
      logError("The variant 'mod_GraphicId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandleActivated(mod: IModBase | undefined, mod_HandleActivated?: string): IMatrix_mod_HandleActivated {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandleActivated');
    }
    var matrix = new Matrix_mod_HandleActivated();
    if (mod_HandleActivated == undefined) {
      logError("The variant 'mod_HandleActivated' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HandleActivated_find(mod_HandleActivated);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandleColor(mod: IModBase | undefined, mod_HandleColor?: string): IMatrix_mod_HandleColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandleColor');
    }
    var matrix = new Matrix_mod_HandleColor();
    if (mod_HandleColor == undefined) {
      logError("The variant 'mod_HandleColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HandleColor_find(mod_HandleColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandleDesign(mod: IModBase | undefined, mod_HandleDesign?: string): IMatrix_mod_HandleDesign {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandleDesign');
    }
    var matrix = new Matrix_mod_HandleDesign();
    if (mod_HandleDesign == undefined) {
      logError("The variant 'mod_HandleDesign' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HandleDesign_find(mod_HandleDesign);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandleDrill(mod: IModBase | undefined, mod_HandleDrill?: boolean): IMatrix_mod_HandleDrill {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandleDrill');
    }
    var matrix = new Matrix_mod_HandleDrill();
    if (mod_HandleDrill == undefined) {
      logError("The variant 'mod_HandleDrill' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandleInsertion(mod: IModBase | undefined, mod_HandleInsertion?: boolean): IMatrix_mod_HandleInsertion {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandleInsertion');
    }
    var matrix = new Matrix_mod_HandleInsertion();
    if (mod_HandleInsertion == undefined) {
      logError("The variant 'mod_HandleInsertion' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandleLength(mod: IModBase | undefined, mod_HandleLength?: number): IMatrix_mod_HandleLength {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandleLength');
    }
    var matrix = new Matrix_mod_HandleLength();
    if (mod_HandleLength == undefined) {
      logError("The variant 'mod_HandleLength' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HandleLength_find(mod_HandleLength);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandleLine(mod: IModBase | undefined, mod_HandleLine?: number): IMatrix_mod_HandleLine {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandleLine');
    }
    var matrix = new Matrix_mod_HandleLine();
    if (mod_HandleLine == undefined) {
      logError("The variant 'mod_HandleLine' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandleOffsetX(mod: IModBase | undefined, mod_HandleOffsetX?: number): IMatrix_mod_HandleOffsetX {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandleOffsetX');
    }
    var matrix = new Matrix_mod_HandleOffsetX();
    if (mod_HandleOffsetX == undefined) {
      logError("The variant 'mod_HandleOffsetX' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandleOffsetY(mod: IModBase | undefined, mod_HandleOffsetY?: number): IMatrix_mod_HandleOffsetY {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandleOffsetY');
    }
    var matrix = new Matrix_mod_HandleOffsetY();
    if (mod_HandleOffsetY == undefined) {
      logError("The variant 'mod_HandleOffsetY' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandlePosLogic(mod: IModBase | undefined, mod_HandlePosLogic?: string): IMatrix_mod_HandlePosLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandlePosLogic');
    }
    var matrix = new Matrix_mod_HandlePosLogic();
    if (mod_HandlePosLogic == undefined) {
      logError("The variant 'mod_HandlePosLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HandlePosLogic_find(mod_HandlePosLogic);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandlePosMatrix(mod: IModBase | undefined, mod_HandlePosMatrix?: string): IMatrix_mod_HandlePosMatrix {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandlePosMatrix');
    }
    var matrix = new Matrix_mod_HandlePosMatrix();
    if (mod_HandlePosMatrix == undefined) {
      logError("The variant 'mod_HandlePosMatrix' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HandlePosMatrix_find(mod_HandlePosMatrix);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandlePosMatrixMultiple(mod: IModBase | undefined, mod_HandlePosMatrixMultiple?: string): IMatrix_mod_HandlePosMatrixMultiple {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandlePosMatrixMultiple');
    }
    var matrix = new Matrix_mod_HandlePosMatrixMultiple();
    if (mod_HandlePosMatrixMultiple == undefined) {
      logError("The variant 'mod_HandlePosMatrixMultiple' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HandlePosMatrixMultiple_find(mod_HandlePosMatrixMultiple);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandlePosType(mod: IModBase | undefined, mod_HandlePosType?: string): IMatrix_mod_HandlePosType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandlePosType');
    }
    var matrix = new Matrix_mod_HandlePosType();
    if (mod_HandlePosType == undefined) {
      logError("The variant 'mod_HandlePosType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HandlePosType_find(mod_HandlePosType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HandlestripPos(mod: IModBase | undefined, mod_HandlestripPos?: string): IMatrix_mod_HandlestripPos {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HandlestripPos');
    }
    var matrix = new Matrix_mod_HandlestripPos();
    if (mod_HandlestripPos == undefined) {
      logError("The variant 'mod_HandlestripPos' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HangerColor(mod: IModBase | undefined, mod_HangerColor?: string): IMatrix_mod_HangerColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HangerColor');
    }
    var matrix = new Matrix_mod_HangerColor();
    if (mod_HangerColor == undefined) {
      logError("The variant 'mod_HangerColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HangerColor_find(mod_HangerColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HangerOffsetPosY(mod: IModBase | undefined, mod_HangerOffsetPosY?: number): IMatrix_mod_HangerOffsetPosY {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HangerOffsetPosY');
    }
    var matrix = new Matrix_mod_HangerOffsetPosY();
    if (mod_HangerOffsetPosY == undefined) {
      logError("The variant 'mod_HangerOffsetPosY' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HangerPosX(mod: IModBase | undefined, mod_HangerPosX?: string): IMatrix_mod_HangerPosX {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HangerPosX');
    }
    var matrix = new Matrix_mod_HangerPosX();
    if (mod_HangerPosX == undefined) {
      logError("The variant 'mod_HangerPosX' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HangerPosX_find(mod_HangerPosX);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HangerPosY(mod: IModBase | undefined, mod_HangerPosY?: string): IMatrix_mod_HangerPosY {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HangerPosY');
    }
    var matrix = new Matrix_mod_HangerPosY();
    if (mod_HangerPosY == undefined) {
      logError("The variant 'mod_HangerPosY' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HangerPosY_find(mod_HangerPosY);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HangerType(mod: IModBase | undefined, mod_HangerType?: string): IMatrix_mod_HangerType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HangerType');
    }
    var matrix = new Matrix_mod_HangerType();
    if (mod_HangerType == undefined) {
      logError("The variant 'mod_HangerType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HangerType_find(mod_HangerType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HardwareColor(mod: IModBase | undefined, mod_HardwareColor?: string): IMatrix_mod_HardwareColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HardwareColor');
    }
    var matrix = new Matrix_mod_HardwareColor();
    if (mod_HardwareColor == undefined) {
      logError("The variant 'mod_HardwareColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HardwareColor_find(mod_HardwareColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HardwareId(mod: IModBase | undefined, mod_HardwareId?: string): IMatrix_mod_HardwareId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HardwareId');
    }
    var matrix = new Matrix_mod_HardwareId();
    if (mod_HardwareId == undefined) {
      logError("The variant 'mod_HardwareId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Height(mod: IModBase | undefined, mod_Height?: number): IMatrix_mod_Height {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Height');
    }
    var matrix = new Matrix_mod_Height();
    if (mod_Height == undefined) {
      logError("The variant 'mod_Height' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HeightLeft(mod: IModBase | undefined, mod_HeightLeft?: number): IMatrix_mod_HeightLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HeightLeft');
    }
    var matrix = new Matrix_mod_HeightLeft();
    if (mod_HeightLeft == undefined) {
      logError("The variant 'mod_HeightLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HeightPosInsertion(mod: IModBase | undefined, mod_HeightPosInsertion?: number): IMatrix_mod_HeightPosInsertion {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HeightPosInsertion');
    }
    var matrix = new Matrix_mod_HeightPosInsertion();
    if (mod_HeightPosInsertion == undefined) {
      logError("The variant 'mod_HeightPosInsertion' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HeightRight(mod: IModBase | undefined, mod_HeightRight?: number): IMatrix_mod_HeightRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HeightRight');
    }
    var matrix = new Matrix_mod_HeightRight();
    if (mod_HeightRight == undefined) {
      logError("The variant 'mod_HeightRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HingeColor(mod: IModBase | undefined, mod_HingeColor?: string): IMatrix_mod_HingeColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HingeColor');
    }
    var matrix = new Matrix_mod_HingeColor();
    if (mod_HingeColor == undefined) {
      logError("The variant 'mod_HingeColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HingeColor_find(mod_HingeColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HingeLogic(mod: IModBase | undefined, mod_HingeLogic?: string): IMatrix_mod_HingeLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HingeLogic');
    }
    var matrix = new Matrix_mod_HingeLogic();
    if (mod_HingeLogic == undefined) {
      logError("The variant 'mod_HingeLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HingeLogic_find(mod_HingeLogic);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HingePos1(mod: IModBase | undefined, mod_HingePos1?: number): IMatrix_mod_HingePos1 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HingePos1');
    }
    var matrix = new Matrix_mod_HingePos1();
    if (mod_HingePos1 == undefined) {
      logError("The variant 'mod_HingePos1' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HingePos2(mod: IModBase | undefined, mod_HingePos2?: number): IMatrix_mod_HingePos2 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HingePos2');
    }
    var matrix = new Matrix_mod_HingePos2();
    if (mod_HingePos2 == undefined) {
      logError("The variant 'mod_HingePos2' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HingePos3(mod: IModBase | undefined, mod_HingePos3?: number): IMatrix_mod_HingePos3 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HingePos3');
    }
    var matrix = new Matrix_mod_HingePos3();
    if (mod_HingePos3 == undefined) {
      logError("The variant 'mod_HingePos3' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HingePos4(mod: IModBase | undefined, mod_HingePos4?: number): IMatrix_mod_HingePos4 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HingePos4');
    }
    var matrix = new Matrix_mod_HingePos4();
    if (mod_HingePos4 == undefined) {
      logError("The variant 'mod_HingePos4' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HingePos5(mod: IModBase | undefined, mod_HingePos5?: number): IMatrix_mod_HingePos5 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HingePos5');
    }
    var matrix = new Matrix_mod_HingePos5();
    if (mod_HingePos5 == undefined) {
      logError("The variant 'mod_HingePos5' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HingePos6(mod: IModBase | undefined, mod_HingePos6?: number): IMatrix_mod_HingePos6 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HingePos6');
    }
    var matrix = new Matrix_mod_HingePos6();
    if (mod_HingePos6 == undefined) {
      logError("The variant 'mod_HingePos6' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HingeType(mod: IModBase | undefined, mod_HingeType?: string): IMatrix_mod_HingeType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HingeType');
    }
    var matrix = new Matrix_mod_HingeType();
    if (mod_HingeType == undefined) {
      logError("The variant 'mod_HingeType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HingeType_find(mod_HingeType);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HobConstructionId(mod: IModBase | undefined, mod_HobConstructionId?: string): IMatrix_mod_HobConstructionId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HobConstructionId');
    }
    var matrix = new Matrix_mod_HobConstructionId();
    if (mod_HobConstructionId == undefined) {
      logError("The variant 'mod_HobConstructionId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HobGraphicId(mod: IModBase | undefined, mod_HobGraphicId?: string): IMatrix_mod_HobGraphicId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HobGraphicId');
    }
    var matrix = new Matrix_mod_HobGraphicId();
    if (mod_HobGraphicId == undefined) {
      logError("The variant 'mod_HobGraphicId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HobHeightBlockedSpace(mod: IModBase | undefined, mod_HobHeightBlockedSpace?: number): IMatrix_mod_HobHeightBlockedSpace {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HobHeightBlockedSpace');
    }
    var matrix = new Matrix_mod_HobHeightBlockedSpace();
    if (mod_HobHeightBlockedSpace == undefined) {
      logError("The variant 'mod_HobHeightBlockedSpace' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HobId(mod: IModBase | undefined, mod_HobId?: string): IMatrix_mod_HobId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HobId');
    }
    var matrix = new Matrix_mod_HobId();
    if (mod_HobId == undefined) {
      logError("The variant 'mod_HobId' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HobId_find(mod_HobId);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HobMoveDepth(mod: IModBase | undefined, mod_HobMoveDepth?: number): IMatrix_mod_HobMoveDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HobMoveDepth');
    }
    var matrix = new Matrix_mod_HobMoveDepth();
    if (mod_HobMoveDepth == undefined) {
      logError("The variant 'mod_HobMoveDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HobMoveWidth(mod: IModBase | undefined, mod_HobMoveWidth?: number): IMatrix_mod_HobMoveWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HobMoveWidth');
    }
    var matrix = new Matrix_mod_HobMoveWidth();
    if (mod_HobMoveWidth == undefined) {
      logError("The variant 'mod_HobMoveWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HobSupplier(mod: IModBase | undefined, mod_HobSupplier?: string): IMatrix_mod_HobSupplier {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HobSupplier');
    }
    var matrix = new Matrix_mod_HobSupplier();
    if (mod_HobSupplier == undefined) {
      logError("The variant 'mod_HobSupplier' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HobSupplier_find(mod_HobSupplier);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HoodId(mod: IModBase | undefined, mod_HoodId?: string): IMatrix_mod_HoodId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HoodId');
    }
    var matrix = new Matrix_mod_HoodId();
    if (mod_HoodId == undefined) {
      logError("The variant 'mod_HoodId' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HoodId_find(mod_HoodId);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_HoodSupplier(mod: IModBase | undefined, mod_HoodSupplier?: string): IMatrix_mod_HoodSupplier {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_HoodSupplier');
    }
    var matrix = new Matrix_mod_HoodSupplier();
    if (mod_HoodSupplier == undefined) {
      logError("The variant 'mod_HoodSupplier' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_HoodSupplier_find(mod_HoodSupplier);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Information(mod: IModBase | undefined, mod_Information?: string): IMatrix_mod_Information {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Information');
    }
    var matrix = new Matrix_mod_Information();
    if (mod_Information == undefined) {
      logError("The variant 'mod_Information' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_InteriorEquipmentHinge(mod: IModBase | undefined, mod_InteriorEquipmentHinge?: string): IMatrix_mod_InteriorEquipmentHinge {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_InteriorEquipmentHinge');
    }
    var matrix = new Matrix_mod_InteriorEquipmentHinge();
    if (mod_InteriorEquipmentHinge == undefined) {
      logError("The variant 'mod_InteriorEquipmentHinge' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_IslandBackwallOverdimension(mod: IModBase | undefined, mod_IslandBackwallOverdimension?: number): IMatrix_mod_IslandBackwallOverdimension {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_IslandBackwallOverdimension');
    }
    var matrix = new Matrix_mod_IslandBackwallOverdimension();
    if (mod_IslandBackwallOverdimension == undefined) {
      logError("The variant 'mod_IslandBackwallOverdimension' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_IslandBackwallOverhangFront(mod: IModBase | undefined, mod_IslandBackwallOverhangFront?: number): IMatrix_mod_IslandBackwallOverhangFront {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_IslandBackwallOverhangFront');
    }
    var matrix = new Matrix_mod_IslandBackwallOverhangFront();
    if (mod_IslandBackwallOverhangFront == undefined) {
      logError("The variant 'mod_IslandBackwallOverhangFront' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_IslandBackwallWidth(mod: IModBase | undefined, mod_IslandBackwallWidth?: number): IMatrix_mod_IslandBackwallWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_IslandBackwallWidth');
    }
    var matrix = new Matrix_mod_IslandBackwallWidth();
    if (mod_IslandBackwallWidth == undefined) {
      logError("The variant 'mod_IslandBackwallWidth' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_IslandBackwallWidth_find(mod_IslandBackwallWidth);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LastFront(mod: IModBase | undefined, mod_LastFront?: boolean): IMatrix_mod_LastFront {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LastFront');
    }
    var matrix = new Matrix_mod_LastFront();
    if (mod_LastFront == undefined) {
      logError("The variant 'mod_LastFront' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LastFrontHeight(mod: IModBase | undefined, mod_LastFrontHeight?: number): IMatrix_mod_LastFrontHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LastFrontHeight');
    }
    var matrix = new Matrix_mod_LastFrontHeight();
    if (mod_LastFrontHeight == undefined) {
      logError("The variant 'mod_LastFrontHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LastFrontName(mod: IModBase | undefined, mod_LastFrontName?: string): IMatrix_mod_LastFrontName {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LastFrontName');
    }
    var matrix = new Matrix_mod_LastFrontName();
    if (mod_LastFrontName == undefined) {
      logError("The variant 'mod_LastFrontName' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LaundryMachineId(mod: IModBase | undefined, mod_LaundryMachineId?: string): IMatrix_mod_LaundryMachineId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LaundryMachineId');
    }
    var matrix = new Matrix_mod_LaundryMachineId();
    if (mod_LaundryMachineId == undefined) {
      logError("The variant 'mod_LaundryMachineId' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_LaundryMachineId_find(mod_LaundryMachineId);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LaundryMachineSupplier(mod: IModBase | undefined, mod_LaundryMachineSupplier?: string): IMatrix_mod_LaundryMachineSupplier {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LaundryMachineSupplier');
    }
    var matrix = new Matrix_mod_LaundryMachineSupplier();
    if (mod_LaundryMachineSupplier == undefined) {
      logError("The variant 'mod_LaundryMachineSupplier' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_LaundryMachineSupplier_find(mod_LaundryMachineSupplier);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LegInsertion(mod: IModBase | undefined, mod_LegInsertion?: boolean): IMatrix_mod_LegInsertion {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LegInsertion');
    }
    var matrix = new Matrix_mod_LegInsertion();
    if (mod_LegInsertion == undefined) {
      logError("The variant 'mod_LegInsertion' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LightPart(mod: IModBase | undefined, mod_LightPart?: string): IMatrix_mod_LightPart {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LightPart');
    }
    var matrix = new Matrix_mod_LightPart();
    if (mod_LightPart == undefined) {
      logError("The variant 'mod_LightPart' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_LightPart_find(mod_LightPart);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LightPosX(mod: IModBase | undefined, mod_LightPosX?: string): IMatrix_mod_LightPosX {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LightPosX');
    }
    var matrix = new Matrix_mod_LightPosX();
    if (mod_LightPosX == undefined) {
      logError("The variant 'mod_LightPosX' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_LightPosX_find(mod_LightPosX);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LightPosX1(mod: IModBase | undefined, mod_LightPosX1?: number): IMatrix_mod_LightPosX1 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LightPosX1');
    }
    var matrix = new Matrix_mod_LightPosX1();
    if (mod_LightPosX1 == undefined) {
      logError("The variant 'mod_LightPosX1' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LightPosX2(mod: IModBase | undefined, mod_LightPosX2?: number): IMatrix_mod_LightPosX2 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LightPosX2');
    }
    var matrix = new Matrix_mod_LightPosX2();
    if (mod_LightPosX2 == undefined) {
      logError("The variant 'mod_LightPosX2' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LightPosX3(mod: IModBase | undefined, mod_LightPosX3?: number): IMatrix_mod_LightPosX3 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LightPosX3');
    }
    var matrix = new Matrix_mod_LightPosX3();
    if (mod_LightPosX3 == undefined) {
      logError("The variant 'mod_LightPosX3' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LightPosX4(mod: IModBase | undefined, mod_LightPosX4?: number): IMatrix_mod_LightPosX4 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LightPosX4');
    }
    var matrix = new Matrix_mod_LightPosX4();
    if (mod_LightPosX4 == undefined) {
      logError("The variant 'mod_LightPosX4' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LightPosX5(mod: IModBase | undefined, mod_LightPosX5?: number): IMatrix_mod_LightPosX5 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LightPosX5');
    }
    var matrix = new Matrix_mod_LightPosX5();
    if (mod_LightPosX5 == undefined) {
      logError("The variant 'mod_LightPosX5' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LightPosY(mod: IModBase | undefined, mod_LightPosY?: number): IMatrix_mod_LightPosY {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LightPosY');
    }
    var matrix = new Matrix_mod_LightPosY();
    if (mod_LightPosY == undefined) {
      logError("The variant 'mod_LightPosY' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_LightSystem(mod: IModBase | undefined, mod_LightSystem?: string): IMatrix_mod_LightSystem {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_LightSystem');
    }
    var matrix = new Matrix_mod_LightSystem();
    if (mod_LightSystem == undefined) {
      logError("The variant 'mod_LightSystem' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_LightSystem_find(mod_LightSystem);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MirrorBoardColor(mod: IModBase | undefined, mod_MirrorBoardColor?: string): IMatrix_mod_MirrorBoardColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MirrorBoardColor');
    }
    var matrix = new Matrix_mod_MirrorBoardColor();
    if (mod_MirrorBoardColor == undefined) {
      logError("The variant 'mod_MirrorBoardColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_MirrorBoardColor_find(mod_MirrorBoardColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MirrorBoardId(mod: IModBase | undefined, mod_MirrorBoardId?: string): IMatrix_mod_MirrorBoardId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MirrorBoardId');
    }
    var matrix = new Matrix_mod_MirrorBoardId();
    if (mod_MirrorBoardId == undefined) {
      logError("The variant 'mod_MirrorBoardId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MirrorBoardProgram(mod: IModBase | undefined, mod_MirrorBoardProgram?: string): IMatrix_mod_MirrorBoardProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MirrorBoardProgram');
    }
    var matrix = new Matrix_mod_MirrorBoardProgram();
    if (mod_MirrorBoardProgram == undefined) {
      logError("The variant 'mod_MirrorBoardProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_MirrorBoardProgram_find(mod_MirrorBoardProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MirrorBoardThickness(mod: IModBase | undefined, mod_MirrorBoardThickness?: number): IMatrix_mod_MirrorBoardThickness {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MirrorBoardThickness');
    }
    var matrix = new Matrix_mod_MirrorBoardThickness();
    if (mod_MirrorBoardThickness == undefined) {
      logError("The variant 'mod_MirrorBoardThickness' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MirrorColor(mod: IModBase | undefined, mod_MirrorColor?: string): IMatrix_mod_MirrorColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MirrorColor');
    }
    var matrix = new Matrix_mod_MirrorColor();
    if (mod_MirrorColor == undefined) {
      logError("The variant 'mod_MirrorColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_MirrorColor_find(mod_MirrorColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MirrorHeight(mod: IModBase | undefined, mod_MirrorHeight?: number): IMatrix_mod_MirrorHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MirrorHeight');
    }
    var matrix = new Matrix_mod_MirrorHeight();
    if (mod_MirrorHeight == undefined) {
      logError("The variant 'mod_MirrorHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MirrorPositionHeight(mod: IModBase | undefined, mod_MirrorPositionHeight?: number): IMatrix_mod_MirrorPositionHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MirrorPositionHeight');
    }
    var matrix = new Matrix_mod_MirrorPositionHeight();
    if (mod_MirrorPositionHeight == undefined) {
      logError("The variant 'mod_MirrorPositionHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MirrorPositionWidth(mod: IModBase | undefined, mod_MirrorPositionWidth?: number): IMatrix_mod_MirrorPositionWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MirrorPositionWidth');
    }
    var matrix = new Matrix_mod_MirrorPositionWidth();
    if (mod_MirrorPositionWidth == undefined) {
      logError("The variant 'mod_MirrorPositionWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MirrorThickness(mod: IModBase | undefined, mod_MirrorThickness?: number): IMatrix_mod_MirrorThickness {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MirrorThickness');
    }
    var matrix = new Matrix_mod_MirrorThickness();
    if (mod_MirrorThickness == undefined) {
      logError("The variant 'mod_MirrorThickness' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MirrorWidth(mod: IModBase | undefined, mod_MirrorWidth?: number): IMatrix_mod_MirrorWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MirrorWidth');
    }
    var matrix = new Matrix_mod_MirrorWidth();
    if (mod_MirrorWidth == undefined) {
      logError("The variant 'mod_MirrorWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MixerId(mod: IModBase | undefined, mod_MixerId?: string): IMatrix_mod_MixerId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MixerId');
    }
    var matrix = new Matrix_mod_MixerId();
    if (mod_MixerId == undefined) {
      logError("The variant 'mod_MixerId' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_MixerId_find(mod_MixerId);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MixerSupplier(mod: IModBase | undefined, mod_MixerSupplier?: string): IMatrix_mod_MixerSupplier {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MixerSupplier');
    }
    var matrix = new Matrix_mod_MixerSupplier();
    if (mod_MixerSupplier == undefined) {
      logError("The variant 'mod_MixerSupplier' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_MixerSupplier_find(mod_MixerSupplier);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Model(mod: IModBase | undefined, mod_Model?: string): IMatrix_mod_Model {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Model');
    }
    var matrix = new Matrix_mod_Model();
    if (mod_Model == undefined) {
      logError("The variant 'mod_Model' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_Model_find(mod_Model);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Model3DGroupName(mod: IModBase | undefined, mod_Model3DGroupName?: string): IMatrix_mod_Model3DGroupName {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Model3DGroupName');
    }
    var matrix = new Matrix_mod_Model3DGroupName();
    if (mod_Model3DGroupName == undefined) {
      logError("The variant 'mod_Model3DGroupName' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ModuleName(mod: IModBase | undefined, mod_ModuleName?: string): IMatrix_mod_ModuleName {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ModuleName');
    }
    var matrix = new Matrix_mod_ModuleName();
    if (mod_ModuleName == undefined) {
      logError("The variant 'mod_ModuleName' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_MountingPlateType(mod: IModBase | undefined, mod_MountingPlateType?: string): IMatrix_mod_MountingPlateType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_MountingPlateType');
    }
    var matrix = new Matrix_mod_MountingPlateType();
    if (mod_MountingPlateType == undefined) {
      logError("The variant 'mod_MountingPlateType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_MountingPlateType_find(mod_MountingPlateType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OpeningType(mod: IModBase | undefined, mod_OpeningType?: string): IMatrix_mod_OpeningType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OpeningType');
    }
    var matrix = new Matrix_mod_OpeningType();
    if (mod_OpeningType == undefined) {
      logError("The variant 'mod_OpeningType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_OpeningType_find(mod_OpeningType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenGap1(mod: IModBase | undefined, mod_OvenGap1?: number): IMatrix_mod_OvenGap1 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenGap1');
    }
    var matrix = new Matrix_mod_OvenGap1();
    if (mod_OvenGap1 == undefined) {
      logError("The variant 'mod_OvenGap1' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenGap2(mod: IModBase | undefined, mod_OvenGap2?: number): IMatrix_mod_OvenGap2 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenGap2');
    }
    var matrix = new Matrix_mod_OvenGap2();
    if (mod_OvenGap2 == undefined) {
      logError("The variant 'mod_OvenGap2' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenGap3(mod: IModBase | undefined, mod_OvenGap3?: number): IMatrix_mod_OvenGap3 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenGap3');
    }
    var matrix = new Matrix_mod_OvenGap3();
    if (mod_OvenGap3 == undefined) {
      logError("The variant 'mod_OvenGap3' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenGap4(mod: IModBase | undefined, mod_OvenGap4?: number): IMatrix_mod_OvenGap4 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenGap4');
    }
    var matrix = new Matrix_mod_OvenGap4();
    if (mod_OvenGap4 == undefined) {
      logError("The variant 'mod_OvenGap4' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenId(mod: IModBase | undefined, mod_OvenId?: string): IMatrix_mod_OvenId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenId');
    }
    var matrix = new Matrix_mod_OvenId();
    if (mod_OvenId == undefined) {
      logError("The variant 'mod_OvenId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenId1(mod: IModBase | undefined, mod_OvenId1?: string): IMatrix_mod_OvenId1 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenId1');
    }
    var matrix = new Matrix_mod_OvenId1();
    if (mod_OvenId1 == undefined) {
      logError("The variant 'mod_OvenId1' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_OvenId1_find(mod_OvenId1);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenId2(mod: IModBase | undefined, mod_OvenId2?: string): IMatrix_mod_OvenId2 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenId2');
    }
    var matrix = new Matrix_mod_OvenId2();
    if (mod_OvenId2 == undefined) {
      logError("The variant 'mod_OvenId2' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_OvenId2_find(mod_OvenId2);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenId3(mod: IModBase | undefined, mod_OvenId3?: string): IMatrix_mod_OvenId3 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenId3');
    }
    var matrix = new Matrix_mod_OvenId3();
    if (mod_OvenId3 == undefined) {
      logError("The variant 'mod_OvenId3' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_OvenId3_find(mod_OvenId3);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenShelffixedOverhangTop(mod: IModBase | undefined, mod_OvenShelffixedOverhangTop?: number): IMatrix_mod_OvenShelffixedOverhangTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenShelffixedOverhangTop');
    }
    var matrix = new Matrix_mod_OvenShelffixedOverhangTop();
    if (mod_OvenShelffixedOverhangTop == undefined) {
      logError("The variant 'mod_OvenShelffixedOverhangTop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenSupplier1(mod: IModBase | undefined, mod_OvenSupplier1?: string): IMatrix_mod_OvenSupplier1 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenSupplier1');
    }
    var matrix = new Matrix_mod_OvenSupplier1();
    if (mod_OvenSupplier1 == undefined) {
      logError("The variant 'mod_OvenSupplier1' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_OvenSupplier1_find(mod_OvenSupplier1);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenSupplier2(mod: IModBase | undefined, mod_OvenSupplier2?: string): IMatrix_mod_OvenSupplier2 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenSupplier2');
    }
    var matrix = new Matrix_mod_OvenSupplier2();
    if (mod_OvenSupplier2 == undefined) {
      logError("The variant 'mod_OvenSupplier2' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_OvenSupplier2_find(mod_OvenSupplier2);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_OvenSupplier3(mod: IModBase | undefined, mod_OvenSupplier3?: string): IMatrix_mod_OvenSupplier3 {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_OvenSupplier3');
    }
    var matrix = new Matrix_mod_OvenSupplier3();
    if (mod_OvenSupplier3 == undefined) {
      logError("The variant 'mod_OvenSupplier3' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_OvenSupplier3_find(mod_OvenSupplier3);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PanelId(mod: IModBase | undefined, mod_PanelId?: string): IMatrix_mod_PanelId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PanelId');
    }
    var matrix = new Matrix_mod_PanelId();
    if (mod_PanelId == undefined) {
      logError("The variant 'mod_PanelId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PanelblindThk(mod: IModBase | undefined, mod_PanelblindThk?: number): IMatrix_mod_PanelblindThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PanelblindThk');
    }
    var matrix = new Matrix_mod_PanelblindThk();
    if (mod_PanelblindThk == undefined) {
      logError("The variant 'mod_PanelblindThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopColor(mod: IModBase | undefined, mod_PaneltopColor?: string): IMatrix_mod_PaneltopColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopColor');
    }
    var matrix = new Matrix_mod_PaneltopColor();
    if (mod_PaneltopColor == undefined) {
      logError("The variant 'mod_PaneltopColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PaneltopColor_find(mod_PaneltopColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopConstruction(mod: IModBase | undefined, mod_PaneltopConstruction?: string): IMatrix_mod_PaneltopConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopConstruction');
    }
    var matrix = new Matrix_mod_PaneltopConstruction();
    if (mod_PaneltopConstruction == undefined) {
      logError("The variant 'mod_PaneltopConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PaneltopConstruction_find(mod_PaneltopConstruction);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopEdgeBackColor(mod: IModBase | undefined, mod_PaneltopEdgeBackColor?: string): IMatrix_mod_PaneltopEdgeBackColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopEdgeBackColor');
    }
    var matrix = new Matrix_mod_PaneltopEdgeBackColor();
    if (mod_PaneltopEdgeBackColor == undefined) {
      logError("The variant 'mod_PaneltopEdgeBackColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PaneltopEdgeBackColor_find(mod_PaneltopEdgeBackColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopEdgeFrontColor(mod: IModBase | undefined, mod_PaneltopEdgeFrontColor?: string): IMatrix_mod_PaneltopEdgeFrontColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopEdgeFrontColor');
    }
    var matrix = new Matrix_mod_PaneltopEdgeFrontColor();
    if (mod_PaneltopEdgeFrontColor == undefined) {
      logError("The variant 'mod_PaneltopEdgeFrontColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PaneltopEdgeFrontColor_find(mod_PaneltopEdgeFrontColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopEdgeLeftColor(mod: IModBase | undefined, mod_PaneltopEdgeLeftColor?: string): IMatrix_mod_PaneltopEdgeLeftColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopEdgeLeftColor');
    }
    var matrix = new Matrix_mod_PaneltopEdgeLeftColor();
    if (mod_PaneltopEdgeLeftColor == undefined) {
      logError("The variant 'mod_PaneltopEdgeLeftColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PaneltopEdgeLeftColor_find(mod_PaneltopEdgeLeftColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopEdgeRightColor(mod: IModBase | undefined, mod_PaneltopEdgeRightColor?: string): IMatrix_mod_PaneltopEdgeRightColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopEdgeRightColor');
    }
    var matrix = new Matrix_mod_PaneltopEdgeRightColor();
    if (mod_PaneltopEdgeRightColor == undefined) {
      logError("The variant 'mod_PaneltopEdgeRightColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PaneltopEdgeRightColor_find(mod_PaneltopEdgeRightColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopEdgeVisBack(mod: IModBase | undefined, mod_PaneltopEdgeVisBack?: boolean): IMatrix_mod_PaneltopEdgeVisBack {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopEdgeVisBack');
    }
    var matrix = new Matrix_mod_PaneltopEdgeVisBack();
    if (mod_PaneltopEdgeVisBack == undefined) {
      logError("The variant 'mod_PaneltopEdgeVisBack' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopEdgeVisFront(mod: IModBase | undefined, mod_PaneltopEdgeVisFront?: boolean): IMatrix_mod_PaneltopEdgeVisFront {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopEdgeVisFront');
    }
    var matrix = new Matrix_mod_PaneltopEdgeVisFront();
    if (mod_PaneltopEdgeVisFront == undefined) {
      logError("The variant 'mod_PaneltopEdgeVisFront' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopEdgeVisLeft(mod: IModBase | undefined, mod_PaneltopEdgeVisLeft?: boolean): IMatrix_mod_PaneltopEdgeVisLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopEdgeVisLeft');
    }
    var matrix = new Matrix_mod_PaneltopEdgeVisLeft();
    if (mod_PaneltopEdgeVisLeft == undefined) {
      logError("The variant 'mod_PaneltopEdgeVisLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopEdgeVisRight(mod: IModBase | undefined, mod_PaneltopEdgeVisRight?: boolean): IMatrix_mod_PaneltopEdgeVisRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopEdgeVisRight');
    }
    var matrix = new Matrix_mod_PaneltopEdgeVisRight();
    if (mod_PaneltopEdgeVisRight == undefined) {
      logError("The variant 'mod_PaneltopEdgeVisRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopId(mod: IModBase | undefined, mod_PaneltopId?: string): IMatrix_mod_PaneltopId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopId');
    }
    var matrix = new Matrix_mod_PaneltopId();
    if (mod_PaneltopId == undefined) {
      logError("The variant 'mod_PaneltopId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopOverhangFront(mod: IModBase | undefined, mod_PaneltopOverhangFront?: number): IMatrix_mod_PaneltopOverhangFront {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopOverhangFront');
    }
    var matrix = new Matrix_mod_PaneltopOverhangFront();
    if (mod_PaneltopOverhangFront == undefined) {
      logError("The variant 'mod_PaneltopOverhangFront' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopOversizeBack(mod: IModBase | undefined, mod_PaneltopOversizeBack?: number): IMatrix_mod_PaneltopOversizeBack {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopOversizeBack');
    }
    var matrix = new Matrix_mod_PaneltopOversizeBack();
    if (mod_PaneltopOversizeBack == undefined) {
      logError("The variant 'mod_PaneltopOversizeBack' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopProgram(mod: IModBase | undefined, mod_PaneltopProgram?: string): IMatrix_mod_PaneltopProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopProgram');
    }
    var matrix = new Matrix_mod_PaneltopProgram();
    if (mod_PaneltopProgram == undefined) {
      logError("The variant 'mod_PaneltopProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PaneltopProgram_find(mod_PaneltopProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PaneltopThk(mod: IModBase | undefined, mod_PaneltopThk?: number): IMatrix_mod_PaneltopThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PaneltopThk');
    }
    var matrix = new Matrix_mod_PaneltopThk();
    if (mod_PaneltopThk == undefined) {
      logError("The variant 'mod_PaneltopThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PantryPulloutColor(mod: IModBase | undefined, mod_PantryPulloutColor?: string): IMatrix_mod_PantryPulloutColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PantryPulloutColor');
    }
    var matrix = new Matrix_mod_PantryPulloutColor();
    if (mod_PantryPulloutColor == undefined) {
      logError("The variant 'mod_PantryPulloutColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PantryPulloutColor_find(mod_PantryPulloutColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PantryPulloutDesign(mod: IModBase | undefined, mod_PantryPulloutDesign?: string): IMatrix_mod_PantryPulloutDesign {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PantryPulloutDesign');
    }
    var matrix = new Matrix_mod_PantryPulloutDesign();
    if (mod_PantryPulloutDesign == undefined) {
      logError("The variant 'mod_PantryPulloutDesign' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PantryPulloutDesign_find(mod_PantryPulloutDesign);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PantryPulloutType(mod: IModBase | undefined, mod_PantryPulloutType?: string): IMatrix_mod_PantryPulloutType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PantryPulloutType');
    }
    var matrix = new Matrix_mod_PantryPulloutType();
    if (mod_PantryPulloutType == undefined) {
      logError("The variant 'mod_PantryPulloutType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PantryPulloutType_find(mod_PantryPulloutType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ParentName(mod: IModBase | undefined, mod_ParentName?: string): IMatrix_mod_ParentName {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ParentName');
    }
    var matrix = new Matrix_mod_ParentName();
    if (mod_ParentName == undefined) {
      logError("The variant 'mod_ParentName' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PartInfo(mod: IModBase | undefined, mod_PartInfo?: string): IMatrix_mod_PartInfo {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PartInfo');
    }
    var matrix = new Matrix_mod_PartInfo();
    if (mod_PartInfo == undefined) {
      logError("The variant 'mod_PartInfo' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PartName(mod: IModBase | undefined, mod_PartName?: string): IMatrix_mod_PartName {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PartName');
    }
    var matrix = new Matrix_mod_PartName();
    if (mod_PartName == undefined) {
      logError("The variant 'mod_PartName' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PartgroupDrawerWeight(mod: IModBase | undefined, mod_PartgroupDrawerWeight?: number): IMatrix_mod_PartgroupDrawerWeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PartgroupDrawerWeight');
    }
    var matrix = new Matrix_mod_PartgroupDrawerWeight();
    if (mod_PartgroupDrawerWeight == undefined) {
      logError("The variant 'mod_PartgroupDrawerWeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaDesign(mod: IModBase | undefined, mod_PlinthAreaDesign?: string): IMatrix_mod_PlinthAreaDesign {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaDesign');
    }
    var matrix = new Matrix_mod_PlinthAreaDesign();
    if (mod_PlinthAreaDesign == undefined) {
      logError("The variant 'mod_PlinthAreaDesign' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PlinthAreaDesign_find(mod_PlinthAreaDesign);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaElementColor(mod: IModBase | undefined, mod_PlinthAreaElementColor?: string): IMatrix_mod_PlinthAreaElementColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaElementColor');
    }
    var matrix = new Matrix_mod_PlinthAreaElementColor();
    if (mod_PlinthAreaElementColor == undefined) {
      logError("The variant 'mod_PlinthAreaElementColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PlinthAreaElementColor_find(mod_PlinthAreaElementColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaExtraItem(mod: IModBase | undefined, mod_PlinthAreaExtraItem?: string): IMatrix_mod_PlinthAreaExtraItem {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaExtraItem');
    }
    var matrix = new Matrix_mod_PlinthAreaExtraItem();
    if (mod_PlinthAreaExtraItem == undefined) {
      logError("The variant 'mod_PlinthAreaExtraItem' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PlinthAreaExtraItem_find(mod_PlinthAreaExtraItem);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaHeight(mod: IModBase | undefined, mod_PlinthAreaHeight?: number): IMatrix_mod_PlinthAreaHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaHeight');
    }
    var matrix = new Matrix_mod_PlinthAreaHeight();
    if (mod_PlinthAreaHeight == undefined) {
      logError("The variant 'mod_PlinthAreaHeight' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PlinthAreaHeight_find(mod_PlinthAreaHeight);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaPosBackMatrix(mod: IModBase | undefined, mod_PlinthAreaPosBackMatrix?: string): IMatrix_mod_PlinthAreaPosBackMatrix {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaPosBackMatrix');
    }
    var matrix = new Matrix_mod_PlinthAreaPosBackMatrix();
    if (mod_PlinthAreaPosBackMatrix == undefined) {
      logError("The variant 'mod_PlinthAreaPosBackMatrix' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PlinthAreaPosBackMatrix_find(mod_PlinthAreaPosBackMatrix);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaPosFrontMatrix(mod: IModBase | undefined, mod_PlinthAreaPosFrontMatrix?: string): IMatrix_mod_PlinthAreaPosFrontMatrix {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaPosFrontMatrix');
    }
    var matrix = new Matrix_mod_PlinthAreaPosFrontMatrix();
    if (mod_PlinthAreaPosFrontMatrix == undefined) {
      logError("The variant 'mod_PlinthAreaPosFrontMatrix' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PlinthAreaPosFrontMatrix_find(mod_PlinthAreaPosFrontMatrix);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaPosLeftMatrix(mod: IModBase | undefined, mod_PlinthAreaPosLeftMatrix?: string): IMatrix_mod_PlinthAreaPosLeftMatrix {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaPosLeftMatrix');
    }
    var matrix = new Matrix_mod_PlinthAreaPosLeftMatrix();
    if (mod_PlinthAreaPosLeftMatrix == undefined) {
      logError("The variant 'mod_PlinthAreaPosLeftMatrix' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PlinthAreaPosLeftMatrix_find(mod_PlinthAreaPosLeftMatrix);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaPosLogic(mod: IModBase | undefined, mod_PlinthAreaPosLogic?: string): IMatrix_mod_PlinthAreaPosLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaPosLogic');
    }
    var matrix = new Matrix_mod_PlinthAreaPosLogic();
    if (mod_PlinthAreaPosLogic == undefined) {
      logError("The variant 'mod_PlinthAreaPosLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PlinthAreaPosLogic_find(mod_PlinthAreaPosLogic);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaPosRightMatrix(mod: IModBase | undefined, mod_PlinthAreaPosRightMatrix?: string): IMatrix_mod_PlinthAreaPosRightMatrix {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaPosRightMatrix');
    }
    var matrix = new Matrix_mod_PlinthAreaPosRightMatrix();
    if (mod_PlinthAreaPosRightMatrix == undefined) {
      logError("The variant 'mod_PlinthAreaPosRightMatrix' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PlinthAreaPosRightMatrix_find(mod_PlinthAreaPosRightMatrix);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaVisLeft(mod: IModBase | undefined, mod_PlinthAreaVisLeft?: boolean): IMatrix_mod_PlinthAreaVisLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaVisLeft');
    }
    var matrix = new Matrix_mod_PlinthAreaVisLeft();
    if (mod_PlinthAreaVisLeft == undefined) {
      logError("The variant 'mod_PlinthAreaVisLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaVisLeftSelection(mod: IModBase | undefined, mod_PlinthAreaVisLeftSelection?: string): IMatrix_mod_PlinthAreaVisLeftSelection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaVisLeftSelection');
    }
    var matrix = new Matrix_mod_PlinthAreaVisLeftSelection();
    if (mod_PlinthAreaVisLeftSelection == undefined) {
      logError("The variant 'mod_PlinthAreaVisLeftSelection' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PlinthAreaVisLeftSelection_find(mod_PlinthAreaVisLeftSelection);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaVisRight(mod: IModBase | undefined, mod_PlinthAreaVisRight?: boolean): IMatrix_mod_PlinthAreaVisRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaVisRight');
    }
    var matrix = new Matrix_mod_PlinthAreaVisRight();
    if (mod_PlinthAreaVisRight == undefined) {
      logError("The variant 'mod_PlinthAreaVisRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PlinthAreaVisRightSelection(mod: IModBase | undefined, mod_PlinthAreaVisRightSelection?: string): IMatrix_mod_PlinthAreaVisRightSelection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PlinthAreaVisRightSelection');
    }
    var matrix = new Matrix_mod_PlinthAreaVisRightSelection();
    if (mod_PlinthAreaVisRightSelection == undefined) {
      logError("The variant 'mod_PlinthAreaVisRightSelection' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PlinthAreaVisRightSelection_find(mod_PlinthAreaVisRightSelection);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ProcessingId(mod: IModBase | undefined, mod_ProcessingId?: string): IMatrix_mod_ProcessingId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ProcessingId');
    }
    var matrix = new Matrix_mod_ProcessingId();
    if (mod_ProcessingId == undefined) {
      logError("The variant 'mod_ProcessingId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ProcessingLibrary(mod: IModBase | undefined, mod_ProcessingLibrary?: string): IMatrix_mod_ProcessingLibrary {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ProcessingLibrary');
    }
    var matrix = new Matrix_mod_ProcessingLibrary();
    if (mod_ProcessingLibrary == undefined) {
      logError("The variant 'mod_ProcessingLibrary' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Program(mod: IModBase | undefined, mod_Program?: string): IMatrix_mod_Program {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Program');
    }
    var matrix = new Matrix_mod_Program();
    if (mod_Program == undefined) {
      logError("The variant 'mod_Program' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_Program_find(mod_Program);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PulloutConnectionPosition(mod: IModBase | undefined, mod_PulloutConnectionPosition?: string): IMatrix_mod_PulloutConnectionPosition {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PulloutConnectionPosition');
    }
    var matrix = new Matrix_mod_PulloutConnectionPosition();
    if (mod_PulloutConnectionPosition == undefined) {
      logError("The variant 'mod_PulloutConnectionPosition' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PulloutConnectionPosition_find(mod_PulloutConnectionPosition);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PulloutDesign(mod: IModBase | undefined, mod_PulloutDesign?: string): IMatrix_mod_PulloutDesign {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PulloutDesign');
    }
    var matrix = new Matrix_mod_PulloutDesign();
    if (mod_PulloutDesign == undefined) {
      logError("The variant 'mod_PulloutDesign' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PulloutDesign_find(mod_PulloutDesign);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PulloutElementColor(mod: IModBase | undefined, mod_PulloutElementColor?: string): IMatrix_mod_PulloutElementColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PulloutElementColor');
    }
    var matrix = new Matrix_mod_PulloutElementColor();
    if (mod_PulloutElementColor == undefined) {
      logError("The variant 'mod_PulloutElementColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PulloutElementColor_find(mod_PulloutElementColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PulloutType(mod: IModBase | undefined, mod_PulloutType?: string): IMatrix_mod_PulloutType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PulloutType');
    }
    var matrix = new Matrix_mod_PulloutType();
    if (mod_PulloutType == undefined) {
      logError("The variant 'mod_PulloutType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PulloutType_find(mod_PulloutType);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PushtoopenColor(mod: IModBase | undefined, mod_PushtoopenColor?: string): IMatrix_mod_PushtoopenColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PushtoopenColor');
    }
    var matrix = new Matrix_mod_PushtoopenColor();
    if (mod_PushtoopenColor == undefined) {
      logError("The variant 'mod_PushtoopenColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PushtoopenColor_find(mod_PushtoopenColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PushtoopenLine(mod: IModBase | undefined, mod_PushtoopenLine?: number): IMatrix_mod_PushtoopenLine {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PushtoopenLine');
    }
    var matrix = new Matrix_mod_PushtoopenLine();
    if (mod_PushtoopenLine == undefined) {
      logError("The variant 'mod_PushtoopenLine' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PushtoopenOffset(mod: IModBase | undefined, mod_PushtoopenOffset?: number): IMatrix_mod_PushtoopenOffset {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PushtoopenOffset');
    }
    var matrix = new Matrix_mod_PushtoopenOffset();
    if (mod_PushtoopenOffset == undefined) {
      logError("The variant 'mod_PushtoopenOffset' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PushtoopenPosition(mod: IModBase | undefined, mod_PushtoopenPosition?: string): IMatrix_mod_PushtoopenPosition {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PushtoopenPosition');
    }
    var matrix = new Matrix_mod_PushtoopenPosition();
    if (mod_PushtoopenPosition == undefined) {
      logError("The variant 'mod_PushtoopenPosition' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PushtoopenPosition_find(mod_PushtoopenPosition);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_PushtoopenType(mod: IModBase | undefined, mod_PushtoopenType?: string): IMatrix_mod_PushtoopenType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_PushtoopenType');
    }
    var matrix = new Matrix_mod_PushtoopenType();
    if (mod_PushtoopenType == undefined) {
      logError("The variant 'mod_PushtoopenType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_PushtoopenType_find(mod_PushtoopenType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_RackAreaManualOffsetCarcase(mod: IModBase | undefined, mod_RackAreaManualOffsetCarcase?: number): IMatrix_mod_RackAreaManualOffsetCarcase {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_RackAreaManualOffsetCarcase');
    }
    var matrix = new Matrix_mod_RackAreaManualOffsetCarcase();
    if (mod_RackAreaManualOffsetCarcase == undefined) {
      logError("The variant 'mod_RackAreaManualOffsetCarcase' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_RackAreaOversizeCarcaseType(mod: IModBase | undefined, mod_RackAreaOversizeCarcaseType?: string): IMatrix_mod_RackAreaOversizeCarcaseType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_RackAreaOversizeCarcaseType');
    }
    var matrix = new Matrix_mod_RackAreaOversizeCarcaseType();
    if (mod_RackAreaOversizeCarcaseType == undefined) {
      logError("The variant 'mod_RackAreaOversizeCarcaseType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_RackAreaOversizeCarcaseType_find(mod_RackAreaOversizeCarcaseType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_RackAreaShelftopConstruction(mod: IModBase | undefined, mod_RackAreaShelftopConstruction?: string): IMatrix_mod_RackAreaShelftopConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_RackAreaShelftopConstruction');
    }
    var matrix = new Matrix_mod_RackAreaShelftopConstruction();
    if (mod_RackAreaShelftopConstruction == undefined) {
      logError("The variant 'mod_RackAreaShelftopConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_RackAreaShelftopConstruction_find(mod_RackAreaShelftopConstruction);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_RackAreaType(mod: IModBase | undefined, mod_RackAreaType?: string): IMatrix_mod_RackAreaType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_RackAreaType');
    }
    var matrix = new Matrix_mod_RackAreaType();
    if (mod_RackAreaType == undefined) {
      logError("The variant 'mod_RackAreaType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_RackAreaType_find(mod_RackAreaType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_RailhortopbackThk(mod: IModBase | undefined, mod_RailhortopbackThk?: number): IMatrix_mod_RailhortopbackThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_RailhortopbackThk');
    }
    var matrix = new Matrix_mod_RailhortopbackThk();
    if (mod_RailhortopbackThk == undefined) {
      logError("The variant 'mod_RailhortopbackThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_RailhortopfrontThk(mod: IModBase | undefined, mod_RailhortopfrontThk?: number): IMatrix_mod_RailhortopfrontThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_RailhortopfrontThk');
    }
    var matrix = new Matrix_mod_RailhortopfrontThk();
    if (mod_RailhortopfrontThk == undefined) {
      logError("The variant 'mod_RailhortopfrontThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_RailverttopbackThk(mod: IModBase | undefined, mod_RailverttopbackThk?: number): IMatrix_mod_RailverttopbackThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_RailverttopbackThk');
    }
    var matrix = new Matrix_mod_RailverttopbackThk();
    if (mod_RailverttopbackThk == undefined) {
      logError("The variant 'mod_RailverttopbackThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_RailverttopfrontThk(mod: IModBase | undefined, mod_RailverttopfrontThk?: number): IMatrix_mod_RailverttopfrontThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_RailverttopfrontThk');
    }
    var matrix = new Matrix_mod_RailverttopfrontThk();
    if (mod_RailverttopfrontThk == undefined) {
      logError("The variant 'mod_RailverttopfrontThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Rotation(mod: IModBase | undefined, mod_Rotation?: number): IMatrix_mod_Rotation {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Rotation');
    }
    var matrix = new Matrix_mod_Rotation();
    if (mod_Rotation == undefined) {
      logError("The variant 'mod_Rotation' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjBackwallDrillDescriptor(mod: IModBase | undefined, mod_ShelfadjBackwallDrillDescriptor?: string): IMatrix_mod_ShelfadjBackwallDrillDescriptor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjBackwallDrillDescriptor');
    }
    var matrix = new Matrix_mod_ShelfadjBackwallDrillDescriptor();
    if (mod_ShelfadjBackwallDrillDescriptor == undefined) {
      logError("The variant 'mod_ShelfadjBackwallDrillDescriptor' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjBackwallProcessingId(mod: IModBase | undefined, mod_ShelfadjBackwallProcessingId?: string): IMatrix_mod_ShelfadjBackwallProcessingId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjBackwallProcessingId');
    }
    var matrix = new Matrix_mod_ShelfadjBackwallProcessingId();
    if (mod_ShelfadjBackwallProcessingId == undefined) {
      logError("The variant 'mod_ShelfadjBackwallProcessingId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjColor(mod: IModBase | undefined, mod_ShelfadjColor?: string): IMatrix_mod_ShelfadjColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjColor');
    }
    var matrix = new Matrix_mod_ShelfadjColor();
    if (mod_ShelfadjColor == undefined) {
      logError("The variant 'mod_ShelfadjColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelfadjColor_find(mod_ShelfadjColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjDescriptor(mod: IModBase | undefined, mod_ShelfadjDescriptor?: string): IMatrix_mod_ShelfadjDescriptor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjDescriptor');
    }
    var matrix = new Matrix_mod_ShelfadjDescriptor();
    if (mod_ShelfadjDescriptor == undefined) {
      logError("The variant 'mod_ShelfadjDescriptor' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjDesign(mod: IModBase | undefined, mod_ShelfadjDesign?: string): IMatrix_mod_ShelfadjDesign {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjDesign');
    }
    var matrix = new Matrix_mod_ShelfadjDesign();
    if (mod_ShelfadjDesign == undefined) {
      logError("The variant 'mod_ShelfadjDesign' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelfadjDesign_find(mod_ShelfadjDesign);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjDrillDistance(mod: IModBase | undefined, mod_ShelfadjDrillDistance?: number): IMatrix_mod_ShelfadjDrillDistance {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjDrillDistance');
    }
    var matrix = new Matrix_mod_ShelfadjDrillDistance();
    if (mod_ShelfadjDrillDistance == undefined) {
      logError("The variant 'mod_ShelfadjDrillDistance' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelfadjDrillDistance_find(mod_ShelfadjDrillDistance);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjDrillType(mod: IModBase | undefined, mod_ShelfadjDrillType?: string): IMatrix_mod_ShelfadjDrillType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjDrillType');
    }
    var matrix = new Matrix_mod_ShelfadjDrillType();
    if (mod_ShelfadjDrillType == undefined) {
      logError("The variant 'mod_ShelfadjDrillType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelfadjDrillType_find(mod_ShelfadjDrillType);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjDrillinglineOffsetBtm(mod: IModBase | undefined, mod_ShelfadjDrillinglineOffsetBtm?: number): IMatrix_mod_ShelfadjDrillinglineOffsetBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjDrillinglineOffsetBtm');
    }
    var matrix = new Matrix_mod_ShelfadjDrillinglineOffsetBtm();
    if (mod_ShelfadjDrillinglineOffsetBtm == undefined) {
      logError("The variant 'mod_ShelfadjDrillinglineOffsetBtm' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjDrillinglineOffsetTop(mod: IModBase | undefined, mod_ShelfadjDrillinglineOffsetTop?: number): IMatrix_mod_ShelfadjDrillinglineOffsetTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjDrillinglineOffsetTop');
    }
    var matrix = new Matrix_mod_ShelfadjDrillinglineOffsetTop();
    if (mod_ShelfadjDrillinglineOffsetTop == undefined) {
      logError("The variant 'mod_ShelfadjDrillinglineOffsetTop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjGroupPositionY(mod: IModBase | undefined, mod_ShelfadjGroupPositionY?: number): IMatrix_mod_ShelfadjGroupPositionY {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjGroupPositionY');
    }
    var matrix = new Matrix_mod_ShelfadjGroupPositionY();
    if (mod_ShelfadjGroupPositionY == undefined) {
      logError("The variant 'mod_ShelfadjGroupPositionY' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjOffsetBack(mod: IModBase | undefined, mod_ShelfadjOffsetBack?: number): IMatrix_mod_ShelfadjOffsetBack {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjOffsetBack');
    }
    var matrix = new Matrix_mod_ShelfadjOffsetBack();
    if (mod_ShelfadjOffsetBack == undefined) {
      logError("The variant 'mod_ShelfadjOffsetBack' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjOffsetFront(mod: IModBase | undefined, mod_ShelfadjOffsetFront?: number): IMatrix_mod_ShelfadjOffsetFront {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjOffsetFront');
    }
    var matrix = new Matrix_mod_ShelfadjOffsetFront();
    if (mod_ShelfadjOffsetFront == undefined) {
      logError("The variant 'mod_ShelfadjOffsetFront' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjPartParentName(mod: IModBase | undefined, mod_ShelfadjPartParentName?: string): IMatrix_mod_ShelfadjPartParentName {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjPartParentName');
    }
    var matrix = new Matrix_mod_ShelfadjPartParentName();
    if (mod_ShelfadjPartParentName == undefined) {
      logError("The variant 'mod_ShelfadjPartParentName' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjPartParentType(mod: IModBase | undefined, mod_ShelfadjPartParentType?: string): IMatrix_mod_ShelfadjPartParentType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjPartParentType');
    }
    var matrix = new Matrix_mod_ShelfadjPartParentType();
    if (mod_ShelfadjPartParentType == undefined) {
      logError("The variant 'mod_ShelfadjPartParentType' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjSidepanelDrillDescriptor(mod: IModBase | undefined, mod_ShelfadjSidepanelDrillDescriptor?: string): IMatrix_mod_ShelfadjSidepanelDrillDescriptor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjSidepanelDrillDescriptor');
    }
    var matrix = new Matrix_mod_ShelfadjSidepanelDrillDescriptor();
    if (mod_ShelfadjSidepanelDrillDescriptor == undefined) {
      logError("The variant 'mod_ShelfadjSidepanelDrillDescriptor' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjSidepanelProcessingBackId(mod: IModBase | undefined, mod_ShelfadjSidepanelProcessingBackId?: string): IMatrix_mod_ShelfadjSidepanelProcessingBackId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjSidepanelProcessingBackId');
    }
    var matrix = new Matrix_mod_ShelfadjSidepanelProcessingBackId();
    if (mod_ShelfadjSidepanelProcessingBackId == undefined) {
      logError("The variant 'mod_ShelfadjSidepanelProcessingBackId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjSidepanelProcessingFrontId(mod: IModBase | undefined, mod_ShelfadjSidepanelProcessingFrontId?: string): IMatrix_mod_ShelfadjSidepanelProcessingFrontId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjSidepanelProcessingFrontId');
    }
    var matrix = new Matrix_mod_ShelfadjSidepanelProcessingFrontId();
    if (mod_ShelfadjSidepanelProcessingFrontId == undefined) {
      logError("The variant 'mod_ShelfadjSidepanelProcessingFrontId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjSidepanelProcessingMiddleId(mod: IModBase | undefined, mod_ShelfadjSidepanelProcessingMiddleId?: string): IMatrix_mod_ShelfadjSidepanelProcessingMiddleId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjSidepanelProcessingMiddleId');
    }
    var matrix = new Matrix_mod_ShelfadjSidepanelProcessingMiddleId();
    if (mod_ShelfadjSidepanelProcessingMiddleId == undefined) {
      logError("The variant 'mod_ShelfadjSidepanelProcessingMiddleId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjThk(mod: IModBase | undefined, mod_ShelfadjThk?: number): IMatrix_mod_ShelfadjThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjThk');
    }
    var matrix = new Matrix_mod_ShelfadjThk();
    if (mod_ShelfadjThk == undefined) {
      logError("The variant 'mod_ShelfadjThk' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelfadjThk_find(mod_ShelfadjThk);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjVertDividerProcessingId(mod: IModBase | undefined, mod_ShelfadjVertDividerProcessingId?: string): IMatrix_mod_ShelfadjVertDividerProcessingId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjVertDividerProcessingId');
    }
    var matrix = new Matrix_mod_ShelfadjVertDividerProcessingId();
    if (mod_ShelfadjVertDividerProcessingId == undefined) {
      logError("The variant 'mod_ShelfadjVertDividerProcessingId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjVertdividerDrillDescriptor(mod: IModBase | undefined, mod_ShelfadjVertdividerDrillDescriptor?: string): IMatrix_mod_ShelfadjVertdividerDrillDescriptor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjVertdividerDrillDescriptor');
    }
    var matrix = new Matrix_mod_ShelfadjVertdividerDrillDescriptor();
    if (mod_ShelfadjVertdividerDrillDescriptor == undefined) {
      logError("The variant 'mod_ShelfadjVertdividerDrillDescriptor' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfadjWoodColor(mod: IModBase | undefined, mod_ShelfadjWoodColor?: string): IMatrix_mod_ShelfadjWoodColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfadjWoodColor');
    }
    var matrix = new Matrix_mod_ShelfadjWoodColor();
    if (mod_ShelfadjWoodColor == undefined) {
      logError("The variant 'mod_ShelfadjWoodColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelfadjWoodColor_find(mod_ShelfadjWoodColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelfbtmThk(mod: IModBase | undefined, mod_ShelfbtmThk?: number): IMatrix_mod_ShelfbtmThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelfbtmThk');
    }
    var matrix = new Matrix_mod_ShelfbtmThk();
    if (mod_ShelfbtmThk == undefined) {
      logError("The variant 'mod_ShelfbtmThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelffixedBtm(mod: IModBase | undefined, mod_ShelffixedBtm?: boolean): IMatrix_mod_ShelffixedBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelffixedBtm');
    }
    var matrix = new Matrix_mod_ShelffixedBtm();
    if (mod_ShelffixedBtm == undefined) {
      logError("The variant 'mod_ShelffixedBtm' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelffixedOffsetFront(mod: IModBase | undefined, mod_ShelffixedOffsetFront?: number): IMatrix_mod_ShelffixedOffsetFront {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelffixedOffsetFront');
    }
    var matrix = new Matrix_mod_ShelffixedOffsetFront();
    if (mod_ShelffixedOffsetFront == undefined) {
      logError("The variant 'mod_ShelffixedOffsetFront' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelffixedOversizeBack(mod: IModBase | undefined, mod_ShelffixedOversizeBack?: number): IMatrix_mod_ShelffixedOversizeBack {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelffixedOversizeBack');
    }
    var matrix = new Matrix_mod_ShelffixedOversizeBack();
    if (mod_ShelffixedOversizeBack == undefined) {
      logError("The variant 'mod_ShelffixedOversizeBack' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelffixedOversizeFront(mod: IModBase | undefined, mod_ShelffixedOversizeFront?: number): IMatrix_mod_ShelffixedOversizeFront {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelffixedOversizeFront');
    }
    var matrix = new Matrix_mod_ShelffixedOversizeFront();
    if (mod_ShelffixedOversizeFront == undefined) {
      logError("The variant 'mod_ShelffixedOversizeFront' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelffixedPartParentName(mod: IModBase | undefined, mod_ShelffixedPartParentName?: string): IMatrix_mod_ShelffixedPartParentName {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelffixedPartParentName');
    }
    var matrix = new Matrix_mod_ShelffixedPartParentName();
    if (mod_ShelffixedPartParentName == undefined) {
      logError("The variant 'mod_ShelffixedPartParentName' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelffixedPartParentType(mod: IModBase | undefined, mod_ShelffixedPartParentType?: string): IMatrix_mod_ShelffixedPartParentType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelffixedPartParentType');
    }
    var matrix = new Matrix_mod_ShelffixedPartParentType();
    if (mod_ShelffixedPartParentType == undefined) {
      logError("The variant 'mod_ShelffixedPartParentType' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelffixedPos(mod: IModBase | undefined, mod_ShelffixedPos?: string): IMatrix_mod_ShelffixedPos {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelffixedPos');
    }
    var matrix = new Matrix_mod_ShelffixedPos();
    if (mod_ShelffixedPos == undefined) {
      logError("The variant 'mod_ShelffixedPos' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelffixedPos_find(mod_ShelffixedPos);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelffixedThk(mod: IModBase | undefined, mod_ShelffixedThk?: number): IMatrix_mod_ShelffixedThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelffixedThk');
    }
    var matrix = new Matrix_mod_ShelffixedThk();
    if (mod_ShelffixedThk == undefined) {
      logError("The variant 'mod_ShelffixedThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelffixedTop(mod: IModBase | undefined, mod_ShelffixedTop?: boolean): IMatrix_mod_ShelffixedTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelffixedTop');
    }
    var matrix = new Matrix_mod_ShelffixedTop();
    if (mod_ShelffixedTop == undefined) {
      logError("The variant 'mod_ShelffixedTop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelffixedType(mod: IModBase | undefined, mod_ShelffixedType?: string): IMatrix_mod_ShelffixedType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelffixedType');
    }
    var matrix = new Matrix_mod_ShelffixedType();
    if (mod_ShelffixedType == undefined) {
      logError("The variant 'mod_ShelffixedType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelffixedType_find(mod_ShelffixedType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelftopConstruction(mod: IModBase | undefined, mod_ShelftopConstruction?: string): IMatrix_mod_ShelftopConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelftopConstruction');
    }
    var matrix = new Matrix_mod_ShelftopConstruction();
    if (mod_ShelftopConstruction == undefined) {
      logError("The variant 'mod_ShelftopConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelftopConstruction_find(mod_ShelftopConstruction);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelftopThk(mod: IModBase | undefined, mod_ShelftopThk?: number): IMatrix_mod_ShelftopThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelftopThk');
    }
    var matrix = new Matrix_mod_ShelftopThk();
    if (mod_ShelftopThk == undefined) {
      logError("The variant 'mod_ShelftopThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelvesBackwallFittingConnection(mod: IModBase | undefined, mod_ShelvesBackwallFittingConnection?: string): IMatrix_mod_ShelvesBackwallFittingConnection {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelvesBackwallFittingConnection');
    }
    var matrix = new Matrix_mod_ShelvesBackwallFittingConnection();
    if (mod_ShelvesBackwallFittingConnection == undefined) {
      logError("The variant 'mod_ShelvesBackwallFittingConnection' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelvesBackwallFittingConnection_find(mod_ShelvesBackwallFittingConnection);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelvesBrackets(mod: IModBase | undefined, mod_ShelvesBrackets?: string): IMatrix_mod_ShelvesBrackets {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelvesBrackets');
    }
    var matrix = new Matrix_mod_ShelvesBrackets();
    if (mod_ShelvesBrackets == undefined) {
      logError("The variant 'mod_ShelvesBrackets' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelvesBrackets_find(mod_ShelvesBrackets);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelvesBracketsColor(mod: IModBase | undefined, mod_ShelvesBracketsColor?: string): IMatrix_mod_ShelvesBracketsColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelvesBracketsColor');
    }
    var matrix = new Matrix_mod_ShelvesBracketsColor();
    if (mod_ShelvesBracketsColor == undefined) {
      logError("The variant 'mod_ShelvesBracketsColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelvesBracketsColor_find(mod_ShelvesBracketsColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelvesColor(mod: IModBase | undefined, mod_ShelvesColor?: string): IMatrix_mod_ShelvesColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelvesColor');
    }
    var matrix = new Matrix_mod_ShelvesColor();
    if (mod_ShelvesColor == undefined) {
      logError("The variant 'mod_ShelvesColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ShelvesColor_find(mod_ShelvesColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ShelvesThk(mod: IModBase | undefined, mod_ShelvesThk?: number): IMatrix_mod_ShelvesThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ShelvesThk');
    }
    var matrix = new Matrix_mod_ShelvesThk();
    if (mod_ShelvesThk == undefined) {
      logError("The variant 'mod_ShelvesThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SidepanelType(mod: IModBase | undefined, mod_SidepanelType?: string): IMatrix_mod_SidepanelType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SidepanelType');
    }
    var matrix = new Matrix_mod_SidepanelType();
    if (mod_SidepanelType == undefined) {
      logError("The variant 'mod_SidepanelType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_SidepanelType_find(mod_SidepanelType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SidepanelleftThk(mod: IModBase | undefined, mod_SidepanelleftThk?: number): IMatrix_mod_SidepanelleftThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SidepanelleftThk');
    }
    var matrix = new Matrix_mod_SidepanelleftThk();
    if (mod_SidepanelleftThk == undefined) {
      logError("The variant 'mod_SidepanelleftThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SidepanelleftType(mod: IModBase | undefined, mod_SidepanelleftType?: string): IMatrix_mod_SidepanelleftType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SidepanelleftType');
    }
    var matrix = new Matrix_mod_SidepanelleftType();
    if (mod_SidepanelleftType == undefined) {
      logError("The variant 'mod_SidepanelleftType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_SidepanelleftType_find(mod_SidepanelleftType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SidepanelmiddleShortWidth(mod: IModBase | undefined, mod_SidepanelmiddleShortWidth?: number): IMatrix_mod_SidepanelmiddleShortWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SidepanelmiddleShortWidth');
    }
    var matrix = new Matrix_mod_SidepanelmiddleShortWidth();
    if (mod_SidepanelmiddleShortWidth == undefined) {
      logError("The variant 'mod_SidepanelmiddleShortWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SidepanelmiddleThk(mod: IModBase | undefined, mod_SidepanelmiddleThk?: number): IMatrix_mod_SidepanelmiddleThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SidepanelmiddleThk');
    }
    var matrix = new Matrix_mod_SidepanelmiddleThk();
    if (mod_SidepanelmiddleThk == undefined) {
      logError("The variant 'mod_SidepanelmiddleThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SidepanelrightThk(mod: IModBase | undefined, mod_SidepanelrightThk?: number): IMatrix_mod_SidepanelrightThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SidepanelrightThk');
    }
    var matrix = new Matrix_mod_SidepanelrightThk();
    if (mod_SidepanelrightThk == undefined) {
      logError("The variant 'mod_SidepanelrightThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SidepanelrightType(mod: IModBase | undefined, mod_SidepanelrightType?: string): IMatrix_mod_SidepanelrightType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SidepanelrightType');
    }
    var matrix = new Matrix_mod_SidepanelrightType();
    if (mod_SidepanelrightType == undefined) {
      logError("The variant 'mod_SidepanelrightType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_SidepanelrightType_find(mod_SidepanelrightType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SinkConstructionId(mod: IModBase | undefined, mod_SinkConstructionId?: string): IMatrix_mod_SinkConstructionId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SinkConstructionId');
    }
    var matrix = new Matrix_mod_SinkConstructionId();
    if (mod_SinkConstructionId == undefined) {
      logError("The variant 'mod_SinkConstructionId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SinkGraphicId(mod: IModBase | undefined, mod_SinkGraphicId?: string): IMatrix_mod_SinkGraphicId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SinkGraphicId');
    }
    var matrix = new Matrix_mod_SinkGraphicId();
    if (mod_SinkGraphicId == undefined) {
      logError("The variant 'mod_SinkGraphicId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SinkId(mod: IModBase | undefined, mod_SinkId?: string): IMatrix_mod_SinkId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SinkId');
    }
    var matrix = new Matrix_mod_SinkId();
    if (mod_SinkId == undefined) {
      logError("The variant 'mod_SinkId' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_SinkId_find(mod_SinkId);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SinkMoveDepth(mod: IModBase | undefined, mod_SinkMoveDepth?: number): IMatrix_mod_SinkMoveDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SinkMoveDepth');
    }
    var matrix = new Matrix_mod_SinkMoveDepth();
    if (mod_SinkMoveDepth == undefined) {
      logError("The variant 'mod_SinkMoveDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SinkMoveWidth(mod: IModBase | undefined, mod_SinkMoveWidth?: number): IMatrix_mod_SinkMoveWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SinkMoveWidth');
    }
    var matrix = new Matrix_mod_SinkMoveWidth();
    if (mod_SinkMoveWidth == undefined) {
      logError("The variant 'mod_SinkMoveWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SinkSupplier(mod: IModBase | undefined, mod_SinkSupplier?: string): IMatrix_mod_SinkSupplier {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SinkSupplier');
    }
    var matrix = new Matrix_mod_SinkSupplier();
    if (mod_SinkSupplier == undefined) {
      logError("The variant 'mod_SinkSupplier' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_SinkSupplier_find(mod_SinkSupplier);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SlopeAngle(mod: IModBase | undefined, mod_SlopeAngle?: number): IMatrix_mod_SlopeAngle {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SlopeAngle');
    }
    var matrix = new Matrix_mod_SlopeAngle();
    if (mod_SlopeAngle == undefined) {
      logError("The variant 'mod_SlopeAngle' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SlopedCeilingConstruction(mod: IModBase | undefined, mod_SlopedCeilingConstruction?: string): IMatrix_mod_SlopedCeilingConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SlopedCeilingConstruction');
    }
    var matrix = new Matrix_mod_SlopedCeilingConstruction();
    if (mod_SlopedCeilingConstruction == undefined) {
      logError("The variant 'mod_SlopedCeilingConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_SlopedCeilingConstruction_find(mod_SlopedCeilingConstruction);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SlopedCeilingDimensionLogic(mod: IModBase | undefined, mod_SlopedCeilingDimensionLogic?: string): IMatrix_mod_SlopedCeilingDimensionLogic {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SlopedCeilingDimensionLogic');
    }
    var matrix = new Matrix_mod_SlopedCeilingDimensionLogic();
    if (mod_SlopedCeilingDimensionLogic == undefined) {
      logError("The variant 'mod_SlopedCeilingDimensionLogic' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_SlopedCeilingDimensionLogic_find(mod_SlopedCeilingDimensionLogic);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Supplier(mod: IModBase | undefined, mod_Supplier?: string): IMatrix_mod_Supplier {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Supplier');
    }
    var matrix = new Matrix_mod_Supplier();
    if (mod_Supplier == undefined) {
      logError("The variant 'mod_Supplier' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_SupplierNumber(mod: IModBase | undefined, mod_SupplierNumber?: string): IMatrix_mod_SupplierNumber {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_SupplierNumber');
    }
    var matrix = new Matrix_mod_SupplierNumber();
    if (mod_SupplierNumber == undefined) {
      logError("The variant 'mod_SupplierNumber' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Thk(mod: IModBase | undefined, mod_Thk?: number): IMatrix_mod_Thk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Thk');
    }
    var matrix = new Matrix_mod_Thk();
    if (mod_Thk == undefined) {
      logError("The variant 'mod_Thk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ThkLeft(mod: IModBase | undefined, mod_ThkLeft?: number): IMatrix_mod_ThkLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ThkLeft');
    }
    var matrix = new Matrix_mod_ThkLeft();
    if (mod_ThkLeft == undefined) {
      logError("The variant 'mod_ThkLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ThkRight(mod: IModBase | undefined, mod_ThkRight?: number): IMatrix_mod_ThkRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ThkRight');
    }
    var matrix = new Matrix_mod_ThkRight();
    if (mod_ThkRight == undefined) {
      logError("The variant 'mod_ThkRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ToekickColor(mod: IModBase | undefined, mod_ToekickColor?: string): IMatrix_mod_ToekickColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ToekickColor');
    }
    var matrix = new Matrix_mod_ToekickColor();
    if (mod_ToekickColor == undefined) {
      logError("The variant 'mod_ToekickColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ToekickColor_find(mod_ToekickColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ToekickConnectionOverhang(mod: IModBase | undefined, mod_ToekickConnectionOverhang?: number): IMatrix_mod_ToekickConnectionOverhang {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ToekickConnectionOverhang');
    }
    var matrix = new Matrix_mod_ToekickConnectionOverhang();
    if (mod_ToekickConnectionOverhang == undefined) {
      logError("The variant 'mod_ToekickConnectionOverhang' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ToekickConnectionSequence(mod: IModBase | undefined, mod_ToekickConnectionSequence?: string): IMatrix_mod_ToekickConnectionSequence {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ToekickConnectionSequence');
    }
    var matrix = new Matrix_mod_ToekickConnectionSequence();
    if (mod_ToekickConnectionSequence == undefined) {
      logError("The variant 'mod_ToekickConnectionSequence' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ToekickHeight(mod: IModBase | undefined, mod_ToekickHeight?: number): IMatrix_mod_ToekickHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ToekickHeight');
    }
    var matrix = new Matrix_mod_ToekickHeight();
    if (mod_ToekickHeight == undefined) {
      logError("The variant 'mod_ToekickHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ToekickId(mod: IModBase | undefined, mod_ToekickId?: string): IMatrix_mod_ToekickId {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ToekickId');
    }
    var matrix = new Matrix_mod_ToekickId();
    if (mod_ToekickId == undefined) {
      logError("The variant 'mod_ToekickId' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ToekickLength(mod: IModBase | undefined, mod_ToekickLength?: number): IMatrix_mod_ToekickLength {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ToekickLength');
    }
    var matrix = new Matrix_mod_ToekickLength();
    if (mod_ToekickLength == undefined) {
      logError("The variant 'mod_ToekickLength' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ToekickProgram(mod: IModBase | undefined, mod_ToekickProgram?: string): IMatrix_mod_ToekickProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ToekickProgram');
    }
    var matrix = new Matrix_mod_ToekickProgram();
    if (mod_ToekickProgram == undefined) {
      logError("The variant 'mod_ToekickProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ToekickProgram_find(mod_ToekickProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ToekickReductionTop(mod: IModBase | undefined, mod_ToekickReductionTop?: number): IMatrix_mod_ToekickReductionTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ToekickReductionTop');
    }
    var matrix = new Matrix_mod_ToekickReductionTop();
    if (mod_ToekickReductionTop == undefined) {
      logError("The variant 'mod_ToekickReductionTop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ToekickSidepanelOverdimensionBtm(mod: IModBase | undefined, mod_ToekickSidepanelOverdimensionBtm?: number): IMatrix_mod_ToekickSidepanelOverdimensionBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ToekickSidepanelOverdimensionBtm');
    }
    var matrix = new Matrix_mod_ToekickSidepanelOverdimensionBtm();
    if (mod_ToekickSidepanelOverdimensionBtm == undefined) {
      logError("The variant 'mod_ToekickSidepanelOverdimensionBtm' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ToekickSidepanelTransitionType(mod: IModBase | undefined, mod_ToekickSidepanelTransitionType?: string): IMatrix_mod_ToekickSidepanelTransitionType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ToekickSidepanelTransitionType');
    }
    var matrix = new Matrix_mod_ToekickSidepanelTransitionType();
    if (mod_ToekickSidepanelTransitionType == undefined) {
      logError("The variant 'mod_ToekickSidepanelTransitionType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_ToekickSidepanelTransitionType_find(mod_ToekickSidepanelTransitionType);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_ToekickThk(mod: IModBase | undefined, mod_ToekickThk?: number): IMatrix_mod_ToekickThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_ToekickThk');
    }
    var matrix = new Matrix_mod_ToekickThk();
    if (mod_ToekickThk == undefined) {
      logError("The variant 'mod_ToekickThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_TopDepth(mod: IModBase | undefined, mod_TopDepth?: number): IMatrix_mod_TopDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_TopDepth');
    }
    var matrix = new Matrix_mod_TopDepth();
    if (mod_TopDepth == undefined) {
      logError("The variant 'mod_TopDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_TotalDepth(mod: IModBase | undefined, mod_TotalDepth?: number): IMatrix_mod_TotalDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_TotalDepth');
    }
    var matrix = new Matrix_mod_TotalDepth();
    if (mod_TotalDepth == undefined) {
      logError("The variant 'mod_TotalDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_TotalDimLeft(mod: IModBase | undefined, mod_TotalDimLeft?: number): IMatrix_mod_TotalDimLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_TotalDimLeft');
    }
    var matrix = new Matrix_mod_TotalDimLeft();
    if (mod_TotalDimLeft == undefined) {
      logError("The variant 'mod_TotalDimLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_TotalDimRight(mod: IModBase | undefined, mod_TotalDimRight?: number): IMatrix_mod_TotalDimRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_TotalDimRight');
    }
    var matrix = new Matrix_mod_TotalDimRight();
    if (mod_TotalDimRight == undefined) {
      logError("The variant 'mod_TotalDimRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_TotalWidth(mod: IModBase | undefined, mod_TotalWidth?: number): IMatrix_mod_TotalWidth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_TotalWidth');
    }
    var matrix = new Matrix_mod_TotalWidth();
    if (mod_TotalWidth == undefined) {
      logError("The variant 'mod_TotalWidth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_TypeElement(mod: IModBase | undefined, mod_TypeElement?: string): IMatrix_mod_TypeElement {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_TypeElement');
    }
    var matrix = new Matrix_mod_TypeElement();
    if (mod_TypeElement == undefined) {
      logError("The variant 'mod_TypeElement' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_TypeElement_find(mod_TypeElement);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_UprightColor(mod: IModBase | undefined, mod_UprightColor?: string): IMatrix_mod_UprightColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_UprightColor');
    }
    var matrix = new Matrix_mod_UprightColor();
    if (mod_UprightColor == undefined) {
      logError("The variant 'mod_UprightColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_UprightColor_find(mod_UprightColor);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_UprightConstruction(mod: IModBase | undefined, mod_UprightConstruction?: string): IMatrix_mod_UprightConstruction {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_UprightConstruction');
    }
    var matrix = new Matrix_mod_UprightConstruction();
    if (mod_UprightConstruction == undefined) {
      logError("The variant 'mod_UprightConstruction' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_UprightConstruction_find(mod_UprightConstruction);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_UprightDepth(mod: IModBase | undefined, mod_UprightDepth?: number): IMatrix_mod_UprightDepth {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_UprightDepth');
    }
    var matrix = new Matrix_mod_UprightDepth();
    if (mod_UprightDepth == undefined) {
      logError("The variant 'mod_UprightDepth' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_UprightFloorProfileColor(mod: IModBase | undefined, mod_UprightFloorProfileColor?: string): IMatrix_mod_UprightFloorProfileColor {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_UprightFloorProfileColor');
    }
    var matrix = new Matrix_mod_UprightFloorProfileColor();
    if (mod_UprightFloorProfileColor == undefined) {
      logError("The variant 'mod_UprightFloorProfileColor' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_UprightFloorProfileColor_find(mod_UprightFloorProfileColor);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_UprightHeight(mod: IModBase | undefined, mod_UprightHeight?: number): IMatrix_mod_UprightHeight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_UprightHeight');
    }
    var matrix = new Matrix_mod_UprightHeight();
    if (mod_UprightHeight == undefined) {
      logError("The variant 'mod_UprightHeight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_UprightOverdimensionBtm(mod: IModBase | undefined, mod_UprightOverdimensionBtm?: number): IMatrix_mod_UprightOverdimensionBtm {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_UprightOverdimensionBtm');
    }
    var matrix = new Matrix_mod_UprightOverdimensionBtm();
    if (mod_UprightOverdimensionBtm == undefined) {
      logError("The variant 'mod_UprightOverdimensionBtm' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_UprightOverdimensionTop(mod: IModBase | undefined, mod_UprightOverdimensionTop?: number): IMatrix_mod_UprightOverdimensionTop {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_UprightOverdimensionTop');
    }
    var matrix = new Matrix_mod_UprightOverdimensionTop();
    if (mod_UprightOverdimensionTop == undefined) {
      logError("The variant 'mod_UprightOverdimensionTop' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_UprightOverhang(mod: IModBase | undefined, mod_UprightOverhang?: number): IMatrix_mod_UprightOverhang {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_UprightOverhang');
    }
    var matrix = new Matrix_mod_UprightOverhang();
    if (mod_UprightOverhang == undefined) {
      logError("The variant 'mod_UprightOverhang' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_UprightProgram(mod: IModBase | undefined, mod_UprightProgram?: string): IMatrix_mod_UprightProgram {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_UprightProgram');
    }
    var matrix = new Matrix_mod_UprightProgram();
    if (mod_UprightProgram == undefined) {
      logError("The variant 'mod_UprightProgram' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_UprightProgram_find(mod_UprightProgram);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_UprightSide(mod: IModBase | undefined, mod_UprightSide?: string): IMatrix_mod_UprightSide {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_UprightSide');
    }
    var matrix = new Matrix_mod_UprightSide();
    if (mod_UprightSide == undefined) {
      logError("The variant 'mod_UprightSide' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_UprightSide_find(mod_UprightSide);
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_UprightThk(mod: IModBase | undefined, mod_UprightThk?: number): IMatrix_mod_UprightThk {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_UprightThk');
    }
    var matrix = new Matrix_mod_UprightThk();
    if (mod_UprightThk == undefined) {
      logError("The variant 'mod_UprightThk' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_VertDividerPosition(mod: IModBase | undefined, mod_VertDividerPosition?: number): IMatrix_mod_VertDividerPosition {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_VertDividerPosition');
    }
    var matrix = new Matrix_mod_VertDividerPosition();
    if (mod_VertDividerPosition == undefined) {
      logError("The variant 'mod_VertDividerPosition' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_VertDividerType(mod: IModBase | undefined, mod_VertDividerType?: string): IMatrix_mod_VertDividerType {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_VertDividerType');
    }
    var matrix = new Matrix_mod_VertDividerType();
    if (mod_VertDividerType == undefined) {
      logError("The variant 'mod_VertDividerType' is not set in '" + mod?.modId + "'");
    }
    else {
      var res = selections_mod_VertDividerType_find(mod_VertDividerType);
      if (res != undefined && res.matrix != undefined) {
        matrix = res.matrix;
      }
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Weight(mod: IModBase | undefined, mod_Weight?: number): IMatrix_mod_Weight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Weight');
    }
    var matrix = new Matrix_mod_Weight();
    if (mod_Weight == undefined) {
      logError("The variant 'mod_Weight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_Width(mod: IModBase | undefined, mod_Width?: number): IMatrix_mod_Width {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_Width');
    }
    var matrix = new Matrix_mod_Width();
    if (mod_Width == undefined) {
      logError("The variant 'mod_Width' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_WidthBlind(mod: IModBase | undefined, mod_WidthBlind?: number): IMatrix_mod_WidthBlind {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_WidthBlind');
    }
    var matrix = new Matrix_mod_WidthBlind();
    if (mod_WidthBlind == undefined) {
      logError("The variant 'mod_WidthBlind' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_WidthLeft(mod: IModBase | undefined, mod_WidthLeft?: number): IMatrix_mod_WidthLeft {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_WidthLeft');
    }
    var matrix = new Matrix_mod_WidthLeft();
    if (mod_WidthLeft == undefined) {
      logError("The variant 'mod_WidthLeft' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
  static mod_WidthRight(mod: IModBase | undefined, mod_WidthRight?: number): IMatrix_mod_WidthRight {
    if (mod !== undefined) {
      internal_enterValidateVariant(mod.modId, mod._id, 'mod_WidthRight');
    }
    var matrix = new Matrix_mod_WidthRight();
    if (mod_WidthRight == undefined) {
      logError("The variant 'mod_WidthRight' is not set in '" + mod?.modId + "'");
    }
    internal_leaveValidateVariant();
    return matrix;
  }
}
export function getSelectionsByAttrId(attrId: string): SelectionEntryBase_number[] | SelectionEntryBase_string[] | undefined {
  if (attrId === 'mod_FrontColor') {
    return selections_mod_FrontColor;
  }
  if (attrId === 'mod_FrontProgram') {
    return selections_mod_FrontProgram;
  }
  if (attrId === 'mod_PlinthAreaDesign') {
    return selections_mod_PlinthAreaDesign;
  }
  if (attrId === 'mod_PlinthAreaHeight') {
    return selections_mod_PlinthAreaHeight;
  }
  if (attrId === 'mod_CountertopColor') {
    return selections_mod_CountertopColor;
  }
  if (attrId === 'mod_CountertopProgram') {
    return selections_mod_CountertopProgram;
  }
  if (attrId === 'mod_CarcaseBackwallProgram') {
    return selections_mod_CarcaseBackwallProgram;
  }
  if (attrId === 'mod_CarcaseBackwallColor') {
    return selections_mod_CarcaseBackwallColor;
  }
  if (attrId === 'mod_ToekickProgram') {
    return selections_mod_ToekickProgram;
  }
  if (attrId === 'mod_ToekickColor') {
    return selections_mod_ToekickColor;
  }
  if (attrId === 'mod_CarcaseProgram') {
    return selections_mod_CarcaseProgram;
  }
  if (attrId === 'mod_CarcaseColor') {
    return selections_mod_CarcaseColor;
  }
  if (attrId === 'mod_CarcaseColor') {
    return selections_mod_CarcaseColor;
  }
  if (attrId === 'mod_HardwareColor') {
    return selections_mod_HardwareColor;
  }
  if (attrId === 'mod_HardwareColor') {
    return selections_mod_HardwareColor;
  }
  if (attrId === 'mod_HingeColor') {
    return selections_mod_HingeColor;
  }
  if (attrId === 'mod_ShelfadjColor') {
    return selections_mod_ShelfadjColor;
  }
  if (attrId === 'mod_ShelfadjThk') {
    return selections_mod_ShelfadjThk;
  }
  if (attrId === 'mod_ShelfadjColor') {
    return selections_mod_ShelfadjColor;
  }
  if (attrId === 'mod_ShelfadjDesign') {
    return selections_mod_ShelfadjDesign;
  }
  if (attrId === 'mod_FrontProgram') {
    return selections_mod_FrontProgram;
  }
  if (attrId === 'mod_FrameFillingType') {
    return selections_mod_FrameFillingType;
  }
  if (attrId === 'mod_FrameFillingType') {
    return selections_mod_FrameFillingType;
  }
  if (attrId === 'mod_FrameFillingColor') {
    return selections_mod_FrameFillingColor;
  }
  if (attrId === 'mod_FrontProgram') {
    return selections_mod_FrontProgram;
  }
  if (attrId === 'mod_FrontDesign') {
    return selections_mod_FrontDesign;
  }
  if (attrId === 'mod_ClothingOrganizerDesign') {
    return selections_mod_ClothingOrganizerDesign;
  }
  if (attrId === 'mod_CarcaseEdgeFrontColor') {
    return selections_mod_CarcaseEdgeFrontColor;
  }
  return undefined;
}
