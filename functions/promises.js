// callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        }
        else
            callback('Number must be provided', undefined)

    }, 2000)
}


getDataCallback(2, (error, data) => {
    if (error) {
        console.log('error')
    }
    else {
        getDataCallback(data, (error, data) => {
            if (error) {
                console.log('error')
            }
            else {
                console.log(data)
            }
        })
    }
})

//promise

const getPromiseData = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('number must be provided')
        resolve(`this is the promise data: ${num}`)
        // reject('this is the promise error')
    }, 2000)
})

// promises no chaining
getPromiseData(2).then((data) => {
    getPromiseData(data).then((data) => {
        console.log(`promise data : ${data}`)
    }, (error) => {
        console.log(error)
    })
}, (error) => {
    console.log(error)
})

// promise chaining
getPromiseData('10').then((data) => {
    return getPromiseData(data)
}).then((data) => {
    return getPromiseData(data)
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})
