import React from 'react';
import { Header } from './components/header/header';
import { AppRouter } from './router';
import { ThemeContext } from './core/theme-context';


function App() {

  // const [theme, setTheme] = React.useState<string>("light");

  // const toggleTheme = () => {
  //   setTheme((current) => (current === "light" ? "dark" : "light"));
  // };

  return (
    <ThemeContext >
        <Header /> 
        <AppRouter />
    </ThemeContext>
  );
}

export default App
