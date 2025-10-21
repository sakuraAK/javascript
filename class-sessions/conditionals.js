// Employee
let employee = {
    firstName: "Johnny",
    lastName: "Bravo",
    startDate: new Date(2019, 10, 28),
    numYearsService: 20,
    isActive: true,
    department: "Engineering",
    title: "VP Engineering"
  };
  
  // Add badge collor based on years worled (yellow, blue, red, silver)
  
  if (employee.numYearsService < 5) {
      employee.badgeColor = "yellow";
  }
  else if (employee.numYearsService >= 5 && employee.numYearsService < 10) {
      employee.badgeColor = "blue";
  }
  else if (employee.numYearsService >= 10 && employee.numYearsService < 15) {
    employee.badgeColor = "red";
  }
  else {
      employee.badgeColor = "silver";
  }

  // console.log(JSON.stringify(employee));



  // Evaluating multiple conditions for truthyness in all conditions
 
  
  // Evaluating multiple conditions for truthyness in one or more conditions 
  if (employee.numYearsService > 5 || employee.title.startsWith("VP")) {
    console.log("1 Employee meets the criteria");
  }
  
  // Evaluating for a condition to NOT be true
  if (employee.numYearsService > 4 && !employee.title.startsWith("VP")) {
    console.log("2 Employee meets the criteria");
  }
  
  // Using the ternary operator (x>y)?a:b 

  employee.bonus = employee.numYearsService > 5 ? 1000 : 500;
  // console.log(JSON.stringify(employee));


  /**
   * Switch
   */

  switch(employee.badgeColor) {
    case "yellow":
    case "blue":
      console.log("Access denied");
      break;
    case "red":
      console.log("Read access");
      break;
    case "silver":
      console.log("God mode");
      break;
    default:
      console.log("Unauthorized access");
  }
  
  