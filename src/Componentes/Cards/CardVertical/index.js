import React from "react";
import "./index.css";

const CardVertical = (props) => {
  return (
    <div className=" contaiinerCard">
      <div className="col s12 m7 contaiinerCard">
        <div className="card contaiinerCard">
          <div className="card-image contaiinerCard">
            <img className="imgContainer" src={props.img} alt="" />
          </div>

          <div class=" cardTitle">{props.title}</div>

          <div className="card-content contaiinerCard">
            <p>{props.descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVertical;
