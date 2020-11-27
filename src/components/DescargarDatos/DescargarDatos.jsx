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

    this.imagenBarra = new Image();
    this.imagenBarra.src = "../../img/barraM.png";

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
    let tempW = this.canvas.current.width;
    let tempH = this.canvas.current.height;
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, tempW, tempH);
  };

  miau = () => {
    if (this.estaEnElLimite()) {
      alert("Tarea completada");
      clearInterval(this.interval);
      this.setState({
        startGif:
          pantallazo,
      });
    }

    this.rect.ancho += 7;
    this.limpiarTablero();
    this.pintarRectangulo(this.rect);
    //this.pintarImagenDeFondo();
  }

  // pintarImagenDeFondo();
  moverBarra = () => {
    console.log(this.interval);
    if (this.interval === null) {
      this.interval = setInterval(this.miau, 100);
    } else {
      clearInterval(this.interval);
    }
  }

  estaEnElLimite = () => {
    return this.rect.ancho >= this.LIMITE_CARGA;
  }

  limpiarTablero = () => {
    const ctx = this.canvas.current.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  pintarRectangulo = ({ posX, posY, ancho, alto }) => {
    const ctx = this.canvas.current.getContext("2d");
    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.fillRect(posX, posY, ancho, alto);
  }

  //??
  pintarImagenDeFondo = () => {
    const ctx = this.canvas.current.getContext("2d");
    ctx.drawImage(this.imagenBarra, 0, 0, this.canvas.width, this.canvas.height);
  }

  handleClick = () => {
    this.setState({
      startGif:
        "https://media.giphy.com/media/tJrjQ5HzlOStHInsmw/giphy.gif",
    });
    this.moverBarra();
  }

  render() {
    return (


      <section
        className="hero-section overflow-hidden"
        onLoad={this.handleLoad}
      >
        <div className="hero-slider owl-carousel">
          <div className="hero-item set-bg d-flex align-items-center justify-content-center text-center">
            <div className="container">
              <div id="playZone"></div>
              <div className="row">
                <div className="col-6">


                  {/* <canvas id="game" height="400" width="600"></canvas> */}
                  <br />
                  <button id="butDow" onClick={this.handleClick}>
                    Download
                  </button>
                  <main>
                    <div className="carga">
                      <img
                        id="barra"
                        src={barraM}
                        width="600"
                        height="400"
                        alt="la barra de carga"
                      />
                    </div>
                    <div className="child">
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

                </div>
              </div>
            </div>
          </div>
        </div>

      </section >
    );
  }
}
export default DescargarDatos;
