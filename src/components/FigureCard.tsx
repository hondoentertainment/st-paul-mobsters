import type { Figure } from '../content/people'

type FigureCardProps = {
  figure: Figure
}

export function FigureCard({ figure }: FigureCardProps) {
  return (
    <article className="figure-card" aria-labelledby={`figure-${figure.id}`}>
      <span className="figure-card__tag">{figure.role}</span>
      <h3 className="figure-card__name" id={`figure-${figure.id}`}>
        {figure.name}
      </h3>
      <p className="figure-card__meta">{figure.dates}</p>
      <p>{figure.summary}</p>
      <p>
        <strong>St. Paul connection:</strong> {figure.stPaulConnection}
      </p>
    </article>
  )
}
