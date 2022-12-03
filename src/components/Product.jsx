import React from 'react'
import '../styles/Template.css'

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className='card'>

          <img
            className='img' 
            src={product.thumbnailUrl}
            alt="" 
            />
          <div className='data'>
            <p className='name'> <strong> {product.title}</strong> </p>
            <p className='precio'>$ {product.price} </p>
            <p className='autor'>{product.authors}</p>
            <button type='button' className='but btn btn-custom-color' onClick={handleAddToCart(product)}>Comprar</button>
            <button className='but-ver btn '>Ver más</button>

          </div>
    </div>  
  )
}

export default Product