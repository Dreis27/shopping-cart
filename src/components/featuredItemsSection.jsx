import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/featuredItemsSection.css"
import Loading from './loading';
import { useNavigate } from 'react-router-dom';

const FeaturedItems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate('/store');
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setProducts(data);
        setLoading(false);
    })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <h1 className='featured-products-heading'>Featured products</h1>
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item" onClick={handleProductClick}>
          <div className='product-image-container'><img src={product.image} alt={product.title} width="100" /></div>
          <div className='product-info-container'>
            <h3>{product.title.split(' ').slice(0, 3).join(' ')}</h3>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default FeaturedItems;