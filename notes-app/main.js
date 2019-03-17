// DOM manipulation --> Document Object Model
let notes = getSavedNotes()

const filters = {
    searchText: ''
}
// check existing notes

renderNotes(notes, filters)

document.querySelector('#create-notes').addEventListener('click', function (e) {
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

document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#selector').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

