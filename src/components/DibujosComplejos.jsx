import { Component } from "react";

export default class DibujosComplejos extends Component {
  dibujarNumeros = () => {
    let lista = [];
    for (let i = 0; i <= 7; i++) {
      let numero = parseInt(Math.random() * 100) + 1;
      lista.push(<li key={i}>{numero}</li>);
    }
    return lista;
  };

  render() {
    return (
      <div>
        <h1>Dibujos dinamicos React</h1>
        <ul>
            {this.dibujarNumeros()}
        </ul>
      </div>
    );
  }
}
