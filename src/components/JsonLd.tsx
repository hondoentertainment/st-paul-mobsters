type JsonLdProps = {
  /** Single JSON-LD object (WebPage, WebSite, etc.) */
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  // Avoid `</script>` or `<` in JSON text breaking out of the script element in HTML.
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return <script type="application/ld+json">{json}</script>
}
