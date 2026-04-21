export const editorialIntro = {
  title: 'Editorial standards',
  lead:
    'This site aims for transparent historical interpretation: we separate established dates and documents from debate, rumor, and tour-friendly story. We correct substantive errors when identified.',
}

export const editorialSections: { title: string; paragraphs: string[] }[] = [
  {
    title: 'Tiers of certainty',
    paragraphs: [
      '**Attested in period sources** — contemporary newspapers, court records, government publications, and dated correspondence. These can still contain errors; they record what was reported or filed at the time.',
      '**Scholarly synthesis** — peer-reviewed articles, university-press books, and MNopedia-style vetted entries. Interpretation is explicit; footnotes point to evidence.',
      '**Memoir, oral history, and after-the-fact testimony** — useful for voice and memory, weak as sole proof of a specific fact.',
      '**Local legend and popular memory** — may encode real patterns; treat specific “handshake” stories as hypotheses until corroborated.',
    ],
  },
  {
    title: 'Corrections',
    paragraphs: [
      'Substantive changes to interpretation or bibliography are noted on the Changelog. Typos and formatting may be fixed silently.',
      'If you believe we have misstated a fact, open an issue or pull request on the repository with a citable source (issue date, page, or archive link).',
    ],
  },
  {
    title: 'Drama vs. evidence',
    paragraphs: [
      'Films and novels are listed in the reference library for cultural context; they are not cited as proof of events. Scripts may legitimately diverge—this site should not be read as a clearance or rights guide.',
    ],
  },
]
