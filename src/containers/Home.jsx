import jsonBooks from '../jsonBooks'
import Products from '../components/Products'
import Buscador from '../components/Buscador'
import Modal from '../modal'
import React from 'react'
function Home() {


  return (
      <React.Fragment>
        <Buscador/>
        <Products products={jsonBooks} />
      </React.Fragment>
    )
}

export default Home