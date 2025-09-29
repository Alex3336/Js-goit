const user = {
    name: "Mango",
    hobby: "html",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
    return Object.keys(obj).length;
}

const myObject = { a: 1, b: 2, c: 3 };
console.log(countProps(myObject));

function findBestEmployee(employees) {
    let bestEmployee = "";
    let maxTasks = 0;

    for (const employee in employees) {
        if (employees[employee] > maxTasks) {
            maxTasks = employees[employee];
            bestEmployee = employee;
        }
    }

    return bestEmployee;
}

const employeeTasks = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};
console.log(findBestEmployee(employeeTasks));

function countTotalSalary(employees) {
    let totalSalary = 0;

    for (const salary in employees) {
        totalSalary += employees[salary];
    }

    return totalSalary;
}

const salaries = {
    mango: 100,
    poly: 150,
    ajax: 80,
};
console.log(countTotalSalary(salaries));

function getAllPropValues(arr, prop) {
    const propValues = [];

    for (const obj of arr) {
        if (obj.hasOwnProperty(prop)) {
            propValues.push(obj[prop]);
        }
    }

    return propValues;
}

const products = [
    { name: "apple", price: 20, quantity: 2 },
    { name: "banana", price: 10, quantity: 3 },
    { name: "orange", price: 15, quantity: 1 },
];
console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));

function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
        if (product.name === productName) {
            return product.price * product.quantity;
        }
    }
    return 0;
}

const products2 = [
    { name: "apple", price: 20, quantity: 2 },
    { name: "banana", price: 10, quantity: 3 },
    { name: "orange", price: 15, quantity: 1 },
];
console.log(calculateTotalPrice(products2, "banana"));
console.log(calculateTotalPrice(products2, "grape"));
