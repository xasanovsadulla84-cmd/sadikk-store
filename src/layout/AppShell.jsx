import { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Search, Bell, Sparkles, Gamepad2, LayoutGrid, House, Trophy, Boxes, Download, Compass, RefreshCcw } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import SearchOverlay from '../components/SearchOverlay'
import SplashScreen from '../components/SplashScreen'
import Footer from '../components/Footer'

const links = [
  { to: '/', label: 'Home', icon: House },
  { to: '/apps', label: 'Apps', icon: Boxes },
  { to: '/games', label: 'Games', icon: Gamepad2 },
  { to: '/discover', label: 'Discover', icon: Compass },
  { to: '/categories', label: 'Categories', icon: LayoutGrid },
  { to: '/top-charts', label: 'Charts', icon: Trophy },
  { to: '/updates', label: 'Updates', icon: RefreshCcw },
  { to: '/library', label: 'Library', icon: Download }
]

function DockLink({ to, label, Icon }) {
  return (
    <NavLink to={to} className={({ isActive }) => `dock-link ${isActive ? 'active' : ''}`}>
      <span className="dock-tooltip">{label}</span>
      <span className="dock-icon-wrap">
        <Icon size={21} />
      </span>
    </NavLink>
  )
}

function AppShell({ children }) {
  const location = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    mass: 0.2,
  })

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 900)
    return () => window.clearTimeout(timer)
  }, [])

  const pageTitle = useMemo(() => {
    const current = links.find((link) => link.to === location.pathname)
    return current?.label || 'Details'
  }, [location.pathname])

  return (
    <div className="app-shell shell-no-sidebar">
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />
      <SplashScreen visible={showSplash} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <div className="content-area single-column">
        <header className="topbar glass-card topbar-floating">
          <div>
            <p className="eyebrow">Keng ko‘lamli o‘yin marketplace</p>
            <div className="brand-inline">
              <img src="/sadikk-avatar-logo.png" alt="Sadikk Store logo" />
              <div>
                <h1>{pageTitle}</h1>
                <span>Sadikk Store · premium game va app store UI</span>
              </div>
            </div>
          </div>

          <div className="topbar-actions">
            <button className="search-box button-reset" onClick={() => setSearchOpen(true)}>
              <Search size={18} />
              <span>O‘yinlarni qidirish...</span>
            </button>
            <button className="icon-button"><Bell size={18} /></button>
            <button className="primary-button top-install"><Sparkles size={16} /> Open Store</button>
          </div>
        </header>

        <main className="page-wrap">{children}</main>
        <Footer />
      </div>

      <motion.nav
        className="bottom-dock glass-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
      >
        {links.map((link) => (
          <DockLink key={link.to} to={link.to} label={link.label} Icon={link.icon} />
        ))}
      </motion.nav>
    </div>
  )
}

export default AppShell
