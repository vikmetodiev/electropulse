import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import bg from "./translations/bg/common.json";
import en from "./translations/en/common.json";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: en
            },
            bg: {
                common: bg
            }
        },
        fallbackLng: 'en',

        ns: [ 'common' ],

        defaultNS: 'common',

        debug: true,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
