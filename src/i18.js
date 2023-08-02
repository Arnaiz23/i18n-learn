import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "button-count": "count is ",
      "edit-code": "Edit ",
      "save-hmr": " and save to test HMR",
      "read-docs": "Click on the Vite and React brands to learn more",
      "change-text": "Change language"
    }
  },
  es: {
    translation: {
      "button-count": "contador es ",
      "edit-code": "Edita ",
      "save-hmr": " y guarda para testear HMR",
      "read-docs": "Haz click en los logos Vite y React para aprender más",
      "change-text": "Cambiar idioma"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es"
});

export default i18n;
