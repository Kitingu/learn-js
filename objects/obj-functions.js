let myBook = {
    title: '1985',
    author: 'George Orwell',
    pageCount: 326
}
let otherBook = {
    title: 'A Peoples History',
    author: 'Horward Zinn',
    pageCount: 723
}

let mybooks = function (book) {
    console.log(`${book.title} by ${book.author}`)
}
// returning an object

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}
mybooks(myBook)
let bookSummary = getSummary(otherBook)
console.log(myBook)

// challenge
let fahrenheit = function (fahren) {
    let degrees = (fahren - 32) * 5 / 9
    let kelvin = (fahren + 459.67) * 5 / 9
    return {
        degrees_celcius:`${fahren} is ${degrees} degrees celcius`,
        kelvin:`${fahren} is ${kelvin} degrees in kelvin`
    }
}
console.log(fahrenheit(74))