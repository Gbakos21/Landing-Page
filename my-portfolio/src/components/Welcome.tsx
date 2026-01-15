import React from "react";
import smoothScrollToId from "../utils/smoothScrollTo";

const Welcome: React.FC = () => {
  const handleArrowClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    smoothScrollToId("portfolio", 900);
  };

  return (
    <section className="welcome">
      <div className="welcome-inner">
        <p className="welcome-eyebrow">Bakos Gergo</p>
        <h1 className="welcome-title">Portfolio</h1>
        <div className="welcome-glow" aria-hidden="true" />
      </div>
      <a
        className="welcome-arrow"
        href="#portfolio"
        onClick={handleArrowClick}
        aria-label="Ugras a hero szekciora"
      >
        <span aria-hidden="true" />
      </a>
    </section>
  );
};

export default Welcome;
