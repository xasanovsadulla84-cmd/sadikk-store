import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function FeaturedBanner({ item }) {
  return (
    <motion.section
      className="featured-banner glass-card"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="featured-copy">
        <span className="hero-chip">Featured release</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        <div className="meta-row">
          <span>⭐ {item.rating}</span>
          <span>{item.downloads} downloads</span>
          <span>{item.size}</span>
        </div>

        <div className="hero-actions">
          <Link className="primary-button" to={`/details/${item.id}`}>Open Details</Link>
          <button className="secondary-button">Install</button>
        </div>
      </div>

      <div className="featured-art">
        <img src={item.cover} alt={item.title} />
      </div>
    </motion.section>
  )
}

export default FeaturedBanner
