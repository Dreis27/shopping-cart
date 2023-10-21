import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar';
import FeaturedSection from './components/featuredSection';
import FeaturedItems from './components/featuredItemsSection';
import ShoppingCart from './components/shoppingCart';
import Store from './components/store';
import About from './components/about'
import './App.css';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const toggleCart = () => {
    setIsCartVisible(prevState => !prevState);
  };

  return (
    <Router>
      <div className="App">
        <ShoppingCart isVisible={isCartVisible} onToggle={toggleCart} />
        <NavBar onCart={toggleCart} />

        <Routes>
          <Route path="/store" element={<Store cartItems={cartItems} addToCart={addToCart}/>} />
          <Route path="/" element={<>
            <FeaturedSection />
            <FeaturedItems />
          </>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
