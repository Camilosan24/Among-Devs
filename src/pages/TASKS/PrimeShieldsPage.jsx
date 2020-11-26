import React from "react";
import PrimeShields from "../../components/primeShields/PrimeShields";
import WinZone from '../../components/esentials/WinZone'
import shieldBack from '../../img/shieldBack.png'
import abrir from '../../sounds/AudioEnergia.mp3'
class PrimeShieldsPage extends React.Component {

	constructor(){
		super()
		this.state = {
			startBox: false,
			winOrLoseZone: false
		}
		this.sound = new Audio(abrir)
	}


	handleClick = () => {
		this.sound.play()
		this.setState({
			startBox: true,
		});
	};

	showResultZone = (result)=>{
		this.setState({winOrLoseZone: result})
	}

	render() {
		return (
			<div className="task">
				<React.Fragment>
					<div className="backgroundTaskDivert">
						{this.state.startBox ? "" : <img src={shieldBack} alt="" />}
						<div className="chooseTask">
							<span className="text-light" onClick={this.handleClick}>
								Mision Escudos
							</span>
						</div>
					</div>
					{this.state.startBox && <PrimeShields funcResult={this.showResultZone}/>}
					{ this.state.winOrLoseZone === 'win' && <WinZone />}
				</React.Fragment>
			</div>
		);
	}
}

export default PrimeShieldsPage;
