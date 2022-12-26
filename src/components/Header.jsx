import '../Styles/Header.css'
import { FaShoppingCart, FaHouseUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext'
import { useContext } from 'react';

const Header = () => {

  const { state } = useContext(AppContext)
  const { cart } = state;

  return ( 
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <Link to="/"> <h1 className='enlace'>Book Shop</h1> </Link>
      <ul className="head">
        <li><Link className="cat fs-6 " to="/categoria">Categorias</Link></li>        
        <li className='other-button'> <Link className="fs-6 fw-bold" to="/checkin">REGISTRASE</Link></li>
        <li> <Link className="fs-6 fw-bold" to="/login">INGRESAR</Link></li>
        <li> <Link className="fs-6 fw-bold">FAVORITOS</Link></li>
        <li className='other-ic'> <Link to="/checkout"><FaShoppingCart className='carrito'/></Link>{cart.length > 0 && <b className="Header-alert">{cart.length}</b>}</li>
        <li> <Link><FaHouseUser className='config'/></Link></li>
      </ul>
    </nav>
  );
}
 
export default Header;