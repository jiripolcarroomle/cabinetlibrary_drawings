import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars, internal_enterModulePrepareContext, internal_leaveModulePrepareContext } from '../internal/logging'

//#region Imports
import { cbp_mr_Appliance, dc_mr_Appliance, adc_mr_Appliance, ccm_mr_Appliance, pc_mr_Appliance } from '../internal/modules/mr_Appliance'
import { GlobalFunc } from '../internal/global-func'
import { dc_mf_Dishwasher, OD_M_mf_Dishwasher } from '../internal/modules/mf_Dishwasher'
import { dc_mf_BaseunitFridge, OD_M_mf_BaseunitFridge } from '../internal/modules/mf_BaseunitFridge'
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

export function mr_Appliance_createBuildPlan(this: cbp_mr_Appliance): void {
  internal_enterModuleCreateBuildPlan('mr_Appliance', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mr_Appliance_CREATEBUILDPLAN

    // Schuler Consulting
    // Create: April 2025
    // By Ludwig Weber
    // Purpose: CabinetLibrary
    //
    // Description:
    // CreateBuildPlan of mr_Appliance
    // Add a drop zone in the graphic
    //
    // Revisions:
    //
    //===================================================================================

    // Show the drop zone if there is no appliance inserted
    if (this.mod_DropZoneVisible[0]) {
      this.addpart_DropZone(0, 0, 0, this.mod_Width, this.mod_Height + this.mod_PlinthAreaHeight, this.mod_Depth);
    }

    //======================================================================
    // Calculations generation parts
    //======================================================================

    interface DwInfo {
      Width: number;
      Depth: number;
      Height: number;
      GraphicId: string | undefined;
    }

    let dwInfo: DwInfo = JSON.parse(this.mod_InformationList[0]);
    const realWidth = dwInfo.Width ? dwInfo.Width : this.mod_Width;

    // Create a JSON-object to provide it as attribute for the contour
    const countertopInfo = {
      Element: "storageUnit",
      Width: realWidth,
      Depth: this.mod_Depth,
      DistanceWall: this.mod_CarcaseDistanceWall,
      Hob: 0,
      HobData: ""
    }

    const strJson = JSON.stringify(countertopInfo);

    const {
      CONTOUR_ATTRIBUTE_ADD_TOEKICK,
      CONTOUR_ATTRIBUTE_OWNER_TYPE,
      mr_StorageunitSingle,
    } = GlobalFunc.process_MathLongparts();

    const inSlopedCeilingArea = false;
    const carcaseTopY = this.mod_Height + this.mod_PlinthAreaHeight;
    const plinthAreaHeight = this.mod_PlinthAreaHeight;

    //======================================================================
    // Countertop
    //======================================================================

    const countertopContourBounds = {
      xMin: 0,
      xMax: realWidth,
      zMin: Math.min(
        0,
        -this.mod_CarcaseDistanceWall,
      ),
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
      .set('mod_CarcaseVisLeft', 0)
      .set('mod_CarcaseVisRight', 0)
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
      logError(`In mr_Appliance ${this._id}: Both mod_CreatePaneltop and mod_CreateCeilingFiller are activated. This can lead to errors in the generation. Please only activate one of them.`);
    }
    else if (this.mod_CreatePaneltop || this.mod_CreateCeilingFiller) {

      const topPanelDepth = this.mod_Depth;

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

    }

    //======================================================================
    // Toekick
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

    if (this.mod_CreateToekick ?? false) {


      // Retrieve the positions of the legs
      let legPositionInfo;
      try {
        legPositionInfo = JSON.parse(this.mod_PlinthAreaPositionInfo[0]);
      }
      catch {
        logError(`Could not parse this.mod_PlinthAreaPositionInfo[0] in mr_StorageunitStraight ${this._id}. Toekick will not be recessed correctly.`);
        legPositionInfo = undefined;
      }

      const LineLeft = legPositionInfo?.LineLeft ?? 0;
      const LineRight = legPositionInfo?.LineRight ?? 0;
      const LineFront = legPositionInfo?.LineFront ?? 0;
      const LineBack = legPositionInfo?.LineBack ?? 0;
      const mod_PlinthAreaVisLeft = this.mod_PlinthAreaVisLeft ?? false;
      const mod_PlinthAreaVisRight = this.mod_PlinthAreaVisRight ?? false;

      const toekickContourBounds = {
        xMin: mod_PlinthAreaVisLeft ? LineLeft : 0,
        xMax: realWidth - (mod_PlinthAreaVisRight ? LineRight : 0),
        zMin: LineBack,
        zMax: this.mod_Depth - LineFront,
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
          .set('mod_PlinthAreaVisLeft', mod_PlinthAreaVisLeft ? 1 : 0)
          .set('mod_PlinthAreaVisRight', mod_PlinthAreaVisRight ? 1 : 0)
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
export function mr_Appliance_afterDataCompletion(this: adc_mr_Appliance): void {
  internal_enterModuleAfterDataCompletion('mr_Appliance', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mr_Appliance_AFTERDATACOMPLETION

    // Schuler Consulting
    // Create: April 2025
    // By Ludwig Weber
    // Purpose: CabinetLibrary
    //
    // Description:
    // AfterDataCompletion of mr_Appliance
    //
    // Revisions
    //
    //===================================================

    //===================================================
    // Get the insertion height for the front
    //===================================================

    let StartPosCabinet = this.mod_PlinthAreaDesign_matrix.PlinthAreaType !== 'None' ? this.mod_PlinthAreaHeight! : 0;
    let TopPosCabinet = StartPosCabinet + this.mod_Height;
    this.mod_DropZoneVisible[0] = true;

    //===================================================
    // Calculate the toe kick position
    //===================================================

    let retInfo = GlobalFunc.process_PlinthAreaLegs(this);

    // Provide the position of the legs for creation of the contour
    const legPositions = {
      LineLeft: retInfo.LineLeft,
      LineRight: retInfo.LineRight,
      LineFront: retInfo.LineFront,
      LineBack: retInfo.LineBack
    };
    this.mod_PlinthAreaPositionInfo.push(JSON.stringify(legPositions));


    //===================================================
    //          Cycle through the childs and manage the front elements
    //===================================================

    // Define variables
    let GlobalCount: number = 0;
    let StartPos = this.mod_FrontPosStart + StartPosCabinet;
    let LastFrontElem = 0;
    let foundWidth = 0;

    let tmpLastStartPos: number[] = []; //Stores the position of each front
    tmpLastStartPos[0] = 0;
    let tmpLastGap: number[] = []; //Stores the gap between each fronts (either normal gap or fingergrip gap)
    tmpLastGap[0] = 0;
    let tmpLastFrontFingergrip: boolean[] = [false]; // Stores if the front has fingergrip
    tmpLastFrontFingergrip[0] = false;

    // Cycle
    this.m.forEach(p => {
      if (p instanceof OD_M_mf_Dishwasher) {

        // Found a Dishwasher
        this.mod_DropZoneVisible[0] = false;

        // Set the attributes
        p.mod_FrontId = 'Dishwasher_' + (++GlobalCount);
        p.mod_FrontPosStart = StartPos;

        // setOrigin
        p.setOrigin(0, StartPos, this.mod_Depth);
        p.mod_Originpos[0] = 0;
        p.mod_Originpos[1] = StartPos;
        p.mod_Originpos[2] = this.mod_Depth;
        p.mod_Originpos[3] = TopPosCabinet - StartPos;

        // Check the frontheight
        if (StartPos + p.mod_FrontHeightSelection! >= this.mod_Height + StartPosCabinet) { LastFrontElem = 1 }

        if (LastFrontElem == 1 && p.mod_FingergripTop == true) {
          p.mod_FrontHeight = this.mod_Height - (StartPos - StartPosCabinet + this.mod_FingergripType_matrix.LShapeGapAbove!)
        }
        else if (LastFrontElem == 1 && p.mod_FingergripTop == false) {
          p.mod_FrontHeight = this.mod_Height - (StartPos - StartPosCabinet + this.mod_FrontGapHorTop);
        }
        else {
          StartPos += p.mod_FrontHeightSelection!;
          p.mod_FrontHeight = p.mod_FrontHeightSelection! - this.mod_FrontGapHor;
          tmpLastStartPos.push(StartPos - StartPosCabinet);
          tmpLastGap.push(this.mod_FrontGapHor / 2);
        }

        // Seal the dishwasher to get its dimensions
        let sealedDW = p.seal();

        interface DwInfo {
          Width: number;
          Depth: number;
          Height: number;
          GraphicId: string | undefined;
        }

        let dwInfo: DwInfo = JSON.parse(sealedDW.mod_DishwasherInfo[0]);
        this.mod_InformationList.push(sealedDW.mod_DishwasherInfo[0]);
        foundWidth = dwInfo.Width;
      }
      else if (p instanceof OD_M_mf_BaseunitFridge) {

        // Found a Baseunit Frdige
        this.mod_DropZoneVisible[0] = false;

        // Set the attributes
        p.mod_FrontId = 'BaseunitFridge_' + (++GlobalCount);
        p.mod_FrontPosStart = StartPos;

        // setOrigin
        p.setOrigin(0, StartPos, this.mod_Depth);
        p.mod_Originpos[0] = 0;
        p.mod_Originpos[1] = StartPos;
        p.mod_Originpos[2] = this.mod_Depth;
        p.mod_Originpos[3] = TopPosCabinet - StartPos;

        // Check the frontheight
        if (StartPos + p.mod_FrontHeightSelection! >= this.mod_Height + StartPosCabinet) { LastFrontElem = 1 }

        if (LastFrontElem == 1 && p.mod_FingergripTop == true) {
          p.mod_FrontHeight = this.mod_Height - (StartPos - StartPosCabinet + this.mod_FingergripType_matrix.LShapeGapAbove!)
        }
        else if (LastFrontElem == 1 && p.mod_FingergripTop == false) {
          p.mod_FrontHeight = this.mod_Height - (StartPos - StartPosCabinet + this.mod_FrontGapHorTop);
        }
        else {
          StartPos += p.mod_FrontHeightSelection!;
          p.mod_FrontHeight = p.mod_FrontHeightSelection! - this.mod_FrontGapHor;
          tmpLastStartPos.push(StartPos - StartPosCabinet);
          tmpLastGap.push(this.mod_FrontGapHor / 2);
        }

        // Seal the baseunit fridge to get its dimensions
        let sealedDW = p.seal();

        interface DwInfo {
          Width: number;
          Depth: number;
          Height: number;
          GraphicId: string | undefined;
        }

        let dwInfo: DwInfo = JSON.parse(sealedDW.mod_BaseunitFridgeInfo[0]);
        this.mod_InformationList.push(sealedDW.mod_BaseunitFridgeInfo[0]);
        foundWidth = dwInfo.Width;
      }
    });

    //===================================================
    //          Create vector / docking
    //===================================================

    // Set the width correctly
    let finalWidth = foundWidth > 0 ? foundWidth : this.mod_Width;

    // Left side
    this.addDockingInfo(Dock.LeftBottom, new Vector3(0, 0, -this.mod_CarcaseDistanceWall), new Vector3(0, 0, this.mod_Depth));
    this.addDockingInfo(Dock.LeftTop, new Vector3(0, TopPosCabinet, -this.mod_CarcaseDistanceWall), new Vector3(0, TopPosCabinet, this.mod_Depth));

    // Right side
    this.addDockingInfo(Dock.RightBottom, new Vector3(finalWidth, 0, -this.mod_CarcaseDistanceWall), new Vector3(finalWidth, 0, this.mod_Depth));
    this.addDockingInfo(Dock.RightTop, new Vector3(finalWidth, TopPosCabinet, -this.mod_CarcaseDistanceWall), new Vector3(finalWidth, TopPosCabinet, this.mod_Depth));

    // Back side
    this.addDockingInfo(Dock.BackBottom, new Vector3(0, 0, -this.mod_CarcaseDistanceWall), new Vector3(finalWidth, 0, -this.mod_CarcaseDistanceWall));
    this.addDockingInfo(Dock.BackTop, new Vector3(0, TopPosCabinet, -this.mod_CarcaseDistanceWall), new Vector3(finalWidth, TopPosCabinet, -this.mod_CarcaseDistanceWall));

    //===================================================
    //          Call the UserExit of this module
    //===================================================

    GlobalFunc.ue_Appliance(this);

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
export function mr_Appliance_prepareContext(this: pc_mr_Appliance): void {
  internal_enterModulePrepareContext('mr_Appliance', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mr_Appliance_PREPARECONTEXT

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
export function mr_Appliance_calculateContainerModules(this: ccm_mr_Appliance): void {
  internal_enterCalculateContainerModules('mr_Appliance', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mr_Appliance_CALCULATECONTAINERMODULES

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
export function mr_Appliance_manufacturerDataCompletion(this: dc_mr_Appliance): void {
  internal_enterModuleManufacturerDataCompletion('mr_Appliance', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mr_Appliance_MANUFACTURERDATACOMPLETION

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
