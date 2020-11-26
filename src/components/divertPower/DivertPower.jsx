import React from "react";
import "../../styles/divertpower.css";


class DivertPower extends React.Component {
	constructor(props) {
		super(props);
		this.canvas = React.createRef();
		this.state = {
			closeGame: false,
			botonDos: false
		};

		/*this.canvas = document.getElementById("electricidad");*/

		//se crea un objeto para asignar los valores del rectangulo

		this.energia = {
			posicionX: 0,
			posicionY: 100,
			ancho: 50,
			altura: 20,
		};

		this.LIMITE_CARGA = 65;

		this.interval = null;
	}

	componentDidMount() {
		this.drawRectInCanvas();
	}

	drawRectInCanvas = () => {
		const ctx = this.canvas.current.getContext("2d");
		ctx.fillRect(5, 5, 200, 200);
		ctx.fillStyle = "#77EF0C";
	};

	//funciones

	activarRectangulo = () => {
		//intervalo, permite hacer la ilucion de que se llena a un tiempo determinado

		if (this.interval === null) {
			this.interval = setInterval(function () {
				if (this.estaEnElLimite) {
					alert("Tarea completada");
					clearInterval(this.interval);
					this.interval = null;
				}

				this.energia.posicionY -= 0.4;
				this.energia.altura += 0.4;

				this.limpiar();
				this.llenarEnergia();
			}, 1);
		} else {
			clearInterval(this.interval);
		}
	};
 
 
	estaEnElLimite = () => {
		return this.energia.posicionY <= this.LIMITE_CARGA;
	};

	limpiar = () => {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};

	llenarEnergia = () => {
		//    poscisiones en x y ancho y alto
		this.ctx.fillRect(this.posicionX, this.posicionY, this.ancho, this.altura);
	};

	/**ocultar juego */

	botonDos = () => {
		if (this.botonDos === true) {
			this.style.display = "block";
		}
	
	};

	/**sonido animaciones */

	sonidoEnergia = () => {
		let audio = document.getElementById("audioEnergia");
		audio.play();
	};

	sonidoCierre = () => {
		let audio = document.getElementById("audioCierre");
		audio.play();
	};

	render() {
		return (
			<section className="hero-section overflow-hidden">
				<div className="hero-slider owl-carousel">
					<div className="hero-item set-bg d-flex align-items-center justify-content-center text-center">
						<div className="container">
							<div className="row contenido">
								<div className="col-6">
									<div className="task-container" className={this.state.closeGame ? "hide" : ""}>
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

										<div
											className={this.state.closeGame ? "hide" : ""}
											id="divEnergia"
										>
											<div className="botonCerrar">
												{" "}
												{/*permite cerrar el juego una vez se ejecute*/}
												<a
													href="#none"
													onClick={() => this.setState({ closeGame: true })}
												>
													<img
														src="https://i.ibb.co/wzMh2sv/Cerrar.png"
														alt="c-231"
													/>
												</a>
											</div>

											<div className="buttons">
												<a href="#hide" onClick={this.botonDos}>
													<img
														id="boton2"
														className="activarEnergiaBoton"
														src="https://i.ibb.co/qJX9gPM/Boton-Energia-preview-rev-2.png"
														width="60"
														height="60"
														alt="c-242"
													/>
												</a>
												<a href="#none" onClick={this.activar}>
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
												height="200"
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
