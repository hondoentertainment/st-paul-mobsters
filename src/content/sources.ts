export type Source = {
  id: string
  kind: 'book' | 'article' | 'web' | 'org'
  title: string
  authors?: string[]
  publication?: string
  year?: string
  url?: string
  note?: string
}

export const sources: Source[] = [
  {
    id: 'mhs',
    kind: 'org',
    title: 'Minnesota Historical Society',
    note: 'Collections, exhibits, and encyclopedia entries on Minnesota history, including Prohibition and crime in the Twin Cities.',
    url: 'https://www.mnhs.org/',
  },
  {
    id: 'nps-gangster',
    kind: 'web',
    title: 'Gangster Era — related National Park Service interpretive materials',
    note: 'Federal historic sites sometimes publish context on the “public enemy” period and law enforcement history.',
    url: 'https://www.nps.gov/',
  },
  {
    id: 'fbi-history',
    kind: 'web',
    title: 'FBI — History and famous cases',
    note: 'Official overviews of early FBI investigations, including public enemies of the 1930s (use alongside scholarly sources).',
    url: 'https://www.fbi.gov/history',
  },
  {
    id: 'maccabee',
    kind: 'book',
    title:
      'John Dillinger Slept Here: A Crooks’ Tour of Crime and Corruption in St. Paul, 1920–1936',
    authors: ['Paul Maccabee'],
    note: 'Widely cited popular history of St. Paul’s gangster-era corruption and violence.',
  },
  {
    id: 'burrough-supplemental',
    kind: 'book',
    title:
      'Public Enemies: America’s Greatest Crime Wave and the Birth of the FBI, 1933–34',
    authors: ['Bryan Burrough'],
    note: 'National synthesis linking Midwest bank robberies, kidnappings, and early FBI expansion—pair with local St. Paul sources.',
  },
  {
    id: 'encyclopedia',
    kind: 'article',
    title: 'Minnesota Encyclopedia and MNopedia entries',
    publication: 'MNopedia / Minnesota Historical Society',
    note: 'Peer-reviewed short articles useful for dates and context.',
    url: 'https://www.mnopedia.org/',
  },
]

export const imageCredits: { description: string; credit: string }[] = [
  {
    description: 'No historical photographs are bundled in this starter site.',
    credit:
      'To add images, prefer public-domain or openly licensed materials (e.g. Wikimedia Commons, Library of Congress) and list full credits here.',
  },
]
