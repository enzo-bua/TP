import React from 'react'
import './index.css'
import { AiOutlineClose } from 'react-icons/ai'

function CargaAdmin(props) {

  //MODAL
  const onCancel = () =>{
    props.setOpenModalAñd(false);
  }  

  return (
    <div className='contenedor' >
        <AiOutlineClose className='cerrar' onClick={onCancel}></AiOutlineClose>
        <h3>AÑADIR PRODUCTOS</h3>
        <form className='form'>
          <label>Isbn </label>
          <input type="text" name="isbn" />
          <label>Nombre </label>
          <input type="text" name="nombre" />
          <label>Autor </label>
          <input type="text" name="autor" />
          <label>Precio </label>
          <input type="number" name="precio" />
          <label>Stock </label>
          <input type="number" name="stock" />
          <label>Genero </label>
          <input type="text" name="genero" />
          <label>Descripcion</label>
          <textarea type="text" name="descripcion" />
          <input className='file' type="file" name='imagen' />
          <button type='button'>Guardar</button>
        </form>
  </div>
  )
}

export default CargaAdmin