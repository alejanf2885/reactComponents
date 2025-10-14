import { Component } from "react";

export default class DibujosComplejosRender extends Component {
  //Declarar array en el state para actualizar el dibujo

  generarNombre = () => {
    this.state.nombres.push("Nuevo Nombre");
    this.setState({
      nombre: this.state.nombres,
    });
  };

  state = {
    nombres: [
      "Juan",
      "Ana",
      "Luis",
      "Maria",
      "Pedro",
      "Lucia",
      "Carlos",
      "Sofia",
    ],
  };

  render() {
    return (
      <div>
        <h1>Dibujos Complejos Render</h1>
        <ul>
          {this.state.nombres.map((nombre, i) => {
            return <li key={i}>{nombre}</li>;
          })}
        </ul>
        <button onClick={this.generarNombre}>Añadir nombre</button>
      </div>
    );
  }
  º;
}
