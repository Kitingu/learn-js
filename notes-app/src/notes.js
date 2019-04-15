import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }


}
// expose notes from module
const getNotes = () => notes




const createNote = () => {
    const id = uuidv4()
    let timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes()
}

const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//sort notes according to either dtime updated, alphabet or time created
const sortNotes = (sortBy) => {
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


const removeNote = function (id) {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
        saveNotes()
    }
}

const updateNote = (id, updates) => {
    const note = notes.find((note) => note.id === id)

    if (!note) {
        return
    }

    if (typeof updates.title === 'string') {
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }

    if (typeof updates.body === 'string') {
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }

    saveNotes()
}

notes = loadNotes()
export { getNotes, createNote, removeNote, sortNotes, updateNote }
