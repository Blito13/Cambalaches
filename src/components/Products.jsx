import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Importa el archivo CSS

export const Products = ({ id, product, state }) => {
  const miniFunc = (e, id) => {
    e.preventDefault();
    console.log(`Ofertar producto ${id}`);
  };

  return (
    <li>
      <h3>{product}</h3>
      {state === true ? (
        <button onClick={(e) => miniFunc(e, id)}>Ofertar</button>
      ) : (
        <button>Comprar</button>
      )}
      <Link to={`/details/${id}`}>{product}</Link>
    </li>
  );
};