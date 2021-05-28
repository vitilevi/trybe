import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }

    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)

  }

  handleClick1() {
    console.log('Você clicou no botão 1');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  }

  handleClick2() {
    console.log('Você clicou no botão 2');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }

  handleClick3() {
    console.log('Você clicou no botão 3');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
  }

  render () {
    return (
      <div className="App">
        <button onClick={this.handleClick1}>Botão 1 foi clicado: {this.state.numeroDeCliques1}x</button>
        <button onClick={this.handleClick2}>Botão 2 foi clicado: {this.state.numeroDeCliques2}x</button>
        <button onClick={this.handleClick3}>Botão 3 foi clicado: {this.state.numeroDeCliques3}x</button>
      </div>
    )
  }  
}

export default App;
