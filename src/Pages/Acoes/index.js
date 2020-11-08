import React from "react";
import CardText from "../../Componentes/Cards/CardText";
import Acoes from "../../JSON/Acoes.js";

import "./index.css";

const Pesquisa = () => {
  return (
    <>
      <div className="container-conteudo-page">
        <p>
          Conheça e participe das nossas ações realizadas em harmonia com a
          comunidade.
        </p>

        <div className="containerPesquisaMap">
          {Acoes.map((acao) => (
            <CardText
              img={acao.img}
              autor={acao.acao}
              descricao={acao.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pesquisa;
