export function renderTodo(todo) {
    const div = document.createElement('div');
    if (todo.complete) {
        div.classList.add('complete');
    }
    div.classList.add('todo');

    const p = document.createElement('p');
    p.textContent = todo.todo;

    div.append(p);
    return div;
}