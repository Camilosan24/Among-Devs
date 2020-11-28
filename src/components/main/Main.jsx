import React from "react";
import "../../styles/main.css";


class Main extends React.Component {
	render() {
		return (
			<section className="hero-section overflow-hidden">
				<div className="hero-slider owl-carousel">
					<div
						className="hero-item set-bg d-flex align-items-center justify-content-center text-center"
						data-setbg="img/banner.jpg"
					>
						<div className="MainContainer">
							<h1>Among Us</h1>
							<h2>Terminator</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
								libero, magni molestiae ex dolorem quas quidem saepe, rem quos
								aperiam excepturi illum amet similique, vitae delectus corporis
								laudantium consequuntur nulla!
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Main;
