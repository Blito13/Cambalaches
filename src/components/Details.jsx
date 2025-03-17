import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Details = () =>{
    const {id} = useParams();
    const data = useSelector((state)=> state.products);
    const element = data.products.find((p) => p.id === parseInt(id));
    
    if (!element) {
        return <div>Producto no encontrado</div>;
      }
    return(
        <>
        <h1>
            {element.title}
        </h1>
        <h1>
            {element.id}
        </h1>
        <h1>
            {element.completed === true ? "done": "to do"}
        </h1>
        
        </>
    )
}