let taskInput = document.querySelector("#taskInput");
let taskSubmit = document.querySelector("#taskSubmit");
let taskAdd = document.querySelector("#taskAdd");

let taskArray = [];

taskSubmit.addEventListener("click", function () {
    if (taskInput.value.trim() !== "") {
        addTask(taskInput.value);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        complete: false,
    };

    taskArray.push(task);
    console.log(taskArray);

    displayTasks();
}

function displayTasks() {
    taskAdd.innerHTML = ""; 
    taskArray.forEach(task => {
        let taskItem = document.createElement("div");
        taskItem.classList.add("p-2", "border", "border-gray-300", "rounded-lg", "mb-2", "bg-white");
        taskItem.textContent = task.title;
        taskAdd.appendChild(taskItem);
    });
}
