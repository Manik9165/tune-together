import { ContextActions } from "../common/interfaces/ContextActions";
import { ContextState } from "../common/interfaces/ContextState";

// Action types
export const SET_ACTION = "SET_ACTION";

// all reducers for context
export const ContextReducers = (
  state: ContextState,
  action: ContextActions
) => {
  return {};
  //   switch (action.type) {
  //     case SET_ACTION:
  //       return { ...state, action: action.payload };
  //     default:
  //       throw new Error(`Unknown action: ${action.type}`);
  //   }
};
