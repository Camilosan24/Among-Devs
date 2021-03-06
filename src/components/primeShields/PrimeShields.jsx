import React from "react";
import "../../styles/PrimeShields.css";
import taskCompleted from '../../sounds/taskCompleted.mp3'
import shieldPress from '../../sounds/AudioBotonEscudos.mp3'

class PrimeShields extends React.Component {
	constructor(){
		super()
		this.state = {
			count: 3,
		};
		this.sound = new Audio(taskCompleted);
		this.shieldPress = new Audio(shieldPress);
	}


	handleCLick = (e) => {
		this.shieldPress.play()
		e.target.parentElement.style.display = "none";
		this.setState({ count: this.state.count - 1 });
		console.log(this.state.count);
		if (this.state.count === 0) {
			this.sound.play()
			this.props.funcResult("win");
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
									<div className="shieldBox">
										<img
											src="https://i.ibb.co/ByzsJHT/Whats-App-Image-2020-11-07-at-8-40-12-PM.jpg"
											alt="c-546"
										/>
									</div>

									<div className="audios">
										<audio id="audioEscudos" controls>
											<source
												type="audio/wav"
												src="../sound/AudioBotonEscudos.mpeg"
											/>
										</audio>

										<audio id="audioCierre" controls>
											<source
												type="audio/wav"
												src="../sound/AudioCierre.mpeg"
											/>
										</audio>
									</div>

									<a
										href="#none"
										id="Hexuno"
										className="Hexagono1"
										onClick={this.handleCLick}
									>
										<img
											src="https://i.ibb.co/bHQTrMx/Hexagono-3-0.png"
											alt="c-521"
										/>
									</a>

									<a
										href="#none"
										id="Hexdos"
										className="Hexagono2"
										onClick={this.handleCLick}
									>
										<img
											src="https://i.ibb.co/rwqddV7/Hexagono-prueba.png"
											alt="c-522"
										/>
									</a>

									<a
										href="#none"
										id="Hextres"
										className="Hexagono3"
										onClick={this.handleCLick}
									>
										<img
											src="https://i.ibb.co/T1QRx1T/Hexagono-2-0.png"
											alt="c-523"
										/>
									</a>

									<a
										href="#none"
										id="Hexcuatro"
										className="Hexagono4"
										onClick={this.handleCLick}
									>
										<img
											src="https://i.ibb.co/rM8xR3q/Hexagono-izquierdo.png"
											alt="c-524"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default PrimeShields;
