console.log('Todo App loaded successfiuly!');

document.addEventListener("DOMContentLoaded", function() {

    // Get DOM elements
    let todoInput = document.querySelector("#todoInput");
    let addBtn = document.querySelector("#addBtn");
    let todoList = document.querySelector("#todoList");
    let clearBtn = document.querySelector("#clearBtn");
    let filterButtons = document.querySelectorAll(".filter-btn");
    let todoCount = document.querySelector("#todoCount");

    // Load todos from localStorage or start with empty array

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let currentFilter = "all"; //active, completed


    // Create todo object
    function createTodo(text) {
        return {
            id: Date.now(),
            text: text,
            completed: false,
        };
    }

    // Save todos to localStorage
    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }


    function render() {
        todoList.innerHTML = "";

        let filteredTodos = todos;

        if (currentFilter === "active") {
            filteredTodos = todos.filter(todo => !todo.completed);
        }
        else if (currentFilter === "completed") {
            filteredTodos = todos.filter(todo => todo.completed);
        }

        filteredTodos.forEach(function(todo) {
            let li = document.createElement("li");
            li.className = "todo-item";
            if (todo.completed) {
                li.classList.add("completed");
            }

            //Create checkbox
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";
            checkbox.checked = todo.completed;
            checkbox.addEventListener("change", function() {
                toggleTodo(todo.id);
            });

            //Create text span
            let span = document.createElement("span");
            span.textContent = todo.text;
            span.className = "todo-text";

            //Create delete button
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";
            deleteBtn.addEventListener("click", function() {
                deleteTodo(todo.id);
            });

            li.appendChild(checkbox);
            li.append(span);
            li.append(deleteBtn);
            todoList.appendChild(li);

        });
        
        updateCount();

    }


    //Toggle completion
    function toggleTodo(id) {
        let todo = todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            saveTodos();
            render();
        }
    }


    //Delete todo
    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        render();
    }

    //Add new todo
    function addTodo() {
        let text = todoInput.value.trim();
        if(text === "") {
            alert("Please enter a task!");
            return;
        }

        todos.push(createTodo(text));

        saveTodos();
        todoInput.value = "";
        render();
    }

    //Update filter
    function setFilter(filter) {

        console.log(event);

        currentFilter = filter;

        //Update active button styling
        filterButtons.forEach(btn => btn.classList.remove("active"));
        event.target.classList.add("active");

        render();
    }



    //Update todo count
    function updateCount() {
       let activeTodos = todos.filter(todo => !todo.completed).length;
       todoCount.textContent = `${activeTodos} ${activeTodos === 1 ? 'task' : 'tasks'}`;
    }

    //Clear completed todos
    function clearCompleted() {
        todos = todos.filter(todo => !todo.completed);
        saveTodos();
        render();
    }


    //Event listeners 
    addBtn.addEventListener("click", addTodo);
    
    //Filter buttons listeners
    filterButtons.forEach(btn => btn.addEventListener("click", function() { 
        setFilter(this.dataset.filter) 
    
    } ));

    clearBtn.addEventListener('click', clearCompleted);

    //Allow adding todo with Enter
    todoInput.addEventListener("keypress", function(event) {
        if(event.key === "Enter") {
           addTodo(); 
        }
    });


































    //Initial render
    render();


});

