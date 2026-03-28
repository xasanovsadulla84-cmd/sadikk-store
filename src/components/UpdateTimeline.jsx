import { updateFeed } from '../data/storeData'

function UpdateTimeline() {
  return (
    <div className="timeline-stack">
      {updateFeed.map((item) => (
        <article key={item.title} className="glass-card timeline-card">
          <span className="mini-tag alt">{item.badge}</span>
          <strong>{item.title}</strong>
          <p>{item.note}</p>
        </article>
      ))}
    </div>
  )
}

export default UpdateTimeline
