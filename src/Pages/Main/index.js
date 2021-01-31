import React from "react";
import { Link } from "react-router-dom";
import CardVertical from "../../Componentes/Cards/CardVertical";
import CardHorizontal from "../../Componentes/Cards/CardHorizontal";
import Galeria from "../../Componentes/Galeria";

import "./index.css";

const Main = () => {
  return (
    <>
      <div className="container-conteudo-page">
        <section>
          <p>
          ⠀⠀⠀⠀⠀⠀⠀⠀O Centro de Capacitação e Pesquisa em Meio Ambiente - CEPEMA,  da 
            <a href='https://www5.usp.br/'>  Universidade de São Paulo</a>, dedica-se, 
            desde 2006, ao desenvolvimento de diversas pesquisas voltadas à solução de problemas
            ambientais, de estudantes de <a href='https://www5.usp.br/ensino/pos-graduacao/'> pós graduação </a> 
            em conjunto com os setores público e privado; isso além de oferecer para a comunidade palestras,
            cursos e atividades focados  na educação ambiental. O centro atua em pesquisas relacionadas à água,
            ar, solo, biodiversidade, química verde, saúde e gestão ambiental.
          </p>
          <p>
          ⠀⠀⠀⠀⠀⠀⠀⠀Os prédios e instalações, localizados em Cubatão (SP), foram construídos pela Petrobrás
            como meio de compensação ambiental à cidade. Esses são compostos por 4,5 mil metros quadrados, 
            contando com 6 laboratórios altamente equipados, viveiro, centro de triagem de animais, salas de aula, 
            biblioteca, além de um auditório com capacidade para 120 pessoas.
          </p>
        </section>
        <section>
          <CardHorizontal
            descricao={` Localizado junto à Serra do Mar, o empreendimento foi construído num espaço de 20 mil m² em Cubatão, São Paulo.`}
            title="Laboratório"
            img={require("../../assets/img/estrutura-tecnica-de-um-laboratorio-de-analises-clinicas.jpg")}
          />
          <p>
            No CEPEMA são desenvolvidas pesquisas de pós-graduação e extensão
            nas áreas ambiental, com foco em desenvolvimento de novas
            tecnologias e sustentabilidade.
          </p>
        </section>
        <section className="cards-paginas">
        <Link to='/equipe' className="linkEquipe">   
          <CardVertical
            descricao={`Conheça nossa equipe! Ela é composta por pessoas extremamente capacitadas e com vasto conhecimento sobre a área.`}
            title="Equipe"
            img={require("../../assets/img/5f840d2877a2804ef2d5f496_12184091_974650985931878_328421069915353778_o.jpg")}
            />
        </Link>
        <Link to='/pesquisa' className="link">
          <CardVertical
            descricao="Veja as nossas pesquisas! Desenvolvemos estratégias de minimização de impactos ambientais e muito mais."
            title="Pesquisas"
            img={require("../../assets/img/5f840d2871a3e43b690264b2_12087782_964117646985212_870508845211879943_o.jpg")}
          />
        </Link>
        <Link to='/acoes' className="link">
          <CardVertical
            descricao="Conheça e participe das nossas ações realizadas em harmonia com a comunidade."
            title="Ações"
            img={require("../../assets/img/5f840d29d32656789d0b3320_BJB_arburb_not.jpg")}
          />
        </Link>
        </section>
        <section>
          <h3>Galeria</h3>
          <Galeria />
        </section>
      </div>
    </>
  );
};

export default Main;
