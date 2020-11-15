import Green from '../img/Green.svg'
import Red from '../img/Red.svg'
import Grey from '../img/Grey.svg'

class UI {
	constructor(images) {
		this.images = images;
	}

	paintCorrect(element) {
		(this.images[element].src = Green)
	}
	paintIncorrect(element) {
		this.images[element].src = Red
	}
	hide(){
		setTimeout(()=>{
			this.images.forEach(e=>{
				e.src = Grey;
			})
		}, 500)
	}
}

export default UI;