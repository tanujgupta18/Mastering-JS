let todoList = [
  { item: "Buy Notebook", dueDate: "27/01/2025" },
  { item: "Go to College", dueDate: "27/01/2025" },
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let todoItem = inputElement.value;
  let dateElement = document.querySelector("#todo-date");
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHTML += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class='btn-delete' onclick="todoList.splice(${i},1); displayItems()">Delete</button>
    
    `;
  }
  containerElement.innerHTML = newHTML;
}
