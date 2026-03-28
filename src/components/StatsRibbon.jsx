const metrics = [
  { value: '128', label: 'Daily updates' },
  { value: '4.9/5', label: 'User satisfaction' },
  { value: '22ms', label: 'Smooth motion feel' },
  { value: '9', label: 'Store pages' },
]

function StatsRibbon() {
  return (
    <div className="stats-ribbon glass-card">
      {metrics.map((item) => (
        <div key={item.label} className="stats-ribbon-item">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default StatsRibbon
