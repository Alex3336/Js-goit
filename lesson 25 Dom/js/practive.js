const input = document.querySelector("#js-input");
const button = document.querySelector("#js-butt");
function handleAlertInput(){
    let name = input.value;
    if(name === ''){
        alert("enter ur name stupid pigga mega giga niga")
    }
    else{
        alert(`hello you stupid nigga mf ${name}`);
    }
}
button.addEventListener('click', handleAlertInput);

const increaseButt = document.querySelector("#js-increase-butt");
const decreaseButt = document.querySelector("#js-decrease-butt");
let text = document.querySelector("#js-text")
let fontSize = parseInt(text.style.fontSize);
function handleTextIncrease(){
    fontSize += 2 
    text.style.fontSize = parseInt(fontSize) + "px"
}
function handleTextDecrease(){
    fontSize -= 2 
    text.style.fontSize = parseInt(fontSize) + "px"
}
increaseButt.addEventListener('click', handleTextIncrease);
decreaseButt.addEventListener('click', handleTextDecrease);

const showImgButt = document.querySelector("#js-show-img");
let img = "<img src='./trick a femboy.jpg' alt='trick a femboy'>";

function handleImgShow() {
  const existingImg = document.querySelector('img');
    if (existingImg) {
        existingImg.remove();
    }
     else {
        const newImg = document.createElement('img');
        newImg.src = './trick a femboy.jpg';
        showImgButt.parentNode.insertBefore(newImg, showImgButt.nextSibling);
    }
}

showImgButt.addEventListener('click', handleImgShow);


