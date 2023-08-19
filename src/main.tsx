import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter} from "react-router-dom";
import {I18nextProvider} from 'react-i18next';
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_it from "./translations/it/global.json";
import './index.scss'
// npm i i18next react-i18next

const storedLanguage = sessionStorage.getItem("selectedLanguage") || "es";


i18next.init({
  interpolation: { escapeValue: false },
  lng: storedLanguage,
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    it: {
      global: global_it,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
)
