/**
 * Pilot “claim → evidence” map for /mobsters. Mirrors narrative themes; expand as pages grow.
 */
export type MobstersEvidenceRow = {
  claim: string
  strengthLabel: string
  citationIds: string[]
  whatWouldFalsify: string
}

export const mobstersEvidenceRows: MobstersEvidenceRow[] = [
  {
    claim:
      'St. Paul acquired a reputation as a convenient sanctuary between crimes elsewhere; the “layover” idea is widely repeated.',
    strengthLabel: 'Mixed evidence (press + synthesis + memoir)',
    citationIds: [
      'maccabee-dillinger-slept-here',
      'scholarly-mob-city-debate',
      'contemporary-press-stpaul',
    ],
    whatWouldFalsify:
      'A dated police directive or fee schedule proving a single formal citywide contract—rather than overlapping anecdotes—would require reframing “rules” language.',
  },
  {
    claim:
      'No single archival “contract” captures every layover detail; historians rely on overlapping testimony and later memoirs.',
    strengthLabel: 'Scholarly caution / memoir after the fact',
    citationIds: ['scholarly-mob-city-debate', 'meyer-family-memories', 'mnhs-research-library'],
    whatWouldFalsify:
      'Discovery of a contemporaneous signed agreement naming fees and enforcement consistently across years would contradict “no single document” phrasing.',
  },
  {
    claim:
      'Midwest “public enemies” belong to fugitive geography (cars, state lines, overlapping crews)—not one cartel with one HQ.',
    strengthLabel: 'Scholarly consensus + national synthesis',
    citationIds: ['burrough-public-enemies', 'midwest-outlaw-networks', 'maccabee-dillinger-slept-here'],
    whatWouldFalsify:
      'Indictment or wiretap-era proof of a single standing conspiracy controlling all named bandits would force a narrower or broader map than this page uses.',
  },
  {
    claim:
      'FBI histories are one participant’s story; independent scholarship stresses spectacle, informants, and jurisdictional fights.',
    strengthLabel: 'Interpretation debated',
    citationIds: ['fbi-history-1930s', 'scholarly-mob-city-debate'],
    whatWouldFalsify:
      'Systematic comparison showing Bureau trial narratives matched jury findings without press distortion would raise the weight of FBI-only chains.',
  },
]
