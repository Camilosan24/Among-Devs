import React, { createRef } from "react";
import amongBackPer from "../../img/amongBackPer.png";
import amongBackPer2 from "../../img/amongBackPer2.png";
import amongBackPer3 from "../../img/amongBackPer3.png";
class Main extends React.Component {

	constructor(){
		super()
		this.image1 = createRef()
		this.image2 = createRef()
	}


	render() {
		return (
			<React.Fragment>
				<div className="float-image">
					<img ref={this.image1} src={amongBackPer} width="100" height="100" alt="c-53" />
				</div>
				<div className="float-image2">
					<img ref={this.image2} src={amongBackPer2} width="80" height="100" alt="c-53" />
				</div>

				<div className="float-image3">
					<img ref={this.image3} src={amongBackPer3} width="80" height="100" alt="c-53" />
				</div>
				<section className="hero-section overflow-hidden">
					<div className="hero-slider owl-carousel">
						<div
							className="hero-item set-bg d-flex align-items-center justify-content-center text-center"
							data-setbg="img/banner.jpg"
						>
							<div className="container">
								<h1>Among Devs</h1>

								<p>
									El siguiente juego es una pequeña representacion de Among Us
									donde se recrearon 6 tareas del video juego, con diferente
									nivel de dificuldad desarrollado principalmente en la libreria
									de React.js para el curso de DevsHouse a cargo de IBACREA.
								</p>

								<div className="etiquetaA">
									<p>!Espero lo disfrutes!</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Main;
