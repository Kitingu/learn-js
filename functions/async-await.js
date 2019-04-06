const getPromiseData = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('number must be provided')
        resolve(`this is the promise data: ${num}`)
        // reject('this is the promise error')
    }, 2000)
})



const processData = async () => {
    let data = await getPromiseData(2)
    data = await getPromiseData(data)
    data = await getPromiseData(data)
    data = await getPromiseData(data)
    return data
}

// console.log(processData())
processData().then(('data', data => {
    console.log(data)
})).catch((error) => {
    console.log('Error: ', error)
})

// async functions always return a promise