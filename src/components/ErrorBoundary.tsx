import { Component, type CSSProperties, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { error: Error | null }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ margin: '2rem auto', maxWidth: '40rem', padding: '0 1.25rem' }}>
          <h1 className="page-title" style={{ color: 'var(--color-accent, #6b2d2d)' }}>
            This page could not be displayed
          </h1>
          <p style={{ color: 'var(--color-ink-muted, #3d3429)' }}>
            Try <button type="button" style={reloadBtn} onClick={() => window.location.reload()}>
              reloading
            </button>
            . If a section keeps failing, open the browser developer console (F12) and look for
            red errors, especially <strong>failed to load</strong> a <code>*.js</code> file from{' '}
            <code>/assets/</code>—that usually means a hard refresh (Ctrl+Shift+R) or clearing the
            site cache, after a new deploy, is required.
          </p>
          <pre
            style={{
              marginTop: '1rem',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontSize: '0.9rem',
              padding: '1rem',
              background: 'rgba(61, 52, 41, 0.08)',
              borderRadius: 4,
            }}
            aria-label="Error message"
          >
            {this.state.error.message}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

const reloadBtn: CSSProperties = {
  font: 'inherit',
  color: 'var(--color-accent, #6b2d2d)',
  textDecoration: 'underline',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: 0,
}
