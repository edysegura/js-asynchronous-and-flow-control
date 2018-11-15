const fetch = require('node-fetch')

const baseEndpoint = 'https://swapi.co/api/people'
const endpointList = [
  `${baseEndpoint}/1/`,
  `${baseEndpoint}/6/`,
  `${baseEndpoint}/12/`,
  `${baseEndpoint}/20/`
]

const requestHandler = endpoint => {
  return new Promise(resolve => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => resolve(data))
  })
}

function showNames(endpointList) {
  const fetchData = endpointList.map(requestHandler)
  Promise.all(fetchData)
    .then(fetchedData => fetchedData.map(data => data.name))
    .then(characters => console.log(characters))
}

showNames(endpointList)
