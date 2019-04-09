'use strict'

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
    const todoEL = document.querySelector('#new-todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incopleteTodos = todos.filter((todo) => !todo.completed)

    todoEL.innerHTML = ''

    todoEL.appendChild(generateSummaryDom(incopleteTodos))



    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEL.appendChild(generateTodoDom(todo))
        })
    }
    else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No todos to show'
        todoEL.appendChild(messageEl)
    }
}
const generateTodoDom = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')


    // setup the checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    // setup the todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    // setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // setup remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })


    return todoEl
}

const generateSummaryDom = (incopleteTodos) => {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    const plural = incopleteTodos.length === 1 ? '' : 's'

    summary.textContent = `you have ${incopleteTodos.length} todo${plural} left`
    return summary


    // document.querySelector('#new-todos').appendChild(summary)
}

