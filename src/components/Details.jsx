import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { SiWhatsapp } from "react-icons/si";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { contactOwner } from "../redux/productSlice"; 

export const Details = () =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.products);
    const element = data.products.filter((p) => p.id === id);
    if (!element) return <div>Producto no encontrado</div>;
    const text = `Hola necesito informacion acerca de ${ element[0].title}`;
    const contact = (e ) => {
        e.preventDefault();
        let form = {
            number : element[0].ownerNumber,
            text : text
        }
    
        dispatch(contactOwner(form))
      };
    return(
        <>
        <h1>
            {element[0].title}
        </h1>
        <h1>
            {element[0].description}
        </h1>  
        {
            element[0].thumbnail.map((e) =>
            <img src={e} alt="pic" />
            )
        }
        <>
          <IconContext.Provider value={{ color: "blue", size : "3em"}}>
                  <button onClick={(e)=>contact(e)}>
                    <SiWhatsapp/>
                  </button>
                </IconContext.Provider>
        </>
        </>
    )
}