import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { SiWhatsapp } from "react-icons/si";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { contactOwner } from "../redux/productSlice"; 
import './Details.css';
import { Link } from "react-router-dom";


export const Details = () =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.products);
    const element = data.products.filter((p) => p.id === id);
    if (!element) return <div>Producto no encontrado</div>;
    const [selected, setSelected] = useState(0);
    const text = `Hola necesito informacion acerca de ${ element[0].title}`;
    console.log(selected, "morreja")
    const contact = (e ) => {
        e.preventDefault();
        let form = {
            number : element[0].ownerNumber,
            text : text
        }
    
        dispatch(contactOwner(form))
      };

    return(
        <div className="image-carousel">
            <div className="title">
                <h1>
                    {element[0].title}
                </h1>
            </div>
            <div className="main-image-container">
                <button
                    className="buttonLeft"
                    onClick={()=>setSelected(selected===0 ?selected : selected-1) }
                >
                    <i  
                        class="fa-solid fa-arrow-left"  
                    />
                </button>
                <img 
                    src={element[0].thumbnail[selected]}
                    alt="pic" 
                    className="main-image"
                />
                <button
                    className="buttonRight"
                    onClick={()=>setSelected(selected===element[0].thumbnail.length-1?selected:selected+1) }
                >
                    <i 
                        class="fa-solid fa-arrow-right"  
                    />
                </button>
            </div>
            
            <div className="thumbnail-container">
                {element[0].thumbnail.map((e, i) => (
                    <>
                    <div 
                        key={i}  
                        onClick={()=>setSelected(i) } 
                        className={selected === i?"thumbnail-dots-selected" : "thumbnail-dots"}
                    />
                    <div
                        className={selected=== i ?"thumbnail-selected" : "thumbnail"}
                        onClick={()=>setSelected(i) }
                    >
                        <img key={i} src={e}  alt={`Miniatura ${i + 1}`}  />
                    </div>
                    </>
                    )
                )
            }
            </div>
            <div className="info">
                <h1>
                    {element[0].description}
                </h1>
            </div>
            <div className="price">
                <h3>{element[0].price? `$ ${element[0].price}`: "Ofertar"}</h3>
                    <IconContext.Provider 
                        value={{className: "react-icons"}}>
                   
                        <SiWhatsapp
                        onClick={(e)=>contact(e)}
                        />
            
                    </IconContext.Provider>
                <Link  className={"link"}to={"/"}>
                <h3>
                   Volver
                </h3>
                </Link>
            </div>
        </div>
    )
}