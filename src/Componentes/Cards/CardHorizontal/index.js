import React from "react";
import "./styles.css";

const CardHorizontal = ({ img, title, descricao }) => {
  return (
    <div className=" card containerCardHorizontal ">
      <div>
        <img className="containerFotoHrizontal" src={img} alt="" />
      </div>

      <div className="card-content conatinerTextHorizontal">
        <div className="cardTitleHorizontal ">{title}</div>

        <div className="card-content">
          <p>{descricao}</p>
        </div>
        <div className='dempster'>
          <a href className='titleDempster'>Laboratorio:</a> <a href="https://sites.usp.br/dempsterlab/">DEMPSTER</a>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
