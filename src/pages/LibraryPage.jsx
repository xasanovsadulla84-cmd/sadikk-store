import PageTransition from "../components/PageTransition"
import SectionHeading from "../components/SectionHeading"
import { libraryItems } from "../data/storeData"

function LibraryPage() {
  return (
    <PageTransition>
      <SectionHeading eyebrow="Library" title="Yuklash markazi" text="Demo progress panel store mahsulotiga o‘xshash hissiyot beradi." />
      <div className="stack-gap-md">
        {libraryItems.map((item) => (
          <div key={item.title} className="glass-card section-panel">
            <div className="between-row"><strong>{item.title}</strong><span>{item.status}</span></div>
            <div className="progress-rail"><span style={{ width: `${item.progress}%` }} /></div>
            <div className="between-row muted-line"><span>{item.progress}%</span><span>{item.speed}</span></div>
          </div>
        ))}
      </div>
    </PageTransition>
  )
}

export default LibraryPage
