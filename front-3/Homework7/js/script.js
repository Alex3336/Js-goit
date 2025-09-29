let firstMassive = [1, 2, 3, 4, 5, 6, 7, 8, 9];
firstMassive[1] = 10;
console.log('firstMassive: ', firstMassive);

let secondMassive = ["venom", "senom", "vex"];
secondMassive.push("gex");
console.log('secondMassive: ', secondMassive);

let sum = 0;
for (let i = 0; i < firstMassive.length; i++){
    sum += firstMassive[i];
}
console.log('sum: ', sum);

let thirdMassive = [1,5,25,125,625]
for (let i = 0; i < thirdMassive.length; i++){
    console.log(thirdMassive[i]);
}

let fourthMassive = ["привіт", "день", "добрий день", "вечір", "ніч"];

for (let i = 0; i < fourthMassive.length; i++) {
    if (fourthMassive[i].length > 5) {
        console.log(fourthMassive[i]);
    }
}

let fiveMassive = [15, 2, 8, 42, 3, 1, 9, 12, 5, 20];
let maxNumber = fiveMassive[0];

for (let i = 1; i < fiveMassive.length; i++) {
    if (fiveMassive[i] > maxNumber) {
        maxNumber = fiveMassive[i];
    }
}
console.log("Максимальне число:", maxNumber);

let sixthMassive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

for (let i = 0; i < sixthMassive.length; i++) {
    if (sixthMassive[i] % 2 === 0) {
        evenNumbers.push(sixthMassive[i]);
    }
}
console.log("Парні числа:", evenNumbers);
