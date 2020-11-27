import React from "react";
import DescargarDatos from "../../components/DescargarDatos/DescargarDatos";
import WinZone from '../../components/esentials/WinZone'
import backDownload from '../../img/backDownload.png'

class DescargarDatosPages extends React.Component {
  constructor() {
		super();
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

	showResultZone = (result) => {
		this.setState({ winOrLoseZone: result });
	};
	render() {
		return (
			<div className="task">
				<div className="backgroundTaskDivert">
					{this.state.startBox ? "" : <img src={backDownload} alt="" />}
					<div className="chooseTask">
						<span className="text-light" onClick={this.handleClick}>
							Mision Escudos
						</span>
					</div>
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
