class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.geussedLetters = []
        this.status = 'playing'
    }

    getPuzzle() {
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

    calculateStatus() {

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

    getStatusMessage() {
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


    makeGues(guess) {
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

}
