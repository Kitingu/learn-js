// learn using else if 
let isAccountLocked = false
let userRole = "admin"
if (isAccountLocked){
    console.log("account is locked")
}
else{
    console.log("account is unlocked")
}

// multiple if else
if (isAccountLocked){
    console.log("account is locked")
}
else if (userRole === "admin"){
    console.log("welcome admin !!!")
}
else{
    console.log("welcome")

}
// challenge
let temp = 45
if (temp <31){
    console.log("its freezing outside")
}
else if(temp<35)
{
    console.log("Go for it. it is pretty nice")
}
else{
    console.log("it is hot outside")
}