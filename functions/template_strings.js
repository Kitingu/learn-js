let name = "benedict";
let age = 25
console.log(`hey, may name is ${ name } and i am ${age} years old`);
console.log("hey my name is " +name+" and i am "+ age +" years old") 
// use `` not ''


// challenge
let getTip = function(total,percentage){
    let percent = percentage*100
    let tip = total * percentage
    return `A ${percent}% tip of ${total} is ${tip}`
}
console.log(getTip(1000,.5))