console.log('Hello world!');
// // console.log('Hello again');

let firstName = 'Andrey';

console.log('Hello ' + firstName);

// // let sum = 3 + 2;
const dateOfBirth = '10/03/1981';
// // sum = 10;
let lastName = 'K';
// // console.log('Hello ' + firstName + ' ' + lastName);

let s = 'Single\nquotes';
let doubleQString = "Double";
//let grettingStr = "Hello " + firstName + " " + lastName;
//let grettingStr = `Hello ${firstName} ${lastName}!`;
let multiLine = `0Hello 
Andrey
!
`;
console.log(multiLine);
// // // single

// // console.log(`The string is: ${grettingStr.length}`);
// // console.log(`The first letter is: ${grettingStr[0]}`);
// // console.log(`Where is ! in string: ${grettingStr.indexOf('!')}`);
// // console.log(`Where is @ in string: ${grettingStr.indexOf('@')}`);

// /*
// multi
// line
// */

let email = 's@omenamedomain.net';
let indexOfAt = email.indexOf('@');
console.log(`Index of @ in email: ${indexOfAt}`);

if (indexOfAt > 1) {
    console.log(`The email ${email} is valid`);
}
else if (indexOfAt === 1) {
    console.log(`The email ${email} is invalid, @ found at ${indexOfAt}`);
}
else if (indexOfAt === 0) {
    console.log(`The email ${email} is invalid, @ found at ${indexOfAt}`);
}
else {
    console.log(`The email ${email} is invalid, @ not found`);
}

// // console.log(indexOfAt === 0);

// // let boolVar = true;
// // console.log(!boolVar);

let numbers = [];

// // numbers.push(6);

// // console.log(numbers);
// // numbers.pop();
// // console.log(numbers[0]);
// // console.log(numbers.length);

// let sum = 0;
// // sum = sum + numbers[0];
// // sum = sum + numbers[1];
// // sum = sum + numbers[2];
// // sum = sum + numbers[3];
// // sum = sum + numbers[4];
// // for (let i = 0; i < numbers.length; i++) {
// //     sum = sum + numbers[i];
// // }

// // console.log(`The sum of numbers: ${sum}`);

// // let index = 0;
// // while (index < numbers.length) {
// //     sum += numbers[index];
// //     console.log(`Sum now is: ${sum}`);
// //     index = index + 1;
// // }

// // let details = {};
// // details.firstName = 'A';
// // details.lastName = 'K';
// // details.dateOfBirth = '01/01/1900';
// // details.yearsEmployed = 15;

// // console.log(details);

// // let largeDetails = {
// //     firstName: 'A',
// //     lastName: 'K',
// //     dateOfBirth: '01/01/1900',
// //     yearsEmployed: 15,
// //     details: details,
// // };

// // console.log(largeDetails);

// function sumNumbers(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i];
//     }
//     return sum;
// }

// let numbers = [1, 2, 3, 4, 5];

// console.log(`Sum of numbers: ${sumNumbers(numbers)}`);
