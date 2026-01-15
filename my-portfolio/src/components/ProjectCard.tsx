import React from "react";

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

  return (
    <article className="card">
      <div className="card-grid">
        <div className="card-main">
          <div className="card-image">
            <img src={image} alt={title} />
          </div>

          <div className="card-content">
            <h3>{title}</h3>
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
              aria-label={`${title} megnyitasa`}
            >
              Megnyitas
            </a>
          </div>
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
              <img src={screenshot} alt={`${title} screenshot`} loading="lazy" />
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;
