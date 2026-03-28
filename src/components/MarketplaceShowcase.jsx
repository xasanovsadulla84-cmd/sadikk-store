import { Link } from 'react-router-dom'
import { apps } from '../data/storeData'

function MarketplaceShowcase() {
  const left = apps[0]
  const middle = apps[3]
  const right = apps[1]

  return (
    <div className="showcase-grid">
      <article className="showcase-primary glass-card">
        <span className="eyebrow">Featured flow</span>
        <h3>Premium ko‘rinish uchun katta bloklar va toza matn nisbatlari</h3>
        <p>
          Home sahifada user ko‘zi birinchi navbatda asosiy coverga, keyin charts va collections
          bo‘limlariga o‘tadigan qilib visual hierarchy qurildi.
        </p>
        <div className="showcase-actions">
          <Link to={`/details/${middle.id}`} className="primary-button small">Open featured</Link>
          <Link to="/top-charts" className="secondary-button small">See charts</Link>
        </div>
      </article>

      <article className="showcase-side glass-card">
        <img src={left.cover} alt={left.title} />
        <div>
          <strong>{left.title}</strong>
          <span>{left.category}</span>
        </div>
      </article>

      <article className="showcase-side glass-card">
        <img src={right.cover} alt={right.title} />
        <div>
          <strong>{right.title}</strong>
          <span>{right.category}</span>
        </div>
      </article>
    </div>
  )
}

export default MarketplaceShowcase
