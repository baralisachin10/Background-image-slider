console.log("hello world")

const container = document.querySelector('.container');

const rightButton = document.querySelector('.right-btn');
const leftButton = document.querySelector('.left-btn');


const backgroundImages = [
    './asserts/first.jpg',
    './asserts/second.jpg',
    './asserts/third.jpg',
    './asserts/fourth.jpg',
    './asserts/fifth.jpg'
];

let bglen = backgroundImages.length;
console.log(bglen);
let i = 0;


container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.6)),url(${backgroundImages[i]})`


const next = () =>{
    i++;
    i = i%bglen;
    container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.6)),url(${backgroundImages[i]})`
}

const previous = () =>{
    i--;

    if(i<0){
        i = bglen - 1;
    }

    container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.6)),url(${backgroundImages[i]})`
}

rightButton.addEventListener('click',next);

leftButton.addEventListener('click',previous);

const int = setInterval(next,3000);