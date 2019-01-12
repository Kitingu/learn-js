let name 
console.log(name)
if (name === undefined){
    console.log("please provide a name")
}

// undefined for function arguments
let square = function(num){
    console.log(num)
}
square()
let result=square()
console.log(result)
// undefined is given for functions called without arguments, declaring variables without values, calling functions declaring variables from functions without a return functions
// undefined is given when you specify that its undefined
let age = 27
age = undefined
age = null
console.log(age)