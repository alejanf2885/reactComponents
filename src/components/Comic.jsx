import { Component } from "react";

export default class Comic extends Component {

    //Una forma
    seleccionarFav = () => {
        console.log('entro')
        this.props.selecionarFavorito(this.props.comic);

    }
    //La otra con lambda


    render() {
        return(
            <div className="card">
                <h1>{this.props.comic.titulo}</h1>
                <h3>{this.props.comic.descripcion}</h3>
                <img src={this.props.comic.imagen} style={{width: '200px', height:'300px'}} alt="" />
                <button  className="btn" onClick={() => {
                    this.props.selecionarFavorito(this.props.comic);
                }}>Añadir a favorito</button>

                <button  className="btn" onClick={() => {
                    this.props.eliminarComic(this.props.comic);
                }}>Eliminar</button>
            </div>
        )
    }
}