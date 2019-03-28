const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.geussedLetters = []
    this.status = 'playing'
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


Hangman.prototype.calculateStatus = function () {

    const lettersGuessed = this.word.every((letter) => this.geussedLetters.includes(letter))

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    }
    else if (finished) {
        this.status = 'finished'
    }
    else {
        this.status = 'playing'
    }


}


Hangman.prototype.makeGues = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.geussedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if (isUnique) {
        this.geussedLetters.push(guess)
    }
    if (isUnique && isBadGuess) {
        this.remainingGuesses-- // removes 1
    }
    this.calculateStatus()
    console.log(hangy.status)

}
hangy = new Hangman('bad', 20)
man = new Hangman('gathee', 10)
