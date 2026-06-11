import { useActiveSectionId } from '../context/useActiveSectionId'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

/** Componente sem render — só gerencia o document.title */
export function DocumentTitleManager() {
  const activeId = useActiveSectionId()
  useDocumentTitle(activeId)
  return null
}
