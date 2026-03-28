import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { ExternalLink, Download, ShieldCheck } from "lucide-react"
import PageTransition from "../components/PageTransition"
import AppCard from "../components/AppCard"
import RevealSection from "../components/RevealSection"
import { apps } from "../data/storeData"

function DetailsPage() {
  const { id } = useParams()
  const item = useMemo(() => apps.find((app) => app.id === id) ?? apps[0], [id])
  const related = apps.filter((app) => app.id !== item.id && app.genre === item.genre).slice(0, 4)

  return (
    <PageTransition>
      <RevealSection>
        <section className="details-hero glass-card details-hero-game">
          <div className="details-copy">
            <div className="hero-inline-game">
              <img className="details-icon" src={item.icon} alt={item.title} />
              <div>
                <span className="hero-chip">{item.genre}</span>
                <h2 className="details-title">{item.title}</h2>
              </div>
            </div>
            <p className="details-text">{item.description}</p>
            <div className="meta-row wrap">
              <span>{item.mode}</span>
              <span>{item.size}</span>
              <span>Version {item.version}</span>
              <span>4 ta screenshot</span>
            </div>
            <div className="hero-actions">
              <a className="primary-button" href={item.playUrl} target="_blank" rel="noreferrer"><Download size={16} /> Google Play</a>
              <a className="secondary-button" href={item.playUrl} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Open page</a>
            </div>
          </div>
          <div className="details-art">
            <img src={item.cover} alt={item.title} />
          </div>
        </section>
      </RevealSection>

      <RevealSection className="page-grid">
        <div className="main-column">
          <section className="glass-card section-panel">
            <h3>O‘yin rasmlari</h3>
            <div className="feature-points">
              {item.features.map((feature) => <span key={feature} className="feature-badge">{feature}</span>)}
            </div>
            <div className="details-gallery details-gallery-quad">
              {item.screenshots.slice(0,4).map((shot, idx) => <img key={idx} src={shot} alt={`${item.title} screenshot ${idx+1}`} />)}
            </div>
          </section>
        </div>
        <aside className="side-column">
          <section className="glass-card section-panel">
            <h3>Yuklash imkoniyatlari</h3>
            <p><ShieldCheck size={16} /> Rasmiy Google Play sahifasiga o‘tish tugmasi mavjud.</p>
            <p>Publisher: {item.developer}</p>
            <p>Yangilanish: {item.updated}</p>
            <p>Turi: {item.genre}</p>
          </section>
          <section className="glass-card section-panel">
            <h3>Qisqa tavsif</h3>
            <p>{item.tagline}</p>
          </section>
        </aside>
      </RevealSection>

      <RevealSection>
        <section>
          <div className="section-heading"><div><p className="eyebrow">More like this</p><h2>O‘xshash o‘yinlar</h2></div></div>
          <div className="card-grid four">
            {related.map((app) => <AppCard key={app.id} item={app} />)}
          </div>
        </section>
      </RevealSection>
    </PageTransition>
  )
}

export default DetailsPage
