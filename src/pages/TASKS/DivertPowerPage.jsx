import React from "react";
import DivertPower from "../../components/divertPower/DivertPower";
import "../../styles/style.css";
import "../../styles/divertpower.css";
import fondoEnergia from "../../img/ElectricidadFondo.png";
import ChooseTask from '../../components/esentials/ChooseTask'
import WinZone from "../../components/esentials/WinZone";
import openTask from "../../sounds/openTask.mp3";

class DivertPowerPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startBox: false,
			startPlaying: false,
			winOrLoseZone: false,
		};
		this.sound = new Audio(openTask);
	}

	audioPlay = () => {
		this.sound.play();
	};
	handleClick = () => {
		this.audioPlay();
		this.setState({
			startBox: true,
		});
	};

	showTask = (option) => {
		this.audioPlay()
		this.setState({
			startBox: option,
		});
	};

	hideButtonStart = (params) => {
		this.setState({ startPlaying: params });
	};

	showResultZone = (result) => {
		this.setState({ winOrLoseZone: result });
	};
	render() {
		return (
			<React.Fragment>
				<div className="backgroundTaskDivert">
					{this.state.startBox ? "" : <img src={fondoEnergia} alt="" />}
					{!this.state.startBox && <div className="tasks">
						<ChooseTask name={"Mision Calibracion"} value={true} showFunc={this.showTask} />
					</div>}
				</div>
				{this.state.startBox && (
					<DivertPower funcResult={this.showResultZone} />
				)}
				{this.state.winOrLoseZone === "win" && <WinZone />}
			</React.Fragment>
		);
	}
}

export default DivertPowerPage;
