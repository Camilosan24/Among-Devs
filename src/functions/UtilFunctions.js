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

// class UI {
// 	constructor(images) {
// 		this.images = images;
// 	}

// 	paintCorrect(element) {
// 		(this.images[element].src = "../../img/Green.svg")
// 	}
// 	paintIncorrect(element) {
// 		this.images[element].src = "../../img/Red.svg"

// 	}
// 	hide(){
// 		setTimeout(()=>{
// 			this.images.forEach(e=>{
// 				e.src = "../../img/Grey.svg";
// 			})
// 		}, 500)
// 	}
// 	winGame(){

// 	}
// }

// let divsArray = [];
// let level = 1;
// let valuesIn = [];
// let nextLevel = false

// function startGame() {
// 	nextLevel = false;
// 	setTimeout(() => {
// 		utilFunctions.empezarGame(level);
// 	}, 2000);

// 	setTimeout(() => {
// 		nextLevel = true;
// 		alert("elegir opcion");
// 	}, 3000 * level + 1500);
// }

// startButton.addEventListener("click", (e) => {
// 	startZone.classList.remove("startZone");
// 	startZone.classList.add("hide");
// 	startGame();
// 	e.preventDefault();
// });
// let number = 0;
