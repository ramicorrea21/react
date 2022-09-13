import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom'
const NavBar = () => {
return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link nav-link-active">Templo de la Camiseta </Link>
            </li>
            <li className="nav-item">
            <Link to='/categoria/Seleccion' className="nav-link nav-link-active">Selecciones</Link>
            </li>
            <li className="nav-item">
            <Link to='/categoria/Club' className="nav-link nav-link-active">Club</Link>
            </li>
            <li className="nav-item">
            <Link to="/contacto" className="nav-link nav-link-active">Contacto</Link>
            </li>
            <li className="nav-item">
            <Link to="/sobrenosotros" className="nav-link nav-link-active">Sobre Nosotros</Link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    <CartWidget/>
    </>
);
};

export default NavBar;
