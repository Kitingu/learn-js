//  working with string data

username = 'bendeh'

//length property

console.log(username.length)

// convert to uppercase

console.log(username.toUpperCase())

// convert to lowercase

console.log(username.toLowerCase())


// includes
let password = 'ajsnblackie123'
console.log(password.includes('blackie'))


// trim --> removes extra whitespaces
let name = '       ewf'
console.log(name.trim())

// challenge 

let passwordChecker = function(password){
    if (password.length >= 8 && password.includes('password') != true)
    //  if (password.length >= 8 && !password.includes('password'))
    {
        return true
    }
    else{
        return false
    }
}

console.log(passwordChecker('ashjk'))