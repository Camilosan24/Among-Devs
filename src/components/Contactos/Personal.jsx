import React from "react";
import "../../styles/plantilla.css";
import "../../iconos/style.css";

class Personal extends React.Component {
	render() {
		return (
			<div class="col-12 tarjeta-completa">
				<div class="preferencias-contenedor">
					<div class="contenido">
						<h1>{this.props.datos.nombre}</h1>
                  {this.props.datos.description}
					</div>
					<div class="product-image">
						<img src={this.props.datos.imagen} />

						<div class="RedesSociales">
							<div class="github">
								<a
									href={this.props.datos.github}
									target="_blank"
									class="icon-git"
								>
									{" "}
									GitHub
								</a>
							</div>

							<div class="linkedin">
								<a
									href={this.props.datos.linkedin}
									target="_blank"
									class="icon-linkedin"
								>
									{" "}
									Linkedin
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Personal;
