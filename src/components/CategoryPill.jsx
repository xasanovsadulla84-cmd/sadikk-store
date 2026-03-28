import { motion } from 'framer-motion'

function CategoryPill({ category }) {
  return (
    <motion.div whileHover={{ y: -4, scale: 1.01 }} className={`category-pill ${category.color}`}>
      <span>{category.icon} Category</span>
      <strong>{category.name}</strong>
      <span>{category.count} items</span>
    </motion.div>
  )
}

export default CategoryPill
