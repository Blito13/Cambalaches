import React from 'react';
import { useFetch } from '../useFetch';
import { Products } from './Products';
import { useSelector } from 'react-redux';

export const ProductList = () => {
  console.log("roro")
  const { products } = useFetch("https://jsonplaceholder.typicode.com/todos");
  const data = useSelector((state)=>state.products)  
 /*  console.log(data.products.map((e)=>console.log(e, "saldkj"))) */
/*   console.log(data.products.forEach((e)=>console.log(e))) */
console.log(data.products)
  
  return ( 
    <>
    {data.products.length  > 1 ?(
      <div>
        {data.products.map((product) =>
          <Products
            id = {product.userId}
          product= {product.title}
          state =  {product.completed}
          />
        )}
      </div>

    ):(
      <>
      <h1>No products yet</h1>
      </>
    )}
    </>
  );
};

