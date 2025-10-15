import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

export default class PadreDeporte extends Component {

    deportes = ["Fútbol", "Baloncesto", "Tenis", "Natación", "Voleibol"]
   

    state = {
        deporteFavorito: ''
    }
    //Debemos tener un metodo que sera invocado por el hijo 
    //al pulsar sobre el boton seleccionar


    monstrarFavorito = (deporteSeleccionado) => {
        this.setState({
            deporteFavorito: deporteSeleccionado
        })
    }

    

    render() {
        return(
            <div>
                <h1>Padre deporte</h1>
                <h3 style={{backgroundColor:'gold'}}>Su deporte favorito es: {this.state.deporteFavorito}</h3>
                {this.deporteFavorito}
                {
                    this.deportes.map((deporte,i) => {
                        return(<HijoDeporte key={i} deporte={deporte} monstrarFavorito={this.monstrarFavorito}/>)
                    })
                }
            </div>
        )
    }

}