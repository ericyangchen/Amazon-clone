import { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// Wrapper that wraps the <App /> to provide data
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState,)} >
    {children}
  </StateContext.Provider>
);

// pull the info from the data layer
export const useStateValue = () => useContext(StateContext);