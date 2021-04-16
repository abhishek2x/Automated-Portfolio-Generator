import React, { useState, createContext, useEffect } from "react";

// Create Context Object
export const ThemeContext = createContext();

// Create a provider for components to consume and subscribe to changes

export const ThemeContextProvider = props => {
  const [dark, setDark] = useState(false);
  
  
  // useEffect(() => {
  //   setDark(!dark)
  // }, [dark])

  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
