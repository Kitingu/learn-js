const todos = [{
    text: 'wake up',
    completed: true
},
{
    text: 'read the bible',
    completed: false
},
{
    text: 'take breakfats',
    completed: true
},
{
    text: 'code',
    completed: true
},
{
    text: 'sleep',
    completed: false
}]
document.querySelector('#add-todo').addEventListener('click', function () {
    console.log('this was clicked')
})

document.querySelector('#add-new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})




todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})


// challenge
const filters = {
    searchText: '',
    hideCompleted: false
}
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filteredTodos = filteredTodos.filter(function (todo) {
        return !filters.hideCompleted || !todo.completed
        // if (filters.hideCompleted) {
        //     return !todo.completed
        // }
        // else {
        //     return true
        // }
    })
    const incopleteTodos = todos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#new-todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `you have ${incopleteTodos.length} todos left`
    document.querySelector('#new-todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#new-todos').appendChild(todoEl)
    })
}
renderTodos(todos, filters)

document.querySelector('#add-new-todo').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// add todo to the array
document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()

    todos.push({
        text: e.target.elements.todoName.value,
        completed: false
    })
    e.target.elements.todoName.value = ''
    renderTodos(todos, filters)
})

// work with checkboxes
document.querySelector('#check-complete').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})