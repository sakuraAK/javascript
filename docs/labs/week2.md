# Homework 2 – Functions & Logic

**Topics Covered:**
- Logical operators (&&, ||, !)
- Nested conditionals
- Functions
- Return values


---

## Instructions

1. Create a file called:

   ```
   week2_homework.js
   ```

2. Use `let` (not `var`)
3. Use `===` for comparisons
4. Write clean, readable code
5. Add comments explaining your logic
6. Test multiple values for each function
7. Make sure your file runs without errors
8. **Submit using GitHub**
    - Push your `week2_homework.js` file to your repository
    - Include a commit message: homework 2 solution
    - Share the repository link with your instructor

---

# Task 1 — Advanced Login System

Create three variables:

- `username`
- `password`
- `isActive` (boolean)

### Correct credentials:
- Username: `"admin"`
- Password: `"1234"`

### Rules:

1. If username AND password match AND account is active →  
   Print: `"Login successful"`

2. If username AND password match BUT account is inactive →  
   Print: `"Account inactive"`

3. Otherwise →  
   Print: `"Invalid credentials"`

### Example starting structure:

```javascript
let username = "admin";
let password = "1234";
let isActive = true;

// Your logic here
```

Test:
- Wrong username
- Wrong password
- Inactive account

---

# Task 2 — Age Access Function

Create a function:

```javascript
function checkAccess(age, hasID)
```

### Rules:

- If age >= 18 AND hasID is true → return `"Access granted"`
- Otherwise → return `"Access denied"`

### Requirements:

- Call the function at least 3 times
- Use different values

Example:

```javascript
checkAccess(20, true);
checkAccess(17, true);
checkAccess(22, false);
```

---

# Task 3 — Bank Withdrawal Function

Create a function:

```javascript
function withdraw(balance, amount)
```

### Rules:

- If `amount` > `balance` → return `"Insufficient funds"`
- Otherwise → return the new balance

### Requirements:

- Test at least 3 scenarios
- Include at least one insufficient funds case

Example:

```javascript
withdraw(500, 200);
withdraw(300, 500);
```

---

# Task 4 — Grade Evaluator Function

Create a function:

```javascript
function getGrade(score)
```

### Return:

- `"A"` → 90 and above  
- `"B"` → 80–89  
- `"C"` → 70–79  
- `"Fail"` → below 70  

### Requirements:

- Use `else if`
- Test at least 4 different scores

Example:

```javascript
getGrade(95);
getGrade(82);
getGrade(74);
getGrade(60);
```

---

# Bonus (Optional)

Create a function:

```javascript
function isEven(number)
```

Return:
- `true` if number is even
- `false` if number is odd

Then create another function that uses `isEven()` inside it.

---