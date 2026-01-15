import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "../i18n/I18nProvider";

export type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  targetBlank?: boolean;
  image: string;
  tech?: string[];
  screenshot?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  href,
  targetBlank = true,
  image,
  tech = [],
  screenshot,
}) => {
  const rel = targetBlank ? "noopener noreferrer" : undefined;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    if (!isPreviewOpen) {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
      return;
    }

    document.body.classList.add("no-scroll");
    document.documentElement.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    };
  }, [isPreviewOpen]);

  const modal =
    isPreviewOpen && screenshot && typeof document !== "undefined"
      ? createPortal(
          <div className="image-modal" role="dialog" aria-modal="true">
            <div
              className="image-modal__backdrop"
              onClick={() => setIsPreviewOpen(false)}
            />
            <div className="image-modal__content">
              <button
                className="image-modal__close"
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                aria-label={t("closeLabel")}
              >
                x
              </button>
              <img src={screenshot} alt={`${title} screenshot nagyban`} />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <article className="card">
      <div className="card-grid">
        <div className="card-main">
          <div className="card-header">
            <div className="card-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
          </div>
          <p>{description}</p>
          {tech.length > 0 ? (
            <ul className="chip-row" aria-label={`${title} technologiak`}>
              {tech.map((label) => (
                <li key={label} className="chip">
                  {label}
                </li>
              ))}
            </ul>
          ) : null}
          <a
            href={href}
            target={targetBlank ? "_blank" : undefined}
            rel={rel}
            aria-label={`${title} ${t("openProjectLabel")}`}
          >
            {t("openProject")}
            <span className="link-icon" aria-hidden="true" />
          </a>
        </div>

        {screenshot ? (
          <div className="card-shot">
            <div className="shot-frame">
              <div className="shot-bar">
                <span className="shot-dot is-red" aria-hidden="true" />
                <span className="shot-dot is-yellow" aria-hidden="true" />
                <span className="shot-dot is-green" aria-hidden="true" />
                <span className="shot-pill" aria-hidden="true" />
              </div>
              <button
                className="shot-button"
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                aria-label={`${title} ${t("openImageLabel")}`}
              >
                <img src={screenshot} alt={`${title} screenshot`} loading="lazy" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
      {modal}
    </article>
  );
};

export default ProjectCard;
