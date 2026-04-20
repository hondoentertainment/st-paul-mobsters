import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { FigureCard } from '../components/FigureCard'
import { figures } from '../content/people'

export function FiguresPage() {
  return (
    <>
      <PageMeta
        path="/figures"
        title="Figures"
        description="John O’Connor, Dillinger, Karpis, Ma Barker, Bremer kidnapping context—St. Paul connections without mythologizing."
      />
      <h1 className="page-title">Figures of the era</h1>
      <Section title="Reading these profiles">
        <p>
          Many famous names passed through the Twin Cities or used Midwestern
          hideouts. Presence in a city for a week does not mean control of its
          politics. The summaries below foreground documented roles and clear
          St. Paul connections where historians agree; they flag legend where
          memory outruns evidence.
        </p>
      </Section>
      <Section title="People and cases" prose={false}>
        {figures.map((f) => (
          <FigureCard key={f.id} figure={f} />
        ))}
      </Section>
    </>
  )
}
