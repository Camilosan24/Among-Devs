import React, { Component } from "react";
export default class Header extends Component {
	render() {
		return (
			<header className="header-section">
				<div className="header-warp">
					<div className="header-bar-warp d-flex">
						<div className="logo-name">
							<div className="logo-image">
								<img
									src="https://i.ibb.co/VDdQVvp/icon.png"
									alt="hola"
									width="25"
									height="30"
								/>
							</div>
							<div className="logo-text">
								<a className="navbar-brand text-white-50" href="https://www.facebook.com">
									<span className="tittle">mong</span>
								</a>
							</div>
						</div>
						<nav className="top-nav-area w-100">
							<ul className="main-menu primary-menu">
								<li>
									<a href="../index.html">INICIO</a>
								</li>
								<li>
									<a href="mapa.html">GAME</a>
								</li>
								<li>
									<a href="contact.html">CONTACTO</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}
