import type { CitedParagraph } from '../utils/footnotes'

export const prohibitionPageTitle = 'Prohibition in St. Paul'

export const prohibitionLead: CitedParagraph = {
  text:
    'From 1920 to 1933, the United States banned the manufacture, sale, and transportation of intoxicating liquors for beverage purposes. Minnesota followed federal law. In practice, demand for alcohol continued—and cities developed local patterns of enforcement, corruption, and underground supply.',
  citationIds: [
    'us-archives-amendments',
    'mnopedia-prohibition-mn',
    'okrent-last-call-prohibition',
  ],
  strength: 'scholarly-consensus',
}

export const prohibitionSections: {
  title: string
  paragraphs: CitedParagraph[]
}[] = [
  {
    title: 'What changed in 1920?',
    paragraphs: [
      {
        text:
          'The Eighteenth Amendment took effect in January 1920. Congress implemented it through the National Prohibition Act (often called the Volstead Act), which defined “intoxicating liquors” and set penalties. Saloons closed legally; consumption in private settings was harder to police than large-scale production and distribution.',
        citationIds: ['us-archives-amendments', 'congress-gov-volstead'],
        strength: 'scholarly-consensus',
      },
      {
        text:
          'St. Paul, like other industrial cities, had saloon culture, ethnic neighborhoods with their own drinking traditions, and a busy port-and-rail economy. Those social and economic networks did not disappear overnight—they were driven underground.',
        citationIds: ['mnopedia-stpaul-overview', 'mnhs-immigration-overview'],
        strength: 'scholarly-consensus',
      },
    ],
  },
  {
    title: 'Bootlegging and supply',
    paragraphs: [
      {
        text:
          'Bootleggers smuggled liquor from Canada and other regions, ran stills in rural areas, and bribed officials to look away from shipments. Urban consumers met suppliers in back rooms, private clubs, and restaurants that quietly served alcohol.',
        citationIds: ['okrent-last-call-prohibition', 'mnopedia-prohibition-mn'],
        strength: 'scholarly-consensus',
      },
      {
        text:
          'Sandstone caves along the Mississippi bluffs—including the Wabasha Street Caves—were used for storage and gatherings. Today the site is known for historical tours that interpret the speakeasy era; specifics of any single night’s activities are often anecdotal, but the physical setting is well documented.',
        citationIds: ['wabasha-caves-venue', 'loc-sanborn-maps'],
        strength: 'mixed-evidence',
      },
    ],
  },
  {
    title: 'Enforcement and limits of the law',
    paragraphs: [
      {
        text:
          'Federal Prohibition agents, local police, and reform-minded citizens raided stills and speakeasies. Still, enforcement was uneven. Juries sometimes refused to convict; penalties were politicized; and underfunded agencies struggled with geography and corruption.',
        citationIds: ['okrent-last-call-prohibition', 'chronicling-america-hub'],
        strength: 'contemporary-press',
      },
      {
        text:
          'Historians emphasize that Prohibition’s failure was national: it criminalized widespread behavior, empowered organized crime in some markets, and strained the legitimacy of law enforcement.',
        citationIds: ['okrent-last-call-prohibition'],
        strength: 'scholarly-consensus',
      },
    ],
  },
  {
    title: '1933 and after',
    paragraphs: [
      {
        text:
          'The Twenty-first Amendment repealed the Eighteenth Amendment. Minnesota ratified repeal; legal breweries and distilleries gradually returned under state regulation.',
        citationIds: ['us-archives-amendments', 'mnopedia-prohibition-mn'],
        strength: 'scholarly-consensus',
      },
      {
        text:
          'The gangster-era violence and bank-robbery headlines of the early 1930s continued for a time, but the end of liquor prohibition removed one major profit center from bootlegging networks and shifted criminal enterprise.',
        citationIds: ['maccabee-dillinger-slept-here', 'fbi-history-1930s'],
        strength: 'scholarly-consensus',
      },
    ],
  },
]
