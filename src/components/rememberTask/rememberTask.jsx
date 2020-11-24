import React from "react";
import "../../styles/rememberOrderTask.css";
import buttonImg from "../../img/button.svg";
import Grey from "../../img/Grey.svg";
import backTask from "../../img/backTask.png";
import UtilFunctions from "../../functions/UtilFunctions";
import UI from "../../functions/UI";
import taskCompleted from '../../sounds/taskCompleted.mp3'
import onPressButton from '../../sounds/onPressButton.mp3'
import swal from 'sweetalert';

class RememberTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hideOrShow: false,
			activeOrNot: false
		};
		this.ui1 = null;
		this.ui2 = null;
		this.nextLevel = false;
		this.number = 0;
		this.level = 1;
		this.arrayCount = this.arrayCount();
		this.divsArray = null;
		this.utilFunctions = null;
		this.valuesIn = [];
		this.setTimes = { set1: null, set2: null, set3: null, set4: null };
		this.soundButton = new Audio(onPressButton)
		this.soundWin = new Audio(taskCompleted);
	}

	componentDidMount() {
		let divImg1 = [];
		let divImg2 = [];
		for (let i = 0; i < 5; i++) {
			divImg1.push(document.getElementsByName(`img-${i}`)[0]);
			divImg2.push(document.getElementsByName(`2img-${i}`)[0]);
		}
		this.divsArray = this.divsArrayFunc();
		this.utilFunctions = new UtilFunctions(this.arrayCount, this.divsArray);
		this.ui1 = new UI(divImg1);
		this.ui2 = new UI(divImg2);
	}

	componentWillUnmount() {
		clearTimeout(this.setTimes.set1);
		clearTimeout(this.setTimes.set2);
		clearTimeout(this.setTimes.set3);
		clearTimeout(this.setTimes.set4);
	}

	componentDidUpdate() {
		if (this.props.booleanPlaying === "show") {
			this.startGame();
			this.props.hideButtonStart("hide");
		}
	}

	arrayCount = () => {
		let array = [];
		let numberOfAr = 0;
		for (let i = 0; i < 5; i++) {
			numberOfAr = Math.floor(Math.random() * 9);
			array.push(numberOfAr);
		}
		return array;
	};

	divsArrayFunc = () => {
		let arCount = this.arrayCount;
		let divsArray = [];
		for (let i = 0; i < arCount.length; i++) {
			divsArray.push(document.getElementById(arCount[i]));
		}
		return divsArray;
	};

	startGame = () => {
		this.setState({ hideOrShow: false,
		activeOrNot: false });
		this.nextLevel = false;
		this.setTimes.set1 = setTimeout(() => {
			this.utilFunctions.empezarGame(this.level);
		}, 2000);

		this.setTimes.set2 = setTimeout(() => {
			swal("¡Elegir opcion!");
			this.setState({ hideOrShow: true });
			this.nextLevel = true;
			this.setState({activeOrNot: true})
		}, 2000 + (this.level * 700));
	};

	buttonHandleClick = (e) => {
		if (this.nextLevel === true) {
			let buttonOption = parseInt(e.target.parentElement.value);
			this.number++;
			if (this.number <= this.level) {
				this.valuesIn.push(buttonOption);
				for (let i = 0; i < this.valuesIn.length; i++) {
					if (this.rightValues() === false) {
						this.ui2.paintIncorrect(this.number - 1);
						this.soundButton.play();
						this.props.funcResult("lose");
						break;
					} else {
						this.soundButton.play();
						this.ui1.paintCorrect(this.number - 1);
						this.ui2.paintCorrect(this.number - 1);
						if (this.number === this.level) {
							this.ui2.hide();
							this.level++;
							if (this.level === 6) {
								this.soundWin.play();
								this.props.funcResult("win");
								break;
							} else {
								this.number = 0;
								this.valuesIn = [];
								this.startGame();
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

	handleLoad = () => {};

	render() {
		if (this.start === true) {
			this.startGame();
			this.start = false;
		}
		return (
			<section
				className="hero-section overflow-hidden"
				onLoad={this.handleLoad}
			>
				<div className="hero-slider owl-carousel">
					<div
						className="hero-item set-bg d-flex align-items-center justify-content-center text-center"
						data-setbg="../img/banner.jpg"
					>
						<div className="container">
							<div id="playZone"></div>
							<div className="row">
								<div className="col-6">
									<div className="task1">
										<img name="background" src={backTask} alt="" />
										<div className="indicators">
											<div className="indicators-icons">
												<img src={Grey} alt="" name="img-0" />
											</div>
											<div className="indicators-icons">
												<img src={Grey} alt="" name="img-1" />
											</div>
											<div className="indicators-icons">
												<img src={Grey} alt="" name="img-2" />
											</div>
											<div className="indicators-icons">
												<img src={Grey} alt="" name="img-3" />
											</div>
											<div className="indicators-icons">
												<img src={Grey} alt="" name="img-4" />
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
										<div className={this.state.activeOrNot ? "button-box-2" : "highOpasity button-box-2"} id="button-box-2">
											<div className="row justify-content-center">
												<button
													className="btn-game"
													value="0"
													onClick={this.buttonHandleClick}
												>
													<img
														className={
															this.state.hideOrShow ? "" : "hide-buttons"
														}
														src={buttonImg}
														alt=""
													/>
												</button>
												<button
													className="btn-game"
													value="1"
													onClick={this.buttonHandleClick}
												>
													<img
														className={
															this.state.hideOrShow ? "" : "hide-buttons"
														}
														src={buttonImg}
														alt=""
													/>
												</button>
												<button
													className="btn-game"
													value="2"
													onClick={this.buttonHandleClick}
												>
													<img
														className={
															this.state.hideOrShow ? "" : "hide-buttons"
														}
														src={buttonImg}
														alt=""
													/>
												</button>
											</div>
											<div className="row justify-content-center">
												<button
													className="btn-game"
													value="3"
													onClick={this.buttonHandleClick}
												>
													<img
														className={
															this.state.hideOrShow ? "" : "hide-buttons"
														}
														src={buttonImg}
														alt=""
													/>
												</button>
												<button
													className="btn-game"
													value="4"
													onClick={this.buttonHandleClick}
												>
													<img
														className={
															this.state.hideOrShow ? "" : "hide-buttons"
														}
														src={buttonImg}
														alt=""
													/>
												</button>
												<button
													className="btn-game"
													value="5"
													onClick={this.buttonHandleClick}
												>
													<img
														className={
															this.state.hideOrShow ? "" : "hide-buttons"
														}
														src={buttonImg}
														alt=""
													/>
												</button>
											</div>
											<div className="row justify-content-center">
												<button
													className="btn-game"
													value="6"
													onClick={this.buttonHandleClick}
												>
													<img
														className={
															this.state.hideOrShow ? "" : "hide-buttons"
														}
														src={buttonImg}
														alt=""
													/>
												</button>
												<button
													className="btn-game"
													value="7"
													onClick={this.buttonHandleClick}
												>
													<img
														className={
															this.state.hideOrShow ? "" : "hide-buttons"
														}
														src={buttonImg}
														alt=""
													/>
												</button>
												<button
													className="btn-game"
													value="8"
													onClick={this.buttonHandleClick}
												>
													<img
														className={
															this.state.hideOrShow ? "" : "hide-buttons"
														}
														src={buttonImg}
														alt=""
													/>
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

export default RememberTask;
