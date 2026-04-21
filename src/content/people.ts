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
    id: 'baby-face-nelson',
    name: 'Lester Gillis (“Baby Face” Nelson)',
    dates: '1908–1934',
    role: 'Bank robber; associate of Dillinger-era Midwest crews',
    stPaulConnection:
      'Not a St. Paul operator, but part of the same interstate press narrative as Twin Cities crime during the early 1930s—useful for understanding how “Midwest outlaw” labels lumped distinct individuals.',
    summary:
      'Nelson operated mainly in Illinois and the Great Lakes states, dying after a 1934 shootout with federal agents. Histories emphasize violence and loyalty within small circles rather than a single regional syndicate.',
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
  {
    id: 'olson',
    name: 'Floyd B. Olson',
    dates: '1891–1936',
    role: 'Governor of Minnesota (Farmer–Labor)',
    stPaulConnection:
      'As governor during the early 1930s, Olson personified Minnesota’s Depression politics in the same years St. Paul kidnappings and bank robberies drew national headlines—context for reform pressures on police and prosecutors.',
    summary:
      'Olson championed labor and state activism; he died in office. He is not a “gangster” figure, but any serious portrait of the era in the Twin Cities must account for his popularity and the political climate around crime and corruption.',
  },
  {
    id: 'hoover',
    name: 'J. Edgar Hoover',
    dates: '1895–1972',
    role: 'Director, Bureau of Investigation / FBI',
    stPaulConnection:
      'Federal cases emanating from Minnesota—including kidnappings and interstate fugitives—fed Hoover’s public campaign to expand Bureau jurisdiction and publicity in the early 1930s.',
    summary:
      'Hoover shaped the FBI’s self-presentation through “public enemy” rhetoric and media cooperation. Historians treat many early narratives skeptically; use trial records and newspapers alongside Bureau histories.',
  },
  {
    id: 'purvis',
    name: 'Melvin Purvis',
    dates: '1903–1960',
    role: 'FBI special agent',
    stPaulConnection:
      'Purvis did not work only in Minnesota, but his celebrity from Dillinger-era captures belongs to the same federal manhunt story that touched Twin Cities press coverage.',
    summary:
      'Purvis became famous for high-profile arrests and kills in the “public enemy” period; later accounts debate credit between field agents, informants, and Hoover’s publicity machine.',
  },
  {
    id: 'cowley',
    name: 'Samuel P. Cowley',
    dates: '1899–1934',
    role: 'FBI agent',
    stPaulConnection:
      'Cowley’s death in a 1934 Illinois gunfight while pursuing Nelson illustrates how quickly Midwest fugitive chases crossed state lines discussed in Twin Cities newspapers.',
    summary:
      'Cowley is remembered for violent end-of-trail confrontations in the Dillinger–Nelson era. FBI casualty statistics from such fights became part of Hoover’s justification for Bureau expansion.',
  },
  {
    id: 'liggett',
    name: 'Walter Liggett',
    dates: '1888–1935',
    role: 'Investigative journalist',
    stPaulConnection:
      'Liggett was murdered in Minneapolis after reporting on organized crime and politics; the case belongs to Minnesota’s interwar story of corruption, labor, and violence—not St. Paul bank robberies alone.',
    summary:
      'His killing drew national attention and debate over who ordered it. Treat popular retellings cautiously; court records and inquests anchor serious work.',
  },
  {
    id: 'gleckman',
    name: 'Leon Gleckman',
    dates: 'c. 1893–1949',
    role: 'Bootlegger; Twin Cities liquor operator',
    stPaulConnection:
      'Gleckman appears in Twin Cities Prohibition histories as a major bootlegging entrepreneur—parallel underground economy to the more famous “gangster tour” robber narratives.',
    summary:
      'Scholarship and journalism tie him to sophisticated smuggling and political protection debates. Verify claims in secondary sources against indictments and newspapers.',
  },
  {
    id: 'kid-cann',
    name: 'Isadore “Kid Cann” Blumenfield',
    dates: '1900–1981',
    role: 'Minneapolis organized-crime figure',
    stPaulConnection:
      'Cann’s career illustrates how Minneapolis and St. Paul sometimes appear as paired but distinct underworlds in later true-crime literature—rival cities, overlapping federal attention.',
    summary:
      'Convictions and long life span made him a durable symbol of Midwest syndicate gambling and labor racketeering in popular memory; separate hype from documented timelines.',
  },
  {
    id: 'van-meter',
    name: 'Homer Van Meter',
    dates: '1906–1934',
    role: 'Bank robber; Dillinger associate',
    stPaulConnection:
      'Killed by police in St. Paul in August 1934—one of the few figures on this list whose death is directly tied to the city in standard chronologies.',
    summary:
      'Van Meter had moved through the same interstate circuits—trains, stolen cars, safe houses—as other Dillinger-era robbers. Biographies cluster him with that circle; confirm details in August 1934 Twin Cities press.',
  },
  {
    id: 'pierpont',
    name: 'Harry Pierpont',
    dates: '1904–1934',
    role: 'Bank robber; Indiana prison break associate of Dillinger',
    stPaulConnection:
      'Not a Twin Cities boss, but part of the “circuit” narrative Maccabee and others use when explaining how Midwest crews shared members and reputations.',
    summary:
      'Pierpont was executed in 1934. Early Dillinger escapes and Indiana prison politics dominate his story; read trial files for specifics rather than movie composites.',
  },
  {
    id: 'hamilton',
    name: 'John “Red” Hamilton',
    dates: '1899–1934',
    role: 'Bank robber; Dillinger associate',
    stPaulConnection:
      'Hamilton’s travels illustrate how one crew could link Great Lakes robberies to hideouts and medical care across several states—including routes discussed in Twin Cities crime histories.',
    summary:
      'He died of wounds after criminal activity in the Dillinger years. Popular books sometimes blur his timeline; check contemporary newspapers for each alleged appearance.',
  },
  {
    id: 'frechette',
    name: 'Mary Evelyn “Billie” Frechette',
    dates: '1906–1969',
    role: 'Companion of John Dillinger; later author and lecturer',
    stPaulConnection:
      'Her memoir-style interviews color how the public understood Dillinger’s movements; St. Paul tour narratives sometimes cite her accounts—compare with archival evidence.',
    summary:
      'Indicted for harboring, imprisoned, then released into obscurity until late-life interviews. Treat memory decades after events as testimony, not sole proof.',
  },
  {
    id: 'murray',
    name: 'Edna “Rabbits” Murray',
    dates: '1898–1966',
    role: 'Convicted robber; press “kissing bandit” notoriety',
    stPaulConnection:
      'Murray’s sensational nickname and escapes fed the same Midwest crime pages that carried Twin Cities kidnapping and bank-robbery stories in the early 1930s.',
    summary:
      'Historians of gender and crime use figures like Murray to show how women’s roles in outlaw publicity were exaggerated. Verify particulars in court documents.',
  },
  {
    id: 'carroll',
    name: 'Tommy Carroll',
    dates: '1900–1934',
    role: 'Bank robber; associate of Dillinger-era crews',
    stPaulConnection:
      'Carroll’s name surfaces in national gangster chronologies that also reference St. Paul as a layover point—evidence for “network” is often press-based.',
    summary:
      'Killed in 1934. Like other secondary associates, he illustrates fluid membership in short-lived robbery cliques rather than stable “families.”',
  },
  {
    id: 'floyd',
    name: 'Charles Arthur “Pretty Boy” Floyd',
    dates: '1904–1934',
    role: 'Bank robber; Oklahoma / Midwest bandit',
    stPaulConnection:
      'Floyd was not a St. Paul operator, but Twin Cities newspapers covered his spree alongside Dillinger headlines—shared “public enemy” spectacle.',
    summary:
      'Killed in Ohio in 1934. Mythology—Robin Hood tropes—often outruns documentation; use FBI files and regional press with caution.',
  },
  {
    id: 'machine-gun-kelly',
    name: 'George Francis Barnes Jr. (“Machine Gun Kelly”)',
    dates: '1895–1954',
    role: 'Kidnapper; federal “public enemy”',
    stPaulConnection:
      'Kelly’s kidnapping notoriety belongs to the same early-1930s kidnapping panic as the Bremer case—national context for how St. Paul crimes were read.',
    summary:
      'Captured in 1933; long prison life afterward. The “Machine Gun” nickname was partly press invention; check chronologies against indictments.',
  },
  {
    id: 'kathryn-kelly',
    name: 'Kathryn Thorne Kelly',
    dates: '1904–1985',
    role: 'Convicted in kidnapping conspiracy',
    stPaulConnection:
      'Her trial narrative intersects federal kidnapping law expansion relevant to Midwest ransom cases, including those discussed in Minnesota histories.',
    summary:
      'Prosecutors portrayed her as instigator; defenses disputed facts. Later life included prison and parole; gendered tropes abound in coverage—read critically.',
  },
  {
    id: 'bailey',
    name: 'Harvey John Bailey (“Dean of American Bank Robbers”)',
    dates: '1887–1979',
    role: 'Bank robber; prison-break figure',
    stPaulConnection:
      'Bailey’s long career predated Dillinger’s peak but overlapped Prohibition smuggling routes and Great Plains bank raids cited in regional outlaw genealogies.',
    summary:
      'Survived into old age in prison and parole. Useful for writers tracing continuity from 1920s banditry to Depression “public enemy” fame.',
  },
  {
    id: 'miller',
    name: 'Verne Miller',
    dates: '1896–1933',
    role: 'Outlaw; former lawman; bootlegger',
    stPaulConnection:
      'Miller appears in Kansas City massacre scholarship and Midwest gangster chronicles that Twin Cities readers saw in wire coverage—another node on interstate maps.',
    summary:
      'Died violently in 1933 amid disputed circumstances. Early FBI narratives and local police stories conflict; treat as heavily mythologized.',
  },
  {
    id: 'fred-barker',
    name: 'Fred Barker',
    dates: '1901–1935',
    role: 'Robber; Barker sons',
    stPaulConnection:
      'Fred’s movements with the Barker–Karpis circle sometimes touch Upper Midwest hideout lore; verify any St. Paul detail against dated sources.',
    summary:
      'Killed with his mother at Lake Weir, Florida, in 1935. FBI accounts emphasize family conspiracy; independent historians question Ma Barker’s operational role.',
  },
  {
    id: 'doc-barker',
    name: 'Arthur “Doc” Barker',
    dates: '1899–1939',
    role: 'Kidnapper; Barker son',
    stPaulConnection:
      'Doc Barker’s federal trials and Alcatraz story belong to the kidnapping-ring narrative that framed how Minnesotans read crime news in the mid-1930s.',
    summary:
      'Killed attempting escape from Alcatraz in 1939. Useful for tracing federal prison policy and sensational press alongside Twin Cities cases.',
  },
]
