import '../styles/Header.css'
import React from 'react';
import { FaSearch } from 'react-icons/fa'
const Buscador = () => {
  return ( 
        <li className="searchBar">
          <input type="text" placeholder="Buscar..." />
          <FaSearch className="searchBarIcon"/>
        </li>

    
  );
}
 
export default Buscador;