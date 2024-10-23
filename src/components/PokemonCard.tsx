interface pokemonCardProps {
  pokemon: {
  name: string,
  imgSrc?: string
}
}

function PokemonCard({ pokemon }:pokemonCardProps) {
  console.log(pokemon)


  return pokemon.imgSrc !== undefined ? <><img src={pokemon.imgSrc} alt={pokemon.name}></img><figcaption>{pokemon.name}</figcaption></> :
    <><p>???</p> <figcaption>{pokemon.name}</figcaption> </>

 
} export default PokemonCard; 