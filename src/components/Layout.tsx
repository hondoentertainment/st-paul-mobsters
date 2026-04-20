import { Outlet, Link } from 'react-router-dom'
import { Nav } from './Nav'

export function Layout() {
  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
        onClick={() => {
          document.getElementById('main-content')?.focus({ preventScroll: true })
        }}
      >
        Skip to main content
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <p className="site-title">
            <Link to="/">St. Paul History</Link>
          </p>
          <Nav />
        </div>
      </header>
      <main id="main-content" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>
            Educational reference on St. Paul, Minnesota—Prohibition and organized-crime history
            with citations. Not legal advice. Text:{' '}
            <Link to="/license">CC BY-SA 4.0</Link>
            {' · '}
            <Link to="/research">Research hub</Link>
            {' · '}
            <Link to="/changelog">Changelog</Link>
          </p>
        </div>
      </footer>
    </>
  )
}
