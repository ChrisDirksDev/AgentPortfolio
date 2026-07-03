import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project ${index % 2 ? "project--reverse" : ""}`} data-reveal>
      <div className="project__visual" data-parallax>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
            className="project__image"
          />
        ) : (
          <div className="project__fallback" aria-hidden="true">
            <span>{project.title.split(" ").map((word) => word[0]).join("").slice(0, 2)}</span>
            <div className="project__fallback-grid" />
          </div>
        )}
        <span className="project__number">0{index + 1}</span>
      </div>
      <div className="project__content">
        <div>
          <p className="project-status"><span /> {project.status}</p>
          <h3>{project.title}</h3>
          <p className="project__tagline">{project.tagline}</p>
          <p className="project__outcome">{project.outcome}</p>
          {project.proofPoints.length > 0 && (
            <div className="project__proof-block">
              <p className="project__proof-label">Implementation highlights</p>
              <ul className="project__proof" aria-label={`${project.title} implementation details`} data-stagger>
                {project.proofPoints.map((point) => <li key={point} data-reveal-child>{point}</li>)}
              </ul>
            </div>
          )}
        </div>
        <div className="project__details">
          <div><span>Focus</span><strong>{project.role}</strong></div>
          <div><span>Stack</span><strong>{project.technologies.slice(0, 4).join(" · ")}</strong></div>
          <p className="project__tools-label">Tools & technologies</p>
          <ul className="tag-list" aria-label={`${project.title} technologies`} data-stagger>
            {project.technologies.map((tech) => <li key={tech} data-reveal-child>{tech}</li>)}
          </ul>
        </div>
        <div className="project__actions">
          {project.liveUrl && <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer">Open live app <span aria-hidden="true">↗</span></a>}
          <a className="button button--quiet" href={project.repositoryUrl} target="_blank" rel="noreferrer">View GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  );
}
