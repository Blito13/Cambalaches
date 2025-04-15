import "./NavBar.css";



export const NavBar = () =>{
    return(
        <div className="navbar">
            <div className="nav-container">
                <h2 className="logo">Cambalache®</h2>
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