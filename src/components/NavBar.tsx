interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: pokemon[];
}
interface pokemon {
	name: string;
	imgSrc?: string;
}

function Nav({ pokemonList, setPokemonIndex, pokemonIndex }: NavBarProps) {
	const handleClick = (pokemonName: string) => {
		const index = pokemonList.findIndex(
			(pokemon) => pokemon.name === pokemonName,
		);
		setPokemonIndex(index);
	};

	// const handleClick2 = () => {
	// 	setPokemonIndex(pokemonIndex - 1);
	// };
	return (
		<div>
			{pokemonList.map((pokemon) => (
				<button key={pokemon.name} onClick={() => handleClick(pokemon.name)}>
					{pokemon.name}
				</button>
			))}
		</div>
	);
}

export default Nav;
