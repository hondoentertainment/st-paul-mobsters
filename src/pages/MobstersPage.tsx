import { Link } from 'react-router-dom'
import { ClaimEvidenceTable } from '../components/ClaimEvidenceTable'
import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { CitedArticle } from '../components/CitedArticle'
import {
  mobstersLead,
  mobstersPageTitle,
  mobstersSections,
} from '../content/mobsters'
import { mobstersEvidenceRows } from '../content/mobstersEvidenceTable'

export function MobstersPage() {
  return (
    <>
      <PageMeta
        path="/mobsters"
        title={mobstersPageTitle}
        description="St. Paul’s O’Connor / layover story, police tolerance, and federal pressure—with footnotes and evidence-strength labels."
      />
      <h1 className="page-title">{mobstersPageTitle}</h1>
      <CitedArticle lead={mobstersLead} sections={mobstersSections} />
      <Section
        title="Claim → evidence map (pilot)"
        headingAnchor="claim-evidence-map"
      >
        <p>
          Compact view of major themes on this page, how we read the evidence, and what would shift
          interpretation. CitationId links resolve through{' '}
          <Link to="/lookup">/lookup?id=…</Link> to the bibliography row.
        </p>
        <ClaimEvidenceTable
          caption="Pilot table for seminar-style reading; narrative and footnotes remain authoritative for wording."
          rows={mobstersEvidenceRows}
        />
      </Section>
    </>
  )
}
