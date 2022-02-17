export function renderTodo(todo) {
    // create a div and a p tag
    const div = document.createElement('div');
    if (todo.complete) {
        div.classList.add('complete');
    }
    div.classList.add('todo');

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')

    // add the 'todo' css class no matter what

    // put the todo's text into the p tag
    const p = document.createElement('p');
    p.textContent = todo.todo;
    // append stuff
    div.append(p);
    return div;

    // return the div
}