const getTip = (amount) => {
    if (typeof amount === "number") {
        return amount * 0.25
    }
    else {
        // throw "Argument must be a number"
        throw Error("Argument must be a nummber")
    }
}

try {
    const result = getTip(20)
    console.log(result)
}
catch (e) {
    console.log("catch block is running")
}


