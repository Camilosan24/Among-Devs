import React from "react";
import "../../styles/divertpower.css";
import energiaSound from '../../../src/sounds/AudioEnergia.mp3';


class DivertPower extends React.Component {

	constructor(props) {
		super(props);
		this.canvas = React.createRef();
		this.state = {
			closeGame: false,
			activar: false,

		};

		this.energiaSound = new Audio(energiaSound);

		/*this.canvas = document.getElementById("electricidad");*/

		//wenas
		//se crea un objeto para asignar los valores del rectangulo

		this.energia = {
			posicionX: 0,
			posicionY: 40,
			ancho: 50,
			altura: 10
		}

		this.LIMITE_CARGA = 0;

		this.interval = null;
	}

	componentDidMount() {
		this.drawRectInCanvas();
	}

	drawRectInCanvas = () => {
		const ctx = this.canvas.current.getContext("2d");
		ctx.fillStyle = "rgb(0, 0,0)";
		ctx.fillRect(this.energia.posicionX, this.energia.posicionY, this.energia.ancho, this.energia.altura);

	};

	activaEnerg = () => {
		if (this.estaEnElLimite()) {
			this.props.funcResult("win");
			clearInterval(this.interval);
			this.interval = null;
		}

		this.energia.posicionY -= 0.1;
		this.energia.altura += 0.1;

		this.limpiar();
		this.llenarEnergia();
	}

	activarRectangulo = () => {
		this.energiaSound.play();
		//intervalo, permite hacer la ilucion de que se llena a un tiempo determinado
		console.log(this.interval);

		if (this.interval === null) {
			this.interval = setInterval(this.activaEnerg, 1);
		} else {
			clearInterval(this.interval);
		}
	};


	estaEnElLimite = () => {
		       //1                        //65
		return this.energia.posicionY <= this.LIMITE_CARGA;
	};

	limpiar = () => {
		const ctx = this.canvas.current.getContext("2d");
		ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};

	//pinta el bisho
	llenarEnergia = () => {
		//    poscisiones en x y ancho y alto
		const ctx = this.canvas.current.getContext("2d");
		ctx.fillStyle = "rgb(234, 234, 84)";
		ctx.fillRect(this.energia.posicionX, this.energia.posicionY, this.energia.ancho, this.energia.altura);
	};


	/**sonido animaciones */



	render() {
		return (
			<section className="hero-section overflow-hidden">
				<div className="hero-slider owl-carousel">
					<div className="hero-item set-bg d-flex align-items-center justify-content-center text-center">
						<div className="container">
							<div className="row contenido">
								<div className="col-6">
									<div className={this.state.closeGame ? "hide" : "task-container"}>
										<img
											alt="c-133"
											className="fondo"
											src="https://i.ibb.co/VWqHhb5/Fondo2-0.png"
										/>
										{/*imagen fondo juego*/}

										<div className="audios">
											<audio id="audioEnergia" controls>
												<source
													type="audio/wav"
													src="../sound/AudioEnergia.mpeg"
												/>
											</audio>

											<audio id="audioCierre" controls>
												<source
													type="audio/wav"
													src="../sound/AudioCierre.mpeg"
												/>
											</audio>
										</div>

										<div>
											<div>
												<a href="#none"
													className={this.state.botonDos ? "none" : ""}
												>
													<img
														id="boton2"
														className={this.state.activar ? "activarEnergiaBoton" : "hide"}
														src="https://i.ibb.co/qJX9gPM/Boton-Energia-preview-rev-2.png"
														width="60"
														height="60"
														alt="c-242"
													/>

												</a>
											</div>

											<div>
												<a href="#none"
													className={this.state.activar ? "hide" : ""}
													onClick={() => this.setState({ activar: true })}
												>

													<img
														id="activar"
														onClick={this.activarRectangulo}
														className="activarEnergia"
														src="https://i.ibb.co/s3Bdp4J/Boton.png"
														width="50"
														height="50"
														alt="c-34"
													/>{" "}
													{/*nos permite activar el juego y ocultar un boton*/}
												</a>
											</div>

											<canvas
												id="electricidad"
												ref={this.canvas}
												height="50"
												width="50"
											></canvas>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default DivertPower;
