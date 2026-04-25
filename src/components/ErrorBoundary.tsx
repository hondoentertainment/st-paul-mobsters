import { Component, type ErrorInfo, type ReactNode } from 'react'

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
            {import.meta.env.DEV ? 'Error (dev only):' : 'If this persists, try a hard refresh or check the browser console.'}
          </p>
          {import.meta.env.DEV ? (
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
            >
              {this.state.error.message}
            </pre>
          ) : null}
        </div>
      )
    }
    return this.props.children
  }
}
