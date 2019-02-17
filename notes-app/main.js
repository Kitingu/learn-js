// DOM manipulation --> Document Object Model
let notes = getSaveNotes()

const filters = {
    searchText: ''
}
// check existing notes

renderNotes(notes, filters)

document.querySelector('#create-notes').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
})

document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#selector').addEventListener('change', function (e) {
    console.log(e.target.value)
})