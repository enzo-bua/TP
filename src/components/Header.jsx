import logo from '../img/logo.png'
import '../Styles/Header.css'
import styles from '../Styles/Header.css'
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

        <Link to="/" className='enlace'><img className='logo' src={logo} alt="" /></Link> 
        <ul className="ps-5 ms-5">
          <li className="ps-5"> <Link to="/">HOME</Link> </li>           
          <li> <Link className="fs-6 fw-light Italic" to="/novedades">NOVEDADES</Link> </li>
          <li> <Link className="fs-6 fw-light Italic" to="/genero">GENERO</Link> </li>
          <li> <Link className="fs-6 fw-light Italic" to="/categoria">CATEGORIA</Link> </li>
          <li> <Link className="fs-6 fw-light Italic" to="/oferta">OFERTA</Link> </li>
          <li> <Link className="fs-6 fw-light Italic" to="/recomendados">RECOMENDADOS</Link> </li>
          <li className='other-button'> <Link className="fs-6 fw-bold" to="/checkin">REGISTRASE</Link></li>
          <li> <Link className="fs-6 fw-bold" to="/login">INGRESAR</Link></li>
          <li> <Link className="fs-6 fw-bold">FAVORITOS</Link></li>
          <li> <Link to="/checkout"><FaShoppingCart className={styles.iconAnimation}/></Link>{cart.length > 0 && <b className="Header-alert">{cart.length}</b>}</li>
          <li> <Link><FaHouseUser className={`${styles.iconAnimation} ${styles.userMenuIn}`}/></Link></li>
        </ul>

    </nav>
  );
}
 
export default Header;