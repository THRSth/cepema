import React from "react";
import "./styles.css";

const CardText = (props) => {
  return (
    <div className=" contaiinerCardText">
      <div className="col s12 card_content_container">
        <div className="card card_content_container">
          <div className="autorContainer">
            <img src={props.img} alt="" className="imgCircleContainer circle" />
            <p className="nomeSpan">{props.autor}</p>
          </div>

          <div className="card-content">
            <p>{props.descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardText;
