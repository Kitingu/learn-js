const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

hangy = new Hangman('bad', 20)
man = new Hangman('gathee', 10)
console.log(hangy)
console.log(man)