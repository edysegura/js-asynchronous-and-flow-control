const fetch = require('node-fetch')

const baseEndpoint = 'https://jsonplaceholder.typicode.com/todos'
const endpoints = [
  `${baseEndpoint}/2`,
  `${baseEndpoint}/3`,
  `${baseEndpoint}/1`,
]

async function fetchData(endpoint) {
  const response = await fetch(endpoint)
  const json = await response.json()
  return json
}

async function getTodos() {
  const promises = endpoints.map(fetchData)
  const results = await Promise.all(promises)

  console.log('Finished!')
  console.log('Results', results)
}

getTodos()