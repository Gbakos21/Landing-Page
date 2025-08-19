import React from "react";

export type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  targetBlank?: boolean;
  image: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  href,
  targetBlank = true,
  image,
}) => {
  const rel = targetBlank ? "noopener noreferrer" : undefined;

  return (
    <article className="card">
      <div className="card-grid">
        {/* Bal oldal - kép */}
        <div className="card-image">
          <img src={image} alt={title} />
        </div>

        {/* Jobb oldal - tartalom */}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <a
            href={href}
            target={targetBlank ? "_blank" : undefined}
            rel={rel}
            aria-label={`${title} megnyitása`}
          >
            Megnyitás →
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
