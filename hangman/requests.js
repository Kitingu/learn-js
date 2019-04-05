const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        }
        else {
            throw new Error('puzzle could not be fetched')
        }

    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        }
        else {
            throw new Error('Unable to fetch a country')
        }
    }).then((data) => {
        return data.find(country => country.alpha2Code === countryCode)

    })
}
1

const getLocation = () => {
    return fetch("http://ipinfo.io/json?token=9abccb200d16ef").then((response) => {
        if (response.status === 200) {
            return response.json()
        }
        else {
            throw new Error("can't fetch ip info at the moment")
        }
    })
}