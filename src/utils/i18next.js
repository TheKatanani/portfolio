import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "../assets/langs/ar.json"
import en from "../assets/langs/en.json"
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources:{...en,...ar},
    lng: "en", 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;