import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Sparkles, Download, ShieldCheck, Star, ArrowUpRight, Layers3, Zap } from "lucide-react"
import PageTransition from "../components/PageTransition"
import SectionHeading from "../components/SectionHeading"
import FloatingBackground from "../components/FloatingBackground"
import AppCard from "../components/AppCard"
import CategoryPill from "../components/CategoryPill"
import TopChartList from "../components/TopChartList"
import HeroCarousel from "../components/HeroCarousel"
import RevealSection from "../components/RevealSection"
import { apps, categories, topCharts, stats, recommendations } from "../data/storeData"

const trustPoints = [
  { icon: ShieldCheck, label: 'Official links only' },
  { icon: Download, label: 'Fast install flow' },
  { icon: Sparkles, label: 'Premium glass UI' },
]

const featureTiles = [
  {
    icon: Layers3,
    title: 'Cinematic hero',
    text: 'Katta title, layered blur background va floating cards bilan birinchi taassurot kuchli chiqadi.',
  },
  {
    icon: Zap,
    title: 'Smooth scroll feel',
    text: 'Reveal animatsiya, progress bar va sectionlar oralig‘idagi ritm saytingni tirik ko‘rsatadi.',
  },
  {
    icon: Star,
    title: 'Premium card system',
    text: 'Har bir game card hoverda chuqurlik beradi, image va action tugmalar esa oldinga chiqadi.',
  },
]

function HomePage() {
  const heroApps = apps.slice(0, 4)

  return (
    <PageTransition>
      <section className="home-stage ultra-home calm-home premium-home-stage">
        <FloatingBackground />
        <div className="hero-light hero-light-one" />
        <div className="hero-light hero-light-two" />
        <div className="mesh-orb mesh-orb-one" />
        <div className="mesh-orb mesh-orb-two" />

        <div className="premium-hero-grid">
          <div className="home-hero-content compact-copy premium-copy">
            <span className="hero-chip">Sadikk Store · next level concept</span>
            <h2 className="hero-main-title">Discover. Install. Play with style.</h2>
            <p className="hero-main-text">
              Agar menga premium frontend game/app store topshirig‘i berilsa, men aynan shu yo‘lni tanlardim:
              kuchli hero, blur background, yumshoq scroll va 3D hissi bor cardlar.
            </p>

            <div className="hero-trust-row">
              {trustPoints.map(({ icon: Icon, label }) => (
                <span key={label} className="trust-pill glass-card">
                  <Icon size={15} /> {label}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <Link className="primary-button" to="/games">O‘yinlarni ko‘rish</Link>
              <Link className="secondary-button" to="/discover">Store concept</Link>
            </div>

            <div className="stats-grid wide-stats premium-stats-grid">
              {stats.map((item) => (
                <div key={item.label} className="stat-card glass-card premium-stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="hero-spotlight-panel glass-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="spotlight-topline">
              <span className="mini-tag alt">Live showcase</span>
              <span className="spotlight-note">10/10 portfolio mood</span>
            </div>

            <div className="spotlight-cover-wrap">
              <img src={apps[0].cover || apps[0].image} alt={apps[0].title} className="spotlight-cover" />
              <div className="spotlight-cover-glow" />
            </div>

            <div className="spotlight-copy-row">
              <div>
                <strong>{apps[0].title}</strong>
                <p>{apps[0].subtitle}</p>
              </div>
              <Link className="spotlight-link" to={`/details/${apps[0].id}`}>
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mini-app-stack">
              {heroApps.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="mini-app-card"
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}
                >
                  <img src={item.icon} alt={item.title} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.genre}</span>
                  </div>
                  <em>{item.rating}</em>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <RevealSection>
        <div className="hero-feature-band glass-card">
          {featureTiles.map(({ icon: Icon, title, text }) => (
            <div key={title} className="hero-feature-tile">
              <span className="feature-tile-icon"><Icon size={18} /></span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection><HeroCarousel /></RevealSection>

      <RevealSection>
        <SectionHeading eyebrow="Featured games" title="Tanlangan o‘yinlar" text="Kartalarda hover chuqurligi, premium border va action balansini saqladim." />
        <div className="card-grid four premium-card-grid">
          {apps.slice(0, 8).map((item) => <AppCard key={item.id} item={item} />)}
        </div>
      </RevealSection>

      <RevealSection>
        <SectionHeading eyebrow="Discover by genre" title="Janrlar" text="Bir qarashda topish oson bo‘lishi uchun janr bo‘limlarini ham glass capsule formatda qoldirdim." />
        <div className="category-grid">
          {categories.map((category) => <CategoryPill key={category.name} category={category} />)}
        </div>
      </RevealSection>

      <RevealSection className="page-grid bottom-split premium-split-grid">
        <div className="main-column">
          <SectionHeading eyebrow="Top charts" title="Eng ko‘p ko‘rilayotgan o‘yinlar" text="Bu qism foydalanuvchini tez qaror qabul qilishga olib keladi." />
          <TopChartList items={topCharts} />
        </div>
        <div className="side-column">
          <SectionHeading eyebrow="Quick picks" title="Yangi tavsiyalar" text="Yon panelda qisqa va tez ko‘rinadigan tavsiyalar premium layoutni ushlab turadi." />
          <div className="feature-stack feature-stack-premium">
            {recommendations.slice(0,4).map((item, index) => (
              <motion.div
                key={item.id}
                className="glass-card feature-note feature-note-premium"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <span className="mini-tag">0{index + 1}</span>
                <strong>{item.title}</strong>
                <span>{item.genre}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>
    </PageTransition>
  )
}

export default HomePage
