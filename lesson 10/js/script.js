// let x = ["venom", "thanksgiving", "happy", "abobus"];
// let xFind = "happy";

// let client;
// for (client of x) {
//     if (client === xFind){
//         alert(`Ви знайшли ${xFind}`);
//         break;
//     }
// }
// for (let i = 0; i < 3; i++){
//     if (x[i] != xFind){
//         console.log(x[i])
//         continue;
//     }
//     else{
//         break;
//     }
// }

// let x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (let i = 0; i < x.length; i++) {
//     if (x[i] % 2 === 0){
//         console.log(x[i]);
//         console.log(typeof(x[i]))
//         break;
//     }
// }

// for (let i = 0; i < x.length; i++){
//     if (x[i] % 3 === 0){
//         continue;
//     }
//     console.log(x[i]);
// }

// for (let i = 1; i <= 50; i++) {
//     if (Math.sqrt(i) % 1 === 0 && i != 1) {
//         console.log(i);
//         break;
//     }
// }

// let neo = [
//     [1,2,3,4,5,6,7,8],
//     [2,4,6,8,10,12,14,16],
//     [3,6,9,12,15,18,21,24]
// ];
// console.log(neo[0][0]);
// let result = 0;
// for (let i = 0; i < neo.length; i++){
//     for (let j = 0; j < neo[i].length; j++){
//         result += neo[i][j];
//     }
// }
// console.log(result);


// const array = [
//   [3, 5, 1],
//   [7, 2, 8],
//   [4, 9, 6]
// ];

// let max = 0;
// for (let i = 0; i < array.length; i++){
//     for (let j = 0; j < array[i].length; j++){
//         if (array[i][j] > max){
//             max = array[i][j];
//         }
//     }
// }
// console.log(max)