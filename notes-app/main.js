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

document.querySelector('#check').addEventListener('change', function (e) {
    console.log(e.target.checked)
})