// and operator
let temp = 1000;
if (temp >= 60 && temp <= 90) {
  console.log("its superhot");
}

// logical or operator (||)
else if (temp < 0 || temp > 100) {
  console.log("its not safe to go outside");
} else {
  console.log("do whatever you please");
}

// challenge

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("only offer up vegan dishes");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("make sure to offer up some vegan options?");
} else {
  console.log("offer anything on the menu");
}
