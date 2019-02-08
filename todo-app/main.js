const todos = [{
    text: 'wake up',
    completed: true
},
{
    text: 'read the bible',
    completed: true
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
////////////////////////////////////////////////////////////
//   getElementbyID is same as querySelector(#elementId)  //
//////////////////////////////////// ///////////////////////

// const paragraphs = document.querySelectorAll('p')
// const paragraph = paragraphs.forEach(function (paragraph) {
//     if (paragraph.textContent.includes('the')){
//         paragraph.remove()
//     }
// })






todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})


// challenge
const filters = {
    searchText: ''
}
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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