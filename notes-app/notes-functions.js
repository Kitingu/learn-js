// read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    return notesJSON !== null ? JSON.parse(notesJSON) : []

}
// remove notes from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate DOM structure for a note

const generateNoteDom = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // setup remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    }
    else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl)

    return noteEl
}

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}
//sort notes according to either dtime updated, alphabet or time created
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            }

            else if (a.updatedAt < b.updatedAt) {
                return 1
            }
            else {
                return 0
            }
        })

    }
    else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            }

            else if (a.createdAt < b.createdAt) {
                return 1
            }
            else {
                return 0
            }
        })

    }
    else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            }

            else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            }
            else {
                return 0
            }
        })
    }
    else {
        return notes
    }

}
// render app notes
const renderNotes = (notes, filters) => {
    //
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    )

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) => {

        const noteEl = generateNoteDom(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}
//generate last edited message

let lastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`
