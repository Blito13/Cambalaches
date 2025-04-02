import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Importa el archivo CSS

export const Products = ({ id, product, state, imagen }) => {
  const miniFunc = (e, id) => {
    e.preventDefault();
    console.log(`Ofertar producto ${id}`);
  };
console.log(imagen.length)
  return (
    <li>
      <h3>{product}</h3>
      <img 
        src={imagen} 
        alt="photo"
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      {state === true ? (
        <button onClick={(e) => miniFunc(e, id)}>Ofertar</button>
      ) : (
        <button>Comprar</button>
      )}
      <Link to={`/details/${id}`}>{product}</Link>
    </li>
  );
};