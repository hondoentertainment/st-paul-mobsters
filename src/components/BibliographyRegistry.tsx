import { BibliographyCopyTools } from './BibliographyCopyTools'
import { BIBLIOGRAPHY_ORDER, CITATIONS } from '../content/citationsRegistry'

export function BibliographyRegistry() {
  return (
    <ol className="bibliography-registry">
      {BIBLIOGRAPHY_ORDER.map((id) => {
        const rec = CITATIONS[id]
        return (
          <li key={id} id={`cite-${id}`}>
            <strong>{rec.short}</strong>
            {rec.editionNote ? (
              <span className="bibliography-registry__edition"> {rec.editionNote}</span>
            ) : null}
            <span className="footnote-full"> {rec.full}</span>
            {rec.url ? (
              <>
                {' '}
                <a href={rec.url} target="_blank" rel="noopener noreferrer">
                  {rec.url.replace(/^https?:\/\//, '')}
                </a>
              </>
            ) : null}
            {rec.howToLocate ? (
              <p className="bibliography-registry__locate">
                <strong>Finding detail:</strong> {rec.howToLocate}
              </p>
            ) : null}
            <BibliographyCopyTools id={id} rec={rec} />
          </li>
        )
      })}
    </ol>
  )
}
