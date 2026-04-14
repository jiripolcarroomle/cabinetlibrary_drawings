import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars } from '../internal/logging'

//#region Imports
import { cbp_mc_Fliplift01, dc_mc_Fliplift01, adc_mc_Fliplift01, ccm_mc_Fliplift01 } from '../internal/modules/mc_Fliplift01'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_FrontPanelGlass01, OD_M_mc_FrontPanelGlass01 } from '../internal/modules/mc_FrontPanelGlass01'
import { dc_mc_FrontPanel01, OD_M_mc_FrontPanel01 } from '../internal/modules/mc_FrontPanel01'
import { dc_mc_Handle01, OD_M_mc_Handle01 } from '../internal/modules/mc_Handle01'
import { dc_mc_Handlestrip01, OD_M_mc_Handlestrip01 } from '../internal/modules/mc_Handlestrip01'
import { dc_mc_MetalFrame01, OD_M_mc_MetalFrame01 } from '../internal/modules/mc_MetalFrame01'
import { dc_mc_ThermoformedPanel01, OD_M_mc_ThermoformedPanel01 } from '../internal/modules/mc_ThermoformedPanel01'
import { dc_mc_Pushtoopen01, OD_M_mc_Pushtoopen01 } from '../internal/modules/mc_Pushtoopen01'
import { dc_mc_HingeGroup01, OD_M_mc_HingeGroup01 } from '../internal/modules/mc_HingeGroup01'
import { dc_mc_PanelWoodFrame01, OD_M_mc_PanelWoodFrame01 } from '../internal/modules/mc_PanelWoodFrame01'
import { dc_mc_FlipliftHardware01, OD_M_mc_FlipliftHardware01 } from '../internal/modules/mc_FlipliftHardware01'
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

export function mc_Fliplift01_createBuildPlan(this: cbp_mc_Fliplift01): void {
  internal_enterModuleCreateBuildPlan('mc_Fliplift01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_Fliplift01_CREATEBUILDPLAN
    // Schuler Consulting
    // Create: Oktober 2024
    // By Henning Wiesbrock
    // Purpose: CabinetLibrary
    //
    // Description:
    // CreateBuildPlan of mc_Fliplift01
    // Add the Partgroup for the fliplift
    // Add the Opengroup for the fliplift
    // Manage the opening behaviour of the front elements
    //
    // Revisions:
    // 
    //====================================================================

    //====================================================================
    //          Add Partgroup for the fliplift
    //====================================================================

    let FlipliftUnit = this.addpart_FlipliftUnit(0, 0, 0, this.mod_FrontWidth, this.mod_FrontHeight, this.mod_FrontThk);
    this.createPartGroup(this.mod_FrontId, FlipliftUnit);

    //====================================================================
    //          Add the opening group for the fliplift elements
    //====================================================================

    let nameOfOpenGroup = this.mod_FrontId;
    let openGrp = this.createOpenGroup(nameOfOpenGroup, FlipliftUnit);

    //====================================================================
    //          Manage the opening behaviour
    //====================================================================

    // Manage the opening angle
    //--------------------------------------------------------------------

    let openingAngle = 70;
    if (this.mod_OpeningAngle[0] != undefined) {
      openingAngle = JSON.parse(this.mod_OpeningAngle[0]).Angle;
    };

    // Opening Direction Fliplift Type 'UF'
    //--------------------------------------------------------------------

    if (this.mod_FlipliftType == 'UF') {
      openGrp.openMatrix = MatrixHelper.rotateX((-openingAngle), new Vector3(0, this.mod_FrontHeight, 12));
    }

    // Opening Direction Fliplift Type 'DF'
    //--------------------------------------------------------------------

    if (this.mod_FlipliftType == 'DF') {
      openingAngle = 90;
      openGrp.openMatrix = MatrixHelper.rotateX((openingAngle), new Vector3(0, this.mod_FrontThk / 2, this.mod_FrontThk / 2));
    }

    // Opening Direction Fliplift Type 'LHF'
    //--------------------------------------------------------------------

    if (this.mod_FlipliftType == 'LHF') {
      let matrix = new Matrix4();
      matrix.setPosition(0, this.mod_FrontHeight - 40, 80);
      openGrp.openMatrix = matrix;
    }

    // Opening Direction Fliplift Type 'SHF'
    //--------------------------------------------------------------------

    if (this.mod_FlipliftType == 'SHF') {
      openingAngle = 80;
      openGrp.openMatrix = MatrixHelper.rotateX((-openingAngle), new Vector3(0, this.mod_FrontHeight - 125, -200));
    }

    // Opening Direction Fliplift Type 'FHF'
    //--------------------------------------------------------------------

    if (this.mod_FlipliftType == 'FHF') {

      openingAngle = 120;
      let frontHeight1 = this.mod_FlipliftFrontHeightList[0];
      let frontHeight2 = this.mod_FlipliftFrontHeightList[1];

      //Lower part (don't know why "Top" is included to the ID)
      if (this.mod_FlipliftFrontNumber == 0) {

        // Conversion of the angle from degrees to radians
        let angleInRadians = (openingAngle * Math.PI) / 180;

        // Calculation of the position of the bottom front after the rotation (after opening)
        let rotatedZ = 35 + (frontHeight2 * Math.sin(angleInRadians));
        let rotatedY = frontHeight2 + 25 + (-frontHeight2 * Math.cos(angleInRadians));

        // Create the open matrix
        let rotationMatrix = ModuleHelper.posAndRotateX(0, rotatedY, rotatedZ, 20, new Vector3(0, rotatedY + frontHeight1, rotatedZ));
        openGrp.openMatrix = rotationMatrix;
      }

      //Upper part (like the flap UF)
      else {
        openGrp.openMatrix = MatrixHelper.rotateX((-openingAngle), new Vector3(0, frontHeight2, 12));
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
export function mc_Fliplift01_afterDataCompletion(this: adc_mc_Fliplift01): void {
  internal_enterModuleAfterDataCompletion('mc_Fliplift01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_Fliplift01_AFTERDATACOMPLETION
    // Schuler Consulting
    // Create: October 2024
    // By Henning Wiesbrock
    // Purpose: CabinetLibrary
    //
    // Description:
    // AfterDataCompletion of mc_Fliplift01
    // Add module for the front panel
    // Add module for the handle strip
    // Add module for the handle
    // Add module for the hinges
    // Add module for hardware and fittings
    //
    // Revisions: 
    // Add the hardware and fittings
    // By Ludwig Weber
    // Feb 2025
    //===================================================

    //===================================================
    //          Call the tables and get information
    //===================================================

    // Retrive all the information about the handlestrip
    let FrontRed = 0;
    let HandleHeight = 0;
    let handleWeight = this.mod_HandleWeightCalculations?.[0] ?? 0;
    let retHandleStripInfo: any;

    if (this.mod_HandleDesign_matrix.HandleType == "Handlestrip") {
      retHandleStripInfo = GlobalFunc.process_HandlestripPos(this);
      FrontRed = retHandleStripInfo.FrontReduction;
      HandleHeight = retHandleStripInfo.HandleH;
    }

    //Get CarcaseSpace Information
    let CarcaseSpaceDimension = JSON.parse(this.mod_CarcaseSpaceDimension[0]);

    // Get the Information of the Carcase Parts Info
    let carcasePartInfo = JSON.parse(this.mod_CarcasePartInfo[0]);

    // Retrieve information for the front construction
    let handlePosType = GlobalFunc.find_HandleSettings(this.mod_HandlePosType, 'Fliplift').HandleOrientation!;
    const retFlipLiftInfo = GlobalFunc.process_FrontPanelConstruction(
      this,
      'Fliplift',
      this.mod_FrontProgram,
      this.mod_FrontWidth,
      this.mod_FrontHeight,
      this.mod_HandleDesign_matrix.HandleDesignGroup!,
      handlePosType,
      this.mod_FrontColor_matrix.GrainGroupId
    )

    // Retrieve Oversize from Calcualtions function
    const OversizeInfo = GlobalFunc.calc_FrontOversize(this, 'fliplift', this.mod_FlipliftType);

    //===================================================
    //          Add module for the front panel
    //===================================================

    let fliplift: any;
    let FlipliftDesign = retFlipLiftInfo.retFrontConstruction.FrontModuleId;

    // Add the module
    if (FlipliftDesign == "FrontPanel01") {
      fliplift = this.addOD_M_mc_FrontPanel01();
    }
    else if (FlipliftDesign == "WoodFrame01") {
      fliplift = this.addOD_M_mc_PanelWoodFrame01();
    }
    else if (FlipliftDesign == "AlluminiumFrame01") {
      fliplift = this.addOD_M_mc_MetalFrame01();
    }
    else if (FlipliftDesign == "ThermoformedFrame01") {
      fliplift = this.addOD_M_mc_ThermoformedPanel01();
    }
    else {
      let ErrorMessage = GlobalFunc.find_ErrorList('Error 22034', 1);
      logError(ErrorMessage.Message(''));
    }

    // Set values to the attributes of the child
    fliplift.mod_Width = retFlipLiftInfo.width + OversizeInfo.OversizeLeft + OversizeInfo.OversizeRight;
    fliplift.mod_Height = retFlipLiftInfo.height + OversizeInfo.OversizeTop + OversizeInfo.OversizeBottom;
    fliplift.mod_Depth = retFlipLiftInfo.thickness;
    fliplift.mod_FrontType = 'Fliplift';
    fliplift.mod_FlipliftType = this.mod_FlipliftType;
    fliplift.mod_Information = JSON.stringify(retFlipLiftInfo);

    // setOrigin
    fliplift.setOrigin(retFlipLiftInfo.posX - OversizeInfo.OversizeLeft, retFlipLiftInfo.posY - OversizeInfo.OversizeBottom, retFlipLiftInfo.posZ);

    // Get the front weight
    let frontWeight = retFlipLiftInfo.weight;
    if (this.mod_FlipliftType === 'FHF') {
      let totalHeight = this.mod_FlipliftFrontHeightList.reduce((sum, value) => sum + value, 0);
      let thisHeight = this.mod_FrontHeight;
      frontWeight = (frontWeight / thisHeight) * totalHeight;
    }

    //===================================================
    //          Add module for the handle strip
    //===================================================

    if (this.mod_HandleDesign_matrix.HandleType == "Handlestrip" && !this.mod_FrontId.includes("Top")) {
      // Add the module
      let HandleStrip = this.addOD_M_mc_Handlestrip01();

      // Set values to the attributes of the child
      HandleStrip.mod_FrontType = "GroupFliplift";
      HandleStrip.mod_DoorDirection = "Left";
      //HandleStrip.mod_Width = this.mod_FrontWidth - this.mod_FrontGapVert;
      //HandleStrip.mod_Height = this.mod_FrontHeight - this.mod_FrontGapHor;
      //HandleStrip.mod_Depth = this.mod_FrontThk;

      // setOrigin
      if (handlePosType == 'StrBottom') {
        //HandleStrip.setOrigin(this.mod_FrontGapVert / 2, 0, 0);
      }
      else {
        //HandleStrip.setOrigin(this.mod_FrontGapVert / 2, this.mod_FrontHeight-retHandleSet.matrix_FrontReduction, 0);
      }
    }

    //===================================================
    //          Add module for the handle
    //===================================================

    else if (this.mod_HandleDesign_matrix.HandleType == "Handle" && this.mod_FlipliftFrontNumber == 0) {
      // Add the module
      let Handle = this.addOD_M_mc_Handle01();

      // Set values to the attributes of the child
      Handle.mod_Width = retFlipLiftInfo.width;
      Handle.mod_Height = retFlipLiftInfo.height;
      Handle.mod_Depth = retFlipLiftInfo.thickness;

      // Provide Information about part on which the handle is positioned
      Handle.mod_FrontType = 'part_Fliplift';
      Handle.mod_PartInfo = this.mod_FlipliftType;

      // setOrigin
      Handle.setOrigin(retFlipLiftInfo.posX, retFlipLiftInfo.posY, retFlipLiftInfo.posZ);

      // Seal the handle to get the frontWeight
      let sealedHandle = Handle.seal();
      handleWeight = sealedHandle.mod_HandleWeightCalculations[0];
      this.mod_HandleWeightCalculations.push(handleWeight);
    }

    //===================================================
    //          Calculate FrontOverlay
    //===================================================

    let iFrontOverlay = GlobalFunc.calc_FrontOverlay(
      this, retFlipLiftInfo.width,
      retFlipLiftInfo.height,
      retFlipLiftInfo.posX + this.mod_Originpos[0],
      this.mod_FrontPosStart + retFlipLiftInfo.posY, 'FromFront'
    );
    let jsonFrontOverlay = JSON.stringify(iFrontOverlay);

    //===================================================
    //          Add module for hardware and fittings
    //===================================================

    // Add the module
    let hardware = this.addOD_M_mc_FlipliftHardware01();

    // Set the attributes
    hardware.mod_Width = CarcaseSpaceDimension.WidthFreeSpace;
    hardware.mod_Height = CarcaseSpaceDimension.HeightFreeSpace;
    hardware.mod_Depth = CarcaseSpaceDimension.DepthFreeSpace;
    hardware.mod_FrontType = this.mod_FlipliftType == 'DF' ? 'FlipliftDown' : 'FlipliftUp';
    hardware.mod_FlipliftFrontHeightList.push(...this.mod_FlipliftFrontHeightList);
    hardware.mod_FrontOverlayInfo = jsonFrontOverlay;
    hardware.mod_FrontpanelWeightCalculations.push(frontWeight);
    hardware.mod_HandleWeightCalculations.push(handleWeight);

    // setOrigin
    hardware.setOrigin(CarcaseSpaceDimension.WidthFreeStartPos, 0, 0);

    // Seal the hardware to retrieve the information regarding hinges and push to open
    let sealedHardware = hardware.seal();
    let txtPushToOpen = sealedHardware.mod_HardwareTypeList[0];
    let txtHinges = sealedHardware.mod_HardwareTypeList[1];
    let flipLiftHardwareType = sealedHardware.mod_HardwareTypeList[3];
    let hingeClass = sealedHardware.mod_HardwareTypeList[2];
    this.mod_OpeningAngle[0] = sealedHardware.mod_OpeningAngle[0];

    // Logic when to insert hinges and push to open
    let boolHinges = txtHinges === 'true' &&
      ((this.mod_FlipliftType === 'FHF' && this.mod_FlipliftFrontNumber === 1) ||
        (this.mod_FlipliftType !== 'FHF' && this.mod_FlipliftFrontNumber === 0));

    let boolPushToOpen = txtPushToOpen === 'true' && this.mod_FlipliftFrontNumber === 0;

    //===================================================
    //          Add module for the Push To Open
    //===================================================

    if (boolPushToOpen && this.mod_OpeningType == 'PushToOpenManual') {
      try {
        //---------------Run PushToOpen Process-----------------
        let retPushToOpen = GlobalFunc.process_Pushtoopen(this,
          this.mod_FrontPosStart + this.mod_HeightPosInsertion,
          retFlipLiftInfo.height, iFrontOverlay, (this.mod_FlipliftType_matrix.DirectionType ?? ''), this.mod_FlipliftType,
          retFlipLiftInfo.retFrontConstruction.FrontConstructionId
        );

        if (!retPushToOpen) throw new Error('Missing data for the push to open');

        //---------------Add module-----------------
        let pushToOpen = this.addOD_M_mc_Pushtoopen01();
        if (!pushToOpen) throw new Error('The module for push to open is not existing!');

        //---------------Pass info from process to module-----------------
        let pushToOpenInfo: any = {
          FrontWidth: retFlipLiftInfo.width,
          FrontHeight: retFlipLiftInfo.height,
          FrontWidthPos: retFlipLiftInfo.posX,
          MinFrontGapCarcase: retPushToOpen.MinFrontGapCarcase,
          Part: retPushToOpen.Part,
          PositionHeight: retPushToOpen.PositionHeight,
          PositionWidth: retPushToOpen.PositionWidth,
          Type: retPushToOpen.Type,
          CarcaseHardwareItem: retPushToOpen.CarcaseHardwareItem,
          CarcaseProcessingItem: retPushToOpen.CarcaseProcessingItem,
          CarcaseGraphic: retPushToOpen.CarcaseGraphic,
          PartThk: retPushToOpen.PartThk,
          Offset: retPushToOpen.Offset,
          PosThk: retPushToOpen.PosThk
        };

        let strJson = JSON.stringify(pushToOpenInfo);
        pushToOpen.mod_PushtoopenInfo.push(strJson);

        //---------------Pass carcasePartInfo to module-----------------
        let strJsoncarcasePartInfo = JSON.stringify(carcasePartInfo);
        pushToOpen.mod_CarcasePartInfo.push(strJsoncarcasePartInfo);

        //---------------SetOrigin to module-----------------
        pushToOpen.setOrigin(this.mod_FrontGapVert / 2, 0, 0);
        pushToOpen.mod_Originpos.push(this.mod_Originpos[0] + this.mod_FrontGapVert / 2);
        pushToOpen.mod_Originpos.push(this.mod_Originpos[1]);
        pushToOpen.mod_Originpos.push(this.mod_Originpos[2]);

      }
      catch (error: any) {
        let ErrorMessage = GlobalFunc.find_ErrorList('Error 22006', 1);
        logError(ErrorMessage.Message(error.message));
      }
    }

    //===================================================
    //          Add module for the hinges
    //===================================================

    // Get the hingeClass from the fliplift tables use this one:
    // hingeClass

    if (boolHinges && this.mod_HingeType !== 'NoHinges') {

      //---------------Add the module-----------------
      let HingeGroup = this.addOD_M_mc_HingeGroup01();

      //---------------Pass attributes to module-----------------
      HingeGroup.mod_Width = retFlipLiftInfo.width;
      HingeGroup.mod_Height = retFlipLiftInfo.height;
      HingeGroup.mod_Depth = retFlipLiftInfo.thickness;
      //HingeGroup.mod_FrontDesign = retFlipLiftInfo.retFrontConstruction.FrontDesign!;
      HingeGroup.mod_FrontType = this.mod_FlipliftType == 'DF' ? 'FlipliftDown' : 'FlipliftUp';
      HingeGroup.mod_FlipliftType = this.mod_FlipliftType;
      HingeGroup.mod_FlipliftHardwareType = flipLiftHardwareType;
      HingeGroup.mod_Originpos.push(this.mod_Originpos[0] + this.mod_FrontGapVert / 2);
      HingeGroup.mod_Originpos.push(this.mod_Originpos[1]);
      HingeGroup.mod_Originpos.push(this.mod_Originpos[2]);

      // Set mandatory attributes to any value
      HingeGroup.mod_DoorDirection = "Left";
      HingeGroup.mod_DoorType = "Single";

      //---------------Pass carcasePartInfo to module-----------------
      let strJsoncarcasePartInfo = JSON.stringify(carcasePartInfo);
      HingeGroup.mod_CarcasePartInfo.push(strJsoncarcasePartInfo);

      //---------------Pass FrontPanelConstruction information to module-----------------
      HingeGroup.mod_Information = JSON.stringify(retFlipLiftInfo);

      //--------------- setOrigin-----------------
      HingeGroup.setOrigin(retFlipLiftInfo.posX, retFlipLiftInfo.posY, retFlipLiftInfo.posZ);

      //===================================================
      // Seal mc_HingeGroup01 and get attribute with OpeningAngle 
      //===================================================
      let sealedHingeGroup = HingeGroup.seal();
      this.mod_OpeningAngle[0] = sealedHingeGroup.mod_OpeningAngle[0];
    }

    //===================================================
    //          Add module for the hinge in FHF between doors
    //===================================================

    if (this.mod_FlipliftType == 'FHF' && this.mod_FlipliftFrontNumber === 0) {

      //---------------Add the module-----------------
      let HingeGroupMiddleDoors = this.addOD_M_mc_HingeGroup01();

      //---------------Pass attributes to module-----------------
      HingeGroupMiddleDoors.mod_Width = retFlipLiftInfo.width;
      HingeGroupMiddleDoors.mod_Height = retFlipLiftInfo.height;
      HingeGroupMiddleDoors.mod_Depth = retFlipLiftInfo.thickness;
      //HingeGroupMiddleDoors.mod_FrontDesign = retFlipLiftInfo.retFrontConstruction.FrontDesign!;
      HingeGroupMiddleDoors.mod_FrontType = 'FlipliftUp';
      HingeGroupMiddleDoors.mod_FlipliftType = this.mod_FlipliftType;
      HingeGroupMiddleDoors.mod_FlipliftHardwareType = flipLiftHardwareType;
      HingeGroupMiddleDoors.mod_Originpos.push(this.mod_Originpos[0] + this.mod_FrontGapVert / 2);
      HingeGroupMiddleDoors.mod_Originpos.push(this.mod_Originpos[1]);
      HingeGroupMiddleDoors.mod_Originpos.push(this.mod_Originpos[2]);

      // Set mandatory attributes to any value
      HingeGroupMiddleDoors.mod_DoorDirection = "Left";
      HingeGroupMiddleDoors.mod_DoorType = "Single";


      carcasePartInfo.HorizontalPartsFrontAngle[1] = 180;
      //carcasePartInfo.HorizontalPartsPosY[1] = this.mod_Originpos[1] + retFlipLiftInfo.Height(this) + this.mod_FrontGapHor;
      carcasePartInfo.HorizontalPartsPosY[1] = this.mod_FrontPosStart + retFlipLiftInfo.height + this.mod_FrontGapHor;


      //---------------Pass carcasePartInfo to module-----------------
      let strJsoncarcasePartInfo = JSON.stringify(carcasePartInfo);
      HingeGroupMiddleDoors.mod_CarcasePartInfo.push(strJsoncarcasePartInfo);

      //---------------Pass FrontPanelConstruction information to module-----------------
      HingeGroupMiddleDoors.mod_Information = JSON.stringify(retFlipLiftInfo);

      //--------------- setOrigin-----------------
      HingeGroupMiddleDoors.setOrigin(retFlipLiftInfo.posX, retFlipLiftInfo.posY, retFlipLiftInfo.posZ);

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
export function mc_Fliplift01_calculateContainerModules(this: ccm_mc_Fliplift01): void {
  internal_enterCalculateContainerModules('mc_Fliplift01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_Fliplift01_CALCULATECONTAINERMODULES

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
export function mc_Fliplift01_manufacturerDataCompletion(this: dc_mc_Fliplift01): void {
  internal_enterModuleManufacturerDataCompletion('mc_Fliplift01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_Fliplift01_MANUFACTURERDATACOMPLETION

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
