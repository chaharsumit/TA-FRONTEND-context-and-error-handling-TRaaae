import React,{ useContext } from 'react';
import ThemeContext from './ThemeContext';

function Header({ isDarkMode }) {

  const theme = useContext(ThemeContext);
  return (
    <h1 className={`heading ${theme.isDarkMode ? "heading-dark" : "heading-light"}`}>
      {theme.isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
