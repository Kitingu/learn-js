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
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
        console.log(e.target.status)
    } else if (e.target.readyState === 4) {
        console.log('An error has occured')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
request.send()