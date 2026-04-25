import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { TableOfContents } from '../components/TableOfContents'
import {
  historiographyIntro,
  historiographySections,
} from '../content/historiographyContent'
import { slugify } from '../utils/slugify'

export function HistoriographyPage() {
  const tocItems = historiographySections.map((sec) => ({
    href: `#${slugify(sec.title)}`,
    label: sec.title,
  }))

  return (
    <>
      <PageMeta
        path="/historiography"
        title={historiographyIntro.title}
        description="Historiography: O’Connor / open city, FBI narratives, Ma Barker, Bremer kidnapping, and Midwest outlaw network scholarship (Burrough vs. local sources)."
      />
      <h1 className="page-title">{historiographyIntro.title}</h1>
      <p className="hero__lead" style={{ marginTop: 0 }}>
        {historiographyIntro.lead}
      </p>
      <TableOfContents items={tocItems} />
      {historiographySections.map((sec) => (
        <Section key={sec.title} title={sec.title}>
          {sec.paragraphs.map((p, i) => (
            <p key={`${sec.title}-${i}`}>{p}</p>
          ))}
        </Section>
      ))}
    </>
  )
}
