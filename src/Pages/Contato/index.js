import React from "react";
import "./index.css";

const Contato = () => {
    return (
       <>
       <div className="containerContato">
           <form className="col s12">
            <div className="input-field col s6">
                <input id="name"  className="validate" type="text" name="name" />
            <label htmlFor="first_name">Nome:</label>
            </div>

            <div className="input-field col s6">
                <input id="name"  className="validate" type="text" name="name" />
            <label htmlFor="first_name">E-mail:</label>
            </div>

            <div className="input-field col s6">
                <input id="name"  className="validate" type="text" name="name" />
            <label htmlFor="first_name">Tel fixo:</label>
            </div>

            <div className="input-field col s6">
                <input id="name"  className="validate" type="text" name="name" />
            <label htmlFor="first_name">Tel cel:</label>
            </div>
            
            <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">Mensagem</label>
        </div>

                <button className="btn waves-effect waves-light btnContato" type="submit" name="action">Enviar</button>
            </form>
       </div>
       </>
    );
}

export default Contato;