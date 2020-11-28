import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer-section">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<div className="logo-terminator">
								<img src="https://i.ibb.co/GnvDYxT/logo-terminator.png" />
								<span className="span-terminator">TERMINATOR</span>
							</div>
						</div>
						<div className="col-6">
							<ul className="main-menu footer-menu text-center footer-extensions">
								<li>
									<Link to="/">INICIO</Link>
								</li>
								<li>
									<Link to="/game">GAME</Link>
								</li>
								<li>
									<Link to="/contactos">CONTACTO</Link>
								</li>
							</ul>
							<div className="footer-social d-flex justify-content-center">
								<a href="https://www.facebook.com">
									<i className="fa fa-facebook"></i>
								</a>
								<a href="https://www.facebook.com">
									<i className="fa fa-twitter"></i>
								</a>
							</div>
							<div className="copyright">
								<a href="https://www.facebook.com">Terminator</a> 2020 @ Todos
								los derechos reservados
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
