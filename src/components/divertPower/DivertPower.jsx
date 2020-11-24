import React, {} from "react";
import "../../styles/divertpower.css";

class DivertPower extends React.Component {

    constructor(props) {
        super(props);

        this.canvas = React.createRef()                 
    
  
        /*this.canvas = document.getElementById("electricidad");*/
       
        
        //se crea un objeto para asignar los valores del rectangulo

        this.energia = {
            posicionX: 0,
            posicionY: 100,
            ancho: 50,
            altura: 20
        }

        this.activarEnergia = document.getElementById("activar");  //evento de click sobre un boton
        this.activarEnergia.addEventListener('click', this.activarRectangulo);

        this.LIMITE_CARGA = 65;

        this.interval = null;
    }
    
    componentDidMount() {
        this.drawRectInCanvas()
      }
    
      drawRectInCanvas(){
        const ctx = this.canvas.current.getContext('2d') 
        ctx.fillRect(5, 5, 200, 200)                     
      }

    //funciones

    activarRectangulo = () => {

        //intervalo, permite hacer la ilucion de que se llena a un tiempo determinado 

        if (this.interval === null) {
            this.interval = setInterval(function () {


                if (this.estaEnElLimite()) {
                    alert("Tarea completada");
                    clearInterval(this.interval);
                    this.interval = null;
                }

                this.energia.posicionY -= 0.4;
                this.energia.altura += 0.4;

                this.limpiar();
                this.lenarEnergia(this.energia);

            }, 1)
        }
        else {
            clearInterval(this.interval);
            this.interval = null;
        }
    }


    estaEnElLimite = () => {
        return this.energia.posicionY <= this.LIMITE_CARGA;
    }

    limpiar = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    llenarEnergia = () => {
        //    poscisiones en x y ancho y alto 
        this.ctx.fillRect(this.posicionX, this.posicionY, this.ancho, this.altura);
    }

    /**ocultar juego */

    cerrarJuego = () => {
        document.getElementById("divEnergia").style.display = 'none';
        this.sonidoCierre();
    }

    mostrarJuego = () => {
        document.getElementById("divEnergia").style.display = 'block';
        this.sonidoCierre();
    }

    botonDos = () => {
        document.getElementById("boton2").style.display = 'block';
        document.getElementById("activar").style.display = 'none';
        this.sonidoEnergia();
    }

    /**sonido animaciones */

    sonidoEnergia = () => {
        let audio = document.getElementById("audioEnergia");
        audio.play();
    }

    sonidoCierre = () => {
        let audio = document.getElementById("audioCierre");
        audio.play();
    }


    render() {
        return (
            <React.Fragment>
                <div className="botonAbrir">
                    <a onclick="mostrarJuego()">
                        <img src="https://i.ibb.co/YXb8nTY/Electricidad-Boton-Activadir.png" />
                    </a>
                </div>

                <div className="audios">
                    <audio id="audioEnergia" controls>
                        <source type="audio/wav" src="../sound/AudioEnergia.mpeg" />
                    </audio>

                    <audio id="audioCierre" controls>
                        <source type="audio/wav" src="../sound/AudioCierre.mpeg" />
                    </audio>
                </div>

                <div className="button-container" id="divEnergia">

                    <div className="botonCerrar">  {/*permite cerrar el juego una vez se ejecute*/}
                        <a onclick="cerrarJuego()">
                            <img src="https://i.ibb.co/wzMh2sv/Cerrar.png" />
                        </a>
                    </div>

                    <div class="fondoImagenDivert">
                        <img className="fondo" src="https://i.ibb.co/VWqHhb5/Fondo2-0.png" />     {/*imagen fondo juego*/}
                    </div>

                    <a onclick="botonDos()"><img id="activar" className="activarEnergia"
                        src="https://i.ibb.co/s3Bdp4J/Boton.png" />  {/*nos permite activar el juego y ocultar un boton*/}
                    </a>

                    <div>
                        <img id="boton2" className="activarEnergiaBoton" src="https://i.ibb.co/qJX9gPM/Boton-Energia-preview-rev-2.png" />
                    </div>

                    <canvas  id="electricidad" ref={this.canvas} height="200" width="50">
                    </canvas>
                </div>
            </React.Fragment>
        )
    }

}

export default DivertPower;









