import React,{ useContext } from 'react'
import Product from './Product'
import AppContext from '../context/AppContext';
import '../styles/Template.css'
function Products() {
  const {state, addToCart} = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => () =>{
    addToCart(product)
  }

  return (
    <section className='book-container'>
      {products.map(product => (
          <Product key={product.isbn} product={product} handleAddToCart={handleAddToCart} />
        ))}
    </section>
  )
}

export default Products