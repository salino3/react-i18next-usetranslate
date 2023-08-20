import React from 'react';
import ReactSwitch from "react-switch";
import { ThemeContext } from "@/App";
import './switcher.styles.scss';


export const Switcher: React.FC = () => {

    const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className="switch">
      <label htmlFor="switcher">
        {theme === "light" ? "Light Mode" : "Dark mode"}
      </label>
      <ReactSwitch
        name="switcher"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
    </div>
  );
}
