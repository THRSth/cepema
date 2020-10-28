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
            <p>
            O Centro de Capacitação e Pesquisa em Meio Ambiente (CEPEMA), da Universidade de São Paulo, dedica-se desde 2006 à pesquisa e educação ambiental.  A missão principal é o desenvolvimento de pesquisa dedicada à solução de problemas ambientais em um ambiente multidisciplinar, em harmonia com os setores público e privado da sociedade. Voltado à pesquisa aplicada e orientado a projetos, o CEPEMA constitui-se em um ambiente fértil para conjugação de esforços de pesquisa interdisciplinar. Os projetos do CEPEMA buscam o desenvolvimento de estratégias para minimização de impactos ambientais, racionalização do uso de energia, otimização e monitoramento on-line de processos, com implicações quanto à conservação e uso sustentável de recursos naturais. Em parceria com a comunidade o centro oferece serviços como palestras, cursos de extensão e atividades de educação ambiental. Os prédios e instalações, localizados em Cubatão (SP), foram construídos pela Petrobrás como compensação ambiental à cidade. O espaço, de 4,5 mil metros quadrados, conta com seis laboratórios com equipamentos de última geração, viveiro, centro de triagem de animais, salas de aula, biblioteca, além de um auditório com capacidade para 120 pessoas. As áreas de atuação do CEPEMA envolvem pesquisas relacionadas com água, ar, solo, biodiversidade, química verde, saúde, gestão ambiental e educação ambiental.
            </p>
            <CardHorizontal descricao=' Localizado junto à Serra do Mar, o empreendimento foi construído num espaço de 20 mil m² em Cubatão, São Paulo.
            A construção do órgão é' title='Laboratorio' img={require('../../assets/img/estrutura-tecnica-de-um-laboratorio-de-analises-clinicas.jpg')}/>
            <br/>
            <br/>
           
            <p>No CEPEMA são desenvolvidas pesquisas de pós-graduação e extensão nas áreas ambiental, com foco em desenvolvimento de novas tecnologias e sustentabilidade.</p>

            <CardVertical descricao='teste teste' title='Equipe' img={require('../../assets/img/5f840d2877a2804ef2d5f496_12184091_974650985931878_328421069915353778_o.jpg')}/>
            <CardVertical descricao='teste teste' title='Pesquisas' img={require('../../assets/img/5f840d2871a3e43b690264b2_12087782_964117646985212_870508845211879943_o.jpg')}/>
            <CardVertical descricao='teste teste' title='Ações' img={require('../../assets/img/5f840d29d32656789d0b3320_BJB_arburb_not.jpg')}/>
        </div>
        </>
    );
}

export default Main;
