import { PageMeta } from '../components/PageMeta'
import { changelog } from '../content/changelog'

export function ChangelogPage() {
  return (
    <>
      <PageMeta
        path="/changelog"
        title="Changelog"
        description="Substantive revisions to St. Paul History site claims, citations, and bibliography."
      />
      <h1 className="page-title">Changelog</h1>
      <p className="hero__lead" style={{ marginTop: 0 }}>
        Documented changes to interpretation, citation structure, and bibliography. Minor
        copyediting may not be listed.
      </p>
      <ol className="changelog-list">
        {changelog.map((entry) => (
          <li key={entry.date + entry.title}>
            <p className="changelog-list__meta">
              <time dateTime={entry.date}>{entry.date}</time>
              {' — '}
              <strong>{entry.title}</strong>
            </p>
            <ul>
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </>
  )
}
