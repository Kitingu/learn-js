//shorthand
const square = (num) => num * num


//long method
const squareLong = (num) => {
    return num * num
}
console.log(square(6))


// real word example

const people = [{
    name: 'benedict',
    age: 25
},
{
    name: 'kimosh',
    age: 26
}, {
    name: 'mutua',
    age: 27
}

]
// const under27 = people.filter(function (person) {
//     return person.age < 27
// })

const under27 = people.filter((person) => person.age < 27)
console.log(under27)

// challenge 
// find person with age 25
const age25= people.filter((person)=> person.age ===25)
console.log(age25)