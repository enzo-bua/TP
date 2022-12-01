import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ Children }) {
  return (
      <React.Fragment>
        <Header/>
        {Children}
        <Footer/>
      </React.Fragment>
    )
}

export default Layout