import { contact } from '../data/content'
import { IconGithub, IconLinkedin, IconMail, IconMapPin } from './icons'
import { ContactField } from './ContactField'
import { ResumeButton } from './ResumeButton'
import { Section } from './Section'

const socialIcons = {
  github: IconGithub,
  linkedin: IconLinkedin,
} as const

export function Contact() {
  return (
    <Section
      id="contato"
      title={contact.title}
      subtitle={contact.subtitle}
      subtitleJustify={false}
    >
      <div className="card-surface mx-auto min-w-0 max-w-4xl p-6 sm:p-8 lg:p-10">
        <ul className="space-y-5 lg:space-y-6">
          <ContactField icon={<IconMail className="size-5 lg:size-6" />} label="E-mail">
            <a
              href={`mailto:${contact.email}`}
              className="block max-w-full text-sm [overflow-wrap:anywhere] text-body transition-colors hover:text-neon sm:text-base lg:text-lg"
            >
              {contact.email}
            </a>
          </ContactField>
          <ContactField icon={<IconMapPin className="size-5 lg:size-6" />} label="Localização">
            <p className="text-sm text-body sm:text-base lg:text-lg">{contact.location}</p>
          </ContactField>
        </ul>

        <div className="contact-actions">
          {contact.links.map((link) => {
            const Icon = socialIcons[link.icon]
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-contact-action"
              >
                <Icon className="size-4 shrink-0 lg:size-5" />
                {link.label}
              </a>
            )
          })}
          <ResumeButton layout="contact" />
        </div>
      </div>
    </Section>
  )
}
