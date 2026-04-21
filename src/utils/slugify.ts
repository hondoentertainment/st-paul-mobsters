/** URL-safe slug for heading anchors (Latin characters; simplify for this site’s English headings). */
export function slugify(text: string): string {
  const s = text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return s || 'section'
}
