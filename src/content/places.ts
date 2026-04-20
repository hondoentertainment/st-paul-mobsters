export type Place = {
  name: string
  address?: string
  description: string
}

export const places: Place[] = [
  {
    name: 'Wabasha Street Caves',
    address: '215 Wabasha St S, St. Paul',
    description:
      'Sandstone caves beneath West Seventh Street / Wabasha Hill were used for storage and gatherings; the site is publicly presented as a former speakeasy location and offers historical tours. It is one of the most tangible St. Paul landmarks tied to Prohibition-era nightlife.',
  },
  {
    name: 'Landmark Center (historic Federal Courts Building)',
    address: '75 W 5th St, St. Paul',
    description:
      'This Richardsonian Romanesque building served as the federal courthouse and post office. Federal trials—including cases from the gangster era—were part of its civic role. It now houses cultural organizations and interpretive exhibits.',
  },
  {
    name: 'Mississippi River bluffs',
    description:
      'The river and its landings shaped St. Paul’s founding economy. During Prohibition, river and rail corridors mattered for moving goods—including illicit liquor—into and out of the city.',
  },
  {
    name: 'Downtown commercial district',
    description:
      'Hotels, banks, and clubs clustered in the capital city core. Bank robberies of the early 1930s targeted institutions in busy commercial corridors, feeding the “gangster era” headlines that reached national newspapers.',
  },
]

export const placesNote =
  'This site lists documented locations for orientation. A future enhancement could add an interactive map with pins and walking-tour notes.'
