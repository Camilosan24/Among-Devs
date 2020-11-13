import React from "react";
export default class ButtonStart extends React.Component {
	render() {
		return (
			<div className="Begining">
				<div className={this.props.start ? "hide" : "startZone"} id="startZone">
					<div className="row">
						<div className="col-12">
							<a href="#playZone" class="button" id="startButton">
								START
							</a>
						</div>
					</div>
				</div>
				<div class="hide" id="winZone">
					<div class="row">
						<div class="col-12">
							<a href="../index.html" class="button" id="startButton">
								Ganaste
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
