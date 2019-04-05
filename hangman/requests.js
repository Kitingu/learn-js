const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        }
        else {
            throw new Error('puzzle could not be fetched')
        }

    })
}

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find(country => country.alpha2Code === countryCode)
            resolve(country)

        }
        else if (e.target.readyState === 4) {
            reject('An error has occured', undefined)
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
})
