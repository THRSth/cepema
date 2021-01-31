import React, { useReducer } from "react";
import "./index.css";

const inicialState = {
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
};
const reducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload.value };
};

const Contato = () => {
  const [state, dispatch] = useReducer(reducer, inicialState);


  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: { value } });
  };

  const validarCampos = () => {
    let valido = true;
    Object.keys(state).forEach((prop) => {
      if (!state[prop] && prop !== "telefone") {
        alert(`O campo ${prop} deve ser preenchido.`);
        valido = false;
      }
    });
    return valido;
  };

  const montarStringEmail = () => {
    const email = 'cepema@poli.usp.br';
    const assunto = 'Entrando em contato com o CEPEMA'
    const Body = `Nome: ${state.nome}%0D${state.telefone? `Telefone: ${state.telefone}%0D`: ''}Email: ${state.email}%0DMensagem: ${state.mensagem}`
   
    return `mailto:${email}?Subject=${assunto}&Body=${Body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarCampos()) window.location.href = montarStringEmail();
  };

  return (
    <>
      <div className="container-conteudo-page">
        <h1>Entre em contato</h1>
        <form className="container" onSubmit={handleSubmit}>
          <div className="input-field col s6">
            <input
              id="nome"
              className="validate"
              type="text"
              name="nome"
              value={state.name}
              onChange={handleChange}
            />
            <label htmlFor="nome">Nome:</label>
          </div>

          <div className="input-field col s6">
            <input
              id="email"
              className="validate"
              type="text"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <label htmlFor="email">E-mail:</label>
          </div>

          <div className="input-field col s6">
            <input
              id="telefone"
              className="validate"
              type="text"
              name="telefone"
              value={state.telefone}
              onChange={handleChange}
            />
            <label htmlFor="telefone">Telefone: </label>
          </div>

          <div className="input-field col s12">
            <textarea
              id="mensagem"
              className="materialize-textarea"
              name="mensagem"
              value={state.mensagem}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="mensagem">Mensagem</label>
          </div>

          <button
            className="btn waves-effect waves-light btnContato"
            type="submit"
            name="action"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Contato;
