import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import MiniSearch from 'minisearch'
import { PageMeta } from '../components/PageMeta'
import { SEARCH_CHUNKS } from '../content/searchIndexData'

export function SearchPage() {
  const [query, setQuery] = useState('')

  const miniSearch = useMemo(() => {
    const ms = new MiniSearch({
      fields: ['title', 'text'],
      storeFields: ['path', 'title'],
      idField: 'id',
    })
    ms.addAll(SEARCH_CHUNKS)
    return ms
  }, [])

  const results = useMemo(() => {
    const q = query.trim()
    if (q.length < 2) return []
    return miniSearch.search(q, {
      combineWith: 'AND',
      fuzzy: 0.2,
      prefix: true,
      boost: { title: 2 },
    })
  }, [miniSearch, query])

  return (
    <>
      <PageMeta
        path="/search"
        title="Search"
        description="Search page titles and curated keywords across St. Paul History."
      />
      <h1 className="page-title">Search the site</h1>
      <p className="hero__lead" style={{ marginTop: 0 }}>
        This index covers main routes and recurring research topics (not every footnote string).
        Prefer the <Link to="/sources">bibliography</Link> and <Link to="/primary-sources">primary sources</Link>{' '}
        pages for deep retrieval.
      </p>
      <label className="search-page__label" htmlFor="site-search-input">
        Search
      </label>
      <input
        id="site-search-input"
        className="search-page__input"
        type="search"
        autoComplete="off"
        placeholder="e.g. Bremer, Volstead, MDNH, O’Connor"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        spellCheck={false}
      />
      {query.trim().length > 0 && query.trim().length < 2 ? (
        <p className="search-page__hint">Enter at least two characters.</p>
      ) : null}
      {query.trim().length >= 2 && results.length === 0 ? (
        <p className="search-page__hint">No matches. Try a person’s surname or a tool name (MDNH, Sanborn).</p>
      ) : null}
      {results.length > 0 ? (
        <ol className="search-page__results">
          {results.map((r) => (
            <li key={r.id}>
              <Link to={r.path}>{r.title}</Link>
              <span className="search-page__path">{r.path}</span>
            </li>
          ))}
        </ol>
      ) : null}
    </>
  )
}
