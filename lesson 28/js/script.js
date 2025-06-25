let colorPallete = document.querySelector(".color-pallete");
let output = document.querySelector(".output");

colorPallete.addEventListener("click", (e) =>{
    if(e.target.nodeName !== "BUTTON"){
        return;
    }
    const selectedColor = e.target.dataset.color;
    output.textContent = `selected color: ${selectedColor}`
})
function renderColorPallete(){
    const items = [];
    let color;
    for(let i = 0; i < 20; i++){
        color = getRandomHex();
        const item = document.createElement("button");
        item.dataset.color = color;
        item.style.backgroundColor = `${color}`;
        console.log('item.style.backgroundColor: ', item.style.backgroundColor);
        item.classList.add("item");
        items.push(item);
    }
    colorPallete.append(...items);
}
function getRandomHex(){
    return `#${getRandomColor()}`;
}
function getRandomColor(){
    let r = Math.floor(Math.random() * 256).toString(16)
    let g = Math.floor(Math.random() * 256).toString(16)
    let b = Math.floor(Math.random() * 256).toString(16)
    return `${r}${g}${b}`
}
renderColorPallete()