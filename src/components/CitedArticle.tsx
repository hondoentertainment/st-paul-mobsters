import { Section } from './Section'
import { ClaimStrengthBadge } from './ClaimStrengthBadge'
import type { CitedParagraph } from '../utils/footnotes'
import {
  buildFootnoteNumbers,
  flattenFromCitedSections,
  orderedUniqueIds,
} from '../utils/footnotes'
import { CITATIONS, type CitationId } from '../content/citationsRegistry'

type SectionBlock = {
  title: string
  paragraphs: CitedParagraph[]
}

type CitedArticleProps = {
  lead?: CitedParagraph | null
  sections: SectionBlock[]
  footnotesTitle?: string
}

function dedupeIds(ids: CitationId[]): CitationId[] {
  return [...new Set(ids)]
}

export function CitedArticle({
  lead,
  sections,
  footnotesTitle = 'References',
}: CitedArticleProps) {
  const leadSeq = lead ? [lead.citationIds] : []
  const bodySeq = flattenFromCitedSections(sections)
  const allSequences = [...leadSeq, ...bodySeq]
  const numMap = buildFootnoteNumbers(allSequences)
  const orderIds = orderedUniqueIds(allSequences) as CitationId[]

  function renderParagraph(p: CitedParagraph, key: string) {
    const ids = dedupeIds(p.citationIds)
    return (
      <p key={key}>
        {p.strength ? <ClaimStrengthBadge strength={p.strength} /> : null}
        {p.text}
        {ids.length > 0 ? (
          <>
            {' '}
            {ids.map((id) => {
              const n = numMap.get(id)
              if (n == null) return null
              return (
                <sup key={`${key}-${id}`}>
                  <a href={`#fn-${n}`} className="footnote-ref">
                    {n}
                  </a>
                </sup>
              )
            })}
          </>
        ) : null}
      </p>
    )
  }

  return (
    <>
      {lead ? (
        <div className="section__prose cited-lead">
          {renderParagraph(lead, 'lead')}
        </div>
      ) : null}

      {sections.map((sec) => (
        <Section key={sec.title} title={sec.title}>
          {sec.paragraphs.map((p, i) =>
            renderParagraph(p, `${sec.title}-${i}`),
          )}
        </Section>
      ))}

      <section
        className="section footnotes-section"
        aria-labelledby="footnotes-heading"
      >
        <h2 id="footnotes-heading" className="footnotes-heading">
          {footnotesTitle}
        </h2>
        <ol className="footnotes-list">
          {orderIds.map((id) => {
            const n = numMap.get(id)
            const rec = CITATIONS[id]
            if (n == null || !rec) return null
            return (
              <li key={id} id={`fn-${n}`} value={n}>
                <cite>{rec.short}</cite>
                <span className="footnote-full"> {rec.full}</span>
                {rec.url ? (
                  <>
                    {' '}
                    <a href={rec.url} target="_blank" rel="noopener noreferrer">
                      {rec.url.replace(/^https?:\/\//, '')}
                    </a>
                  </>
                ) : null}
                <a href="#footnotes-heading" className="footnote-back">
                  {' '}
                  ↩
                </a>
              </li>
            )
          })}
        </ol>
      </section>
    </>
  )
}
