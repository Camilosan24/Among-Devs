import React from "react";
import LlenarBotones from "../../components/LlenarBotones/LlenarBotones";

class LlenarBotonesPage extends React.Component {
	render() {
		return (
			<div className="backgroundTaskDivert">
				{this.state.startBox ? "" : <img src={fondoEnergia} alt="" />}
				<div className="tasks">
					<ChooseTask
						name={"Mision Calibracion"}
						value={true}
						showFunc={this.showTask}
					/>
				</div>
			</div>
		);
	}
}

export default LlenarBotonesPage;
