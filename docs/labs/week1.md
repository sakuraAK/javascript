# Homework 1 — Variables & If Statements
### Objective
In this assignment, you will practice:
- Declaring variables using let
- Using strings, numbers, and booleans
- Using comparison operators (> , < , >= , ===)
- Writing ```if```, ```else if```, and ```else``` statements
- Testing your code with different values

### Instructions
1. Create a file called: homework1.js
2. Complete all tasks below.
3. Test your code by changing variable values.
4. Add comments explaining what your code does.

Example comment:

// This checks if the temperature is below zero

#### Task 1 — Personal Introduction
Create three variables:
```name, age, city```

Print a sentence in this format:

```Hi, my name is ___, I am ___ years old and I live in ___. ```

Example structure (type this in your file):
```javascript
let name = "Anna";
let age = 25;
let city = "Montreal";

console.log("Hi, my name is " + name + ", I am " + age + " years old and I live in " + city + ".");
```
---
### Task 2 — Temperature Advisor

Create a variable:
```let temperature = ?```

Write an ```if / else if / else``` statement with the following rules:

Below 0 → print "Freezing"

Between 0 and 15 → print "Cold"

Between 16 and 25 → print "Nice weather"

Above 25 → print "Hot"

Requirements:

- Use comparison operators
- Test at least 4 different temperature values
---

### Task 3 — Even or Odd

Create: ```let number = ?```

Check:
```
If the number is even → print "Even" 
Otherwise → print "Odd"
```

Hint: ```number % 2```

Test at least 3 different numbers.

---
### Task 4 — Simple Login System

Create two variables:
```
let username = ?
let password = ?
```
Correct credentials:
```
Username: "admin"
Password: "12345"
```
Rules: 
```
If both match → print "Login successful"
Otherwise → print "Invalid credentials"
```

Requirement:

- Use strict equality ===

---
### Task 5 — Grade Calculator

Create:
```
let score = ?
```
Rules:
```
90 and above → "A"
80–89 → "B"
70–79 → "C"
Below 70 → "Fail"
```
Use ```if / else if / else```.

Test multiple scores.

*Bonus (Optional)*

Add:
- A boolean variable (example: isActive)
- Use ```&&``` or ```||``` in at least one condition

Example idea:
```
Only allow login if username and password are correc AND account is active.
```
---
