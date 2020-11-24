import React from "react";
import "../../styles/PrimeShields.css";

class PrimeShields extends React.Component {

    constructor(props) {
        super(props);



    }

    cerrar = () =>{
        document.getElementById("divEscudos").style.display = 'none';
        this.sonidoCierre();
    }
    
    mostrar = () =>{
        document.getElementById("divEscudos").style.display = 'block';
        this.sonidoCierre();
    }
    
    
    /**Oculta los botones de los escudos */
    hexagono = () => {
        document.getElementById("Hexuno").style.display = 'none';
        this.sonidoEscudos();
    }
    
    hexagonoDos = () => {
        document.getElementById("Hexdos").style.display = 'none';
        this.sonidoEscudos();
    }
    
    hexagonoTres = () => {
        document.getElementById("Hextres").style.display = 'none';
        this.sonidoEscudos();
    }
    
    hexagonoCuatro = () => {
        document.getElementById("Hexcuatro").style.display = 'none';
        this.sonidoEscudos();
    }
    
    
    /**Sonido de las animaciones */
    sonidoEscudos = () => {
        let audio = document.getElementById("audioEscudos");
        audio.play();
    }
    
    sonidoCierre = () => {
        let audio = document.getElementById("audioCierre");
        audio.play();
    }


    render() {
        return (
            <React.Fragment>
                <div className="boton-abrir">
                    <a onclick="mostrar()">
                        <img src="https://i.ibb.co/kMD4Grp/Escudos.png" />
                    </a>
                </div>

                <div className="container-escudos" id="divEscudos">

                    <div className="boton-cerrar">
                        <a onclick="cerrar()">
                            <img src="https://i.ibb.co/wzMh2sv/Cerrar.png" />
                        </a>
                    </div>

                    <div className="shield">
                        <img src="https://i.ibb.co/ByzsJHT/Whats-App-Image-2020-11-07-at-8-40-12-PM.jpg" />
                    </div>

                    <div className="audios">

                        <audio id="audioEscudos" controls>
                            <source type="audio/wav" src="../sound/AudioBotonEscudos.mpeg" />
                        </audio>

                        <audio id="audioCierre" controls>
                            <source type="audio/wav" src="../sound/AudioCierre.mpeg" />
                        </audio>

                    </div>


                    <a id="Hexuno" className="Hexagono1" onclick="hexagono()">
                        <img src="https://i.ibb.co/bHQTrMx/Hexagono-3-0.png" />
                    </a>

                    <a id="Hexdos" className="Hexagono2" onclick="hexagonoDos()">
                        <img src="https://i.ibb.co/rwqddV7/Hexagono-prueba.png" />
                    </a>

                    <a id="Hextres" className="Hexagono3" onclick="hexagonoTres()">
                        <img src="https://i.ibb.co/T1QRx1T/Hexagono-2-0.png" />
                    </a>

                    <a id="Hexcuatro" className="Hexagono4" onclick="hexagonoCuatro()">
                        <img src="https://i.ibb.co/rM8xR3q/Hexagono-izquierdo.png" />
                    </a>

                </div>
            </React.Fragment>
        )
    }
}

export default PrimeShields;