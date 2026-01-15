import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";
import type { Language, TranslationKey } from "./translations";

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

type I18nProviderProps = {
  children: React.ReactNode;
};

const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("hu");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "hu" || saved === "en" || saved === "de") {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const t = useMemo(() => {
    return (key: TranslationKey) => translations[language][key] ?? key;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
};

export { I18nProvider, useI18n };
