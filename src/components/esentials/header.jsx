import React, { Component } from "react";
import { Link } from "react-router-dom";
import songInicio from '../../sounds/songInicio.mp3'

export default class Header extends Component {

	constructor(){
		super()
		this.sound = new Audio(songInicio)
	}

	componentDidMount(){
		this.sound.volume = 0.2;
		this.sound.play()
	}

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
								<a className="navbar-brand text-white-50" href="https://www.notion.so/AmongDevs-4e4990b2ac2e4a80ba44ca5b6dd603dd">
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
									<Link to="/contactos">CONTACTO</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}
