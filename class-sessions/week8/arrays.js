//sort

let numbers = [10, 8, 1, 2, 3, 6, 5];

// numbers.sort((a, b) => a - b);

//ascending
numbers.sort(function(a, b) {
    return a - b;
});

//descending
numbers.sort(function(a, b) {
    return b - a;
});


//console.log(numbers);


//sorting strings
let names = ["John", "bob", "Diana", "Alice", "Jane"];

//ascending
names.sort(function(a, b){
    return a.localeCompare(b);
});

//descending
names.sort(function(a, b){
    return b.localeCompare(a);
});


//console.log(names);




//sorting objects
let students = [
    { firstName: "John",  lastName: "Doe", grade: 85 } ,
    { firstName: "Jane",  lastName: "Doe", grade: 65 } ,
    { firstName: "Jack",  lastName: "Daniels", grade: 90 } ,
];

 //sort by first name
students.sort(function(a, b){
    return a.firstName.localeCompare(b.firstName);
});

//console.log(students);

//sort by grade
students.sort((a, b) => b.grade - a.grade);
//console.log(`The student with the highest grade is ${students[0].firstName} ${students[0].lastName}`);


//filter + sort
let products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 }
];

//Products with price less than 1000 sorted by price low -> high
let filteredResult = products.filter(function(product){
    return product.price < 1000;
});

filteredResult.sort(function(productA, productB){
    return productA.price - productB.price;
});

console.log(filteredResult);