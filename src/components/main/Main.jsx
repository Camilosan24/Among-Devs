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
							<h1>Among Us</h1>
							<h2>Terminator</h2>
							<p>
								El siguiente juego es una pequeña representacion de Among Us donde se recrearon 6 tareas del video juego, con
								diferente nivel de dificuldad desarrollado principalmente en la libreria de React.js para el curso de DevsHouse
								a cargo de IBACREA.
							</p>

							<div className="etiquetaA">
								<p>
									!Espero lo disfrutes!
							    </p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Main;
