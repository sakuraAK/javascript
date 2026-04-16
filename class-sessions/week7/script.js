console.log('Page loaded successfully!');

document.addEventListener("DOMContentLoaded", function(){
   
    let button = document.querySelector("#addBtn");
    let tasks = ["Study", "Workout", "Travel"];
    
    function render() {

         let taskList = document.querySelector("#taskList");
         taskList.innerHTML = "";

         for (let i = 0; i < tasks.length; i++){
            let li = document.createElement("li");
            li.textContent = tasks[i];
            taskList.appendChild(li);
         }

    }

    
    // data -> render -> UI


    button.addEventListener('click', function (){
        let input = document.querySelector("#taskInput");
        let taskName = input.value;
    
        if (taskName === undefined || taskName.trim() === '') {
            return;
        }

        tasks.push(taskName);
        render();
        input.value = '';
    });

    render();


});
