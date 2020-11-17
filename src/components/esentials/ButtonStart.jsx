import React from "react";

class ButtonStart extends React.Component {
	handleClick = () => {
		this.props.audioPlay()
		this.props.hideButtonStart('show');
	};

	render() {
		return (
			<div
				className={this.props.booleanPlaying === 'hide' ? "hide" : "startZone"}
				id="startZone"
			>
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
		);
	}
}

export default ButtonStart;
