import axios from 'axios'

function buildEndpoints() {
  const baseEndpoint = 'https://pokeapi.co/api/v2/pokemon'
  const endpoints = [
    `${baseEndpoint}/4`,
    `${baseEndpoint}/5`,
    `${baseEndpoint}/6`,
  ]
  return endpoints
}

async function fetchData(endpoint) {
  const response = await axios.get(endpoint)
  return response.data
}

async function listSelectedPokemon() {
  const promises = buildEndpoints().map(fetchData)
  for await (const data of promises) {
    console.log(data.name)
  }
}

listSelectedPokemon()
