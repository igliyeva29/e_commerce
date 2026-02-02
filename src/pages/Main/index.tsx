import Banner from "./Components/Banner"
import categoryProducts from '../../data/categoryWithProduct.json'
import CategoryMain from "./Components/CategoryMain"
import Banner2 from "./Components/Banner2"
import Map from "./Components/Map"
import Articles from "./Components/Articles"
import articles from "../../data/articles.json"

function index() {
  return (
    <div className="bg-custom-bg conatiner mx-auto">
      <Banner />

      {
        categoryProducts.map((category, index) => (
          <CategoryMain key={('main-category-' + index)} data={category} />
        ))
      }

      <Banner2 />
      <Map />
      <Articles articleData={articles}/>
    </div>
  )
}

export default index