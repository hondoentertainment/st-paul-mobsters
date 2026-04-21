import type { ReactNode } from 'react'

/** Renders `**bold**` segments as `<strong>` (single-line strings; no nested markup). */
export function renderInlineBold(text: string): ReactNode {
  return text.split('**').map((chunk, i) =>
    i % 2 === 1 ? (
      <strong key={i}>{chunk}</strong>
    ) : (
      <span key={i}>{chunk}</span>
    ),
  )
}
