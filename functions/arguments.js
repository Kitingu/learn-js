// multiple arguments
let add = function(a, b) {
    return a + b
};
let result = add(10, 20);
console.log(result);


// default arguments
let getScoreText = function(name,score = 0){
    name = 'john'
    console.log(name)
    console.log(score)
}
getScoreText()

// challenge
let tip = function(total,tip_percentage = .5){
    return total * tip_percentage
}
console.log(tip(50000))