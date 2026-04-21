import { Helmet } from 'react-helmet-async'
import { getSiteUrl, SITE_NAME } from '../config/site'
import { CONTENT_REVIEW } from '../content/siteMeta'
import { JsonLd } from './JsonLd'

type PageMetaProps = {
  title: string
  description: string
  path?: string
  /** ISO date YYYY-MM-DD for article modified time */
  lastReviewed?: string
  /** Include WebPage JSON-LD (default true when canonical URL exists) */
  includeJsonLd?: boolean
}

export function PageMeta({
  title,
  description,
  path = '',
  lastReviewed = CONTENT_REVIEW.lastReviewed,
  includeJsonLd = true,
}: PageMetaProps) {
  const base = getSiteUrl()
  const canonical =
    base && path !== undefined
      ? `${base}${path === '' || path === '/' ? '' : path.startsWith('/') ? path : `/${path}`}`
      : base || undefined
  const fullTitle = `${title} | ${SITE_NAME}`
  const ogImage = base ? `${base}/og-default.svg` : undefined

  const webPageLd =
    includeJsonLd && canonical
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: fullTitle,
          description,
          url: canonical,
          isPartOf: {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: base || canonical,
          },
          ...(lastReviewed ? { dateModified: lastReviewed } : {}),
        }
      : null

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {lastReviewed ? <meta property="article:modified_time" content={lastReviewed} /> : null}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {base ? <meta property="og:site_name" content={SITE_NAME} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
      {webPageLd ? <JsonLd data={webPageLd} /> : null}
    </Helmet>
  )
}
