import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar';
import FeaturedSection from './components/featuredSection';
import FeaturedItems from './components/featuredItemsSection';
import ShoppingCart from './components/shoppingCart';
import Store from './components/store';
import About from './components/about';
import Footer from './components/footer';
import './App.css';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Get carItems from local storage
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // Save carItems whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (!existingItem) return prevItems;
      if (existingItem.quantity > 1) {
        return prevItems.map(item => 
          item.id === productId? {...item, quantity: item.quantity - 1} : item
          );
      } else {
        return prevItems.filter(item => item.id !== productId);
      }
    })
  }

  const toggleCart = () => {
    setIsCartVisible(prevState => !prevState);
  };

  return (
    <Router>
      <div className="App">
        <ShoppingCart isVisible={isCartVisible} onToggle={toggleCart} cartItems={cartItems} removeItem={removeFromCart}/>
        <NavBar onCart={toggleCart} cartItems={cartItems}/>

        <Routes>
          <Route path="/store" element={<Store cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
          <Route path="/" element={<>
            <FeaturedSection />
            <FeaturedItems />
          </>} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
