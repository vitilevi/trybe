import React, { Component } from 'react'
import Response from './Response.jsx'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      response: []
    });
    this.handleChange = this.handleChange.bind(this);
    this.toUpperCase = this.toUpperCase.bind(this);
    this.createResponse = this.createResponse.bind(this);
    this.resetResponse = this.resetResponse.bind(this);
    this.initialState = { ...this.state };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  toUpperCase({ target }) {
    target.value = target.value.toUpperCase()
    this.setState({
      nome: target.value,
    });
  }

  createResponse(ev) {
    ev.preventDefault();
    this.setState({
      response: <Response info={ this.state } />,
    });
  }

  resetResponse() {
    this.setState(() => this.initialState);
  }

  render() {
    return (
      <div className="forms">
        <form>
          <fieldset className="dados">
            <legend>Insira seus dados</legend>
            <label>Nome: 
              <input name="nome" maxLength="40" type="text" onChange={ this.handleChange } onKeyUp={ this.toUpperCase } required />
            </label>

            <label>Email: 
              <input name="email" maxLength="50" type="email" onChange={ this.handleChange } required />
            </label>

            <label>CPF: 
              <input name="cpf" maxLength="11" type="number" onChange={ this.handleChange } required />
            </label>

            <label>Endereço: 
              <input name="endereco" maxLength="200" type="text" onChange={ this.handleChange } required />
            </label>

            <label>Cidade: 
              <input name="cidade" maxLength="28" type="text" onChange={ this.handleChange } required />
            </label>

            <label>Estado: 
              <input name="estado" maxLength="40" type="text" onChange={ this.handleChange } required />
            </label>

            <label>Tipo: 
              <input id="casa" name="casa" type="radio" value="Casa" onChange={ this.handleChange } required />
              <label htmlFor="casa">Casa</label>
              <input id="apartamento" name="casa" type="radio" value="Apartamento" onChange={ this.handleChange } required />
              <label htmlFor="apartamento">Apartamento</label>
            </label>
          </fieldset>

          <fieldset className="curriculo">
            <legend>Ultimo emprego</legend>            
            <label htmlFor="resumo">Resumo do currículo: </label>
            <textarea name="resumo" id="resumo" maxLength="1000" onChange={ this.handleChange } required />

            <label>Cargo: 
              <input name="cargo" maxLength="40" type="text" onChange={ this.handleChange } required />
            </label>

            <label htmlFor="descricao">Descrição do cargo: </label>
            <textarea name="descricao" id="descricao" maxLength="500" onChange={ this.handleChange } required />

          </fieldset>
          <button onClick={ this.createResponse }>Enviar</button>
          <button type="reset" onClick={ this.resetResponse }>Limpar</button>
        </form>
          <div className="response">{ this.state.response }</div>
      </div>
    )
  }
}


export default App;
