import React from "react";
import { Link } from "react-router-dom";
import MapPng from "../../img/Full-map.png";
import "../../styles/mapStyles.css";

class Map extends React.Component {
	render() {
		return (
			<div className="hero-item justify-content-center
			">
				<div className="container-map align-text-center">
					<img className="mx-auto d-block" src={MapPng} alt="Map-img" />
					<Link to="/remember"><div className="reactor"></div></Link>
					<Link to="/electrical"><div className="electrical"></div></Link>
					<Link to="/admin"><div className="admin"></div></Link>
				</div>
			</div>
		);
	}
}

export default Map;
