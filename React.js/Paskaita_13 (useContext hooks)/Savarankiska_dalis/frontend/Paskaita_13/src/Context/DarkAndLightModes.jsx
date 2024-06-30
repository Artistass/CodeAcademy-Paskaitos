import { createContext, useState, useContext } from 'react';

export const SettingsContext = createContext();

export default function DarkAndLightModes({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SettingsContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings should be used inside SettingsContext provider");
  }

  return context;
}
