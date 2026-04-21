import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { TableOfContents } from '../components/TableOfContents'
import { chroniclingAmericaExamples, mdnhExamples } from '../content/deepLinks'
import { primarySourceLinks } from '../content/primarySources'

export function PrimarySourcesPage() {
  const tocItems = [
    ...primarySourceLinks.map((s) => ({
      href: `#${s.id}`,
      label: s.title,
    })),
    {
      href: '#example-searches-chronicling-america',
      label: 'Example searches: Chronicling America',
    },
    {
      href: '#minnesota-digital-newspaper-hub-examples',
      label: 'Minnesota Newspaper Hub — example entry points',
    },
  ]

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
      <TableOfContents items={tocItems} />
      <ul className="primary-source-list">
        {primarySourceLinks.map((s) => (
          <li key={s.id}>
            <h2 className="primary-source-list__title" id={s.id}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.title}
              </a>
            </h2>
            <p className="primary-source-list__org">{s.institution}</p>
            <p>{s.howToUse}</p>
          </li>
        ))}
      </ul>

      <Section
        title="Example searches: Chronicling America"
        headingAnchor="example-searches-chronicling-america"
      >
        <p>
          These URLs are starting points; result sets change as newspapers are digitized and OCR
          improves. Adjust dates and keywords in the target tool.
        </p>
        <ul className="section__prose">
          {chroniclingAmericaExamples.map((ex) => (
            <li key={ex.id}>
              <a href={ex.url} target="_blank" rel="noopener noreferrer">
                {ex.title}
              </a>
              <p>{ex.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Minnesota Newspaper Hub — example entry points"
        headingAnchor="minnesota-digital-newspaper-hub-examples"
      >
        <ul className="section__prose">
          {mdnhExamples.map((ex) => (
            <li key={ex.id}>
              <a href={ex.url} target="_blank" rel="noopener noreferrer">
                {ex.title}
              </a>
              <p>{ex.note}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
