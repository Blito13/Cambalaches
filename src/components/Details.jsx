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
    const [selected, setSelected] = useState(element[0].thumbnail[0]);
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
            {/* <h1>
            {element[0].title}
            </h1>
            <h1>
            {element[0].description}
            </h1>   */}
            <div className="main-image-container">
                <img 
                src={selected}
                alt="pic" 
                className="main-image"
                />
            </div>
            <div className="thumbnail-container">
                {element[0].thumbnail.map((e, i) => (
                    <div
                    className={selected=== e ?"thumbnail-selected" : "thumbnail"}
                    onClick={()=>setSelected(element[0].thumbnail[i]) }
                    >
                        <img key={i} src={e}  alt={`Miniatura ${i + 1}`}  />
                    </div>
                    )

                    
                )
            }
            </div>
        <>
            <Link to={"/"}>Go back Jo-Jo</Link>
          <IconContext.Provider value={{ color: "blue", size : "1em"}}>
                  <button onClick={(e)=>contact(e)}>
                    <SiWhatsapp/>
                  </button>
           </IconContext.Provider>
        </>
        </div>
    )
}