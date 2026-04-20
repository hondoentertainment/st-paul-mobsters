/**
 * Curated reference library: books and films for research on St. Paul, Twin Cities,
 * Prohibition, and the “public enemy” era. Annotations explain relevance to this site’s scope.
 * Dramatic works are not evidence of fact—see methodology.
 */

export type TieToScope =
  | 'primary'
  | 'strong'
  | 'adjacent'
  | 'context'

export const TIE_LABELS: Record<TieToScope, string> = {
  primary: 'Central to St. Paul / Twin Cities crime history',
  strong: 'Strong Midwest, Dillinger, or FBI-era focus',
  adjacent: 'National gangster or Prohibition context',
  context: 'Period atmosphere, law enforcement, or media history',
}

export type LibraryBook = {
  id: string
  authors: string[]
  title: string
  year: number
  publisher: string
  place?: string
  isbn?: string
  tie: TieToScope
  annotation: string
}

export type LibraryFilm = {
  id: string
  title: string
  year: number
  directors: string[]
  writers?: string[]
  tie: TieToScope
  annotation: string
  medium: 'feature' | 'documentary' | 'television'
}

export const libraryIntro = {
  title: 'Books & films reference library',
  lead:
    'Use this list to build reading and viewing bibliographies for scripts, novels, and syllabi. **Nonfiction** supports fact-checking when paired with primary sources; **fiction and drama** are cultural sources—use them for tone and mythography, not as proof of events.',
}

export function formatBookCitation(b: LibraryBook): string {
  const auth = b.authors.join(', ')
  const placePart = b.place ? `${b.place}: ` : ''
  return `${auth}. ${b.title}. ${placePart}${b.publisher}, ${b.year}.`
}

export function formatFilmCitation(f: LibraryFilm): string {
  const dir = f.directors.join(', ')
  let s = `${f.title} (${f.year}). Directed by ${dir}.`
  if (f.writers?.length) {
    s += ` Written by ${f.writers.join(', ')}.`
  }
  return s
}

export const nonfictionBooks: LibraryBook[] = [
  {
    id: 'maccabee-dillinger-slept-here',
    authors: ['Paul Maccabee'],
    title:
      'John Dillinger Slept Here: A Crooks’ Tour of Crime and Corruption in St. Paul, 1920–1936',
    year: 1995,
    publisher: 'Minnesota Historical Society Press',
    place: 'St. Paul, MN',
    isbn: '978-0-87351-568-6',
    tie: 'primary',
    annotation:
      'Standard English-language starting point for St. Paul’s gangster-era corruption narrative; compare anecdotes with newspapers and trial records.',
  },
  {
    id: 'karlen-augies-secrets',
    authors: ['Neal Karlen'],
    title: 'Augie’s Secrets: The Minneapolis Mob and the King of the Hennepin Strip',
    year: 2013,
    publisher: 'University of Minnesota Press',
    place: 'Minneapolis, MN',
    isbn: '978-0-8166-8125-5',
    tie: 'primary',
    annotation:
      'Twin Cities organized-crime context across the river; useful for cross-checking how St. Paul and Minneapolis narratives diverge.',
  },
  {
    id: 'burrough-public-enemies',
    authors: ['Bryan Burrough'],
    title:
      'Public Enemies: America’s Greatest Crime Wave and the Birth of the FBI, 1933–34',
    year: 2004,
    publisher: 'Penguin Press',
    place: 'New York',
    isbn: '978-1-59420-021-2',
    tie: 'strong',
    annotation:
      'Synthetic narrative of Depression-era robberies and Bureau politics; basis for the 2009 film—verify details against primary sources.',
  },
  {
    id: 'toland-dillinger-days',
    authors: ['John Toland'],
    title: 'The Dillinger Days',
    year: 1963,
    publisher: 'Random House',
    place: 'New York',
    tie: 'strong',
    annotation:
      'Older journalistic synthesis on Dillinger; still cited for narrative beats—check against later scholarship and archives.',
  },
  {
    id: 'okrent-last-call',
    authors: ['Daniel Okrent'],
    title: 'Last Call: The Rise and Fall of Prohibition',
    year: 2010,
    publisher: 'Scribner',
    place: 'New York',
    isbn: '978-0-7432-7770-3',
    tie: 'adjacent',
    annotation:
      'National Prohibition context for bootlegging economics, enforcement failures, and repeal—frames local St. Paul patterns.',
  },
  {
    id: 'potter-war-on-crime',
    authors: ['Claire Bond Potter'],
    title: 'War on Crime: Bandits, G-Men, and the Politics of Mass Culture',
    year: 1998,
    publisher: 'Rutgers University Press',
    place: 'New Brunswick, NJ',
    tie: 'context',
    annotation:
      'Historiography of crime spectacle and federal policing; helps interpret “public enemy” media cycles.',
  },
  {
    id: 'powers-g-men',
    authors: ['Richard Gid Powers'],
    title: 'G-Men: Hoover’s FBI in American Popular Culture',
    year: 1983,
    publisher: 'Southern Illinois University Press',
    place: 'Carbondale, IL',
    tie: 'context',
    annotation:
      'Cultural history of Bureau mythology—pairs with FBI’s own historical pages for contrast.',
  },
  {
    id: 'poulsen-dont-call-us-molls',
    authors: ['Ellen Poulsen'],
    title: "Don't Call Us Molls: Women of the John Dillinger Gang",
    year: 2002,
    publisher: 'iUniverse',
    place: 'Bloomington, IN',
    tie: 'strong',
    annotation:
      'Gender and supporting roles in outlaw publicity; cross-check names against indictments and census.',
  },
  {
    id: 'matera-dillinger',
    authors: ['Dary Matera'],
    title: 'John Dillinger: The Life and Death of America’s First Celebrity Criminal',
    year: 2005,
    publisher: 'Carroll & Graf',
    place: 'New York',
    tie: 'strong',
    annotation:
      'Popular biography emphasizing celebrity and press; treat sensational passages skeptically.',
  },
  {
    id: 'girardin-helmer-dillinger',
    authors: ['G. Russell Girardin', 'William J. Helmer'],
    title: 'Dillinger: The Untold Story',
    year: 1994,
    publisher: 'Indiana University Press',
    place: 'Bloomington, IN',
    isbn: '978-0-253-21363-2',
    tie: 'strong',
    annotation:
      'Expanded anniversary editions later issued; manuscript lineage via Dillinger’s lawyer—read critically alongside FBI files and press.',
  },
  {
    id: 'wingerd-claiming-the-city',
    authors: ['Mary Lethert Wingerd'],
    title: 'Claiming the City: Politics, Faith, and the Power of Place in St. Paul',
    year: 2001,
    publisher: 'Cornell University Press',
    place: 'Ithaca, NY',
    isbn: '978-0-8014-8809-3',
    tie: 'primary',
    annotation:
      'Social and political history of St. Paul (including ethnicity and neighborhood formation)—background for where saloons, churches, and reform movements intersected.',
  },
  {
    id: 'nash-bloodletters',
    authors: ['Jay Robert Nash'],
    title: 'Bloodletters and Badmen: A Narrative Encyclopedia of American Criminals',
    year: 1973,
    publisher: 'M. Evans',
    place: 'New York',
    tie: 'context',
    annotation:
      'Omnibus reference—convenient for names and dates but notorious for occasional errors; verify every “fact.”',
  },
  {
    id: 'katcher-legs',
    authors: ['Leo Katcher'],
    title: 'The Big Bankroll: The Life and Times of Arnold Rothstein',
    year: 1959,
    publisher: 'Da Capo Press',
    place: 'New York',
    tie: 'context',
    annotation:
      'Eastern syndicate context for how national networks intersected with Midwest operations in popular history.',
  },
]

export const fictionAndLiterature: LibraryBook[] = [
  {
    id: 'higgins-kennedy-for-the-defense',
    authors: ['George V. Higgins'],
    title: 'The Friends of Eddie Coyle',
    year: 1972,
    publisher: 'Holt, Rinehart and Winston',
    place: 'New York',
    tie: 'context',
    annotation:
      'Boston underworld fiction—dialogue-driven; useful for voice research, not Minnesota geography.',
  },
  {
    id: 'leonard-pronto',
    authors: ['Elmore Leonard'],
    title: 'Pronto',
    year: 1993,
    publisher: 'Delacorte',
    place: 'New York',
    tie: 'adjacent',
    annotation:
      'Midwestern / Great Lakes crime tone in late-century prose—compare with period slang from newspapers.',
  },
  {
    id: 'doctorow-billy-bathgate',
    authors: ['E. L. Doctorow'],
    title: 'Billy Bathgate',
    year: 1989,
    publisher: 'Random House',
    place: 'New York',
    tie: 'context',
    annotation:
      'Literary gangster-era New York; illustrates mythmaking techniques applicable when writing historical fiction anywhere.',
  },
]

export const featureFilms: LibraryFilm[] = [
  {
    id: 'public-enemies-2009',
    title: 'Public Enemies',
    year: 2009,
    directors: ['Michael Mann'],
    writers: ['Ronan Bennett', 'Ann Biderman', 'Michael Mann'],
    tie: 'strong',
    medium: 'feature',
    annotation:
      'Dillinger and Hoover-era FBI; shot partly in Wisconsin and the Upper Midwest. Dramatized composite sequences—do not treat as documentary.',
  },
  {
    id: 'dillinger-1973',
    title: 'Dillinger',
    year: 1973,
    directors: ['John Milius'],
    writers: ['John Milius'],
    tie: 'strong',
    medium: 'feature',
    annotation:
      'New Hollywood take on Dillinger mythology; compare timeline with Maccabee and trial chronologies.',
  },
  {
    id: 'dillinger-1945',
    title: 'Dillinger',
    year: 1945,
    directors: ['Max Nosseck'],
    writers: ['Philip Yordan'],
    tie: 'strong',
    medium: 'feature',
    annotation:
      'Monogram-era exploitation biopic—shows how quickly the Dillinger legend was commodified.',
  },
  {
    id: 'high-sierra',
    title: 'High Sierra',
    year: 1941,
    directors: ['Raoul Walsh'],
    writers: ['John Huston', 'W. R. Burnett'],
    tie: 'context',
    medium: 'feature',
    annotation:
      'Depression heist-gone-wrong template; atmospheric reference for bank-robbery genre grammar.',
  },
  {
    id: 'roaring-twenties',
    title: 'The Roaring Twenties',
    year: 1939,
    directors: ['Raoul Walsh'],
    writers: ['Jerry Wald', 'Richard Macaulay', 'Robert Rossen'],
    tie: 'context',
    medium: 'feature',
    annotation:
      'Prohibition montage and bootlegging arc—useful for period iconography, not legal history.',
  },
  {
    id: 'scarface-1932',
    title: 'Scarface',
    year: 1932,
    directors: ['Howard Hawks', 'Richard Rosson'],
    writers: ['Ben Hecht', 'Seton I. Miller', 'John Lee Mahin', 'W. R. Burnett'],
    tie: 'adjacent',
    medium: 'feature',
    annotation:
      'Chicago Capone analog; contrasts with Upper Midwest federal-trial narratives in tone and setting.',
  },
  {
    id: 'public-enemy-1931',
    title: 'The Public Enemy',
    year: 1931,
    directors: ['William A. Wellman'],
    writers: ['Kubec Glasmon', 'John Bright'],
    tie: 'context',
    medium: 'feature',
    annotation:
      'Pre-Code gangster prototype—helps writers understand inherited clichés to accept or subvert.',
  },
  {
    id: 'bonnie-clyde',
    title: 'Bonnie and Clyde',
    year: 1967,
    directors: ['Arthur Penn'],
    writers: ['David Newman', 'Robert Benton'],
    tie: 'adjacent',
    medium: 'feature',
    annotation:
      'Southwest robber couple; parallels Depression-era media spectacle with Dillinger coverage.',
  },
  {
    id: 'baby-face-nelson',
    title: 'Baby Face Nelson',
    year: 1957,
    directors: ['Don Siegel'],
    writers: ['Irving Shulman'],
    tie: 'strong',
    medium: 'feature',
    annotation:
      'Midwestern outlaw figure connected to the same federal dragnet era; verify geography against case files.',
  },
  {
    id: 'untouchables-1987',
    title: 'The Untouchables',
    year: 1987,
    directors: ['Brian De Palma'],
    writers: ['David Mamet'],
    tie: 'adjacent',
    medium: 'feature',
    annotation:
      'Chicago Prohibition mythology—useful for production design references; not Minnesota-specific.',
  },
  {
    id: 'road-to-perdition',
    title: 'Road to Perdition',
    year: 2002,
    directors: ['Sam Mendes'],
    writers: ['David Self'],
    tie: 'strong',
    medium: 'feature',
    annotation:
      'Midwestern gangster fathers-and-sons fable (Illinois/Iowa milieu); mood board for Depression violence without claiming St. Paul streets.',
  },
  {
    id: 'millers-crossing',
    title: "Miller's Crossing",
    year: 1990,
    directors: ['Joel Coen'],
    writers: ['Joel Coen', 'Ethan Coen'],
    tie: 'context',
    medium: 'feature',
    annotation:
      'Prohibition-era syndicate politics as stylized fable—dialogue rhythm reference for period crime drama.',
  },
  {
    id: 'lawless-2012',
    title: 'Lawless',
    year: 2012,
    directors: ['John Hillcoat'],
    writers: ['Nick Cave'],
    tie: 'adjacent',
    medium: 'feature',
    annotation:
      'Virginia moonshine wars—parallel economics to bootlegging networks discussed nationally.',
  },
  {
    id: 'live-by-night-2016',
    title: 'Live by Night',
    year: 2016,
    directors: ['Ben Affleck'],
    writers: ['Ben Affleck'],
    tie: 'adjacent',
    medium: 'feature',
    annotation:
      'Prohibition Boston-to-Florida arc; illustrates genre tropes that can bleed into Midwest-set scripts.',
  },
  {
    id: 'highwaymen-2019',
    title: 'The Highwaymen',
    year: 2019,
    directors: ['John Lee Hancock'],
    writers: ['John Fusco'],
    tie: 'adjacent',
    medium: 'feature',
    annotation:
      'Texas Rangers vs. Bonnie and Clyde—complements federal “manhunt” iconography of the same decade.',
  },
]

export const documentaryAndTelevision: LibraryFilm[] = [
  {
    id: 'burns-prohibition',
    title: 'Prohibition',
    year: 2011,
    directors: ['Ken Burns', 'Lynn Novick'],
    writers: ['Geoffrey C. Ward'],
    tie: 'adjacent',
    medium: 'documentary',
    annotation:
      'PBS series on national Prohibition—strong baseline for Volstead social history; pair with Minnesota newspapers for local color.',
  },
  {
    id: 'fargo-series',
    title: 'Fargo',
    year: 2014,
    directors: ['Various'],
    tie: 'primary',
    medium: 'television',
    annotation:
      'Anthology crime drama set in Minnesota—**wholly fictional** tone piece; do not confuse with documented St. Paul history.',
  },
]
