import React from 'react';
import ReactSwitch from "react-switch";
import { GlobalContext } from "@/core/global-context";
import './switcher.styles.scss';
import { MyState } from '@/core/interface';


export const Switcher: React.FC = () => {

    const { state, toggleTheme } = React.useContext<MyState>(GlobalContext);
    const { theme } = state;

  return (
    <section className="switch">
      <label htmlFor="switcher">
        {theme === "light" ? "Light Mode" : "Dark mode"}
      </label>
      <ReactSwitch
        name="switcher"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
    </section>
  );
}
