import React from "react";
import { useI18n } from "../i18n/I18nProvider";
import techKey from "../utils/techColor";

const Hero: React.FC = () => {
  const { t } = useI18n();
  return (
    <>
      <div id="portfolio" className="anchor-offset" />
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">{t("heroEyebrow")}</p>
          <h2>Bakos Gergő</h2>
          <p className="hero-lead">
            Budapest • BME VIK Computer Engineering BSc (2022–). Gyakorlatorientalt
            webfejlesztes, fokuszban a reszponziv UI, stabil API-k es jo
            felhasznaloi elmeny. Summer intern tapasztalat RolandIT-nel es
            Webforyoukft-nel.
          </p>
          <p className="hero-lead">
            Szivesen dolgozom modern frontend stackkel, es szeretem a
            strukturalt, letisztult feluleteket. Nyitott vagyok uj technologiak
            gyors elsajatitasara es csapatmunkara.
          </p>
          <div className="hero-actions">
            <a className="action-button" href="/CV-Bakos_Gergo.pdf" download>
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
              <span className="tech-title">Frontend</span>
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
              <span className="tech-title">Backend / Data</span>
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
              <span className="tech-title">Other</span>
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
          <div className="accent-card">
            <span className="accent-title">Stack</span>
            <span className="accent-value">React • TypeScript • .NET • MUI</span>
            <span className="accent-meta">Frontend • API • Data</span>
          </div>
          <div className="accent-card is-alt">
            <span className="accent-title">Focus</span>
            <span className="accent-value">Reszponziv UI • UX szemlelet</span>
            <span className="accent-meta">Gyors, stabil megoldasok</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
