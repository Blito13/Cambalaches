import React from 'react';

export const Products = ({ id, product, state}) => {
    console.log(id) 
  return (
    <div style={{display: "flex",  width:"300px", border: "6px solid red"}}>
      <li key={id}>
      <h3>{product}</h3>
      <p>{state}</p>
      </li>
    </div>
  );
};

