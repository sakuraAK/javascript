//defining numbers

let intNumber = 100;
let decimalNumber = 0.75;
let negativeNumber  = -5;

// console.log(typeof(intNumber));
// console.log(typeof(decimalNumber));



//min/max values Number.MAX_VALUE
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);


//defining really big or really small numbers
let bigNumber = 0.90071992547409921111;
// console.log(bigNumber);

//using e-notation
bigNumber = 1.25e123;
// console.log(bigNumber);

//BigInt for the times you need a really big numbers 1n, 100_000n
let bigIntNumber = 1n;
// console.log(typeof(bigIntNumber));
bigIntNumber = 1000_000_000_000n;
// console.log(typeof(bigIntNumber));
// console.log(bigIntNumber);

//Number formatting
//Rounding number to an integer (Math.round, floor, ceil)
let num1 = 1.438656
// console.log(Math.round(num1));
// console.log(Math.floor(num1));
// console.log(Math.ceil(num1));
//Fixed

// console.log(num1.toFixed(3));


//Display in locale-specific format (en-US, el-EL)
let num2 = 1_000_000;
// console.log(`USA: ${num2.toLocaleString('en-US')}`);
// console.log(`FR: ${num2.toLocaleString('fr-FR')}`);
// console.log(`IN: ${num2.toLocaleString('hi-IN')}`);



//Currency
let salary = 100000;
let monthlySalary = salary / 12;
console.log(monthlySalary.toFixed(2));
 

let formatter3 = new Intl.NumberFormat('ja-JA', { style: 'currency', currency: 'JPY' });
console.log(`Yen: ${formatter3.format(monthlySalary)}`);

let formatter4 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log(`USD: ${formatter4.format(monthlySalary)}`);