// //creating dates from string
// let d1 = new Date("2024-12-11T22:35:15-05:00");
// //console.log(d1);

// //now

// let now = new Date();

// //console.log(now);

// //c'tor
// let d3 = new Date(2024, 2, 13);
// //console.log(d3);

// //accessing elements from a date
// let dEpoc = new Date(0);
// //console.log(`The time is ${dEpoc.getHours()}:${dEpoc.getMinutes()}`);


// //Milliseconds from epoc (1-Jan-1970)





// //Formatting dates


// //Create a date

// let date = new Date("2024-02-12T22:35:15-05:00");
// console.log(`Date: ${date}`);


// //Display just the calendar date
// console.log(`Only date: ${date.toDateString()}`);


// //Display a locale-specific date string (.toLocaleString)
// console.log(`fr-FR: ${date.toLocaleDateString("fr-FR")}`);
// console.log(`en-US: ${date.toLocaleDateString("en-US")}`);
// console.log(`ar-KW: ${date.toLocaleDateString("ar-KW")}`);

// console.log(`fr-FR: ${date.toLocaleTimeString("fr-FR")}`);
// console.log(`en-US: ${date.toLocaleTimeString("en-US")}`);

// //Display just time
// console.log(`Only time: ${date.toTimeString()}`);


// //Custom date string

// let options = {
//     dateStyle: "short",
//     timeStyle: "short"
// };
// const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;
// console.log(americanDateTime(date));


export function getFormattedDate(format) {
    let date = new Date();
    return date.toLocaleDateString(format);
}

function getFormattedDateToLower(format) {
    let date = new Date();
    
    return date.toLocaleDateString(format).toLowerCase();
}

// let formattedDateStr = getFormattedDate("en-US");

// console.log(formattedDateStr);

