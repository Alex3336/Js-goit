function joinArrayWithFor(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        result += ','
    }
    return result;
}

const myArray = ["apple", "banana", "cherry"];
const joinedStringFor = joinArrayWithFor(myArray);
console.log(joinedStringFor); 

function joinArrayWithJoin(arr) {
    return arr.join(",");
}

const joinedStringJoin = joinArrayWithJoin(myArray);
console.log(joinedStringJoin); 

console.log('==================================');

let trelloCards = [
    'Картка-1',
    'Картка-2',
    'Картка-3',
    'Картка-4',
    'Картка-5'
];

function cardToRemove(card){
    const index = trelloCards.indexOf(card)
    trelloCards.splice(index, 1)
    console.log('removed trelloCards: ', trelloCards);
}

function cardToInsert(card){
    trelloCards.push(card);
    console.log('inserted trelloCards: ', trelloCards);
}

cardToInsert('Картка-6');
cardToRemove('Картка-3');
// не зрозумів в якому сенсі оновити картку бо оновляти там нічого це ж не об'єкт