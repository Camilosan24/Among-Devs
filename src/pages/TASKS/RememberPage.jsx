import React from "react";
<<<<<<< HEAD
import RememberTask from "../../components/rememberTask/rememberTask";
=======
import RememberTask from '../../components/rememberTask/rememberTask';
>>>>>>> b0828c90d10728eb6103550427512a86546c0e99
import "../../styles/style.css";
import "../../styles/rememberOrderTask.css";
import Back from "../../img/fontReactor.png";
import ButtonStart from "../../components/esentials/ButtonStart";
import WinZone from "../../components/esentials/WinZone";
import LoseZone from "../../components/esentials/LoseZone";
import openTask from "../../sounds/openTask.mp3";
import ChooseTask from "../../components/esentials/ChooseTask";

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

<<<<<<< HEAD
	audioPlay=()=>{
		this.sound.play();
	}
	showTasks = (params) => {
=======

	audioPlay = () => {
		this.sound.play()
	}
	handleClick = () => {
>>>>>>> b0828c90d10728eb6103550427512a86546c0e99
		this.audioPlay()
		this.setState({ startBox: params });
	};

	hideButtonStart = (params) => {
<<<<<<< HEAD
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
					<div className="tasks">
						<ChooseTask name={"Mision Remember positions"} value={'remember'} showFunc={this.showTasks}/>
						<ChooseTask name={"Mision Order numbers"} value={'task'} showFunc={this.showTasks}/>
					</div>
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
				{this.state.startBox === "remember" ? (
					<ButtonStart
						hideButtonStart={this.hideButtonStart}
						booleanPlaying={this.state.startPlaying}
						audioPlay={this.audioPlay}
					/>
				) : (
					""
				)}

				{this.state.winOrLoseZone === "win" ? (
					<WinZone />
				) : this.state.winOrLoseZone === "lose" ? (
					<LoseZone />
				) : (
					""
				)}
=======
		this.setState({ startPlaying: params })
	}

	showResultZone = (result) => {
		this.setState({ winOrLoseZone: result })
	}
	render() {
		return (
			<div id="background">
				<div className="backgroundTask">
					{this.state.startBox ? "" : <img src={Back} alt="" />}
					<div className="chooseTask">
						<span className="text-light" onClick={this.handleClick}>
							Mision Reactor
						</span>
					</div>
				</div>
				{this.state.startBox && <RememberTask hideButtonStart={this.hideButtonStart} booleanPlaying={this.state.startPlaying} funcResult={this.showResultZone} />}
				{this.state.startBox && <ButtonStart hideButtonStart={this.hideButtonStart} booleanPlaying={this.state.startPlaying} audioPlay={this.audioPlay} />}

				{ this.state.winOrLoseZone === 'win' ? <WinZone /> : this.state.winOrLoseZone === 'lose' ? <LoseZone /> : ""}
>>>>>>> b0828c90d10728eb6103550427512a86546c0e99
			</div>
		);
	}
}

export default RememberPage;
