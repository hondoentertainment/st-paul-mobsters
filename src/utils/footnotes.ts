import type { CitationId } from '../content/citationsRegistry'

export type CitedParagraph = {
  text: string
  citationIds: CitationId[]
  strength?: import('../types/claims').ClaimStrength
}

/**
 * Assigns footnote numbers in first-seen document order; reuses numbers for repeats.
 */
export function buildFootnoteNumbers(
  citationIdSequences: string[][],
): Map<string, number> {
  const map = new Map<string, number>()
  let n = 1
  for (const seq of citationIdSequences) {
    for (const id of seq) {
      if (!map.has(id)) {
        map.set(id, n)
        n += 1
      }
    }
  }
  return map
}

export function flattenParagraphCitations(
  sections: { paragraphs: CitedParagraph[] }[],
): string[][] {
  const out: string[][] = []
  for (const sec of sections) {
    for (const p of sec.paragraphs) {
      out.push(p.citationIds)
    }
  }
  return out
}

export function flattenFromParagraphs(paragraphs: CitedParagraph[]): string[][] {
  return paragraphs.map((p) => p.citationIds)
}

export function flattenFromCitedSections(
  sections: { paragraphs: CitedParagraph[] }[],
): string[][] {
  return sections.flatMap((s) => s.paragraphs.map((p) => p.citationIds))
}

export function orderedUniqueIds(citationIdSequences: string[][]): string[] {
  const seen = new Set<string>()
  const order: string[] = []
  for (const seq of citationIdSequences) {
    for (const id of seq) {
      if (!seen.has(id)) {
        seen.add(id)
        order.push(id)
      }
    }
  }
  return order
}
