const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');
const todos = JSON.parse(localStorage.getItem('todos'));
if (todos) {
	todos.forEach((todo) => addTodo(todo));
}
form.addEventListener('submit', (e) => {
	e.preventDefault();
	addTodo();
});
function addTodo(todo) {
	let todoText = input.value;
	if (todo) {
		todoText = todo.text;
	}
	if (todoText) {
		const todoHTML = document.createElement('li');
		if (todo && todo.completed) {
			todoHTML.classList.add('completed');
		}
		todoHTML.innerText = todoText;
		todoHTML.addEventListener('click', () => {
			todoHTML.classList.toggle('completed');
			updateLS();
		});
		//right click
		todoHTML.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			todoHTML.remove();
			updateLS();
		});
		todosUl.appendChild(todoHTML);
		input.value = '';
		updateLS();
	}
}
function updateLS() {
	const todosHTML = document.querySelectorAll('li');

	const todosToSave = [];
	todosHTML.forEach((todo) =>
		todosToSave.push({
			text: todo.innerText,
			completed: todo.classList.contains('completed'),
		})
	);
	localStorage.setItem('todos', JSON.stringify(todosToSave));
}
