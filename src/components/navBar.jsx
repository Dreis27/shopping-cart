import React from 'react';
import "../styles/navBar.css"
import logo from "../styles/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({onLogo, onHome, onStore, onAbout, onCart, onLoupe}) => {
  return (
    <div className="navbar">
      <div className='navbar-left'>
        <img onClick={onLogo} src={logo} ></img>
      </div>
      <div className='navbar-center'>
          <button onClick={onHome}>HOME</button>
          <button onClick={onStore}>STORE</button>
          <button onClick={onAbout}>ABOUT</button>
      </div>
      <div className='navbar-right'>
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
        <div className="icon-badge-container">
          <FontAwesomeIcon className="icon" icon={faCartShopping} style={{color: "#ffffff"}} />
          <span className="cart-badge">0</span>
        </div>
      </div>
    </div>

  );
}

export default NavBar;