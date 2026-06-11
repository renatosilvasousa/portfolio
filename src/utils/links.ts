export function isPlaceholderLink(href: string) {
  const trimmed = href.trim()
  return trimmed === '' || trimmed === '#'
}
