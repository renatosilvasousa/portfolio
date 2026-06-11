import { hero, site } from '../data/content'
import { IconArrowDown } from './icons'
import { HeroTerminal } from './HeroTerminal'
import { ProfilePhoto } from './ProfilePhoto'
import { ResumeButton } from './ResumeButton'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh scroll-mt-0 flex-col justify-center overflow-hidden pt-20 pb-24 sm:pb-28 lg:pb-20"
    >
      <div className="neon-orb pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full opacity-40 sm:size-96 lg:left-[30%] lg:size-[28rem]" aria-hidden />
      <div className="neon-orb pointer-events-none absolute bottom-20 right-0 size-48 opacity-25 sm:size-64 lg:bottom-32 lg:right-[8%] lg:opacity-35" aria-hidden />

      <div className="section-container relative">
        <div className="lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10 xl:gap-14">

          {/* Texto — cada elemento entra com delay escalonado */}
          <div className="min-w-0">
            <p className="hero-enter mb-3 text-sm text-muted sm:text-base lg:text-lg" style={{ animationDelay: '50ms' }}>
              {hero.greeting}
            </p>
            <h1
              className="hero-enter max-w-3xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              style={{ animationDelay: '150ms' }}
            >
              <span className="neon-text">{site.author}</span>
            </h1>
            <p
              className="hero-enter mt-4 max-w-xl text-base font-medium text-body sm:text-lg lg:text-xl xl:text-2xl"
              style={{ animationDelay: '250ms' }}
            >
              {site.role}
            </p>
            <p
              className="hero-enter text-block prose-muted mt-5 max-w-2xl lg:max-w-none xl:text-xl"
              style={{ animationDelay: '350ms' }}
            >
              {hero.summary}
            </p>

            <div
              className="hero-enter mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center lg:mt-12"
              style={{ animationDelay: '480ms' }}
            >
              <a href={hero.ctaPrimary.href} className="btn-primary">
                {hero.ctaPrimary.label}
              </a>
              <ResumeButton />
              <a href={hero.ctaSecondary.href} className="btn-secondary">
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>

          {/* Aside */}
          <aside
            className="hero-enter mx-auto mt-10 flex w-full max-w-md min-w-0 flex-col items-center gap-5 sm:mt-12 lg:mt-0 lg:justify-self-center"
            style={{ animationDelay: '300ms' }}
          >
            <ProfilePhoto className="mx-auto" variant="hero" />
            <HeroTerminal />
          </aside>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-subtle transition-colors hover:text-neon"
        aria-label="Ir para a seção Sobre"
      >
        <IconArrowDown className="size-5 animate-bounce-soft lg:size-6" />
      </a>
    </section>
  )
}
