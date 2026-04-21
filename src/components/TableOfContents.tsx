export type TocItem = {
  href: string
  label: string
}

type TableOfContentsProps = {
  items: TocItem[]
  ariaLabel?: string
}

export function TableOfContents({
  items,
  ariaLabel = 'On this page',
}: TableOfContentsProps) {
  if (items.length === 0) return null
  return (
    <nav className="toc" aria-label={ariaLabel}>
      <h2 className="toc__title">On this page</h2>
      <ol className="toc__list">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
