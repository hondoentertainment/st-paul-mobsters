export type PrimarySourceLink = {
  id: string
  title: string
  institution: string
  url: string
  howToUse: string
}

export const primarySourceLinks: PrimarySourceLink[] = [
  {
    id: 'mdnh',
    title: 'Minnesota Digital Newspaper Hub',
    institution: 'Minnesota Historical Society',
    url: 'https://www.mnhs.org/newspapers',
    howToUse:
      'Search by keyword, narrow by paper and date range. Capture article title, newspaper name, city, and date for your production research bible.',
  },
  {
    id: 'chronicling',
    title: 'Chronicling America',
    institution: 'Library of Congress',
    url: 'https://chroniclingamerica.loc.gov/',
    howToUse:
      'Use advanced search; filter by state (Minnesota) and years (e.g. 1924–1934). Download page PDFs when available for citation.',
  },
  {
    id: 'mnhs-library',
    title: 'Gale Family Library / research guides',
    institution: 'Minnesota Historical Society',
    url: 'https://www.mnhs.org/research',
    howToUse:
      'Identify manuscript collections, photographs, and vertical files not fully digitized; plan an in-person or reproduction request.',
  },
  {
    id: 'sanborn',
    title: 'Sanborn Fire Insurance Maps',
    institution: 'Library of Congress',
    url: 'https://www.loc.gov/maps/collections/sanborn/',
    howToUse:
      'Locate Saint Paul sheets for the years closest to your scene; match street addresses to building outlines and business labels.',
  },
  {
    id: 'archives-amendments',
    title: 'U.S. Constitution: Amendments 11–27',
    institution: 'National Archives',
    url: 'https://www.archives.gov/founding-docs/amendments-11-27',
    howToUse:
      'Authoritative text for Eighteenth and Twenty-first Amendments when scripts reference ratification or repeal.',
  },
  {
    id: 'fbi-history',
    title: 'FBI History',
    institution: 'Federal Bureau of Investigation',
    url: 'https://www.fbi.gov/history',
    howToUse:
      'Agency perspective on early investigations; pair with trial transcripts and newspaper coverage for balanced scenes.',
  },
]
