import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/Footer.css'
function Layout( { children } ) {
  return (
    <React.Fragment>
      <Header/>
      <div className='d'>{children}</div>
      <Footer/>
    </React.Fragment>
  )
}

export default Layout 