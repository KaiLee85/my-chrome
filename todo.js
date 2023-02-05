const toDoForm = document.getElementById("todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todoList");

const TODOS_KEY = "todos";
let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerHTML = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;

  toDoInput.value = "";
  const newTodoObj = { text: newTodo, id: Date.now() };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
  const parsedTodos = JSON.parse(saveToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
