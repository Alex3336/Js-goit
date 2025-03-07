// const x = [1, 2, 5052, 8, 16, 32, 64, 128];

// let firstMax = x[0];

// for (let i = 1; i < x.length; i++) {
//     if (x[i] > firstMax) {
//         firstMax = x[i];
//     }
// }

// console.log(firstMax); 

// const secMax = Math.max(...x);

// console.log(secMax); 

// const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
// const array2 = [5, 3, 12, 14, 4, 5, 6, 6, 7];
// const array12 = [];
// for (let i = 0; i < array1.length; i++){
//     array12.push(array1.at(i));
// }

// for (let i = 0; i < array2.length; i++){
//     for (let j = 0; j < array2.length; j++){
//         if (array12[j] === array2[i]){
//             continue
//         }
//         else if (array12[j] === array2[i]){
//             array12.push(array2[i]);
//         }
//     }
// }
// console.log(array12)

// const arr = [1, 27, 3, 44, 4, 5, 16, 6, 7];
// let a = 4;
// let b = 26;

// function filterRange (arr, a, b){
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] >= a && arr[i] <= b){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(filterRange(arr,a,b))

const fruitArray = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];
let letterArray = [];
for (let i = 0; i < fruitArray.length; i++) {
    let a;
    let b;
    a = fruitArray.at(i).charAt(0);
    b = fruitArray.at(i).charAt(fruitArray[i].length - 1);
    letterArray.push(a+b)
}
console.log(letterArray)