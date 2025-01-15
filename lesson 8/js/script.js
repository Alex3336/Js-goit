// let venom = 0;
// while (true) {
//     console.log(venom);
//     venom++;
//     if (venom > 5){
//         break;
//     }
// }

// let password;
// do {
//     password = prompt("Enter your venom")
// }
// while (password !== "venom")
// console.log("пароль вірний")

// let num = 0;
// while (num <= 20) {
//     num++;
//     let logic = num % 2;
//     if (logic === 0) {
//         console.log(num);
//     }
// }


let num = Math.floor(Math.random() * 10) + 1;
do {
    let urGuess = parseInt(prompt("введи venom від 1 до 10"));
    console.log(num);
    if (num === urGuess){
        alert("ти вгадав venom")
        break;
    }
    else{
        alert("ви не вгадали venom")
        continue;
    }
}
while(true)