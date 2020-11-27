import React from "react";
import "../../styles/styleLlenarBotones.css";
import imagenTablero from "../../img/numeros_preview_rev_2.png";


class LlenarBotones extends React.Component {
    constructor(props) {
        super(props);
        this.bot1 = React.createRef()
        this.bot2 = React.createRef()
        this.bot3 = React.createRef()
        this.bot4 = React.createRef()
        this.bot5 = React.createRef()
        this.bot6 = React.createRef()
        this.bot7 = React.createRef()
        this.bot8 = React.createRef()
        this.bot9 = React.createRef()
        this.bot10 = React.createRef()

        this.lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.listaNueva = lista.sort(function () { return Math.random() - 0.5 });
        for (var i = 0; i < listaNueva.length; i++) {
            botUno.value = listaNueva[0]
            botDos.value = listaNueva[1]
            botTres.value = listaNueva[2]
            botCuatro.value = listaNueva[3]
            botCinco.value = listaNueva[4]
            botSeis.value = listaNueva[5]
            botSiete.value = listaNueva[6]
            botOcho.value = listaNueva[7]
            botNueve.value = listaNueva[8]
            botDiez.value = listaNueva[9]

            this.state = {
                global: 1
            }
        }





    }

    handleClick = (e) => {
        let objetivo = JSON.parse(e.target.value)
        if (objetivo === this.state.global) {
            e.target.style.backgroundColor = "green"
            this.setState({ global: this.state.global + 1 })
        } else {
            e.target.style.backgroundColor = "red"
        }
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
                                    <main>
                                        <div className="imagen">
                                            <img id="imagenTablero" src={imagenTablero} height="600" width="1400" alt="imagenTablero" />
                                        </div>

                                        <div className="container" >
                                            <div id="botones">
                                                <input type='button' name='boton7' id="siete" value='' ref={this.bot7} onClick={this.handleClick} />
                                                <input type='button' name='boton4' id="cuatro" value='' ref={this.bot4} onClick={this.handleClick} />
                                                <input type='button' name='boton10' id="diez" value='' ref={this.bot10} onClick={this.handleClick} />
                                                <input type='button' name='boton3' id="tres" value='' ref={this.bot3} onClick={this.handleClick} />
                                                <input type='button' name='boton5' id="cinco" value='' ref={this.bot5} onClick={this.handleClick} /><br />
                                                <input type='button' name='boton1' id="uno" value='' ref={this.bot1} onClick={this.handleClick} />
                                                <input type='button' name='boton6' id="seis" value='' ref={this.bot7} onClick={this.handleClick} />
                                                <input type='button' name='boton8' id="ocho" value='' ref={this.bot8} onClick={this.handleClick} />
                                                <input type='button' name='boton2' id="dos" value='' ref={this.bot2} onClick={this.handleClick} />
                                                <input type='button' name='boton9' id="nueve" value='' ref={this.bot9} onClick={this.handleClick} />
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}
export default LlenarBotones;
