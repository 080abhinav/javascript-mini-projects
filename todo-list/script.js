const dateInput = document.getElementById("dueDate");
const today = new Date().toISOString().slice(0, 10);
dateInput.value = today;
dateInput.min = today;

const savedTodos = JSON.parse(localStorage.getItem('todos'));

const todoList = savedTodos || [{
    name: 'Complete Homework',
    dueDate: today
}, {
    name: 'Buy Croissant',
    dueDate: today
}];

renderTodo();

function renderTodo() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `<div class="todo-item">
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="todoList.splice(${i}, 1); saveTodos() ;renderTodo();"          class="delete-todo-button"><i class="fa-solid fa-trash"></i></button> </div>`;
        todoListHTML += html;
    }
    document.querySelector('.todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.event');
    const name = inputElement.value.trim();

    const dateInputElement = document.querySelector('.due-date');
    const dueDate = dateInputElement.value;
    if (name === '') {
        alert('Please enter a task');
        return;
    }
    todoList.push({
        name,dueDate
    });
    inputElement.value = '';
    saveTodos();
    renderTodo();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todoList));
}
