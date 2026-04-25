/**
 * Curated research ladders for topics serious amateurs often pursue first.
 * These are workflows, not claims—verify every fact in primary material.
 */
export type ResearchPath = {
  id: string
  title: string
  goal: string
  recordTypes: string[]
  repositoryHints: string[]
}

export const RESEARCH_PATHS: ResearchPath[] = [
  {
    id: 'bremer',
    title: 'Edward Bremer kidnapping (1932)',
    goal:
      'Establish a dated sequence of ransom, arrest, and trial reporting rather than relying on secondary summaries alone.',
    recordTypes: [
      'Twin Cities dailies (kidnapping, ransom, police statements).',
      'Federal indictment and court coverage if available in your archive.',
      'Editorial commentary on law enforcement capacity (context, not evidence of specific deals).',
    ],
    repositoryHints: [
      'Minnesota Digital Newspaper Hub for localized spelling and police blotters.',
      'Chronicling America for wire coverage and out-of-state perspective on the same week.',
    ],
  },
  {
    id: 'dillinger-mn',
    title: 'Dillinger circle in Minnesota press',
    goal:
      'Separate wire-service celebrity coverage from verifiable presence dates in the Twin Cities.',
    recordTypes: [
      'Dated articles naming individuals and locations (avoid retroactive “gang” labels).',
      'Hospital, inquest, and coroners’ reporting when following shootouts and deaths.',
    ],
    repositoryHints: [
      'MDNH: narrow by 1933–1934 and surnames first; add “St. Paul” or “Minneapolis” as a second pass.',
      'Compare Minneapolis Tribune and St. Paul papers the same week for jurisdictional framing.',
    ],
  },
  {
    id: 'oconnor-open-city',
    title: 'O’Connor era and “open city” claims',
    goal:
      'Treat police tolerance as a pattern inferred from many records, not a single contract; collect examples and counterexamples.',
    recordTypes: [
      'Police chief reporting, city council minutes (where digitized), grand jury reporting.',
      'Later memoirs and muckraking journalism—useful for memory, weak as sole proof of specific rules.',
    ],
    repositoryHints: [
      'Read MNopedia and Maccabee as orientation, then anchor disputed specifics in newspapers.',
      'Historiography page on this site lists scholarly disagreements; your job is to weigh dated evidence.',
    ],
  },
]
