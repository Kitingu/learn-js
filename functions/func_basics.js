// our first function
let greetUser = function() {
  console.log("hello world");
};
// functions must be called
greetUser();

// function to square numbers
let square = function(num) {
  let result = (num * num)
  return result
};
console.log(square(9));

// challenge
let convertFahrenheitToCelcius = function(fahrenheit){
    let celcius = (fahrenheit - 32) * 5/9
    return celcius
}
console.log(convertFahrenheitToCelcius(68))