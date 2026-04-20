import { PageMeta } from '../components/PageMeta'
import { CitedArticle } from '../components/CitedArticle'
import {
  prohibitionLead,
  prohibitionPageTitle,
  prohibitionSections,
} from '../content/prohibition'

export function ProhibitionPage() {
  return (
    <>
      <PageMeta
        path="/prohibition"
        title={prohibitionPageTitle}
        description="National Prohibition in St. Paul: Volstead Act, bootlegging, Wabasha caves context, enforcement, repeal—with footnotes."
      />
      <h1 className="page-title">{prohibitionPageTitle}</h1>
      <CitedArticle lead={prohibitionLead} sections={prohibitionSections} />
    </>
  )
}
