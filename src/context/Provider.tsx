import { createContext, ReactNode, useContext, useReducer } from "react";
import { ContextActions } from "../common/interfaces/ContextActions";
import { ContextState } from "../common/interfaces/ContextState";
import { ContextReducers } from "./ContextReducers";

// When we will use context, will update reducer types and enums.

export interface ContextType {
  state: ContextState;
  dispatch: React.Dispatch<ContextActions>;
}

export const initialState = (): ContextState => ({});

interface ContextProviderProps {
  children: ReactNode | ReactNode[];
}

// Creating context with an undefined default value
export const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  // State to manage the grid context
  const [state, dispatch] = useReducer(ContextReducers, initialState());

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

// method to get state
export const useContextState = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContextState must be used within a ContextProvider");
  }
  return context.state;
};

// method to get dispatch function
export const useContextDispatch = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContextDispatch must be used within a ContextProvider");
  }
  return context.dispatch;
};
