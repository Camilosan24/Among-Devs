import React from "react";
import fondo from "../../img/fondostabilizeSteering.png";
import StabilizeSteering from "../../components/stabilizeSteering/StabilizeSteering";
import WinZone from "../../components/esentials/WinZone";
import "../../styles/stabilize.css";
import ChooseTask from "../../components/esentials/ChooseTask";

class StabilizeSteeringPage extends React.Component {
	constructor() {
		super();
		this.state = {
			startBox: false,
			winOrLoseZone: false,
		};
	}

	showTask = (option) => {
		this.setState({
			startBox: option,
		});
	};

	showResultZone = (result) => {
		this.setState({ winOrLoseZone: result });
	};
	render() {
		return (
			<React.Fragment>
				<div className="backgroundTaskDivert">
					{this.state.startBox ? "" : <img src={fondo} alt="" />}
					<div className="tasks">
						<ChooseTask name={"Mision Calibracion"} value={true} showFunc={this.showTask}/>
					</div>
				</div>
				{this.state.startBox && (
					<StabilizeSteering funcResult={this.showResultZone} />
				)}
				{this.state.winOrLoseZone === "win" && <WinZone />}
			</React.Fragment>
		);
	}
}

export default StabilizeSteeringPage;
