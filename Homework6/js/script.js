let firstNum = 0;
while (firstNum <= 20) {
    firstNum++;
    let logic = firstNum % 2;
    if (logic === 0) {
        console.log(firstNum);
    }
}

console.log("================================================================");

let secondNum = 0;
while (secondNum <= 10){
    console.log(secondNum);
    secondNum++;
}

console.log("================================================================");

let thirdNum = 7;
for (let i = 1; i <= 12; i++) {
    console.log(thirdNum * i);
}

console.log("================================================================");

let fourthNum = -1;
while (fourthNum < 4){
    fourthNum++;
    let x = [1,2,3,4,5];
    console.log(x.at(fourthNum));
}

console.log("================================================================");

for (let i = 0; i < 10; i++) {
    let x = [1,2,3,4,5,6,7,8,9,10];
    let condition = x.at(i);
    console.log(condition);
    if (condition === 7){
        console.log("виявлено 7");
        break;
    }
}

console.log("================================================================");

let sixthNum = 0;
do{
    sixthNum++;
    if (sixthNum % 3 === 0){
        continue;
    }
    else{
        console.log(sixthNum);
    }
}
while(sixthNum <= 20);

console.log("================================================================");

let fifthNum = Number.parseInt(prompt("введіть число"));
for (let i = 0; i < fifthNum; i++){
    console.log(i)
    if (i >= fifthNum){
        break;
    }
}