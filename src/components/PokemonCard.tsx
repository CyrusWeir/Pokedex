function PokemonCard() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemon = pokemonList[1]
  return pokemon.imgSrc !== undefined ? <><img src={pokemon.imgSrc} alt={pokemon.name}></img><figcaption>{pokemon.name}</figcaption></> :
    <><p>???</p> <figcaption>{pokemon.name}</figcaption> </>

 
} export default PokemonCard;