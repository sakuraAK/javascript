let a = [1, 2, 3];
let b = ['x', 'y', 'z'];
let fruits = ['apple', 'kiwi'];


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


//forEach()

fruits.forEach(function(fruit) {
    console.log(fruit);
});

fruits.forEach((fruit) => console.log(fruit));


//map() - transform

let numbers = [1, 2, 3];

let doubled = numbers.map(function(num) {
    return num * 2;
});

let power = numbers.map((number) => { return number ** 2 });
//let power = numbers.map((number) => ( number ** 2 ));

console.log(doubled); 
console.log(power);

let caps_fruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});


console.log(caps_fruits);

let employees = [
    { firstName: "John",  lastName: "Doe", role: "Senior Dev" } ,
    { firstName: "Jane",  lastName: "Doe", role: "Jun Dev" } ,
    { firstName: "Jack",  lastName: "Daniels", role: "Architect" } ,
];

let persons = employees.map(function(employee) {
    return { 
        firstName: employee.firstName,
        lastName: employee.lastName,  
    }
});

console.log(persons);


//filter() - Select Data

numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);


let students = [
    { firstName: "John",  lastName: "Doe", grade: 85 } ,
    { firstName: "Jane",  lastName: "Doe", grade: 65 } ,
    { firstName: "Jack",  lastName: "Daniels", grade: 90 } ,
];


let passed = students.filter(function(student) {
    return student.grade > 75;
});


console.log(passed);


//search

fruits.push("banana");
fruits.push("orange");

let result = fruits.filter(function(fruit) {
    return fruit.includes("n");
});

console.log(result);

