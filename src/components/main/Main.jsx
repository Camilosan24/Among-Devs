import React from "react";
class Main extends React.Component {
	render() {
		return (
			<section className="hero-section overflow-hidden">
				<div className="hero-slider owl-carousel">
					<div
						className="hero-item set-bg d-flex align-items-center justify-content-center text-center"
						data-setbg="img/banner.jpg"
					>
						<div className="container">
							<h2>Game on!</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
								libero, magni molestiae ex dolorem quas quidem saepe, rem quos
								aperiam excepturi illum amet similique, vitae delectus corporis
								laudantium consequuntur nulla!
							</p>
							<a href="/" className="site-btn">
								Read More <img src="img/icons/double-arrow.png" alt="#" />
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Main;
