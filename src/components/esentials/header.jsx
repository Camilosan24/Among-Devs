import React, { Component } from "react";
import { Link } from "react-router-dom";
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
									<span className="title">mong</span>
								</a>
							</div>
						</div>
						<nav className="top-nav-area w-100">
							<ul className="main-menu primary-menu">
								<li>
									<Link to="/">INICIO</Link>
								</li>
								<li>
									<Link to="/game">GAME</Link>
								</li>
								<li>
									<Link to="/remember">CONTACTO</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}
