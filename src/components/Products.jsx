import React,{ useContext } from 'react'
import Product from './Product'
import AppContext from '../context/AppContext';
import '../styles/Template.css'
function Products() {
  const {state, addToTemplate} = useContext(AppContext);
  const { products } = state;

  const handleAddToTemplate = product => () =>{
    addToTemplate(product)
  }

  return (
    <section className='book-container'>
      {products.map(product => (
          <Product key={product.id} product={product} handleAddToTemplate={handleAddToTemplate} />
        ))}
    </section>
  )
}

export default Products