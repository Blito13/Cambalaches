import React from 'react';
import { useSelector } from 'react-redux';
import { Products } from './Products';
import './ProductList.css';
export const ProductList = () => {
  const data = useSelector((state) => state.products);

  return (
    <>
      {data.products.length > 1 ? (
        <div className="products-container"> {/* Contenedor único para los productos */}
          <ul className="products"> {/* Lista de productos */}
            {data.products.map((product) => (
              <Products
                key={product.id} // Mueve la key aquí
                id={product.id}
                product={product.title}
                state={product.completed}
              />
            ))}
          </ul>
        </div>
      ) : (
        <h1>No products yet</h1>
      )}
    </>
  );
};