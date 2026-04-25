import { Link, Navigate, useSearchParams } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { CITATIONS, type CitationId } from '../content/citationsRegistry'

function isCitationId(id: string): id is CitationId {
  return id in CITATIONS
}

export function CitationLookupPage() {
  const [params] = useSearchParams()
  const raw = params.get('id')?.trim() ?? ''

  if (!raw) {
    return (
      <>
        <PageMeta
          path="/lookup"
          title="Citation lookup"
          description="Jump to a bibliography row by CitationId."
        />
        <h1 className="page-title">Citation lookup</h1>
        <p className="hero__lead" style={{ marginTop: 0 }}>
          Add <code>?id=</code> with a registry key, for example{' '}
          <Link to="/lookup?id=maccabee-dillinger-slept-here">
            /lookup?id=maccabee-dillinger-slept-here
          </Link>
          , to open the matching row on the{' '}
          <Link to="/sources">Sources &amp; bibliography</Link> page.
        </p>
      </>
    )
  }

  if (!isCitationId(raw)) {
    return (
      <>
        <PageMeta path="/lookup" title="Citation not found" description="Unknown CitationId." />
        <h1 className="page-title">Unknown CitationId</h1>
        <p>
          No registry entry for <code>{raw}</code>.{' '}
          <Link to="/sources">Browse the bibliography</Link> or{' '}
          <Link to="/search">search</Link>.
        </p>
      </>
    )
  }

  return <Navigate to={`/sources#cite-${raw}`} replace />
}
