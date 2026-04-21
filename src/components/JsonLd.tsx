type JsonLdProps = {
  /** Single JSON-LD object (WebPage, WebSite, etc.) */
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  )
}
