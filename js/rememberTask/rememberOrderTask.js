import { UtilFuntions } from './UtilFunctions.js';

window.onload = init();



function init(){
	let elemento0 = $('#cero')[0];
	let elemento1 = window.document.getElementById("1");
	let elemento2 = document.getElementById("2");
	let elemento3 = document.getElementById("3");
	let elemento4 = document.getElementById("4");
	let elemento5 = document.getElementById("5");
	let elemento6 = document.getElementById("6");
	let elemento7 = document.getElementById("7");
	let elemento8 = document.getElementById("8");
	console.log(elemento1);
}
let arrayCount = () => {
	let ar = [];
	let ranNumber = 0;
	for (let i = 0; i < 5; i++) {
		ranNumber = Math.floor(Math.random() * 9);
		ar.push(ranNumber);
	}
	return ar;
};

const elementos = document.querySelectorAll('.btn-coloring')


const buttons1 = document.getElementById("button-box-1");
const buttons2 = document.getElementById("button-box-2");
const box = document.getElementById("rememberTaskBox");

const startButton = document.getElementById('startButton');
const startZone = document.getElementById('startZone');


startButton.addEventListener('click',(e)=>{
	startZone.classList.remove('startZone');
	startZone.classList.add('hide');
// const divsArray = [
// 	elemento0,
// 	elemento1,
// 	elemento2,
// 	elemento3,
// 	elemento4,
// 	elemento5,
// 	elemento6,
// 	elemento7,
// 	elemento8,
// ];


	// const utilFunctions = new UtilFuntions(2,divsArray,arrayCount);
})


