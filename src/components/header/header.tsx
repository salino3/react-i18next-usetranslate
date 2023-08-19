import React from 'react';
import { useTranslation } from "react-i18next";
import './header.styles.scss';

export const Header: React.FC = () => {

    const [t, i18n] = useTranslation('global');

      const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        sessionStorage.setItem("selectedLanguage", language); // Guarda el lenguaje en el sessionStorage
      };

  return (
    <header>
      <h1>{t("header.hello-world")}</h1>
      <br />
      <br />
      <button onClick={() => changeLanguage("es")}>ES</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("it")}>IT</button>
    </header>
  );
}
