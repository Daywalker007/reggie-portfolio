import React, { createContext, useContext, useState } from 'react';

// Create a context instance
const ThemeContext = createContext();

// Create a custom hook to access the context
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

// Create a provider component
export const ThemeContextProvider = ({ children }) => {
  const [lightTheme, setlightTheme] = useState(true);

  const data = {
    lightTheme,
    setlightTheme
  }

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  );
};
