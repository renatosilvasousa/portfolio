import { isPlaceholderLink } from '../utils/links'
import { IconArrowUpRight, IconGithub } from './icons'

type ProjectLinkProps = {
  href: string
  label: string
  kind: 'demo' | 'github'
}

export function ProjectLink({ href, label, kind }: ProjectLinkProps) {
  const Icon = kind === 'github' ? IconGithub : IconArrowUpRight
  const isDisabled = isPlaceholderLink(href)

  if (isDisabled) {
    return (
      <span className="project-action project-action-disabled" aria-disabled="true">
        <Icon className="project-action-icon" />
        <span>{label}</span>
        <span className="project-action-soon">em breve</span>
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-action"
    >
      <Icon className="project-action-icon" />
      <span>{label}</span>
    </a>
  )
}
