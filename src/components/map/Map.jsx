import React from "react";
import MapPng from '../../img/Full-map.png'

class Map extends React.Component {
	render() {
		return (
			<section className="hero-section overflow-hidden">
				<div className="hero-slider owl-carousel">
					<div
						className="hero-item set-bg d-flex align-items-center justify-content-center text-center"
						data-setbg="../img/banner.jpg"
					>
						<div className="container">
							<img className="mx-auto d-block" src={MapPng} alt="Map-img"/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Map;
