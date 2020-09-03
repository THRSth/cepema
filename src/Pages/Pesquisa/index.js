import React from "react";
import { Link } from "react-router-dom";

import "./index.css"

const Pesquisa = () => {
    return (
        <>
        <div className="containerPesquisa">
            <h2>Pesquisas realizadas pelo o CEPEMA</h2>
         <div className="collection">
        <Link to="#!" className="collection-item">Sistema multiespectral portátil para monitoramento de oxigênio</Link>
        <Link to="#!" className="collection-item ">Sistemas optoeletrônicos portáteis para detecção de gases</Link>
        <Link to="#!" className="collection-item">Investigação de áreas contaminadas</Link>
        <Link to="#!" className="collection-item">Remoção de íons metálicos de CU2+ e ZN2+ de efluentes aquosos</Link>
        <Link to="#!" className="collection-item">Monitoramento de contaminantes ambientais</Link>
        <Link to="#!" className="collection-item">Estudo do potencial de biodegradação de bactérias isoladas de rejeito de óleo cru</Link>
        <Link to="#!" className="collection-item">Estudo de bioprospecção bacteriana da barragem de Fundão em Mariana</Link>
        <Link to="#!" className="collection-item">Mitigação de CO2 e CH4 através do uso de consorcio microbiano</Link>
        <Link to="#!" className="collection-item">Prospecção de bactérias produtoras de biopolímeros em manguezais</Link>
        <Link to="#!" className="collection-item">Bioconversão de metano em polihidroxibutirato (PBH)</Link>
      </div>
      </div>
        </>
    );
}

export default Pesquisa;
