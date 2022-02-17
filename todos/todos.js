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
    // on submit, create a todo, reset the form, and display the todos
    // e.preventDefault();
    // const todo = document.getElementById('todo');


});

async function displayTodos() {
    // fetch the todos
    todosEl.textContent = '';
    const todos = await getTodos();
    // console.log(todos);
    // display the list of todos
    for (let todo of todos) {
        const nextTask = renderTodo(todo);
        nextTask.addEventListener('click', async () => {
            console.log('clicking a task');
            await completeTodo(todo.id);
            await displayTodos();
        });
        todosEl.append(nextTask);
    }
    // be sure to give each todo an event listener

    // on click, complete that todo
}

// add an on load listener that fetches and displays todos on load

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos

    // then refetch and display the updated list of todos
});
