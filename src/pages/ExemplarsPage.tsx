import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { TableOfContents } from '../components/TableOfContents'
import { exemplarSections, exemplarsIntro } from '../content/researchExemplars'
import { slugify } from '../utils/slugify'

export function ExemplarsPage() {
  const tocItems = exemplarSections.map((s) => ({
    href: `#${slugify(s.title)}`,
    label: s.title,
  }))

  return (
    <>
      <PageMeta
        path="/exemplars"
        title={exemplarsIntro.title}
        description="Research exemplars: verification workflows for Bremer kidnapping press work and O’Connor-era police tolerance."
      />
      <h1 className="page-title">{exemplarsIntro.title}</h1>
      <p className="hero__lead" style={{ marginTop: 0 }}>
        {exemplarsIntro.lead}
      </p>
      <TableOfContents items={tocItems} />
      {exemplarSections.map((sec) => (
        <Section key={sec.title} title={sec.title}>
          {sec.paragraphs.map((p, i) => (
            <p key={`${sec.title}-${i}`}>{p}</p>
          ))}
        </Section>
      ))}
    </>
  )
}
