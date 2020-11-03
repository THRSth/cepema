import React from "react";
import CardVertical from "../../Componentes/Cards/CardVertical";

import "./index.css";

const Equipe  = () => {

    return (
        <>
            <div>
                <div className='containerTitleEquipe'>
                    Equipe
                </div>
                <div className='containerTextoEquipe'>
                Conheça nossa equipe que é composta por pessoas extremamente capacitadas, curiosas, dedicadas e com rico conhecimento sobre a área. 
                </div>
                <div className='containerCard'> 
                    <CardVertical 
                    img={require("../../assets/img/funcionarios/Osmar.jpg")}
                    title="Osmar"
                    descricao="teste teste"
                    />
                    <CardVertical 
                    img={require("../../assets/img/funcionarios/NomeFeminino.jpg")}
                    title="Nome"
                    descricao="teste teste"
                    />
                    <CardVertical 
                    img={require("../../assets/img/funcionarios/NomeMasculino.jpg")}
                    title="Nome Nome Sobrenome"
                    descricao="teste teste"
                    />
                </div>
            </div>
        </>
    );
}

export default Equipe;
