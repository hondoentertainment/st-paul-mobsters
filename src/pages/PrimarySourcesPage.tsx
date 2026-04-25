import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { TableOfContents } from '../components/TableOfContents'
import { chroniclingAmericaExamples, mdnhExamples } from '../content/deepLinks'
import { PRIMARY_SOURCE_WORKFLOWS } from '../content/primarySourceWorkflow'
import { primarySourceLinks } from '../content/primarySources'
import { RESEARCH_PATHS } from '../content/researchPaths'

function WorkflowBlock({ id }: { id: string }) {
  const w = PRIMARY_SOURCE_WORKFLOWS[id]
  if (!w) return null
  return (
    <div className="repository-workflow">
      <h3 className="repository-workflow__heading">Serious researcher workflow</h3>
      <p className="repository-workflow__sub">Default strategy</p>
      <ol className="repository-workflow__list">
        {w.defaultStrategy.map((step, i) => (
          <li key={`${id}-s-${i}`}>{step}</li>
        ))}
      </ol>
      {w.ocrAndSpelling.length > 0 ? (
        <>
          <p className="repository-workflow__sub">OCR, spelling, and noise</p>
          <ul className="repository-workflow__list">
            {w.ocrAndSpelling.map((step, i) => (
              <li key={`${id}-o-${i}`}>{step}</li>
            ))}
          </ul>
        </>
      ) : null}
      <p className="repository-workflow__sub">What to capture for your citation log</p>
      <ul className="repository-workflow__list">
        {w.captureForCitation.map((step, i) => (
          <li key={`${id}-c-${i}`}>{step}</li>
        ))}
      </ul>
    </div>
  )
}

export function PrimarySourcesPage() {
  const tocItems = [
    { href: '#topic-research-paths', label: 'Topic research paths' },
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
        Below each repository, a <strong>serious researcher workflow</strong> block lists default
        search strategy, OCR pitfalls, and what metadata to log so you can reproduce your work.
      </p>
      <TableOfContents items={tocItems} />

      <Section
        title="Topic research paths"
        headingAnchor="topic-research-paths"
      >
        <p>
          Curated ladders—not claims. Use them to decide which record types to pull before you
          trust any single secondary sentence.
        </p>
        <ul className="section__prose research-paths">
          {RESEARCH_PATHS.map((path) => (
            <li key={path.id}>
              <strong>{path.title}</strong>
              <p>{path.goal}</p>
              <p className="research-paths__label">Record types to prioritize</p>
              <ul>
                {path.recordTypes.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="research-paths__label">Repositories</p>
              <ul>
                {path.repositoryHints.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

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
            <WorkflowBlock id={s.id} />
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
