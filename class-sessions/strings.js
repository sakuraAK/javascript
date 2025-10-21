const cons = (str) => {console.log(str);}

//single line string
let firstString = 'This is a string';
//string concatenation
let secondString = 'Another string';

// console.log(firstString + secondString);

//string concatenation with template literals
// console.log(`First string: ${firstString}, and second - ${secondString}`);

//multiline strings \n
let multilineStrWithN = "Fisrt line \nSecond Line ...";
// console.log(`Regular multiline ${multilineStrWithN}`);

//multiline strings with backticks
let multilineStr = `Multiline
string is written between
backticks`
// console.log(`Backtick multiline ${multilineStr}`);

//escaping characters
let escCharacter = "First line \\n Second Line ...";
// console.log(`Escaped new line ${escCharacter}`);

//string length (wrappers)

cons(escCharacter.indexOf('rst'));
cons(escCharacter.length);

//accessing specific charactes in the string (index)
let newString = 'apple';
cons(`Character at the position 1 is ${newString[1]}`)

//changing case
cons(newString.toUpperCase())
//find sub-string (indexOf, includes)

// console.log(multilineStr);

