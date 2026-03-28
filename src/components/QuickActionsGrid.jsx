import { motion } from 'framer-motion'
import { quickActions } from '../data/storeData'

function QuickActionsGrid() {
  return (
    <div className="quick-grid">
      {quickActions.map((item, index) => (
        <motion.article
          key={item.title}
          className="glass-card quick-card"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.32, delay: index * 0.06 }}
        >
          <span className="quick-index">0{index + 1}</span>
          <strong>{item.title}</strong>
          <p>{item.text}</p>
        </motion.article>
      ))}
    </div>
  )
}

export default QuickActionsGrid
