import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Details = () =>{
    const {id} = useParams();
    const data = useSelector((state)=> state.products);
    console.log(data.products)
    const element = data.products.filter((p) => p.id === id);
    console.log(element[0].thumbnail)
    if (!element) {
        return <div>Producto no encontrado</div>;
      }
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
        
        </>
    )
}