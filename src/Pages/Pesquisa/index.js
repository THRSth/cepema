import React from "react";
import CardText from "../../Componentes/Cards/CardText";
import Pesquisas from "../../Jsons/Pesquisas.js";

import "./index.css";

const Pesquisa = () => {
  return (
    <>
      <div className="containerPesquisa">
        <div className="containerPesquisasTitle">Pesquisas</div>
        <div>
          Veja as nossas pesquisas. Por meio dessas desenvolvemos estratégias de
          minimização de impactos ambientais, racionalização do uso de energia,
          entre outras coisas.
        </div>

        <div className="containerPesquisaMap">
          {Pesquisas.map(function (e) {
            return (
              <CardText
                title={e.nomePesquisa}
                img={e.img}
                autor={e.autor}
                descricao={e.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pesquisa;
