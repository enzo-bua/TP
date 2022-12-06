import React from 'react'
import '../styles/Template.css'
import { useState } from 'react'
import Modal from '../modal'
import TemplateCompra from '../containers/TemplateCompra'

const Product = ({ product, handleAddToCart }) => {
 
  const [openModal, setOpenModal] = useState(false)
  const handleModal = () => {
    setOpenModal(prevState => !prevState)
  }

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
        <button 
          type='button' 
          className='but btn btn-custom-color' 
          onClick={handleAddToCart(product)}
        >
          Agregar al Carrito
        </button>
        {!!openModal && (
          <Modal>
            <TemplateCompra
              setOpenModal={setOpenModal}
              thumbnailUrl={product.thumbnailUrl}
              title={product.title}
              price={product.price}
              authors={product.authors}
              shortDescription={product.shortDescription}
            />
          </Modal>
        )}
        <button 
         className='but-ver btn'
         value={openModal}
         onClick={handleModal}
         setOpenModal={setOpenModal}
        >
          Ver más
        </button>

      </div>
    </div>  
  )
}

export default Product