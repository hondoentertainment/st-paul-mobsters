import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  appType: 'spa',
  plugins: [
    react(),
    {
      name: 'strip-index-crossorigin',
      // Vite always injects `crossorigin` on the main script/link; that can break module
      // execution in some edge environments (certain mobile browsers / corporate proxies)
      // when CORS on static subresources is misconfigured. Same-origin fetches do not need it.
      transformIndexHtml(html) {
        return html.replaceAll(' crossorigin', '')
      },
    },
  ],
  server: {
    // OneDrive, network drives, and some Windows setups break native file watching; set
    // VITE_WATCH_POLLING=1 in .env.local if the dev server misses updates or the UI feels "stuck."
    watch: {
      usePolling: process.env.VITE_WATCH_POLLING === '1',
    },
  },
  build: {
    // Safer on CDNs; avoids overly modern syntax surprises in some browsers.
    target: 'es2020',
  },
})
