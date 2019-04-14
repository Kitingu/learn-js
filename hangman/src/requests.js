const getPuzzle = async (wordCount) => {

    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {

        data = await response.json()
        return data.puzzle

    }
    else {
        throw new Error('puzzle could not be fetched')
    }

}


const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        return data.find(country => country.alpha2Code === countryCode)
    }
    else {
        throw new Error('Unable to fetch a country')
    }
}



const getLocation = async () => {
    const response = await fetch("://ipinfo.io/json?token=9abccb200d16ef")
    if (response.status === 200) {
        return response.json()
    }
    else {
        throw new Error("can't fetch ip info at the moment")
    }
}


const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}