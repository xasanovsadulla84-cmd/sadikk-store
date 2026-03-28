import PageTransition from "../components/PageTransition"
import SectionHeading from "../components/SectionHeading"
import AppCard from "../components/AppCard"
import { apps } from "../data/storeData"

function GamesPage() {
  return (
    <PageTransition>
      <SectionHeading eyebrow="All games" title="30 ta real game entry" text="Har bir kartada cover, icon va alohida detail page mavjud." />
      <div className="card-grid four">
        {apps.map((item) => <AppCard key={item.id} item={item} />)}
      </div>
    </PageTransition>
  )
}

export default GamesPage
