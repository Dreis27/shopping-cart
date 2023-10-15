import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/featuredItemsSection.css"

const FeaturedItems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(response => response.json())
      .then(data => {
        const tShirts = data.filter(product => product.title.toLowerCase().includes(''));
        console.log(data); 
        setProducts(data);
        setLoading(false);
    })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} width="100" />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedItems;