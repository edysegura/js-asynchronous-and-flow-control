const fetch = require('node-fetch')

const baseEndpoint = 'https://swapi.co/api/people'
const endpointList = [
  `${baseEndpoint}/1/`,
  `${baseEndpoint}/6/`,
  `${baseEndpoint}/12/`,
  `${baseEndpoint}/20/`
]

const requestHandler = endpoint => {
  return new Promise(async resolve => {
    const response = await fetch(endpoint)
    const data = await response.json()
    resolve(data)
  })
}

<<<<<<< HEAD
async function showNames(endpointList) {
  const fetchData = endpointList.map(requestHandler)
  const fetchedData = await Promise.all(fetchData)
  const characters = fetchedData.map(data => data.name)
  console.log(characters)
=======
function showNames(endpointList) {
  const fetchData = endpointList.map(requestHandler)
  Promise.all(fetchData)
    .then(fetchedData => fetchedData.map(data => data.name))
    .then(characters => console.log(characters))
>>>>>>> Added example with promises
}

showNames(endpointList)
