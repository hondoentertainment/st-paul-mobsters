import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { homeCards } from '../content/home'

export function Home() {
  return (
    <>
      <PageMeta
        path="/"
        title="St. Paul — Prohibition & mobsters"
        description="Reference site: St. Paul Minnesota history with footnoted Prohibition and O’Connor-era narratives, primary sources, and bibliography for film and book research."
      />
      <header className="hero">
        <p className="hero__eyebrow">St. Paul, Minnesota</p>
        <h1 className="page-title">River city, capital, and Prohibition-era crossroads</h1>
        <p className="hero__lead">
          St. Paul’s history is more than gangster lore—but the national experiment of Prohibition
          and the “public enemy” years left a lasting mark on how the city remembers itself. This
          site pairs narrative with{' '}
          <strong>inline citations, evidence labels, and a stable bibliography</strong> suitable
          for scripts, novels, and syllabi.
        </p>
      </header>

      <aside className="research-callout" aria-labelledby="research-callout-heading">
        <h2 id="research-callout-heading">For film, TV, and publishing</h2>
        <p>
          Use the <Link to="/research">Research hub</Link> for methodology, historiography, direct
          links to <Link to="/primary-sources">newspaper archives</Link>, the{' '}
          <Link to="/library">books &amp; films library</Link>, and the{' '}
          <Link to="/license">CC BY-SA</Link> license and{' '}
          <Link to="/cite">citation format</Link>. Footnoted pages:{' '}
          <Link to="/prohibition">Prohibition</Link> and <Link to="/mobsters">Mobsters</Link>.
        </p>
      </aside>

      <section className="section" aria-labelledby="explore-heading">
        <h2 id="explore-heading">Explore</h2>
        <div className="card-grid">
          {homeCards.map((card) => (
            <article key={card.to} className="card">
              <h3>{card.title}</h3>
              <p>{card.blurb}</p>
              <Link to={card.to}>Open section</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
