const { error } = require("console");
const fs = require("fs");
// let jsonFood = `[
//     {
//         "name": "burger",
//         "discription": "american fat food",
//         "price": "300$",
//         "ingradients": ["tomato", "pickles", "bread", "souce"]
//     },
//     {
//         "name": "fries",
//         "discription": "american fat potato food",
//         "price": "30$",
//         "ingradients": ["potato", "souce"]
//     }
// ]`;
// try {
//     const shos = JSON.parse(jsonFood);
//     console.log(`all ok`);
// } catch (error) {
//     console.error(`some is not ok`, error.message);
// }

let student = {
    name: "Михайло",
    lastname: "Зубенко",
    age: 43,
    specialty: "Вор в законе",
    grades: [95, 88, 92, 89],
};

const jsonStudent = JSON.stringify(student);

fs.writeFile("student.json", jsonStudent, (error) => {
    if (error) {
        console.error("мафиозник");
    } 
    else {
        console.log("легавий");
    }
});

try {
    const mikhail = JSON.parse(jsonStudent);
    console.log(`zubenko vor v zakone`);
} catch (error) {
    console.error(`zubenko is not ok`, error.message);
}
