import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import {
  historiographyIntro,
  historiographySections,
} from '../content/historiographyContent'

export function HistoriographyPage() {
  return (
    <>
      <PageMeta
        path="/historiography"
        title={historiographyIntro.title}
        description="How historians interpret St. Paul’s O’Connor / open-city story, FBI narratives, Ma Barker, and the Bremer kidnapping."
      />
      <h1 className="page-title">{historiographyIntro.title}</h1>
      <p className="hero__lead" style={{ marginTop: 0 }}>
        {historiographyIntro.lead}
      </p>
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
