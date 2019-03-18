// fetch existing todos
const getSavedTodos = (todos) => {
    const todosJson = localStorage.getItem('todos')
    try {
        return todosJson ? JSON.parse(todosJson) : []

    } catch (e) {
        return []
    }
}
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}
// toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
    }
}

// save toddos
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// render todos

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incopleteTodos = todos.filter((todo) => !todo.completed)

    document.querySelector('#new-todos').innerHTML = ''

    document.querySelector('#new-todos').appendChild(generateSummaryDom(incopleteTodos))

    filteredTodos.forEach((todo) => {
        document.querySelector('#new-todos').appendChild(generateTodoDom(todo))
    })
}
const generateTodoDom = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    // setup the checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
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

const generateSummaryDom = (incopleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `you have ${incopleteTodos.length} todos left`
    return summary
    // document.querySelector('#new-todos').appendChild(summary)
} 
