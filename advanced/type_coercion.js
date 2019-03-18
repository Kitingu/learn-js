console.log('5' + 5) // --> 55
console.log('5' - 5) // --> 0
console.log(5 === '5') //--> false
console.log('5' == 5)  // --> true compares without having type into consideration
// type coersion - a string, a number or a boolean

// to avoid type coeercing we need to check the type of a value

const type = typeof 123
console.log(type)

value = true + 12
const valueType = typeof value
console.log(value) // --> 13 since it coerces true to 1 and false to 0 
console.log(valueType) // --> number