import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      idade: 0,
      sexo: '',
      check: false,
      file: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox'? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <legend>Preencha com seus dados</legend>
            <label>Nome:
              <input type="text" name="nome" onChange={ this.handleChange } />
            </label>

            <label>Idade: 
              <input type="number" name="idade" onChange={ this.handleChange } />
            </label>

            <label>Sexo:
              <select name="sexo" onChange={ this.handleChange }>
                <option value=""></option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </label>
          </fieldset>

          <label> Você concorda com os termos?
            <input name="check" type="checkbox" onChange={ this.handleChange } />
          </label>

          <label>
            <input name="file" type="file" onChange={ this.handleChange } />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
