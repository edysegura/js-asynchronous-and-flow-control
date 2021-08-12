import axios from 'axios'

const baseEndpoint = 'https://jsonplaceholder.typicode.com/todos'
const endpoints = [
  `${baseEndpoint}/2`,
  `${baseEndpoint}/3`,
  `${baseEndpoint}/1`,
  `${baseEndpoint}/4`,
]

async function fetchData(endpoint) {
  const response = await axios.get(endpoint)
  return response.data
}

async function getAll() {
  const promises = endpoints.map(fetchData)
  const results = await Promise.allSettled(promises)

  console.log('Finished!')
  console.table(results)
}

getAll()
