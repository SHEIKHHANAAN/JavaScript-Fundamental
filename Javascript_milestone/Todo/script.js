document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();
  
    if (todoText !== "") {
      const todoList = document.getElementById("todoList");
      const newTodoItem = document.createElement("li");
      newTodoItem.textContent = todoText;
      todoList.appendChild(newTodoItem);
      todoInput.value = "";
    }
  });
  