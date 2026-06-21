import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "../i18n/I18nProvider";
import techKey from "../utils/techColor";
import { trackDownload, trackLinkClick } from "../utils/analytics";

export type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  targetBlank?: boolean;
  download?: boolean;
  actionLabel?: string;
  actionAriaLabel?: string;
  image: string;
  tech?: string[];
  screenshot?: string;
  screenshots?: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  href,
  targetBlank = true,
  download = false,
  actionLabel,
  actionAriaLabel,
  image,
  tech = [],
  screenshot,
  screenshots,
}) => {
  const rel = targetBlank ? "noopener noreferrer" : undefined;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const { t } = useI18n();
  const label = actionLabel ?? t("openProject");
  const ariaLabel = actionAriaLabel ?? `${title} ${t("openProjectLabel")}`;
  const visibleScreenshots = screenshots ?? (screenshot ? [screenshot] : []);
  const activeScreenshot = visibleScreenshots[previewIndex] ?? visibleScreenshots[0];
  const hasMultipleScreenshots = visibleScreenshots.length > 1;
  const getThumbnail = (shot: string) =>
    shot.replace("/screenshots/", "/screenshots/thumbs/").replace(/\.png$/i, ".jpg");

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
    isPreviewOpen && activeScreenshot && typeof document !== "undefined"
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
              <img
                src={activeScreenshot}
                alt={`${title} screenshot nagyban`}
                decoding="async"
              />
            </div>
          </div>,
          document.body
        )
      : null;

  const handleClick = () => {
    if (download) {
      trackDownload(title, href);
      return;
    }
    trackLinkClick(title, href);
  };

  return (
    <article className="card">
      <div className="card-grid">
        <div className="card-main">
          <div className="card-header">
            <div className="card-image">
              <img src={image} alt={title} loading="lazy" decoding="async" />
            </div>
            <h3>{title}</h3>
          </div>
          <p>{description}</p>
          {tech.length > 0 ? (
            <ul className="chip-row" aria-label={`${title} technologiak`}>
              {tech.map((label) => (
                <li key={label} className="chip" data-tech={techKey(label)}>
                  {label}
                </li>
              ))}
            </ul>
          ) : null}
          <a
            href={href}
            target={targetBlank ? "_blank" : undefined}
            rel={rel}
            aria-label={ariaLabel}
            download={download ? "" : undefined}
            onClick={handleClick}
          >
            {label}
            <span
              className={download ? "download-icon" : "link-icon"}
              aria-hidden="true"
            />
          </a>
        </div>

        {visibleScreenshots.length > 0 ? (
          <div className="card-shot">
            <div className={hasMultipleScreenshots ? "shot-stack" : undefined}>
              {visibleScreenshots.map((shot, index) => (
                <div
                  key={shot}
                  className={`shot-frame${index > 0 ? " is-secondary" : ""}`}
                >
                  <div className="shot-bar">
                    <span className="shot-dot is-red" aria-hidden="true" />
                    <span className="shot-dot is-yellow" aria-hidden="true" />
                    <span className="shot-dot is-green" aria-hidden="true" />
                    <span className="shot-pill" aria-hidden="true" />
                  </div>
                  <button
                    className="shot-button"
                    type="button"
                    onClick={() => {
                      setPreviewIndex(index);
                      setIsPreviewOpen(true);
                    }}
                    aria-label={`${title} ${t("openImageLabel")}`}
                  >
                    <img
                      src={getThumbnail(shot)}
                      alt={`${title} screenshot ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = shot;
                      }}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {modal}
    </article>
  );
};

export default ProjectCard;
