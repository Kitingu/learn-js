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


getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    }
    else {
        console.log(puzzle)
    }
})





getCountry('UG', (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    }
    else {
        console.log(`Country Name:  ${country.name}`)
    }
})



