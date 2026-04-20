import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/research', label: 'Research' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/prohibition', label: 'Prohibition' },
  { to: '/mobsters', label: 'Mobsters' },
  { to: '/figures', label: 'Figures' },
  { to: '/places', label: 'Places' },
  { to: '/library', label: 'Library' },
  { to: '/sources', label: 'Sources' },
]

export function Nav() {
  return (
    <nav className="site-nav" aria-label="Primary">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
