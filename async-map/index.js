const fetch = require('node-fetch')

const list = [
  'https://swapi.co/api/people/1/',
  'https://swapi.co/api/people/6/',
  'https://swapi.co/api/people/12/',
  'https://swapi.co/api/people/20/'
]

const requestHandler = endpoint => {
  return new Promise(async resolve => {
    const response = await fetch(endpoint)
    const data = await response.json()
    resolve(data)
  })
}

const fetchedData = list.map(requestHandler)

Promise.all(fetchedData).then(data => {
  console.log(data.map(people => people.name))
})
