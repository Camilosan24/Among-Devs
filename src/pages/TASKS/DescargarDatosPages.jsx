import React from "react";
import DescargarDatos from "../../components/DescargarDatos/DescargarDatos";
import WinZone from "../../components/esentials/WinZone";
import ChooseTask from '../../components/esentials/ChooseTask'
import backDownload from "../../img/backDownload.png";
import openTask from "../../sounds/openTask.mp3";

class DescargarDatosPages extends React.Component {
	constructor() {
		super();
		this.sound = new Audio(openTask);
		this.state = {
			startBox: false,
			winOrLoseZone: false,
		};
	}

	handleClick = () => {
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

	audioPlay = () => {

		this.sound.play();
	};

	showResultZone = (result) => {
		this.setState({ winOrLoseZone: result });
	};
	render() {
		return (
			<div className="task">
				<div className="backgroundTaskDivert">
					{this.state.startBox ? "" : <img src={backDownload} alt="" />}
					{!this.state.startBox && <div className="tasks">
						<ChooseTask name={"Mision Calibracion"} value={true} showFunc={this.showTask} />
					</div>}
				</div>
				{this.state.startBox && (
					<DescargarDatos funcResult={this.showResultZone} />
				)}
				{this.state.winOrLoseZone === "win" && <WinZone />}
			</div>
		);
	}
}

export default DescargarDatosPages;
