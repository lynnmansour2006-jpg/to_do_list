const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Display saved tasks
function displayTasks() {

    taskList.innerHTML = "";


    tasks.forEach(function(task) {

        const li = document.createElement("li");


        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = task.completed;


        // Show completed style after refresh
        if (task.completed) {
            li.classList.add("completed");
        }


        // Checkbox event
        checkbox.addEventListener("change", function () {

            task.completed = checkbox.checked;

            localStorage.setItem("tasks", JSON.stringify(tasks));


            if (task.completed) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }

        });


        li.appendChild(checkbox);

        li.appendChild(document.createTextNode(task.text));



        // Delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";


        deleteButton.addEventListener("click", function () {

            tasks = tasks.filter(function(item) {

                return item !== task;

            });


            localStorage.setItem("tasks", JSON.stringify(tasks));


            displayTasks();

        });



        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });

}



// Add new task
addButton.addEventListener("click", function () {


    const taskText = taskInput.value.trim();


    if (taskText === "") {

        alert("Please enter a task");

        return;

    }



    const newTask = {

        text: taskText,

        completed: false

    };


    tasks.push(newTask);


    localStorage.setItem("tasks", JSON.stringify(tasks));


    taskInput.value = "";


    displayTasks();


});



// Load tasks when page opens
displayTasks();