import { Helmet } from 'react-helmet-async'
import type { HelmetProps } from 'react-helmet-async'
import { getSiteUrl, SITE_NAME } from '../config/site'
import { CONTENT_REVIEW } from '../content/siteMeta'

/** Stringify for JSON-LD: escape `<` so `</script>` in text cannot break the tag. */
function toJsonLdText(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

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

  // Use Helmet’s *props* API only (no JSX children). react-helmet-async walks `children` and
  // rejects any custom component as a “nested Helmet”; React 19 + <script> text nodes can also
  // hit edge cases. Arrays here map straight to head tags. See HelmetProps in the package types.
  const meta: HelmetProps['meta'] = [
    { name: 'description', content: description },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
  ]
  if (lastReviewed) {
    meta.push({ property: 'article:modified_time', content: lastReviewed })
  }
  if (canonical) {
    meta.push({ property: 'og:url', content: canonical })
  }
  if (base) {
    meta.push({ property: 'og:site_name', content: SITE_NAME })
  }
  if (ogImage) {
    meta.push(
      { property: 'og:image', content: ogImage },
      { name: 'twitter:image', content: ogImage },
    )
  }

  const link: HelmetProps['link'] = canonical ? [{ rel: 'canonical', href: canonical }] : []

  const script: HelmetProps['script'] = webPageLd
    ? [
        {
          type: 'application/ld+json',
          innerHTML: toJsonLdText(webPageLd),
        },
      ]
    : []

  const helmetProps: HelmetProps = {
    title: fullTitle,
    meta,
    link,
    script,
  }

  return <Helmet {...helmetProps} />
}
