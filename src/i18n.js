import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslate from "./Translation/English.json";
import bnTranslate from "./Translation/Bangla.json";

const resources = {
  en: {
    translation: enTranslate,
  },
  bn: {
    translation: bnTranslate,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "bn",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
