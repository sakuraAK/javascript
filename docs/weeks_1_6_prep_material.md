# Quiz Preparation Handout (Weeks 1–6)


## 1. VARIABLES & DATA TYPES

### Definition
Variables store data.

```javascript
let name = "Anna";     // string
let age = 25;          // number
let isStudent = true;  // boolean
```

### Examples

```javascript
let city = "Montreal";
let temperature = -5;

console.log(city);
console.log(temperature);

let x = 10;
let y = "10";

console.log(x === y); // false (different types)
```

---

## 2. OPERATORS

### Math Operators

```javascript
let a = 10 + 5;  // 15
let b = 10 - 3;  // 7
let c = 4 * 2;   // 8
let d = 8 / 2;   // 4
let e = 10 % 3;  // 1 (remainder)
```

### Comparison Operators

```javascript
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true
console.log(5 === "5"); // false
```

---

## 3. CONDITIONAL FLOWS

### if / else (single decision point)

```javascript
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### else if (multiple decision points)

```javascript
let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```

### Examples

```javascript
let temperature = -5;

if (temperature < 0) {
  console.log("Freezing");
}

let password = "1234";

if (password === "1234") {
  console.log("Access granted");
} else {
  console.log("Denied");
}
```

---

## 4. LOGICAL OPERATORS (USED WITHIN CONTROL FLOWS LIKE CONDITIONALS OR LOOPS)

### AND (&&) (ALL CONDITIONS MUST BE `TRUE`)

```javascript
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed");
}
```

### OR (||) (AT LEAST ONE CONDITION MUST BE `TRUE`)

```javascript
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("Relax");
}
```

### NOT (!)

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
}
```

---

## 5. LOOPS

### for loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### Examples

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

### Loop with condition

```javascript
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

---

## 6. ARRAYS (ORDERED CONTAINERS TO STORE MULTIPLE VARIABLES)

### Create Array

```javascript
let fruits = ["apple", "banana", "orange"];
```

### Access (Indexes in array start from 0)

```javascript
console.log(fruits[0]); // apple
```

### Add

```javascript
fruits.push("mango");
console.log(fruits); //["apple", "banana", "orange", "mango"]

fruits.splice(2, 0, "ananas"); //add at specific index
console.log(fruits); //["apple", "banana", "ananas", "orange", "mango"]

```

### Remove

```javascript
fruits.pop(); //removes last
console.log(fruits); //["apple", "banana", "ananas", "orange"]

fruits.splice(1, 1); //remove at specific index
console.log(fruits); //["apple", "ananas", "orange"]
```

### Loop through array

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## 7. FUNCTIONS

### Basic Function

```javascript
function greet() {
  console.log("Hello");
}
```

### With Parameters

```javascript
function greetUser(name) {
  console.log("Hello " + name);
}
```

### With Return Value

```javascript
function add(a, b) {
  return a + b;
}
```

### Examples

```javascript
function isEven(number) {
  return number % 2 === 0;
}

function canVote(age) {
  return age >= 18;
}
```

---

## 8. OBJECTS (DATA CONTAINERS)

### Create Object

```javascript
let person = {
  name: "Anna",
  age: 25,
  isStudent: true
};
```

### Access

```javascript
console.log(person.name);
```

### Modify

```javascript
person.age = 30;
```

### Add property

```javascript
person.city = "Montreal";
```

---

## 9. ARRAYS OF OBJECTS

```javascript
let students = [
  { name: "Anna", grade: 85 },
  { name: "Mark", grade: 90 }
];
```

### Loop

```javascript
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
```

### Example

```javascript
for (let i = 0; i < students.length; i++) {
  if (students[i].grade >= 80) {
    console.log(students[i].name);
  }
}
```

---

## 10. DOM (DOCUMENT OBJECT MODEL)

### Select Element

```javascript
let title = document.querySelector("#title");
```

### Change Text

```javascript
title.textContent = "Hello World";
```

### Change Style

```javascript
title.style.color = "red";
```

---

## 11. EVENTS

```javascript
let button = document.querySelector("#btn");

button.addEventListener("click", function() {
  console.log("Clicked");
});
```

### Example

```javascript
button.addEventListener("click", function() {
  title.textContent = "Changed!";
});
```

---

## 12. INPUT HANDLING

```javascript
let input = document.querySelector("#input");

console.log(input.value);
```

### Example

```javascript
button.addEventListener("click", function() {
  let name = input.value;
  console.log(name);
});
```

---

## 13. STATE (IMPORTANT)

### Definition

State = data that changes over time.

---

### Example

```javascript
let count = 0;

count++;
count++;

console.log(count);
```

### With DOM

```javascript
let count = 0;

button.addEventListener("click", function() {
  count++;
  console.log(count);
});
```

---

## 14. RENDERING PATTERN

### Key Idea

Update data → then update UI

---

### Example

```javascript
let tasks = ["Study", "Read"];

function render() {
  let list = document.querySelector("#list");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = tasks[i];
    list.appendChild(li);
  }
}
```

