import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

export default class PadreDeporte extends Component {

    deportes = ["Fútbol", "Baloncesto", "Tenis", "Natación", "Voleibol"]
   

    state = {
        deporteFavorito: ''
    }

    

    render() {
        return(
            <div>
                <h1>Padre deporte</h1>
                {this.deporteFavorito}
                {
                    this.deportes.map((deporte,i) => {
                        return(<HijoDeporte key={i} deporte={deporte}/>)
                    })
                }
            </div>
        )
    }

}