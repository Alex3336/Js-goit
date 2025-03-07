let x = [12,23,5,68,8,90,2,3];
for (let i = 0 ; i < x.length ; i++){
    console.log(x[i]);
}
x.forEach(num => console.log(num));
x.map(num => num*2)
console.log(x.map(num => num*2))