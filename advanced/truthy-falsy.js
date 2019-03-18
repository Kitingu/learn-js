const products = [{name:'mouse'}]
const product = products[0]
if (product){
    console.log("product found")
}
else{
    console.log("product not found")
}

// truthy values --> values that resolve to true in boolean context
// falsy values --> values that resolve to false in boolean context
// falsy values  --> false, 0 null, undefined, empty string and NaN(not a number)
// truthy values --> true, arrays , 1, strings 