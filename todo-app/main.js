'use strict'

let todos = getSavedTodos()

// const todosJSON = localStorage.getItem('todos')
// document.querySelector('#add-todo').addEventListener('click', function () {
//     console.log('this was clicked')
// })


// challenge
const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#add-new-todo').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// add todo to the array
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault()

    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoName.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoName.value = ''

})

// work with checkboxes
document.querySelector('#check-complete').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})