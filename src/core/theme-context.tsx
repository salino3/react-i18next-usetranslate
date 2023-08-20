import React from "react";
import { GlobalContext } from "./global-context";
import { MyReducer } from "./my-reducer";
import { State } from "./interface";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ThemeContext: React.FC<Props> = ({ children }) => {
    
const initialState: State = { theme: "light" };

  const [state, dispatch] = React.useReducer(MyReducer, initialState);

  //   const toggleTheme = () => {
  //     dispatch({
  //       type: "UPDATE_THEME",
  //       payload: state.theme === "light" ? "dark" : "light",
  //     });
  //   };

  const toggleTheme = () => {
    dispatch({
      type: "UPDATE_THEME",
      payload: state.theme === "light" ? "dark" : "light",
    });
  };

  return (
    <GlobalContext.Provider value={{ state, dispatch, toggleTheme }}>
      <div id={state.theme}>{children}</div>
    </GlobalContext.Provider>
  );
};
