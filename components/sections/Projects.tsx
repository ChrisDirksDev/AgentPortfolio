import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="work section-shell" id="work" aria-labelledby="work-title">
      <header className="section-heading">
        <div>
          <p className="eyebrow">Selected work · 2024—2026</p>
          <h2 id="work-title">Built to be<br /><em>used.</em></h2>
        </div>
        <p>Selected full-stack applications and product experiments, with the implementation details and decisions that shaped each build.</p>
      </header>

      <div className="featured-list">
        {featured.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="github-handoff">
        <div>
          <p className="eyebrow">Beyond the selected work</p>
          <h3>Keep exploring on GitHub.</h3>
          <p className="github-handoff__copy">Selected work is curated here. Additional experiments, tooling, and in-progress projects live on GitHub.</p>
        </div>
        <a
          className="button button--quiet"
          href="https://github.com/ChrisDirksDev?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          View all repositories <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
