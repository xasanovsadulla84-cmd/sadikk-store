import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function TopChartList({ items }) {
  return (
    <div className="chart-list glass-card">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="chart-row"
          whileHover={{ x: 6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        >
          <div className="chart-rank">{item.rank}</div>
          <img src={item.image} alt={item.title} />
          <div className="chart-copy">
            <strong>{item.title}</strong>
            <span>{item.category} • {item.rating}★</span>
          </div>
          <Link to={`/details/${item.id}`} className="text-link">View</Link>
        </motion.div>
      ))}
    </div>
  )
}

export default TopChartList
