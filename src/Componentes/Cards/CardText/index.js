import React from "react";
import './index.css';


const CardText = (props) => {

    return (
        <div className=" contaiinerCardText">
            <div className="col s12 m7 contaiinerCard">
                <div className="card contaiinerCard">

                    <div className=" cardTitleText">
                        {props.title}
                    </div>
                   
                    <div className='autorContainer'>
                    <img src={props.img} alt="" className="imgCircleContainer circle" />
                    <p className="nomeSpan">{props.autor}</p>
                    </div>

                    <div className="card-content contaiinerCard">
                        <p>{props.descricao}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default CardText;
