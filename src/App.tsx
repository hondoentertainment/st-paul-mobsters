import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { TimelinePage } from './pages/TimelinePage'
import { ProhibitionPage } from './pages/ProhibitionPage'
import { MobstersPage } from './pages/MobstersPage'
import { FiguresPage } from './pages/FiguresPage'
import { PlacesPage } from './pages/PlacesPage'
import { SourcesPage } from './pages/SourcesPage'
import { ResearchHubPage } from './pages/ResearchHubPage'
import { MethodologyPage } from './pages/MethodologyPage'
import { HistoriographyPage } from './pages/HistoriographyPage'
import { GlossaryPage } from './pages/GlossaryPage'
import { PrimarySourcesPage } from './pages/PrimarySourcesPage'
import { ChangelogPage } from './pages/ChangelogPage'
import { LicensePage } from './pages/LicensePage'
import { ReferenceLibraryPage } from './pages/ReferenceLibraryPage'
import { EditorialPage } from './pages/EditorialPage'
import { CitePage } from './pages/CitePage'
import { SearchPage } from './pages/SearchPage'

export default function App() {
  return (
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
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/prohibition" element={<ProhibitionPage />} />
        <Route path="/mobsters" element={<MobstersPage />} />
        <Route path="/figures" element={<FiguresPage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/sources" element={<SourcesPage />} />
        <Route path="/library" element={<ReferenceLibraryPage />} />
      </Route>
    </Routes>
  )
}
