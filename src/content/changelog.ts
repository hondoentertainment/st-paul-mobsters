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
      'Added Midwest outlaw context: footnoted Mobsters section, new citation IDs (Burrough, interstate banditry), glossary entries, historiography section, Nelson timeline + figure, Nickel & Helmer in /library.',
      'Expanded /figures to 26 profiles (20 new): Olson, Hoover, Purvis, Liggett, Gleckman, Kid Cann, Dillinger circle associates, Kellys, Floyd, Barkers, and others.',
      'Added /editorial and /cite pages; figure filter chips; table-of-contents navigation on long reference pages; self-hosted fonts; Open Graph image and WebPage JSON-LD; footer content-review stamp; example archive deep links on Primary sources.',
      'Amateur-historian pass: bibliography “Finding detail” notes; repository workflows + topic paths on Primary sources; timeline evidence tones; figure evidence-basis lines; historiography reading order + falsification notes; methodology hedging language; MiniSearch site search at /search; CI citation-ID verification script.',
      'Research tooling: /lookup?id=CitationId redirect to bibliography anchors; registry rows in search index; GitHub “Content correction” issue form; expanded CI to fail on orphan registry keys; Mobsters pilot claim→evidence table; exemplar workflows at /exemplars; copy CitationId / note / BibTeX on bibliography rows; edition notes on selected books.',
    ],
  },
]
