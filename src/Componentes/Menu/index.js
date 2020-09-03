import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
                    <nav>
                <div class="nav-wrapper">
                <Link to="/" className="brand-logo">Logo</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/">INÍCIO</Link></li>
                    <li><Link to="/pesquisa">PESQUISA</Link></li>
                    <li><Link to="/estrutura">ESTRUTURA</Link></li>
                    <li><Link to="/cap">CENTRO APRENDIZ DE PESQUISADOR</Link></li>
                    <li><Link to="/contato">CONTATO</Link></li>
                    <li><Link to="/localizacao">LOCALIZAÇÃO</Link></li>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Menu;
