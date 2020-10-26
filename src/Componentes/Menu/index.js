import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Menu = () => {
    return (
        <>
          <nav className='menuNav'>
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo fontColor"><img className='containerLogo' src={require('../../assets/img/sony_logo_PNG7.png')}/></Link>
                  <Link href="#" class="brand-logo right"><img className='containerLogoFim' src={require('../../assets/img/sony_logo_PNG7.png')}/></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down navUl">
                    <li><Link to="/" className="fontColor">Inicio</Link></li>
                    <li><Link to="/pesquisa" className="fontColor">Equipe</Link></li>
                    <li><Link to="/pesquisa" className="fontColor">Pesquisas</Link></li>
                    <li><Link to="/estrutura" className="fontColor">Ações</Link></li>
                    <li><Link to="/contato" className="fontColor">Contato</Link></li>
                </ul>
              
                  </div>
                
            </nav>
        </>
    )
}

export default Menu;

//<Link to="/" className="brand-logo fontColor">Logo</Link>
