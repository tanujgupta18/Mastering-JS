function addTask() {
  const todoInput = document.getElementById("taskInput");
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.innerHTML = taskText;
  li.appendChild(taskSpan);

  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.classList.add("editBtn");
  editButton.onclick = function () {
    editTask(li, taskSpan);
  };
  li.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function () {
    deleteTask(li, taskSpan);
  };
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  todoInput.value = "";
}

function editTask(li, taskSpan) {
  const newTask = prompt("Edit your task: ", taskSpan.innerHTML);
  if (newTask !== null && newTask.trim() !== "") {
    taskSpan.innerHTML = newTask;
  }
}

function deleteTask(li) {
  if (confirm("Are you sure you want to delete this task?")) {
    li.remove();
  }
}
