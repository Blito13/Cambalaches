import React from 'react';
import Product from './Product';

const ProductList = ({ products, onBid }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} onBid={onBid} />
      ))}
    </div>
  );
};

export default ProductList;