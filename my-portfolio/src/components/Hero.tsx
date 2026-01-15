import React from "react";
import { useI18n } from "../i18n/I18nProvider";

const Hero: React.FC = () => {
  const { t } = useI18n();
  return (
    <>
      <div id="portfolio" className="anchor-offset" />
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">{t("heroEyebrow")}</p>
          <h2>Bakos Gergo</h2>
          <p className="hero-lead">{t("heroLead1")}</p>
          <p className="hero-lead">{t("heroLead2")}</p>
          <div className="hero-actions">
            <a className="btn-primary" href="/oneletrajz.pdf" download>
              {t("heroCtaCv")}
            </a>
            <a className="btn-ghost" href="#projektek">
              {t("heroCtaProjects")}
            </a>
          </div>
          <div className="hero-tech">
            <div className="tech-card">
              <span className="tech-title">Frontend</span>
              <div className="tech-list">
                <span className="tech-chip">React</span>
                <span className="tech-chip">TypeScript</span>
                <span className="tech-chip">MUI</span>
                <span className="tech-chip">Next.js</span>
                <span className="tech-chip">Tailwind CSS</span>
                <span className="tech-chip">JavaScript</span>
                <span className="tech-chip">HTML5</span>
              </div>
            </div>
            <div className="tech-card">
              <span className="tech-title">Backend / Data</span>
              <div className="tech-list">
                <span className="tech-chip">.NET C#</span>
                <span className="tech-chip">RabbitMQ</span>
                <span className="tech-chip">Identity</span>
                <span className="tech-chip">SQL</span>
                <span className="tech-chip">Python</span>
              </div>
            </div>
            <div className="tech-card">
              <span className="tech-title">Other</span>
              <div className="tech-list">
                <span className="tech-chip">Cisco Networking</span>
                <span className="tech-chip">CMS (Sanity)</span>
                <span className="tech-chip">SEO</span>
                <span className="tech-chip">LM Studio</span>
                <span className="tech-chip">Ollama</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-accent">
          <div className="accent-card">
            <span className="accent-title">Stack</span>
            <span className="accent-value">React - TypeScript - .NET</span>
            <span className="accent-meta">UI / API / DevOps</span>
          </div>
          <div className="accent-card is-alt">
            <span className="accent-title">Focus</span>
            <span className="accent-value">Clean UX + performance</span>
            <span className="accent-meta">Shipping real products</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
