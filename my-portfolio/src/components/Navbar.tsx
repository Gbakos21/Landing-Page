import React, { useEffect, useState } from "react";
import smoothScrollToId from "../utils/smoothScrollTo";
import { useI18n } from "../i18n/I18nProvider";
import type { Language } from "../i18n/translations";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("portfolio");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const useLight = saved === "light";
    setIsLightMode(useLight);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isLightMode) {
      root.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("theme-light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLightMode]);

  useEffect(() => {
    const sectionIds = ["portfolio", "projektek"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.1,
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    smoothScrollToId(id, 900);
  };

  const currentFlag =
    language === "hu" ? "flag-hu" : language === "de" ? "flag-de" : "flag-en";

  return (
    <header className="site-header">
      <nav className={`nav${isScrolled ? " is-solid" : ""}${isMobileOpen ? " is-open" : ""}`}>
        <a className="brand" href="#portfolio">
          Bakos Gergo
        </a>
        <div className="nav-row">
        <div className="nav-links">
          <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "is-active" : undefined}
            onClick={(event) => handleNavClick(event, "portfolio")}
          >
            {t("navPortfolio")}
          </a>
          <a
            href="#projektek"
            className={activeSection === "projektek" ? "is-active" : undefined}
            onClick={(event) => handleNavClick(event, "projektek")}
          >
            {t("navProjects")}
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <span className="chev" aria-hidden="true">
              v
            </span>
          </button>
        </div>
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label="Theme toggle"
            aria-pressed={isLightMode}
            onClick={() => setIsLightMode((prev) => !prev)}
          >
            <span className="theme-icon sun" aria-hidden="true" />
            <span className="theme-icon moon" aria-hidden="true" />
          </button>
          <div
            className={`lang-select${isLangOpen ? " is-open" : ""}`}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsLangOpen(false);
              }
            }}
          >
            <button
              className="lang-button"
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isLangOpen}
              onClick={() => setIsLangOpen((prev) => !prev)}
            >
              <span className={`flag ${currentFlag}`} aria-hidden="true" />
              {language === "hu"
                ? t("navLanguageHu")
                : language === "en"
                ? t("navLanguageEn")
                : t("navLanguageDe")}
              <span className="chev" aria-hidden="true">
                v
              </span>
            </button>
            <div className="lang-menu" role="listbox">
              <button
                className="lang-item"
                type="button"
                role="option"
                aria-selected={language === "hu"}
                onClick={() => {
                  setLanguage("hu" as Language);
                  setIsLangOpen(false);
                }}
              >
                <span className="flag flag-hu" aria-hidden="true" />
                {t("navLanguageHu")}
              </button>
              <button
                className="lang-item"
                type="button"
                role="option"
                aria-selected={language === "de"}
                onClick={() => {
                  setLanguage("de" as Language);
                  setIsLangOpen(false);
                }}
              >
                <span className="flag flag-de" aria-hidden="true" />
                {t("navLanguageDe")}
              </button>
              <button
                className="lang-item"
                type="button"
                role="option"
                aria-selected={language === "en"}
                onClick={() => {
                  setLanguage("en" as Language);
                  setIsLangOpen(false);
                }}
              >
                <span className="flag flag-en" aria-hidden="true" />
                {t("navLanguageEn")}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
