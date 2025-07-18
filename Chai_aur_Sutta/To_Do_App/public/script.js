document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");

  // Load todos when page loads
  loadTodos();

  // Add new todo
  addBtn.addEventListener("click", addTodo);

  function loadTodos() {
    fetch("/todos")
      .then((response) => response.json())
      .then((todos) => {
        todoList.innerHTML = "";
        todos.forEach((todo) => {
          addTodoToDOM(todo);
        });
      });
  }

  function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
      fetch("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      })
        .then((response) => response.json())
        .then((newTodo) => {
          addTodoToDOM(newTodo);
          todoInput.value = "";
        });
    }
  }

  function addTodoToDOM(todo) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn" data-id="${todo.id}">Delete</button>
        `;
    todoList.appendChild(li);

    // Add delete event
    li.querySelector(".delete-btn").addEventListener("click", deleteTodo);
  }

  function deleteTodo(e) {
    const id = e.target.getAttribute("data-id");
    fetch(`/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      e.target.parentElement.remove();
    });
  }
});
