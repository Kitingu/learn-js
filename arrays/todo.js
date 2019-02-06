const todos = ['wake up', 'read the bible', 'take breakfast', 'code', 'sleep']
let todo_num = todos.length
console.log(`you have ${todo_num} todos`)
// first one
console.log(`todo --> ${todos[0]}`)
// second to last
console.log(`todo --> ${todos[todos.length - 2]}`)

todos.splice(2, 1)
// console.log(todos)

todos.forEach(function (item, index) {
    // console.log(`${index+1}  ${item}`)
}
)

for (count = 0; count < todos.length; count++) {
    console.log(`${count + 1}  ${todos[count]}`)
}


const Todos = [{
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

// remove to by text value

const deleteTodo = function (todo, todoText) {
    const index = todo.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todo.splice(index, 1)
    }

}
const findTodos = function (todos, query) {

    return todos.filter(function (todo, index) {
        return todo.completed
    })
}
deleteTodo(Todos, 'code')
// console.log(Todos)

console.log(findTodos(Todos))