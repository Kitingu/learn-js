const myAge = 27
// conditional operator
// passess          fails
const message = myAge >= 18 ? "you can vote" : "you can't vont"
console.log(message)

const showPage = () => {
    return 'showing the page'
}

const showErrorPage = () => {
    return 'showing the error page'
}

const Message = myAge >= 21 ? showPage() : showErrorPage()
console.log(Message)

const team = ['Tyler', 'Porter','Andrew','ben','mike']

console.log(team.length <= 4 ? `Team size ${team.length}` : 'Too many people in your team')