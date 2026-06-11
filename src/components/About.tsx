import { about } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { IconCheck } from './icons'
import { Section } from './Section'

export function About() {
  const paragraphsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })
  const highlightsRef = useScrollReveal<HTMLUListElement>({ threshold: 0.1 })

  return (
    <Section id="sobre" title={about.title}>
      <div className="max-w-4xl space-y-4">
        <div ref={paragraphsRef} className="reveal space-y-4">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-block prose-body">
              {paragraph}
            </p>
          ))}
        </div>

        <ul
          ref={highlightsRef}
          className="reveal mt-6 flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-3"
        >
          {about.highlights.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-muted lg:text-base"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <IconCheck className="size-4 shrink-0 text-neon lg:size-5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
