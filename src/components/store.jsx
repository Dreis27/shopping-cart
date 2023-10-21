import { useState, useEffect } from 'react';
import ProductCard from './product-card';
import Loading from './loading';
import '../styles/store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
          .then(response => response.json())
          .then(data => {
            setProducts(data);
            setLoading(false);
        })
          .catch(err => {
            setError(err.message);
            setLoading(false);
          });
      }, []);

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

      if (loading) return <Loading/>;
      if (error) return <p>Error: {error}</p>;

      return (
        <>
        <div className='store-title'>Shop</div>
        <div className='store-container'>
          {products.map(product => (
            <ProductCard 
              key={product.id}
              productId={product.id}
              productImage={product.image}
              productTitle={product.title}
              productPrice={product.price}
              addToCart={() => addToCart(product)}
            />
          ))}
        </div>
        </>
      );
}


export default Store;