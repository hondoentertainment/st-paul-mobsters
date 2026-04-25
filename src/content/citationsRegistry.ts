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
  | 'burrough-public-enemies'
  | 'midwest-outlaw-networks'

export type CitationRecord = {
  /** Short label for footnote line */
  short: string
  /** Full citation / retrieval note */
  full: string
  url?: string
  /** How to locate a passage, edition detail, or search strategy for verification */
  howToLocate?: string
  /** Edition or imprint consulted when it affects claims (optional) */
  editionNote?: string
}

export const CITATIONS: Record<CitationId, CitationRecord> = {
  'us-archives-amendments': {
    short: 'National Archives, Constitution: Amendments 11–27',
    full:
      'National Archives and Records Administration. “Constitution of the United States: Amendments 11–27” (includes Eighteenth and Twenty-first Amendments).',
    url: 'https://www.archives.gov/founding-docs/amendments-11-27',
    howToLocate:
      'Use the NARA page for authoritative amendment text; for Volstead implementation dates pair with Statutes at Large or Congress.gov session laws.',
  },
  'congress-gov-volstead': {
    short: 'U.S. Congress, National Prohibition Act (Volstead Act), 1919',
    full:
      'National Prohibition Act, ch. 85, 41 Stat. 305 (1919) (implementing the Eighteenth Amendment). Consult Statutes at Large or Congress.gov for authoritative text.',
    url: 'https://www.congress.gov/',
    howToLocate:
      'In Congress.gov, search 66th Congress (1919–1921) for “National Prohibition Act”; cite section numbers from the enrolled statute, not secondary summaries.',
  },
  'mnopedia-prohibition-mn': {
    short: 'MNopedia, Prohibition in Minnesota',
    full:
      'Minnesota Historical Society. MNopedia peer-reviewed articles on Prohibition’s effects in Minnesota (enforcement, economy, social context).',
    url: 'https://www.mnopedia.org/',
    howToLocate:
      'Open the specific MNopedia article (not only the hub); note author, revision date, and follow its bibliography to primary newspapers where possible.',
  },
  'mnopedia-stpaul-overview': {
    short: 'MNopedia / Minnesota Historical Society, St. Paul overview entries',
    full:
      'MNopedia entries on St. Paul history provide dated context for settlement, capital status, and industrial growth.',
    url: 'https://www.mnopedia.org/',
    howToLocate:
      'Search MNopedia for “Saint Paul” plus your subtopic; each entry lists related articles—use those as a reading ladder into dated events.',
  },
  'maccabee-dillinger-slept-here': {
    short: 'Paul Maccabee, John Dillinger Slept Here (1995, rev. ed. later)',
    full:
      'Paul Maccabee, John Dillinger Slept Here: A Crooks’ Tour of Crime and Corruption in St. Paul, 1920–1936 (St. Paul: Minnesota Historical Society Press). Widely used popular history; compare claims with primary sources.',
    editionNote: '(Site treats the MNHS Press imprint as the standard reference; cite the edition you hold.)',
    howToLocate:
      'Use the index for names and streets, then verify each key fact in MN digitized papers; note edition (1995 vs later revisions) in your citation.',
  },
  'okrent-last-call-prohibition': {
    short: 'Daniel Okrent, Last Call: The Rise and Fall of Prohibition',
    full:
      'Daniel Okrent, Last Call: The Rise and Fall of Prohibition (New York: Scribner, 2010). National synthesis of Volstead enforcement and social impact.',
    editionNote: '(First Scribner hardcover, 2010—cite your imprint and page.)',
    howToLocate:
      'Cite chapter and page for national claims; for Minnesota-specific assertions, treat Okrent as orientation and confirm in MNopedia or newspapers.',
  },
  'fbi-history-1930s': {
    short: 'FBI, History / “Public enemies” era (official narrative)',
    full:
      'Federal Bureau of Investigation. History pages on early Bureau investigations; useful for agency perspective—read alongside independent scholarship.',
    url: 'https://www.fbi.gov/history',
    howToLocate:
      'Identify the exact FBI history subpage you used; copy URL and access date. For case chronologies, cross-check dates against contemporary press.',
  },
  'chronicling-america-hub': {
    short: 'Library of Congress, Chronicling America',
    full:
      'Library of Congress. Chronicling America: Historic American Newspapers. Search Minnesota titles for St. Paul datelines, raids, trials, and police coverage (1920–1933).',
    url: 'https://chroniclingamerica.loc.gov/',
    howToLocate:
      'Use Advanced Search with Minnesota + year range; record LCCN, date, and sequence number from the viewer for stable links to page images.',
  },
  'mdnh-mnhs': {
    short: 'Minnesota Digital Newspaper Hub (MNHS)',
    full:
      'Minnesota Historical Society. Minnesota Digital Newspaper Hub—searchable Minnesota newspapers; use for localized reporting on enforcement and crime.',
    url: 'https://www.mnhs.org/newspapers',
    howToLocate:
      'Save the query URL when possible; otherwise record title, date, page, and article slug from the viewer. Narrow by single paper before blaming “no hits.”',
  },
  'loc-sanborn-maps': {
    short: 'Library of Congress, Sanborn Fire Insurance Maps',
    full:
      'Library of Congress. Sanborn Maps Collection—browse maps for Saint Paul to relate street addresses and building footprints to period city fabric.',
    url: 'https://www.loc.gov/maps/collections/sanborn/',
    howToLocate:
      'Note sheet edition year and volume; cite Library of Congress item URL. Match street numbers to city directories when addresses were renumbered.',
  },
  'mnhs-research-library': {
    short: 'Minnesota Historical Society, Gale Family Library',
    full:
      'MNHS Gale Family Library research guides and catalogs for manuscript collections, photographs, and newspapers relevant to Twin Cities crime and policing.',
    url: 'https://www.mnhs.org/research',
    howToLocate:
      'Record collection name, call number, box/folder from the finding aid, and whether you viewed physical items or digital surrogates.',
  },
  'landmark-center-history': {
    short: 'Landmark Center / Ramsey County Historical Society interpretive materials',
    full:
      'Landmark Center (former Federal Courts Building) public history materials on federal trials and civic use; verify dates against National Register documentation.',
    url: 'https://landmarkcenter.org/',
    howToLocate:
      'Treat interpretive panels as tertiary; for trial facts use federal court records and newspapers cited in National Register nominations.',
  },
  'wabasha-caves-venue': {
    short: 'Wabasha Street Caves (commercial tours and site history)',
    full:
      'Wabasha Street Caves venue history as presented for visitors; tour scripts blend documented sandstone use with anecdotal speakeasy lore—treat specific “this room on this night” stories cautiously.',
    url: 'https://wabashacaves.com/',
    howToLocate:
      'Separate geology and building use (documented in engineering and press) from tour anecdotes; cite venue materials only for what they explicitly claim.',
  },
  'meyer-family-memories': {
    short: 'Family memoirs and oral histories (after-the-fact)',
    full:
      'Later memoirs and oral-history collections sometimes describe O’Connor-era arrangements; treat as retrospective testimony, not contemporaneous law.',
    howToLocate:
      'Record interview date, archive holding (if any), and distance in years from the events described; compare against dated police or court records.',
  },
  'contemporary-press-stpaul': {
    short: 'Contemporary Twin Cities newspapers (microfilm / digital)',
    full:
      'St. Paul Daily News, Minneapolis Tribune, and other papers on microfilm or via MDNH/Chronicling America—best evidence for what was reported when.',
    howToLocate:
      'Build a table: date, paper, page, headline, byline if any, and repository URL. One row per fact you plan to reuse in writing.',
  },
  'scholarly-mob-city-debate': {
    short: 'Secondary scholarship on “open city” / police tolerance',
    full:
      'Historians debate how systematic St. Paul’s tolerance was; Maccabee and subsequent articles frame corruption and federal intervention—compare multiple sources.',
    howToLocate:
      'Read at least two scholarly treatments plus one week of contemporary press; note where they agree on evidence vs where they infer differently.',
  },
  'bremer-case-secondary': {
    short: 'Secondary accounts of the Edward Bremer kidnapping (1932)',
    full:
      'Kidnapping of St. Paul banker Edward Bremer is covered in Twin Cities crime histories and FBI narratives; consult contemporaneous press for indictment and trial details.',
    howToLocate:
      'Use secondary works for bibliography leads only; anchor ransom timeline and arrests to dated articles and docket citations when available.',
  },
  'native-gov-treaty-context': {
    short: 'U.S. treaty and tribal history (Dakota homeland context)',
    full:
      'National Congress of American Indians and tribal nation sources on Minnesota treaties and dispossession—context for whose land became St. Paul.',
    url: 'https://www.ncai.org/',
    howToLocate:
      'Prefer tribal nation .gov or official history pages for treaty specifics; cite nation name, document title, and URL; pair with MNHS treaty overviews for maps.',
  },
  'mnhs-immigration-overview': {
    short: 'MNHS / MNopedia, immigration and ethnicity in Minnesota',
    full:
      'Minnesota Historical Society resources on immigration and neighborhood formation; saloon culture and enforcement landed differently across ethnic and class lines.',
    url: 'https://www.mnopedia.org/',
    howToLocate:
      'Open the specific ethnicity or neighborhood article; follow footnotes to census enumerator instructions and ward maps when making demographic claims.',
  },
  'burrough-public-enemies': {
    short: 'Bryan Burrough, Public Enemies (2004)',
    full:
      'Bryan Burrough, Public Enemies: America’s Greatest Crime Wave and the Birth of the FBI, 1933–34 (New York: Penguin Press, 2004). National synthesis of Depression-era interstate bank robberies, kidnappings, and Bureau expansion—useful for placing Midwest outlaws in a single narrative frame; verify particulars in primary sources.',
    editionNote: '(Penguin Press, 2004—later paperback pagination differs.)',
    howToLocate:
      'Cite chapter and page; for any Minnesota scene, confirm the same week in MDNH before treating Burrough’s timeline as local fact.',
  },
  'midwest-outlaw-networks': {
    short: 'Scholarship on Midwest interstate banditry (1930s)',
    full:
      'Historians describe roving bank- and payroll-robbery groups that used fast cars, state-line jumps, and corrupt safe houses from the Ohio Valley to the upper Mississippi. Membership shifted; newspaper “gang” labels did not always match conspiracy charges in court. St. Paul is one node in this geography, not the exclusive headquarters of a single organization.',
    howToLocate:
      'Track individuals by indictment names and FBI file numbers where published; avoid merging wire-service “gangs” with court-proven conspiracy membership.',
  },
}

/** Alphabetically sorted registry keys for the master bibliography page. */
export const BIBLIOGRAPHY_ORDER = (Object.keys(CITATIONS) as CitationId[]).sort(
  (a, b) => a.localeCompare(b),
)

export function getCitation(id: string): CitationRecord | undefined {
  return CITATIONS[id as CitationId]
}
