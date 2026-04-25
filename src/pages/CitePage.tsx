import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { TableOfContents } from '../components/TableOfContents'
import {
  buildSuggestedCitation,
  citePageIntro,
  citeSections,
} from '../content/citePage'
import { slugify } from '../utils/slugify'

export function CitePage() {
  const tocItems = [
    { href: '#suggested-formats', label: 'Suggested citation formats' },
    ...citeSections.map((sec) => ({
      href: `#${slugify(sec.title)}`,
      label: sec.title,
    })),
  ]

  return (
    <>
      <PageMeta
        path="/cite"
        title={citePageIntro.title}
        description="How to cite St. Paul History pages in papers and production research bibles: canonical URLs, retrieval dates, and license."
      />
      <h1 className="page-title">{citePageIntro.title}</h1>
      <p className="hero__lead" style={{ marginTop: 0 }}>
        {citePageIntro.lead}
      </p>
      <TableOfContents items={tocItems} />
      <Section title="Suggested citation formats" headingAnchor="suggested-formats">
        <p>Replace the bracketed retrieval date with the day you consulted the page.</p>
        <ul className="section__prose">
          <li>
            <strong>Home</strong>
            <pre className="cite-block">
              <code>{buildSuggestedCitation('/')}</code>
            </pre>
          </li>
          <li>
            <strong>Mobsters (narrative)</strong>
            <pre className="cite-block">
              <code>{buildSuggestedCitation('/mobsters')}</code>
            </pre>
          </li>
          <li>
            <strong>Prohibition (narrative)</strong>
            <pre className="cite-block">
              <code>{buildSuggestedCitation('/prohibition')}</code>
            </pre>
          </li>
          <li>
            <strong>Historiography</strong>
            <pre className="cite-block">
              <code>{buildSuggestedCitation('/historiography')}</code>
            </pre>
          </li>
          <li>
            <strong>Master bibliography (one registry row)</strong>
            <p>
              Stable fragment IDs use the pattern <code>cite-</code> plus the registry key, for
              example <code>/sources#cite-maccabee-dillinger-slept-here</code>. Pair the fragment
              with your usual web citation format and access date.
            </p>
          </li>
        </ul>
      </Section>
      {citeSections.map((sec) => (
        <Section key={sec.title} title={sec.title}>
          {sec.paragraphs.map((p, i) => (
            <p key={`${sec.title}-${i}`}>{p}</p>
          ))}
        </Section>
      ))}
    </>
  )
}
