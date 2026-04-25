import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // OneDrive, network drives, and some Windows setups break native file watching; set
    // VITE_WATCH_POLLING=1 in .env.local if the dev server misses updates or the UI feels "stuck."
    watch: {
      usePolling: process.env.VITE_WATCH_POLLING === '1',
    },
  },
})
