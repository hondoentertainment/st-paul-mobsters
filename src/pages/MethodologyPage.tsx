import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { TableOfContents } from '../components/TableOfContents'
import { methodologyIntro, methodologySections } from '../content/methodologyContent'
import { slugify } from '../utils/slugify'

export function MethodologyPage() {
  const tocItems = methodologySections.map((sec) => ({
    href: `#${slugify(sec.title)}`,
    label: sec.title,
  }))

  return (
    <>
      <PageMeta
        path="/methodology"
        title={methodologyIntro.title}
        description="Evidence standards for St. Paul Prohibition and gangster-era research: primary sources, ethics, land context, and how to cite this site."
      />
      <h1 className="page-title">{methodologyIntro.title}</h1>
      <p className="hero__lead" style={{ marginTop: 0 }}>
        {methodologyIntro.lead}
      </p>
      <TableOfContents items={tocItems} />
      {methodologySections.map((sec) => (
        <Section key={sec.title} title={sec.title}>
          {sec.paragraphs.map((p, i) => (
            <p key={`${sec.title}-${i}`}>{p}</p>
          ))}
        </Section>
      ))}
    </>
  )
}
