// let taskInput = document.querySelector("#taskInput");
// let taskSubmit = document.querySelector("#taskSubmit");
// let taskAdd = document.querySelector("#taskAdd");

// let taskArray = [];

// taskSubmit.addEventListener("click", function () {
//     if (taskInput.value.trim() !== "") {
//         addTask(taskInput.value);
//         taskInput.value = "";
//     }
// });

// function addTask(taskText) {
//     const task = {
//         id: Date.now(),
//         title: taskText,
//         complete: false,
//     };

//     taskArray.push(task);
//     // console.log(taskArray);
//     displayTasks();
//     arrayLocalStorage(taskArray);
// }

// function displayTasks() {
//     taskAdd.innerHTML = ""; 
//     taskArray.forEach(task => {
//         let taskItem = document.createElement("div");
//         taskItem.classList.add("p-2", "border", "border-gray-300", "rounded-lg", "mb-2", "bg-white");
//         taskItem.textContent = task.title;
//         taskAdd.appendChild(taskItem);
//     });
// }


// function arrayLocalStorage(taskArray) {
//     window.localStorage.setItem("taskText" , JSON.stringify(taskArray));
// }


// Select elements
let taskInput = document.querySelector("#taskInput");
let taskSubmit = document.querySelector("#taskSubmit");
let taskAdd = document.querySelector("#taskAdd");

// Load tasks from Local Storage (if any)
let taskArray = JSON.parse(localStorage.getItem("taskArray")) || [];

// Display tasks on page load
displayTasks();

// Handle task submission
taskSubmit.addEventListener("click", function () {
    if (taskInput.value.trim() !== "") {
        addTask(taskInput.value);
        taskInput.value = ""; // Clear input after adding
    }
});

// Function to add a new task
function addTask(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        complete: false,
    };

    taskArray.push(task);
    updateLocalStorage(); // Save tasks
    displayTasks(); // Update UI
}

// Function to display tasks
function displayTasks() {
    taskAdd.innerHTML = ""; // Clear previous tasks

    taskArray.forEach(task => {
        let taskItem = document.createElement("div");
        taskItem.classList.add("p-2", "border", "border-gray-300", "rounded-lg", "mb-2", "bg-white");

        // Task structure (matches your HTML)
        taskItem.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <label class="text-red-500 font-semibold text-lg">${task.title}</label>
                <div class="space-x-2 flex">
                    <button class="bg-yellow-500 text-white p-3 rounded-full">
                        <img src="Assets/icone/edit.png" alt="Modifier" class="w-5 h-5">
                    </button>
                    <button class="delete-btn bg-red-500 text-white p-3 rounded-full" data-id="${task.id}">
                        <img src="Assets/icone/delete.png" alt="Supprimer" class="w-5 h-5">
                    </button>
                </div>
            </div>
        `;

        taskAdd.appendChild(taskItem);
    });

    // Attach event listeners to all delete buttons after rendering tasks
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            let taskId = this.getAttribute("data-id");
            deleteTask(Number(taskId)); // Convert taskId to number
        });
    });
}

// Function to delete a task
function deleteTask(taskId) {
    taskArray = taskArray.filter(task => task.id !== taskId);
    updateLocalStorage(); // Save updated tasks
    displayTasks(); // Update UI
}

// Function to update Local Storage
function updateLocalStorage() {
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
}





