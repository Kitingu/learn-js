// DOM manipulation --> Document Object Model
let notes = getSavedNotes()

const filters = {
    searchText: ''
}
// check existing notes

renderNotes(notes, filters)

document.querySelector('#create-notes').addEventListener('click', function (e) {
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
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

// const now = new Date()
// const now = new Date('January 21 2019 6:39:01')
// console.log(now.getTime())
// console.log(`year ${now.getFullYear()}`)
// console.log(`month ${now.getMonth()}`)
// console.log(`day of month ${now.getDate()}`)
// console.log(`minutes ${now.getMinutes()}`)
// console.log(`seconds ${now.getSeconds()}`)

const now = new Date('January 21 2019 6:39:01')
const thene = new Date('January 23 2018 6:39:01')
const time1 = now.getTime()
const time2 = thene.getTime()

if (time1 > time2) {
    console.log(now.toString())
}
else {
    console.log(thene.toString())
}