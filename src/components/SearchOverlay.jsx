import { AnimatePresence, motion } from 'framer-motion'
import { X, Search, Sparkles } from 'lucide-react'
import { apps, categories } from '../data/storeData'
import { Link } from 'react-router-dom'

function SearchOverlay({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="search-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="search-panel glass-card" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} transition={{ duration: 0.25 }}>
            <div className="search-panel-head">
              <div className="overlay-input"><Search size={18} /><input placeholder="Sadikk Store ichida qidirish" autoFocus /></div>
              <button className="icon-button" onClick={onClose}><X size={18} /></button>
            </div>
            <div className="overlay-grid">
              <div>
                <p className="overlay-label">Trending</p>
                <div className="overlay-stack">
                  {apps.slice(0, 4).map((item) => (
                    <Link key={item.id} to={`/details/${item.id}`} className="overlay-result" onClick={onClose}>
                      <img src={item.image} alt={item.title} />
                      <div><strong>{item.title}</strong><span>{item.category}</span></div>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="overlay-label">Categories</p>
                <div className="overlay-chip-grid">
                  {categories.map((category) => <span className="filter-chip" key={category.name}>{category.icon} {category.name}</span>)}
                </div>
                <div className="overlay-note glass-card">
                  <Sparkles size={18} />
                  <div>
                    <strong>Quick search experience</strong>
                    <span>Fullscreen overlay for a more real product feel.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SearchOverlay
