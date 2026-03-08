# Week 4 Homework – Objects & Arrays of Objects

**Topics Covered:**
- Objects
- Accessing & modifying object properties
- Arrays of objects
- Loops with objects
- Functions working with objects

---

## Instructions

1. Create a file called:

   ```
   week4_homework.js
   ```

2. Use `let` (not `var`)
3. Use `===` for comparisons
4. Write clear and readable code
5. Add comments explaining your logic
6. Test multiple cases
7. Make sure your file runs without errors

---

# Task 1 — Create a Book Object

Create an object called `book` with the following properties:

- title
- author
- year
- isAvailable (boolean)

Example structure:

```javascript
let book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
  isAvailable: true
};
```

### Requirements:

- Print a sentence using the object data.
- Change one property.
- Add a new property (e.g., genre or rating).

---

# Task 2 — Library Array

Create an array called `library` containing **at least 4 book objects**.

Example structure:

```javascript
let library = [
  { title: "Book 1", author: "Author 1", year: 2000, isAvailable: true },
  { title: "Book 2", author: "Author 2", year: 2010, isAvailable: false }
];
```

### Requirements:

1. Print the titles of all available books.
2. Count how many books are available.
3. Print the total number of books in the library.

---

# Task 3 — Function: Find Book

Create a function:

```javascript
function findBook(title)
```

### Rules:

- If a book with that title exists → return the book object.
- If not → return `"Not found"`.

### Requirements:

- Use a loop.
- Use `===` for comparison.
- Test the function with:
  - An existing title
  - A non-existing title

---

# Task 4 — Calculate Average Publication Year

Write code that:

1. Loops through the `library`
2. Calculates the average publication year
3. Prints the result

Hint:
- Use an accumulator variable (like `total`)
- Divide by `library.length`

---

# Bonus (Optional)

Add a property `rating` (1–5) to each book.

Create a function:

```javascript
function findHighestRatedBook()
```

The function should:
- Loop through the library
- Find the book with the highest rating
- Return that book object

---

## Reminder

Objects help us model real-world data.

Think in terms of:
Array → Object → Properties → Logic
