import { footer, site } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-theme py-8 lg:py-10">
      <div className="section-container flex flex-col items-center gap-1 text-center">
        <p className="text-sm text-body lg:text-base">
          © {year} {site.author}
        </p>
        <p className="text-xs text-subtle lg:text-sm">{footer.note}</p>
      </div>
    </footer>
  )
}
