import React from "react";
import CardText from "../../Componentes/Cards/CardText";
import Pesquisas from "../../JSON/Pesquisas.js";

import "./index.css";

const Pesquisa = () => {
  return (
    <>
      <div className="container-conteudo-page">
        <div>
          Veja as nossas pesquisas. Por meio dessas desenvolvemos estratégias de
          minimização de impactos ambientais, racionalização do uso de energia,
          entre outras coisas.
        </div>

        <div className="containerPesquisaMap">
          {Pesquisas.map((pesquisa) => (
            <CardText
              img={pesquisa.img}
              autor={pesquisa.autor}
              descricao={pesquisa.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pesquisa;
