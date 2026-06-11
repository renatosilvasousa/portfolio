/**
 * Prepends Vite's BASE_URL to public-folder asset paths.
 * Needed because string literals in content.ts aren't processed by Vite's asset pipeline.
 * In dev: BASE_URL = "/"  → path unchanged.
 * In production (GitHub Pages): BASE_URL = "/portfolio/" → "/curriculo.pdf" → "/portfolio/curriculo.pdf"
 */
export function assetPath(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}
