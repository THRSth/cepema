import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { routes } from "../../router/makeRoutes";

const Menu = () => {
  return (
    <>
      <nav className="menuNav">
        <Link to="/" className="menuLogo">
          <img
            className="containerLogo"
            src={require("../../assets/Logo/Imagem1.png")}
            alt="Logo cepema - Ir para home"
          />
        </Link>
        <ul id="nav-mobile" className="navUl">
          {routes
            .filter((route) => route.name)
            .map(({ name, path }, index) => (
              <li key={index}>
                <Link to={path} className="textoItemMenu">
                  {name}
                </Link>
              </li>
            ))}
        </ul>
        <Link to="/" className="menuLogo">
          <img
            className="containerLogoFim"
            src={require("../../assets/Logo/logo_POLI-USP.png")}
            alt="Logo poli usp - Ir para home"
          />
        </Link>
      </nav>
    </>
  );
};

export default Menu;

//<Link to="/" className="brand-logo fontColor">Logo</Link>
