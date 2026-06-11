import { skills } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Section } from "./Section";

function SkillCard({ group, delay }: { group: (typeof skills.groups)[number]; delay: number }) {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  return (
    <article
      ref={ref}
      key={group.name}
      className="card-surface p-5 sm:p-6 lg:p-7 reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="mb-4 text-sm font-semibold text-heading sm:text-base lg:text-lg">
        {group.name}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item}>
            <span className="tag">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Skills() {
  return (
    <Section id="habilidades" title={skills.title} subtitle={skills.subtitle}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {skills.groups.map((group, i) => (
          <SkillCard key={group.name} group={group} delay={i * 80} />
        ))}
      </div>
    </Section>
  );
}
