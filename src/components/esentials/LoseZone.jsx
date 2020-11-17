import React from "react";
import {Link } from 'react-router-dom'
class LoseZone extends React.Component {

	render() {
		return (
			<div className="resultZone">
				<div className="row">
					<div className="col-12 lose">
						<Link to="/game" className="button" id="startButton">
							Perdiste
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default LoseZone;