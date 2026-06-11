import { useEffect } from 'react'
import { navLinks, site } from '../data/content'

const BASE_TITLE = site.title

/** Mapa de id → label do nav para usar no título */
const SECTION_LABELS: Record<string, string> = Object.fromEntries(
  navLinks.map((link) => [link.href.replace('#', ''), link.label])
)

/**
 * Atualiza document.title conforme a seção ativa.
 * Ex: "Habilidades | Portfólio | Renato Silva Sousa"
 */
export function useDocumentTitle(activeSectionId: string) {
  useEffect(() => {
    const label = SECTION_LABELS[activeSectionId]
    if (!label || activeSectionId === 'inicio') {
      document.title = BASE_TITLE
    } else {
      document.title = `${label} | ${BASE_TITLE}`
    }
  }, [activeSectionId])

  // Restaura o título original ao desmontar
  useEffect(() => {
    return () => {
      document.title = BASE_TITLE
    }
  }, [])
}
