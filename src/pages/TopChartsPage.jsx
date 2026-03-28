import PageTransition from "../components/PageTransition"
import SectionHeading from "../components/SectionHeading"
import TopChartList from "../components/TopChartList"
import { topCharts } from "../data/storeData"

function TopChartsPage() {
  return (
    <PageTransition>
      <SectionHeading eyebrow="Top charts" title="Top 10 o‘yin" text="Kartadan yoki chartdan bosib detail page ga o‘tish mumkin." />
      <TopChartList items={topCharts} />
    </PageTransition>
  )
}

export default TopChartsPage
