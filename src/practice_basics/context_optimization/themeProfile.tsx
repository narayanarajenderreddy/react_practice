import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";


function ThemeSwitcher() {

  const { theme, setTheme } = useContext(ThemeContext);

  console.log("ThemeSwitcher rendered");

  return (
    <>
      <h3>Theme: {theme}</h3>

      <button onClick={() => setTheme("dark")}>
        Change Theme
      </button>
    </>
  );
}

export default React.memo(ThemeSwitcher);