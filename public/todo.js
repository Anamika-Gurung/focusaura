// Initialize tasks array from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Handle Add Task Form Submission
document.getElementById("taskForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Retrieve form values
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const importance = document.getElementById("importance").value;

    // Create a new task object
    const task = { name, date, category, importance };

    // Add task to the array and save to local storage
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Reset the form
    this.reset();

    // Redirect to the Task List page (tado.html)
    window.location.href = "todo.html";
});

// Function to render the task list dynamically
function renderTasks() {
    const taskListContainer = document.getElementById("taskList");

    if (taskListContainer) {
        taskListContainer.innerHTML = ""; // Clear previous tasks

        tasks.forEach((task, index) => {
            // Create task container
            const taskItem = document.createElement("div");
            taskItem.className = "task-item";

            // Checkbox input
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `task-${index}`;

            // Task label
            const label = document.createElement("label");
            label.htmlFor = `task-${index}`;
            label.textContent = `${task.name} - ${task.date} (${task.category})`;

            // Append elements
            taskItem.appendChild(checkbox);
            taskItem.appendChild(label);

            // Add task item to the list container
            taskListContainer.appendChild(taskItem);
        });
    }
}

// Render tasks when the page loads
document.addEventListener("DOMContentLoaded", renderTasks);
