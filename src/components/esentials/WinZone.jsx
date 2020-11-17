import React from "react";
import {Link } from 'react-router-dom'

import outOfTask from '../../sounds/outOfTask.mp3'
class WinZone extends React.Component {
	constructor(){
		super()
		this.sound = new Audio(outOfTask)
	}


	handleClick = ()=>{
		this.sound.play()
	}

	render() {
		return (
			<div className="resultZone">
				<div className="row">
					<div className="col-12 win">
						<Link to="/game" className="button" id="startButton" onClick={this.handleClick}>
							Ganaste
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default WinZone;
