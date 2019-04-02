// callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('this time is the data', undefined)

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

const getPromiseData = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`this is the promise data: ${data}`)
        // reject('this is the promise error')
    }, 2000)
})


const myPromise = getPromiseData("kasee")
myPromise.then((data) => {
    console.log(data)
},
    (error) => {
        console.log(error)
    }) 