import type { ReactNode } from "react";
import { useActiveSectionId } from "../context/useActiveSectionId";
import { useScrollReveal } from "../hooks/useScrollReveal";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  /** false = alinhamento natural (melhor para frases curtas, ex. contato) */
  subtitleJustify?: boolean;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  subtitle,
  subtitleJustify = true,
  children,
  className = "",
}: SectionProps) {
  const activeId = useActiveSectionId();
  const isActive = activeId === id;
  const headerRef = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      id={id}
      className={`scroll-anchor section-padding ${className} ${isActive ? "section-active" : ""}`}
    >
      <div className="section-container">
        <header ref={headerRef} className="section-header reveal">
          <h2
            className={`section-title ${isActive ? "section-title-active" : ""}`}
          >
            {title}
          </h2>
          {subtitle ? (
            <p
              className={`section-subtitle ${subtitleJustify ? "text-block" : "section-subtitle--natural"}`}
            >
              {subtitle}
            </p>
          ) : null}
          <div className="neon-line mt-6 h-px w-16 sm:w-24" aria-hidden />
        </header>
        {children}
      </div>
    </section>
  );
}
