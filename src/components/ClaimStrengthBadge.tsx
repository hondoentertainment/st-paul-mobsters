import type { ClaimStrength } from '../types/claims'
import { CLAIM_LABELS } from '../types/claims'

type Props = {
  strength: ClaimStrength
}

export function ClaimStrengthBadge({ strength }: Props) {
  const label = CLAIM_LABELS[strength]
  return (
    <span className="claim-strength-badge" title={label}>
      {label}
    </span>
  )
}
