const countries = require('./countries')

const searchQuery = process.argv[2]

const filterCountries = (countries, query) => {
  return countries.filter(country => {
    return country.name.toLowerCase().includes(query.toLowerCase())
  })
}

const filteredCountries = filterCountries(countries, searchQuery)

console.table(filteredCountries)
