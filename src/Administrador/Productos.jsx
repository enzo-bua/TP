import React from 'react'
import Index from './Index'
import './index.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { useState } from 'react'
import Modal from '../modal/index'
import CargaAdmin from './CargaAdmin'
import Modificar from './Modificar'
const Productos = () => {
  const [openModalAñd, setOpenModalAñd] = useState(false)
  const [openModalMod, setOpenModalMod] = useState(false)


  const [search, setSearch] = useState('')

  const handleModalAñd = () => {
    setOpenModalAñd(prevState => !prevState)

  }
  const handleModalMod = () => {
    setOpenModalMod(prevState => !prevState)
  }

  const searcher = (e) => {
    setSearch(e.target.value)
  }
  

  return (
    <React.Fragment>
      <div className='main-container'>
        <Index/>
        <div className="body-p">  
        <button 
            className="mt10 agregar-nuevo" 
            value={openModalAñd}
            onClick={handleModalAñd}
            setOpenModal={setOpenModalAñd}
          >
            Agregar Nuevo
          </button>
          <h2>Mis Productos</h2>
          <input 
            className='form-control mt-5 border border-dark'   
            type="text" 
            placeholder='INGRESE NOMBRE DEL LIBRO' 
            value={search}
            onChange={searcher}
         />
          <table >
            <thead>
              <tr>
                <th>Isbn</th>
                <th>Nombre</th>
                <th>Author</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Descripcion</th>
                <th>Genero</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Isbn</td>
                <td>Nombre</td>
                <td>Author</td>
                <td>Precio</td>
                <td>Stock</td>
                <td>Descripcion</td>
                <td>Genero</td>
                <td className='td-option'>
                  <div className="div-flex div-td-button">
                    <button 
                      className='pencil' 
                      value={openModalMod}
                      onClick={handleModalMod}
                      setOpenModalMod={setOpenModalMod}
                      >
                        <BsPencil />
                        
                    </button>
                    <button className='trash'><AiOutlineDelete /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          {!!openModalAñd && (
          <Modal>
            <CargaAdmin
              setOpenModalAñd={setOpenModalAñd}
            />

          </Modal>
        )}

        {!!openModalMod && (
          <Modal>
            <Modificar
              setOpenModalMod={setOpenModalMod}
            />
          </Modal>
        )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Productos