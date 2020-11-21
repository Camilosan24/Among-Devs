import React from "react";
import RememberTask from '../../components/rememberTask/rememberTask';
import "../../styles/style.css";
import "../../styles/rememberOrderTask.css";
import Back from "../../img/fontReactor.png";
import ButtonStart from '../../components/esentials/ButtonStart'
import WinZone from '../../components/esentials/WinZone'
import LoseZone from '../../components/esentials/LoseZone'
import openTask from '../../sounds/openTask.mp3'

class RememberPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startBox: false,
			startPlaying: false,
			winOrLoseZone: false
		};
		this.sound = new Audio(openTask)
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
			<div className="background">
				<div className="backgroundTask">
					{this.state.startBox ? "" :<img src={ Back } alt="" />}
					<div className="chooseTask">
						<span className="text-light" onClick={this.handleClick}>
							Mision Reactor
						</span>
					</div>
				</div>
				<div className={this.state.startBox ? "task":"taskHide"}>
					<RememberTask hideButtonStart={this.hideButtonStart} booleanPlaying={this.state.startPlaying} funcResult={this.showResultZone}/>
					<ButtonStart hideButtonStart={this.hideButtonStart} booleanPlaying={this.state.startPlaying} audioPlay={this.audioPlay}/>
				</div>
			{ this.state.winOrLoseZone === 'win' ? <WinZone/>: this.state.winOrLoseZone === 'lose' ? <LoseZone/> : ""}
			</div>
		);
	}
}

export default RememberPage;
