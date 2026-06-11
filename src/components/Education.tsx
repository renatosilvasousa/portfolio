import { useState } from 'react'
import { education } from '../data/content'
import { Section } from './Section'
import { IconArrowDown } from './icons'

const ACADEMIC_KEYWORDS = ['tecnólogo', 'técnico', 'graduação', 'sargentos', 'ensino médio', 'faculdade', 'escola']

function isAcademic(degree: string) {
  const lower = degree.toLowerCase()
  return ACADEMIC_KEYWORDS.some((k) => lower.includes(k)) && !lower.startsWith('bootcamp') && !lower.startsWith('certificação')
}

const academicItems = education.items.filter((i) => isAcademic(i.degree))
const certItems = education.items.filter((i) => !isAcademic(i.degree))

const TABS = [
  { id: 'academic', label: 'Formação Acadêmica', items: academicItems },
  { id: 'certs', label: 'Certificações', items: certItems },
] as const

type TabId = (typeof TABS)[number]['id']

function AccordionItem({
  degree,
  institution,
  period,
  description,
}: {
  degree: string
  institution: string
  period: string
  description: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <article className="edu-accordion-item">
      <button
        type="button"
        className="edu-accordion-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="edu-accordion-header">
          <div className="edu-accordion-titles">
            <h3 className="edu-accordion-degree">{degree}</h3>
            <p className="edu-accordion-institution">{institution}</p>
          </div>
          <div className="edu-accordion-meta">
            <span className="edu-accordion-period">{period}</span>
            <IconArrowDown
              className={`edu-accordion-chevron ${open ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
      </button>

      {/* Animated body — CSS grid trick */}
      <div className={`edu-accordion-body-wrapper ${open ? 'edu-accordion-body-open' : ''}`}>
        <div className="edu-accordion-body-inner">
          <div className="edu-accordion-body">
            <p className="prose-muted text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Education() {
  const [activeTab, setActiveTab] = useState<TabId>('academic')
  const activeItems = TABS.find((t) => t.id === activeTab)!.items

  return (
    <Section id="formacao" title={education.title} subtitle={education.subtitle}>
      {/* Tabs */}
      <div className="edu-tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`edu-tab ${activeTab === tab.id ? 'edu-tab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            <span className="edu-tab-count">{tab.items.length}</span>
          </button>
        ))}
      </div>

      {/* Accordion list */}
      <div className="edu-accordion-list">
        {activeItems.map((item) => (
          <AccordionItem key={item.degree} {...item} />
        ))}
      </div>
    </Section>
  )
}
