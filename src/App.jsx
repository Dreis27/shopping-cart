import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar';
import FeaturedSection from './components/featuredSection';
import FeaturedItems from './components/featuredItemsSection';
import ShoppingCart from './components/shoppingCart';
import Store from './components/store';
import './App.css';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(prevState => !prevState);
  };

  return (
    <Router>
      <div className="App">
        <ShoppingCart isVisible={isCartVisible} onToggle={toggleCart} />
        <NavBar onCart={toggleCart} />

        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="/" element={<>
            <FeaturedSection />
            <FeaturedItems />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
