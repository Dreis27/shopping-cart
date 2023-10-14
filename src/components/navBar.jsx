import React from 'react';
import "../styles/navBar.css"

const NavBar = ({onLogo, onHome, onStore, onAbout, onCart, onLoupe}) => {
  return (
    <div className="navbar">
      <div className='navbar-left'>
        <img onClick={onLogo}>LOGO</img>
      </div>
      <div className='navbar-center'>
          <button onClick={onHome}>HOME</button>
          <button onClick={onStore}>STORE</button>
          <button onClick={onAbout}>ABOUT</button>
      </div>
      <div className='navbar-right'>
          <button onClick={onLoupe}>🔍</button>
          <button onClick={onCart}>🛒</button>
      </div>
    </div>
  );
}

export default NavBar;