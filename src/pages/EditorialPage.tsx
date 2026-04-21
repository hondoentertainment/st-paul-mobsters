import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { TableOfContents } from '../components/TableOfContents'
import { editorialIntro, editorialSections } from '../content/editorial'
import { slugify } from '../utils/slugify'
import { renderInlineBold } from '../utils/renderInlineBold'

export function EditorialPage() {
  const tocItems = editorialSections.map((sec) => ({
    href: `#${slugify(sec.title)}`,
    label: sec.title,
  }))

  return (
    <>
      <PageMeta
        path="/editorial"
        title={editorialIntro.title}
        description="Editorial standards: evidence tiers, corrections policy, and how dramatic works relate to historical evidence on this St. Paul reference site."
      />
      <h1 className="page-title">{editorialIntro.title}</h1>
      <p className="hero__lead" style={{ marginTop: 0 }}>
        {editorialIntro.lead}
      </p>
      <TableOfContents items={tocItems} />
      {editorialSections.map((sec) => (
        <Section key={sec.title} title={sec.title}>
          {sec.paragraphs.map((p, i) => (
            <p key={`${sec.title}-${i}`}>{renderInlineBold(p)}</p>
          ))}
        </Section>
      ))}
    </>
  )
}
