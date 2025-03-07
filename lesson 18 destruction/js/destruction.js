// let house = {
//     name: 'aaganim',
//     area: 150,
//     rooms: 14.88,
//     price: 1500000,
//     massiveButt:["femboys","femb0i","femb01"],
//     room:{
//         color: 'white',
//         number: 5
//     }
// }
// let {name,rooms,area,color} = house;
// console.log({name,rooms,area,color});

// let {name,...rest} = house;
// console.log(rest);

// const {massiveButt:[item1,item2,item3], room:{color, number}, street = "femboichikovska"} = house;
// console.log(house);
// console.log(street);

// const user = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com'
// }
// let {name, age, email} = user;
// console.log(user);
// const car = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2020,
//   features: ['power windows', 'rear camera', 'navigation'],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true
//   }
// }
// let {make, model, year, safety:{airbags, antilock_brakes, stability_control}} = car;
// console.log(car);
// const movie = {
//   title: 'The Shawshank Redemption',
//   director: {
//     fullName: 'Frank Darabont',
//     nationality: 'American'
//   },
//   actors: ['Tim Robbins', 'Morgan Freeman'],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90
//   }
// }
// let {title, director:{fullName, nationality}, actors:[actor1,actor2], release_year, ratings:{imdb, rotten_tomatoes}} = movie;
// console.log(movie);
// const books = {
//   count: 3,
//   list: [
//     {
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       year: 1925
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       year: 1949
//     }
//   ]
// }
// let {count, list:[book1,book2,book3]} = books;
// console.log(books);

let object = {
    firstName: prompt('ur frstnm'),
    lastName: prompt('ur lstnm'),
    age: Number(prompt('ur g'))
}

function yappyDoor(object){
    let {firstName, lastName,age} = object;
    console.log(`Мене звати ${firstName} ${lastName} і мені ${age} років`)
}
yappyDoor(object)