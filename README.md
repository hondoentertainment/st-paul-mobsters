# St. Paul History — Prohibition & Mobsters

Vite + React + TypeScript reference site: St. Paul, Minnesota history with emphasis on Prohibition and gangster-era context, citations, and a books/films library.

## Deploy

| Where | URL |
|--------|-----|
| **Production (Vercel)** | [st-paul-mobsters.vercel.app](https://st-paul-mobsters.vercel.app) |
| **Repository (GitHub)** | [github.com/hondoentertainment/st-paul-mobsters](https://github.com/hondoentertainment/st-paul-mobsters) |

Pushes to `main` build on Vercel (Git integration was connected via the Vercel CLI).

### Environment

In Vercel → Project → Settings → Environment Variables, set **`VITE_SITE_URL`** to your canonical site URL (no trailing slash), e.g. `https://st-paul-mobsters.vercel.app`, so Open Graph and `<link rel="canonical">` resolve at build time. See [`.env.example`](.env.example).

## Scripts

```bash
npm install
npm run dev      # local dev
npm run build    # production build
npm run preview  # preview dist locally
```

## Docs

See [RESEARCH.md](./RESEARCH.md) for citation IDs, the `/library` route, and primary sources.
