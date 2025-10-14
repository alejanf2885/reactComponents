import { Component } from "react";

export default class HijoDeporte extends Component {
    state = {
        favorito: ""
    }
    
    
    monstrarFavorito = () => {
        this.setState({
            favorito:this.props.deporte
        })
    }


    render() {
        return(
            <div>
                <h1>Deporte: {this.props.deporte}</h1>
                <h2>Su deporte favorito es: {this.state.favorito}</h2>
                <button onClick={this.monstrarFavorito}>
                    Monstrar favorito
                </button>
            </div>
        )
    }
}