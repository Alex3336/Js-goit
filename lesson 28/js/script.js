let colorPallete = document.querySelector(".color-pallete");
let output = document.querySelector(".output");

colorPallete.addEventListener("click", (e) =>{
    if(e.target.nodeName !== "Button"){
        return;
    }
    const selectedColor = e.target.style.backgroundColor;
    output.textContent = `selected color: ${selectedColor}`
})
function renderColorPallete(){
    const items = [];
    let color;
    for(let i = 0; i < 100; i++){
        color = getRandomColor();
        const item = document.createElement("button");
        item.dataset.color = color;
        item.style.backgroundColor = color
        item.classList.add("item");
        items.push(item);
    }
    colorPallete.append(...items);
}
function getRandomColor(){

    console.log( `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`);
    return `#${getRandomHex()}`;
}
function getRandomHex(){
    let r = Math.floor(Math.random() * 256).toString(16)
    let g = Math.floor(Math.random() * 256).toString(16)
    let b = Math.floor(Math.random() * 256).toString(16)
    return `${r}${g}${b}`
}
renderColorPallete()