import { ContextActionEnum } from "../enums/ContextActionEnum";

export type ContextActions = SetAction;

export interface SetAction {
  type: ContextActionEnum.SET_ACTION;
  payload: any; // Will update in future
}
