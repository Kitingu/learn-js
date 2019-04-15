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





notes = loadNotes()
export { getNotes,createNote }
