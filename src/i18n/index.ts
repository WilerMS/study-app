import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";

export const defaultLanguage = "es";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
  },
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
