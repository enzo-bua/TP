import React,{ useContext, useState } from 'react'
import '../styles/Header.css'

import Product from './Product'
import AppContext from '../context/AppContext';
import '../styles/Template.css'
import Buscador from './Buscador';
function Products() {
  const {state, addToCart} = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => () =>{
    addToCart(product)
    
  }

  const [search, setSearch] = useState('')


  const searcher = (e) => {
    setSearch(e.target.value)
  }


  const results = !search ? products : products.filter((dato)=> dato.title.toLowerCase().includes(search.toLocaleLowerCase()))


  return (
  <React.Fragment>
    <Buscador
    search={search}
    searcher={searcher}
    />
    <section className='book-container'>
      {results.map(product => (
        <Product key={product.isbn} product={product} handleAddToCart={handleAddToCart} />
        ))}
    </section>
  </React.Fragment>
  )
}

export default Products