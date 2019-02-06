const notes = ['Note 1', 'Note 2', 'Note 3']
const Notes = [{
    title: 'learn javascript',
    body: 'know how to implement fetch api'
}, {
    title: 'learn python',
    body: 'know how to implement jwt extended'
}, {
    title: 'learn css',
    body: 'know how to implement flex boxes'
}]
// searching an array --> works with strings, numbers and floating_points
console.log(notes.indexOf('Note 1')) //--> looks for the position of an item in array  
// index of returns -1 if the item being searched does not exist in the array


// using find index -->works with js objects (dict)
index = Notes.findIndex(function (note, index) {
    return note.title === 'learn python'
})
console.log(index)


// find note function

// const findNote = function(notes,noteTitle){
//     const index = notes.findIndex(function (note ,index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return Notes[index]
// }



// internal find function --> works same way as our hard coded function above

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

let note = findNote(Notes, 'learn css')
console.log(note)


// filtering many
const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(Notes, 'css'))