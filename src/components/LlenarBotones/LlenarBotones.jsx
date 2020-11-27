import React from "react";
import "../../styles/styleLlenarBotones.css";

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

		this.state = {
			global: 1,
		};
	}

	handleClick = (e) => {
		let objetivo = JSON.parse(e.target.value);
		if (objetivo === this.state.global) {
			e.target.style.backgroundColor = "green";
			this.setState({ global: this.state.global + 1 });
		} else {
			e.target.style.backgroundColor = "red";
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
								<div className="col-6">
									<div id="botones">
										<input
											type="button"
											name="boton7"
											id="siete"
											value="7"
											ref={this.bot7}
											onClick={this.handleClick}
										/>
										<input
											type="button"
											name="boton4"
											id="cuatro"
											value="4"
											ref={this.bot4}
											onClick={this.handleClick}
										/>
										<input
											type="button"
											name="boton10"
											id="diez"
											value="10"
											ref={this.bot10}
											onClick={this.handleClick}
										/>
										<input
											type="button"
											name="boton3"
											id="tres"
											value="3"
											ref={this.bot3}
											onClick={this.handleClick}
										/>
										<input
											type="button"
											name="boton5"
											id="cinco"
											value="5"
											ref={this.bot5}
											onClick={this.handleClick}
										/>
										<br />
										<input
											type="button"
											name="boton1"
											id="uno"
											value="1"
											ref={this.bot1}
											onClick={this.handleClick}
										/>
										<input
											type="button"
											name="boton6"
											id="seis"
											value="6"
											ref={this.bot7}
											onClick={this.handleClick}
										/>
										<input
											type="button"
											name="boton8"
											id="ocho"
											value="8"
											ref={this.bot8}
											onClick={this.handleClick}
										/>
										<input
											type="button"
											name="boton2"
											id="dos"
											value="2"
											ref={this.bot2}
											onClick={this.handleClick}
										/>
										<input
											type="button"
											name="boton9"
											id="nueve"
											value="9"
											ref={this.bot9}
											onClick={this.handleClick}
										/>
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
