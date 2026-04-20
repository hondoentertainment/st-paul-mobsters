export type ClaimStrength =
  | 'contemporary-press'
  | 'memoir-after-the-fact'
  | 'scholarly-consensus'
  | 'disputed'
  | 'local-legend'
  | 'mixed-evidence'

export const CLAIM_LABELS: Record<ClaimStrength, string> = {
  'contemporary-press': 'Contemporary press / official record',
  'memoir-after-the-fact': 'Memoir or later recollection',
  'scholarly-consensus': 'Scholarly consensus (synthesis)',
  disputed: 'Historians disagree',
  'local-legend': 'Local legend / popular memory',
  'mixed-evidence': 'Mixed evidence',
}
