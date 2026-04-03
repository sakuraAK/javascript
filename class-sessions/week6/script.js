console.log('Page loaded successfully!');

document.addEventListener("DOMContentLoaded", function(){
    let input = document.querySelector("#taskInput");
    let button = document.querySelector("#addBtn");
    let taskList = document.querySelector("#taskList");


    button.addEventListener('click', function (){
        let taskName = input.value;
        
        if (taskName === undefined || taskName.trim() === '') {
            return;
        }
        let taskElement = document.createElement("li");
        taskElement.textContent = taskName;

        taskList.appendChild(taskElement);

        input.value = '';
    });
});
