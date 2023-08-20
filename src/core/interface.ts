interface UPDATE_THEME {
  type: "UPDATE_THEME";
  payload: string;
};

export type All_Actions = UPDATE_THEME;


//
export interface State {
  theme: string;
};

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  toggleTheme: () => void;
};

//
export const initialState: State = {
    theme: "light"
};
