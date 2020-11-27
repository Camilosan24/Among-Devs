import React from "react";
import PrimeShields from "../../components/primeShields/PrimeShields";
<<<<<<< HEAD
import WinZone from "../../components/esentials/WinZone";
import shieldBack from "../../img/shieldBack.png";
import abrir from "../../sounds/AudioEnergia.mp3";
import ChooseTask from "../../components/esentials/ChooseTask";
import "../../styles/style.css";
class PrimeShieldsPage extends React.Component {
	constructor() {
		super();
=======
import WinZone from '../../components/esentials/WinZone';
import shieldBack from '../../img/shieldBack.png';
import abrir from '../../sounds/AudioEnergia.mp3';
class PrimeShieldsPage extends React.Component {

	constructor() {
		super()
>>>>>>> b0828c90d10728eb6103550427512a86546c0e99
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

<<<<<<< HEAD
	showTask = (option) => {
		this.setState({
			startBox: option,
		});
	};
	showResultZone = (result) => {
		this.setState({ winOrLoseZone: result });
	};
=======
	showResultZone = (result) => {
		this.setState({ winOrLoseZone: result })
	}
>>>>>>> b0828c90d10728eb6103550427512a86546c0e99

	render() {
		return (
			<React.Fragment>
				<div className="backgroundTaskDivert">
					{this.state.startBox ? "" : <img src={shieldBack} alt="" />}
					<div className="tasks">
						<ChooseTask name={"Mision Calibracion"} value={true} showFunc={this.showTask} />
					</div>
<<<<<<< HEAD
				</div>
				{this.state.startBox && (
					<PrimeShields funcResult={this.showResultZone} />
				)}
				{this.state.winOrLoseZone === "win" && <WinZone />}
			</React.Fragment>
=======
					{this.state.startBox && <PrimeShields funcResult={this.showResultZone} />}
					{this.state.winOrLoseZone === 'win' && <WinZone />}
				</React.Fragment>
			</div>
>>>>>>> b0828c90d10728eb6103550427512a86546c0e99
		);
	}
}

export default PrimeShieldsPage;
