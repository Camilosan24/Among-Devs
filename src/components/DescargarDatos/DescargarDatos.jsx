import React from "react";
import "../../styles/styleDescargar.css";
import barraM from "../../img/barraM.png";
import pantallazo from "../../img/pantallazo.png";

class DescargarDatos extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.LIMITE_CARGA = 355;
    this.interval = null;

    this.rect = {
      posX: 85,
      posY: 240,
      ancho: 10,
      alto: 30,
    };
  }
  state = {
    startGif: pantallazo,
  };


  componentDidMount() {
    this.drawRectInCanvas();
  }

  drawRectInCanvas = () => {
    const ctx = this.canvas.current.getContext("2d");
    ctx.fillRect(5, 5, 200, 200);
    ctx.fillStyle = "rgb(34, 143, 25)";
  };






  // pintarImagenDeFondo();



  moverBarra = () => {
    if (this.interval === null) {
      this.interval = this.setInterval(function () {
        if (this.estaEnElLimite()) {
          alert("Tarea completada");
          this.gif.src = "./pantallazo.png";
          clearInterval(this.interval);
          this.interval = null;
        }

        this.rect.ancho += 7;
        this.limpiarTablero();
        this.pintarRectangulo(this.rect);
        this.pintarImagenDeFondo();
      }, 100);

    } else {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  estaEnElLimite = () => {

    return this.rect.ancho >= this.LIMITE_CARGA;
  }
  limpiarTablero = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  pintarRectangulo = ({ posX, posY, ancho, alto }) => {
    this.ctx.fillRect(posX, posY, ancho, alto);
  }
  pintarImagenDeFondo = () => {
    this.ctx.drawImage(this.imagenBarra, 0, 0, this.canvas.width, this.canvas.height);
  }








  render() {
    return (
      <React.Fragment>
        <canvas id="game" height="400" width="600"></canvas>
        <br />
        <button
          id="butDow"
          onClick={() =>

            this.setState({
              startGif:
                "https://media.giphy.com/media/tJrjQ5HzlOStHInsmw/giphy.gif",
            }), this.moverBarra


          }
        >
          Download
      </button>
        <main>
          <div class="carga">
            <img
              id="barra"
              src={barraM}
              width="600"
              height="400"
              alt="la barra de carga"
            />
          </div>
          <div class="child">
            <img
              id="gif"
              src={this.state.startGif}
              width="500"
              height="200"
              alt="El gif"
            />
          </div>
        </main>
        <canvas id="game" ref={this.canvas} height="400" width="600"></canvas>
        <br />
      </React.Fragment>
    );
  }
}
export default DescargarDatos;
