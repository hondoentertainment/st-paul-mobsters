export type Figure = {
  id: string
  name: string
  dates: string
  role: string
  stPaulConnection: string
  summary: string
}

export const figures: Figure[] = [
  {
    id: 'oconnor',
    name: 'John O’Connor',
    dates: 'c. 1855–1924',
    role: 'St. Paul Chief of Police',
    stPaulConnection:
      'Central to local lore about the informal “layover” arrangement; his tenure shapes how historians interpret police tolerance of visiting criminals.',
    summary:
      'O’Connor is remembered for an alleged policy: criminals could stay in St. Paul if they checked in with police and avoided local crimes. Evidence is interpretive rather than a single formal document, but his name anchors the story of St. Paul’s reputation in the early 1900s.',
  },
  {
    id: 'dillinger',
    name: 'John Dillinger',
    dates: '1903–1934',
    role: 'Bank robber; FBI “public enemy”',
    stPaulConnection:
      'Associated with the Twin Cities area in the 1930s bank-robbery era; often discussed in tours and popular histories of Depression-era crime in Minnesota.',
    summary:
      'Dillinger’s gang robbed banks across the Midwest. His celebrity reflected media spectacle and public fascination with outlaws. He was not a St. Paul “boss”; he was a transient figure in a national crime wave that drew federal resources to Midwestern cities.',
  },
  {
    id: 'karpis',
    name: 'Alvin Karpis',
    dates: '1907–1979',
    role: 'Kidnapper and robber; Barker–Karpis associate',
    stPaulConnection:
      'The Barker–Karpis gang operated in several states; Minnesota and the Twin Cities appear in the wider story of Great Depression-era kidnappings and robberies.',
    summary:
      'Karpis was among the last “public enemies” captured by the FBI in the 1930s. His career illustrates how interstate crime networks intersected with local police limits and federal investigation.',
  },
  {
    id: 'ma-barker',
    name: 'Kate “Ma” Barker',
    dates: '1873–1935',
    role: 'Figure in Barker family criminal circle',
    stPaulConnection:
      'Popular accounts tied the Barker family to hideouts across the Midwest; exact movements are a mix of documented fact and legend.',
    summary:
      'Historians debate Ma Barker’s operational role; the FBI narrative of her as a criminal mastermind has been questioned. She remains a symbol of the gangster-era family outlaw story in American memory.',
  },
  {
    id: 'bremer',
    name: 'Edward Bremer kidnapping (context)',
    dates: '1932',
    role: 'Major Twin Cities kidnapping case',
    stPaulConnection:
      'The kidnapping of St. Paul banker Edward Bremer drew intense law-enforcement attention and is often cited in accounts of Depression-era crime in Minnesota.',
    summary:
      'Kidnapping for ransom linked organized methods, corruption, and federal pursuit. Such cases accelerated public demand for professionalized policing and illustrated the scale of criminal enterprise in the early 1930s.',
  },
]
