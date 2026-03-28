import { Link } from 'react-router-dom'
import { apps } from '../data/storeData'

const rows = [
  {
    title: 'Work smarter',
    text: 'Productivity va design ilovalari uchun katta preview qatori.',
    items: [apps[1], apps[2], apps[0]],
  },
  {
    title: 'Game nights',
    text: 'Action va strategy vibe beradigan coverlar bilan ko‘proq premium hissi.',
    items: [apps[3], apps[4], apps[5]],
  },
]

function CollectionsRow() {
  return (
    <div className="collections-stack">
      {rows.map((row) => (
        <section key={row.title} className="collection-block glass-card">
          <div className="collection-head">
            <div>
              <p className="eyebrow">Collection</p>
              <h3>{row.title}</h3>
              <span>{row.text}</span>
            </div>
            <Link to="/discover" className="secondary-button small">Explore</Link>
          </div>
          <div className="collection-row">
            {row.items.map((item) => (
              <Link key={item.id} to={`/details/${item.id}`} className="collection-tile">
                <img src={item.cover} alt={item.title} />
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default CollectionsRow
