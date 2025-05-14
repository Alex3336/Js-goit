// const buttons = document.querySelectorAll("button");
// buttons[9].style.background = "red"
// function isMonsterPalindrome(str) {
//     let reverse = str.split("").reverse().join("")
//     return reverse == str ? "Beware, a palindrome monster is near!" : "You are safe from palindrome monsters... for now."
//   }
// function isMonsterPalindrome(str) {
//     let rev = str.toLowerCase().split("").reverse().filter(s => s != " " && s != "?" && s != "," && s != ":" ).join("")
//     str = str.toLowerCase().split("").filter(s => s != " " && s != "?" && s != "," && s != ":" ).join("")
//     return str == rev ? "Beware, a palindrome monster is near!" : "You are safe from palindrome monsters... for now."
// }

// const header = document.createElement("h1");
// header.textContent = "say gex";
// const img = document.createElement("img");
// img.src = "./patric.jpg";
// img.style.width="350px"
// img.style.height="500px"
// const el1 = document.createElement("h2");
// el1.textContent = "lorem ipsum.";
// const el2 = document.createElement("img");
// el2.src = "./politika.jpg"
// el2.style.width="300px"
// el2.style.height="300px"
// console.log('header: ', header);
// console.log('img: ', img);

// const container = document.getElementById("tralalero-tralala");
// container.append(header);
// container.prepend(img);
// container.after(el1);
// container.before(el2);

// const buttonContainer = document.querySelector(".js-color-picker")
// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// colorPickerOptions.forEach(option => {
//     const button = document.createElement('button');
//     button.textContent = option.label;
//     button.style.backgroundColor = option.color;
//     button.addEventListener('click', () => {
//         button.style.borderColor = getContrastYIQ(option.color); 
//     });
//     buttonContainer.appendChild(button);
// });

// function getContrastYIQ(hexcolor){
//     hexcolor = hexcolor.replace("#", "");
//     var r = parseInt(hexcolor.substr(0,2),16);
//     var g = parseInt(hexcolor.substr(2,2),16);
//     var b = parseInt(hexcolor.substr(4,2),16);
//     var yiq = ((r*122)+(g*500)+(b*150))/1000;
//     return yiq ;
// }

// const myButton = document.querySelector('button[data-action="subscribe"]');

// console.log(myButton.dataset.action);

// function createProductCard(name, description, price) {
//     const card = `
//         <article class="product">
//             <h2 class="product__name">${name}</h2>
//             <p class="product__descr">${description}</p>
//             <p class="product__price">Ціна: ${price} кредитів</p>
//         </article>
//     `;
//     document.querySelector(".js-products").innerHTML+= card;
// }
// createProductCard("banana","дуже смачний овоч", 99999999);

// const container = document.querySelector(".js-container");

const butt = document.querySelector(".js-button");
butt.addEventListener('click', function() {
    if (container.style.display === 'block') {
        container.style.display = 'none'
    }
    else {
        container.style.display = 'block';
    }
});
            
butt.addEventListener("click", function(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let translatedR = r.toString(16);
    let translatedG = g.toString(16);
    let translatedB = b.toString(16);
    let hex = "#" + translatedR + translatedG + translatedB;
    butt.style.backgroundColor = hex;
})

butt.addEventListener('click', function(){
    let name = document.querySelector('#name').value
    let lastname = document.querySelector('#lastname').value
    let email = document.querySelector('#email').value
    alert(`вас звуть ${name} ${lastname} ми вам напишемо на імейл: ${email}`)
})