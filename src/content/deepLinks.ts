/**
 * Example searches and hubs for primary-source work—not guaranteed to return the same
 * result set as historical microfilm; use filters and dates in the target tools.
 */
export type DeepLink = {
  id: string
  title: string
  url: string
  note: string
}

export const chroniclingAmericaExamples: DeepLink[] = [
  {
    id: 'ca-mn-1932',
    title: 'Chronicling America — Minnesota, 1932 (Bremer kidnapping window)',
    url:
      'https://chroniclingamerica.loc.gov/search/pages/results/?state=Minnesota&date1=1932&date2=1932&proxtext=Bremer+kidnapping&x=0&y=0',
    note: 'Adjust keywords (Bremer, bank, ransom) and narrow by newspaper title as you refine research.',
  },
  {
    id: 'ca-mn-dillinger',
    title: 'Chronicling America — Minnesota papers mentioning Dillinger',
    url:
      'https://chroniclingamerica.loc.gov/search/pages/results/?state=Minnesota&date1=1933&date2=1934&proxtext=Dillinger&x=0&y=0',
    note: 'Cross-check dates against FBI files; wire stories sometimes mis-timed events.',
  },
  {
    id: 'ca-capital-fire',
    title: 'Chronicling America — “capitol” fire St. Paul 1881',
    url:
      'https://chroniclingamerica.loc.gov/search/pages/results/?state=Minnesota&date1=1881&date2=1881&proxtext=capitol+fire+St.+Paul',
    note: 'Use St. Paul and Minneapolis titles; spelling variants (“capitol” / “capital”) may matter.',
  },
]

export const mdnhExamples: DeepLink[] = [
  {
    id: 'mdnh-hub',
    title: 'Minnesota Digital Newspaper Hub (search home)',
    url: 'https://www.mnhs.org/newspapers',
    note: 'Best for localized spellings of names and addresses in Twin Cities dailies.',
  },
]
