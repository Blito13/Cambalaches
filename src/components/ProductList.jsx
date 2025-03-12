import React from 'react';
import { useFetch } from '../useFetch';
import Product from './Product';
import { useSelector } from 'react-redux';
const ProductList = () => {
  const products = useFetch("https://jsonplaceholder.typicode.com/todos");
  const product = useSelector((state)=> state);
  console.log(product)
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;