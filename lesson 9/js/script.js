// const numbers = [3, 7, 1, 12, 9];
// let result = 0;
// for (let i = 0; i < numbers.length; i++){
//     result+= numbers[i];
// }
// console.log(result);

// const numbers = [3, 7, 1, 12, 9];
// for(let number of numbers){
//     number++;
// }

const students = ["Оля", "Андрій", "Марія", "Іван", "Софія"];
let student = 0;
for(student of students) {
    console.log(`студент(ка) - ${student}`);
}