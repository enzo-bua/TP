import React from 'react'
import '../styles/Footer.css'
function Footer() {
  return (
    <footer className={`foot grid grid-cols-1 justify-items-center mt-12 pt-6 pb-6 md:grid-cols-3 md:justify-items-center text-white bg-black relative z-50`}>
      <div className='desarrollo'>
        <h3 className='font-bold'>Equipo de desarrollo</h3>
        <p>Blanchet Nazareno</p>
        <p>Bua Enzo</p>
        <p>Salduende Thomas</p>

      </div>
      <div className='enlaces-utiles'>
        <h3 className='font-bold'>Enlaces Útiles</h3>
        <p>Sobre nosotros</p>
        <p>Politicas de uso</p>
        <p>Contactate con nosotros</p>
      </div>
      <div className='informacion'>
        <h3 className='font-bold'>Información de Contacto</h3>
          <p><strong> Email:</strong> libros@example.com</p>
          <p><strong> Direccion:</strong> sarmiento111</p>
          <p><strong> Teléfono:</strong> 11-444444</p>
      </div>

     </footer>
  )
}

export default Footer