//create with object literal (preferred)
let obj1 = {};


//create object with c'tor
let obj2 = Object();

obj2.fName = "Andrey";
obj2.sName = "Andrey";

//Poulate properties on an object


//Populate am obejct with object literal syntax
let obj3 = {
    firstName: "Andrey",
    familyName: "Andrey",
    dateOfBirth: "1981-10-03"
}

let obj4 = {
    'firstName': "Andrey",
    'familyNme': "Andrey",
    'dateOfBirth': "1981-10-03"
}


//Accessing object proprties (dot-synatx, square bracket syntax)
console.log(obj3.firstName);
console.log(obj3["familyName"]);


//Deleting object properties

delete obj4.dateOfBirth;

// console.log(obj4);


//Passing by reference/by value. Updating one updates the other

let obj5 = {
    firstName: "Andrey",
    familyName: "Andrey",
    dateOfBirth: "1981-10-03"
}

let obj6 = obj5;

obj6.firstName = "John";

// console.log(obj5);
// console.log(obj6);


let jsonStrObj = JSON.stringify(obj5);
console.log(jsonStrObj);

let obj7 = JSON.parse(jsonStrObj);
console.log(obj7);
console.log(typeof(obj7))