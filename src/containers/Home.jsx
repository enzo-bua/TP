import jsonBooks from '../jsonBooks'
import Products from '../components/Products'
import React from 'react'
function Home() {


  return (
      <React.Fragment>
        <Products products={jsonBooks} />
      </React.Fragment>
    )
}

export default Home