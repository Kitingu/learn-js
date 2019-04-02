// callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback( 'this time is the data',undefined)

    }, 2000)
}


getDataCallback((error, data) => {
    if (error) {
console.log('error')
    }
    else {
        console.log(data)
    }
})

//promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this time is the promise data')
        reject('this is the promise error')
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
},
    (error) => {
        console.log(error)
    }) 