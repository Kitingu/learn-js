// fetch existing todos
const getSavedTodos = function (todos) {
    const todosJson = localStorage.getItem('todos')
    if (todosJson !== null) {
        return JSON.parse(todosJson)
    }
    else {
        return []
    }
}
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}
// toggle the completed value for a given todo
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
    if (todo != undefined) {
        todo.completed = !todo.completed
    }
}

// save toddos
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// render todos

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incopleteTodos = todos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#new-todos').innerHTML = ''

    document.querySelector('#new-todos').appendChild(generateSummaryDom(incopleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#new-todos').appendChild(generateTodoDom(todo))
    })
}
const generateTodoDom = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    // setup the checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    // setup the todo text
    todoEl.appendChild(todoText)
    todoText.textContent = todo.text

    // setup remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    return todoEl
}

const generateSummaryDom = function (incopleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `you have ${incopleteTodos.length} todos left`
    return summary
    // document.querySelector('#new-todos').appendChild(summary)
} 
