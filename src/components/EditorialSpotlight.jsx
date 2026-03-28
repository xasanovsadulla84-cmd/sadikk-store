import { Sparkles, ShieldCheck, Layers3, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Editor tanlovi',
    text: 'Katta cover, toza spacing va yumshoq hover bilan premium tanlovlar ko‘rinadi.',
    icon: Sparkles,
  },
  {
    title: 'Ishonchli paketlar',
    text: 'Store hissini berish uchun verified, update va secure install bloklari qo‘shildi.',
    icon: ShieldCheck,
  },
  {
    title: 'Ko‘p qatlamli dizayn',
    text: 'Hero, stats, chart va collections bir-biriga halaqit bermaydigan tarzda joylashgan.',
    icon: Layers3,
  },
  {
    title: 'Tekis animatsiya',
    text: 'Qotib qolgandek emas, tezroq va controlled transitionlar bilan harakatlanadi.',
    icon: BadgeCheck,
  },
]

function EditorialSpotlight() {
  return (
    <div className="editorial-grid">
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.article
            key={item.title}
            className="editorial-card glass-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.05, duration: 0.35 }}
          >
            <div className="editorial-icon"><Icon size={18} /></div>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </motion.article>
        )
      })}
    </div>
  )
}

export default EditorialSpotlight
