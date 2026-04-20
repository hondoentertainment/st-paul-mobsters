import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { Timeline } from '../components/Timeline'
import { timeline } from '../content/timeline'

export function TimelinePage() {
  return (
    <>
      <PageMeta
        path="/timeline"
        title="Timeline"
        description="St. Paul from settlement through Prohibition and the gangster-era federal response—broad eras with links to footnoted deep dives."
      />
      <h1 className="page-title">Timeline</h1>
      <Section title="St. Paul in time" prose={false}>
        <Timeline entries={timeline} />
      </Section>
      <Section title="How to read this timeline">
        <p>
          Dates summarize broad eras. The Prohibition and gangster sections
          overlap nationally: bootlegging networks existed before Dillinger’s
          headline robberies, and federal enforcement intensified across the
          Midwest—not only in one neighborhood or police precinct.
        </p>
      </Section>
    </>
  )
}
