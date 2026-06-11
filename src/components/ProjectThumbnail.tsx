import { useTheme } from '../context/useTheme'
import { assetPath } from '../utils/assetPath'

export type ProjectImages = {
  dark: string
  light: string
  mobileDark?: string
  mobileLight?: string
}

type ProjectThumbnailProps = {
  title: string
  images?: ProjectImages
}

export function ProjectThumbnail({ title, images }: ProjectThumbnailProps) {
  const { theme } = useTheme()
  const initial = title.trim().charAt(0).toUpperCase() || 'P'

  const desktopSrc = images?.[theme] ? assetPath(images[theme]) : undefined
  const rawMobileSrc =
    theme === 'dark'
      ? (images?.mobileDark ?? images?.dark)
      : (images?.mobileLight ?? images?.light)
  const mobileSrc = rawMobileSrc ? assetPath(rawMobileSrc) : undefined

  if (!desktopSrc) {
    return (
      <div className="project-thumb w-full overflow-hidden rounded-xl flex items-center justify-center">
        <span className="font-mono text-3xl font-bold text-neon/90 sm:text-4xl">{initial}</span>
      </div>
    )
  }

  return (
    <>
      {/* md: imagem mobile (portrait) */}
      <div className="hidden md:block lg:hidden project-thumb project-thumb-mobile overflow-hidden rounded-xl">
        <img
          key={`mob-${theme}`}
          src={mobileSrc}
          alt={`${title} — mobile`}
          loading="lazy"
          decoding="async"
          className="project-thumb-image w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* sm e menor */}
      <div className="block md:hidden project-thumb project-thumb-desktop aspect-video overflow-hidden rounded-xl">
        <img
          key={`desk-sm-${theme}`}
          src={desktopSrc}
          alt={`${title} — desktop`}
          loading="lazy"
          decoding="async"
          className="project-thumb-image w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* lg+ */}
      <div className="hidden lg:block project-thumb project-thumb-desktop overflow-hidden rounded-xl">
        <img
          key={`desk-lg-${theme}`}
          src={desktopSrc}
          alt={`${title} — desktop`}
          loading="lazy"
          decoding="async"
          className="project-thumb-image w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </>
  )
}
