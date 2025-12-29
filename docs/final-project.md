# Final Project – Task Tracker Application

## Overview

For your final project, you will build a **Task Tracker (To-Do) web application** using **React**. 

This project uses **only the React and JavaScript concepts covered in class**. The goal is to help you demonstrate that you understand the **core ideas of React**, not to build a complex or perfect app.

Focus on **correctness, simplicity, and clarity**.

---

## Project Goal

Create a simple application that allows a user to:

* Add tasks
* View a list of tasks
* Mark tasks as completed
* Delete tasks
* See basic task statistics

---

## What You Are Expected to Demonstrate

By completing this project, you should show that you understand:

* React components
* JSX
* Props
* State (`useState`)
* Handling user events
* Rendering lists
* Conditional rendering

---

## Application Description

### Task Tracker – Focus Edition

Your app will help users keep track of daily tasks.

The app should have a **simple layout** and be easy to use. Visual design is **not** the main focus.

---

## Required Sections

Your application must include the following sections:

### Header

* Displays the application title (e.g., "My Task Tracker")

### Task Input

* Text input for entering a task name
* Button to add a task

### Task List

* Displays all added tasks
* Each task must show:

  * Task name
  * A way to mark the task as completed
  * A button to delete the task

### Footer / Summary

* Shows:

  * Total number of tasks
  * Number of completed tasks

---

## Functional Requirements

### Add a Task

* User types a task name
* Clicking **Add Task**:

  * Adds the task to the list
  * Clears the input field

❗ Empty tasks must NOT be added

---

### Display Tasks

* Tasks must be stored in React **state**
* Tasks must be displayed using `.map()`
* Each task must have a unique `id`

---

### Mark Task as Completed

* User can mark a task as completed
* Completed tasks must look different (example: crossed-out text)

This must use:

* State updates
* Conditional rendering or conditional styling

---

### Delete a Task

* User can remove a task from the list
* The task list updates immediately

---

### Task Statistics

* Footer must show:

  * Total number of tasks
  * Number of completed tasks

These values must update automatically when tasks change.

---

## Required React Concepts

❗ Your project **must include**:

* Functional components
* JSX syntax
* `useState`
* Props (data passed from parent to child)
* Event handlers (`onClick`, `onChange`)
* List rendering with `map()` and `key`
* Conditional rendering

---

## Suggested Component Structure

You are encouraged to organize your app like this:

* `App`

  * `Header`
  * `TaskInput`
  * `TaskList`

    * `TaskItem`
  * `Footer`

You do not need to follow this exactly, but your app should be **component-based**.

---

## Styling Rules

* Use basic CSS only
* No frameworks (Bootstrap, Tailwind, Material UI, etc.)

Your app should:

* Be readable
* Have clear spacing
* Clearly show completed vs active tasks

---

## Optional Bonus Features

Only attempt these if everything else is complete:

* Filter tasks (All / Completed / Active)
* Show a message when there are no tasks
* Limit task name length

❗  Bonus features will **not** make up for missing required features.

---

## Submission Requirements 

❗ This is **individual** project. Group or identical submissions will not be accepted.

❗ You **must** submit your project using **Git and GitHub**.

Requirements:
- Create or use an existing Git repository for your project
- Push the repository to GitHub
- Commit your work regularly
- Meaningful commit messages are expected

---

### Repository Structure (Suggested)
```
 ├── src/
    ├── final-project/
        ├── App.jsx
           ├── components/
              ├── Header.jsx
              ├── TaskInput.jsx
              ├── TaskList.jsx
              ├── TaskItem.jsx
              └── Footer.jsx
```

---

## README.md Requirements

Your `README.md` file must include:

- Project title and description
- How to run the application
- Example usage

---
## How This Project Will Be Evaluated

Your project will be graded based on:

* Correct use of React concepts
* Functionality
* Code readability
* Component structure

❗  Visual design is **not** the main focus.

---

## Final Notes

This project is meant to be **achievable and confidence-building**.

Keep it simple, follow the requirements, and focus on showing what you’ve learned.

Good luck! 
