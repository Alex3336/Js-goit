// let Name = "tigr";

// let animal = {
//     Name,
//     age,
//     color,
//     diet
// }

// console.log(animal);

// let person = {
//     name: "fritz",
//     age: "18",
//     sex: "Panzerkampfwagen VI Ausf E",
//     information(){
//         console.log(`наш живчик ${this.name}, дожив до ${this.age}, тепер ${this.sex} їде під бахмут`);
//     }
// }
// console.log(person);
// console.log(person.information())

const students = [
    {name: "Сашко", age: 15, gender: "Schwerer Panzerspähwagen (5 cm)", grade: 12 },
    {name: "Олег", age: 17, gender: "Schwerer Panzerspähwagen (5 cm)", grade: 2 },
    {name: "Михайло", age: 16, gender: "Schwerer Panzerspähwagen (5 cm)", grade: 4 },
    {name: "Андрій", age: 18, gender: "Schwerer Panzerspähwagen (5 cm)", grade: 10 },
    {name: "Марія", age: 15, gender: "Schwerer Panzerspähwagen (5 cm)", grade: 5 },
    {name: "Ірина", age: 17, gender: "Schwerer Panzerspähwagen (5 cm)", grade: 11 },
    {name: "Микола", age: 16, gender: "Schwerer Panzerspähwagen (5 cm)", grade: 12 },
]
let gradeSum = 0;
function average(grade) {
    return gradeSum += grade;
}
function averageGrade (students, callback) {
    for(let i = 0; i < students.length; i++) {
        callback(students[i].grade);
    }
    let average = (gradeSum / students.length) / 2
    return average;
}
averageGrade(students, average);
console.log(students);
console.log(averageGrade(students, average));