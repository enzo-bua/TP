import '../styles/Comentarios.css'
import {AiOutlineComment} from 'react-icons/ai'
import React from 'react'
const Comentarios = (props) => {
  return (
    <li className='TodoItem'>
        <samp className='icono icono-check'>
        <AiOutlineComment />
        </samp>
        <p> {props.text}</p>
      </li>
  )
}

export default Comentarios