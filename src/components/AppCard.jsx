import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ExternalLink, Gamepad2 } from "lucide-react"

function AppCard({ item }) {
  return (
    <motion.article className="app-card glass-card game-card" whileHover={{ y: -12, scale: 1.015, rotateX: 4, rotateY: -4 }} transition={{ type: 'spring', stiffness: 240, damping: 18 }}>
      <Link to={`/details/${item.id}`} className="game-cover-link">
        <div className="cover-image game-cover">
          <img src={item.cover || item.image} alt={item.title} />
          <div className="cover-overlay" />
          <div className="cover-badges">
            <span className="mini-tag">{item.genre}</span>
            {item.badges?.[0] && <span className="mini-tag alt">{item.badges[0]}</span>}
          </div>
        </div>
      </Link>

      <div className="app-card-body">
        <div className="game-title-row">
          <img className="game-icon" src={item.icon} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.mode} · {item.size}</p>
          </div>
        </div>

        <div className="app-meta">
          <span><Gamepad2 size={14} /> {item.genre}</span>
          <span>{item.badges?.[1] || 'Mobile'}</span>
        </div>

        <div className="card-actions">
          <Link to={`/details/${item.id}`} className="secondary-button small">Tafsilotlar</Link>
          <a href={item.playUrl} target="_blank" rel="noreferrer" className="primary-button small inline-link-btn">Yuklash <ExternalLink size={14} /></a>
        </div>
      </div>
    </motion.article>
  )
}

export default AppCard
