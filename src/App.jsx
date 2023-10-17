import React, { useState } from 'react';
import NavBar from './components/navBar';
import FeaturedSection from './components/featuredSection';
import FeaturedItems from './components/featuredItemsSection';
import ShoppingCart from './components/shoppingCart';
import './App.css';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(prevState => !prevState);
  };

  return (
    <div className="App">
      <ShoppingCart isVisible={isCartVisible} onToggle={toggleCart}/>
      <NavBar onCart={toggleCart}/>
      <FeaturedSection />
      <FeaturedItems />
    </div>
  );
}

export default App;
