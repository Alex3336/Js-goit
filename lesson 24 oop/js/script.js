// class Animal {

//     constructor(name) {

//         this.name = name;
//     }

//     speak() {

//         console.log(`${this.name} каже: Привіт!`);
//     }
// }

// class Dog extends Animal {

//     speak() {

//         console.log(`${this.name} гавкає: Гав-гав!`);
//     }
// }

// const myAnimal = new Animal("Тваринка");
// myAnimal.speak();

// const myDog = new Dog("Бобік");
// myDog.speak();

// const animal = {
//     legs: 4
// };
// const dog = Object.create(animal);
// dog.name = "venom";
// console.log(dog);

// console.log(animal.isPrototypeOf(dog));
// console.log(dog.isPrototypeOf(animal));
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("legs"));
// console.log(dog.hasOwnProperty("name"));
// const dogKeys = Object.keys(dog)

// console.log(dogKeys);

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const mykita = new User("Daunitto Bobritto", "14888")
// console.log('mykita: ', mykita);

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const Mykita = new Person("Daunitto Bobritto", "de Holacoste");
Mykita.getFullName()
