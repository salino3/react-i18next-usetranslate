import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Switcher } from '@/common';
import { SwitchRoutes } from '@/router';
import './info-page.styles.scss';

export const InfoPage: React.FC = () => {

      const [t, i18n] = useTranslation("global");

      return (
        <div className="root">
          <Switcher />
          <div className="boxTitle">
            <h1>{t("info.title")}</h1>
            <Link to={SwitchRoutes.root} className="linkPage">
              {t("info.link_info_page")}
            </Link>
          </div>
          <br />
          <hr />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam assumenda 
            consequuntur facilis ex quia explicabo ipsam recusandae! Inventore molestias dignissimos facilis
             non saepe accusamus itaque exercitationem deleniti mollitia maxime.</p>
        </div>
      );
}
