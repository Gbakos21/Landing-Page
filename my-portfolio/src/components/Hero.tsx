import React from "react";
import { useI18n } from "../i18n/I18nProvider";
import techKey from "../utils/techColor";
import { trackDownload } from "../utils/analytics";

const Hero: React.FC = () => {
  const { t } = useI18n();
  return (
    <>
      <div id="portfolio" className="anchor-offset" />
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">{t("heroEyebrow")}</p>
          <h2>Bakos Gergő</h2>
          <p className="hero-lead">{t("heroLead1")}</p>
          <p className="hero-lead">{t("heroLead2")}</p>
          <div className="hero-actions">
            <a
              className="action-button"
              href="/CV-Bakos_Gergo.pdf"
              download
              onClick={() => trackDownload("CV-Bakos_Gergo.pdf", "/CV-Bakos_Gergo.pdf")}
            >
              {t("heroCtaCv")}
              <span className="download-icon" aria-hidden="true" />
            </a>
            <a className="action-button" href="#projektek">
              {t("heroCtaProjects")}
              <span className="link-icon" aria-hidden="true" />
            </a>
          </div>
          <div className="hero-tech">
            <div className="tech-card">
              <span className="tech-title">{t("heroTechFrontend")}</span>
              <div className="tech-list">
                <span className="tech-chip" data-tech={techKey("React")}>React</span>
                <span className="tech-chip" data-tech={techKey("TypeScript")}>TypeScript</span>
                <span className="tech-chip" data-tech={techKey("MUI")}>MUI</span>
                <span className="tech-chip" data-tech={techKey("Next.js")}>Next.js</span>
                <span className="tech-chip" data-tech={techKey("Tailwind CSS")}>Tailwind CSS</span>
                <span className="tech-chip" data-tech={techKey("JavaScript")}>JavaScript</span>
                <span className="tech-chip" data-tech={techKey("HTML5")}>HTML5</span>
                <span className="tech-chip" data-tech={techKey("SCSS")}>SCSS</span>
              </div>
            </div>
            <div className="tech-card">
              <span className="tech-title">{t("heroTechBackend")}</span>
              <div className="tech-list">
                <span className="tech-chip" data-tech={techKey(".NET C#")}>.NET C#</span>
                <span className="tech-chip" data-tech={techKey("RabbitMQ")}>RabbitMQ</span>
                <span className="tech-chip" data-tech={techKey("MySQL")}>MySQL</span>
                <span className="tech-chip" data-tech={techKey("Identity")}>Identity</span>
                <span className="tech-chip" data-tech={techKey("SQL")}>SQL</span>
                <span className="tech-chip" data-tech={techKey("Python")}>Python</span>
                <span className="tech-chip" data-tech={techKey("Docker")}>Docker</span>
              </div>
            </div>
            <div className="tech-card">
              <span className="tech-title">{t("heroTechOther")}</span>
              <div className="tech-list">
                <span className="tech-chip" data-tech={techKey("Cisco Networking")}>Cisco Networking</span>
                <span className="tech-chip" data-tech={techKey("CMS Sanity")}>CMS (Sanity)</span>
                <span className="tech-chip" data-tech={techKey("SEO")}>SEO</span>
                <span className="tech-chip" data-tech={techKey("LM Studio")}>LM Studio</span>
                <span className="tech-chip" data-tech={techKey("Ollama")}>Ollama</span>
                <span className="tech-chip" data-tech={techKey("GA4")}>GA4</span>
                <span className="tech-chip" data-tech={techKey("GTM")}>GTM</span>
                <span className="tech-chip" data-tech={techKey("Microsoft Clarity")}>Microsoft Clarity</span>
                <span className="tech-chip" data-tech={techKey("Linux Server")}>Linux Server</span>
                <span className="tech-chip" data-tech={techKey("Windows Server")}>Windows Server</span>
                <span className="tech-chip" data-tech={techKey("VPN")}>VPN</span>
                <span className="tech-chip" data-tech={techKey("Network Security")}>Network Security</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-accent">
          <div className="accent-card accent-card--languages">
            <span className="accent-title">{t("languageTitle")}</span>
            <div className="lang-levels">
              <div className="lang-row" data-lang="hu">
                <div className="lang-info">
                  <span className="lang-name">{t("languageHu")}</span>
                  <span className="lang-level">{t("languageLevelNative")}</span>
                </div>
                <div className="lang-dots" aria-label={t("languageHuAria")}>
                  <span className="lang-dot is-on" />
                  <span className="lang-dot is-on" />
                  <span className="lang-dot is-on" />
                  <span className="lang-dot is-on" />
                  <span className="lang-dot is-on" />
                </div>
              </div>
              <div className="lang-row" data-lang="en">
                <div className="lang-info">
                  <span className="lang-name">{t("languageEn")}</span>
                  <span className="lang-level">{t("languageLevelB2")}</span>
                </div>
                <div className="lang-dots" aria-label={t("languageEnAria")}>
                  <span className="lang-dot is-on" />
                  <span className="lang-dot is-on" />
                  <span className="lang-dot is-on" />
                  <span className="lang-dot" />
                  <span className="lang-dot" />
                </div>
              </div>
              <div className="lang-row" data-lang="de">
                <div className="lang-info">
                  <span className="lang-name">{t("languageDe")}</span>
                  <span className="lang-level">{t("languageLevelHobby")}</span>
                </div>
                <div className="lang-dots" aria-label={t("languageDeAria")}>
                  <span className="lang-dot is-on" />
                  <span className="lang-dot" />
                  <span className="lang-dot" />
                  <span className="lang-dot" />
                  <span className="lang-dot" />
                </div>
              </div>
            </div>
          </div>
          <div className="accent-card accent-card--certs is-alt">
            <span className="accent-title">{t("certTitle")}</span>
            <ul className="cert-list">
              <li>
                <span className="cert-icon" aria-hidden="true">🎓</span>
                {t("certBme")}
              </li>
              <li>
                <span className="cert-icon" aria-hidden="true">✅</span>
                {t("certCiscoDevasc")}
              </li>
              <li>
                <span className="cert-icon" aria-hidden="true">🖧</span>
                {t("certNetwork")}
              </li>
              <li>
                <span className="cert-icon" aria-hidden="true">🧾</span>
                {t("certEuropass")}
              </li>
              <li>
                <span className="cert-icon" aria-hidden="true">🚗</span>
                {t("certDriver")}
              </li>
              <li>
                <span className="cert-icon" aria-hidden="true">🛟</span>
                {t("certBoat")}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
