import React from "react";
import CardVertical from "../../Componentes/Cards/CardVertical";

import "./index.css";

const Equipe  = () => {

    return (
        <>
            <div className='containerCard'> 
                <CardVertical 
                img={require("../../assets/img/funcionarios/Osmar.jpg")}
                title="Osmar"
                descricao="teste teste"
                />
                <CardVertical 
                img={require("../../assets/img/funcionarios/NomeFeminino.jpg")}
                title="Osmar"
                descricao="teste teste"
                />
                <CardVertical 
                img={require("../../assets/img/funcionarios/NomeMasculino.jpg")}
                title="Osmar"
                descricao="teste teste"
                />
            </div>
        </>
    );
}

export default Equipe;
