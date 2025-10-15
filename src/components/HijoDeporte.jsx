import { Component } from "react";

export default class HijoDeporte extends Component {
    

    seleccionarFavorito = () => {
        let deporteFav = this.props.deporte;
        this.props.monstrarFavorito(deporteFav);

    }


    render() {
        return(
            <div>
                <h1>Deporte: {this.props.deporte}</h1>
                <button onClick={this.seleccionarFavorito}>
                    Monstrar favorito
                </button>
            </div>
        )
    }
}