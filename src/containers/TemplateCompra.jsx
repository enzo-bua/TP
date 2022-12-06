import React from 'react'
import '../styles/TemplateCompra.css'
import Rating from '@mui/material/Rating';
import {GoComment} from 'react-icons/go'
import { useState } from 'react';
import Comentarios from './Comentarios';
import ComentariosList from './ComentariosList';


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
       <div className=''>
        <img className='imagen' src={props.thumbnailUrl}  alt="" />
        <div className='data-c'>
        <button
       className='btn'
       type='button'
       onClick={onCancel}
      >Cerrar</button>
            {/* <p className='name'> <strong> {props.title}</strong> </p> */}
            <Rating className='est' name="size-large" defaultValue={2} size="large" />
            <p className='precio'> {props.price} </p>
            <p className='autor'> {props.authors} </p>
            <a className='pago' href="">Ver formas de pago</a>            

          <form className='form'>
            <input className='inp' type="text" placeholder='Codigo Postal' />
            <button className='env'>Calcular</button>
          </form>
        
        </div>  
      </div>

        {/*<div className='caracteristicas'>
          <h1>Caracteristicas</h1>
          <p>{props.shortDescription}</p>
        </div>

       <div className='comentarios'>
          <h2>Comentarios</h2>
          <textarea 
           placeholder='Escriba su comentario...' 
           onChange={onChange} value={comentarios}
           type='text'
           required
          >  
          </textarea>
          <GoComment className='icon-comment'/>
          <form onSubmit={onSumbite} className='botones'>
          {error && <p className='error'>Por favor, ingrese un comenta</p>}

            <button 
             className='btn btn-custom-color'
             type='submit'
            >
              Enviar
            </button>
          </form>
        </div>

  
        <ComentariosList>
         {com.map(todo => (
          <Comentarios text={todo} key={todo}/>
         ))}
        </ComentariosList>  */}

     
        
    </React.Fragment>
  )
}

export default TemplateCompra