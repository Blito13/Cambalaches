import "./NavBar.css";
import { useState } from "react";



export const NavBar = () =>{
const [active , setActive] = useState(false);
const handleClick = () => {
    setActive(!active);
    console.log(active);
};
    return(
        <div className="navbar">
            <div className="nav-container">
                <h2 className="logo">Cambalache®</h2>
                <button className="btn" onClick={handleClick}>
                    {active === false ? "O" : "X"}
                </button>
                <nav>
                    <ul>
                        <li className="nav"><a href="" className="outline">Descargas</a></li>
                        <li className="nav"><a href="" className="outline">Contacto</a></li>
                        <li className="nav"><a href="" className="outline">Mi perfil</a></li>
                        <li className="nav"><a href="" className="outline">Deme 2</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};