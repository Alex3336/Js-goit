const fruits = ["banana","apple","orange","mango","pear"];

const venom = fruits.sort(
    function(a,b){
        return b.localeCompare(a);
    }
);
console.log(venom);

const numbers = ["3","1","4","2","5"];

const senomGex  = numbers.sort(
    function(a,b){
        return parseInt(a) - parseInt(b);
    }
)
console.log(senomGex);

const arr = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 26 },
    { name: 'Mike', age: 42 },
    { name: 'Emily', age: 29 }
];

const sentleGex = arr.sort(
    function(a,b){
        return a.name.localeCompare(b.name);
    }
);
console.log(sentleGex)

const products = [
    { name: 'Product 1', price: 100, quantity: 5 },
    { name: 'Product 2', price: 50, quantity: 10 },
    { name: 'Product 3', price: 200, quantity: 2 },
    { name: 'Product 4', price: 50, quantity: 5 }
];

const sortedProducts = products.sort(
    function(a,b){
        if((a.price - b.price) != 0){
            return b.price - a.price;
        }
        else if((a.price - b.price) == 0){
            return a.quantity - b.quantity;
        }
    }
);
console.log(sortedProducts);

const events = [
    { name: 'Event 1', date: '10/02/2023' },
    { name: 'Event 2', date: '15/03/2023' },
    { name: 'Event 3', date: '01/01/2023' },
    { name: 'Event 4', date: '01/02/2023' }
];

const sortedEvents = events.sort(
    function(a,b){
        let firstDate = a.date.split('/');
        let secondDate = b.date.split('/');
        if(firstDate[2] === secondDate[2]){
            if(firstDate[1] === firstDate[1]){
                return parseInt(firstDate[0]) - parseInt(secondDate[0]);
            }
            else{
                return parseInt(firstDate[1]) - parseInt(secondDate[1]);
            }
        }
        else{
            return parseInt(firstDate[2]) - parseInt(secondDate[2]);
        }
    }
);
console.log(events)