import { profile } from '../data/content'
import { useTheme } from '../context/useTheme'
import { assetPath } from '../utils/assetPath'

type ProfilePhotoProps = {
  variant?: 'hero' | 'compact'
  className?: string
}

type ProfilePhotoImages = {
  dark: string
  light: string
}

export function ProfilePhoto({ variant = 'hero', className = '' }: ProfilePhotoProps) {
  const { theme } = useTheme()
  const rawSrc = (profile.imageSrc as ProfilePhotoImages)?.[theme]
  const imageSrc = rawSrc ? assetPath(rawSrc) : undefined

  const sizeClass =
    variant === 'hero'
      ? 'size-48 sm:size-56 lg:size-64 xl:size-64'
      : 'size-28 sm:size-32'

  return (
    <div
      className={`photo-frame relative shrink-0 overflow-hidden rounded-2xl ${sizeClass} ${className} mt-10.5`}
      role="img"
      aria-label={profile.imageAlt}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={profile.imageAlt}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center px-2 text-center">
          <span className="text-[10px] font-medium uppercase tracking-wider text-subtle sm:text-xs">
            Sua foto
          </span>
        </div>
      )}
    </div>
  )
}
