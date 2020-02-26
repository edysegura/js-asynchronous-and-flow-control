const fetch = require('node-fetch')

const baseEndpoint = 'https://swapi.co/api/people'
const endpointList = [
  `${baseEndpoint}/1/`,
  `${baseEndpoint}/6/`,
  `${baseEndpoint}/12/`,
  `${baseEndpoint}/20/`
]

const requestHandler = async endpoint => {
  const response = await fetch(endpoint)
  const data = await response.json()
  return data
}

async function showNames(endpointList) {
  const requests = endpointList.map(requestHandler)
  const responses = await Promise.all(requests)
  const characters = responses.map(data => data.name)
  console.log(characters)
}

showNames(endpointList)
