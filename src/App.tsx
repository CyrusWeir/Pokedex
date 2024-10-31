import "./App.css";
import { useState } from "react";
import Nav from "./components/NavBar";
import { useEffect } from "react";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
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
	useEffect (
		() => {
			alert("Welcome, Pokémon trainer 🙇‍♂️")
		},
		[]
	);
	// const handleClick1 = () => {
	//   setPokemonIndex(pokemonIndex+1)
	// }

	// const handleClick2 = () => {
	//   setPokemonIndex(pokemonIndex-1)

	return (
		<div>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />

			<Nav
				pokemonList={pokemonList}
				pokemonIndex={pokemonIndex}
				setPokemonIndex={setPokemonIndex}
				pokemon={pokemonList[pokemonIndex]}
			/>
		</div>
	);
}

export default App;
