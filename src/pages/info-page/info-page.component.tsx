import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SwitchRoutes } from '@/router';
import './info-page.styles.scss';

export const InfoPage: React.FC = () => {

      const [t, i18n] = useTranslation("global");

      return (
        <div className='root'>
          <h1>{t("info.title")}</h1>
          <Link to={SwitchRoutes.root}>{t("info.link_info_page")}</Link>
        </div>
      );
}
