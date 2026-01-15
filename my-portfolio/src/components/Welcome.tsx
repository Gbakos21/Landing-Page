import React from "react";
import smoothScrollToId from "../utils/smoothScrollTo";
import { useI18n } from "../i18n/I18nProvider";

const Welcome: React.FC = () => {
  const { t } = useI18n();
  const handleArrowClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    smoothScrollToId("portfolio", 900);
  };

  return (
    <section className="welcome">
      <div className="welcome-inner">
        <p className="welcome-eyebrow">Bakos Gergo</p>
        <h1 className="welcome-title">{t("welcomeTitle")}</h1>
        <div className="welcome-glow" aria-hidden="true" />
      </div>
      <a
        className="welcome-arrow"
        href="#portfolio"
        onClick={handleArrowClick}
        aria-label={t("welcomeArrow")}
      >
        <span aria-hidden="true" />
      </a>
    </section>
  );
};

export default Welcome;
