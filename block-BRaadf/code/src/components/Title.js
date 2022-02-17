
import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";


function Title(props) {

  const theme = useContext(ThemeContext);

  return (
    <h2
      className={`heading ${
        theme.isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {props.text}
    </h2>
  );
}

export default Title;
