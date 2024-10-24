interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}
function Nav({ pokemonList, setPokemonIndex, pokemonIndex }: NavBarProps) {
	// const [pokemonIndex, setPokemonIndex] = useState(0);

	const handleClick1 = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	const handleClick2 = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	return (
		<div>
			{pokemonIndex > 0 ? (
				<button type="button" onClick={handleClick2}>
					previous
				</button>
			) : (
				<></>
			)}

			{pokemonIndex < pokemonList.length ? (
				<button type="button" onClick={handleClick1}>
					Next
				</button>
			) : (
				<></>
			)}
		</div>
	);
}

export default Nav;
