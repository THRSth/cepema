import React from "react";
import './index.css';

const Footer = () => {
    return (
        <>
             <footer className="page-footer containerFooter">
          <div className="container">
            <div className="row containerFooterInformacao">
              <div className="col l6 s12 containerImgFooter">
                <img className='imgFooter' src={require('../../assets/img/minerva-cinza-on6wb50sxjrg3l0qqoeh6k38hblzxpi7h767z0h7m8.png')} alt=""/>
              </div>
              <div className=" listasFooter">

                <div className='ulAcessoFooter'>
                <h5 className="white-text">Acesso Rapido</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Equipe</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Pesquisas</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Ações</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Contato</a></li>
                </ul>
                </div>

                <div className='ulContatoFooter'>
                <h5 className="white-text">Contato</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!"><b>Email:</b></a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"><b>Telefone:</b> (13) 3362-9350</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"><b>Endereço:</b> Rod. Cônego Domênico Rangoni, s/n - Jardim das Industrias, Cubatão - SP, 11540-990</a></li>
                </ul>
                </div>

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

//minerva-cinza-on6wb50sxjrg3l0qqoeh6k38hblzxpi7h767z0h7m8.png

//require('../../assets/img/5f840d2877a2804ef2d5f496_12184091_974650985931878_328421069915353778_o.jpg')
