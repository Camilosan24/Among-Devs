import React from "react";
import Map from "../../components/map/Map";
import "../../styles/style.css";
class MapPage extends React.Component {
	render() {
		return (
			<div className="background">
				<Map />
			</div>
		);
	}
}

export default MapPage;
