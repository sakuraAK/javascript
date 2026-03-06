let numbers = [5, 10, 15];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}


console.log(total);
console.log(numbers.length);

console.log('------------------------------------------------');

let person = {
    name: "Jane",
    age: 25,
    isStudent: true,
    courses: ["Javascript", "Sociology"],
};

console.log(person.name);
console.log(person.age);

person.age = 26;
console.log(person.age);


console.log(person);

person.city = "Montreal";

console.log(person);

let car = {
    brand: "Toyota",
    year: "2026",
    isElectric: false,
}

//print brand
console.log(car.brand);

//chnage year
car.year = 1980;
console.log(car.year);

//add color
car.color = "red";
console.log(car);


function introduce(person) {
    console.log(`Hi, my name is ${person.name}`);
}

introduce(person);


function canVote(person) {
    // if (person.age >= 18) {
    //     return true;
    // }

    // return false;

    return person.age >= 18;
}


let bankAccount = {
    owner: person,
    balance: 500,
    isActive: true,
};


console.log(bankAccount);

function withdraw(account, amount) {

    console.log(`Hello ${account.owner.name}`);

    if (!account.isActive) {
        console.log("Account inactive");
        return;
    }

    if (amount > account.balance) {
        console.log("Insufficient funds");
        return;
    }

    account.balance = account.balance - amount;
}


withdraw(bankAccount, 100);

console.log(bankAccount);


console.log('------------------------------------------------');
let students = [
    {name: "Jack", grade: 85},
    {name: "John", grade: 95},
    {name: "Jill", grade: 70},
];


//Loop through list of students and print their names
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

//Find highest grade
let highest = students[0].grade;
let bestStudent = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].grade > highest) {
        highest = students[i].grade;
        bestStudent = students[i];
    }
}

console.log(`${bestStudent.name} has the highest grade of ${highest}`);

// Print passing students assuming passing grade is 75
for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 75) {
        console.log(students[i].name);
    }
}



console.log('------------------Inventory System------------------------------');

let inventory = [
    {name: "Laptop", price: 1200, inStock: true},
    {name: "Smart Phone", price: 800, inStock: false},
    {name: "Tablet", price: 600, inStock: true},
];


//Print all available products
console.log('------------------Available Products------------------------------');
for(let i = 0; i < inventory.length; i++) {
    if (inventory[i].inStock) {
        console.log(inventory[i].name);
    }
}


//Calculate the total value of in-stock items
let totalValue = 0;

for(let i = 0; i < inventory.length; i++) {
    if (inventory[i].inStock) {
        totalValue = totalValue + inventory[i].price;
    }
}
console.log(`The total value of in-stock products is: ${totalValue}`);

//find product by name
function findProduct(name) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === name) {
            return inventory[i];
        }
    }
    return null;
}


let productName = "Earpods";
let soughtProduct = findProduct(productName);

if (soughtProduct) {
    console.log(`Product ${productName} found!`);
}
else {
    console.log(`Product ${productName} not found!`);
}




