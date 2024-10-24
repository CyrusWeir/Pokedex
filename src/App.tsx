import './App.css'
import { useState } from 'react'

import PokemonCard from "./components/PokemonCard";


const pokemonList = [ {
  name: "bulbasaur",
  imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
},
{
  name: "charmander",
  imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
},
{
  name: "squirtle",
  imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
},
{
  name: "pikachu",
  imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
},
{
  name: "mew",
},
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick1 = () => {
    setPokemonIndex(pokemonIndex+1)
  }

  const handleClick2 = () => {
    setPokemonIndex(pokemonIndex-1)
  }
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
      {pokemonIndex > 0 ? <button type="button" onClick={handleClick2}>previous</button> : <></>}
      
      {pokemonIndex < pokemonList.length ? <button type="button" onClick={handleClick1}>Next</button> : <></>}
    </div>
  )
}

export default App;