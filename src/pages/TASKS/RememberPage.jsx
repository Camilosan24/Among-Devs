import React from "react";
import RememberTask from "../../components/rememberTask/rememberTask";
import "../../styles/style.css";
import "../../styles/rememberOrderTask.css";
import Back from "../../img/fontReactor.png";
import ButtonStart from "../../components/esentials/ButtonStart";
import WinZone from "../../components/esentials/WinZone";
import LoseZone from "../../components/esentials/LoseZone";
import openTask from "../../sounds/openTask.mp3";
import ChooseTask from "../../components/esentials/ChooseTask";
import LlenarBotones from "../../components/LlenarBotones/LlenarBotones";

class RememberPage extends React.Component {
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
	showTasks = (params) => {
		this.audioPlay();
		this.setState({ startBox: params });
	};

	hideButtonStart = (params) => {
		this.setState({ startPlaying: params });
	};

	showResultZone = (result) => {
		this.setState({ winOrLoseZone: result });
	};
	render() {
		return (
			<div className="task">
				<div className="backgroundTaskDivert">
					{this.state.startBox ? "" : <img src={Back} alt="" />}
					{!this.state.startBox && <div className="tasks">
						<ChooseTask
							name={"Mision Remember positions"}
							value={"remember"}
							showFunc={this.showTasks}
							hideButtonStart={this.hideButtonStart}
						/>
						<ChooseTask
							name={"Mision Order numbers"}
							value={"full"}
							showFunc={this.showTasks}
						/>
					</div>}
				</div>
				{this.state.startBox === "remember" ? (
					<RememberTask
						hideButtonStart={this.hideButtonStart}
						booleanPlaying={this.state.startPlaying}
						funcResult={this.showResultZone}
					/>
				) : (
					""
				)}

				{this.state.startPlaying ? "": this.state.startBox === 'remember' ? <ButtonStart audioPlay={this.audioPlay} hideButtonStart={this.hideButtonStart} /> : ""}
				{this.state.startBox === "full" ? (
					<LlenarBotones funcResult={this.showResultZone}/>) : ("")}

				{this.state.winOrLoseZone === "win" ? (
					<WinZone />
				) : this.state.winOrLoseZone === "lose" ? (
					<LoseZone />
				) : (
					""
				)}
			</div>
		);
	}
}

export default RememberPage;
