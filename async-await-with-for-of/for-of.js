import axios from 'axios'

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

async function listSelectedPokemon() {
  const promises = endpoints.map(fetchData)
  for await (const data of promises) {
    console.log(data.name)
  }
}

listSelectedPokemon()
