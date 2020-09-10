import React, { useContext, useReducer, createContext } from "react";

export const GithubContext = createContext();

export const GithubProvider = ({ reducer, initialState, children }) => {
  return (
    <GithubContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </GithubContext.Provider>
  );
};

export const useStateValues = () => useContext(GithubContext);
