import React from "react";
import "../../styles/styleDescargar.css";
import barraM from "../../img/barraM.png";
import pantallazo from "../../img/pantallazo.png";

class DescargarDatos extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();

  }
  state = {
    startGif: pantallazo,
    //   this.LIMITE_CARGA: 355,
    //   rect: {
    //     posX: 85,
    // //     posY: 240,
    // //     ancho: 10,  
    // //     alto: 30,
    // //   },
    //   interval: null,
  };

  componentDidMount() {
    this.drawRectInCanvas();
  }

  drawRectInCanvas = () => {
    const ctx = this.canvas.current.getContext("2d");
    ctx.fillRect(5, 5, 200, 200);
    ctx.fillStyle = "rgb(34, 143, 25)";
  };

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
            })
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
      </React.Fragment>
    );
  }
}

export default DescargarDatos;
