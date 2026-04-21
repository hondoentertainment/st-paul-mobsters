import { useMemo, useState } from 'react'
import { FigureCard } from './FigureCard'
import {
  FIGURE_FILTER_CHIPS,
  type FigureFilterId,
  figures,
} from '../content/people'

export function FigureDirectory() {
  const [filter, setFilter] = useState<FigureFilterId | 'all'>('all')

  const visible = useMemo(() => {
    if (filter === 'all') return figures
    return figures.filter((f) => f.filters.includes(filter))
  }, [filter])

  return (
    <div id="figure-directory">
      <div className="figure-filters" role="group" aria-label="Filter profiles by topic">
        {FIGURE_FILTER_CHIPS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`figure-filters__btn${filter === id ? ' is-active' : ''}`}
            onClick={() => setFilter(id)}
            aria-pressed={filter === id}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="figure-filters__count" aria-live="polite">
        Showing {visible.length} of {figures.length} profiles
      </p>
      <div className="figure-directory__grid">
        {visible.map((f) => (
          <FigureCard key={f.id} figure={f} />
        ))}
      </div>
    </div>
  )
}
