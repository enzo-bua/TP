import React from 'react'
import './index.css'
import logo from './img/logo.png'
import { Link } from 'react-router-dom'
const Index = () => {
  return (
      <div className='body-nav-bar'>
        <img src={logo} alt="" />
        <h3>Administrador</h3>
        <ul className='menu mt10'>
          <li><Link to="/admin/ventas">Ventas</Link></li>
          <li><Link to="/admin/productos">Productos</Link></li>
          <li><Link to="/">Salir</Link></li>
        </ul>
      </div>
  )
}

export default Index