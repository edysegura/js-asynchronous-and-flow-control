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

async function showNames(endpointList) {
  const fetchData = endpointList.map(requestHandler)
  const fetchedData = await Promise.all(fetchData)
  console.log(fetchedData.map(data => data.name))
}

showNames(endpointList)
