import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars, internal_enterModulePrepareContext, internal_leaveModulePrepareContext } from '../internal/logging'

//#region Imports
import { cbp_mr_StorageunitSingle, dc_mr_StorageunitSingle, adc_mr_StorageunitSingle, ccm_mr_StorageunitSingle, pc_mr_StorageunitSingle } from '../internal/modules/mr_StorageunitSingle'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_Storageunit01, OD_M_mc_Storageunit01 } from '../internal/modules/mc_Storageunit01'
import { dc_mf_Drawer, OD_M_mf_Drawer } from '../internal/modules/mf_Drawer'
import { dc_mc_PlinthArea01, OD_M_mc_PlinthArea01 } from '../internal/modules/mc_PlinthArea01'
import { dc_mf_Fliplift, OD_M_mf_Fliplift } from '../internal/modules/mf_Fliplift'
import { dc_mf_Door, OD_M_mf_Door } from '../internal/modules/mf_Door'
import { dc_mf_Oven, OD_M_mf_Oven } from '../internal/modules/mf_Oven'
import { dc_mf_Fridge, OD_M_mf_Fridge } from '../internal/modules/mf_Fridge'
import { dc_mf_RackArea, OD_M_mf_RackArea } from '../internal/modules/mf_RackArea'
import { dc_mf_Fixedfront, OD_M_mf_Fixedfront } from '../internal/modules/mf_Fixedfront'
import { dc_mf_Hob, OD_M_mf_Hob } from '../internal/modules/mf_Hob'
import { dc_mf_Sink, OD_M_mf_Sink } from '../internal/modules/mf_Sink'
import { dc_mf_Pullout, OD_M_mf_Pullout } from '../internal/modules/mf_Pullout'
import { dc_mf_PantryPullout, OD_M_mf_PantryPullout } from '../internal/modules/mf_PantryPullout'
import { dc_md_FrontPlaceholder, OD_M_md_FrontPlaceholder } from '../internal/modules/md_FrontPlaceholder'
import { dc_mc_Filler01, OD_M_mc_Filler01 } from '../internal/modules/mc_Filler01'
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
import { Dock, IDockingInfo, FaceKey, IPartBase, MatrixHelper, ModuleHelper, PartHelper, IContextData } from '../internal/mod-base'
declare function uuidv4(): string;
//#endregion Imports

export function mr_StorageunitSingle_createBuildPlan(this: cbp_mr_StorageunitSingle): void {
	internal_enterModuleCreateBuildPlan('mr_StorageunitSingle', this._id);
	try {
		// ###############################################################
		// ####################### CUSTOM SCRIPTS ########################
		// ###############################################################
		// CUSTOMSCRIPT_mr_StorageunitSingle_CREATEBUILDPLAN

		// Schuler Consulting
		// Create: February 2025
		// By Ludwig Weber
		// Purpose: CabinetLibrary
		//
		// Description:
		// Insert the contours for the generation modules
		//
		// Revisions:
		//
		//======================================================================

		//======================================================================
		// Calculations
		//======================================================================

		// Read the information for the surroundings (allow the automatism)
		const storageunitInfo = GlobalFunc.process_ParseSuroundingInfo(this.mod_InformationList[0]);
		const autoFillerLeft = storageunitInfo.AutoFillerLeft;
		const wallDistanceLeft = storageunitInfo.WallDistanceLeft;
		const autoFillerRight = storageunitInfo.AutoFillerRight;
		const wallDistanceRight = storageunitInfo.WallDistanceRight;

		// Check all the added Information of CountertopInfo
		let cutout = 0;
		let strCutoutData = "";
		this.mod_CountertopInfo.forEach((entry, index) => {
			try {
				const obj = JSON.parse(entry);

				// If it is a hob correct the position in x-direction
				if (obj?.Supplier != null) {
					obj.CutPosX += this.mod_Width / 2;
					strCutoutData = JSON.stringify(obj);
					cutout = 1;
				}

			} catch (e) {
				console.error(`Error parsing mod_CountertopInfo[${index}]:`, e);
			}
		});

		// Create a JSON-object to provide it as attribute for the contour
		const countertopInfo = {
			Element: "storageUnit",
			Width: this.mod_Width,
			Depth: this.mod_Depth,
			DistanceWall: this.mod_CarcaseDistanceWall,
			Cutout: cutout,
			CutoutData: strCutoutData
		}

		const strJson = JSON.stringify(countertopInfo);

		const {
			CONTOUR_ATTRIBUTE_ADD_TOEKICK,
			CONTOUR_ATTRIBUTE_ADD_BASEBOARD,
			CONTOUR_ATTRIBUTE_OWNER_TYPE,
			mr_StorageunitSingle,
		} = GlobalFunc.process_MathLongparts();

		const mc_Storageunit01 = this.m.find(p => p instanceof OD_M_mc_Storageunit01) as any;

		const PlinthAreaType = this.mod_PlinthAreaDesign_matrix.PlinthAreaType ?? 'None';
		const plinthAreaHeight = (PlinthAreaType !== 'None' ? (this.mod_PlinthAreaHeight ?? 0) : 0);
		const inSlopedCeilingArea = mc_Storageunit01.mod_SlopeAngle > 0;
		const carcaseTopY = mc_Storageunit01.mod_CarcaseHeight + plinthAreaHeight;

		//======================================================================
		// Countertop
		//======================================================================

		const countertopContourBounds = {
			xMin: autoFillerLeft ? -wallDistanceLeft : 0,
			xMax: autoFillerRight ? this.mod_Width + wallDistanceRight : this.mod_Width,
			zMin: Math.min(0, -this.mod_CarcaseDistanceWall),
			zMax: this.mod_Depth,
		};

		const contourCountertop = Contour
			.M(countertopContourBounds.xMin, countertopContourBounds.zMin)
			.L(CKind.Back, countertopContourBounds.xMax, countertopContourBounds.zMin)
			.L(CKind.Right, countertopContourBounds.xMax, countertopContourBounds.zMax)
			.L(CKind.Front, countertopContourBounds.xMin, countertopContourBounds.zMax)
			.Z(CKind.Left)
			;
		// This actually decides if the countertop should really be added.
		contourCountertop.attributes
			.set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_StorageunitSingle)
			.set('mod_CarcaseVisLeft', storageunitInfo.CarcaseVisLeft)
			.set('mod_CarcaseVisRight', storageunitInfo.CarcaseVisRight)
			.set('CountertopInfo', strJson)
			;


		// TODO: The contour should be added always, because it is needed for further collision checks.
		if (this.mod_CreateCountertop) {
			this.addGenerationContour(
				GenerationMethod.Countertop,
				carcaseTopY,
				contourCountertop,
			);
		}

		//======================================================================
		// Backsplash
		//======================================================================
		// The same data as the countertop. The backsplash needs to be at the rear edge on the top of the countertop.

		if (this.mod_CreateBacksplash) {
			const backsplashTopY = carcaseTopY + (this.mod_CreateCountertop ? this.mod_CountertopThk : 0);
			this.addGenerationContour(
				GenerationMethod.Backsplash,
				backsplashTopY,
				contourCountertop,
			);
		}

		//======================================================================
		// Paneltop or Ceiling Filler
		//======================================================================

		if (this.mod_CreatePaneltop && this.mod_CreateCeilingFiller) {
			logError(`In mr_StorageunitSingle ${this._id}: Both mod_CreatePaneltop and mod_CreateCeilingFiller are activated. This can lead to errors in the generation. Please only activate one of them.`);
		}
		else if (this.mod_CreatePaneltop || this.mod_CreateCeilingFiller) {

			const topPanelDepth = inSlopedCeilingArea ? this.mod_TopDepth : this.mod_Depth;

			const paneltopContourBounds = {
				xMin: countertopContourBounds.xMin,
				xMax: countertopContourBounds.xMax,
				zMin:
					inSlopedCeilingArea
						? (
							+	this.mod_Depth
							- topPanelDepth
						)
						: (
							countertopContourBounds.zMin
						),
				zMax: (
					+	this.mod_Depth
				),
			};

			const contourPaneltop = Contour
				.M(countertopContourBounds.xMin, paneltopContourBounds.zMin)
				.L(CKind.Back, paneltopContourBounds.xMax, paneltopContourBounds.zMin)
				.L(CKind.Right, paneltopContourBounds.xMax, paneltopContourBounds.zMax)
				.L(CKind.Front, paneltopContourBounds.xMin, paneltopContourBounds.zMax)
				.Z(CKind.Left)
				;

			contourPaneltop.attributes
				.set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_StorageunitSingle)
				.set('mod_CeilingAreaVisLeft', storageunitInfo.CeilingAreaVisLeft)
				.set('mod_CeilingAreaVisRight', storageunitInfo.CeilingAreaVisRight)
				.set('mod_TypeElement', this.mod_TypeElement ?? 'None')
				;

			const ceilingContourType = this.mod_CreatePaneltop ? GenerationMethod.Paneltop : GenerationMethod.CeilingFiller;

			this.addGenerationContour(
				ceilingContourType,
				carcaseTopY,
				contourPaneltop,
			);

		}

		//======================================================================
		// Fingergrip (gola)
		//======================================================================

		if (this.mod_CreateFingergrip) {

			// Fingergrip contour bounds
			const fingergripContourBounds = {
				xMin: 0,
				xMax: this.mod_Width,
				zMin: Math.min(0, -this.mod_CarcaseDistanceWall),
				zMax: this.mod_Depth,
			};

			// Adjust bounds when the corresponding side is blocked
			if (storageunitInfo.CarcaseVisLeft) {
				fingergripContourBounds.xMin += this.mod_SidepanelleftThk;
			}

			if (storageunitInfo.CarcaseVisRight) {
				fingergripContourBounds.xMax -= this.mod_SidepanelrightThk;
			}

			if (mc_Storageunit01) {
				const middleFingergripPositions = [
					mc_Storageunit01.mod_FingergripPos1 ?? 0,
					mc_Storageunit01.mod_FingergripPos2 ?? 0,
					mc_Storageunit01.mod_FingergripPos3 ?? 0,
					mc_Storageunit01.mod_FingergripPos4 ?? 0,
					mc_Storageunit01.mod_FingergripPos5 ?? 0,
				].filter(p => p !== undefined && p > 0) as number[];

				let fingergripTopIndex = -1;
				if (mc_Storageunit01.mod_FingergripTop) {
					fingergripTopIndex = middleFingergripPositions.length;
					middleFingergripPositions.push(mc_Storageunit01.mod_CarcaseHeight - mc_Storageunit01.mod_FingergripType_matrix.LShapeHeight);
				}

				middleFingergripPositions.forEach((pos, idx) => {

					const fingergripContour = Contour
						.M(fingergripContourBounds.xMin, fingergripContourBounds.zMin)
						.L(CKind.Back, fingergripContourBounds.xMax, fingergripContourBounds.zMin)
						.L(CKind.Right, fingergripContourBounds.xMax, fingergripContourBounds.zMax)
						.L(CKind.Front, fingergripContourBounds.xMin, fingergripContourBounds.zMax)
						.Z(CKind.Left)
						;

					fingergripContour.attributes
						.set('mod_FingergripPostype', idx === fingergripTopIndex ? 'Top' : 'Middle')
						.set('mod_FingergripType', mc_Storageunit01.mod_FingergripType ?? 'None')
						;

					this.addGenerationContour(
						GenerationMethod.Fingergrip,
						pos + plinthAreaHeight,
						fingergripContour,
					);
				});

			}

		}

		//======================================================================
		// Toekick and Baseboard
		//======================================================================
		// Seems sufficient without the isOnFloor check, but can be added later if needed.
		// const isOnFloor = this.getFullOrigin()._y < 1;
		const createToekick =
			// THIS CONDITION MUST BE IN PLACE !!!!!
			// WITHOUT THE WALL UNITS CREATE ERRORS !!!!!
			(this.mod_CreateToekick ?? false)
			// && isOnFloor
			&& this.mod_PlinthAreaDesign_matrix.PlinthAreaType !== 'None'
			;
		const createBaseboard = this.mod_CreateToekick && this.mod_PlinthAreaDesign_matrix.PlinthAreaType === 'Baseboard+Legs';

		// Use the legs provided by the plinth area, only add toekick to it
		if (createBaseboard) {
			// Baseboard Contour
			const mod_PlinthAreaVisLeft = storageunitInfo.PlinthAreaVisLeft === 1;
			const mod_PlinthAreaVisRight = storageunitInfo.PlinthAreaVisRight === 1;
			const baseboardContourBounds = {
				xMin: 0,
				xMax: this.mod_Width,
				zMin: 0,
				zMax: this.mod_Depth,
			};

			const contourBaseboard = Contour
				.M(baseboardContourBounds.xMin, baseboardContourBounds.zMin)
				.L(CKind.Back, baseboardContourBounds.xMax, baseboardContourBounds.zMin)
				.L(CKind.Right, baseboardContourBounds.xMax, baseboardContourBounds.zMax)
				.L(CKind.Front, baseboardContourBounds.xMin, baseboardContourBounds.zMax)
				.Z(CKind.Left)
				;

			contourBaseboard.attributes
				.set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_StorageunitSingle)
				.set(CONTOUR_ATTRIBUTE_ADD_BASEBOARD, 1)
				.set(CONTOUR_ATTRIBUTE_ADD_TOEKICK, 1)
				.set('mod_PlinthAreaVisLeft', storageunitInfo.PlinthAreaVisLeft)
				.set('mod_PlinthAreaVisRight', storageunitInfo.PlinthAreaVisRight)
				.set('mod_TypeElement', this.mod_TypeElement)
				.set('mod_PlinthAreaPosLeftMatrix', this.mod_PlinthAreaPosLeftMatrix)
				.set('mod_PlinthAreaPosRightMatrix', this.mod_PlinthAreaPosRightMatrix)
				.set('mod_PlinthAreaPosFrontMatrix', this.mod_PlinthAreaPosFrontMatrix)
				.set('mod_PlinthAreaPosBackMatrix', this.mod_PlinthAreaPosBackMatrix)
				;

			this.addGenerationContour(
				GenerationMethod.PlinthAreaBaseboard,
				plinthAreaHeight,
				contourBaseboard,
			);

		}
		else if (createToekick) {
			// Toekich Contour
			// Retrieve the positions of the legs
			let legPositionInfo = {
				LineLeft: 0,
				LineRight: 0,
				LineFront: 0,
				LineBack: 0
			};

			try {
				const parsed = JSON.parse(this.mod_PlinthAreaPositionInfo[0]);

				if (parsed && typeof parsed === "object") {
					legPositionInfo = {
						LineLeft: parsed.LineLeft ?? 0,
						LineRight: parsed.LineRight ?? 0,
						LineFront: parsed.LineFront ?? 0,
						LineBack: parsed.LineBack ?? 0
					};
				}
				else {
					logError(`Invalid legPositionInfo object in ${this._id}`);
				}
			}
			catch {
				logError(`Could not parse this.mod_PlinthAreaPositionInfo[0] in mr_StorageunitStraight ${this._id}. Toekick will not be recessed correctly.`);
			}

			const mod_PlinthAreaVisLeft = storageunitInfo.PlinthAreaVisLeft === 1;
			const mod_PlinthAreaVisRight = storageunitInfo.PlinthAreaVisRight === 1;
			const toekickContourBounds = {
				xMin: autoFillerLeft ? -wallDistanceLeft : (mod_PlinthAreaVisLeft ? legPositionInfo.LineLeft : 0),
				xMax: autoFillerRight ? this.mod_Width + wallDistanceRight : this.mod_Width - (mod_PlinthAreaVisRight ? legPositionInfo.LineRight : 0),
				zMin: legPositionInfo.LineBack,
				zMax: this.mod_Depth - legPositionInfo.LineFront,
			};

			if (plinthAreaHeight > 0) {

				const contourToekick = Contour
					.M(toekickContourBounds.xMin, toekickContourBounds.zMin)
					.L(CKind.Back, toekickContourBounds.xMax, toekickContourBounds.zMin)
					.L(CKind.Right, toekickContourBounds.xMax, toekickContourBounds.zMax)
					.L(CKind.Front, toekickContourBounds.xMin, toekickContourBounds.zMax)
					.Z(CKind.Left)
					;

				contourToekick.attributes
					.set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_StorageunitSingle)
					.set(CONTOUR_ATTRIBUTE_ADD_TOEKICK, createToekick ? 1 : 0)
					.set('mod_PlinthAreaVisLeft', storageunitInfo.PlinthAreaVisLeft)
					.set('mod_PlinthAreaVisRight', storageunitInfo.PlinthAreaVisRight)
					;

				this.addGenerationContour(
					GenerationMethod.Toekick,
					plinthAreaHeight,
					contourToekick,
				);
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
		internal_leaveModuleCreateBuildPlan();
	}
}
// ---------------------------------------------------------------
export function mr_StorageunitSingle_afterDataCompletion(this: adc_mr_StorageunitSingle): void {
	internal_enterModuleAfterDataCompletion('mr_StorageunitSingle', this._id);
	try {
		// ###############################################################
		// ####################### CUSTOM SCRIPTS ########################
		// ###############################################################
		// CUSTOMSCRIPT_mr_StorageunitSingle_AFTERDATACOMPLETION

		// Schuler Consulting
		// Create: Okt 2022
		// By Ludwig Weber
		// Purpose: CabinetLibrary
		//
		// Description:
		// AfterDataCompletion of mr_StorageUnit_Single
		// Add the carcase to the root-module
		// Add the PlinthArea to the root-module
		// Cycle through the childs and manage the front elements
		// Cycle through the childs and search for fingergrip
		// Cycle through the childs get backwall information
		//
		// Revisions:
		// July 2024
		// by Henning Wiesbrock
		// Add mf_RackArea and function process_RackAreaOversizeCarcase
		//
		// April 2025
		// By Ludwig Weber
		// Add the endless cabinets
		// Add the automatism for the sloped ceiling
		// Add oven, hob and fridge management
		//===================================================


		//===================================================
		//   Add function process_RackAreaOversizeCarcase
		//===================================================

		let RackAreaOversize = GlobalFunc.process_RackAreaOversizeCarcase(this);

		//===================================================
		//          Add the carcase to the root-module
		//===================================================

		// Add the module
		//----------------------------------------------------

		let carc = this.addOD_M_mc_Storageunit01(0);

		// StartPosition of Cabinet
		let StartPosCabinet = this.mod_PlinthAreaDesign_matrix.PlinthAreaType !== 'None' ? this.mod_PlinthAreaHeight! : 0;

		// Dimensioning variables
		let angle = 0;
		let wallAngle = 0;
		let backHeight = 0;
		let wallBackheight = 0;
		let height = this.mod_Height;
		let topDepth = this.mod_TopDepth;

		// Read data
		const surroundingContours = this.getRoomContours() ?? [];
		const articlePos = this.getArticlePos();

		// Article dimensions
		const articleDimension = {
			x: this.mod_Width ?? 0,
			y: this.mod_Height ?? 0,
			z: this.mod_Depth ?? 0
		};

		// Analyze surroundings
		//----------------------------------------------------	
		const surroundingAnalysis = GlobalFunc.process_AnalyzeArticleSurroundings(surroundingContours, articlePos, articleDimension);

		type VisibilityValue = 1 | 0;
		function resolveVisibility(selection: string, automaticValue: boolean): VisibilityValue {
			switch (selection) {
				case "Automatic":
					return automaticValue ? 1 : 0;

				case "Visible":
					return 1;

				case "NotVisible":
					return 0;

				default: {
					logError(`Unknown visibility selection: ${selection}`);
					return 0;
				}
			}
		}

		// Guard
		if (!surroundingAnalysis.dataComplete) {
			logInfo("Article surrounding analysis returned incomplete data.");
		}
		else {
			if (surroundingAnalysis.slopedCeiling && surroundingAnalysis.slopedCeilingDirection == "toBack") {
				wallAngle = surroundingAnalysis.slopedCeilingAngle;
				wallBackheight = surroundingAnalysis.slopedCeilingLevel;
			}
		}

		const isFirstElement = surroundingAnalysis.dataComplete ? surroundingAnalysis.firstElement : false;
		const isLastElement = surroundingAnalysis.dataComplete ? surroundingAnalysis.lastElement : false;
		const disWallDisLeft = surroundingAnalysis.dataComplete ? surroundingAnalysis.distanceWallLeft : 999;
		const disWallDisRight = surroundingAnalysis.dataComplete ? surroundingAnalysis.distanceWallRight : 999;


		// Understand if we are close to the wall with this cabinet
		const isNearWallLeft = disWallDisLeft >= 0 && disWallDisLeft <= 200;
		const isNearWallRight = disWallDisRight >= 0 && disWallDisRight <= 200;

		// Flag for finishing sidepanels and add the closing parts at the toekick and ceiling filler
		const autoLeft = isFirstElement && !isNearWallLeft;
		const autoRight = isLastElement && !isNearWallRight;

		// Flag to add the filler
		const autoFillerLeft = isFirstElement && isNearWallLeft;
		const autoFillerRight = isLastElement && isNearWallRight;

		// Create the object for the automatism and visiblity control
		const storageunitInfo = {
			PlinthAreaVisLeft: resolveVisibility(this.mod_PlinthAreaVisLeftSelection, autoLeft),
			PlinthAreaVisRight: resolveVisibility(this.mod_PlinthAreaVisRightSelection, autoRight),
			CeilingAreaVisLeft: resolveVisibility(this.mod_CeilingAreaVisLeftSelection, autoLeft),
			CeilingAreaVisRight: resolveVisibility(this.mod_CeilingAreaVisRightSelection, autoRight),
			CarcaseVisLeft: resolveVisibility(this.mod_CarcaseVisLeftSelection, autoLeft),
			CarcaseVisRight: resolveVisibility(this.mod_CarcaseVisRightSelection, autoRight),
			AutoFillerLeft: autoFillerLeft,
			AutoFillerRight: autoFillerRight,
			WallDistanceLeft: disWallDisLeft,
			WallDistanceRight: disWallDisRight
		};
		this.mod_InformationList[0] = JSON.stringify(storageunitInfo);

		// Automatic filler and upright
		//----------------------------------------------------	

		if (autoFillerLeft) {
			const filler = this.addOD_M_mc_Filler01();
			filler.mod_FrontPosStart = this.mod_PlinthAreaHeight;
			filler.mod_Direction = 'Left';
			filler.mod_FillerHardware = 'Bracket01';
			filler.mod_FillerType = 'LShape';
			filler.mod_TypeElement = 'Filler';
			filler.mod_Width = disWallDisLeft;

			filler.setOrigin(-disWallDisLeft, 0, 0)
		}

		if (autoFillerRight) {
			const filler = this.addOD_M_mc_Filler01();
			filler.mod_FrontPosStart = this.mod_PlinthAreaHeight;
			filler.mod_Direction = 'Left';
			filler.mod_FillerHardware = 'Bracket01';
			filler.mod_FillerType = 'LShape';
			filler.mod_TypeElement = 'Filler';
			filler.mod_Width = disWallDisRight;

			filler.setOrigin(this.mod_Width, 0, 0)
		}

		// Calculate the dimension logic for sloped ceiling
		//----------------------------------------------------	
		if (this.mod_SlopedCeilingDimensionLogic_matrix.UseWallData) { // Use the Wall data
			if (this.mod_SlopedCeilingDimensionLogic_matrix.Height == 'Max') { //Calculate the maximum height
				angle = wallAngle;
				backHeight = wallBackheight - StartPosCabinet - this.g.basic_SlopedCeilingHeightReduction;
			}
			else if (this.mod_SlopedCeilingDimensionLogic_matrix.Height == 'User' && StartPosCabinet + this.mod_Height > wallBackheight) { // Calculate the height based on the user height definition (only if it touches the sloped ceiling)
				angle = wallAngle;
				backHeight = wallBackheight - StartPosCabinet - this.g.basic_SlopedCeilingHeightReduction;
			}
			else {
				angle = 0
				backHeight = this.mod_BackHeight - StartPosCabinet;
			}
		}

		// Data completly defined by user
		else {
			angle = this.mod_SlopeAngle
			backHeight = this.mod_BackHeight - StartPosCabinet;
		}

		if (angle != 0) { // It's a SlopedCeiling Cabinet
			// Calculate height and top depth using maximum height possible
			let maxheight = GlobalFunc.find_CarcaseSlopedCeilingDimension(this.mod_SlopedCeilingConstruction, 'BasedInTopDepth').Height(this, backHeight, angle);
			let maxheightTopDepth = GlobalFunc.find_CarcaseSlopedCeilingDimension(this.mod_SlopedCeilingConstruction, 'BasedInTopDepth').TopDepth(this, backHeight, angle);

			// Calculate the Height
			height = GlobalFunc.find_CarcaseSlopedCeilingDimension(this.mod_SlopedCeilingConstruction, this.mod_SlopedCeilingDimensionLogic_matrix.DimensionLogic).Height(this, backHeight, angle);

			// Calculate the Top Depth
			topDepth = GlobalFunc.find_CarcaseSlopedCeilingDimension(this.mod_SlopedCeilingConstruction, this.mod_SlopedCeilingDimensionLogic_matrix.DimensionLogic).TopDepth(this, backHeight, angle);

			if (height > maxheight) { // If the height is bigger than the maximum height, we limit the cabinet to the maximum height
				height = maxheight;
				topDepth = maxheightTopDepth;
			}
			height != this.mod_Height ? logWarning('Automatic adjustment: Carcase height is now ' + height + ' instead of ' + this.mod_Height) : '';
			topDepth != this.mod_TopDepth ? logWarning('Automatic adjustment: Top depth is now ' + topDepth + ' instead of ' + this.mod_TopDepth) : '';

			// Read Settings table
			let slopedCeilingSettings = GlobalFunc.find_SlopedCeilingSettings(this.mod_SlopedCeilingConstruction!);

			// Adjust CarcaseConnectionLeftBtm
			if (slopedCeilingSettings.CarcaseConnectionLeftBtm != this.mod_CarcaseConnectionLeftBtm) {
				logWarning('Automatic adjustment: Carcase connection LeftBtm is now ' + slopedCeilingSettings.CarcaseConnectionLeftBtm + ' instead of ' + this.mod_CarcaseConnectionLeftBtm);
				carc.mod_CarcaseConnectionLeftBtm = slopedCeilingSettings.CarcaseConnectionLeftBtm;
			}

			// Adjust CarcaseConnectionLeftTop
			if (slopedCeilingSettings.CarcaseConnectionLeftTop != this.mod_CarcaseConnectionLeftTop) {
				logWarning('Automatic adjustment: Carcase connection LeftTop is now ' + slopedCeilingSettings.CarcaseConnectionLeftTop + ' instead of ' + this.mod_CarcaseConnectionLeftTop);
				carc.mod_CarcaseConnectionLeftTop = slopedCeilingSettings.CarcaseConnectionLeftTop;
			}

			// Adjust CarcaseConnectionRightBtm
			if (slopedCeilingSettings.CarcaseConnectionRightBtm != this.mod_CarcaseConnectionRightBtm) {
				logWarning('Automatic adjustment: Carcase connection RightBtm is now ' + slopedCeilingSettings.CarcaseConnectionRightBtm + ' instead of ' + this.mod_CarcaseConnectionRightBtm);
				carc.mod_CarcaseConnectionRightBtm = slopedCeilingSettings.CarcaseConnectionRightBtm;
			}

			// Adjust CarcaseConnectionRightTop
			if (slopedCeilingSettings.CarcaseConnectionRightTop != this.mod_CarcaseConnectionRightTop) {
				logWarning('Automatic adjustment: Carcase connection RightTop is now ' + slopedCeilingSettings.CarcaseConnectionRightTop + ' instead of ' + this.mod_CarcaseConnectionRightTop);
				carc.mod_CarcaseConnectionRightTop = slopedCeilingSettings.CarcaseConnectionRightTop;
			}

			// Adjust CarcaseShelftopConstruction
			if (slopedCeilingSettings.CarcaseShelftopConstruction != this.mod_CarcaseShelftopConstruction) {
				logWarning('Automatic adjustment: Carcase Shelf top construction is now ' + slopedCeilingSettings.CarcaseShelftopConstruction + ' instead of ' + this.mod_CarcaseShelftopConstruction);
				carc.mod_CarcaseShelftopConstruction = slopedCeilingSettings.CarcaseShelftopConstruction;
			}
		}

		// Calculation of the carcase width and starting Position (Endless cabinets)
		//----------------------------------------------------

		function GetSideAdjustment(type: string, thickness: number): number {
			switch (type) {
				case 'OutSp':
				case 'NoSpAtOutSpOversized':
					return 0;
				case 'NoSpAtOutSp':
					return thickness;
				case 'NoSpAtMiSp':
				case 'MiSp':
					return thickness / 2;
				default:
					return 0;
			}
		}

		function GetCarcaseMovement(leftType: string, leftThk: number): number {
			switch (leftType) {
				case 'MiSp':
				case 'NoSpAtMiSp':
					return -leftThk / 2;
				case 'NoSpAtOutSp':
					return -leftThk;
				default:
					return 0;
			}
		}

		function CalculateCarcaseWidth(leftType: string, rightType: string, width: number, leftThk: number, rightThk: number): number {
			const leftAdjustment = GetSideAdjustment(leftType, leftThk);
			const rightAdjustment = GetSideAdjustment(rightType, rightThk);
			return width + leftAdjustment + rightAdjustment;
		}

		// Set the values to the relevant attributes of the carcase
		//----------------------------------------------------

		//let StartPosCabinet = this.mod_PlinthAreaDesign_matrix.PlinthAreaType !== 'None' ? this.mod_PlinthAreaHeight! : 0;
		let CarcaseMovement = GetCarcaseMovement(this.mod_SidepanelleftType, this.mod_SidepanelleftThk);

		carc.mod_CarcaseWidth = CalculateCarcaseWidth(this.mod_SidepanelleftType, this.mod_SidepanelrightType, this.mod_Width, this.mod_SidepanelleftThk, this.mod_SidepanelrightThk);
		carc.mod_CarcaseMovement = CarcaseMovement;
		carc.mod_CarcaseDepth = this.mod_Depth + RackAreaOversize;
		carc.mod_CarcaseHeight = height;
		carc.mod_TopDepth = topDepth;
		carc.mod_SlopeAngle = angle;
		carc.mod_BackHeight = backHeight;
		carc.mod_SidepanelleftType = this.mod_SidepanelleftType;
		carc.mod_SidepanelrightType = this.mod_SidepanelrightType;
		carc.mod_CarcaseId = 'Carcase_01';
		carc.mod_CarcaseVisLeft = storageunitInfo.CarcaseVisLeft === 1;
		carc.mod_CarcaseVisRight = storageunitInfo.CarcaseVisRight === 1;

		// Set origin of the carcase
		//----------------------------------------------------

		carc.setOrigin(CarcaseMovement, StartPosCabinet, 0);

		// Save origin in Attribute
		carc.mod_Originpos.push(CarcaseMovement);
		carc.mod_Originpos.push(StartPosCabinet);
		carc.mod_Originpos.push(0);

		//===================================================
		//          Cycle through the childs and manage the front elements
		//===================================================

		// Define variables
		let GlobalCount: number = 0;
		let LastFrontElem: number = 0;
		let LastFrontHeight: number = 0;
		let CountFingerGrip: number = 0;
		let FingergripBottom = false;
		let tmpGapMid: number = 0;
		let FingerGripLine: number = 0;
		let StartPos = this.mod_FrontPosStart + StartPosCabinet;
		let tmpLastStartPos: number[] = []; //Stores the position of each front
		tmpLastStartPos[0] = 0;
		let tmpLastGap: number[] = []; //Stores the gap between each fronts (either normal gap or fingergrip gap)
		tmpLastGap[0] = 0;
		let tmpLastFrontFingergrip: boolean[] = [false]; // Stores if the front has fingergrip
		tmpLastFrontFingergrip[0] = false;

		// Initialize fingergrip information for the carcase
		carc.mod_FingergripTop = false;
		carc.mod_FingergripQtyMiddle = 0;
		carc.mod_FingergripPos1 = 0;
		carc.mod_FingergripPos2 = 0;
		carc.mod_FingergripPos3 = 0;
		carc.mod_FingergripPos4 = 0;
		carc.mod_FingergripPos5 = 0;

		//Initialize Backwall constriuction and Backwall position
		carc.mod_CarcaseBackwallConstructionList[1] = this.mod_CarcaseBackwallConstruction!;
		carc.mod_BackwallPosList[1] = this.mod_BackwallPos!;

		//Initialize variables for Dividers
		let VertDividerType: string[] = [];
		let VertDividerFrontWidth: number[] = [];
		let VertDividerFrontName: string[] = [];

		// Define variable to change Shelffixed when Drawer above RackArea
		let FixedShelf: string = this.g.basic_RackAreaShelftopConstruction;

		//===================================================
		// Create Front ID and Count total quantities
		//===================================================

		const typeCounters = {
			Drawer: 0,
			Pullout: 0,
			PantryPullout: 0,
			Door: 0,
			Fliplift: 0,
			Fixedfront: 0,
			Oven: 0,
			Fridge: 0,
			RackArea: 0
		};

		this.m.forEach(p => {
			if (p instanceof OD_M_mf_Door) {
				p.mod_FrontId = 'Door_' + (++typeCounters.Door);
			} else if (p instanceof OD_M_mf_Fliplift) {
				p.mod_FrontId = 'Fliplift_' + (++typeCounters.Fliplift);
			} else if (p instanceof OD_M_mf_Drawer) {
				p.mod_FrontId = 'Drawer_' + (++typeCounters.Drawer);
			} else if (p instanceof OD_M_mf_Pullout) {
				p.mod_FrontId = 'Pullout_' + (++typeCounters.Pullout);
			} else if (p instanceof OD_M_mf_PantryPullout) {
				p.mod_FrontId = 'PantryPullout_' + (++typeCounters.PantryPullout);
			} else if (p instanceof OD_M_mf_Fixedfront) {
				p.mod_FrontId = 'Fixedfront_' + (++typeCounters.Fixedfront);
			} else if (p instanceof OD_M_mf_Oven) {
				p.mod_FrontId = 'Oven_' + (++typeCounters.Oven);
			} else if (p instanceof OD_M_mf_Fridge) {
				p.mod_FrontId = 'Door_' + (++typeCounters.Fridge);
			} else if (p instanceof OD_M_mf_RackArea) {
				p.mod_FrontId = 'RackArea_' + (++typeCounters.RackArea);
			}
		});

		const FrontClasses = [
			OD_M_mf_Door,
			OD_M_mf_Fliplift,
			OD_M_mf_Drawer,
			OD_M_mf_Pullout,
			OD_M_mf_PantryPullout,
			OD_M_mf_Oven,
			OD_M_mf_Fridge,
			OD_M_mf_RackArea,
			OD_M_mf_Fixedfront,
		];

		// Calculate opening depth of the drawers
		const DrawerOpenDepth = (this.mod_Depth - 100) / typeCounters.Drawer;
		let DrawerOpeningDepth = DrawerOpenDepth * typeCounters.Drawer;

		// Cycle
		this.m.forEach((p, i, arr) => {

			const prev = arr[i - 1];
			const next = arr[i + 1];
			const prevM = prev && FrontClasses.some(cls => prev instanceof cls) ? prev : undefined;
			const nextM = next && FrontClasses.some(cls => next instanceof cls) ? next : undefined;

			//===============================================================================================
			// Manage the hob
			//===============================================================================================

			if (p instanceof OD_M_mf_Hob) {

				// Movement in height
				p.setOrigin(this.mod_Width / 2, StartPosCabinet + this.mod_Height + this.mod_CountertopThk, this.mod_Depth + this.g.basic_CountertopOverhangFront);

				// Seal the hob
				let sealedHob = p.seal();

				// Height of the blocked area for the hob
				let hobHeightBlockedSpace = sealedHob.mod_HobInfo[0] - this.mod_CountertopThk;
				carc.mod_HobHeightBlockedSpace = hobHeightBlockedSpace;

				// Read the hob data (to provide it for the drawings via the contour)
				if (sealedHob.mod_CountertopInfo.length > 0 && sealedHob.mod_CountertopInfo[0] != null) {
					this.mod_CountertopInfo.push(sealedHob.mod_CountertopInfo[0]);
				}
			}

			//===============================================================================================
			// Manage the sink
			//===============================================================================================

			if (p instanceof OD_M_mf_Sink) {

				// Movement in height
				p.setOrigin(this.mod_Width / 2, StartPosCabinet + this.mod_Height + this.mod_CountertopThk, this.mod_Depth + this.g.basic_CountertopOverhangFront);

				// Seal the sink
				let sealedSink = p.seal();

				// Read sink data (to provide it for the drawings via the contour)
				if (sealedSink.mod_CountertopInfo.length > 0 && sealedSink.mod_CountertopInfo[0] != null) {
					this.mod_CountertopInfo.push(sealedSink.mod_CountertopInfo[0]);
				}
			}

			//===============================================================================================
			// Manage generic dimensions and gaps for all front elements
			//===============================================================================================

			if (p instanceof OD_M_mf_Oven) {
				tmpLastStartPos.push(StartPos - StartPosCabinet);
				tmpLastGap.push(this.mod_FrontGapHor / 2);
			}

			if (p instanceof OD_M_mf_Door || p instanceof OD_M_mf_Fliplift || p instanceof OD_M_mf_Drawer || p instanceof OD_M_mf_Pullout || p instanceof OD_M_mf_PantryPullout || p instanceof OD_M_mf_Fridge || p instanceof OD_M_mf_RackArea || p instanceof OD_M_mf_Fixedfront) {

				// Create Carcase ID and Attributes
				GlobalCount++;
				p.mod_CarcaseId = 'Carcase_01';
				p.mod_CarcaseDepth = this.mod_Depth;
				p.mod_CarcaseWidth = this.mod_Width;
				p.mod_CarcaseHeight = height;
				p.mod_FrontPosStart = StartPos - StartPosCabinet;

				// Set the opening distance for the drawer
				if (p instanceof OD_M_mf_Drawer || p instanceof OD_M_mf_Pullout || p instanceof OD_M_mf_PantryPullout) {
					p.mod_DrawerOpeningDistance = DrawerOpeningDepth;
					DrawerOpeningDepth -= DrawerOpenDepth;
				}

				// setOrigin
				p.setOrigin(0, StartPos, this.mod_Depth);

				p.mod_Originpos[0] = 0;
				p.mod_Originpos[1] = StartPos;
				p.mod_Originpos[2] = this.mod_Depth;

				// Check first and last front element
				if (StartPos + p.mod_FrontHeightSelection! >= height + StartPosCabinet) { LastFrontElem = 1 }

				// Error if front element start over the carcase top end
				if (StartPos >= height + StartPosCabinet) {
					let ErrorMessage = GlobalFunc.find_ErrorList('Error 22019', 1);
					logError(ErrorMessage.Message(''));
				}

				// Calculation of front height and set information to carcase regarding fingergrip
				if (LastFrontElem == 1 && p.mod_FingergripTop == true) {
					carc.mod_FingergripTop = true;
					p.mod_FrontHeight = height - (StartPos - StartPosCabinet + this.mod_FingergripType_matrix.LShapeGapAbove!)
					LastFrontHeight = height - (StartPos - StartPosCabinet);
					StartPos = height;
					tmpLastStartPos.push(StartPos - StartPosCabinet);
					tmpLastGap.push(-this.mod_FingergripType_matrix.CShapeOverlapAbove!);
					if (tmpLastFrontFingergrip[tmpLastFrontFingergrip.length - 1] == true) { p.mod_FingergripBtmType = carc.mod_FingergripType! }
					else { p.mod_FingergripBtmType = 'NoFingergrip' }
					tmpLastFrontFingergrip.push(true);
					p.mod_FingergripTopType = carc.mod_FingergripType!;

				}
				else if (LastFrontElem == 1 && p.mod_FingergripTop == false) {
					p.mod_FrontHeight = height - (StartPos - StartPosCabinet + this.mod_FrontGapHorTop);
					LastFrontHeight = height - (StartPos - StartPosCabinet);
					StartPos = height;
					tmpLastStartPos.push(StartPos - StartPosCabinet);
					tmpLastGap.push(this.mod_FrontGapHorTop);
					if (tmpLastFrontFingergrip[tmpLastFrontFingergrip.length - 1] == true) { p.mod_FingergripBtmType = carc.mod_FingergripType! }
					else { p.mod_FingergripBtmType = 'NoFingergrip' }
					tmpLastFrontFingergrip.push(false);
					p.mod_FingergripTopType = 'NoFingergrip';
				}
				else {
					if (p.mod_FingergripTop == true) {

						tmpGapMid = this.mod_FingergripType_matrix.CShapeHeight! - (this.mod_FingergripType_matrix.CShapeOverlapBelow! + this.mod_FingergripType_matrix.CShapeOverlapAbove!);
						p.mod_FrontHeight! = p.mod_FrontHeightSelection! - tmpGapMid;
						StartPos += p.mod_FrontHeightSelection! - tmpGapMid - this.mod_FingergripType_matrix.CShapeOverlapBelow! + this.mod_FingergripType_matrix.CShapeHeight! - this.mod_FingergripType_matrix.CShapeOverlapAbove!;

						FingerGripLine = StartPos + this.mod_FingergripType_matrix.CShapeOverlapAbove! - (StartPosCabinet + this.mod_FingergripType_matrix.CShapeHeight! / 2);
						CountFingerGrip++;

						switch (CountFingerGrip) {
							case 1:
								carc.mod_FingergripPos1 = FingerGripLine;
								break;
							case 2:
								carc.mod_FingergripPos2 = FingerGripLine;
								break;
							case 3:
								carc.mod_FingergripPos3 = FingerGripLine;
								break;
							case 4:
								carc.mod_FingergripPos4 = FingerGripLine;
								break;
							case 5:
								carc.mod_FingergripPos5 = FingerGripLine;
								break;
							default:
								let ErrorMessage = GlobalFunc.find_ErrorList('Error 22020', 1);
								logError(ErrorMessage.Message(''));
								break;
						}
						tmpLastStartPos.push(StartPos - StartPosCabinet);
						tmpLastGap.push(-this.mod_FingergripType_matrix.CShapeOverlapAbove!);
						if (tmpLastFrontFingergrip[tmpLastFrontFingergrip.length - 1] == true) { p.mod_FingergripBtmType = carc.mod_FingergripType! }
						else { p.mod_FingergripBtmType = 'NoFingergrip' }
						tmpLastFrontFingergrip.push(true);
						p.mod_FingergripTopType = carc.mod_FingergripType!;
					}

					else {
						StartPos += p.mod_FrontHeightSelection!;
						p.mod_FrontHeight = p.mod_FrontHeightSelection! - this.mod_FrontGapHor;
						tmpLastStartPos.push(StartPos - StartPosCabinet);
						tmpLastGap.push(this.mod_FrontGapHor / 2);
						if (tmpLastFrontFingergrip[tmpLastFrontFingergrip.length - 1] == true) { p.mod_FingergripBtmType = carc.mod_FingergripType! }
						else { p.mod_FingergripBtmType = 'NoFingergrip' }
						tmpLastFrontFingergrip.push(false);
						p.mod_FingergripTopType = 'NoFingergrip';

					}
				}

				//===================================================
				// Provide the data of the last front to the carcase
				//===================================================

				if (LastFrontElem == 1) {

					// Height of the last front element
					carc.mod_LastFrontHeight = LastFrontHeight;

					// FrontName
					if (p instanceof OD_M_mf_Door) {
						carc.mod_LastFrontName = "door";
					}
					else if (p instanceof OD_M_mf_Fliplift) {
						carc.mod_LastFrontName = "fliplift";
					}
					else if (p instanceof OD_M_mf_Drawer || p instanceof OD_M_mf_Pullout || p instanceof OD_M_mf_PantryPullout) {
						carc.mod_LastFrontName = "drawer";
					}
					else if (p instanceof OD_M_mf_Fridge) {
						carc.mod_LastFrontName = "fridge";
					}
					else if (p instanceof OD_M_mf_RackArea) {
						carc.mod_LastFrontName = "rackarea";
					}
					else if (p instanceof OD_M_mf_Fixedfront) {
						carc.mod_LastFrontName = "fixedfront";
					}
				}

				//===================================================
				// Manage the global oversize
				//===================================================

				if (p instanceof OD_M_mf_Door || p instanceof OD_M_mf_Fliplift || p instanceof OD_M_mf_Drawer || p instanceof OD_M_mf_Pullout || p instanceof OD_M_mf_PantryPullout || p instanceof OD_M_mf_Fridge || p instanceof OD_M_mf_Fixedfront) {

					// First front element
					//------------------------------------------
					if (GlobalCount === 1) {

						// Flag for first front element
						p.mod_FirstFront = true;

						// Apply global oversize if front element has no oversize defined
						if (this.mod_GlobalFrontOversizeBtm > 0 && p.mod_FrontOversizeBtm === 0) {
							p.mod_FrontOversizeBtm = this.mod_GlobalFrontOversizeBtm;
						}
					}
					else {
						p.mod_FirstFront = false;
						p.mod_FrontOversizeBtm = 0;
					}

					// Last front element
					//------------------------------------------
					if (LastFrontElem === 1) {

						// Flag for last front element
						p.mod_LastFront = true;

						// Apply global oversize if front element has no oversize defined
						if (this.mod_GlobalFrontOversizeTop > 0 && p.mod_FrontOversizeTop === 0) {
							p.mod_FrontOversizeTop = this.mod_GlobalFrontOversizeTop;
						}
					}
					else {
						p.mod_LastFront = false;
						p.mod_FrontOversizeTop = 0;
					}

					// Oversize to the side
					//------------------------------------------
					if (this.mod_GlobalFrontOversizeLeft > 0 && p.mod_FrontOversizeLeft === 0) {
						p.mod_FrontOversizeLeft = this.mod_GlobalFrontOversizeLeft;
					}
					if (this.mod_GlobalFrontOversizeRight > 0 && p.mod_FrontOversizeRight === 0) {
						p.mod_FrontOversizeRight = this.mod_GlobalFrontOversizeRight;
					}
				}

				//===================================================
				// Manage Front Width and Construction
				//===================================================

				if (p instanceof OD_M_mf_Door || p instanceof OD_M_mf_Fliplift || p instanceof OD_M_mf_Pullout) {
					p.mod_FrontWidth = this.mod_Width;
					if (this.mod_CarcaseFrontConstruction_matrix.Left == "Inlayed") { p.mod_FrontWidth = p.mod_FrontWidth - this.mod_SidepanelleftThk };
					if (this.mod_CarcaseFrontConstruction_matrix.Right == "Inlayed") { p.mod_FrontWidth = p.mod_FrontWidth - this.mod_SidepanelrightThk };
				}
			}

			//===============================================================================================
			// Manage the oven
			//===============================================================================================

			if (p instanceof OD_M_mf_Oven) {

				// Create Carcase ID and Attributes
				GlobalCount++;
				p.mod_CarcaseId = 'Carcase_01';
				p.mod_CarcaseDepth = this.mod_Depth;
				p.mod_CarcaseWidth = this.mod_Width;
				p.mod_CarcaseHeight = height;

				// setOrigin
				StartPos -= (GlobalCount > 1 ? this.mod_FrontGapHor : 0);
				p.setOrigin(0, StartPos, this.mod_Depth);
				p.mod_FrontPosStart = StartPos - StartPosCabinet;

				p.mod_Originpos[0] = 0;
				p.mod_Originpos[1] = StartPos;
				p.mod_Originpos[2] = this.mod_Depth;
			}

			//===============================================================================================
			// Manage the fixed shelves
			//===============================================================================================

			if (p instanceof OD_M_mf_Door || p instanceof OD_M_mf_Fliplift || p instanceof OD_M_mf_Drawer || p instanceof OD_M_mf_Pullout || p instanceof OD_M_mf_PantryPullout || p instanceof OD_M_mf_Oven || p instanceof OD_M_mf_Fridge || p instanceof OD_M_mf_RackArea || p instanceof OD_M_mf_Fixedfront) {

				// Interface to provide the data for the carcase
				//-------------------------------------------------------------------------------------

				interface ShelfFixedInfo {
					PosY: number;                  // Height position of the fixed shelf
					Fingergrip: boolean;           // Fingergrip in front of the fixed shelf
					Position: string;              // Position of the fixed shelf related to the fingergrip and front gap
					FingergripType: string;        // Version of fingergrip to get the dimensions
					Backside: string;              // Attribute for "Contact" or "ThrougBw"
					Part: string;                  // Shelffixed or Rail
				}

				// Function to create ShelfFixedInfo
				//-------------------------------------------------------------------------------------

				function createShelfFixedInfo(p: any, m: any): ShelfFixedInfo {
					return {
						PosY: (tmpLastStartPos[GlobalCount - 1] - tmpLastGap[GlobalCount - 1]),
						Fingergrip: tmpLastFrontFingergrip[GlobalCount - 1] || false,
						Position: p.mod_ShelffixedPos || 'None',
						FingergripType: m.mod_FingergripType || 'None',
						Backside: p.mod_ShelffixedType || 'None',
						Part: 'part_Shelffixed'
					};
				}

				// Check the different situations
				//-------------------------------------------------------------------------------------

				let insertFixedShelf = false;

				// If it's the first front element, we don't need a fixed shelf
				if (GlobalCount === 1 && !(p instanceof OD_M_mf_Oven) && !(p instanceof OD_M_mf_Fridge)) {
					p.mod_ShelffixedBtm = false;
				}
				// If there is a Oven before, we don't need a fixed shelf -> it is set from the oven
				else if (prevM instanceof OD_M_mf_Oven && !(p instanceof OD_M_mf_Oven)) {
					p.mod_ShelffixedBtm = false;
				}
				// If there is a Fridge before, we don't need a fixed shelf -> it is set from the oven or fridge
				else if (prevM instanceof OD_M_mf_Fridge && !(p instanceof OD_M_mf_Oven)) {
					p.mod_ShelffixedBtm = false;
				}
				// If it is the oven and not the first front element
				else if (p instanceof OD_M_mf_Oven) {
					const ovenData = GlobalFunc.process_Oven(this, p, carc, StartPos, StartPosCabinet);
					StartPos = ovenData.nextFront;
					p.mod_Information = ovenData.ovenData;
				}
				// If it is the fridge
				else if (p instanceof OD_M_mf_Fridge) {
					const ovenOnTop = nextM instanceof OD_M_mf_Oven;
					GlobalFunc.process_Fridge(p, carc, GlobalCount, LastFrontElem, ovenOnTop)
				}
				// If it's not the first front element and fixed shelf has been selected
				else if (GlobalCount > 1 && p.mod_ShelffixedBtm && !(p instanceof OD_M_mf_Oven)) {
					insertFixedShelf = true;
				}
				// If there is a RackArea before a Drawer and the fixed shelf should be inserted automatically
				else if (p instanceof OD_M_mf_Drawer && prevM instanceof OD_M_mf_RackArea && FixedShelf === 'Automatic') {
					insertFixedShelf = true;
					p.mod_ShelffixedBtm = true;
				}

				// Stringify the object and push it to the list attribute
				//-------------------------------------------------------------------------------------

				if (insertFixedShelf) {
					carc.mod_ShelffixedInfoList.push(JSON.stringify(createShelfFixedInfo(p, this)));
				}

				//===============================================================================================
				// Collect the data of the fronts to supply it to the carcase
				//===============================================================================================

				// Interface to provide the data for the carcase
				//-------------------------------------------------------------------------------------

				interface FrontInfo {
					FrontCategory: string            // Identificator of sepecial fronts
					StartingPosition: number;        // Starting position of the front
					FrontHeight: number;             // Height of the front set from the UserExit
					RealFrontHeight: number;         // Calculated front height without gaps
					BackwallConstruction: string;    // Backwall construction selected on the front
					BackwallPosition: number;        // Backwall position selected on the front
					FixedshelfBottom: boolean;       // Fixed shelf selected on the front
					FingergripBottom: boolean;       // Fingergrip on bottom (true / false)
					FingergripTop: boolean;          // Fingergrip on top (true / false)
					FringergripType: string;         // Type of fingergrip (dimensions)
				}

				// If it is the oven
				//-------------------------------------------------------------------------------------

				if (p instanceof OD_M_mf_Oven) {
					// done in the process_Oven
				}

				// If it is the fridge
				//-------------------------------------------------------------------------------------

				else if (p instanceof OD_M_mf_Fridge) {
					// done in the process_Fridge

					// Get the Information about the doors
					const doorInfo = GlobalFunc.process_Door(p);
					p.mod_DoorDirection = doorInfo.RealDoorDirection;
					p.mod_DoorType = doorInfo.RealDoorType;
					p.mod_Information = JSON.stringify(doorInfo);
				}

				// All the other fronts
				//-------------------------------------------------------------------------------------

				else {

					// Create the object
					let frontInfo: FrontInfo = {
						FrontCategory: "Standard",
						StartingPosition: p.mod_FrontPosStart!,
						FrontHeight: p.mod_FrontHeightSelection!,
						RealFrontHeight: p.mod_FrontHeight!,
						BackwallConstruction: p.mod_CarcaseBackwallConstruction!,
						BackwallPosition: p.mod_BackwallPos!,
						FixedshelfBottom: p.mod_ShelffixedBtm!,
						FingergripBottom: FingergripBottom,
						FingergripTop: !!p.mod_FingergripTop,
						FringergripType: this.mod_FingergripType
					}

					// Stringify the object and push it to the list attribute
					carc.mod_FrontAreaInfoList.push(JSON.stringify(frontInfo));

					// Save the fingergrip for the next front
					FingergripBottom = !!p.mod_FingergripTop;
				}
			}

			//===================================================
			// Manage the Vert Dividers
			//===================================================

			if (p instanceof OD_M_mf_Door) {


				// Get the Information about the doors
				let doorInfo = GlobalFunc.process_Door(p);
				p.mod_DoorDirection = doorInfo.RealDoorDirection;
				p.mod_DoorType = doorInfo.RealDoorType;
				p.mod_Information = JSON.stringify(doorInfo);

				// Set the values of the attributes (will be provided to the carcase)
				VertDividerType[GlobalCount] = doorInfo.VertDivider;
				VertDividerFrontWidth[GlobalCount] = doorInfo.FrontWidthList[0]
				VertDividerFrontName[GlobalCount] = p.mod_ModuleName!;
			}
			else {
				VertDividerType[GlobalCount] = 'NoVertDivider';
			}

			//===================================================
			// Manage ModuleName and RackArea
			//===================================================

			if (p instanceof OD_M_mf_RackArea) {
				FixedShelf = p.mod_RackAreaShelftopConstruction!;
			}
		});

		//================================================================================
		//          Stringify the Divider Information and pass it to the mc_Storageunit (will be used to insert the VertDivider in the mc_Storageunit)
		//================================================================================

		let VertDividerInfo: any = {
			Type: VertDividerType,
			FrontWidth: VertDividerFrontWidth,
			FrontName: VertDividerFrontName,
			PosX: undefined,
			DimX: undefined,
			FreeSpaceWidth: undefined,
			FreeSpaceWidthStartPos: undefined
		};

		let strJson = JSON.stringify(VertDividerInfo);
		carc.mod_VertDividerInfoList.push(strJson);

		//===================================================
		// Manage the fingergrip
		//===================================================

		carc.mod_FingergripQtyMiddle = CountFingerGrip;

		//===================================================
		// Seal mc_Storageunit and get attribute with FreeSpace
		//===================================================

		let sealedCarc = carc.seal();
		let sealedCarc_CarcaseSpaceDimension = JSON.parse(sealedCarc.mod_CarcaseSpaceDimension[0]);
		let sealedCarc_VertDividerInfoList = JSON.parse(sealedCarc.mod_VertDividerInfoList[0]);
		let sealedCarc_CarcasePartInfo = JSON.parse(sealedCarc.mod_CarcasePartInfo[0]);
		let BtmShelfPosDepth = sealedCarc_CarcasePartInfo.HorizontalPartsPosZ[1];
		let BtmShelfPos = sealedCarc_CarcasePartInfo.HorizontalPartsPosY[1];
		let i = 0

		// Cycle for the child modules
		this.m.forEach(p => {

			if (p instanceof OD_M_mf_Door || p instanceof OD_M_mf_Fliplift || p instanceof OD_M_mf_Drawer || p instanceof OD_M_mf_Pullout || p instanceof OD_M_mf_PantryPullout || p instanceof OD_M_mf_Fridge || p instanceof OD_M_mf_RackArea || p instanceof OD_M_mf_Fixedfront || p instanceof OD_M_mf_Oven) {

				// Set the attribute for the free space (CarcaseSpaceDimension) regarding each front
				let CarcaseSpaceDimension: any = {
					FullWidthFreeSpace: sealedCarc_CarcaseSpaceDimension.FullWidthFreeSpace,
					FullHeightFreeSpace: sealedCarc_CarcaseSpaceDimension.FullHeightFreeSpace,
					FullDepthFreeSpace: sealedCarc_CarcaseSpaceDimension.FullDepthFreeSpace,
					FullWidthStartPos: sealedCarc_CarcaseSpaceDimension.FullWidthStartPos,
					FullHeightStartPos: sealedCarc_CarcaseSpaceDimension.FullHeightStartPos,
					FullDepthStartPos: sealedCarc_CarcaseSpaceDimension.FullDepthStartPos,
					WidthFreeSpace: sealedCarc_CarcaseSpaceDimension.WidthFreeSpace[i],
					HeightFreeSpace: sealedCarc_CarcaseSpaceDimension.HeightFreeSpace[i],
					DepthFreeSpace: sealedCarc_CarcaseSpaceDimension.DepthFreeSpace[i],
					WidthFreeStartPos: sealedCarc_CarcaseSpaceDimension.WidthFreeStartPos[i],
					HeightFreeStartPos: sealedCarc_CarcaseSpaceDimension.HeightFreeStartPos[i] + StartPosCabinet,
					DepthFreeStartPos: sealedCarc_CarcaseSpaceDimension.DepthFreeStartPos[i]
				};
				let strJson = JSON.stringify(CarcaseSpaceDimension);
				p.mod_CarcaseSpaceDimension.push(strJson);

				// Sequence of the fronts
				i++

				// Set the attribute for the VertDividerInfoList info (mod_VertDividerInfoList) regarding each front (will be used for the adjustable shelves)
				if (p instanceof OD_M_mf_Door) {
					let VertDividerInfoList: any = {
						Type: sealedCarc_VertDividerInfoList.Type[i],
						FrontWidth: sealedCarc_VertDividerInfoList.FrontWidth[i],
						FrontName: sealedCarc_VertDividerInfoList.FrontName[i],
						PosX: sealedCarc_VertDividerInfoList.PosX[i],
						DimX: sealedCarc_VertDividerInfoList.DimX[i],
						FreeSpaceWidth: sealedCarc_VertDividerInfoList.FreeSpaceWidth[i],
						FreeSpaceWidthStartPos: sealedCarc_VertDividerInfoList.FreeSpaceWidthStartPos[i]
					};

					let VertDividerInfoListJson = JSON.stringify(VertDividerInfoList);
					p.mod_VertDividerInfoList.push(VertDividerInfoListJson);
				}

				// Provide the CarcasePartInfo regarding each front
				if (p instanceof OD_M_mf_Door || p instanceof OD_M_mf_Fridge || p instanceof OD_M_mf_Fliplift) {

					// Get the information regarding the HorizontalParts in an Array
					let HorizontalPartsType: string[] = [];
					HorizontalPartsType.push(sealedCarc_CarcasePartInfo.HorizontalPartsType[i]);
					let HorizontalPartsPosY: number[] = [];
					HorizontalPartsPosY.push(sealedCarc_CarcasePartInfo.HorizontalPartsPosY[i]);
					let HorizontalPartsPosZ: number[] = [];
					HorizontalPartsPosZ.push(sealedCarc_CarcasePartInfo.HorizontalPartsPosZ[i]);
					let HorizontalPartsDimY: number[] = [];
					HorizontalPartsDimY.push(sealedCarc_CarcasePartInfo.HorizontalPartsDimY[i]);
					let HorizontalPartsDimZ: number[] = [];
					HorizontalPartsDimZ.push(sealedCarc_CarcasePartInfo.HorizontalPartsDimZ[i]);
					let HorizontalPartsFrontAngle: number[] = [];
					HorizontalPartsFrontAngle.push(sealedCarc_CarcasePartInfo.HorizontalPartsFrontAngle[i]);

					if (this.mod_CarcaseShelftopConstruction != 'RailTopBackHorizontal' && this.mod_CarcaseShelftopConstruction != 'RailTopBackVertical') { // Only push the top part if it exists
						HorizontalPartsType.push(sealedCarc_CarcasePartInfo.HorizontalPartsType[i + 1]);
						HorizontalPartsPosY.push(sealedCarc_CarcasePartInfo.HorizontalPartsPosY[i + 1]);
						HorizontalPartsPosZ.push(sealedCarc_CarcasePartInfo.HorizontalPartsPosZ[i + 1]);
						HorizontalPartsDimY.push(sealedCarc_CarcasePartInfo.HorizontalPartsDimY[i + 1]);
						HorizontalPartsDimZ.push(sealedCarc_CarcasePartInfo.HorizontalPartsDimZ[i + 1]);
						HorizontalPartsFrontAngle.push(sealedCarc_CarcasePartInfo.HorizontalPartsFrontAngle[i + 1]);
					}

					// Set the attribute CarcasePartInfo regarding each front
					let CarcasePartInfo: any = {
						HorizontalPartsType: HorizontalPartsType,
						HorizontalPartsPosY: HorizontalPartsPosY,
						HorizontalPartsPosZ: HorizontalPartsPosZ,
						HorizontalPartsDimY: HorizontalPartsDimY,
						HorizontalPartsDimZ: HorizontalPartsDimZ,
						HorizontalPartsFrontAngle: HorizontalPartsFrontAngle,
						VerticalPartsType: sealedCarc_CarcasePartInfo.VerticalPartsType[i],
						VerticalPartsPosX: sealedCarc_CarcasePartInfo.VerticalPartsPosX[i],
						VerticalPartsPosZ: sealedCarc_CarcasePartInfo.VerticalPartsPosZ[i],
						VerticalPartsDimX: sealedCarc_CarcasePartInfo.VerticalPartsDimX[i],
						VerticalPartsDimZ: sealedCarc_CarcasePartInfo.VerticalPartsDimZ[i],
						VerticalPartsFrontAngle: sealedCarc_CarcasePartInfo.VerticalPartsFrontAngle[i]
					};

					let CarcasePartInfoJson = JSON.stringify(CarcasePartInfo);
					p.mod_CarcasePartInfo.push(CarcasePartInfoJson);
				}

			}
			else if (p instanceof OD_M_mf_Oven) {
				i++;
			}
		});

		//===================================================
		//          Add the PlinthArea to the root-module
		//===================================================

		// Add the module
		const plinth = this.addOD_M_mc_PlinthArea01(1);

		// Set the values to the relevant attributes of the carcase
		plinth.mod_CarcaseDepth = this.mod_Depth - BtmShelfPosDepth;
		plinth.mod_CarcaseWidth = this.mod_Width;
		plinth.mod_CarcaseId = 'Carcase_01';

		plinth.setOrigin(0, BtmShelfPos, BtmShelfPosDepth);

		// Seal the plinth area to retrieve the leg positions
		const sealedPlinth = plinth.seal();
		this.mod_PlinthAreaPositionInfo.push(sealedPlinth.mod_PlinthAreaPositionInfo[0]);

		//===================================================
		//          Create vector / docking
		//===================================================

		const TopEndCabinet = StartPosCabinet + height;

		// Left side
		this.addDockingInfo(Dock.LeftBottom, new Vector3(0, 0, -this.mod_CarcaseDistanceWall), new Vector3(0, 0, this.mod_Depth));
		this.addDockingInfo(Dock.LeftTop, new Vector3(0, TopEndCabinet, -this.mod_CarcaseDistanceWall), new Vector3(0, TopEndCabinet, this.mod_Depth));

		// Right side
		this.addDockingInfo(Dock.RightBottom, new Vector3(this.mod_Width, 0, -this.mod_CarcaseDistanceWall), new Vector3(this.mod_Width, 0, this.mod_Depth));
		this.addDockingInfo(Dock.RightTop, new Vector3(this.mod_Width, TopEndCabinet, -this.mod_CarcaseDistanceWall), new Vector3(this.mod_Width, TopEndCabinet, this.mod_Depth));

		// Back side
		this.addDockingInfo(Dock.BackBottom, new Vector3(0, 0, -this.mod_CarcaseDistanceWall), new Vector3(this.mod_Width, 0, -this.mod_CarcaseDistanceWall));
		this.addDockingInfo(Dock.BackTop, new Vector3(0, TopEndCabinet, -this.mod_CarcaseDistanceWall), new Vector3(this.mod_Width, TopEndCabinet, -this.mod_CarcaseDistanceWall));

		//===================================================
		//          Call the UserExit of this module
		//===================================================

		const retInfo = GlobalFunc.ue_StorageunitSingle(this);

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
export function mr_StorageunitSingle_prepareContext(this: pc_mr_StorageunitSingle): void {
	internal_enterModulePrepareContext('mr_StorageunitSingle', this._id);
	try {
		// ###############################################################
		// ####################### CUSTOM SCRIPTS ########################
		// ###############################################################
		// CUSTOMSCRIPT_mr_StorageunitSingle_PREPARECONTEXT

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
		internal_leaveModulePrepareContext();
	}
}
// ---------------------------------------------------------------
export function mr_StorageunitSingle_calculateContainerModules(this: ccm_mr_StorageunitSingle): void {
	internal_enterCalculateContainerModules('mr_StorageunitSingle', this._id);
	try {
		// ###############################################################
		// ####################### CUSTOM SCRIPTS ########################
		// ###############################################################
		// CUSTOMSCRIPT_mr_StorageunitSingle_CALCULATECONTAINERMODULES

		// Create: April 2026
		// By Ludwig Weber
		// Purpose: CabinetLibrary
		//
		// Description:
		// Add the placeholder to add equipment
		//
		// Revisions:
		// 
		//===================================================

		// Variables
		const startPosCabinet = this.mod_PlinthAreaDesign_matrix.PlinthAreaType !== 'None' ? this.mod_PlinthAreaHeight! : 0;
		const height = this.mod_Height;
		let startPos = this.mod_FrontPosStart + startPosCabinet;
		let isFilled = false;

		// Check if there is space available
		for (const p of this.m) {
			if (p instanceof OD_M_mf_Door || p instanceof OD_M_mf_Fliplift || p instanceof OD_M_mf_Drawer || p instanceof OD_M_mf_Pullout || p instanceof OD_M_mf_PantryPullout || p instanceof OD_M_mf_Fridge || p instanceof OD_M_mf_RackArea || p instanceof OD_M_mf_Fixedfront) {

				// Stop if we are sure the cabinet is filled with fronts
				if (startPos + p.mod_FrontHeightSelection! >= height + startPosCabinet) {
					isFilled = true;
					break;
				}

				// Calculate starting position of the next front
				if (p.mod_FingergripTop === true) {
					const tmpGapMid = this.mod_FingergripType_matrix.CShapeHeight! - (this.mod_FingergripType_matrix.CShapeOverlapBelow! + this.mod_FingergripType_matrix.CShapeOverlapAbove!);
					startPos += p.mod_FrontHeightSelection! - tmpGapMid - this.mod_FingergripType_matrix.CShapeOverlapBelow! + this.mod_FingergripType_matrix.CShapeHeight! - this.mod_FingergripType_matrix.CShapeOverlapAbove!;
				}
				else {
					startPos += p.mod_FrontHeightSelection!;
				}
			}
		}

		// Insert the placeholder if there is still space for a front
		if (!isFilled) {

			// Add the placeholder
			const ph = this.addOD_M_md_FrontPlaceholder();

			// Set the attributes
			ph.mod_Width = this.mod_Width;
			ph.mod_Depth = 19;
			ph.mod_Height = this.mod_Height;

			// SetOrigin of the placeholder
			ph.setOrigin(0, startPosCabinet, this.mod_Depth)
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
		internal_leaveCalculateContainerModules();
	}
}
// ---------------------------------------------------------------
export function mr_StorageunitSingle_manufacturerDataCompletion(this: dc_mr_StorageunitSingle): void {
	internal_enterModuleManufacturerDataCompletion('mr_StorageunitSingle', this._id);
	try {
		// ###############################################################
		// ####################### CUSTOM SCRIPTS ########################
		// ###############################################################
		// CUSTOMSCRIPT_mr_StorageunitSingle_MANUFACTURERDATACOMPLETION

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
