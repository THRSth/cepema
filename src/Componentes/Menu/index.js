import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { routes } from "../../router/makeRoutes";

const Menu = () => {
  return (
    <>
      <nav className="menuNav">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo fontColor">
            <img
              className="containerLogo"
              src={require("../../assets/Logo/Imagem1.png")}
              alt="Logo cepema - Ir para home"
            />
          </Link>
          <Link to="/" className="brand-logo right">
            <img
              className="containerLogoFim"
              src={require("../../assets/Logo/logo_POLI-USP.png")}
              alt="Logo poli usp - Ir para home"
            />
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down navUl">
            {routes
              .filter((route) => route.name)
              .map(({ name, path }, index) => (
                <li key={index}>
                  <Link to={path} className="fontColor">
                    {name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;

//<Link to="/" className="brand-logo fontColor">Logo</Link>
