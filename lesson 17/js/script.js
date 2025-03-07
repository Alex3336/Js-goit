// let book = {
//     autor: "Daun",
//     title: "Книга",
//     year: "2020",
//     genre: "Детектив"
// }

// document.getElementById('autor').onclick = function() {
//     book.autor = prompt("змініть автора книги");
//
// }
// document.getElementById('title').onclick = function() {
//     book.title = prompt("змініть назву книги");
//
// }
// document.getElementById('year').onclick = function() {
//     book.year = prompt("змініть рік створення книги");
//
// }
// document.getElementById('genre').onclick = function() {
//     book.genre = prompt("змініть жанр книги");
//
// }
// console.log(book);
let apple = { 
    name: '🍎', 
    price: 50 
};
let grape = { 
    name: '🍇', 
    price: 70 
};
let lemon = { 
    name: '🍋', 
    price: 60 
};
let strawberry = { 
    name: '🍓', 
    price: 110 
};
document.getElementById('apple').onclick = function() {
    cart.items.push(apple);
}
document.getElementById('grape').onclick = function() {
    cart.items.push(grape);
}
document.getElementById('lemon').onclick = function() {
    cart.items.push(lemon);
}
document.getElementById('strawberry').onclick = function() {
    cart.items.push(strawberry);
    
console.log(cart.items)
}

const cart = {
    items: [],
    getItems() {
        let itemsName = [];
        for (let i = 0; i < this.items.length; i++) {
            itemsName.push(this.items[i].name);
        }
        alert('Товари у корзині:'+ itemsName.join(', '));
        console.log(itemsName);
    },
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};
document.getElementById('get-items').onclick = function (){
    cart.getItems();
};