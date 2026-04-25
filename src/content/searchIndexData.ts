/**
 * Curated full-text chunks for site search (MiniSearch). Expand when adding routes or major topics.
 */
export type SearchChunk = {
  id: string
  path: string
  title: string
  text: string
}

export const SEARCH_CHUNKS: SearchChunk[] = [
  {
    id: 'home',
    path: '/',
    title: 'Home — St. Paul Prohibition & mobsters',
    text:
      'River city capital Prohibition O’Connor gangster footnotes bibliography research hub Minnesota Twin Cities narrative citations evidence',
  },
  {
    id: 'research',
    path: '/research',
    title: 'Research hub',
    text:
      'Methodology historiography glossary primary sources bibliography license writers producers teachers film television publishing',
  },
  {
    id: 'methodology',
    path: '/methodology',
    title: 'Methodology & use of evidence',
    text:
      'Reference grade primary secondary sources ethics treaties Dakota newspapers archives hedged language probably possibly unclear footnotes',
  },
  {
    id: 'historiography',
    path: '/historiography',
    title: 'Historiography: how scholars disagree',
    text:
      'Reading order Maccabee Burrough open city layover O’Connor FBI Ma Barker Bremer kidnapping Midwest outlaw networks falsification synthesis',
  },
  {
    id: 'glossary',
    path: '/glossary',
    title: 'Glossary',
    text:
      'Volstead Chronicling America Sanborn maps layover public enemy definitions keywords',
  },
  {
    id: 'primary-sources',
    path: '/primary-sources',
    title: 'Primary sources & digital repositories',
    text:
      'Minnesota Digital Newspaper Hub MDNH Chronicling America MNHS Gale Family Library Sanborn FBI Constitution amendments workflow Bremer Dillinger O’Connor research paths',
  },
  {
    id: 'changelog',
    path: '/changelog',
    title: 'Changelog',
    text:
      'Substantive revisions bibliography citation registry errata site changes',
  },
  {
    id: 'license',
    path: '/license',
    title: 'License',
    text:
      'CC BY-SA Creative Commons attribution share alike site text copyright',
  },
  {
    id: 'editorial',
    path: '/editorial',
    title: 'Editorial standards',
    text:
      'Evidence tiers certainty corrections drama film television citations scholarly synthesis memoir legend',
  },
  {
    id: 'cite',
    path: '/cite',
    title: 'How to cite this site',
    text:
      'Canonical URL retrieval date license bibliography anchors cite-fragment Mobsters Prohibition Historiography',
  },
  {
    id: 'search',
    path: '/search',
    title: 'Search',
    text: 'Full text search find pages topics',
  },
  {
    id: 'timeline',
    path: '/timeline',
    title: 'Timeline',
    text:
      'Chronology evidence tone record synthesis debated Bremer Dillinger Nelson repeal Prohibition O’Connor capitol fire 1881 river landing statehood',
  },
  {
    id: 'prohibition',
    path: '/prohibition',
    title: 'Prohibition',
    text:
      'Eighteenth Amendment Volstead bootlegging enforcement Minnesota St. Paul saloons speakeasy footnotes citations',
  },
  {
    id: 'mobsters',
    path: '/mobsters',
    title: 'Mobsters and O’Connor system',
    text:
      'John O’Connor layover open city police tolerance John Dillinger Baby Face Nelson Barker Karpis Bremer kidnapping Midwest outlaws footnotes mixed evidence',
  },
  {
    id: 'figures',
    path: '/figures',
    title: 'Figures of the era',
    text:
      'John O’Connor John Dillinger Alvin Karpis Ma Barker Floyd Olson Hoover Purvis Van Meter Pierpont Hamilton Frechette Murray Carroll Pretty Boy Floyd Machine Gun Kelly Bailey Miller Fred Barker Doc Barker Liggett Gleckman Kid Cann Cowley profiles filter evidence basis',
  },
  {
    id: 'places',
    path: '/places',
    title: 'Places',
    text:
      'St. Paul neighborhoods landmarks Wabasha caves Landmark Center streets geography',
  },
  {
    id: 'sources',
    path: '/sources',
    title: 'Sources & bibliography',
    text:
      'Citation registry CitationId bibliography Maccabee Okrent MNopedia Chronicling America FBI Burrough image credits master list',
  },
  {
    id: 'library',
    path: '/library',
    title: 'Books & films reference library',
    text:
      'Nonfiction fiction feature films documentary television Dillinger St. Paul relevance tags ISBN',
  },
]
