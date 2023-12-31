import { useState, useEffect } from 'react';
import ProductCard from './product-card';
import Loading from './loading';
import '../styles/store.css';

const Store = ({ cartItems, addToCart, removeFromCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


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
              removeFromCart={() => removeFromCart(product.id)}
              cartItems={cartItems}
            />
          ))}
        </div>
        </>
      );
}


export default Store;