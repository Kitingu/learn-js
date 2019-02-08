// DOM manipulation --> Document Object Model
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

const filters = {
    searchText: ''
}
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}
renderNotes(notes, filters)
document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#name-form').addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})
// const button = document.querySelector('#create-notes').addEventListener('click', function (e) {
//     e.target.textContent = 'The button was clicked'
// })

// get elements by ID
// const button1 = document.querySelector('#remove-notes').addEventListener('click', function (e) {
//     e.target.textContent = 'The button was clicked'
// })

// get element by class

// document.querySelectorAll('.note').forEach(function (note) {
//     note.remove()
// })

//  multiple selections
// p#orders
// button.inventory
// h1#title.app
// h1.app#title

// const p = document.querySelector('p') // --matches the first match
// p.remove()
// console.log(p)

// query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//     p.textContent = '**********' //-->sets the content in the browser to the sring specified
//     console.log(p.textContent)
// p.remove()
// })


// add an html element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'this is a new element from javascript'
// document.querySelector('body').appendChild(newParagraph)


