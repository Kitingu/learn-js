// http requests


const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')


const game1 = new Hangman('bad mind', 2)

puzzleEl.textContent = game1.puzzle
guessEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGues(guess)
    puzzleEl.textContent = game1.puzzle
    guessEl.textContent = game1.statusMessage
})


// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }, (error) => {
//     console.log(`Error: ${error}`)
// })





// getCountry('KE').then((country) => {
//     console.log(`Country Name:  ${country.name}`)

// }
//     , (error) => {
//         console.log(`Error: ${error}`)
//     })




// intro to fetch api
fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json() //this is a promise
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}).then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(error)
})