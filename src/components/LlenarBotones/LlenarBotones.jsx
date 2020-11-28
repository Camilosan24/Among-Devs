import React from "react";
import "../../styles/styleLlenarBotones.css";
import backNumbers from "../../img/backNumbers.png";
import taskCompleted from "../../sounds/taskCompleted.mp3";

class LlenarBotones extends React.Component {
	constructor(props) {
		super(props);
		this.bot1 = React.createRef();
		this.bot2 = React.createRef();
		this.bot3 = React.createRef();
		this.bot4 = React.createRef();
		this.bot5 = React.createRef();
		this.bot6 = React.createRef();
		this.bot7 = React.createRef();
		this.bot8 = React.createRef();
		this.bot9 = React.createRef();
		this.bot10 = React.createRef();
		this.global = 1;
		this.soundWin = new Audio(taskCompleted);

		this.lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		this.listaNueva = this.lista.sort(function () {
			return Math.random() - 0.5;
		});
	}


	componentDidMount() {
		this.bot1.current.value = this.listaNueva[0];
		this.bot2.current.value = this.listaNueva[1];
		this.bot3.current.value = this.listaNueva[2];
		this.bot4.current.value = this.listaNueva[3];
		this.bot5.current.value = this.listaNueva[4];
		this.bot6.current.value = this.listaNueva[5];
		this.bot7.current.value = this.listaNueva[6];
		this.bot8.current.value = this.listaNueva[7];
		this.bot9.current.value = this.listaNueva[8];
		this.bot10.current.value = this.listaNueva[9];
	}

	handleClick = (e) => {
		let objetivo = JSON.parse(e.target.value);
		if (objetivo === this.global) {
			e.target.style.backgroundColor = "green";
			if (this.global === 10) {
				this.soundWin.play();
				this.props.funcResult("win");
			} else{
				this.global++;
			}
		} else {
			e.target.style.backgroundColor = "red";
			this.props.funcResult("lose");
		}
	};

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
								<div className="col-12 contenedor">
									<div className="tareaBotones">
										<img src={backNumbers} width="670" height="500" alt="" />
										<div id="botones">
											<input
												type="button"
												name="boton7"
												id="siete"
												value=""
												ref={this.bot7}
												onClick={this.handleClick}
											/>
											<input
												type="button"
												name="boton4"
												id="cuatro"
												value=""
												ref={this.bot4}
												onClick={this.handleClick}
											/>
											<input
												type="button"
												name="boton10"
												id="diez"
												value=""
												ref={this.bot10}
												onClick={this.handleClick}
											/>
											<input
												type="button"
												name="boton3"
												id="tres"
												value=""
												ref={this.bot3}
												onClick={this.handleClick}
											/>
											<input
												type="button"
												name="boton5"
												id="cinco"
												value=""
												ref={this.bot5}
												onClick={this.handleClick}
											/>
											<br />
											<input
												type="button"
												name="boton1"
												id="uno"
												value=""
												ref={this.bot1}
												onClick={this.handleClick}
											/>
											<input
												type="button"
												name="boton6"
												id="seis"
												value=""
												ref={this.bot6}
												onClick={this.handleClick}
											/>
											<input
												type="button"
												name="boton8"
												id="ocho"
												value=""
												ref={this.bot8}
												onClick={this.handleClick}
											/>
											<input
												type="button"
												name="boton2"
												id="dos"
												value=""
												ref={this.bot2}
												onClick={this.handleClick}
											/>
											<input
												type="button"
												name="boton9"
												id="nueve"
												value=""
												ref={this.bot9}
												onClick={this.handleClick}
											/>
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
export default LlenarBotones;
