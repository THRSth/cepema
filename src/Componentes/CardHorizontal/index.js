import React from "react";
import './index.css';

const CardHorizontal = (props) => {

    return (
        <div className=" card containerCardHorizontal ">
                <div>
                    <img className="containerFotoHrizontal" src={props.img}/>
                </div>

                <div className='card-content conatinerTextHorizontal'>
                    <div class="cardTitle ">
                        {props.title}
                    </div>
                   

                    <div className="card-content">
                        <p>{props.descricao}</p>
                    </div>

                </div>
        </div>
    );
}

export default CardHorizontal;
