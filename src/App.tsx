import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
// Home is eagerly loaded so the first paint does not depend on a separate chunk request
// (a missing or cached-stale async chunk is a common cause of blank or error pages on deploy).
import { Home } from './pages/Home'
const ResearchHubPage = lazy(() =>
  import('./pages/ResearchHubPage').then((m) => ({ default: m.ResearchHubPage })),
)
const MethodologyPage = lazy(() =>
  import('./pages/MethodologyPage').then((m) => ({ default: m.MethodologyPage })),
)
const HistoriographyPage = lazy(() =>
  import('./pages/HistoriographyPage').then((m) => ({ default: m.HistoriographyPage })),
)
const GlossaryPage = lazy(() => import('./pages/GlossaryPage').then((m) => ({ default: m.GlossaryPage })))
const PrimarySourcesPage = lazy(() =>
  import('./pages/PrimarySourcesPage').then((m) => ({ default: m.PrimarySourcesPage })),
)
const ChangelogPage = lazy(() =>
  import('./pages/ChangelogPage').then((m) => ({ default: m.ChangelogPage })),
)
const LicensePage = lazy(() => import('./pages/LicensePage').then((m) => ({ default: m.LicensePage })))
const ReferenceLibraryPage = lazy(() =>
  import('./pages/ReferenceLibraryPage').then((m) => ({ default: m.ReferenceLibraryPage })),
)
const EditorialPage = lazy(() =>
  import('./pages/EditorialPage').then((m) => ({ default: m.EditorialPage })),
)
const CitePage = lazy(() => import('./pages/CitePage').then((m) => ({ default: m.CitePage })))
const SearchPage = lazy(() => import('./pages/SearchPage').then((m) => ({ default: m.SearchPage })))
const CitationLookupPage = lazy(() =>
  import('./pages/CitationLookupPage').then((m) => ({ default: m.CitationLookupPage })),
)
const ExemplarsPage = lazy(() =>
  import('./pages/ExemplarsPage').then((m) => ({ default: m.ExemplarsPage })),
)
const TimelinePage = lazy(() =>
  import('./pages/TimelinePage').then((m) => ({ default: m.TimelinePage })),
)
const ProhibitionPage = lazy(() =>
  import('./pages/ProhibitionPage').then((m) => ({ default: m.ProhibitionPage })),
)
const MobstersPage = lazy(() =>
  import('./pages/MobstersPage').then((m) => ({ default: m.MobstersPage })),
)
const FiguresPage = lazy(() => import('./pages/FiguresPage').then((m) => ({ default: m.FiguresPage })))
const PlacesPage = lazy(() => import('./pages/PlacesPage').then((m) => ({ default: m.PlacesPage })))
const SourcesPage = lazy(() => import('./pages/SourcesPage').then((m) => ({ default: m.SourcesPage })))

function RouteFallback() {
  return (
    <div style={{ padding: '2.5rem 1.25rem', maxWidth: '72rem', margin: '0 auto' }}>
      <p style={{ margin: 0, fontFamily: 'Georgia, serif', color: '#3d3429' }}>Loading…</p>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<ResearchHubPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/historiography" element={<HistoriographyPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/primary-sources" element={<PrimarySourcesPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/license" element={<LicensePage />} />
          <Route path="/editorial" element={<EditorialPage />} />
          <Route path="/cite" element={<CitePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/lookup" element={<CitationLookupPage />} />
          <Route path="/exemplars" element={<ExemplarsPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/prohibition" element={<ProhibitionPage />} />
          <Route path="/mobsters" element={<MobstersPage />} />
          <Route path="/figures" element={<FiguresPage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/library" element={<ReferenceLibraryPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
