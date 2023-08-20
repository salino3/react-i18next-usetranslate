import React from 'react';
import { Header } from './components/header/header';
import { AppRouter } from './router';

export const ThemeContext = React.createContext<ThemeProps>({} as ThemeProps);

export interface ThemeProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: () => void;
}

function App() {

  const [theme, setTheme] = React.useState<string>("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div id={theme}>
        <Header /> 
        <AppRouter />
      </div>
    </ThemeContext.Provider>
  );
}

export default App
