import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars } from '../internal/logging'

//#region Imports
import { cbp_mc_CornerFillerFront01, dc_mc_CornerFillerFront01, adc_mc_CornerFillerFront01, ccm_mc_CornerFillerFront01 } from '../internal/modules/mc_CornerFillerFront01'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_ThermoformedPanel01, OD_M_mc_ThermoformedPanel01 } from '../internal/modules/mc_ThermoformedPanel01'
import { dc_mc_PanelWoodFrame01, OD_M_mc_PanelWoodFrame01 } from '../internal/modules/mc_PanelWoodFrame01'
import { dc_mc_MetalFrame01, OD_M_mc_MetalFrame01 } from '../internal/modules/mc_MetalFrame01'
import { dc_mc_Handlestrip01, OD_M_mc_Handlestrip01 } from '../internal/modules/mc_Handlestrip01'
import { dc_mc_Handle01, OD_M_mc_Handle01 } from '../internal/modules/mc_Handle01'
import { dc_mc_FrontPanel01, OD_M_mc_FrontPanel01 } from '../internal/modules/mc_FrontPanel01'
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

export function mc_CornerFillerFront01_createBuildPlan(this: cbp_mc_CornerFillerFront01): void {
  internal_enterModuleCreateBuildPlan('mc_CornerFillerFront01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_CornerFillerFront01_CREATEBUILDPLAN



    //====================================================================
    // Add FillerHardware for the Corner filler only (the CornerunitStraightFiller does not need it)
    //====================================================================

    if (this.mod_FrontType == 'CornerFiller') {


      // Get the Information of the mod_FillerHardwareInfo
      interface iFillerHardwareInfo {
        Object: string[];
        ConnectionSide: string[];
        PosY: number[];
        PosX: number[];
        HardwareItem: string[];
        ProcessingItem: string[];
        GraphicItem: string[];
      }

      let fillerHardwareInfo: iFillerHardwareInfo = JSON.parse(this.mod_FillerHardwareInfo[0]);

      // Declare variable to share info to left filler to generate processings
      interface iFillerLeftHardwareInfo {
        Model3D: string[];
        ProcessingItem: string[];
        PosX: number[];
        PosY: number[];
      }
      let fillerLeftHardwareInfo: iFillerLeftHardwareInfo = {
        Model3D: [],
        ProcessingItem: [],
        PosX: [],
        PosY: []
      };

      //====================================================================
      // Add Filler Hardware Drawing
      //====================================================================
      let i = 0;
      fillerHardwareInfo.GraphicItem.forEach(item => {

        /*
  
        let graphicItem = GlobalFunc.find_GraphicLibraryMapping(fillerHardwareInfo.GraphicItem[i])
  
        graphicItem.forEach(graphic => {
          let model3D = GlobalFunc.find_GraphicLibrary(graphic.Model3DGroupName!);
          // Calculate Position of FillerHardware BoundaryBox
          let positionFillerHardware = GlobalFunc.process_GraphicInsertionHelper("012", model3D.in_Model3DGroupName!, model3D.DimensionX!, model3D.DimensionY!, model3D.DimensionZ!);
  
          let dimxDrawing = positionFillerHardware.DimensionX!;
          let dimyDrawing = positionFillerHardware.DimensionY!;
          let dimzDrawing = positionFillerHardware.DimensionZ!;
          let posxDrawing: number;
          if (this.mod_Direction == "Right") {
            posxDrawing = retDoorInfo.width + fillerHardwareInfo.PosX[i] + positionFillerHardware.InsertionPointX + positionFillerHardware.OffsetX;
          }
          else { 
            posxDrawing = fillerHardwareInfo.PosX[i] + positionFillerHardware.InsertionPointX + positionFillerHardware.OffsetX;
          }
          
          let posyDrawing = fillerHardwareInfo.PosY[i] + positionFillerHardware.InsertionPointY + positionFillerHardware.OffsetY;
          let poszDrawing: number;
          if (this.mod_Direction == "Right") {
            poszDrawing = 0 + positionFillerHardware.InsertionPointZ + positionFillerHardware.OffsetZ - positionFillerHardware.OversizeZ;
          }
          else { 
            poszDrawing = retDoorInfo.posZ + positionFillerHardware.InsertionPointZ + positionFillerHardware.OffsetZ - positionFillerHardware.OversizeZ;
          }
  
          // Pass information of fillerLeftHardwareInfo
          fillerLeftHardwareInfo.Model3D.push(graphic.Model3DGroupName!);
          fillerLeftHardwareInfo.ProcessingItem.push(fillerHardwareInfo.ProcessingItem[i]);
          fillerLeftHardwareInfo.PosX.push(posxDrawing - retDoorInfo.posX);
          fillerLeftHardwareInfo.PosY.push(posyDrawing + dimyDrawing / 2);
  
          // Get the rotation
          let rotation = 0;
          let test = 0;
          switch (fillerHardwareInfo.ConnectionSide[i]) {
            case 'Right':
              rotation = 180;
              //test = -80;
              break;
            case 'Left':
              rotation = 0;
              break
            case 'Top':
              rotation = 270;
              break
            case 'Btm':
              rotation = 90;
              break
          }
  
          // Get the correction in positioning based on the rotation
          let graphicsRotation = GlobalFunc.find_PartsGraphicRotation('012', 'Z', rotation);
  
          // Add Part FillerHardware
          let posX = graphicsRotation.AdditionalX(dimxDrawing, dimyDrawing, dimzDrawing) + test;
          let posZ = graphicsRotation.AdditionalZ(dimxDrawing, dimyDrawing, dimzDrawing);
          let fillerHardware = this.addpart_FillerHardware(
            posxDrawing + posX,
            posyDrawing + graphicsRotation.AdditionalY(dimxDrawing, dimyDrawing, dimzDrawing), 
            poszDrawing + posZ, 
            dimxDrawing, 
            dimyDrawing, 
            dimzDrawing
          );
  
          // Assign3DModel
          fillerHardware.assign3DModel(model3D.Model3D!);
  
          // Add Material
          let fittingColor = GlobalFunc.process_HardwareColor(fillerHardwareInfo.HardwareItem[i]);
          GlobalFunc.process_AddMaterial(fillerHardware, 'fitting', fittingColor!);
  
          // Rotate 3DModel
          let partMatrix = PartHelper.rotateZ(fillerHardware, rotation, new Vector3(graphicsRotation.RotationVectorX(dimxDrawing, dimyDrawing, dimzDrawing), graphicsRotation.RotationVectorY(dimxDrawing, dimyDrawing, dimzDrawing), graphicsRotation.RotationVectorZ(dimxDrawing, dimyDrawing, dimzDrawing)));
          fillerHardware.setMatrix(partMatrix);
  
          // Set attributes to the part
          fillerHardware.pa_HardwareId = fillerHardwareInfo.HardwareItem[i];
  
  
          // Assign to PartGroup
          this.assignPartGroup(this.mod_FrontId, fillerHardware);
  
  
          //====================================================================
          // Add Filler Hardware Processing
          //====================================================================
          let fillerProcessing: any;
          switch (fillerHardwareInfo.ConnectionSide[i]) {
            case 'Right':
              fillerProcessing = this.addpart_FillerHardware(retDoorInfo.posX + fillerHardwareInfo.PosX[i] - 1, fillerHardwareInfo.PosY[i], poszDrawing, 1, 1, dimzDrawing + positionFillerHardware.OversizeZ);
              break;
            case 'Left':
              if (this.mod_Direction == "Right") {
                fillerProcessing = this.addpart_FillerHardwareProcessing(this.mod_FrontGapVert / 2 + fillerHardwareInfo.PosX[i], fillerHardwareInfo.PosY[i], poszDrawing, 1, 1, dimzDrawing + positionFillerHardware.OversizeZ);
              }
              else {
                fillerProcessing = this.addpart_FillerHardwareProcessing(fillerHardwareInfo.PosX[i]-1, fillerHardwareInfo.PosY[i], poszDrawing, 1, 1, dimzDrawing + positionFillerHardware.OversizeZ); // Nummer 1
              }
              break
            case 'Top':
              fillerProcessing = this.addpart_FillerHardwareProcessing(this.mod_FrontGapVert / 2 + fillerHardwareInfo.PosX[i], fillerHardwareInfo.PosY[i] - 1, poszDrawing, 1, 1, dimzDrawing + positionFillerHardware.OversizeZ);
              break
            case 'Btm':
              fillerProcessing = this.addpart_FillerHardwareProcessing(this.mod_FrontGapVert / 2 + fillerHardwareInfo.PosX[i], fillerHardwareInfo.PosY[i], poszDrawing, 1, 1, dimzDrawing + positionFillerHardware.OversizeZ);
              break
          }
  
          fillerProcessing.pa_ProcessingId = fillerHardwareInfo.ProcessingItem[i];
          fillerProcessing.pa_FrontGapCarcase = this.mod_FrontGapCarcase;
          fillerProcessing.pa_Model3DGroupName = model3D.in_Model3DGroupName!;
          fillerProcessing.pa_Rotation = rotation;
          fillerProcessing.pa_HardwareIdentifier = model3D.Identifier;
        });
  
        i++
        */
      });


      this.m.forEach(child => {
        if (child instanceof OD_M_mc_FrontPanel01) {
          child.mod_FillerHardwareInfo.push(JSON.stringify(fillerLeftHardwareInfo));
        }
      })

    }
    let FillerUnit = this.addpart_FillerUnit(0, 0, 0, this.mod_FrontWidth, this.mod_FrontHeight, this.mod_FrontThk);
    this.createPartGroup(this.mod_FrontId, FillerUnit);

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
export function mc_CornerFillerFront01_afterDataCompletion(this: adc_mc_CornerFillerFront01): void {
  internal_enterModuleAfterDataCompletion('mc_CornerFillerFront01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_CornerFillerFront01_AFTERDATACOMPLETION
    // Schuler Consulting
    // Create: March 2024
    // By Joao Lisboa
    // Purpose: CabinetLibrary
    //
    // Description:
    // CreateAfterDataCompletion of mc_CornerFillerFront01
    // Copied from mc_Door01 --> The adjustments are marqued with the comment ////////////////////////////ADJUSTMENT FROM mc_Door01 TO mc_CornerFillerFront01
    // Revisions:
    //
    //===================================================

    //===================================================
    //          Call the tables and get information
    //===================================================

    // Retrive all the information about the handlestrip
    let FrontRed = 0;
    let HandleHeight = 0;
    let retHandleStripInfo: any;

    if (this.mod_HandleDesign_matrix.HandleType == "Handlestrip") {
      retHandleStripInfo = GlobalFunc.process_HandlestripPos(this);
      FrontRed = retHandleStripInfo.FrontReduction;
      HandleHeight = retHandleStripInfo.HandleH;
    }

    // Retrieve information for the front construction
    let handlePosType = GlobalFunc.find_HandleSettings(this.mod_HandlePosType, 'Door').HandleOrientation!;
    const retDoorInfo = GlobalFunc.process_FrontPanelConstruction(
      this,
      this.mod_FrontType,
      this.mod_FrontProgram,
      this.mod_FrontWidth,
      this.mod_FrontHeight,
      this.mod_HandleDesign_matrix.HandleDesignGroup!,
      handlePosType,
      this.mod_FrontColor_matrix.GrainGroupId
    )

    //===================================================
    //          Add module for the front panel
    //===================================================

    let Door: any;
    let FillerDesign = retDoorInfo.retFrontConstruction.FrontModuleId;

    // Add the module
    //---------------------------------------------------

    if (FillerDesign == "FrontPanel01") {
      Door = this.addOD_M_mc_FrontPanel01();
    }
    else if (FillerDesign == "WoodFrame01") {
      Door = this.addOD_M_mc_PanelWoodFrame01();
    }
    else if (FillerDesign == "AlluminiumFrame01") {
      Door = this.addOD_M_mc_MetalFrame01();
    }
    else if (FillerDesign == "ThermoformedFrame01") {
      Door = this.addOD_M_mc_ThermoformedPanel01();
    }
    else {
      let ErrorMessage = GlobalFunc.find_ErrorList('Error 22004', 1);
      logError(ErrorMessage.Message(''));
    }

    // Set values to the attributes of the child
    Door.mod_Width = retDoorInfo.width;
    Door.mod_Height = retDoorInfo.height;
    Door.mod_Depth = retDoorInfo.thickness;
    Door.mod_Information = JSON.stringify(retDoorInfo);


    ////////////////////////////ADJUSTMENT FROM mc_Door01 TO mc_CornerFillerFront01
    //Door.mod_FrontType = "DoorLeft";
    //if (this.mod_DoorDirection == 'Right'){Door.mod_FrontType = "DoorRight"}
    Door.mod_FrontType = this.mod_FrontType + "Left";
    if (this.mod_DoorDirection == 'Right') { Door.mod_FrontType = this.mod_FrontType + "Right" }
    Door.mod_CornerunitStraightFillerConstruction = this.mod_CornerunitStraightFillerConstruction;
    Door.mod_CarcaseDirection = this.mod_CarcaseDirection;

    // setOrigin
    Door.setOrigin(retDoorInfo.posX, retDoorInfo.posY, retDoorInfo.posZ);

    //===================================================
    //          Add module for the handle strip
    //===================================================

    ////////////////////////////ADJUSTMENT FROM mc_Door01 TO mc_CornerFillerFront01
    //if (this.mod_HandleDesign_matrix.HandleType == "Handlestrip") 
    if (this.mod_HandleDesign_matrix.FillerRelevant == true && this.mod_HandleDesign_matrix.HandleType == "Handlestrip") {
      // Add the module
      let HandleStrip = this.addOD_M_mc_Handlestrip01();
      HandleStrip.mod_Information = JSON.stringify(retHandleStripInfo);

      // Set values to the attributes of the child
      HandleStrip.mod_FrontType = "GroupDoor";
      if (handlePosType == 'StripeLeft' || handlePosType == 'StripeRight') {
        HandleStrip.mod_Height = this.mod_FrontHeight - this.mod_FrontGapHor;
      }
      else {
        HandleStrip.mod_Width = this.mod_FrontWidth - this.mod_FrontGapVert;
      }
      HandleStrip.mod_Depth = this.mod_FrontThk;

      // setOrigin
      //---------------------------------------------------

      //=> Handle on the top
      if (handlePosType == 'StripeTop') {
        HandleStrip.setOrigin(this.mod_FrontGapVert / 2, this.mod_FrontHeight - HandleHeight, 0);
      }
      //=> Handle on the Bottom
      else if (handlePosType == 'StripeBtm') {
        HandleStrip.setOrigin(this.mod_FrontGapVert / 2, 0, 0);
      }
      //=> Handle on the Left
      else if (handlePosType == 'StripeLeft') {
        HandleStrip.setOrigin(this.mod_FrontGapVert / 2, 0, 0);
      }
      //=> Handle on the Right
      else if (handlePosType == 'StripeRight') {
        HandleStrip.setOrigin(this.mod_FrontWidth - this.mod_FrontGapVert / 2 - HandleHeight, 0, 0);
      }
    }

    //===================================================
    //          Add module for the handle
    //===================================================

    ////////////////////////////ADJUSTMENT FROM mc_Door01 TO mc_CornerFillerFront01
    //else if (this.mod_HandleDesign_matrix.HandleType == "Handle") 
    else if (this.mod_HandleDesign_matrix.FillerRelevant == true && this.mod_HandleDesign_matrix.HandleType == "Handle") {
      // Add the module
      let Handles = this.addOD_M_mc_Handle01();

      // Set values to the attributes of the child

      Handles.mod_Width = retDoorInfo.width;
      Handles.mod_Height = retDoorInfo.height;
      Handles.mod_Depth = retDoorInfo.thickness;

      // Provide Information about part on which the handle is positioned
      Handles.mod_FrontType = 'part_Door';
      Handles.mod_PartInfo = this.mod_DoorDirection;

      // setOrigin
      Handles.setOrigin(retDoorInfo.posX, retDoorInfo.posY, retDoorInfo.posZ);
    }




    //===================================================
    //          Process Filler Hardware (for Corner filler)
    //===================================================
    if (this.mod_FrontType == 'CornerFiller') {
      let fillerHardwareInfo: any
      if (this.mod_Direction == 'Right') {
        fillerHardwareInfo = GlobalFunc.process_FillerHardware(this, retDoorInfo.width, retDoorInfo.height, this.mod_Originpos[0] + retDoorInfo.posX, this.mod_Originpos[1] + this.mod_FrontPosStart + retDoorInfo.posY, 'FromFront');
      }
      else {
        fillerHardwareInfo = GlobalFunc.process_FillerHardware(this, retDoorInfo.width, retDoorInfo.height, this.mod_Originpos[2] + retDoorInfo.posX, this.mod_Originpos[1] + this.mod_FrontPosStart + retDoorInfo.posY, 'FromRight');
      }
      let fillerHardwareInfoJson = JSON.stringify(fillerHardwareInfo);
      this.mod_FillerHardwareInfo.push(fillerHardwareInfoJson);
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
export function mc_CornerFillerFront01_calculateContainerModules(this: ccm_mc_CornerFillerFront01): void {
  internal_enterCalculateContainerModules('mc_CornerFillerFront01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_CornerFillerFront01_CALCULATECONTAINERMODULES

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
export function mc_CornerFillerFront01_manufacturerDataCompletion(this: dc_mc_CornerFillerFront01): void {
  internal_enterModuleManufacturerDataCompletion('mc_CornerFillerFront01', this._id);
  try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // CUSTOMSCRIPT_mc_CornerFillerFront01_MANUFACTURERDATACOMPLETION

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
