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
        description="Profiles of lawmen, politicians, Twin Cities operators, and Midwest outlaws (Dillinger circle, Barkers, Kellys, Floyd)—with St. Paul or Minnesota context where documented."
      />
      <h1 className="page-title">Figures of the era</h1>
      <Section title="Reading these profiles">
        <p>
          Twenty-six individuals below span governors, journalists, federal agents,
          Twin Cities bootlegging lore, and interstate bandits. Many famous names
          passed through the Twin Cities or appear only in wire stories—presence in
          Minnesota for a week does not mean control of its politics. Summaries
          foreground documented roles and cautious St. Paul / Minnesota links; they
          flag legend where memory outruns evidence.
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
