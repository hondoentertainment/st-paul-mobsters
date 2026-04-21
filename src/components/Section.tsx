import type { ReactNode } from 'react'
import { slugify } from '../utils/slugify'

type SectionProps = {
  title?: string
  children: ReactNode
  className?: string
  prose?: boolean
  /** Sets `id` on the outer `<section>` */
  sectionId?: string
  /** Sets `id` on the `<h2>` (for TOC links); defaults to a slug of `title` */
  headingAnchor?: string
}

export function Section({
  title,
  children,
  className = '',
  prose = true,
  sectionId,
  headingAnchor,
}: SectionProps) {
  const h2Id = title ? headingAnchor ?? slugify(title) : undefined
  return (
    <section id={sectionId} className={`section ${className}`.trim()}>
      {title ? <h2 id={h2Id}>{title}</h2> : null}
      <div className={prose ? 'section__prose' : undefined}>{children}</div>
    </section>
  )
}
