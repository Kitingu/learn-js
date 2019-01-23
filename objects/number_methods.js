let num = 7461.1496494

// toFixed  --> specifies number of decimal points 
console.log(num.toFixed(3))


let = num1 = 12.89
console.log(Math.round(num1))
console.log(Math.floor(num1))
console.log(Math.ceil(num1))
let min = 0
let max = 10
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// challenge
let guessGame = function (number) {
    return number === randomNum
}
console.log(guessGame(5))