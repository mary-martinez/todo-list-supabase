import {
    checkAuth,
    createTodo,
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

displayTodos();

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const todo = document.getElementById('todo');
    const text = todo.value;
    await createTodo(text);
    await displayTodos();
    todoForm.reset();
});

async function displayTodos() {
    todosEl.textContent = '';
    const todos = await getTodos();

    for (let todo of todos) {
        const nextTask = renderTodo(todo);
        nextTask.addEventListener('click', async () => {
            console.log('clicking a task');
            await completeTodo(todo.id);
            await displayTodos();
        });
        todosEl.append(nextTask);
    }
}


logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    await deleteAllTodos();
    await displayTodos();
});
