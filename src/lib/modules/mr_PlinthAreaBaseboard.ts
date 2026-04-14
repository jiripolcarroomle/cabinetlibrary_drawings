import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars } from '../internal/logging'

//#region Imports
import { cbp_mr_PlinthAreaBaseboard, dc_mr_PlinthAreaBaseboard, adc_mr_PlinthAreaBaseboard, ccm_mr_PlinthAreaBaseboard } from '../internal/modules/mr_PlinthAreaBaseboard'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_Toekick, OD_M_mc_Toekick } from '../internal/modules/mc_Toekick'
import { dc_mc_Leg01, OD_M_mc_Leg01 } from '../internal/modules/mc_Leg01'
import { dc_mc_Baseboard01, OD_M_mc_Baseboard01 } from '../internal/modules/mc_Baseboard01'
import { ct_tab_ApplianceGraphicLibrary, ICT_tab_ApplianceGraphicLibrary } from '../internal/custom-tables/tab_ApplianceGraphicLibrary'
import { ct_tab_BaseunitFridgeConstruction, ICT_tab_BaseunitFridgeConstruction } from '../internal/custom-tables/tab_BaseunitFridgeConstruction'
import { ct_tab_BaseunitFridgeMapping, ICT_tab_BaseunitFridgeMapping } from '../internal/custom-tables/tab_BaseunitFridgeMapping'
import { ct_tab_BoardLibrary, ICT_tab_BoardLibrary } from '../internal/custom-tables/tab_BoardLibrary'
import { ct_tab_BoardMapping, ICT_tab_BoardMapping } from '../internal/custom-tables/tab_BoardMapping'
import { ct_tab_BracketConstruction, ICT_tab_BracketConstruction } from '../internal/custom-tables/tab_BracketConstruction'
import { ct_tab_BracketMapping, ICT_tab_BracketMapping } from '../internal/custom-tables/tab_BracketMapping'
import { ct_tab_CarcaseBackwallConstruction, ICT_tab_CarcaseBackwallConstruction } from '../internal/custom-tables/tab_CarcaseBackwallConstruction'
import { ct_tab_CarcaseBackwallSettings, ICT_tab_CarcaseBackwallSettings } from '../internal/custom-tables/tab_CarcaseBackwallSettings'
import { ct_tab_CarcaseCornerunitConstruction, ICT_tab_CarcaseCornerunitConstruction } from '../internal/custom-tables/tab_CarcaseCornerunitConstruction'
import { ct_tab_CarcaseHoodConstruction, ICT_tab_CarcaseHoodConstruction } from '../internal/custom-tables/tab_CarcaseHoodConstruction'
import { ct_tab_CarcasePartConnectionCalculations, ICT_tab_CarcasePartConnectionCalculations } from '../internal/custom-tables/tab_CarcasePartConnectionCalculations'
import { ct_tab_CarcasePartConnectionMapping, ICT_tab_CarcasePartConnectionMapping } from '../internal/custom-tables/tab_CarcasePartConnectionMapping'
import { ct_tab_CarcasePartsShape, ICT_tab_CarcasePartsShape } from '../internal/custom-tables/tab_CarcasePartsShape'
import { ct_tab_CarcaseShelfbtmSettings, ICT_tab_CarcaseShelfbtmSettings } from '../internal/custom-tables/tab_CarcaseShelfbtmSettings'
import { ct_tab_CarcaseShelftopSettings, ICT_tab_CarcaseShelftopSettings } from '../internal/custom-tables/tab_CarcaseShelftopSettings'
import { ct_tab_CarcaseSidepanelSettings, ICT_tab_CarcaseSidepanelSettings } from '../internal/custom-tables/tab_CarcaseSidepanelSettings'
import { ct_tab_CarcaseSlopedCeilingDimension, ICT_tab_CarcaseSlopedCeilingDimension } from '../internal/custom-tables/tab_CarcaseSlopedCeilingDimension'
import { ct_tab_CarcaseStorageunitConstruction, ICT_tab_CarcaseStorageunitConstruction } from '../internal/custom-tables/tab_CarcaseStorageunitConstruction'
import { ct_tab_ClothingOrganizerColorMapping, ICT_tab_ClothingOrganizerColorMapping } from '../internal/custom-tables/tab_ClothingOrganizerColorMapping'
import { ct_tab_ClothingOrganizerExtraItemMapping, ICT_tab_ClothingOrganizerExtraItemMapping } from '../internal/custom-tables/tab_ClothingOrganizerExtraItemMapping'
import { ct_tab_ClothingOrganizerMapping, ICT_tab_ClothingOrganizerMapping } from '../internal/custom-tables/tab_ClothingOrganizerMapping'
import { ct_tab_ClothingOrganizerPositionZSettings, ICT_tab_ClothingOrganizerPositionZSettings } from '../internal/custom-tables/tab_ClothingOrganizerPositionZSettings'
import { ct_tab_ComponentLibrary, ICT_tab_ComponentLibrary } from '../internal/custom-tables/tab_ComponentLibrary'
import { ct_tab_ComponentVariables, ICT_tab_ComponentVariables } from '../internal/custom-tables/tab_ComponentVariables'
import { ct_tab_CornerFillerFrontpanelConstruction, ICT_tab_CornerFillerFrontpanelConstruction } from '../internal/custom-tables/tab_CornerFillerFrontpanelConstruction'
import { ct_tab_CornerunitStraightConstruction, ICT_tab_CornerunitStraightConstruction } from '../internal/custom-tables/tab_CornerunitStraightConstruction'
import { ct_tab_CornerunitStraightDimensionLogic, ICT_tab_CornerunitStraightDimensionLogic } from '../internal/custom-tables/tab_CornerunitStraightDimensionLogic'
import { ct_tab_DishwasherConstruction, ICT_tab_DishwasherConstruction } from '../internal/custom-tables/tab_DishwasherConstruction'
import { ct_tab_DishwasherMapping, ICT_tab_DishwasherMapping } from '../internal/custom-tables/tab_DishwasherMapping'
import { ct_tab_DoorSettings, ICT_tab_DoorSettings } from '../internal/custom-tables/tab_DoorSettings'
import { ct_tab_DrawerBoxColorMapping, ICT_tab_DrawerBoxColorMapping } from '../internal/custom-tables/tab_DrawerBoxColorMapping'
import { ct_tab_DrawerBoxConstruction, ICT_tab_DrawerBoxConstruction } from '../internal/custom-tables/tab_DrawerBoxConstruction'
import { ct_tab_DrawerBoxDimensionMapping, ICT_tab_DrawerBoxDimensionMapping } from '../internal/custom-tables/tab_DrawerBoxDimensionMapping'
import { ct_tab_DrawerBoxExtraItemSettings, ICT_tab_DrawerBoxExtraItemSettings } from '../internal/custom-tables/tab_DrawerBoxExtraItemSettings'
import { ct_tab_DrawerBoxInsertionSettings, ICT_tab_DrawerBoxInsertionSettings } from '../internal/custom-tables/tab_DrawerBoxInsertionSettings'
import { ct_tab_DrawerBoxMapping, ICT_tab_DrawerBoxMapping } from '../internal/custom-tables/tab_DrawerBoxMapping'
import { ct_tab_DrawerBoxWeightTypeSettings, ICT_tab_DrawerBoxWeightTypeSettings } from '../internal/custom-tables/tab_DrawerBoxWeightTypeSettings'
import { ct_tab_DuststripMapping, ICT_tab_DuststripMapping } from '../internal/custom-tables/tab_DuststripMapping'
import { ct_tab_EdgeClassSettings, ICT_tab_EdgeClassSettings } from '../internal/custom-tables/tab_EdgeClassSettings'
import { ct_tab_EdgeFrameSettings, ICT_tab_EdgeFrameSettings } from '../internal/custom-tables/tab_EdgeFrameSettings'
import { ct_tab_EdgeJointMapping, ICT_tab_EdgeJointMapping } from '../internal/custom-tables/tab_EdgeJointMapping'
import { ct_tab_EdgeJointSettings, ICT_tab_EdgeJointSettings } from '../internal/custom-tables/tab_EdgeJointSettings'
import { ct_tab_EdgeLibrary, ICT_tab_EdgeLibrary } from '../internal/custom-tables/tab_EdgeLibrary'
import { ct_tab_EdgeMapping, ICT_tab_EdgeMapping } from '../internal/custom-tables/tab_EdgeMapping'
import { ct_tab_EdgeNumberSettings, ICT_tab_EdgeNumberSettings } from '../internal/custom-tables/tab_EdgeNumberSettings'
import { ct_tab_EdgeSettings, ICT_tab_EdgeSettings } from '../internal/custom-tables/tab_EdgeSettings'
import { ct_tab_ErrorList, ICT_tab_ErrorList } from '../internal/custom-tables/tab_ErrorList'
import { ct_tab_FillerHardwareSettings, ICT_tab_FillerHardwareSettings } from '../internal/custom-tables/tab_FillerHardwareSettings'
import { ct_tab_FillerSettings, ICT_tab_FillerSettings } from '../internal/custom-tables/tab_FillerSettings'
import { ct_tab_FlipliftColorMapping, ICT_tab_FlipliftColorMapping } from '../internal/custom-tables/tab_FlipliftColorMapping'
import { ct_tab_FlipliftConstruction, ICT_tab_FlipliftConstruction } from '../internal/custom-tables/tab_FlipliftConstruction'
import { ct_tab_FlipliftMapping, ICT_tab_FlipliftMapping } from '../internal/custom-tables/tab_FlipliftMapping'
import { ct_tab_FlipliftSettings, ICT_tab_FlipliftSettings } from '../internal/custom-tables/tab_FlipliftSettings'
import { ct_tab_FlipliftWeightTypeMapping, ICT_tab_FlipliftWeightTypeMapping } from '../internal/custom-tables/tab_FlipliftWeightTypeMapping'
import { ct_tab_FrameFillingMapping, ICT_tab_FrameFillingMapping } from '../internal/custom-tables/tab_FrameFillingMapping'
import { ct_tab_FramePartConnectionMapping, ICT_tab_FramePartConnectionMapping } from '../internal/custom-tables/tab_FramePartConnectionMapping'
import { ct_tab_FridgeConstruction, ICT_tab_FridgeConstruction } from '../internal/custom-tables/tab_FridgeConstruction'
import { ct_tab_FridgeMapping, ICT_tab_FridgeMapping } from '../internal/custom-tables/tab_FridgeMapping'
import { ct_tab_FridgeNicheConstruction, ICT_tab_FridgeNicheConstruction } from '../internal/custom-tables/tab_FridgeNicheConstruction'
import { ct_tab_FrontConstruction, ICT_tab_FrontConstruction } from '../internal/custom-tables/tab_FrontConstruction'
import { ct_tab_FrontEdgeColorMapping, ICT_tab_FrontEdgeColorMapping } from '../internal/custom-tables/tab_FrontEdgeColorMapping'
import { ct_tab_FrontPanelConstruction, ICT_tab_FrontPanelConstruction } from '../internal/custom-tables/tab_FrontPanelConstruction'
import { ct_tab_GrainDirectionSettings, ICT_tab_GrainDirectionSettings } from '../internal/custom-tables/tab_GrainDirectionSettings'
import { ct_tab_GraphicFileLibrary, ICT_tab_GraphicFileLibrary } from '../internal/custom-tables/tab_GraphicFileLibrary'
import { ct_tab_GraphicLibrary, ICT_tab_GraphicLibrary } from '../internal/custom-tables/tab_GraphicLibrary'
import { ct_tab_GraphicLibraryMapping, ICT_tab_GraphicLibraryMapping } from '../internal/custom-tables/tab_GraphicLibraryMapping'
import { ct_tab_HandleConstruction, ICT_tab_HandleConstruction } from '../internal/custom-tables/tab_HandleConstruction'
import { ct_tab_HandleLengthMapping, ICT_tab_HandleLengthMapping } from '../internal/custom-tables/tab_HandleLengthMapping'
import { ct_tab_HandleMapping, ICT_tab_HandleMapping } from '../internal/custom-tables/tab_HandleMapping'
import { ct_tab_HandleSettings, ICT_tab_HandleSettings } from '../internal/custom-tables/tab_HandleSettings'
import { ct_tab_HangerMapping, ICT_tab_HangerMapping } from '../internal/custom-tables/tab_HangerMapping'
import { ct_tab_HangerSettings, ICT_tab_HangerSettings } from '../internal/custom-tables/tab_HangerSettings'
import { ct_tab_HardwareDrillHorLibrary, ICT_tab_HardwareDrillHorLibrary } from '../internal/custom-tables/tab_HardwareDrillHorLibrary'
import { ct_tab_HardwareDrillVertLibrary, ICT_tab_HardwareDrillVertLibrary } from '../internal/custom-tables/tab_HardwareDrillVertLibrary'
import { ct_tab_HardwareLibrary, ICT_tab_HardwareLibrary } from '../internal/custom-tables/tab_HardwareLibrary'
import { ct_tab_HardwareLibraryMapping, ICT_tab_HardwareLibraryMapping } from '../internal/custom-tables/tab_HardwareLibraryMapping'
import { ct_tab_HardwareMillingLibrary, ICT_tab_HardwareMillingLibrary } from '../internal/custom-tables/tab_HardwareMillingLibrary'
import { ct_tab_HardwareSettings, ICT_tab_HardwareSettings } from '../internal/custom-tables/tab_HardwareSettings'
import { ct_tab_HingeConstruction, ICT_tab_HingeConstruction } from '../internal/custom-tables/tab_HingeConstruction'
import { ct_tab_HingeDrillingDistance, ICT_tab_HingeDrillingDistance } from '../internal/custom-tables/tab_HingeDrillingDistance'
import { ct_tab_HingeMapping, ICT_tab_HingeMapping } from '../internal/custom-tables/tab_HingeMapping'
import { ct_tab_HingePosition, ICT_tab_HingePosition } from '../internal/custom-tables/tab_HingePosition'
import { ct_tab_HingeSettings, ICT_tab_HingeSettings } from '../internal/custom-tables/tab_HingeSettings'
import { ct_tab_HobConstruction, ICT_tab_HobConstruction } from '../internal/custom-tables/tab_HobConstruction'
import { ct_tab_HobMapping, ICT_tab_HobMapping } from '../internal/custom-tables/tab_HobMapping'
import { ct_tab_HoodAssemblyMapping, ICT_tab_HoodAssemblyMapping } from '../internal/custom-tables/tab_HoodAssemblyMapping'
import { ct_tab_HoodAssemblyParts, ICT_tab_HoodAssemblyParts } from '../internal/custom-tables/tab_HoodAssemblyParts'
import { ct_tab_HoodConstruction, ICT_tab_HoodConstruction } from '../internal/custom-tables/tab_HoodConstruction'
import { ct_tab_HoodMapping, ICT_tab_HoodMapping } from '../internal/custom-tables/tab_HoodMapping'
import { ct_tab_LaundryMachineMapping, ICT_tab_LaundryMachineMapping } from '../internal/custom-tables/tab_LaundryMachineMapping'
import { ct_tab_MaterialMapping, ICT_tab_MaterialMapping } from '../internal/custom-tables/tab_MaterialMapping'
import { ct_tab_ObjectMapping, ICT_tab_ObjectMapping } from '../internal/custom-tables/tab_ObjectMapping'
import { ct_tab_OvenConstruction, ICT_tab_OvenConstruction } from '../internal/custom-tables/tab_OvenConstruction'
import { ct_tab_OvenMapping, ICT_tab_OvenMapping } from '../internal/custom-tables/tab_OvenMapping'
import { ct_tab_PanelWoodFrameConstruction, ICT_tab_PanelWoodFrameConstruction } from '../internal/custom-tables/tab_PanelWoodFrameConstruction'
import { ct_tab_PantryPulloutColorMapping, ICT_tab_PantryPulloutColorMapping } from '../internal/custom-tables/tab_PantryPulloutColorMapping'
import { ct_tab_PantryPulloutConstruction, ICT_tab_PantryPulloutConstruction } from '../internal/custom-tables/tab_PantryPulloutConstruction'
import { ct_tab_PantryPulloutMapping, ICT_tab_PantryPulloutMapping } from '../internal/custom-tables/tab_PantryPulloutMapping'
import { ct_tab_PartConnectionSettings, ICT_tab_PartConnectionSettings } from '../internal/custom-tables/tab_PartConnectionSettings'
import { ct_tab_PartOverdimensionSettings, ICT_tab_PartOverdimensionSettings } from '../internal/custom-tables/tab_PartOverdimensionSettings'
import { ct_tab_PartSettings, ICT_tab_PartSettings } from '../internal/custom-tables/tab_PartSettings'
import { ct_tab_PartsGraphicRotation, ICT_tab_PartsGraphicRotation } from '../internal/custom-tables/tab_PartsGraphicRotation'
import { ct_tab_PlinthAreaBaseboardSettings, ICT_tab_PlinthAreaBaseboardSettings } from '../internal/custom-tables/tab_PlinthAreaBaseboardSettings'
import { ct_tab_PlinthAreaConstruction, ICT_tab_PlinthAreaConstruction } from '../internal/custom-tables/tab_PlinthAreaConstruction'
import { ct_tab_PlinthAreaMapping, ICT_tab_PlinthAreaMapping } from '../internal/custom-tables/tab_PlinthAreaMapping'
import { ct_tab_PlinthAreaSettings, ICT_tab_PlinthAreaSettings } from '../internal/custom-tables/tab_PlinthAreaSettings'
import { ct_tab_ProcessingMapping, ICT_tab_ProcessingMapping } from '../internal/custom-tables/tab_ProcessingMapping'
import { ct_tab_PulloutElementColorMapping, ICT_tab_PulloutElementColorMapping } from '../internal/custom-tables/tab_PulloutElementColorMapping'
import { ct_tab_PulloutHardwareInsertionSettings, ICT_tab_PulloutHardwareInsertionSettings } from '../internal/custom-tables/tab_PulloutHardwareInsertionSettings'
import { ct_tab_PulloutMapping, ICT_tab_PulloutMapping } from '../internal/custom-tables/tab_PulloutMapping'
import { ct_tab_PulloutSettings, ICT_tab_PulloutSettings } from '../internal/custom-tables/tab_PulloutSettings'
import { ct_tab_PushtoopenMapping, ICT_tab_PushtoopenMapping } from '../internal/custom-tables/tab_PushtoopenMapping'
import { ct_tab_PushtoopenSettings, ICT_tab_PushtoopenSettings } from '../internal/custom-tables/tab_PushtoopenSettings'
import { ct_tab_SawingAngleLibrary, ICT_tab_SawingAngleLibrary } from '../internal/custom-tables/tab_SawingAngleLibrary'
import { ct_tab_SawingVertLibrary, ICT_tab_SawingVertLibrary } from '../internal/custom-tables/tab_SawingVertLibrary'
import { ct_tab_SegmentFrontConstruction, ICT_tab_SegmentFrontConstruction } from '../internal/custom-tables/tab_SegmentFrontConstruction'
import { ct_tab_SegmentFrontMapping, ICT_tab_SegmentFrontMapping } from '../internal/custom-tables/tab_SegmentFrontMapping'
import { ct_tab_ShelfadjDrillSettings, ICT_tab_ShelfadjDrillSettings } from '../internal/custom-tables/tab_ShelfadjDrillSettings'
import { ct_tab_ShelfadjQtyPosSettings, ICT_tab_ShelfadjQtyPosSettings } from '../internal/custom-tables/tab_ShelfadjQtyPosSettings'
import { ct_tab_ShelfadjSettings, ICT_tab_ShelfadjSettings } from '../internal/custom-tables/tab_ShelfadjSettings'
import { ct_tab_SinkConstruction, ICT_tab_SinkConstruction } from '../internal/custom-tables/tab_SinkConstruction'
import { ct_tab_SinkMapping, ICT_tab_SinkMapping } from '../internal/custom-tables/tab_SinkMapping'
import { ct_tab_SlopedCeilingSettings, ICT_tab_SlopedCeilingSettings } from '../internal/custom-tables/tab_SlopedCeilingSettings'
import { CKind, Contour, GenerationMethod, Matrix4, Vector3 } from '../internal/base'
import { Dock, IDockingInfo, FaceKey, IPartBase, MatrixHelper, ModuleHelper, PartHelper } from '../internal/mod-base'
declare function uuidv4(): string;
//#endregion Imports

export function mr_PlinthAreaBaseboard_createBuildPlan(this: cbp_mr_PlinthAreaBaseboard): void {
	internal_enterModuleCreateBuildPlan('mr_PlinthAreaBaseboard', this._id);
	try {
		// ###############################################################
		// ####################### CUSTOM SCRIPTS ########################
		// ###############################################################
		// CUSTOMSCRIPT_mr_PlinthAreaBaseboard_CREATEBUILDPLAN

		// Create the createPartGroup
		const partGroup = this.addpart_BaseboardGroup(0, 0, 0, 0, 0, 0);

		// We have to provide the Id to all the childs!
		// Actually everything is hard coded and it will not work in the future!
		this.createPartGroup('Baseboard01', partGroup);
		partGroup.pa_BomId = 'Baseboard01';
		// ###############################################################
		// ################### END CUSTOM SCRIPTS ########################
		// ###############################################################
	}
	catch (error) {
		if (error instanceof Error) {
			logError(error.message + "\n" + error.stack);
		} else {
			logError(JSON.stringify(error, null, 4));
		}
	}
	finally {
		internal_leaveModuleCreateBuildPlan();
	}
}
// ---------------------------------------------------------------
export function mr_PlinthAreaBaseboard_afterDataCompletion(this: adc_mr_PlinthAreaBaseboard): void {
	internal_enterModuleAfterDataCompletion('mr_PlinthAreaBaseboard', this._id);
	try {
		// ###############################################################
		// ####################### CUSTOM SCRIPTS ########################
		// ###############################################################
		// CUSTOMSCRIPT_mr_PlinthAreaBaseboard_AFTERDATACOMPLETION
		// ###############################################################
		// ####################### CUSTOM SCRIPTS ########################
		// ###############################################################
		// CUSTOMSCRIPT_mr_PlinthAreaBaseboard_AFTERDATACOMPLETION


		//===================================================
		//          Call the UserExit of this module
		//===================================================

		let retInfo = GlobalFunc.ue_PlinthAreaBaseboard(this);

		// By Jiri Polcar based on https://whiteboard.cloud.microsoft/me/whiteboards/p/c3BvOmh0dHBzOi8vZHVlcnItbXkuc2hhcmVwb2ludC5jb20vcGVyc29uYWwvam9hb19saXNib2EtZXh0ZXJuYWxfaG9tYWctZ3JvdXBfY29t/b!S-lvTMFjEE2HmftmgCYsrKdhosxoWEFJpxjOjZSFjT-ybNuk2q_mSJ4w3dxCSojw/01OSOYUCXKMDRTSQQBMFHYRHYLVFPURVL2?web=1
		// ===================================================
		//       Prepare helper functions, types and classes
		// ===================================================
		// Jiri Feb 2026 - "2nd Step Enhancement" 
		// 	- mr_Filler01 only extends the toekick, but not the baseboard
		//	- definition: the filler is exclusively used as a terminating part;
		//  	- if not, then it will not work expectedly


		const {
			LongPartSegment,
			LineSegmentEquation,
			CONTOUR_ATTRIBUTE_OWNER_TYPE,
			CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE,
			CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT,
			CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR,
			CONTOUR_ATTRIBUTE_ADD_BASEBOARD,
			CONTOUR_ATTRIBUTE_ADD_TOEKICK,
			evaluateCornerUnitStraightSizeOfPerpendicularPart,
			mr_CornerunitStraight,
			mr_StorageunitSingle,
		} = GlobalFunc.process_MathLongparts();
		type LongPartSegmentTypeAlias = InstanceType<typeof LongPartSegment>;
		type LeftRightAny = { Left: any, Right: any }

		// Values for the PlinthAreaBaseboardSettings table
		enum ModulePosition {
			SingleSection = 'SingleSection',
			FirstSection = 'FirstSection',
			FirstSectionBeforeCut = 'FirstSectionBeforeCut',
			MiddleSection = 'MiddleSection',
			MiddleSectionBeforeCut = 'MiddleSectionBeforeCut',
			MiddleSectionAfterCut = 'MiddleSectionAfterCut',
			LastSection = 'LastSection',
			LastSectionAfterCut = 'LastSectionAfterCut',
		}

		// Helper class for the baseboard segment additional data
		class PlinthAreaBaseboardSegmentAdditionalData {
			segmentDepth: number;
			segmentLength: number;
			displaceOriginX: number;
			baseboardModulePosition?: ModulePosition;
			originTransformationMatrix: Matrix4;
			legPositions: { LineLeft: number | null, LineRight: number | null, LineFront: number | null, LineBack: number | null, };
			leftBaseboardNeighbour: LongPartSegmentTypeAlias | null = null;
			rightBaseboardNeighbour: LongPartSegmentTypeAlias | null = null;
			leftToekickNeighbour: LongPartSegmentTypeAlias | null = null;
			rightToekickNeighbour: LongPartSegmentTypeAlias | null = null;

			constructor(
				longPartSegment: LongPartSegmentTypeAlias,
			) {
				this.segmentDepth = longPartSegment.getLengthBetweenParallelSides(CKind.Back, CKind.Front)!;
				this.segmentLength = longPartSegment.getLengthBetweenParallelSides(CKind.Left, CKind.Right)!;
				this.displaceOriginX = 0;
				this.legPositions = { LineLeft: null, LineRight: null, LineFront: null, LineBack: null, };

				const originPoint = longPartSegment.getCornerPoint(CKind.Left, CKind.Back)!.toVector3Extended();
				const originAxisXPoint = longPartSegment.getCornerPoint(CKind.Right, CKind.Back)!.toVector3Extended();
				const originAxisX = new LineSegmentEquation(originPoint, originAxisXPoint).toFootprintEquation();
				this.originTransformationMatrix = originAxisX.getTransformationMatrixToStartPoint();
			}

			/** 
			 * Shifts the edge of the baseboard segments. This is intended to be used whjen there is a
			 * baseboard cut under the edges. This will move the split between the two segments by the shiftAmount to the right.
			 * @param leftSegment 
			 * @param rightSegment 
			 * @param shiftAmount positive is to the right
			 */
			static shiftEdge(leftSegment: LongPartSegmentTypeAlias, rightSegment: LongPartSegmentTypeAlias, shiftAmount: number) {
				rightSegment.additionalData.displaceOriginX += shiftAmount;
				rightSegment.additionalData.segmentLength -= shiftAmount;
				leftSegment.additionalData.segmentLength += shiftAmount;
			}
		}

		// Convert contours to the LongPartSegments
		const segments = this.getGenerationContours().map(contour => {
			const lps = new LongPartSegment(contour);
			lps.getOrAddSide(CKind.Left, CKind.Right);
			lps.getOrAddSide(CKind.Right, CKind.Left);
			lps.getOrAddSide(CKind.Front, []);
			lps.getOrAddSide(CKind.Back, []);
			lps.additionalData = new PlinthAreaBaseboardSegmentAdditionalData(lps);
			return lps;
		});

		// Add the mc_Baseboard submodule
		let baseboardId = 0;
		const addBaseboard = () => {
			baseboardId++;
			const baseboard = this.addOD_M_mc_Baseboard01(baseboardId);
			baseboard.mod_BaseboardId = `Baseboard_${baseboardId}`;
			return baseboard;
		};

		let toekickMaximumLength;
		try {
			const boardMapping = GlobalFunc.find_BoardMapping(this.mod_ToekickColor, this.mod_ToekickThk);
			const boardEntry = GlobalFunc.find_BoardLibrary(boardMapping.BoardId!);
			toekickMaximumLength = boardEntry!.BoardLength;
		}
		catch (e) {
			toekickMaximumLength = 9999;
			//logError(`Error while retrieving maximum toekick length. Using fallback value ${maximumLength}. Error: ${e}`);
		}

		// Add the toekick submodule between two points
		let toekickIndex = 1;
		/**
		 * adds the toekick between the two points
		 * the line is assumed to match the inner surface of the toekick
		 * if start is left and end is right end point of the front toekick, the toekick will face forward
		 * @param start 
		 * @param end 
		 * @returns mc_Toekick instance
		 */
		const addToekick = (start: Vector3, end: Vector3) => {
			const toekick = this.addOD_M_mc_Toekick();
			toekick.mod_ToekickId = `Toekick_${toekickIndex++}`;
			const equation = new LineSegmentEquation(start, end);
			toekick.mod_ToekickLength = equation.length;
			toekick.setOrigin(equation.getTransformationMatrixToStartPoint());
			// for pricing
			this.mod_LengthList.push(equation.length);
			return toekick;
		};

		/**
		 * Helper function to take the segment and this module and retrieve the
		 * leg positions from tab_PlinthAreaBaseboardSettings
		 * @param segment 
		 * @returns 
		 */
		const find_PlinthAreaBaseboardSettings_helper = (segment: LongPartSegmentTypeAlias, baseboardDepth: number): null | {
			MatrixPositionType: number;
			BasePoint: number,
			HardwareRotation: number,
			PosXOffset: number,
			PosYOffset: number,
		}[] => {
			return GlobalFunc.find_PlinthAreaBaseboardSettings({
				TypeElement: segment.getAttributeOrDefault('mod_TypeElement', 'All'),
				BaseboardCutLogic: this.mod_BaseboardSplitLogic,
				CarcaseDepth: baseboardDepth,
				CarcaseWidth: segment.additionalData.segmentLength,
				PlinthAreaDesign: this.mod_PlinthAreaDesign,
				ModulePosition: segment.additionalData.baseboardModulePosition,
				PositionLeftMatrix: segment.getAttributeOrDefault('mod_PlinthAreaPosLeftMatrix', 'None'),
				PositionRightMatrix: segment.getAttributeOrDefault('mod_PlinthAreaPosRightMatrix', 'None'),
				PositionFrontMatrix: segment.getAttributeOrDefault('mod_PlinthAreaPosFrontMatrix', 'None'),
				PositionBackMatrix: segment.getAttributeOrDefault('mod_PlinthAreaPosBackMatrix', 'None'),
			}, {
				mod_CarcaseWidth: segment.additionalData.segmentLength,
				mod_CarcaseDepth: baseboardDepth,
			});
		}

		// Get the maximum toekick possible length from the boards properties.
		let baseboardMaxUnsplitLength;
		try {
			const boardMapping = GlobalFunc.find_BoardMapping(this.mod_CarcaseColor, this.mod_BaseboardThk);
			const boardEntry = GlobalFunc.find_BoardLibrary(boardMapping.BoardId!);
			baseboardMaxUnsplitLength = boardEntry!.BoardLength;
		}
		catch (e) {
			baseboardMaxUnsplitLength = 9999;
			logError(`Error while retrieving maximum baseboard length. Using fallback value ${baseboardMaxUnsplitLength}. Error: ${e}`);
		}

		let mod_BaseboardSplitLogic = this.mod_BaseboardSplitLogic;
		// ===================================================
		// Match the LongPartSegments with their neighbours
		// ===================================================

		// Match sibling contours (corner units provide two sibling countertop contours for both sides of the corner)
		// Match neighbouring contours by the front edge continuity
		for (let i = 0; i < segments.length; i++) {
			const current = segments[i];
			const rest = segments.slice(i + 1);
			for (let j = 0; j < rest.length; j++) {
				current.tryMatchSiblings(rest);
				current.tryMatchNeighboursByAxialContinuity(CKind.Front, rest, { match3D: true, matchFootprint: true });
			}
		}

		// ===================================================
		//       Cycle through the segments
		// ===================================================
		// Compute the contributing lengths to the plinth area segments
		// Compute depths of the cornerunit perpendicular parts
		// Resolve the contours coming from the corner units

		for (const current of segments) {

			const currentOwnerType: string = current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined owner type');
			const cornerContourType = current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'not a corner');
			const currentIsStraightCornerPart = cornerContourType === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT;

			// The neighbours of the current segment. 
			const dockingSegments: LeftRightAny = {
				Left: current,
				Right: current,
			}

			// ===================================================
			// compute length, depth and origin displacement of the long part segments
			// ===================================================

			if (
				currentOwnerType === mr_CornerunitStraight
				&& currentIsStraightCornerPart // this ensures it runs only once
			) {

				const evaluateSizesResult = evaluateCornerUnitStraightSizeOfPerpendicularPart(current, 0, 'segmentLength', 'segmentDepth', 'displaceOriginX');

				dockingSegments.Left = evaluateSizesResult.leftCornerPart;
				dockingSegments.Right = evaluateSizesResult.rightCornerPart;

				// TODO: not a topic at this point

			}
			else if (currentOwnerType === mr_StorageunitSingle) {
				// nothing to do for the straight units at this point
			}
			else {
				// Perpendicular corner part of the corner unit - ignore, otherwise it'll compute two times.
			}
		}

		// Split the segments and starting segments to the segments, that draw baseboards and to those that draw toekicks.
		const baseboardSegments = segments.filter(seg => seg.attributeIs(CONTOUR_ATTRIBUTE_ADD_BASEBOARD, 1));
		const toekickSegments = segments.filter(seg => seg.attributeIs(CONTOUR_ATTRIBUTE_ADD_TOEKICK, 1));

		// filter out the starting segments
		const baseboardStartingSegments = baseboardSegments.filter(seg => {
			const leftNeighbour = seg.getNeighbourBySide(CKind.Left);
			return !leftNeighbour || baseboardSegments.indexOf(leftNeighbour) < 0;
		});
		const toekickStartingSegments = toekickSegments.filter(seg => {
			const leftNeighbour = seg.getNeighbourBySide(CKind.Left);
			return !leftNeighbour || toekickSegments.indexOf(leftNeighbour) < 0;
		});

		const startToLastBaseboardSegmentMap = new Map<LongPartSegmentTypeAlias, LongPartSegmentTypeAlias>();
		// crawl throught the baseboard and toekick segments, compute widths and assign the next segment values
		for (const first of baseboardStartingSegments) {
			let current: LongPartSegmentTypeAlias | null = first;
			let last: LongPartSegmentTypeAlias = first;
			while (current !== null) {
				const next: LongPartSegmentTypeAlias | null = current.getNeighbourBySide(CKind.Right);
				if (next && next.attributeIs(CONTOUR_ATTRIBUTE_ADD_BASEBOARD, 1)) {
					last = next;
					current.additionalData.rightBaseboardNeighbour = next;
					next.additionalData.leftBaseboardNeighbour = current;
					current = next;
				}
				else {
					current = null;
				}
			}
			startToLastBaseboardSegmentMap.set(first, last);
		}
		const startToLastToekickSegmentMap = new Map<LongPartSegmentTypeAlias, LongPartSegmentTypeAlias>();
		for (const first of toekickStartingSegments) {
			let current: LongPartSegmentTypeAlias | null = first;
			let last: LongPartSegmentTypeAlias = first;
			while (current !== null) {
				const next: LongPartSegmentTypeAlias | null = current.getNeighbourBySide(CKind.Right);
				if (next && next.attributeIs(CONTOUR_ATTRIBUTE_ADD_TOEKICK, 1)) {
					last = next;
					current.additionalData.rightToekickNeighbour = next;
					next.additionalData.leftToekickNeighbour = current;
					current = next;
				}
				else {
					current = null;
				}
			}
			startToLastToekickSegmentMap.set(first, last);
		}

		// ===================================================
		// Solve BASEBOARDS
		// ===================================================

		for (const firstSegment of baseboardStartingSegments) {

			// instantiate helper coordinate system axes from the rear left corner
			/** Along front edge to the right */
			const xAxis = new LineSegmentEquation(firstSegment.getCornerPoint(CKind.Left, CKind.Front)!.toVector3Extended(), firstSegment.getCornerPoint(CKind.Right, CKind.Front)!.toVector3Extended()).toFootprintEquation();
			/** Along left edge rearward */
			const yAxis = new LineSegmentEquation(xAxis.start, firstSegment.getCornerPoint(CKind.Left, CKind.Back)!.toVector3Extended()).toFootprintEquation();
			const getPointAtXY = (offsetX: number, offsetY: number) => {
				return xAxis.getPointAt(offsetX).add(yAxis.direction.scale(offsetY));
			}

			/** Total space for the plinth area - legs and the baseboard must fit into this space */
			const plintAreaHeightSpace = firstSegment.generationContour.position.y + firstSegment.generationContour.height;
			/** Space for the legs */
			const availableLegHeightSpace = plintAreaHeightSpace - this.mod_BaseboardThk;

			// ===================================================
			// Crawl through all segments belonging to this baseboard and collect them and their min and max depths
			// ===================================================

			/** All segments, sorted from left to the right, starting with the starting segment */
			const segments: LongPartSegmentTypeAlias[] = [];

			/** Running segment for the loop */
			let current: LongPartSegmentTypeAlias | null = firstSegment;
			/** We've got the first segment, we need to also know the last segment */
			let lastSegment: LongPartSegmentTypeAlias = startToLastBaseboardSegmentMap.get(firstSegment)!;
			// Evaluate the min and max depths for the baseboard:
			let maxDepth = current.additionalData.segmentDepth;
			let minDepth = current.additionalData.segmentDepth;

			// Crawler loop from the first segment to the last segment; crawl into the right neighbours
			while (current !== null) {
				segments.push(current);
				maxDepth = Math.max(maxDepth, current.additionalData.segmentDepth);
				minDepth = Math.min(minDepth, current.additionalData.segmentDepth);
				const next: LongPartSegmentTypeAlias | null = current.additionalData.rightBaseboardNeighbour;
				current = next;
			}
			const baseboardReferenceDepth = this.mod_BaseboardOverdimensionBack + (this.mod_BaseboardDepthLogic === 'FollowsMaxDepth' ? maxDepth : minDepth);
			/** Y displacement of the legs against its origin in the left front corner. Positive value moves rearward. */
			const legBaseCoordinateY = baseboardReferenceDepth;

			// Distribute the ModulePosition values
			if (firstSegment === lastSegment) {
				firstSegment.additionalData.baseboardModulePosition = ModulePosition.SingleSection;
			}
			else {
				segments.forEach((seg) => {
					if (seg === firstSegment) {
						seg.additionalData.baseboardModulePosition = ModulePosition.FirstSection;
					}
					else if (seg === lastSegment) {
						seg.additionalData.baseboardModulePosition = ModulePosition.LastSection;
					}
					else {
						seg.additionalData.baseboardModulePosition = ModulePosition.MiddleSection;
					}
				});
			}
			// Split the baseboard

			/** "Promotes" the module position into the before/after cut values */
			const splitBetweenTwoSegments = (leftSegment: LongPartSegmentTypeAlias | undefined, rightSegment: LongPartSegmentTypeAlias | undefined) => {
				if (!leftSegment || !rightSegment) {
					return;
				}
				if (leftSegment.additionalData.baseboardModulePosition === ModulePosition.FirstSection) {
					leftSegment.additionalData.baseboardModulePosition = ModulePosition.FirstSectionBeforeCut;
				}
				else if (leftSegment.additionalData.baseboardModulePosition === ModulePosition.MiddleSection) {
					leftSegment.additionalData.baseboardModulePosition = ModulePosition.MiddleSectionBeforeCut;
				}

				if (rightSegment.additionalData.baseboardModulePosition === ModulePosition.LastSection) {
					rightSegment.additionalData.baseboardModulePosition = ModulePosition.LastSectionAfterCut;
				}
				else if (rightSegment.additionalData.baseboardModulePosition === ModulePosition.MiddleSection) {
					rightSegment.additionalData.baseboardModulePosition = ModulePosition.MiddleSectionAfterCut;
				}
			};

			// compute the split lengths
			const unsplitBaseboardLength = segments.reduce((acc, seg) => acc + seg.additionalData.segmentLength, 0);
			const baseboardSplitLengths: number[] = [];
			if (unsplitBaseboardLength <= baseboardMaxUnsplitLength) {
				// no splits needed
				baseboardSplitLengths.push(unsplitBaseboardLength);
			}
			else if (mod_BaseboardSplitLogic === 'BetweenCabinets') {
				// go from left to right and whenever the next segment length exceeds the max length, split before it
				let currentBaseboardLength = 0;
				for (let i = 0; i < segments.length; i++) {
					const segmentLength = segments[i].additionalData.segmentLength;
					if (currentBaseboardLength + segmentLength > baseboardMaxUnsplitLength) {
						splitBetweenTwoSegments(segments[i - 1], segments[i]);
						baseboardSplitLengths.push(currentBaseboardLength);
						currentBaseboardLength = 0;
					}
					currentBaseboardLength += segmentLength;
				}
				if (currentBaseboardLength > 0) {
					baseboardSplitLengths.push(currentBaseboardLength);
				}
			}
			else if (mod_BaseboardSplitLogic === 'EqualDimension') {
				// split so that all baseboard segments are of equal length not exceeding the max length
				const numberOfSplits = Math.ceil(unsplitBaseboardLength / baseboardMaxUnsplitLength);
				const equalSplitLength = unsplitBaseboardLength / numberOfSplits;
				for (let i = 0; i < numberOfSplits; i++) {
					baseboardSplitLengths.push(equalSplitLength);
				}
				let segmentsAccumulatedLength = 0;
				let splitAccumulatedLength = equalSplitLength;
				for (let i = 0; i < segments.length; i++) {
					const seg = segments[i];
					segmentsAccumulatedLength += seg.additionalData.segmentLength;
					if (segmentsAccumulatedLength > splitAccumulatedLength) {
						const overshoot = segmentsAccumulatedLength - splitAccumulatedLength;
						const ratio = 1 - overshoot / seg.additionalData.segmentLength;
						if (ratio < 0.5) {
							// we are closer to the segment start, so we shift the cut to the left edge of the segment
							const shift = seg.additionalData.segmentLength * ratio;
							PlinthAreaBaseboardSegmentAdditionalData.shiftEdge(segments[i - 1], seg, shift);
							splitBetweenTwoSegments(segments[i - 1], seg);
							segmentsAccumulatedLength -= shift;
						}
						else {
							// we are closer to the segment end, so we shift the cut to the right edge of the segment
							const shift = seg.additionalData.segmentLength * (1 - ratio);
							PlinthAreaBaseboardSegmentAdditionalData.shiftEdge(seg, segments[i + 1], - shift);
							splitBetweenTwoSegments(seg, segments[i + 1]);
							segmentsAccumulatedLength -= shift;
						}
						splitAccumulatedLength += equalSplitLength;
					}
				}
			}
			else {
				logError(`mr_PlinthAreaBaseboard: mod_BaseboardSplitLogic value "${mod_BaseboardSplitLogic}" needs implementation.`);
			}

			let positionX = 0;



			// 1. get legs data for all segments and instantiate the legs
			segments.forEach((seg, segIndex) => {
				const plinthAreaBaseboardSettings = find_PlinthAreaBaseboardSettings_helper(seg, baseboardReferenceDepth);

				const legPositions = seg.additionalData.legPositions;

				plinthAreaBaseboardSettings?.forEach((leg: any, legIndex: number) => {

					if ([11, 21, 31].includes(leg.MatrixPositionType)) {
						legPositions.LineLeft = legPositions.LineLeft !== null ? Math.min(legPositions.LineLeft, leg.PosXOffset) : leg.PosXOffset;
					}
					if ([13, 23, 33].includes(leg.MatrixPositionType)) {
						legPositions.LineRight = legPositions.LineRight !== null ? Math.min(legPositions.LineRight, leg.PosXOffset) : leg.PosXOffset;
					}
					if ([11, 12, 13].includes(leg.MatrixPositionType)) {
						legPositions.LineBack = legPositions.LineBack !== null ? Math.min(legPositions.LineBack, leg.PosYOffset) : leg.PosYOffset;
					}
					if ([31, 32, 33].includes(leg.MatrixPositionType)) {
						legPositions.LineFront = legPositions.LineFront !== null ? Math.min(legPositions.LineFront, leg.PosYOffset) : leg.PosYOffset;
					}

					// find_PlinthAreaMapping - gets the leg type
					const plinthAreaMapping = GlobalFunc.find_PlinthAreaMapping(
						leg.MatrixPositionType,
						this.mod_PlinthAreaDesign,
						'Fixed',
						'None',
						availableLegHeightSpace,
						this.mod_BaseboardThk,
					);
					const retObjectMapping = GlobalFunc.find_ObjectMapping(plinthAreaMapping.Object!);
					const retGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(retObjectMapping.GraphicItem!);
					const retGraphicLib = GlobalFunc.find_GraphicLibrary(retGraphicMapping[0].Model3DGroupName!);
					const retConstruction = GlobalFunc.find_PlinthAreaConstruction(leg.BasePoint!, leg.MatrixPositionType!, leg.HardwareRotation!);

					if (!retConstruction) {
						logError(`tab_PlinthAreaConstruction entry not found for BasePoint=${leg.BasePoint}, MatrixPositionType=${leg.MatrixPositionType}, HardwareRotation=${leg.HardwareRotation}. Using fallback positions.`);
					}
					const posArgData = {
						mod_CarcaseWidth: seg.additionalData.segmentLength,
						mod_CarcaseDepth: baseboardReferenceDepth,
					} as any;
					// position from the table
					const posX = retConstruction?.PosX(posArgData, leg.PosXOffset, retGraphicLib.DimensionX, retGraphicLib.DimensionZ) ?? 100 + legIndex * 50;
					const posZ = retConstruction?.PosY(posArgData, leg.PosYOffset, retGraphicLib.DimensionX, retGraphicLib.DimensionZ) ?? 100;

					// table position transformed to local coordinate system of the individual contour segment
					const tPosX = positionX + posX;
					const tPosZ = legBaseCoordinateY - posZ;

					// use the line segment equation to transformation matrix function; start point is the leg position, end point is the neutral rotation axis
					const legPoint = getPointAtXY(tPosX, tPosZ);
					const legPointDirection = legPoint.add(xAxis.direction);
					const legPointEquationTransform = new LineSegmentEquation(legPoint, legPointDirection).getTransformationMatrixToStartPoint();

					const mcLeg = this.addOD_M_mc_Leg01();

					mcLeg.setOrigin(legPointEquationTransform);
					mcLeg.mod_Model3DGroupName = retGraphicMapping[0].Model3DGroupName!;
					mcLeg.mod_CarcaseId = 'Baseboard01';
					// Set explicit leg height, otherwise PlinthAreaHeight is used in the leg to determine its reference height
					mcLeg.mod_Height = availableLegHeightSpace;
					mcLeg.mod_ShelfbtmThk = this.mod_BaseboardThk;
					mcLeg.mod_Rotation = leg.HardwareRotation;
					mcLeg.mod_HardwareId = retObjectMapping.HardwareItem;
					mcLeg.mod_ProcessingId = retObjectMapping.ProcessingItem;
				});



				positionX += seg.additionalData.segmentLength;
			});

			/** final baseboard depth */
			let baseboardDepth = baseboardReferenceDepth;
			/** Y displacement of the baseboard from the front edge */
			let baseboardOffsetFrontY = 0;

			/* 
				Functions for shifting the baseboard edges in their perpendicular directions. 
				Every function reduces the baseboard size accordingly if positive value is given.
			*/
			function shiftBaseboardFrontEdgeRearward(dist: number): void { baseboardDepth -= dist; };
			function shiftBaseboardRearEdgeForward(dist: number): void { baseboardDepth -= dist; baseboardOffsetFrontY += dist; };
			function shiftBaseboardLeftEdgeRightward(dist: number): void { firstSegment.additionalData.displaceOriginX += dist; firstSegment.additionalData.segmentLength -= dist; baseboardSplitLengths[0] -= dist; };
			function shiftBaseboardRightEdgeLeftward(dist: number): void { lastSegment.additionalData.segmentLength -= dist; baseboardSplitLengths[baseboardSplitLengths.length - 1] -= dist; };

			// apply overdimensions
			shiftBaseboardRearEdgeForward(-(this.mod_BaseboardOverdimensionBack || 0));
			shiftBaseboardLeftEdgeRightward(-(this.mod_BaseboardOverdimensionLeft || 0));
			shiftBaseboardRightEdgeLeftward(-(this.mod_BaseboardOverdimensionRight || 0));

			// baseboard always has a toekick ... otherwise link it to an attribute
			const hasFrontToekick = true;
			const hasLeftToekick = (
				hasFrontToekick
				// visible on left side
				&& firstSegment.getAttributeOrDefault('mod_PlinthAreaVisLeft', 0)
				// not perpendicular part of right corner
				&& (firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, '') === mr_CornerunitStraight && firstSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined direction') === 'Right' && firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, '') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR) === false
				// not straight part of left corner (that wouldn't be visible)
				&& (firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, '') === mr_CornerunitStraight && firstSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined direction') === 'Left' && firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, '') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT) === false
				// has no left toekick neighbour (otherwise the toekick extends)
				&& !firstSegment.additionalData.leftToekickNeighbour
			);
			// analogously for the right side
			const hasRightToekick = (
				hasFrontToekick
				&& lastSegment.getAttributeOrDefault('mod_PlinthAreaVisRight', 0)
				&& (lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, '') === mr_CornerunitStraight && lastSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined direction') === 'Left' && lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, '') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR) === false
				&& (lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, '') === mr_CornerunitStraight && lastSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined direction') === 'Right' && lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, '') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT) === false
				&& !lastSegment.additionalData.rightToekickNeighbour
			);

			// 2. if toekick, reduce the baseboard by the legs positions

			// reduce the baseboard size according to the leg positions ... all toekick depend on the others; this must be done before instantiating the toekicks

			if (hasFrontToekick) { shiftBaseboardFrontEdgeRearward(firstSegment.additionalData.legPositions.LineFront ?? 0); }
			if (hasLeftToekick) { shiftBaseboardLeftEdgeRightward((firstSegment.additionalData.legPositions.LineLeft ?? 0)); }
			if (hasRightToekick) { shiftBaseboardRightEdgeLeftward(lastSegment.additionalData.legPositions.LineRight ?? 0); }


			// 3. instantiate the baseboard segments

			positionX = 0;
			for (let splitIndex = 0; splitIndex < baseboardSplitLengths.length; splitIndex++) {
				const splitLength = baseboardSplitLengths[splitIndex];
				// 1. get legs data for all segments and instantiate the legs

				const baseboard = addBaseboard();
				// 2. find out the envelope rectangle around the legs

				const startPoint = getPointAtXY(firstSegment.additionalData.displaceOriginX + positionX, baseboardReferenceDepth - baseboardOffsetFrontY).add(new Vector3(0, plintAreaHeightSpace, 0));
				const endPoint = getPointAtXY(firstSegment.additionalData.displaceOriginX + positionX + splitLength, baseboardReferenceDepth - baseboardOffsetFrontY).add(new Vector3(0, plintAreaHeightSpace, 0));
				// 3. if toekick, instantiate it and reduce the baseboard size accordingly

				const directionEquation = new LineSegmentEquation(startPoint, endPoint, false);
				const transformation = directionEquation.getTransformationMatrixToStartPoint();
				baseboard.setOrigin(transformation);


				baseboard.mod_BaseboardLength = splitLength;
				baseboard.mod_BaseboardDepth = baseboardDepth;
				baseboard.mod_BaseboardThk = this.mod_BaseboardThk;
				positionX += splitLength;
			}

			// store baseboardDepth to the contours
			segments.forEach(seg => seg.additionalData.baseboardDepth = baseboardDepth);




		} // end of loop through the baseboard starting segments

		// ===================================================
		//	   Solve TOEKICKS
		// ===================================================

		for (const firstSegment of toekickStartingSegments) {

			const lastSegment = startToLastToekickSegmentMap.get(firstSegment)!;

			/** Along front edge to the right */
			const xAxis = new LineSegmentEquation(firstSegment.getCornerPoint(CKind.Left, CKind.Front)!.toVector3Extended(), firstSegment.getCornerPoint(CKind.Right, CKind.Front)!.toVector3Extended()).toFootprintEquation();
			/** Along left edge rearward */
			const yAxis = new LineSegmentEquation(xAxis.start, firstSegment.getCornerPoint(CKind.Left, CKind.Back)!.toVector3Extended()).toFootprintEquation();
			const getPointAtXY = (offsetX: number, offsetY: number) => {
				return xAxis.getPointAt(offsetX).add(yAxis.direction.scale(offsetY));
			}

			/** Total space for the plinth area - legs and the baseboard must fit into this space */
			const plintAreaHeightSpace = firstSegment.generationContour.position.y + firstSegment.generationContour.height;

			/** All segments, sorted from left to the right, starting with the starting segment */
			const segments: LongPartSegmentTypeAlias[] = [];
			// Crawler loop from the first segment to the last segment; crawl into the right neighbours
			let current: LongPartSegmentTypeAlias | null = firstSegment;
			while (current !== null) {
				segments.push(current);
				const next: LongPartSegmentTypeAlias | null = current.additionalData.rightToekickNeighbour;
				current = next;
			}

			// 4. instantiate the toekicks
			// toekicks will wrap the baseboard and legs
			// side toekicks are first, because they will make the front one longer by the side toekick thickness, so that they are covered


			// Collect LineFronts values from the segments to know where the legs to attach the toekicks to are.
			const lineFronts = segments
				.filter(seg => seg.additionalData.legPositions.LineFront !== null)
				.map(seg => seg.additionalData.legPositions.LineFront);
			if (lineFronts.length === 0) {
				logWarning('No leg front positions found while creating toekicks. Toekick Y position will be set to -mod_ToekickThk.');
				lineFronts.push(-this.mod_ToekickThk);
			}

			const LineFront = Math.min(...lineFronts);

			// baseboard always has a toekick ... otherwise link it to an attribute
			const hasFrontToekick = true;
			const hasLeftToekick = (
				hasFrontToekick
				// visible on left side
				&& firstSegment.getAttributeOrDefault('mod_PlinthAreaVisLeft', 0)
				// not perpendicular part of right corner
				&& (firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, '') === mr_CornerunitStraight && firstSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined direction') === 'Right' && firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, '') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR) === false
				// not straight part of left corner (that wouldn't be visible)
				&& (firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, '') === mr_CornerunitStraight && firstSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined direction') === 'Left' && firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, '') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT) === false
				// fillers never have a side toekick (nowhere to attach it)
				&& (firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, '') !== 'mf_Front01')
			);
			// analogously for the right side
			const hasRightToekick = (
				hasFrontToekick
				&& lastSegment.getAttributeOrDefault('mod_PlinthAreaVisRight', 0)
				&& (lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, '') === mr_CornerunitStraight && lastSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined direction') === 'Left' && lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, '') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR) === false
				&& (lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, '') === mr_CornerunitStraight && lastSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined direction') === 'Right' && lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, '') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT) === false
				&& (lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, '') !== 'mf_Front01')
			);


			if (hasLeftToekick) {
				// stretch start of the front toekick to cover the left toekick
				if (hasFrontToekick) {
					firstSegment.additionalData.displaceOriginX -= this.mod_ToekickThk;
					firstSegment.additionalData.segmentLength += this.mod_ToekickThk;
				}

				const leftToekickLength = firstSegment.additionalData.baseboardDepth ?? firstSegment.additionalData.segmentDepth ?? 999; // fallback to depth if baseboard depth is not defined yet; this however should not happen, because if there is not the baseboard, then we should not get to this block at all

				const leftToekickPosX = firstSegment.additionalData.displaceOriginX + this.mod_ToekickThk;
				const leftToekickPosY = LineFront;

				const leftToekickStartPoint = getPointAtXY(leftToekickPosX, leftToekickLength + leftToekickPosY);
				const leftToekickEndPoint = getPointAtXY(leftToekickPosX, leftToekickPosY);
				const leftToekick = addToekick(leftToekickStartPoint, leftToekickEndPoint);
				leftToekick.mod_ToekickThk = this.mod_ToekickThk;
				leftToekick.mod_ToekickHeight = plintAreaHeightSpace;
			}

			if (hasRightToekick) {
				// stretch end of the front toekick to cover the right toekick
				if (hasFrontToekick) {
					lastSegment.additionalData.segmentLength += this.mod_ToekickThk;
				}

				const rightToekickLength = lastSegment.additionalData.baseboardDepth ?? lastSegment.additionalData.segmentDepth ?? 999; // fallback to depth if baseboard depth is not defined yet; this however should not happen, because if there is not the baseboard, then we should not get to this block at all

				const rightToekickPosX = firstSegment.additionalData.displaceOriginX + segments.reduce((acc, seg) => acc + seg.additionalData.segmentLength, 0) - this.mod_ToekickThk;
				const rightToekickPosY = LineFront;

				const rightToekickStartPoint = getPointAtXY(rightToekickPosX, rightToekickPosY);
				const rightToekickEndPoint = getPointAtXY(rightToekickPosX, rightToekickPosY + rightToekickLength);
				const rightToekick = addToekick(rightToekickStartPoint, rightToekickEndPoint);
				rightToekick.mod_ToekickThk = this.mod_ToekickThk;
				rightToekick.mod_ToekickHeight = plintAreaHeightSpace;
			}

			if (hasFrontToekick) {
				const toekickSegments = segments.map(seg => seg.additionalData.segmentLength);
				const toekickSegmentGroups = GlobalFunc.process_PanelLengthSplitByMaximum(toekickSegments, toekickMaximumLength);

				let runningPosX = firstSegment.additionalData.displaceOriginX;

				for (let i = 1; i < toekickSegmentGroups.length; i++) {
					const toekickSegmentStartIndex = toekickSegmentGroups[i - 1];
					const toekickSegmentEndIndex = toekickSegmentGroups[i];

					const toekickStartCoordinateX = runningPosX;
					const toekickLength = segments.slice(toekickSegmentStartIndex, toekickSegmentEndIndex).reduce((acc, seg) => acc + seg.additionalData.segmentLength, 0);

					const frontToekickPosY = LineFront;
					const frontToekickStartPoint = getPointAtXY(toekickStartCoordinateX, frontToekickPosY);
					const frontToekickEndPoint = getPointAtXY(toekickStartCoordinateX + toekickLength, frontToekickPosY);
					const frontToekick = addToekick(frontToekickStartPoint, frontToekickEndPoint);
					frontToekick.mod_ToekickThk = this.mod_ToekickThk;
					frontToekick.mod_ToekickHeight = plintAreaHeightSpace;
					runningPosX += toekickLength;


				}

			}

		}

		// ###############################################################
		// ################### END CUSTOM SCRIPTS ########################
		// ###############################################################
	}
	catch (error) {
		if (error instanceof Error) {
			logError(error.message + "\n" + error.stack);
		} else {
			logError(JSON.stringify(error, null, 4));
		}
	}
	finally {
		internal_leaveModuleAfterDataCompletion();
	}
}
// ---------------------------------------------------------------
export function mr_PlinthAreaBaseboard_calculateContainerModules(this: ccm_mr_PlinthAreaBaseboard): void {
	internal_enterCalculateContainerModules('mr_PlinthAreaBaseboard', this._id);
	try {
		// ###############################################################
		// ####################### CUSTOM SCRIPTS ########################
		// ###############################################################
		// CUSTOMSCRIPT_mr_PlinthAreaBaseboard_CALCULATECONTAINERMODULES

		// ###############################################################
		// ################### END CUSTOM SCRIPTS ########################
		// ###############################################################
	}
	catch (error) {
		if (error instanceof Error) {
			logError(error.message + "\n" + error.stack);
		} else {
			logError(JSON.stringify(error, null, 4));
		}
	}
	finally {
		internal_leaveCalculateContainerModules();
	}
}
// ---------------------------------------------------------------
export function mr_PlinthAreaBaseboard_manufacturerDataCompletion(this: dc_mr_PlinthAreaBaseboard): void {
	internal_enterModuleManufacturerDataCompletion('mr_PlinthAreaBaseboard', this._id);
	try {
		// ###############################################################
		// ####################### CUSTOM SCRIPTS ########################
		// ###############################################################
		// CUSTOMSCRIPT_mr_PlinthAreaBaseboard_MANUFACTURERDATACOMPLETION

		// ###############################################################
		// ################### END CUSTOM SCRIPTS ########################
		// ###############################################################
	}
	catch (error) {
		if (error instanceof Error) {
			logError(error.message + "\n" + error.stack);
		} else {
			logError(JSON.stringify(error, null, 4));
		}
	}
	finally {
		internal_leaveModuleManufacturerDataCompletion();
	}
}
