import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars } from '../internal/logging'

//#region Imports
import { cbp_mr_Backsplash, dc_mr_Backsplash, adc_mr_Backsplash, ccm_mr_Backsplash } from '../internal/modules/mr_Backsplash'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_Backsplash, OD_M_mc_Backsplash } from '../internal/modules/mc_Backsplash'
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

export function mr_Backsplash_createBuildPlan(this: cbp_mr_Backsplash): void {
  internal_enterModuleCreateBuildPlan('mr_Backsplash', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mr_Backsplash_CREATEBUILDPLAN

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
export function mr_Backsplash_afterDataCompletion(this: adc_mr_Backsplash): void {
  internal_enterModuleAfterDataCompletion('mr_Backsplash', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mr_Backsplash_AFTERDATACOMPLETION
    // Schuler Consulting
    // Create: September 2024
    // By Stefano Cortese
    // Purpose: CabinetLibrary
    //
    // Description:
    // Creation of the backsplash
    //
    //
    //
    // Revisions:
    // Date        Author            Description
    // ========   ===============   ================================
    // 09/2024    S. Cortese       Initial creation
    // 11/2025    J. Polcar        Generation contours
    //===================================================


    //===================================================
    //    ANALYZE CONTOURS FOR COUNTERTOPS GENERATION
    //===================================================

    const {
      LongPartSegment,
      LineSegmentEquation,
      LongPartSegmentEdge,
      Vector3Extended,
      CONTOUR_ATTRIBUTE_OWNER_TYPE,
      CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE,
      CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT,
      CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR,
      mr_CornerunitStraight,
      mr_StorageunitSingle,
      evaluateCornerUnitStraightSizeOfPerpendicularPart,
      mr_Upright,
    } = GlobalFunc.process_MathLongparts();
    // If import was used, this wouldn't be necessary, extract types from the imported functions for later use
    type LongPartSegmentTypeAlias = InstanceType<typeof LongPartSegment>;
    type LongPartSegmentEdgeTypeAlias = InstanceType<typeof LongPartSegmentEdge>;
    // An interable structure for Left and Right side computations
    type LeftRightAny = { Left: any, Right: any }

    //===================================================
    //    Fetch contours and create LongPartSegments
    //===================================================
    // The LongPartSegment is a class that is used to analyze the contours and their neighbours.

    const segments = this.getGenerationContours().map(contour => {
      const lps = new LongPartSegment(contour);
      lps.getOrAddSide(CKind.Left, CKind.Right);
      lps.getOrAddSide(CKind.Right, CKind.Left);
      const uprightOverhang: LeftRightAny = { Left: 0, Right: 0 };
      const visibleOverhang: LeftRightAny = { Left: 0, Right: 0 };
      const connectionType: LeftRightAny = {
        Left: lps.getAttributeOrDefault('mod_CarcaseVisLeft', 0) > 0 ? 'StraightFinished' : 'StraightUnfinished',
        Right: lps.getAttributeOrDefault('mod_CarcaseVisRight', 0) > 0 ? 'StraightFinished' : 'StraightUnfinished',
      };

      // Added by Ludwig -> get the data of the contour for the countertop drawings
      const countertopInfo = lps.getAttributeOrDefault('CountertopInfo', "");

      const connectionLength: LeftRightAny = { Left: 0, Right: 0 };
      lps.additionalData = {
        // An upright is present at the side - this adds its thickness to the countertop
        extensionUpright: uprightOverhang,
        // based on visible left/right, add an overhang
        visibleOverhang: visibleOverhang,
        // The distance in X from the rear left corner to the origin of the countertop
        // This is required especially for the starting countertop on corner units
        displaceOriginX: 0,
        // for assigning to the mc's mod_Countertop[Left|Right]EndType
        connectionType: connectionType,
        connectionLength: connectionLength,
        connectionSequenceIndex: 0,
      };
      return lps;
    });

    logInfo('mr_Backsplash has been instantiated and has received ' + segments.length + ' generation contours.');

    // ===================================================
    // Match the LongPartSegments with their neighbours
    // ===================================================

    // Match sibling contours (corner units provide two sibling countertop contours for both sides of the corner)
    for (let i = 0; i < segments.length; i++) {
      const current = segments[i];
      const rest = segments.slice(i + 1);
      for (let j = 0; j < rest.length; j++) {
        current.tryMatchSiblings(rest);
      }
    }

    // Filter the carcases that have mod_CreateCountertop set only
    const carcaseSegmentsWithBacksplashes = segments.filter(segment =>
      [mr_CornerunitStraight, mr_StorageunitSingle].includes(segment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined'))
    );

    // Match carcases to carcases
    for (let i = 0; i < carcaseSegmentsWithBacksplashes.length; i++) {
      const current = carcaseSegmentsWithBacksplashes[i];
      const rest = carcaseSegmentsWithBacksplashes.slice(i + 1);
      for (let j = 0; j < rest.length; j++) {
        current.tryMatchNeighboursByAxialContinuity(CKind.Front, rest, { match3D: true, matchFootprint: true });
      }
    }

    /* Other contours interact with the countertop - these are:
    *  uprights
  * This will be necessary to determine other countertop attributes based on its neighbours.
  */
    const otherSegments = segments.filter(segment => !carcaseSegmentsWithBacksplashes.includes(segment));
    for (const nonCarcaseSegment of otherSegments) {
      nonCarcaseSegment.tryMatchNeighboursByPartialCoincidence(carcaseSegmentsWithBacksplashes, { match3D: false, matchFootprint: true });
    }

    const mod_CountertopOverhangLeft = this.mod_CountertopOverhangLeft;
    const mod_CountertopOverhangRight = this.mod_CountertopOverhangRight;

    // Helper formula for getting the depth of the segment from the side
    const getSegmentDepthFromSide = (segment: any) => {
      return segment.neighbours.get(CKind.Right)?.edge.length;
    };

    // Helper function to instantiate an mc_Countertop01
    let backsplashIndex = 1;
    const addBacksplash = () => {
      const backsplash = this.addOD_M_mc_Backsplash();
      // Set an unique id to the mc - This prevents the "You can't assign Part to multiple Groups" error
      backsplash.mod_BacksplashId = `Backsplash_${backsplashIndex++}`;
      return backsplash;
    }

    // Find the starting segments - these are the carcases that have no direct neighbour on the left side
    const startingSegments = carcaseSegmentsWithBacksplashes.filter(segment => segment.neighbours.get(CKind.Left)?.other === null);

    // ===================================================
    //        Get maximum countertop length
    // ===================================================
    let maximumLength;
    try {
      const boardMapping = GlobalFunc.find_BoardMapping(this.mod_BacksplashColor, this.mod_BacksplashThk);
      const boardEntry = GlobalFunc.find_BoardLibrary(boardMapping.BoardId!);
      maximumLength = boardEntry!.BoardLength;
    }
    catch (e) {
      maximumLength = 9999;
      logError(`Error while retrieving maximum backsplash length. Using fallback value ${maximumLength}. Error: ${e}`);
    }

    // ===================================================
    //        Distribute connection sequence indices
    // ===================================================
    // We don't know which starting segment is the first one, so we need to go through all starts.
    // Then we count corner units, distributing the sequence indices to the corner parts.
    // This will crawl through the corner units that belong to 1 continuous backsplash piece.
    // This also means that the indexing has reached from a previous starting segment. In which case, it already has a higher index and therefore we break the loop to quit - the higher index wins.
    for (const start of carcaseSegmentsWithBacksplashes) {
      let sequenceIndex = 0;
      let currentOrNull: LongPartSegmentTypeAlias | null | undefined = start;
      const alreadyVisited: LongPartSegmentTypeAlias[] = [start];
      while (currentOrNull) {
        const current: LongPartSegmentTypeAlias = currentOrNull!;

        const isCorner = current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined') === mr_CornerunitStraight;
        if (isCorner) {
          const sibling = current.siblings.find((s: any) => s.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'no corner') === mr_CornerunitStraight)!;
          if (current.additionalData.connectionSequenceIndex > sequenceIndex) {
            break;
          }
          else {
            current.additionalData.connectionSequenceIndex = sequenceIndex;
            sibling.additionalData.connectionSequenceIndex = sequenceIndex;
            sequenceIndex++;
          }
          const isLeftPartOfCorner = (
            current.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Left' && current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'not a corner') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR
            || current.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Right' && current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'not a corner') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT
          );
          // the neighbour must be on the right part
          currentOrNull = (isLeftPartOfCorner ? sibling : current).neighbours.get(CKind.Right)?.other;
        }
        else {
          currentOrNull = current.neighbours.get(CKind.Right)?.other;
        }
        if (currentOrNull && alreadyVisited.includes(currentOrNull!)) {
          logError('Backsplash forms a closed loop. This is not supported.');
          break;
        }
        if (currentOrNull) {
          alreadyVisited.push(currentOrNull);
        }
      }
    }

    // ===================================================
    //       Cycle through the countertop segments
    // ===================================================
    // Compute the contributing lengths to the countertop segments
    // Compute their depth
    // Check if there are uprights, higher neighbours etc.

    // First run: Compute the lengths and depths of all segments simply by measuring between their contour's vertices.
    for (const current of carcaseSegmentsWithBacksplashes) {
      current.additionalData.segmentLength = current.getLengthBetweenParallelSides(CKind.Left, CKind.Right);
      current.additionalData.segmentDepth = getSegmentDepthFromSide(current);
    }


    for (const current of carcaseSegmentsWithBacksplashes) {

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


        // Either CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT or CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR
        const evaluateSizesResult = evaluateCornerUnitStraightSizeOfPerpendicularPart(current, 0, 'segmentLength', 'segmentDepth', 'displaceOriginX');

        // it is easier to make the left part shorter, because right part would need to move the origin
        evaluateSizesResult.leftCornerPart.additionalData.segmentLength -= this.mod_BacksplashThk;

        dockingSegments.Left = evaluateSizesResult.leftCornerPart;
        dockingSegments.Right = evaluateSizesResult.rightCornerPart;

      }
      else if (currentOwnerType === mr_StorageunitSingle) {
        current.additionalData.segmentLength = current.getLengthBetweenParallelSides(CKind.Left, CKind.Right);
        current.additionalData.segmentDepth = getSegmentDepthFromSide(current);
      }
      else {
        // Perpendicular corner part of the corner unit - ignore, otherwise it'll compute two times.
      }

      // ===================================================
      // For both Left and Right sides, if free (other === null), check footprint neighbours
      // If there is a higher neighbour, no overhang
      // Else if there is an upright with the same size, extension for upright and check further overhang
      // ===================================================

      const currentHeight = current.generationContour.position.y + current.generationContour.height;

      // This also needs to run only once, and at the time the corner unit's dockingSegments are therefore set correctly
      if (
        currentOwnerType === mr_StorageunitSingle
        || currentOwnerType === mr_CornerunitStraight && currentIsStraightCornerPart
      ) {
        ['Left', 'Right'].forEach((s) => {
          const dock = dockingSegments[s as keyof LeftRightAny];
          const dockside = s as CKind;
          const matchside = dockside === CKind.Left ? CKind.Right : CKind.Left;
          const dockEdge = dock.neighbours.get(dockside) as LongPartSegmentEdgeTypeAlias;

          // check if there is an upright
          const upright = dockEdge.neighboursInFootprint.find((n: LongPartSegmentTypeAlias) => n.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined') === mr_Upright);
          if (upright) {
            const uprightHeight = (upright?.generationContour.height ?? 0) + (upright?.generationContour.position.y ?? 0);
            const uprightThk = upright.getLengthBetweenParallelSides(dockside, matchside);
            // check if the upright's top edge is in the same height - if yes, it is covering this carcase and the countertop should be extended
            if (
              Math.abs(uprightHeight - currentHeight) < Vector3Extended.EPS
            ) {
              const overhang = s === 'Left' ? mod_CountertopOverhangLeft : mod_CountertopOverhangRight;
              current.additionalData.extensionUpright[s] = uprightThk! + overhang;
            }
          }

          const sideVisible = current.getAttributeOrDefault(`mod_CarcaseVis${s}`, 0) > 0;
          if (
            dockEdge.other === null
          ) {
            const overhang = s === 'Left' ? mod_CountertopOverhangLeft : mod_CountertopOverhangRight;
            current.additionalData.visibleOverhang[s] = sideVisible ? overhang : 0;
          }

        });
      }
      else {
        // Perpendicular corner part of the corner unit - ignore, otherwise it'll compute two times.
      }

    }

    // =============================================================
    //       Cycle through the starting segments of the countertop
    // =============================================================
    // The starting segments are those who don't have a left neighbour carcase.
    // We need to collect them in a straight line by crawling to the right neighbours.
    // Then we divide the collected segment lengths by the maximum length of the material.

    for (const segmentIndex in startingSegments) {
      const firstSegment = startingSegments[segmentIndex];
      let currentOrNull: LongPartSegmentTypeAlias | null | undefined = firstSegment;
      let lastSegment: any = firstSegment;
      const allSegmentsInThisSection: LongPartSegmentTypeAlias[] = [];

      // From the firstSegment, crawl to the right neighbours until we get to the end
      while (currentOrNull) {
        const current: LongPartSegmentTypeAlias = currentOrNull!;
        allSegmentsInThisSection.push(current);
        // get the next one ... if there is none, the loop will terminate
        currentOrNull = current.neighbours.get(CKind.Right)?.other;
        if (current) { lastSegment = current; }
      }

      // ==========================================================================
      //       Apply the uprights, overhangs to the ends of the countertop
      // ==========================================================================
      // ... where it is eligible.
      // That means both sides of the mr_StorageunitSingle if the sides are free
      // And dockable sides of the mr_CornerUnitStraight if the sides are free

      const firstSegmentType = firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined');
      const lastSegmentType = lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined');
      const firstIsCornerWithFreeLeftSide = (
        firstSegmentType === mr_CornerunitStraight
        && firstSegment.neighbours.get(CKind.Left)?.other === null
        && (
          (
            firstSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Left'
            && firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'undefined') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR
          )
          || (
            firstSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Right'
            && firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'undefined') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT
          )
        )
      );
      const lastIsCornerWithFreeRightSide = (
        lastSegmentType === mr_CornerunitStraight
        && lastSegment.neighbours.get(CKind.Right)?.other === null
        && (
          (
            lastSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Right'
            && lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'undefined') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR
          )
          || (
            lastSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Left'
            && lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'undefined') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT
          )
        )
      );

      if (firstSegmentType === mr_StorageunitSingle || firstIsCornerWithFreeLeftSide) {
        // Extend by the upright thickness
        firstSegment.additionalData.segmentLength += firstSegment.additionalData.extensionUpright.Left;
        firstSegment.additionalData.displaceOriginX -= firstSegment.additionalData.extensionUpright.Left;
        // Extend by overhang
        firstSegment.additionalData.segmentLength += firstSegment.additionalData.visibleOverhang.Left;
        firstSegment.additionalData.displaceOriginX -= firstSegment.additionalData.visibleOverhang.Left;
        // The left side also needs to move the origin, because the countertop starts on the left side
      }

      if (lastSegmentType === mr_StorageunitSingle || lastIsCornerWithFreeRightSide) {
        // Extend by the upright thickness
        lastSegment.additionalData.segmentLength += lastSegment.additionalData.extensionUpright.Right;
        // Extend by the overhang
        lastSegment.additionalData.segmentLength += lastSegment.additionalData.visibleOverhang.Right;
      }

      // ===================================================
      //     Divide the countertop by maximum length
      // ===================================================
      const segmentLengths = allSegmentsInThisSection.map(segment => segment.additionalData.segmentLength);
      const segmentLengthsReversed = [...segmentLengths].reverse();
      const segmentGroupsLeftToRight = GlobalFunc.process_PanelLengthSplitByMaximum(segmentLengths, maximumLength, 'LeastToAvg');
      const segmentGroupsRightToLeft = GlobalFunc.process_PanelLengthSplitByMaximum(segmentLengthsReversed, maximumLength, 'LeastToAvg');

      // Check whether we get less segments if this is reversed or not
      const segmentGroups = segmentGroupsRightToLeft.length > segmentGroupsLeftToRight.length ? segmentGroupsLeftToRight : segmentGroupsRightToLeft;


      // ===================================================
      //     Instantiate the countertop segments
      // ===================================================
      for (let i = 0; i < segmentGroups.length - 1; i++) {
        const start = segmentGroups[i];
        const end = segmentGroups[i + 1] ?? segmentLengths.length;

        let totalLength = 0;

        for (let j = start; j < end; j++) {
          totalLength += allSegmentsInThisSection[j].additionalData.segmentLength;
        }

        const backsplash = addBacksplash();
        backsplash.mod_BacksplashWidth = Math.round(totalLength * 10) / 10;;
        backsplash.mod_BacksplashThk = this.mod_BacksplashThk;
        backsplash.mod_BacksplashHeight = this.mod_BacksplashHeight;

        const backsplashSegmentStart = allSegmentsInThisSection[start];
        const backsplashSegmentEnd = allSegmentsInThisSection[end - 1];

        const displacementBacksplashX = backsplashSegmentStart.additionalData.displaceOriginX;

        // get the front edge as an insertion reference
        const frontLeftCorner = backsplashSegmentStart.getCornerPoint(CKind.Left, CKind.Front)!.toVector3Extended();
        const frontRightCorner = backsplashSegmentStart.getCornerPoint(CKind.Right, CKind.Front)!.toVector3Extended();
        const rearLeftCorner = backsplashSegmentStart.getCornerPoint(CKind.Left, CKind.Back)!.toVector3Extended();
        // We must align the backsplash with the rear edge in some offset, but its pivot is at the rear left corner.
        const localTranslation =
          rearLeftCorner
            // direction from the rear left corner to the front left corner
            .subtract(frontLeftCorner)
            .normalize()
            // position of the countertop pivot
            // TODO: get actual countertop depth!
            .scale(backsplashSegmentStart.additionalData.segmentDepth)
          ;
        const directionEquation =
          new LineSegmentEquation(frontLeftCorner, frontRightCorner)
            .translate({ both: localTranslation })
            .extend(displacementBacksplashX, displacementBacksplashX)
          ;
        const transformation = directionEquation.getTransformationMatrixToStartPoint();

        backsplash.setOrigin(transformation);

      }
    }









    //===================================================
    //          Call the UserExit of this module
    //===================================================

    GlobalFunc.ue_Backsplash(this);

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
export function mr_Backsplash_calculateContainerModules(this: ccm_mr_Backsplash): void {
  internal_enterCalculateContainerModules('mr_Backsplash', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mr_Backsplash_CALCULATECONTAINERMODULES

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
export function mr_Backsplash_manufacturerDataCompletion(this: dc_mr_Backsplash): void {
  internal_enterModuleManufacturerDataCompletion('mr_Backsplash', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mr_Backsplash_MANUFACTURERDATACOMPLETION

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
