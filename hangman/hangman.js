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

    // first alternative   ==> using every
    // const lettersGuessed = this.word.every((letter){
    //     return this.geussedLetters.includes(letter)
    // })


    // second alternative ==> using filter
    // const lettersUnguessed = this.word.filter((letter) => {
    //     return this.geussedLetters.includes(letter)
    // })



    // third alternative

    let finished = true

    this.word.forEach((letter) => {
        if (this.geussedLetters.includes(letter)) {

        }
        else {
            finished = false
        }
    })

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
