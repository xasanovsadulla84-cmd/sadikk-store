import PageTransition from "../components/PageTransition"
import SectionHeading from "../components/SectionHeading"
import AppCard from "../components/AppCard"
import { apps, categories } from "../data/storeData"

function CategoriesPage() {
  return (
    <PageTransition>
      <SectionHeading eyebrow="Genres" title="Janr bo‘yicha ajratilgan o‘yinlar" />
      {categories.map((cat) => (
        <section key={cat.name} className="stack-gap-md">
          <h3 className="sub-section-title">{cat.name}</h3>
          <div className="card-grid four">
            {apps.filter((item) => item.genre === cat.name).slice(0, 4).map((item) => <AppCard key={item.id} item={item} />)}
          </div>
        </section>
      ))}
    </PageTransition>
  )
}

export default CategoriesPage
