import React from 'react';
import "../styles/featuredSection.css"
import { Link } from 'react-router-dom';

const FeaturedSection = () => {
  return (
    <div className="featured-section">
      <div className="text-section">
        <p>Online clothing store</p>
        <p>Welcome!</p>
        <Link to="/store" style={{ textDecoration: 'none' }} className="button-on-image">Shop now!</Link>
      </div>
    </div>
  );
}

export default FeaturedSection;