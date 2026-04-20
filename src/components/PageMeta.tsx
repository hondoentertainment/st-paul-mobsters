import { Helmet } from 'react-helmet-async'
import { getSiteUrl, SITE_NAME } from '../config/site'

type PageMetaProps = {
  title: string
  description: string
  path?: string
}

export function PageMeta({ title, description, path = '' }: PageMetaProps) {
  const base = getSiteUrl()
  const canonical =
    base && path ? `${base}${path.startsWith('/') ? path : `/${path}`}` : base || undefined
  const fullTitle = `${title} | ${SITE_NAME}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {base ? <meta property="og:site_name" content={SITE_NAME} /> : null}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
