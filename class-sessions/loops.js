import employees from './data.json' assert {type: 'json'}


console.log(employees);


// let counter = 0;

// while (counter < employees.length) {
//     // console.log('--- Empoyee details----');
//     console.log(JSON.stringify(employees[counter], null, 2));
//     counter++;
// }

// counter = 0;
// do {
//     console.log('--- Empoyee details----');
//     console.log(JSON.stringify(employees[counter], null, 2));
//     counter++;
// } while(employees[counter]);



// for (let i = 0; i < employees.length; i = i + 1) {
//     //console.log('--- Empoyee details----');
//     console.log(JSON.stringify(employees[i], null, 2));
// }

// for (let employee of employees) {
//     // console.log('--- Empoyee details----');
//     console.log(JSON.stringify(employee, null, 2));
// }



// let employee = employees[0];
// console.log(`
// --- Logging employee details ----
// `);
// for (let prop in employee) {
//     console.log(`${prop} : ${employee[prop]}`);
// }


// for (let employee of employees) {
//   console.log(`
// --- Logging employee details ----
// `);
//   for (let prop in employee) {
//     console.log(`${prop} : ${employee[prop]}`);
//   }
// }


// let counter = 0;

// while(employees[counter]) {
//     if (counter > 4) {
//         break;
//     }
//     console.log('--- Empoyee details----');
//     console.log(JSON.stringify(employees[counter], null, 2));
//     counter++;
// }





// for(let i = 0; i < employees.length; i++) {
//     if (i % 2) {
//         continue;
//     }
//     console.log('--- Empoyee details----');
//     console.log(JSON.stringify(employees[i], null, 2));
// }




// employeeLbl: for (let employee of employees) {
//   console.log(`
// --- Logging employee details ----
// `);
//   for (let prop in employee) {
//     if (prop === "dateBirth") {
//         continue employeeLbl;
//     }
//     console.log(`${prop} : ${employee[prop]}`);
//   }
// }