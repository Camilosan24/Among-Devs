import React from "react";
import DivertPower from "../../components/divertPower/DivertPower";
import "../../styles/style.css";
import "../../styles/divertpower.css";
import fondoEnergia from "../../img/ElectricidadFondo.png";
import soundDivertPower from "../../sounds/AudioCierre.mpeg";


class DivertPowerPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			startBox: false,
			startPlaying: false,
			winOrLoseZone: false
		};
		this.sound = new Audio(soundDivertPower)
	}


	audioPlay = ()=>{
		this.sound.play()
	}
	handleClick= () => {
		this.audioPlay()
		this.setState({
			startBox: true
		})
	}

	hideButtonStart = (params)=>{
		this.setState({startPlaying: params})
	}

	showResultZone = (result)=>{
		this.setState({winOrLoseZone: result})
	}
	render() {
		return (

			<div id="background">
				<div className="backgroundTaskDivert">
					{this.state.startBox ? "" : <img src={fondoEnergia} alt="" />}
					<div className="chooseTask">
						<span className="text-light" onClick={this.handleClick}>
							Mision Electricidad
						</span>
					</div>
				</div>

				<div className="task">
					<DivertPower />
				</div>
			</div>
		);
	}
}

export default DivertPowerPage;
