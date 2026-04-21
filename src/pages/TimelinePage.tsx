import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { Section } from '../components/Section'
import { TableOfContents } from '../components/TableOfContents'
import { Timeline } from '../components/Timeline'
import { timeline } from '../content/timeline'
import { slugify } from '../utils/slugify'

const timelineToc = [
  { title: 'St. Paul in time' },
  { title: 'How to read this timeline' },
] as const

export function TimelinePage() {
  const tocItems = timelineToc.map(({ title }) => ({
    href: `#${slugify(title)}`,
    label: title,
  }))

  return (
    <>
      <PageMeta
        path="/timeline"
        title="Timeline"
        description="Detailed chronology of St. Paul from the river landing through Prohibition, the public-enemy era, repeal, and modern heritage interpretation."
      />
      <h1 className="page-title">Timeline</h1>
      <TableOfContents items={tocItems} />
      <p className="hero__lead" style={{ marginTop: 0, marginBottom: '1.5rem' }}>
        Below is an expanded narrative chronology—grouped by era—with extra detail on railroads,
        capital politics, Chief O’Connor’s reputation, Prohibition economics, the Bremer case, and
        federal “public enemy” politics. For footnoted narrative and citations, use the{' '}
        <Link to="/prohibition">Prohibition</Link> and <Link to="/mobsters">Mobsters</Link> pages;
        for books and films, see the <Link to="/library">reference library</Link>.
      </p>
      <Section title="St. Paul in time" prose={false}>
        <Timeline entries={timeline} />
      </Section>
      <Section title="How to read this timeline">
        <p>
          Entries summarize themes that often stretch across years; where a single calendar date
          matters for your script or paper, confirm it in{' '}
          <Link to="/primary-sources">newspapers</Link> or court files. The Prohibition and gangster
          periods overlap nationally: bootlegging preceded headline bank robberies, and federal
          enforcement intensified across several states at once—not only in one precinct.
        </p>
      </Section>
    </>
  )
}
