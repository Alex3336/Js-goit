// function filterArray(array, callback){
//     let newArray = [];
//     for (let element of array){
//         if(callback(element)){
//             newArray.push(element);
//         }
//     }
//     return newArray
// }


let x;
let array = [];
while(true) {
    x = parseInt(prompt("Введіть число, якщо хочете зупинити цикл введіть не число або натисніть скасувати"));
    if (x === null || isNaN(x)){
        break;
    }
    else{
        array.push(Number(x));
    }
}

const squaring = (num) => num * num;

function higherSquaring(array, callback){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]));
    }
    return newArray;
}

higherSquaring(array, squaring);

console.log(higherSquaring(array, squaring));