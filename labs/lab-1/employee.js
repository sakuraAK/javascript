import createPrompt from "prompt-sync";
import employees from "./data.json" assert { type: "json" };

let prompt = createPrompt();

//log employee
const logEmployee = employee => {
  Object.entries(employee)
  .forEach((val) => console.log(`${val[0]}: ${val[1]}`));
}

//get input
var getInput = (promtMessage, validatorFunc, transformerFunc) => {
  const inputValue = prompt(promtMessage);
  if (validatorFunc && !validatorFunc(inputValue)) {
    console.log("Invalid input");
    getInput(promtMessage, validatorFunc, transformerFunc);
  }
  if(transformerFunc) {
    return transformerFunc(inputValue);
  }
  return inputValue;
}


//Validator functions

//is string valid
// const isStringValid = val => 
// {
//   if(val && val.trim().length > 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
const isStringValid = val => val && val.trim().length > 0;

//is boolean valid
 const isBooleanValid = 
 val => (val.toLowerCase() === "yes" || val.toLowerCase() === "no");


const isIntegerValid = (minVal, maxVal) => {
  return (val) =>
  {
    let numberVal = Number(val);
  
    if (!Number.isInteger(numberVal)) return false;
  
    if(numberVal < minVal || numberVal > maxVal) return false;
  
    return true;
  }
}

//is year valid

// const isYearValid = val => {
//   let numberVal = Number(val);
  
//   if (!Number.isInteger(numberVal)) return false;
  
//   if(numberVal < 1990 || numberVal > 2024) return false;
  
//   return true;
// }

// //is month valid
// const isMonthValid = val => {
//   let numberVal = Number(val);
  
//   if (!Number.isInteger(numberVal)) return false;
  
//   if(numberVal < 1 || numberVal > 12) return false;
  
//   return true;
// }

// //is day valid
// const isDayValid = val => {
//   let numberVal = Number(val);
  
//   if (!Number.isInteger(numberVal)) return false;
  
//   if(numberVal < 1 || numberVal > 31) return false;
  
//   return true;
// }


//search by name


//search by id





function addEmployee() {
  let employee = {};

  employee.firstName = getInput("Provide first name: ", isStringValid);
  employee.lastName = getInput("Provide last name: ", isStringValid);
  let year = getInput("Provide employee start year (1900-2024): ", isIntegerValid(1990, 2024));
  let month = getInput("Provide employee start month (1-12): ", isIntegerValid(1, 12));
  let day = getInput("Provide employee start day (1-31): ", isIntegerValid(1, 31));

  employee.startDate = new Date(year, month - 1, day);

  employee.isActive = getInput("Is employee active (yes/no): ", isBooleanValid, i => i.toLowerCase() === "yes");

  // //get name
  // let userInput = prompt("Provide first name:");
  // if (!userInput) {
  //   console.log("First name cannot be empty");
  //   process.exit(1);
  // }
  // employee.firstName = userInput;

  // //get last name
  // userInput = prompt("Provide last name:");
  // if (!userInput) {
  //   console.log("Last name cannot be empty");
  //   process.exit(1);
  // }
  // employee.lastName = userInput;

  // //get start year integer
  // userInput = prompt("Provide employee start year (1900-2024):");

  // if (Number.parseInt(userInput) === NaN) {
  //   console.log("Year should be an integer");
  //   process.exit(1);
  // }
  // let year = Number(userInput);
  // if (year < 1900 || year > 2024) {
  //   console.log("Year should be betweenn 1900 and 2024");
  //   process.exit(1);
  // }

  // //get start month integer
  // userInput = prompt("Provide employee start month (1-12):");
  // if (Number.parseInt(userInput) === NaN) {
  //   console.log("Month should be an integer");
  //   process.exit(1);
  // }
  // let month = new Number(userInput);
  // if (month < 1 || month > 12) {
  //   console.log("Month value should be between 1 and 12");
  //   process.exit(1);
  // }

  // //get start day integer
  // userInput = prompt("Provide employee start day (1-31)");
  // if (Number.parseInt(userInput) === NaN) {
  //   console.log("Provide employee start day (1-31)");
  //   process.exit(1);
  // }
  // let day = new Number(userInput);
  // if (day < 1 || day > 31) {
  //   console.log("Provide employee start day (1-31)");
  //   process.exit(1);
  // }

  // //set start date
  // employee.startDate = new Date(year, month - 1, day);

  // //get active (yes/no)
  // userInput = prompt("Is employee active (yes/no):");
  // if (userInput.toLowerCase() !== "yes" && userInput.toLowerCase() !== "no") {
  //   console.log("Is employee active (yes/no)");
  //   process.exit(1);
  // }

  // employee.isActive = userInput.toLowerCase() === "yes";


  //output employee JSON
  console.log(`-----------Employee details --------------
  ${JSON.stringify(employee, null, 2)}`);
}

function listEmployeesByName(short) {
  let fName = getInput("Provide first name: ");
  let lName = getInput("Provide last name: ");
  let result = employees
  .filter(employee => employee.firstName === fName && employee.lastName === lName);
  console.log(`-------- Search result------------`);
  if (short) {
    result.map(el => ({
      id: el.id,
      fullName: `${el.firstName} ${el.lastName}`
    })).forEach(el => logEmployee(el));
  }
  else {
    result.forEach(r => logEmployee(r));
  }
}

function listEmployees() {
  console.log(`
        ------ Employee details -------------- 
        `);
  employees.forEach((employee) => {
    logEmployee(employee);
    prompt("Press enter key to continue...");
  });
}

const command = process.argv[2].toLowerCase();

console.log(`Received command: ${command}`);

switch (command) {
  case "add":
    addEmployee();
    break;
  case "list":
    listEmployees();
    break;
  case "search-by-name":
    listEmployeesByName(false);
    break;
  case "search-by-name-short":
      listEmployeesByName(true);
      break;
  default:
    console.log("Not supported command. Exiting...");
    process.exit(1);
}

process.exit(0);
