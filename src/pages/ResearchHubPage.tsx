import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { siteAttribution } from '../content/citingThisSite'

const tools = [
  {
    to: '/methodology',
    title: 'Methodology',
    blurb: 'Evidence standards, primary vs secondary sources, ethics, and how to cite this site.',
  },
  {
    to: '/historiography',
    title: 'Historiography',
    blurb: 'Where scholars disagree: O’Connor / “open city,” FBI narratives, Ma Barker, Bremer.',
  },
  {
    to: '/glossary',
    title: 'Glossary',
    blurb: 'Volstead, layover, Chronicling America, Sanborn maps, and other keywords.',
  },
  {
    to: '/primary-sources',
    title: 'Primary sources',
    blurb: 'Direct links to MN Digital Newspaper Hub, Chronicling America, Sanborns, archives.',
  },
  {
    to: '/library',
    title: 'Books & films',
    blurb: 'Curated movies and books with relevance tags for St. Paul / Prohibition research.',
  },
  {
    to: '/sources',
    title: 'Bibliography',
    blurb: 'Master list keyed to citation IDs used in footnotes.',
  },
  {
    to: '/changelog',
    title: 'Changelog',
    blurb: 'Substantive revisions to claims and structure (not every typo fix).',
  },
  {
    to: '/license',
    title: 'License',
    blurb: 'CC BY-SA 4.0 and how to attribute text from this repository.',
  },
]

export function ResearchHubPage() {
  return (
    <>
      <PageMeta
        path="/research"
        title="Research hub"
        description="Methodology, historiography, glossary, primary-source links, bibliography, and license for film and book research on St. Paul."
      />
      <header className="hero">
        <p className="hero__eyebrow">For writers, producers, and teachers</p>
        <h1 className="page-title">Research hub</h1>
        <p className="hero__lead">{siteAttribution.purpose}</p>
        <p className="hero__lead" style={{ marginTop: '0.5rem' }}>
          {siteAttribution.maintainerNote}
        </p>
      </header>

      <section className="section" aria-labelledby="reading-paths-heading">
        <h2 id="reading-paths-heading">Reading paths</h2>
        <ul className="reading-paths">
          <li>
            <strong>~15 minutes:</strong>{' '}
            <Link to="/mobsters">Mobsters</Link> (footnotes) +{' '}
            <Link to="/historiography">Historiography</Link>.
          </li>
          <li>
            <strong>~45 minutes:</strong> add{' '}
            <Link to="/prohibition">Prohibition</Link>,{' '}
            <Link to="/primary-sources">Primary sources</Link>, and skim the{' '}
            <Link to="/sources">Bibliography</Link>.
          </li>
          <li>
            <strong>Production bible:</strong> pair newspaper pulls (MDNH / Chronicling America)
            with <Link to="/places">Places</Link> and <Link to="/figures">Figures</Link>; log
            citations in your own document—this site does not replace archives.
          </li>
        </ul>
      </section>

      <section className="section" aria-labelledby="tools-heading">
        <h2 id="tools-heading">Tools &amp; reference</h2>
        <div className="card-grid">
          {tools.map((t) => (
            <article key={t.to} className="card">
              <h3>{t.title}</h3>
              <p>{t.blurb}</p>
              <Link to={t.to}>Open</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
