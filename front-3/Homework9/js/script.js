const myArray = ['Mango', 'Poly', 'Ajax'];
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}
logItems(myArray);

const message = "Це гравіювання на пам'ять";
const pricePerWord = 10;

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    const numberOfWords = words.length;
    const totalPrice = numberOfWords * pricePerWord;
    console.log('totalPrice: ', totalPrice);
}
calculateEngravingPrice(message, pricePerWord)

const myString = "Це найдовше слово в цьому рядку";
function findLongestWord(string) {
    const words = string.split(" ");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    console.log(`Найдовше слово: ${longestWord}`); 
}
findLongestWord(myString);

const longString = "Це дуже довгий рядок, який потрібно обрізати";
const shortString = "Короткий рядок";
function formatString(string) {
    if (string.length <= 40) {
        return string;
    } 
    else {
        return string.slice(0, 40) + "...";
    }
}

console.log(formatString(longString)); 
console.log(formatString(shortString)); 

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

console.log(checkForSpam("alo dota go")); 
console.log(checkForSpam("it`s spam")); 
console.log(checkForSpam("best sale only on this monday!"));

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число:");
    if (input === null) {
        break;
    }
    const number = Number(input);
    if (!isNaN(number)) {
        numbers.push(number);
    } 
    else {
        alert("Було введено не число, спробуйте ще раз");
    }
}

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
    } 
else {
    console.log("Не було введено жодного числа.");
}
