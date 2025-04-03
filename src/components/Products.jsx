import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Importa el archivo CSS
import { SiWhatsapp } from "react-icons/si";
import { IconContext } from "react-icons";
export const Products = ({ id, product, state, imagen }) => {
  const miniFunc = (e, id) => {
    e.preventDefault();
    console.log(`Ofertar producto ${id}`);
  };
console.log(imagen.length)
  return (
    <li>
      <h3 style ={{fontSize : "1.5em", color:"black", padding :"20px"}}>{product}</h3>
      <img 
        src={imagen} 
        alt="photo"
        />
      <Link style ={{fontSize : "1.5em", color:"black", padding :"20px"}}to={`/details/${id}`}>Mas detalles</Link>
        <IconContext.Provider value={{ color: "white", size : "3em"}}>
          <button onClick={(e)=>miniFunc(e)}>
            <SiWhatsapp/>
          </button>
        </IconContext.Provider>
    </li>
  );
};