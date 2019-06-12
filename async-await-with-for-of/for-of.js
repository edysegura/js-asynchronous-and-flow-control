const axios = require('axios')

const baseEndpoint = 'https://pokeapi.co/api/v2/pokemon'
const endpoints = [
  `${baseEndpoint}/1`,
  `${baseEndpoint}/2`,
  `${baseEndpoint}/3`,
]

async function fetchData(endpoint) {
  const response = await axios.get(endpoint)
  return response.data
}

async function listSelectedPokemons() {
  for (const endpoint of endpoints) {
    const data = await fetchData(endpoint)
    console.log(data.name)
  }
}

listSelectedPokemons()