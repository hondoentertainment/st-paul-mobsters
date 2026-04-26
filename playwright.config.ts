import { defineConfig, devices } from '@playwright/test'

/** Dedicated port for E2E so we do not collide with `vite preview` on 4173 or other tools. */
const previewPort = Number(process.env.PW_E2E_PORT) || 5505
const baseURL = `http://127.0.0.1:${previewPort}`

/**
 * E2E uses a production build. `webServer` runs `build` + `vite preview` on a fixed port
 * with `--strictPort` so a stray listener is never mistaken for the app.
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    // Always start our preview. Reusing 4173 is unsafe: another process can be listening and pass the URL check.
    command: `npm run build && npx vite preview --host 127.0.0.1 --port ${previewPort} --strictPort`,
    url: baseURL,
    timeout: 120_000,
    reuseExistingServer: false,
  },
})
