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

    // setup the checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)

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
