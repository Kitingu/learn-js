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


// getPuzzle((error, puzzle) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     }
//     else {
//         console.log(puzzle)
//     }
// })


const puzzle = getPuzzleSync()
console.log(puzzle)
console.log('something else')
// const countryRequest = new XMLHttpRequest()
// const countryCode = 'KE'
// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find(country => country.alpha2Code === countryCode)
//         console.log(country.name)
//         // data.every((country) => {
//         //     console.log(country)
//         // })
//     }
//     else if (e.target.readyState === 4) {
//         console.log('Unable to fetch data')
//     }
// })


// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()

