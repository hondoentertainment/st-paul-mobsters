import type { TimelineEntry } from '../content/timeline'

type TimelineProps = {
  entries: TimelineEntry[]
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="timeline" aria-label="Historical timeline">
      {entries.map((entry, index) => {
        if (entry.type === 'divider') {
          return (
            <li
              key={`divider-${index}-${entry.label}`}
              className="timeline__divider"
            >
              <h3 className="timeline__era">{entry.label}</h3>
            </li>
          )
        }
        return (
          <li
            key={`${entry.year}-${entry.title}-${index}`}
            className="timeline__item"
          >
            <p className="timeline__year">{entry.year}</p>
            <h4 className="timeline__title">{entry.title}</h4>
            <p className="timeline__body">{entry.body}</p>
            {entry.bullets?.length ? (
              <ul className="timeline__bullets">
                {entry.bullets.map((b, i) => (
                  <li key={`${entry.year}-${i}`}>{b}</li>
                ))}
              </ul>
            ) : null}
          </li>
        )
      })}
    </ol>
  )
}
