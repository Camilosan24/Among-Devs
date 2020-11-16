import onPressButton from '../sounds/onPressButton.mp3'
class UtilFunctions {
	constructor(arrayCount, divsArray) {
		this.arrayCount = arrayCount;
		this.divsArray = divsArray;
		this.soundButton = new Audio(onPressButton)
	}

	empezarGame(level) {
		for (let i = 0; i < level; i++) {
			this.cajas(this.divsArray[i], i);
		}
	}
	cajas(div, i) {
		setTimeout(() => {
			this.soundButton.play()
			this.showBox(div, (x) => {
				this.hideBox(x);
			});
		}, 500 * i);

	}

	showBox(div, cb) {
		if (div) {
			div.classList.add("active");
			cb(div);
		}
	}

	hideBox(div) {
		if (div) {
			setTimeout(() => {
				div.classList.remove("active");
			}, 200);
		}
	}
}
export default UtilFunctions;
