import { PageMeta } from '../components/PageMeta'
import { primarySourceLinks } from '../content/primarySources'

export function PrimarySourcesPage() {
  return (
    <>
      <PageMeta
        path="/primary-sources"
        title="Primary sources"
        description="Links to Minnesota Digital Newspaper Hub, Chronicling America, Sanborn maps, MNHS library, National Archives, and FBI history."
      />
      <h1 className="page-title">Primary sources &amp; digital repositories</h1>
      <p className="hero__lead" style={{ marginTop: 0 }}>
        Start here for film and book research: free digital collections and clear next steps for
        in-archive work. Always record the specific issue date and page when you cite a newspaper.
      </p>
      <ul className="primary-source-list">
        {primarySourceLinks.map((s) => (
          <li key={s.id} id={s.id}>
            <h2 className="primary-source-list__title">
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.title}
              </a>
            </h2>
            <p className="primary-source-list__org">{s.institution}</p>
            <p>{s.howToUse}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
