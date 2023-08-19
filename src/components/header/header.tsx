import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SwitchRoutes } from "@/router";
import "./header.styles.scss";

export const Header: React.FC = () => {
  const [t, i18n] = useTranslation("global");

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    sessionStorage.setItem("selectedLanguage", language); // Guarda el lenguaje en el sessionStorage
  };

  return (
    <header>
      <h2>{t("header.my_web_page")}</h2>
      <nav className="boxLanguages">
        <h3>{t("header.languages")}</h3>
        <ul className="listLanguages">
          <li>
            <button onClick={() => changeLanguage("es")}>ES</button>
          </li>
          <li>
            <button onClick={() => changeLanguage("en")}>EN</button>
          </li>
          <li>
            <button onClick={() => changeLanguage("it")}>IT</button>
          </li>
        </ul>
      </nav>
      <nav className="boxNavegation">
        <ul className="listNavegation">
          <li>
            <Link to={SwitchRoutes.root}>{t("header.link_home")}</Link>
          </li>
          <li>
            <Link to={SwitchRoutes.info_page}>
              {t("header.link_info")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
