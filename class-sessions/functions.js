function myFirstFunction(name) {
    let result = true;
    console.log(`The name is: ${name}`);
    return result;
}


// let result = myFirstFunction("Andrey");

// const myLog = function(msg) {
//     console.log(msg);
// }


// myLog("Message");

// const myLog = msg => console.log(msg);


// myLog("Message");


// const myLog = msg => {
//     let extMessage = `${new Date().toUTCString()} - ${msg}`;
//     console.log(extMessage);
// }


// myLog("Message");


// const myLog = () => console.log("Greetings!");
// myLog();

// const newEmployee = (fName, lName) => (
//     {
//         firstName: fName,
//         lastName: lName,
//         dateJoined: new Date()
//     });

// console.log(JSON.stringify(newEmployee("Andrey", "Andrey"), null, 2));


// const formattedDate = () =>  new Date().toUTCString();

// console.log(formattedDate());


function removeFirst(ar) {
    ar.shift();
}

let ar = ["John", "Andrey", "Jim"];
console.log(ar);
removeFirst(ar);
console.log(ar);


//recursion


//high-order functions


