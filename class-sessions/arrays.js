let ar = [];
let ar1 = ["Andrey", "Jake", "Viktor"];

console.log(`The length of an array: ${ar1.length}`);
console.log('-----adding avlues');

ar1.push("Peter");
console.log(`The contents of array:
${ar1}`);

ar1.unshift("Paul");
console.log(`The contents of array:
${ar1}`);

ar1.shift("Paul");
console.log(`The contents of array:
${ar1}`);

console.log(`
-----accessing values
`);
let idx = 0;
console.log(`Value at ${idx} is ${ar1[idx]}`);
idx = 10;
console.log(`Value at ${idx} is ${ar1[idx]}`);

console.log(`
-----splice. Add value at specific index without removal
`);
ar1.splice(2, 0, "Paul");
console.log(`The contents of array:
${ar1}`);


console.log(`
-----splice. Add value at specific index and remove current element
`);
ar1.splice(2, 1, "Andy");
console.log(`The contents of array:
${ar1}`);

console.log(`
-----splice. Remove value
`);
ar1.splice(0, 2);
console.log(`The contents of array:
${ar1}`);


let val = "Gregory";
console.log(`Array conatins ${val}: ${ar1.includes(val)}`);


let obj1 = {
    firstName: "Andy"
};

let obj2 = {
    firstName: "Michael"
};

let obj3 = {
    firstName: "Andy"
};

let objAr = [obj1, obj2];

console.log(`Array conatins ${obj1}: ${objAr.includes(obj1)}`);

val = "Gregory";
console.log(`Index of  ${val}: ${ar1.indexOf(val)}`);
