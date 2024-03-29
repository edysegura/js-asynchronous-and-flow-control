/**
 * APIs:
 * - https://pokeapi.co/api/v2/pokemon/{pokeId}
 * - https://pokeapi.co/api/v2/pokemon-species/{specieId}
 * - https://pokeapi.co/api/v2/evolution-chain/{evolutionChainId}
 *
 * Output:
 * [
 *  {
 *    "name": "bulbasaur",
 *    "types": [
 *      "grass",
 *      "poison"
 *    ],
 *    "envolvesTo": "ivysaur"
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

const responses = await Promise.allSettled([
  getPokemonData(1),
  getPokemonData(2),
  getPokemonData(3),
  Promise.reject('this should fail!'),
  getPokemonData(4),
  getPokemonData(5),
  getPokemonData(6),
])

console.table(responses)
