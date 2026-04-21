import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { BibliographyRegistry } from '../components/BibliographyRegistry'
import { Section } from '../components/Section'
import { SourceList } from '../components/SourceList'
import { TableOfContents } from '../components/TableOfContents'
import { imageCredits, sources } from '../content/sources'
import { slugify } from '../utils/slugify'

const sourcesSectionTitles = [
  'Approach',
  'Master bibliography (citation registry)',
  'Further reading (supplemental list)',
  'Images',
] as const

export function SourcesPage() {
  const tocItems = sourcesSectionTitles.map((title) => ({
    href: `#${slugify(title)}`,
    label: title,
  }))

  return (
    <>
      <PageMeta
        path="/sources"
        title="Sources & bibliography"
        description="Master bibliography keyed to citation IDs, supplemental web and book list, full books-and-films library, and image credits for St. Paul History."
      />
      <h1 className="page-title">Sources &amp; bibliography</h1>
      <TableOfContents items={tocItems} />
      <Section title="Approach">
        <p>
          This project summarizes widely taught themes in Minnesota and U.S. history. It avoids
          inventing dialogue or “secret” documents. When popular stories differ from scholarly
          consensus, the site prefers careful language. For papers and exhibits, use archives,
          newspapers, and peer-reviewed histories—and read the{' '}
          <Link to="/methodology">Methodology</Link> page for how footnotes map to the registry
          below. For a curated list of related <strong>books and films</strong>, see the{' '}
          <Link to="/library">reference library</Link>.
        </p>
      </Section>
      <Section title="Master bibliography (citation registry)" prose={false}>
        <p className="section__prose">
          These entries match <code>CitationId</code> keys in the codebase and superscripts on the{' '}
          <Link to="/prohibition">Prohibition</Link> and <Link to="/mobsters">Mobsters</Link>{' '}
          pages. Use stable anchors when citing in external documents.
        </p>
        <BibliographyRegistry />
      </Section>
      <Section title="Further reading (supplemental list)" prose={false}>
        <SourceList items={sources} />
      </Section>
      <Section title="Images">
        <ul className="source-list">
          {imageCredits.map((row) => (
            <li key={row.description}>
              <strong>{row.description}</strong>
              <p>{row.credit}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
