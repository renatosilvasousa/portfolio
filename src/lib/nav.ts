import { navLinks } from '../data/content'

export const sectionIds = navLinks.map((link) => navSectionId(link.href))

export function navSectionId(href: string) {
  return href.replace('#', '')
}

export function isNavSectionActive(activeId: string, href: string) {
  return activeId === navSectionId(href)
}
