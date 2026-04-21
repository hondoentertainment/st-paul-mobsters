export type ChangelogEntry = {
  date: string
  title: string
  items: string[]
}

/** Substantive revisions to claims structure or bibliography. Editorial typos may be omitted. */
export const changelog: ChangelogEntry[] = [
  {
    date: '2026-04-18',
    title: 'Research-grade reference pass',
    items: [
      'Introduced stable citation registry (CitationId) and inline footnotes on Prohibition and Mobsters narrative pages.',
      'Added strength-of-evidence labels (contemporary press, memoir, scholarly consensus, disputed, local legend, mixed evidence).',
      'Added Research hub: Methodology, Historiography, Glossary, Primary sources, Changelog, License.',
      'Added Open Graph / meta descriptions via react-helmet-async; optional VITE_SITE_URL for canonical URLs.',
      'Added print-friendly CSS and master bibliography aligned to citation keys.',
      'Replaced informal book placeholder with Paul Maccabee’s John Dillinger Slept Here in the bibliography.',
      'Added /library: full books-and-films reference list with relevance tags (nonfiction, fiction, features, documentary & TV).',
      'Expanded /timeline with era dividers, many more dated events, optional bullet notes, and corrected 1881 capitol-fire context.',
    ],
  },
]
