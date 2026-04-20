import type { Source } from '../content/sources'

type SourceListProps = {
  items: Source[]
}

function formatSource(s: Source): string {
  const parts: string[] = []
  if (s.authors?.length) parts.push(s.authors.join(', '))
  parts.push(s.title)
  if (s.publication) parts.push(s.publication)
  if (s.year) parts.push(`(${s.year})`)
  return parts.join('. ')
}

export function SourceList({ items }: SourceListProps) {
  return (
    <ul className="source-list">
      {items.map((s) => (
        <li key={s.id}>
          <cite>{formatSource(s)}</cite>
          {s.url ? (
            <>
              {' '}
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.url.replace(/^https?:\/\//, '')}
              </a>
            </>
          ) : null}
          {s.note ? <p>{s.note}</p> : null}
        </li>
      ))}
    </ul>
  )
}
