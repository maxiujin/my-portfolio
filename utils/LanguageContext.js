import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./i18n";

const LanguageContext = createContext({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }) => {
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("locale");
      if (saved && translations[saved]) setLocaleState(saved);
    } catch (e) {}
  }, []);

  const setLocale = (next) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem("locale", next);
    } catch (e) {}
  };

  const t = (key) =>
    (translations[locale] && translations[locale][key]) ||
    translations.en[key] ||
    key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
