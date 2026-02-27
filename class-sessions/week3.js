function isAdult(age) {
    return age >= 18;
}


console.log(isAdult(20)); //true



console.log(isAdult(15)); //false

let age = 15;

if(isAdult(age)) {
    console.log("Access allowed");
}
else {
    console.log("Access denied");
}


function checkEven(number) {
    let result = "";
    if (number % 2 === 0) {
        result = "Even";
    }
    else {
        result = "Odd";
    }
    
    return result;
}

let val = 0;

console.log(checkEven(val));

//loops
console.log('--------------------loops----------------------');


function print() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

print();
console.log('-------------for---------------------')
for (let i = 0; i <= 5; i = i + 1) {
    console.log(i);    
}

/*
First iteration
i  = 0
i < 5 = true

print

i = i + 1 -> i = 1
-------------------
Second
i < 5, 1 < 5 -> true
print

i = i + 1 -> i = 2

.....

i = 5 -> i < 5 -> false

stop
*/

//countdown from 10

for (let i = 10; i > 0; i = i - 1) {
    console.log(i);
}


//print even numbers between 0 - 20

console.log('--------------------------------------');

for (let i = 0; i <= 20; i++) {
    
    //console.log(`${i} is ${checkEven(i)}`);
    if (i % 2 === 0) {
        console.log(`${i} is ${checkEven(i)}`);
    }
}

//sum number between 1 to 10
console.log('--------------------------------------');
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(`Sum of numbers between 1-10: ${sum}`);
console.log('--------------------------------------');

let number = 5;

for(let i = 1; i <= 10; i = i + 1) {
    console.log(`${i}X${number} = ${number * i}` );
}


//arrays
console.log('--------------arrays------------------------');

let fruits = ["apple", "orange", "kiwi"];

//index starts from 0
//if access non existent index you will get 'undefined'
console.log(fruits[0]);

//add elements

console.log(fruits);
fruits.push("mango");
console.log(fruits);

//loop over arrays

console.log(`Array size: ${fruits.length}`);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


//functions using loops and arrays