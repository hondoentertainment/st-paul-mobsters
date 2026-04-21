import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import {
  BookReferenceList,
  FilmReferenceList,
} from '../components/ReferenceLibraryLists'
import { Section } from '../components/Section'
import {
  TIE_LABELS,
  documentaryAndTelevision,
  featureFilms,
  fictionAndLiterature,
  libraryIntro,
  nonfictionBooks,
} from '../content/referenceLibrary'
import { TableOfContents } from '../components/TableOfContents'
import { slugify } from '../utils/slugify'

const libraryTocTitles = [
  'How to use this list',
  'Nonfiction books',
  'Fiction & literature',
  'Feature films',
  'Documentary & television',
] as const

export function ReferenceLibraryPage() {
  const tocItems = libraryTocTitles.map((title) => ({
    href: `#${slugify(title)}`,
    label: title,
  }))

  return (
    <>
      <PageMeta
        path="/library"
        title={libraryIntro.title}
        description="Books and films on St. Paul, Twin Cities crime, Dillinger, Prohibition, and the public-enemy era—with relevance notes for researchers."
      />
      <h1 className="page-title">{libraryIntro.title}</h1>
      <TableOfContents items={tocItems} />
      <p className="hero__lead" style={{ marginTop: 0 }}>
        {libraryIntro.lead.split('**').map((chunk, i) =>
          i % 2 === 1 ? (
            <strong key={i}>{chunk}</strong>
          ) : (
            <span key={i}>{chunk}</span>
          ),
        )}
      </p>

      <Section title="How to use this list">
        <p>
          Each entry includes a <strong>relevance tag</strong> describing its relationship to St.
          Paul, the Twin Cities, or national gangster and Prohibition context. Cross-check
          dramatic works against{' '}
          <Link to="/primary-sources">newspapers and court records</Link>. For site footnotes, see
          the <Link to="/sources">citation registry</Link>.
        </p>
        <ul className="tie-legend">
          {(Object.entries(TIE_LABELS) as [keyof typeof TIE_LABELS, string][]).map(
            ([key, label]) => (
              <li key={key}>
                <strong>{key}</strong>: {label}
              </li>
            ),
          )}
        </ul>
      </Section>

      <Section title="Nonfiction books" prose={false}>
        <p className="section__prose">
          Scholarly and popular histories; ISBNs provided where standard trade editions exist.
        </p>
        <BookReferenceList books={nonfictionBooks} />
      </Section>

      <Section title="Fiction & literature" prose={false}>
        <p className="section__prose">
          Novels chosen for craft, voice, or genre lineage—not as documentary evidence.
        </p>
        <BookReferenceList books={fictionAndLiterature} />
      </Section>

      <Section title="Feature films" prose={false}>
        <p className="section__prose">
          Theatrical releases frequently cited in gangster-era research and writers’ rooms.
        </p>
        <FilmReferenceList films={featureFilms} />
      </Section>

      <Section title="Documentary & television" prose={false}>
        <p className="section__prose">
          Nonfiction series and long-form drama; fictional series are labeled as such.
        </p>
        <FilmReferenceList films={documentaryAndTelevision} />
      </Section>
    </>
  )
}
