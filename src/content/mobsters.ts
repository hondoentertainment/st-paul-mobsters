import type { CitedParagraph } from '../utils/footnotes'

export const mobstersPageTitle = 'Mobsters and the “O’Connor system”'

export const mobstersLead: CitedParagraph = {
  text:
    'St. Paul is often remembered as a city where certain out-of-town criminals could lie low between jobs. The most famous explanation involves Chief of Police John O’Connor and an informal set of expectations—sometimes called the layover agreement or “O’Connor system.” Historians treat this as a pattern of behavior attested in memoirs and newspapers rather than a single signed treaty.',
  citationIds: [
    'maccabee-dillinger-slept-here',
    'scholarly-mob-city-debate',
    'meyer-family-memories',
    'contemporary-press-stpaul',
  ],
  strength: 'mixed-evidence',
}

export const mobstersSections: { title: string; paragraphs: CitedParagraph[] }[] = [
  {
    title: 'John O’Connor and the layover idea',
    paragraphs: [
      {
        text:
          'John O’Connor served as chief of police in St. Paul during the early twentieth century. According to widely repeated (though debated) accounts, O’Connor informally allowed known criminals to stay in the city if they registered with police, paid a fee, and refrained from committing crimes locally.',
        citationIds: [
          'maccabee-dillinger-slept-here',
          'scholarly-mob-city-debate',
          'contemporary-press-stpaul',
        ],
        strength: 'local-legend',
      },
      {
        text:
          'No single archival “contract” proves every detail; instead, historians rely on overlapping testimony, news coverage, and later memoirs. The story captures how a midwestern city could gain a reputation as a convenient sanctuary between heists elsewhere.',
        citationIds: [
          'scholarly-mob-city-debate',
          'meyer-family-memories',
          'mnhs-research-library',
        ],
        strength: 'memoir-after-the-fact',
      },
    ],
  },
  {
    title: 'Why St. Paul?',
    paragraphs: [
      {
        text:
          'Rail connections linked St. Paul to Chicago, the Twin Cities region, and points west. A criminal on the run could find boarding houses, corruptible officials, and distance from the last crime scene.',
        citationIds: ['mnopedia-stpaul-overview', 'maccabee-dillinger-slept-here'],
        strength: 'scholarly-consensus',
      },
      {
        text:
          'The city’s respectable surface—churches, capital politics, commerce—coexisted with underground economies in liquor, gambling, and prostitution, as in many American cities of the era.',
        citationIds: ['mnopedia-prohibition-mn', 'okrent-last-call-prohibition'],
        strength: 'scholarly-consensus',
      },
    ],
  },
  {
    title: 'Federal pressure and changing reputations',
    paragraphs: [
      {
        text:
          'By the early 1930s, sensational bank robberies and the FBI’s “public enemy” campaign increased national attention. Federal agents, local reformers, and journalists scrutinized police practices.',
        citationIds: ['fbi-history-1930s', 'scholarly-mob-city-debate'],
        strength: 'contemporary-press',
      },
      {
        text:
          'High-profile arrests and trials—some held in St. Paul’s federal courthouse (now Landmark Center)—signaled that tolerance for fugitives had limits. The “open city” image faded as law enforcement tactics and politics changed.',
        citationIds: [
          'landmark-center-history',
          'maccabee-dillinger-slept-here',
          'bremer-case-secondary',
        ],
        strength: 'mixed-evidence',
      },
    ],
  },
]
