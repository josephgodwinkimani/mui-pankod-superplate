import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      hello: "Hello",
      greet: "Hello, {{name}}!",
      documentation: "Go To Documentation",
      episodes: "Episodes",
      characters: "Characters",
      locations: "Locations"
    },
  },
  tr: {
    translation: {
      hello: "Merhaba",
      greet: "Merhaba, {{name}}!",
      documentation: "Dökümantasyona Git",
      episodes: "Bölümler",
      characters: "Karakterler",
      locations: "Konumlar"
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "tr",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
