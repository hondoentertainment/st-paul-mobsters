import { licenseName, licenseUrl } from './citingThisSite'
import { CONTENT_REVIEW } from './siteMeta'
import { getSiteUrl } from '../config/site'

export const citePageIntro = {
  title: 'How to cite this site',
  lead:
    'Use the canonical URL of the page you consulted, a retrieval date, and the license below. For academic work, prefer primary archives over this site’s summaries.',
}

export function buildSuggestedCitation(path: string): string {
  const base = getSiteUrl() || 'https://st-paul-mobsters.vercel.app'
  const url = `${base}${path.startsWith('/') ? path : `/${path}`}`
  return `“St. Paul History — Prohibition & Mobsters,” ${url} (accessed [your date]). Text licensed under ${licenseName} (${licenseUrl}). Last content review: ${CONTENT_REVIEW.lastReviewed}.`
}

export const citeSections: { title: string; paragraphs: string[] }[] = [
  {
    title: 'Prefer archives for facts',
    paragraphs: [
      'For datable events (kidnappings, shootings, trials), cite the newspaper issue, court file, or archive manuscript you actually read. Cite this site when you are borrowing synthesis, navigation, or bibliography structure—not as a substitute for the underlying record.',
    ],
  },
  {
    title: 'Stable anchors on long pages',
    paragraphs: [
      'Many pages include an “On this page” table of contents; section headings receive URL fragments (for example /methodology#primary-vs-secondary-sources). You may share those links in syllabi; readers should still record the retrieval date because site text can change (see Changelog).',
      'The master bibliography at /sources lists each registry entry with id cite-{CitationId} (for example /sources#cite-maccabee-dillinger-slept-here) for stable pointers to a single source description.',
    ],
  },
  {
    title: 'Film and television writers’ rooms',
    paragraphs: [
      'Keep a separate production research bible with newspaper PDFs and archive call numbers. Cite this site only for orientation, not as a substitute for clearance on likenesses, music, or underlying rights.',
    ],
  },
]
