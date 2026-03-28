import PageTransition from "../components/PageTransition"
import SectionHeading from "../components/SectionHeading"
import AppCard from "../components/AppCard"
import { apps } from "../data/storeData"

function AppsPage() {
  const spotlight = apps.filter((item) => ["Shooter", "Battle Royale", "MOBA", "Sports"].includes(item.genre))
  return (
    <PageTransition>
      <SectionHeading eyebrow="Spotlight" title="Mashhur bo‘limlar" text="Shooter, battle royale, sports va moba yo‘nalishlari alohida ajratildi." />
      <div className="card-grid four">
        {spotlight.map((item) => <AppCard key={item.id} item={item} />)}
      </div>
    </PageTransition>
  )
}

export default AppsPage
