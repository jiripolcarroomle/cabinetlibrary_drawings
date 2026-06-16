import { clearLogMessages, getLogMessages, logError, LogMessage, setLogMessages } from './logging'
import { OD_Base, RoomContour } from './base';
import { checkIfModuleWasGenerated, MultiArticleResult, prepareArticleResult } from './construction_library';
import { IContextData } from './mod-base';


export interface IPosArticleInfo {
  articleId: string;
  articleName?: string;
  imageUrl?: string;
  desc?: string;
  catalog?: string;
  category?: string;
  roots: any;
}

export interface IRootData {
  root: OD_Base;
  articleInfo?: IPosArticleInfo; // Is only set when we have created this too
  logMessages: LogMessage[];
}

// Roomle data
export interface IRoomData {
  levels: RoomContour[];
}

export class GoMultiArticleResult {
  articleResults: IRootData[] = [];
  logMessages: LogMessage[] = [];
}
export function groupAdjust(
  rootsJson: any, // array of root 
  modulesattrJson: any, // array of attributes
  articles: Record<string, IPosArticleInfo>,
  roomData: IRoomData,
): GoMultiArticleResult | undefined {
  return undefined;
}