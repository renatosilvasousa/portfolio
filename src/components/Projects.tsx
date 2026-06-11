import { projects } from "../data/content";
import { ProjectCard } from "./ProjectCard";
import { ProjectCarousel } from "./ProjectCarousel";
import { Section } from "./Section";

export function Projects() {
  const hasMultipleProjects = projects.items.length > 1;

  return (
    <Section id="projetos" title={projects.title} subtitle={projects.subtitle}>
      {hasMultipleProjects ? (
        <ProjectCarousel items={projects.items} />
      ) : (
        <div className="mx-auto max-w-6xl">
          <ProjectCard project={projects.items[0]} />
        </div>
      )}
    </Section>
  );
}
