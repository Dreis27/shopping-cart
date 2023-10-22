import React from 'react';
import "../styles/navBar.css"
import logo from "../styles/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const NavBar = ({onLogo, onCart, onLoupe, cartItems}) => {
  return (
    <div className="navbar">
      <div className='navbar-left'>
        <img onClick={onLogo} src={logo} ></img>
      </div>
      <div className='navbar-center'>
          <Link to="/" style={{ textDecoration: 'none' }} className="button-like">HOME</Link>
          <Link to="/store" style={{ textDecoration: 'none' }} className="button-like">STORE</Link>
          <Link to="/about" style={{ textDecoration: 'none' }} className="button-like">ABOUT</Link>
      </div>
      <div className='navbar-right'>
          <FontAwesomeIcon onClick={onLoupe} className="icon" icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
        <div className="icon-badge-container" onClick={(e) => { e.stopPropagation(); onCart(); }}>
          <FontAwesomeIcon className="icon" icon={faCartShopping} style={{color: "#ffffff"}} />
          <span className="cart-badge">{cartItems.length}</span>
        </div>
      </div>
    </div>

  );
}

export default NavBar;