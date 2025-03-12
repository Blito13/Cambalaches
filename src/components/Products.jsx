import React from 'react';

const Product = ({ product, onBid }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio actual: ${product.currentPrice}</p>
      <button onClick={() => onBid(product.id)}>Pujar</button>
    </div>
  );
};

export default Product;