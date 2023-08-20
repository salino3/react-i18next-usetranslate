import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Switcher } from "@/common";
import { SwitchRoutes } from "@/router";
import "./home.styles.scss";

export const Home: React.FC = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="root">
  <Switcher />
      <div className="boxTitle">
        <h1>{t("home.title")}</h1>
        <Link to={SwitchRoutes.info_page} className="linkPage">{t("home.link_info_page")}</Link>
      </div>
      <br />
      <hr />
      <h2>{t("home.hello_world")}</h2>
    </div>
  );
};
