const canvas2 = document.getElementById('canvas2');
const ctx = canvas2.getContext('2d');
const buttonImage = new Image();
buttonImage.src = '../img/button.png';

let x = 100;
let y = 150;
let button;

buttonImage.onload = ()=>{
    for (let f = 1; f <= 3; f++) {
        y = 0;
        for (let c = 1; c <= 3; x++) {
            button = ctx.drawImage(buttonImage,x,y,50,50);
            y += 50;
        }
        x += 60;
    }
}


