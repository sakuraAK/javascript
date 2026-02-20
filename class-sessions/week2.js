let age = 17;

if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}


let score = 10;

if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else {
    console.log("C");
}

//Logical operators:

//&& both conditions are true
age = 17;
let hasId = true;

if (age >= 18 && hasId) {
    console.log("Access granted");
}

//|| at least one is true
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Relax");
}

//Negation a.k.a NOT !

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in");
}


/*
Create a system
Rules:
    - Allow entry if 18+
    - Or allow if 16+ and have parent's permission
*/
let pesronAge = 16;
let hasParentPermission = true;

if (pesronAge >= 18 || (pesronAge >= 16 && hasParentPermission)) {
    console.log("Entry allowed");
}
else {
    console.log("Entry denied");
}


//Nested condition

age = 80;

if (age >= 18) {
    console.log("Adult");

    if (age >= 65) {
        console.log("Senior discount");
    }
}

console.log("-------------- Bank Account System ---------------");

//Bank Account System
let balance = 100;
let withdrawalAmount = 200;
let isAccountActive = false;

if (isAccountActive) {
   if (withdrawalAmount <= balance) {
        console.log("Apporved");
   }
   else {
    console.log("Not Approved");
   }

}
else {
    console.log("Account is inactive.");
}

console.log("-------------- Functions ---------------");
//Functions


//declaration
function greet() {
    console.log("Hello!");
}

//use or calling a function
greet();


function greetUser(userName) {
    console.log("Hello " + userName + "!");
}

greetUser("John");
greetUser("Mark");

function greetUserLocalized(userName, localGreeting) {
    console.log(localGreeting + " " + userName + "!");
}

greetUserLocalized("Roni", "Hola");
greetUserLocalized("Jan", "Bonjour");

function add(a, b) {
    return a + b;
}

let result = add(3, 4);
console.log(result);


//Even or Odd
/*
    Write a function that will recieve a number
    and will return:
     - "Even" if the number is even
     - "Odd" if the number is odd
*/

//hint: use modulo operation %

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}

console.log(`4 is ${checkEvenOdd(4)}`);
console.log(`7 is ${checkEvenOdd(7)}`);


function canVote(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

function canVoteSimplified(age) {
    return age >= 18;
}


