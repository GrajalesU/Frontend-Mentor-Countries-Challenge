import { createContext, useState } from "react";

const DEFAULT_THEME = {
  theme: "light",
  undefined,
};
export const ThemeContext = createContext(DEFAULT_THEME);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((current) => {
      return current === DEFAULT_THEME.theme ? "dark" : "light";
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
