import { PageMeta } from '../components/PageMeta'
import { glossaryEntries } from '../content/glossary'

export function GlossaryPage() {
  return (
    <>
      <PageMeta
        path="/glossary"
        title="Glossary"
        description="Definitions: Volstead Act, layover, Chronicling America, Minnesota Digital Newspaper Hub, Sanborn maps, public enemy."
      />
      <h1 className="page-title">Glossary</h1>
      <p className="hero__lead" style={{ marginTop: 0 }}>
        Short definitions for keywords used across this site. Link to section anchors when
        citing in a script bible.
      </p>
      <dl className="glossary-dl">
        {glossaryEntries.map((e) => (
          <div key={e.slug} className="glossary-dl__block" id={e.slug}>
            <dt>{e.term}</dt>
            <dd>{e.definition}</dd>
          </div>
        ))}
      </dl>
    </>
  )
}
