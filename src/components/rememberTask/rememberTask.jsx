import React from "react";
import "../../styles/rememberOrderTask.css";
import buttonImg from "../../img/button.svg";
import banner from "../../img/banner.jpg";
import Grey from "../../img/Grey.svg";
import backTask from "../../img/backTask.png";
import UtilFunctions from "../../functions/UtilFunctions";

class Hero extends React.Component {
	constructor(){
		super()
		this.nextLevel = true
		this.number = 0
		this.level = 1
		this.arrayCount = this.arrayCount()
		this.divsArray = null
		this.utilFunctions = null
		this.insertValues = []
		this.valuesIn = []
	}

	componentDidMount(){
		this.divsArray = this.divsArrayFunc()
		this.utilFunctions = new UtilFunctions(this.arrayCount, this.divsArray)
		this.startGame()
	}

	arrayCount = () => {
		let array = [];
		let numberOfAr = 0;
		for (let i = 0; i < 5; i++) {
			numberOfAr = Math.floor(Math.random() * 9);
			array.push(numberOfAr);
		}
		return array;
	}

	divsArrayFunc = () => {
		let arCount = this.arrayCount;
		let divsArray = [];
		for (let i = 0; i < arCount.length; i++) {
			divsArray.push(document.getElementById(arCount[i]));
		}
		return divsArray;
	}

	startGame = () => {
		this.nextLevel = false
		setTimeout(() => {
			this.utilFunctions.empezarGame(this.level);
		}, 2000);

		setTimeout(() => {
			this.nextLevel = true
			alert("elegir opcion");
		}, (2000 * this.level) + 1000);
	};


	buttonHandleClick = (e) => {
		if (this.nextLevel === true) {
			let buttonOption = parseInt(e.target.parentElement.value);
			this.number++
			if (this.number <= this.level) {
				this.valuesIn.push(buttonOption)
				for (let i = 0; i < this.valuesIn.length; i++) {
					if (this.rightValues() === false) {
						alert("incorrecto")
						break;
					} else {
						if (this.number === this.level) {
							this.level++
							this.insertValues = []
							if (this.level === 6) {
								alert('ganaste')
								break;
							} else {
								alert('correcto')
								this.number = 0
								this.valuesIn = []
								this.startGame()
							}
						}
					}
				}
			}
		}
	};

	rightValues = () => {
		let proofEntry = true;
		for (let i = 0; i < this.valuesIn.length; i++) {
			if (this.valuesIn[i] === this.arrayCount[i]) {
				proofEntry = true;
			} else {
				proofEntry = false;
				return proofEntry;
			}
		}
		return proofEntry;
	};


	render() {
		console.log(this.arrayCount)
		return (
			<section className="hero-section overflow-hidden">
				<div className="hero-slider owl-carousel">
					<div
						className="hero-item set-bg d-flex align-items-center justify-content-center text-center"
						data-setbg={banner}
					>
						<div className="container">
							<div id="playZone"></div>
							<div className="row">
								<div className="col-6">
									<div className="task1">
										<img name="background" src={backTask} alt="" />
										<div className="indicators">
											<div className="indicators-icons">
												<img
													src={Grey}
													width="80"
													height="80"
													alt=""
													name="img-0"
												/>
											</div>
											<div className="indicators-icons">
												<img
													src={Grey}
													width="80"
													height="80"
													alt=""
													name="img-1"
												/>
											</div>
											<div className="indicators-icons">
												<img
													src={Grey}
													width="80"
													height="80"
													alt=""
													name="img-2"
												/>
											</div>
											<div className="indicators-icons">
												<img
													src={Grey}
													width="80"
													height="80"
													alt=""
													name="img-3"
												/>
											</div>
											<div className="indicators-icons">
												<img
													src={Grey}
													width="80"
													height="80"
													alt=""
													name="img-4"
												/>
											</div>
										</div>

										<div className="button-box-1" id="button-box-1">
											<div className="row justify-content-center">
												<div className="btn-coloring" id="0"></div>
												<div className="btn-coloring" id="1"></div>
												<div className="btn-coloring" id="2"></div>
											</div>
											<div className="row justify-content-center">
												<div className="btn-coloring" id="3"></div>
												<div className="btn-coloring" id="4"></div>
												<div className="btn-coloring" id="5"></div>
											</div>
											<div className="row justify-content-center">
												<div className="btn-coloring" id="6"></div>
												<div className="btn-coloring" id="7"></div>
												<div className="btn-coloring" id="8"></div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className="task2">
										<img name="background" src={backTask} alt="" />
										<div className="indicators">
											<div className="indicators-icons">
												<img
													src={Grey}
													width="80"
													height="80"
													alt=""
													name="2img-0"
												/>
											</div>
											<div className="indicators-icons">
												<img
													src={Grey}
													width="80"
													height="80"
													alt=""
													name="2img-1"
												/>
											</div>
											<div className="indicators-icons">
												<img
													src={Grey}
													width="80"
													height="80"
													alt=""
													name="2img-2"
												/>
											</div>
											<div className="indicators-icons">
												<img
													src={Grey}
													width="80"
													height="80"
													alt=""
													name="2img-3"
												/>
											</div>
											<div className="indicators-icons">
												<img
													src={Grey}
													width="80"
													height="80"
													alt=""
													name="2img-4"
												/>
											</div>
										</div>
										<div className="button-box-2" id="button-box-2">
											<div className="row justify-content-center">
												<button
													className="btn-game"
													value="0"
													onClick={this.buttonHandleClick}
												>
													<img src={buttonImg} alt="" />
												</button>
												<button
													className="btn-game"
													value="1"
													onClick={this.buttonHandleClick}
												>
													<img src={buttonImg} alt="" />
												</button>
												<button
													className="btn-game"
													value="2"
													onClick={this.buttonHandleClick}
												>
													<img src={buttonImg} alt="" />
												</button>
											</div>
											<div className="row justify-content-center">
												<button
													className="btn-game"
													value="3"
													onClick={this.buttonHandleClick}
												>
													<img src={buttonImg} alt="" />
												</button>
												<button
													className="btn-game"
													value="4"
													onClick={this.buttonHandleClick}
												>
													<img src={buttonImg} alt="" />
												</button>
												<button
													className="btn-game"
													value="5"
													onClick={this.buttonHandleClick}
												>
													<img src={buttonImg} alt="" />
												</button>
											</div>
											<div className="row justify-content-center">
												<button
													className="btn-game"
													value="6"
													onClick={this.buttonHandleClick}
												>
													<img src={buttonImg} alt="" />
												</button>
												<button
													className="btn-game"
													value="7"
													onClick={this.buttonHandleClick}
												>
													<img src={buttonImg} alt="" />
												</button>
												<button
													className="btn-game"
													value="8"
													onClick={this.buttonHandleClick}
												>
													<img src={buttonImg} alt="" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Hero;
