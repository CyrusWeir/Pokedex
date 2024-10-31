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
		if (pokemonName === "pikachu") {
			alert("pika pikachu !!");
		}

		setPokemonIndex(index);
	};

	return (
		<div>
			{pokemonList.map((pokemon) => (
				<button
					type="button"
					key={pokemon.name}
					onClick={() => handleClick(pokemon.name)}
				>
					{pokemon.name}
				</button>
			))}
		</div>
	);
}
export default Nav;
