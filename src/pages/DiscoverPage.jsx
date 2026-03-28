import PageTransition from "../components/PageTransition"
import SectionHeading from "../components/SectionHeading"
import AppCard from "../components/AppCard"
import { apps } from "../data/storeData"

function DiscoverPage() {
  return (
    <PageTransition>
      <SectionHeading eyebrow="Discover" title="Shooter, sports va casual mix" text="Bitta sahifada turli yo‘nalishdagi o‘yinlar aralash tarzda ko‘rsatildi." />
      <div className="card-grid four">
        {apps.slice(10, 22).map((item) => <AppCard key={item.id} item={item} />)}
      </div>
    </PageTransition>
  )
}

export default DiscoverPage
