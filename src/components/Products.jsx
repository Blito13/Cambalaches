import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

export const Products = ({ id, product, imagen }) => {
  //guardar en un estado el height para evitar recalculos innecesarios
  const randomHeight = Math.floor(Math.random() * 150) + 100;
  return (
   <div className='product-item' style={{height:`${randomHeight}px`}}>
    <Link to={`/details/${id}`} className="product-card" style={{height:`${randomHeight}px`}}>
      <div 
        className="product-image" 
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="product-overlay">
          <h3 className="product-title">{product}</h3>
        </div>
      </div>
    </Link>
   </div> 
  );
};