import { projects } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ProjectLink } from './ProjectLink'
import { ProjectThumbnail } from './ProjectThumbnail'

type ProjectItem = (typeof projects.items)[number]

type ProjectCardProps = {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.08 })
  const showDemo = 'demo' in project.links

  return (
    <article ref={ref} className="project-card card-surface group reveal">
      <div className="flex flex-col md:flex-row md:items-stretch h-full">

        <div className="project-card-media w-full md:w-[45%] lg:w-[60%] shrink-0 md:self-stretch">
          <div className="project-card-media-frame w-full h-full">
            <ProjectThumbnail title={project.title} images={project.images} />
          </div>
        </div>

        <div className="project-card-body flex flex-1 flex-col p-5 sm:p-6 md:p-8">
          <div className="project-card-content flex-1">
            <h3 className="project-card-title">{project.title}</h3>
            <div className="project-card-accent" aria-hidden />

            <p className="text-block prose-muted mt-4 leading-relaxed text-sm lg:text-base">
              {project.description}
            </p>

            <ul className="project-card-tags">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <span className="tag">{tag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-card-actions">
            {showDemo && (
              <ProjectLink
                href={(project.links as { demo?: string }).demo ?? '#'}
                label="Demo"
                kind="demo"
              />
            )}
            <ProjectLink
              href={project.links.repo ?? '#'}
              label="GitHub"
              kind="github"
            />
          </div>
        </div>

      </div>
    </article>
  )
}
