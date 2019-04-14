'use strict'

// DOM manipulation --> Document Object Model
let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}
// check existing notes

renderNotes(notes, filters)

document.querySelector('#create-notes').addEventListener('click', (e) => {
    const id = uuidv4()
    let timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp

    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)

})

document.querySelector('#search').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#selector').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

