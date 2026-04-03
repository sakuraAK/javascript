# Practice Quiz (Weeks 1–6)

## Part 1 — Multiple Choice

### 1. What will this output?

```javascript
let x = "5";
let y = 5;

console.log(x === y);
```

A) true  
B) false  
C) undefined  
D) error  

---

### 2. Which operator means AND?

A) ||  
B) &&  
C) !  
D) ===  

---

### 3. What does this return?

```javascript
10 % 3
```

A) 3  
B) 1  
C) 0  
D) 10  

---

### 4. Which is a correct array?

A) `{1, 2, 3}`  
B) `(1, 2, 3)`  
C) `[1, 2, 3]`  
D) `<1, 2, 3>`  

---

### 5. What does `document.querySelector("#title")` uses to select?

A) A class  
B) An id  
C) A tag  
D) A variable  


---

## Part 2 — Code Reading

### 6. What will this print?

```javascript
let age = 17;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

### 7. What will this print?

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

---

### 8. What will this print?

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

---

### 9. What will this print?

```javascript
let numbers = [5, 10, 15];

console.log(numbers[1]);
```

---

### 10. What happens when button is clicked?

```javascript
button.addEventListener("click", function() {
  console.log("Hello");
});
```

---

# Part 3 — Fix the Code

### 11. Fix the error

```javascript
let title = document.querySelector("title");
title.textContent = "Hello";
```

---

### 12. Fix the condition

```javascript
let age = 20;

if (age = 18) {
  console.log("Adult");
}
```

---

---

## Part 4 — Write Code

### 13. Even or Odd

Write code that:
- Checks if a number is even or odd
- Prints result

---

### 14. Loop

Write a loop that:
- Prints numbers from 1 to 5

---

### 15. Function

Write a function:

```javascript
function square(num)
```

It should return the square of a number.

---

### 16. Array

Create an array of 3 fruits and:
- Print each fruit using a loop

---

### 17. Object

Create an object:

- name
- age

Print:
"My name is ___"

---


## Part 5 — DOM

### 18. Select and change text

Select an element with id `title` and change text to:

"Welcome!"

---

### 19. Button Click

Write code so that:
- When button is clicked
- It prints "Clicked!"


---

## Bonus

### 20. State

Create a counter:
- Starts at 0
- Increases by 1 when button is clicked
- Displays value

---

---

# ANSWERS

---

## Part 1

1. B (false)  
2. B (&&)  
3. B (1)  
4. C ([1, 2, 3])  
5. B (id)  

---

## Part 2

6. Minor  

7.
```
0
1
2
```

8. 5  

9. 10  

10. Prints "Hello" when clicked  

---

## Part 3

11.
```javascript
let title = document.querySelector("#title");
```

12.
```javascript
if (age === 18)
```

---

## Part 4

13.
```javascript
let num = 4;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

14.
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

15.
```javascript
function square(num) {
  return num * num;
}
```

16.
```javascript
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

17.
```javascript
let person = {
  name: "Anna",
  age: 25
};

console.log("My name is " + person.name);
```

---

## Part 5

18.
```javascript
let title = document.querySelector("#title");
title.textContent = "Welcome!";
```

19.
```javascript
button.addEventListener("click", function() {
  console.log("Clicked!");
});
```

---

## Bonus

20.
```javascript
let count = 0;

button.addEventListener("click", function() {
  count++;
  console.log(count);
});
```

