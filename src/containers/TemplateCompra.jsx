import React from 'react'
import '../styles/TemplateCompra.css'
import Rating from '@mui/material/Rating';
import {GoComment} from 'react-icons/go'
import { useState, useContext } from 'react';
import Comentarios from './Comentarios';
import ComentariosList from './ComentariosList';
import AppContext from '../context/AppContext';

const TemplateCompra = () => {

  const { state,  addToCart } = useContext(AppContext);
  const { template } = state;
  console.log(template)
  console.log('te', state)


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

  const handleRemove = product => () =>{
    removeFromTemplate(product)
  }

  const handleAddToCart = () =>{
    addToCart(template)
  }

  
  
  return (
    <div>
      {/* {navigate('/') ? handleRemove() : null} */}
      <div className='card-cont'>
          <div className="card-c">
            <img className='img' src={template[0].image} alt="" />
          </div>
          <div className='data-c'>
            
              <p className='name'> <strong> {template[0].title}</strong> </p>
              <Rating className='est' name="size-large" defaultValue={2} size="large" />
              <p className='precio'> ${template[0].price} </p>
              <p className='cuotas'> {template[0].cuotas} </p>
              <a className='pago' href="">Ver formas de pago</a>            

            <div className='form'>
              <input className='inp' type="text" placeholder='Codigo Postal' />
              <button className='env'>Calcular</button>
            </div>
            
            <p className='stock'>Stock disponible</p>
            <p className='cantidad'><b>CANTIDAD</b></p>
            <input className='cantidad-inp' type="number"min="0" max="100"></input>
            <form >
              <button  className=' buton but-com btn btn-custom-color' type="submit" title="Ingresar" name="Ingresar">Comprar ahora</button>
              <button className=' buton but-agr btn btn-custom-color' handleAddToCart={handleAddToCart} type="submit" title="Ingresar" name="Ingresar">Agregar a carrito</button> 
            </form>
          </div>  
        </div>

        <div className='caracteristicas'>
          <h1>Caracteristicas</h1>
          <p>{template[0].description}</p>
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
        </ComentariosList>  

        
    </div>
  )
}

export default TemplateCompra