import React from 'react'
import '../styles/Header.css'
import { FaSearch } from 'react-icons/fa'

import '../styles/Template.css'

function Buscador({ search, searcher }) {
  return (
    <li className="searchBar">
    <input 
      value={search}
      onChange={searcher}
      type="text" 
      placeholder="Buscar..." 
    />
    <FaSearch className="searchBarIcon"/>
  </li>
  )
}

export default Buscador