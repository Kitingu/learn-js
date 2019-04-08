// http requests


const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')


let game1

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}


const render = () => {
    puzzleEl.innerHTML = ''
    guessEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGues(guess)
    render()
})




document.querySelector('#reset').addEventListener('click', startGame)
startGame()




// getCountry('KE').then((country) => {
//     console.log(`Country Name:  ${country.name}`)

// }).catch((error) => {
//     return `Error: ${error}`
// })

getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})
