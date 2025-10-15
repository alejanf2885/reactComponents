import { Component } from "react";
import HijoNumero from "./HijoNumero";
import "./style.css";
export default class PadreNumero extends Component {
  state = {
    suma: 0,
    numeros: [],
  };

  sumaTotal = (numHijo) => {
    console.log("entro");
    this.setState({
      suma: this.state.suma + numHijo,
    });
  };

  generarNumero = () => {
    let numRam = parseInt(Math.random() * 51);
    this.setState({
      numeros: [...this.state.numeros, numRam],
    });
  };

  componentDidMount() {
    let numNuevos = []
    for (let i = 0; i < 4; i++) {
      let numRam = Math.floor(Math.random() * 51);
      numNuevos.push(numRam);
      
    }
    this.setState({numeros: numNuevos})
  }

  render() {
    return (
      <div>
        <h1>Padre números</h1>
        <h3 style={{ backgroundColor: "gold" }}>
          La suma es {this.state.suma}
        </h3>
        <button className="btn" onClick={this.generarNumero}>
          Generar numero
        </button>

        {this.state.numeros.map((num, i) => {
          return (
            <HijoNumero
              key={i}
              numero={this.state.numeros[i]}
              sumaTotal={this.sumaTotal}
            />
          );
        })}
      </div>
    );
  }
}
