
import square, { add } from './utilities' //square is a default import 
import scream from './scream'
console.log('index')

console.log(add(10, 5))
console.log(square(10))
console.log(scream('jontez'))

// default import can be imported with any name since they refer to that single export from the source file