const axios = require('axios')

const baseEndpoint = 'https://swapi.co/api/people'
const endpointList = [
  `${baseEndpoint}/1/`,
  `${baseEndpoint}/6/`,
  `${baseEndpoint}/12/`,
  `${baseEndpoint}/20/`
]

const requestHandler = endpoint => {
  return new Promise(async resolve => {
    const response = await axios.get(endpoint)
    resolve(response.data)
  })
}

async function showNames(endpointList) {
  const fetchData = endpointList.map(requestHandler)
  const fetchedData = await Promise.all(fetchData)
  const characters = fetchedData.map(data => data.name)
  console.log(characters)
}

showNames(endpointList)
