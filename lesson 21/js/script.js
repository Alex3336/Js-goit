// let x = [12,23,5,68,8,90,2,3];
// for (let i = 0 ; i < x.length ; i++){
//     console.log(x[i]);
// }
// x.forEach(num => console.log(num));
// x.map(num => num*2);
// console.log(x.map(num => num*2));

// const newList = x.filter((item, index) => {

//     return item > 5
// });
// console.log(newList);

// console.log(x.find(item=>{
//     console.log("check");
//     return item > 2;
// }));

let players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

console.log(players.map(players => players.name));

console.log(players.map(item => (item.points *= 1.1).toFixed(1)));

function increasePlayTime(Id, increasedTime) {
    return players.map((item) => {
        if(item.id === Id) {
            item.timePlayed + increasedTime
        }
    });
}

increasePlayTime('player-3', 50);

console.log(players);