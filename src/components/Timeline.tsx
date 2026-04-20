import type { TimelineEntry } from '../content/timeline'

type TimelineProps = {
  entries: TimelineEntry[]
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="timeline" aria-label="Historical timeline">
      {entries.map((entry) => (
        <li key={`${entry.year}-${entry.title}`} className="timeline__item">
          <p className="timeline__year">{entry.year}</p>
          <h3 className="timeline__title">{entry.title}</h3>
          <p>{entry.body}</p>
        </li>
      ))}
    </ol>
  )
}
