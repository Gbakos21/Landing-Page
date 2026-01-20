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

  const getLanguageFromPath = () => {
    if (typeof window === "undefined") {
      return null;
    }
    const match = window.location.pathname.match(/^\/(hu|en|de)(?:\/|$)/i);
    return match ? (match[1].toLowerCase() as Language) : null;
  };

  const updateSeoForLanguage = (lang: Language) => {
    const localeMap: Record<Language, string> = {
      hu: "hu_HU",
      en: "en_US",
      de: "de_DE",
    };

    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.lang = lang;

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = `https://gbakos.hu/${lang}`;
    }

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.content = `https://gbakos.hu/${lang}`;
    }

    const ogLocale = document.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.content = localeMap[lang];
    }
  };

  useEffect(() => {
    const fromPath = getLanguageFromPath();
    if (fromPath) {
      setLanguage(fromPath);
      updateSeoForLanguage(fromPath);
      return;
    }

    const saved = localStorage.getItem("lang");
    if (saved === "hu" || saved === "en" || saved === "de") {
      setLanguage(saved);
      if (typeof window !== "undefined") {
        window.history.replaceState({}, "", `/${saved}`);
      }
      updateSeoForLanguage(saved);
      return;
    }

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/hu");
    }
    updateSeoForLanguage("hu");
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
    updateSeoForLanguage(language);
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const targetPath = `/${language}`;
      if (!currentPath.startsWith(targetPath)) {
        window.history.pushState({}, "", targetPath);
      }
    }
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
