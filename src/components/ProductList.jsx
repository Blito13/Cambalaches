import React from 'react';
import { useSelector } from 'react-redux';
import { Products } from './Products';
import './ProductList.css';
export const ProductList = () => {
  const data = useSelector((state) => state.products);
  const randomHeight = Math.floor(Math.random() * 150) + 100;
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
                imagen={product.thumbnail.length >1 ? product.thumbnail[0] : product.thumbnail}
                owner={product.ownerNumber}
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