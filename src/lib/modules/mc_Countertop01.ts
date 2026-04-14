import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars } from '../internal/logging'

//#region Imports
import { cbp_mc_Countertop01, dc_mc_Countertop01, adc_mc_Countertop01, ccm_mc_Countertop01 } from '../internal/modules/mc_Countertop01'
import { GlobalFunc } from '../internal/global-func'
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

export function mc_Countertop01_createBuildPlan(this: cbp_mc_Countertop01): void {
  internal_enterModuleCreateBuildPlan('mc_Countertop01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_Countertop01_CREATEBUILDPLAN

    // Schuler Consulting
    // Create: September 2024
    // By Stefano Cortese
    // CabinetLibrary
    //
    // Description:
    // Insert the part group
    // Create the SVG-path
    // Insert the part for counter top
    //
    // Revisions:
    // Rewrite the complete code
    // Ludwig Weber April 2025
    //
    // Add the cutouts
    // Jiri Polcar November 2025
    //===================================================

    //===================================================
    // Create Variables
    //===================================================

    let BomIdname = this.mod_CountertopId;
    let Countertopfinalwidth = this.mod_CountertopWidth;
    let TotalcounterW = this.mod_CountertopWidth;
    let CounterDepth = this.mod_CountertopDepth;
    let CounterDepthred = 0;
    let TotalcounterWRed = 0;
    let CounterWidthred = 0;
    let CounterWithCut = 0;

    interface CountertopConnection {
      type: "Long" | "Short";
      position: "Left" | "Right";
      length: number;
    }
    let connections: CountertopConnection[] = [];

    //===================================================
    // Insert the part group
    //===================================================

    let CountertopGroup = this.addpart_CountertopGroup(0, 0, 0, this.mod_CountertopWidth, this.mod_CountertopThk, this.mod_CountertopDepth);
    this.createPartGroup(BomIdname, CountertopGroup);

    CountertopGroup.pa_BomId = BomIdname;

    //===================================================
    // Create the SVG-path for the shape
    //===================================================

    // Default Path
    //---------------------------------------------------

    let Point1 = '0 0';
    let Point2 = 'H' + TotalcounterW;
    let Point3 = 'V' + CounterDepth;
    let Point4 = 'L0 ' + CounterDepth;
    let SvgPath = '';

    // Left Connection
    //---------------------------------------------------

    // Drawing data
    if (this.mod_CountertopLeftEndType === "Tongue" || this.mod_CountertopLeftEndType === "Groove") {
      connections.push({
        type: this.mod_CountertopLeftEndType === "Tongue" ? "Short" : "Long",
        position: "Left",
        length: this.mod_CountertopLeftEndType === "Tongue" ? this.mod_CountertopDepth : this.mod_CountertopConnectionLengthLeft
      });
    }

    // Left Tongue
    if (this.mod_CountertopLeftEndType == 'Tongue') {
      CounterDepthred = this.mod_CountertopDepth - this.mod_CountertopConnectionOversize;
      Point1 = '-' + this.mod_CountertopConnectionOversize + ' 0';
      Point4 = 'L0 ' + CounterDepth + ' L-' + this.mod_CountertopConnectionOversize + ' ' + CounterDepthred;
      Countertopfinalwidth = Countertopfinalwidth + this.mod_CountertopConnectionOversize;
    }

    // Left Groove
    else if (this.mod_CountertopLeftEndType == 'Groove') {
      CounterWidthred = this.mod_CountertopConnectionLengthLeft - this.mod_CountertopConnectionOversize;
      CounterDepthred = this.mod_CountertopDepth - this.mod_CountertopConnectionOversize;
      Point4 = 'L' + this.mod_CountertopConnectionLengthLeft + ' ' + this.mod_CountertopDepth + ' L' + CounterWidthred + ' ' + CounterDepthred + ' L0 ' + CounterDepthred;
    }

    // Right Connection
    //---------------------------------------------------

    // Drawing data
    if (this.mod_CountertopRightEndType === "Tongue" || this.mod_CountertopRightEndType === "Groove") {
      connections.push({
        type: this.mod_CountertopRightEndType === "Tongue" ? "Short" : "Long",
        position: "Right",
        length: this.mod_CountertopRightEndType === "Tongue" ? this.mod_CountertopDepth : this.mod_CountertopConnectionLengthRight
      });
    }

    // Right Tongue
    if (this.mod_CountertopRightEndType == 'Tongue') {
      Countertopfinalwidth = Countertopfinalwidth + this.mod_CountertopConnectionOversize;
      TotalcounterW = this.mod_CountertopWidth + this.mod_CountertopConnectionOversize;
      TotalcounterWRed = this.mod_CountertopWidth;
      CounterDepth = this.mod_CountertopDepth;
      CounterDepthred = this.mod_CountertopDepth - this.mod_CountertopConnectionOversize;
      Point2 = 'H' + TotalcounterW;
      Point3 = 'V' + CounterDepthred + ' L' + TotalcounterWRed + ' ' + CounterDepth;
    }

    // Right Groove
    else if (this.mod_CountertopRightEndType == 'Groove') {
      CounterDepthred = this.mod_CountertopDepth - this.mod_CountertopConnectionOversize;
      CounterWidthred = this.mod_CountertopWidth - this.mod_CountertopConnectionLengthRight + this.mod_CountertopConnectionOversize;
      CounterWithCut = this.mod_CountertopWidth - this.mod_CountertopConnectionLengthRight;
      Point3 = 'V' + CounterDepthred + ' H' + CounterWidthred + ' L' + CounterWithCut + ' ' + this.mod_CountertopDepth;
    }

    // Combine the path information
    //---------------------------------------------------

    SvgPath = 'M' + Point1 + ' ' + Point2 + ' ' + Point3 + ' ' + Point4;

    //===================================================
    // Create the SVG-path for the cutout
    //===================================================

    // Parse countertop info for the cutouts
    //---------------------------------------------------

    const parsedCutoutInfo = this.mod_CountertopInfo
      .map(info => {
        const parsed = JSON.parse(info);
        if (parsed.CutoutData) {
          return JSON.parse(parsed.CutoutData);
        }
        return undefined;
      })
      .filter(data => data !== undefined);

    // Create SVG path for each cutout
    //---------------------------------------------------
    parsedCutoutInfo.forEach(cutout => {

      if (!cutout.CutPosX || !cutout.CutPosY || !cutout.CutWidth || !cutout.CutDepth) {
        logError(`mod_CountertopInfo - required data is missing. Skipping the hole creation. CutPosX: ${cutout.CutPosX}, CutPosY: ${cutout.CutPosY}, CutWidth: ${cutout.CutWidth}, CutDepth: ${cutout.CutDepth}`);
      }

      const startX = cutout.CutPosX - cutout.CutWidth / 2;
      const endX = cutout.CutPosX + cutout.CutWidth / 2;
      const startY = this.mod_CountertopDepth - cutout.CutPosY;
      const endY = this.mod_CountertopDepth - (cutout.CutPosY + cutout.CutDepth);
      const r = cutout.CutRadius ?? 0;

      // Rounded rectangle path for cutout with radius r
      if (r > 0) {
        SvgPath += ` M ${startX + r} ${startY}`;
        SvgPath += ` H ${endX - r}`;
        SvgPath += ` A ${r} ${r} 0 0 0 ${endX} ${startY - r}`;
        SvgPath += ` V ${endY + r}`;
        SvgPath += ` A ${r} ${r} 0 0 0 ${endX - r} ${endY}`;
        SvgPath += ` H ${startX + r}`;
        SvgPath += ` A ${r} ${r} 0 0 0 ${startX} ${endY + r}`;
        SvgPath += ` V ${startY - r}`;
        SvgPath += ` A ${r} ${r} 0 0 0 ${startX + r} ${startY}`;
        SvgPath += ' Z';
      }

      // Simple rectangle path for cutout without radius
      else {
        SvgPath += ` M ${startX} ${startY} H ${endX} V ${endY} H ${startX} Z`;
      }
    });

    //===================================================
    // Insert the part for counter top
    //===================================================

    let FinishPanel = this.addpart_Countertop(0, 0, 0, Countertopfinalwidth, this.mod_CountertopThk, this.mod_CountertopDepth);
    FinishPanel.extrude('<svg><path d="' + SvgPath + '"></path></svg>', 'y');
    GlobalFunc.process_AddMaterial(FinishPanel, 'countertop', this.mod_CountertopColor, this.mod_CountertopColor, this.mod_CountertopColor, this.mod_CountertopColor, 'None', false, true);
    this.assignPartGroup(BomIdname, FinishPanel);

    // Add the Information for the countertop drawings
    let countertopInfos = {
      Countertops: [...this.mod_CountertopInfo],
      Connections: connections
    };

    // Set the attributes of the countertop
    FinishPanel.pa_CountertopInfo = JSON.stringify(countertopInfos);
    FinishPanel.pa_BomId = BomIdname;
    FinishPanel.pa_EdgeFrontType = "FRE";
    FinishPanel.pa_EdgeLeftType = this.mod_CountertopEdgeLeftType == "Straight" ? "FRE" : "NOE";
    FinishPanel.pa_EdgeRightType = this.mod_CountertopEdgeRightType == "Straight" ? "FRE" : "NOE";
    FinishPanel.pa_EdgeBackType = "NOE";
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
export function mc_Countertop01_afterDataCompletion(this: adc_mc_Countertop01): void {
  internal_enterModuleAfterDataCompletion('mc_Countertop01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_Countertop01_AFTERDATACOMPLETION

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
export function mc_Countertop01_calculateContainerModules(this: ccm_mc_Countertop01): void {
  internal_enterCalculateContainerModules('mc_Countertop01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_Countertop01_CALCULATECONTAINERMODULES

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
export function mc_Countertop01_manufacturerDataCompletion(this: dc_mc_Countertop01): void {
  internal_enterModuleManufacturerDataCompletion('mc_Countertop01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_Countertop01_MANUFACTURERDATACOMPLETION

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
