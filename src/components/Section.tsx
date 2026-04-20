import type { ReactNode } from 'react'

type SectionProps = {
  title?: string
  children: ReactNode
  className?: string
  prose?: boolean
}

export function Section({
  title,
  children,
  className = '',
  prose = true,
}: SectionProps) {
  return (
    <section className={`section ${className}`.trim()}>
      {title ? <h2>{title}</h2> : null}
      <div className={prose ? 'section__prose' : undefined}>{children}</div>
    </section>
  )
}
