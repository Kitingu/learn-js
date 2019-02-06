// 

const notes = [{
    title: 'learn javascript',
    body: 'know how to implement fetch api'
}, {
    title: 'learn python',
    body: 'know how to implement jwt extended'
}, {
    title: 'learn css',
    body: 'know how to implement flex boxes'
}]

const sortNotes = function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase() ){
            return -1
        }
        else if (b.title.toLowerCase() < a.title.toLowerCase() ){
            return 1
        }
        else{
            return 0
        }
    })
}
sortNotes(notes)
console.log(notes)


// challenge


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


const sortTodos = function(todos){
    todos.sort(function(a,b){
        if(!a.completed && b.completed ){
            return -1
        }
        else if (!b.completed && a.completed ){
            return 1
        }
        else{
            return 0
        }
    })
}
sortTodos(todos)
console.log(todos)