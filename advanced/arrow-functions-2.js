let add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(12, 24)) // -- > returns 36
1. // arguments only exist in a normal function not arrow functions
// arrow functions dont bind any variables
///invalid///
// let add = () => {
//     return arguments[0] + arguments[1]
// }


2. // arrow functions dont bind \this\ property

//correct // 
let car = {
    color: 'red',
    getSummary: function () {
        return `Th e car is ${this.color}`
    }
}

//invalid

//  car = {
//     color: 'red',
//     getSummary:  () => {
//         return `The car is ${this.color}`
//     }
// }



// regular functions can also be shorthanded to --->
car = {
    color: 'red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())