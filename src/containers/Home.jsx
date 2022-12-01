import jsonBooks from '../jsonBooks'
import Products from '../components/Products'
function Home() {
  return (
      <Products products={jsonBooks} />
    )
}

export default Home