import { useState, useMemo } from "react";
import { ThemeContext } from "./themeContext";

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");

  const value = useMemo(() => {
    return { theme, setTheme };
  }, [theme]);

  console.log("ThemeProvider rendered");

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;