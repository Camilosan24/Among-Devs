import React from "react";
export default class ButtonStart extends React.Component {

	handleClick = () => {
		this.props.hideButtonStart(true)
	};

	render() {
		return (
			<div className="Begining">
				<div className={this.props.booleanPlaying ? "hide" : "startZone"} id="startZone">
					<div className="row">
						<div className="col-12">
							<a
								href="#NOTHING"
								className="button"
								id="startButton"
								onClick={this.handleClick}
							>
								START
							</a>
						</div>
					</div>
				</div>
				<div className="hide" id="winZone">
					<div className="row">
						<div className="col-12">
							<a href="../index.html" className="button" id="startButton">
								Ganaste
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
