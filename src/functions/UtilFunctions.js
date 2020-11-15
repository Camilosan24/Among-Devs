class UtilFunctions {
	constructor(arrayCount, divsArray) {
		this.arrayCount = arrayCount;
		this.divsArray = divsArray;
	}

	empezarGame(level) {
		for (let i = 0; i < level; i++) {
			this.cajas(this.divsArray[i], i);
		}
	}
	cajas(div, i) {
		setTimeout(() => {
			this.showBox(div, (x) => {
				this.hideBox(x);
			});
		}, 2000 * i);

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
			}, 500);
		}
	}
}
export default UtilFunctions;
