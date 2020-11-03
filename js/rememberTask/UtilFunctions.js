export class UtilFuntions {
	constructor(level, divsArray, arrayCount) {
		this.level = level;
		this.arrayCount = arrayCount();
      this.divsArray = divsArray;
	}
	empezarGame() {
		console.log(this.divsArray);
		console.log(this.arrayCount);
		debugger;
		for (let i = 0; i < this.level; i++) {
			return this.cajas(this.divsArray[this.arrayCount[i]], i);
		}
	}
	cajas(div, i) {
		setTimeout(() => {
			this.showBox(div, (x) => {
				this.hideBox(x);
			});
		}, 3000 * i);
	}

	showBox(div, cb) {
		if (div) {
			return div.classList.add("active");
			if (cb) {
				cb(div);
			}
		}
	}

	hideBox(div) {
		if (div) {
			setTimeout(() => {
				return div.classList.remove("active");
			}, 1000);
		}
   }
   sayhi(){
      console.log(this.divsArray[0]);
   }
}
