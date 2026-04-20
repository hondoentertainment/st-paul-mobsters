import { PageMeta } from '../components/PageMeta'
import { CitedArticle } from '../components/CitedArticle'
import {
  mobstersLead,
  mobstersPageTitle,
  mobstersSections,
} from '../content/mobsters'

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
    </>
  )
}
