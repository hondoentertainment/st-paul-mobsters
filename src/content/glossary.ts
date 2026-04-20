export type GlossaryEntry = {
  slug: string
  term: string
  definition: string
}

export const glossaryEntries: GlossaryEntry[] = [
  {
    slug: 'volstead-act',
    term: 'National Prohibition Act (Volstead Act)',
    definition:
      'Federal statute (1919) implementing the Eighteenth Amendment: definitions of intoxicating liquors, exemptions, and enforcement machinery. Named for Representative Andrew Volstead.',
  },
  {
    slug: 'public-enemy',
    term: 'Public enemy',
    definition:
      'Early 1930s media and law-enforcement label for high-profile fugitives; not a formal legal status. Useful for period flavor; verify facts case by case.',
  },
  {
    slug: 'layover',
    term: 'Layover (St. Paul usage)',
    definition:
      'In local lore, a criminal’s agreed stay in the city between jobs elsewhere. Often discussed in connection with Chief John O’Connor; treat specific “rules” as historically interpreted, not a published ordinance.',
  },
  {
    slug: 'open-city',
    term: 'Open city (historical metaphor)',
    definition:
      'Journalistic shorthand for cities alleged to tolerate visiting criminals. Describes reputation and politics more than a legal category.',
  },
  {
    slug: 'chronicling-america',
    term: 'Chronicling America',
    definition:
      'Library of Congress digitized newspaper collection; free searches with date and state filters. Essential for checking what was reported when.',
  },
  {
    slug: 'mdnh',
    term: 'Minnesota Digital Newspaper Hub',
    definition:
      'MNHS-hosted search across Minnesota newspapers; strong for local names, addresses, and police blotter–style items.',
  },
  {
    slug: 'sanborn',
    term: 'Sanborn maps',
    definition:
      'Fire-insurance maps showing building footprints, materials, and uses—valuable for verifying whether an address could have held a still, club, or warehouse in a given year.',
  },
]
