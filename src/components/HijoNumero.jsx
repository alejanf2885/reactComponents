import { Component } from "react";

export default class HijoNumero extends Component {


    

    sumarNumero = () => {
        this.props.sumaTotal(this.props.numero);
       
    }


    render(){
        return(
            <div>
                <h1>Numero: {this.props.numero}</h1>
                <button className="btn" onClick={this.sumarNumero}>Sumar</button>
            </div>
        )
    }
}