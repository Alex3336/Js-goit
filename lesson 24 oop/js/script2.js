// class User {
//     #email;
//     constructor({name, email, roll}){
//         this.name = name;
//         this.#email = email;
//         this.roll = roll;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
//     static Rolls = {
//         DIRECTOR: "director",
//         ADMINISTRATOR: "administrator",
//         MODERATOR: "moderator"
//     }
// }
// const artem = new User({name: 'artem', email: 'artem1234ad@gmail.com', roll: User.Rolls.ADMINISTRATOR});
// console.log(artem.email);
// artem.name = 'Bombini Gusini'
// console.log('artem.name: ', artem.name );
// artem.email = 'abobabubobibibihabibi@gmail.com';
// console.log('artem.roll: ', artem.roll);
// console.log('artem.email: ', artem.email);
// console.log(artem.Rolls);
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }
// const rectangle1 = new Rectangle(20, 5);
// console.log('rectangle1.getArea(): ', rectangle1.getArea());

// class Calculator {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
//     add(a, b) {
//         return a + b;
//     }
//     subtract(a, b) {
//         return a - b;
//     }
//     multiply(a, b) {
//         return a * b;
//     }
//     divide(a, b) {
//         return a / b;
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); 
// console.log(calculator.subtract(5, 2)); 
// console.log(calculator.multiply(2, 4)); 
// console.log(calculator.divide(10, 2)); 
// console.log(calculator.divide(10, 0)); 

class Animal{
    name;
}

class Dog extends Animal{
    breed;
    constructor({name, breed}){
        super();
        this.name = name;
        this.breed = breed;
    }
}
const myDog = new Dog({name: 'Buddy', breed: 'Labrador Retriever'});
console.log(myDog); 