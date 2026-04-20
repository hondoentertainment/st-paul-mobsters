/** Base URL for Open Graph and canonical links. Set `VITE_SITE_URL` in production (no trailing slash). */
export const SITE_NAME = 'St. Paul History — Prohibition & Mobsters'
export const SITE_TAGLINE =
  'Reference notes on St. Paul, Minnesota: Prohibition, organized crime, and primary sources.'

export function getSiteUrl(): string {
  if (import.meta.env.VITE_SITE_URL) {
    return String(import.meta.env.VITE_SITE_URL).replace(/\/$/, '')
  }
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`
  }
  return ''
}
