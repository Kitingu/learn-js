const myfunc = () => {
    const message = 'this is my message'

    const printMessage = () => {
        console.log(message)
    }
    return printMessage
}

const myPrintMessage = myfunc()
myPrintMessage()


const createCounter = () => {
    let count = 0
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }

    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(5))
console.log(add10(-8))
console.log(add10(-9))


// closures challenge

const tipper = (percent) => {
    return (amount) => {
        return amount * percent
    }
}

ben = tipper(.10)
jos = tipper(.3)
console.log(ben(100))
console.log(jos(100))