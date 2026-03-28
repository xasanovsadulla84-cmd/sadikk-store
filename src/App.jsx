import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AppShell from './layout/AppShell'
import HomePage from './pages/HomePage'
import AppsPage from './pages/AppsPage'
import GamesPage from './pages/GamesPage'
import CategoriesPage from './pages/CategoriesPage'
import TopChartsPage from './pages/TopChartsPage'
import LibraryPage from './pages/LibraryPage'
import DetailsPage from './pages/DetailsPage'
import DiscoverPage from './pages/DiscoverPage'
import UpdatesPage from './pages/UpdatesPage'

function App() {
  const location = useLocation()

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/top-charts" element={<TopChartsPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </AnimatePresence>
    </AppShell>
  )
}

export default App
