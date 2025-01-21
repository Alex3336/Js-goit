let result = 5 + 5 + '5';
console.log(result);
console.log(typeof(result));

console.log("================================================================");

let email = "avtobusovicabobus122@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

console.log("================================================================");

let first = "My";
let second = "name";
let third = "is";
let fullName = first + " " + second + " " + third + " " + "Sashko";
console.log(fullName);

console.log("================================================================");

let userName = prompt("Please enter ur name: ");
let payment = prompt("Please enter payment: ");
console.log(`Дякуємо, ${userName}! До сплати ${payment} гривень`);