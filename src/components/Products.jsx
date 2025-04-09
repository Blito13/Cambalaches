import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

export const Products = ({ id, product, imagen }) => {
  return (
    <Link to={`/details/${id}`} className="product-card">
      <div 
        className="product-image" 
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="product-overlay">
          <h3 className="product-title">{product}</h3>
        </div>
      </div>
    </Link>
  );
};