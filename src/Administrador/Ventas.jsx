import React from 'react'
import Index from './Index'

function Ventas() {
  return (
    <React.Fragment>
    <div className='main-container mt-3'>
      <Index/>
      <div className="body-p">  
      <h2>Ventas</h2>

      <table >
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Producto</th>
                <th>Fecha</th>
                <th>Precio</th>
                <th>Direccion</th>
                <th>Email</th>
                <th>Estado</th>
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
                <td>Descripcion</td>

                <td className='td-option'>
                  <div className="div">
                    <button>Despachado</button>
                  </div>
                </td>
                
              </tr>
            </tbody>
          </table>
          </div>
          </div>

    </React.Fragment>
  )
}

export default Ventas