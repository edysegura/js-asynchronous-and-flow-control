/**
* API: https://pokeapi.co/api/v2/pokemon
*
* Output:
* [
*  {
*    name: "bulbasaur",
*    types: [
*      "grass",
*      "poison"
*    ]
*  },
* ]
*
*/

import axios from 'axios'

async function getPokemonData(pokeId) {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokeId}`
  const response = await axios.get(endpoint)
  return response.data.name
}

console.log(await getPokemonData(1))