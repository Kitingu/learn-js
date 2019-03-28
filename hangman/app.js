
const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
puzzleEl.textContent = hangy.getPuzzle()


man.makeGues('a')
man.makeGues('k')
console.log(man.remainingGuesses)
console.log(hangy.getPuzzle())
console.log(man.getPuzzle())

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    hangy.makeGues(guess)
    puzzleEl.textContent = hangy.getPuzzle()
    guessEl.textContent = hangy.remainingGuesses
})