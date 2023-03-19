let tasks = [];

function addTask() {
  const taskInput = document.getElementById("task-input");
  const task = taskInput.value.trim();
  if (task === "") {
    alert("Please enter a task");
    return;
  }
  tasks.push(task);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskItem.appendChild(taskText);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteTask(index);
    });
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function filterTasks() {
  const filteredTasks = tasks.filter(task => task.includes("filter")); // Replace "filter" with the desired filter term
  tasks = filteredTasks;
  renderTasks();
}

document.getElementById("add-task-btn").addEventListener("click", addTask);
document.getElementById("filter-btn").addEventListener("click", filterTasks);
renderTasks();
