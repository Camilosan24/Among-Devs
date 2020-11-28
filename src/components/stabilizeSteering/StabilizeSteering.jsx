import React, { createRef } from "react";
import taskCompleted from "../../sounds/taskCompleted.mp3";
import Stabilize_Steerign from "../../img/Stabilize_Steering.png";
import puntero from "../../img/puntero.png";

class PrimeShields extends React.Component {
	constructor() {
		super();
		this.puntero = createRef();
		this.state = {
			x: 0,
			y:0,
			count: 3,
		};
		this.soundWin = new Audio(taskCompleted);
	}

	handleMouseMove = (e) => {
		this.setState({x: e.clientX, y: e.clientY})
		this.puntero.current.style.left = (this.state.x-730) +"px";
		this.puntero.current.style.top = (this.state.y-370) + "px";

		if((e.clientX >= 863 && e.clientX <= 869) && (e.clientY >= 464 && e.clientY <= 469)){
			this.soundWin.play();
			this.props.funcResult("win");
		}
	};

	render() {
		return (
			<section
				className="hero-section overflow-hidden"
				onMouseMove={this.handleMouseMove}
			>
				<div className="hero-slider owl-carousel">
					<div className="hero-item set-bg d-flex align-items-center justify-content-center text-center">
						<div className="container">
							<div id="playZone"></div>
							<div className="row">
								<div className="col-6 offset-3">
									<div className="task-space">
										<div className="target">
											<img
												src={Stabilize_Steerign}
												width="500"
												height="500"
												id="img"
												alt="c-1000"
											/>
										</div>
										<div className="puntero">
											<img
												ref={this.puntero}
												src={puntero}
												alt="c-1001"
												width="300"
												height="300"
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

export default PrimeShields;
