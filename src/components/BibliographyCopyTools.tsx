import { useCallback, useState } from 'react'
import type { CitationRecord } from '../content/citationsRegistry'

type BibliographyCopyToolsProps = {
  id: string
  rec: CitationRecord
}

export function BibliographyCopyTools({ id, rec }: BibliographyCopyToolsProps) {
  const [status, setStatus] = useState<string | null>(null)

  const flash = useCallback((msg: string) => {
    setStatus(msg)
    window.setTimeout(() => setStatus(null), 2200)
  }, [])

  const copyText = useCallback(
    async (text: string, msg: string) => {
      try {
        await navigator.clipboard.writeText(text)
        flash(msg)
      } catch {
        flash('Copy blocked by browser')
      }
    },
    [flash],
  )

  const noteLine = rec.editionNote ? ` ${rec.editionNote}` : ''
  const prose = `${rec.short}. ${rec.full}${noteLine}${rec.url ? ` ${rec.url}` : ''}`
  const fallbackUrl = `https://st-paul-mobsters.vercel.app/sources#cite-${id}`
  const bibtex = [
    `@misc{site-${id},`,
    `  title = {${rec.short}},`,
    `  url = {${rec.url ?? fallbackUrl}},`,
    `}`,
  ].join('\n')

  return (
    <p className="bibliography-registry__tools">
      <button
        type="button"
        className="bibliography-registry__btn"
        onClick={() => copyText(id, 'CitationId copied')}
      >
        Copy CitationId
      </button>
      <button
        type="button"
        className="bibliography-registry__btn"
        onClick={() => copyText(prose, 'Short citation copied')}
      >
        Copy note (Chicago-like)
      </button>
      <button
        type="button"
        className="bibliography-registry__btn"
        onClick={() => copyText(bibtex, 'BibTeX copied')}
      >
        Copy BibTeX @misc
      </button>
      {status ? <span className="bibliography-registry__copy-status">{status}</span> : null}
    </p>
  )
}
