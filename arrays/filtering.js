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

// filtering  --> filter method
const filteredTodos =Todos.filter(function(todo,index){
    const isTextMatch = todo.text.toLowerCase().includes('ak')
    const isComplete= todo.text.toLowerCase().includes('true')
    return isTextMatch || isComplete
})
console.log(filteredTodos)