let pidOre = {
    name: 'shakal',
    lastName: 'de`kringe',
    grades: [98, 100, 43]
}
const {name, lastName, grades} = pidOre;
let finalRes = 0;
for (let i = 0; i < grades.length; i++) {
    finalRes += grades[i]; 
}
finalRes /= grades.length
console.log(`Студент ${name} ${lastName} має сердній бал ${finalRes}`);

console.log("================================================================");

let cart = {
    items: [
        {name: 'apple', price: 0.5, quantity: 12},
        {name: 'banana', price: 0.3, quantity: 7},
        {name: 'orange', price: 0.6, quantity: 15},
        {name: 'grape', price: 1.2, quantity: 10},
        {name: 'kiwi', price: 0.8, quantity: 5}
]}

let totalPrice = 0;
const {items:[fruit1, fruit2, fruit3, ...other]} = cart;
const {items} = cart;

for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price * items[i].quantity;
}
console.log(totalPrice);
console.log(items);

console.log("================================================================");

let email = {
    emails: ["alexaamogus@gmail.com", "avtobusovicabobus122@gmail.com", "venom2323231@gmail.com"]
}

const {emails:[em1, em2, em3, em4]} = email;
const {emails} = email;

console.log(em1);

console.log("================================================================");

function getAdultUsers(userList) {
    const {users} = userList;
    let result = "";
    for (let i = 0; i < users.length; i++){
        if (users[i].age >= 18) {
            result += " " + users[i].name;
        }
    }
    return result; 
}

const userDatabase = {
    users: [
        { name: "Іван", age: 25 },
        { name: "Марія", age: 17 },
        { name: "Петро", age: 30 },
        { name: "Олена", age: 16 },
        { name: "Андрій", age: 22 }
    ]
};


const adultUsers = getAdultUsers(userDatabase);
getAdultUsers(userDatabase);
console.log(adultUsers);
