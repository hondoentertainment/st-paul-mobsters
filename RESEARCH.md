# Research & repository guide

This project is a **static reference site** for St. Paul, Minnesota, history with emphasis on **Prohibition** and **gangster-era** context. It is intended for screenwriters, novelists, documentarians, and teachers who need **traceable claims** and **links to digital repositories**.

## How citations work

- **`CitationId` keys** live in [`src/content/citationsRegistry.ts`](src/content/citationsRegistry.ts). Each ID maps to a short label, full note, and optional URL.
- **Footnoted narrative pages** (`/prohibition`, `/mobsters`) attach `citationIds` and optional **strength-of-evidence** labels to paragraphs in [`src/content/prohibition.ts`](src/content/prohibition.ts) and [`src/content/mobsters.ts`](src/content/mobsters.ts).
- The **master bibliography** on `/sources` lists the same registry in alphabetical order by ID.

When you cite this work in a production bible or syllabus, cite **specific URLs and retrieval dates**, and pull **primary** evidence (newspapers, maps, court files) for any beat that could attract legal or editorial scrutiny.

## Primary sources (first stops)

| Resource | Role |
|----------|------|
| [Minnesota Digital Newspaper Hub](https://www.mnhs.org/newspapers) | Minnesota titles; strong for local names and addresses |
| [Chronicling America](https://chroniclingamerica.loc.gov/) | National newspaper search; filter by state and year |
| [Sanborn maps (LOC)](https://www.loc.gov/maps/collections/sanborn/) | Period building footprints and land use |
| [MNHS Gale Family Library](https://www.mnhs.org/research) | Manuscripts and photos not always digitized |

## Site license

Original explanatory text is licensed under **CC BY-SA 4.0** unless otherwise noted. See [`/license`](./src/pages/LicensePage.tsx) in the app. Linked third-party materials remain under their own terms.

## Environment

Set **`VITE_SITE_URL`** (no trailing slash) in production so Open Graph and canonical URLs resolve correctly—for example `https://your-domain.example`.

## Books & films library

The **`/library`** route lists nonfiction, fiction, feature films, and documentary/television tied to St. Paul, the Twin Cities, Dillinger, Prohibition, or national gangster-era context. Entries include formatted citations, optional ISBNs, and **relevance tags** (`primary`, `strong`, `adjacent`, `context`). Dramatic works are labeled as such—verify facts in primary sources.

Data lives in [`src/content/referenceLibrary.ts`](src/content/referenceLibrary.ts).

## Changelog

Substantive updates to claims or bibliography are logged on **`/changelog`** in the app and should be mirrored in commit messages when this folder is version-controlled.
