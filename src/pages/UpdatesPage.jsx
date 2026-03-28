import PageTransition from "../components/PageTransition"
import SectionHeading from "../components/SectionHeading"
import { updateFeed } from "../data/storeData"

function UpdatesPage() {
  return (
    <PageTransition>
      <SectionHeading eyebrow="Updates" title="Loyiha yangilanishlari" />
      <div className="stack-gap-md">
        {updateFeed.map((item) => (
          <div key={item.title} className="glass-card section-panel">
            <span className="mini-tag">{item.badge}</span>
            <h3>{item.title}</h3>
            <p>{item.note}</p>
          </div>
        ))}
      </div>
    </PageTransition>
  )
}

export default UpdatesPage
