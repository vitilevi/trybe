import React, { Component } from 'react'

 class Response extends Component {
  render() {
    const { info } = this.props;
    const entries = Object.entries(info);

    return (
      <div className="response">
        <fieldset>
          <legend>Resumo de respostas</legend>
          {entries.filter(ele => !ele[0].includes('response')).map((el, i) => <p key={i}>{`${el[0]}: ${el[1]}`}</p>)}
        </fieldset>
      </div>
    )
  }
}

export default Response;
