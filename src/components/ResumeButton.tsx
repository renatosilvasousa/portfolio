import { resume } from '../data/content'
import { useResumeToast } from '../context/ResumeToastContext'
import { IconDownload } from './icons'
import { assetPath } from '../utils/assetPath'

type ResumeButtonProps = {
  layout?: 'hero' | 'contact'
}

export function ResumeButton({ layout = 'hero' }: ResumeButtonProps) {
  const isContact = layout === 'contact'
  const { triggerToast } = useResumeToast()

  return (
    <a
      href={assetPath(resume.href)}
      download={resume.fileName}
      onClick={triggerToast}
      className={
        isContact
          ? 'btn-secondary btn-contact-action'
          : 'btn-secondary inline-flex items-center justify-center gap-2'
      }
    >
      <IconDownload className={isContact ? 'size-4 shrink-0 lg:size-5' : 'size-4 shrink-0 lg:size-[1.125rem]'} />
      {resume.label}
    </a>
  )
}
