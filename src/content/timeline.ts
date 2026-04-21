/**
 * Chronology of St. Paul, Minnesota, with emphasis on Prohibition and organized-crime context.
 * Dates are simplified where ranges matter more than a single day; verify critical facts in MNopedia,
 * newspapers, and scholarly works before treating entries as legal or academic proof.
 */

export type TimelineDivider = {
  type: 'divider'
  label: string
}

export type TimelineEvent = {
  type: 'event'
  year: string
  title: string
  body: string
  bullets?: string[]
}

export type TimelineEntry = TimelineDivider | TimelineEvent

export const timeline: TimelineEntry[] = [
  {
    type: 'divider',
    label: 'River landing to state capital',
  },
  {
    type: 'event',
    year: 'c. 1838–1841',
    title: 'Landing, Pig’s Eye, and the Mississippi trade',
    body: 'French-Canadian voyageurs, traders, and missionaries had long used the upper Mississippi. By the late 1830s a landing and settlement clustered near the head of practical steamboat navigation. Popular memory ties an early hamlet to “Pig’s Eye” Parrant’s tavern; by the late 1840s promoters preferred the name Saint Paul.',
    bullets: [
      'River traffic tied St. Paul to lumber, furs, and later grain—long before rails defined the interior.',
    ],
  },
  {
    type: 'event',
    year: '1849',
    title: 'Incorporation as a town',
    body: 'St. Paul incorporated as a town in 1849 (Minnesota remained a territory). Land offices, merchants, and newspapers concentrated power on the bluffs above the Mississippi, setting patterns of downtown commerce and neighborhood growth.',
  },
  {
    type: 'event',
    year: '1854',
    title: 'City charter',
    body: 'St. Paul received a city charter as population and commerce accelerated. Government buildings, churches, and schools began to fix a civic identity distinct from still-nascent Minneapolis across the river.',
  },
  {
    type: 'event',
    year: '1858',
    title: 'Minnesota statehood; St. Paul as capital',
    body: 'Minnesota entered the Union in 1858 with St. Paul as the capital. Legislatures, lobbying, and printing presses made the city a political as well as commercial hub—an identity it never relinquished even as Minneapolis grew larger in the twentieth century.',
  },
  {
    type: 'event',
    year: '1861–1865',
    title: 'Civil War era',
    body: 'Minnesota raised troops and supplies; St. Paul’s newspapers, banks, and transport links tied the young state to national markets. Wartime demand accelerated capital formation and industrial beginnings that would mature after Appomattox.',
  },
  {
    type: 'divider',
    label: 'Railroads, industry, and Gilded Age growth',
  },
  {
    type: 'event',
    year: '1867–1890s',
    title: 'Rail hub and James J. Hill’s empire',
    body: 'The Great Northern and associated lines made St. Paul a headquarters town for western railroading. Freight yards, warehouses, and corporate offices concentrated capital—and labor conflict—in the city. Easy rail access later mattered for moving legal goods and, in Prohibition, illicit liquor.',
    bullets: [
      'Passenger and freight schedules linked St. Paul to Chicago, the Pacific Northwest, and Canadian border crossings relevant to bootlegging lore.',
    ],
  },
  {
    type: 'event',
    year: 'Late 1800s',
    title: 'Immigration, wards, and saloon culture',
    body: 'Irish, German, Scandinavian, and later eastern European immigrants built ethnic parishes, mutual-aid societies, and neighborhood saloons. Saloons were social clubs as well as drinking places; their regulation became a flashpoint for reformers long before national Prohibition.',
  },
  {
    type: 'event',
    year: '1881 (Mar 1)',
    title: 'First state capitol destroyed by fire',
    body: 'The Minnesota State Capitol building on the Wabasha Street hill burned during evening repairs; newspapers documented the loss in detail. Government moved temporarily to the Market House at Seventh and Wabasha while a second capitol rose—keeping the seat of government in St. Paul amid decades of sporadic “capital removal” schemes elsewhere in the state.',
    bullets: [
      'Later schemes (for example, proposals involving Kandiyohi County lands) never unseated St. Paul; Neil B. Thompson and others have traced this long-running political story in Minnesota History.',
    ],
  },
  {
    type: 'event',
    year: 'c. 1890',
    title: 'Minneapolis surpasses St. Paul in population',
    body: 'Federal census counts showed Minneapolis edging ahead as milling and industry drew workers; St. Paul remained the political capital and a wholesale and railroad center. Twin Cities rivalry shaped infrastructure, boosterism, and sometimes police jurisdictions when suspects crossed bridges.',
  },
  {
    type: 'event',
    year: '1892–1902',
    title: 'Federal building and courts (today’s Landmark Center)',
    body: 'Construction of the Richardsonian Romanesque federal courthouse and post office anchored federal power in downtown. Trials for mail fraud, liquor tax evasion, and later interstate crime would be heard in federal courtrooms—important when Depression-era cases drew national press.',
  },
  {
    type: 'divider',
    label: 'Progressive reform and Chief O’Connor’s era',
  },
  {
    type: 'event',
    year: '1900–1920s',
    title: 'John O’Connor and police politics',
    body: 'John O’Connor served long tenures in St. Paul police leadership (chief for many years; he died in 1924). Historians associate his name with informal “layover” expectations—that certain visiting criminals could stay if they avoided local crimes—though evidence is interpretive rather than a single signed agreement.',
    bullets: [
      'Reformers and journalists later attacked police tolerance as part of broader “open city” criticism.',
    ],
  },
  {
    type: 'event',
    year: '1914–1918',
    title: 'World War I on the home front',
    body: 'Wartime mobilization, rationing, and suspicion of German-language institutions reshaped daily life. The war also advanced federal policing and surveillance habits that would carry into Prohibition enforcement.',
  },
  {
    type: 'event',
    year: '1919 (Jan)',
    title: 'Eighteenth Amendment ratified',
    body: 'National constitutional prohibition required state cooperation. Minnesota, like other states, would soon confront the gap between law and widespread drinking culture in urban wards and rural counties alike.',
  },
  {
    type: 'divider',
    label: 'National Prohibition (1920–1933)',
  },
  {
    type: 'event',
    year: '1919 (Oct)',
    title: 'Volstead Act framework',
    body: 'Congress passed implementing legislation defining “intoxicating liquors” and federal enforcement powers. The rules set up the legal machinery local police and federal agents would fight over for fourteen years.',
  },
  {
    type: 'event',
    year: '1920 (Jan 17)',
    title: 'Prohibition takes effect nationally',
    body: 'The Eighteenth Amendment took effect. Licensed saloons closed; consumption moved to private homes, clubs, and illegal venues. St. Paul’s sandstone river caves—including later commercialized Wabasha Street Caves—feature in tour narratives as storage and speakeasy sites; treat colorful room-by-room stories as mixed evidence.',
  },
  {
    type: 'event',
    year: '1920s',
    title: 'Bootlegging economics',
    body: 'Canadian liquor, Midwestern stills, and urban distribution networks fed persistent demand. Corruption—bribes to inspectors and cops—was national. St. Paul’s rail connections and river geography fit into larger Midwest supply chains.',
  },
  {
    type: 'event',
    year: '1920s',
    title: 'Speakeasies, jazz, and enforcement raids',
    body: 'Nightlife adapted: password venues, jazz bands, and dance floors flourished where enforcement lagged. Local newspapers alternated between moralizing editorials and breathless crime coverage, shaping public memory in real time.',
  },
  {
    type: 'event',
    year: '1929',
    title: 'Great Crash; Depression deepens',
    body: 'Stock market collapse worsened unemployment and bank stress. Economic desperation intersected with sensational crime coverage as Midwestern banditry drew headlines.',
  },
  {
    type: 'divider',
    label: 'Depression, kidnappings, and “public enemies”',
  },
  {
    type: 'event',
    year: '1932 (Jan)',
    title: 'Edward Bremer kidnapping',
    body: 'Banker Edward Bremer Jr. was kidnapped in St. Paul, a high-profile ransom case that intensified scrutiny of Twin Cities organized crime and law-enforcement capacity. Secondary accounts and FBI files feature prominently in later narratives.',
    bullets: [
      'Use contemporaneous newspapers for indictment and trial chronology rather than film summaries alone.',
    ],
  },
  {
    type: 'event',
    year: '1933 (Mar–Jul)',
    title: 'Dillinger escape and Midwest rampage',
    body: 'John Dillinger’s spring 1933 escape from an Ohio jail and subsequent bank raids made him a national celebrity of crime. He was not a “St. Paul boss,” but Twin Cities histories connect him to the wider Midwest federal manhunt covered breathlessly in the press.',
  },
  {
    type: 'event',
    year: '1933–1934',
    title: 'FBI expansion and “public enemy” politics',
    body: 'Federal agents pursued kidnapping and bank-robbery rings; Congress expanded Bureau powers and appropriations. Media spectacle—wanted posters, radio, newsreels—turned bandits into household names while juries sometimes remained skeptical of federal cases.',
  },
  {
    type: 'event',
    year: '1934 (Jul 22)',
    title: 'Dillinger killed in Chicago',
    body: 'Federal agents shot John Dillinger outside the Biograph Theater. His death did not end Midwestern violent crime, but it closed a chapter of headline-grabbing bank raids that had trained public attention on the FBI.',
  },
  {
    type: 'event',
    year: '1934–1936',
    title: 'Barker–Karpis aftermath',
    body: 'Alvin Karpis and associates remained targets of federal pursuit; the Barker family’s end at Florida in 1935 became part of Bureau lore. Ma Barker’s role was later debated—some historians see FBI mythmaking at work.',
  },
  {
    type: 'divider',
    label: 'Repeal and mid-century St. Paul',
  },
  {
    type: 'event',
    year: '1933 (Dec 5)',
    title: 'Repeal of Prohibition',
    body: 'Ratification of the Twenty-first Amendment ended national alcohol prohibition. Minnesota participated in the repeal process; legal breweries and wholesalers gradually re-emerged under state licensing and taxation.',
  },
  {
    type: 'event',
    year: '1939–1945',
    title: 'World War II mobilization',
    body: 'Twin Cities factories shifted to war production; labor shortages and migration reshaped neighborhoods. Crime headlines yielded partly to war news, though black markets and policing continued.',
  },
  {
    type: 'event',
    year: '1950s–1960s',
    title: 'Urban renewal and interstates',
    body: 'Federal highway programs and redevelopment altered downtown streetscapes. Some gangster-era buildings survived; others fell to parking ramps and office towers—changing how later generations encountered the physical past.',
  },
  {
    type: 'divider',
    label: 'Memory, tourism, and scholarship',
  },
  {
    type: 'event',
    year: '1970s–1990s',
    title: 'Local history revival',
    body: 'Ramsey County Historical Society activities, walking tours, and popular books reintroduced the gangster narrative to wider audiences—sometimes streamlining complexity into tour-friendly stories.',
  },
  {
    type: 'event',
    year: '1995',
    title: 'Paul Maccabee’s synthesis',
    body: 'Publication of John Dillinger Slept Here consolidated many archival strands for general readers. It remains a starting point for St. Paul’s gangster-era corruption narrative even as scholars urge verification against primary sources.',
  },
  {
    type: 'event',
    year: '2000s–present',
    title: 'Heritage tourism and digital archives',
    body: 'Wabasha Street Caves tours, Landmark Center programming, and digitized newspapers (MDNH, Chronicling America) let visitors and researchers test lore against dated evidence. Historians still debate how formal police tolerance was and how much popular memory smooths messy records.',
    bullets: [
      'This site’s footnoted pages link to a citation registry; use newspapers for the final word on any scene or date.',
    ],
  },
]
