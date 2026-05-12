import { getSelectionsByAttrId } from './selections';
import { CheckFunc } from './check-func';
import { clearLogMessages, getLogMessages, logError, LogMessage, logWarning } from './logging';

import { IModVarNonNull_mod_ClothingOrganizerDesign, IModVarNonNull_mod_CarcaseEdgeFrontColor } from './var-interfaces';
import { VariantValidation, SelectionEntryBase_number, SelectionEntryBase_string, SelectionEntry_mod_CarcaseEdgeFrontColor, SelectionEntry_mod_ClothingOrganizerDesign, IMatrix_mod_ClothingOrganizerDesign } from './selections';
export const posScriptChecks: Map<string, string[]> = new Map<string, string[]>([
]);
export namespace Checks {
    export var checks: CheckDefinition[] = [
        {
            attrIds: [
                'mod_FrontColor', 'mod_FrontProgram'],
            colIds: [
                undefined, undefined],
            validEntries: [
                [{ value: "152" }, { value: "Classic" }],
                [{ value: "155" }, { value: "Classic" }],
                [{ value: "160" }, { value: "Classic" }],
                [{ value: "165" }, { value: "Classic" }],
                [{ value: "190" }, { value: "Classic" }],
                [{ value: "199" }, { value: "Classic" }],
                [{ value: "199" }, { value: "Tradition" }],
                [{ value: "214" }, { value: "Nature" }],
                [{ value: "214" }, { value: "Tradition" }],
                [{ value: "215" }, { value: "Nature" }],
                [{ value: "215" }, { value: "Tradition" }],
                [{ value: "229" }, { value: "Nature" }],
                [{ value: "229" }, { value: "Tradition" }],
                [{ value: "230" }, { value: "Nature" }],
                [{ value: "230" }, { value: "Tradition" }],
                [{ value: "240" }, { value: "Nature" }],
                [{ value: "240" }, { value: "Tradition" }],
                [{ value: "222" }, { value: "Nature" }],
                [{ value: "222" }, { value: "Tradition" }],
                [{ value: "178" }, { value: "Classic" }],
                [{ value: "380" }, { value: "Modern" }],
                [{ value: "326" }, { value: "Modern" }],
                [{ value: "324" }, { value: "Modern" }],
                [{ value: "316" }, { value: "Modern" }],
                [{ value: "230" }, { value: "Modern" }],
                [{ value: "215" }, { value: "Modern" }],
                [{ value: "152" }, { value: "Tuscan" }],
                [{ value: "155" }, { value: "Tuscan" }],
                [{ value: "160" }, { value: "Tuscan" }],
                [{ value: "165" }, { value: "Tuscan" }],
                [{ value: "178" }, { value: "Tuscan" }],
                [{ value: "190" }, { value: "Tuscan" }],
                [{ value: "199" }, { value: "Tuscan" }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_PlinthAreaDesign', 'mod_PlinthAreaHeight'],
            colIds: [
                undefined, undefined],
            validEntries: [
                [{ value: "20" }, { value: 50 }],
                [{ value: "20" }, { value: 80 }],
                [{ value: "20" }, { value: 100 }],
                [{ value: "20" }, { value: 150 }],
                [{ value: "20" }, { value: 200 }],
                [{ value: "30" }, { value: 100 }],
                [{ value: "30" }, { value: 120 }],
                [{ value: "30" }, { value: 150 }],
                [{ value: "40" }, { value: 100 }],
                [{ value: "40" }, { value: 120 }],
                [{ value: "40" }, { value: 150 }],
                [{ value: "50" }, { value: 250 }],
                [{ value: "10" }, { value: 0 }],
                [{ value: "10" }, { value: 100 }],
                [{ value: "10" }, { value: 120 }],
                [{ value: "10" }, { value: 150 }],
                [{ value: "10" }, { value: 200 }],
                [{ value: "10" }, { value: 250 }],
                [{ value: "10" }, { value: 50 }],
                [{ value: "10" }, { value: 80 }],
                [{ value: "90" }, { value: 50 }],
                [{ value: "90" }, { value: 80 }],
                [{ value: "90" }, { value: 100 }],
                [{ value: "90" }, { value: 120 }],
                [{ value: "90" }, { value: 150 }],
                [{ value: "90" }, { value: 200 }],
                [{ value: "90" }, { value: 250 }],
                [{ value: "90" }, { value: 0 }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_CountertopColor', 'mod_CountertopProgram'],
            colIds: [
                undefined, undefined],
            validEntries: [
                [{ value: "316" }, { value: "Style" }],
                [{ value: "326" }, { value: "Style" }],
                [{ value: "152" }, { value: "Cube" }],
                [{ value: "155" }, { value: "Cube" }],
                [{ value: "160" }, { value: "Cube" }],
                [{ value: "165" }, { value: "Cube" }],
                [{ value: "190" }, { value: "Cube" }],
                [{ value: "199" }, { value: "Cube" }],
                [{ value: "324" }, { value: "Style" }],
                [{ value: "380" }, { value: "Style" }],
                [{ value: "178" }, { value: "Cube" }],
                [{ value: "240" }, { value: "Style" }],
                [{ value: "230" }, { value: "Style" }],
                [{ value: "229" }, { value: "Style" }],
                [{ value: "222" }, { value: "Style" }],
                [{ value: "215" }, { value: "Style" }],
                [{ value: "214" }, { value: "Style" }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_CarcaseBackwallProgram', 'mod_CarcaseBackwallColor'],
            colIds: [
                'GrainGroupId', 'GrainGroupId'],
            validEntries: [
                [{ value: "Neutral" }, { value: "NoGrain" }],
                [{ value: "Vertical" }, { value: "Grain" }],
                [{ value: "Horizontal" }, { value: "Grain" }],
                [{ value: "Neutral" }, { value: "Grain" }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_ToekickProgram', 'mod_ToekickColor'],
            colIds: [
                'GrainGroupId', 'GrainGroupId'],
            validEntries: [
                [{ value: "Neutral" }, { value: "NoGrain" }],
                [{ value: "Vertical" }, { value: "Grain" }],
                [{ value: "Horizontal" }, { value: "Grain" }],
                [{ value: "Neutral" }, { value: "Grain" }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_CarcaseProgram', 'mod_CarcaseColor'],
            colIds: [
                'GrainGroupId', 'GrainGroupId'],
            validEntries: [
                [{ value: "Neutral" }, { value: "NoGrain" }],
                [{ value: "Vertical" }, { value: "Grain" }],
                [{ value: "Horizontal" }, { value: "Grain" }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_CarcaseColor', 'mod_HardwareColor'],
            colIds: [
                undefined, undefined],
            validEntries: [
                [{ value: "316" }, { value: "LightColor" }],
                [{ value: "152" }, { value: "LightColor" }],
                [{ value: "155" }, { value: "LightColor" }],
                [{ value: "160" }, { value: "LightColor" }],
                [{ value: "165" }, { value: "LightColor" }],
                [{ value: "214" }, { value: "LightColor" }],
                [{ value: "215" }, { value: "LightColor" }],
                [{ value: "230" }, { value: "LightColor" }],
                [{ value: "222" }, { value: "LightColor" }],
                [{ value: "178" }, { value: "LightColor" }],
                [{ value: "199" }, { value: "BlackColor" }],
                [{ value: "190" }, { value: "WhiteColor" }],
                [{ value: "229" }, { value: "DarkColor" }],
                [{ value: "240" }, { value: "DarkColor" }],
                [{ value: "326" }, { value: "DarkColor" }],
                [{ value: "324" }, { value: "DarkColor" }],
                [{ value: "380" }, { value: "LightColor" }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_HardwareColor', 'mod_HingeColor'],
            colIds: [
                undefined, undefined],
            validEntries: [
                [{ value: "DarkColor" }, { value: "DemoNickelPlated" }],
                [{ value: "DarkColor" }, { value: "DemoBlack" }],
                [{ value: "LightColor" }, { value: "DemoNickelPlated" }],
                [{ value: "LightColor" }, { value: "DemoBlack" }],
                [{ value: "WhiteColor" }, { value: "DemoNickelPlated" }],
                [{ value: "WhiteColor" }, { value: "DemoBlack" }],
                [{ value: "BlackColor" }, { value: "DemoBlack" }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_ShelfadjColor', 'mod_ShelfadjThk'],
            colIds: [
                undefined, undefined],
            validEntries: [
                [{ value: "316" }, { value: 16 }],
                [{ value: "316" }, { value: 19 }],
                [{ value: "316" }, { value: 25 }],
                [{ value: "326" }, { value: 16 }],
                [{ value: "326" }, { value: 19 }],
                [{ value: "326" }, { value: 25 }],
                [{ value: "152" }, { value: 16 }],
                [{ value: "152" }, { value: 19 }],
                [{ value: "152" }, { value: 25 }],
                [{ value: "155" }, { value: 16 }],
                [{ value: "155" }, { value: 19 }],
                [{ value: "155" }, { value: 25 }],
                [{ value: "160" }, { value: 16 }],
                [{ value: "160" }, { value: 19 }],
                [{ value: "160" }, { value: 25 }],
                [{ value: "165" }, { value: 16 }],
                [{ value: "165" }, { value: 19 }],
                [{ value: "165" }, { value: 25 }],
                [{ value: "190" }, { value: 16 }],
                [{ value: "190" }, { value: 19 }],
                [{ value: "190" }, { value: 25 }],
                [{ value: "199" }, { value: 16 }],
                [{ value: "199" }, { value: 19 }],
                [{ value: "199" }, { value: 25 }],
                [{ value: "214" }, { value: 16 }],
                [{ value: "214" }, { value: 19 }],
                [{ value: "214" }, { value: 25 }],
                [{ value: "324" }, { value: 16 }],
                [{ value: "324" }, { value: 19 }],
                [{ value: "324" }, { value: 25 }],
                [{ value: "215" }, { value: 16 }],
                [{ value: "215" }, { value: 19 }],
                [{ value: "215" }, { value: 25 }],
                [{ value: "229" }, { value: 16 }],
                [{ value: "229" }, { value: 19 }],
                [{ value: "229" }, { value: 25 }],
                [{ value: "230" }, { value: 16 }],
                [{ value: "230" }, { value: 19 }],
                [{ value: "230" }, { value: 25 }],
                [{ value: "240" }, { value: 16 }],
                [{ value: "240" }, { value: 19 }],
                [{ value: "240" }, { value: 25 }],
                [{ value: "222" }, { value: 16 }],
                [{ value: "222" }, { value: 19 }],
                [{ value: "222" }, { value: 25 }],
                [{ value: "380" }, { value: 16 }],
                [{ value: "380" }, { value: 19 }],
                [{ value: "380" }, { value: 25 }],
                [{ value: "178" }, { value: 16 }],
                [{ value: "178" }, { value: 19 }],
                [{ value: "178" }, { value: 25 }],
                [{ value: "FloatGlass" }, { value: 5 }],
                [{ value: "SatinGlass" }, { value: 5 }],
                [{ value: "GreyGlass" }, { value: 5 }],
                [{ value: "316" }, { value: 0 }],
                [{ value: "326" }, { value: 0 }],
                [{ value: "152" }, { value: 0 }],
                [{ value: "155" }, { value: 0 }],
                [{ value: "160" }, { value: 0 }],
                [{ value: "165" }, { value: 0 }],
                [{ value: "190" }, { value: 0 }],
                [{ value: "199" }, { value: 0 }],
                [{ value: "214" }, { value: 0 }],
                [{ value: "324" }, { value: 0 }],
                [{ value: "215" }, { value: 0 }],
                [{ value: "229" }, { value: 0 }],
                [{ value: "230" }, { value: 0 }],
                [{ value: "240" }, { value: 0 }],
                [{ value: "222" }, { value: 0 }],
                [{ value: "380" }, { value: 0 }],
                [{ value: "178" }, { value: 0 }],
                [{ value: "FloatGlass" }, { value: 0 }],
                [{ value: "SatinGlass" }, { value: 0 }],
                [{ value: "GreyGlass" }, { value: 0 }],
                [{ value: "Automatic" }, { value: 5 }],
                [{ value: "Automatic" }, { value: 16 }],
                [{ value: "Automatic" }, { value: 19 }],
                [{ value: "Automatic" }, { value: 25 }],
                [{ value: "Automatic" }, { value: 0 }],
                [{ value: "LikeCarcaseColor" }, { value: 5 }],
                [{ value: "LikeCarcaseColor" }, { value: 16 }],
                [{ value: "LikeCarcaseColor" }, { value: 19 }],
                [{ value: "LikeCarcaseColor" }, { value: 25 }],
                [{ value: "LikeCarcaseColor" }, { value: 0 }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_ShelfadjColor', 'mod_ShelfadjDesign'],
            colIds: [
                undefined, undefined],
            validEntries: [
                [{ value: "316" }, { value: "Automatic" }],
                [{ value: "326" }, { value: "Automatic" }],
                [{ value: "152" }, { value: "Automatic" }],
                [{ value: "155" }, { value: "Automatic" }],
                [{ value: "160" }, { value: "Automatic" }],
                [{ value: "165" }, { value: "Automatic" }],
                [{ value: "190" }, { value: "Automatic" }],
                [{ value: "199" }, { value: "Automatic" }],
                [{ value: "214" }, { value: "Automatic" }],
                [{ value: "324" }, { value: "Automatic" }],
                [{ value: "215" }, { value: "Automatic" }],
                [{ value: "229" }, { value: "Automatic" }],
                [{ value: "230" }, { value: "Automatic" }],
                [{ value: "240" }, { value: "Automatic" }],
                [{ value: "222" }, { value: "Automatic" }],
                [{ value: "380" }, { value: "Automatic" }],
                [{ value: "178" }, { value: "Automatic" }],
                [{ value: "FloatGlass" }, { value: "Automatic" }],
                [{ value: "SatinGlass" }, { value: "Automatic" }],
                [{ value: "GreyGlass" }, { value: "Automatic" }],
                [{ value: "Automatic" }, { value: "Automatic" }],
                [{ value: "LikeCarcaseColor" }, { value: "Automatic" }],
                [{ value: "316" }, { value: "Glass" }],
                [{ value: "326" }, { value: "Glass" }],
                [{ value: "152" }, { value: "Glass" }],
                [{ value: "155" }, { value: "Glass" }],
                [{ value: "160" }, { value: "Glass" }],
                [{ value: "165" }, { value: "Glass" }],
                [{ value: "190" }, { value: "Glass" }],
                [{ value: "199" }, { value: "Glass" }],
                [{ value: "214" }, { value: "Glass" }],
                [{ value: "324" }, { value: "Glass" }],
                [{ value: "215" }, { value: "Glass" }],
                [{ value: "229" }, { value: "Glass" }],
                [{ value: "230" }, { value: "Glass" }],
                [{ value: "240" }, { value: "Glass" }],
                [{ value: "222" }, { value: "Glass" }],
                [{ value: "380" }, { value: "Glass" }],
                [{ value: "178" }, { value: "Glass" }],
                [{ value: "FloatGlass" }, { value: "Glass" }],
                [{ value: "SatinGlass" }, { value: "Glass" }],
                [{ value: "GreyGlass" }, { value: "Glass" }],
                [{ value: "Automatic" }, { value: "Glass" }],
                [{ value: "LikeCarcaseColor" }, { value: "Glass" }],
                [{ value: "316" }, { value: "Wood" }],
                [{ value: "326" }, { value: "Wood" }],
                [{ value: "152" }, { value: "Wood" }],
                [{ value: "155" }, { value: "Wood" }],
                [{ value: "160" }, { value: "Wood" }],
                [{ value: "165" }, { value: "Wood" }],
                [{ value: "190" }, { value: "Wood" }],
                [{ value: "199" }, { value: "Wood" }],
                [{ value: "214" }, { value: "Wood" }],
                [{ value: "324" }, { value: "Wood" }],
                [{ value: "215" }, { value: "Wood" }],
                [{ value: "229" }, { value: "Wood" }],
                [{ value: "230" }, { value: "Wood" }],
                [{ value: "240" }, { value: "Wood" }],
                [{ value: "222" }, { value: "Wood" }],
                [{ value: "380" }, { value: "Wood" }],
                [{ value: "178" }, { value: "Wood" }],
                [{ value: "FloatGlass" }, { value: "Wood" }],
                [{ value: "SatinGlass" }, { value: "Wood" }],
                [{ value: "GreyGlass" }, { value: "Wood" }],
                [{ value: "Automatic" }, { value: "Wood" }],
                [{ value: "LikeCarcaseColor" }, { value: "Wood" }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_FrontProgram', 'mod_FrameFillingType'],
            colIds: [
                undefined, undefined],
            validEntries: [
                [{ value: "Classic" }, { value: "Automatic" }],
                [{ value: "Nature" }, { value: "Automatic" }],
                [{ value: "Tradition" }, { value: "Automatic" }],
                [{ value: "Tradition" }, { value: "Glass" }],
                [{ value: "Modern" }, { value: "Automatic" }],
                [{ value: "Classic" }, { value: "WoodVertical" }],
                [{ value: "Nature" }, { value: "WoodVertical" }],
                [{ value: "Tradition" }, { value: "WoodVertical" }],
                [{ value: "Modern" }, { value: "WoodVertical" }],
                [{ value: "Classic" }, { value: "WoodHorizontal" }],
                [{ value: "Nature" }, { value: "WoodHorizontal" }],
                [{ value: "Tradition" }, { value: "WoodHorizontal" }],
                [{ value: "Modern" }, { value: "WoodHorizontal" }],
                [{ value: "Classic" }, { value: "WoodNeutral" }],
                [{ value: "Nature" }, { value: "WoodNeutral" }],
                [{ value: "Tradition" }, { value: "WoodNeutral" }],
                [{ value: "Modern" }, { value: "WoodNeutral" }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_FrameFillingType', 'mod_FrameFillingColor'],
            colIds: [
                undefined, undefined],
            validEntries: [
                [{ value: "Automatic" }, { value: "316" }],
                [{ value: "Automatic" }, { value: "326" }],
                [{ value: "Automatic" }, { value: "152" }],
                [{ value: "Automatic" }, { value: "155" }],
                [{ value: "Automatic" }, { value: "160" }],
                [{ value: "Automatic" }, { value: "165" }],
                [{ value: "Automatic" }, { value: "190" }],
                [{ value: "Automatic" }, { value: "199" }],
                [{ value: "Automatic" }, { value: "214" }],
                [{ value: "Automatic" }, { value: "324" }],
                [{ value: "Automatic" }, { value: "215" }],
                [{ value: "Automatic" }, { value: "229" }],
                [{ value: "Automatic" }, { value: "230" }],
                [{ value: "Automatic" }, { value: "240" }],
                [{ value: "Automatic" }, { value: "222" }],
                [{ value: "Automatic" }, { value: "380" }],
                [{ value: "Automatic" }, { value: "178" }],
                [{ value: "Automatic" }, { value: "LikeFrameColor" }],
                [{ value: "Automatic" }, { value: "FloatGlass" }],
                [{ value: "Automatic" }, { value: "SatinGlass" }],
                [{ value: "Automatic" }, { value: "GreyGlass" }],
                [{ value: "Automatic" }, { value: "Mirror" }],
                [{ value: "Glass" }, { value: "FloatGlass" }],
                [{ value: "Glass" }, { value: "GreyGlass" }],
                [{ value: "Glass" }, { value: "Mirror" }],
                [{ value: "Glass" }, { value: "SatinGlass" }],
                [{ value: "WoodHorizontal" }, { value: "214" }],
                [{ value: "WoodHorizontal" }, { value: "215" }],
                [{ value: "WoodHorizontal" }, { value: "222" }],
                [{ value: "WoodHorizontal" }, { value: "229" }],
                [{ value: "WoodHorizontal" }, { value: "230" }],
                [{ value: "WoodHorizontal" }, { value: "240" }],
                [{ value: "WoodVertical" }, { value: "214" }],
                [{ value: "WoodVertical" }, { value: "215" }],
                [{ value: "WoodVertical" }, { value: "222" }],
                [{ value: "WoodVertical" }, { value: "229" }],
                [{ value: "WoodVertical" }, { value: "230" }],
                [{ value: "WoodVertical" }, { value: "240" }],
                [{ value: "WoodNeutral" }, { value: "155" }],
                [{ value: "WoodNeutral" }, { value: "160" }],
                [{ value: "WoodNeutral" }, { value: "165" }],
                [{ value: "WoodNeutral" }, { value: "178" }],
                [{ value: "WoodNeutral" }, { value: "190" }],
                [{ value: "WoodNeutral" }, { value: "199" }],
                [{ value: "WoodNeutral" }, { value: "316" }],
                [{ value: "WoodNeutral" }, { value: "324" }],
                [{ value: "WoodNeutral" }, { value: "326" }],
                [{ value: "WoodNeutral" }, { value: "380" }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_FrontProgram', 'mod_FrontDesign'],
            colIds: [
                undefined, undefined],
            validEntries: [
                [{ value: "Classic" }, { value: "Standard" }],
                [{ value: "Classic" }, { value: "SegmentGlassClassic" }],
                [{ value: "Nature" }, { value: "Standard" }],
                [{ value: "Nature" }, { value: "SegmentGlassClassic" }],
                [{ value: "Tradition" }, { value: "Standard" }],
                [{ value: "Tradition" }, { value: "FillingWoodClassic" }],
                [{ value: "Tradition" }, { value: "FillingWoodModern" }],
                [{ value: "Tradition" }, { value: "FillingGlass" }],
                [{ value: "Modern" }, { value: "Standard" }],
                [{ value: "Modern" }, { value: "FillingWoodClassic" }],
                [{ value: "Modern" }, { value: "FillingWoodModern" }],
                [{ value: "Modern" }, { value: "FillingGlass" }],
                [{ value: "Tuscan" }, { value: "Standard" }],
                [{ value: "Tuscan" }, { value: "FillingWoodClassic" }],
                [{ value: "Tuscan" }, { value: "FillingWoodModern" }],
                [{ value: "Tuscan" }, { value: "FillingGlass" }],
            ] as CheckRow[],
        } as CheckDefinition,
        {
            attrIds: [
                'mod_ClothingOrganizerDesign', 'mod_CarcaseEdgeFrontColor'],
            colIds: [
                undefined, undefined],
            checkName: 'FrontDefenition',
        } as CheckDefinition,
    ];


    export enum CheckDropDownEntryKind {
        Normal,
        Conflicting,
        Invalid
    }

    export enum CheckAttributeType {
        Normal,
        Virtual,
        Ranged,
    }

    export class CheckDropDownEntry {
        value: AttributeValue;
        kind: CheckDropDownEntryKind = CheckDropDownEntryKind.Normal;
    }

    export interface CheckDropDownRange {
        min: number;
        max: number;
        step?: number;
    }

    export class CheckAttributeValue {
        attrId: string = '';
        value: AttributeValue;
    }

    export class SolveInitialResult {
        logs: LogMessage[] = [];
    }

    export class CheckConflictResult {
        errorMsg?: string; // should never happen
        overrideAttributes: CheckAttributeValue[] = []; // suggestions of the new values
    }

    export class CheckDropDownResult {
        dropDownEntries: CheckDropDownEntry[] = [];
        dropDownRange?: CheckDropDownRange;
    }

    class CheckDefinition {
        allowAllDropdownValuesAttrId: (string | undefined);
        attrIds: string[] = [];
        colIds: (string | undefined)[] = [];
        validEntries: CheckRow[] = [];
        attrTypes: CheckAttributeType[] | undefined;
        defaultRange: CheckDropDownRange | undefined;
        checkName: string | undefined;
    }

    class AttributeAndColumnId {
        constructor(attributeId: string, columnId: string | undefined) {
            this.attributeId = attributeId;
            this.columnId = columnId;
        }
        attributeId: string;
        columnId: string | undefined;
    }

    type AttributeValue = string | number | boolean | undefined;
    type CellEntry = {
        value: AttributeValue | undefined,
        default: boolean | undefined
        min: number,
        max: number,
        step: number | undefined
    }
    type CheckRow = CellEntry[];
    export type CheckAttributesMap = Map<string, AttributeValue>;

    // See also
    // FE: libs\global\df-frontend-order-configurator\src\lib\order-configurator\state\models\domain\oc-scripts-domain.ts
    // LIB: PosEditorLib.cs (PosGroup)
    type PosGroup = {
        roots: PosModuleData[]
    }

    type PosModuleData = {
        name: string
        modules?: PosModuleData[]
        attributes?: PosModuleAttribute[],
        articleId?: string,
        checkAttributes?: CheckAttributesMap
    }

    type PosModuleAttribute = {
        id: string,
        isInput?: boolean,
        value: AttributeValue
    }

    type MasterData = {
        modules: MDModule[],
        attributes: MDAttribute[]
    }

    type MDModule = {
        id: string,
        assignedAttributes?: string[]
    }

    type MDAttribute = {
        id: string,
        isMain?: boolean,
        selections?: MDAttributeSelection[]
    }

    type MDAttributeSelection = {
        value: AttributeValue,
        min?: number,
        max?: number,
        step?: number
    }

    export class ChecksLogic {

        static areChecksEntriesUpdated: boolean = false;

        // Returns the possible values for a specific drop-down in a specific module situation
        // Returns undefined if we do not have checks defined
        static getDropDownValues(
            checkAttributes: CheckAttributesMap | undefined,
            attrId: string // The id of the attribute
        ): CheckDropDownEntry[] | undefined {
            if (!this.areChecksEntriesUpdated) {
                checks.forEach((c) => removeOutdatedCheckEntries(c));
                this.areChecksEntriesUpdated = true;
            }

            if (!checkAttributes) {
                return undefined;
            }

            const selections = getSelectionsByAttrId(attrId);
            if (selections === undefined) {
                return undefined;
            }

            const dropDownEntries = calculateDropDownEntriesFromSelections(checkAttributes, attrId, selections, true);
            return dropDownEntries;
        }

        static getDropDownValuesWithRanges(checkAttributes: CheckAttributesMap | undefined,
            attrId: string): CheckDropDownResult | undefined {

            if (!this.areChecksEntriesUpdated) {
                (checks as CheckDefinition[]).forEach((c) => removeOutdatedCheckEntries(c));
                this.areChecksEntriesUpdated = true;
            }

            if (!checkAttributes) {
                return undefined;
            }

            const attributeType = getAttributeType(attrId);
            if (attributeType === CheckAttributeType.Ranged) {
                return calculateDropDownEntriesFromRanges(checkAttributes, attrId, true);
            }

            const selections = getSelectionsByAttrId(attrId);
            if (selections === undefined) {
                return undefined;
            }
            return calculateDropDownEntriesFromSelections_NonRanged(checkAttributes, attrId, selections, true);
        }

        static calculateConflictingChange(
            checkAttributes: CheckAttributesMap | undefined,
            leadingAttribute: CheckAttributeValue,
            forceCheck: boolean = false
        ): CheckConflictResult {
            let conflictResult = new CheckConflictResult();
            const attributesWithColumnIds = getUsedAttributesWithColumnIds(leadingAttribute.attrId, checks);

            if (!checkAttributes) {
                return conflictResult;
            }

            if (!checkAttributes.get(leadingAttribute.attrId)) {
                conflictResult.errorMsg = "Attribute not found in module";
                return conflictResult;
            }

            if (isVirtualAttribute(leadingAttribute.attrId)) {
                conflictResult.errorMsg = "Cannot change virtual attribute";
                return conflictResult;
            }

            if (attributesWithColumnIds.length === 0) {
                // if no attributes can be found, the attribute is not part of the checks network, can be safely set.
                return conflictResult;
            }

            const minCheckAttributes = generateMinimalCheckAttributesMap(checkAttributes, attributesWithColumnIds);
            const attributeType = getAttributeType(leadingAttribute.attrId);
            if (!setAttributeValue(minCheckAttributes, leadingAttribute, attributeType, attributesWithColumnIds)) {
                conflictResult.errorMsg = `Could not set attribute ${leadingAttribute.attrId} to value ${leadingAttribute.value}`;
                return conflictResult;
            }

            const leadingAttributeConflictResult = attributeType === CheckAttributeType.Ranged
                ? getRangedLeadingAttributeConflictResult(checkAttributes, leadingAttribute)
                : getNonRangedLeadingAttributeConflictResult(minCheckAttributes, leadingAttribute);

            // error conflict results are unsolvable
            if (leadingAttributeConflictResult?.errorMsg !== undefined) {
                return leadingAttributeConflictResult;
            }

            // positive conflict results are not be enough if thorough checking is required.
            if (leadingAttributeConflictResult !== undefined && !forceCheck) {
                return leadingAttributeConflictResult;
            }

            conflictResult = solveConflict(minCheckAttributes, leadingAttribute, attributeType, attributesWithColumnIds, forceCheck);

            return conflictResult;
        }

        static checkConflicts(module: any) {
            // TODO: Can be called when we open an order after the checks had changed
        }

        static solveInitial(posGroup: PosGroup, masterData: MasterData): SolveInitialResult {
            clearLogMessages(true);
            for (const module of posGroup.roots) {
                // roots should always have article name
                this.solveModuleInitial(module, masterData, module.articleId!);
            }
            return { logs: getLogMessages() };
        }

        static solveModuleInitial(module: PosModuleData, masterData: MasterData, articleId: string) {
            const subNetworks = splitAttributesIntoSubNetworks(module);
            if (module.checkAttributes === undefined) {
                logError(`Module ${module.name} has undefined checkAttributes. Make sure the calc function is called`);
                return;
            }

            for (const subNetwork of subNetworks) {
                const leaderAttributeId = getSubNetworkLeader(subNetwork, module, masterData);
                if (leaderAttributeId === undefined) {
                    // only if subnetwork is empty, which should never happen. skip just in case.
                    continue;
                }

                const leaderAttributeValue = module.attributes?.find(attr => attr.id === leaderAttributeId)?.value;
                const conflictResult = this.calculateConflictingChange(module.checkAttributes, { attrId: leaderAttributeId, value: leaderAttributeValue }, true);
                if (conflictResult.errorMsg !== undefined) {
                    // this subnetwork of module attributes could not be made valid
                    const invalidSubnetworkAttributes = subNetwork.map(a => `'${a}'`).join(', ');
                    logWarning(`Module ${module.name} cannot reach a valid state (sub-network composed of attributes [${invalidSubnetworkAttributes}] does not have a valid state)`);
                    continue;
                }

                // apply changes to module
                for (const attributeToOverride of conflictResult.overrideAttributes) {
                    const mdAttribute = module.attributes?.find(mdAttr => mdAttr.id === attributeToOverride.attrId);
                    if (mdAttribute !== undefined) {
                        mdAttribute.value = attributeToOverride.value;
                    }
                }
            }

            // recursive call for submodules
            for (const subModule of module.modules ?? []) {
                this.solveModuleInitial(subModule, masterData, subModule.articleId ?? articleId);
            }
        }
    }

    /**
    * Splits the attributes of a module into connected-component groups based on
    * the checks network. Two attributes belong to the same group if they appear
    * together (directly or transitively) in one or more CheckDefinitions.
    * Attributes that do not appear in any check are excluded from the result.
    *
    * @returns An array of groups, each group being an array of attribute IDs.
    */
    export function splitAttributesIntoSubNetworks(module: PosModuleData): string[][] {
        const moduleAttrIds = new Set((module.attributes ?? []).map(a => a.id));

        // Union-Find helpers
        const parent = new Map<string, string>();

        function find(x: string): string {
            if (parent.get(x) !== x) {
                parent.set(x, find(parent.get(x)!));
            }
            return parent.get(x)!;
        }

        function union(x: string, y: string) {
            const px = find(x);
            const py = find(y);
            if (px !== py) {
                parent.set(px, py);
            }
        }

        for (const attribute of module.attributes ?? []) {
            if (!parent.has(attribute.id)) {
                parent.set(attribute.id, attribute.id);
            }
        }

        // For each check, union all module-present attribute IDs that appear in it
        for (const check of checks) {
            const presentAttrIds = check.attrIds.filter(id => moduleAttrIds.has(id));

            // Union them all together
            for (let i = 1; i < presentAttrIds.length; i++) {
                union(presentAttrIds[0], presentAttrIds[i]);
            }
        }

        // Collect groups
        const groupMap = new Map<string, string[]>();
        for (const id of parent.keys()) {
            const root = find(id);
            if (!groupMap.has(root)) {
                groupMap.set(root, []);
            }
            groupMap.get(root)!.push(id);
        }
        return Array.from(groupMap.values());
    }

    export function getSubNetworkLeader(subNetwork: string[], module: PosModuleData, masterData: MasterData): string | undefined {
        const availableMDAttributes = masterData.attributes.filter(mdAttribute => subNetwork.includes(mdAttribute.id));

        const bestAttribute = availableMDAttributes.reduce<MDAttribute | undefined>((best, current) => {
            if (!best) return current;

            const bestIsInput = module.attributes?.find(a => a.id === best.id)?.isInput ?? false;
            const currentIsInput = module.attributes?.find(a => a.id === current.id)?.isInput ?? false;

            // isInput beats non-isInput
            if (currentIsInput && !bestIsInput) return current;
            if (!currentIsInput && bestIsInput) return best;

            // Same isInput tier — prefer isMain
            if (current.isMain && !best.isMain) return current;
            if (!current.isMain && best.isMain) return best;

            // Same isMain tier — prefer more selections
            if ((current.selections ?? []).length > (best.selections ?? []).length) {
                return current;
            }
            return best;

        }, undefined);

        return bestAttribute?.id;
    }

    function getRangedLeadingAttributeConflictResult(checkAttributes: CheckAttributesMap, leadingAttribute: CheckAttributeValue): CheckConflictResult | undefined {
        const dropdownResult = calculateDropDownEntriesFromRanges(checkAttributes, leadingAttribute.attrId, false);
        const valueAsNumber = Number(leadingAttribute.value);
        if (dropdownResult?.dropDownRange !== undefined && isValueInRange(valueAsNumber, dropdownResult.dropDownRange)) {
            const conflictResult = new CheckConflictResult();
            conflictResult.overrideAttributes.push(leadingAttribute);
            return conflictResult;
        }
        return undefined;
    }

    function getNonRangedLeadingAttributeConflictResult(minCheckAttributes: CheckAttributesMap, leadingAttribute: CheckAttributeValue): CheckConflictResult | undefined {
        const selections = getSelectionsByAttrId(leadingAttribute.attrId);
        const dropdownResult = calculateDropDownEntriesFromSelections_NonRanged(minCheckAttributes, leadingAttribute.attrId, selections ?? [], false);

        const searchedDropDownValue = dropdownResult.dropDownEntries.find(value => value.value === leadingAttribute.value);

        const conflictResult = new CheckConflictResult();
        if (searchedDropDownValue === undefined) {
            conflictResult.errorMsg = `Could not set attribute ${leadingAttribute.attrId} to value ${leadingAttribute.value}`;
            return conflictResult;
        }

        if (searchedDropDownValue.kind == CheckDropDownEntryKind.Invalid) {
            conflictResult.errorMsg = "Could not find a valid combination of attribute selections that could work";
            return conflictResult;
        }

        if (searchedDropDownValue.kind == CheckDropDownEntryKind.Normal) {
            conflictResult.overrideAttributes.push(leadingAttribute);
            return conflictResult;
        }

        return undefined;
    }

    function getAttributeType(attrId: string): CheckAttributeType | undefined {
        const checkContainingAttribute = (checks as CheckDefinition[]).find(c => c.attrIds.indexOf(attrId) !== -1);
        const attributeType = checkContainingAttribute && checkContainingAttribute.attrTypes
            ? checkContainingAttribute.attrTypes[checkContainingAttribute.attrIds.indexOf(attrId)]
            : undefined;
        return attributeType;
    }

    function isVirtualAttribute(attributeId: string): boolean {
        const virtualAttributesIds = ["_moduleId", "_articleId", "_subArticleId"];
        return virtualAttributesIds.some(id => id === attributeId);
    }

    function calculateDropDownEntriesFromSelections(checkAttributes: CheckAttributesMap, attrId: string, selections: any[],
        allowAllDropdownValues: boolean): CheckDropDownEntry[] {

        const dropDownEntries: CheckDropDownEntry[] = [];
        let checksCount = 0;

        checks.forEach((c: CheckDefinition) => {
            const validValues: AttributeValue[] = []; // can be the "normal value" OR the "column value""

            // Find Index in attrArray
            const idx = c.attrIds.findIndex((p) => p === attrId);

            // work only with checks that contain attrId
            if (idx < 0) {
                return;
            }

            checksCount++;
            const attributeColumn = c.colIds[idx];
            // INFO: Currently we ONLY support two columns!
            // INFO: We later might just go through ALL the other columns
            const otherIdx = (idx + 1) % 2;
            let otherCurrentValue: AttributeValue;

            if (!c.colIds[otherIdx]) {
                otherCurrentValue = checkAttributes.get(c.attrIds[otherIdx]);
            } else {
                const columnId = (c.colIds[otherIdx])!;
                const attributeId = c.attrIds[otherIdx] + ':' + columnId;

                //Checks if the module supports the attribute
                const attribute = checkAttributes.get(attributeId);
                if (attribute) {
                    otherCurrentValue = attribute;
                }
            }

            // this is undefined if the attribute is not provided in the checkAttributes.
            // if not provided in the checksAttributes, it can be ignored
            if (otherCurrentValue === undefined) {
                return;
            }

            if ((allowAllDropdownValues && c.allowAllDropdownValuesAttrId === attrId) ||
                !c.validEntries.some(entry => entry[otherIdx].value === otherCurrentValue)) {
                // this check will leave all selections as valid,
                // if we allow all dropdown values in general AND this attribute is allowed to return all dropdown values, OR
                // if other current value is NOT in any entry, which means that ANY selection would work with it,

                for (const selection of selections) {
                    const selectionValue = attributeColumn ? ((selection as any).matrix as any)[attributeColumn] : (selection as any).value;
                    validValues.push(selectionValue);
                }
            }
            else {
                for (const selection of selections) {
                    const selectionValue: AttributeValue = attributeColumn ? ((selection as any).matrix as any)[attributeColumn] : (selection as any).value;
                    const selectionEntries = c.validEntries.filter(entry => entry[idx].value === selectionValue);
                    if (selectionEntries.length === 0) {
                        // there are no entries defined for this selection, which means that by default, we should assume that it is valid.
                        validValues.push(selectionValue);
                    }
                    else {
                        const validSelectionEntries = selectionEntries.filter(entry => entry[otherIdx].value === otherCurrentValue);
                        if (validSelectionEntries.length !== 0) {
                            // there is an entry in the check which ensures that this selectionValue can be used with otherCurrentValue
                            validValues.push(selectionValue);
                        }
                    }
                }
            }

            const isConflictSolvable = !isCheckIgnoredOnSolve(c);

            if (!c.colIds[idx]) {
                processSelections(selections, validValues, dropDownEntries, isConflictSolvable);
            } else {
                processSelections(selections, validValues, dropDownEntries, isConflictSolvable, c.colIds[idx]);
            }
        });

        if (checksCount === 0) {
            // The attribute is NOT inside the check network, so ALL values are valid
            return selections.map(s => ({
                value: s.value,
                kind: CheckDropDownEntryKind.Normal
            }));
        }

        return dropDownEntries;
    }

    function calculateDropDownEntriesFromSelections_NonRanged(checkAttributes: CheckAttributesMap, attrId: string, selections: any[],
        allowAllDropdownValues: boolean): CheckDropDownResult {
        const dropDownEntries: CheckDropDownEntry[] = [];
        let checksCount = 0;

        checks.forEach((c: CheckDefinition) => {
            const idx = c.attrIds.findIndex((p) => p === attrId);
            // work only with checks that contain attrId
            if (idx < 0) {
                return;
            }

            // skip checks where no other attribute is present in checkAttributes
            const hasOtherAttribute = c.attrIds.some((id, i) => {
                if (i === idx) return false;
                const colId = c.colIds[i];
                const key = getAttributeCheckKey(id, colId);
                return checkAttributes.has(key);
            });
            if (!hasOtherAttribute) {
                return;
            }

            checksCount++;
            const validValues = c.checkName !== undefined
                ? calculateValidValues_NonRanged_ScriptCheck(c, checkAttributes, attrId, selections)
                : calculateValidValues_NonRanged(c, checkAttributes, attrId, selections, allowAllDropdownValues);

            if (validValues === undefined) {
                return;
            }

            const isConflictSolvable = !isCheckIgnoredOnSolve(c);

            if (!c.colIds[idx]) {
                processSelections(selections, validValues, dropDownEntries, isConflictSolvable);
            } else {
                processSelections(selections, validValues, dropDownEntries, isConflictSolvable, c.colIds[idx]);
            }
        });

        if (checksCount === 0) {
            // The attribute is NOT inside the check network, so ALL values are valid
            return {
                dropDownEntries: selections.map(s => ({ value: s.value, kind: CheckDropDownEntryKind.Normal })),
                dropDownRange: undefined
            };
        }

        return { dropDownEntries, dropDownRange: undefined };
    }

    function calculateValidValues_NonRanged_ScriptCheck(c: CheckDefinition, checkAttributes: CheckAttributesMap, attrId: string, selections: any[]): AttributeValue[] {
        const scriptResult = executeScriptGetDropDownValues(checkAttributes, c.checkName!, attrId, selections);
        const validValues = (scriptResult?.dropDownEntries ?? []).filter(entry => entry.kind === CheckDropDownEntryKind.Normal).map(entry => entry.value);

        const idx = c.attrIds.findIndex((p) => p === attrId);
        const attributeColumn = c.colIds[idx];
        if (attributeColumn === undefined) {
            return validValues;
        }

        // identify which selections were marked as valid.
        const validSelections = selections.filter(s => validValues.includes((s as any).value));
        // take only the values for the attribute column
        return validSelections.map(s => ((s as any).matrix as any)[attributeColumn]);
    }

    function calculateValidValues_NonRanged(c: CheckDefinition, checkAttributes: CheckAttributesMap, attrId: string, selections: any[], allowAllDropdownValues: boolean): AttributeValue[] | undefined {
        const otherCurrentValue = getOtherCurrentValue(c, attrId, checkAttributes);

        // this is undefined if the other attribute is not provided in the checkAttributes.
        // in this case, it can be ignored
        if (otherCurrentValue === undefined) {
            return undefined;
        }

        // Cases where all selections are valid:
        // 1. We use this function if we allow all dropdown values in general AND this attribute is allowed to return all dropdown values
        // OR
        // 2. We cannot find any entry for the other attribute value, and this other attribute is NOT ranged
        // Explanation:
        // If the attribute is not ranged, the only way it could not be found is if the value was added at a later stage, and therefore we consider it valid with all selections
        // if the attribute is ranged, it could just be outside any range deifned in the check. We should not assume in this case that all selections are valid.

        const idx = c.attrIds.findIndex((p) => p === attrId);
        const attributeColumn = c.colIds[idx];

        const otherIdx = (idx + 1) % 2;
        const otherAttributeType = c.attrTypes?.[otherIdx];

        if ((allowAllDropdownValues && c.allowAllDropdownValuesAttrId === attrId) ||
            (findMatchingEntries(c.validEntries, c, otherIdx, otherCurrentValue).length === 0 && otherAttributeType !== CheckAttributeType.Ranged)) {

            const validValues: AttributeValue[] = [];
            for (const selection of selections) {
                const selectionValue = attributeColumn ? ((selection as any).matrix as any)[attributeColumn] : (selection as any).value;
                validValues.push(selectionValue);
            }

            return validValues;
        }

        const validValues: AttributeValue[] = [];
        for (const selection of selections) {
            const selectionValue: AttributeValue = attributeColumn ? ((selection as any).matrix as any)[attributeColumn] : (selection as any).value;
            const selectionEntries = c.validEntries.filter(entry => entry[idx].value === selectionValue);
            if (selectionEntries.length === 0) {
                // there are no entries defined for this selection, which means that by default, we should assume that it is valid.
                validValues.push(selectionValue);
            }
            else {
                const validSelectionEntries = findMatchingEntries(selectionEntries, c, otherIdx, otherCurrentValue);
                if (validSelectionEntries.length !== 0) {
                    // there is an entry in the check which ensures that this selectionValue can be used with otherCurrentValue
                    validValues.push(selectionValue);
                }
            }
        }
        return validValues;
    }

    function calculateDropDownEntriesFromRanges(checkAttributes: CheckAttributesMap,
        attrId: string, allowAllDropdownValues: boolean): CheckDropDownResult | undefined {

        let validRange: CheckDropDownRange | undefined;
        let checksCount = 0;
        let validRangeInitialized = false;

        checks.forEach((c: CheckDefinition) => {
            const idx = c.attrIds.findIndex((p) => p === attrId);
            // work only with checks that contain attrId
            if (idx < 0) {
                return;
            }

            // skip checks where no other attribute is present in checkAttributes
            const hasOtherAttribute = c.attrIds.some((id, i) => {
                if (i === idx) return false;
                const colId = c.colIds[i];
                const key = getAttributeCheckKey(id, colId);
                return checkAttributes.has(key);
            });
            if (!hasOtherAttribute) {
                return;
            }

            checksCount++;

            const localValidRange = c.checkName !== undefined
                ? getLocalValidRangeFromScriptCheck(checkAttributes, c.checkName, attrId)
                : getLocalValidRangeFromNonScriptCheck(checkAttributes, c, attrId, allowAllDropdownValues);

            if (localValidRange === undefined) {
                return;
            }

            if (validRange === undefined && !validRangeInitialized) {
                validRange = localValidRange;
                validRangeInitialized = true;
            } else if (validRange !== undefined) {
                validRange = intersectSets(validRange, localValidRange);
            }
        });

        if (checksCount === 0) {
            // The attribute is not inside the check network. There are no ranges to constrict it. 
            // TODO: determine how to represent an "infinite" range. 
            return undefined;
        }

        return { dropDownEntries: [], dropDownRange: validRange };
    }

    function getLocalValidRangeFromScriptCheck(checkAttributes: CheckAttributesMap, checkName: string, attrId: string): CheckDropDownRange | undefined {
        const scriptResult = executeScriptGetDropDownValues(checkAttributes, checkName, attrId, getSelectionsByAttrId(attrId));
        return scriptResult?.dropDownRange;
    }

    function getLocalValidRangeFromNonScriptCheck(checkAttributes: CheckAttributesMap, c: CheckDefinition, attrId: string, allowAllDropdownValues: boolean): CheckDropDownRange | undefined {
        const otherCurrentValue = getOtherCurrentValue(c, attrId, checkAttributes);

        // this is undefined if the other attribute is not provided in the checkAttributes.
        // in this case, it can be ignored
        if (otherCurrentValue === undefined) {
            return undefined;
        }

        const idx = c.attrIds.findIndex((p) => p === attrId);
        const otherIdx = (idx + 1) % 2;

        let localValidRange: CheckDropDownRange;
        const validEntries = c.validEntries.filter(entry => entry[otherIdx].value === otherCurrentValue);
        if ((allowAllDropdownValues && c.allowAllDropdownValuesAttrId === attrId) || validEntries.length === 0) {
            localValidRange = {
                min: c.defaultRange!.min,
                max: c.defaultRange!.max,
                step: c.defaultRange!.step
            };
        } else {
            localValidRange = {
                min: validEntries[0][idx].min,
                max: validEntries[0][idx].max,
                step: validEntries[0][idx].step
            };
        }

        return localValidRange;
    }

    function getOtherCurrentValue(c: CheckDefinition, attrId: string, checkAttributes: CheckAttributesMap): AttributeValue | undefined {
        const idx = c.attrIds.findIndex((p) => p === attrId);
        const otherIdx = (idx + 1) % 2;
        const otherAttributeId = c.attrIds[otherIdx];
        const otherAttributeColumn = c.colIds[otherIdx];
        const otherAttributeKey = getAttributeCheckKey(otherAttributeId, otherAttributeColumn);
        return checkAttributes.get(otherAttributeKey);
    }

    function findMatchingEntries(checkRows: CheckRow[], check: CheckDefinition, otherIdx: number, otherCurrentValue: AttributeValue): CheckRow[] {
        if (check.attrTypes !== undefined && check.attrTypes![otherIdx] === CheckAttributeType.Ranged) {
            // for ranged attributes, we need to find entries where otherCurrentValue is within the range
            return checkRows.filter(checkRow => {
                if (typeof otherCurrentValue !== 'number') {
                    return false;
                }
                return isValueInRange(Number(otherCurrentValue), { min: checkRow[otherIdx].min, max: checkRow[otherIdx].max, step: checkRow[otherIdx].step })
            });
        }

        // non ranged attribute, equality comparison
        return checkRows.filter(entry => entry[otherIdx].value === otherCurrentValue);
    }


    function addDropDownEntry(dropDownEntries: CheckDropDownEntry[], value: AttributeValue, kind: CheckDropDownEntryKind) {
        const dropDownIndex = dropDownEntries.findIndex((entry) => entry.value === value);
        if (dropDownIndex === -1) {
            dropDownEntries.push({ value, kind });
        }
        else if (dropDownEntries[dropDownIndex].kind === CheckDropDownEntryKind.Normal) {
            dropDownEntries[dropDownIndex].kind = kind;
        }
        else if (dropDownEntries[dropDownIndex].kind === CheckDropDownEntryKind.Conflicting && kind === CheckDropDownEntryKind.Invalid) {
            dropDownEntries[dropDownIndex].kind = kind;
        }
    }

    function processSelections(selections: any[], validValues: AttributeValue[], dropDownEntries: CheckDropDownEntry[], isConflictSolvable: boolean, colId?: string) {

        function determineKind(isValid: boolean): CheckDropDownEntryKind {
            if (isValid) return CheckDropDownEntryKind.Normal;
            if (isConflictSolvable) return CheckDropDownEntryKind.Conflicting;
            return CheckDropDownEntryKind.Invalid;
        }

        selections.forEach((s) => {
            if (s.value !== undefined) {
                const isValid = colId
                    ? validValues.findIndex((vv) => vv == ((s as any).matrix as any)[colId]) >= 0
                    : validValues.findIndex((vv) => vv == s.value) >= 0;
                const kind = determineKind(isValid);
                addDropDownEntry(dropDownEntries, s.value, kind);
            }
        });
    }

    function solveConflict(checkAttributes: CheckAttributesMap, leadingAttribute: CheckAttributeValue, leadingAttributeType: CheckAttributeType | undefined, attributesWithColumnIds: AttributeAndColumnId[], forceCheck: boolean): CheckConflictResult {
        const state = new Map<string, AttributeValue>();
        setAttributeValue(state, leadingAttribute, leadingAttributeType, attributesWithColumnIds);

        // take into account only neighboring attributes that are part of the initial state
        const neighbors = getAttributeNeighborsMap(leadingAttribute.attrId);
        filterNeighborsByCheckAttributesMap(neighbors, checkAttributes);

        const validated = new Map<string, boolean>();
        const result = solveConflictRecursively(checkAttributes, attributesWithColumnIds, state, neighbors, forceCheck, validated);

        return result;
    }

    function filterNeighborsByCheckAttributesMap(neighbours: Map<string, CheckDefinition>, checkAttributes: CheckAttributesMap) {
        for (const neighborAttributeId of [...neighbours.keys()]) {
            if (checkAttributes.get(neighborAttributeId) === undefined) {
                neighbours.delete(neighborAttributeId);
            }
        }
    }

    function getAttributeNeighborsMap(attributeId: string): Map<string, CheckDefinition> {
        const neighbours = new Map<string, CheckDefinition>();
        for (const check of checks) {
            if (check.attrIds.indexOf(attributeId) === -1) {
                continue;
            }
            for (const attrId of check.attrIds) {
                if (!neighbours.has(attrId)) {
                    neighbours.set(attrId, check);
                }
            }
        }
        neighbours.delete(attributeId);
        return neighbours;
    }

    /**
     * Solves conflicts by checking only the neighboring attributes of a changed attribute
     * initialState: the original values of the attributes
     * attributesWithColumnIds: attributes and columns needed from the checks. just for simpler usage, I think
     * state: the required new values set for attributes
     * neighbors: the attributes that might be affected by the attributes in the state,
     * forceCheck: boolean value that represents whether all attributes should be manually checked instead of assuming the initial state is valid,
     * validated: the attributes that are already validated to work with the current state, and therefore do not need to be checked again, unless one of their neighbors changes.
    */
    function solveConflictRecursively(initialState: CheckAttributesMap, attributesWithColumnIds: AttributeAndColumnId[], state: CheckAttributesMap, neighbors: Map<string, CheckDefinition>, forceCheck: boolean, validated: Map<string, boolean>): CheckConflictResult {
        if (neighbors.size === 0) {
            const conflictResult = new CheckConflictResult();
            conflictResult.overrideAttributes = Array.from(state.entries())
                // return only attribute values, no need for custom column values
                .filter(([key]) => !key.includes(':'))
                .map(([attrId, value]) => ({ attrId, value }));
            return conflictResult;
        }

        const [attributeId, _] = neighbors.entries().next().value!;
        const attributeType = getAttributeType(attributeId);

        const conflictResult = attributeType === CheckAttributeType.Ranged
            ? solveForRangedAttribute(initialState, attributesWithColumnIds, state, neighbors, forceCheck, validated)
            : solveForNonRangedAttribute(initialState, attributesWithColumnIds, state, neighbors, forceCheck, validated);

        return conflictResult;
    }

    function solveForRangedAttribute(initialState: CheckAttributesMap, attributesWithColumnIds: AttributeAndColumnId[], state: CheckAttributesMap, neighbors: Map<string, CheckDefinition>, forceCheck: boolean, validated: Map<string, boolean>): CheckConflictResult {
        const [attributeId, _] = neighbors.entries().next().value!;
        neighbors.delete(attributeId);
        const searchedAttributeValue = initialState.get(attributeId);

        // injecting validated into state to ensure neighbors of the attribute are initialised
        const validatedState = new Map(state);
        for (const validatedAttributeId of validated.keys()) {
            validatedState.set(validatedAttributeId, initialState.get(validatedAttributeId)!);
        }
        const dropdownResult = calculateDropDownEntriesFromRanges(validatedState, attributeId, false);
        const searchedAttributeValueAsNumber = Number(searchedAttributeValue);

        const range = dropdownResult?.dropDownRange;
        if (range === undefined) {
            // range is undefined if no valid range is found
            const failedResult = new CheckConflictResult();
            failedResult.errorMsg = "Could not find a valid combination of attribute selections that could work";
            return failedResult;
        }

        if (isValueInRange(searchedAttributeValueAsNumber, range)) {
            // this current value of the attribute is already in the valid range

            if (forceCheck) {

                // current attribute has a value that works with the current constraints (state)
                // for now, this is a validated attribute: with a value that works, that does not require change
                // in the future, if any of its neighbors changes, it will no longer be considered validated
                if (validated.get(attributeId) === undefined) {
                    validated.set(attributeId, true);
                }

                // if forced, even though initial value is valid, cannot be sure that the neighbors have valid value
                // therefore, add all NOT VALIDATED neighbors into the queue
                const attributeNeighbors = getAttributeNeighborsMap(attributeId);
                filterNeighborsByCheckAttributesMap(attributeNeighbors, initialState);

                // Q := (Q \ {attributeId}) U (Neighbors \ S \ V)
                for (const [neighborAttributeId, neighborCheck] of attributeNeighbors) {
                    if (state.get(neighborAttributeId) === undefined && validated.get(neighborAttributeId) === undefined && !neighbors.has(neighborAttributeId)) {
                        neighbors.set(neighborAttributeId, neighborCheck);
                    }
                }

            }

            const conflictSolution = solveConflictRecursively(initialState, attributesWithColumnIds, state, neighbors, forceCheck, validated);
            if (conflictSolution.errorMsg === undefined) {
                return conflictSolution;
            }
        }

        if (forceCheck) {
            // the current value of the leading attribute is not valid, according to the state.
            // it will require changing, therefore its neighbors can no longer be considered valid
            const attributeNeighbors = getAttributeNeighborsMap(attributeId);
            for (const neighbor of attributeNeighbors.keys()) {
                validated.delete(neighbor);
            }
        }

        // In a range with no step, we must assume a default step so we can iterate through possible values
        const step = range.step ?? 0.01;
        const orderedOptions = expandFrom(range.min, range.max, step, searchedAttributeValueAsNumber);
        for (const option of orderedOptions) {
            state.set(attributeId, option);

            const attributeNeighbors = getAttributeNeighborsMap(attributeId);
            filterNeighborsByCheckAttributesMap(attributeNeighbors, initialState);

            // Q := (Q \ {attributeId}) U (Neighbors \ S)
            for (const [neighborAttributeId, neighborCheck] of attributeNeighbors) {
                if (state.get(neighborAttributeId) === undefined && !neighbors.has(neighborAttributeId)) {
                    neighbors.set(neighborAttributeId, neighborCheck);
                }
            }

            const conflictSolution = solveConflictRecursively(initialState, attributesWithColumnIds, state, new Map(neighbors), forceCheck, validated);
            if (conflictSolution.errorMsg === undefined) {
                return conflictSolution;
            }

            // when reaching this point, it means all supersets of the updated state are invalid.
            // try another updated state by changing the selection used for this attribute.
            state.delete(attributeId);
        }

        // when reaching this point, there is no selection for this attribute that works with the current state.
        const failedResult = new CheckConflictResult();
        failedResult.errorMsg = "Could not find a valid combination of attribute selections that could work";
        return failedResult;
    }

    function solveForNonRangedAttribute(initialState: CheckAttributesMap, attributesWithColumnIds: AttributeAndColumnId[], state: CheckAttributesMap, neighbors: Map<string, CheckDefinition>, forceCheck: boolean, validated: Map<string, boolean>): CheckConflictResult {
        // Is current selection valid? Try to see if it satisfies the current state.
        const [attributeId, check] = neighbors.entries().next().value!;
        neighbors.delete(attributeId);
        const searchedAttributeValue = initialState.get(attributeId);

        // virtual attributes do not have selections. for the purpose of solving conflicts,
        // since these virtual attributes act like attributes with values that cannot change,
        // they act like attributes with a single selection, for their value
        const attributeSelections = isVirtualAttribute(attributeId)
            ? [{ value: searchedAttributeValue }]
            : getSelectionsByAttrId(attributeId);

        if (attributeSelections === undefined) {
            const failedResult = new CheckConflictResult();
            failedResult.errorMsg = `Could not find selections for attribute ${attributeId}`;
            return failedResult;
        }

        // injecting validated into state to ensure neighbors of the attribute are initialised
        const validatedState = new Map(state);
        for (const validatedAttributeId of validated.keys()) {
            validatedState.set(validatedAttributeId, initialState.get(validatedAttributeId)!);
        }
        const dropdownResult = calculateDropDownEntriesFromSelections_NonRanged(validatedState, attributeId, attributeSelections!, false);
        const currentAttributeValue = dropdownResult.dropDownEntries?.find(entry => entry.value == searchedAttributeValue);
        const isInitialSelectionValid = currentAttributeValue?.kind === CheckDropDownEntryKind.Normal;

        if (isInitialSelectionValid) {

            if (forceCheck) {

                // current attribute has a value that works with the current constraints (state)
                // for now, this is a validated attribute: with a value that works, that does not require change
                // in the future, if any of its neighbors changes, it will no longer be considered validated
                if (validated.get(attributeId) === undefined) {
                    validated.set(attributeId, true);
                }

                // if forced, even though initial value is valid, cannot be sure that the neighbors have valid value
                // therefore, add all NOT VALIDATED neighbors into the queue
                const attributeNeighbors = getAttributeNeighborsMap(attributeId);
                filterNeighborsByCheckAttributesMap(attributeNeighbors, initialState);

                // Q := (Q \ {attributeId}) U (Neighbors \ S \ V)
                for (const [neighborAttributeId, neighborCheck] of attributeNeighbors) {
                    if (state.get(neighborAttributeId) === undefined && validated.get(neighborAttributeId) === undefined && !neighbors.has(neighborAttributeId)) {
                        neighbors.set(neighborAttributeId, neighborCheck);
                    }
                }
            }

            // the current state does not make this attribute change its value
            const conflictSolution = solveConflictRecursively(initialState, attributesWithColumnIds, state, neighbors, forceCheck, validated);
            if (conflictSolution.errorMsg === undefined) {
                return conflictSolution;
            }
        }

        if (forceCheck) {
            // the current value of the leading attribute is not valid, according to the state.
            // it will require changing, therefore its neighbors might no longer be considered valid
            const attributeNeighbors = getAttributeNeighborsMap(attributeId);
            for (const neighbor of attributeNeighbors.keys()) {
                validated.delete(neighbor);
            }
        }

        const orderedSelections = getOrderedSelections(check, state, attributeSelections, attributeId);
        for (const selection of orderedSelections) {
            const selectionAttributeValue = dropdownResult.dropDownEntries?.find(entry => entry.value == selection.value);
            const isSelectionValid = selectionAttributeValue === undefined || selectionAttributeValue.kind === CheckDropDownEntryKind.Normal;
            if (!isSelectionValid) {
                continue;
            }

            setAttributeValueBySelection(state, { attrId: attributeId, value: selection.value }, selection, attributesWithColumnIds);

            // take into account only neighboring attributes that are part of the initial state
            const attributeNeighbours = getAttributeNeighborsMap(attributeId);
            filterNeighborsByCheckAttributesMap(attributeNeighbours, initialState);

            // Q := (Q \ {attributeId}) U (Neighbors \ S)
            for (const [neighbourAttributeId, neighbourCheck] of attributeNeighbours) {
                if (state.get(neighbourAttributeId) === undefined && !neighbors.has(neighbourAttributeId)) {
                    neighbors.set(neighbourAttributeId, neighbourCheck);
                }
            }
            const conflictSolution = solveConflictRecursively(initialState, attributesWithColumnIds, state, new Map(neighbors), forceCheck, validated);
            if (conflictSolution.errorMsg === undefined) {
                return conflictSolution;
            }

            // when reaching this point, it means all supersets of the updated state are invalid.
            // try another updated state by changing the selection used for this attribute.
            unsetAttributeValue(state, attributeId, attributesWithColumnIds);
        }

        // when reaching this point, there is no selection for this attribute that works with the current state.
        const failedResult = new CheckConflictResult();
        failedResult.errorMsg = "Could not find a valid combination of attribute selections that could work";
        return failedResult;
    }

    function getOrderedSelections(check: CheckDefinition, state: CheckAttributesMap, attributeSelections: any, attributeId: string) {
        // there is no special ordering for selections when using a script check
        if (check.checkName !== undefined) {
            return attributeSelections;
        }
        const otherAttributeIndex = check.colIds[0] === attributeId ? 1 : 0;
        const otherAttributeId = check.attrIds[otherAttributeIndex];
        const otherAttributeColumn = check.colIds[otherAttributeIndex];
        const otherAttributeValue = state.get(getAttributeCheckKey(otherAttributeId, otherAttributeColumn));
        const defaultSelection = otherAttributeValue === undefined
            ? undefined
            : getDefaultSelection(check, attributeSelections, { attributeId: otherAttributeId, columnId: otherAttributeColumn }, otherAttributeValue, attributeId);

        const orderedSelections = defaultSelection === undefined
            ? attributeSelections
            : [defaultSelection, ...attributeSelections.filter((s: any) => s !== defaultSelection)];
        return orderedSelections;
    }

    function generateMinimalCheckAttributesMap(checkAttributes: CheckAttributesMap, attributesWithColumnIds: AttributeAndColumnId[]): CheckAttributesMap {
        const minimalCopy: CheckAttributesMap = new Map();

        attributesWithColumnIds.forEach(attributeIdAndValue => {
            const attributeId = attributeIdAndValue.attributeId;
            const attributeColumn = attributeIdAndValue.columnId;
            const expectedAttributeProperty = getAttributeCheckKey(attributeId, attributeColumn);
            const attributeValue = checkAttributes.get(expectedAttributeProperty)
            if (attributeValue !== undefined) {
                minimalCopy.set(expectedAttributeProperty, attributeValue);
            }
            if (checkAttributes.get(attributeId) !== undefined) {
                minimalCopy.set(attributeId, checkAttributes.get(attributeId));
            }
        });

        return minimalCopy;
    }

    function setAttributeValueBySelection(checkAttributes: CheckAttributesMap, leadingAttribute: CheckAttributeValue, selection: any, attributesWithColumnIds: AttributeAndColumnId[]) {
        checkAttributes.set(leadingAttribute.attrId, leadingAttribute.value)
        const columns = attributesWithColumnIds
            .filter(a => a.attributeId === leadingAttribute.attrId && a.columnId)
            .map(a => a.columnId);

        columns.forEach(column => {
            const expectedId = getAttributeCheckKey(leadingAttribute.attrId, column);
            checkAttributes.set(expectedId, (selection as any).matrix[column!]);
        });
    }

    function setAttributeValue(checkAttributes: CheckAttributesMap, leadingAttribute: CheckAttributeValue, attributeType: CheckAttributeType | undefined, attributesWithColumnIds: Array<AttributeAndColumnId>): boolean {
        if (attributeType === CheckAttributeType.Ranged) {
            checkAttributes.set(leadingAttribute.attrId, leadingAttribute.value)
            return true;
        }
        const attributeSelections = getSelectionsByAttrId(leadingAttribute.attrId);
        if (!attributeSelections) {
            return false;
        }
        const row = attributeSelections.find(p => p.value !== undefined && p.value == leadingAttribute.value);
        if (!row) {
            return false;
        }
        setAttributeValueBySelection(checkAttributes, leadingAttribute, row, attributesWithColumnIds);

        return true;
    }

    function unsetAttributeValue(checkAttributes: CheckAttributesMap, attributeId: string, attributesWithColumnIds: AttributeAndColumnId[]) {
        const attributeEntries = attributesWithColumnIds.filter(x => x.attributeId === attributeId);
        for (const entry of attributeEntries) {
            const key = entry.columnId === undefined
                ? entry.attributeId
                : getAttributeCheckKey(entry.attributeId, entry.columnId);
            checkAttributes.delete(key);
        }
    }

    function getUsedAttributesWithColumnIds(leadingAttributeId: string, checks: CheckDefinition[]): AttributeAndColumnId[] {
        const result = getUsedAttributesWithColumnIdsRecursively(leadingAttributeId, checks, []);
        return Array.from(result.values());
    }

    function getUsedAttributesWithColumnIdsRecursively(leadingAttributeId: string, checks: CheckDefinition[], visitedChecks: CheckDefinition[]): Map<string, AttributeAndColumnId> {
        const result = new Map<string, AttributeAndColumnId>();
        const checksContainingLeadingAttribute = checks
            .filter(check => check.attrIds.findIndex(attributeId => attributeId === leadingAttributeId) != -1 &&
                visitedChecks.findIndex(visitedCheck => visitedCheck === check) === -1);

        checksContainingLeadingAttribute.forEach(check => {

            const leadingAttributeIndex = check.attrIds.indexOf(leadingAttributeId);
            const leadingAttributeColumnId = check.colIds[leadingAttributeIndex];
            const leadingAttributeAndColumnId = new AttributeAndColumnId(leadingAttributeId, leadingAttributeColumnId);
            const leadingAttributeKey = getAttributeKey(leadingAttributeAndColumnId);
            result.set(leadingAttributeKey, leadingAttributeAndColumnId);

            const otherAttributeIds: string[] = [];
            for (let otherAttributeIndex = 0; otherAttributeIndex < check.attrIds.length; otherAttributeIndex++) {
                const otherAttributeId = check.attrIds[otherAttributeIndex];
                if (otherAttributeId === leadingAttributeId) {
                    continue;
                }
                otherAttributeIds.push(otherAttributeId);
                const otherAttributeColumnId = check.colIds[otherAttributeIndex];
                const attributeAndColumnId = new AttributeAndColumnId(otherAttributeId, otherAttributeColumnId);
                const attributeKey = getAttributeKey(attributeAndColumnId);
                result.set(attributeKey, attributeAndColumnId);
            }

            visitedChecks.push(check);

            for (const otherAttributeId of otherAttributeIds) {
                const subResult = getUsedAttributesWithColumnIdsRecursively(otherAttributeId, checks, visitedChecks);
                subResult.forEach((value, key) => {
                    result.set(key, value);
                })
            }
        });

        return result;
    }

    function getAttributeKey(attributeAndColumnId: AttributeAndColumnId): string {
        return `${attributeAndColumnId.attributeId}-${attributeAndColumnId.columnId}`;
    }

    function getAttributeCheckKey(attributeId: string, columnId: string | undefined): string {
        return columnId ? `${attributeId}:${columnId}` : attributeId;
    }

    function removeOutdatedCheckEntries(check: CheckDefinition) {
        if (check.checkName) {
            return;
        }

        const keptEntries: CheckRow[] = [];

        for (const entry of check.validEntries) {
            if (isEntrySelectionValid(entry, check)) {
                keptEntries.push(entry);
            }
        }

        check.validEntries = keptEntries;
    }

    function isEntrySelectionValid(entry: CheckRow, check: CheckDefinition): boolean {
        for (let i = 0; i < check.attrIds.length; i++) {
            const isVirtual = check.attrTypes !== undefined && check.attrTypes[i] === 1;
            if (isVirtual) {
                continue;
            }

            const isRanged = check.attrTypes !== undefined && check.attrTypes[i] === 2;
            if (isRanged) {
                continue;
            }

            const attrId = check.attrIds[i];
            const column = check.colIds[i];
            const selections = getSelectionsByAttrId(attrId);
            if (selections === undefined) {
                return false;
            }
            if (findValueInSelections(selections, column, entry[i].value) === undefined) {
                return false;
            }
        }

        return true;
    }

    function findValueInSelections(selections: any, columnId: string | undefined, searchedValue: AttributeValue): any | undefined {
        if (columnId === undefined) {
            return selections.find((s: any) => (s as any).value === searchedValue);
        }
        return selections.find((s: any) => ((s as any).matrix as any)[columnId] === searchedValue);
    }

    function isCheckIgnoredOnSolve(check: CheckDefinition) {
        return check.attrTypes !== undefined && check.attrTypes.some(t => t === CheckAttributeType.Virtual);
    }

    // Searches for a default selection for desiredAttributeId when currentAttribute is set to currentAttributeValue.
    function getDefaultSelection(check: CheckDefinition, selections: any[], currentAttribute: AttributeAndColumnId, currentAttributeValue: AttributeValue, desiredAttributeId: string): any | undefined {
        const currentAttributeIndex = check.attrIds.indexOf(currentAttribute.attributeId);
        const desiredAttributeIndex = check.attrIds.indexOf(desiredAttributeId);

        // find entries where cell value of the attrId is currentAttributeValue
        // and where cell of desiredAttributeId is marked as default.
        const defaultEntries = check.validEntries.filter(entry =>
            entry[currentAttributeIndex].value === currentAttributeValue &&
            entry[desiredAttributeIndex].default === true);

        if (defaultEntries.length === 0) {
            // no default value of desiredAttributeId defined for currentAttribute 
            return undefined;
        }

        // there should be only one default entry per selection
        const defaultEntry = defaultEntries[0];
        const defaultSelection = findValueInSelections(selections, check.colIds[desiredAttributeIndex], defaultEntry[desiredAttributeIndex].value);

        return defaultSelection;
    }

    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const lcm = (a: number, b: number): number => Math.abs(a * b) / gcd(a, b);

    function extendedLcm(a: number, b: number): number {
        // Scale a and b up until both are integers
        let scale = 1;
        let aScaled = a, bScaled = b;
        while (!Number.isInteger(aScaled) || !Number.isInteger(bScaled)) {
            aScaled *= 10;
            bScaled *= 10;
            scale *= 10;
        }
        const lcmInt = lcm(Math.round(aScaled), Math.round(bScaled));
        // Scale back to original units
        return lcmInt / scale;
    }

    function intersectSets(a: CheckDropDownRange, b: CheckDropDownRange): CheckDropDownRange | undefined {
        const min = Math.max(a.min, b.min);
        const max = Math.min(a.max, b.max);
        if (min > max) {
            return undefined; // no overlap
        }

        // Case 1: both continuous
        if (!a.step && !b.step) {
            return { min, max };
        }

        // Case 2: one is continuous - return stepped one clipped to overlap
        if (!b.step) {
            if (a.min === min) {
                // no offset needed
                return { min, max, step: a.step };
            }

            // need to find the first number greater or equal to min, aka b.min, that can be written as x = a.min + k * a.step
            const alignedMin = findAlignedNumber(a.min, b.min, a.step!);
            if (alignedMin > max) {
                return undefined;
            }
            return { min: alignedMin, max, step: a.step };
        }

        if (!a.step) {
            if (b.min === min) {
                // no offset needed
                return { min, max, step: b.step };
            }

            // min = a.min
            const alignedMin = findAlignedNumber(b.min, a.min, b.step!);
            if (alignedMin > max) {
                return undefined;
            }
            return { min: alignedMin, max, step: b.step };
        }

        // Case 3: both stepped - discrete intersection
        const step = extendedLcm(a.step!, b.step!);
        const minStep = min == a.min ? a.step : b.step;

        // start from the minimum. find the first element in both sets.
        for (let n = min; n <= max; n += minStep!) {
            const aRemainder = (n - a.min) % a.step!;
            const bRemainder = (n - b.min) % b.step!;
            if (aRemainder === 0 && bRemainder === 0) {
                // found first common element
                const firstCommon = n;
                return { min: firstCommon, max, step };
            }
        }

        // failed to find common element
        return undefined;
    }

    function isValueInRange(value: number, range: CheckDropDownRange): boolean {
        if (!range.step) {
            return range.min <= value && value <= range.max;
        }
        let valueScaled = value, minScaled = range.min, stepScaled = range.step!;
        while (!Number.isInteger(valueScaled) || !Number.isInteger(minScaled) || !Number.isInteger(stepScaled)) {
            valueScaled *= 10;
            minScaled *= 10;
            stepScaled *= 10;
        }
        return range.min <= value && value <= range.max && (valueScaled - minScaled) % stepScaled === 0;
    }


    /**
     * Returns the smallest value greater than or equal to start
     * that belongs to the arithmetic sequence:
     *
     *    baseValue + k * step
     *
     * In other words, it finds the next number >= start whose
     * remainder modulo step matches that of baseValue.
     *
     * @param baseValue  A reference value defining the modulo class.
     * @param start      The value from which to search forward.
     * @param step       The spacing between values in the sequence (must be > 0).
     * @returns          The smallest number >= start aligned to the sequence.
     */
    export function findAlignedNumber(baseValue: number, start: number, step: number): number {
        const targetRemainder = baseValue % step;
        const startRemainder = start % step;

        const offset = (targetRemainder - startRemainder + step) % step;
        return start + offset;
    }


    // export for unit testing
    export function* expandFrom(min: number, max: number, step: number, x: number): Generator<number> {
        const startingPoint = findClosestInSteppedRange(x, min, max, step);
        yield startingPoint;

        let n = 1;
        while (true) {
            let found = false;

            const right = startingPoint + n * step;
            if (right <= max) {
                yield right;
                found = true;
            }

            const left = startingPoint - n * step;
            if (left >= min) {
                yield left;
                found = true;
            }

            if (!found) {
                break;
            }

            n++;
        }
    }

    // export for unit testing
    export function findClosestInSteppedRange(x: number, min: number, max: number, step: number): number {
        if (x <= min) {
            return min;
        }

        if (x > max) {
            return findClosestInSteppedRange(max, min, max, step);
        }

        // min < x <= max
        // x = min + k * step + a, with 0 <= a < step
        if ((x - min) % step === 0) {
            // a = 0, therefore x = min + k * step, therefore x is in the range
            return x;
        }

        // 0 < a < step
        const k = Math.floor((x - min) / step);
        // x must be placed between two numbers in the range
        const leftNeighbor = min + k * step;
        const rightNeighbor = min + (k + 1) * step
        // chance that higherNeighbor is greater than max
        if (rightNeighbor > max) {
            return leftNeighbor;
        }

        const leftDistance = x - leftNeighbor;
        const rightDistance = rightNeighbor - x;
        return leftDistance < rightDistance ? leftNeighbor : rightNeighbor;
    }
    export interface IFrontDefenition_Attributes extends IModVarNonNull_mod_ClothingOrganizerDesign, IModVarNonNull_mod_CarcaseEdgeFrontColor { }

    class FrontDefenition_Attributes implements IFrontDefenition_Attributes {
        constructor(attributes: Checks.CheckAttributesMap) {
            this._mod_CarcaseEdgeFrontColor = (attributes.get('mod_CarcaseEdgeFrontColor') as string);
            this._mod_ClothingOrganizerDesign = (attributes.get('mod_ClothingOrganizerDesign') as string);
            this._mod_ClothingOrganizerDesign_matrix = VariantValidation.mod_ClothingOrganizerDesign(undefined, this._mod_ClothingOrganizerDesign);
        }
        _mod_CarcaseEdgeFrontColor: string
        get mod_CarcaseEdgeFrontColor(): string { return this._mod_CarcaseEdgeFrontColor }
        _mod_ClothingOrganizerDesign: string
        get mod_ClothingOrganizerDesign(): string { return this._mod_ClothingOrganizerDesign }
        _mod_ClothingOrganizerDesign_matrix: IMatrix_mod_ClothingOrganizerDesign;
        get mod_ClothingOrganizerDesign_matrix(): IMatrix_mod_ClothingOrganizerDesign { return this._mod_ClothingOrganizerDesign_matrix }
    }

    export function executeScriptGetDropDownValues(attributes: Checks.CheckAttributesMap, checkName: string, attrId: string, selections: SelectionEntryBase_number[] | SelectionEntryBase_string[] | undefined): Checks.CheckDropDownResult | undefined {
        const checkFunctions = new CheckFunc.CheckFunctions();
        switch (checkName) {
            case 'FrontDefenition': {
                const attr = new FrontDefenition_Attributes(attributes);
                switch (attrId) {
                    case 'mod_CarcaseEdgeFrontColor':
                        return checkFunctions.check_FrontDefenition_getDropDownValues_mod_CarcaseEdgeFrontColor(attr, selections as SelectionEntry_mod_CarcaseEdgeFrontColor[]);
                    case 'mod_ClothingOrganizerDesign':
                        return checkFunctions.check_FrontDefenition_getDropDownValues_mod_ClothingOrganizerDesign(attr, selections as SelectionEntry_mod_ClothingOrganizerDesign[]);
                    default:
                        console.error(`Attribute ID '${attrId}' not found in check '${checkName}'.`);
                        return undefined;
                }
            }
            default:
                console.error(`Check named '${checkName}' not found.`);
                return undefined;
        }
    }
}
