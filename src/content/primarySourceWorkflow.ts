/**
 * Step-by-step guidance for serious researchers using each major repository.
 * Keys match `PrimarySourceLink.id` in primarySources.ts.
 */
export type RepositoryWorkflow = {
  defaultStrategy: string[]
  ocrAndSpelling: string[]
  captureForCitation: string[]
}

export const PRIMARY_SOURCE_WORKFLOWS: Record<string, RepositoryWorkflow> = {
  mdnh: {
    defaultStrategy: [
      'Start with a narrow date window (one month to one year), then widen only if results are empty.',
      'Filter by newspaper title when you know which Twin Cities daily carried the beat (crime pages often differ in tone from editorial pages).',
      'Cross-check surprising names against city directories and census spelling variants before assuming two hits are the same person.',
    ],
    ocrAndSpelling: [
      'Expect OCR errors on microfilm-derived text: try alternate spellings, initials, and truncated surnames.',
      'Hyphenated street names and ward boundaries change over time; search both “St. Paul” and “Saint Paul.”',
    ],
    captureForCitation: [
      'Article headline (or first line if untitled), newspaper name, city, full date, page column if shown, stable MDNH URL, and your access date.',
      'Save a PDF/screenshot of the page image when available; cite the image viewer URL if your reader cannot access the database.',
    ],
  },
  chronicling: {
    defaultStrategy: [
      'Use Advanced Search: state = Minnesota, then add years; add proximate text last so you can see how noisy the query is.',
      'When studying interstate cases, run parallel searches without the state filter for wire stories datelined Chicago or D.C.',
    ],
    ocrAndSpelling: [
      'Chronicling America OCR varies by title and decade; if a known event returns nothing, shorten the query to surnames only.',
      'Legal ads and police blotters use abbreviations (“col’d man,” “arrt”)—broaden keywords before concluding silence.',
    ],
    captureForCitation: [
      'Title from the page metadata, newspaper title as given in Chronicling America, LCCN if required by your style guide, date, image sequence, permalink, access date.',
    ],
  },
  'mnhs-library': {
    defaultStrategy: [
      'Begin with the online catalog and collection guides; note call numbers before visiting or ordering scans.',
      'Ask reference staff about related photograph series and court files that are not keyword-searchable online.',
    ],
    ocrAndSpelling: [
      'Finding aids are human-written; names may follow donor spellings rather than newspaper variants.',
    ],
    captureForCitation: [
      'Collection title and identifier, box/folder, archive name (Gale Family Library), date you viewed the item, and any reproduction number.',
    ],
  },
  sanborn: {
    defaultStrategy: [
      'Pick sheet year closest to your scene; compare 1912 vs 1929 if addresses shifted after fires or renumbering.',
      'Use Sanborn keys (coloring, symbols) before inferring building material or occupancy type.',
    ],
    ocrAndSpelling: [
      'Street names on maps may differ from modern spelling; match block numbers to city directories.',
    ],
    captureForCitation: [
      'Volume, sheet number, year, Library of Congress Sanborn collection URL, date accessed.',
    ],
  },
  'archives-amendments': {
    defaultStrategy: [
      'Use the National Archives presentation for ratification text; pair with Statutes at Large for statutory implementation dates if your claim is legal, not social.',
    ],
    ocrAndSpelling: [],
    captureForCitation: [
      'Document title as published by NARA, URL, amendment number, access date.',
    ],
  },
  'fbi-history': {
    defaultStrategy: [
      'Treat public-facing case summaries as institutional memory, not trial transcripts; follow footnotes on narrative pages to independent scholarship.',
      'When FBI dates conflict with newspapers, prefer contemporaneous press for “what day,” Bureau memos for “what agents claimed later.”',
    ],
    ocrAndSpelling: [],
    captureForCitation: [
      'Exact FBI history page title, URL, access date; quote sparingly and flag agency perspective in your own notes.',
    ],
  },
}
