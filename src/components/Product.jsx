import React from 'react'
import '../styles/Template.css'
import { Link } from 'react-router-dom';

const Product = ({ product, handleAddToTemplate }) => {
  return (
      <Link to="/templateCompra" onClick={handleAddToTemplate(product)} >
    <div className='card'>

          <img
            className='img' 
            src={product.image}
            alt="" 
            />
          <div className='data'>
            <p className='name'> <strong> {product.title}</strong> </p>
            <p className='precio'>$ {product.price} </p>
            <p className='cuotas'>{product.coutas}</p>
          </div>
    </div>  
      </Link>
  )
}

export default Product