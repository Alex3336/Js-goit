const numbers = [1, 2, 3, 4, 5];
const processArray = (array, callback) => {
    return callback(array);
};

const getSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);


const sum = processArray(numbers, getSum);
console.log(`Сума: ${sum}`);

const min = processArray(numbers, getMin);
console.log(`Мінімум: ${min}`); 

const max = processArray(numbers, getMax);
console.log(`Максимум: ${max}`); 

const operate = (a, b, callback) => {
    return callback(a, b);
};

const num1 = 10;
const num2 = 5;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


const additionResult = operate(num1, num2, add);
console.log(`Додавання: ${additionResult}`); 

const subtractionResult = operate(num1, num2, subtract);
console.log(`Віднімання: ${subtractionResult}`);

const multiplicationResult = operate(num1, num2, multiply);
console.log(`Множення: ${multiplicationResult}`); 

const divisionResult = operate(num1, num2, divide);
console.log(`Ділення: ${divisionResult}`);
