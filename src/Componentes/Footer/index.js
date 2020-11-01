import React from "react";
import './index.css';

const Footer = (props) => {
    return (
        <>
             <footer className="page-footer containerFooter">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">CEPEMA</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Acesso Rapido</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Equipe</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Pesquisas</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Ações</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Contato</a></li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            CEPEMA © 2020
            </div>
          </div>
        </footer>
        </>
    )
}

export default Footer;
