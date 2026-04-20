/**
 * Central bibliography for inline footnotes. Keys are stable identifiers for
 * cross-references in content modules.
 */
export type CitationId =
  | 'us-archives-amendments'
  | 'congress-gov-volstead'
  | 'mnopedia-prohibition-mn'
  | 'mnopedia-stpaul-overview'
  | 'maccabee-dillinger-slept-here'
  | 'okrent-last-call-prohibition'
  | 'fbi-history-1930s'
  | 'chronicling-america-hub'
  | 'mdnh-mnhs'
  | 'loc-sanborn-maps'
  | 'mnhs-research-library'
  | 'landmark-center-history'
  | 'wabasha-caves-venue'
  | 'meyer-family-memories'
  | 'contemporary-press-stpaul'
  | 'scholarly-mob-city-debate'
  | 'bremer-case-secondary'
  | 'native-gov-treaty-context'
  | 'mnhs-immigration-overview'

export type CitationRecord = {
  /** Short label for footnote line */
  short: string
  /** Full citation / retrieval note */
  full: string
  url?: string
}

export const CITATIONS: Record<CitationId, CitationRecord> = {
  'us-archives-amendments': {
    short: 'National Archives, Constitution: Amendments 11–27',
    full:
      'National Archives and Records Administration. “Constitution of the United States: Amendments 11–27” (includes Eighteenth and Twenty-first Amendments).',
    url: 'https://www.archives.gov/founding-docs/amendments-11-27',
  },
  'congress-gov-volstead': {
    short: 'U.S. Congress, National Prohibition Act (Volstead Act), 1919',
    full:
      'National Prohibition Act, ch. 85, 41 Stat. 305 (1919) (implementing the Eighteenth Amendment). Consult Statutes at Large or Congress.gov for authoritative text.',
    url: 'https://www.congress.gov/',
  },
  'mnopedia-prohibition-mn': {
    short: 'MNopedia, Prohibition in Minnesota',
    full:
      'Minnesota Historical Society. MNopedia peer-reviewed articles on Prohibition’s effects in Minnesota (enforcement, economy, social context).',
    url: 'https://www.mnopedia.org/',
  },
  'mnopedia-stpaul-overview': {
    short: 'MNopedia / Minnesota Historical Society, St. Paul overview entries',
    full:
      'MNopedia entries on St. Paul history provide dated context for settlement, capital status, and industrial growth.',
    url: 'https://www.mnopedia.org/',
  },
  'maccabee-dillinger-slept-here': {
    short: 'Paul Maccabee, John Dillinger Slept Here (1995, rev. ed. later)',
    full:
      'Paul Maccabee, John Dillinger Slept Here: A Crooks’ Tour of Crime and Corruption in St. Paul, 1920–1936 (St. Paul: Minnesota Historical Society Press). Widely used popular history; compare claims with primary sources.',
  },
  'okrent-last-call-prohibition': {
    short: 'Daniel Okrent, Last Call: The Rise and Fall of Prohibition',
    full:
      'Daniel Okrent, Last Call: The Rise and Fall of Prohibition (New York: Scribner, 2010). National synthesis of Volstead enforcement and social impact.',
  },
  'fbi-history-1930s': {
    short: 'FBI, History / “Public enemies” era (official narrative)',
    full:
      'Federal Bureau of Investigation. History pages on early Bureau investigations; useful for agency perspective—read alongside independent scholarship.',
    url: 'https://www.fbi.gov/history',
  },
  'chronicling-america-hub': {
    short: 'Library of Congress, Chronicling America',
    full:
      'Library of Congress. Chronicling America: Historic American Newspapers. Search Minnesota titles for St. Paul datelines, raids, trials, and police coverage (1920–1933).',
    url: 'https://chroniclingamerica.loc.gov/',
  },
  'mdnh-mnhs': {
    short: 'Minnesota Digital Newspaper Hub (MNHS)',
    full:
      'Minnesota Historical Society. Minnesota Digital Newspaper Hub—searchable Minnesota newspapers; use for localized reporting on enforcement and crime.',
    url: 'https://www.mnhs.org/newspapers',
  },
  'loc-sanborn-maps': {
    short: 'Library of Congress, Sanborn Fire Insurance Maps',
    full:
      'Library of Congress. Sanborn Maps Collection—browse maps for Saint Paul to relate street addresses and building footprints to period city fabric.',
    url: 'https://www.loc.gov/maps/collections/sanborn/',
  },
  'mnhs-research-library': {
    short: 'Minnesota Historical Society, Gale Family Library',
    full:
      'MNHS Gale Family Library research guides and catalogs for manuscript collections, photographs, and newspapers relevant to Twin Cities crime and policing.',
    url: 'https://www.mnhs.org/research',
  },
  'landmark-center-history': {
    short: 'Landmark Center / Ramsey County Historical Society interpretive materials',
    full:
      'Landmark Center (former Federal Courts Building) public history materials on federal trials and civic use; verify dates against National Register documentation.',
    url: 'https://landmarkcenter.org/',
  },
  'wabasha-caves-venue': {
    short: 'Wabasha Street Caves (commercial tours and site history)',
    full:
      'Wabasha Street Caves venue history as presented for visitors; tour scripts blend documented sandstone use with anecdotal speakeasy lore—treat specific “this room on this night” stories cautiously.',
    url: 'https://wabashacaves.com/',
  },
  'meyer-family-memories': {
    short: 'Family memoirs and oral histories (after-the-fact)',
    full:
      'Later memoirs and oral-history collections sometimes describe O’Connor-era arrangements; treat as retrospective testimony, not contemporaneous law.',
  },
  'contemporary-press-stpaul': {
    short: 'Contemporary Twin Cities newspapers (microfilm / digital)',
    full:
      'St. Paul Daily News, Minneapolis Tribune, and other papers on microfilm or via MDNH/Chronicling America—best evidence for what was reported when.',
  },
  'scholarly-mob-city-debate': {
    short: 'Secondary scholarship on “open city” / police tolerance',
    full:
      'Historians debate how systematic St. Paul’s tolerance was; Maccabee and subsequent articles frame corruption and federal intervention—compare multiple sources.',
  },
  'bremer-case-secondary': {
    short: 'Secondary accounts of the Edward Bremer kidnapping (1932)',
    full:
      'Kidnapping of St. Paul banker Edward Bremer is covered in Twin Cities crime histories and FBI narratives; consult contemporaneous press for indictment and trial details.',
  },
  'native-gov-treaty-context': {
    short: 'U.S. treaty and tribal history (Dakota homeland context)',
    full:
      'National Congress of American Indians and tribal nation sources on Minnesota treaties and dispossession—context for whose land became St. Paul.',
    url: 'https://www.ncai.org/',
  },
  'mnhs-immigration-overview': {
    short: 'MNHS / MNopedia, immigration and ethnicity in Minnesota',
    full:
      'Minnesota Historical Society resources on immigration and neighborhood formation; saloon culture and enforcement landed differently across ethnic and class lines.',
    url: 'https://www.mnopedia.org/',
  },
}

/** Alphabetically sorted registry keys for the master bibliography page. */
export const BIBLIOGRAPHY_ORDER = (Object.keys(CITATIONS) as CitationId[]).sort(
  (a, b) => a.localeCompare(b),
)

export function getCitation(id: string): CitationRecord | undefined {
  return CITATIONS[id as CitationId]
}
