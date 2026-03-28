import { motion } from 'framer-motion'
import { floatingApps, stats } from '../data/storeData'

function FloatingHero() {
  return (
    <section className="hero premium-hero">
      <div className="hero-copy">
        <span className="hero-chip">Next-level premium storefront</span>
        <h2>Sadikk Store with richer pages, real local graphics, and floating app motion.</h2>
        <p>
          Launch a more cinematic APK store experience with glowing backgrounds, animated cards,
          smooth page transitions, and modular React components.
        </p>

        <div className="hero-actions">
          <button className="primary-button">Explore Store</button>
          <button className="secondary-button">View Top Charts</button>
        </div>

        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-card glass-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="floating-stage">
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        {floatingApps.map((item, index) => (
          <motion.div
            key={item.title}
            className={`floating-card float-${index + 1}`}
            initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? 8 : -8 }}
            animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 6 : -6 }}
            transition={{ delay: 0.1 * index, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
          >
            <img src={item.image} alt={item.title} />
            <div>
              <strong>{item.title}</strong>
              <span>{item.tag}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FloatingHero
