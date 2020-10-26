import React from "react";
import CardVertical from '../../Componentes/CardVertical';
import CardHorizontal from '../../Componentes/CardHorizontal';
import "./index.css"

const Main = () => {
    return (
        <>
         <div className="container-main">
         <h1 className="titulo-main">
          CEPEMA POLI-USP
        </h1>
         </div>
            

        <div className="containerMenu">
            <br/>
            <a className="negrito">Centro de Pesquisa em Meio Ambiente (CEPEMA)</a> 
            <p>da Universidade de São Paulo (USP). 
            Localizado junto à Serra do Mar, o empreendimento foi construído num espaço de 20 mil m² em Cubatão, São Paulo.
            A construção do órgão é resultado de uma compensação sócio-ambiental negociada num Termo de Compromisso e Ajustamento de Conduta Ambiental (TCAC) entre a Petrobras, a CETESB e o Ministério Público, assinado no dia 4 de março de 2004.
            Com investimentos de R$ 12 milhões da Petrobras, o CEPEMA tem como objetivo consolidar, aplicar e difundir os conhecimentos existentes nas universidades, centro de pesquisas e do setor industrial no tratamento de questões relacionadas ao meio ambiente. O público-alvo é formado por professores, estudantes, pesquisadores, ONGs, agências ambientais, indústrias e a comunidade de maneira geral.
            </p>
            <CardHorizontal descricao=' Localizado junto à Serra do Mar, o empreendimento foi construído num espaço de 20 mil m² em Cubatão, São Paulo.
            A construção do órgão é' title='Laboratorio' img={require('../../assets/img/estrutura-tecnica-de-um-laboratorio-de-analises-clinicas.jpg')}/>
            <br/>
            <br/>
           
            <p>No CEPEMA são desenvolvidas pesquisas de pós-graduação e extensão nas áreas ambiental, com foco em desenvolvimento de novas tecnologias e sustentabilidade.</p>

            <CardVertical descricao='teste teste' title='laura' img={require('../../assets/img/funcionarios/laura.jpeg')}/>
            <CardVertical descricao='teste teste' title='Gabi' img={require('../../assets/img/funcionarios/gabi.jpeg')}/>
            <CardVertical descricao='teste teste' title='Ana' img={require('../../assets/img/funcionarios/ana.jpeg')}/>
            <br/>
            <br/>

            
            <p>
            Projetado pelo arquiteto Carlos Brakte, o complexo tem 4 mil m² de área construída, fica instalado ao sul da Refinaria Presidente Bernardes-Cubatão, na rodovia Cônego Domenico Rangoni (ex-Piaçagüera-Guarujá), em meio a uma área de 20 mil m².
            O CEPEMA tem seis laboratórios, seis salas de aula, auditório, salas de apoio, centros de documentação, almoxarifado e duas suítes para apoio a pesquisadores.
            Os laboratórios são equipados com a infra-estrutura necessária, como bancada, sistema de purificação de água, linhas para gases (nitrogênio, hélio, oxigênio e ar sintético), sistema de vácuo, ar comprimido e chuveiros de emergência.
            </p>
        </div>
        </>
    );
}

export default Main;
