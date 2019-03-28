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

    const finished = this.word.every((letter) => this.geussedLetters.includes(letter))

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

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`
    }
    else if (this.status === 'failed') {
        return `Nice try! The word was ${this.word.join('')}`
    }
    else {
        return `Great Work! you guessed the word`
    }
}

Hangman.prototype.makeGues = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.geussedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.status !== 'playing') {
        return
    }

    if (isUnique) {
        this.geussedLetters.push(guess)
    }
    if (isUnique && isBadGuess) {
        this.remainingGuesses-- // removes 1
    }
    this.calculateStatus()

}

