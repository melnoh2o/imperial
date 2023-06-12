import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { STORAGE_NAME } from '../store';


const lang = JSON.parse(sessionStorage.getItem(STORAGE_NAME) || '').state.lang;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ru', 'en'],
    fallbackLng: lang,
    debug: false,
    detection: {
      order: ['localStorage ', 'htmlTag ', 'htmlTag'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });


export default i18n;