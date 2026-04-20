export type HomeCard = {
  to: string
  title: string
  blurb: string
}

export const homeCards: HomeCard[] = [
  {
    to: '/research',
    title: 'Research hub',
    blurb:
      'Methodology, historiography, glossary, primary sources, changelog, license—start here for reference-grade work.',
  },
  {
    to: '/timeline',
    title: 'Timeline',
    blurb: 'From river town to capital city—and through Prohibition and the gangster-era headlines.',
  },
  {
    to: '/prohibition',
    title: 'Prohibition',
    blurb: 'Footnoted: Volstead, bootlegging, enforcement, repeal.',
  },
  {
    to: '/mobsters',
    title: 'Mobsters & O’Connor',
    blurb: 'Footnoted: layover story, geography, federal pressure.',
  },
  {
    to: '/figures',
    title: 'Figures',
    blurb: 'Select people and cases—without turning myth into certainty.',
  },
  {
    to: '/places',
    title: 'Places',
    blurb: 'Caves, federal buildings, river-and-rail geography.',
  },
  {
    to: '/library',
    title: 'Books & films',
    blurb: 'Full reference library: nonfiction, fiction, features, documentary & TV.',
  },
  {
    to: '/sources',
    title: 'Bibliography',
    blurb: 'Master citation registry plus supplemental reading list.',
  },
]
