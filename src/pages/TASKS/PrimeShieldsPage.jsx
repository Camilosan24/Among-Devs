import React from "react";
import PrimeShields from "../../components/primeShields/PrimeShields";
import WinZone from "../../components/esentials/WinZone";
import shieldBack from "../../img/shieldBack.png";
import abrir from "../../sounds/AudioEnergia.mp3";
import ChooseTask from "../../components/esentials/ChooseTask";
import openTask from "../../sounds/openTask.mp3";
import "../../styles/style.css";
class PrimeShieldsPage extends React.Component {
	constructor() {
		super();
		this.sound = new Audio(openTask);
		this.state = {
			startBox: false,
			winOrLoseZone: false,
		};
		this.sound = new Audio(abrir);
	}

	handleClick = () => {
		this.sound.play();
		this.setState({
			startBox: true,
		});
	};

	showTask = (option) => {
		this.sound.play();
		this.setState({
			startBox: option,
		});
	};

	audioPlay = () => {
		this.sound.play();
	};
	showResultZone = (result) => {
		this.setState({ winOrLoseZone: result });
	};

	render() {
		return (
			<React.Fragment>
				<div className="backgroundTaskDivert">
					{this.state.startBox ? "" : <img src={shieldBack} alt="" />}
					{!this.state.startBox && <div className="tasks">
						<ChooseTask name={"Mision Escudos"} value={true} showFunc={this.showTask} />
					</div>}
				</div>
				{this.state.startBox && (
					<PrimeShields funcResult={this.showResultZone} />
				)}
				{this.state.winOrLoseZone === "win" && <WinZone />}
			</React.Fragment>
		);
	}
}

export default PrimeShieldsPage;
