import React, { useEffect, useState } from "react";
import smoothScrollToId from "../utils/smoothScrollTo";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("portfolio");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

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
            Portfolio
          </a>
          <a
            href="#projektek"
            className={activeSection === "projektek" ? "is-active" : undefined}
            onClick={(event) => handleNavClick(event, "projektek")}
          >
            Projektek
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
          <div className="lang-select">
            <button className="lang-button" type="button" aria-haspopup="listbox">
              <span className="flag flag-hu" aria-hidden="true" />
              Magyar
              <span className="chev" aria-hidden="true">
                v
              </span>
            </button>
            <div className="lang-menu" role="listbox">
              <button className="lang-item" type="button" role="option">
                <span className="flag flag-hu" aria-hidden="true" />
                Magyar
              </button>
              <button className="lang-item" type="button" role="option">
                <span className="flag flag-de" aria-hidden="true" />
                Nemet
              </button>
              <button className="lang-item" type="button" role="option">
                <span className="flag flag-en" aria-hidden="true" />
                Angol
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
