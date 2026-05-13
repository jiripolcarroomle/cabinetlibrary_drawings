import { internal_enterBomOutput, internal_leaveBomOutput, internal_enterBomPartMasterDataElements, internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches, internal_leaveBomPartMasterDataTouches, internal_enterFunction, internal_leaveFunction, internal_enterModuleManufacturerDataCompletion, internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion, internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan, internal_leaveModuleCreateBuildPlan, internal_enterCollectParts, internal_leaveCollectParts, internal_enterCheckPartAttributes, internal_leaveCheckPartAttributes, internal_enterValidateVariant, internal_leaveValidateVariant, logFatal, logError, logWarning, logInfo, logDebug, getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd, internal_enterCalculateContainerModules, internal_leaveCalculateContainerModules, internal_enterDataCompletionSetDefaultScripts_globalVars, internal_leaveDataCompletionSetDefaultScripts_globalVars, internal_enterModulePrepareContext, internal_leaveModulePrepareContext } from '../../logging'
import { BOM_ElementTypeBase } from '../base';
import { PartBase } from '../../mod-base';

export class BOM_ElementType_ncout_Component extends BOM_ElementTypeBase {
  constructor(partSelf: PartBase, bomParentId?: string) {
    super(partSelf.getNewBomId(), 'ncout_Component', 'NC', "Component", partSelf._id, bomParentId);
  }

  // MPR mode of insertion for groove
  nc_EM?: string;
  // Input component
  nc_IN?: string;
  // Component category
  nc_KAT?: string;
  // MPR coordinate system
  nc_KO?: string;
  // Side of the machining (Top / Btm / Front / Left / Back / Right)
  nc_Side?: string;
  // MPR tool
  nc_TOOL?: string;
  // Component variables
  nc_VA?: string;
  // MPR orientation of the processing
  nc_WI?: number;
  // MPR position x
  nc_XA?: number;
  // MPR position y
  nc_YA?: number;
  // MPR position z
  nc_ZA?: number;
  override getAttributes(): Map<string, any> {
    var res = new Map<string, any>();
    res.set('nc_EM', this.nc_EM);
    res.set('nc_IN', this.nc_IN);
    res.set('nc_KAT', this.nc_KAT);
    res.set('nc_KO', this.nc_KO);
    res.set('nc_Side', this.nc_Side);
    res.set('nc_TOOL', this.nc_TOOL);
    res.set('nc_VA', this.nc_VA);
    res.set('nc_WI', this.nc_WI);
    res.set('nc_XA', this.nc_XA);
    res.set('nc_YA', this.nc_YA);
    res.set('nc_ZA', this.nc_ZA);
    return res;
  }
  override validateData() {
    if (this.nc_EM === undefined) {
      logError("BOM: nc_EM NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Component (Component)");
    }
    if (this.nc_IN === undefined) {
      logError("BOM: nc_IN NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Component (Component)");
    }
    if (this.nc_KAT === undefined) {
      logError("BOM: nc_KAT NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Component (Component)");
    }
    if (this.nc_KO === undefined) {
      logError("BOM: nc_KO NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Component (Component)");
    }
    if (this.nc_Side === undefined) {
      logError("BOM: nc_Side NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Component (Component)");
    }
    if (this.nc_TOOL === undefined) {
      logError("BOM: nc_TOOL NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Component (Component)");
    }
    if (this.nc_VA === undefined) {
      logError("BOM: nc_VA NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Component (Component)");
    }
    if (this.nc_WI === undefined) {
      logError("BOM: nc_WI NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Component (Component)");
    }
    if (this.nc_XA === undefined) {
      logError("BOM: nc_XA NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Component (Component)");
    }
    if (this.nc_YA === undefined) {
      logError("BOM: nc_YA NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Component (Component)");
    }
    if (this.nc_ZA === undefined) {
      logError("BOM: nc_ZA NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Component (Component)");
    }
  }
}
