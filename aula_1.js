/* Base */
const paises = require('./countries')

const search = process.argv[2]

/* return fruits.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1); */

const filtro_search = f => f.name == search

const chamar_filter = paises.filter(filtro_search)

console.table(chamar_filter)
