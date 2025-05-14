// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Load todos from local storage
document.addEventListener('DOMContentLoaded', loadTodos);

// Add a new to-do
addBtn.addEventListener('click', () => {
  const task = todoInput.value.trim();
  if (task) {
    addTodoToDOM(task);
    saveTodoToLocalStorage(task);
    todoInput.value = '';
  }
});

// Add a task to the DOM
function addTodoToDOM(task) {
  const li = document.createElement('li');
  li.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    deleteTodoFromLocalStorage(task);
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

// Save a task to local storage
function saveTodoToLocalStorage(task) {
  const todos = getTodosFromLocalStorage();
  todos.push(task);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Retrieve todos from local storage
function getTodosFromLocalStorage() {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

// Load todos from local storage to DOM
function loadTodos() {
  const todos = getTodosFromLocalStorage();
  todos.forEach(addTodoToDOM);
}

// Delete a task from local storage
function deleteTodoFromLocalStorage(task) {
  const todos = getTodosFromLocalStorage();
  const updatedTodos = todos.filter(todo => todo !== task);
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
}