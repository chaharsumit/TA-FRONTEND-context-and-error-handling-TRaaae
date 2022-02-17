import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function SwitchButton() {

  const theme = useContext(ThemeContext);

  return (
    <button
      className={`btn ${theme.isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={theme.changeMode}
    >
      {theme.isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
