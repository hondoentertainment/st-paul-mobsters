/** Narrative sections for the Methodology page (no inline footnote engine here—see cited narrative pages). */

export const methodologyIntro = {
  title: 'Methodology & use of evidence',
  lead:
    'This site is written for screenwriters, novelists, documentarians, and students who need a sober map of what is well attested, what is debated, and where to look in archives. We privilege primary sources where possible, label interpretive claims, and separate tourism narrative from court records and newspapers.',
}

export const methodologySections: { title: string; paragraphs: string[] }[] = [
  {
    title: 'What “reference grade” means here',
    paragraphs: [
      '“Reference grade” does not mean infallible. It means: stable citation IDs in the codebase, explicit strength-of-evidence labels on narrative pages, a full bibliography keyed to those IDs, and direct links to major digital repositories (newspapers, maps, federal and state institutions).',
      'When this site states a fact, prefer the footnoted narrative pages (Prohibition, Mobsters) and compare them against your own pull from newspapers or case files. When we describe historiographic debate, we name the disagreement, not a fake consensus.',
    ],
  },
  {
    title: 'Primary vs secondary sources',
    paragraphs: [
      'Primary sources include contemporaneous newspapers, court documents, census and city directories, police blotters (where archived), and government publications. The Minnesota Digital Newspaper Hub and Chronicling America are the usual first stops for datable public detail.',
      'Secondary sources—Maccabee, Okrent, MNopedia, institutional histories—synthesize and interpret. They save time but can repeat each other’s errors. Treat them as hypotheses to check, especially for colorful anecdotes about specific rooms or handshake deals.',
    ],
  },
  {
    title: 'Land, treaties, and whose city',
    paragraphs: [
      'St. Paul sits on land ceded through U.S.–Dakota treaties and subsequent displacement. Crime-and-cops narratives that skip that context misrepresent the place itself. Use tribal nation websites, NCAI resources, and MNHS materials on treaties alongside Prohibition research.',
    ],
  },
  {
    title: 'Ethics: glamor and harm',
    paragraphs: [
      'Bank robberies and kidnappings killed and traumatized people who were not famous. A world-class reference acknowledges clerks, bystanders, and families—not only outlaws and G-men. If you are writing fiction, the bibliography here can point you to trial coverage and inquest reporting that complicate the gangster-movie template.',
    ],
  },
  {
    title: 'Citing this repository',
    paragraphs: [
      'See the License page for copyright on site text. For academic papers, cite specific pages and their retrieval date; for film production bibles, keep a log of which newspaper issue supported each script beat. The Changelog records substantive revisions to the site’s claims structure.',
    ],
  },
]
