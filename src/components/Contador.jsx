import { Component } from "react";


//Se puede declarar metodos fuera de la clase
//Dichos metodos no pueden utilizar nada del component

function metodoAbsurdo() {
    console.log('HOLA')
}

class Contador extends Component {
  
    numero = 1
  incrementarNumero = () => {
    this.numero++;
    console.log("Valor de número: " + this.numero);
  };

  state = {
    valor: parseInt(this.props.inicio)
  }

  incrementarValor = () => {
    this.setState({
        valor: this.state.valor + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Ejemplo contador JSX {this.props.inicio}</h1>


        <button onClick={this.incrementarValor}>Incrementar valor</button>

        <button onClick={this.incrementarNumero}>Incrementar número</button>

        <button onClick={() => {

            metodoAbsurdo();
            this.incrementarNumero();

        }}>Metodo absurdo</button>

        <p>{this.valor}</p>
      </div>
    );
  }
}
export default Contador;