import React from 'react'
import '../styles/TemplateCompra.css'
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import Comentarios from './Comentarios';
import ComentariosList from './ComentariosList';
import { FaRegCommentAlt } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const TemplateCompra = (props) => {
  const localStorageCom = localStorage.getItem('COMEN_V1')
  let parsed; 

  if (!localStorageCom){
    localStorage.setItem('COMEN_V1', JSON.stringify(''))
    parsed = [];
  } else {
    parsed = JSON.parse(localStorageCom)

  }

  const [com, setCom] = useState(parsed)
  const [comentarios, setComentarios] = useState('')
  const [error, setError] = useState(false)
  
  const onChange = (event) => {
    setComentarios(event.target.value)
  }

  const add = (text) =>{
    const newCom = [...com]
    newCom.push(text)
    setCom(newCom)
    localStorage.setItem('COMEN_V1', JSON.stringify(newCom))
  }

  const onSumbite = (event) => {
    event.preventDefault()
    if(comentarios.trim() === '') {
      setError(true)
    }else{
      add(comentarios)
      setError(false)
    }
  }


  //MODAL
  const onCancel = () =>{
    props.setOpenModal(false);
  }
  
  return (
    <React.Fragment>
      <div className='todo'>
     
        <AiOutlineClose
        className='cerrar'
          type='button'
          onClick={onCancel}
          >Regresar
        </AiOutlineClose>
     
        <div className='container'>
          <img className='imagen' src={props.thumbnailUrl}  alt="" />
          <div className='data-c'>
            <p className='name'> <strong> {props.title}</strong> </p>
            <Rating className='est' name="size-large" defaultValue={2} size="large" />
            <p className='precio'>$ {props.price} </p>
            <p className='autor'> {props.authors} </p>
            <a className='pago' href="">Ver formas de pago</a>            
          </div>  
      
          <div className='caracteristicas'>
            <h1>Caracteristicas </h1>
            <p>{props.shortDescription}</p>
          </div>
        </div>
 
        <div className='comentarios'>
          <div className='com'>
            <h2>Comentarios</h2>
            <FaRegCommentAlt className='ic'/>
            <textarea 
            className='coments'
            placeholder='Escriba su comentario...' 
            onChange={onChange} value={comentarios}
            type='text'
            required
            >  
            </textarea>
          </div>
        <div>
        <form onSubmit={onSumbite} className='boton'>
          {error && <p className='error'>Por favor, ingrese un comentario</p>}

          <button 
          className='btn btn-custom-color'
          type='submit'
          >
            Enviar
          </button>
        </form>
      </div>
         
          <ComentariosList>
          {com.length > 0 && ( 
          com.map(todo => (
            <Comentarios text={props.comentarios} key={todo}/>
          )))}
          </ComentariosList> 
      </div>

    </div>
    </React.Fragment>
  )
}

export default TemplateCompra