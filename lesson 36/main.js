const counter = document.querySelector("#counter");
const colorBox = document.querySelector("#colored-box");
const randomText = document.querySelector("#random-text");
let counterVal = Number.parseInt(counter.textContent);
setInterval(() => {
    counterVal += 1;
    counter.textContent = counterVal;
}, 1000);

function getRandomHex() {
    return `#${getRandomColor()}`;
}
function getRandomColor() {
    let r = Math.floor(Math.random() * 256).toString(16);
    let g = Math.floor(Math.random() * 256).toString(16);
    let b = Math.floor(Math.random() * 256).toString(16);
    return `${r}${g}${b}`;
}
setInterval(() => {
    colorBox.style.backgroundColor = getRandomHex();
}, 3000);

let i = 0;
let quotes = [
    "What luck for the rulers that men don`t think.",
    "Success is the sole earthly judge of right and wrong.",
    "When we have won the war, who will question our methods?",
    "Art is the most endearing investment.",
    "The family is the smallest but most precious unit in the building of a State.",
    "I cannot be mistaken - what I say and do is historical.",
    "My father I respected, my mother I loved.",
];
setInterval(() => {
    randomText.textContent = quotes[i];
    i++;
    if(i >= quotes.length){
        i = 0
    }
}, 2000);
