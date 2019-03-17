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

const now = moment()
now.minute(32); 
now.add(1, 'minute') //date manipulation mathematically
console.log(now.toString())
console.log(now.format('Do MMMM, YYYY')) //date formating
console.log(now.fromNow()) //diffrence of current time and some time in the past or future

const nowTimestamp = now.valueOf() //time to timestamp
console.log(nowTimestamp)
console.log(moment(nowTimestamp).toString()) //retrieve time from timestamp

// challenge write your birthday
const bday = moment()
bday.date(11)
bday.month(8) //months are zero indexed
bday.year(1993)
// alternatively this can be expressed as bday.date(11).month(8).year(1993)
//this is called chaining
console.log(bday.format('MMM D, YYYY'))