const fetch = require('node-fetch')

const endpoints = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3'
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