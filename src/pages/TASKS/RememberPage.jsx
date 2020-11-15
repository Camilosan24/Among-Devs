import React from "react";
import RememberTask from "../../components/rememberTask/RememberTask";
import "../../styles/style.css";
import "../../styles/rememberOrderTask.css";
import Back from "../../img/fontReactor.png";
import ButtonStart from '../../components/esentials/ButtonStart'

class RememberPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startBox: false,
			startPlaying: false
		};
	}
	handleClick= () => {
		this.setState({
			startBox: true
		})
	}

	hideButtonStart = (params)=>{
		this.setState({startPlaying: params})
	}
	render() {
		return (
			<div className="background">
				<div className="backgroundTask">
					<img src={Back} alt="" />
					<div className="chooseTask">
						<span className="text-light" onClick={this.handleClick}>
							Mision Reactor
						</span>
					</div>
				</div>
				<div className={this.state.startBox ? "task":"taskHide"}>
					<RememberTask booleanPlaying={this.state.startPlaying}/>
					<ButtonStart hideButtonStart={this.hideButtonStart} booleanPlaying={this.state.startPlaying}/>
				</div>
			</div>
		);
	}
}

export default RememberPage;
