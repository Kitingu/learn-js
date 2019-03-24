const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.geussedLetters = ['c','a']
}
// challenge 1
Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach(letter => {
        if (this.geussedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        }
        else {
            puzzle += '*'
        }
    })
    return puzzle
}
hangy = new Hangman('bad', 20)
man = new Hangman('gathee', 10)
 
console.log(hangy.getPuzzle())
console.log(man.getPuzzle())